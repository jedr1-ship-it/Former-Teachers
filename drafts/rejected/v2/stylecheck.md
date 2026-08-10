# Style check — drafts/v2/paper_integrated.md

Checked against research/style_house_rules.md, research/TEAM_INPUT.md (stance rules) and research/style_oecd.md. Line numbers refer to paper_integrated.md as of this check. **30 hits**: 3 major, 17 moderate, 10 minor. Clean categories are reported as clean at the end.

---

## A. Rhetorical colons and em dashes in body prose

**CLEAN.** No rhetorical colons ("The problem: ...") anywhere in body prose. The single body-prose colon (l. 139, "four design families that recur across countries: outreach...") introduces a list and is sanctioned by house rule 1. No em dashes in body prose; the only two em dashes in the file (l. 349, l. 539) reproduce published reference titles and must stay.

The flip side is Hit 1: the paper avoids dashes so completely that appositions collapse into comma pile-ups.

**Hit 1 (moderate) — Abstract, l. 3.** Comma-apposition pile-ups make two sentences hard to parse:
- "turning to a group they already trained, former teachers" — the apposition lands backwards.
- "merit attention for what they bring back, classroom craft, curriculum knowledge and mentoring capacity, and that re-entry is..." — three list commas and a clause boundary indistinguishable.

*Rewrite:* "Education systems facing teacher shortages are turning to former teachers, a group they have already trained." and "...merit attention for what they bring back – classroom craft, curriculum knowledge and mentoring capacity – and that re-entry is a modest but real margin of supply, not a solution to shortages." (Spaced en dashes are OECD house style for asides, per style_oecd §2, and do not count against the em-dash rule.)

**Hit 2 (moderate) — Résumé, l. 7.** Same pile-up in French, where it is worse: "méritent l'attention pour ce qu'ils rapportent à la profession, savoir-faire pédagogique, connaissance des programmes et capacité de mentorat, et que..."

*Rewrite:* "...méritent l'attention pour ce qu'ils rapportent à la profession – savoir-faire pédagogique, connaissance des programmes et capacité de mentorat – et que la réintégration..."

---

## B. AI-tell phrases and constructions

**Hit 3 (MAJOR) — Chapter 3 opening paragraph, l. 137.** Two tells in the first three sentences of the paper's centrepiece chapter: "This chapter is the core of the paper." (section announcing itself, house rule 1, sanctioned only for the intro roadmap) and "That second half of the sentence is where the contribution lies." (self-referential cleverness — prose commenting on its own syntax is a pure machine-text move).

*Rewrite (leads with the strongest generalisation, per TEAM_INPUT §2):* "In every education system with a published recruitment funnel, expressions of interest from former teachers exceed completed returns by an order of magnitude or more; and the systems that know what their measures achieved are those that mandated follow-up when the measure was created. This chapter assembles, case by case, the record behind those two findings: what education systems have actually done to bring former teachers back, and what verifiably happened next. Re-entry initiatives are usually announced loudly and accounted for quietly..." — then delete the now-redundant "Two findings run ahead of the detail" paragraph (l. 141) or reduce it to its final sentence ("Both points return in Chapter 4.") attached to the selection paragraph.

**Hit 4 (MAJOR, pattern) — aphorism/antithesis density, Chapter 3.** Individually several of these are good sentences; at this frequency (roughly one per page) they read as generated punchiness and break the OECD register, which does not do epigrams. The set:
- l. 243: "Programmes invite; regulation decides." (symmetrical epigram opening §3.2)
- l. 259: "where they stack (Georgia), hundreds; where nobody counts, nobody knows." (triadic parallel with aphoristic punchline; also internally muddled — "few screens" yields "thousands or hundreds" and "stacked screens" also "hundreds", so the contrast fails)
- l. 209: "Near-universal outreach, small yields." (verbless fragment)
- l. 231: "No significant effects means no significant effects." (tautological emphasis)
- l. 222 (Box 3.4): "what it still lacks is an answer sheet." (cute metaphor)
- l. 181: "As policy design the package is coherent... As evidence it is empty" (symmetrical sentence pair)
- l. 183: "knew the most about its reserve and attached the least to it" + l. 186 (Box 3.2): "No country measured its silent reserve more carefully... none illustrates more cleanly..." (the same antithesis twice within three paragraphs)
- l. 239: "institutionalises what most systems improvise"
- l. 296: "Counting comes before recruiting."

