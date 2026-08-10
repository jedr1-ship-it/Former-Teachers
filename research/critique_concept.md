# Adversarial critique of `arg_concept.md`

*Hostile reading of "What a former teacher is, and what they actually bring back". Every counter-claim below is traceable to the same verified corpus the memo uses; where I compute, I flag it as own arithmetic. Nothing is drawn from memory or the web. The memo is the most ambitious document in the project and two of its moves — the interrogation of the category in §1 and the trial-ordering in §5 — are things the paper genuinely needs. But its three boldest propositions (the craft/availability bind, selection-against-shortage, and the reserve-as-pricing-instrument) are each contradicted by evidence sitting inside the files it cites, and in two cases by evidence the memo itself quotes on an adjacent page. The pattern of failure is consistent: the memo builds an elegant inverse relationship, finds a counter-example in its own corpus, files the counter-example under "what strains against this", and then carries the uncorrected version into its candidate propositions.*

---

## Front 1. Claims that outrun their evidence

### 1.1 The dose claim is false by an order of magnitude, and the memo's own strongest case is the refutation

This is the most damaging error in the memo, because it is set in bold and carries Proposition 4.

> "**The population that holds the asset is systematically unable to reach the dose at which the evidence says the asset registers.**" (§5)

> "The people with twenty years of practice are the people capped at 50 days in Ontario, sitting in the low-hours tiers in New Mexico, declining full-time re-employment in Japan, and returning in falling numbers in Austria." (§5)

Now put the thresholds and the caps in the same units. The doses the memo invokes are: Experience Corps effects concentrated at **35 or more sessions** of roughly 30 minutes, i.e. about 17 hours (`cases_mentoring` §4; `lit_retiree_mentoring` A4); Nickow, Oreopoulos and Quan's finding that effects are largest at **three days a week** (`lit_retiree_mentoring` A3); Aurora's exploratory association of **each additional ten hours** of mentoring with a doubling of the odds of a mentee staying, with the association appearing above roughly 25 hours (`lit_retiree_mentoring` A6). Number Rockets, the memo's own flagship, is 40 minutes, three times a week, for seventeen weeks — about 51 sessions and **roughly 34 contact hours**, five to seven working days of teaching (own arithmetic from Gersten et al., 2015 as rendered in `cases_mentoring` §3).

Against that, Ontario's cap is **50 days a year** (OTPP, 2026; `cases_other_legislation` §2.2) — on the order of 300 hours, seven to ten complete Number Rockets cycles inside the cap. New Mexico's "low-hours tier" is work at 0.25 FTE or less (NMERB, 2023; `cases_us_legislation` §3), several hundred hours a year. Every threshold in the corpus is in the tens of hours; every cap in the corpus is in the hundreds. The dose is not the binding constraint. It is not close to being the binding constraint.

Worse, the memo asserts the ceiling in the same section in which it reports the one trial where this population reached the dose and produced the corpus's largest effect: 86 tutors "recruited from local pools of retired and substitute teachers", 994 children, 76 schools, +0.34 on the TEMA-3 (Gersten et al., 2015; Rolfhus et al., 2012). A policymaker who reads §5 twice will notice that the section's headline mechanism is refuted by the section's headline result.

**What the evidence actually supports:** that the dose thresholds are modest and reachable, and that the binding constraint on retiree deployment is therefore the *design and financing of the role*, not the hours the population can supply. That is a stronger claim, not a weaker one, and it survives.

### 1.2 "The only supply channel documented to move experience toward disadvantaged schools voluntarily" — three defects

> "North Carolina's returners flowed to schools with more economically disadvantaged and more Black students than average, **with no policy requiring it** (Jarrold-Grapes and Mahler, 2024)." (§6)

> "they are the only channel in the corpus that has been observed moving experience toward the schools that have least of it, unprompted." (§6)

First, "no policy requiring it" is wrong for the policy's first year. In 1999 return was restricted to **low-performing schools** where the retiree's certification matched need, and only as interim instructors or substitutes; those restrictions were lifted only in June 2000 (`cases_us_legislation` §1). The episode opens with exactly the mandate the memo says was absent.

Second, "moving experience toward" is a causal reading of a hiring-pattern correlation the authors explicitly disclaim. Jarrold-Grapes and Mahler show high-need schools *disproportionately hired* returners; they had no vacancy data and no counterfactual and could not establish where those posts would otherwise have been filled (`cases_us_legislation` §1; the memo concedes this in its own "strains against" paragraph and then keeps the causal verb in the proposition).

