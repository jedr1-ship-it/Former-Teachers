// Build the Former Teachers working paper as .docx in the measured OECD EDU WP aesthetic
// (Garamond body, heading blue #4E81BD, cream boxes #EEECE1, table headers #D2D2D2).
const fs = require('fs');
const path = require('path');
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  HeadingLevel, AlignmentType, WidthType, BorderStyle, ShadingType,
  Header, Footer, PageNumber, TableOfContents, LevelFormat, PageBreak,
  VerticalAlign,
} = require('docx');

const DIR = __dirname;
const BLUE = '4E81BD';
const OECD_BLUE = '04629A';
const GREEN = '8CC841';
const CREAM = 'EEECE1';
const GREY = 'D2D2D2';
const PAGE_W = 9072; // usable width in DXA at 2.5cm margins on A4
const FONT = 'Garamond';

const paperMd = fs.readFileSync(path.join(DIR, 'paper_integrated.md'), 'utf8').split('\n');
const refsMd = fs.readFileSync(path.join(DIR, 'references.md'), 'utf8').split('\n');

// ---------- inline markdown -> TextRun[] ----------
function inline(text, base = {}) {
  const runs = [];
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).filter(p => p !== '');
  for (const p of parts) {
    if (/^\*\*[^*]+\*\*$/.test(p)) runs.push(new TextRun({ text: p.slice(2, -2), bold: true, ...base }));
    else if (/^\*[^*]+\*$/.test(p)) runs.push(new TextRun({ text: p.slice(1, -1), italics: true, ...base }));
    else runs.push(new TextRun({ text: p, ...base }));
  }
  return runs;
}

const bodyPara = (text, opts = {}) => new Paragraph({
  children: inline(text, opts.run || {}),
  alignment: opts.align || AlignmentType.JUSTIFIED,
  spacing: { after: opts.after ?? 160, line: 264, lineRule: 'auto' },
  ...(opts.para || {}),
});

const noteLine = (text) => new Paragraph({
  children: inline(text, { size: 18 }),
  alignment: AlignmentType.LEFT,
  spacing: { after: 60 },
});

