# THE PLACE OF NUMBERS IN OECD EDUCATION PUBLICATIONS

Empirical slice for the re-entry policy paper. Everything below comes from PDFs I downloaded and
parsed locally. Nothing is from memory. Where a claim is made about "how they write", at least two
verbatim quotes from different publications are attached, each with a locator.

---

## 1. CORPUS

Four full OECD education publications, all downloaded as PDF from `www.oecd.org` and text-extracted
with `pdftotext -layout`. All four parsed cleanly; no HTML fallback was needed.

| Tag | Publication | Series | Pages | URL |
|---|---|---|---|---|
| **WP347** | *A second career in teaching: Exploring practices and evidence for training, supporting and retaining second-career teachers* (2026) | OECD Education Working Papers No. 347 | 65 | `oecd.org/content/dam/oecd/en/publications/reports/2026/07/a-second-career-in-teaching_4b585438/37722003-en.pdf` |
| **EPP122** | *Preparing teachers for digital education: Continuing professional learning on digital skills and pedagogies* (2025) | OECD Education Policy Perspectives No. 122 | 38 | `oecd.org/content/dam/oecd/en/publications/reports/2025/05/preparing-teachers-for-digital-education_13a76e57/af442d7a-en.pdf` |
| **EPPPISA** | *Teacher support for student learning: Insights from PISA* (2025) | OECD Education Policy Perspectives | 54 | `oecd.org/content/dam/oecd/en/publications/reports/2025/06/teacher-support-for-student-learning_1433548a/97b3a899-en.pdf` |
| **EPO2024** | *Education Policy Outlook 2024: Reshaping Teaching into a Thriving Profession from ABCs to AI* | Education Policy Outlook (flagship) | 147 | `oecd.org/content/dam/oecd/en/publications/reports/2024/11/education-policy-outlook-2024_0411a0c4/dd5140e4-en.pdf` |

WP347 is the closest existing analogue to our paper: same topic (career changers entering teaching),
same genre, published by the same directorate. EPP122 and EPPPISA are the *Education Policy
Perspectives* series — OECD's own name for this genre is on the cover: "policy paper". EPO2024 is
the flagship whose Chapter 2 is literally "Addressing teacher shortages", and whose Chapter 2 policy
menu includes "supporting re-entry".

**Note:** `one.oecd.org` (the EDU/WKP working-document host) returns 403 through the proxy, so all
four publications come from the OECD content CDN. Locators below are **printed page numbers** as
they appear on the page, verified per page; where a section has no printed number I give the section
heading instead.

---

## 2. THE COUNTING RULE (stated explicitly, applied mechanically)

A **numeral** is one maximal numeric expression appearing in *running prose*. Counted once per
expression: `46.7%` = 1; `"between 66% and almost 100%"` = 2; `"29 of 32"` = 2; `"EUR 25 000"` = 1.

**Excluded** (these are not "numbers doing rhetorical work"):

- calendar years, year spans and decades — `2022`, `2012-2022`, `2024/25`, `the 1980s`, `2025–2030`
- numbered citation apparatus — `[124]`, `(OECD, 2024[5])`, `Vol. 21/6`, `pp. 381-391`
- cross-references — `Figure 2.1`, `Table B.15`, `Box 3`, `Chapter 4`, `Annex A`, `ISCED 1-3`
- survey/programme names carrying a year — `PISA 2022`, `TALIS 2024`, `COVID-19`
- enumerated list markers (`1.`, `2.`, …), footnote markers, page numbers, running heads, URLs/DOIs
- everything inside figures, tables, axis labels, figure captions, `Note:` and `Source:` lines

**Included:** percentages, percentage points, counts of people/countries/jurisdictions/schools,
currency amounts, ratios, index values, effect sizes, durations in numerals.

**Spelled-out quantities** (`half`, `two-thirds`, `a quarter`, `one in five`, `more than`) are counted
**separately** as a second metric, because the central finding turns on the substitution of one for
the other.

Text was segmented by section using heading anchors, boxes were extracted separately and removed
from body counts so the two are disjoint, and every counted token was manually audited (the audit
caught and removed three classes of contamination: list markers, figure axis fragments such as
`R² = 0,14`, and `OECD average-29 refers to…` note lines).

---

## 3. HEADLINE TABLE — NUMBER DENSITY BY SECTION

`n/1000` = counted numerals per 1 000 words of prose. `w/1000` = spelled-out quantities per 1 000 words.

### WP347 — *A second career in teaching* (Working Paper No. 347)

| Section | Words | Numerals | **n/1000** | Word-quantities | w/1000 |
|---|---:|---:|---:|---:|---:|
| Abstract | 145 | **0** | **0.0** | 1 | 6.9 |
| Introduction | 1 043 | 3 | **2.9** | 19 | 18.2 |
| Analytical body | 9 295 | 40 | **4.3** | 65 | 7.0 |
| Boxes (5) | 1 561 | 6 | **3.8** | 8 | 5.1 |
| Conclusions | 1 621 | 6 | **3.7** | 7 | 4.3 |