Third, and most damaging, the corpus contains a plainer explanation that the memo never states: **54% of North Carolina's returners went back to the school they had taught in before retiring** (Jarrold-Grapes and Mahler, 2024, via `arg_mechanism` §3). If a majority return to their own former schools, the "distributional" result is not a movement of experience toward disadvantage — it is the pre-existing distribution of where those teachers already worked, reproduced. Add the compositional fact that returners were 8.7 pp more likely to be Black and 9.6 pp less likely to be White than other teachers (`cases_us_legislation` §1), in a system where Black teachers are not evenly distributed across schools, and the equity finding may be entirely an artefact of who was retirement-eligible and where they had been teaching.

Finally, the magnitudes are smaller than the rhetoric. Returners worked in schools with **3.71 pp** more economically disadvantaged and **4.86 pp** more Black students; the novice gradient the memo contrasts it with is **19% of the workforce overall against 22% in high-disadvantage schools** (OECD, 2019). Three points versus four points. The memo writes "Returners, in the one large episode we can observe, ran the other way", which reads as a reversal of direction; it is two small gradients pointing opposite ways, and the returner one covered 2.1% of the teacher workforce at its peak.

### 1.3 "Immediate deployability without a training place" gets England's constraint backwards

> "**Immediate deployability without a training place** — a returner consumes no initial teacher education seat, which matters precisely when pipelines are the binding constraint, as in England's year to November 2023, when newly qualified entrants fell to 17,462, the lowest since 2010" (§4; repeated in §6).

England's problem in that year was not a shortage of training seats. It was **under-recruitment into training** — NFER's verdict is that there is "not such a ready supply of other sources of teachers" waiting to fill "gaps left by under-recruitment into training" (Worth, 2023, p. 9, via `lit_reserve` Claim 4). Under-recruitment means applicants did not fill the places that existed. A returner who consumes no seat saves nothing when the seat would have gone empty. The "production constraint" argument in §6 — "A pound spent on a returner and a pound spent on a trainee do not draw on the same production constraint … which flatters the trainee in exactly the systems that cannot produce one" — inverts the direction of the English constraint and should be struck or restricted to a system where training capacity is demonstrably rationed. The corpus contains no such system.

### 1.4 "Fewer than five years' experience" does not establish a craft-thin resignation margin

> "the population that can offer a career has, in a significant set of systems, less experience than the average serving teacher." (§3)

The evidence offered is that "an average of one in three resigning teachers had **fewer than five years' experience**, ranging from 16% in Denmark to 58% in Austria and 68% in Israel" (OECD, 2025, p. 495). The full seven-country distribution in `fix_oecd_primary` A1.2 is Denmark 16%, Sweden 23%, Estonia 30%, Poland 32%, Slovak Republic 40%, Austria ≈58%, Israel ≈68%. "A significant set of systems" is **two of seven**. In the other five, between 60% and 84% of resigners clear five years.

The memo half-concedes this ("Two-thirds of resigners clearing a five-year bar is a real fact and the draft was right to cite it") and then rescues the claim with a different move: "five years is the *eligibility threshold* Aurora set for its mentors, whose actual roster averaged twenty-two. A pool that clears 'experienced' does not thereby clear 'master'." True — but this is now an argument about the *right tail* of the distribution, and EAG D8.4 reports only the share below five years. The corpus contains no distribution of resigner seniority above the five-year bar in any system. The memo is asserting the shape of a distribution it cannot see.

### 1.5 "No system in the corpus has been shown to" extend induction to returners — one did, by regulation

> "*Teachers Matter* recommended twenty years ago that 'different forms of induction programmes could be of considerable assistance to returning teachers' … and **no system in the corpus has been shown to do it**." (§6)

The Dutch *Regeling tegemoetkoming herintreders primair onderwijs* is exactly that instrument: Article 3 makes the EUR 2,500 "a contribution to the board's costs of **induction, guidance and support** of the returner — not a signing bonus to the teacher" (Staatscourant 2017, No. 62002; `fix_netherlands_more_cases` §1.1). New Zealand's returners agree a "Return to Practice Plan", renamed "Kia Maia | Future-Ready Teaching Plan", with their principal in lieu of the full Teacher Education Refresh (Teaching Council, 2025; 2026; `cases_england_nz` §3.2).

