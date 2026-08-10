# style_voice.md — the binding writing guide for the rewrite

**Status.** This file governs PROSE: what a sentence, paragraph, section, abstract and recommendation
may do. On any conflict about prose it overrides `style_oecd.md`, `style_house_rules.md` and
`drafts/v2/stylecheck.md`. `style_oecd.md` remains authoritative on layout, colour, typography,
citation format and page architecture. `TEAM_INPUT.md` remains authoritative on content and premise;
where the OECD corpus and the team decision point different ways, the team decision wins on *what to
say* and this file governs *how to say it*.

**Evidence base.** Everything prescriptive below is derived from five empirical studies in this
directory — `voice_abstracts.md`, `voice_openings.md`, `voice_numbers.md`, `voice_cases.md`,
`voice_recommendations.md` — covering roughly 570 000 words of OECD education publications read from
PDFs downloaded in this session. The measurements of our own rejected draft
(`drafts/v2/paper_integrated.md`) were produced with `research/voice_check.py`, which is re-runnable
against any new draft: `python3 research/voice_check.py <path-to-draft.md>`.

**Three corrections to received wisdom, stated up front, because they change what we do.**

1. **Opening a paper on teacher supply pressure is not un-OECD.** Four of twelve OECD abstracts do
   it, including *both* of the two publications nearest our topic: "Recruitment difficulties,
   changing career patterns and growing classroom diversity have prompted many OECD education systems
   to look beyond traditional Initial Teacher Education…" (WP 347, *A second career in teaching*,
   p. 3) and "Teacher shortages, changing labour markets and growing expectations for workforce
   diversity have led many education systems to expand alternative pathways…" (WP 342, *Alternative
   pathways into teaching*, printed p. 4). The lead author's charge (1) is therefore **not** a
   register problem. It is a **premise** problem, already settled by `TEAM_INPUT.md` §3: former
   teachers matter per se, and re-entry is a modest margin, so shortages cannot be the paper's reason
   for existing. We comply by using the corpus's *other* sanctioned opening — the flat general
   proposition, used by five of twelve abstracts — not by inventing an un-OECD one.
2. **"OECD papers avoid numbers" is false for the middle of a paper.** Analytical body prose in the
   corpus runs at **4.0 to 15.6 numerals per 1 000 words** (`voice_numbers.md` §3). The charge is
   valid, and unanimously so, for the abstract (0.0/1000 in three of three), the first two
   introduction paragraphs (0 numerals in five of five) and the conclusions/recommendations (0.0/1000
   in three of four). Stripping numbers out of the analytical chapters would put us *out* of genre in
   the opposite direction.
3. **The deferential OECD voice is a folk model.** "Policy makers may wish to…" occurs **twice in
   568 886 words** and never as advice; "ought to" and "we recommend" occur **zero** times. The
   workhorse modals are `can` (32.1 per 10 000 words), `may` (11.2), `should` (6.8), `need to` (5.7),
   `must` (3.3), `could` (3.2). Bare imperatives are used — but only as bold lead-ins to take-away
   bullets.

---

# 1. THE DIAGNOSIS

## 1.1 Abstract construction: we wrote a press release, the corpus writes a frame

Our abstract, in full at `paper_integrated.md` line 3, opens:

> "Education systems facing teacher shortages are turning to former teachers, a group they have
> already trained. This policy paper compiles and verifies the international experience with re-entry
> policies across some twenty education systems, from return-to-teaching programmes in England, New
> South Wales and the Netherlands to retiree re-engagement in Austria, Germany, Portugal, Japan and
> China, together with the pension, licensure and career-break rules that govern return."

and closes:

> "…where pension penalties were removed outright, as in North Carolina, returns ran to thousands
> over a decade, while Georgia's stacked eligibility screens hold them to about 350 full-time rehires
> a year and blocked hires that 45% of surveyed districts wanted to make."

Measured against the corpus:

| Feature | Our abstract | OECD corpus (n = 12) |
|---|---|---|
| Country / jurisdiction names | **10** | **0 in 12 abstracts, across 1 948 words** |
| Substantive statistics | **2** (`about 350`, `45%`) | 0 in 11 of 12; **0 in all 8 working papers and policy perspectives** |
| Numerals per 1 000 words | **9.5** | **0.0, 0.0, 0.0** in the three measured directly |
| Position of the "This paper…" sentence | **2** | median **3**; only 1 of 12 puts it first |
| Last sentence | a list of design lessons drawn from cases | payoff for the reader (3), contribution/conclusion (3), guiding question (2), boilerplate (4) — **0 of 12 end on a statistic, a country, an imperative or the problem** |
| Words / sentences | 210 / 6 | mean 162 / 6.9 |

The country ban is the hardest single result in the whole corpus and it is not an artefact of thin
subject matter. TALIS 2024's abstract names no country while its executive summary names twenty; EAG
2025's abstract names no country while its executive summary names eleven. **The country names exist;
they are not allowed into the abstract.**

Note also what our second sentence does. It is a table of contents in prose — "from … to …, together
with …". The corpus never inventories itself geographically. It inventories itself *structurally*,
and spells the count out as a word: "It is structured around **six questions**: who they are, where
they work, how they are prepared and supported…" (WP 347, p. 3); "classifies alternative pathways
using **four criteria**: pathway modality, programme oversight, entry requirements and licensure
outcomes" (WP 342, printed p. 4).

## 1.2 Where numbers sit: we have inverted the corpus distribution

The corpus's numeral density is a **hump** — thin at the front, thick in the analytical middle and in
set-off display furniture, zero at the back. Ours is a **plateau at the corpus's ceiling**, and the
two places the corpus keeps clean are where we are densest relative to genre.

| Section type | OECD corpus (numerals / 1 000 words) | Our draft |
|---|---|---|
| Abstract | 0.0 / 0.0 / 0.0 | **9.5** |
| Key take-aways box | wp342's box: **0 statistics, 0 country names, 0 citations** in ~290 words | **30.2** (17 numerals, 9 country names) |
| Introduction ¶1–¶2 | 0 numerals in 5 of 5 introductions | ¶1 clean; **first numeral in ¶2**, and §1.2 runs at 34.3 |
| Analytical body | 4.0 – 15.6 (norm 4–8) | §2.1 **59.9**, §2.3 **54.8**, §2.2 **42.6**, §3.1 **30.0–36.5**, §3.2 **23.9** |
| Conclusions / recommendations | **0.0 in three of four** publications | §4.1 Recommendations **37.3** |

