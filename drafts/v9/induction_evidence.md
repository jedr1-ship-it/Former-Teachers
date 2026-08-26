# Targeted evidence check: induction, mentoring and teacher retention

**Question put to the check.** Can the paper state that "induction and mentoring for new teachers are associated with lower attrition in correlational studies but show no effect in randomised trials"?

**Short answer.** The first half is well supported. The second half is *too strong as written* and should be qualified. The trial evidence is thin (four randomised evaluations plus one large quasi-experiment), consistently null on *leaving the profession*, but underpowered, weakened by small treatment–control contrasts, and — in the two largest studies with a school-level outcome — pointing towards *positive* effects on staying in the same school, significantly so in the English evaluation. Recommended wording is at the end.

---

## 1. The correlational side

### 1.1 Ingersoll and Strong (2011), *Review of Educational Research*

The field's anchor review. It critically examined **15 empirical studies** conducted since the mid-1980s on the effects of induction (support, guidance and orientation programmes) for beginning teachers, across three outcome sets: teacher commitment and retention; classroom instructional practices; and student achievement.

- Finding: "most of the studies reviewed provide empirical support for the claim that support and assistance for beginning teachers have a positive impact" on all three outcome sets. On retention specifically, most studies showed beginning teachers who participated in some form of induction had higher job satisfaction, commitment or retention (Ingersoll and Strong, 2011[1]).
- **The authors' own stated exception is decisive for our purposes.** The review explicitly flags "a large randomized controlled trial of induction in a sample of large, urban, low-income schools" which found significant positive effects on student achievement but **no effects on either teacher retention or teachers' classroom practices** — i.e. Glazerman et al. (Ingersoll and Strong, 2011[1]).
- Design limitations noted by the authors: the corpus is dominated by non-experimental designs; the review's stated purpose was to give a "reliable assessment of what is known, and not known", and it closes by identifying gaps and unaddressed questions. It is a *narrative critical review*, not a meta-analysis: **no pooled effect size is reported**.
- Update: Ingersoll and Strong (2012[2]) restate the same synthesis for a practitioner audience in *Teachers College Record*; it adds no new pooled estimate.

*Caution for drafting: Ingersoll and Strong cannot be cited as evidence that induction "works" for retention while simultaneously ignoring that they themselves name the null RCT as the main counter-case.*

### 1.2 Nguyen et al. (2020), *Educational Research Review* — the meta-analytic estimate

This is the source of the only clean, quotable pooled number, from a meta-analysis of **120 studies** of correlates of teacher turnover.

**Induction/mentoring as a correlate of teacher attrition (odds ratios; OR < 1 = less attrition):**

| Specification | Studies | Estimates | OR | log OR | SE | 95% CI (log OR) | p |
|---|---|---|---|---|---|---|---|
| Main model (school organisational characteristics) | 11 | 11 | **0.767** | −0.265 | 0.051 | −0.365, −0.166 | <.001 |
| Robust variance estimation (dependent effects) | 11 | 26 | 0.753 | −0.284 | 0.059 | −0.399, −0.169 | .003 |
| "Leavers only" (leaving teaching, switchers excluded) | 9 | 9 | **0.732** | −0.313 | 0.031 | −0.373, −0.253 | <.001 |
| "Switchers only" (moving school) | 2 | 2 | **1.131** | +0.123 | 0.181 | −0.232, +0.479 | **.497 (n.s.)** |

Interpretation: beginning teachers who experience induction and/or mentoring have roughly **23% lower odds of attrition** (OR 0.767); restricted to leaving the profession, **27% lower odds** (OR 0.732). The effect is comparable in size to administrative support (OR 0.796) and larger than in-service professional development (OR 0.838). **There is no detectable association with moving school** (OR 1.131, n.s., 2 studies only) (Nguyen et al., 2020[3]).