The error is compounded by what the Dutch case shows. The induction subsidy was **under-claimed**: budgeted for 500, just over 100 in 2018, nearly 200 cumulatively by late 2019, ceilings cut in 2019 explicitly "because the subsidy was not exhausted", scheme lapsed 1 January 2022 without evaluation (`fix_netherlands_more_cases` §1.1). So the corpus does not merely contain a counter-example to "nobody has tried it"; it contains a counter-example that failed on take-up. The memo's §6 recommendation — "Extend induction to returners, as the OECD recommended in 2005" — must be rewritten to explain why the one recorded attempt was not taken up, or it will be met by a Dutch reader with a document.

### 1.6 The retention arithmetic does not carry the conclusion drawn from it

> "of the 2011 returner cohort, 32% were out of service four years later plus 2% retired, against 29% of the 2011 newly qualified cohort … **Per expected year of service, the returner in a permanent post may well be the worse buy.**" (§6)

The gap is 34% against 29% over four years — five percentage points. The cost figures the memo wants to invert are GBP 37,400 per additional returner against GBP 33,300–46,900 per newly trained teacher **employed after one year** (Buchanan et al., 2018, pp. 56–58; `cases_england_nz` §1.5). The trainee range already straddles the returner figure; a five-point four-year survival difference cannot flip a comparison whose two sides overlap. The memo also stacks two non-independent facts as though they were two findings: the cohort survival gap and DfE's "60% higher odds of leaving after their first year back" describe the same phenomenon at different horizons on overlapping populations.

The honest version — which the memo has the material for — is that the *unit* is wrong, not that the answer is known: cost per hire is the wrong denominator, survival in post at one and three years is the right one, and England is the only system that can currently compute it.

### 1.7 "Never once observes a returner teaching a class"

> "an evidence base that never once observes a returner teaching a class." (§0)

False as written, and the memo's own §9 states the correct version. The corpus observes returners teaching: 3,500 in North Carolina with subject and school assignments (Jarrold-Grapes and Mahler, 2024); 145 casual and temporary placements across more than 600 NSW schools (NSW Government, 2024a); 63 accepted in Portugal, 55 placed from January 2025 (`cases_retiree_return` §3.2); retirees as roughly 60% of adjunct hires in the Japanese prefecture (Sakuma and Shimazaki, 2024). What the corpus never observes is a returner **linked to a student outcome** — which is what §9 says. As an opening sentence it is the first thing a hostile reader will test, and it fails.

---

## Front 2. Explanations that are really redescriptions

### 2.1 The four-state taxonomy of the "occupational tie" renames the taxonomy it opens by rejecting

Section 0 dismisses the rejected draft's three groups because the table "classifies people by where they currently are, which is the one property that has no bearing on whether they will come back". Section 2 then offers: "**completed, suspended, rejected, or never formed**".

Map them. *Completed* = retiree — the identical category, under a new name. *Suspended* = career breaker / person out of the labour market. *Rejected* = resigner / job switcher. *Never formed* = the never-served, whom §1 has already ruled out of the population. The replacement is the old taxonomy with a motive imputed to each cell.

The imputation is the problem, because the memo concedes it is unobservable: "Nor is the taxonomy directly observable: no register records why someone left." So the categories are inferred from the behaviour they are then used to explain. Career breakers return at double the rate of the other types (Buchanan et al., 2018; Worth and Sharp, 2018); the memo calls their tie "suspended"; the suspended tie then explains why they return. That is a circle, and a well-informed reader will close it in one sentence.

The corpus does contain the mechanism the taxonomy is groping for, and it is observable: **attachment to a named school**. 54% of North Carolina's returners went back to the school they left; Resch finds continuing contact with the former school is what converts availability into return; Vorarlberg posts re-entry information with the retirement paperwork; NSW's funnel exists only because the employer held the records (`arg_mechanism` §3, with sources). Attachment predicts, is recordable, and is actionable. "State of the tie" is a label for it.

### 2.2 "Structure high, effect high; structure low, effect absent" orders three trials on a variable confounded with everything else

Section 5's mechanism — "Delivering a well-designed protocol to a child requires classroom presence, pacing, behaviour management and reliability … Transferring tacit expertise to another adult requires that the expertise be articulated" — is a genuine and interesting hypothesis. But the three trials are not arrayed on a discretion axis with everything else held constant. They differ on the **recipient** (children vs adults), on the **distance from the measured outcome** (tutor→child vs mentor→teacher→child), on **statistical power** (994 students in 76 schools vs 77 probationary teachers in 11 schools), and on **purpose** (Tier-2 remediation vs professional development).