### EPP122 — *Preparing teachers for digital education* (Education Policy Perspectives No. 122)

| Section | Words | Numerals | **n/1000** | Word-quantities | w/1000 |
|---|---:|---:|---:|---:|---:|
| Abstract | 142 | **0** | **0.0** | 0 | 0.0 |
| Executive summary | 576 | **0** | **0.0** | 1 | 1.7 |
| Introduction (§1) | 108 | **0** | **0.0** | 0 | 0.0 |
| Analytical body (§2–§6) | 4 478 | 70 | **15.6** | 20 | 4.5 |
| Boxes (2) | 210 | 7 | **33.3** | 1 | 4.8 |
| Conclusions (§7) | 394 | **0** | **0.0** | 1 | 2.5 |

### EPPPISA — *Teacher support for student learning: Insights from PISA*

| Section | Words | Numerals | **n/1000** | Word-quantities | w/1000 |
|---|---:|---:|---:|---:|---:|
| Abstract | 137 | **0** | **0.0** | 0 | 0.0 |
| Executive summary | 930 | 1 | **1.1** | 4 | 4.3 |
| Introduction | 234 | 2 | **8.5** | 0 | 0.0 |
| Analytical body | 4 556 | 31 | **6.8** | 14 | 3.1 |
| Conclusions / recommendations | 818 | **0** | **0.0** | 0 | 0.0 |

*(This publication uses no boxes; it uses figures and one framing table instead.)*

### EPO2024 — *Education Policy Outlook 2024* (flagship; Chapter 2 "Addressing teacher shortages")

| Section | Words | Numerals | **n/1000** | Word-quantities | w/1000 |
|---|---:|---:|---:|---:|---:|
| Editorial | 853 | 1 | **1.2** | 3 | 3.5 |
| Executive summary | 962 | 5 | **5.2** | 4 | 4.2 |
| Ch.2 "In Brief" | 439 | **0** | **0.0** | 0 | 0.0 |
| Ch.2 Introduction | 257 | 1 | **3.9** | 1 | 3.9 |
| Ch.2 analytical body | 8 297 | 33 | **4.0** | 26 | 3.1 |
| Boxes | 671 | 1 | **1.5** | 4 | 6.0 |
| Ch.2 strategic considerations (recommendations) | 348 | **0** | **0.0** | 1 | 2.9 |

### The shape of the corpus

| Section type | Range of n/1000 across the four publications |
|---|---|
| **Abstract** | **0.0, 0.0, 0.0** (no abstract in EPO2024) |
| Executive summary / editorial / "In Brief" | 0.0 – 5.2 |
| Introduction | 0.0 – 8.5 |
| **Analytical body** | **4.0 – 15.6** |
| Boxes | 1.5 – 33.3 |
| **Conclusions / recommendations** | **0.0, 0.0, 0.0, 3.7** |

The distribution is a hump. Numbers are concentrated in the analytical middle and in set-off display
furniture. The two ends of the paper — the abstract at the front, the recommendations at the back —
are where numerals thin out or vanish entirely.

---

## 4. FINDING: THE ABSTRACT CARRIES NO NUMBERS AT ALL

**Every abstract in the corpus contains zero counted numerals.** WP347's abstract contains zero digit
characters of any kind — not even a year.

> "Recruitment difficulties, changing career patterns and growing classroom diversity have prompted
> many OECD education systems to look beyond traditional Initial Teacher Education to recruit
> experienced professionals from other fields. This working paper synthesises what is known about
> these second-career teachers (SCTs). It is structured around six questions: who they are, where
> they work, how they are prepared and supported, how they integrate into schools, what they
> contribute, and how they can be retained. Drawing on the international research literature, recent
> OECD data … and policy examples from OECD systems, the paper identifies key aspects to support
> effective preparation, sets out the conditions that shape SCTs' integration and retention, and
> considers what governments, schools and researchers might do to support this growing share of the
> teacher workforce."
> — **WP347, Abstract, p. 3** (145 words; 0 numerals; "six questions" spelled out)

> "The effective use of digital resources in schools requires not only technological infrastructure,
> but also human capacity. Teachers need to be prepared to unlock the potential of education
> technology, to enhance students' learning outcomes and to protect them from risks in an
> increasingly digital learning environment. This policy paper discusses how continuing professional
> learning (CPL) can prepare teachers for these challenging new tasks. Drawing on insights from
> PISA 2022 and comparative data collected through the Policy Survey on School Education in the
> Digital Age, this policy paper addresses the following questions: Do teachers have the skills they
> need for effective digital education? …"
> — **EPP122, Abstract, p. 3** (142 words; 0 numerals; the only digits are the survey name "PISA 2022")

> "This policy paper examines the support teachers provide for students in mathematics lessons,
> drawing on data from the Programme for International Student Assessment (PISA) 2022 and earlier
> cycles. … Overall, teacher support has **declined over the past decade (2012-2022) in most
> participating education systems.** This paper aims to address the question of how education systems
> can reverse this trend…"
> — **EPPPISA, Abstract, p. 1** (137 words; 0 numerals)

