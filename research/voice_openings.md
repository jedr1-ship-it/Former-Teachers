# How OECD education publications open chapters and build arguments

**Slice:** chapter/section openings; heading grammar; paragraph architecture; the generalisation-vs-country-illustration machinery.
**Method:** six OECD publications downloaded as PDFs and parsed page-by-page with `pdftotext`. Every quote below was read in the source file; nothing is from memory. Locators are **printed page numbers** (the number on the page), with PDF page in brackets where they differ and it matters.

## Corpus

| Key | Publication | Type | Pages | File |
|---|---|---|---|---|
| **SCT-2026** | *A Second Career in Teaching: Exploring practices and evidence for training, supporting and retaining second-career teachers*, OECD Education Working Paper No. 347 (2026) | Working paper | 65 | `wp347_second_career.pdf` |
| **CPL-2020** | *Policies to support teachers' continuing professional learning: A conceptual framework and mapping of OECD data*, OECD EWP No. 235 (2020) | Working paper | 80 | `wp235_cpl.pdf` |
| **WB-2020** | *Teachers' well-being: A framework for data collection and analysis*, OECD EWP No. 213 (2020) | Working paper | 82 | `wp213_wellbeing.pdf` |
| **FLY-2019** | *A Flying Start: Improving Initial Teacher Preparation Systems* (2019) | Flagship book, 6 chapters | 166 | `flying_start.pdf` |
| **TM-2005** | *Teachers Matter: Attracting, Developing and Retaining Effective Teachers* (2005) | Flagship book, 7 chapters | 240 | `teachers_matter_2005.pdf` |
| **PB29-2021** | *Making the most of teachers' time*, OECD Education Policy Brief No. 29 (2021) | Policy brief | 16 | `teachers_time.pdf` |

All six parsed as PDFs; no HTML fallback was needed. (One attempt at *Education Policy Outlook 2024* HTML returned HTTP 403 and is therefore **not** used anywhere below.)

**SCT-2026 is a near-sibling of our paper** — same OECD directorate, same population (career changers entering teaching), published July 2026. Where it and our draft diverge, that divergence is the most probative evidence in this report.

---

## 1. Chapter and section openings: 49 collected, exactly ONE opens with a statistic

I transcribed the first sentence of every chapter, section and sub-section opening I could reach across the six publications: **49 openings**.

### 1.1 The classification

| Opening move | Count | Share |
|---|---:|---:|
| **Proposition / claim** | 34 | 69% |
| **Roadmap** ("This chapter discusses…") | 10 | 20% |
| **Scene-setting / definition** | 3 | 6% |
| **Statistic** | **1** | **2%** |
| **Policy question** | 1 | 2% |

**One opening in 49 leads with a number.** The lead author's intuition on this point is correct, and correct by a wide margin.

### 1.2 The seven chapter openings of TM-2005 — a clean natural experiment

Every chapter of *Teachers Matter* begins with a boxed `Summary`. Here are all seven first sentences, verbatim:

| Ch. | p. | Opening sentence | Type |
|---|---|---|---|
| 1 | 17 | "The OECD has made a major international study of policies for attracting, developing and retaining effective teachers in schools." | scene-setting |
| 2 | 23 | "This chapter provides the rationale for analysing teacher policy, and the framework used to study its main components and the ways they are interconnected." | roadmap |
| 3 | 39 | "The teaching profession needs to be competitive with other occupations in attracting talented and motivated people." | **proposition** |
| 4 | 95 | "The pace of social change and the heightened expectations of schools have broadened and deepened teachers' roles." | **proposition** |
| 5 | 141 | "Teacher policy needs to ensure that the best available teachers are selected for employment, and that individual schools have the teachers they need." | **proposition** |
| 6 | 169 | "Teacher policy needs to ensure that teachers work in an environment which facilitates success and that effective teachers wish to continue in teaching." | **proposition** |
| 7 | 213 | "Teacher policy needs to draw on well-informed research, lead to sound agreements between stakeholders and offer solid implementation strategies." | **proposition** |

Seven chapters. **Zero numbers in any opening sentence.** Four of the seven open with the identical normative frame — *"Teacher policy needs to …"* / *"The teaching profession needs to …"* — a bare claim about what must be true, with the evidence deferred.

Note what Chapter 3 does. It is *the* shortages chapter. It opens on competitiveness, not on shortage counts. The shortage numbers arrive in the **third** paragraph of the summary: "On average, 26% of primary teachers and 31% of secondary teachers in OECD countries are aged over 50 years" (p. 39).

### 1.3 The body openings agree with the summary openings

The summaries are boxed, so I checked the running body text underneath them.

> "A fundamental requirement for providing quality teaching in schools is that motivated people with high-level knowledge and skills choose to become teachers. The teaching profession needs to be competitive with other occupations in attracting talented people."
> — TM-2005, Ch. 3 body opening, p. 40 [PDF 42]

