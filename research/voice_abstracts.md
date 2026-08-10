# Voice study: OECD abstracts and executive summaries

**Scope of this slice.** Twelve abstracts from five OECD education series, all opened and read in full, plus four executive summaries and one Education at a Glance chapter summary. Every quotation below was copied from a document I downloaded and extracted myself; nothing here is from memory.

**Sources and how they were obtained.** All PDFs were downloaded with `curl` from `oecd.org/content/dam/...` and text-extracted with `pdftotext`. Note on method: `WebFetch` returns HTTP 403 for `oecd.org` and `oecd-ilibrary.org` HTML landing pages and cannot parse OECD PDFs, so the *PDF itself* is the source for every item. For the two OECD Education Working Papers I also cross-checked the abstract against the RePEc/EconPapers record, which reproduces the publisher's official abstract; the RePEc text for WP No. 347 is word-for-word identical to the PDF, which validates the extraction.

Local copies: `epp_teachersupport.pdf`, `wp347_second_career.pdf`, `wp342_altpathways.pdf`, `wp235_cpl.pdf`, `wp213_wellbeing.pdf`, `epp122_digital.pdf`, `epp_digitalres.pdf`, `teachers_time.pdf`, `epo2024.pdf`, `epo2025.pdf`, `talis2024.pdf`, `eag2025.pdf` — all in this directory. Counting script: `count_abstracts.py`.

---

## HEADLINE FINDINGS, STATED UP FRONT

Three of the lead author's charges meet the corpus with three different results.

| Charge | Verdict against the corpus |
|---|---|
| (1) "Opening by motivating everything with teacher shortages is wrong" | **Contradicted.** 4 of 12 abstracts open on a supply/recruitment pressure, including *both* of the two publications closest to our topic. |
| (2) "Cases must be demoted to evidence; sell general conclusions" | **Strongly confirmed — more strongly than he claimed.** 0 of 12 abstracts name a single country. Not one. |
| (3) "OECD papers don't put numbers in abstracts and introductions the way we did" | **Confirmed for abstracts, with one instructive exception.** 8 of 8 working papers and policy perspectives contain zero substantive statistics. Exactly 1 of 12 abstracts states a finding as a number. |

The deeper finding, which resolves all three: **OECD abstracts state the claim in words and let the number arrive afterwards, in a later sentence or a later document layer.** The claim is never carried by the number. This is visible at every level — sentence, section, and document.

---

## PART 1 — THE TWELVE ABSTRACTS, IN FULL

### A1. OECD Education Policy Perspectives — "Teacher support for student learning: Insights from PISA"
OECD (2025), *Teacher support for student learning: Insights from PISA*, OECD Education Policy Perspectives, OECD Publishing, Paris. Drafted by Daniel Salinas. **Locator: p. 1, under the heading "Abstract".**

> "This policy paper examines the support teachers provide for students in mathematics lessons, drawing on data from the Programme for International Student Assessment (PISA) 2022 and earlier cycles. This policy paper highlights key trends and identifies specific school contexts, teacher practices and student characteristics associated with increased teacher support for students. Overall, teacher support has declined over the past decade (2012-2022) in most participating education systems. This paper aims to address the question of how education systems can reverse this trend and enhance teacher support for students. Doing so requires an understanding of the conditions and practices that allow teachers to effectively address the diverse learning needs of their students. This analysis provides insights and recommendations to guide efforts to enhance teacher support, with the aim to inform policy discussions and address the decline in teacher support observed since 2012."

### A2. OECD Education Working Papers No. 347 — "A second career in teaching"
Maarse, J., C. Kohlloffel, S. de Berardinis and J.M. Torres (2026), *A second career in teaching: Exploring practices and evidence for training, supporting and retaining second-career teachers*, OECD Education Working Papers No. 347, OECD Publishing, Paris, https://dx.doi.org/10.1787/37722003-en. Dated 2026-07-16. **Locator: p. 3, under the heading "Abstract".**

> "Recruitment difficulties, changing career patterns and growing classroom diversity have prompted many OECD education systems to look beyond traditional Initial Teacher Education to recruit experienced professionals from other fields. This working paper synthesises what is known about these second-career teachers (SCTs). It is structured around six questions: who they are, where they work, how they are prepared and supported, how they integrate into schools, what they contribute, and how they can be retained. Drawing on the international research literature, recent OECD data – including original analysis using a broader definition of SCT than the published the Teaching and Learning International Survey (TALIS) measure – and policy examples from OECD systems, the paper identifies key aspects to support effective preparation, sets out the conditions that shape SCTs' integration and retention, and considers what governments, schools and researchers might do to support this growing share of the teacher workforce."

*(This is the single closest analogue to our paper in the entire OECD catalogue. It is worth reading as a template in its own right.)*

### A3. OECD Education Working Papers No. 342 — "Alternative pathways into teaching"
Schweickert, C. and J.M. Torres (2026), *Alternative pathways into teaching: Broadening access and expanding diversity*, OECD Education Working Papers No. 342, OECD Publishing, Paris, https://dx.doi.org/10.1787/80bfc617-en. **Locator: printed p. 4 (PDF p. 5), under the heading "Abstract".**

> "Teacher shortages, changing labour markets and growing expectations for workforce diversity have led many education systems to expand alternative pathways into the teaching profession. While these pathways are increasingly prominent, they remain highly heterogeneous and difficult to compare across contexts. This working paper provides an international perspective on alternative pathways into teaching, examining their drivers, potential benefits and key challenges. The paper introduces a structured analytical framework that classifies alternative pathways using four criteria: pathway modality, programme oversight, entry requirements and licensure outcomes. This framework enables the systematic mapping and comparison of programmes across systems, clarifying how alternative routes complement traditional initial teacher education. Drawing on comparative evidence, recent TALIS data and case studies from OECD countries, the paper highlights both opportunities – such as expanding teacher supply and recognising prior experience—and challenges related to preparation, quality assurance, equity and sustainability. It concludes by identifying enabling system conditions needed to integrate alternative pathways into coherent, high-quality teacher preparation systems."