Limitations the authors themselves record:
- The synthesis is explicitly of **correlates**, not causes. Only **33%** of the post-2005 studies (94 studies) provide "at least one plausibly causal estimate"; in the older set (26 studies) only **4%** do. Median study-quality rating on their 1–5 risk-of-bias scale is 4 (newer) and 2 (older).
- Bivariate meta-regression shows the induction/mentoring estimate is **significantly moderated by whether the study used longitudinal data** (coefficient 0.298, p<.01, N=11) — i.e. longitudinal designs give *weaker* (less negative) associations than cross-sectional ones. This is the meta-analysis's own internal signal that the raw association is partly design-driven.
- Publication bias and heterogeneity analyses are reported in their technical appendix; the induction/mentoring cell rests on only 11 studies.
- Self-selection remains uncontrolled: schools and districts that offer good induction differ systematically from those that do not.

### 1.3 The best single correlational study: Ronfeldt and McQueen (2017), *Journal of Teacher Education*

Nationally representative SASS/TFS and BTLS data, three cohorts of first-year teachers; propensity-score matching of ~1 600 teachers receiving "extensive" induction (4–6 supports) to ~1 130 receiving 0–3.

- Receiving induction supports in the first year predicts **less migration and less attrition**.
- Each additional induction support is associated with an average **18–22% decrease in the odds of leaving teaching**; extensive induction reduced migration by about **5 percentage points**.
- The single strongest component was supportive communication with school leadership (odds reduced by 55–67%) — i.e. *not* mentoring per se.
- Limitation acknowledged in the literature: the induction measure is teacher self-report and prone to reporting bias; PSM cannot address unobserved selection (See et al., 2020[4]; Ronfeldt and McQueen, 2017[5]).

### 1.4 The newest syntheses

- **Keese et al. (2023), *Educational Research Review*** — meta-analysis of **17 studies** of formalised induction/mentoring published 2010–2019. Reports statistically significant positive effects on a *pooled* set of teacher and student outcomes (retention, efficacy, achievement), with an intervention-study coefficient of **c = 0.273, p<.001**. Two caveats, both material: (i) this is a **pooled multi-outcome estimate, not a retention-specific effect size**, so it cannot be quoted as "the effect of induction on retention"; (ii) the paper reports that impacts in **Glazerman et al. (2010) were significantly lower than in other intervention studies**, and it discusses publication bias and the divergence between journal articles and dissertations. *Verification note: the full text is paywalled; these figures come from the published abstract and from independent secondary reports of it, not from our own reading of the tables. Do not quote the coefficient without institutional access.* (Keese et al., 2023[6])
- **Gundlach, Slemp and Hattie (2024), *Educational Research Review*** — meta-analysis of antecedents of teacher turnover and retention. Its headline methodological point is directly relevant: associations with *actual* turnover differ in strength from associations with *intended* turnover, and studies relying on intentions cannot capture involuntary turnover (Gundlach, Slemp and Hattie, 2024[7]).
- **Luong (2025), *Teaching and Teacher Education*** — a registered scoping review of formal mentoring, coaching and induction for early career teachers in Global North contexts since 2008 concludes that the evidence base is **limited by inconsistent terminology and by competing purposes attached to each term**, and that measures of "effectiveness" are not commensurable across studies. It calls for further systematic review rather than declaring the question settled (Luong, 2025[8]).
- **See et al. (2020), *Education Sciences*** — a large critical review of international evidence on teacher recruitment and retention interventions, screening 6 731 records with an explicit "security of evidence" appraisal. It is the most useful single map of *which* induction studies are causally credible, and it classifies the induction/mentoring literature as dominated by "single-group causal comparative" designs. *Outlet caveat: this is an MDPI journal, not on the paper's approved list. The authorship (Durham/Warwick/Birmingham) and appraisal method are strong, and it is widely cited; treat it as a supporting source, not a load-bearing one.*

---

## 2. The experimental side — a complete census

We identified **four randomised evaluations of induction/mentoring reporting a retention outcome**, plus **one large, well-conducted quasi-experiment**. There are no others we could locate in England, Australia or elsewhere.

### 2.1 Glazerman et al. (2010) — IES/NCEE Comprehensive Teacher Induction study (the anchor trial)

**Design.** Cluster-randomised controlled trial. 17 districts in 13 states; 418 elementary schools; **1 009 beginning teachers**. Schools randomised within district to comprehensive induction (delivered by ETS or the New Teacher Center) or to the district's business-as-usual induction. 10 districts received one year of treatment ("one-year districts"); 7 received two years ("two-year districts"). Districts were selected to have *weak* existing induction (no full-time mentors; induction spend <USD 1 000 per beginning teacher).

