# OECD voice: findings, recommendations and hedging

**Empirical study of how OECD education publications write policy conclusions.**
Prepared for the former-teachers / re-entry policy paper. Every claim below is anchored to
verbatim text from a PDF I opened myself. Nothing here is from memory of "what OECD papers
are like."

---

## 0. Corpus and method

Eleven OECD education publications, all opened as PDFs and converted to page-tagged plain text
(`pdftotext -layout`, one file per page marker). Total **568,886 words**.

| # | Short name | Full title | Year | DOI (from PDF metadata) | Pages |
|---|---|---|---|---|---|
| A | `wp347` | *A Second Career in Teaching: Exploring practices and evidence for training, supporting and retaining second-career teachers*, OECD Education Working Papers No. 347 | 2026 | 10.1787/37722003-en | 65 |
| B | `wp342` | *Alternative Pathways into Teaching: Broadening access and expanding diversity*, OECD Education Working Papers No. 342 | 2026 | 10.1787/80bfc617-en | 61 |
| C | `flying_start` | *A Flying Start: Improving Initial Teacher Preparation Systems* | 2019 | 10.1787/cf74e549-en | 168 |
| D | `teachers_matter` | *Teachers Matter: Attracting, Developing and Retaining Effective Teachers* | 2005 | 10.1787/9789264018044-en | 240 |
| E | `epo2024` | *Education Policy Outlook 2024: Reshaping Teaching into a Thriving Profession from ABCs to AI* | 2024 | 10.1787/dd5140e4-en | 147 |
| F | `epo2025` | *Education Policy Outlook 2025: Transforming Pathways for Lifelong Learners* | 2025 | 10.1787/c3f402ba-en | 156 |
| G | `talis2024` | *Results from TALIS 2024: The State of Teaching* | 2025 | 10.1787/90df6235-en | 307 |
| H | `epp122` | *Preparing Teachers for Digital Education*, OECD Education Policy Perspectives No. 122 | 2025 | 10.1787/af442d7a-en | 38 |
| I | `epp_digitalres` | *Teacher Policies to Support the Use of Digital Resources in the Classroom*, OECD Education Policy Perspectives | 2025 | 10.1787/d16e9614-en | 53 |
| J | `teachers_time` | *Making the Most of Teachers' Time*, OECD Education Policy Perspectives No. 29 | 2021 | 10.1787/d005c027-en | 16 |
| K | `wp235` | *Policies to Support Teachers' Continuing Professional Learning*, OECD Education Working Papers No. 235 | 2020 | 10.1787/247b7c4d-en | 60 |

**Provenance note.** All eleven are the OECD Publishing PDFs (`Author: OECD`, `Creator: OECD
Publishing Systems`, DOI in the `Subject` metadata field). PDF URLs I verified directly during
this session:

- A: `https://www.oecd.org/content/dam/oecd/en/publications/reports/2026/07/a-second-career-in-teaching_4b585438/37722003-en.pdf`
- B: `https://www.oecd.org/content/dam/oecd/en/publications/reports/2026/03/alternative-pathways-into-teaching_c10f34a2/80bfc617-en.pdf`
- C: `https://www.oecd.org/content/dam/oecd/en/publications/reports/2019/04/a-flying-start_68c92468/cf74e549-en.pdf`
- D: `https://www.oecd.org/content/dam/oecd/en/publications/reports/2005/06/teachers-matter_g1gh5af3/9789264018044-en.pdf`
- E landing page: `https://www.oecd.org/en/publications/education-policy-outlook-2024_dd5140e4-en.html`
- G landing page: `https://www.oecd.org/en/publications/results-from-talis-2024_90df6235-en.html`

`https://doi.org/10.1787/...` returns **403** to a scripted client for all of them (OECD bot
filter), so DOI resolution is not usable as a check; the DOIs above are read out of the PDFs'
own metadata. I read the **PDF**, not the iLibrary HTML, in every case. All locators below are
given as **PDF page (printed page)**.

---

## 1. Fifteen recommendation sentences, verbatim, with grammatical form

These fifteen are the core sample used for the counts in §1.2 and §3. All are in the authorial
voice (not quoting a national document, not a figure note).

**1.** *(C, `flying_start`, PDF p. 38 / printed p. 36, §2.3 "Creating a national research strategy…")*
> "Policy makers should involve various ITP and related system stakeholders in the development and implementation of their national research strategy, including researchers, teacher educators, school leaders and teachers."

**2.** *(C, PDF p. 62 / printed p. 60, §3.3.1 "What can policy makers do?")*
> "Therefore, policy makers should invest resources in developing longitudinal information systems that facilitate the collection and use of comprehensive data across institutions and over time."

**3.** *(C, PDF p. 62 / printed p. 60, "Providing multiple paths and support to enter teaching while maintaining quality standards")*
> "While such opportunities provide flexible and specialised training options for people to enter the profession, policy makers need to ensure that these programmes and routes also satisfy quality standards of teacher education."

**4.** *(C, PDF p. 64 / printed p. 62)*
> "Policy makers should consider teacher education as a key lever in promoting teaching as a profession."

**5.** *(H, `epp122`, PDF p. 13 / printed p. 11, §4)*
> "To allow teachers to develop and broaden these skills and update their knowledge on digital education, policy makers can promote CPL activities in different formats and with different degrees of formality."

**6.** *(H, PDF p. 14 / printed p. 12, §4)*
> "Policy makers should therefore consider a range of formats beyond traditional seminar-style training when seeking to promote an effective CPL offer."

**7.** *(B, `wp342`, PDF p. 42 / printed p. 41, "Sustainable funding models")*
> "Systems must also ensure adequate resourcing for induction, mentoring and ongoing professional development (Lampert and Dadvand, 2024[99]; Chifeng Dai et al., 2007[51])."

**8.** *(B, PDF p. 44 / printed p. 43, "Quality assurance through universal teaching standards")*
> "Systems should systematically collect and analyse data on programme effectiveness and the long-term impact of graduates (Walsh and Jacobs, 2007[26])."

**9.** *(B, PDF p. 47 / printed p. 46, conclusion)*
> "However, to contribute meaningfully, the programmes and systems must ensure that all teachers, regardless of their route into the profession are well prepared for the realities of the classroom."

**10.** *(A, `wp347`, PDF p. 41 / printed p. 40, "Considerations for policy and practice" — bold lead-in)*
> "Treat retention, not recruitment, as the central design question."

