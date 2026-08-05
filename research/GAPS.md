# GAPS.md — Completeness critique of the research base

Prepared 4 August 2026 by the completeness critic. Reviewed: `excel_structured.json` and all files in `scratchpad/research/` (lit_shortages, lit_why_leave, lit_return_incentives, lit_reserve, lit_retiree_mentoring, cases_nsw_bahamas, cases_england_nz, cases_retiree_return, cases_mentoring, cases_us_legislation, cases_other_legislation, style_oecd, style_house_rules; trsl18_louisiana_source.html is a raw source capture).

Severity: **BLOCKING** = must be resolved before the draft goes to referees (factual error, invalid citation, or a hole a referee will certainly hit). **NICE-TO-HAVE** = strengthens the paper; not fatal if documented as a limitation.

Overall verdict: the corpus is unusually strong on verification discipline (most Excel entries now have primary sources, corrected numbers and filter verdicts). The residual problems are (i) corrections made in the case files that have NOT been propagated back into the chapter literature files, (ii) headline OECD statistics still resting on secondary renderings, and (iii) two structural holes (no Dutch activation programme; no assembled Chapter 5 base).

---

## A. [UNVERIFIED] claims that matter

### A1. BLOCKING — Chapter 1/2 headline OECD statistics sourced from secondary coverage
The intro's spine numbers are tagged [S] (search snippets or EI/TES renderings), which fails the paper's own rigor rule and OECD refereeing:
- PISA 2022: principal-reported shortage 26% → 47% (2018–2022); >30 pp rises in AUS/BEL/CHL/FRA/LVA/NLD/POL/PRT (`lit_shortages` item 7, [S]).
- EAG 2025: attrition 6.5% average across 19 systems, <3% FRA/GRC/IRL/ISR, >10% DNK/EST/LTU; Austria 4,778 vacancies / 4.6% (`lit_shortages` items 9–10, [S]).
- TALIS 2024: 23% in shortage-hindered schools; 17% of non-retiring teachers intend to leave; ~20% of under-30s; 33% felt prepared for multicultural settings — all via Education International / TES, not the OECD volume itself (`lit_shortages` items 13–14, 44; `lit_why_leave` Claim 2.3 update is better sourced).
- TALIS 2018 ITE coverage "~35% multicultural training" needs re-check against Table I.4.13/I.4.20 (`lit_shortages` item 41).
**Search to close:** open OECD (2023) *PISA 2022 Results Vol. II* (Table II.B1.5.x on staff shortage index), OECD (2025) *Education at a Glance 2025* Indicator D8 tables (D8.3/D8.4), and OECD (2025) *TALIS 2024 Results Vol. I* chapter tables directly on oecd.org; replace every [S] tag with a page/table pinpoint.

### A2. BLOCKING — HILDA post-exit findings (Australia) asserted in one file, unverifiable in another
`lit_return_incentives` A2 states as fact: leavers' job satisfaction rises "≈0.13–0.19 SD" while "wages do not meaningfully improve", attributed to a "De Nobile/HILDA-based study, 2025". `lit_why_leave` Claim 4.2 flags exactly these claims (plus healthcare destinations) as **[UNVERIFIED — paywalled]**, and identifies the paper as Cuervo and Vera-Toscano (2025), *Asia Pacific Journal of Education*. The Excel's "conditions-not-pay" premise for Chapters 2–3 leans on this study.
**Search to close:** obtain full text of Cuervo, H. and E. Vera-Toscano (2025), doi 10.1080/02188791.2025.2473356 (try University of Melbourne repository / Findanexpert preprint, or library access); verify effect sizes, wage trajectory and destination sectors; delete the "De Nobile" attribution everywhere.