The EPPPISA abstract is the decisive case, because this is a *paper about a measured decline* — the
one abstract in the corpus that had every excuse to quote a magnitude. It quotes none. The size of
the decline is rendered as **"in most participating education systems"**. The numbers that would
support it (39 countries, 30 countries, 10-percentage-point declines) all wait until the body.

EPO2024 has no abstract; its equivalents are the Editorial (1.2/1000) and the Executive summary
(5.2/1000). Even the flagship Executive summary spends its 962 words on 5 numerals, three of which
sit in a single sentence about survey coverage.

**Verdict on charge (3), abstract half: the lead author is right, and the corpus is unanimous.**

---

## 5. FINDING: THE FIRST TWO PARAGRAPHS OF THE INTRODUCTION ARE ALSO NUMBER-FREE

Counted exactly, per publication, for the first two paragraphs of the introduction:

| Publication | Numerals in ¶1 | Numerals in ¶2 | First numeral arrives |
|---|---:|---:|---|
| WP347 | **0** | **0** | ¶3 (p. 8) |
| EPP122 | **0** | **0** | ¶2 of §2, i.e. the first *analytical* paragraph (p. 7) |
| EPPPISA | **0** | 2 | ¶2 (p. 13) |
| EPO2024 Ch.1 | **0** | **0** | ¶3 (p. 17) |
| EPO2024 Ch.2 | **0** | **0** | ¶3 (p. 45) |

### WP347, Introduction ¶1, p. 7 — 0 numerals in 128 words

> "Teaching as a second career is not new, but the policy attention it now receives is. People move
> into teaching from other professions for a range of reasons – the desire for meaningful work, a
> wish to contribute to society at a later stage of life, a change in personal circumstances – and
> research consistently identifies the same intrinsic and altruistic motivations that draw
> first-career teachers into the profession (Hunter-Johnson, 2015[1]; …). Across OECD countries,
> governments are investing more deliberately than at any previous point in pathways that bring
> experienced professionals from other fields into teaching. **More than two-thirds of countries
> surveyed** in the OECD Education Policy Outlook identify attracting new types of candidates and
> diversifying entry into the profession as priority objectives for 2025–2030 (OECD, 2024[5]). Three
> converging trends help explain why."

Note the mechanism: the one quantity that *is* asserted is written out as **"More than two-thirds of
countries surveyed"**, not as "64% of 33 systems".

### WP347, Introduction ¶2, p. 7 — 0 numerals in ~180 words

> "**A growing and persistent challenge of teacher recruitment** (Education International, 2024[6];
> ILO, 2024[7]; UNESCO, 2024[8]). Teacher shortages have been documented for decades, and PISA 2022,
> Education at a Glance 2024 and 2025, and TALIS 2024 confirm this trend across different education
> systems … **Measuring them is not straightforward** – countries use different methodologies and
> observe shortages at different stages of the recruitment process – but the underlying picture is
> consistent across measures (OECD, forthcoming[12]). In many countries, recruitment difficulties in
> education reflect broader labour shortages and are often linked to economy-wide tensions rather
> than unique to the profession … In the United States, for example, teaching positions go unfilled
> at low rates relative to the labour market as a whole (Bruno, 2026[13])."

This is the single most instructive paragraph in the corpus for us. It is *about* teacher shortages,
it is in the introduction of the OECD's own second-career-teacher paper, and it contains **not one
numeral**. It even declines to quantify the shortage on the explicit ground that quantification is
methodologically fragile.

### EPO2024, Chapter 1 Introduction, p. 17 — ¶1 and ¶2 have 0 numerals; ¶3 has 3

> ¶1: "Teacher shortages have exacerbated in recent years across some OECD countries and economies,
> making it an urgent priority for these education systems. They are influenced by multiple factors
> shaping supply and demand, including working conditions and salary disparities, as explored further
> in this chapter. …"
>
> ¶2: "In the Programme for International Student Assessment (PISA) 2022, **around half of students
> on average** across the OECD where in schools where school principals reported that teacher
> shortages hinder the school's capacity to provide instruction. This was a notable increase compared
> to previous cycles (OECD, 2023[2]). …"
>
> ¶3: "Between 2015 and 2022, the share of students whose principals reported them grew from **29% to
> 47%** on average across the OECD, despite a brief improvement in 2018 (**26%**). … in Poland,
> virtually no school principals reported a lack of teachers in 2015, but by 2022 this figure had
> surged to **nearly 50%** … **(Figure 1.1)**."