> "Policies to attract, develop and recruit teachers need to be complemented by strategies ensuring that teachers work in an environment which facilitates success, and that effective teachers wish to continue in teaching."
> — TM-2005, Ch. 6 body opening, p. 170 [PDF 172]

> "Student learning performance varies widely among students of a similar age."
> — TM-2005, §2.1, p. 24 [PDF 26]

That last one is instructive: the section is titled "Quality Teaching is Vital for Improving Student Learning", and it opens on a bare dispersion claim. The PISA percentages (10%, 18%) arrive in sentence two and three.

### 1.4 FLY-2019: chapters open with a roadmap in italics, then a claim

> "This chapter discusses the challenges of ensuring a balanced teacher workforce focussing on the way these relate to initial teacher preparation (ITP)."
> — FLY-2019, Ch. 3 opening, p. 47 [PDF 49]

> "This chapter discusses three key challenges of ensuring evidence-informed, self-improving initial teacher preparation (ITP) systems."
> — FLY-2019, Ch. 2 opening, p. 27 [PDF 29]

Then the running text under the chapter head:

> "This section gives a short overview of some of the facets of ensuring a balanced teacher workforce and focuses on how initial teacher preparation (ITP) in particular can contribute to addressing it."
> — FLY-2019, Ch. 3 body opening, p. 48 [PDF 50]

And the Executive Summary, which is a single normative sentence running 44 words before its first full stop:

> "In order for teachers to deliver high-quality instruction and help all students reach their full potential, countries need to establish and sustain a coherent system of initial teacher preparation that can serve as the foundations for a process of continued development throughout the full duration of a teacher's career."
> — FLY-2019, Executive Summary, p. 11 [PDF 13]

### 1.5 SCT-2026: our sibling paper's eight section openings

| Section (all are questions) | p. | Opening sentence | Type |
|---|---|---|---|
| Introduction: Why second-career teachers and why now? | 7 | "Teaching as a second career is not new, but the policy attention it now receives is." | **proposition** |
| Who are second-career teachers? | 10 | "Teaching as a second career is by no means a new phenomenon." | **proposition** |
| Where are second-career teachers? | 14 | "Across OECD countries that participated in TALIS 2024, an average of 19% of lower secondary teachers fit the definition of second-career teacher used in this paper…" | **STATISTIC** |
| How are second-career teachers prepared and supported? | 17 | "Entering teaching from another profession raises specific preparation questions." | **proposition** |
| How do second-career teachers integrate into schools? | 27 | "Once SCTs enter the workplace, a new phase of development begins." | scene-setting |
| What do SCTs contribute to education systems? | 32 | "Beyond the question of how SCTs are prepared and how they integrate into schools lies a further question that is central to any policy rationale for recruiting them: what do they actually contribute?" | policy question |
| How can second-career teachers be retained? | 34 | "Attrition is a meaningful component of the teacher supply challenge, particularly in systems where alternative employment options for qualified graduates are abundant, and has been identified to be one of its main causes, especially in high-income countries (UNESCO, 2024; Ingersoll and Strong, 2011)." | **proposition** |
| Conclusions | 38 | "Second-career teachers have become a trending topic when it comes to teacher workforce policy in many OECD countries." | **proposition** |

The single statistical opening in the entire 49-item sample is *"Where are second-career teachers?"* — a section whose whole job is to report a distribution. That is the exception that states the rule: **lead with a number only when the section's subject matter literally is a count.**

*Locator note:* in the published PDF the heading "How can second-career teachers be retained?" is typeset mid-flow on p. 34 [PDF 35], ahead of two paragraphs ("At a cultural level…") that belong to the preceding section. I verified this in both `-layout` and raw extraction order. The true opening of the retention section is the "Attrition is a meaningful component…" sentence quoted above.

Sub-section openings in the same paper repeat the pattern:

> "While SCTs often bring valuable previous professional experience, related to a certain subject (in secondary education) or skill (in Vocational education and training (VET)), the transfer of prior expertise to educational contexts is neither automatic nor reliably advantageous."
> — SCT-2026, "Transfer of previous professional experience", p. 26 [PDF 27]

> "Less is known about how SCTs contribute to the daily life of schools than about their preparation, integration or retention."
> — SCT-2026, "Contributions to schools and teams", p. 34 [PDF 35]

> "Measuring the effect of any individual teacher characteristic on student achievement is notoriously difficult, particularly when traits are generalised across diverse teacher populations (Rivkin, Hanushek and Kain, 2005)."
> — SCT-2026, "Implications on student achievement", p. 33 [PDF 34]

Two of those three open by **naming the limits of the evidence**. That is a distinct and repeated OECD move: a section on a thin evidence base announces the thinness in sentence one.

### 1.6 The working papers agree

