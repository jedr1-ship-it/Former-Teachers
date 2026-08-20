I ran ~20 searches and pulled the primary sources (PNAS/Reinhart, Herbold et al., Desaire et al., the Biber-feature replication, the news-text corpus study, the em-dash measurement paper, GPTZero's own docs, plus practitioner analyses). Here is the protocol.

---

# MECHANICAL AUDIT PROTOCOL — Syntactic Signature of LLM Prose

**How to run it.** Work on a ≥500-word extract. Compute rates **per 1,000 words** unless stated. Almost no source gives an absolute human/AI cut-off for a single feature — the literature is consistent that *no single syntactic feature separates human from LLM text* ([systematic feature analysis](https://arxiv.org/pdf/2606.04177); [Reinhart et al.](https://arxiv.org/pdf/2410.16107)). What is diagnostic is **stacking**: many templates at once, at uniform density. Gladd's spaCy method quantifies exactly this — rhetorical-strategy density of ~2.83 per 1,000 words in human prose vs ~26.7 in AI prose, template-pressure 0.353 vs 6.31. Treat that ratio (roughly **10×**) as the governing signal; individual checks below are inputs to it.

Where I give a multiplier, it is from a measured corpus. Where I say "no threshold published," do not invent one.

---

## TIER 1 — Strongest measured effects (largest effect sizes, replicated)

**1. Trailing present-participial clause** — *the single largest measured syntactic gap.*
- **D:** regex `,\s+(?:\w+ly\s+)?\w+ing\b[^.!?]{5,}[.!?]` — comma + `-ing` clause closing a sentence. Also `,\s+(?:highlighting|reflecting|underscoring|emphasizing|marking|signaling|showcasing|demonstrating|ensuring|allowing|making|creating|leaving|offering|revealing|shaping|driving|fostering)\b`.
- **Threshold:** GPT-4o uses present participial clauses at **5.3× the human rate (paired Cohen's d = 1.38)**; instruction-tuned LLMs generally 2–5×. No absolute per-1,000 human baseline is published, so audit **relatively**: count them, then cut to ~1/5 of the current number.
- **H:** Delete it (it usually restates the main clause), or promote it to its own sentence with a concrete subject: *"…, highlighting the need for reform"* → *"Reformers have argued this for a decade."*
- **S:** [Reinhart et al., PNAS 2025](https://www.pnas.org/doi/10.1073/pnas.2422455122) / [arXiv](https://arxiv.org/pdf/2410.16107); [Wikipedia: Signs of AI writing](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing).

**2. Nominalisation density**
- **D:** `\b\w{4,}(?:tion|sion|ment|ness|ity|ance|ence|ism|ancy|ency)s?\b` per 1,000 words.
- **Threshold:** LLMs at **1.5–2.1× human** (GPT-4o 2.1×, d = 1.23). Essay corpus: humans 1.06/essay, ChatGPT-3 1.56 (d = 0.88), ChatGPT-4 1.73 (d = 1.35).
- **H:** Convert to finite verbs. *"the implementation of the policy led to a reduction in…"* → *"the policy reduced…"*
- **S:** [Reinhart et al.](https://arxiv.org/pdf/2410.16107); [Herbold et al., Sci Rep 2023](https://pmc.ncbi.nlm.nih.gov/articles/PMC10616290/).

**3. "That"-clause as grammatical subject / extraposed frame**
- **D:** `^That\b[^,]{5,80},`; `\bThe fact that\b`; `\bIt is (?:important|worth|clear|evident|notable|essential|crucial) (?:to note |noting )?that\b`; `\bWhat (?:is|makes|matters)[^,]{3,40} is that\b`.
- **Threshold:** **2.6× human (d = 0.77)** in GPT-4o; 180–331% of human rates across instruction-tuned models.
- **H:** State the proposition directly. *"It is important to note that X"* → *"X."*
- **S:** [Reinhart et al.](https://arxiv.org/pdf/2410.16107); [Interpretable Stylistic Variation, arXiv 2026](https://arxiv.org/html/2604.14111v1).

**4. Phrasal coordination (X and Y inside the noun/adjective phrase)**
- **D:** `\b\w+ (?:and|or) \w+\b` where both conjuncts are same-POS modifiers; count per clause. Manual proxy: doubled adjectives/nouns — *"clear and consistent," "growth and development."*
- **Threshold:** **1.9× human (d = 0.81)**; 144–194% of human rate. Corroborated: coordinate phrases per clause, ChatGPT 0.439–0.780 vs native speakers 0.069–0.154 (**3–7×**).
- **H:** Pick one word. Doubling is almost always redundant.
- **S:** [Reinhart et al.](https://arxiv.org/pdf/2410.16107); [PLOS One 2025, syntactic complexity by rhetorical stage](https://pmc.ncbi.nlm.nih.gov/articles/PMC12316247/).

**5. Complex-nominal density (stacked pre/post-modified noun phrases)**
- **D:** Complex nominals per clause (L2SCA metric), or count NPs with ≥2 modifiers.
- **Threshold:** ChatGPT **1.787–2.605** vs native speakers **0.910–1.206** — roughly **2×**.
- **H:** Break the NP into a clause with a verb.
- **S:** [PLOS One 2025](https://pmc.ncbi.nlm.nih.gov/articles/PMC12316247/).

**6. Sentence-length variance (burstiness) — measure it correctly**
- **D:** Compute (a) SD of sentence length in words, (b) mean absolute difference between *consecutive* sentences, (c) count of sentences **<11 words**, (d) count **>34 words**. All four are higher in human academic prose.
- **Threshold:** Desaire et al. give direction but **no numeric cut-offs**. The most mechanical usable rule from that paper: in any 20-sentence stretch, human academic prose contains **both** a sentence under 11 words and one over 34; LLM text often contains neither. **Caution:** the widely circulated figures (human SD 8.2 vs GPT-4o 4.1 words; burstiness 0.6–1.2 vs 0.2–0.4) appear only in vendor marketing blogs and I found **no peer-reviewed source for them** — do not rely on them.
- **H:** Insert genuine short sentences. Not "punchy" fragments — short *declarative* sentences that carry content.
- **S:** [Desaire et al., Cell Rep Phys Sci 2023](https://pmc.ncbi.nlm.nih.gov/articles/PMC10328544/); [contrasting linguistic patterns in news text](https://pmc.ncbi.nlm.nih.gov/articles/PMC11422446/) (LLMs cluster in the 10–30 token band; humans have a wider, more scattered distribution).

**7. Burstiness ≠ sentence length — read the fine print**
- **D:** GPTZero's *burstiness* is **variation in per-sentence perplexity**, not sentence length. GPTZero publishes **no threshold for burstiness** ("no set threshold"), publishes only a soft perplexity heuristic ("perplexity above 85 is more likely than not human," with "no absolute scale"), and states it **stopped using perplexity and burstiness in autumn 2023**.
- **H:** Do not optimise a draft against burstiness numbers; they are deprecated by their own originator, model-dependent, unavailable for closed models, and biased against ESL writers.
- **S:** [GPTZero: what is perplexity & burstiness](https://gptzero.me/news/perplexity-and-burstiness-what-is-it/); [GPTZero support: interpreting scores](https://support.gptzero.me/articles/9585228410-how-do-i-interpret-burstiness-or-perplexity); [Pangram: why perplexity and burstiness fail](https://www.pangram.com/blog/why-perplexity-and-burstiness-fail-to-detect-ai).

**8. Clause count per sentence, and its uniformity**
- **D:** Clauses per sentence, mean and SD.
- **Threshold:** humans **1.81**, ChatGPT-3 **2.31** (d = 0.93), ChatGPT-4 **2.08** (d = 0.54). Separately, ChatGPT's syntactic complexity shows **lower variability across all measures** — the uniformity is more diagnostic than the mean.
- **H:** Let some sentences carry one clause and some carry four.
- **S:** [Herbold et al.](https://pmc.ncbi.nlm.nih.gov/articles/PMC10616290/); [ArguGPT](https://arxiv.org/abs/2304.07666).

**9. Paragraph-length uniformity**
- **D:** SD of words per paragraph; SD of sentences per paragraph.
- **Threshold:** direction only — sentences/paragraph and words/paragraph are **higher in humans**, and the **SD of words per paragraph is described as "highly predictive"** of human authorship. No number given. Practical flag: every paragraph 3–5 sentences with no one-sentence and no ten-sentence paragraph.
- **H:** Allow a one-sentence paragraph and a long one in the same piece.
- **S:** [Desaire et al.](https://pmc.ncbi.nlm.nih.gov/articles/PMC10328544/).

**10. Negative parallelism — "not X, but Y" / "not just X, but Y" / "It's not X, it's Y"**
- **D:** `\bnot (?:just|only|merely|simply)\b[^.!?]{0,80}\bbut\b`; `\b(?:it'?s|this is|that'?s|they'?re) not\b[^.!?]{0,60}(?:—|--|;|,)\s*(?:it'?s|it is|but)\b`; `\bnot (?:a|an|the)\b[^.!?]{0,40}\bbut (?:a|an|the)\b`.
- **Threshold:** none published as a rate. The Washington Post's analysis of **328,744 ChatGPT messages** identifies the "Not just X, but Y" pivot as a persistent structural habit across model generations; Wikipedia lists both variants as core signs. Practitioner consensus: one per piece is rhetoric, ten is a tell.
- **H:** Assert Y and drop X entirely. If the contrast matters, name who held the X view.
- **S:** [Washington Post: how to detect ChatGPT text](https://www.washingtonpost.com/technology/interactive/2025/how-detect-chatgpt-em-dash/) (paywalled; see [Boston Globe summary](https://www.bostonglobe.com/2025/11/13/business/chatgpt-writing-style-clues/)); [Wikipedia: Signs of AI writing](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing); [Gorrie, "Why ChatGPT writes like that"](https://www.deadlanguagesociety.com/p/rhetorical-analysis-ai).

**11. Tricolon / rule of three**
- **D:** `\b(\w+), (\w+),? and (\w+)\b` for same-POS triples; also three coordinated clauses or phrases. Count per 1,000 words.
- **Threshold:** no published human baseline rate. Measured as elevated in LLM output; the diagnostic is **stacking and the filler third beat** — a third item that adds nothing.
- **H:** Cut to two, or extend to four (four breaks the template). Delete any item that is a synonym of another.
- **S:** [Gorrie](https://www.deadlanguagesociety.com/p/rhetorical-analysis-ai); [Wikipedia](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing); [Freeburg, "The Last Fingerprint"](https://arxiv.org/pdf/2603.27006).

**12. Copula avoidance (pseudo-verbs for "is")**
- **D:** `\b(?:serves as|stands as|functions as|represents|marks|emerges as|constitutes|remains|continues to be|acts as|reflects|embodies|underscores|stands out as)\b`.
- **Threshold:** none published; listed as a named sign.
- **H:** Write *is/was*. *"Gallery 825 serves as the exhibition space"* → *"Gallery 825 is the exhibition space."*
- **S:** [Wikipedia: Signs of AI writing](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing).

**13. Abstraction-as-agent (abstract noun subject + agentive verb)**
- **D:** Parse for subjects that are abstract nouns (`initiative|shift|approach|framework|landscape|trend|development|emergence|dynamic|phenomenon|movement|transformation`) governing verbs like `reveals|demonstrates|highlights|represents|underscores|signals|reflects|points to|speaks to`. Regex proxy: `\bThe (?:\w+ )?(?:shift|rise|emergence|growth|landscape|approach|framework|dynamic|trend) (?:\w+ ){0,3}(?:reveals|reflects|highlights|underscores|represents|signals|marks)\b`.
- **H:** Restore a human or institutional agent. *"The shift reveals a change in priorities"* → *"Councils cut the budget because priorities changed."*
- **S:** [Gladd, spaCy template analysis](https://joelgladd.substack.com/p/a-better-way-to-identify-ai-slop) (lists "abstract-noun structures" and "personification" among 16 tracked moves); related to the elevated sentence-relative and that-subject rates in [Reinhart](https://arxiv.org/pdf/2410.16107).

---

## TIER 2 — Measured, but smaller or model-dependent

**14. Sentence relatives with "which"** (`, which \w+`, especially with a whole-clause antecedent)
- **D:** count `,\s+which\b` per 1,000 words. **Overused** by LLMs (Biber f_34, among the top five overused features).
- **H:** Full stop, then a new sentence naming what "which" pointed at.
- **S:** [Interpretable Stylistic Variation, arXiv 2026](https://arxiv.org/html/2604.14111v1).

**15. Past-participial postnominal clauses ("whiz-deletion")**
- **D:** `\b(?:the|a|an|these|those) \w+ (?:based|driven|led|informed|rooted|grounded|shaped|described|observed|reported|discussed|mentioned) (?:on|by|in|above)?\b`. Biber f_27 — **overused**, contributing to the "information-dense, noun-heavy" profile.
- **H:** Relative clause with a finite verb, or a separate sentence.
- **S:** [arXiv 2026](https://arxiv.org/html/2604.14111v1).

**16. Agentless passive — the folk belief is WRONG**
- **D:** count agentless passives.
- **Finding:** GPT-4o uses agentless passive at **roughly half the human rate**; Llama base models approximate human usage. "Too many passives" is not evidence of AI.
- **H:** No action. Do not de-passivise a draft to sound human.
- **S:** [Reinhart et al.](https://arxiv.org/pdf/2410.16107).

**17. Concessive subordinators underused**
- **D:** `\b(?:although|though|even though|whereas|albeit|notwithstanding)\b` per 1,000 words. Biber f_36 **underused** by LLMs; "although" independently found **more frequent in human** academic text.
- **H:** Add real concessions with subordination, not with "However."
- **S:** [arXiv 2026](https://arxiv.org/html/2604.14111v1); [Desaire et al.](https://pmc.ncbi.nlm.nih.gov/articles/PMC10328544/).

**18. Sentence-initial "However / Moreover / Furthermore / Additionally" — CONTESTED**
- **D:** `^(?:However|Moreover|Furthermore|Additionally|Consequently|Nevertheless|In addition|Notably|Importantly)\b,` count and **position**.
- **Conflict:** the folk claim (LLMs overuse these) is *not* supported by two of the strongest corpus studies: Desaire found **"However" more frequent in human** academic writing; Herbold found ChatGPT-4 used **fewer** discourse markers than humans (0.36 vs 0.57, d = 0.98). One cross-domain feature study does report discourse markers discriminating reliably, without direction. **Do not audit on raw count.**
- **What survives:** *positional regularity* — the same connective occupying the same slot (paragraph-initial) in successive paragraphs. Check the sequence of paragraph-opening words for a repeating template.
- **H:** Bury the connective mid-sentence, or drop it and let the logic carry.
- **S:** [Desaire et al.](https://pmc.ncbi.nlm.nih.gov/articles/PMC10328544/); [Herbold et al.](https://pmc.ncbi.nlm.nih.gov/articles/PMC10616290/); [systematic feature analysis](https://arxiv.org/pdf/2606.04177).

**19. Hedging and modality — CONTESTED, direction flips by genre**
- **D:** `\b(?:may|might|could|can|would|should)\b` and `\b(?:suggest|indicate|appear|seem|tend to|potentially|generally|typically|often|likely)\b`.
- **Conflict:** Herbold measured humans using **more** modals (10.84 vs GPT-4's 6.12, d = 1.08) and **more** epistemic markers (0.06 vs 0.00, d = 1.53) in essays. Other corpus work reports AI-generated text with **higher** hedging counts. Genre-dependent; **no reliable threshold exists.**
- **What survives:** *hedge stacking* — two hedges on one proposition (`\b(?:may|might|could) (?:potentially|possibly|perhaps)\b`, `\bcan help to\b`, `\bmay serve to\b`, `\bcould potentially\b`). This is a style rule, not a measured marker; I found no corpus study quantifying it.
- **H:** One hedge or none. *"may potentially contribute to"* → *"may cause"* or *"causes."*
- **S:** [Herbold et al.](https://pmc.ncbi.nlm.nih.gov/articles/PMC10616290/); [EFL linguistic fingerprints study](https://www.sciencedirect.com/science/article/pii/S2666799124000236).

**20. Em dash — real but weak alone**
- **D:** count `—` per 1,000 words.
- **Threshold:** measured **human baseline 3.23/1,000 words** (mean over 57,232 words of published essays), but human range spans **0.33 to 17.12**. GPT-4.1: **10.62**; Claude Opus 4.6: **9.09**; DeepSeek V3: **6.95**; Gemini 2.5 Pro: 3.53; Gemini 2.5 Flash: 1.28; Llama: **0.00**; GPT-5.4: 1.43. The authors state explicitly that several LLMs fall **inside** the human range, so em-dash count alone is **not** diagnostic. Population-level rises are measurable in medRxiv and ecology abstracts, but that is a corpus statistic, not a per-document test.
- **H:** Convert to comma, colon, full stop, or parentheses in roughly half the cases. Don't eliminate them; zero em dashes is itself a Llama signature.
- **S:** [Freeburg, "The Last Fingerprint"](https://arxiv.org/pdf/2603.27006); [Em-ergence of the em-dash (medRxiv preprints)](https://arxiv.org/abs/2606.29540).

**21. Missing "human" punctuation**
- **D:** presence/absence of `)`, `;`, `:`, `?`, `-` in the document.
- **Threshold:** each of these is **more likely present in human** academic text; the apostrophe is more likely in ChatGPT text. Binary presence features, no rates published.
- **H:** Ask a real question. Use a parenthesis for a genuine aside. Use one semicolon.
- **S:** [Desaire et al.](https://pmc.ncbi.nlm.nih.gov/articles/PMC10328544/).

**22. Absence of numbers and specifics**
- **D:** `\b\d` count; also proper nouns, dates, citations.
- **Threshold:** direction only — human academic text is more likely to contain numbers and "et [al.]". Editors' guidance independently flags "generic framing" and claims not tied to specific evidence.
- **H:** Replace every "significant," "substantial," "numerous" with a figure.
- **S:** [Desaire et al.](https://pmc.ncbi.nlm.nih.gov/articles/PMC10328544/); [COPE: suspected AI-generated manuscripts](https://publicationethics.org/guidance/case/suspected-ai-generated-manuscripts).

**23. Constituent geometry: long constituents inside short sentences**
- **D:** parse; compare NP/VP/PP/SBAR proportions.
- **Threshold:** human NP **42.91%** vs LLM 39.96–41.42%; human VP **18.08%** vs LLM 20.02–20.59%; human PP **14.12%** vs LLM 12.62–12.94%; human SBAR **3.64%** vs LLM 4.09–4.34%. LLMs produce **longer constituents despite shorter sentences**, and humans show higher dependency-distance optimality (Ω).
- **H:** Shorten the phrase, lengthen the sentence — the opposite of the LLM profile.
- **S:** [Contrasting Linguistic Patterns in Human and LLM-Generated News Text](https://pmc.ncbi.nlm.nih.gov/articles/PMC11422446/).

**24. Pronoun and auxiliary inflation**
- **D:** POS rates. LLM pronouns **6.11–7.33%** vs human **5.32%**; LLM auxiliaries **5.41–6.02%** vs human **3.81%**. Humans use more nouns (19.69% vs 17.44–17.85%) and adjectives (7.58% vs 6.69–6.86%).
- **H:** Replace auxiliary-heavy periphrasis ("is able to," "has been shown to," "will be conducting") with simple finite verbs.
- **S:** [news-text corpus study](https://pmc.ncbi.nlm.nih.gov/articles/PMC11422446/).

**25. Wh-relatives as object and pied-piping underused**
- **D:** `\b(?:whom|in which|to which|of which|for which|through which|within which)\b`. Biber f_32 and f_33 — both **underused** by LLMs.
- **H:** Use one where it fits naturally.
- **S:** [arXiv 2026](https://arxiv.org/html/2604.14111v1).

**26. Synthetic negation underused**
- **D:** `\bneither\b|\bnor\b|\bno (?:such|other|amount)\b`. Biber f_66 — **underused**.
- **H:** *"There were no exceptions"* rather than *"There were not any exceptions."*
- **S:** [arXiv 2026](https://arxiv.org/html/2604.14111v1).

**27. Sentence-initial discourse particles underused**
- **D:** `^(?:Well|Now|So|Anyway|Look|Right)\b,`. Biber f_50 — **suppressed** in LLM text.
- **H:** In non-academic registers, allow one.
- **S:** [arXiv 2026](https://arxiv.org/html/2604.14111v1).

**28. Contractions — the folk rule is OBSOLETE and INVERTED**
- **D:** `\b\w+'(?:s|t|re|ve|ll|d)\b`.
- **Finding:** Biber f_59 (contractions) is now among the **top overused** LLM features; ChatGPT's contraction use rose sharply, using "you're"/"it's" in nearly a third of chats by mid-2025; and apostrophe presence was already **higher in ChatGPT** than humans in 2023 academic text. "No contractions = AI" is wrong and has been for years.
- **H:** No action.
- **S:** [arXiv 2026](https://arxiv.org/html/2604.14111v1); [Washington Post analysis](https://www.washingtonpost.com/technology/interactive/2025/how-detect-chatgpt-em-dash/); [Desaire et al.](https://pmc.ncbi.nlm.nih.gov/articles/PMC10328544/).

**29. Appositives — folk claim NOT supported**
- **D:** count `appos` dependencies (`, a \w+ (?:at|of|in) ,`).
- **Finding:** LLMs use **fewer** appositional modifiers (`appos`) and fewer adjectival modifiers (`amod`) than humans in news text. Meanwhile a *formulaic* appositive frame ("Dr. X, a researcher at Y University, found…") is flagged by annotators as slop. So: **low appositive rate + one repeated appositive template** is the pattern, not high rate.
- **H:** Vary how you introduce people; don't use the same appositive frame twice.
- **S:** [news-text corpus study](https://pmc.ncbi.nlm.nih.gov/articles/PMC11422446/); [Measuring AI Slop in Text](https://arxiv.org/html/2509.19163v1).

**30. Lexical diversity / elegant variation — direction flips, audit qualitatively**
- **D:** MTLD, TTR.
- **Conflict:** humans 95.72 vs ChatGPT-3 **75.68** (d = 1.06, LLM lower) but ChatGPT-4 **108.91** (d = −0.60, LLM higher); ChatGPT 118 vs L2 students 66.56 (LLM higher); human 96.51 vs all tested open models 57.37–94.56 (human higher). Direction depends on model generation and on whether the human comparison group is expert or L2. **No usable threshold.**
- **What survives:** *referential drift* — a key term swapped for synonyms across a paragraph ("the policy" → "the measure" → "the initiative" → "the framework"). This is the structural artefact of repetition penalties; I found **no corpus study quantifying it**, so treat it as an unmeasured heuristic.
- **H:** Repeat the key noun. Technical prose should repeat terms exactly.
- **S:** [Herbold et al.](https://pmc.ncbi.nlm.nih.gov/articles/PMC10616290/); [Frontiers in Education 2025](https://www.frontiersin.org/journals/education/articles/10.3389/feduc.2025.1616935/full); [news-text study](https://pmc.ncbi.nlm.nih.gov/articles/PMC11422446/).

---

## TIER 3 — Named patterns without measured baselines (practitioner authority only)

**31. "From X to Y" range construction** — `\bfrom \w+[^.,]{0,25} to \w+\b` where the range is decorative, not enumerative. **H:** name the two things without the frame, or give the full list. **S:** [Gorrie](https://www.deadlanguagesociety.com/p/rhetorical-analysis-ai); [Wikipedia](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing).

**32. Section-closing summary sentence** — last sentence of each section restates the section. **D:** compare final sentence of each section to its opening for content overlap; flag `^(?:In (?:conclusion|summary|short)|Overall|Ultimately|Taken together)\b`. **H:** end on the last new fact. **S:** [Wikipedia](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing); [stop-slop checklist](https://dev.to/wonderlab/one-open-source-project-a-day-no-78-stop-slop-a-skill-file-that-teaches-ai-to-eliminate-its-2nci).

**33. "Despite its X, Y faces challenges…" closing formula** — `\bDespite (?:its|the|these)\b[^.]{5,60},` followed by future-facing speculation. **H:** cut the whole sentence. **S:** [Wikipedia](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing).

**34. Vague attribution** — `\b(?:in connection with|associated with|in association with|is widely regarded as|is considered|experts (?:say|argue)|has been described as|is seen as)\b`. **H:** name the agent, or use "of"/"by". **S:** [Wikipedia](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing).

**35. Participial clause that restates the main clause** — the sub-case of check 1 that is pure filler: *"The initiative represented a significant shift, marking a pivotal moment in the evolution of…"* **D:** for each trailing `-ing` clause, ask whether deleting it removes any fact. If not, delete. **S:** [Gladd](https://joelgladd.substack.com/p/a-better-way-to-identify-ai-slop).

**36. Substitutable-subject test** — for each sentence claiming importance, swap the subject for an unrelated one. If the sentence stays true, it is contentless. **S:** [stop-slop checklist](https://dev.to/wonderlab/one-open-source-project-a-day-no-78-stop-slop-a-skill-file-that-teaches-ai-to-eliminate-its-2nci).

**37. "Noun + that + verb of revelation/concealment"** — `\b(?:a|the) (?:figure|pattern|detail|gesture|silence|absence|choice|moment) that (?:conceals|reveals|betrays|hides|masks|belies|speaks to|hints at)\b`. **Evidence status: weak.** I found **no corpus study measuring this construction**. It is plausibly a surface of the measured overuse of sentence relatives (check 14) and abstraction-as-agent (check 13), but treat it as an unverified stylistic observation. **H:** say what the thing does, plainly.

**38. Markdown leakage into prose** — bold runs mid-paragraph, colon-introduced elaborations, header-like fragments, list syntax inside paragraphs, emoji (ChatGPT: ✅ used **11× more often than humans**; by July 2025 **70% of messages** carried at least one emoji). **H:** strip formatting and rewrite the sentence to carry the emphasis. **S:** [Freeburg](https://arxiv.org/pdf/2603.27006); [Washington Post](https://www.washingtonpost.com/technology/interactive/2025/how-detect-chatgpt-em-dash/).

**39. Repeated high-order n-grams / formulaic sentence frames** — extract all 5-grams, flag any occurring ≥3 times; flag repeated *syntactic* frames even where words differ. Slop annotators independently identify "formulaic sentence structures" as a top predictor; over-represented LLM patterns can occur up to ~85,000× human frequency. **H:** rewrite the second instance from scratch. **S:** [Antislop framework](https://arxiv.org/pdf/2510.15061); [Measuring AI Slop](https://arxiv.org/html/2509.19163v1).

**40. Compression-ratio repetition check** — gzip the text; a compression ratio markedly better than a comparable human sample indicates structural repetition. Used as the operational "Repetition" metric in the slop taxonomy; **no threshold published**. **S:** [Measuring AI Slop](https://arxiv.org/html/2509.19163v1).

**41. Readability inflation — weak, do not over-weight** — FKGL ChatGPT 16.61 vs students 12.12; Gunning-Fog 20.10 vs 14.18. But readability metrics are among the features that **fail to generalise** across models and domains. **S:** [Frontiers 2025](https://www.frontiersin.org/journals/education/articles/10.3389/feduc.2025.1616935/full); [systematic feature analysis](https://arxiv.org/pdf/2606.04177).

**42. Subordination depth — DIRECT CONFLICT IN THE LITERATURE** — dependent clauses per clause: ChatGPT **0.087–0.292** vs native speakers **0.422–0.509** (humans far higher). But dependent clauses per T-unit: ChatGPT **0.75** vs L2 students **0.57** (LLM higher). And SBAR proportion is slightly higher in LLM news text (4.09–4.34% vs 3.64%). The variable is the human comparison group: against **expert native writers** LLMs under-subordinate and over-coordinate; against **L2 learners** they appear to over-subordinate. **Do not audit subordination depth against an absolute number.** **S:** [PLOS One 2025](https://pmc.ncbi.nlm.nih.gov/articles/PMC12316247/); [Frontiers 2025](https://www.frontiersin.org/journals/education/articles/10.3389/feduc.2025.1616935/full); [news-text study](https://pmc.ncbi.nlm.nih.gov/articles/PMC11422446/); [ArguGPT](https://arxiv.org/abs/2304.07666).

---

## Scoring

Run checks 1–5 and 8–13 first; they carry the measured effect sizes (d = 0.54–1.38). Compute a **template density** — total Tier-1 hits per 1,000 words — and compare against Gladd's benchmark spread (**~2.8 human vs ~26.7 AI** rhetorical moves per 1,000 words). Tier 2 refines; Tier 3 is prose hygiene, not evidence.

**Two standing caveats.** (i) Every classifier in this literature degrades badly out of domain — random forests hitting 93–98% within corpus dropped to **chance (50%)** on a different corpus, and human raters manage only **61–67%** unaided. (ii) These markers are population statistics. Human academic texts were misclassified as LLM output **9.8%** of the time even in the best-controlled study. A draft that trips ten of these checks is badly written; it is not thereby proven machine-written.

---

## Sources

- [Reinhart et al., "Do LLMs write like humans? Variation in grammatical and rhetorical styles," PNAS (2025)](https://www.pnas.org/doi/10.1073/pnas.2422455122) — [arXiv full text](https://arxiv.org/pdf/2410.16107)
- [Herbold et al., "A large-scale comparison of human-written versus ChatGPT-generated essays," Scientific Reports (2023)](https://pmc.ncbi.nlm.nih.gov/articles/PMC10616290/)
- [Desaire et al., "Distinguishing academic science writing from humans or ChatGPT with over 99% accuracy," Cell Reports Physical Science (2023)](https://pmc.ncbi.nlm.nih.gov/articles/PMC10328544/)
- [Interpretable Stylistic Variation in Human and LLM Writing Across Genres, Models, and Decoding Strategies, arXiv (2026)](https://arxiv.org/html/2604.14111v1)
- [Contrasting Linguistic Patterns in Human and LLM-Generated News Text](https://pmc.ncbi.nlm.nih.gov/articles/PMC11422446/)
- [A comparative analysis of syntactic complexity in argumentative essays from a rhetorical perspective: ChatGPT vs. English native speakers, PLOS One (2025)](https://pmc.ncbi.nlm.nih.gov/articles/PMC12316247/)
- [Lexical diversity, syntactic complexity, and readability: a corpus-based analysis of ChatGPT and L2 student essays, Frontiers in Education (2025)](https://www.frontiersin.org/journals/education/articles/10.3389/feduc.2025.1616935/full)
- [ArguGPT: evaluating, understanding and identifying argumentative essays generated by GPT models](https://arxiv.org/abs/2304.07666)
- [A Systematic Analysis of Linguistic Features in AI-Generated Text Detection Across Domains and Models](https://arxiv.org/pdf/2606.04177)
- [Freeburg, "The Last Fingerprint: How Markdown Training Shapes LLM Prose"](https://arxiv.org/pdf/2603.27006)
- [Em-ergence of the em-dash: a population-level rise in em-dash frequency in medRxiv preprints](https://arxiv.org/abs/2606.29540)
- [Measuring AI "Slop" in Text](https://arxiv.org/html/2509.19163v1)
- [Antislop: A Comprehensive Framework for Identifying and Eliminating Repetitive Patterns in Language Models](https://arxiv.org/pdf/2510.15061)
- [Spotting LLMs With Binoculars: Zero-Shot Detection of Machine-Generated Text](https://www.emergentmind.com/papers/2401.12070)
- [GPTZero: What is perplexity & burstiness for AI detection?](https://gptzero.me/news/perplexity-and-burstiness-what-is-it/)
- [GPTZero Support: How do I interpret burstiness or perplexity?](https://support.gptzero.me/articles/9585228410-how-do-i-interpret-burstiness-or-perplexity)
- [Pangram: Why Perplexity and Burstiness Fail to Detect AI](https://www.pangram.com/blog/why-perplexity-and-burstiness-fail-to-detect-ai)
- [Wikipedia: Signs of AI writing](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing)
- [Colin Gorrie, "Why ChatGPT writes like that"](https://www.deadlanguagesociety.com/p/rhetorical-analysis-ai)
- [Joel Gladd, "A Better Way to Identify AI Slop"](https://joelgladd.substack.com/p/a-better-way-to-identify-ai-slop)
- [Washington Post, "How to detect text from ChatGPT?"](https://www.washingtonpost.com/technology/interactive/2025/how-detect-chatgpt-em-dash/) · [Boston Globe summary](https://www.bostonglobe.com/2025/11/13/business/chatgpt-writing-style-clues/)
- [COPE: Suspected AI-generated manuscripts](https://publicationethics.org/guidance/case/suspected-ai-generated-manuscripts)
- [Identifying ChatGPT-generated texts in EFL students' writing: linguistic fingerprints](https://www.sciencedirect.com/science/article/pii/S2666799124000236)
- [stop-slop: a skill file that teaches AI to eliminate its own writing tells](https://dev.to/wonderlab/one-open-source-project-a-day-no-78-stop-slop-a-skill-file-that-teaches-ai-to-eliminate-its-2nci)