### A4. OECD Education Working Papers No. 235 — "Policies to support teachers' continuing professional learning"
Boeskens, L., D. Nusche and M. Yurita (2020), *Policies to support teachers' continuing professional learning: A conceptual framework and mapping of OECD data*, OECD Education Working Papers No. 235, OECD Publishing, Paris, https://dx.doi.org/10.1787/247b7c4d-en. Document code EDU/WKP(2020)23, 20 October 2020. **Locator: printed p. 6, under the heading "Abstract".**

> "While teachers' initial education is key to ensuring that new teachers are prepared for their work, it is only one piece in the continuum of teachers' professional growth. Continuing professional learning is vital for teachers to broaden and deepen their knowledge, keep up with new research, tools and practices and respond to their students' changing needs. It also plays a key role in building collaborative school cultures and supporting the collective improvement of the teaching profession. While the importance of continuing teacher learning is widely recognised, building efficient, equitable and sustainable professional learning systems is far from trivial. The OECD Teachers' Professional Learning (TPL) study seeks to support the development of effective TPL policies and practices in schools and school systems. This paper proposes a theoretical and analytical framework for the study, systematically maps available OECD indicators to this framework and identifies information gaps and areas for future comparative work."

### A5. OECD Education Working Papers No. 213 — "Teachers' well-being"
Viac, C. and P. Fraser (2020), *Teachers' well-being: A framework for data collection and analysis*, OECD Education Working Papers No. 213, OECD Publishing, Paris, https://dx.doi.org/10.1787/c36fc9d3-en. Document code EDU/WKP(2020)1, 27 January 2020. **Locator: printed p. 4, under the heading "Abstract".**

> "Modern education systems evolve in a context of growing teacher shortages, frequent turnover and a low attractiveness of the profession. In such a context where these challenges interrelate, there is an urgent need to better understand the well-being of teachers and its implications on the teaching and learning nexus.
>
> This working paper proposes a comprehensive conceptual framework to analyse teachers' occupational well-being and its linkages with quality teaching.
>
> The core concept of this framework defines teachers' well-being around four key components: physical and mental well-being, cognitive well-being, subjective well-being and social well-being. The framework then explores how working conditions, at both system and school levels, can impact and shape teachers' well-being, both positively and negatively aspects. It also presents two types of expected outcomes regarding teachers' well-being: inward outcomes for teachers in terms of levels of stress and intentions to leave the profession; and outward outcomes on quality teaching in terms of classroom processes and student' well-being. In an annex, the paper proposes an analytical plan on how to analyse teachers' well-being indicators and cross the results with other OECD instruments. It also presents the field trial items of the new module on teachers' well-being which are included in the Programme for International Student Assessment (PISA) 2021 teacher questionnaire."

*(Typographical errors — "both positively and negatively aspects", "student' well-being" — are in the original. The abstract is printed as three paragraphs; that paragraphing is reproduced above.)*

### A6. OECD Education Policy Perspectives No. 122 — "Preparing teachers for digital education"
OECD (2025), "Preparing teachers for digital education: Continuing professional learning on digital skills and pedagogies", OECD Education Policy Perspectives, No. 122, OECD Publishing, Paris, https://doi.org/10.1787/af442d7a-en. **Locator: printed p. 3 (PDF p. 5), under the heading "Abstract".**

> "The effective use of digital resources in schools requires not only technological infrastructure, but also human capacity. Teachers need to be prepared to unlock the potential of education technology, to enhance students' learning outcomes and to protect them from risks in an increasingly digital learning environment. This policy paper discusses how continuing professional learning (CPL) can prepare teachers for these challenging new tasks. Drawing on insights from PISA 2022 and comparative data collected through the Policy Survey on School Education in the Digital Age, this policy paper addresses the following questions: Do teachers have the skills they need for effective digital education? How can CPL support teachers' effective use of digital resources? Which CPL formats are most effective and what mechanisms can help to ensure the quality of CPL for digital education? How can policy makers encourage teachers' professional learning on digital education?"

### A7. OECD Education Policy Perspectives No. 128 — "Teacher policies to support the use of digital resources in the classroom"
OECD (2025), "Teacher policies to support the use of digital resources in the classroom", OECD Education Policy Perspectives, No. 128, OECD Publishing, Paris, https://doi.org/10.1787/d16e9614-en. Prepared by Beatrice Bottura and Luka Boeskens. **Locator: printed p. 2 (PDF p. 4), under the heading "Abstract".**

> "The digital transformation of education presents both opportunities and challenges for teaching practices and teachers' working conditions. While many educators have strengthened their digital competencies in recent years, persistent technical and pedagogical barriers continue to hinder the effective and deliberate integration of digital tools in the classroom. This policy paper was prepared as part of the OECD project "Resourcing School Education: Policies for the Digital Transformation of Education and Future-Readiness of Teachers". It examines how teacher policies can be adapted to better support the profession in navigating this transition. Drawing on insights from PISA 2022 and comparative data from the Policy Survey on School Education in the Digital Age, it addresses the following questions: What forms of central guidance can support teachers' effective use of digital resources? To what extent do professional standards and appraisal frameworks reflect the evolving digital education landscape? How can technology alleviate teachers' workload and optimise their use of time? Do staff roles and career structures need to be reshaped to enhance schools' digital capacity? Which mechanisms can ensure that teachers receive ongoing technical assistance and support in maintaining digital resources? The paper offers evidence-informed insights for policy makers seeking to strengthen teacher policies to build resilient, future-ready digital education systems."

### A8. OECD Education Policy Perspectives No. 29 — "Making the most of teachers' time"
OECD (2021), "Making the most of teachers' time", OECD Education Policy Perspectives, No. 29, OECD Publishing, Paris, https://doi.org/10.1787/d005c027-en. **Locator: p. 1, the abstract box printed immediately under the title.**