**11.** *(A, PDF p. 41 / printed p. 40, same section)*
> "Education systems considering or expanding SCT pathways should plan retention into the design of those pathways from the outset, through induction, school-level support, workplace conditions and stable employment terms."

**12.** *(E, `epo2024`, PDF p. 52 / printed p. 50, "Supporting re-entry of teachers who left the profession")*
> "Education systems could benefit from flexible re-entry pathways that facilitate smooth transitions back into the profession, attracting teachers who may wish to return later in their careers and who could fill workforce gaps, bringing new skills with them."

**13.** *(E, PDF p. 52 / printed p. 50, preceding section on lowering entry barriers)*
> "Policymakers must therefore balance the need for quick fixes with sustainable, evidence-based workforce planning (Kelly, Sim and Ireland, 2018[8])."

**14.** *(F, `epo2025`, PDF p. 16 / printed p. 14, Executive summary, "Mid-career (ages 35 to 44)")*
> "To empower mid-career adults, policymakers should consider financial support, structural flexibility, and strong engagement mechanisms that remove barriers."

**15.** *(D, `teachers_matter`, PDF p. 210 / printed p. 208, Ch. 6, "Providing more flexible working hours and conditions")*
> "One possible model would be to offer older teachers the option of a gradual reduction in their working hours for a lower salary, but retaining their long-term pension benefits."

### 1.1 Six more, for the specific patterns our paper will need

*(Not counted in the fifteen; kept because they are the closest analogues to what we are writing.)*

**S1.** *(A, PDF p. 41 / printed p. 40 — the other three bold imperative leads in the same section)*
> "Invest in preparation rather than compromising it."
> "Design induction around novice-teacher status, not professional seniority."
> "Strengthen administrative monitoring of SCTs."

**S2.** *(D, PDF p. 209 / printed p. 207)*
> "However, school systems could be more proactive in ensuring that schools provide attractive working environments for older teachers."

**S3.** *(D, PDF p. 209 / printed p. 207)*
> "Therefore, programmes aiming at preventing career burn-out and retaining important skills in schools would be beneficial."

**S4.** *(F, PDF p. 16 / printed p. 14)*
> "Policies should also strengthen recognition and quality assurance so that learning – whether digital, modular or workplace-based – leads learners to portable, valued qualifications that support career mobility and resilience."

**S5.** *(G, `talis2024`, PDF p. 31 / printed p. 29, Executive summary, "Supporting novice teachers")*
> "Given the specific challenges that novice teachers face, education systems should provide them with tailored support."

**S6.** *(C, PDF p. 64 / printed p. 62)*
> "Policy makers should accompany such promotion with a clear communication strategy to deepen the discourse around teaching in the media and public."

### 1.2 Counts of grammatical form across the fifteen

| Form | Count | Items |
|---|---|---|
| `[Actor] should + bare infinitive` | **4** | 1, 2, 8, 11 |
| `[Actor] should consider + NP` (softened "should") | **3** | 4, 6, 14 |
| `[Actor] must + bare infinitive` | **3** | 7, 9, 13 |
| `[Actor] need(s) to + bare infinitive` | **1** | 3 |
| `[Actor] can + bare infinitive` (capability-as-advice) | **1** | 5 |
| `[Actor] could benefit from + NP` | **1** | 12 |
| **Bare imperative** (bold lead-in only) | **1** | 10 |
| **Impersonal conditional nominal** ("One possible model would be to…") | **1** | 15 |
| `policy makers may wish to…` | **0** | — |
| First-person ("we recommend", "it is recommended", "this paper recommends") | **0** | — |

**Subject of the recommendation, across the fifteen:**

| Subject | Count |
|---|---|
| "policy makers" / "policymakers" | **7** (1, 2, 3, 4, 5, 6, 13) |
| "systems" / "education systems" / "school systems" | **5** (7, 8, 9, 11, 12) |
| "policies" (the instrument, not the actor) | **1** (14 is "policymakers"; cf. S4) |
| No subject — bare imperative | **1** (10) |
| No subject — impersonal ("One possible model…") | **1** (15) |
| "governments" as the addressee of a recommendation | **0 in the fifteen** |

### 1.3 The two forms our lead author expects, tested against the corpus

**"Policy makers may wish to…"** — **2 occurrences in 568,886 words**, and *neither is a
recommendation*. Both are descriptive:

> "Some systems **may wish to** bring diverse experiences from the workforce into the classroom (Nielsen, 2016[17])."
> — G, `talis2024`, PDF p. 40 (printed p. 38). This describes system motives, not advice.

> "…attracting teachers who **may wish to** return later in their careers and who could fill workforce gaps…"
> — E, `epo2024`, PDF p. 52 (printed p. 50). Here "may wish to" belongs to the *teachers*, not the policy maker.

**"ought to"**: 0 occurrences in the whole corpus.
**"we recommend" / "it is recommended"**: 0 occurrences in the whole corpus.
**"may want to"**: 1 occurrence, again describing teachers, not advising ministries
(D, PDF p. 209: "many older teachers **may want to** continue making a contribution").

> **This contradicts the folk model of OECD prose.** OECD education publications do not write
> "policy makers may wish to consider…". The workhorse constructions are, in order,
> **`can` → `should` → `need to` → `must` → `could`**, with `should consider` as the standard
> softener. The deferential-subjunctive register simply is not there.

### 1.4 Nominalisation: where it actually lives

Nominalised gerund phrases are not used for sentence-level recommendations. They are used for
**headings, table cells and strategy lists** — the skeleton, not the prose. Two examples:

*(D, `teachers_matter`, PDF p. 12 / printed p. 10, "Table 1. Policy Implications")* — every cell
is a gerund, no verb of obligation anywhere in the table:
> "Improving the image and status of teaching" · "Capitalising on an oversupply of teachers" ·
> "Expanding the supply pool of potential teachers" · "Meeting short-term staffing needs" ·
> "Encouraging greater teacher mobility" · "Providing more flexible working hours and conditions" ·
> "Responding to ineffective teachers" · "Improving the knowledge base to support teacher policy"

*(C, `flying_start`, PDF p. 136 / printed p. 134, "Table 6.1. Strategies for improving ITP systems")*:
> "1. Supporting rigorous and relevant research on ITP" · "2. Introducing accreditation that
> incentivises ITP institutions to build their own evidence and implement a continuous improvement
> approach" · "6. Attracting, selecting and hiring 'the right' candidates" · "11. Building on the
> experience of effective induction and mentoring programmes"