> "Effective teaching is at the heart of successful education systems, and there is growing recognition that teachers' professional learning (TPL) is critical to foster such teaching."
> — CPL-2020, §1 Introduction, p. 7 [PDF 8]

> "A number of contextual developments and trends have increased the importance of teachers' continuing professional learning for policy makers in many OECD countries."
> — CPL-2020, §2 Background, p. 8 [PDF 9]

> "Although the majority of teachers in most OECD countries enter the profession after having completed a tertiary teacher education programme, some countries, including the United States, have seen a growth of 'alternative pathways' to teaching over the past decades."
> — CPL-2020, §2.4 Greater diversity in teachers' pathways into the classroom, p. 12 [PDF 13]

> "Teacher attrition is an acknowledged problem at the international level and has been the subject of an intense literature review (Borman and Dowling, 2008; Craig, 2017; McCallum et al., 2017; Carver-Thomas and Darling-Hammond, 2017; McCallum and Price, 2010)."
> — WB-2020, §1.1 Teacher attrition, p. 9 [PDF 10]

> "Teachers' time is a critical resource for education systems and a key input for student learning."
> — PB29-2021, opening sentence of the brief, p. 1

---

## 2. Headings: topics dominate, questions are the live OECD fashion, propositions are rare and localised

### 2.1 The count

I classified **220 headings** (chapter titles plus every numbered and unnumbered sub-heading I could enumerate from tables of contents and body text).

| Publication | Headings | Topic | Question | **Proposition** |
|---|---:|---:|---:|---:|
| TM-2005 | 72 | 53 | 0 | **19** |
| FLY-2019 | 63 | 34 | 29 | 0 |
| SCT-2026 | 35 | 27 | 7 | **1** |
| CPL-2020 | 24 | 19 | 5 | 0 |
| WB-2020 | 22 | 19 | 3 | 0 |
| PB29-2021 | 4 | 0 | 4 | 0 |
| **Total** | **220** | **152 (69%)** | **48 (22%)** | **20 (9%)** |

**Headings state topics, not propositions — 69% to 9%.** The lead author is right that OECD headings are overwhelmingly topical.

But two facts complicate the picture, and both matter for us:

**(a) All 20 propositional headings come from one book, and 15 of them from one chapter.** *Teachers Matter* Chapter 3 (the shortages/attractiveness chapter) and §3.2 run their entire diagnostic as a ladder of propositional sub-headings. This is not a stylistic accident; it is what OECD does when a section's job is to *adjudicate* a contested empirical picture.

**(b) The modern replacement for the propositional heading is the question heading.** FLY-2019, PB29-2021, WB-2020 and SCT-2026 all use them; TM-2005 (2005) uses none. Twenty-two per cent of the corpus, and rising sharply with publication date — SCT-2026 is *structured entirely* around six questions.

### 2.2 Ten real headings, verbatim

**Propositional (all from TM-2005):**
1. "2.3. Teacher Policy Concerns are Intensifying" (p. 27)
2. "3.1.1. Countries have quantitative and qualitative concerns – which are interrelated" (p. 40)
3. "3.1.2. There are only limited international data on teacher shortages" (p. 41)
4. "3.1.6. Shortages are associated with an inequitable distribution of teacher resources" (p. 49)
5. "3.1.11. Teaching continues to be an attractive career in many countries" (p. 59)
6. "3.2.1. Population change is a key influence" (p. 61)
7. "4.1. Teachers' Roles are Changing" (p. 97)

Item 4 is almost verbatim the lead author's own example of a propositional heading ("Shortages are concentrated, not general"). It exists in the corpus. Note also items 3, 5 and 6: a propositional heading is used to **deflate** an expectation ("only limited data"), to **contradict** the pessimistic frame ("continues to be attractive"), and to **rank causes** ("a key influence"). These are all argumentative jobs.

**Topical:**
8. "3.3.2. Salaries" (TM-2005, p. 70) — a one-word heading; the corpus is full of them
9. "3.1.1. Striking the balance between supply and demand" (FLY-2019, p. 48)
10. "Contributions to teacher workforce diversity" (SCT-2026, p. 33)

**Question:**
- "Chapter 3. How can we ensure a balanced teacher workforce?" (FLY-2019, p. 47)
- "3.1. Why is this a challenge?" / "3.2. What strategies can address the challenge?" / "3.3. How can the different actors apply these strategies?" (FLY-2019, pp. 48, 55, 59) — this triplet is repeated verbatim across Chapters 2, 3, 4 and 5, twelve headings in total.

### 2.3 Where the proposition actually lives: the bolded lede

This is the single most useful structural discovery in this slice. OECD does not usually put the proposition in the heading. **It puts a topical heading up, then a bolded propositional sentence immediately underneath it.**