**Did the treatment bite?** Yes, in year 1. Treatment teachers were more likely to have an assigned mentor (93% vs 75% overall), spent more time with mentors (95 vs 74 minutes/week), and received more of all 10 weekly and all 22 three-monthly induction activities asked about. In one-year districts the contrast *reversed* in year 2 (treatment teachers received *less* support than controls), and by years 3–4 the groups were equivalent.

**Retention results, by year.**

*Year 1 (Glazerman et al., 2008[9]).* No impact on retention overall. WWC-verified figures for the NTC districts (413 teachers, 199 schools):

| Outcome (year 1, NTC districts) | Treatment | Control | Difference | Effect size | Improvement index | p |
|---|---|---|---|---|---|---|
| Retained in same district | 90.6% | 87.6% | +3.0 pp | 0.19 | +7 | .38 |
| Retained in profession | 93.2% | 92.7% | +0.5 pp | 0.05 | +2 | .86 |
| Retained in same school | 77.9% | 79.2% | −1.3 pp | −0.05 | −2 | .79 |

*Year 2 (Isenberg et al., 2009[10]).* No significant impact anywhere; point estimates mostly **negative**.

| Outcome (after two years) | All | Treatment | Control | Difference | p |
|---|---|---|---|---|---|
| **One-year districts** (n = 476 teachers, 227 schools) | | | | | |
| Same school | 62.5% | 60.3% | 64.7% | −4.5 pp | .280 |
| Same district | 79.5% | 78.6% | 80.3% | −1.7 pp | .619 |
| Profession | 90.1% | 90.4% | 89.8% | +0.7 pp | .789 |
| **Two-year districts** (n = 364 teachers, 151 schools) | | | | | |
| Same school | 64.1% | 62.2% | 66.2% | −4.0 pp | .386 |
| Same district | 72.3% | 69.6% | 75.3% | −5.7 pp | .208 |
| Profession | 88.8% | 86.9% | 90.8% | −3.9 pp | .241 |

*Year 3 (Glazerman et al., 2010[11]) — the final results.*

| Outcome (after three years) | All | Treatment | Control | Difference | p |
|---|---|---|---|---|---|
| **One-year districts** (n = 464 teachers, 224 schools) | | | | | |
| Same school | 53.3% | 53.9% | 52.7% | +1.2 pp | .804 |
| Same district | 69.3% | 69.1% | 69.6% | −0.5 pp | .912 |
| Profession | 87.4% | 88.6% | 86.3% | +2.3 pp | .442 |
| **Two-year districts** (n = 375 teachers, 152 schools) | | | | | |
| Same school | 50.9% | 54.2% | 47.1% | +7.1 pp | .159 |
| Same district | 63.0% | 64.9% | 60.9% | +4.0 pp | .388 |
| Profession | 84.7% | 84.4% | 85.1% | −0.7 pp | .850 |

The authors' own summary: "Neither exposure to one year nor exposure to two years of comprehensive induction had a significant impact on teacher retention over the first four years of the teachers' careers", true of retention in the original school, district and profession; sensitivity analyses confirmed it; and there was no evidence of improved workforce composition through selective retention. (The study *did* find a positive third-year student-achievement impact in two-year districts: 0.11 SD reading, 0.20 SD maths.)

**Precision — the point the "no effect" framing hides.** The report gives no minimum detectable effect. Inverting the reported p-values (two-sided normal approximation) gives the implied 95% confidence intervals below. *These are our calculation, not the authors'.*

| Estimate (year 3) | Difference | Implied SE | Implied 95% CI |
|---|---|---|---|
| Two-year districts, same school | +7.1 pp | 5.0 pp | **−2.8 to +17.0 pp** |
| Two-year districts, same district | +4.0 pp | 4.6 pp | −5.1 to +13.1 pp |
| One-year districts, profession | +2.3 pp | 3.0 pp | −3.6 to +8.2 pp |
| Two-year districts, profession | −0.7 pp | 3.7 pp | −8.0 to +6.6 pp |

The trial can rule out large effects on staying in the profession. **It cannot rule out a policy-relevant effect of up to roughly 13–17 percentage points on staying in the same school or district.** "No effect" and "not powered to detect the effect anyone would care about" are not the same statement.

