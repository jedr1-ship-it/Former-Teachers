# Fixes for GAPS.md items A4, D1, D2, D3, D8 — Austria, Portugal, Ontario

Prepared 5 August 2026. Closes the assigned blocking items with primary-source verification. Each section: what was found (with pinpoint), the corrected replacement text, and the passages it supersedes.

---

## A4 — Austria: pay of returning retirees, the "45% of >550 school leaders" figure, and the Resch interview sample

### A4.1 "Returnees paid at beginner salary scale" — NOW SOURCED (primary, official), with an important nuance

Resch (2025) full text remains inaccessible: the article is paywalled at Taylor & Francis; Unpaywall reports `is_oa: false` with zero OA locations (checked 5 August 2026); no ResearchGate or repository copy found; the author's PH Oberösterreich profile (https://pro.ph-ooe.at/katharina-resch) links no full text. **But the pay claim no longer needs Resch.** It is confirmed — and refined — by the Austrian education ministry itself, in its answer to a written parliamentary question:

- **Source:** BMBWF (2023), Anfragebeantwortung 15155/AB, XXVII. GP, 6 September 2023 (Geschäftszahl 2023-0.505.716), answer of Federal Minister Martin Polaschek to parliamentary question 15692/J of Mag. Martina Künsberg Sarre (NEOS) and colleagues, 6 July 2023, "Quereinstieg und Sonderverträge für Lehrer:innen". Answer to Question 19, **p. 18 of the PDF**: https://www.parlament.gv.at/dokument/XXVII/AB/15155/imfname_1582019.pdf (accessed on 5 August 2026).
- **Exact wording (civil-servant teachers):** "Bei beamteten Lehrpersonen ist diese Aussage korrekt. Das Gesetz ordnet für den gesamten Bundesdienst und den Bereich der Landeslehrpersonen an, dass Zeiten von der Vordienstzeitenanrechnung ausgeschlossen sind, auf Grund derer ein Ruhegenuss bezogen wird. ... Im Ergebnis bedeutet dies, dass diese Personen ihre Pension beziehen und für die Unterrichtstätigkeit das Lehrpersonen-Einstiegsgehalt."
- **Exact wording (former contract teachers):** "Bei ehemaligen Vertragsbediensteten, die nach ihrer Pensionierung wieder im Schuldienst angestellt werden, sind zum Bund oder zum Land absolvierten Dienstzeiten als Lehrperson bei der Festlegung der Entlohnungsstufe zu berücksichtigen. Das bewirkt im Wesentlichen, dass das vor der Pensionierung bezogene Entgelt auch bei der Wiederanstellung zusteht." (with a pointer to possible Ruhensbestimmungen on the old-age pension).

**Nuance the draft must carry:** the "paid at the beginner salary" rule applies to **formerly civil-servant (beamtete/pragmatisierte) teachers** — service periods for which a pension (Ruhegenuss) is drawn are excluded from prior-service crediting, so they receive full pension plus the teacher **starting salary** (Einstiegsgehalt). **Former contract teachers (Vertragsbedienstete) have their prior teaching service credited and essentially return at their pre-retirement pay.** The blanket claim "returnees are paid at beginner scale" is therefore over-broad.

**Replacement sentence (for `lit_return_incentives` A6 and the `lit_retiree_mentoring` contrast table):**

> Returning retirees keep their full pension but, if they retired as civil servants (the large majority of the retiring cohort), are excluded by law from prior-service crediting for any period already generating a pension, so they are re-employed at the teacher starting salary; former contract-scheme teachers, by contrast, have their teaching service credited and broadly recover their pre-retirement pay (BMBWF, 2023, answer to Question 19, p. 18).

### A4.2 "45% of >550 surveyed Austrian school leaders" — ORIGIN FOUND: it is a sentence in Resch (2025) itself