> **The initial teacher preparation system**
> **"Initial teacher preparation is the first step in the continuum of teacher learning and should be understood as a system of multiple actors and artefacts."**
> "Initial teacher preparation should mark the beginning, not the end, of the process of professional development. …"
> — FLY-2019, Executive Summary, p. 11 [PDF 13]

> **The role of evidence in designing ITP systems**
> **"Supporting the production, dissemination and utilisation of knowledge about ITP policies and practices is fundamental for creating an evidence-informed ITP system."**
> — FLY-2019, Executive Summary, p. 11 [PDF 13]

SCT-2026 does the same thing in its conclusions, with ordinals and bold run-in propositions:

> "**First, second-career teachers are a meaningful and growing presence in OECD education systems – not a niche category.** Using a broader five-year category, on average, 1 out of 5 of lower secondary teachers across participating OECD countries fit the SCT profile, and the share rises to 26% among teachers with five or fewer years of teaching experience."
> — SCT-2026, "What the evidence supports", p. 38 [PDF 39]

> "**Second, SCTs' preparation needs are different, not lesser.** The evidence consistently shows that effective programmes recognise both their established professional identity and their novice-teacher status."
> — SCT-2026, p. 38 [PDF 39]

> "**Third, organisational support, not entry pathway, is the strongest predictor of how SCTs experience the workplace.**"
> — SCT-2026, p. 38 [PDF 39]

> "**Fourth, SCT retention is shaped by the same factors that shape teacher retention generally.**"
> — SCT-2026, p. 39 [PDF 40]

Look at the grammar: *"different, not lesser"*; *"a meaningful and growing presence … not a niche category"*; *"organisational support, not entry pathway"*. Three of four use the **X, not Y** contrastive frame. This is exactly the register the lead author is asking for, and it is available to us without touching a single heading.

The policy recommendations in the same paper are bolded **imperatives**:

> "**Treat retention, not recruitment, as the central design question.** Recruitment without matching investment in retention reproduces the dynamic that created the shortage in the first place."
> "**Invest in preparation rather than compromising it.**"
> "**Design induction around novice-teacher status, not professional seniority.**"
> "**Strengthen administrative monitoring of SCTs.**"
> — SCT-2026, "Considerations for policy and practice", pp. 40–41 [PDF 41–42]

---

## 3. Paragraph architecture

### 3.1 Length: measured, not estimated

I detected paragraph boundaries by line-fill (a paragraph ends when a line stops short of the median line width), then counted sentences with citations and parentheticals stripped. **1 542 body paragraphs of ≥35 words:**

| Publication | Paragraphs | Mean sentences | Median |
|---|---:|---:|---:|
| SCT-2026 | 135 | 3.88 | 4 |
| CPL-2020 | 181 | 4.00 | 4 |
| WB-2020 | 167 | 4.07 | 4 |
| FLY-2019 | 276 | 3.82 | 3 |
| TM-2005 | 783 | 3.89 | 3 |
| **Corpus** | **1 542** | **3.91** | **4** |

Distribution: 1–2 sentences **27.4%**; 3–5 sentences **55.0%**; 6–8 sentences **13.3%**; 9 or more **4.3%**.

The consistency is the striking part: five publications spanning 2005–2026, two genres, five different author teams, and every single mean lands between 3.8 and 4.1. **The OECD body paragraph is four sentences long.** Eighty-two per cent are five sentences or fewer.

### 3.2 Fifteen paragraphs dissected

Moves: **C** = claim, **E** = evidence, **A** = attribution, **Q** = qualification/counter-move, **I** = implication, **X** = country illustration, **R** = roadmap/signpost.

| # | Source | Sent. | Move sequence | Opening words |
|---|---|---:|---|---|
| 1 | SCT-2026 p. 14 | 2 | C(stat) → E+Q+A | "Across OECD countries that participated in TALIS 2024, an average of 19%…" |
| 2 | SCT-2026 p. 14 | 4 | C → E → X → I+Q | "An important pattern emerges from comparing the overall workforce…" |
| 3 | SCT-2026 p. 16 | 4 | C → E+A → E+A → Q | "These TALIS findings are consistent with research suggesting…" |
| 4 | SCT-2026 p. 15 | 4 | R → C → E(conditional) → I | "These findings carry two policy implications that connect to arguments developed later…" |
| 5 | SCT-2026 p. 33 | 5 | C → C(restated) → X → X → X | "Student populations across OECD countries are becoming more diverse, but…" |
| 6 | SCT-2026 p. 34 | 5 | C → E → X → X → I+Q | "Cross-country variation in teacher turnover partly reflects broader labour-market dynamics." |
| 7 | CPL-2020 p. 12 | 3 | C(concessive) → definition → scope | "Although the majority of teachers in most OECD countries enter the profession…" |
| 8 | CPL-2020 p. 12 | 3 | C → E(with locator) → I | "In some OECD countries, these alternative pathways represent a notable share…" |
| 9 | CPL-2020 p. 12 | 4 | Q(counter-claim) → mitigation → X → cross-ref | "However, there are also concerns that a greater reliance on alternative pathways…" |
| 10 | CPL-2020 p. 9 | 4 | C → background → E+A(×5) → Q | "Over the course of recent decades, a wealth of new evidence on the effects of CPL…" |
| 11 | WB-2020 p. 9 | 8 | C+A → E → X → X → X → X → E → Q(benchmark) | "Teacher attrition is an acknowledged problem at the international level…" |
| 12 | WB-2020 p. 9 | 3 | C → X → E(detail) | "Some countries already adopted national reforms to cope with high attrition rates." |
| 13 | TM-2005 p. 24 | 5 | C → E+A → E(contrast) → I → E(range) | "Student learning performance varies widely among students of a similar age." |
| 14 | TM-2005 p. 170 | 4 | C → Q → A(quoted country source) → Q(extended) | "There is concern in a number of countries that rising teacher attrition and turnover rates…" |
| 15 | TM-2005 p. 201 | 5 | C+A → E → I → X → X(counter-example) | "The country review visits indicated that in some countries schools often lack adequate facilities…" |