So: **nominalisation is the architecture; modal verbs are the prose.** The nominalised label
names the policy direction; the paragraph underneath it then says "Policy makers should…".

---

## 2. How strongly do they commit? Hedging vocabulary and frequency

### 2.1 Corpus-wide frequency table

Raw counts, all eleven publications, 568,886 words. Right-hand column is occurrences per 10,000
words.

| Item | Count | per 10k |
|---|---|---|
| **can** | 1,825 | 32.1 |
| **may** | 636 | 11.2 |
| **likely** | 436 | 7.7 |
| **should** | 386 | 6.8 |
| **need(s) to** | 326 | 5.7 |
| **suggest(s)** | 218 | 3.8 |
| **tend(s) to** | 207 | 3.6 |
| **must** | 189 | 3.3 |
| **could** | 184 | 3.2 |
| *of which* "can help" | 156 | 2.7 |
| **promising** | 109 | 1.9 |
| **might** | 97 | 1.7 |
| *of which* "can support" | 55 | 1.0 |
| **appear(s) to** | 47 | 0.8 |
| **is/are encouraged to** | 13 | 0.2 |
| **may wish to** | 2 | 0.04 |
| **ought to** | 0 | 0 |
| **we recommend / it is recommended** | 0 | 0 |

### 2.2 Per-publication, and what the variation means

| Publication | words | should | must | could | can | need to | may | likely | promising |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| A `wp347` | 26,118 | 19 | 8 | 7 | 52 | 7 | 26 | 32 | 3 |
| B `wp342` | 26,223 | 17 | 29 | 5 | 92 | 7 | 66 | 13 | 2 |
| C `flying_start` | 61,319 | 60 | 18 | 14 | 355 | 67 | 32 | 11 | **72** |
| D `teachers_matter` | 120,075 | 76 | 42 | 47 | 195 | 112 | 112 | 89 | 9 |
| E `epo2024` | 60,903 | 34 | 45 | 38 | 254 | 35 | 71 | 13 | 10 |
| F `epo2025` | 62,325 | 26 | 23 | 17 | 292 | 25 | 22 | 23 | 6 |
| G `talis2024` | 138,701 | **126** | 10 | 39 | 302 | 25 | 181 | **240** | 1 |
| H `epp122` | 12,073 | 5 | 5 | 1 | 36 | 9 | 10 | 1 | 2 |
| I `epp_digitalres` | 17,235 | 2 | 6 | 2 | 60 | 11 | 14 | 0 | 1 |
| J `teachers_time` | 7,895 | 11 | 1 | 4 | 34 | 6 | 9 | 6 | 0 |
| K `wp235` | 36,019 | 10 | 2 | 10 | 153 | 22 | 93 | 8 | 3 |

Three things fall out of this table.

**(a) `can` is the primary recommendation verb, everywhere.** It outnumbers `should` roughly
5:1 corpus-wide (1,825 vs 386). The construction is *capability-framed advice*: rather than
"governments should X", the sentence is "governments can X", with the *evidence for X* doing the
persuading. Example:

> "Policy makers **can** also facilitate collaboration among institutions to agree on common data collection standards, and strategies for sharing and using data."
> — C, `flying_start`, PDF p. 62 (printed p. 60)

> "At the same time, central authorities **can** encourage schools to allocate time for selected teachers to advance the implementation of digital resources, to encourage peer learning and to share their knowledge with other staff."
> — I, `epp_digitalres`, PDF p. 24 (printed p. 22)

**(b) TALIS's `should` count is a mirage — and the mirage is instructive.** Of 123 sentences in
TALIS 2024 containing "should", **94 are the figure-note boilerplate** "Estimates should be
interpreted with caution due to higher risk of non-response bias". Exactly **one** sentence in
the entire 138,701-word flagship tells a policy actor what it should do — S5 above. Likewise
"caution" appears 102 times in TALIS and is almost entirely that same note. **The flagship data
report does not recommend. Recommending is done by the Education Policy Outlook and by the
working papers.**

**(c) "Promising" is the country-example hedge.** `flying_start` uses it 72 times — because it is
the word attached to national practices that have not been evaluated:

> "Second, while some of the practices collected in the reviews seem **promising** in the sense that stakeholders reported positive perceptions, many had not been comprehensively evaluated at the time of the review."
> — C, PDF p. 25 (printed p. 23)

### 2.3 The strongest recommendation in the corpus

*(B, `wp342`, PDF p. 12 / printed p. 11)*
> "If teaching careers are expected to last 30 years or longer, education systems **must keep attrition rates significantly below 5%** (UNESCO Institute for Statistics, 2023[38])."

This is the maximum commitment I found: bare deontic `must`, a **numeric threshold**, an
addressed actor, and an external authority cited inline. Runner-up, and the strongest in the
Education Policy Outlook series:

*(E, `epo2024`, PDF p. 52 / printed p. 50)*
> "Policymakers **must** therefore balance the need for quick fixes with sustainable, evidence-based workforce planning (Kelly, Sim and Ireland, 2018[8])."