Two corpus passages show what we should have done with exactly our kind of material. First, the
introduction of the OECD's own second-career-teacher paper, which is *about* recruitment pressure and
contains **not one numeral**, and which refuses to quantify on principle:

> "Teacher shortages have been documented for decades… **Measuring them is not straightforward** –
> countries use different methodologies and observe shortages at different stages of the recruitment
> process – but the underlying picture is consistent across measures."
> — WP 347, Introduction ¶2, p. 7

Second, the structural split inside the flagship chapter that contains our topic. Splitting *Education
Policy Outlook 2024* Chapter 2 into its argument stream and its country-example bullets:

| EPO 2024 Ch. 2 | Words | Numerals | per 1 000 |
|---|---:|---:|---:|
| Analytical argument | 5 734 | 10 | **1.7** |
| Country-example bullets | 3 024 | 26 | **8.6** |

The argument runs almost clean; the demoted cases carry five times the numeric load. Our draft runs
the argument at the density the corpus reserves for demoted bullets.

Two further symptoms. **We recite and point at the same time.** Of the nine sentences in our body
prose that reference a Table or Box, only three carry no numeral (33%); in the corpus, **55 of 77
display-referencing sentences (71%) contain no numeral at all** — the reference is what buys the right
to stay verbal. And **we do not verbalise magnitude before quantifying it.** WP 347's introduction
runs spelled-out quantities at 18.2 per 1 000 words against numerals at 2.9 — six to one. The corpus
default sentence shape is verbal claim first, digits as parenthetical corroboration: "more than two
thirds of education systems (**28** of **35**) had taken some steps" (EPP 122, p. 15); "nearly half
(**47%**) of school principals… – up from **29%** in 2015" (EPO 2024, Executive summary, p. 11).

## 1.3 Case-led versus argument-led: the charge is confirmed, with numbers

| Test | Our draft | OECD corpus |
|---|---:|---:|
| Body paragraphs opening with a country in the first twelve words | **22.7%** (15 of 66) | **8.1%** corpus-wide; **1.2–3.7%** in working papers |
| Body paragraphs naming a country anywhere | **77.3%** (51 of 66) | **32.5%** |
| Country names in section headings | 0 of 24 | 1 of 163 (0.6%) |

The heading count is the one place we already comply. Everything below the heading does not. Fifteen
of our sixty-six paragraphs make a country their grammatical subject, against a working-paper norm of
one to four in a hundred. The most conspicuous specimens:

> "**England illustrates** what these rates look like inside one workforce over time." (§2.1)
> "**Georgia demonstrates** the opposite pole, restrictive design audited honestly." (§3.2)
> "**Portugal turned** the same instrument into a natural experiment…" (§3.1)
> "**Japan shows** what the retiree channel looks like when it is routine staffing…" (§3.1)
> "**New South Wales ran** the outreach model in its purest form…" (§3.1)

Compare the corpus's invariant. A country arrives *after* a completed general claim, inside a
subordinating frame, and the claim survives its deletion:

> "Student populations across OECD countries are becoming more diverse, but the teaching workforce has
> not kept pace. In several systems, significant gaps persist between the demographic composition of
> classrooms and of staff rooms. Countries in South America, **for example**, tend to lack indigenous
> teachers… **In the Flemish Community of Belgium**, only 6.4% of teachers have a migration
> background, compared to 39.6% of the student population… **In the United States**, teachers from
> historically disadvantaged groups remain significantly underrepresented…"
> — WP 347, p. 33

The general claim occupies sentences 1–2 and carries no numbers; the three countries occupy sentences
3–5 and carry all of them. Only **2%** of country-naming sentences in WP 342 open with "In
[Country]"; 75% of country mentions across the sampled corpus are grammatically subordinate to a claim
already made. And the corpus disclaims the country reading explicitly: "the examples should not be
interpreted as representative of the national system, but as illustrative of a particular type of
pathway… **the framework and examples do not aim to categorise countries or systems**" (WP 342,
p. 19).

Length is the second half of the demotion. A country mention in an OECD working paper is **one
sentence, median 28–38 words**; a country bullet in the flagship is **median 56 words, 92% under
100**. Anything longer is relocated to a box (**median 404 words**) or an annex (1 119–6 227 words),
and the relocation is signposted in the main text with a bare parenthesis: "(see Annex B)", "(see
Box 4)". Our §3.1 runs multi-paragraph national narratives — England alone occupies two full
paragraphs plus a box — inside the argument stream.

## 1.4 Heading style: we obey the prohibition and skip the positive move

Our twenty-four headings contain **zero** country names — correct, and better than the corpus average.
But they also contain zero questions and zero propositions, and, decisively, **not one of our body
sections opens with a bolded propositional lede sentence.** We use bold run-in leads only in the
take-aways box and the numbered recommendations.

The corpus's heading grammar: **152 topical (69%), 48 interrogative (22%), 20 propositional (9%)**,
and all twenty propositional headings come from a single 2005 book. So the widely-repeated instruction
"make every heading state a proposition" is **wrong against this corpus**. What the corpus actually
does is put the topic in the heading and the proposition in a bolded sentence directly beneath it:

> **The initial teacher preparation system**
> **"Initial teacher preparation is the first step in the continuum of teacher learning and should be
> understood as a system of multiple actors and artefacts."**
> — *A Flying Start*, Executive Summary, p. 11

> **"First, second-career teachers are a meaningful and growing presence in OECD education systems –
> not a niche category."** … **"Second, SCTs' preparation needs are different, not lesser."** …
> **"Third, organisational support, not entry pathway, is the strongest predictor of how SCTs
> experience the workplace."**
> — WP 347, "What the evidence supports", pp. 38–39

Note the **X, not Y** frame in three of those four. That is the register the lead author is asking
for, and it costs us nothing structural.

The modern alternative is the question heading, and it is rising fast: *A Flying Start* runs the
triplet "Why is this a challenge? / What strategies can address the challenge? / How can the different
actors apply these strategies?" verbatim across four chapters, and WP 347 is built entirely on six
question headings. Our "3.1. Programmes / 3.2. Regulation" is off-register in the other direction: it
is a filing label, not a topic.