**Dominant sequence: C → E(+A) → [X] → Q or I.** Claim first, evidence second, country example third if at all, and the paragraph closes on either a qualification or a policy implication. Twelve of the fifteen open on a claim; none opens on a country.

Two of these deserve quoting in full because they are the template.

**The canonical shortages paragraph (FLY-2019, p. 48 [PDF 50]) — five sentences, C → C → E → E → Q:**

> "Establishing and sustaining a quality teaching workforce involves striking the right balance between supply and demand. Many countries around the world experience problems of teacher shortages, oversupply and unbalanced distribution. Almost 30% of students across the OECD study in schools where instruction is hindered by a lack of teaching staff as reported by principals, and the average is similar in the 35 partner countries/economies that participated in the 2015 PISA cycle (OECD, 2016). In addition, around one out of five students is in a school where the principal reported to have inadequate or poorly qualified teaching staff (OECD, 2016). Although the shortage trend in some subjects seems to be improving in many countries based on principal reports (OECD, 2018), the supply and demand issue is in fact much more complex."

Note the final sentence. The paragraph earns its numbers and then immediately **refuses to let them close the argument**. That closing pivot — *"is in fact much more complex"* — is the OECD paragraph's characteristic last move.

**The general-claim-then-three-countries paragraph (SCT-2026, p. 33 [PDF 34]) — C → C → X → X → X:**

> "Student populations across OECD countries are becoming more diverse, but the teaching workforce has not kept pace. In several systems, significant gaps persist between the demographic composition of classrooms and of staff rooms. Countries in South America, for example, tend to lack indigenous teachers who reflect the communities in which they teach (Corbetta et al., 2020). In the Flemish Community of Belgium, only 6.4% of teachers have a migration background, compared to 39.6% of the student population (Flemish Ministry of Education and Training, 2023). In the United States, teachers from historically disadvantaged groups remain significantly underrepresented relative to student demographics (National Council on Teacher Quality, 2025)."

The general claim occupies sentences 1–2 and carries no numbers. The three country cases occupy sentences 3–5 and carry all of them. **The countries are the evidence layer; they never hold the claim.**

### 3.3 A number nuance the lead author should see

At the **section/chapter** level his instinct is strongly confirmed: 1 opening in 49 leads with a statistic.

At the **paragraph** level it is not. I stripped citations, years, and cross-references, then tested every multi-sentence body paragraph:

- opening sentence carries a number: **202/1 435 = 14.1%**
- non-opening sentence carries a number: **724/4 566 = 15.9%**
- ratio later:opening = **1.13×**

So OECD is only very slightly more likely to put a number in a paragraph's second-or-later sentence than in its first. Roughly **one body paragraph in seven does open on a figure**, and that is normal. The publication-level split is real, though: the two flagship books run 17.5–18.0% of paragraph openings with a number, the three working papers 4.5–8.3%.

**The honest rule is not "no numbers early". It is "no numbers at the top of a section, and never a number where a claim should be."** A number may open a paragraph when the paragraph's job is to report a magnitude (SCT-2026 #1 above). It may not open a section, and it may not stand in for the proposition.

---

## 4. Generalisation versus country illustration

### 4.1 The decisive count

For each of 1 596 body paragraphs I tested (a) whether a country is named in the first twelve words of the opening sentence, and (b) whether a country is named anywhere in the paragraph.

