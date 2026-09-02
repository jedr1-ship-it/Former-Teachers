# Bibliographic verification: is there any meta-analysis of teacher ATTRITION alone?

**Claim under test (for footnote):** "No meta-analysis covers attrition alone" — i.e. all available meta-analyses pool teacher *turnover* (leaving the profession + moving schools), and none synthesises studies whose outcome is exclusively *leaving the profession*.

**Method note.** Verification run 2 September 2026. Sources actually consulted: ERIC API (api.ies.ed.gov/eric), Crossref API, Semantic Scholar record pages, WebSearch, and full texts of (a) Nguyen, Pham, Crouch & Springer, EdWorkingPaper 19-149 (PDF, edworkingpapers.com/ai19-149 — the working-paper version of the 2020 *Educational Research Review* article), (b) Gundlach (2022) PhD thesis, University of Melbourne, Minerva Access hdl.handle.net/11343/311698 (the thesis version of Gundlach, Slemp & Hattie 2024), and (c) Madigan & Kim (2021) accepted manuscript (White Rose Research Online, eprints.whiterose.ac.uk/175288). OpenAlex and the Semantic Scholar search endpoint were rate-limited and unusable; ScienceDirect, SAGE and MDPI HTML returned 403, so Borman & Dowling (2008) and two other papers could not be read first-hand (flagged in §3).

---

## 1. Candidate syntheses found

### 1.1 Borman, G.D. and N.M. Dowling (2008), "Teacher attrition and retention: A meta-analytic and narrative review of the research", *Review of Educational Research*, 78(3), 367–409. doi:10.3102/0034654308321455

- **Standing:** RER is the top-ranked review journal in education (Q1; among the highest impact factors in the field). ~1,300 citations (Semantic Scholar).
- **Size:** 34 studies, 63 "attrition moderators", US literature 1980–2005.
- **Outcome pooled:** Titled "attrition", but **does not separate leaving the profession from moving schools**, and its study pool also mixes in some intention-based studies. Two independent later meta-analytic teams say so explicitly:
  - Gundlach (2022 thesis, Table 6 discussion, p. 101 area): "Except for Nguyen (2018)/Nguyen et al. (2020) …, the previous analyses **have not distinguished between attrition and migration**. This is a significant limitation as it means it is unknown whether the turnover in the other analyses reflects departures from a school or the profession." (Table 6 lists Borman & Dowling among those "previous analyses"; outcomes of focus coded "Attrition, Retention".)
  - Nguyen et al. (EdWorkingPaper 19-149, p. ~19): "We focus on and code determinants of teacher attrition and retention, and **not teacher intentions**, even though they are sometimes used synonymously … Consequently, there are studies that were included in B&D (2008) that are not included in this study (Dworkin, 1980; Hall, Pearson, & Carroll, 1992; Ingersoll & Alsalam, 1997; Shen, 1997; Whitener et al., 1997)."
- **Verdict for the claim:** Not an attrition-only synthesis. Despite the title, it is a turnover-style pool (leavers + movers not distinguished; some intention studies included). *Caveat: characterisation is second-hand — see §3.*

### 1.2 Nguyen, T.D., L.D. Pham, M. Crouch and M.G. Springer (2020), "The correlates of teacher turnover: An updated and expanded meta-analysis of the literature", *Educational Research Review*, 31, 100355. (Working-paper version verified: "The Factors of Teacher Attrition and Retention…", EdWorkingPaper 19-149 / ERIC ED671044.)

- **Standing:** *Educational Research Review* is Q1 and one of the highest-impact education journals.
- **Size:** 120 US studies, 1980–2018; effect sizes as (log) odds ratios.
- **Outcome pooled:** Explicitly turnover. Working paper: "We focus on the factors that influence teacher turnover (**we use turnover and attrition interchangeably**), which includes teachers switching schools and teachers leaving the profession." Main analysis pools switchers + leavers ("Since a substantial number of papers combine leavers and switchers together and discuss them as teacher attrition, we have also opted to follow this practice, and our main analysis includes studies of both forms of attrition").
- **BUT — attrition-only robustness analysis exists:** "**Leavers only.** … we drop all effect estimates that combine leavers and switchers, leaving only estimates that compare leavers with stayers (Appendix Table 7). The results of using the leavers-only estimates are substantively similar to the main analysis." A parallel "Switchers only" model is Appendix Table 8.
- **Verdict for the claim:** Turnover pooled in the headline results; a leavers-only (profession-exit) re-estimation exists as an appendix robustness check, not as the synthesis itself.

