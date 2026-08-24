const fs=require('fs'),path=require('path');
const {Document,Packer,Paragraph,TextRun,HeadingLevel,AlignmentType,ImageRun,Header,Footer,PageNumber}=require('docx');
const D='/tmp/claude-0/-home-user-Former-Teachers/a24edd69-63fe-5960-a606-96920452dc5a/scratchpad/drafts/v9';
const BLUE='04629A',FONT='Garamond';
const s2=fs.readFileSync(path.join(D,'s2_v2.md'),'utf8').split('\n');
const sk=fs.readFileSync(path.join(D,'SKELETON.md'),'utf8').split('\n');
function inline(t,base={}){const out=[];for(const p of t.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).filter(Boolean)){
 if(/^\*\*[^*]+\*\*$/.test(p))out.push(new TextRun({text:p.slice(2,-2),bold:true,...base}));
 else if(/^\*[^*]+\*$/.test(p))out.push(new TextRun({text:p.slice(1,-1),italics:true,...base}));
 else out.push(new TextRun({text:p,...base}));}return out;}
const body=(t,o={})=>new Paragraph({children:inline(t,o.run||{}),alignment:o.align||AlignmentType.JUSTIFIED,spacing:{after:o.after??160,line:264}});
function render(lines,{mono=false}={}){const out=[];let buf=[];
 const flush=()=>{if(buf.length){out.push(body(buf.join(' ')));buf=[];}};
 for(const ln of lines){const t=ln.trim();
  if(t.startsWith('![')){flush();
    const f=t.match(/\((.+)\)/)[1];
    out.push(new Paragraph({alignment:AlignmentType.CENTER,spacing:{before:120,after:120},
      children:[new ImageRun({data:fs.readFileSync(path.join(D,f)),transformation:{width:600,height:380}})]}));continue;}
  if(/^# /.test(t)){flush();out.push(new Paragraph({heading:HeadingLevel.HEADING_1,spacing:{before:300,after:200},children:[new TextRun({text:t.slice(2),bold:true,color:BLUE,size:32})]}));continue;}
  if(/^## /.test(t)){flush();out.push(new Paragraph({heading:HeadingLevel.HEADING_2,spacing:{before:260,after:140},children:[new TextRun({text:t.slice(3),bold:true,color:BLUE,size:26})]}));continue;}
  if(/^(Note|Source):/.test(t)){flush();out.push(new Paragraph({children:inline(t,{size:17}),spacing:{after:60}}));continue;}
  if(/^- /.test(t)){flush();out.push(new Paragraph({children:inline(t.slice(2),mono?{size:19}:{}),spacing:{after:70},indent:{left:280}}));continue;}
  if(t===''){flush();continue;}
  buf.push(t);}
 flush();return out;}
const doc=new Document({styles:{default:{document:{run:{font:FONT,size:23}}}},
 sections:[{properties:{page:{margin:{top:1417,bottom:1417,left:1417,right:1417}}},
  headers:{default:new Header({children:[new Paragraph({alignment:AlignmentType.RIGHT,children:[new TextRun({children:[PageNumber.CURRENT],size:18,color:'595959'})]})]})},
  footers:{default:new Footer({children:[new Paragraph({alignment:AlignmentType.CENTER,children:[new TextRun({text:'FORMER TEACHERS — SECTION 2 DRAFT AND PAPER SKELETON, AUGUST 2026',size:16,color:'595959'})]})]})},
  children:[
   new Paragraph({spacing:{after:80},children:[new TextRun({text:'FORMER TEACHERS: BARRIERS, INCENTIVES AND POLICY LESSONS FOR RE-ENTRY',bold:true,size:30,color:BLUE})]}),
   new Paragraph({spacing:{after:320},children:[new TextRun({text:'Draft of Section 2, with the skeleton of the paper',size:24,color:'595959'})]}),
   ...render(sk,{mono:true}),
   new Paragraph({pageBreakBefore:true,spacing:{after:0},children:[]}),
   ...render(s2)]}]});
Packer.toBuffer(doc).then(b=>{const o=path.join(__dirname,'Former_Teachers_Section2_draft.docx');fs.writeFileSync(o,b);console.log('WROTE',o,b.length);});