| Publication | Paragraphs | Opens with a country | Names a country anywhere |
|---|---:|---:|---:|
| SCT-2026 | 136 | 5 (3.7%) | 33 (24.3%) |
| CPL-2020 | 186 | 4 (2.2%) | 15 (8.1%) |
| WB-2020 | 169 | 2 (1.2%) | 20 (11.8%) |
| FLY-2019 | 292 | 26 (8.9%) | 107 (36.6%) |
| TM-2005 | 813 | 93 (11.4%) | 343 (42.2%) |
| **Corpus** | **1 596** | **130 (8.1%)** | **518 (32.5%)** |

**A country is four times more likely to appear inside an OECD paragraph than at the head of one** (32.5% vs 8.1%). Countries are everywhere in this corpus — a third of all paragraphs name one — but they are almost never the grammatical subject the paragraph is about. This is the lead author's charge (2), confirmed with numbers: cases are not banned, they are *demoted*, and the demotion is visible at the sentence level.

Note the gradient. The two flagship books, which are built on country review visits, run 9–11% country-headed paragraphs. The three working papers run 1–4%. **A working paper is the genre least tolerant of a country-led paragraph.** Ours is a policy paper in the working-paper register.

### 4.2 Marker frequencies across the corpus

Generalisation markers (raw counts, all six publications): "In some countries" **21**, "In most countries" **20**, "Many countries" **8**, "In many countries" **7**, "Across OECD countries" **6**, "Across the OECD" **6**, "On average across" **4**, "countries generally" **4**, "in almost all countries" **3**, "most OECD countries" **3**.

Illustration markers: "Evidence from" **18**, "For example, in [Country]" **17**, "the case of" **16**, "In [Country], for example/instance" **8**, "For instance, in [Country]" **6**, "A study of/in" **4**.

### 4.3 Five sentences that generalise across countries

1. > "Across OECD countries, governments are investing more deliberately than at any previous point in pathways that bring experienced professionals from other fields into teaching."
   — SCT-2026, p. 7 [PDF 8]
2. > "Most OECD countries have established formal pathways for SCTs to obtain teaching qualifications: 16 out of 28 countries and economies with available data report dedicated routes, while 12 require SCTs to follow the same qualification process as other teacher candidates (see Table A A.1 in Annex A)."
   — SCT-2026, p. 17 [PDF 18]
3. > "Many countries around the world experience problems of teacher shortages, oversupply and unbalanced distribution."
   — FLY-2019, p. 48 [PDF 50]
4. > "In most countries, teacher educators are not provided with induction or professional education, and are both an under-researched and poorly understood occupational group."
   — FLY-2019, p. 88 [PDF 90]
5. > "Most countries report concerns about teacher effectiveness, whether or not they are experiencing teacher shortages."
   — TM-2005, Executive Summary, p. 9 [PDF 11]