### 1.3 Gundlach, H.A.D., G.R. Slemp and J. Hattie (2024), "A meta-analysis of the antecedents of teacher turnover and retention", *Educational Research Review*, 44, 100606. (Thesis version verified in full: Gundlach 2022, University of Melbourne, open access.)

- **Standing:** *Educational Research Review*, Q1.
- **Size:** 3,430 correlation coefficients across 186 studies / 190 independent samples (thesis, Study 2), ~70 antecedents, worldwide, 1980–2018 search window; >150 distinct turnover measures catalogued.
- **Outcome pooled:** Turnover *and* retention, but **deliberately disaggregated**: past studies classified into attrition, migration, retention-in-school, retention-in-profession (residual "Leave (all)"/"Stay (all)" where the primary study is ambiguous), and intentions coded separately from behaviour throughout. Thesis outcome counts: 76% of included studies concern profession-level career decisions; behaviours 45% of studies, intentions 57%.
- **Key point for the claim:** This is the only meta-analysis that reports **pooled estimates specific to actual attrition behaviour** (distinct from migration and from intentions). It is still not "attrition alone": attrition is one of several outcome strata inside a general turnover/retention synthesis. The thesis itself notes "Studying actual attrition is relatively under-researched, and this is a concern as the effects can be much lower for behaviors than for intentions."

### 1.4 Madigan, D.J. and L.E. Kim (2021), "Towards an understanding of teacher attrition: A meta-analysis of burnout, job satisfaction, and teachers' intentions to quit", *Teaching and Teacher Education*, 105, 103425.