The pattern is explicit here: the same statistic is stated **twice** — first verbally in ¶2 ("around
half"), then numerically in ¶3 — and the numeric restatement ends by handing off to the figure.

### EPO2024, Chapter 2 Introduction, p. 45 — 1 numeral in 257 words, arriving in ¶3

> ¶1: "Building on the emerging challenges of teacher shortages across some OECD education systems
> (see Chapter 1), policymakers can explore policy responses informed by efforts in other systems.
> Examples gathered from the EPO Survey 2024 reveal diverse, recent initiatives to address this need.
> These range from local-level approaches, such as reducing barriers to entering the profession … to
> more systemic efforts like enhancing career pathways, reviewing salary incentives, and implementing
> campaigns to elevate the status and prestige of teaching."
>
> ¶3: "Regarding attraction, **two-thirds** of respondents prioritised raising the profession's
> status, enhancing institutional leadership, and diversifying pathways into teaching **(Figure
> 2.1)**. While attracting new candidate types received less emphasis, **64%** of systems considered
> it important. Notably, Brazil and Spain were the only systems prioritising teacher retention over
> attraction."

### The one partial counter-example

**EPPPISA is the exception** — its introduction ¶2 does carry two numerals, at p. 13:

> "However, teacher support has declined over the past decade (2012-2022) in most education systems.
> For instance, the proportion of students reporting that the teacher continues teaching until the
> students understand declined in **39 countries and economies** during this period. Similarly, the
> teaching support practice of showing an interest in every student's learning, and that of giving
> extra help to students who need it, declined in **30 countries/economies**. How can education
> systems reverse this trend and enhance teacher support for their students?"

Even here: ¶1 is number-free; the numbers in ¶2 are **counts of countries**, not effect magnitudes;
and the paragraph terminates in the paper's governing question. Its introduction density (8.5/1000)
is the highest in the corpus and still below its own body.

---

## 6. FINDING: WHAT WORK A NUMBER DOES WHEN IT APPEARS

Twenty number-bearing sentences sampled across all four publications, classified. Every one carries a
locator.

### (a) Establishes scale — the size of a population or a phenomenon (5)

1. "Across OECD countries that participated in TALIS 2024, an average of **19%** of lower secondary teachers fit the definition of second-career teacher used in this paper…" — *WP347, p. 14*
2. "The 2024 cycle of TALIS – responses from **280 000** educators from **55** education systems – identified teachers who did not choose teaching as a first career…" — *WP347, p. 9*
3. "Recent data also indicate that, at a minimum, **411 549** teaching positions were either unfilled or filled by teachers not fully certified for their assignments, representing roughly one in eight teaching positions nationally…" — *WP347, p. 35*
4. "On average across OECD countries, students reported spending **3.1** hours per day on digital devices at school (**2.0** hours for learning activities and **1.1** hours for leisure), which amounts to **60%** of the time they spend in regular lessons per school day…" — *EPP122, p. 7*
5. "In 2022, nearly half (**47%**) of school principals across OECD countries reported that teacher shortages were hindering instruction at the lower secondary level – up from **29%** in 2015." — *EPO2024, Executive summary, p. 11*

### (b) Contrasts countries — the number exists to mark a spread (5)

6. "Figure 5 shows that this average masks very substantial variation across systems, with shares ranging from **36%** in Iceland to under **5%** in Japan, Türkiye and Korea, all systems where teaching is a relatively closed profession…" — *WP347, p. 14*
7. "In the Flemish Community of Belgium, only **6.4%** of teachers have a migration background, compared to **39.6%** of the student population…" — *WP347, p. 33*
8. "For example, in Belgium and France, at least **30%** of students attended schools whose principals reported that teachers lacked the necessary skills … (In contrast with Austria, Ireland, Korea, Latvia, Lithuania, Slovenia and Sweden, where only up to **5%** of students did) (Figure 1)." — *EPP122, p. 7*
9. "…the share of students reporting that their 'teacher gives extra help when students need it' … averaged **70%** across OECD countries, ranging from over **85%** in Guatemala and Paraguay to below **60%** in Greece, Mongolia, Poland and Türkiye." — *EPPPISA, p. 19*
10. "In Japan, Hungary and Iceland, this gap was as large as **20** percentage points. Statistically significant gaps were also observed in Slovenia (**9** percentage points) and Spain (**11** percentage points) (Figure 1)." — *EPP122, p. 7*

### (c) Supports a claim just made — the sentence before it states the finding in words (4)

11. "Most OECD countries have established formal pathways for SCTs to obtain teaching qualifications: **16** out of **28** countries and economies with available data report dedicated routes, while **12** require SCTs to follow the same qualification process as other teacher candidates (see Table A A.1 in Annex A)." — *WP347, p. 17*
12. "Despite the growing presence of SCTs in schools, only a minority of education systems are currently able to systematically identify them in national statistics (see Table 1). … Among the **28** countries and economies that participated in the … INES ad hoc survey on teacher shortages, only **5** explicitly classify SCTs as a separate category…" — *WP347, pp. 16–17*
13. "Results of the Policy Survey … show that **29** of **32** participating jurisdictions mention strengthening teachers' digital skills and pedagogies in their central-level strategies guiding digital education policy (Figure 2). Of these systems, **7** include specific time-bound goals … and **22** describe specific policy initiatives on the subject (Annex Table B.1)." — *EPP122, p. 10*
14. "The Policy Survey shows that more than two thirds of education systems (**28** of **35**) had taken some steps to address these barriers. For example, **27** of **35** jurisdictions reported offering training on the use of digital resources for teaching free of charge (Figure 5)." — *EPP122, p. 15*

Note the construction in 14: **the claim is asserted verbally first ("more than two thirds"), and the
numerals are parenthetical corroboration.** This is the corpus's default sentence shape.

### (d) Reports a study's result — the number belongs to someone else's research (3)

15. "In the United States, where estimates are particularly stark, attrition accounts for between **66%** and almost **100%** of the annual teacher demand (Sutcher, Darling-Hammond and Carver-Thomas, 2019[137])." — *WP347, p. 35*
16. "…a meta-analysis of **92** experimental and quasi-experimental studies published between 2000 and 2018 suggests that mathematics and science teachers' use of new digital tools tended to have a stronger positive effect on student outcomes…" — *EPP122, p. 9*
17. "Replacing a single teacher can cost anywhere from USD **11 860** to **25 000** (Learning Policy Institute, 2024[139])." — *WP347, p. 35*

### (e) Sizes a policy effect — the number is an estimated consequence of an intervention (3)

18. "Austria has increased the number of initial teacher education students by **17%** since implementing their 'Excellent Profession' (Klasse Job) strategy (according to the EPO Survey 2024)." — *EPO2024, p. 53*
19. "The most significant predictor of teacher support was the quality of student-teacher relationships. Higher scores on this index were strongly associated with increased levels of teacher support (for a one-unit increase in the index of student-teacher relationships, a **0.37** increase in the index of teacher support)…" — *EPPPISA, p. 29*
20. "Teachers who reported that approaches to individualised learning were part of their initial teacher training education saw an increase of **0.24** in the index of teacher's self-efficacy in maintaining positive relationships with students." — *EPPPISA, p. 37*

### The distribution of that sample

| Work the number does | Count in sample of 20 |
|---|---:|
| Establishes scale | 5 |
| Contrasts countries | 5 |
| Supports a claim just made | 4 |
| Reports a study's result | 3 |
| Sizes a policy effect | 3 |

Two things are absent from this sample and from the corpus generally, and their absence is the point:

- **No number is used decoratively** — every one of the twenty is doing one of the five jobs.
- **No number states the paper's own thesis.** Categories (a) and (b) set up a problem or a spread;
  (c) corroborates a sentence already written in words; (d) and (e) belong to cited research or to a
  named national programme. The argumentative claims of these papers are always made in prose and
  only then evidenced.

---

## 7. FINDING: THE HANDOFF TO TABLES AND FIGURES

Across the four publications I found **77 prose sentences containing a display reference**
(Figure/Table/Box/Annex Table). **In 55 of them (71%) the sentence contains no numeral at all**: it
states the finding in words and points at the display for the values.

| Publication | Sentences referencing a display | Of which zero numerals |
|---|---:|---:|
| WP347 | 16 | 14 (88%) |
| EPP122 | 19 | 5 (26%) |
| EPPPISA | 30 | 24 (80%) |
| EPO2024 | 12 | 12 (100%) |
| **Total** | **77** | **55 (71%)** |

*(EPP122 is the outlier because its body text narrates the results of a policy survey whose findings
are counts of jurisdictions; even there, its two boxes and its front and back matter follow the rule.)*

### Five sentences that point at a display instead of reciting it

> "As Figure 7 shows, SCTs are significantly more likely than first-career teachers to hold short
> fixed-term contracts and significantly less likely to hold permanent employment."
> — **WP347, p. 25** (0 numerals; the contract shares are all in the figure)

> "Looking at all teachers, around half report participating in formal induction programmes, and a
> similar share report informal induction activities – though here SCTs are significantly more likely
> to participate than first-career teachers (see Figure 8)."
> — **WP347, p. 29** (0 numerals; "around half", "a similar share")

> "As illustrated in Figure 2, students who feel more supported by their teachers in their mathematics
> lessons tend to achieve higher mathematics performance, report lower levels of mathematics anxiety,
> and exhibit greater motivation to learn new things at school – this holds true even after accounting
> for students' and schools' socio-economic profiles."
> — **EPPPISA, p. 17** (0 numerals; three separate effects, none quantified in prose)

> "During the 2012-2022 period, the most significant and widespread decline was observed in the
> teacher support practice of continuing teaching until the students understand (see Figure 6)."
> — **EPPPISA, p. 21** (0 numerals; superlative claim, magnitude delegated)

> "Regarding attraction, two-thirds of respondents prioritised raising the profession's status,
> enhancing institutional leadership, and diversifying pathways into teaching (Figure 2.1)."
> — **EPO2024, p. 45** (0 counted numerals; the one quantity is spelled out, and the exact shares are
> in the figure)

### The convention, stated

1. **The claim goes in the sentence; the values go in the display.** The prose asserts *direction,
   rank, significance or spread* — "more likely", "around half", "the most significant and widespread
   decline", "tend to have lower mean scores".
2. **The reference is terminal.** It sits at the end of the sentence, in parentheses (`(Figure 1)`,
   `(Table B.15)`) or as a lead-in clause (`As Figure 7 shows,` / `As illustrated in Figure 2,`).
   Nine of the corpus's most-quoted display sentences use the parenthetical form.
3. **A display reference licenses the prose to stay verbal.** "around half", "a similar share", "a
   minority of education systems", "particularly widespread" are all fully acceptable *because* the
   reader can go and get the number.
4. **Where numerals do accompany a display reference, they are a selected two or three** — the
   OECD average and the two extremes — never the series. See sentence 6 above (Iceland 36% / Japan,
   Türkiye, Korea under 5%) and sentence 9 (OECD average 70%, top 85%, bottom 60%).

---

## 8. FINDING: PROGRAMME STATISTICS ARE PARKED, NOT RECITED

This is the charge most directly relevant to a paper about re-entry programmes. The corpus answer is
unambiguous: **OECD does not run programme funnels through the argument.** Granular programme
parameters go to annex tables and boxes; the prose keeps at most one or two figures — typically a
budget or a coverage target — and even those sit in a set-off bullet, not in the running argument.

### The structural evidence: EPO2024 Chapter 2

Splitting Chapter 2's body prose into the *analytical argument* and the *set-off country-example
bullets*:

| Chapter 2 body prose | Words | Numerals | n/1000 |
|---|---:|---:|---:|
| Analytical argument | 5 734 | 10 | **1.7** |
| Country-example bullets | 3 024 | 26 | **8.6** |

The argument runs at **1.7 numerals per 1 000 words**. The country cases carry five times the numeric
load, and they are typographically demoted to bullets. This is exactly the architecture our lead
author is asking for, executed in the OECD's own flagship: general claims in the argument stream,
numbers in the demoted cases.

### Passage 1 — WP347, Box 4 (the Netherlands), p. 24

An entire national side-entry regime described in **260 words with 3 numerals**, and it is **in a
box**:

> "In the Netherlands, **roughly a quarter** of all ITE students are registered as side-entrants,
> defined as those holding a bachelor's or master's degree from a non-education sector who are not
> eligible to teach. A wide range of options is available: In 2018/2019, there were **384** different
> routes into teaching, **74** of them designed specifically for side entrants.
>
> To ensure that these side entrants achieve a level of quality similar to regular ITE students,
> teacher training centres are bound by statutory competency requirements, an accreditation framework
> and national knowledge tests, all periodically reviewed and some enshrined in legislation. …
>
> Before applying, an agreement is drawn up between the side entrant, the school board where they will
> be employed and the ITE institution … The government provides grants of up to **EUR 25 000** for
> each school board employing a side entrant. The intake assessment itself addresses three questions:
> (i) whether the candidate can teach independently; (ii) whether they can reasonably be expected to
> obtain an official teaching qualification within two years; and, if so, (iii) what schooling and
> guidance are needed to get there. …"

What is *not* here: no applicant count, no acceptance rate, no completion rate, no retention rate, no
total programme budget. The share is verbalised ("roughly a quarter"); "three questions" and "two
years" are spelled out. The only three numerals are a route count, a sub-count, and a unit grant.

### Passage 2 — EPP122, country examples for peer-learning support, p. 12

Three national programmes, in a bulleted list beneath the analytical sentence:

> "For example, in the Policy Survey, **17** of **35** jurisdictions reported that they provide central
> support for teachers' engagement in peer learning on the use of digital resources (e.g. mentoring
> schemes or communities of practice) (Figure 3). This support has taken different shapes across
> countries and examples – past and ongoing – include the following:
>
> • **Finland** has supported peer-learning activities to strengthen teachers' use of digital
> technologies and pedagogical innovation early on. Between 2016 and 2018, Finland invested **EUR 23
> million** to build a network of tutor teachers with the goal to reach all **2 500** basic education
> schools in the country. Tutor teachers were paired with basic education teachers to provide peer
> support, one-to-one guidance as well as team teaching … An evaluation of the programme highlighted
> the broad availability of tutor teacher services across schools in the country and a positive
> self-reported impact on teachers' pedagogical digital skills (Pennanen et al., 2021[27]).
>
> • In 2020/21, **Luxembourg** started recruiting a pool of teachers specialised in digital skills …
> The specialised teachers must hold a master's degree in media didactics and ICT and work with
> teachers across multiple schools. …
>
> • The **Slovak Republic's** National Centre for the Digital Transformation of Education (NCDTV) was
> co-founded by the Ministry of Education…"