// ---------- GFM table -> docx Table ----------
function buildTable(rows) {
  const header = rows[0];
  const body = rows.slice(2); // row 1 is the --- separator
  const nCols = header.length;
  // Allocate width by typical content length, floored so no column crushes words.
  const longestWord = (s) => s.split(/\s+/).reduce((m, w) => Math.max(m, w.length), 0);
  // Compress the demand of text-heavy columns (sqrt) so narrow columns keep
  // enough room for their longest word, which is what stops mid-word breaks.
  const metric = Array.from({ length: nCols }, (_, i) => {
    const cells = [header[i] || '', ...body.map(r => r[i] || '')];
    const avgLen = cells.reduce((s, c) => s + c.length, 0) / cells.length;
    const maxWord = cells.reduce((m, c) => Math.max(m, longestWord(c)), 0);
    return Math.max(Math.sqrt(avgLen) * 6, maxWord * 2.0, 12);
  });
  const totalMetric = metric.reduce((a, b) => a + b, 0);
  const widths = metric.map(m => Math.floor(PAGE_W * m / totalMetric));
  widths[0] += PAGE_W - widths.reduce((a, b) => a + b, 0); // absorb rounding
  const cellSize = nCols >= 6 ? 16 : nCols === 5 ? 18 : 20;
  const noB = { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' };
  const rule = { style: BorderStyle.SINGLE, size: 6, color: '000000' };

  const mkRow = (cells, isHeader, isLast) => new TableRow({
    tableHeader: isHeader,
    children: cells.map((c, i) => new TableCell({
      width: { size: widths[i], type: WidthType.DXA },
      shading: isHeader ? { type: ShadingType.CLEAR, fill: GREY } : undefined,
      verticalAlign: VerticalAlign.CENTER,
      borders: {
        top: isHeader ? rule : noB,
        bottom: (isHeader || isLast) ? rule : noB,
        left: noB, right: noB,
      },
      margins: { top: 40, bottom: 40, left: 60, right: 60 },
      children: [new Paragraph({
        children: inline(c, { size: cellSize, bold: isHeader || undefined }),
        alignment: i === 0 ? AlignmentType.LEFT : AlignmentType.LEFT,
        spacing: { after: 0 },
      })],
    })),
  });

  return new Table({
    columnWidths: widths,
    width: { size: PAGE_W, type: WidthType.DXA },
    rows: [
      mkRow(header, true, false),
      ...body.map((r, i) => mkRow(r, false, i === body.length - 1)),
    ],
  });
}

const splitRow = (line) => line.replace(/^\s*\|/, '').replace(/\|\s*$/, '').split('|').map(c => c.trim());

// ---------- box -> single-cell table ----------
function buildBox(lines) {
  const blueB = { style: BorderStyle.SINGLE, size: 6, color: BLUE };
  const children = [];
  let paraBuf = [];
  const flush = () => {
    if (!paraBuf.length) return;
    const text = paraBuf.join(' ');
    paraBuf = [];
    if (/^\*\*Box [\d.]+/.test(text)) {
      const t = text.replace(/^\*\*(.+?)\*\*$/, '$1');
      children.push(new Paragraph({
        children: [new TextRun({ text: t, bold: true, color: BLUE, size: 23 })],
        spacing: { after: 140 },
      }));
      boxList.push(t);
    } else if (/^(Source|Note):/.test(text)) {
      children.push(new Paragraph({ children: inline(text, { size: 18 }), spacing: { after: 40 } }));
    } else {
      children.push(new Paragraph({
        children: inline(text, { size: 22 }),
        alignment: AlignmentType.JUSTIFIED,
        spacing: { after: 120, line: 252, lineRule: 'auto' },
      }));
    }
  };
  for (const ln of lines) {
    if (ln.trim() === '') flush(); else paraBuf.push(ln.trim());
  }
  flush();
  return new Table({
    columnWidths: [PAGE_W],
    width: { size: PAGE_W, type: WidthType.DXA },
    rows: [new TableRow({
      children: [new TableCell({
        width: { size: PAGE_W, type: WidthType.DXA },
        shading: { type: ShadingType.CLEAR, fill: CREAM },
        borders: { top: blueB, bottom: blueB, left: blueB, right: blueB },
        margins: { top: 160, bottom: 120, left: 200, right: 200 },
        children,
      })],
    })],
  });
}

// ---------- parse the integrated paper ----------
const tableList = [];
const boxList = [];
let abstract = [], resume = [], takeaways = [];
const bodyBlocks = []; // {type, ...}

{
  let mode = null; // 'abstract' | 'resume' | 'take' | 'body' | null
  let i = 0;
  let paraBuf = [];
  let boxBuf = null;
  let tableBuf = null; // {caption, rows, notes}
  const flushPara = () => {
    if (!paraBuf.length) return;
    const text = paraBuf.join(' ').trim();
    paraBuf = [];
    if (!text) return;
    if (mode === 'abstract') abstract.push(text);
    else if (mode === 'resume') resume.push(text);
    else if (mode === 'body') bodyBlocks.push({ type: 'p', text });
  };
  const flushTable = () => {
    if (!tableBuf) return;
    bodyBlocks.push({ type: 'table', ...tableBuf });
    tableList.push(tableBuf.caption);
    tableBuf = null;
  };

  for (; i < paperMd.length; i++) {
    const ln = paperMd[i];
    const t = ln.trim();

    if (t === '## REFERENCES USED' || t === '# References') break;

    if (boxBuf !== null) {
      if (t === ':::') { bodyBlocks.push({ type: 'box', lines: boxBuf }); boxBuf = null; }
      else boxBuf.push(ln);
      continue;
    }
    if (tableBuf && /^\|/.test(t)) { tableBuf.rows.push(splitRow(t)); continue; }
    if (tableBuf && /^(Note|Source):/.test(t)) { tableBuf.notes.push(t); continue; }
    if (tableBuf && t === '' ) { if (tableBuf.rows.length) flushTable(); continue; }
    if (tableBuf) flushTable();

    if (t === '# Abstract') { flushPara(); mode = 'abstract'; continue; }
    if (t === '# Résumé' || t === '# Resume') { flushPara(); mode = 'resume'; continue; }
    if (/^# Key take-aways/i.test(t)) { flushPara(); mode = 'take'; continue; }
    if (/^# \d+\./.test(t)) { flushPara(); mode = 'body'; bodyBlocks.push({ type: 'h1', text: t.slice(2) }); continue; }
    if (/^## /.test(t)) { flushPara(); bodyBlocks.push({ type: 'h2', text: t.slice(3) }); continue; }
    if (/^### /.test(t)) { flushPara(); bodyBlocks.push({ type: 'h3', text: t.slice(4) }); continue; }
    if (t === ':::box') { flushPara(); boxBuf = []; continue; }
    if (/^\*\*Table [\d.]+/.test(t)) { flushPara(); tableBuf = { caption: t.replace(/^\*\*(.+?)\*\*$/, '$1'), rows: [], notes: [] }; continue; }
    if (/^(Note|Source):/.test(t) && mode === 'body') { flushPara(); bodyBlocks.push({ type: 'note', text: t }); continue; }
    if (/^- /.test(t)) {
      flushPara();
      if (mode === 'take') takeaways.push(t.slice(2));
      else bodyBlocks.push({ type: 'bullet', text: t.slice(2) });
      continue;
    }
    if (t === '') { flushPara(); continue; }
    paraBuf.push(t);
  }
  flushPara(); flushTable();
}

// ---------- references ----------
const refEntries = [];
for (const ln of refsMd) {
  const t = ln.trim();
  if (/^- /.test(t)) refEntries.push(t.slice(2));
}

// ---------- assemble document children ----------
const TITLE = 'Former Teachers: Barriers, Incentives and Policy Lessons for Re-entry';
const band = (color, h) => new Table({
  columnWidths: [PAGE_W],
  width: { size: PAGE_W, type: WidthType.DXA },
  rows: [new TableRow({
    height: { value: h, rule: 'exact' },
    children: [new TableCell({
      width: { size: PAGE_W, type: WidthType.DXA },
      shading: { type: ShadingType.CLEAR, fill: color },
      borders: { top: { style: BorderStyle.NONE, size: 0, color }, bottom: { style: BorderStyle.NONE, size: 0, color }, left: { style: BorderStyle.NONE, size: 0, color }, right: { style: BorderStyle.NONE, size: 0, color } },
      children: [new Paragraph('')],
    })],
  })],
});

const cover = [
  band(OECD_BLUE, 520),
  band(GREEN, 160),
  new Paragraph({ spacing: { before: 2200 }, children: [new TextRun({ text: 'WORKING PAPER', size: 24, allCaps: true, color: '595959', characterSpacing: 40 })] }),
  new Paragraph({ spacing: { before: 300 }, children: [new TextRun({ text: TITLE, bold: true, size: 52, color: OECD_BLUE })] }),
  new Paragraph({ spacing: { before: 400 }, children: [new TextRun({ text: '[Author names]', size: 28 })] }),
  new Paragraph({ spacing: { before: 120 }, children: [new TextRun({ text: 'Universidad de Alicante', size: 24, color: '595959' })] }),
  new Paragraph({ spacing: { before: 120 }, children: [new TextRun({ text: 'August 2026', size: 24, color: '595959' })] }),
  new Paragraph({ spacing: { before: 2600 }, children: [new TextRun({ text: 'Draft for discussion and comment.', size: 20, italics: true, color: '595959' })] }),
];

const disclaimer = [
  new Paragraph({ pageBreakBefore: true, spacing: { after: 300 }, children: [new TextRun({ text: 'WORKING PAPER SERIES', bold: true, size: 24, color: BLUE })] }),
  bodyPara('This working paper presents preliminary research and analysis for discussion and comment. The opinions expressed and the arguments employed herein are those of the author(s) alone and do not necessarily reflect the official views of any institution with which they are affiliated.'),
  bodyPara('The paper follows the structure, citation conventions and presentational style of the OECD Education Working Papers series for ease of comparison with that literature. It is not an OECD publication, has not been reviewed or endorsed by the OECD, and should not be reported as representing the views of the OECD or of its member countries.'),
  bodyPara('Comments on this draft are welcome and may be sent to the authors.'),
];

const acknowledgements = [
  new Paragraph({ pageBreakBefore: true, heading: HeadingLevel.HEADING_1, children: [new TextRun('Acknowledgements')] }),
  bodyPara('[This working paper was prepared by the authors for the Former Teachers project. Acknowledgements to colleagues, reviewers and data providers to be added before circulation.]', { run: { italics: true, color: '595959' } }),
];

const abstractBlock = [
  new Paragraph({ pageBreakBefore: true, heading: HeadingLevel.HEADING_1, children: [new TextRun('Abstract')] }),
  ...abstract.map(p => bodyPara(p)),
  new Paragraph({ spacing: { before: 300 }, heading: HeadingLevel.HEADING_1, children: [new TextRun('Résumé')] }),
  ...resume.map(p => bodyPara(p)),
];

const tocBlock = [
  new Paragraph({ pageBreakBefore: true, children: [new TextRun({ text: 'Table of contents', bold: true, size: 28, color: BLUE })], spacing: { after: 240 } }),
  new TableOfContents('Table of contents', { hyperlink: true, headingStyleRange: '1-2' }),
  new Paragraph({ spacing: { before: 360, after: 120 }, children: [new TextRun({ text: 'TABLES', bold: true, size: 21, color: BLUE })] }),
  ...tableList.map(c => new Paragraph({ children: [new TextRun({ text: c, size: 21 })], spacing: { after: 60 } })),
  new Paragraph({ spacing: { before: 240, after: 120 }, children: [new TextRun({ text: 'BOXES', bold: true, size: 21, color: BLUE })] }),
];

// Key take-aways full-page box
function takeawaysBox() {
  const blueB = { style: BorderStyle.SINGLE, size: 8, color: BLUE };
  const children = [
    new Paragraph({ children: [new TextRun({ text: 'Key Take-Aways', bold: true, color: BLUE, size: 28 })], spacing: { after: 200 } }),
    ...takeaways.map(t => new Paragraph({
      children: inline(t, { size: 22 }),
      numbering: { reference: 'bullets', level: 0 },
      alignment: AlignmentType.JUSTIFIED,
      spacing: { after: 120, line: 252, lineRule: 'auto' },
    })),
  ];
  return [
    new Paragraph({ pageBreakBefore: true, spacing: { after: 0 }, children: [] }),
    new Table({
      columnWidths: [PAGE_W],
      width: { size: PAGE_W, type: WidthType.DXA },
      rows: [new TableRow({
        children: [new TableCell({
          width: { size: PAGE_W, type: WidthType.DXA },
          shading: { type: ShadingType.CLEAR, fill: CREAM },
          borders: { top: blueB, bottom: blueB, left: blueB, right: blueB },
          margins: { top: 200, bottom: 160, left: 220, right: 220 },
          children,
        })],
      })],
    }),
  ];
}

// body blocks -> docx children
const bodyChildren = [];
for (const b of bodyBlocks) {
  if (b.type === 'h1') bodyChildren.push(new Paragraph({ pageBreakBefore: true, heading: HeadingLevel.HEADING_1, children: inline(b.text) }));
  else if (b.type === 'h2') bodyChildren.push(new Paragraph({ heading: HeadingLevel.HEADING_2, children: inline(b.text) }));
  else if (b.type === 'h3') bodyChildren.push(new Paragraph({ heading: HeadingLevel.HEADING_3, children: inline(b.text) }));
  else if (b.type === 'p') bodyChildren.push(bodyPara(b.text));
  else if (b.type === 'bullet') bodyChildren.push(new Paragraph({ children: inline(b.text), numbering: { reference: 'bullets', level: 0 }, alignment: AlignmentType.JUSTIFIED, spacing: { after: 100 } }));
  else if (b.type === 'note') bodyChildren.push(noteLine(b.text));
  else if (b.type === 'table') {
    bodyChildren.push(new Paragraph({ children: [new TextRun({ text: b.caption, bold: true, color: BLUE, size: 23 })], spacing: { before: 200, after: 120 }, keepNext: true }));
    bodyChildren.push(buildTable(b.rows));
    b.notes.forEach(n => bodyChildren.push(noteLine(n)));
    bodyChildren.push(new Paragraph({ spacing: { after: 120 }, children: [] }));
  } else if (b.type === 'box') {
    bodyChildren.push(buildBox(b.lines));
    bodyChildren.push(new Paragraph({ spacing: { after: 160 }, children: [] }));
  }
}

const refChildren = [
  new Paragraph({ pageBreakBefore: true, heading: HeadingLevel.HEADING_1, children: [new TextRun('References')] }),
  ...refEntries.map(e => new Paragraph({
    children: inline(e, { size: 21 }),
    indent: { left: 567, hanging: 567 },
    spacing: { after: 120 },
    alignment: AlignmentType.LEFT,
  })),
];

// finish TOC boxes list (boxList fills while building boxes, so build body first — reorder)
const tocBoxes = boxList.map(c => new Paragraph({ children: [new TextRun({ text: c, size: 21 })], spacing: { after: 60 } }));

const footerText = 'FORMER TEACHERS: BARRIERS, INCENTIVES AND POLICY LESSONS FOR RE-ENTRY — WORKING PAPER, AUGUST 2026';
const mkFooter = () => new Footer({
  children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: footerText, size: 16, allCaps: true, color: '595959' })] })],
});
const mkHeader = () => new Header({
  children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ children: [PageNumber.CURRENT], size: 18, color: '595959' })] })],
});