- **Standing:** TATE, Q1.
- **Size (verified from accepted manuscript):** 24 studies, 38 effect sizes (10 studies burnout→intentions, 14 studies satisfaction→intentions; N up to 6,678 per pooled r).
- **Outcome pooled:** **Intentions to quit only** — self-reported intentions, not behaviour (title's "attrition" is framing, not the measured outcome). Exhaustion r+ = .41; depersonalization r+ = .32; reduced accomplishment r+ = .21; job satisfaction r+ = −.40.
- **Verdict for the claim:** Not attrition behaviour; intentions only.

### 1.5 Li, R. and M. Yao (2022), "What promotes teachers' turnover intention? Evidence from a meta-analysis", *Educational Research Review*, 37, 100477. doi:10.1016/j.edurev.2022.100477

- **Standing:** *Educational Research Review*, Q1.
- **Size:** 94 studies (64 English, 30 Chinese), 99 independent samples, 269 effect sizes (figures from search snippets; full text not read — see §3).
- **Outcome pooled:** **Turnover intention only**; the construct does not distinguish intending to leave the school from intending to leave the profession.

### 1.6 Farahmandpour, H. and R.H. Voelkel Jr. (2025), "Teacher Turnover Factors and School-Level Influences: A Meta-Analysis of the Literature", *Education Sciences*, 15(2), 219. doi:10.3390/educsci15020219

- **Standing:** MDPI *Education Sciences* — indexed but mid-tier (roughly Q2 by prestige; high-volume OA outlet).
- **Size:** 85 studies (from 290 screened), 1994–2024, US + international.
- **Outcome pooled (from Crossref abstract):** "teacher turnover" generically; no attrition/migration separation is claimed anywhere in the abstract.
- **Verdict for the claim:** turnover pooled.

### 1.7 Unpublished dissertations identified by Gundlach (2022, Table 6) as the only other meta-analyses of teacher turnover/retention

- **Grant, L.L. (2003)**, *Meta-analysis of induction and mentoring programs' contribution to new teacher retention during the first five years of employment*, EdD dissertation, Northern Illinois University. 9 studies, US; outcome coded by Gundlach as "Retention" with induction/mentoring as the only antecedents. Not attrition-specific; not published.
- **Hudson, T.J. (2009)**, *New teacher job dissatisfaction and attrition from 1983–2005: A meta-analysis*, PhD dissertation, Saint Louis University (ProQuest). 16 published studies, US; outcomes coded by Gundlach as "Dissatisfaction and attrition (New teachers)". **This is the only item found whose stated outcome focus is "attrition"** — but it is (a) unpublished, (b) restricted to new teachers, and (c) covered by Gundlach's blanket statement that pre-Nguyen analyses "have not distinguished between attrition and migration". I could not retrieve the dissertation itself to check its operationalisation (§3).

### 1.8 Adjacent syntheses checked and ruled out as attrition meta-analyses

- **Mason, S. (2017)**, "Foreign Language Teacher Attrition and Retention Research: A Meta-Analysis", *NECTFL Review* (niche practitioner journal). A "**qualitative** meta-analysis" — thematic, no effect sizes; Gundlach reclassifies it as a systematic review "as it did not calculate effect sizes" (verified via ERIC abstract + thesis note to Table 6).
- **See, B.H., R. Morris, S. Gorard, D. Kokotsaki and S. Abdi (2020)**, "Teacher Recruitment and Retention: A Critical Review of International Evidence of Most Promising Interventions", *Education Sciences*, 10(10), 262; and See, Morris, Gorard & El Soufi (2020), *Oxford Review of Education*, 46(6). Durham critical/systematic reviews of **interventions**; 120 pieces of research weighted by strength of evidence, narratively synthesised (no pooled effect sizes). Outcomes span entering teaching, staying in the profession and staying in post; ERIC abstract confirms conclusions are about recruitment and retention "in the teaching profession", but this is a structured review, not a meta-analysis.
- **Ingersoll, R.M. and M. Strong (2011)**, "The Impact of Induction and Mentoring Programs for Beginning Teachers: A Critical Review of the Research", *Review of Educational Research*, 81(2). **Critical review of 15 studies, not a meta-analysis**; outcomes are "teacher commitment and retention", classroom practices and student achievement — retention here is not profession-exit-specific (verified via ERIC abstract).
- **Billingsley, B.S. (2004)**, *Journal of Special Education*, 38(1), and **Billingsley & Bettini (2019)**, "Special Education Teacher Attrition and Retention: A Review of the Literature", *Review of Educational Research*, 89(5): both **narrative/systematic reviews without meta-analysis**; indeed Nguyen et al. cite Billingsley & Bettini as the source flagging the leaver/switcher conflation as "a pervasive problem" in the literature.
- **Gilmour, A.F. and T. Lam (2026)**, "A Systematic Review and Meta-Analysis of Dual-Certification in Special Education and General Education", *Journal of Special Education*. 27 studies on dual certification; attrition appears only as one of several "workforce decisions" outcomes ("growing evidence suggested that dual-certified teachers had higher attrition"), and the meta-analytic component is explicitly "limited by the small number of comparable quantitative studies". Not an attrition synthesis.
- **Pham, L.D., T.D. Nguyen and M.G. Springer (2021)**, "Teacher Merit Pay: A Meta-Analysis", *American Educational Research Journal*, 58(3). Primary pooled outcome is **student test scores** (37 studies); any retention/turnover outcome is secondary and not profession-exit-specific (abstract only mentions test scores — see §3).
- **Economics literature:** searched for any meta-analysis/meta-regression of pay (or other) elasticities of teacher *exit* from the profession (terms: elasticity, exit, quitting, wastage, separations). **None found.** Salary effects on attrition appear only as moderator categories inside the education meta-analyses above (B&D; Nguyen; Gundlach); primary economics studies (e.g. Dolton & van der Klaauw 1999, cited by Nguyen) feed those pools but have not been separately synthesised.
- **Turnover-intention side-fields** (burnout, wellbeing, leadership): Aloe, Amo & Shanahan (2014, *Educational Psychology Review*, classroom-management self-efficacy→burnout, 16 studies); Zhou, Slemp & Vella-Brodrick (2024, *Educational Psychology Review*, teacher wellbeing correlates); Hallinger et al. (2025, *European Journal of Education*, principal instructional leadership→teacher attitudes). None has attrition behaviour as outcome.

---

## 2. Verdict

**True-with-nuance — and the nuance now matters.** After searching ERIC, Crossref, Semantic Scholar and the open web across education, economics and psychology vocabularies (attrition, exit, quitting, wastage, leaving the profession, leavers, separations), I found **no published meta-analysis whose synthesis is confined to teachers leaving the profession as the outcome**. The one item with an attrition-titled focus other than Borman & Dowling is an unpublished 2009 dissertation limited to new teachers (Hudson). However, the flat wording "no meta-analysis covers attrition alone" is vulnerable on two fronts: (i) Gundlach, Slemp & Hattie (2024) *does* report attrition-specific pooled estimates — actual profession-leaving, separated from migration, retention and intentions — inside a broader turnover meta-analysis; and (ii) Nguyen et al. (2020) report a "leavers-only" re-estimation in their appendix. A referee who knows either paper could object to the unqualified sentence.

**Defensible footnote wording:**

> "To date no meta-analysis has taken leaving the profession as its sole outcome. Borman and Dowling (2008), despite the 'attrition' title, did not distinguish teachers who left the profession from those who changed schools, and Nguyen et al. (2020) explicitly pool the two ('we use turnover and attrition interchangeably'), reporting a leavers-only estimation only as a robustness check; meta-analyses of quit intentions (Madigan and Kim, 2021; Li and Yao, 2022) measure intentions rather than behaviour. The closest available evidence is Gundlach, Slemp and Hattie (2024), who, within a general turnover synthesis, estimate antecedent effects separately for actual attrition, migration and retention, and find actual attrition markedly under-studied relative to intentions."

A shorter defensible version: "no meta-analysis has synthesised studies of profession-leaving exclusively; the only attrition-specific pooled estimates available come from outcome subgroups within broader turnover meta-analyses (Nguyen et al., 2020, App. Table 7; Gundlach, Slemp and Hattie, 2024)."

**Not defensible:** "meta-analyses tell us nothing about attrition as distinct from mobility" (Gundlach 2024 contradicts it), or citing Borman & Dowling as an attrition-only synthesis.

---

## 3. What I could not verify (flags)

1. **Borman & Dowling (2008) inclusion criteria were not read first-hand** (SAGE paywalled, HTTP 403; no OA copy located). The characterisation "did not distinguish attrition from migration; included some intention-based studies" rests on two independent secondary sources quoted verbatim in §1.1 (Nguyen et al. working paper; Gundlach thesis Table 6 and accompanying text). Both are themselves peer-reviewed meta-analytic teams, but if the footnote leans hard on B&D, someone with library access should confirm against B&D pp. 372–376 (methods).
2. **Hudson (2009) dissertation** could not be retrieved from ProQuest; study count and outcome coding are taken from Gundlach (2022, Table 6) and Gundlach's reference list. Its operationalisation of "attrition" (profession vs. position) is unknown.
3. **Li & Yao (2022)** full text not read (ScienceDirect 403); k = 94 studies / 269 effect sizes comes from search-result snippets of the abstract and should be confirmed before quoting the numbers.
4. **Nguyen et al. (2020) published ERR version** was verified via the EdWorkingPaper 19-149 PDF (its acknowledged preprint); appendix-table numbering ("Appendix Table 7") is from that version and may differ in the journal's supplementary files.
5. **Pham et al. (2021)** merit-pay meta-analysis: only the abstract was checked; whether it contains any pooled teacher-retention effect (and how retention is defined there) is unverified — it is cited here only to document that the economics-adjacent intervention synthesis does not fill the gap.
6. **Coverage limits:** OpenAlex and the Semantic Scholar search API were rate-limited/unavailable during this session; Google Scholar, Scopus and Web of Science were not accessible. A meta-analysis published in a low-visibility outlet or a non-English venue (beyond the Chinese-language studies inside Li & Yao) could have been missed, though the 2022–2025 syntheses reviewed here (Gundlach thesis Table 6; Gundlach et al. 2024; Farahmandpour & Voelkel 2025) each survey prior meta-analyses and none cites an attrition-only one.