> "Teachers' time is a critical resource for education systems and a key input for student learning. Like any type of resource, teachers' time can be allocated more or less effectively to promote positive outcomes for students. How school systems regulate teachers' working time reflects diverse conceptions of the role of teachers and different strategies for making the most of their time. The COVID-19 pandemic and the rise of remote and hybrid teaching environments in 2020 have further increased the complexity and diversity of tasks that compete for teachers' time. The pandemic context has also tested the capacity of school systems to adapt provisions for teachers' use of time quickly in response to changing conditions. Building on the findings from the OECD School Resources Review series and data from the Teaching and Learning International Survey (TALIS), this Policy Brief presents policies and practices that can promote an effective use of teachers' time by exploring the following questions:
>
> - What do we know about teachers' effective use of time?
> - How to balance regulations and flexibility to encourage an effective use of time?
> - How to define core tasks and support teachers in prioritising them?
> - Can technology help teachers use their time more effectively?"

### A9. Education Policy Outlook 2024
OECD (2024), *Education Policy Outlook 2024: Reshaping Teaching into a Thriving Profession from ABCs to AI*, OECD Publishing, Paris, https://doi.org/10.1787/dd5140e4-en. PDF ISBN 978-92-64-38589-4. **Locator: back cover, PDF p. 147 (the publication abstract).**

> "Teacher shortages have intensified across several OECD countries, making this an urgent priority for education systems. Between 2015 and 2022, the share of students whose principals reported shortages rose from 29% to 46.7% on average across the OECD. Simultaneously, rapid technological advances, such as artificial intelligence (AI), and broader socio‑economic shifts, increase the need to support teachers in delivering quality education in evolving contexts. Addressing both the number of teachers and ensuring they possess the skills to meet new educational needs is essential for student success. This report presents a policy roadmap to help education systems balance the supply and demand for quality teaching in these changing times. Drawing on responses from 33 education systems to the Education Policy Outlook National Survey for Comparative Analysis, as well as additional evidence, the report outlines current challenges and key factors in their interplay. It also explores policy responses to attract, retain, and develop teachers, enhancing their teaching practices and professional learning. In doing so, the report aims to support countries in advancing the goals set by the 2022 OECD Declaration on Building Equitable Societies Through Education. This report is part of the Education Policy Outlook series – the OECD's analytical observatory of education policy."

### A10. Education Policy Outlook 2025
OECD (2025), *Education Policy Outlook 2025: Nurturing Engaged and Resilient Lifelong Learners in a World of Digital Transformation*, OECD Publishing, Paris, https://doi.org/10.1787/c3f402ba-en. PDF ISBN 978-92-64-78402-4. **Locator: back cover, PDF p. 156.**

> "Lifelong learning is essential for building inclusive, resilient and future‑ready societies. Yet, rapid digitalisation and demographic shifts are changing how, when and why people learn throughout life. This report explores how countries and economies can strengthen individuals' agency as lifelong learners, supporting people to take an active role in identifying, acquiring and applying new knowledge and skills across diverse contexts. It views lifelong learners as individuals who mobilise their will, skills and means to keep learning and adapting. The report identifies four critical life moments when individuals are particularly open to learning – or at risk of disengagement – and when well‑targeted policy support can make the greatest difference: early childhood, mid‑to‑late adolescence, mid‑career and approaching retirement. Drawing on analysis of 230 policies across 35 education systems, as well as international evidence and policy developments, the report explores how countries design and implement lifelong learning policies. In doing so, the report aims to support countries in advancing the goals set by the 2022 OECD Declaration on Building Equitable Societies Through Education. This publication is part of the Education Policy Outlook series – the OECD's analytical observatory of education policy."

### A11. Results from TALIS 2024
OECD (2025), *Results from TALIS 2024: The State of Teaching*, TALIS, OECD Publishing, Paris, https://doi.org/10.1787/90df6235-en. PDF ISBN 978-92-64-86784-0. **Locator: back cover, PDF p. 307.**

> "The OECD Teaching and Learning International Survey (TALIS) is the world's largest survey of teachers and principals. In 2024, educators from 55 education systems provided information about what they do and how they are doing. They explain if and how they use artificial intelligence, why they became teachers and if they wish to continue teaching. Governments use data from TALIS to make policies that improve teaching and learning conditions in their schools."

### A12. Education at a Glance 2025
OECD (2025), *Education at a Glance 2025: OECD Indicators*, OECD Publishing, Paris, https://doi.org/10.1787/1c0d9c79-en. PDF ISBN 978-92-64-81156-0. **Locator: back cover, PDF p. 542.**

> "Education at a Glance is the authoritative source of information on the state of education worldwide. It offers comprehensive data on the structure, financing, and performance of education systems across OECD countries and partner economies. This publication features more than 100 charts and tables that present key insights into the output of educational institutions, the impact of learning across countries, access and participation in education, financial investment in education, and the roles of teachers and school organisation.
>
> The 2025 edition places a special focus on tertiary education, examining attainment rates, variations in labour market outcomes by field of study, completion rates, and the skills of adults with tertiary qualifications. An additional chapter provides results from the Survey of Adult Skills 2023 (PIAAC) and links them to other indicators in the publication."

---

## PART 2 — THE COUNTS

### 2.1 Master table

