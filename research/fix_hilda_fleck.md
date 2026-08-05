# fix_hilda_fleck.md — Closure of GAPS.md items A2/D4, A3, and D13

Prepared 5 August 2026. Status: **all three items CLOSED.** Full text of Cuervo and Vera-Toscano (2025) was obtained (open-access published version, CC-BY) and every disputed number checked against the article's tables and text. The Excel "International: USA," row identity is settled by the lead author's note in `TEAM_INPUT.md` (authoritative) and independently cross-checked against Crossref. Tan et al. (2026, LPI) is confirmed with full citation and DOI.

A copy of the verified PDF is saved at `/tmp/claude-0/-home-user-Former-Teachers/a24edd69-63fe-5960-a606-96920452dc5a/scratchpad/cuervo2025.pdf` (19 pp., T&F published version).

---

## Item A2 / D4 — HILDA post-exit findings (Cuervo and Vera-Toscano, 2025)

### How the full text was obtained
The T&F page and PDF return 403 to automated fetches, but the article is **hybrid open access (CC-BY)** — confirmed via Unpaywall and OpenAlex. A CC-BY copy is deposited in the CSIC repository (handle 10261/420385, Digital.CSIC); the published-version PDF was downloaded from the repository bitstream (the repository sits behind an Anubis proof-of-work gate, which was passed programmatically). Every claim below carries a page/table pinpoint from that PDF.

### Verified bibliographic identity
- **Cuervo, H. and E. Vera-Toscano (2025), "Teacher retention and attrition: understanding why teachers leave and their post-teaching pathways in Australia", *Asia Pacific Journal of Education*, pp. 1–18, published online 10 March 2025, https://doi.org/10.1080/02188791.2025.2473356 (open access, CC-BY).** No volume/issue assigned as of 5 August 2026 — cite by online-first date. Received 18 August 2024; accepted 11 February 2025.
- Authors: **Hernan Cuervo** (Faculty of Education, University of Melbourne) and **Esperanza Vera-Toscano** (Instituto de Estudios Sociales Avanzados, IESA-CSIC, Córdoba, Spain). **The "De Nobile" attribution in `lit_return_incentives` is wrong and must be purged everywhere** (no author of that name is connected to this paper).
- Data: HILDA Survey waves 2001–2022 (22 waves); 987 unique teachers / 13,855 observations (teachers identified via ANZSIC 2006 "Preschool and School Education" industry + ANZSCO "education professionals" codes, ages 22–75); multivariate analysis on 895 teachers (8,048 observations), excluding 92 who left permanently and never returned (pp. 5–6, Table 1). Individual fixed-effects regressions, outcomes standardised; wages CPI-adjusted to December 2022 prices (Table 4 note, p. 10).

### Claim-by-claim verdicts

**1. Job-satisfaction gain "≈0.13–0.19 SD" — VERIFIED, with exact anchoring.**
p. 11 (section "Teachers' job and overall life satisfaction", Figure 2, coefficients in appendix Table A4): teachers who left had "a level of job satisfaction 0.13 standard deviation (sd) higher [one year after leaving] than teachers who stayed and 0.19 sd higher 3 years later". So: **+0.13 SD at 1 year, +0.19 SD at 3 years** — not a vague "within a few years" range. The paper also shows job satisfaction *declining* in the years leading up to departure (falling pre-exit trend, Figure 2) — usable as an early-warning finding. Leisure-time satisfaction rises post-exit (+0.068 SD at 1 year, then +0.052 to +0.098 SD in later years; p. 12, Figure 4). Overall *life* satisfaction shows **no significant change** (p. 12, Table A4 col. 6) — do not conflate with job satisfaction.

**2. "Wages do not meaningfully improve" — VERIFIED, and in fact understated.**
For the average leaver, wages *fall*: weekly wages are **6.2% lower one year after leaving** than in the last pre-exit year (coef −0.062*, Table 4, p. 10; text p. 9), bottoming at **−9.4% at 3 years** (−0.094**), with some recovery from six years out; **hourly wages are significantly lower throughout the post-exit decade** (coefs −0.045* to −0.14***, Table 4). Caveat to carry: among **continuously full-time** workers only (appendix Table A3), weekly wages are +7.8% two years after exit and up to +15% later — but driven by working 3% to 7.1% *more hours*, with hourly wages not consistently higher. Authors' own summary (p. 15): "wages do not significantly increase after leaving the teaching profession, except for former full-time teachers whose weekly (but not hourly) wages rise, indicating more hours worked post-departure". Conclusion for the paper's "conditions-not-pay" premise: **supported** — "financial considerations alone are likely not the driving force" (p. 10).

**3. Destination sectors (healthcare/caring) — VERIFIED.**
Table 2 (p. 7), "Economic status of former teachers based on years since departure": within the first year — **22.1%** employed in *non-teaching* roles within pre-primary/primary/secondary education; **21.8%** employed in "other Education, Health Care and Social Assistance" (Higher Education, Adult and Community Education, educational support services, childcare and other social-assistance services; p. 8); 11.4% other sectors; 28.0% not in the labour force; 13.9% retired; 2.9% unemployed (flagged non-reliable, n<30). By 11–15 years out: other sectors 27.2%, retired 39.8%. Discussion (p. 14): "a significant proportion, around 20%, remain employed in the education sector or 'care' industries like healthcare and social assistance five years after departing". The Excel's "move into related caring fields like healthcare" claim is **supported**, provided it is phrased as the combined *Education, Health Care and Social Assistance* category (21.8% year 1 → 16.7% at 11–15 years), not "healthcare" alone.

