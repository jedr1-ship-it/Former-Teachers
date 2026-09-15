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