| # | Publication | Series | Words | Sentences | Digit-bearing tokens | Of which *substantive statistics* | Country names |
|---|---|---|---|---|---|---|---|
| A1 | Teacher support for student learning | Education Policy Perspectives | 140 | 6 | 3 | **0** | **0** |
| A2 | A second career in teaching (WP 347) | Education Working Papers | 147 | 4 | **0** | **0** | **0** |
| A3 | Alternative pathways into teaching (WP 342) | Education Working Papers | 161 | 7 | **0** | **0** | **0** |
| A4 | Teachers' continuing professional learning (WP 235) | Education Working Papers | 150 | 6 | **0** | **0** | **0** |
| A5 | Teachers' well-being (WP 213) | Education Working Papers | 209 | 8 | 1 | **0** | **0** |
| A6 | Preparing teachers for digital education (EPP 122) | Education Policy Perspectives | 143 | 7 | 1 | **0** | **0** |
| A7 | Teacher policies / digital resources (EPP 128) | Education Policy Perspectives | 205 | 10 | 1 | **0** | **0** |
| A8 | Making the most of teachers' time (EPP 29) | Education Policy Perspectives | 199 | 9 | 2 | **0** | **0** |
| A9 | Education Policy Outlook 2024 | Education Policy Outlook | 202 | 9 | 6 | **2** | **0** |
| A10 | Education Policy Outlook 2025 | Education Policy Outlook | 189 | 8 | 3 | **0** | **0** |
| A11 | Results from TALIS 2024 | TALIS | 72 | 4 | 2 | **0** | **0** |
| A12 | Education at a Glance 2025 | EAG | 131 | 5 | 3 | **0** | **0** |
| | **Mean** | | **162** | **6.9** | **1.8** | **0.17** | **0** |

"Substantive statistic" = a numeral that expresses a *finding about the subject matter* (a rate, a share, a magnitude). Excluded: instrument cycle years (PISA 2022, TALIS 2024), calendar years, and scope counts (how many systems/policies/charts the study covers).

### 2.2 Every numeral in every abstract, quoted

There are only 22 digit-bearing tokens across 12 abstracts. Here is all of them, classified.

**Instrument cycle years and calendar years (15 tokens, 0 are findings):**
- A1: `"(PISA) 2022"`, `"over the past decade (2012-2022)"`, `"observed since 2012"`
- A5: `"(PISA) 2021 teacher questionnaire"`
- A6: `"insights from PISA 2022"`
- A7: `"insights from PISA 2022"`
- A8: `"The COVID-19 pandemic"`, `"hybrid teaching environments in 2020"`
- A9: `"Between 2015 and 2022"`, `"the 2022 OECD Declaration"`
- A10: `"the 2022 OECD Declaration"`
- A11: `"In 2024"`
- A12: `"The 2025 edition"`, `"Survey of Adult Skills 2023 (PIAAC)"`

**Scope/coverage counts — how big the evidence base is (5 tokens, 0 are findings):**
- A9: `"Drawing on responses from 33 education systems"`
- A10: `"Drawing on analysis of 230 policies across 35 education systems"`
- A11: `"educators from 55 education systems"`
- A12: `"features more than 100 charts and tables"`

**Substantive statistics — a finding stated as a number (2 tokens, all in one abstract):**
- A9 only: `"the share of students whose principals reported shortages rose from 29% to 46.7% on average across the OECD"`

**The counts that matter:**
- Abstracts with **zero** substantive statistics: **11 of 12**.
- Abstracts with **zero** digit-bearing tokens of any kind: **3 of 12** (A2, A3, A4 — all Education Working Papers).
- Working Papers + Policy Perspectives together (A1–A8, n=8): substantive statistics **0**, scope counts **0**. Numerals appear *only* to name a data collection (PISA 2022) or a year.
- Flagship reports (A9–A12, n=4): all four carry a scope count; only one carries a substantive statistic.

### 2.3 Numbers that ARE used — spelled out as words

Where OECD abstracts do quantify, they quantify the *architecture of the paper*, and they spell it out rather than use a numeral.

- A2 (WP 347): `"It is structured around six questions"`
- A3 (WP 342): `"classifies alternative pathways using four criteria"`
- A5 (WP 213): `"defines teachers' well-being around four key components"` … `"It also presents two types of expected outcomes"`
- A10 (EPO 2025): `"The report identifies four critical life moments"`
- A4 (WP 235): `"it is only one piece in the continuum of teachers' professional growth"`

Total spelled-out numbers: 6, across 5 abstracts. **Numerals are for data; words are for structure.** There is not a single instance in the corpus of a structural count written as a digit ("6 questions", "4 criteria").

### 2.4 Country names

**Zero.** Across 12 abstracts and 1,948 words, not one country, region, state or subnational entity is named. Checked against a 68-name list covering all OECD members plus common partner economies.

This is the strongest single result in the study, and it holds even where the underlying report is saturated with country detail. TALIS 2024's abstract (A11) names no country, while its executive summary two hundred pages earlier names South Africa, Colombia, Viet Nam, Saudi Arabia, Bulgaria, Denmark, Iceland, Australia, Singapore, the United Arab Emirates, Japan, Czechia, Uzbekistan, Brazil, Slovenia, Kazakhstan, Shanghai (China), Latvia, Costa Rica and Lithuania. Likewise, EAG 2025's abstract (A12) names no country while its executive summary names Denmark, England, the Flemish Community of Belgium, Austria, the Netherlands, Sweden, Estonia, France, Greece, Ireland and Chile. **The country names exist; they are simply not allowed into the abstract.**

### 2.5 What the FIRST sentence does — all twelve, together