## 1.5 Paragraph architecture: our paragraphs are 40% too long and never short

| Metric | Our draft | OECD corpus (1 542 paragraphs, 5 publications) |
|---|---:|---:|
| Mean sentences per body paragraph | **5.47** | **3.91** (every publication 3.8–4.1) |
| Median | 5 | 4 |
| 1–2 sentences | **0.0%** | 27.4% |
| 3–5 sentences | 56.1% | 55.0% |
| 6–8 sentences | **34.8%** | 13.3% |
| 9 or more | **9.1%** (6 paragraphs) | 4.3% |
| Mean words per paragraph | **161** (max 345) | ≈ 100 |
| Mean sentence length | **31.8 words** (median 28; 17.4% over 45) | ≈ 25 (median ≈ 23) |

The consistency of the corpus is the striking part: five publications, 2005 to 2026, two genres, five
author teams, and every mean lands between 3.8 and 4.1. **The OECD body paragraph is four sentences
long.** Ours is five and a half, and we have no short paragraphs at all — the corpus writes a
one-sentence paragraph better than one time in four, which is how it lands a proposition and moves on.

Our paragraphs are also built in the wrong order. The corpus sequence is **claim → evidence
(+attribution) → [country illustration] → qualification or implication**; twelve of fifteen sampled
paragraphs open on a claim and none opens on a country. Ours routinely open on a case and reach the
claim last. §2.1's England paragraph puts its proposition — "Exit and re-entry are thus not
exceptional events… but large, recurring flows" — in the **final** sentence, behind four sentences of
national statistics.

The corpus also ends evidence paragraphs on a pivot rather than on the data: "Although the shortage
trend in some subjects seems to be improving…, the supply and demand issue **is in fact much more
complex**" (*A Flying Start*, p. 48). Our evidence paragraphs typically end on the last number.

---

# 2. THE RULES

Numbered, testable, each with a check and a corpus-derived value. A rule you cannot check compliance
against is not a rule. Run `python3 research/voice_check.py <draft.md>` for R2, R6–R9, R14–R16, R19,
R22.

## Abstract and front matter

**R1. The abstract names no country, region, state or subnational entity.**
*Check:* country-name count = **0**. *Corpus:* 0 in 12 abstracts / 1 948 words; 0 in 10
executive-summary section headings.

**R2. The abstract contains no substantive statistic and no numeral in its first sentence.**
*Check:* numerals per 1 000 words = **0.0**; numerals in sentence 1 = **0**. *Corpus:* 0.0/1000 in
three abstracts measured directly; 0 substantive statistics in all 8 working papers and policy
perspectives; 0 of 12 first sentences carry a numeral. The single licensed exception is a **scope
count of the evidence base** ("across some twenty education systems"), and it is spelled as a word.

**R3. The abstract runs 140–165 words in 6–7 sentences, and the "This policy paper…" sentence sits at
position three.**
*Check:* word count in range; sentence count in range; contribution sentence index = 3.
*Corpus:* mean 162 words / 6.9 sentences; median and modal position of the contribution sentence = 3;
only 1 of 12 puts it first.

**R4. The abstract's last sentence states what the reader gets or what the paper concludes, names the
audience if useful, and does none of the following: cite a statistic, name a country, issue an
imperative, restate the problem.**
*Check:* four prohibitions, all binary. *Corpus:* 0 of 12 last sentences do any of them.

**R5. Every structural count anywhere in the front matter is spelled as a word.**
*Check:* no digit immediately preceding "questions", "criteria", "families", "populations",
"mechanisms", "instruments". *Corpus:* 6 spelled-out structural counts across 5 abstracts; **zero**
instances of a structural count written as a digit.

**R6. The Key take-aways box carries zero numerals and zero country names; the bold lead of every
bullet carries no statistic.**
*Check:* box numeral count = **0**; box country count = **0**. *Our draft:* 17 numerals, 9 country
names, 30.2/1000. *Corpus:* WP 342's "Key Take-Aways", ~290 words: "zero statistics, zero country
names, zero citations". Across all four take-away designs surveyed, the invariant is that the bold
lead is a claim or a direction, never a statistic. (If a bullet is a *findings* tier of the WP 347
kind rather than a take-away, its elaboration may carry up to **three** numerals; its lead may carry
none.)

## Numbers

**R7. The first two paragraphs of the introduction contain no numeral.**
*Check:* numerals in ¶1 = 0 and in ¶2 = 0. *Corpus:* 0 in ¶1 and ¶2 in **five of five** introductions
examined; the first numeral arrives in ¶3 in four of them.

**R8. Analytical body prose runs at 4–8 numerals per 1 000 words, hard ceiling 15.**
*Check:* per-section density from `voice_check.py`. *Corpus:* body densities 4.0, 4.3, 6.8, 15.6;
15.6 is a section narrating a policy survey's counts. *Our draft:* 23.9–59.9. Below 4 the chapter
stops being analysis; above 15 it is a data dump.

**R9. Conclusions and recommendations contain zero numerals.**
*Check:* density = **0.0/1000** in Chapter 4. *Corpus:* 0.0 in three of four conclusion/recommendation
sections; the fourth uses six numerals in 1 621 words to restate one headline share. *Our draft:*
37.3. If a recommendation needs a number, it is under-specified as policy, not under-evidenced.

**R10. No section-opening sentence carries a statistic. One exception is permitted in the whole
paper, and only for a section whose subject literally is a distribution.**
*Check:* first sentence of every heading-level unit. *Corpus:* **1 statistical opening in 49** (2%),
and it is the section titled "Where are second-career teachers?".

**R11. State every magnitude in words before, or instead of, stating it in digits.**
*Check:* every numeral in the body has a verbal quantity in the same or preceding sentence, or a
display reference in the same sentence. *Corpus:* spelled-out quantities run **18.2 per 1 000 words
against 2.9 numerals** in WP 347's introduction — six to one. Round in words, then be precise in
digits: "nearly half (47%)", "almost 90%", "around 21%", "more than two-thirds of countries surveyed".

**R12. At least 70% of sentences that reference a Table, Figure, Box or Annex contain no numeral.**
*Check:* count them. *Corpus:* **55 of 77 (71%)**. *Our draft:* 3 of 9 (33%).