The alternative explanation the memo never advances: Aurora is null because the causal chain has an extra link and the sample has 77 teachers. An effect on students mediated through a mentored teacher is attenuated by construction, and the study is powered for a large effect only — the memo says as much in "what strains against this" ("it is underpowered for anything but a large effect") without allowing it to compete with the discretion story. Calling the axis "structure" renames the long-known asymmetry between direct instruction of children and adult professional development.

The memo also cites Glazerman et al. (2010) selectively in support of the same mechanism: "one year of the programme" produced no achievement impacts and no retention impacts. The corpus records that **two years of induction produced positive student-achievement impacts in year 3** (`lit_retiree_mentoring` A1). That is a dosage-and-duration finding, and it points toward sustained embedded support — which is the design the memo says nobody has tried, and which its own §5 ends by recommending. Printing the one-year null and omitting the two-year positive is the selective citation the lead author's diagnosis forbids.

### 2.3 "The reserve is an instrument that prices the defects of the job" is a metaphor asked to carry a mechanism

Section 8's three "properties" of the instrument are asserted rather than demonstrated, and two of them are false against the corpus (see 3.4 and 3.5 below). Strip them and what remains is: *surveys of leavers are informative about working conditions*. That is true, uncontroversial, and already the basis of the Michigan and Dutch studies the memo cites. Naming it "the most precise instrument a system has for pricing the defects of the job" does not add a mechanism; it adds an adjective.

### 2.4 "Regulatory category, not a behavioural population" is definitional, and §2 immediately contradicts the slogan

Section 1's headline is not an explanation of anything — it observes that administrative categories are defined administratively. Its real content is the two correctable inclusions (never-served, expired certificates), which is a good finding buried under a slogan. And the slogan does not survive contact with §2, which then makes **the pension position** — a purely regulatory variable — one of the two axes on which the population's behaviour divides. Either regulatory status is the wrong lens for behaviour or it is one of the two right ones; §1 and §2 cannot both stand as written.

---

## Front 3. Alternative explanations the analyst did not consider

### 3.1 The craft/availability "bind" is a price effect, not a property of the population — and North Carolina proves it

This is the memo's headline finding: "the craft argument is strongest for the population whose availability is weakest … That bind is not a caveat. It is the finding, and it reorganises what the paper should recommend" (§0); "negatively correlated **by construction**" (§3).

Every "availability" limit the memo cites is a policy parameter, not a characteristic of retirees:

- Ontario's 50 days is a pension-plan rule set by co-sponsor agreement and moved four times in thirty years — 20 to 95 in 1990, 95 to 50 in 2012, 50 to 95 in the pandemic, back to 50 in 2023 (`cases_other_legislation` §2.3).
- Austria's low take-up sits on a rule that excludes from prior-service crediting any period generating a pension, so civil-servant returners are re-employed at the **starting salary** (BMBWF, 2023, answer to Question 19, p. 18) — a price, which the memo itself identifies as such in §2 and then forgets in §3.
- Portugal's returners are paid at the **first step** of the scale, pro-rated by hours, through a twelve-day application window, ranked in a central pool and placed where the shortage is (Decreto-Lei n.º 51/2024, Art. 5; `cases_retiree_return` §3.2). That is a design specification for low uptake.
- New Mexico's low-hours tiers include options that *exist because the law creates them* — the ≤0.25 FTE route and the sub-USD 15,000 route (`cases_us_legislation` §3).

And then the decisive counter-example, which the memo cites twice for other purposes: North Carolina let retirees draw full salary plus pension, and **just over 35% of the previously retirement-eligible cohort returned to full-time work**, averaging **31 years of experience**, about 3,500 of them, hired by more than 1,500 schools, over a decade (Jarrold-Grapes and Mahler, 2024; `cases_us_legislation` §1). Thirty-one years of craft and a full-time post, in volume. Craft and availability were not inversely distributed the moment the price was right; they coexisted at scale in the largest re-entry episode in the corpus.

The memo's §3 "what strains against this" cites *Teachers Matter* (returners about 25% of the full-time UK inflow, 12% under 30 and 40% over 45, implying roughly half aged 30–45) — i.e. a large band with both accumulated experience and a career left — and does not let it bite. It should. **Proposition 3 does not survive its own evidence.**

### 3.2 England's physics result shows a thin pool, not a selective one — and the memo's own numbers prove it

> "Physics, the hardest shortage subject, is also the subject with the best alternative labour market and, accordingly, the thinnest returner yield." (§7)