The figure is not uncited invention: the indexed text of the Resch (2025) EJTE article page contains, near-verbatim, "A recent survey with over 550 school leaders from Austria revealed that 45% experience an acute teacher shortage in their school, which they consider a serious problem" (confirmed twice via search snippets of https://www.tandfonline.com/doi/full/10.1080/02619768.2025.2531930, 5 August 2026). So the Excel/lit file lifted the figure from Resch's introduction.

**However, the underlying survey could not be identified.** Candidates checked and excluded on sample size: Schulleitungs-Barometer Austria 2024 (JKU Linz, Huber, Pruitt and Helm, 2024 — n = 2,151 of ~5,400 school leaders; it does report that ~45% of school leaders say teachers are lacking at their school, with 80% of those affected calling the shortage "eklatant") and Schulleitungsmonitor Österreich 2022/23 (n = 2,621). The ">550" may be an early data cut Resch cites; without the full text the reference chain cannot be closed.

**Replacement sentence (hedged, honest, citable):**

> Resch (2025) reports, citing a recent survey of more than 550 Austrian school leaders, that 45% experienced an acute teacher shortage at their school; the independent JKU Schulleitungs-Barometer Austria 2024 (n = 2 151, roughly 40% of all Austrian school leaders) similarly found that around 45% of school leaders lacked teachers at their school, with 80% of those affected describing the shortage as glaring (Huber, Pruitt and Helm, 2024).

If the team prefers a single citation, drop the first clause and keep only the Schulleitungs-Barometer sentence — it is open access, larger, and verifiable to the page.

### A4.3 Interview sample and region

- Verified from the indexed abstract of Resch (2025): the broader study comprises **qualitative interviews with retired teachers and experts from Austria (n = 14)**, of which **nine interviews with retired teachers form the empirical base** of the EJTE article.
- A companion German-language article specifies the nine: **six returning and three non-returning retired teachers**, interviewed with episodic-interview methodology — Resch, K. (2025), "Die Rückkehr von pensionierten Lehrpersonen in den Schuldienst als berufsbiographisches Ereignis", *Zeitschrift für Bildungsforschung*, published online 12 November 2025, https://doi.org/10.1007/s35834-025-00519-z (paywalled; sample details visible in the free preview/abstract).
- **The "Upper Austria" sample claim is unsourced and must go.** Neither abstract states the participants' Bundesland. What is true: the author holds a professorship at the Pädagogische Hochschule Oberösterreich (Linz) — Crossref affiliation "University for Teacher Education Upper Austria, Linz, Austria" — and her project "Zur Rückholung pensionierter Lehrpersonen in den aktiven Schuldienst" ran 2024–2025 (PH OÖ profile). Affiliation is not sample geography.

**Replacement sentence:**

> A qualitative study (nine episodic interviews with retired Austrian teachers — six returners and three non-returners — within a broader 14-interview study including experts, conducted 2024-25) finds that post-retirement return decisions are biographically rooted processes shaped by individual, family, school-related and system-level factors rather than primarily by pay (Resch, 2025; Resch, 2025b).

### A4.4 What was tried and failed (for the record)

Full text of Resch (2025, EJTE): T&F page returns 403 to fetch; Unpaywall negative; ResearchGate blocked (403) and no PDF indexed; PH OÖ profile has no deposit; Crossref carries no abstract. The claims that the paper itself "points to pension/service-crediting rules as the fixable barrier" should stay attributed to the APA/ORF (2023) reporting and BMBWF (2023), not to Resch, until someone with library access reads the article. Where the draft currently paraphrases Resch's findings beyond the abstract, mark [abstract-verified only].

---

## D1 — Portugal: authoritative reconciled paragraph (Decree-Law 51/2024) and the passages it replaces

### D1.1 The reconciled paragraph (adopt verbatim or near-verbatim)

> Portugal's Decree-Law 51/2024 of 28 August 2024 created two distinct instruments that press coverage — and earlier drafts of this paper — conflated. Article 5 allows teachers retired for five years or less to return on fixed-term contracts in shortage subjects or understaffed schools while keeping their full pension, paid an additional compensation indexed to the first step of the teaching career salary scale and pro-rated by teaching hours; Article 6 pays a monthly supplement of EUR 750 to teachers who have reached retirement conditions but postpone retirement and stay in the classroom until the end of the school year. Take-up diverged sharply: against a government target of 200 returnees, 79-80 retirees applied and 63 were accepted in 2024/25 (55 placed in the first January 2025 wave, average age about 68), whereas roughly 2,200 teachers used the EUR 750 supplement to extend their careers in 2025/26. In July 2026 the government narrowed the supplement for 2026/27 to shortage areas only (eight pedagogical zones covering 235 school units in Greater Lisbon, the Setúbal Peninsula and the Algarve). The asymmetry — 63 returned versus some 2,200 who stayed on — suggests that, at equal money, preventing an exit is far easier than reversing one (Decreto-Lei n.º 51/2024, Arts. 5-6; Diário de Notícias, 2024; Renascença, 2024b; RTP, 2026).

(Full sourcing and the funnel detail are in `cases_retiree_return.md` §3, which this paragraph follows; all its sources were opened on 4 August 2026.)

### D1.2 Passages superseded (every one must be rewritten)

In **`lit_return_incentives.md`**:
1. **§A6, Portugal bullet** — "a €750/month pension top-up under Decree-Law 51/2024 attracted ... only ~80 applicants for ~200 openings, ~63 returning". WRONG: the €750 is the Art. 6 stay-on supplement, not the returner offer; returners get pension + 1st-step-indexed pay pro-rated by hours. Replace with the D1.1 paragraph (short form). The union-reaction sentence can stay, re-sourced to SÁBADO (2024) and CNN Portugal/Lusa (2024).
2. **§B contrast table, row "Does paying retirees to return work?"** — "Portugal: €750/month top-up, minimal uptake — conditions, not pay (2024–25)." Replace with: "Portugal: returners get pension + first-step-indexed pay — 63 returned; the EUR 750/month went to *postponing* retirement — ~2,200 stayed on (2025/26)."
3. **§C.3** — "Portugal's low uptake is the rare revealed-preference test — and it contradicts pay-first designs." Keep the point but re-specify: the revealed-preference test is the 63-vs-2,200 asymmetry between re-entry and retention margins, not a rejection of a €750 top-up by returners (returners were never offered the €750).
4. **§D principle 3** — "(NFER; Portugal unions; Austria; Experience Corps)" — keep, but any accompanying text describing Portugal's returner offer as a €750 top-up must be corrected.
5. **§E, Portugal row** — "80 applicants/63 returners not independently verifiable" is now stale: verified via DN (2024), SÁBADO (2024) and Renascença (2024b) in `cases_retiree_return.md`. Update the annotation.
6. **§F bibliography** — keep the Diário da República entry; add DN (2024), Renascença (2024a/b), SÁBADO (2024), RTP (2026), CNN Portugal (2026) from `cases_retiree_return.md`.

In **`lit_retiree_mentoring.md`**:
7. **§(b) contrast list, point 4** — "Portugal's 2024 pension top-up (up to €750/month) attracted only ~80 applicants for ~200 openings ... [UNVERIFIED]". Replace with: "Portugal's 2024 scheme drew only 79-80 applicants and 63 accepted returnees against a 200-place target — while about 2,200 teachers took the separate EUR 750/month supplement to postpone retirement (Decreto-Lei 51/2024, Arts. 5-6; `cases_retiree_return.md`)." The design hypothesis sentence that follows (tutoring/mentoring carves away deterrent conditions) survives unchanged.
8. Any Excel-derived wording "retired teachers return ... receiving a monthly supplement of up to 750 euros" — fix at source in the Excel too.

---

## D2 — Austria take-up: audited 1,062 returners replaces "dozens"

**Authoritative figure:** between school years 2018/19 and 2023/24, **1,062 retired teachers resumed teaching across Austria** (Upper Austria 227, Tyrol 49), with intakes peaking in 2021/22 and 2022/23 and falling thereafter — Rechnungshof (2025), *Lehrpersonaleinsatz*, Reihe Bund 2025/18, pp. 24-25 (TZ 2.1(5)-2.2), https://www.rechnungshof.gv.at/rh/home/home/2025_18_Lehrpersonaleinsatz.pdf. The March-2023 APA/ORF snapshot (Vorarlberg 42, Upper Austria 36, Tyrol 10; 42 at compulsory schools nationally plus ~30 at federal schools in 2022/23) remains citable as a same-year snapshot whose definitions differ.

**Replacement sentence (standard form for all files):**

> Take-up was modest but not trivial: the Austrian Court of Audit counted 1,062 retired teachers who resumed teaching nationwide across the six school years 2018/19 to 2023/24, concentrated in 2021/22 and 2022/23 and declining thereafter (Rechnungshof, 2025, pp. 24-25) — against a teaching workforce of roughly 123,000.

**Passages superseded:**
1. `lit_return_incentives.md` §A6, Austria bullet — "take-up is on the order of dozens nationwide". Replace as above.
2. `lit_return_incentives.md` §B table, row "Does paying retirees to return work?" — "Austria: beginner-scale pay + pension friction → dozens returning". Replace with "→ 1,062 returners over six years (audited), trend falling".
3. `lit_retiree_mentoring.md` §(b) contrast table, "Scale (latest verified)" cell for Austria — "'Dozens nationwide' (Excel/ORF; [UNVERIFIED])". Replace with "1,062 returners cumulatively, 2018/19-2023/24 (Rechnungshof, 2025); Vienna wrote to ~300 retirees".
4. The Excel's Austria row "on the order of dozens nationwide" — correct at source.
5. **Add Rechnungshof (2025) to the master bibliography** (entry below); it appears today only in `cases_retiree_return.md`.

---

## D3 — Author naming: it is Resch, K. (2025), sole author

Confirmed via Crossref (5 August 2026): sole author **Katharina Resch**, affiliation "University for Teacher Education Upper Austria, Linz, Austria" (Pädagogische Hochschule Oberösterreich); published online 10 July 2025, *European Journal of Teacher Education*.

**Purge list:**
1. `lit_return_incentives.md` §A6 — "(Wieser et al. [author names not confirmed — article page blocked; title verified], 2025, ...)" → "(Resch, 2025)". There is no "Wieser".
2. `lit_return_incentives.md` §F bibliography — "[Authors unconfirmed] (2025), 'Retired teachers return to school...'" → full Resch entry (below).
3. `lit_retiree_mentoring.md` bibliography — "[Authors not retrieved — paywalled] (2025), ..." → full Resch entry.
4. `lit_retiree_mentoring.md` §(b) table "Qualitative interviews (EJTE 2025)" — may stay, but first mention should read "Resch (2025)".
5. `lit_reserve.md` and `cases_retiree_return.md` already carry the correct entry — no change.

**Canonical bibliography entry (use everywhere):**
Resch, K. (2025), "Retired teachers return to school to tackle teacher shortages in Austrian schools. An untapped reserve or emergency response?", *European Journal of Teacher Education*, advance online publication, 10 July 2025, https://doi.org/10.1080/02619768.2025.2531930.

---

## D8 — Ontario re-employment cap: 20 → 95 (1990) → 50 (2012)

Adopt `cases_other_legislation.md` §2.3 (sourced to OTPP, OSSTF, Hammer and Alphonso/Globe and Mail 2010, Ontario Ministry of Education memo 2022, OTF 2023, Alphonso/Globe and Mail 2024). The Excel/`lit_return_incentives` version ("a cap raised to 95 days during shortages (1990...)", implying from 50) is wrong on both the base and the direction of the 2012 change.

**Corrected passage (replaces `lit_return_incentives.md` §A4, Ontario bullet):**

> **Canada (Ontario):** under Schedule 1 to the Teachers' Pension Act, 1990, retired members of the Ontario Teachers' Pension Plan may work a capped number of days per school year without pension suspension. The ceiling has been moved in both directions as a labour-market valve: raised in 1990 from 20 to 95 days per year for the first three post-retirement years (20 thereafter) amid a severe shortage; cut to a flat 50 days from September 2012 — after a Globe and Mail investigation showed Ontario's ten largest boards spending CAD 108 million a year on retired supply teachers while new graduates went short of work — to protect new-graduate hiring; temporarily restored to 95 days for 2020/21-2022/23 during the pandemic; and back at 50 days since July 2023, the Ontario Teachers' Federation having refused a further 95-day extension in March 2024 (OTPP, 2026; OSSTF, n.d.; Hammer and Alphonso, 2010; Ontario Ministry of Education, 2022; Alphonso, 2024). Changes require agreement of the plan's co-sponsors — the Ontario government and the OTF; the rule is administered by the OTPP, not the Ontario College of Teachers.

**Also superseded:** the "(Ontario College of Teachers; per Excel, cap history [UNVERIFIED beyond Excel])" source line in `lit_return_incentives.md` §A4 — the OCT is only the certification regulator; cite OTPP/OTF/Ministry instead. The §B table cell "Ontario's 50-day cap" survives, ideally as "Ontario's 50-day cap (95 in shortage episodes)". The Excel's own wording ("went as high as 95 days during a severe shortage in 1990") must gain "from 20 days" and the 2012 reduction.

---

## Bibliography (new/confirmed entries for the master list)

- BMBWF (2023), *Anfragebeantwortung 15155/AB betreffend Quereinstieg und Sonderverträge für Lehrer:innen* (answer to parliamentary question 15692/J of 6 July 2023 by Mag. Martina Künsberg Sarre and colleagues), XXVII. GP, Geschäftszahl 2023-0.505.716, Bundesministerium für Bildung, Wissenschaft und Forschung, Vienna, 6 September 2023, https://www.parlament.gv.at/dokument/XXVII/AB/15155/imfname_1582019.pdf (accessed on 5 August 2026). [Pay rule for returning retirees: answer to Question 19, p. 18.]
- Huber, S.G., J. Pruitt and C. Helm (2024), "Das Schulleitungs-Barometer Austria 2024: Erste ausgewählte Ergebnisse zur Einschätzung von aktuellen Entwicklungen und Herausforderungen", *#schuleverantworten*, Vol. 4/2, pp. 71-95, https://doi.org/10.53349/schuleverantworten.2024.i2.a456 (open access; survey n = 2,151 of ~5,400 Austrian school leaders; ~45% report teacher shortage at their school, 80% of those affected call it "eklatant" — see also JKU/APA release, https://science.apa.at/power-search/12281081047416956181) (accessed on 5 August 2026).
- Rechnungshof (2025), *Lehrpersonaleinsatz*, Bericht des Rechnungshofes, Reihe Bund 2025/18, Rechnungshof Österreich, Vienna, https://www.rechnungshof.gv.at/rh/home/home/2025_18_Lehrpersonaleinsatz.pdf (retired-teacher figures pp. 24-25, TZ 2.1(5)-2.2) (accessed on 4 August 2026).
- Resch, K. (2025), "Retired teachers return to school to tackle teacher shortages in Austrian schools. An untapped reserve or emergency response?", *European Journal of Teacher Education*, advance online publication, 10 July 2025, https://doi.org/10.1080/02619768.2025.2531930. [Paywalled; abstract, n = 14 / nine retiree interviews, and the "45% of >550 school leaders" sentence verified from indexed article text; full text not obtained — no OA copy exists per Unpaywall, 5 August 2026.]
- Resch, K. (2025b), "Die Rückkehr von pensionierten Lehrpersonen in den Schuldienst als berufsbiographisches Ereignis", *Zeitschrift für Bildungsforschung*, published online 12 November 2025, https://doi.org/10.1007/s35834-025-00519-z. [Paywalled; sample — six returning, three non-returning teachers, episodic interviews — verified from abstract/preview.]
- Parlament Österreich (2023), *Anfrage 15692/J: Quereinstieg und Sonderverträge für Lehrer:innen*, Mag. Martina Künsberg Sarre and colleagues, 6 July 2023, https://www.parlament.gv.at/dokument/XXVII/J/15692/imfname_1574679.pdf (accessed on 5 August 2026).
- (Ontario and Portugal entries: reuse verbatim from `cases_other_legislation.md` and `cases_retiree_return.md` bibliographies — OTPP 2026; OSSTF n.d.; Hammer and Alphonso 2010; Ontario Ministry of Education 2022; OTF 2023; OCEOTA 2024; Alphonso 2024; Decreto-Lei n.º 51/2024; DN 2024; Renascença 2024a/b; SÁBADO 2024; RTP 2026; CNN Portugal 2026; DGAE 2025.)