> - **A1** (EPP Teacher support): "This policy paper examines the support teachers provide for students in mathematics lessons, drawing on data from the Programme for International Student Assessment (PISA) 2022 and earlier cycles."
> - **A2** (WP 347): "Recruitment difficulties, changing career patterns and growing classroom diversity have prompted many OECD education systems to look beyond traditional Initial Teacher Education to recruit experienced professionals from other fields."
> - **A3** (WP 342): "Teacher shortages, changing labour markets and growing expectations for workforce diversity have led many education systems to expand alternative pathways into the teaching profession."
> - **A4** (WP 235): "While teachers' initial education is key to ensuring that new teachers are prepared for their work, it is only one piece in the continuum of teachers' professional growth."
> - **A5** (WP 213): "Modern education systems evolve in a context of growing teacher shortages, frequent turnover and a low attractiveness of the profession."
> - **A6** (EPP 122): "The effective use of digital resources in schools requires not only technological infrastructure, but also human capacity."
> - **A7** (EPP 128): "The digital transformation of education presents both opportunities and challenges for teaching practices and teachers' working conditions."
> - **A8** (EPP 29): "Teachers' time is a critical resource for education systems and a key input for student learning."
> - **A9** (EPO 2024): "Teacher shortages have intensified across several OECD countries, making this an urgent priority for education systems."
> - **A10** (EPO 2025): "Lifelong learning is essential for building inclusive, resilient and future‑ready societies."
> - **A11** (TALIS 2024): "The OECD Teaching and Learning International Survey (TALIS) is the world's largest survey of teachers and principals."
> - **A12** (EAG 2025): "Education at a Glance is the authoritative source of information on the state of education worldwide."

**Classification:**

| Type of first sentence | Count | Which |
|---|---|---|
| States a general claim/proposition about the world | 5 | A4, A6, A7, A8, A10 |
| States a problem or pressure driving the field | 4 | A2, A3, A5, A9 |
| Identifies the instrument or publication (context) | 2 | A11, A12 |
| Describes what the paper does | **1** | A1 |

**Sub-counts that answer the lead author directly:**
- First sentences containing a numeral: **0 of 12.**
- First sentences containing a country name: **0 of 12.**
- First sentences that are about the paper rather than the world: **1 of 12** (A1) — and A1 is the outlier, not the norm.
- **First sentences that motivate the paper with a teacher supply/recruitment pressure: 4 of 12** — A2 ("Recruitment difficulties"), A3 ("Teacher shortages"), A5 ("growing teacher shortages, frequent turnover and a low attractiveness of the profession"), A9 ("Teacher shortages have intensified").

### 2.6 Where the paper's own contribution appears

The "what this paper does" move — the sentence beginning *This working paper…* / *This policy paper…* / *This report…* / *The paper…*.

| Abstract | Contribution sentence | Position | Of total |
|---|---|---|---|
| A1 | "This policy paper examines the support teachers provide…" | **1** | 6 |
| A2 | "This working paper synthesises what is known about these second-career teachers (SCTs)." | **2** | 4 |
| A3 | "This working paper provides an international perspective on alternative pathways into teaching…" | **3** | 7 |
| A4 | "This paper proposes a theoretical and analytical framework for the study…" | **6** | 6 |
| A5 | "This working paper proposes a comprehensive conceptual framework…" | **3** | 8 |
| A6 | "This policy paper discusses how continuing professional learning (CPL) can prepare teachers…" | **3** | 7 |
| A7 | "It examines how teacher policies can be adapted to better support the profession…" | **4** | 10 |
| A8 | "…this Policy Brief presents policies and practices that can promote an effective use of teachers' time…" | **6** | 9 |
| A9 | "This report presents a policy roadmap to help education systems balance the supply and demand…" | **5** | 9 |
| A10 | "This report explores how countries and economies can strengthen individuals' agency…" | **3** | 8 |

Median position: **sentence 3.** Modal position: **sentence 3** (4 of 10). Only one abstract puts it first; two hold it to the end.

**The rule: two to three sentences of general framing, then the paper announces itself.** The reader is told what the world is like before being told what the document is.

### 2.7 What the LAST sentence does

| Abstract | Last sentence | Function |
|---|---|---|
| A1 | "This analysis provides insights and recommendations to guide efforts to enhance teacher support, with the aim to inform policy discussions…" | Payoff for policy |
| A2 | "…the paper identifies key aspects to support effective preparation, sets out the conditions that shape SCTs' integration and retention, and considers what governments, schools and researchers might do…" | Contribution + audience |
| A3 | "It concludes by identifying enabling system conditions needed to integrate alternative pathways into coherent, high-quality teacher preparation systems." | Conclusion preview |
| A4 | "This paper proposes a theoretical and analytical framework…, systematically maps available OECD indicators… and identifies information gaps and areas for future comparative work." | Contribution |
| A5 | "It also presents the field trial items of the new module on teachers' well-being which are included in the… (PISA) 2021 teacher questionnaire." | Instrument detail |
| A6 | "How can policy makers encourage teachers' professional learning on digital education?" | Final guiding question |
| A7 | "The paper offers evidence-informed insights for policy makers seeking to strengthen teacher policies to build resilient, future-ready digital education systems." | Payoff for policy |
| A8 | "Can technology help teachers use their time more effectively?" | Final guiding question |
| A9 | "This report is part of the Education Policy Outlook series – the OECD's analytical observatory of education policy." | Series boilerplate |
| A10 | "This publication is part of the Education Policy Outlook series – the OECD's analytical observatory of education policy." | Series boilerplate |
| A11 | "Governments use data from TALIS to make policies that improve teaching and learning conditions in their schools." | Use / audience |
| A12 | "An additional chapter provides results from the Survey of Adult Skills 2023 (PIAAC)…" | Content note |

**Counts:** payoff for policy 3; contribution/conclusion 3; guiding question 2; boilerplate or content note 4.

**What no last sentence ever does:**
- Contain a substantive statistic: **0 of 12.**
- Name a country: **0 of 12.**
- Restate the problem or end on the crisis: **0 of 12.**
- Issue a recommendation in the imperative ("Governments should…"): **0 of 12.**

Every abstract ends forward-looking and reader-facing: what you get, what it is for, who it is for. The corpus never closes on the wound.

### 2.8 The question-list device

Three of the eight working papers/policy perspectives end by listing the paper's guiding questions verbatim — 13 question marks across the corpus, all in A6, A7 and A8.

> A6: "…this policy paper addresses the following questions: Do teachers have the skills they need for effective digital education? How can CPL support teachers' effective use of digital resources? Which CPL formats are most effective…?" (EPP 122, p. 3)
>
> A8: "…this Policy Brief presents policies and practices that can promote an effective use of teachers' time by exploring the following questions: What do we know about teachers' effective use of time? How to balance regulations and flexibility…?" (EPP 29, p. 1)