Numeric content in prose: Finland **2** (a budget and a coverage target). Luxembourg **0** in ~95
words. Slovak Republic **0**. And note the Finland evaluation result is reported *qualitatively* —
"broad availability … and a positive self-reported impact" — where a lesser paper would have quoted
an effect size.

### Passage 3 — EPO2024, England and Austria, pp. 50 and 53

> "• In England (United Kingdom), bursaries and scholarships for up to **GBP 30 000** are available
> tax-free for initial teacher education students in priority secondary subjects such as chemistry,
> computing, mathematics and physics. These financial incentives are designed to attract more
> applications. Additionally, Targeted Retention Incentive payments of up to **GBP 6 000** after-tax
> are offered to early-career teachers in these subjects who choose to work in disadvantaged schools."
> — **EPO2024, p. 50** (2 numerals; both are unit prices of the policy instrument, not outcomes)

> "• Austria has increased the number of initial teacher education students by **17%** since
> implementing their 'Excellent Profession' (Klasse Job) strategy … The strategy focuses on attracting
> three new groups: career changers, high school students aged **17** or **18** considering a teaching
> degree and people interested in teaching specific subjects as a secondary job. …
>
> • Austria also offers career changers opportunities in early childhood and care … ('Quereinstieg').
> Typically, these persons come from the private sector or research fields and can teach general
> education subjects. So far, more than **6 250** persons have registered, with about **2 940**
> certified career changers ready to apply for job offers, and over **700** employed for the 2024
> school year."
> — **EPO2024, p. 53**