**Grammatical pattern.** The generalisation is a fronted adverbial of scope — *Across OECD countries* / *In most countries* / *On average across …* — followed by a **present-tense** main clause with a **plural institutional subject** (*governments*, *countries*, *teacher educators*, *education systems*). The scope adverbial does the hedging so the verb can stay flat and declarative. Where a count is attached (#2), it is attached as a **colon-gloss after** the claim, never as the claim itself. Item #5 is worth memorising: it generalises *and* dissociates the finding from shortages in the same breath.

### 4.4 Five sentences that introduce a single-country example

1. > "In the Netherlands alone, SCTs now account for roughly a quarter of all new entrants into teacher education (Netherlands Ministry of Education, Culture and Sciences, 2025)."
   — SCT-2026, p. 14 [PDF 15]
2. > "In France, for instance, candidates must demonstrate through reflective commentary that their prior professional experience has equipped them with the disciplinary and pedagogical skills required to teach (Ministère de l'Enseignement supérieur et de la Recherche, 2023)."
   — SCT-2026, p. 22 [PDF 23]
3. > "For example, in Australia there are difficulties in attracting teachers to rural and remote areas and retaining them there beyond the minimum period required by employment contracts (see Box 3.2 for some recent policy responses)."
   — TM-2005, p. 52 [PDF 54]
4. > "In Norway, for example, where more than 50% of the teachers in natural sciences at upper secondary level are aged over 50 years and relatively few students with a science background enrol in teacher education, there are concerns about the future of these subject areas in schools."
   — TM-2005, p. 42 [PDF 44]
5. > "In Iceland, for example, education authorities are now officially recognising teachers' participation in Education Plaza, which offers a variety of social media-based activities that bring together educators, educational administrators, policy makers, the academic community and other stakeholders working in communities of practice, both online and in physical spaces (Vuorikari, 2019)."
   — CPL-2020, p. 30 [PDF 31]

**Grammatical pattern.** Three signatures, in order of frequency:

- **`In [Country], for example/instance, [clause]`** — the country is a *fronted circumstantial adjunct*, not the subject. The subject of the main clause remains an institution or a policy (*candidates must demonstrate*, *education authorities are recognising*).
- **`For example, in [Country] [clause]`** — the discourse marker comes first, explicitly flagging subordinate status *before* the country is named.
- **`In [Country] alone, …`** — used to mark a country as an extreme case rather than a representative one (#1).

Item #4 shows the most sophisticated version: the country's statistics are buried in a **non-restrictive relative clause** (*where more than 50% … are aged over 50*), so the main clause still carries the general proposition (*there are concerns about the future of these subject areas*).

**The invariant:** in all five, the country arrives *after* a general claim has already been made, and the sentence is grammatically subordinated by the marker. A country never opens a paragraph as its bare subject.

### 4.5 How they signal that a single case must not be over-read

Three explicit moves, all from different publications:

> "Bearing in mind the limits of a single small-scale study, its findings offer a useful starting point for thinking what SCTs bring to schools beyond their demographic profile."
> — SCT-2026, p. 34 [PDF 35]

> "Much of the qualitative evidence draws on small samples in single education systems (specific cohorts within particular ITE centres, interview studies with a handful of individuals, or single-country surveys). Several findings in this paper each rest on individual studies that, while valuable, would benefit from replication in other contexts. The geographical concentration of the SCT research base (heavily Anglophone and Northern European) and the diversity of programmes and definitions across systems make it difficult to generalise findings without careful attention to context."
> — SCT-2026, "What the evidence does not yet tell us", p. 39 [PDF 40]

> "The table should be interpreted as providing broad indications only, and not strict comparability across countries."
> — TM-2005, Table 6.1A general note, p. 171 [PDF 173]

---

## 5. Where the corpus contradicts the lead author

I was asked to say so plainly. Three places.

**(a) OECD does open abstracts and papers on teacher shortages.** Charge (1) says motivating everything with shortages is wrong. It is not *unheard of* — it is a house move:

> "Modern education systems evolve in a context of growing teacher shortages, frequent turnover and a low attractiveness of the profession. In such a context where these challenges interrelate, there is an urgent need to better understand the well-being of teachers and its implications on the teaching and learning nexus."
> — WB-2020, Abstract, p. 4 [PDF 5]

and that paper's §1 is titled "The current context of the teaching profession: high attrition, shortages and low attractiveness" (p. 8).

What our sibling paper does differently is instructive. SCT-2026 opens its abstract on **three** drivers, not one, and shortages are listed first among equals, not as the cause:

> "Recruitment difficulties, changing career patterns and growing classroom diversity have prompted many OECD education systems to look beyond traditional Initial Teacher Education to recruit experienced professionals from other fields."
> — SCT-2026, Abstract, p. 3 [PDF 4]

Its introduction then says outright: **"Three converging trends help explain why"** (p. 7), and runs three bolded run-in sub-heads — "A growing and persistent challenge of teacher recruitment", "A changing world of work", "Increasing diversity in classrooms" (pp. 7–8). And crucially it *immediately complicates* the shortage story rather than leaning on it:

> "Measuring them is not straightforward – countries use different methodologies and observe shortages at different stages of the recruitment process – but the underlying picture is consistent across measures (OECD, forthcoming). In many countries, recruitment difficulties in education reflect broader labour shortages and are often linked to economy-wide tensions rather than unique to the profession (OECD, forthcoming). In the United States, for example, teaching positions go unfilled at low rates relative to the labour market as a whole (Bruno, 2026)."
> — SCT-2026, p. 7 [PDF 8]

So the defensible version of charge (1) is not "shortages are the wrong motivation". It is: **shortages may not be the sole motivation, and may not be asserted without being immediately problematised.** TM-2005 does the same, forty years earlier in publishing terms, with a propositional heading: "3.1.2. There are only limited international data on teacher shortages" (p. 41).

**(b) OECD does put numbers in section-level prose, densely.** Charge (3) overreaches if read as "avoid numbers". WB-2020 §1.1–§1.2 (pp. 9–10) is almost entirely numeric — "about 30% of teachers leave the profession in the first five years after graduation, rising up to 50% in high-poverty areas"; "the 2018 Survey revealed that 65% of teachers are thinking of quitting"; "On average, lower-secondary teachers across OECD countries are 42.9 years old". Across the corpus 14.1% of paragraph-opening sentences carry a number. The real constraint is positional and structural, not quantitative: numbers may not open a *section*, and may not do a *claim's* work.

**(c) Propositional headings are not un-OECD.** They are rare corpus-wide (9%) but they are a real, deployed device, and *Teachers Matter* deploys 15 of them consecutively in precisely the chapter that most resembles ours. The lead author's proposed heading style has a genuine OECD precedent; it is simply not the default, and the modern default has shifted to question headings instead.

---

## RULES THIS IMPLIES FOR OUR PAPER

**Openings**

1. Open every chapter and every section with a proposition, a roadmap sentence, or a definition. Never with a statistic. The corpus rate is 1 in 49; treat it as a hard rule and spend your one exception on a section whose subject genuinely is a distribution.
2. Write the chapter-opening sentence in the normative frame OECD actually uses: *"Re-entry policy needs to …"*, *"Former teachers are …"*. Four of seven *Teachers Matter* chapters do exactly this.
3. Defer the first number in any section to at least sentence two, and preferably to the second paragraph — as *Teachers Matter* Ch. 3 defers its ageing statistics to the third summary paragraph.
4. Open a section on a thin evidence base by naming the thinness in sentence one. Copy "Less is known about … than about …" and "Measuring the effect of … is notoriously difficult".

**Motivation and framing**

5. Motivate the paper on **three converging pressures**, not on shortages alone. Name them, bold them as run-in sub-heads, and give each a paragraph. This is verbatim what our sibling paper does.
6. Never let "teacher shortages" stand unqualified. Every time the phrase appears in a framing position, follow it within two sentences with a measurement caveat, a labour-market contextualisation, or a counter-case. Copy: *"Measuring them is not straightforward"*; *"reflect broader labour shortages … rather than unique to the profession"*.
7. Say once, early, that shortages are one lever among several and that re-entry is a response to more than shortages — then stop re-motivating from shortages in later sections.

**Headings**

8. Keep headings topical or interrogative. Do not convert the paper to propositional headings; at 9% corpus-wide they would read as off-register.
9. Prefer **question headings** if we want the argument visible in the contents page. This is the live OECD form (22% and rising; SCT-2026 is built entirely on six questions) and it is what a 2026-vintage reader expects.
10. Put the proposition in a **bolded lede sentence directly under the topical heading**, not in the heading. This is how OECD sells general conclusions, and it satisfies the lead author's demand without breaking the register.

**Selling general conclusions**

11. Structure the conclusions as ordinal-numbered bold propositions: *"First, … Second, … Third, … Fourth, …"*. Four is the number SCT-2026 uses.
12. Write those propositions in the **X, not Y** contrastive frame. Three of the four in our sibling paper do: *"different, not lesser"*; *"a meaningful and growing presence … not a niche category"*; *"organisational support, not entry pathway"*.
13. Follow "What the evidence supports" with an explicit "What the evidence does not yet tell us" section. Name the definitional fragmentation, the small-sample and single-system studies, and the Anglophone/Northern-European skew of the literature.
14. Write policy recommendations as bolded imperative sentences: *"Treat retention, not recruitment, as the central design question."*

**Paragraphs**

15. Target **four sentences** per body paragraph. The corpus mean is 3.91 and every one of five publications lands between 3.8 and 4.1. Cut any paragraph over six sentences; only 4.3% of OECD paragraphs run to nine or more.
16. Build every paragraph as **claim → evidence (+attribution) → [country illustration] → qualification or implication**. Twelve of fifteen sampled paragraphs open on a claim; none opens on a country.
17. End evidence paragraphs on a pivot, not on the data. Copy: *"the supply and demand issue is in fact much more complex"*; *"although confirming a time trend would require longitudinal data"*.

**Countries**

18. Cap country-headed paragraphs at **4%** of body paragraphs. Working papers run 1.2–3.7%; the 9–11% rate belongs to review-visit flagships, which we are not.
19. Never make a country the bare subject of a paragraph's first sentence. Subordinate it grammatically every time: *"In [Country], for example, …"*, *"For example, in [Country] …"*, *"In [Country] alone, …"*.
20. Bury a case's statistics in a relative clause so the main clause keeps the general proposition — the *"In Norway, for example, where more than 50% … , there are concerns about …"* construction.
21. Where a claim rests on one country's study, say so in the same sentence: *"Bearing in mind the limits of a single small-scale study, …"*.
22. Put the general claim in sentences 1–2 with **no numbers**, and let the country cases carry all the numbers in sentences 3–5. That is the SCT-2026 workforce-diversity paragraph, and it is the cleanest template in the corpus for what our lead author is asking for.

**Numbers**

23. Zero statistics in section-opening sentences. Roughly one paragraph in seven may open on a figure — but only when the paragraph's job is to report a magnitude.
24. Attach counts to claims as a **colon-gloss after** the proposition, never as the proposition: *"Most OECD countries have established formal pathways for SCTs to obtain teaching qualifications: 16 out of 28 …"*.
25. Front every generalisation with a scope adverbial (*Across OECD countries*, *In most countries*, *On average across …*) and keep the main verb flat and present-tense with a plural institutional subject. Let the adverbial do the hedging so the claim itself can stay declarative.

---

### Files

- Report: `/tmp/claude-0/-home-user-Former-Teachers/a24edd69-63fe-5960-a606-96920452dc5a/scratchpad/research/voice_openings.md`
- PDFs and page-marked text dumps (`*.pages.txt`, one `<<<<< PDFPAGE n >>>>>` marker per page, so every quote above can be re-located): same directory.