*Keep at most two or three across the chapter* (the strongest candidates to keep: l. 211 "At comparable money, preventing an exit is far easier than reversing one", which carries a number, and l. 239). Concrete rewrites for the rest:
- l. 243: "Whether a former teacher can return at all is decided less by programme design than by rules. For the largest identifiable group of potential returners, retirees, the decisive rule is almost always whether a pension can be drawn alongside a teaching salary..."
- l. 259: "Across the six states the association is close to monotonic. North Carolina's open window drew roughly 3 500 returners over a decade and New Mexico's uncapped route 154 in its first year; Georgia's stacked screens held returns to about 350 a year; and in Louisiana, Michigan and Virginia, where no count is published, take-up is simply unknown."
- l. 209: replace the fragment with "Outreach on this scale still moved well under 1% of the workforce."
- l. 231: delete the sentence (the WWC sentence before it already makes the point), or "The null result should be taken at face value."
- l. 222: "...the world's largest test of paying retirees to serve where friction is highest, but the results that would show whether it works have not been published."
- l. 181: "The package is coherent as design, removing re-certification friction and reserving cash for the hardest-to-staff posts; but no uptake figures or evaluation of the return route have been published, so nothing can yet be said about whether it works."
- l. 183: "because it measured its reserve more carefully than any other system and then attached only a small subsidy to the result."
- l. 186 (Box 3.2 opener): delete the first sentence and open with "When the Ministry of Education, Culture and Science created the *Regeling*... in 2017, its own explanatory note cited at least 31 000 qualified people outside primary teaching. The instrument attached to that estimate was modest by design."
- l. 296: delete "Counting comes before recruiting." — the recommendation heading already says it.

**Hit 5 (moderate, pattern) — ", not X" tic.** Eighteen occurrences of the "Y, not X" turn in front matter and body (ll. 3, 13, 15, 19, 27, 45, 87, 97 ("context rather than promise"), 123, 127, 129, 133, 141, 188, 302, 306, 343...). Several are load-bearing and should stay (Abstract "not a solution to shortages"; take-away 5 "Pension rules, not programmes"). Thin the rest. Priority rewrites:
- l. 133 "That absence is a finding of this paper, not a footnote." → "That absence is itself a finding of this paper."
- l. 97 "argued that it is context rather than promise" → "argued that this arithmetic describes the pool, not the plausible flow" — no wait, vary the frame entirely: "Chapter 1 reported the researchers' arithmetic on this reserve and the reasons to treat it as an upper bound; the stricter Dutch measure shows why."
- The formula "context, not a promise" appears three times (take-away 3 l. 15, l. 45, l. 97). Keep it once, at l. 45. Take-away 3: "...and reserve arithmetic describes a pool, not a plausible flow."

**Hit 6 (moderate) — repeated motif "absence as a finding", ll. 137, 133, 341.** Same idea stated in near-identical terms three times. Keep l. 133 (where it does argumentative work). At l. 137: "...and where a programme published no results, the paper says so explicitly" (also removes the colloquial "papered over"). At l. 341 the conclusion may legitimately restate it, but vary: "And Table 4.1 records, system by system, which governments cannot say what their own measures achieved."

**Hit 7 (moderate) — repeated triad "classroom craft, curriculum knowledge, mentoring capacity".** Appears five times: Abstract (l. 3), take-away 2 (l. 13), l. 37, l. 123, l. 290. A signature triple repeated verbatim is a tell. Keep it in the Abstract and take-away; vary the body instances, e.g. l. 290: "arrive already able to teach, know the curriculum from the inside, and can support colleagues in ways no initial teacher education programme can supply" (which the sentence half-does already; cut the triple from its first clause).

