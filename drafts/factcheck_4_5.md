# Fact-check report: Chapters 4-5 and references.md

Prepared 6 August 2026 (fact police pass). Scope: `paper_integrated.md` Chapters 4 and 5 (lines 193-417), the paper's REFERENCES USED block as it concerns Chapter 4-5 sources, and `references.md` (master list, 121 entries — count independently confirmed). Verification base: all files in `scratchpad/research/`, with the five fix files (`fix_oecd_primary.md`, `fix_hilda_fleck.md`, `fix_austria_portugal.md`, `fix_netherlands_more_cases.md`, `ch5_synthesis.md`) and `TEAM_INPUT.md` treated as superseding the older `lit_*.md` and `cases_*.md` files where they conflict.

**Bottom line: 5 must-fix items, 6 should-fix items. No superseded number has resurfaced anywhere in Chapters 4-5 or in references.md.**

---

## 1. Superseded-claims sweep (all clean)

Independent grep and read-through of Chapters 4-5 and references.md confirms the absence of every banned rendering:

| Banned item | Status in draft |
|---|---|
| Portugal "EUR 750 for returners" framing | ABSENT. Art. 5 (returners: pension + first-step-indexed pay pro-rated by hours) and Art. 6 (EUR 750/month for postponing retirement) are correctly separated at every occurrence (§4.1 Portugal paragraph, Rec 3, Rec 6, key take-aways) |
| Austria "dozens" | ABSENT. Audited 1 062 returners 2018/19-2023/24 (Rechnungshof, 2025) used throughout, with 227 Upper Austria / 49 Tyrol, the 2021/22-2022/23 peak and the ~123 000 workforce denominator all matching `fix_austria_portugal.md` D2 |
| "De Nobile" | ABSENT (Cuervo and Vera-Toscano used correctly) |
| "Wieser" | ABSENT (Resch, 2025 / 2025b used correctly, sole author) |
| Michigan "2020 Preliminary Findings" | ABSENT (only Lindsay, Gnedko-Berry and Wan, 2021, REL 2021-076) |
| Number Rockets "four districts not four states" mislabel | ABSENT. Draft says "four urban districts each located in a different state of the REL Southwest region" — exactly the formula mandated by `ch5_synthesis.md` D6 |
| WestEd pension-savings funding entry | ABSENT from chapters and references, per team decision |

references.md compiler note 4 makes the same claims; this pass verifies them independently.

## 2. Must-fix items (5)

**M1. §5.1, Recommendation 2 — Michigan survey item mischaracterised.** The draft reads "A third of Michigan's inactive certificate-holders placed salary among their top three *conditions for returning*". The verified finding (Lindsay, Gnedko-Berry and Wan, 2021; correctly rendered in Box 2.1 and §3.1) is that 33% placed higher salary among their three most important *reasons for not teaching*; the return-incentive finding is the separate "salary increase was the most frequently selected incentive to return". Reword Rec 2 to match one of the two verified items.