**R13. Quote at most three numerals per display reference: the central value and the two extremes.
Never walk the reader through a series.**
*Check:* numerals per display-referencing sentence ≤ 3. *Corpus:* "from 36% in Iceland to under 5% in
Japan, Türkiye and Korea"; "averaged 70% across OECD countries, ranging from over 85% … to below 60%".

## Cases

**R14. No country name appears in any heading.**
*Check:* 0. *Corpus:* 1 in 163 headings (0.6%), in a paper commissioned about that country.

**R15. No more than 4% of body paragraphs name a country in the first twelve words of their opening
sentence.**
*Check:* `voice_check.py` reports this. *Corpus:* working papers 1.2–3.7%; flagships 8.9–11.4%. We are
a policy paper in the working-paper register. *Our draft:* 22.7%.

**R16. No more than 35% of body paragraphs name a country anywhere.**
*Check:* as above. *Corpus:* 32.5%. *Our draft:* 77.3%.

**R17. A country never opens a paragraph as its bare subject. Every country arrives inside a
subordinating frame, after a general claim already made in the same paragraph.**
*Check:* strike the country sentence; the paragraph must still say something. Permitted frames:
`In [Country], for example, …` · `For example, in [Country] …` · `such as` · `including` · `notably`
· `provide examples of` · `In [Country] alone, …` (marks an extreme case, not a representative one).
*Corpus:* only 2% of country-naming sentences in WP 342 open with "In [Country]".

**R18. A country mention in running prose is one sentence of at most 40 words; a country bullet at
most 60. Anything longer goes to a box (~400 words) or an annex, signposted with a bare parenthesis at
the point of displacement.**
*Check:* word counts. *Corpus:* working-paper country sentences median 28–38 words; flagship bullets
median 56, 92% under 100; boxes median 404; annexes 1 119–6 227.

**R19. Every box passes the deletion test: delete it and the argument must survive intact.**
*Check:* the box's introducing sentence must already contain the proposition. *Corpus:* all six
country/analogy boxes tested passed; the one non-deletable box in the corpus contains no country at
all.

**R20. Box titles put the general category first and the country after a colon.**
*Corpus:* "Box 1. **Subject Specialist Accelerated Academic Pathway**: The STEP Programme from
Finland". For us: "Box 3.2. **Direct outreach from employer records**: Teachers Re-Engage in New
South Wales", not "Box 3.2. New South Wales".

**R21. Every country-bearing section is sandwiched: general claim → hinge sentence → short cases →
general lesson reclaimed. No section ends on a country.**
*Corpus:* EPO 2024's re-entry section, pp. 50–51, executes exactly this on our exact topic, closing
"This represents a significant opportunity for education systems to clarify re-entry routes… However,
many education systems may lack accurate data on the number and characteristics of potential
returnees…".

## Paragraphs and sentences

**R22. Target four sentences per body paragraph: mean 3.8–4.3, median 4, no paragraph over eight
sentences, and at least 20% of body paragraphs of one or two sentences.**
*Check:* `voice_check.py`. *Corpus:* mean 3.91 across five publications, each between 3.8 and 4.1;
1–2 sentences 27.4%; 9+ sentences 4.3%. *Our draft:* mean 5.47, 0% short, 9.1% at nine or more.

**R23. Mean sentence length at most 26 words, median at most 24.**
*Corpus:* WP 342 body, 841 sentences: mean ≈ 25, median ≈ 23. *Our draft:* mean 31.8, median 28.

**R24. Build every paragraph as claim → evidence (+attribution) → [country illustration] →
qualification or implication.**
*Check:* the first sentence must be assertable without the rest of the paragraph. *Corpus:* 12 of 15
dissected paragraphs open on a claim; none opens on a country.

**R25. End evidence paragraphs on a pivot, not on the data.**
*Corpus:* "…the supply and demand issue is in fact much more complex"; "Bearing in mind the limits of
a single small-scale study, …".

**R26. Front every generalisation with a scope adverbial and keep the main verb flat, present-tense
and plural-institutional.**
*Check:* `Across OECD countries` · `In most countries` · `On average across …` · `In some systems` +
*governments / education systems / systems* + present indicative. *Corpus:* "In some countries" 21,
"In most countries" 20, "Across OECD countries" 6 across the six publications. Let the adverbial do
the hedging so the claim can stay declarative.

**R27. Attach counts to claims as a colon-gloss after the proposition, never as the proposition.**
*Corpus:* "Most OECD countries have established formal pathways for SCTs to obtain teaching
qualifications: 16 out of 28 countries and economies with available data report dedicated routes…"
(WP 347, p. 17).

## Headings and argument scaffolding

**R28. Headings are topical or interrogative. Do not convert the paper to propositional headings.**
*Corpus:* 69% topical, 22% interrogative, 9% propositional — and all propositional headings come from
one 2005 book. Interrogative headings are the live form and are rising sharply with publication date.

**R29. Every section heading is followed immediately by a bolded propositional lede sentence.**
*Check:* count sections with a bold lede = count of sections. *Corpus:* this is where OECD actually
puts its propositions (*A Flying Start* Executive Summary; WP 347 conclusions). *Our draft:* zero.

**R30. Write at least half of the paper's load-bearing propositions in the X, not Y contrastive
frame.**
*Corpus:* three of WP 347's four headline findings: "different, not lesser"; "a meaningful and growing
presence… not a niche category"; "organisational support, not entry pathway".

**R31. Structure the conclusions as ordinal bold claims — First, Second, Third, Fourth — each followed
by 80–140 words of elaboration.**
*Corpus:* WP 347, pp. 38–39: four ordinals, elaborations of 85–110 words each.

**R32. Split the conclusions into three named blocks in this order: what the evidence supports / what
the evidence does not yet tell us / considerations for policy and practice.**
*Corpus:* WP 347. The gap block sits **between** findings and recommendations, never after them:
"Admitting the gap is what licenses the sharp imperatives that follow."

## Recommendations

**R33. Use `can`, `should`, `need to`, `must`, `could` — roughly in that order of frequency, with
`can` outnumbering `should` about five to one.**
*Check:* `can` : `should` ratio between 3:1 and 6:1. *Corpus:* 1 825 : 386 = 4.7:1. *Our draft:*
30 : 11 = 2.7:1, with `need to` at zero.