### 2.2 What Works Clearinghouse (2015) — New Teacher Center Induction Model

WWC reviewed 14 studies; **one** met group design standards without reservations (Glazerman et al., 2008), and only its year-1 retention analyses qualified. Ratings:

| Outcome domain | Rating | Improvement index | Studies | Teachers | Extent of evidence |
|---|---|---|---|---|---|
| Retention in school district | No discernible effects | +7 | 1 | 413 | Small |
| Retention in profession | No discernible effects | +2 | 1 | 413 | Small |
| Retention at school | No discernible effects | −2 | 1 | 413 | Small |

"No discernible effects" in WWC language means *no affirmative evidence of an effect*, not evidence of no effect; and the **"small" extent-of-evidence rating means one study**. WWC also notes the achievement and classroom-practice analyses **did not meet standards** (insufficient attrition information; baseline equivalence not established) (WWC, 2015[12]).

### 2.3 New Teacher Center i3 **validation** RCT (Young et al., 2017)

Cluster-RCT in **two** districts (Broward County, Chicago), plus a QED site (Grant Wood AEA, Iowa); two cohorts, two years of induction each; full-time released mentors, caseloads ≤15, >100 hours of mentor training. Implementation fidelity was **high** and the treatment–control contrast in induction experience was substantial.

- **Retention into the third year: 79% treatment vs 78% control — not statistically significant.**
- No significant impact on classroom practice (Framework for Teaching); the authors flag that attrition shrank the observation sample and "limited our ability to detect the effects".
- **Positive, statistically significant impact on student achievement** in ELA and mathematics, grades 4–8, equivalent to 2–4.5 months of additional learning.

Note the pattern: high fidelity, real contrast, achievement gains — and still nothing on retention (Young et al., 2017[13]).

### 2.4 New Teacher Center i3 **scale-up** RCT (Schmidt et al., 2025)

Cluster-RCT, schools randomised, **301 schools in five districts**; retention analysis on **795 teachers in 299 schools with zero attrition** (HR records). Outcome: still in an instructional post in the district in the third year.

- **Treatment 81% vs control 79%; impact 0.11 log-odds, p = 0.60.** Not significant.
- Subgroups all null: cohort 1 (0.25, p=.43), cohort 2 (0.14, p=.61), centrally deployed mentors (−0.01, p=.96), school-based mentors (0.19, p=.46).
- **The crucial caveat is the authors' own:** "NTC's induction model was not implemented with adequate fidelity in any of the five sites according to thresholds set by NTC, and the mentoring received by NTC treatment teachers **was not substantially different in key respects from the mentoring received by control teachers**." This is a null on a treatment that largely failed to differentiate itself from business as usual (Schmidt et al., 2025[14]).

### 2.5 Helms-Lorenz, van de Grift and Maulana (2016) — the Netherlands RCT

**71 schools, 338 beginning secondary teachers**, randomly allocated to a three-year induction arrangement (enhanced coaching, lesson observation, workload reduction, professional development) or business-as-usual.

- **Three years later, 14% of the control group and 12% of the experimental group had left the profession** — a 2 percentage-point difference. See et al. (2020) code this as an effect size of **+0.076**.
- The published abstract describes "a positive effect on teacher retention"; the reported magnitude does not support a strong claim. On these figures the difference is nowhere near conventional significance (approximate z ≈ 0.55 on n = 338, our calculation).
- Clear positive effect on **teaching skill** growth; coaching and observation had strong positive influence on skill in year 3, while **workload reduction affected skill negatively**.
- Important control-group contamination: Dutch schools routinely give beginning teachers extra support, so controls received "quasi-induction" for up to one year (Helms-Lorenz, van de Grift and Maulana, 2016[15]; See et al., 2020[4]).

### 2.6 DeCesare, McClelland and Randel (2017) — REL Central "Retired Mentors for New Teachers" RCT

Two-year RCT in Aurora Public Schools, Colorado; probationary elementary teachers randomised **within school**; **77 teachers** in the first year (39 control, 38 programme). Retired district teachers provided weekly one-to-one mentoring; implemented with fidelity on three of four components.