This is a live, permitted structure in the Education Policy Perspectives series and a legitimate option for us.

---

## PART 3 — EXECUTIVE SUMMARIES: WHERE THE NUMBERS AND COUNTRIES LIVE

The abstract bans numbers and countries. The executive summary admits both — but under strict discipline: **a section always opens with a general proposition, and the number or the country arrives only after it, as corroboration.**

### 3.1 Every section opens on a general claim, not on evidence

*Results from TALIS 2024*, Executive summary, printed pp. 28–29. All five section-opening sentences:

> "Despite the challenges of the last years, the teaching profession overall is strong." (p. 28, "How teachers are doing")
>
> "Ageing populations and migration patterns have changed the demography of teachers in many education systems." (p. 28, "Responding to a changing environment")
>
> "Demands are a normal part of professional life." (p. 29, "Managing demands")
>
> "The perception that most teachers work alone with dozens of students at a time no longer reflects reality." (p. 29, "Encouraging collaboration")
>
> "Being a novice teacher can be an intimidating experience." (p. 29, "Supporting novice teachers")

Five of five: no numeral, no country. Now the same discipline in a different series:

> "Teacher support is crucial for fostering student achievement, well-being and engagement with learning." — *Teacher support for student learning*, Executive summary, p. 9, opening "Teacher support and student outcomes"
>
> "Highly qualified teachers are essential for high-performing education systems at all levels, but teacher shortages make it harder to recruit and retain well-trained educators." — *Education at a Glance 2025*, Executive summary, p. 19, opening "Tackling teacher shortages to strengthen education systems"
>
> "Many education systems are struggling to balance teacher supply and demand, while facing declining student performance and persistent inequities." — *Education Policy Outlook 2024*, Executive summary, p. 11, opening "The teaching profession today: Understanding the challenge"

### 3.2 The number arrives in sentence two, subordinated to the claim

This is the single most transferable mechanic in the corpus. Two examples from different publications, each showing claim-then-number:

> "Many education systems are struggling to balance teacher supply and demand, while facing declining student performance and persistent inequities. **In 2022, nearly half (47%) of school principals across OECD countries reported that teacher shortages were hindering instruction at the lower secondary level – up from 29% in 2015.**" — *Education Policy Outlook 2024*, Executive summary, p. 11

> "Despite the challenges of the last years, the teaching profession overall is strong. **Almost 90% of teachers are satisfied with their jobs, which is a testament to their resilience and the support they receive.**" — *Results from TALIS 2024*, Executive summary, p. 28

Note the softeners in both: "nearly half (47%)", "Almost 90%". The prose gives the reader the magnitude in words first and the precise figure in parentheses or apposition. The number never has to be parsed for the sentence to land.

### 3.3 Countries arrive third, as illustration of a claim already made

> "Ageing populations and migration patterns have changed the demography of teachers in many education systems. The average age of teachers across the OECD is now 45 and in several systems it is over 50. In response, many governments are recruiting teachers from other sectors to ensure a sustainable supply of qualified educators. **For example, second career teachers are now around 21% of the total teaching population in Iceland and 17% in Australia.**" — *Results from TALIS 2024*, Executive summary, p. 28

> "High teacher turnover can further complicate recruitment. In most countries where data is available, 1% to 3% of teachers retire annually. However, the proportion of teachers leaving the profession for reasons other than retirement varies considerably… **In Denmark, Estonia and England, nearly 10% of teachers resign annually, necessitating a constant high level of recruitment. By contrast, fewer than 1% of teachers in France, Greece and Ireland resign each year…**" — *Education at a Glance 2025*, Executive summary, p. 19

In both, the general claim is complete and standalone; strike the country sentence and the paragraph still says something. That is the test. Countries are marked as evidence by explicit signposts — "For example", "By contrast" — never introduced as the subject of the paragraph.

### 3.4 Section headings state a general finding, never a country

*Education at a Glance 2025* (Executive summary, pp. 18–20):
> "Educational attainment remains high, but unequal opportunities persist" / "Equitable access to education: a key driver of social mobility" / "Improving completion rates in tertiary education" / "Beyond formal credentials: the skills gap challenge" / "Tackling teacher shortages to strengthen education systems"

*Education Policy Outlook 2024* (Executive summary, pp. 11–13):
> "The teaching profession today: Understanding the challenge" / "Addressing teacher shortages" / "Supporting teaching quality in changing contexts" / "Strengthening capacity in evaluation and monitoring"

Ten headings across two publications. Zero contain a country name, a number, or a case study label.

### 3.5 Policy responses are grouped as general mechanisms, not as country stories

The most directly relevant passage in the corpus for our paper — note that it is a taxonomy of *mechanisms*, with re-entry as one item, and no country attached:

> "Policy responses explored in this report to address teacher shortages aim to:
> • Get more teachers into the workforce, by reducing barriers to entering the profession, **supporting re-entry**, addressing targeted shortages, or proposing alternative pathways into the profession.
> • Better allocate teachers to areas of need, by rethinking teams' skill mixes…, increasing mobility within and outside of the profession, or ensuring an equitable distribution of teachers.
> • Make teaching a more attractive profession, by enhancing career structures that support progression, reviewing relative salaries and incentives; or developing campaigns to improve the status of the teaching profession."
> — *Education Policy Outlook 2024*, Executive summary, pp. 11–12

### 3.6 The chapter-summary layer: "Highlights" bullets

At chapter level, Education at a Glance inverts the priority — here the number leads, because the chapter summary's job is to deliver findings, not to frame.