const doc = new Document({
  features: { updateFields: true },
  numbering: {
    config: [{
      reference: 'bullets',
      levels: [{ level: 0, format: LevelFormat.BULLET, text: '•', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 360, hanging: 240 } } } }],
    }],
  },
  styles: {
    default: {
      document: { run: { font: FONT, size: 23, color: '000000' } },
    },
    paragraphStyles: [
      { id: 'Heading1', name: 'Heading 1', basedOn: 'Normal', next: 'Normal', quickFormat: true,
        run: { font: FONT, size: 40, bold: true, color: BLUE },
        paragraph: { spacing: { before: 240, after: 300 }, outlineLevel: 0 } },
      { id: 'Heading2', name: 'Heading 2', basedOn: 'Normal', next: 'Normal', quickFormat: true,
        run: { font: FONT, size: 28, bold: true, color: BLUE },
        paragraph: { spacing: { before: 280, after: 160 }, outlineLevel: 1 } },
      { id: 'Heading3', name: 'Heading 3', basedOn: 'Normal', next: 'Normal', quickFormat: true,
        run: { font: FONT, size: 23, bold: true, color: BLUE },
        paragraph: { spacing: { before: 220, after: 120 }, outlineLevel: 2 } },
    ],
  },
  sections: [
    { // cover + disclaimer: no header/footer
      properties: { page: { margin: { top: 1417, bottom: 1417, left: 1417, right: 1417 } } },
      children: [...cover, ...disclaimer],
    },
    { // everything else, numbered from 1
      properties: {
        page: { margin: { top: 1417, bottom: 1417, left: 1417, right: 1417 }, pageNumbers: { start: 1 } },
      },
      headers: { default: mkHeader() },
      footers: { default: mkFooter() },
      children: [
        ...acknowledgements.map((c, i) => i === 0 ? new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun('Acknowledgements')] }) : c),
        ...abstractBlock,
        ...tocBlock,
        ...tocBoxes,
        ...takeawaysBox(),
        ...bodyChildren,
        ...refChildren,
      ],
    },
  ],
});

Packer.toBuffer(doc).then(buf => {
  const out = path.join(DIR, 'Former_Teachers_Working_Paper.docx');
  fs.writeFileSync(out, buf);
  console.log('WROTE', out, buf.length, 'bytes');
  console.log('tables:', tableList.length, '| boxes:', boxList.length, '| refs:', refEntries.length, '| takeaways:', takeaways.length, '| body blocks:', bodyBlocks.length);
});