- **Effect on retention: not significant after two years.** Raw counts: after year 1, 3 leavers (1 programme, 2 control); after year 2, **11 programme vs 5 control** leavers — directionally *worse* for the programme, not significant.
- Significant positive effect on **student mathematics achievement** at end of year 1 (≈ one month of instruction); reading positive but not significant.
- No effect on teacher evaluation ratings.
- Within the programme group only, the odds of staying in the district **doubled with each additional 10 hours of mentoring** — but the authors are explicit that this dose-response analysis "was not part of the randomized trial impact study" and is confounded (teachers who stayed had more opportunity to receive hours).
- **With 77 teachers this trial had essentially no power to detect any plausible retention effect.** (DeCesare, McClelland and Randel, 2017[16])

### 2.7 The English evidence: Early Career Framework early roll-out (Walker et al., 2024; NFER for EEF)

Not an RCT — the evaluators state they "first considered a randomised controlled trial but determined that the randomisation of schools/ECTs in ERO areas was not feasible", so they used a **two-arm quasi-experimental design** with matching on observables using the School Workforce Census. EEF security rating: **low to moderate**. Very large: **1 455 intervention and 15 266 comparison ECTs**, zero attrition on the administrative outcome.

| Outcome | Intervention | Comparison | Odds ratio (95% CI) | pp difference (95% CI) | p |
|---|---|---|---|---|---|
| **Primary:** retained in any state-funded school, Nov 2022 (2 years) | 80.8% | 82.5% | 0.891 (0.750, 1.058) | −1.72 (−4.28, +0.84) | .188 |
| Retained in any state-funded school, Nov 2021 (1 year) | 88.0% | 88.2% | 0.983 (0.803, 1.204) | −0.19 (−2.29, +1.91) | .861 |
| Retained in **original induction school**, Nov 2021 | 65.2% | 62.2% | 1.143 (0.993, 1.315) | +3.00 (−0.14, +6.14) | .063 |
| **Retained in original induction school, Nov 2022** | **52.3%** | **47.9%** | **1.199 (1.049, 1.371)** | **+4.36 (+1.11, +7.61)** | **.008** |
| Conditional on staying in teaching, retained in original school, Nov 2022 | 64.8% | 57.8% | 1.365 (1.164, 1.602) | +6.94 (+3.42, +10.45) | <.001 |

Two findings, not one. **Null on retention in the profession** (and the point estimate is slightly negative). But a **statistically significant positive effect on staying in the same school** — 4.4 pp at two years, 6.9 pp conditional on staying in teaching. The evaluators attribute this to deeper ECT–mentor relationships strengthening the bond to the school. They also record two contamination problems that bias towards null on the primary outcome: COVID-19 disrupted delivery, and **71% of comparison schools reported providing additional ECT support because of the pandemic, with 16% using the ERO training materials** the government made publicly available (Walker et al., 2024[17]).

### 2.8 Studies that do *not* qualify

