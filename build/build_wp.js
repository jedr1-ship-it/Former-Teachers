const fs=require('fs'),path=require('path');
const {Document,Packer,Paragraph,TextRun,HeadingLevel,AlignmentType,ImageRun,Header,Footer,PageNumber,Table,TableRow,TableCell,WidthType,BorderStyle,TableOfContents,FootnoteReferenceRun,PageBreak}=require('docx');
const REPO='/home/user/Former-Teachers';
const HEAD='04629A',CITE='0563C1',FONT='Garamond';

const CITE_RE=/(\([^()]*\b\d{4}[a-z]?\b[^()]*\)|\b[A-Z][A-Za-z'’À-ſ-]+(?:,\s[A-Z][A-Za-z'’À-ſ-]+)*(?:\sand\s[A-Z][A-Za-z'’À-ſ-]+|\set\sal\.)?\s\(\d{4}[a-z]?\))/g;
function plainRuns(t,base={}){return [new TextRun({text:t,...base})];}
function runs(t,base={}){
 const out=[];
 for(const seg of t.split(/(\^\d+)/g).filter(Boolean)){
  if(/^\^\d+$/.test(seg)){out.push(new FootnoteReferenceRun(parseInt(seg.slice(1))));continue;}
  for(const p of seg.split(CITE_RE).filter(Boolean)){
   if(CITE_RE.test(p)&&/\d{4}/.test(p)){CITE_RE.lastIndex=0;out.push(new TextRun({text:p,color:CITE,...base}));}
   else{CITE_RE.lastIndex=0;out.push(new TextRun({text:p,...base}));}
  }
 }
 return out;
}
function inline(t,base={}){const out=[];
 for(const p of t.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).filter(Boolean)){
  if(/^\*\*[^*]+\*\*$/.test(p))out.push(...runs(p.slice(2,-2),{bold:true,...base}));
  else if(/^\*[^*]+\*$/.test(p))out.push(...runs(p.slice(1,-1),{italics:true,...base}));
  else out.push(...runs(p,base));}
 return out;}
const body=(t,o={})=>new Paragraph({children:inline(t,o.run||{}),alignment:o.align||AlignmentType.JUSTIFIED,spacing:{after:o.after??160,line:264},indent:o.indent});
const splitRow=t=>t.replace(/^\||\|$/g,'').split('|').map(x=>x.trim());
function mkTable(rows){const hdr=rows[0],bodyRows=rows.slice(2);
 const cell=(t,h)=>new TableCell({children:[new Paragraph({children:inline(t,{size:17,bold:!!h}),spacing:{after:40}})],
   shading:h?{fill:'E8EEF4'}:undefined,margins:{top:60,bottom:60,left:80,right:80}});
 return new Table({width:{size:100,type:WidthType.PERCENTAGE},
   borders:{top:{style:BorderStyle.SINGLE,size:6,color:'888888'},bottom:{style:BorderStyle.SINGLE,size:6,color:'888888'},
            left:{style:BorderStyle.NONE},right:{style:BorderStyle.NONE},
            insideHorizontal:{style:BorderStyle.SINGLE,size:2,color:'CCCCCC'},insideVertical:{style:BorderStyle.NONE}},
   rows:[new TableRow({children:hdr.map(h=>cell(h,true))}),
         ...bodyRows.map(r=>new TableRow({children:r.map(c=>cell(c,false))}))]});}
const h1=(t,pb)=>new Paragraph({heading:HeadingLevel.HEADING_1,pageBreakBefore:!!pb,spacing:{before:pb?0:340,after:220},children:[new TextRun({text:t,bold:true,color:HEAD,size:30,font:FONT})]});
const h2=t=>new Paragraph({heading:HeadingLevel.HEADING_2,spacing:{before:260,after:140},children:[new TextRun({text:t,bold:true,color:HEAD,size:25,font:FONT})]});
const placeholder=t=>new Paragraph({children:[new TextRun({text:t,italics:true,color:'8C8C8C'})],spacing:{after:200}});

function render(lines,imgDir){const out=[];let buf=[];let tbl=null;
 const flush=()=>{if(buf.length){out.push(body(buf.join(' ')));buf=[];}};
 for(const ln of lines){const t=ln.trim();
  if(t.startsWith('![')){flush();
    const f=path.basename(t.match(/\((.+)\)/)[1]);
    out.push(new Paragraph({alignment:AlignmentType.CENTER,spacing:{before:120,after:120},
      children:[new ImageRun({type:'png',data:fs.readFileSync(path.join(imgDir,f)),transformation:{width:600,height:380}})]}));continue;}
  if(/^# /.test(t)){flush();out.push(h1(t.slice(2),true));continue;}
  if(/^## /.test(t)){flush();out.push(h2(t.slice(3)));continue;}
  if(/^(Note|Source):/.test(t)){flush();out.push(body(t,{run:{size:17},after:60}));continue;}
  if(/^- /.test(t)){flush();out.push(new Paragraph({children:plainRuns(t.slice(2),{size:20}),spacing:{after:70},indent:{left:280,hanging:280}}));continue;}
  if(/^\|/.test(t)){flush();(tbl=tbl||[]).push(splitRow(t));continue;}
  if(tbl&&!/^\|/.test(t)){out.push(mkTable(tbl));tbl=null;}
  if(t===''){flush();continue;}
  buf.push(t);}
 if(tbl)out.push(mkTable(tbl));
 flush();return out;}

// ---- parse the chapter: body / notes / references ----
const raw=fs.readFileSync(path.join(REPO,'drafts/v10/s2_en_v3.md'),'utf8');
const notesStart=raw.indexOf('## Notes');
const refsStart=raw.indexOf('## References');
const bodyMd=raw.slice(0,notesStart);
const notesMd=raw.slice(notesStart,refsStart);
const refsMd=raw.slice(refsStart);

// footnotes dict
const footnotes={};
for(const ln of notesMd.split('\n')){
 const m=ln.trim().match(/^(\d+)\.\s+(.*)$/);
 if(m)footnotes[parseInt(m[1])]={children:[new Paragraph({children:inline(m[2],{size:18}),spacing:{after:60},alignment:AlignmentType.JUSTIFIED})]};
}

const IMG=path.join(REPO,'drafts/v10');
const children=[
 // ---------- cover ----------
 new Paragraph({spacing:{before:200,after:60},children:[new TextRun({text:'OECD EDUCATION WORKING PAPERS  No. [XX]',size:22,color:'595959'})]}),
 new Paragraph({spacing:{after:60},border:{bottom:{style:BorderStyle.SINGLE,size:8,color:HEAD}},children:[new TextRun({text:' ',size:8})]}),
 new Paragraph({spacing:{before:2200,after:200},children:[new TextRun({text:'Former Teachers: Barriers, Incentives and Policy Lessons for Re-entry',bold:true,size:52,color:HEAD})]}),
 new Paragraph({spacing:{after:1200},children:[new TextRun({text:'[Author name(s)], Directorate for Education and Skills',size:26,color:'404040'})]}),
 new Paragraph({spacing:{after:120},children:[new TextRun({text:'WORKING DRAFT — August 2026',size:24,color:'595959'})]}),
 new Paragraph({spacing:{after:0},children:[new TextRun({text:'[Document code]  ·  [JT code]',size:20,color:'8C8C8C'})]}),
 // ---------- disclaimer page ----------
 new Paragraph({pageBreakBefore:true,spacing:{before:400,after:200},children:[new TextRun({text:'OECD Education Working Papers',bold:true,size:26,color:HEAD})]}),
 placeholder('[Series disclaimer: This series is designed to make available to a wider readership selected studies drawn from the work of the OECD Directorate for Education and Skills…]'),
 placeholder('[Opinions disclaimer: The opinions expressed and arguments employed herein are those of the author(s) and do not necessarily reflect the official views of the OECD or of its member countries.]'),
 placeholder('[Territorial disclaimers]'),
 placeholder('[Copyright notice — © OECD 2026 — Attribution 4.0 International (CC BY 4.0)]'),
 placeholder('[Comments on Working Papers are welcome and may be sent to: edu.contact@oecd.org]'),
 // ---------- abstract ----------
 h1('Abstract',true),
 placeholder('[Abstract — fewer than 150 words, followed by Keywords and JEL codes.]'),
 h1('Résumé'),
 placeholder('[Résumé en français.]'),
 // ---------- acknowledgements ----------
 h1('Acknowledgements',true),
 placeholder('[Acknowledgements to colleagues, reviewers and data providers.]'),
 // ---------- table of contents ----------
 h1('Table of contents',true),
 new TableOfContents('Table of contents',{hyperlink:true,headingStyleRange:'1-2'}),
 // ---------- sections ----------
 h1('1. Introduction',true),
 placeholder('Pendiente de escribir (al final de todo).'),
 ...render(bodyMd.split('\n'),IMG),
 ...render(refsMd.split('\n'),IMG),
];

const doc=new Document({
 features:{updateFields:true},
 styles:{default:{document:{run:{font:FONT,size:23}}}},
 footnotes,
 sections:[{properties:{page:{margin:{top:1417,bottom:1417,left:1417,right:1417}}},
  headers:{default:new Header({children:[new Paragraph({alignment:AlignmentType.RIGHT,children:[new TextRun({text:'FORMER TEACHERS — WORKING DRAFT  |  ',size:16,color:'8C8C8C'}),new TextRun({children:[PageNumber.CURRENT],size:16,color:'8C8C8C'})]})]})},
  footers:{default:new Footer({children:[new Paragraph({alignment:AlignmentType.CENTER,children:[new TextRun({text:'FOR OFFICIAL USE — DRAFT, NOT FOR CIRCULATION',size:16,color:'8C8C8C'})]})]})},
  children}]});

Packer.toBuffer(doc).then(b=>{
 const o=path.join(REPO,'build','Former_Teachers_WorkingPaper.docx');
 fs.writeFileSync(o,b);console.log('WROTE',o,b.length);
});