### A3. BLOCKING — Identity of the Excel's truncated "International: USA," research row
Three files disagree: `lit_return_incentives` says "almost certainly" Fleck et al. (2025), *De Economist* (and builds Chapter 3's causal-evidence synthesis on it); `lit_why_leave` lists Fleck AND Sims et al. (2026, BERJ) as candidates, both [UNVERIFIED]; `lit_reserve` says unidentifiable. The Excel comment's "simplistic but illustrative model" was NOT found in the published Fleck article.
**Action to close:** ask the team (Pepe) to confirm the reference; check the Fleck working-paper version (ROA/Maastricht) for the stylised model. Until confirmed, the paper cannot cite the Excel row's quality assessment.

### A4. BLOCKING — Austria: pay and context statistics not yet sourced
- "Returnees paid at beginner salary scale" appears as fact in `lit_return_incentives` A6 and the `lit_retiree_mentoring` contrast table ("a documented irritant"), but `cases_retiree_return` §1.2 flags it **[UNVERIFIED]** pending Resch (2025) full text (paywalled; no OA copy).
- "45% of >550 surveyed Austrian school leaders report an acute shortage" (`lit_return_incentives` A6) carries **no citation at all**.
- "Nine interviews, Upper Austria 2024–25" (`lit_return_incentives`) vs "n=14, nine retiree interviews, region unstated" (`cases_retiree_return`) — the region claim is unsourced.
**Search to close:** library access to Resch, K. (2025), doi 10.1080/02619768.2025.2531930; source or delete the 45%/550 school-leader figure (possible origin: an Austrian school-leader survey reported alongside the EJTE paper — find it or cut).

### A5. NICE-TO-HAVE — Smaller unverified items to fix or hedge before final
- Aldeman and Yi (2025) volume/issue (cite by date/URL as `lit_why_leave` suggests).
- DfE Working Lives of Teachers wave/report number (`lit_why_leave` Claim 2.6) — cite the GOV.UK release directly.
- England returner inflow FTE for 2024/25 (~17,000) — pull DfE's "qualified entrants by type" underlying table (`lit_reserve` Claim 4).
- Australia DoE (2022) Issues Paper 4,100-shortfall figure — download the PDF (`lit_shortages` item 30).
- UNESCO "50 million" 2025 figure — verify or stick to 44M (`lit_shortages` item 6).
- Smith and Ingersoll (2004) exact pp reductions before quoting numbers (`lit_retiree_mentoring` A1).
- Foster (2010) retiree-interest statistics are a secondary citation inside DeCesare et al. (`lit_retiree_mentoring` A5) — quote as "as cited in".
- Michigan "most permissive among Midwest peers" rests on a personal communication and sits oddly with pre-2023 descriptions of Michigan as uniquely strict (`cases_us_legislation` §6) — hedge or drop.
- NZ ANZUK "1,360 relocation grants/year" is a recruiter figure (`cases_england_nz` §3.2e) — label as indicative or drop.
- KLFY "first-year teacher salary" claim for Louisiana conflicts with R.S. 11:710 (`cases_us_legislation` §4) — do not use.

---

## B. Initiatives with missing key facts

### B1. BLOCKING — A cited source that does not exist: Michigan "2020 Preliminary Findings"
Both `lit_why_leave` and `lit_reserve` (caveat 2) searched and could not locate any separately published 2020 preliminary-findings document; the Excel lists it as a source. Citing it would fabricate a reference. **Action:** replace with the REL 2021-076 report + Study Snapshot ED611792, and correct the Excel.

### B2. NICE-TO-HAVE — Programmes/laws with no uptake or outcome data (state explicitly as evidence gaps; searches may still close a few)
| Initiative | Missing | Suggested search |
|---|---|---|
| England RTTA (post-2022, all-subjects phase) | Uptake/cost after the 2022 expansion; only 2019/20–2020/21 figures exist | Hansard/written questions 2023–2026 "return to teaching adviser"; DfE annual report and accounts |
| New Zealand TER waiver / relief-teach on-ramp | Any participant counts; any evaluation | NZ OIA disclosure log (Ministry of Education + Teaching Council annual reports); "Teacher Education Refresh" statistics |
| Ireland Career Break substitution | Counts of teachers on career break (data exist in the Teacher Statistics series but were not retrieved) | gov.ie "Teacher Statistics" tables, career break by year/sector |
| France cumul emploi-retraite (teachers) | Any aggregate count of retired teachers rehired | DEPP *Bilan social du ministère de l'Éducation nationale* (chapter on contractuels/retraités); "cumul emploi-retraite enseignants effectifs DEPP" |
| Louisiana Act 394/344 | Uptake counts | TRSL actuarial valuations and board reports; Legislative Auditor pre-2034 report scope |
| Virginia ED-3 / critical-shortage rehires | Uptake counts | VRS annual reports; VDOE critical-shortage survey publications |
| Michigan PA 184/147 | Uptake counts | ORS/MPSERS annual actuarial valuations; Michigan House Fiscal Agency analyses |
| China Silver Age (2023 plan) | Progress tally toward 120,000; any independent evaluation | MOE annual press conferences 2024–2026; CNKI for Chinese-language evaluations of 银龄讲学计划 |
| Bahamas Teacher Reservist | Pay terms; reservist-specific enrolment | Bahamas Ministry of Education releases from September 2026 school opening |
| NSW Teachers Re-Engage | Any reporting after May 2024; cost | NSW budget papers/estimates hearings 2024–26 ("Teachers Re-Engage") |
| Spain 10 Mirrors | Continuation after 2018; mentor compensation | Universidad de Zaragoza POUZ annual reports post-2018 |
| Experience Corps | Share of volunteers who are former teachers (Excel frames the programme as "former teachers"; not documented) | AARP Foundation volunteer surveys/annual reports; reframe as older-volunteer programme regardless |
The absence-of-data pattern is itself a finding for Chapter 5 (programmes are announced, rarely accounted for) — say so explicitly.

### B3. NICE-TO-HAVE — Team decisions pending
- WestEd "pension savings → mentor stipends" row: `cases_mentoring` recommends **drop** as a standalone case (single second-hand personal communication; premise state-dependent). Team must sign off.
- China "2025 Case Study" source label: Zhang, Fang and Jiang (2025) vs SCMP (Wu, 2025) — ask the Excel's author which was meant; cite the 2018/2023 government notices regardless.
- `quality_jose`/`comments_jose` columns empty throughout the Excel — second quality rating never done.

---

## C. Chapters with thin evidence (against the outline)

### C1. Chapter 1 (Introduction) — adequate, pending A1 primary-source fixes. No structural gap.

### C2. Chapter 2 (Why teachers leave and where they go) — strong. NICE-TO-HAVE: continental-European determinants evidence is thin (Federičová 2021 identified but findings never extracted — `lit_why_leave` bibliography note). Extract it or accept the US/UK/AUS/NL skew explicitly.

### C3. Chapter 3 (What would bring them back) — strong on stated preferences and retention-incentive elasticities; **no direct causal evidence on re-entry incentives exists anywhere** (all files agree). This is a finding, not a closable gap — but the chapter must not silently borrow retention elasticities as re-entry elasticities (caveat already drafted in `lit_return_incentives` C1; keep it).

### C4. Chapter 4.1 (Programmes) — two holes:
- **BLOCKING — No Netherlands activation programme.** The Dutch reserve is the paper's benchmark case (Chapters 2–3), yet 4.1 contains no Dutch instrument. One exists: the Ministry of OCW ran a *herintreders* (returner) subsidy in primary education (EUR 2,500 per returner towards induction/support; 100 grants in 2019, 100 in 2020) alongside the *Subsidieregeling regionale aanpak lerarentekort* (regional shortage approach). Confirmed to exist via OCW newsletter (3 July 2019, nieuwsbrievenminocw.nl), AOb coverage, and Staatscourant 2017-62002. **Search to close:** "tegemoetkoming herintreders primair onderwijs Staatscourant" + DUS-I subsidy pages; get scheme text, uptake, end date.
- NICE-TO-HAVE — Geographic skew: nothing from Asia besides China (Japan's routine re-employment of retired teachers as full-time adjuncts is documented — MEXT's 2021 shortage survey and Nippon.com report retirees at ~60% of adjuncts in one prefecture; a one-paragraph mention with a MEXT source would pre-empt the "why only China?" question). Germany has Länder-level retiree recruitment data (13 of 16 Länder; Hesse wrote to ~7,000 retirees) sitting in `lit_reserve` Claim 7 but no 4.1 case treatment — elevate with primary Land sources. Sweden (highest EAG vacancy rate) has no re-entry entry at all — search Skolverket/Lärarförbundet for return-to-teaching measures before conceding the gap.

### C5. Chapter 4.2 (Regulation) — six US states + IE/ON/FR is anecdote-rich but synthesis-poor:
- NICE-TO-HAVE (strong): no 50-state or cross-country synthesis of pension re-employment rules. ECS maintains a retired-teachers policy resource (ecs.org/tag/retired-teachers/ — confirmed to exist, includes a state-information request on exactly this question); NASRA publishes return-to-work briefs. Add one synthesis citation so the six state cases read as examples, not the universe.
- NICE-TO-HAVE: England appears in 4.1 but not 4.2 — the Teachers' Pension Scheme has its own re-employment/abatement rules for final-salary members. Search "Teachers' Pension Scheme abatement re-employment" (teacherspensions.co.uk) to add the missing England regulation paragraph.

### C6. Chapter 5 (Lessons and recommendations) — **BLOCKING: no evidence file exists for this chapter.** Design principles are scattered (`lit_return_incentives` §D, filter verdicts in five case files) and there is no OECD flagship anchor: *Education Policy Outlook 2024* is cited once (in `lit_reserve`), and OECD (2005) *Teachers Matter: Attracting, Developing and Retaining Effective Teachers* (doi 10.1787/9789264018044-en) — the canonical OECD source on attraction/retention/re-entry that any referee will expect — appears nowhere in the corpus. **Action:** write a Chapter 5 synthesis memo consolidating the §D principles + filter verdicts; anchor on EPO 2024, Teachers Matter (2005), and the EAG 2025 D8 resignations-vs-retirements split.

---

## D. Contradictions between files (each must be reconciled once, then propagated)

| # | Contradiction | Files | Resolution | Severity |
|---|---|---|---|---|
| D1 | **Portugal €750**: Excel + `lit_return_incentives` (A6, B table, §D) + `lit_retiree_mentoring` (b)(4) attach the €750/month to *returning* retirees. `cases_retiree_return` proves from Decree-Law 51/2024 that Art. 5 returnees get pension + 1st-step-indexed pay pro-rated by hours; the €750 (Art. 6) is for teachers *postponing* retirement (63 returned vs ~2,200 stayed on in 2025/26; narrowed to shortage zones July 2026) | 3 files vs 1 | Adopt `cases_retiree_return`; rewrite every "€750 top-up for returners" passage and the cross-country contrast tables; the 63-vs-2,200 asymmetry is a better Chapter 5 lesson than the current framing | **BLOCKING** |
| D2 | **Austria take-up**: "dozens nationwide" (Excel, `lit_return_incentives` A6/B, `lit_retiree_mentoring` table, [UNVERIFIED]) vs audited **1,062 returners 2018/19–2023/24** (Rechnungshof 2025, in `cases_retiree_return`) | 3 files vs 1 | Use the audited cumulative figure plus the March-2023 snapshot; add Rechnungshof (2025) to the master bibliography | **BLOCKING** |
| D3 | **Austrian EJTE paper author**: "Wieser et al." (`lit_return_incentives` A6) / "[authors unconfirmed]" (`lit_retiree_mentoring`) vs confirmed **Resch, K. (2025)** (`lit_reserve`, `cases_retiree_return` via Crossref) | 2 vs 2 | It is Resch (2025); purge "Wieser" before it reaches the draft | **BLOCKING** (trivial fix) |
| D4 | **HILDA author + findings**: "De Nobile" (`lit_return_incentives`) vs Cuervo and Vera-Toscano (`lit_why_leave`, with DOI); effect sizes asserted vs flagged unverifiable | 1 vs 1 | See A2 | **BLOCKING** |
| D5 | **Brandenburg exit window**: 2016–2022 (verified, `lit_why_leave` Claim 2.2) vs "2016–2024" repeated in `lit_reserve` Claim 5 and the Excel | 1 vs 2 | 2016–2022 per the published paper | **BLOCKING** (trivial fix) |
| D6 | **Number Rockets geography**: "four urban districts, *not* four states" (`lit_retiree_mentoring` correction) vs "four districts in four of the five REL Southwest states" (`cases_mentoring`) — these imply opposite verdicts on the Excel's "4 states" label | 1 vs 1 | Check Gersten et al. (2015) / NCEE 2012-4007 text; do not print a "correction" that is itself wrong | **BLOCKING** (one lookup) |
| D7 | **Experience Corps student RCT**: 883 students (434T/454C) (`lit_retiree_mentoring`) vs 881 (430T/451C) (`cases_mentoring`); WWC quick review dated 2019 in one file, 2010/2017 in others; whether teacher-evaluation ratings was a WWC-reviewed domain for Aurora | 1 vs 1 | Reconcile against Morrow-Howell et al. (2009) PDF and the WWC pages (Aurora review is Study #88756; the 2010 quick review is the Experience Corps one) | **BLOCKING** (trivial fix) |
| D8 | **Ontario cap history**: `lit_return_incentives` A4 repeats the Excel ("raised to 95 days in 1990", implying from 50) vs `cases_other_legislation`: 1990 raised **20→95** (first three years only); the flat 50-day cap dates from **2012** and was a *reduction* to protect new graduates | 1 vs 1 | Adopt `cases_other_legislation` (sourced to OTPP/OSSTF/Globe and Mail) | Nice-to-have (correction documented) |
| D9 | **Georgia shortage denominator**: "~5,300 teachers" (`lit_return_incentives` A4) vs "~6,000 vacant or not-fully-certified positions" (audit, `cases_us_legislation`); also "~350" is per-year, 635 cumulative | 1 vs 1 | Use the audit's numbers | Nice-to-have |
| D10 | **NL reserve/shortage ratio**: "about four times" + "4× the *secondary* shortage" mislabel (`lit_return_incentives` A1, `lit_why_leave` 4.4) vs "roughly 4.5×" the *combined* 13,600 FTE (`lit_reserve`) | 2 vs 1 | 62,000 vs 13,600 combined = ~4.5×; fix the "secondary" mislabel | Nice-to-have |
| D11 | **England stock/flows**: 250,000 former teachers + 14,500 returners/yr (`lit_return_incentives` A1, from the NFER blog) vs 260,000 + 106,000 never-served (2018, `lit_reserve`) vs 243,900 under-60 (2016) + 16,010–17,230 returners (`cases_england_nz`) vs "c. 17,000/yr" (DfE 2023) | 3 files | Pick one stock (DfE 2018: 260k+106k) and one flow (DfE ~17k/yr) with vintages stated; the blog's 14,500 is superseded | Nice-to-have |
| D12 | **NSW vacancies at launch**: Excel "amid a shortage of over 3,000 vacancies" vs verified 1,800–2,250 at launch, >3,000 being the earlier peak (`cases_nsw_bahamas` §1.5) | Excel vs 1 | Use the case file's rewording | Nice-to-have (documented) |
| D13 | **US "2026 Report" status**: identified and verified as Tan et al. (2026), LPI (`lit_why_leave`) vs still "[UNVERIFIED]" in `lit_shortages` §E and `lit_return_incentives` §E | 1 vs 2 | Resolved — propagate the Tan et al. identification | Nice-to-have |
| D14 | **Intent-to-leave rates across TALIS waves**: ~25% (TALIS 2018, `lit_why_leave` 2.3) vs 17% non-retiring (TALIS 2024, `lit_shortages` item 14) — different waves AND different definitions | — | Not a contradiction, but the draft must never mix them in one sentence; state wave + definition each time | Nice-to-have |

---

## E. Missing obvious sources an OECD referee would expect

| Source | Why expected | Status | Severity |
|---|---|---|---|
| OECD (2005), *Teachers Matter* | The canonical OECD teacher-policy synthesis; has a re-entry/returner strand | Absent from all files (existence confirmed, doi 10.1787/9789264018044-en) | **BLOCKING** (cheap fix, part of C6) |
| OECD (2024), *Education Policy Outlook 2024* | Current OECD flagship on the teaching profession; style guide's own exemplar cites it | Cited once, in `lit_reserve` only | **BLOCKING** (part of C6) |
| OECD primary tables for PISA 2022 / EAG 2025 / TALIS 2024 headline stats | Author-year cites of OECD numbers must point at OECD, not TES/EI | See A1 | **BLOCKING** |
| Dutch OCW herintreders subsidy + regional shortage scheme | The benchmark reserve country's own activation policy | Absent; existence confirmed | **BLOCKING** (part of C4) |
| ECS/NASRA cross-state synthesis of return-to-work rules | 4.2 currently generalises from six states | Absent; ECS resource confirmed (ecs.org/tag/retired-teachers/) | Nice-to-have (strong) |
| Japan (MEXT) re-employment of retired teachers | Only non-China Asian system; documented practice at scale | Absent; documented in MEXT 2021 shortage survey coverage (nippon.com) | Nice-to-have |
| England TPS abatement/re-employment rules | England is in 4.1 but missing from 4.2 | Absent (unverified — search teacherspensions.co.uk) | Nice-to-have |
| Eurydice (2021/2023) teacher-career mobility data on re-entry routes in EU systems | EU-wide regulatory context for 4.2 beyond FR/IE | Eurydice cited only for Ch1 ageing/shortage stats | Nice-to-have |
| Federičová (2021), *EJE* | The one identified Europe-wide turnover paper — never extracted | In `lit_why_leave` bibliography with an explicit "verify before quoting" note | Nice-to-have |
| An OECD/CERI "Unlocking…" project citation (per `style_oecd` §0) | The paper is styled as part of this project family | Only the style file mentions it | Nice-to-have |

---

## F. Housekeeping (bibliography and style compliance)
- Many web-source entries across the case files lack "(accessed on DD Month YYYY)" required by the OECD reference format (`style_oecd` §3). One pass needed.
- The OECD `[n]` bracket-number system has not been assigned to any bibliography yet; the master reference list must be merged from 11 files (expect duplicates with divergent renderings, e.g. Somers et al. appears in three variants — memorandum, ESB article, and "Fleck et al." — which are three *distinct* outputs of one team; keep them distinct and cite precisely).
- Personal communications (Rice/WestEd; Feygin/AIR) may only appear as "personal communication" source lines with a year — year still missing (team to supply).
- Excel typos and truncations already catalogued (NSW "Goverment", empty programme names, truncated Austria/China/"International: USA," cells, "ChatGTP") — fix at source so later exports do not resurrect them.

## Bottom line
Eleven blocking items: A1 (OECD primary re-verification), A2/D4 (HILDA), A3 (Fleck row identity), A4 (Austria pay + unsourced stats), B1 (phantom Michigan 2020 source), C4 (Dutch programme hole), C6 + E rows 1–2 (Chapter 5 base and OECD anchors), D1 (Portugal €750), D2 (Austria 1,062), D3 (Resch naming), D5/D6/D7 (three trivial numeric/naming reconciliations). All are closable in days; none require new fieldwork.