**R34. Never write "may wish to", "ought to", "we recommend", "it is recommended" or "this paper
recommends".**
*Check:* zero occurrences. *Corpus:* "may wish to" twice in 568 886 words and never as advice; the
other three, zero.

**R35. Reserve `must` for guardrails and constraints, at most three times per major section.**
*Corpus:* 3.3 per 10 000 words; "systems must ensure adequate resourcing"; "policymakers must
therefore balance the need for quick fixes with sustainable, evidence-based workforce planning".

**R36. Name the actor: "policy makers" or "education systems". Do not address "governments" in a
recommendation sentence.**
*Corpus:* policy makers 7 of 15, education systems 5 of 15, governments **0**.

**R37. Bare imperatives appear only as bold lead-ins to take-away bullets, never in running prose.**
*Corpus:* "Treat retention, not recruitment, as the central design question." / "Invest in preparation
rather than compromising it." — all four are bold leads in WP 347's "Considerations for policy and
practice".

**R38. Attach evidence to about two-thirds of recommendations; the third that stand on general appeal
must sit in the conclusion, where the evidence has already been laid out.**
*Corpus:* of 15 sampled, 5 carry a named study, 5 carry country experience, 5 carry nothing.

**R39. Where the evidence is thinnest — which for us is re-entry itself — lower the voice, do not
raise it. Use "should consider", "could benefit from", "one possible model would be to", and use
"promising" for any national practice that has not been evaluated.**
*Corpus:* the weakest formulations in 568 886 words cluster precisely on older-teacher retention and
re-entry: "Education systems **could benefit from** flexible re-entry pathways…" (EPO 2024, p. 50).
"Promising" appears 72 times in *A Flying Start* and is defined there as "promising in the sense that
stakeholders reported positive perceptions, [but] had not been comprehensively evaluated".

**R40. Use the three-move template for any recommendation resting on thin evidence: (i) hedge the base
— "Although the evidence remains limited"; (ii) name one study and its finding; (iii) draw the
recommendation with "therefore" and a softened modal.**
*Corpus:* EPP 122, p. 12, verbatim structure.

---

# 3. THE ABSTRACT TEMPLATE

Slot by slot, in the order the slots actually occur. Target **140–165 words in 6–7 sentences**.

| Slot | Content | Length | Status | Corpus pattern |
|---|---|---|---|---|
| **1** | **The state of the world.** No numeral, no country. Either (a) a compound driver — a three-term list of pressures plus a verb of consequence — or (b) a flat general proposition about why the object of study matters. | 1–2 sentences, 25–45 words | Mandatory | (a) "Recruitment difficulties, changing career patterns and growing classroom diversity **have prompted** many OECD education systems to…" (WP 347). (b) "Teachers' time is a critical resource for education systems and a key input for student learning." (EPP 29). Five of twelve use (b). |
| **2** | **The gap or tension.** Concessive grammar. | 0–1 sentence, 20–30 words | Present in 5 of 12 | "**While** these pathways are increasingly prominent, they remain highly heterogeneous and difficult to compare across contexts." (WP 342) |
| **3** | **What this paper is and does.** Fixed formula + neutral verb: *synthesises, provides, proposes, examines, discusses, presents, explores*. Never "argues", never "shows that". | 1 sentence, 20–30 words | Mandatory, **position 3** | "This working paper synthesises what is known about these second-career teachers." (WP 347) |
| **4** | **The paper's architecture.** A structuring count spelled as a word, a colon, a list. | 1 sentence, 25–40 words | Present in 6 of 12 | "It is structured around **six** questions: …" (WP 347); "…using **four** criteria: pathway modality, programme oversight, entry requirements and licensure outcomes" (WP 342) |
| **5** | **The evidence base.** Fronted participle "Drawing on…". Name instruments and source types; a scope count is the one permitted numeric move; name no country. | 1 sentence or a leading clause, 15–35 words | Mandatory | "**Drawing on** comparative evidence, recent TALIS data and case studies from OECD countries…" (WP 342) — note "case studies from OECD countries", not the countries. |
| **6** | **Contribution and payoff.** Forward-facing, reader-facing. Name the audience if useful. | 1 sentence, 25–45 words | Mandatory, and it is the last sentence | "…considers what governments, schools and researchers might do to support this growing share of the teacher workforce." (WP 347) |

**Prohibited in every slot:** any country name; any substantive statistic; any numeral in sentence 1;
any structural count written as a digit; ending on the problem.

## Model abstract for our paper (obeys R1–R5 and the template)

Slot 1 is form (b) — the flat general proposition — because `TEAM_INPUT.md` §3–4 forbids motivating
the paper on shortages, and form (b) is the corpus's own alternative, used by five of twelve.

> Every education system employs fewer teachers than it has trained. Former teachers are the only pool
> that arrives with classroom craft, curriculum knowledge and mentoring capacity already formed, and
> where they can be counted they are mostly of working age rather than retired. This policy paper
> examines how education systems have sought to bring them back, and what is known about the results.
> It distinguishes three populations of former teachers and two families of instrument: programmes
> that recruit and support returners, and the rules on pensions, licensure and career breaks that
> decide whether return is viable. Drawing on programme evaluations, audit findings, parliamentary
> records and administrative statistics from some twenty education systems, it identifies which design
> choices raise return, which suppress it, and where the record is silent. It concludes that re-entry
> is a modest but real margin of supply, worth designing well for what returners bring back, and
> considers what governments and schools might do to manage a channel they already depend on.

**Compliance, checked:** 164 words; 6 sentences (10 / 33 / 20 / 33 / 32 / 36 words); **0 numerals**;
**0 country names**; contribution sentence at position **3**; structural counts spelled as words
("three populations", "two families", "some twenty"); evidence base on a fronted participle; last
sentence forward- and reader-facing with the audience named, and ending on neither a statistic, a
country, an imperative nor the problem. Slot 2 (the tension) is folded into slot 6 as "modest but
real", which is where `TEAM_INPUT.md` §3 requires the modest-margin position to be audible.

---

# 4. PARAGRAPH MODELS

Three real paragraphs from the rejected draft, each quoted and rewritten.

## Model A — a chapter opening (`paper_integrated.md`, Chapter 3, line 136, first four sentences)

**Ours:**