Do the arithmetic the memo does not do. Schools Week reports **23 physics returners in two years from more than 111 physics leads given an adviser**, and **more than 600 former teachers across the three subjects** given an adviser over 2019–21 (Walker, 2022; UK Parliament, 2022; `cases_england_nz` §2.3). Physics converts at 23/111 ≈ **21%**. Maths and MFL together produced 49 + 56 = 105 returns from roughly 489 leads ≈ **21%** (own arithmetic; both denominators are stated as lower bounds, so treat the rates as approximate).

The conversion rates are indistinguishable. What differs is the number of physics leads the service could find: 111 against roughly 489. The evidence therefore supports a **stock** explanation — there are far fewer former physics teachers to advise — and gives no support at all to the **selection** mechanism the memo builds the section on, namely that physics leavers are differentially unwilling because their outside option is better. The memo lists the stock explanation in a single clause ("shortage-subject returners are scarce for the mundane reason that shortage-subject teachers are scarce in the stock") and treats it as an unresolvable ambiguity. It is not ambiguous: the memo's own two numbers separate the hypotheses, and they separate against it.

Two further alternatives for the 2015–16 pilot's "27 out of 5,729": the evaluation attributes the failure to timing relative to the hiring cycle, limited part-time availability and the suitability of some participants, not to subject composition (Buchanan et al., 2018, p. 91); and the 27 is triple-conditioned — permanent **and** EBacc **and** secondary — where the count of any state-funded post is 62 (`cases_england_nz` §1.4).

### 3.3 Number Rockets cannot attribute its effect to former teachers, by the memo's own standard

Section 5 correctly disqualifies Experience Corps: "being a former teacher is not an eligibility requirement … citing it as evidence for the craft argument is a category error." The identical objection applies to Number Rockets and is never raised. The 86 tutors were "recruited from local pools of **retired and substitute** teachers", and the corpus explicitly flags this as a correction the Excel got wrong: "Tutors were retired *and substitute* teachers, not only retirees" (`cases_mentoring` §3, correction 2). **No split is published.** Substitute teachers are not former teachers under this paper's premise; they are currently working casual teachers.

So the corpus's strongest positive result — the one carrying Proposition 4 and half of §4's third theory — cannot be attributed to former teachers at all. The memo applies a strict standard to the case that cuts against it and a lax one to the case that supports it. That is the single most reputationally dangerous inconsistency in the document, because the memo names the standard itself.

### 3.4 The "two independent measurement modes" in §8 are, in two of three systems, one instrument

> "Two independent measurement modes, asked of different populations at different moments, agree within each system and disagree between them. That is what a working instrument looks like." (§8)

For **Michigan**, both readings come from the same survey: "33% selected wanting a higher salary among their three most important reasons for not teaching" and "an increase in salary was the most frequently selected incentive to return" are two items on one questionnaire, one sample, one moment (Lindsay, Gnedko-Berry and Wan, 2021, Figure 1; `lit_reserve` Claim 3). Agreement between two items on one instrument is internal consistency, not corroboration. For the **Netherlands**, the exit-condition ratings and the return levers are both from Somers et al. (2024) — again one study. Only **Australia** has genuinely separate sources (HILDA panel via Cuervo and Vera-Toscano, 2025; AITSL, 2025), and there the two do not measure the same object: one measures post-exit satisfaction and wages, the other conditional willingness to return.

The alternative explanation for the cross-country divergence is equally available and never considered: **the questionnaires differ**. Michigan's incentive list is dominated by financial items (salary increase, retirees keeping benefits, better benefits, loan forgiveness); the Dutch study asks inactive teachers to rate working conditions. A survey that offers money as most of its options will find money. Add that Michigan's analytic sample of 9,842 comes from a 30% response rate and is described by the report itself as "not representative of Michigan certified teachers who do not teach", with unweighted percentages to be "interpreted with caution", and includes 22% now working as administrators and a substantial never-taught group — a partly different population from the Dutch and Australian ones.

### 3.5 Nothing in the corpus elicits a price, so §8's central property does not exist

> "It is expressed as a **price**: 'what would it take' is a more disciplined question than 'what is wrong', and it forces respondents to rank rather than complain." (§8)