The Austrian *Quereinstieg* sentence is the **one genuine recruitment funnel in prose** anywhere in
the corpus (registered → certified → employed). It is a single sentence, it is inside a bulleted
country example, and it is the exception that shows the rule: the corpus permits a funnel exactly
once, for one country, in demoted typography.

### Passage 4 — WP347, Annex B: where the programme detail actually lives

WP347 does not describe its programmes in prose at all. It builds a table and says so:

> "The following table demonstrates some examples of alternative programmes and scholarships
> specifically designed for SCTs. The overview is not meant to serve as exhaustive, nor does it intend
> to highlight programmes considered 'good'. The table merely serves as to indicate that a significant
> portion of OECD countries have training programmes specifically focusing on SCTs."
> — **WP347, Annex B, p. 59** (the entire prose introduction to the annex: **0 numerals**)

The table's columns are *Country | Name of the Programme and Link | Characteristics | Prior
professional or work experience needed to enrol | Work part time or full time | Study time allocated |
Economical support*, and its cells carry all the granularity — "Between 1.5 and 3 years of relevant
professional experience"; "complete the certification programme within up to 8 years"; "Between 135
and 150 ECTS with mandatory 20 ECTS internship (90 ECTS shorter than traditional ITE): 4 hours/week of
teaching per subject"; "Grants available for a contribution up to 10 000 DKK". **None of this appears
in the paper's running text.**