> "No published funnel converts interest into teachers at the rate its designers assumed, though the
> leak sits at a different point in each. Where interest was gathered broadly and unconditionally, the
> fall-off runs to an order of magnitude or more: England's pilot turned 5 729 registrations into 354
> supported returners and 27 permanent posts in its target subjects. Where the eligible pool was
> narrow and pre-qualified, nearly everyone who came forward was taken, 145 placements from over 260
> expressions of interest in New South Wales and 63 acceptances from 79-80 applications in Portugal,
> but too few came forward to fill the places on offer, Portugal's 63 against a quota of 200.
> Awareness is nowhere the scarce resource; conversion is scarce at one end of that range and a
> willing pool at the other."

**In the corpus voice:**

> Re-entry policy is designed as though the scarce resource were the willingness of former teachers to
> come back. The record says otherwise. Wherever a full account has been published, interest was
> abundant and conversion into an appointment was not: broad, open invitations attracted registrations
> by the thousand and produced appointments by the dozen, while narrowly targeted approaches converted
> almost everyone who came forward but reached too few people to fill the places on offer (Table 3.1).
> The binding constraint sits on the school side of the transaction: the hiring calendar, the
> availability of part-time posts and the absorptive capacity of schools. This chapter examines the
> instruments through which education systems have tried to move it.

*What changed and why.* The three national funnels, which were the grammatical subjects of two
sentences and carried nine numerals, became rows of Table 3.1, and their shape is now rendered as
magnitude in words ("by the thousand… by the dozen"), which satisfies R2, R10 and R12 and leaves the
chapter's governing claim standing if any single case is struck. The paragraph now opens on a
proposition about a policy assumption rather than on a hedged summary of the evidence, and ends on a
mechanism plus a roadmap clause instead of on a restatement — the corpus's claim → evidence →
implication order.

## Model B — a body paragraph (`paper_integrated.md`, §2.1, line 78, first four sentences)

**Ours:**

> "England illustrates what these rates look like inside one workforce over time. Around 10% of
> teachers left the state-funded sector in most years through to the mid-2010s, a stability that sits
> oddly against survey headlines about intended departures (Worth, Bamford and Durbin, 2015). In
> 2023/24, 40 800 full-time-equivalent teachers left, 9.0% of the qualified workforce, while 41 700
> entered in 2024/25, of whom 17 000 (41%) were newly qualified; the Department for Education notes
> that returners rose while every other entrant category fell (Department for Education, 2025a). Exit
> and re-entry are thus not exceptional events in England but large, recurring flows through a
> workforce of roughly 450 000 full-time equivalents."

**In the corpus voice:**

> Exit and re-entry are not exceptional events in a teacher workforce; they are large, recurring and
> roughly balanced flows. In the systems with long administrative series, the annual outflow has been
> close to one teacher in ten for a decade or more, and the inflow that replaces it is made up as much
> of returners and transfers as of newly qualified entrants (Figure 2.1). In England, for example,
> where the series is longest, returners rose in the most recent year while every other category of
> entrant fell (Department for Education, 2025a). Survey headlines about intended departures should
> therefore be read against this stability, not in place of it.

*What changed and why.* The paragraph's proposition, which sat in the last sentence, is now the first,
so the claim is assertable across systems and not merely about England (R24); England drops into a
fronted circumstantial adjunct behind "for example", supplying the one detail the claim needs, and the
five workforce counts move to a figure, taking the paragraph from six numerals to zero (R11, R12, R17).
Four sentences, mean sentence length 22 words.

## Model C — a recommendation (`paper_integrated.md`, §4.1, recommendation 5, line 301, first three sentences)

**Ours:**

> "**5. Pension penalties suppress return; targeting need controls cost better than stacking
> screens.** The revealed-preference evidence is consistent. North Carolina's 1999-2009 window, full
> salary on top of full pension, drew around 3 500 retirees back, disproportionately into high-need
> schools, and returns collapsed when it closed (Jarrold-Grapes and Mahler, 2024; Box 3.5); Georgia's
> stacked conditions of 30 years' service, a one-year wait and subject and region caps yield roughly
> 350 full-time rehires a year against some 6 000 unfilled or under-certified posts, by the state
> auditor's own count (Georgia Department of Audits and Accounts, 2025); New Mexico's no-caps regime
> drew 154 users in its first year (New Mexico Educational Retirement Board, 2023; see Table 3.2)."

**In the corpus voice:**

> **Remove the pension penalty before adding a bonus.** Where a retiree can hold a full-time post
> without losing pension income, a substantial minority of the retirement-eligible return, and they go
> disproportionately to the schools that struggle most to hire. Where eligibility screens are stacked —
> a long service threshold, a waiting year and a centrally defined shortage list — rehires fall to a
> fraction of one per cent of the workforce, and a large share of employers report a hire the rules
> prevented them from making (Table 3.2). Policy makers can control the cost of re-employment by
> conditioning it on need rather than by multiplying the conditions of entry.

*What changed and why.* The numbered declarative label became a bare imperative of the WP 347 kind,
which is the one place the corpus permits imperatives (R37), and the three named jurisdictions
collapsed into a single contrast between two *rule designs*, with all eleven numerals delegated to
Table 3.2 — taking the section from 37.3 numerals per 1 000 words towards the corpus's 0.0 (R9). The
advice itself is framed with `can` rather than asserted as a finding, which is the corpus's dominant
recommendation grammar at 4.7 uses of `can` for every `should` (R33).

---

# 5. HOW CASES MUST BE USED

## The demotion rule

**A case may answer a proposition. It may never raise one.** Operationally, four tests, all binary,
all applied to every paragraph that names a country:

1. **The claim exists before the country does.** A general proposition, stated with a scope adverbial
   and a plural institutional subject, occupies an earlier sentence in the same paragraph.
2. **The country is grammatically subordinate.** It sits in a fronted adjunct or behind an explicit
   evidential marker — *for example*, *for instance*, *such as*, *including*, *notably*, *by
   contrast*, *in [Country] alone*. It is not the subject of the sentence and never the subject of
   the paragraph's first sentence.
3. **The deletion test passes.** Strike every sentence naming a country. The paragraph must still make
   a complete, defensible statement. If it collapses, the proposition was never written.
4. **The country carries the numbers; the claim carries none.** WP 347's workforce-diversity paragraph
   is the template: sentences 1–2 general and number-free, sentences 3–5 country-specific and
   number-bearing.