The memo's own sentence contains the deflation: it forces respondents to **rank**, which is exactly what it is not to state a price. No instrument anywhere in the corpus elicits a quantity — no willingness-to-accept, no salary figure, no hours figure, no trade-off task. Michigan asks respondents to select items from a list. AITSL asks whether they would consider returning "under the right circumstances" and does not ask what those circumstances are. Somers et al. ask for ratings. The memo concedes the adjacent point ("the corpus has no costly-signal measurement anywhere") without conceding the fatal one.

The "bracket" that closes the section fails for the same reason: "TALIS gives systems the lower bound — 19% of teachers reporting high stress … Having both brackets a target that neither provides alone." Neither number is a price. Nineteen per cent reporting high stress and 17% intending to leave within five years are prevalences; they bracket nothing. There is one instrument in the whole corpus that comes close to eliciting a price, and it is not a survey — it is Fitzpatrick (2015), which finds teachers willing to pay only about 20 cents per dollar of present-value pension wealth, i.e. they value current cash roughly five to one over deferred (`lit_return_incentives` A3). That is a real revealed price, and the memo does not use it.

### 3.6 The "three mutually inconsistent theories" of the asset are not inconsistent

Section 4 stages a contradiction between *Teachers Matter* ("they bring back what they took out") and *Education Policy Outlook 2024* ("they bring back what they picked up elsewhere"), and declares that "the paper cannot advance without choosing". But EPO 2024's actual sentence is additive: returning teachers could help "while benefiting from the **new potential skills** they bring back" (OECD, 2024, p. 68; `fix_oecd_primary` E row 2). Nothing there denies craft. A person can carry back both a twenty-year classroom repertoire and something learned in an adjacent sector; the two propositions are complements, and the corpus's destination evidence (more than half of US leavers remain in education broadly defined; 22.1% of Australian leavers hold non-teaching roles inside school education within a year) shows why — most leavers acquire their outside experience inside the education system, where it is *more* likely to be transferable, not less.

The genuine finding here is smaller and safer to state: the OECD's current flagship asserts a value-added channel that no study in the corpus has ever tested, in either direction. That is worth one sentence and a research recommendation. Manufacturing a three-way doctrinal conflict inside the institution whose tradition the paper is writing in buys nothing and costs credibility.

### 3.7 The §5 recommendation commits the sin §4 charges the OECD with

Section 4 convicts EPO 2024 of advancing "a proposition rather than a finding". Section 5 then closes: "the untested design with the best theoretical warrant is the one nobody has trialled: not the visiting mentor but the co-working returner, part-time and embedded alongside novices in the same building, **which is the arrangement Jackson and Bruegmann actually measured**."

Jackson and Bruegmann measured the effect of the quality of a teacher's **serving full-time colleagues** over years, finding 0.02 SD in reading and 0.04 SD in mathematics, about a third of the own-teacher effect (`lit_retiree_mentoring` A5). A part-time returner is not that treatment either: they are not a full member of staff, their tenure is short, and — critically — the mechanism in Jackson and Bruegmann is exposure to **high-quality** peers, and nothing in the corpus establishes where returners sit in the quality distribution. The memo is extrapolating from a measured arrangement to an unmeasured one and calling the result "the best theoretical warrant". That is the same move, with the same warrant, as the OECD sentence it criticises.

---

## Front 4. Propositions that are true but too weak, safe or obvious

### 4.1 Proposition 1 as stated is a truism; the number inside it is not

"'Former teachers' is a regulatory category, not a behavioural population" will strike any OECD reader as a statement of the obvious — comparative education policy has been saying registers are not comparable for thirty years. Worse, the operational recommendation collapses on inspection: "registers should separate qualified-and-served from qualified-and-never-served, and should carry last-taught date and certificate status … **England, the Netherlands, Michigan and Australia already hold every one of them**." A recommendation that four of the memo's five register countries have already implemented is not a recommendation; and DfE already publishes the two English series as separate datasets ("Qualified teachers out of service"; "Qualified teachers never in service", `lit_reserve` bibliography).