### The densest prose in the corpus is inside a box

EPP122's boxes run at **33.3 numerals per 1 000 words** — more than double its own body and eight
times its front matter. The reason is instructive: that is where the survey's own composition is
parked, so it does not have to interrupt the argument.

> "The Policy Survey on School Education in the Digital Age was administered to collect international
> comparative evidence on digital school education policies. The survey was completed by **37**
> jurisdictions (**26** OECD member countries, **7** sub-national entities and **4** non-member
> economies). … The Policy Survey was administered over the course of 2024 and reflects the policies
> of participating jurisdictions in January 2025. …"
> — **EPP122, Box 1, "The Policy Survey on School Education in the Digital Age", p. 11**

Four numerals in one sentence — the single densest sentence in the corpus — and it is quarantined in
a box, not in the introduction where a weaker paper would put its methods.

---

## 9. WHERE THE LEAD AUTHOR IS RIGHT, AND WHERE HE NEEDS QUALIFYING

**He is right, decisively, about abstracts.** Three abstracts, three zeroes. WP347's has no digits at
all. This is not a tendency; it is a rule of the genre, and it holds even for a paper whose entire
subject is a measured decline (EPPPISA).

**He is right about introductions, and more strongly than he probably realises.** First paragraphs are
number-free in 5 of 5 introductions examined. The strongest single datum for him: WP347's second
introductory paragraph is *about teacher shortages*, and it not only omits numbers but explicitly
declines to quantify — "Measuring them is not straightforward" (p. 7).

**He is right about conclusions and recommendations, which he did not raise.** Three of four
conclusion/recommendation sections contain **zero** numerals (EPP122 §7, EPPPISA Conclusions, EPO2024
Ch.2 strategic considerations). The fourth, WP347, runs at 3.7/1000 and uses its six numerals to
restate the headline share once. **Recommendations in this genre are written entirely in prose.** If
our recommendations carry numbers, we are out of genre.

**He needs qualifying on the analytical body.** OECD papers are not number-shy in the middle. Body
densities run **4.0 to 15.6 numerals per 1 000 words**, and EPP122's body reaches 15.6 — roughly one
numeral every four lines. "The prose fetishises numbers" is a valid charge against our front and back
matter; it is not a licence to strip the analytical chapters. The corpus norm for an analytical
chapter is roughly **4–8 numerals per 1 000 words**, rising toward 15 only when the chapter's job is
to narrate a survey's results.