Plus the length and relocation rule (R18) and the disclaimer. **Add to the methods note the
paragraph WP 342 writes and then lives up to:** the examples "should not be interpreted as
representative of the national system, but as illustrative of a particular type of pathway… the
framework and examples do not aim to categorise countries or systems" (p. 19).

And one structural consequence the lead author's charge (2) really demands: **Chapter 3 cannot be
organised as a tour.** WP 342 built a four-criterion typology and derived eight pathway types; WP 347
built six questions and nine design aspects; EPO 2024 headed its shortage chapter with policy levers
as gerunds — "Reducing barriers to entering the profession / **Supporting re-entry of teachers who left
the profession** / Addressing targeted shortages / Proposing alternative pathways". Our §3.1's four
design families are the right spine. What must change is that each family becomes an **argument about
a design choice**, with countries filling the type, rather than a bin into which national narratives
are sorted.

## Worked example: turning a case-led passage into an argument-led one

**Ours** (`paper_integrated.md`, §3.2, line 254) — a country as bare subject, a standalone national
description, the proposition never stated:

> "Georgia demonstrates the opposite pole, restrictive design audited honestly. House Bill 385 of 2022
> lets retirees teach full time with full pension, but only after 30 years of creditable service and a
> one-year break, and only in the highest-need subject areas of each region as determined annually by
> the state. The mandated performance audit found 635 retirees returned full-time between fiscal years
> 2023 and 2025, about 350 in any given year, under 1% of a roughly 125 000-strong workforce facing
> some 6 000 vacant or under-certified posts; 45% of surveyed districts said the statutory screens had
> blocked a hire they wanted to make. The legislature's response in 2026 was to extend the programme
> to 2030 and let districts determine their own high-need areas, while keeping the 30-year rule."

**Argument-led, same case, same evidence:**

> Eligibility screens are additive in law and multiplicative in effect. A rule that permits return in
> principle can suppress it in practice once a service threshold, a mandatory break and a list of
> eligible subjects apply in sequence: a candidate must clear all three, and each is set independently
> of the others. In Georgia, for example, where the statute required its own performance audit,
> full-time rehires have stayed below one per cent of the workforce, and almost half of surveyed
> districts reported a hire the screens had prevented (Table 3.2). The legislative response is
> instructive: the screen that was relaxed was the locally held one, while the centrally set service
> threshold stayed.

*(Four sentences, mean 28 words, zero numerals. The statute's design and its audited take-up sit in
Table 3.2; the section-by-section legal detail sits in the annex. Note that the country is named — the
corpus names countries constantly — but it is named inside a "for example" frame, after the claim, and
the claim survives its deletion.)*

**What this buys.** The proposition — screens compound — is now the paragraph's subject and survives
the deletion of the case (test 3). The case is introduced by "for example" (test 2), after the claim
(test 1), and carries the evidence while the claim carries no numerals (test 4). The paragraph is four
sentences and zero numerals, against four sentences and eleven. Most importantly, the same paragraph
can now be paired with the opposite design in a contrast sentence — "where the penalty is removed
outright… where screens are stacked…" — which is a *comparison* in the sense `TEAM_INPUT.md` §5
requires: it names the institutional feature doing the causal work, rather than setting two national
numbers side by side.

---

# 6. WHAT TO DO WITH THE NUMBERS WE HAVE

Our research base is rich in verified programme statistics. That is an asset for the tables and a
liability for the prose. The corpus's own answer is unambiguous: **OECD does not run programme funnels
through the argument.** The one genuine recruitment funnel in prose anywhere in 25 000 words of body
text across four publications is Austria's *Quereinstieg* count in EPO 2024, and it sits inside a
bulleted country example. WP 347 does not describe its programmes in prose at all — it builds Annex B
and introduces it with a three-sentence, zero-numeral paragraph.

## Placement table

| Kind of number we hold | Examples from our base | Where it goes | What the prose may say |
|---|---|---|---|
| **Programme funnels** (registered → supported → placed) | England 5 729 / 354 / 27; NSW 1 500 / 260 / 145; Portugal 200 / 79–80 / 63; Netherlands 500 / <200 | **Table 3.1**, one row per programme, stages as the authority itself reported them | The *shape* of the fall-off, in words, plus a display reference. Never a stage count. |
| **Programme design parameters** (grant amounts, waiting periods, service thresholds, day caps, quotas) | EUR 2 500; 30 years' service; 90-day layout; 50 days; CNY 20 000 | **Annex table** (columns: system, instrument, waiting period, screens, pension treatment, published take-up) | Nothing, except at most **two** numerals for a single programme, and only the instrument's *price or reach* — never its outcomes. Corpus precedent: England GBP 30 000 / GBP 6 000; Finland EUR 23 million / 2 500 schools; Netherlands EUR 25 000. |
| **Audited take-up counts** | Austria 1 062; Georgia 635; North Carolina ~3 500; New Mexico 154; China 20 000+ | **Table 3.2** and **Table 4.1** | One magnitude in words, or two countries as the **endpoints of a range**, once per chapter. |
| **Reserve and stock counts** | Netherlands 62 000; England 260 000; Michigan 61 252; Australia 19% of 553 300 | **Table 2.1** (already built) | "In the systems that can count them, the inactive pool runs to several times the measured shortage (Table 2.1)." |
| **OECD comparative indicators** (attrition, resignation share, shortage reports) | 6.5%; 51%; 47% up from 29% | **Figure**, with the OECD average and the two extremes | Verbalised: "around half", "roughly one teacher in fifteen", "close to one in ten" — then the figure reference. |
| **Effect sizes from randomised trials** | +0.34 tutoring; 0.13 / 0.16 reading; null on mentoring | **Body prose**, once each, attached to its citation | Permitted — this is the corpus's "reports a study's result" category. One effect size per claim, never in Chapter 4. |
| **Costs and cost-effectiveness** | GBP 37 400 per additional returner; GBP 5 400; USD 171 per pupil | **Box**, with the evaluation's own caveats | At most one, as the instrument's price, and only where the evaluation is the point. |
| **Survey composition and response rates** | Michigan 17 551 of 59 433, 30% response | **Box** (methods), never the introduction | Nothing. Corpus: EPP 122's Box 1 carries four numerals in one sentence *precisely so the argument never has to*. |
| **Stated-motive shares** | 33% named higher pay; 45% of districts blocked a hire | **Figure or box** | "almost half of surveyed districts", "a third of respondents" — words, then the display. |