**Sharper, and the evidence still carries it:** the reserve figures that ministries and the OECD quote are inflated at the top end by two specific, correctable inclusions, and stripping both out cuts the headline before any behavioural question is asked. England: 106,000 of 366,000 never served — 29% gone (own arithmetic, the memo's). Michigan: 44–49% of the 61,252 hold expired certificates against 6% of active teachers, ~16% may live out of state, 22% of respondents are now administrators (`lit_reserve` Claim 3 and caveat 1). The Netherlands produces 62,000 or 98,000 in the same year depending on whose register rule you use, and 22% of primary but 43% of secondary qualified stock on the stricter one (Somers, Groot and van Merode, 2024; DUO, 2026). **The claim to make is that no two countries' reserve numbers are comparable and none of them are net of the deductions that every one of these registers can already compute** — which is a live, checkable, ministerially uncomfortable claim, rather than an observation about ontology.

### 4.2 Proposition 2 buries its best content in a subordinate clause

The pension axis is the strongest material in the memo and it is presented as "a second, institutionally determined" dimension of a taxonomy. Turn it into the proposition:

**The two variables that decide whether re-entry is legally and financially possible are not owned by the education ministry.** Austria: two teachers with identical careers and identical willingness face offers differing by most of a salary scale because of the employment status they held decades earlier, and the fix requires federal legislative amendment (BMBWF, 2023, Question 19, p. 18; APA/ORF, 2023). Ontario: the cap can be moved only by agreement of the plan's co-sponsors — the government **and** the Ontario Teachers' Federation, which refused in March 2024 on the ground that "the Pension Plan is … not a tool for addressing labour market challenges" (`cases_other_legislation` §2.3–2.4). England: abatement bites only on final-salary Age or Premature benefits and not at all on career-average accruals, so the constraint is a shrinking cohort effect that will dissolve without any ministerial decision (Teachers' Pensions, n.d.). North Carolina: the whole episode was opened and closed by session law (`cases_us_legislation` §1). France: the six-month wait is a social-security rule, and the education-specific parliamentary question on it lapsed unanswered at the end of the legislature (`cases_other_legislation` §3.3).

That is a machinery-of-government claim with five independent instances, and it tells a minister something they can act on: a re-entry strategy written inside an education ministry is a strategy over the least powerful instrument in the system.

### 4.3 Proposition 4 is right and is weakened by the dose overreach

Strip §1.1's error and Proposition 4 becomes the strongest thing in the memo: the only deployments of former teachers with positive causal evidence are ones in which they work **directly with children under a specified protocol**, and the only deployment designed to transfer their expertise **to other adults** is a high-internal-validity null under WWC Standards 4.0 across reading, mathematics and teacher retention (DeCesare, McClelland and Randel, 2017; WWC, 2019, Study #88756). It needs one honesty adjustment — the Number Rockets tutors were retired **and substitute** teachers, share unpublished — and one addition the memo has and does not use: the tutor-quality gradient in Nickow, Oreopoulos and Quan (2024) places teacher and paraprofessional tutors above volunteers, with the gap driven chiefly by reading, but no meta-analysis isolates retired educators as a tutor class, so the paper's inference rests on one trial and should say so.

### 4.4 Proposition 5's recommendation is right; its justification is not, and its ordering fights the team's brief

The concrete instruction — field a leaver-and-reserve module on items **directly comparable to the serving-teacher survey the system already runs**, which is exactly the design that made the Dutch study informative — is correct, cheap, and supported by the OECD's own statement of the gap (OECD, 2024, p. 51). It does not need, and is damaged by, the claim that such an instrument already exists and already works as a pricing device.

There is also a governance problem the memo should face rather than finesse. Its closing move — "the honest ordering of a government's spending puts retention redesign first, re-entry second, and the measurement before both" — is defensible, and `ch5_synthesis` Lesson 3 already says a version of it. But the memo's framing ("Saying so does not demote this paper's subject; it explains what the subject is for") is doing a lot of work against a binding team decision: former teachers matter **per se**, and the international-experience chapter is the **centre** of the paper (TEAM_INPUT §3). A proposition whose payload is "do retention instead, and run a survey" reads as a case for a different paper. Either the paper argues the ordering explicitly and defends the subject on the per-se grounds the team has set, or it drops the ordering to a single sentence in the recommendations chapter.

### 4.5 Proposition 6 should be replaced, not softened

See 3.2. The reformulation the evidence supports is sharper and more useful than the one the memo advances: **subject composition, not willingness, defeats shortage-subject targeting.** England's advisers converted physics leads at the same rate as maths and MFL leads; there were simply about a fifth as many of them. That implies something a ministry can act on — stop rationing a thin pool through subject restrictions, and target the reserve where it is dense (Michigan's non-teaching certified stock is 57% elementary-certified; NSW's 145 and Portugal's 63 went into general staffing) — and it does not require the unsupported outside-option mechanism.

---

## Which candidate propositions survive a hostile reading

**Survives, and should lead.** *Proposition 4* — the evidence for what former teachers bring back is strongest exactly where their accumulated judgement matters least. It rests on the corpus's two most rigorous items pointing in opposite directions (Number Rockets +0.34 at scale; Aurora a WWC-verified null across all three reviewed domains), and a well-informed policymaker cannot dislodge it, because the WWC rating is "meets standards **without** reservations" and the null is therefore not attributable to weak design. Two repairs are mandatory before it goes near a draft: delete the dose claim (§1.1), and state that the Number Rockets tutor pool was retired **and** substitute teachers with no published split (§3.3).

**Survives if rebuilt around the pension axis.** *Proposition 2*. The four-state taxonomy will not survive — it is a renaming, and the memo concedes it is unobservable (§2.1). The pension half is unassailable and better than anything else in the memo (§4.2).

**Survives only in its narrow, numerical form.** *Proposition 1*. "Regulatory category, not behavioural population" is a truism whose operational recommendation is already implemented in four of the five register countries it names. The deductions claim — that no two reserve figures are comparable and none are net of never-served and lapsed certificates — survives, and is worth more (§4.1).

**Collapses.** *Proposition 3*, the craft/availability bind. North Carolina returned 3,500 people averaging 31 years of experience to full-time posts, over 35% of the retirement-eligible cohort, hired by more than 1,500 schools. The "inverse distribution by construction" is a price effect wearing the costume of a demographic law, and every availability cap the memo cites is a legislative parameter that has been moved (§3.1). Additionally, the resignation-margin half rests on two of seven systems (§1.4).

**Collapses.** *Proposition 5*, the reserve as pricing instrument. Nothing in the corpus elicits a price; two of the three "independent measurement modes" are single instruments; the flagship reading comes from a 30% response rate on a sample the report itself calls non-representative; and the TALIS "bracket" brackets nothing (§3.4, §3.5). The recommendation inside it survives; the proposition does not.

**Collapses.** *Proposition 6*, selection against shortage. The memo's own two numbers give physics and maths/MFL identical conversion rates at roughly 21%. What is thin is the physics pool, not physics willingness (§3.2).

---

## CANDIDATE PROPOSITIONS FOR THE PAPER

1. **The evidence for what former teachers bring back is strongest exactly where their accumulated judgement matters least** — retired and substitute teachers delivering a scripted protocol to at-risk six-year-olds reproduced, at scale in 76 schools, an effect first obtained with graduate students (+0.34, TEMA-3), while hand-picked master educators averaging twenty-two years, screened for excellence and paid USD 41 an hour to mentor novices, produced a null that meets WWC standards without reservations across reading, mathematics and mentee retention — so a government buying "veteran mentoring" is buying the one design the evidence does not support.

2. **The two instruments that decide whether re-entry is possible are not owned by the education ministry** — Austria's service-crediting rule makes two identical careers worth most of a salary scale apart and needs federal legislation to change; Ontario's cap moves only with the pension plan's co-sponsors, who refused in 2024 on the ground that the plan "is not a tool for addressing labour market challenges"; England's abatement constraint is dissolving on its own as career-average membership matures; and the one episode that produced mass return was opened and closed by session law in North Carolina.

3. **No two countries' reserve figures mean the same thing, and none of them are net of the deductions their own registers can already compute** — 106,000 of England's 366,000 never taught, 44–49% of Michigan's 61,252 hold expired certificates against 6% of serving teachers, and the Netherlands produces a 22% or a 43% reserve share in the same year depending on whose register rule is applied — so the reserve-versus-shortage arithmetic that motivates re-entry strategies is an artefact of register design before it is a fact about people.

4. **Subject composition, not willingness, is what defeats shortage-subject targeting** — England's advisers converted physics leads at about the same rate as mathematics and modern-languages leads (roughly one in five in each case); there were simply about a fifth as many physics leads to convert — so restricting re-entry programmes by subject rations an already thin pool, and the reserve should be worked where it is dense: general primary staffing, relief, and structured support roles.

5. **The dose at which retired teachers' work registers is small, reachable and nowhere near the caps that constrain them** — the thresholds in the evidence are tens of hours (35 sessions in Experience Corps, roughly 34 contact hours in Number Rockets, ten-hour increments in Aurora) while the constraints are hundreds (Ontario's 50 days a year, New Mexico's quarter-FTE tier) — so where retiree deployment fails it fails on role design and financing, not on the hours this population can supply.

*(Propositions 1–4 are repairs or replacements of the analyst's; proposition 5 is the inversion of the claim that most needed correcting.)*