> "Chapter D8. How severe are teacher shortages across countries?
> **Highlights**
> • Based on data from 14 countries and economies with available data, unfilled vacancies for fully qualified teachers at the start of the school year vary in absolute terms, but remain below 3% of all teaching posts in all cases except Austria and Sweden…
> • Across 19 countries and economies with available data, an average of 6.5% of fully qualified teachers from pre-primary to upper secondary education left the profession in 2022/23, with wide variation – from under 3% in France, Greece, Ireland and Israel to over 10% in Denmark, Estonia and Lithuania…
> • There is no single pattern behind teachers leaving the profession: in some countries, resignations dominate; in others, retirements are the main driver. On average, 51% of teachers who left resigned."
> — *Education at a Glance 2025*, printed p. 484

Even here the third bullet leads with the *general* finding ("There is no single pattern") before the numbers. And the accompanying "Context" prose reverts to claim-first:

> "Teacher shortages have become a pressing policy concern in most OECD countries, particularly at the start of the school year. The attractiveness of the profession has declined in some countries, influenced by factors such as relatively low pay, high workloads, administrative burdens, and limited career progression…" — *Education at a Glance 2025*, p. 484

**The layering rule this reveals:** abstract (0 numbers, 0 countries) → executive summary (claim first, number second, country third) → chapter Highlights (number-led bullets) → chapter body (full data). Each layer admits more specificity than the one above it. Our draft appears to have collapsed the chapter-body register into the abstract.

---

## PART 4 — VERDICT ON THE THREE CHARGES

### Charge (1): "Opening by motivating everything with teacher shortages is wrong" — CONTRADICTED

The corpus does not support this. Four of twelve abstracts open on precisely that motivation, and — decisively — **both of the two OECD publications whose subject matter is closest to ours do so:**

> "Recruitment difficulties, changing career patterns and growing classroom diversity have prompted many OECD education systems to look beyond traditional Initial Teacher Education to recruit experienced professionals from other fields." — WP No. 347, *A second career in teaching*, p. 3 (2026)

> "Teacher shortages, changing labour markets and growing expectations for workforce diversity have led many education systems to expand alternative pathways into the teaching profession." — WP No. 342, *Alternative pathways into teaching*, printed p. 4 (2026)

And two more, six years apart, in different series:

> "Modern education systems evolve in a context of growing teacher shortages, frequent turnover and a low attractiveness of the profession." — WP No. 213, *Teachers' well-being*, printed p. 4 (2020)

> "Teacher shortages have intensified across several OECD countries, making this an urgent priority for education systems." — *Education Policy Outlook 2024*, back cover (2024)

**But the corpus does refine his instinct in two respects, and he is right about both underlying points:**

1. **Shortage is never the sole motivation.** In all four cases it is one of a *compound* driver — a list of three. WP 347: "Recruitment difficulties, **changing career patterns and growing classroom diversity**". WP 342: "Teacher shortages, **changing labour markets and growing expectations for workforce diversity**". WP 213: "growing teacher shortages, **frequent turnover and a low attractiveness of the profession**". Shortage appears as one term in a triad, never alone. If our abstract makes shortage carry the entire motivation, that *is* a defect — but the fix is to broaden the triad, not to delete the shortage.

2. **The opening states a driver, not a crisis, and it is never quantified.** Zero of these four sentences contains a number. "Have prompted", "have led", "evolve in a context of" — the grammar makes the shortage a *cause of policy movement*, not a calamity. The sentence's subject is always the education systems and what they are doing, not the deficit.

3. **The majority option is still the general proposition.** Five of twelve open on a claim about the world that is not a problem at all: "Teachers' time is a critical resource for education systems and a key input for student learning" (EPP 29, p. 1); "Lifelong learning is essential for building inclusive, resilient and future‑ready societies" (EPO 2025, back cover). If we want to avoid shortage-framing, this — not a description of our own paper — is the sanctioned alternative.

### Charge (2): "Sell general conclusions; demote cases to evidence" — CONFIRMED, EMPHATICALLY

Zero country names in twelve abstracts. Zero in ten executive-summary section headings. In executive summaries countries appear only after a completed general claim and only under explicit evidential signposts ("For example…", "By contrast…"). The lead author is right, and the corpus is more absolute on this than he was.

### Charge (3): "OECD papers don't put numbers in abstracts and introductions the way we did" — CONFIRMED FOR ABSTRACTS, WITH A DOCUMENTED EXCEPTION

He is right about abstracts, overwhelmingly: 11 of 12 contain no substantive statistic; the 8 working papers and policy perspectives contain none at all; 0 of 12 first sentences contain a numeral.

He is wrong that OECD *never* does it. The flagship *Education Policy Outlook 2024* abstract puts a precise figure in sentence two:

> "Between 2015 and 2022, the share of students whose principals reported shortages rose from 29% to 46.7% on average across the OECD." — back cover

The pattern that reconciles these: **the number is licensed only where it is the single load-bearing fact that justifies the whole publication, it never occupies the first sentence, and it is always preceded by the same claim in words.** Compare the same fact rendered inside the report, where it is softened before it is precise: "In 2022, nearly half (47%) of school principals across OECD countries reported that teacher shortages were hindering instruction" (Executive summary, p. 11). Note also that scope counts — "33 education systems", "55 education systems", "230 policies across 35 education systems" — *are* freely permitted in flagship abstracts and are the one numeric move that is genuinely idiomatic.

---

## PART 5 — THE ABSTRACT TEMPLATE, SLOT BY SLOT

Derived from the twelve abstracts, in the order the slots actually occur. Target: **140–165 words, 6–7 sentences** (corpus mean 162 words / 6.9 sentences; the eight working papers and policy perspectives average 169 words / 7.1 sentences).

**Slot 1 — The state of the world (1–2 sentences, ~25–45 words). Mandatory. No numerals. No countries.**
One of two sanctioned forms:
- *(a) Compound driver.* A three-term list of pressures, with a verb of consequence: "X, Y and Z have prompted / have led many OECD education systems to …". Models: WP 347, WP 342, WP 213.
- *(b) General proposition.* A flat assertion about why the object of study matters: "Teachers' time is a critical resource for education systems and a key input for student learning." Models: EPP 29, EPP 122, EPP 128, WP 235, EPO 2025.

