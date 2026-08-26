const fs=require('fs'),path=require('path');
const {Document,Packer,Paragraph,TextRun,HeadingLevel,AlignmentType,ImageRun,Header,Footer,PageNumber,Table,TableRow,TableCell,WidthType,BorderStyle}=require('docx');
const REPO='/home/user/Former-Teachers';
const HEAD='04629A',CITE='0563C1',FONT='Garamond';

// ---- inline rendering: bold, italics, superscripts and blue citations ----
const CITE_RE=/(\([^()]*\b\d{4}[a-z]?\b[^()]*\)|\b[A-Z][A-Za-z'’À-ſ-]+(?:,\s[A-Z][A-Za-z'’À-ſ-]+)*(?:\sand\s[A-Z][A-Za-z'’À-ſ-]+|\set\sal\.)?\s\(\d{4}[a-z]?\))/g;
function plainRuns(t,base={}){return [new TextRun({text:t,...base})];}
function runs(t,base={}){
 const out=[];
 for(const seg of t.split(/(\^\d+)/g).filter(Boolean)){
  if(/^\^\d+$/.test(seg)){out.push(new TextRun({text:seg.slice(1),superScript:true,...base}));continue;}
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
const h1=t=>new Paragraph({heading:HeadingLevel.HEADING_1,spacing:{before:340,after:200},children:[new TextRun({text:t,bold:true,color:HEAD,size:30})]});
const h2=t=>new Paragraph({heading:HeadingLevel.HEADING_2,spacing:{before:260,after:140},children:[new TextRun({text:t,bold:true,color:HEAD,size:25})]});

function render(lines,imgDir){const out=[];let buf=[];let tbl=null;
 const flush=()=>{if(buf.length){out.push(body(buf.join(' ')));buf=[];}};
 for(const ln of lines){const t=ln.trim();
  if(t.startsWith('![')){flush();
    const f=path.basename(t.match(/\((.+)\)/)[1]);
    out.push(new Paragraph({alignment:AlignmentType.CENTER,spacing:{before:120,after:120},
      children:[new ImageRun({type:'png',data:fs.readFileSync(path.join(imgDir,f)),transformation:{width:600,height:380}})]}));continue;}
  if(/^# /.test(t)){flush();out.push(h1(t.slice(2)));continue;}
  if(/^## /.test(t)){flush();out.push(h2(t.slice(3)));continue;}
  if(/^(Note|Source):/.test(t)){flush();out.push(body(t,{run:{size:17},after:60}));continue;}
  if(/^- /.test(t)){flush();out.push(new Paragraph({children:plainRuns(t.slice(2),{size:20}),spacing:{after:70},indent:{left:280,hanging:280}}));continue;}
  if(/^\d+[a-z]?\. /.test(t)){flush();out.push(new Paragraph({children:inline(t,{size:20}),spacing:{after:70},indent:{left:280,hanging:280}}));continue;}
  if(/^\|/.test(t)){flush();(tbl=tbl||[]).push(splitRow(t));continue;}
  if(tbl&&!/^\|/.test(t)){out.push(mkTable(tbl));tbl=null;}
  if(t===''){flush();continue;}
  buf.push(t);}
 if(tbl)out.push(mkTable(tbl));
 flush();return out;}

function mkDoc(children,footerText){return new Document({styles:{default:{document:{run:{font:FONT,size:23}}}},
 sections:[{properties:{page:{margin:{top:1417,bottom:1417,left:1417,right:1417}}},
  headers:{default:new Header({children:[new Paragraph({alignment:AlignmentType.RIGHT,children:[new TextRun({children:[PageNumber.CURRENT],size:18,color:'595959'})]})]})},
  footers:{default:new Footer({children:[new Paragraph({alignment:AlignmentType.CENTER,children:[new TextRun({text:footerText,size:16,color:'595959'})]})]})},
  children}]});}

// ---------- Document 1: the chapter in the OECD paper frame ----------
const s2=fs.readFileSync(path.join(REPO,'drafts/v10/s2_en.md'),'utf8').split('\n');
const s2Text=s2.join('\n');const cut=s2Text.indexOf('## Notes');const mainLines=s2Text.slice(0,cut).split('\n');const tailLines=s2Text.slice(cut).split('\n');const chapterChildren=[
 new Paragraph({spacing:{after:80},children:[new TextRun({text:'FORMER TEACHERS: BARRIERS, INCENTIVES AND POLICY LESSONS FOR RE-ENTRY',bold:true,size:32,color:HEAD})]}),
 new Paragraph({spacing:{after:360},children:[new TextRun({text:'OECD Education Policy Perspectives — working draft, August 2026',size:22,color:'595959'})]}),
 h1('1. Introduction'),
 ...render(mainLines,path.join(REPO,'drafts/v10')),
 h1('3. The policies'),
 h1('4. Conclusions'),
 ...render(tailLines,path.join(REPO,'drafts/v10')),
];
// the s2 file already opens with "# 2. Why teachers leave"

// ---------- Document 2: the idea list ----------
const ideas=`# La lista de ideas de la Sección 2
## Aprobadas — introducción de la sección
1. Las políticas de reatracción han de fundarse en los motivos de salida y responder a ellos.
2. Las salidas se agrupan a grandes rasgos en tres rutas (dimisión hacia otro empleo, salida del mercado laboral, jubilación); cada una responde a instrumentos distintos. La etiqueta se nombra una sola vez.
3. El peso de cada motivo varía entre sistemas con las instituciones que lo gobiernan (pensiones y edad de acceso, retribución relativa, derecho efectivo a reducir jornada, permisos y reserva del puesto, inspección, habilitación).
4. Los motivos se agrupan en seis áreas; la evidencia se reparte de forma desigual: causal para salario, pensiones e inspección; salidas observadas para liderazgo y conducta del alumnado; casi solo declarada para sentido profesional, estatus y familia.
## Aprobadas — patrones de salida
5. Las tasas van de ~2% (Israel, Irlanda, Francia, Grecia) a ~12% (Lituania, Dinamarca); media OCDE 6,5% en 2022/23 (EAG 2025, tabla D8.4).
6. El abandono se concentra en los primeros años y de nuevo cerca de la jubilación (Guarino et al., 2006).
7. Las condiciones del centro se asocian con el abandono con más fuerza que las características del docente (Nguyen et al., 2020); el apoyo de la dirección pesa más que los recursos; Inglaterra: el factor de liderazgo reduce a la mitad la probabilidad anual de salir; Nueva York: mejoras dentro del mismo centro acompañan menor rotación.
8. Los motivos declarados no siempre coinciden con los que predicen la salida observada; es la brecha entre preferencias declaradas y reveladas (Samuelson, 1938).
## Aprobadas — clasificación
9. La literatura no emplea una clasificación única (push/pull; vida del docente / centro / normas generales).
10. Este trabajo ordena los motivos en seis áreas, por ámbito y autoridad con capacidad de intervenir (Tabla 1).
## Aprobadas — las razones
11. Preguntados en abierto, el motivo más frecuente es la pérdida de compromiso con el trabajo (Finlandia; sin cifras hasta verificar; más hombres que mujeres).
12. El deterioro del estatus y la exposición a denuncias empujan a salir en algunos sistemas (Corea: 869 a 6 594 jubilaciones anticipadas, 2005-2021).
13. La carga de trabajo es el motivo más declarado en casi todos los países (Países Bajos, 47%).
14. El margen legal para reducir jornada varía enormemente (Países Bajos frente a Japón e Inglaterra). Pendiente: gráfico o tabla.
15. Inglaterra, enlace TALIS-censo: la disciplina del centro predice la salida y las horas declaradas no; una desviación típica de mejora reduce a la mitad la probabilidad anual (Sims y Jerrim, 2020). Con nota al pie desarrollada.
17. El liderazgo es el factor más veces asociado al abandono y de los más difíciles de aislar (Kraft et al., 2016).
18. Los profesores jóvenes tienen una mayor probabilidad de permanecer en su centro si reciben mentoría por parte de un profesor mayor durante el inicio de su carrera (Nguyen et al., 2020; Walker et al., 2024).
19. Seguir enseñando es comparar lo que el puesto ofrece con la mejor opción externa del propio docente; ésta varía por materia, titulación y mercado local.
19a. Pagos dirigidos reducen la salida entre 9% y 23% (Inglaterra, Florida, Carolina del Norte, Noruega).
19b. El efecto dura mientras dura el pago (See et al., 2020).
19c. Las trayectorias salariales tras la salida difieren sistemáticamente según el destino: dentro del sector, variaciones pequeñas; fuera, distribución con colas gruesas por ambos extremos; la cola superior en hombres y especialidades con escasez.
20. En la mayoría de los regímenes de pensiones, jubilarse antes de la edad que fija la norma reduce la pensión y jubilarse más tarde apenas la aumenta; las jubilaciones se concentran en torno a esa edad.
20a. La riqueza pensional crece despacio, muy deprisa justo antes de la edad de pensión completa y casi nada después (Costrell y Podgursky, 2009; generaliza en regímenes DB de 17 países; los sistemas NDC/DC son casi neutrales).
20b. Los docentes anticipan estos incentivos; las jubilaciones se concentran en las edades a partir de las cuales retirarse deja de estar penalizado (Ni y Podgursky, 2016).
21. El ingreso vital tiene dos partes, salario presente y pensión futura; la pensión retiene solo en la medida en que el docente la valore hoy, y esa valoración y el coste de financiarla no tienen por qué coincidir (Fitzpatrick, 2015; Ni, Podgursky y Wang, 2022; Koedel y Xiang, 2017; Quinby y Wettstein, 2021).
22. Cuando jubilarse antes de la edad fijada conlleva un recorte de la pensión, los docentes posponen la jubilación (Francia 2003, Baraton, Beffy y Fougère, 2011; Países Bajos, Montizaan et al., 2010; Alemania 2001 como ilustración descriptiva).
23. El nacimiento de un hijo es uno de los principales motivos de salida de las docentes (Inglaterra, censo de plantilla; modelo estructural de Stinebrickner; sin estimación causal en la OCDE).
23b. La duración del permiso de maternidad retribuido y de la reserva del puesto varía considerablemente entre países (España frente a Estados Unidos).
24. La proporción entre salidas voluntarias y jubilaciones varía mucho entre países; la tesis de que la jubilación es un componente menor es anglófona y no generaliza (EAG 2025, tabla D8.4).
## Aprobadas — preferencias declaradas y reveladas
25. Quienes dejan la profesión declaran carga y circunstancias personales como motivos principales y sitúan el salario en posiciones intermedias; quienes se plantean marcharse lo sitúan entre los primeros; las decisiones observadas responden con fuerza a las variaciones salariales.
26. Muchos más docentes declaran que van a dejar la profesión de los que la dejan; por cada tres o cuatro que declaran querer irse se va uno (Nguyen et al., 2025).
## Aprobado provisional — sin revisar
28. La mayoría de quienes dejan la docencia sigue trabajando en el sector educativo; los antiguos docentes son localizables a través de registros de empleadores y reguladores.
29. La población de antiguos docentes es grande allí donde se ha contado y el recuento bruto sobreestima la reserva utilizable; lo que una oferta de retorno puede esperar depende del motivo de la salida (Michigan; Países Bajos; Escocia).
## Eliminadas
5b. Rotación entre centros frente a salida de la profesión.
16. Los marcadores fisiológicos.
27. La inspección como idea propia.
Nota al pie de la 18 (ensayos sobre permanencia en la profesión).`;
const ideasChildren=render(ideas.split('\n'),REPO);

const outDir=path.join(REPO,'build');
Packer.toBuffer(mkDoc(chapterChildren,'FORMER TEACHERS — DRAFT, AUGUST 2026')).then(b=>{
 fs.writeFileSync(path.join(outDir,'Former_Teachers_Section2.docx'),b);console.log('WROTE chapter',b.length);
 return Packer.toBuffer(mkDoc(ideasChildren,'FORMER TEACHERS — LISTA DE IDEAS DE LA SECCIÓN 2, AGOSTO 2026'));
}).then(b=>{
 fs.writeFileSync(path.join(outDir,'Former_Teachers_Section2_ideas.docx'),b);console.log('WROTE ideas',b.length);
});