- **Chicago TAP** (Glazerman and Seifullah, 2012[18]) — matched-comparison design meeting WWC standards *with reservations*; bundles mentoring with performance pay and career ladders, so it does not isolate induction. It found no achievement effects but **increased teacher retention in some schools** (≈12 pp for the first cohort's three-year same-school retention), inconsistent across cohorts. Cite only with the bundling caveat.
- **Rockoff (2008[19])** — NBER working paper (not peer-reviewed) exploiting variation in mentoring hours in New York City. Weak evidence on retention overall; the most consistent finding is that **retention within a particular school is higher when the mentor has previous experience in that school**. Interesting corroboration of the school-specific mechanism, but working-paper status and non-experimental identification put it below the bar for a load-bearing citation.
- **Instructional coaching RCTs.** We found no randomised trial of instructional coaching that reports a teacher-retention outcome. The AIR practice brief on teacher turnover and professional-learning evaluation notes that retention is generally *not* measured as an outcome in these designs and argues it should be (Zeiser, 2024[20]). Kraft-style coaching meta-analyses report instruction and achievement outcomes, not retention.
- No randomised trial of induction or mentoring with a retention outcome was located in **Australia**.

---

## 3. Verdict on the proposed claim

**"Positive in correlational work, null in trials" is directionally right but overstated in three specific ways.**

**(a) The trials mostly did not test what the correlational studies measure.** The correlational estimate (Nguyen et al.'s OR 0.767) compares teachers who *received* induction/mentoring with teachers who received *none or little*. Every trial compares a *specific enhanced programme* against a control condition that already includes induction — in the Glazerman trial 72–79% of control teachers had an assigned mentor; in the Netherlands controls received "quasi-induction"; in the ECF evaluation 71% of comparison schools gave extra support and the training materials were publicly released; in the NTC scale-up the authors state the mentoring received by treatment and control teachers "was not substantially different in key respects". The trials answer "does *more, better-organised* induction beat *ordinary* induction?" The correlational studies answer "does induction beat *nothing*?" These are different questions and a null on the first does not falsify the second.

**(b) The trials were not powered for retention.** Sample sizes for the retention outcome: 1 009 (Glazerman), ~795 (NTC scale-up), 338 (Netherlands), 77 (REL Central). Retention is a binary outcome with base rates of 80–90% at one year, clustered at school level. Our inversion of Glazerman's reported p-values implies 95% confidence intervals reaching **+17 pp** for same-school retention in two-year districts. The honest statement is "these trials could not detect effects of the size policy makers care about", not "these trials found no effect."

**(c) At least one rigorous evaluation *did* find a positive retention effect — on the school-level outcome.** The ECF early roll-out found a statistically significant **+4.4 pp** effect on staying in the original induction school after two years (OR 1.199, 95% CI 1.049–1.371, p=.008; n=16 721), and **+6.9 pp** conditional on remaining in teaching. This is quasi-experimental, low-to-moderate security, and the primary (profession-level) outcome was null — but it is a real, well-powered, positive retention finding and the paper cannot claim trials show "no effect" without it. It also converges with three other strands: Glazerman's largest positive point estimate was same-school retention in two-year districts (+7.1 pp); Rockoff's clearest finding was same-school retention when the mentor knew the school; and Nguyen et al.'s meta-analysis finds induction/mentoring predicts *leaving* but not *switching* — the mirror image, and a reminder that the school/profession distinction is where the action is.

**What *is* safe to say.** Across four randomised evaluations, **not one found a statistically significant effect on retention in the teaching profession**, and this holds at one, two and three years, in the United States and the Netherlands, and in both high-fidelity and low-fidelity implementations. That is a genuine and important negative finding. It is also the case that these same trials found positive effects on *student achievement* (Glazerman two-year districts; NTC validation; REL Central mathematics), so the null on retention is not a null on induction.

---

## 4. Recommended wording

**Use this:**

> Observational studies consistently associate induction and mentoring with lower attrition among beginning teachers: a meta-analysis of 120 studies puts the odds of leaving at 0.77 for teachers who receive induction or mentoring, and 0.73 for leaving the profession specifically (Nguyen et al., 2020[3]). The small number of randomised evaluations has not reproduced this. Four trials — in 17 US districts (Glazerman et al., 2010[11]), in two and then five further US districts (Young et al., 2017[13]; Schmidt et al., 2025[14]), in 71 Dutch secondary schools (Helms-Lorenz, van de Grift and Maulana, 2016[15]) and in one Colorado district (DeCesare, McClelland and Randel, 2017[16]) — found no statistically significant effect on retention in the profession at one, two or three years, and England's quasi-experimental evaluation of the Early Career Framework early roll-out reached the same conclusion (Walker et al., 2024[17]). The divergence should not be read as decisive. The trials tested enhanced induction against control conditions that already provided substantial induction, they were not powered to detect the effect sizes that would matter for policy, and the school-level results point the other way: the English evaluation found early career teachers significantly more likely to remain in their original school (odds ratio 1.20, +4.4 percentage points after two years), and the largest US trial's biggest positive estimate was also same-school retention. The safest reading is that structured induction plausibly helps schools keep the teachers they have, while there is as yet no experimental evidence that it keeps teachers in the profession.

**Shorter variant, if a single sentence is needed:**

> Induction and mentoring are robustly associated with lower attrition in observational research, but the four randomised evaluations that measured retention found no significant effect on leaving the profession — a divergence that reflects underpowered trials testing enhanced induction against already-inducted controls, as much as an absence of benefit.

**Do not write:** "randomised trials show induction and mentoring have no effect on retention." That sentence is unsupported: it conflates "no significant effect detected" with "no effect", it ignores the significant positive school-level result in England, and it attributes to the trials a precision they do not have.

---

## References

- DeCesare, D., A. McClelland and B. Randel (2017), *Impacts of the Retired Mentors for New Teachers Program*, REL 2017-225, Regional Educational Laboratory Central, National Center for Education Evaluation and Regional Assistance, Institute of Education Sciences, U.S. Department of Education, Washington, DC, https://ies.ed.gov/ncee/edlabs (accessed on 25 August 2026). [16]

- Glazerman, S. and A. Seifullah (2012), *An Evaluation of the Chicago Teacher Advancement Program (Chicago TAP) after Four Years*, Mathematica Policy Research, Princeton, NJ, https://www.mathematica.org/publications/an-evaluation-of-the-chicago-teacher-advancement-program-chicago-tap-after-four-years (accessed on 25 August 2026). [18]

- Glazerman, S. et al. (2008), *Impacts of Comprehensive Teacher Induction: Results from the First Year of a Randomized Controlled Study*, NCEE 2009-4034, National Center for Education Evaluation and Regional Assistance, Institute of Education Sciences, U.S. Department of Education, Washington, DC, https://ies.ed.gov/ncee/pubs/20094034 (accessed on 25 August 2026). [9]

- Glazerman, S. et al. (2010), *Impacts of Comprehensive Teacher Induction: Final Results from a Randomized Controlled Study*, NCEE 2010-4027, National Center for Education Evaluation and Regional Assistance, Institute of Education Sciences, U.S. Department of Education, Washington, DC, https://files.eric.ed.gov/fulltext/ED565837.pdf (accessed on 25 August 2026). [11]

- Gundlach, J., G. Slemp and J. Hattie (2024), "A meta-analysis of the antecedents of teacher turnover and retention", *Educational Research Review*, Vol. 44, 100606, https://doi.org/10.1016/j.edurev.2024.100606 (accessed on 25 August 2026). [7]

- Helms-Lorenz, M., W. van de Grift and R. Maulana (2016), "Longitudinal effects of induction on teaching skills and attrition rates of beginning teachers", *School Effectiveness and School Improvement*, Vol. 27/2, pp. 178-204, https://doi.org/10.1080/09243453.2015.1035731 (accessed on 25 August 2026). [15]

- Ingersoll, R. and M. Strong (2011), "The impact of induction and mentoring programs for beginning teachers: A critical review of the research", *Review of Educational Research*, Vol. 81/2, pp. 201-233, https://doi.org/10.3102/0034654311403323 (accessed on 25 August 2026). [1]

- Ingersoll, R. and M. Strong (2012), "What the research tells us about the impact of induction and mentoring programs for beginning teachers", *Teachers College Record*, Vol. 114/14, pp. 466-490, https://doi.org/10.1177/016146811211401411 (accessed on 25 August 2026). [2]

- Isenberg, E. et al. (2009), *Impacts of Comprehensive Teacher Induction: Results from the Second Year of a Randomized Controlled Study*, NCEE 2009-4072, National Center for Education Evaluation and Regional Assistance, Institute of Education Sciences, U.S. Department of Education, Washington, DC, https://ies.ed.gov/ncee/pubs/20094072 (accessed on 25 August 2026). [10]

- Keese, J. et al. (2023), "A worthwhile endeavor? A meta-analysis of research on formalized novice teacher induction programs", *Educational Research Review*, Vol. 38, 100505, https://doi.org/10.1016/j.edurev.2022.100505 (accessed on 25 August 2026). [6]

- Luong, G. (2025), "The effectiveness of mentoring, coaching, and induction practices for early career teachers: A scoping review", *Teaching and Teacher Education*, Vol. 163, 105065, https://doi.org/10.1016/j.tate.2025.105065 (accessed on 25 August 2026). [8]

- Nguyen, T. et al. (2020), "The correlates of teacher turnover: An updated and expanded meta-analysis of the literature", *Educational Research Review*, Vol. 31, 100355, https://doi.org/10.1016/j.edurev.2020.100355 (working paper version: https://edworkingpapers.com/sites/default/files/ai19-149.pdf) (accessed on 25 August 2026). [3]

- Rockoff, J. (2008), *Does Mentoring Reduce Turnover and Improve Skills of New Employees? Evidence from Teachers in New York City*, NBER Working Paper No. 13868, National Bureau of Economic Research, Cambridge, MA, https://www.nber.org/papers/w13868 (accessed on 25 August 2026). [19]

- Ronfeldt, M. and K. McQueen (2017), "Does new teacher induction really improve retention?", *Journal of Teacher Education*, Vol. 68/4, pp. 394-410, https://doi.org/10.1177/0022487117702583 (accessed on 25 August 2026). [5]

- Schmidt, R. et al. (2025), *Scaling Up Teacher Induction: Implementation and Impact on Teachers and Students — Evaluation of the New Teacher Center's i3 Scale-up Grant, Revised Final Report*, SRI International, Menlo Park, CA, https://files.eric.ed.gov/fulltext/ED664805.pdf (accessed on 25 August 2026). [14]

- See, B. et al. (2020), "Teacher recruitment and retention: A critical review of international evidence of most promising interventions", *Education Sciences*, Vol. 10/10, 262, https://doi.org/10.3390/educsci10100262 (accessed on 25 August 2026). [4]

- Walker, M. et al. (2024), *Evaluation of the Early Roll-out of the Early Career Framework: Evaluation Report*, National Foundation for Educational Research for the Education Endowment Foundation, London, https://d2tic4wvo1iusb.cloudfront.net/production/documents/projects/ECF_early_year_rollout_evaluation_report.pdf (accessed on 25 August 2026). [17]

- What Works Clearinghouse (2015), *Teacher Training, Evaluation, and Compensation Intervention Report: New Teacher Center Induction Model*, Institute of Education Sciences, U.S. Department of Education, Washington, DC, https://ies.ed.gov/ncee/wwc/Docs/InterventionReports/wwc_ntc_070716.pdf (accessed on 25 August 2026). [12]

- Young, V. et al. (2017), *A Comprehensive Model of Teacher Induction: Implementation and Impact on Teachers and Students — Evaluation of the New Teacher Center's i3 Validation Grant, Final Report*, SRI International, Menlo Park, CA, https://www.sri.com/wp-content/uploads/2021/12/ntci3val_execsumm_2017.pdf (accessed on 25 August 2026). [13]

- Zeiser, K. (2024), *Teacher Turnover: Implications for Evaluating Professional Learning*, American Institutes for Research, Arlington, VA, https://www.air.org/sites/default/files/2024-09/Teacher%20Turnover%20Brief.pdf (accessed on 25 August 2026). [20]

## Verification notes for the drafting team

1. **Verified directly from source documents**: all Glazerman/Isenberg year-1/2/3 tables; the WWC ratings tables; the NTC scale-up retention exhibit and fidelity statement; the NTC validation executive summary; the ECF ERO primary and secondary impact tables; the REL Central key findings; Nguyen et al.'s full appendix odds-ratio tables and study-quality coding; See et al.'s treatment of Helms-Lorenz and Ronfeldt & McQueen.
2. **Not verified from the source itself** (paywalled; taken from published abstracts and independent secondary reports): Keese et al. (2023) coefficient c = 0.273; the Helms-Lorenz significance test (only the 14%/12% figures and See et al.'s ES = +0.076 are documented); Ingersoll and Strong's internal tables; the Chicago TAP retention magnitude. **Obtain institutional access before quoting any of these as precise figures.**
3. **Our own calculations, flagged as such in the text**: all implied standard errors and 95% confidence intervals inverted from reported p-values; the approximate z-statistic for Helms-Lorenz. These are normal approximations and should be described as "implied" or "approximate", never presented as the authors' own.
4. **Outlets excluded on quality grounds**: no findings in this note rest on the *International Journal of Learning, Teaching and Educational Research*, the *International Journal of Mentoring and Coaching in Education*, unrefereed blogs, or advocacy-organisation summaries. See et al. (2020) appears in *Education Sciences* (MDPI), which is outside the paper's approved list — it is used only as corroboration for figures obtainable elsewhere, never as sole support.