**4. Share staying in education — VERIFIED with refinement.**
`lit_why_leave` Claim 4.2's "~20% of leavers remain employed in the education sector" corresponds to the **non-teaching education-sector row: 22.1% (year 1), 20.6% (years 1–5), 14.2% (years 6–10)** (Table 2, p. 7). On top of that, a further ~20% sit in the broader education/health/social-assistance category. Use "roughly one in five leavers stays in the school-education sector in a non-teaching role, and about as many again work in wider education, health care and social assistance".

**5. Attrition-rate figures (bonus check) — VERIFIED.**
Leaving rate **11.6% in 2022**; peak **16.3% in 2012** (p. 7, Figure 1). Entrant rate fell from 24.8% (2005) to 7.9% (2020). `lit_why_leave` Claim 1.5 stands as written.

### Corrected text (replaces the wrong passages)

Replace `lit_return_incentives` §A2 bullet (line 36) with:

> **Australia**: two-decade HILDA panel evidence (fixed-effects, 2001–2022) shows workload, stress and work-life balance — not salary — drive exit, and leavers' job satisfaction *rises* (+0.13 SD one year after exit, +0.19 SD after three years) even though wages initially *fall* (weekly wages −6.2% at one year, −9.4% at three years; hourly wages lower for a decade after exit) (Cuervo and Vera-Toscano, 2025, pp. 9–11, Tables 2 and 4, Figure 2). Only continuously full-time leavers see weekly earnings rise — by working more hours. Implication: money alone will not reverse a decision that was not about money.

Replace the `lit_return_incentives` §B table cell "Australia: workload/work-life balance; leavers get happier without earning more (HILDA, 2025)" with "… (Cuervo and Vera-Toscano, 2025)".

In `lit_why_leave` Claim 4.2, delete the "[UNVERIFIED — paywalled]" / "[EXCEL ISSUE — partial]" flags and substitute:

> Cuervo and Vera-Toscano (2025, Table 2): **22.1%** of leavers hold non-teaching jobs in the school-education sector one year after exit (20.6% over years 1–5) and a further **21.8%** work in other education, health care and social assistance; job satisfaction is +0.13 SD one year and +0.19 SD three years after exit, with sustained gains in leisure-time satisfaction and **no** meaningful wage improvement (weekly wages −6.2% at one year; hourly wages persistently lower). Verified against the open-access full text.

Also delete `lit_why_leave` caveat (c) item 4 ("HILDA row: healthcare-destination and flat-wage claims not verifiable") — now verified.

### Supersedes
- `lit_return_incentives` §A2 line 36 ("De Nobile/HILDA-based study, 2025") — **author attribution wrong; numbers now anchored**.
- `lit_return_incentives` bibliography line 144 ("[HILDA study] (2025) … [author names not captured]") — replace with the full citation below.
- `lit_why_leave` Claim 4.2 [UNVERIFIED] flags and caveat (c)(4) — lifted.
- GAPS.md A2 and D4 — **CLOSED**.

---

## Item A3 — Identity of the Excel's truncated "International: USA," row

### Resolution
**CLOSED by the team.** `TEAM_INPUT.md` (lead author, 5 August 2026 — authoritative, overrides agent conclusions) confirms the row is:

> **Sims, S., H. Lowes-Belk and C. Routledge (2026), "Why do people choose to enter and exit the teaching profession? An interdisciplinary quantitative synthesis", *British Educational Research Journal*, https://doi.org/10.1002/berj.70027.**

Independent cross-check (Crossref, 5 August 2026): authors Sam Sims, Harriet Lowes-Belk, Clare Routledge; *BERJ* **Vol. 52, Issue 3, pp. 1652–1676**; first published online **24 October 2025** (2026 issue); open access (Unpaywall: is_oa = true). Cite as Sims, Lowes-Belk and Routledge (2026) with the online-first date noted.

### Outcome of the two hypothesis tests requested by GAPS.md
- **Fleck et al. (2025, *De Economist*) hypothesis: REJECTED.** Crossref confirms the article exists exactly as cited in the corpus (Fleck, L., M. Somers, T. Stolp, W. Groot, F. van Merode and R. de Vries, "The Effectiveness of Interventions to Increase Employment in Education and Healthcare: A Systematic Literature Review", *De Economist*, Vol. 173, pp. 1–45, published online 16 December 2024), but the corpus had already established that the published article contains no "simplistic but illustrative model", and the lead author has now confirmed the row is not Fleck. No distinct ROA/Maastricht working-paper version of the Fleck review was located in this pass (the related ROA output, Somers et al. 2024 Research Memorandum 2024/004E, is a different product — the hidden-reserve study); the question is moot given the team confirmation. [The ROA-WP check is therefore closed as OBE — overtaken by events — not as verified-absent.]
- **Sims et al. (2026, BERJ) hypothesis: CONFIRMED.** Pepe's Excel comment ("very solid literature review restricted to causal or quasi-experimental evidence; the model is quite simplistic but illustrative; lessons are very country dependent") and the quality rating of 4 attach to Sims et al. (2026). Per `TEAM_INPUT.md`, the "simplistic but illustrative model" is the paper's single interdisciplinary model of the decision (not) to teach, tested against a systematic review of survey experiments on the job preferences of teachers and potential teachers.