## Sentence patterns for pointing at a display instead of reciting it

All six are corpus forms. Use the terminal parenthesis by default; it is the dominant shape.

1. **Terminal parenthesis, no numeral.**
   "SCTs are significantly more likely than first-career teachers to hold short fixed-term contracts
   (Figure 7)." → *"Programmes that tie funded support to a named vacancy convert a far higher share of
   their intake than those that do not (Table 3.1)."*
2. **Lead-in clause.**
   "As Figure 7 shows, …" / "As illustrated in Figure 2, …" → *"As Table 3.2 shows, the systems with
   the fewest eligibility screens record the largest returns."*
3. **Verbal quantity + display.**
   "around half report participating in formal induction programmes… (see Figure 8)" → *"Around a
   third of entrants to English state schools are returners (Figure 2.1)."*
4. **Superlative or directional claim, magnitude delegated.**
   "the most significant and widespread decline was observed in…(see Figure 6)" → *"The largest single
   gap between an announced target and a verified count occurs where the target was set before the
   pool was measured (Table 3.1)."*
5. **Colon-gloss: claim first, count as apposition.**
   "Most OECD countries have established formal pathways…: 16 out of 28 countries and economies with
   available data report dedicated routes…" → *"Most of the measures compiled here have never been
   counted: of the initiatives verified as in force, nine have no published take-up figure at all
   (Table 4.1)."*
6. **Range endpoints, three numerals maximum.**
   "from 36% in Iceland to below 5% in Japan, Türkiye and Korea" → use this and only this when two
   countries must be named in a numeric sentence.

## Two refusals the corpus authorises and we should use

- **Refuse to quantify what is methodologically contested, and say why.** WP 347, p. 7, declines to
  size the teacher shortage: "Measuring them is not straightforward – countries use different
  methodologies and observe shortages at different stages of the recruitment process". Our funnel
  stages are not comparable across programmes; say so once, in the note to Table 3.1, and stop
  comparing them in prose.
- **Report qualitative evaluation findings qualitatively.** EPP 122 reports the Finnish tutor
  programme as showing "broad availability… and a positive self-reported impact" where a weaker paper
  would have manufactured an effect size. Where our source gives an impression, we write an
  impression.

---

# 7. PRE-FLIGHT CHECKLIST

Run before declaring a chapter done. Every item is binary. Items marked **[script]** are produced by
`python3 research/voice_check.py <draft.md>`.

**Numbers**
- [ ] **[script]** Numerals per 1 000 words in this chapter's body prose is **between 4 and 8**
      (absolute ceiling 15). Front matter 0.0. Conclusions and recommendations 0.0.
- [ ] The first two paragraphs of the chapter contain **no numeral**.
- [ ] No section-opening sentence in this chapter carries a statistic.
- [ ] Every numeral in the chapter either (a) has its magnitude stated in words in the same or the
      preceding sentence, or (b) ends in a display reference. No exceptions.
- [ ] At least **70%** of this chapter's Table/Figure/Box-referencing sentences carry **no numeral**.
- [ ] No display reference is accompanied by more than **three** numerals.
- [ ] No participant funnel, no survey response rate, no programme parameter and no cost figure
      appears in running prose. Confirm each is in a table, box or annex.

**Cases**
- [ ] **[script]** Paragraphs opening with a country in the first twelve words: **≤ 4%**.
- [ ] **[script]** Paragraphs naming a country anywhere: **≤ 35%**.
- [ ] No heading in this chapter names a country.
- [ ] Every country-naming paragraph passes the deletion test: strike the country sentences and the
      paragraph still makes a complete claim.
- [ ] Every country is introduced by an explicit evidential marker and is not the subject of its
      sentence.
- [ ] No country mention in prose exceeds one sentence / 40 words; no bullet exceeds 60 words.
- [ ] Every box passes the deletion test and is titled *category first, country after the colon*.
- [ ] No section ends on a country.

**Paragraphs and sentences**
- [ ] **[script]** Mean sentences per paragraph **3.8–4.3**, median 4; **no paragraph over eight
      sentences**; at least **20%** of paragraphs of one or two sentences.
- [ ] **[script]** Mean sentence length **≤ 26 words**, median **≤ 24**.
- [ ] Every paragraph's first sentence is assertable on its own. Read the chapter's first sentences in
      sequence: they must form a coherent argument.
- [ ] Every evidence paragraph ends on a pivot, a qualification or an implication — not on a number.

**Headings and scaffolding**
- [ ] Every heading is topical or interrogative; none is a filing label ("Programmes", "Regulation").
- [ ] Every section heading is followed immediately by a **bolded propositional lede sentence**.
- [ ] At least half of this chapter's load-bearing propositions use the **X, not Y** frame.

**Recommendations and hedging** (Chapter 4 only)
- [ ] Zero numerals.
- [ ] **[script]** `can` : `should` between 3:1 and 6:1; `need to` present; `must` used at most three
      times and only for guardrails.
- [ ] Zero occurrences of "may wish to", "ought to", "we recommend", "it is recommended", "this paper
      recommends".
- [ ] The actor of every recommendation is "policy makers" or "education systems"; "governments" is
      not addressed.
- [ ] Bare imperatives appear only as bold take-away leads.
- [ ] The chapter contains three named blocks in this order: what the evidence supports / what the
      evidence does not yet tell us / considerations for policy and practice — with the gap block
      **between** the findings and the recommendations.
- [ ] Where the evidence is thin, the voice is lowered ("should consider", "could benefit from",
      "promising"), not raised.

**Front matter** (once, before submission)
- [ ] Abstract: 140–165 words, 6–7 sentences, 0 numerals, 0 country names, "This policy paper…" at
      sentence 3, last sentence forward- and reader-facing.
- [ ] Key take-aways box: 0 numerals, 0 country names, bold lead + one-to-three-sentence elaboration
      per bullet, grouped under three headings.
- [ ] Every structural count in the front matter is spelled as a word.
- [ ] The methods note carries the WP 342 disclaimer that the examples illustrate types and do not
      categorise countries.
