# Per-SD magnitude comparators for the Sims & Jerrim (2020) discipline-climate footnote

Verified 2026-09-15 against full texts (PDFs fetched and read; extraction paths noted at end).

## 1. The anchor, confirmed — with two necessary corrections of nuance

**Source:** Sims, S. & Jerrim, J. (2020). *TALIS 2018: Teacher Working Conditions, Turnover and Attrition*. Statistical Working Paper, UK Department for Education, March 2020. (ERIC ED604489; gov.uk assets PDF.) TALIS 2018 (England) linked at teacher level to the School Workforce Census; attrition = observed to have left the state-funded teaching profession by the subsequent SWC (spring 2018 → autumn 2018, i.e. "the subsequent two terms", scaled as an annual probability in the paper's language "by the next academic year"). N = 2,029 teachers. Logistic regressions with controls; **associational, not causal** (the paper itself stresses this).

**Exact wording (Summary, para. 10 / Section 5):**
> "For an experienced teacher with otherwise average characteristics, a one standard deviation increase in the Discipline score is associated with a reduction in the probability of leaving the school by the next academic year from 3.9% to 3% and a reduction in the probability of leaving the profession from 1% to 0.5%. For a novice teacher with otherwise average characteristics, a one standard deviation increase in the Discipline score is associated with a reduction in the probability of leaving the school by the next academic year from 12.2% to 9% and a reduction in the probability of leaving the profession from 7% to 5.4%."

And the interpretive sentence (para. 63):
> "a one standard deviation increase in the Discipline score (approximately equivalent to moving from the midpoint to just within the top 16% of the distribution of discipline scores) is associated with a reduction in the probability that a teacher leaves the school by a quarter and the profession by one half. For a novice teacher ... around one third."

**Corrections to how the anchor should be stated:**
1. The **halving applies to experienced (5+ years) teachers**, whose model-predicted baseline attrition is only **1%** (falls to 0.5%). For **novice** teachers the same 1 SD moves attrition from **7% to 5.4%** (a ~23% relative reduction; the paper's summary rounds novices' school+profession effects to "around one third").
2. Pooled odds ratios (Table 9): Discipline on attrition **OR ≈ 0.68 per SD** entered separately (SE 0.06, p<0.01); 0.72 with all five working-conditions factors together; 0.74 with school FE; 0.49 in the leave-one-out colleague-report specification. So the pooled per-SD effect is roughly a 30% reduction in the *odds* of attrition; "halving" is the predicted-probability statement for the experienced group specifically.
3. Sample baselines: mean school-level turnover among TALIS respondents 11.5%; attrition 5.6%.
4. Leadership/Management behaves near-identically (experienced: profession 1% → 0.5%; novice: 7.1% → 5.2%; attrition OR ≈ 0.59–0.64 per SD, Table 9).

**Footnote-ready restatement of the anchor:** "In England, a one-standard-deviation improvement in a school's discipline climate is associated with roughly a halving of an experienced teacher's annual probability of leaving the profession (from 1% to 0.5%), and a fall from 7% to 5.4% for novice teachers (Sims and Jerrim, 2020)."

---

## 2. Category (a): per-SD school-factor effects on *actual* turnover — verified

### 2.1 Kraft, Marinell & Shen-Wei Yee (2016) — NYC middle schools, school climate per SD  [BEST COMPARATOR]

**Citation:** Kraft, M. A., Marinell, W. H., & Shen-Wei Yee, D. (2016). School Organizational Contexts, Teacher Turnover, and Student Achievement: Evidence From Panel Data. *American Educational Research Journal*, 53(5), 1411–1449. DOI: 10.3102/0002831216667478.

**Design:** 278 NYC public middle schools, 2008–2012 panel; NYC School Survey factor scores (Leadership, Academic Expectations, Teacher Relationships, Safety); outcome = teacher leaves the school (actual, admin records). Preferred models include **school fixed effects** (within-school variation over time).

**Verified magnitudes (from full text):**
- Baseline: "the average turnover rate among middle school teachers in NYC is 15.1%."
- Preferred (school FE, each measure separately): "a one standard deviation increase in Leadership at the 50th percentile is associated with a 1.8 percentage point decrease in teacher turnover." Given the 15.1% base, the paper states this is "approximately an 11% reduction in turnover." Marginal effects for Safety, Relationships, Expectations: 0.8, 0.8, 0.6 pp respectively.
- All four dimensions simultaneously +1 SD (50th → 84th percentile): "reduce turnover by 3.8 percentage points, a 25% reduction in average turnover rate."
- Without school FE (between+within, closer to Sims–Jerrim's design): 1 SD in Leadership/Expectations/Safety separately ≈ −1.9 pp each; all four jointly +1 SD ≈ −4.3 pp.
- Note: their climate measures predict *transfers* strongly but are "only weakly associated with teachers' decisions to leave the classroom or district altogether" — i.e. the comparable outcome is turnover, not profession-exit.

**Footnote sentence:** "In New York City middle schools, a one-standard-deviation within-school improvement in leadership quality is associated with a 1.8-percentage-point (about 11%) reduction in annual teacher turnover from a 15.1% base, and improving four climate dimensions by one SD each with a 25% reduction (Kraft, Marinell and Shen-Wei Yee, 2016)."

### 2.2 Boyd et al. (2011) — NYC first-year teachers, perceptions of administration per SD

**Citation:** Boyd, D., Grossman, P., Ing, M., Lankford, H., Loeb, S., & Wyckoff, J. (2011). The Influence of School Administrators on Teacher Retention Decisions. *American Educational Research Journal*, 48(2), 303–333. DOI: 10.3102/0002831210380788. (Magnitudes verified from the CALDER WP 25 / Urban Institute full text of the same study.)

**Verified magnitudes:** First-year NYC teachers, multinomial logit, all six school-context factors + controls; administration is the only factor that survives jointly:
> "A standard deviation increase in a teacher's assessment of the administration decreases his or her likelihood of transferring by approximately 44 percent ... and decreases his or her likelihood of leaving teaching in New York City by approximately 28 percent relative to staying in the same school."

Predicted probabilities (reference first-year teacher): all working conditions at the mean → **7.6% probability of leaving NYC teaching** and 10.0% of transferring; all measures **+1 SD → 4.1% and 6.7%**; −1 SD → 13.5% and 14.8%. So a uniform 1 SD improvement in working conditions cuts first-year exit from teaching in NYC by ~46% — strikingly close to the Sims–Jerrim "halving", though the outcome is leaving the NYC district, not the profession nationally.

**Footnote sentence:** "Among first-year New York City teachers, a one-SD better perception of the school administration is associated with a 28% lower relative risk of leaving teaching in the city, and a one-SD improvement across all measured working conditions cuts the predicted probability of leaving from 7.6% to 4.1% (Boyd et al., 2011)."

### 2.3 Ladd (2011) — North Carolina, leadership per SD, planned vs actual departures

**Citation:** Ladd, H. F. (2011). Teachers' Perceptions of Their Working Conditions: How Predictive of Planned and Actual Teacher Movement? *Educational Evaluation and Policy Analysis*, 33(2), 235–261. DOI: 10.3102/0162373711398128. (Magnitudes verified from the CALDER WP 33 / Urban Institute full text.)

**Verified magnitudes:** NC statewide working-conditions survey linked to administrative data.
- **Planned** departures: "a one standard deviation difference in the perceived quality of school leadership is associated with planned departure rates that differ by close to 40 percent of the mean planned departure rates at the elementary and middle school levels, and about 30 percent at the high school level."
- **Actual** one-year departures: far smaller — "the 0.018 predicted effect of a one standard deviation difference in the standardized leadership factor" at the elementary level (i.e. **−1.8 pp**), against school-leaving rates of roughly 18–21% (share not remaining in school ≈ 18% elementary, ≈ 21% middle per the paper's category proportions) — so on the order of a **10% relative reduction**. Kraft et al. (2016) independently summarize Ladd as "5.6 percentage point decrease in self-reported planned departures but only a 1.8 percentage point decrease for actual departures."
- Useful cautionary point for the footnote: per-SD effects on *stated intentions* run 2–3 times larger than on *actual* moves.

**Footnote sentence:** "In North Carolina, a one-SD difference in perceived leadership quality predicts actual one-year departure rates about 1.8 percentage points (roughly 10%) lower, versus planned-departure differences of 30–40% of the mean — a reminder that intention-based effects overstate behavioural ones (Ladd, 2011)."

---

## 3. Category (b): programme effects relative to baseline — verified

### 3.1 Clotfelter et al. (2008) — $1,800 retention bonus, North Carolina

**Citation:** Clotfelter, C., Glennie, E., Ladd, H., & Vigdor, J. (2008). Would higher salaries keep teachers in high-poverty schools? Evidence from a policy intervention in North Carolina. *Journal of Public Economics*, 92(5–6), 1352–1370. DOI: 10.1016/j.jpubeco.2007.07.003.

**Verified magnitudes:** Annual $1,800 bonus (~2–5% of salary) for certified math/science/special-education teachers in high-poverty or low-performing NC secondary schools, 2001–2004; Cox proportional-hazard models on departure from the school. Published abstract: bonus "sufficient to reduce mean turnover rates of the targeted teachers by 17%." In the working-paper text the preferred binary-eligibility estimate is a hazard ratio of 0.88 (a 12% reduction in the annual probability of departure), with the 17% figure corresponding to actually receiving the full $1,800 ("a $100 increase in the bonus reduces the probability of departure by approximately 1% — not one percentage point, but one percent"). Strongest for teachers with 10–19 years of experience. Outcome is leaving the school, not the profession.

**Footnote sentence:** "By comparison, North Carolina's $1,800 annual bonus for maths, science and special-education teachers in disadvantaged secondary schools — roughly a 2–5% pay supplement — reduced the annual hazard of leaving those schools by about 12–17% (Clotfelter et al., 2008)."

### 3.2 Glazerman et al. (2010) — comprehensive induction RCT (contrast case)

**Citation:** Glazerman, S., Isenberg, E., Dolfin, S., Bleeker, M., Johnson, A., Grider, M., & Jacobus, M. (2010). *Impacts of Comprehensive Teacher Induction: Final Results from a Randomized Controlled Study* (NCEE 2010-4027). Washington, DC: IES, U.S. Department of Education. (ERIC ED565837.)

**Verified magnitude:** Large multi-district RCT of one or two years of intensive mentoring/induction for beginning teachers; **no statistically significant impact on teacher retention** (in school, district or profession) over the follow-up years, and no impact on classroom practice. Useful as a zero benchmark: a substantial, expensive deliberate intervention moved retention not at all, whereas observational per-SD climate gradients are large.

**Footnote sentence:** "whereas a large US randomized trial of intensive two-year induction support for novice teachers found no detectable impact on retention (Glazerman et al., 2010)."

---

## 4. Considered and rejected / not comparable

- **Sims (2017), TALIS 2013 England (DfE SWP):** outcomes are job satisfaction and *desire to move school* (intentions), not observed attrition; not in comparable units. Rejected.
- **Johnson, Kraft & Papay (2012), TCR 114(10):** Massachusetts; outcome is *intended* departure, not actual turnover. Rejected on units (and Ladd 2011 shows intentions inflate magnitudes 2–3x).
- **Jackson (2013):** his related work (match quality/mobility, REStat 2013) does not report per-SD school-factor effects on turnover in units comparable here. Rejected.
- **Rothstein (2015, AER)** is a structural simulation of tenure/bonus policies, not a per-SD or baseline-relative retention estimate of a delivered programme. Rejected.
- **Cabrera & Webbink (JHR):** salary-supplement study; not verified within scope and not needed given Clotfelter et al. Omitted.

## 5. Verdict

**Footnote viable.** Category (a) delivers three fully verified per-SD comparators on actual turnover (Kraft/Marinell/Shen-Wei Yee 2016; Boyd et al. 2011; Ladd 2011), and category (b) two baseline-relative programme benchmarks (Clotfelter et al. 2008; Glazerman et al. 2010). Two caveats must survive into the footnote text:
1. State the anchor precisely: the halving (1% → 0.5%) is for **experienced** teachers; novices go 7% → 5.4%. Do not write "a teacher's" unqualified.
2. Units caveat: the US comparators' outcome is leaving the **school/district** (turnover), not leaving the **profession**; profession-exit gradients in Kraft et al. are weak. The closest profession-type comparator is Boyd et al.'s "leaving teaching in NYC" (7.6% → 4.1% for +1 SD in all working conditions), which happens to match the "roughly half" magnitude.

## Extraction notes
- Sims & Jerrim 2020 PDF: assets.publishing.service.gov.uk /media/5f6484c28fa8f5107025c17a/TALIS_201_teacher_working_conditions_turnover_and_attrition.pdf (quotes from Summary paras 10, 63; Section 5; Tables 8–9).
- Kraft et al. 2016 full text: hsredesign.org mirror of the AERJ article (pp. 1427–1429 of the journal pagination).
- Boyd et al. 2011: Urban Institute copy of CALDER WP (pp. 10–11); journal version AERJ 48(2), 303–333.
- Ladd: Urban Institute copy of CALDER WP 33 (pp. 31–37); journal version EEPA 33(2), 235–261.
- Clotfelter et al.: NBER WP 12285 full text; published JPubE 92(5–6), 1352–1370 (abstract states 17%).

## Footnote certification (round 2)

Round-2 check (2026-09-15) of the draft footnote against primary full texts. Sims & Jerrim (2020) checked against the gov.uk assets PDF; Kraft, Marinell & Shen-Wei Yee (2016) against the AERJ full text (hsredesign.org mirror, journal pagination); Ladd against the CALDER Working Paper 33 full text (December 2009) — the published EEPA 33(2) version sits behind a SAGE/Cloudflare block, so WP33 quotes are used, with the published Kraft et al. (2016) article's own citation of "Ladd (2011)" as independent corroboration that the key number carried into the published version. Verdict: the draft footnote is **wrong on the TALIS item content**, **wrong that the TALIS index is school-averaged**, **wrong to attribute the four NY indices to North Carolina as well**, and **too causal ("cuts") and under-caveated** on both magnitudes. Every element is certified or corrected below with verbatim quotes.

### 1. Sims & Jerrim (2020) — the Discipline measure

**REFUTED: "agreement with statements on the noise, disruption and time lost in the classroom in TALIS."** The Sims & Jerrim Discipline factor contains no item about noise, time lost, or a pleasant learning atmosphere (those phrases belong to TALIS's separate classroom disciplinary climate scale, which this paper does not use — the strings "noise", "time lost", "pleasant" do not occur anywhere in the PDF). The factor's five items, verbatim from Table 3, Appendix A ("Table 3 shows the questionnaire items that make up each of the factor variables"):

> "34d (To what extent can you) Control disruptive behaviour in the classroom
> 34h (To what extent can you) Get students to follow classroom rules
> 48g The school staff enforces rules for student behaviour consistently throughout the school
> 52g (Sources of stress) Maintaining classroom Discipline ✓
> 52h (Sources of stress) Being intimidated or verbally abused by students ✓"
(✓ = "items recoded to make them unipolar"; alpha 0.65.)

The paper's own gloss (Summary, para. 11; repeated para. 64): "The Discipline score is composed of a number of questions relating to: whether staff in the school consistently enforce behaviour standards; whether teachers are able to control disruptive behaviour; and the extent to which they experience verbal or physical abuse." Note only item 48g is an agree/disagree statement; 34d/34h are self-efficacy ("To what extent can you") and 52g/52h are sources-of-stress items — so even "agreement with statements" is inaccurate as a blanket description.

**Construction and standardisation (certified, but not as drafted).** Factor scores are from confirmatory factor analysis of individual teachers' responses: "In order to measure job satisfaction and working conditions, six factor variables were created using confirmatory factor analysis. The resulting factor scores can be thought of as a weighted average of teachers' responses to several closely-related questions from the TALIS teacher questionnaire" (para. 33). Standardisation is at the **teacher level**, not by school: "All six factor scores are scaled so that a teacher with average job satisfaction will have a score of zero, a teacher with job satisfaction one standard deviation above the mean will have a score of one..." (para. 34).

**REFUTED: "averaged by school."** The main models use the teacher's own score. A school average appears only as the Model E robustness check: "in model E ... the working conditions measures for a given teacher are measured as the average of the working conditions variables for the other teachers in the same school" (para. 41e; table notes: "Colleague report uses working conditions measures calculated as the leave-one-out school average").

**Own classroom vs school level: mixed, per the authors themselves** (para. 69): "while some of the questions that comprise the Discipline factor clearly relate to school-wide issues, such as consistent enforcement of rules, others are arguably partly assessing individual teachers' ability to keep order, which is not purely a feature of the school working environment."

### 2. Ladd (2011) — leadership and actual departures

(Quotes from CALDER WP 33, "Teachers' Perceptions of their Working Conditions: How Predictive of Policy-Relevant Outcomes?", December 2009 — the working-paper version of EEPA 33(2). Published version not directly retrievable; but the published Kraft et al. (2016) AERJ text reports the same figure from the published article: "Ladd (2011) found that a one standard deviation increase in the quality of school leadership was associated with a 5.6 percentage point decrease in self-reported planned departures but only a 1.8 percentage point decrease for actual departures—an estimate very similar to our own.")

**Measure (certified: NC survey, teacher responses only, school-averaged, standardised).** The 2006 North Carolina working-conditions survey; "I use factor analysis to collapse teachers' responses to 54 survey questions about their working conditions into five categories and also aggregate the responses of individual teachers to the school level. This procedure generates school-level measures of as school's working conditions as perceived by its teachers." Footnote 2: "For this analysis I used only the survey responses of teachers ... survey responses of administrators and those of teachers in charter schools were excluded." Five factors (leadership, facilities and resources, teacher empowerment, professional development, time — NOT the four NYC dimensions), varimax rotation, done separately by school level. Leadership items include "Overall, the school leadership in my school is effective" and "School leadership consistently supports teachers". Standardisation: "Each of these factors were aggregated to the school level and then normalized so that across teachers in the each of our regression samples, the means of each factor are equal to zero and the standard deviations are equal to one."

**Effect on ACTUAL one-year departures (certified with caveats).** Table 8 (linear probability, dep. var. "takes on the value 1 if the teacher left the school after the 2005/06 school year"): Leadership coefficient **−0.018* (0.006) elementary; −0.018# (0.010) middle (p<0.10 only); −0.028* (0.012) high school**. Text: "the 0.018 predicted effect of a one standard deviation difference in the standardized leadership factor" (elementary). Baselines: actual leaver shares "18 [percent] ... in elementary school, 21 ... in middle school and 20 ... in high school". So −1.8 pp on an 18% base ≈ a 10% relative difference at the elementary level (middle ≈ 9%, high ≈ 14%). **"Cuts annual school turnover by around 10%" therefore needs three fixes:** (i) associational, not causal — Ladd's framing throughout is "predictive"; (ii) grade-level specific (the 10% arithmetic holds for elementary/middle; high school is nearer 14%); (iii) the outcome is leaving the school, including within- and between-district moves AND disappearance from the NC data: "teachers who leave the profession cannot be distinguished from those who leave the administrative data set ... teachers who remain in teaching but move to another state, teachers who leave for short periods perhaps to have children, or who do not appear in the data set because of a data glitch all are treated as leavers". Contrast quote for planned departures: "a one standard deviation difference in the perceived quality of school leadership is associated with planned departure rates that differ by close to 40 percent of the mean planned departure rates at the elementary and middle school levels, and about 30 percent at the high school level."

### 3. Kraft, Marinell & Shen-Wei Yee (2016) — the four NYC indices and the 25% figure

**Teacher responses only (certified):** "Teacher responses to the NYC School Survey, from which we construct our measures of school context" (data source 1). The survey "is administered annually to teachers, students, and parents in the district", but the measures come from principal components analysis of "our 33 teacher item responses"; "Individual teacher responses are anonymized but linked to the teacher's school."

**Four dimensions (certified):** "Our context measures capture four broad organizational features of schools, which we describe as leadership and professional development (Leadership), high academic expectations for students (Expectations), teacher relationships and collaboration (Relationships), and school safety and order (Safety)."

**School-level standardised factor scores (certified, with the precise mechanics):** "We calculated factor scores for each teacher in each year and then averaged these scores to the school-year level to obtain our primary predictors. We then standardized each of these school year–level averages across all school years" — i.e. standardised across school-years, per SD of the school-level index.

**3.8 pp / 25% claim (certified, with all caveats present in the source):** "If a school at the 50th percentile of the distribution in Leadership, Expectations, Relationships, and Safety was able to improve each of these dimensions of the school context by one standard deviation (up to the 84th percentile), our estimates suggest that this could reduce turnover by 3.8 percentage points, a 25% reduction in average turnover rate." This is derived from the **school fixed effects** models ("As our results in Columns 2a through 2c of Panel B document..."; "We present our preferred estimates from models that include school fixed effects"), with marginal effects **evaluated at the 50th percentile** ("a one standard deviation increase in Leadership at the 50th percentile is associated with a 1.8 percentage point decrease in teacher turnover" — the logistic curve "allows the marginal effects to differ across the distribution"; larger effects at lower starting quality). Sample is NYC **middle schools**. Note the source's own language is conditional ("could reduce ... our estimates suggest"), not "cuts".

**Outcome label (certified):** turnover = not returning to the same school, transfers included: "we construct our outcome measure of turnover by coding a teacher as 0 ('stayer') if he or she remained in the same school the following year and retained a teaching job code and 1 otherwise"; "about 6.2% of teachers transferred schools but retained teaching jobs the following year, while an additional 8.9% were no longer teaching in NYC public schools the following year, for a total turnover rate of 15.1%". Also relevant: "school context measures are strong predictors of teachers' decisions to transfer schools but ... only weakly associated with teachers' decisions to leave the classroom or district altogether."

### Corrected footnote (every assertion backed by a quote above)

> "The discipline measure and the comparator factors are indices built from teachers' survey responses. The TALIS 2018 Discipline factor (Sims and Jerrim, 2020) is a confirmatory-factor score from five items — whether teachers can 'control disruptive behaviour in the classroom' and 'get students to follow classroom rules', whether 'the school staff enforces rules for student behaviour consistently throughout the school', and the extent to which 'maintaining classroom discipline' and 'being intimidated or verbally abused by students' are sources of stress — scored from each teacher's own responses and scaled to mean zero and standard deviation one (a leave-one-out school average is used only as a robustness check). The US indices are factor scores from teacher responses to school-climate surveys, averaged to the school level and standardised: a leadership factor (among five working-conditions factors) from North Carolina's statewide survey (Ladd, 2011), and four factors — leadership, academic expectations, teacher relationships and safety — from the New York City School Survey (Kraft, Marinell and Shen-Wei Yee, 2016). All effects are read per standard deviation of the relevant index. On that scale, a one-standard-deviation difference in perceived leadership quality is associated with actual one-year rates of leaving the school (including moves to other schools) that are 1.8 percentage points lower in North Carolina elementary schools — about 10% of the 18% departure base (2.8 points, about 14%, in high schools) (Ladd, 2011); and in New York City middle schools, a school at the 50th percentile that improved all four indices by one standard deviation at once is estimated — from within-school (fixed-effects) variation — to lower annual turnover, of which transfers to other city schools are part, by 3.8 percentage points, a 25% reduction on the 15.1% average rate (Kraft, Marinell and Shen-Wei Yee, 2016). Both estimates are associations, not experimental effects."

**Verification caveat:** Ladd quotes and coefficients are from the CALDER WP 33 full text (the working-paper version of the EEPA 33(2) article; SAGE full text unreachable); the 1.8 pp actual-departure figure is corroborated by the published Kraft et al. (2016) AERJ article's citation of Ladd (2011). All Sims & Jerrim and Kraft et al. quotes are from the primary published full texts.