**M2. §5.3 — overreach on the North Carolina vs Georgia comparison.** "Rule design moves take-up by an order of magnitude at similar fiscal cost, as the distance between North Carolina's 3 500 returners and Georgia's 635 demonstrates." Two problems: (a) 3 500 against 635 is roughly five-and-a-half-fold, not an order of magnitude, and the two figures cover different periods (a decade vs three fiscal years) and workforces; (b) "at similar fiscal cost" is supported by no research file — no comparable cost figures exist for the two policies (the NC paper argues marginal cost is modest; Georgia's audit reports USD 11.1 million in TRS contributions). Reword to "several-fold" and drop or explicitly hedge the cost clause.

**M3. §4.1 Netherlands take-up misstated as a final count.** The body text (herintreders paragraph) says the subsidy "reached nearly 200 returners in three years", and the chapter opener says the Netherlands "reached about 200". Per `fix_netherlands_more_cases.md`, the verified figure is *nearly 200 cumulative by late 2019* (roughly two years in); final grant counts for 2019 and 2020 were never published. "In three years" asserts a scheme-total that does not exist. Box 4.2 and Table 4.1 state it correctly; align the two prose occurrences ("nearly 200 by late 2019; final counts never published").

**M4. New Zealand Ministry of Education citation key split.** Chapter 4 (§4.2, licensure paragraph) cites "(New Zealand Ministry of Education, 2026)"; Chapter 5 Recommendation 8 cites "(Ministry of Education, 2026)". The integrated paper's REFERENCES USED block consequently carries the same source twice under two different keys (lines 511 and 562/597). references.md has standardised on "New Zealand Ministry of Education (2026)" and flags the issue; the in-text keys in Rec 8 (and the Chapter 4A REFERENCES USED entry) must be harmonised to the country-qualified form before compilation, and the duplicate entry deleted.

**M5. Same-author-same-year citations are unresolvable as compiled.** references.md contains two OECD (2023) entries (PISA 2022 Volumes I and II), two OECD (2025) entries (Education at a Glance 2025; Results from TALIS 2024), two Department for Education (2025) entries (already [CHECK]-flagged), and two Somers et al. (2024) works (ESB article, three authors; ROA memorandum, four authors) that Chapters 2-3 sometimes cite as bare "Somers et al. (2024)". Within Chapters 4-5 every "(OECD, 2025)" happens to be Education at a Glance 2025, but the reader and the compiler cannot know that. Add a/b suffixes (or OECD-style [n] pinpoints) across the paper and the master list. This is a compile blocker for the reference tool, not a content error.

## 3. Should-fix items (6)

**S1. Table 4.1 lead-in contradicts its own contents.** §4.1 says the table "assembles the four programmes that have published a *complete* recruitment funnel", but the Netherlands row states "Final application counts unpublished" and the Note concedes funnel stages differ. Say "the fullest recruitment funnels published anywhere" or similar.

**S2. Rec 7 — "Vienna wrote to 300 recently retired teachers".** APA/ORF (2023) says Vienna wrote to 300 *already-retired* teachers ("bereits pensionierte"); "recently" is unsupported (it belongs to Hesse's outreach). Drop "recently". Box 4.3 has it right.

**S3. Rec 7 (and key take-away 8) — NSW "placed 145 returners across more than 600 schools".** The official phrasing is that the 145 perform casual and temporary work collectively covering 600+ schools (individual returners work across multiple schools); `cases_nsw_bahamas.md` explicitly asks for coverage phrasing, which the §4.1 body text and Table 4.1 already use. Align Rec 7.

**S4. Germany retiree-teaching count dated inconsistently across chapters.** §4.1 says "just over 5 000 pensioners were teaching nationwide in 2023" (defensible: the Schulportal Länder survey of August 2023), but Chapter 2 and Table 2.1 present the same figure next to "457 000 retired teachers (2021)" without a year. Align both on the survey date (mid-2023, 2022/23 counts) so "As Chapter 2 noted" is actually what Chapter 2 noted.

**S5. §4.1 RTTA paragraph — attribution of the 17 000-returners context figure.** "Around 17 000 teachers return to state schools each year, about one-third of all new entrants" is sourced in the research base to DfE (2023); the draft co-cites UK Parliament (2022), which does not carry that figure. Harmless but imprecise; cite DfE (2023) alone.

**S6. Style flag for the style checker, not a fact error:** the Chapter 4 opening paragraph uses a spaced en-dash parenthetical pair ("– in timing, placement capacity and the shape of the posts offered –"), the construction house rule 1 asks to avoid doubling within a sentence; prefer commas or parentheses.

## 4. Verified correct (spot-check log, Chapters 4-5)

- **England pilot**: 5 729 registrations (target ~3 000), 354 supported, 27 permanent EBacc posts by November 2016, 62 in any state post, grants GBP 586 900, GBP 17 800 per supported returner, GBP 37 400 per additional returner assuming 50% deadweight, returner first-year-back leaving odds ~60% higher, career breakers 11% of participants returning at double the rate, REP successor confined to maths/physics/MFL and tied to vacancies — all match Buchanan et al. (2018) / Worth and Sharp (2018) / NCTL (2017) as recorded in `cases_england_nz.md`.
- **RTTA**: GBP 361 000 (2019/20) and GBP 326 000 (2020/21), ≈128 recorded returns, ≈GBP 5 400 per recorded return (flagged as own calculation with unknown additionality), 23 physics returners, >600 advisers received, all-secondary expansion autumn 2022, primary by 2023, July 2026 written statement — verified.
- **NSW**: >1 500 contacted, >260 interested, 145 in casual/temporary roles across >600 schools, ~60% from retirement, no return bonus, absence from the 2024-25 annual report — verified.
- **New Zealand**: 20-half-day statutory relief allowance, TER waiver mainstreamed by 2026, fees paid to mid-2028, NZD 40 000 bonding over five years open to experienced/returning teachers from October 2025 (previously new teachers only), no uptake data — verified.
- **Netherlands**: EUR 2 500 board-side subsidy, ≥6-month appointment, ≥12 months out, budget EUR 1.25 million for 500, ceilings lowered to 120/100 because unexhausted, lapse 1 January 2022 without evaluation, RAP ~EUR 30 million / 71 partnerships, returner support least-realised, applications exceeding places — verified against `fix_netherlands_more_cases.md`.
- **Austria**: Box 4.3 outreach detail (Vienna 300 letters, Salzburg to age 67 with job tickets, Vorarlberg "Arbeitsplatz Schule", Styria), audited 1 062 with regional splits and falling trend, civil-servant vs contract-scheme pay rule per BMBWF (2023) answer to Question 19, Resch findings kept within abstract-verified bounds — verified.
- **China**: 2018 plan (10 000 target, 2018-2020), 2023 plan by ten bodies, ~120 000 corps across five strands including part-time and volunteer service, >20 000 schoolteachers plus ~1 000 professors by mid-2023, October 2025 round of 7 000, age 65/70 limits, CNY 20 000 rural working funds with western-province central funding, housing/travel/insurance, county targeting, R.I.S.E. caveat correctly hedged as press commentary — verified.
- **Portugal**: target 200, 79-80 applicants, 63 accepted, 55 placed January 2025, average age ~68, ~2 200 on the Art. 6 supplement in 2025/26, July 2026 narrowing to eight pedagogical zones / 235 school units, minister's "in many cases not justified", union quotes correctly attributed to SÁBADO (2024) — verified.
- **Japan**: 2 558 unfilled / 5.8% of schools at the start of AY2021; 3 827 in 2025 vs 2 065 on the comparable definition (the two 2021 figures are correctly kept apart); ~60% of adjuncts in their 60s-70s; 35% (elementary) / 55% (junior high) of age-based retirees seeking full-time re-employment — verified.
- **Germany**: 13 of 16 Länder, ~10% supplements, Hesse's ~7 000 letters, >5 000 retirees teaching (<1% of ~800 000), Hesse's ~550 posts correctly attributed to the combined short-term package — verified.
- **US pension rules**: North Carolina (~169 000 teachers / 2 900 schools, ~3 500 returners, 52% of schools, +3.7 pp disadvantaged, maths skew, 54% to former school, >35% of retirement-eligible by 2009); Georgia (30 years / 1-year wait / three highest-need RESA subjects / both contributions, 635 cumulative FY2023-FY2025, ~350 per year, ~125 000 workforce, ~6 000 vacancies, "minimal" effect, 45% blocked-hire finding, 2026 extension to 2030 with system-defined need areas); New Mexico (90-day layout, no salary/hours caps, board approval, 154 first-year users, 2 792 across tiers, ~48 000 eligible, 2025 move to 60 months / USD 25 000); Louisiana (2024 all-retiree critical-shortage route after 12 months, 2026 consolidation, 65+ unrestricted route, 25%-of-benefit → 50%-of-FAC, actuarial report before 2034); Michigan (PA 184: bona fide termination + 9 months, no earnings limit; PA 147: 6 months, USD 15 100 during the wait, sunset October 2028); Virginia (ED-3 of September 2022, statutory mechanism since 2001, 2023 halving of the break to six months, sunset 2028) — all verified against `cases_us_legislation.md`. Table 4.2 rows match.
- **Ontario**: Schedule 1 cap history 20 → 95 (1990, first three years) → 50 (2012) → 95 (2020/21-2022/23) → 50; CAD 108.3 million, CAD 432.69 vs 227.36, 12 774 vs ~6 500; ~60 of 142 000 interested, average retiree age 72; OTF March 2024 refusal and quote — verified against `cases_other_legislation.md` and `fix_austria_portugal.md` D8.
- **France**: six-month wait from pension effective date for return to last employer, 2003 origin; Bellamy question lapsed unanswered June 2024; Odoul 2026 exchange on pre-2015 early-pension income caps; no aggregate uptake figures — verified.
- **Ireland**: five years at a time / ten over a career, right of return, substitution bar suspended annually since at least 2021/22, most recently TC/IN 0005/2025 — verified.
- **Tutoring/mentoring**: Aurora RCT (77 teachers, 11 schools, USD 41/hour, weekly meetings over two years, WWC "meets standards without reservations", indeterminate in all three reviewed domains, headline maths effect fails the report's own adjustment, ~USD 171 per pupil per year; WWC review correctly dated **2019** per `ch5_synthesis.md` D7, which supersedes the 2017 date in `cases_mentoring.md`); Number Rockets (86 retired and substitute tutors, 994 pupils, 76 schools, ES 0.34, graduate-student original per Fuchs et al., 2005); Experience Corps (883 enrolled / analytic 881: 430-451 per D7, ES 0.13/0.16, WWC quick review February 2010, volunteer health RCTs, 1 284 volunteers / 3 659 pupils / 18 communities in 2023/24, correctly framed as volunteers aged 50+ of whom only some are former teachers); "10 mirrors" held to a single sentence per its keep-as-brief-mention verdict — all verified.
- **Bahamas**: July 2026 announcement, standing reserve on the supply-teacher platform, multi-agency task force, ~300-teacher shortfall across 162 schools, explicitly dated and outcome-free — verified; brief-mention verdict respected.
- **Chapter 5 anchors**: Teachers Matter and EPO 2024 usage, the EAG 2025 "pathways" quote, the 6.5% / 51% / country splits, the EPO 2024 data-gap quote in §5.2, Table 5.1's nine unaccounted measures, and the four mandated-reporting counter-examples in Rec 9 all match `ch5_synthesis.md` and `fix_oecd_primary.md`. The C6.2 "no causal re-entry pricing" caveat is carried intact in §5.2.

## 5. references.md audit

- **Count**: 121 entries, confirmed.
- **Coverage**: every source cited in Chapters 4-5 resolves to exactly one references.md entry (after M4/M5 are executed). No orphan entries attributable to Chapters 4-5 were found; EducationHQ, Público, CNN Portugal, People's Daily and other research-file-only sources are correctly excluded because no chapter cites them.
- **Renderings**: Buchanan et al. (2018), Jarrold-Grapes and Mahler (2024, Vol. 32, No. 4), Lindsay et al. (2021, ERIC PDF + Study Snapshot), Georgia audit (full subtitle, Report No. 24-20), BMBWF (2023), Rechnungshof (2025), Resch (2025)/(2025b), Decreto-Lei n.º 51/2024, WWC (2010, February) and WWC (2019, Study #88756, August 2019, Standards 4.0), Sims, Lowes-Belk and Routledge (2026, Vol. 52/3, pp. 1652-1676), Tan et al. (2026, DOI 10.54300/248.479) — all match the canonical renderings in the fix files.
- **Stale [CHECK] flag**: the Renascença note ("Chapter 3 cites 2024b") no longer reflects the integrated draft, which cites unsuffixed "Renascença, 2024" at every occurrence (lines 175, 213, 281). Keep the single un-suffixed entry and close the flag.
- **Valid [CHECK] flags to act on**: DfE (2025) x2 disambiguation (part of M5); Deutsches Schulportal title variant lives only in Chapter 2's REFERENCES USED block (references.md carries the fix-file-verified title — harmonise Chapter 2, not the master list); NZ Ministry key (M4); Somers ROA memorandum number ("2024/004E" adopted, consistent with the DOI suffix — acceptable pending cover-page check).
- **Teaching Council of Aotearoa New Zealand (2026)** has no URL in the master list, consistent with the research file (policy PDF with no stable URL recorded); Chapter 4B's REFERENCES USED appends an accessed date without a URL — cosmetic, the master entry governs.

## 6. Count

**Must-fix: 5** (M1-M5). Should-fix: 6 (S1-S6). Superseded-number sweep: clean.

## REFERENCES USED

None — internal fact-check memo; all sources discussed are already carried in the chapter REFERENCES USED sections and in references.md. No new sources are introduced by this file.