**He needs qualifying on one flagship introduction.** EPO2024's Chapter 1 introduction does reach
numbers by its third paragraph (29% → 47%, 26%, nearly 50%), and EPPPISA's introduction carries two
numerals in ¶2. So "OECD never puts numbers in introductions" is too strong. The accurate rule is
**delay and verbalise**: the first one or two paragraphs are prose-only, the quantity is stated in
words first ("around half"), and the numeric restatement, when it comes, ends in a figure reference.

**A distinction he has not drawn, which the data forces.** The corpus does not avoid *quantity*; it
avoids *numerals*. In WP347's introduction the density of spelled-out quantities is **18.2 per 1 000
words — six times its numeral density of 2.9**. "More than two-thirds of countries", "around half",
"a minority of education systems", "roughly a quarter", "one in five", "particularly widespread" do
the quantitative work in the framing sections. The rule is not "say less about magnitude". It is
**"say magnitude in words at the front and back; say it in digits only in the middle, and only next to
a figure reference."**

---

## 10. RULES THIS IMPLIES FOR OUR PAPER

1. **Strip every numeral from the abstract.** Three of three OECD abstracts contain zero. If a
   magnitude must appear, write it as words ("in most systems", "around a fifth"). Target: 0.0
   numerals per 1 000 words.

2. **Write the first two paragraphs of the introduction without a single numeral.** Five of five
   introductions in the corpus do this. State the problem, the trend and the paper's question in prose.

3. **Delay the first numeral to introduction paragraph three at the earliest, and make it a count of
   countries or a share, not an effect size.** Follow EPO2024 Ch.1 and EPPPISA: the numeric paragraph
   restates what paragraph two already said in words.

4. **State every magnitude in words first, then let the numeral corroborate it in the same or the next
   sentence.** Copy EPP122 p. 15 exactly: "more than two thirds of education systems (28 of 35) had
   taken some steps". The verbal claim leads; the digits are parenthetical.

5. **Do not quantify what is methodologically contested — say so instead.** WP347 p. 7 refuses to size
   the shortage and states why. If our re-entry data are thin, write the refusal; do not fill the gap
   with a precise-looking number.

6. **Hold the analytical chapters to roughly 4–8 numerals per 1 000 words.** Do not strip them. Below
   4 the chapter stops being analysis; above 15 it becomes a data dump. Measure your draft.

7. **End every numeric sentence with a display reference.** `(Figure 3)`, `(Table 2)`, `see Figure 7`.
   71% of display-referencing sentences in the corpus carry no numeral at all — the reference is what
   buys you the right to stay verbal.

8. **When a display exists, put the claim in the sentence and the values in the display.** Write "SCTs
   are significantly more likely than first-career teachers to hold short fixed-term contracts (Figure
   7)", not the three percentages.

9. **Quote at most three numerals per display: the average and the two extremes.** Never walk the
   reader through a series.

10. **Write the conclusions and recommendations with zero numerals.** Three of four OECD
    conclusion sections contain none. Recommendations are imperatives in prose. If a number feels
    necessary in a recommendation, the recommendation is under-specified as policy, not
    under-evidenced.

11. **Move every programme parameter — durations, credits, eligibility thresholds, grant amounts,
    intake requirements — into an annex table.** WP347 puts all of it in Annex B and introduces the
    table with a three-sentence, zero-numeral paragraph.

12. **Cap a national-programme description in prose at two numerals, and make them the instrument's
    price or reach, not its outcomes.** England: GBP 30 000 and GBP 6 000. Finland: EUR 23 million and
    2 500 schools. Netherlands: EUR 25 000.

13. **Do not recite participant funnels in the argument stream.** Registered → certified → employed
    appears exactly once in 25 000 words of body prose across four publications (EPO2024 p. 53,
    Austria), and it is inside a bulleted country example. If we need a funnel, it goes in a box or a
    table.

14. **Put survey composition, sample sizes and coverage in a box, not in the introduction.** EPP122
    Box 1 carries four numerals in one sentence precisely so the argument never has to.

15. **Set country cases in demoted typography — bullets or boxes — and let them carry the numeric
    load.** EPO2024 Ch.2 runs its argument at 1.7 numerals per 1 000 words and its country bullets at
    8.6. This is the same architecture the lead author is demanding for charge (2); the number
    discipline and the cases-as-evidence discipline are one rule, not two.

16. **Report qualitative evaluation findings qualitatively.** EPP122 p. 12 reports the Finnish tutor
    programme's evaluation as "broad availability … and a positive self-reported impact". Resist
    manufacturing an effect size where the source gives an impression.

17. **Before submitting, run the count.** Section-by-section numerals per 1 000 words, with years,
    citations and cross-references excluded. Abstract 0. Introduction ¶1–¶2: 0. Conclusions: 0.
    Body: 4–8. Any section outside those bands needs a reason.