Note what "must" is doing in both: it enforces a *constraint* ("do not go below this", "do not
trade quality for speed"), not a positive programme. The corpus reserves `must` for guardrails.

### 2.4 The weakest recommendation in the corpus

*(D, `teachers_matter`, PDF p. 210 / printed p. 208)*
> "**One possible model would be to** offer older teachers the option of a gradual reduction in their working hours for a lower salary, but retaining their long-term pension benefits."

Four simultaneous hedges: "one" (of several), "possible", "would be" (counterfactual), and an
impersonal subject with no addressee at all. Nobody is told to do anything. Close second, on the
same page-spread and on exactly our topic:

> "Therefore, programmes aiming at preventing career burn-out and retaining important skills in schools **would be beneficial**."
> — D, PDF p. 209 (printed p. 207)

And the weakest in a recent publication — again on our topic:

> "Education systems **could benefit from** flexible re-entry pathways that facilitate smooth transitions back into the profession…"
> — E, `epo2024`, PDF p. 52 (printed p. 50)

**Observation for us:** the corpus's weakest recommendations cluster precisely where the evidence
is thinnest — older-teacher retention and re-entry. That is our subject. OECD does not raise its
voice to compensate for thin evidence; it lowers it.

---

## 3. How evidence is attached to a recommendation

Classification of the fifteen sentences in §1 by what evidence the recommendation carries.

| Attachment type | Count | Items |
|---|---:|---|
| **Named study cited inline in the recommendation sentence itself** | 3 | 7 (Lampert and Dadvand 2024; Chifeng Dai et al. 2007), 8 (Walsh and Jacobs 2007), 13 (Kelly, Sim and Ireland 2018) |
| **Named study in the immediately adjacent sentence** ("therefore", "these can range…") | 2 | 5 (Boeskens, Nusche and Yurita 2020, next sentence), 6 (Hutchison 2012, preceding sentence) |
| **Country experience, given immediately after the recommendation** | 5 | 1 (Australia/TEMAG 2014), 2 (Norway LÆRERMOD, Netherlands CentERdata, Australia ATWD), 3 (United States, preceding), 4 (Norway 5-year Master's), 12 (England, Portugal, Australia bullets) |
| **General appeal / nothing attached** | 5 | 9, 10, 11, 14, 15 |

**Totals: 5 with a named study (3 inline + 2 adjacent), 5 with country experience, 5 with
nothing.** In other words, **two-thirds of recommendations carry some evidence, and one-third
carry none** — and the ones carrying none sit almost entirely in *conclusions and executive
summaries*, where the evidence has already been laid out earlier in the document.

### 3.1 The dominant micro-structure: recommendation → "For example, [country]"

This is the single most reproducible move in the corpus. The recommendation is stated as a
general proposition; a country appears in the *next* sentence, introduced by "For example", as
an instance, never as the argument.

> "Policy makers should consider teacher education as a key lever in promoting teaching as a profession. **For example, Norway** raised general criteria for becoming a teacher by introducing 5-year integrated Master's programmes (Table 2.3/12). Such high-level degree programmes can enhance the status of the profession in the long run, although they may lead to shortages in the short term."
> — C, `flying_start`, PDF p. 64 (printed p. 62)

> "Policy priorities include creating short, adaptable learning opportunities that fit around personal and professional responsibilities. Policies should also strengthen recognition and quality assurance… **For example, Estonia** has developed a system that formally recognises skills acquired outside formal education, including through work, volunteering and informal learning. **Similarly, Norway** provides employer-based training in foundational and workplace skills backed by government grants."
> — F, `epo2025`, PDF p. 16 (printed p. 14)

Note the *order* in both: general claim first, country second, and the country sentence is
grammatically subordinate to the claim ("For example…", "Similarly…"). The country never gets a
topic sentence of its own.

### 3.2 When a study *is* named, it is named parenthetically and moved on from

> "Systems must also ensure adequate resourcing for induction, mentoring and ongoing professional development (Lampert and Dadvand, 2024[99]; Chifeng Dai et al., 2007[51])."
> — B, `wp342`, PDF p. 42 (printed p. 41)

> "Although the evidence remains limited, some studies suggest that these characteristics also matter when it comes to CPL on the use of digital resources for teaching. For instance, a large-scale survey of literacy teachers in the United States highlighted ongoing individual support and a longer duration of training activities as key factors improving teachers' experience with professional development on the use of digital resources (Hutchison, 2012[25]). Policy makers should therefore consider a range of formats beyond traditional seminar-style training when seeking to promote an effective CPL offer."
> — H, `epp122`, PDF p. 14 (printed p. 12)

The second example is the full three-move template: **(i) hedge the evidence base → (ii) name one
study with its finding → (iii) draw the softened recommendation with "therefore".** It is worth
copying verbatim as a structure.

---

## 4. The "key messages" apparatus, quoted in full

I found **four distinct apparatus designs** across the corpus. All four are quoted in full below.

### 4.1 `wp342` — "Key Take-Aways" (full text, PDF p. 7 / printed p. 6)

Placed immediately after the title block, *before* the Introduction. Three thematic groups,
twelve bullets. **Every bullet is: bold label (2–5 words), colon, then one or two sentences of
elaboration.** No numbers whatsoever in the entire box.

> **Key Take-Aways**
>
> **Potential benefits of alternative pathways**
> - **Expanding teacher supply and diversity:** Alternative pathways can attract candidates with diverse professional, cultural and linguistic backgrounds, including mid-career professionals and under-represented groups.
> - **Addressing shortages in hard-to-staff areas:** Employment-based and accelerated routes can respond more quickly to subject-specific or geographic shortages.
> - **Valuing prior experience:** Many pathways recognise professional expertise, pedagogical experience or prior teaching credentials, reducing duplication and lowering barriers to entry.
> - **Increasing system flexibility:** When well integrated, alternative pathways can complement traditional routes and strengthen the resilience of teacher supply systems.
>
> **Key challenges to consider**
> - **Managing workload and attrition risks:** Combining training with full-time teaching can increase stress, particularly in challenging school contexts.
> - **Maintaining quality and coherence:** Fragmented programme landscapes and rapid expansion can strain quality assurance and professional standards.
> - **Equity in deployment:** Alternatively prepared teachers are more likely to be placed in disadvantaged schools, raising concerns about the concentration of novice teachers.
> - **Ensuring adequate preparation and support:** Both traditional and alternatives routes (either shortened or employment-based) require strong induction, mentoring and ongoing professional learning.
>
> **Enabling system conditions**
> - **Clear standards and licensure frameworks:** Common teaching standards and transparent certification processes help ensure quality across entry routes.
> - **Strong governance and oversight:** Effective coordination between governments, providers and schools supports coherence and accountability.
> - **Sustainable funding and capacity building:** Long-term investment is needed to support high-quality preparation, mentoring and evaluation.
> - **Strategic workforce planning:** Aligning pathways with long-term teacher supply and equity goals reduces reliance on emergency measures.

**Internal shape.** Bold lead = a nominalised *action or condition* ("Expanding teacher supply
and diversity", "Managing workload and attrition risks"). Elaboration = one sentence, 18–30
words, modal `can` or present indicative. Total box: 12 bullets, ~290 words, **zero statistics,
zero country names, zero citations**.

### 4.2 `wp347` — "What the evidence supports" / "What the evidence does not yet tell us" / "Considerations for policy and practice" (full text of the take-away leads, PDF pp. 39–41 / printed pp. 38–40)

This is the most sophisticated design in the corpus and the closest to what our paper needs,
because it **separates confidence tiers explicitly**. Three sub-headed blocks inside the
Conclusions chapter. Each finding is a **bold full-sentence claim**, then a paragraph of
elaboration carrying the numbers and caveats.

> **What the evidence supports**
>
> "Despite the heterogeneity of SCT pathways, profiles and contexts across OECD countries, the evidence reviewed in this paper points to a number of findings that are robust enough."
>
> - **"First, second-career teachers are a meaningful and growing presence in OECD education systems – not a niche category."** *(elaboration: 19–26% shares, range 36% Iceland to <5% Japan/Türkiye/Korea, ~95 words)*
> - **"Second, SCTs' preparation needs are different, not lesser."** *(elaboration: the nine Baeten and Meeus (2016) aspects, ~85 words)*
> - **"Third, organisational support, not entry pathway, is the strongest predictor of how SCTs experience the workplace."** *(elaboration: perceived support, induction, recognition; TALIS 2024 reassurance, ~110 words)*
> - **"Fourth, SCT retention is shaped by the same factors that shape teacher retention generally."** *(elaboration: age-controlled gap dissolves; two exceptions, ~95 words)*
>
> **What the evidence does not yet tell us**
>
> "The same review also reveals where the evidence base remains thin, and where claims should therefore be made with caution."
>
> - **"The definitional landscape remains fragmented."**
> - **"The broader research literature on SCTs has its own limitations that constrain how confidently general claims can be made."**
> - **"The impact of specific preparation models on SCT outcomes remains under-evaluated."**
> - **"Little is known about how SCTs' professional contributions translate into outcomes for students and schools."**
>
> **Considerations for policy and practice**
>
> "The findings reviewed above suggest several considerations for governments, education systems and schools investing in second-career teachers. These considerations apply with varying force depending on national context, but they are grounded in evidence common across the literature and country examples."
>
> - **"Treat retention, not recruitment, as the central design question."**
> - **"Invest in preparation rather than compromising it."**
> - **"Design induction around novice-teacher status, not professional seniority."**
> - **"Strengthen administrative monitoring of SCTs."**

**Internal shape.** Note the grammatical shift between blocks: findings are **ordinal + declarative
sentence** ("First, … are a meaningful and growing presence"); gaps are **declarative sentence
about the literature** ("remains under-evaluated"); recommendations are **bare imperatives**. The
elaboration paragraph under each is 80–140 words and is where the numbers, the citations and the
qualifications live. Note also the **explicit force-disclaimer** before the recommendations:
"These considerations apply with varying force depending on national context."

### 4.3 `talis2024` — chapter "Highlights" (full text, Chapter 1, PDF p. 34 / printed p. 32)

The data-report design. Bold lead is a **full declarative sentence** stating the finding; the
elaboration is **entirely numbers and country names**.

> **Highlights**
> - **The average age of teachers is around 45 years old.** In Lithuania and Portugal, the average age is 51, and in Latvia, it is 50. Conversely, the average age of teachers in Türkiye is 38 years old, and it is around 39 in Morocco, the United Arab Emirates and Uzbekistan. More than one out of two teachers are 50 or older in Estonia, Hungary, Latvia, Lithuania and Portugal.
> - **Prior work experience is common for teachers.** In around half of the education systems, at least one out of two teachers have prior non-teaching work experience. This is particularly high in Iceland (95%), the United States (79%), Australia and Sweden (both 77%).
> - **Today's schools are more diverse.** Compared to 2018, the share of teachers who teach in schools with more than 10% of students who are non-native speakers increased by 7 percentage points. Ten education systems saw an increase of 25 percentage points or more in the proportion of schools where over 1% of students are refugees. The largest changes are seen in Czechia, Estonia and Lithuania.
> - **Teachers report using classroom management practices more frequently compared to 2018,** such as calming students who are disruptive, with an increase of 8 percentage points on average across OECD education systems. There was an increase in 30 education systems and a decrease in 1 education system (Malta). There was also a 6 percentage-point average increase in teachers reporting that they have to tell students to follow classroom rules or to listen.
> - **Teaching social and emotional skills is a key feature of many education systems.** Female teachers and teachers who have a higher percentage of students with special education needs (above 30%) tend to be more likely to use practices that develop social and emotional skills. Other factors, such as age, teaching experience, school location and class size, do not have a consistent impact on these practices.
> - **Many education systems were forced to use online or hybrid learning during the COVID-19 pandemic, and some systems have maintained those methods.** On average across OECD education systems, over 16% of teachers work in schools where at least one lesson was taught hybrid or online in the last month. The highest proportion of teachers working in this manner were in Singapore (81%), Israel (47%) and the United Arab Emirates (47%). While remote education may improve access, education systems may need to provide specific types of support to teachers if such modalities are to become permanent expectations.
> - **Around one in three teachers report having used artificial intelligence (AI) in their work,** on average across OECD education systems. Around 75% of teachers in Singapore and the United Arab Emirates use AI in their work, whereas fewer than 20% of teachers do so in France and Japan. Teachers are using AI to learn about or summarise a topic (68%) or to generate lesson plans or activities (64%). The least frequent use of AI is in reviewing data on student participation or performance (25%). Around 90% of teachers in the United Arab Emirates and Viet Nam agree that AI assists in creating or improving lesson plans, compared to less than 20% of teachers in France and around 31% of teachers in Denmark and Finland.

**Internal shape.** 7 bullets, ~600 words. Bold lead = a **claim in plain language with at most
one number**. Elaboration = 3–5 sentences, dense with percentages and country rankings. Only one
bullet ends in anything resembling advice, and it is doubly hedged ("may improve", "may need to").
**Length per bullet: 45–110 words.**

### 4.4 `epo2025` — Executive summary as key messages (full text of one unit, PDF p. 16 / printed p. 14)

The Education Policy Outlook design: a **bold heading that is itself a claim**, then a framing
paragraph, then a Will/Skills/Means bullet triad in imperative-nominal form, then a
"Policy priorities include…" paragraph carrying the recommendation *plus* the country instances.

> **Mid-career (ages 35 to 44): Supporting flexibility and mobility.** At mid-career, adults face competing demands, such as from work and family, while needing to upskill or reskill. They are more likely to engage in learning when opportunities align with their lives and when their effort leads to tangible outcomes, such as recognition or career advancement. To empower mid-career adults, policymakers should consider financial support, structural flexibility, and strong engagement mechanisms that remove barriers. Policies address these elements as follows:
> - **Will:** Strengthen motivation and agency through learner entitlements; guidance and peer or community networks that rebuild confidence.
> - **Skills:** Offer modular and stackable qualifications; support employability and portability; and build digital and transversal skills to participate effectively in technology-enabled learning.
> - **Means:** Support access and participation through predictable funding, guidance and digital tools; and strengthen cross-sector partnerships to share costs, align training with labour-market needs and extend reach to Small and Medium Enterprises (SMEs) and non-standard workers.
>
> Policy priorities include creating short, adaptable learning opportunities that fit around personal and professional responsibilities. Policies should also strengthen recognition and quality assurance so that learning – whether digital, modular or workplace-based – leads learners to portable, valued qualifications that support career mobility and resilience. For example, Estonia has developed a system that formally recognises skills acquired outside formal education, including through work, volunteering and informal learning. Similarly, Norway provides employer-based training in foundational and workplace skills backed by government grants. Such approaches can be particularly relevant in labour markets marked by frequent job transitions and career changes.

The identical template runs four times in this executive summary (early childhood, adolescence,
mid-career, approaching retirement), each opening "**[Life stage]: [gerund phrase].**" and each
closing with "**Policy priorities include** [gerund phrase]…" followed by two country instances.
The whole executive summary contains **no percentages at all** — the only figures are "over 230
policies from 35 countries and economies".

For comparison, the `epo2024` executive summary (PDF pp. 13–15 / printed pp. 11–13) uses the same
bold-lead-plus-elaboration bullet design and *does* open with numbers ("nearly half (47%) of
school principals… up from 29% in 2015"), then switches to bullets that are pure policy direction:

> - "**Get more teachers into the workforce**, by reducing barriers to entering the profession, supporting re-entry, addressing targeted shortages, or proposing alternative pathways into the profession."
> - "**Better allocate teachers to areas of need**, by rethinking teams' skill mixes (e.g. enhancing teaching roles in collaborative structures, and restructuring teachers' time into teams), increasing mobility within and outside of the profession, or ensuring an equitable distribution of teachers."
> - "**Make teaching a more attractive profession**, by enhancing career structures that support progression, reviewing relative salaries and incentives; or developing campaigns to improve the status of the teaching profession."

### 4.5 What is common to all four designs

| Feature | `wp342` | `wp347` | `talis2024` | `epo2025` |
|---|---|---|---|---|
| Bold lead | nominal phrase | full sentence | full sentence | nominal phrase |
| Lead length | 2–5 words | 10–18 words | 6–20 words | 4–8 words |
| Elaboration length | 18–30 words | 80–140 words | 45–110 words | 60–120 words |
| Numbers in lead | none | none | sometimes one | none |
| Numbers in elaboration | none | some | dense | none |
| Country names | none | in elaboration | dense | 1–2, "For example" |
| Position | before Introduction | inside Conclusions | start of each chapter | Executive summary |

**The invariant: bold lead is a claim or a direction, never a statistic; the statistic, if any,
goes in the elaboration.** Even TALIS, the data report, keeps its leads verbal ("The average age
of teachers is around 45 years old" — one round number, no decimal, no comparison).

---

## 5. How absent or weak evidence is handled

Five sentences that admit an evidence gap, with their position in the document.

**G1.** *(A, `wp347`, PDF p. 40 / printed p. 39 — **in the Conclusions**, as a named sub-section
heading paragraph, immediately after the positive findings and immediately before the
recommendations)*
> "The same review also reveals where the evidence base remains thin, and where claims should therefore be made with caution."

**G2.** *(A, PDF p. 40 / printed p. 39 — **in the Conclusions**, bold lead of a gap paragraph)*
> "The impact of specific preparation models on SCT outcomes remains under-evaluated. Whether SCT-specific ITE produces stronger retention, better classroom outcomes or higher job satisfaction than generic ITE has not been systematically established. This is a significant gap given the substantial public investment many countries are making in dedicated SCT pathways."

**G3.** *(C, `flying_start`, PDF p. 25 / printed p. 23 — **in Chapter 1, the introduction**, as a
pre-emptive caveat on the whole report's strategies)*
> "However, these strategies have to be treated with caution for two reasons. First, evidence on the effectiveness of certain policy strategies is still scarce and sometimes controversial. This issue is discussed in regards to the global challenge of evidence-informed ITP systems in Chapter 2, and the report explicitly points to evidence gaps in most other sections as well."

**G4.** *(H, `epp122`, PDF p. 14 / printed p. 12 — **mid-body**, welded to the recommendation it
qualifies, in the same paragraph)*
> "Although the evidence remains limited, some studies suggest that these characteristics also matter when it comes to CPL on the use of digital resources for teaching."

**G5.** *(D, `teachers_matter`, PDF p. 222 / printed p. 220 — **in the final chapter**, §7.2
"Improving the Knowledge Base to Support Teacher Policy", under the sub-heading "Key research
priorities")*
> "Perhaps the most substantial research gap is the limited attention paid to the cost-effectiveness of different policy alternatives. Although it is clearly important to know whether a given policy change is likely to affect student achievement, this is an insufficient basis for policy making."

Two more, both directly relevant to us:

**G6.** *(D, PDF p. 223 / printed p. 221, final chapter)* — the corpus asks *our exact question* as an open one:
> "Questions to be addressed in the literature include: What are the effects of making schools the direct recruiters or employers of teachers? **What are the effects of opening the profession to individuals with experience outside education by creating alternative pathways into teaching?**"

**G7.** *(E, `epo2024`, PDF p. 52 / printed p. 50, immediately after the re-entry country examples)*
> "However, many education systems may lack accurate data on the number and characteristics of potential [returners]…"

### 5.1 Where gaps sit — the pattern

Three positions, and only three:

1. **Front-loaded caveat in the introduction**, covering the whole document's strategies (G3).
2. **Welded to the individual recommendation**, in the same sentence or the sentence before (G4).
3. **A dedicated block in the conclusion or final chapter**, headed as such — "What the evidence
   does not yet tell us" (G1, G2), "Key research priorities" (G5, G6).

What the corpus **never** does: bury the admission in a footnote, or put it in an annex, or omit
it. And it never uses a gap as a reason to soften a recommendation into vagueness — in `wp347`
the gap block sits *directly between* the findings and the recommendations, and the
recommendations that follow are the sharpest imperatives in the whole corpus. **Admitting the
gap buys the right to be direct.**

---

## 6. How conclusions open and close

First and last paragraph of four conclusion chapters, verbatim.

### 6.1 `flying_start`, Chapter 6 "Towards principles of governing initial teacher preparation systems?"

**Opens** *(PDF p. 136 / printed p. 134)*:
> "This report has described the key challenges and corresponding strategies as they relate to designing initial teacher preparation as the foundational stage in the continuum of teacher learning. It presented teacher education as a complex system of multi-layered contexts, schools and policy environments – 'a cluster of simultaneous interactions at multiple levels which people become part of for a period of time' (Ell et al., 2017[1]). Clearly, creating a coherent learning experience for teacher candidates, new and experienced teachers in such complexity requires system level coordination. This section summarises the strategies laid out above (see Table 6.1) with a view to governing initial teacher preparation (ITP) systems in ways that foster the development of coherent, evidence-informed, sustainable and self-improving systems."

**Closes** *(PDF p. 145 / printed p. 143)*:
> "To sum up, a whole-of-system perspective is necessary to moderate tensions and drive systemic improvement. Governing ITP with a view to the whole system is a time-consuming enterprise, and it must be grounded in an ownership of the policy objectives and planned action among the stakeholders implementing the policy (Burns, Köster and Fuster, 2016[2]). Engaging stakeholders in processes at all levels is therefore a prerequisite for implementing a whole-of-system approach. Given the highly diverse needs of the actors that configure ITP systems, the implementation of the continuum on teacher learning discussed in this report calls for ITP policies to be flexible enough to respond to unexpected situations and continuously integrate new knowledge and embrace emerging patterns."

### 6.2 `teachers_matter`, Chapter 7 "Developing and Implementing Teacher Policy" (the report's final chapter)

**Opens** *(PDF p. 216 / printed p. 214)*:
> "Teacher policy is a complex and often controversial area, and this chapter discusses the processes of consultation, development and implementation that underpin policies that work. It also examines the major gaps in the research and information base to support teacher policy, and suggests priorities for future work."

**Closes** *(PDF p. 223 / printed p. 221)*:
> "Policy formulation would also benefit from more extensive monitoring and evaluation of innovation and reform. Countries are finding that they can capitalise more on the diversity within their systems by testing policy reforms on a pilot basis, with volunteer schools and regions, before widespread implementation. Identifying the factors involved in successful innovations and creating the conditions for their dissemination, mainstreaming and sustainability in other schools are central to an effective implementation strategy."

### 6.3 `wp347`, "Conclusions"

**Opens** *(PDF p. 39 / printed p. 38)*:
> "Second-career teachers have become a trending topic when it comes to teacher workforce policy in many OECD countries. Demographic shifts, evolving career patterns and persistent teacher shortages have made the case for diversifying entry into the profession more pressing than at any previous point, and governments are increasingly investing in alternative pathways to bring experienced professionals from other fields into teaching. The OECD's 2025 cycle of Education at a Glance and 2024 TALIS, both drawn on extensively in this paper, mark a step-change in the international evidence available on this group, and the broader-definition analysis of TALIS 2024 conducted here adds further texture to that picture."

**Closes** *(PDF p. 41 / printed p. 40)*:
> "**Strengthen administrative monitoring of SCTs.** Only a small minority of OECD countries currently identify SCTs systematically in national education statistics. Better data on inflows, training routes, working conditions and retention patterns would let systems evaluate whether their investments in SCT pathways are working, and would strengthen the international evidence base on which all systems can draw."

### 6.4 `epp122`, "7. Conclusions"

**Opens** *(PDF p. 21 / printed p. 19)*:
> "Despite the accelerating digital transformation of school education in recent years, evidence from PISA 2022 points to persistent gaps in teachers' technical and pedagogical ability to use digital resources effectively in the classroom. Continuing professional learning (CPL), if designed effectively, can help to close this gap and equip teachers with the skills they need to seize the opportunities of the digital age. CPL on digital education is therefore an important policy priority and results of the Policy Survey on School Education in the Digital Age show that many education systems have introduced reforms to strengthen teachers' digital competency in recent years."

**Closes** *(PDF pp. 21–22 / printed pp. 19–20)*:
> "Professional learning will remain indispensable to equip educators with the skills they need to promote effective learning in an increasingly digital world. Emerging technologies, including generative artificial intelligence, call for renewed efforts to provide educators with attractive and effective opportunities to update their technical and pedagogical skills for digital education. By providing an overview of the empirical evidence, promising practices and the policy landscape surrounding teachers' professional learning on digital resources, this policy paper supports further efforts to strengthen teachers' skills for the digital age."

### 6.5 The opening and closing grammar

**Openings.** Three of the four open with a **retrospective sentence about the document itself**:
"This report has described…", "…this chapter discusses…", "Despite the accelerating digital
transformation… evidence from PISA 2022 points to…". None opens with a country. None opens with a
statistic. `wp347` is the exception that proves the rule: it opens with the *topic's* standing in
policy ("Second-career teachers have become a trending topic…") and only reaches the evidence in
sentence three.

**Closings.** All four close on a **forward-looking general proposition**, none on a country, none
on a number. Two close on the *conditions for implementation* (flying_start: "flexible enough to
respond to unexpected situations"; teachers_matter: "central to an effective implementation
strategy"). One closes on the **evidence base itself** (wp347: "would strengthen the international
evidence base on which all systems can draw"). One closes on the **document's own contribution**
(epp122: "this policy paper supports further efforts to…").

### 6.6 A finding worth flagging: the conclusion may be a re-run of the executive summary

In `epp122`, the Conclusions section is **substantially the executive summary again**. I compared
the two sentence-by-sentence:

- Executive summary: 24 sentences, 592 words. Conclusions: 16 sentences, 413 words.
- **8 of the 16 conclusion sentences are word-for-word identical to an executive-summary sentence**
  (similarity 1.00).
- **12 of the 16 are ≥ 0.82 similar.** Only the first sentence is substantially rewritten
  (similarity 0.35), and it is rewritten only to change the opening frame from
  "The COVID-19 pandemic has accelerated…" to "Despite the accelerating digital transformation…".
- The Conclusions section of this 38-page policy paper contains **no recommendation at all** — no
  "should", no "policy makers can", nothing. It restates findings.

This is a real pattern of the *Education Policy Perspectives* series, not a one-off. `teachers_time`
(No. 29, 16 pages) has **no Conclusions section whatsoever**: the brief ends on its last thematic
section, followed by contact details and references. Its "recommendations" are instead carried by
**full-sentence section headings**:

> "The governance of teachers' time should be responsive to the needs and priorities of actors at different levels"
> — J, `teachers_time`, PDF p. 7 (printed p. 7), section heading

> "Starting with a broad view of teachers' roles, systems should build a common understanding of priorities and make time for them"
> — J, PDF p. 10 (printed p. 10), section heading

and by **pull-quote boxes** in the margin:

> "There is no one-size-fits-all model for the effective use of teachers' time. It depends on their abilities and dispositions, their students and learning objectives as well as the context in which they teach."
> — J, PDF p. 2 (printed p. 2), pull-quote

---

## 7. Where our lead author's intuition is right, and where the corpus contradicts him

**On (2) — cases demoted to evidence: the corpus backs him, hard.** §3.1 shows the invariant
micro-structure. The general claim gets the topic sentence; the country arrives in the next
sentence behind "For example" or "Similarly"; the country never carries the argument. Even
`flying_start`, which is built entirely out of seven country reviews, states every strategy as a
general proposition first. And when a case *is* prominent, the text says so and disclaims
generality:

> "In many countries, multiple pathways coexist; therefore, the examples should not be interpreted as representative of the national system, but as illustrative of a particular type of pathway."
> — B, `wp342`, PDF p. 20 (printed p. 19)

**On (3) — numbers: partially contradicted, in a specific way.** OECD absolutely does put numbers
in executive summaries: `epo2024`'s opens "nearly half (47%) of school principals… up from 29% in
2015". But the **key-messages leads are never numeric** (§4.5) — the statistic always goes in the
elaboration, never in the bold claim. And the `epo2025` executive summary, the most recent one in
the corpus, contains **no percentages at all**. The rule is not "no numbers"; it is **"no numbers
in the load-bearing sentence."**

**On the recommendation register: contradicted outright.** "Policy makers may wish to…" occurs
twice in 568,886 words and never as a recommendation (§1.3). OECD education publications write
`can`, `should`, `need to`, `must`, `could` — and they use bare imperatives in bold take-away
leads. If our draft has been written in a deferential subjunctive to sound OECD-like, that is a
mistake in the opposite direction from the one he is worried about.

---

## RULES THIS IMPLIES FOR OUR PAPER

**On the grammar of recommendations**

1. Write recommendations with `can`, `should`, `need to`, `must` or `could` — in that order of
   frequency. Do not write "policy makers may wish to consider". It appears twice in half a
   million words of OECD education text, and never as advice.
2. Never write "we recommend", "it is recommended", or "this paper recommends". Zero occurrences
   in the corpus.
3. Name the actor. Use "policy makers" or "education systems". Do not address "governments" in a
   recommendation sentence — the corpus does not.
4. Reserve `must` for guardrails and constraints ("must ensure adequate resourcing", "must balance
   quick fixes against sustainable planning"), not for positive programmes. Cap it at roughly
   three uses per major section; `must` runs at 3.3 per 10,000 words corpus-wide.
5. Use "should consider" as the standard softener when the evidence is thin. It is the corpus's
   own device (3 of our 15 sample sentences), and it is more honest than dropping the modal
   altogether.
6. Reserve bare imperatives ("Treat retention, not recruitment, as the central design question")
   for **bold lead-ins to take-away bullets only**. Never use a bare imperative in running prose.

**On evidence attachment**

7. Attach evidence to two-thirds of your recommendations and no more. One-third may stand on
   general appeal — but only in the conclusion or executive summary, where the evidence has
   already been laid out.
8. When citing a study, cite it parenthetically inside or immediately beside the recommendation
   sentence, then move on. Do not narrate the study.
9. Use the three-move template for any recommendation resting on thin evidence:
   (i) hedge the base — "Although the evidence remains limited"; (ii) name one study and its
   finding; (iii) draw the recommendation with "therefore" and a softened modal.
10. Put every country instance **after** the general claim, subordinated by "For example" or
    "Similarly", in its own sentence. Never let a country name be the subject of the topic
    sentence of a recommendation paragraph.
11. When you lean on a case, disclaim its generality in the same breath, as `wp342` does:
    "…should not be interpreted as representative of the national system, but as illustrative of
    a particular type of pathway."

**On take-aways and key messages**

12. Build a "Key take-aways" box and put it **before the introduction**, not after it.
13. Structure every take-away as **bold lead + elaboration**. Lead: 2–8 words if nominal
    ("Valuing prior experience"), 10–18 words if a full sentence ("SCTs' preparation needs are
    different, not lesser"). Elaboration: one to three sentences, 20–140 words.
14. Put no statistic in a bold lead. Statistics go in the elaboration. If a lead needs a number,
    it gets one round number and no decimal.
15. Group take-aways under three headings, as `wp342` does: benefits / challenges / enabling
    conditions. For our paper the natural triad is: **what re-entry can deliver / what it risks /
    what has to be in place**.
16. Split the take-aways into confidence tiers, as `wp347` does: **"What the evidence supports"**,
    **"What the evidence does not yet tell us"**, **"Considerations for policy and practice"**.
    This is the single most transferable structure in the corpus and it is on our exact topic.
17. Order findings with ordinals inside the confidence tier — "First… Second… Third… Fourth…" —
    each as a bold declarative claim, each followed by 80–140 words carrying the numbers.

**On hedging and evidence gaps**

18. Put a front-loaded caveat in the introduction covering the whole paper's recommendations, in
    the `flying_start` form: "these strategies have to be treated with caution for two reasons."
19. Give evidence gaps their own named block in the conclusion, headed as such. Do not footnote
    them, do not annex them, do not omit them.
20. Place that gap block **between** the findings and the recommendations, not after the
    recommendations. Admitting the gap is what licenses the sharp imperatives that follow.
21. Use "promising" for any national practice that has not been evaluated, and say so:
    "promising in the sense that stakeholders reported positive perceptions, [but] had not been
    comprehensively evaluated."
22. Where the evidence is weakest — which for us is re-entry itself — lower the voice rather than
    raise it. The corpus's weakest formulations ("could benefit from", "one possible model would
    be to", "would be beneficial") appear precisely on older-teacher retention and re-entry.
    Match that.

**On conclusions**

23. Open the conclusion with a retrospective sentence about the paper — "This paper has
    described…" — or with the topic's standing in policy. Do not open with a country. Do not
    open with a statistic.
24. Close on a forward-looking general proposition: implementation conditions, or the state of the
    evidence base, or the paper's own contribution. Do not close on a country. Do not close on a
    number.
25. Do not let the conclusion become a paraphrase of the abstract. In `epp122`, 8 of 16 conclusion
    sentences are verbatim executive summary and the section contains no recommendation at all.
    That is a real OECD habit, and it is the wrong one to copy: our conclusion must carry the
    recommendations.
26. Reserve the abstract and executive summary for claims; keep the load-bearing sentence of every
    key message free of numbers. `epo2025`'s executive summary contains zero percentages, and it
    is the most recent flagship in the corpus.