**Hit 8 (moderate) — Chapter 4 opener, l. 290.** "Two things stand out from the compilation in Chapter 3. The first is that..." — enumerative scaffold whose second item never arrives in the paragraph (it surfaces only as "second by a supply margin" in the next paragraph). Empty topic sentence plus broken enumeration.

*Rewrite:* "The compilation in Chapter 3 sustains two conclusions. Former teachers reward policy attention in their own right: the people documented across these programmes arrive with formed classroom competence... [rest of para]. And the supply margin they offer is real but modest. Nothing in the compiled record suggests that re-entry can close a shortage..." — i.e. fold the current second paragraph's "first... second" into the same two-conclusion frame and delete "The recommendations that follow are justified first by... and second by...".

**Hit 9 (minor) — l. 89.** "The evidence is genuinely split, and the split is between one country and most of the others." Word-echo device; content is right (TEAM_INPUT wants the split stated as a finding). *Rewrite:* "The evidence is genuinely split, but the line runs between the United States and most other systems, not through every system." Or simply end the paragraph after "job satisfaction (Cuervo and Vera-Toscano, 2025)", since §2.2's opening sentence already stated the split.

**Hit 10 (minor) — l. 179.** "Its afterlife is telling in a different way." Mannered. *Rewrite:* "What happened after May 2024 is telling in a different way." (or delete and let the next sentence carry it).

**Hit 11 (minor) — l. 35.** Opening vignette triad ("the head of mathematics who retired last summer, the primary teacher who..., and the science graduate who...") is a recognised generated-prose opener shape. Borderline: the examples are concrete and map exactly onto the §1.3 taxonomy, so it earns its place. Keep, but be aware it is the first thing a reader who knows the tells will see. If trimmed, cut to two vignettes.

**Hit 12 (minor) — "interest cheap / conversion scarce" formula.** Five near-identical statements (Abstract l. 3, take-away 4 l. 17, l. 141, l. 183, Rec 4 l. 302). It is the paper's headline finding, so recurrence is right, but vary the wording at l. 183: "Interest, once again, was not the binding constraint; school-side absorption was" already exists in Box 3.2 — so at l. 183 write "Interest was abundant in all four systems; appointments depended on the hiring cycle, the availability of part-time and flexible posts, and the absorption capacity of schools, not on the size of the incentive."

---

## C. Chapter/section openings