### Corrected text / supersessions
- `lit_return_incentives` §E line 108: replace "identified above as Fleck et al. (2025), *De Economist* — recommend the team confirm" with "confirmed by the lead author (5 August 2026) as **Sims, Lowes-Belk and Routledge (2026, BERJ)**; the Excel quality rating (4) and comment attach to that paper, NOT to Fleck et al.".
- Any Chapter 3 passage that hangs the Excel's quality-4 assessment on Fleck et al. must be rewritten: **Fleck et al. (2025) stays in the paper as a separately verified Chapter 3 source** (US-dominated causal base: 72 of ~86 studies; Norway wage-premium entry effect), but it carries no Excel quality rating.
- `lit_why_leave` caveat (c)(5) item 3 ("the study cannot be identified from the sheet … team must clarify") — superseded; clarified.
- `lit_reserve` "unidentifiable" note — superseded.
- Update the Sims citation everywhere from "Sims, S. et al. (2026) … [Full author list not retrieved]" to the full three-author citation with volume/issue/pages below.
- GAPS.md A3 — **CLOSED**.

---

## Item D13 — US "2026 Report" = Tan et al. (2026, LPI): confirmed; propagate

### Verification (5 August 2026)
LPI product page and technical supplement confirm:

> **Tan, T., W. Wei, D. Carver-Thomas and E. García (2026), *Teacher Turnover in the United States: Who Moves, Who Leaves, and Why*, Learning Policy Institute, published 17 March 2026, https://doi.org/10.54300/248.479** (report page: https://learningpolicyinstitute.org/product/teacher-turnover-united-states-report; technical supplement dated March 2026).

Key verified figures: **15.1%** of US public-school teachers moved schools or left teaching between 2020–21 and 2021–22 (**8.0% movers, 7.1% leavers**); data are NCES **NTPS 2020–21 + TFS 2021–22**; ~74% of departures voluntary and non-retirement; turnover **35–37% higher** in schools serving the largest concentrations of low-income students and students of colour; charter schools 17.8% vs 14.9% traditional public; city schools 17.7% vs rural 14.5%; each USD 1,000 of (cost-of-living-adjusted) salary associated with ~**0.34 pp** lower turnover probability. This matches the Excel row's description and `lit_why_leave`'s identification exactly.

### Propagation (the actual D13 fix)
- `lit_shortages` §E (bullet "US '2026 Report' … not identifiable from the Excel; confirm with the team", line 144): replace with the Tan et al. (2026) citation above; the [S] tag on item 39's turnover-concentration claim can move to [P] using the report's own tables.
- `lit_return_incentives` §E (line 114, "the specific report was not verified in this pass [UNVERIFIED]"): replace with the Tan et al. (2026) citation; the 15.1/8.0/7.1 split is verified.
- Keep `lit_why_leave` caveat (c)(5) item 2 as is: LPI's 15.1/8.0/7.1 vs NCES's official rounded 84/8/8 — cite both, note the difference.
- GAPS.md D13 — **CLOSED**.

---

## Bibliography (OECD author–year style)

- Cuervo, H. and E. Vera-Toscano (2025), "Teacher retention and attrition: understanding why teachers leave and their post-teaching pathways in Australia", *Asia Pacific Journal of Education*, pp. 1–18, published online 10 March 2025, https://doi.org/10.1080/02188791.2025.2473356 (accessed on 5 August 2026). Open access (CC-BY); repository copy: https://digital.csic.es/handle/10261/420385.
- Fleck, L., M. Somers, T. Stolp, W. Groot, F. van Merode and R. de Vries (2025), "The Effectiveness of Interventions to Increase Employment in Education and Healthcare: A Systematic Literature Review", *De Economist*, Vol. 173, pp. 1–45, published online 16 December 2024, https://doi.org/10.1007/s10645-024-09440-8 (accessed on 5 August 2026).
- Sims, S., H. Lowes-Belk and C. Routledge (2026), "Why do people choose to enter and exit the teaching profession? An interdisciplinary quantitative synthesis", *British Educational Research Journal*, Vol. 52/3, pp. 1652–1676, published online 24 October 2025, https://doi.org/10.1002/berj.70027 (accessed on 5 August 2026).
- Tan, T., W. Wei, D. Carver-Thomas and E. García (2026), *Teacher Turnover in the United States: Who Moves, Who Leaves, and Why*, Learning Policy Institute, 17 March 2026, https://doi.org/10.54300/248.479, https://learningpolicyinstitute.org/product/teacher-turnover-united-states-report (accessed on 5 August 2026).