**Slot 2 — The gap or tension (0–1 sentence, ~20–30 words). Optional; present in 5 of 12.**
Concessive grammar. "While these pathways are increasingly prominent, they remain highly heterogeneous and difficult to compare across contexts" (WP 342). "While the importance of continuing teacher learning is widely recognised, building efficient, equitable and sustainable professional learning systems is far from trivial" (WP 235).

**Slot 3 — What this paper is and does (1 sentence, ~20–30 words). Mandatory. Median position 3.**
Fixed formula: *This working paper / This policy paper / This report* + a verb of scholarly action — **synthesises, provides, proposes, examines, discusses, presents, explores**. Never "argues", never "shows that".

**Slot 4 — The paper's architecture (1 sentence, ~25–40 words). Present in 6 of 12.**
The structuring count, **spelled out in words**: "It is structured around six questions: …" (WP 347); "…using four criteria: pathway modality, programme oversight, entry requirements and licensure outcomes" (WP 342). A colon and a list. Alternatively deploy the question-list device (EPP 122, EPP 128, EPP 29).

**Slot 5 — The evidence base (1 sentence or a leading participial clause, ~15–35 words). Mandatory.**
Almost invariably a fronted participle: **"Drawing on …"** — used in 5 of 12. Name the instruments, *count* the sources if you must quantify anything ("33 education systems"), but name no country. "Drawing on comparative evidence, recent TALIS data and case studies from OECD countries…" (WP 342) — note "case studies from OECD countries", not the countries themselves.

**Slot 6 — The contribution and payoff (1 sentence, ~25–45 words). Mandatory. This is the last sentence.**
Forward-facing, reader-facing. Either what the paper concludes ("It concludes by identifying enabling system conditions needed to…", WP 342) or what the reader gets ("The paper offers evidence-informed insights for policy makers seeking to…", EPP 128). Name the audience if useful — "what governments, schools and researchers might do" (WP 347). No number, no country, no imperative, no restatement of the crisis.

**Prohibited in every slot:** any country name; any substantive statistic; any numeral in sentence 1; any structural count written as a digit; ending on the problem.

---

## RULES THIS IMPLIES FOR OUR PAPER

**On the abstract's opening**

1. Keep a driver-based opening if you want one — the corpus licenses it, and the two OECD papers nearest our topic both use it. Do not let the lead author's objection delete it wholesale; show him WP 347 and WP 342.
2. Never let teacher shortage be the *only* driver. Write it as a three-term compound, matching WP 347 and WP 342: shortage plus changing career patterns plus something about the workforce we actually study. That is the real fix to his charge.
3. Make the first sentence's grammatical subject education systems and what they are doing, not the deficit. Use a verb of consequence — "have prompted", "have led", "evolve in a context of".
4. Put no numeral in the first sentence. Zero of twelve do.
5. If you drop the driver opening, replace it with a flat general proposition about why former teachers matter — not with a description of our paper. Only one abstract in twelve opens self-referentially.

**On numbers**

6. Put no substantive statistic in the abstract. Eight of eight working papers and policy perspectives have none.
7. Permit yourself exactly one numeric move in the abstract: a scope count of the evidence base ("Drawing on X policy instruments across Y education systems"). That is idiomatic; findings-as-numbers are not.
8. Write every structural count as a word, never a digit: "six questions", "four criteria", "three mechanisms".
9. If a single statistic is genuinely load-bearing enough to justify the paper's existence, it may go in sentence two of the abstract and nowhere earlier — the EPO 2024 licence. Precede it with the same claim stated in words.
10. In the executive summary and introduction, state the claim in a sentence with no numeral, then let the number corroborate it in the next sentence. Follow the EPO 2024 mechanic exactly: "Many education systems are struggling to balance teacher supply and demand… In 2022, nearly half (47%)…".
11. Round in words before you are precise in digits: write "nearly half (47%)", "almost 90%", "around 21%". The magnitude must land before the figure does.
12. Never open a paragraph, a section or a heading with a number.

**On countries and cases**

13. Delete every country name from the abstract. Twelve of twelve have none. This is non-negotiable house style.
14. Delete every country name from every section heading and every executive-summary heading. Ten of ten in the corpus have none.
15. In the executive summary, open every section with a general proposition that stands alone if the country sentence is struck. Apply that as a literal test to each of our sections.
16. Introduce every country only under an explicit evidential signpost — "For example", "By contrast", "In most countries where data is available". Never make a country the subject of a paragraph's first sentence.
17. Where we currently have a country case, convert it into a general mechanism with the case as illustration. Model the taxonomy on EPO 2024's "Get more teachers into the workforce, by reducing barriers to entering the profession, supporting re-entry, addressing targeted shortages, or proposing alternative pathways" — mechanisms named, countries absent.
18. Respect the layering: abstract carries no specifics; executive summary carries claim-then-number-then-country; chapter Highlights may lead with numbers; only the chapter body carries full case detail. Do not let chapter-body register leak upward.

**On the abstract's shape**

19. Hold the abstract to 140–165 words and 6–7 sentences.
20. Delay the "This paper…" sentence to position three. Two sentences of world, then the paper.
21. Use the fixed formula and a neutral verb: "This policy paper examines / synthesises / provides / proposes". Do not write "argues" or "shows that".
22. Introduce the evidence base with a fronted participle: "Drawing on …".
23. End on what the reader gets or what the paper concludes, and name the audience — "what governments, schools and researchers might do". Never end on a statistic, a country, a recommendation in the imperative, or a restatement of the problem. Zero of twelve do any of these.
24. Consider closing with the paper's guiding questions verbatim, as EPP 29, 122 and 128 do. It is a sanctioned structure in the series we are imitating and it forecloses the temptation to end on a number.