**CLEAN on hedging.** No chapter or section opens with "it depends", "context matters" or equivalents; every chapter opens on a strong defensible generalisation (Ch2's opener at l. 73 is exemplary). Two openings announce instead of stating — covered as Hits 3 (Ch3) and 8 (Ch4). Two residual items:

**Hit 13 (moderate) — §3.1 opener, l. 145.** "Four design families organise the programme evidence." — pure structure announcement, and it repeats, nearly verbatim, the enumeration of the same four families given six lines earlier (l. 139). *Rewrite:* delete the repeated enumeration and open: "The programme evidence falls into the four design families identified above. Table 3.1 assembles the verified recruitment funnels for the cases with published figures; the gaps in that table are as informative as the numbers."

**Hit 14 (minor) — §4.3 opener, l. 339.** "This is a policy paper, and its contribution is the record itself." repeats §1.4's opener "This is a policy paper." (l. 67) verbatim. Deliberate bookending reads as a tic at this distance. *Rewrite:* "The contribution of this paper is the record itself."

---

## D. Residue of shortage-closing framing

**CLEAN.** The premise is applied consistently: re-entry as modest margin (ll. 3, 15, 45, 47, 292, 343), the Dutch 22% arithmetic reported as context with the DUO warning attached (ll. 45, 97), no passage sells re-entry as the fix. One cosmetic residue:

**Hit 15 (minor) — take-away 3, l. 15.** "...and the paper says so openly." Self-referential filler inside a take-away (the take-away should state the position, not advertise the paper's candour). *Rewrite:* delete the clause; the heading "Re-entry is a modest but real margin of supply" suffices, and the bullet ends "...and reserve arithmetic describes a pool, not a plausible flow" (see Hit 5).

**Hit 16 (minor) — §1.2 heading, l. 41.** "Shortages, and the honest size of the re-entry margin" — "honest" is editorial voice in a heading, and the comma is odd. *Rewrite:* "Shortages and the realistic size of the re-entry margin".

---

## E. Bullets, register, spelling, numbers

**Bullets: CLEAN.** Bulleted material appears only in Key take-aways (sanctioned) and the reference list. All chapters are full paragraphs.

**Hit 17 (moderate) — Recommendations 1-10 headings, ll. 296-314.** All ten are numbered bold imperatives ("Build...", "Diagnose...", "Recruit...", "Remove...", "Attach..."). style_oecd §2 is explicit: OECD working-paper recommendations are "conditions, trade-offs and implications — never imperatives, never numbered 'Recommendation 1'". TEAM_INPUT demands recommendations with spine, which declarative claim-headings deliver equally well. *Rewrite pattern (keeps the numbering if the lead author wants it, converts headings to findings):* Rec 1 → "**Returner data infrastructure comes before legislation.**"; Rec 3 → "**The employer's own records are the cheapest recruitment instrument.**"; Rec 5 → "**Pension penalties suppress return; targeting need controls cost better than stacking screens.**"; Rec 10 → "**Measures that legislated their own accounting are the only ones with known results.**" This is a structural call for the lead author; flagging, not silently fixable.

**Hit 18 (moderate) — take-away 10 heading, l. 29.** "Legislate the accounting." — two-word imperative, cryptic on first read. *Rewrite:* "**Only measures that legislated their own accounting have known results.** Georgia, Austria and New Mexico wrote an audit or a recurring count into the measure itself; every new re-entry measure should carry a sunset date, a mandated uptake count and an arm's-length review."

**Hit 19 (moderate) — Key take-aways ordering, ll. 11-29.** The box opens with a take-away about the paper ("The record... is now assembled in one place"), not a finding; the strongest programme/regulation findings sit at positions 4 and 5. Per the brief (take-aways lead with programme/regulation findings) and TEAM_INPUT (strongest generalisation first), reorder: current #4 (interest/conversion) and #5 (pension rules) first, then #2-#3 (premise: what returners bring; modest margin), then #6-#9, with #1's substance (verification method; "the modal measure published an announcement and nothing afterwards") merged into #10's accounting take-away or into a closing bullet. The "modal measure" sentence is the single most quotable finding in bullet 1 and is currently buried at the end of a methods bullet.

**Hit 20 (minor) — l. 215.** "progress toward the headline target" → British "towards" (the only Americanism found; "toward" also appears correctly as "toward" nowhere else — l. 222 uses "toward" inside Box 3.4: "progress toward the headline target" is the same sentence; fix both if duplicated after edits).

**Hit 21 (minor) — l. 282.** "a single supported process rather than a self-service obstacle course" — colloquial metaphor. *Rewrite:* "...as a single supported process rather than a sequence of separate procedures left to the returner."

**Hit 22 (minor) — l. 181.** "has added serious money at the margin" — colloquial. *Rewrite:* "has added a substantial financial incentive at the margin".

**Hit 23 (minor) — ll. 197, 202.** Courtship metaphor twice ("courted retirees in earnest"; "six years of active courtship"). Keep at most one. *Rewrite l. 202:* "six years of active recruitment moved less than 1% of the workforce equivalent."

**Hit 24 (minor) — l. 43 / references.** "(OECD, 2023b)" is cited but no OECD (2023a) exists anywhere; the reference list entry (l. 491) is also "OECD (2023b)". Renumber to OECD (2023) in both places.

**Hit 25 (minor) — reference list format, ll. 347-575.** Entries are markdown bullets; OECD reference lists are unbulleted hanging-indent entries (style_oecd §3). Fine as a drafting convention, but strip the bullets at Word conversion and note it now so it is not forgotten.

**Numbers: CLEAN with one nit.** Thin-space thousands ("5 729", "13 600") used consistently in body and tables; "3,827" and "7,000" appear only inside quoted reference titles and must stay. % with figures throughout; words below ten in prose generally observed. Nit (Hit 26, minor): year spans are written in full ("1999-2009", "2015-2024", "2000-2019") whereas OECD house style compresses decade spans ("2025-30"); internal consistency is fine, so either leave as is or compress everywhere — do not mix if any compressed span is later introduced.

---

## F. Front matter quality

**Abstract (l. 3).** Reads like a policy-paper abstract: context → what the paper compiles → method discipline (verified take-up) → position (matter per se; modest margin) → findings → design lessons. Right length (~210 words), no citations, no bullets, findings before lessons. Two hits: the comma-apposition pile-ups (Hit 1) and:

**Hit 27 (minor) — l. 3.** "Take-up is reported as verified against audits" — stacked passives ("is reported as verified") read awkwardly. *Rewrite:* "Take-up figures are verified against audits, annual reports and parliamentary records rather than taken from launch announcements."

**Résumé (l. 7).**

**Hit 28 (MAJOR).** Three unidiomatic renderings, one of which contradicts the paper's own body text:
- "les règles de cumul pension-emploi" — the established French term, used correctly in the paper's own Section 3.2, is **"cumul emploi-retraite"**. *Rewrite:* "les règles de cumul emploi-retraite font varier la participation des retraités d'un ordre de grandeur..."
- "les règles... de congé de carrière" — calque of "career break"; French usage is **"interruption de carrière"** (or "disponibilité" in the French civil-service context). *Rewrite:* "...les règles de pension, d'accréditation et d'interruption de carrière qui encadrent le retour." (Better still: "les règles en matière de retraite, d'accréditation et d'interruption de carrière".)
- "Des enseignements de conception en découlent, sur le recrutement à partir des dossiers..." — "enseignements de conception" is a word-for-word calque of "design lessons". *Rewrite:* "Il en découle des enseignements pour la conception des politiques : recruter à partir des dossiers des employeurs, lier le financement de la conversion aux postes vacants, supprimer les pénalités de pension, pérenniser les règles de réaccréditation et imposer la publication des chiffres de participation pour toute nouvelle mesure."
Faithfulness to the English is otherwise good; with these three fixes and Hit 2 the Résumé passes.

**Key take-aways.** Substance is strong and positions are stated plainly; ordering and two headings need work (Hits 18, 19, plus Hit 15).

**Hit 29 (minor) — take-away 9 heading, l. 27.** "Retirees' craft is proven in tutoring roles, not yet in mentoring ones." — "proven" overstates for one replication trial plus one volunteer trial; house rule 2 (hedge like a researcher). *Rewrite:* "**Retirees' instructional value has trial evidence in tutoring roles, not yet in mentoring ones.**"

**Hit 30 (minor) — take-away 6, l. 21.** "Preventing an exit is far easier than reversing one at comparable money." The qualifier "at comparable money" dangles at the end and reads as modifying "one". *Rewrite:* "**At comparable money, preventing an exit is far easier than reversing one.**" (matches the body's phrasing at l. 211).

---

## Summary of clean categories

- Rhetorical colons: none. Em dashes in body prose: none.
- "Crucially / importantly / moreover / not only... but also / It is important to note": zero occurrences.
- Hedging chapter openings ("it depends", "context matters"): zero; all chapters open on positions.
- Shortage-closing salesmanship: zero; modest-margin premise applied consistently.
- Bullet abuse outside Key take-aways: none.
- British spelling: one miss ("toward", Hit 20); programme/labour/organisation/practising/enrolment/ageing all correct.
- Number formatting: consistent thin-space style; two comma-formatted numbers are inside quoted titles and correct as is.

**Total: 30 hits (3 major — Hits 3, 4, 28; 17 moderate; 10 minor).**
