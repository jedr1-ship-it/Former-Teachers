# Sources, coverage and comparability notes for `figure_data.csv`

All values were transcribed from the published sources listed below. Nothing has been
interpolated, estimated, rescaled or imputed. Where the source prints a control code
instead of a number, the control code is carried through verbatim into the `value`
column (see "Control codes" below). Access date for every source: **24 August 2026**.

---

## 1. Teacher attrition — OECD Education at a Glance 2025, Table D8.4

**Citation.** OECD (2025), *Education at a Glance 2025: OECD Indicators*, OECD Publishing,
Paris, https://doi.org/10.1787/c58fc9ae-en. Indicator D8, "How severe are teacher shortages
across countries?". **Table D8.4, "Share of fully qualified teachers who left the profession
by resigning or retiring, by level of education (2022/23)", printed pages 506–507**
(PDF pages 508–509). Table notes and footnotes are printed on pages 500–501
("Chapter D8 Tables — Tables and Notes").

**URL used (full report PDF, open access):**
https://www.oecd.org/content/dam/oecd/en/publications/reports/2025/09/education-at-a-glance-2025_c58fc9ae/1c0d9c79-en.pdf

**Table subtitle (population definition, verbatim):** "Full-time and part-time, public institutions".

**Columns extracted → indicator names in the CSV**

| Table column | CSV indicator | Year |
|---|---|---|
| (1) Primary, % of fully qualified teachers who left the profession | `D8.4_attrition_rate_primary` | 2022/23 |
| (2) Primary, of which resigned from the profession | `D8.4_leavers_resigned_share_primary` | 2022/23 |
| (3) Primary, of which retired from the profession | `D8.4_leavers_retired_share_primary` | 2022/23 |
| (4) Primary, fully qualified teachers with <5 years of experience who left, as % of all fully qualified teachers who resigned | `D8.4_earlycareer_leavers_share_of_resigners_primary` | 2022/23 |
| (5)–(8) same four measures, Secondary | `..._secondary` | 2022/23 |
| (9)–(12) same four measures, Pre-primary to upper secondary | `..._prePrimary_to_upperSecondary` | 2022/23 |
| (13) Pre-primary to upper secondary, % who left | `D8.4_attrition_rate_prePrimary_to_upperSecondary_2014_15` | 2014/15 |
| (14) resigned; (15) retired | `D8.4_leavers_resigned/retired_share_prePrimary_to_upperSecondary_2014_15` | 2014/15 |

Columns (2), (3), (6), (7), (10), (11), (14), (15) are **percentages of leavers**, not of the
teaching stock; (2)+(3), (6)+(7), (10)+(11) sum to 100 in the published table.

**Rows extracted.** All 26 OECD countries listed in the table (Australia, Austria, Costa Rica,
Denmark, Estonia, France, Greece, Hungary, Iceland, Ireland, Israel, Japan, Korea, Latvia,
Lithuania, Netherlands, New Zealand, Norway, Poland, Portugal, Slovak Republic, Slovenia,
Sweden, Switzerland, Türkiye, United States); the three "Other economies" (Flemish Comm.
(Belgium), French Comm. (Belgium), England (UK)); the four partner/accession countries
(Argentina, Brazil, Bulgaria, Romania); and the OECD, EU25 and G20 averages.

**Systems with a published 2022/23 pre-primary-to-upper-secondary rate (column 9): 19.**
Austria 6.2, Denmark 11.8, Estonia 11.6, France 2.7, Greece 2.7, Ireland 2.3, Israel 2.1,
Lithuania 12.5, Netherlands 8.6, New Zealand 8.5, Poland 4.4, Portugal 3.9, Slovak Republic 6.4,
Sweden 5.9, United States 7.9, Flemish Comm. (Belgium) 8.3, French Comm. (Belgium) 4.8,
England (UK) 9.5, Bulgaria 8.3. OECD average 6.5, EU25 average 6.7. This matches the OECD's
own statement that the 6.5% average covers "19 countries and economies with available data".
All other systems are missing (`m`) at this level of aggregation.

**Published note on the table (verbatim):** "Note: Columns with data on pre-primary education
are available for consultation on line."

**Published footnotes to Table D8.4 (verbatim, EAG 2025 pp. 500–501):**
1. "Primary and lower secondary education combined and excluding upper secondary education in
   Denmark. Excluding upper secondary education in Israel and upper secondary vocational
   education in the Netherlands. Data for pre-primary education (ISCED 02) include early
   childhood development programmes (ISCED 01) in Iceland."
2. "Reference year differs from 2022/23: academic year 2021/22 for Denmark, France and
   England (UK) and New Zealand."
3. "Reference year differs from 2014/15: academic year 2012/13 for the United States;
   2015/16 for France; and 2018/19 for Lithuania."
4. "Includes non-fully qualified teachers." (applies to Netherlands, New Zealand,
   Flemish Comm. (Belgium))
5. "Includes teachers who left the profession because they were appointed to other positions
   in the education sector." (applies to the United States)

Footnote markers as printed: Denmark^1,2 · Estonia (no marker) · France^2,3 · Iceland^1 ·
Israel^1 · Lithuania^3 · Netherlands^1,4 · New Zealand^2,4 · United States^3,5 ·
Flemish Comm. (Belgium)^4 · England (UK)^2.

**Control codes carried into the CSV** (Reader's Guide, EAG 2025): `m` = missing data;
`d` = contains data from another column (e.g. Denmark primary `12.0d`, France primary `2.7d`,
Netherlands primary `8.1d`, England (UK) primary `9.5d`, Estonia secondary `11d`);
`x(n)` = contained in column n (Estonia's primary figures are contained in the secondary
columns, printed as `x(5)`–`x(8)`); `a` = category not applicable; `b` = break in series.
**Any non-numeric `value` must be treated as no observation, not as zero.**

**Anomaly in the printed table (must be flagged if the US is plotted).** The printed OECD block
contains **two consecutive rows labelled "United States"**: a row "United States^3, 5" carrying
the data (primary `m`, secondary `m`, pre-primary–upper secondary 7.9 in 2022/23 and 7.7 in
2014/15, of which 46% resigned / 54% retired, early-career leavers 7% of resigners), and a
second, bold, unfootnoted "United States" row that is empty except for the string **"No"** in
column (1). This has been verified against the rendered page image (p. 506) and is not an
extraction artefact. Only the footnoted row is used in the CSV; the stray row is discarded and
its "No" is not a value. Anyone re-using US figures should note this apparent production error.

**Other cell-level notes.** The Netherlands cell in column (13) (2014/15 rate) is printed
**blank**, not `m`; it is recorded in the CSV as an empty `value`.

**StatLink.** The chapter's underlying Excel file is cited in the publication as
`StatLink https://stat.link/6a2xcz` (Chapter D8 Tables, p. 499). **This file could not be
retrieved**: the `stat.link` HTTPS endpoint terminated every connection from this environment
(curl error 56 / empty reply), and `www.oecd.org` HTML pages and OECD iLibrary return HTTP 403.
Consequently the **pre-primary-only columns, which are online-only, are NOT in this dataset**,
and all values here are at the precision printed in the PDF (one decimal for rates, integers
for the resigned/retired split).

**Data cut-off stated by the OECD for the print publication: 13 June 2025.** The OECD Data
Explorer (https://data-explorer.oecd.org/) may hold later revisions.

---

## 2. Teachers' pay relative to other tertiary-educated workers — EAG 2025, Table D3.2

**Citation.** OECD (2025), *Education at a Glance 2025: OECD Indicators*, OECD Publishing,
Paris, https://doi.org/10.1787/c58fc9ae-en. Indicator D3, "How much are teachers and school
heads paid?". **Table D3.2, "Teachers' and school heads' actual salaries relative to earnings
of tertiary-educated workers (2024)", printed page 406** (PDF page 408). Table notes on
printed page 404. Same PDF URL as above.

**Table subtitle (verbatim):** "Ratio of salary, using annual average salaries (including
bonuses and allowances) of full-time teachers and school heads in public institutions relative
to the earnings of workers with similar educational attainment (weighted average) and to the
earnings of full-time, full-year workers with tertiary education, by level of education".

**Columns extracted → indicator names.** The table publishes **two different denominators**.
The CSV keeps both and names them explicitly:

| Table column | Denominator | CSV indicator |
|---|---|---|
| (6) Pre-primary | full-time, full-year workers with tertiary education (ISCED 5–8, 25-64) | `D3.2_teacher_pay_ratio_prePrimary_vs_tertiary_educated` |
| (7) Primary | idem | `D3.2_teacher_pay_ratio_primary_vs_tertiary_educated` |
| (8) Lower secondary, general | idem | `D3.2_teacher_pay_ratio_lowerSecondaryGeneral_vs_tertiary_educated` |
| (9) Upper secondary, general | idem | `D3.2_teacher_pay_ratio_upperSecondaryGeneral_vs_tertiary_educated` |
| (3) Primary | workers with similar educational attainment (weighted averages, 25-64) | `D3.2_teacher_pay_ratio_primary_vs_similarly_educated` |
| (5) Upper secondary, general | idem | `D3.2_teacher_pay_ratio_upperSecondaryGeneral_vs_similarly_educated` |
| (1) | — | `D3.2_earnings_reference_year` (the "Year of reference of latest available data on earnings of tertiary-educated workers") |

School-head columns (10)–(17) were not extracted.

**Which series matches the figures quoted in the brief.** The "US ≈ −37% at primary,
Portugal +28%, OECD average ≈ −17%" figures correspond to **column (7)**: United States 0.63,
Portugal 1.28, OECD average 0.83. Values are **ratios**, not percentage gaps; a figure showing
percentage gaps must compute (ratio − 1) × 100 and say so.

**Coverage.** 36 OECD countries + Flemish Comm. (Belgium), French Comm. (Belgium),
England (UK), Scotland (UK) + 11 partner/accession countries + OECD, EU25, G20 averages are
listed. **Countries with a published primary ratio in column (7): 31** plus the OECD and EU25
averages — Australia 0.97, Austria 0.75, Chile 0.75, Costa Rica 1.31, Czechia 0.72,
Denmark 0.82, Estonia 0.87, Finland 0.81, France 0.74, Germany 0.88, Greece 0.69, Hungary 0.66,
Israel 0.86, Italy 0.67, Latvia 0.77, Lithuania 0.89, Netherlands 0.80, New Zealand 0.84,
Norway 0.73, Poland 0.85, Portugal 1.28, Slovak Republic 0.74, Slovenia 0.83, Sweden 0.73,
United States 0.63, Flemish Comm. (Belgium) 0.82, French Comm. (Belgium) 0.78, England (UK) 0.82,
Scotland (UK) 0.94, Peru 1.51, Romania 1.14; OECD average 0.83, EU25 average 0.82.
Canada, Colombia, Iceland, Ireland, Japan, Korea, Luxembourg, Mexico, Spain, Switzerland and
Türkiye are `m` throughout.

**Published note (verbatim):** "Note: Where the year of reference for the earnings of
tertiary-educated workers and the salaries of teachers differ, the earnings of tertiary-educated
workers have been adjusted to the reference year used for salaries of teachers using deflators
for private final consumption expenditure."

**Published footnotes (verbatim):**
1. "Reference year differs from 2024 for salaries of teachers and school heads: 2023 for
   Czechia, Slovenia and Sweden (calendar year), 2022 for Chile."
2. "Data on teachers in pre-primary education include the data for teachers in early childhood
   education and care." (Finland)
3. "Data on earnings for full-time, full-year workers with tertiary education refer to the whole
   country: Belgium for the Flemish and the French Communities of Belgium, and the United
   Kingdom for England and Scotland."

**Comparability warning specific to this indicator.** The earnings denominator is **not from the
same year in every country**: Greece's earnings data are from **2018**; Finland, France, Israel,
Italy, Lithuania, Poland, Slovenia, Flemish Comm. (Belgium), French Comm. (Belgium) and Peru
from **2022**; the remainder from **2023**. These reference years are stored per country in the
CSV as `D3.2_earnings_reference_year` and should be printed in any figure note.

---

## 3. Part-time teaching — OECD TALIS 2024

**Primary citation.** OECD (2025), *Results from TALIS 2024: The State of Teaching*, TALIS,
OECD Publishing, Paris, https://doi.org/10.1787/90df6235-en. **Figure 7.9, "Teachers working
part-time", printed page 248**, chapter 7 "Sustaining the teaching profession". Source line of
the figure (verbatim): "Source: OECD, TALIS 2024 Database, Table 7.47." Full report PDF:
https://www.oecd.org/content/dam/oecd/en/publications/reports/2025/10/results-from-talis-2024_28fbde1d/90df6235-en.pdf

**Definition (verbatim from the figure and text).** "Percentage of lower secondary teachers
working part-time"; "Part-time teachers refer to those who work up to 90% of full-time hours."
The text (p. 247) states: "Approximately 20% of teachers are employed part-time (working up to
90% of full-time hours), on average (Figure 7.9). Yet, more than 60% of teachers work part-time
in Brazil and the Netherlands*."

**Why the numbers here come from the country notes and not from Table 7.47.** Figure 7.9 is
printed as a bar chart **with no numeric data labels**, and Table 7.47 is an online-only table
reachable only through `StatLink https://stat.link/pbef45` (p. 259). That StatLink could not be
retrieved from this environment (see the StatLink note in section 1), and the OECD web pages
(`www.oecd.org`, `oecd-ilibrary.org`) return HTTP 403. **The full 55-system series was therefore
not obtained.** Instead, each system's value was read from the numeric bullet printed in that
system's own TALIS 2024 country note, under the heading "Teachers' terms of employment"
(PDF page 10 of every note), in the standard wording: "X% of teachers are employed part-time
(working up to 90% of full-time hours) (higher/lower than / similar to the OECD average: 19%)."

**Country-note citation form.** OECD (2025), *Results from TALIS 2024 — Country notes:
[COUNTRY]*, OECD Publishing, Paris, https://doi.org/10.1787/e127f9e2-en. Individual PDFs used
(all accessed 24 August 2026), value in brackets:

| System | Value (%) | PDF |
|---|---|---|
| Australia | 19 | .../australia_5f4c3f6b/75d1e7a1-en.pdf |
| Bahrain | 1 | .../bahrain_067cd434/b0fec295-en.pdf |
| Chile | 28 | .../chile_793978b7/e31949b6-en.pdf |
| Finland | 9 | .../finland_362609f2/ab17fae3-en.pdf |
| France | 16 | .../france_714d7439/50507701-en.pdf |
| Italy | 16 | .../italy_24a89972/83aa3d46-en.pdf |
| Japan | 7 | .../japan_4e66c75b/b48b1dd7-en.pdf |
| Korea | 1 | .../korea_5efc2f0c/3d2c0051-en.pdf |
| Malta | 5 | .../malta_c53e871c/fb79327e-en.pdf |
| Morocco | 25 | .../morocco_acc9bc23/ee9859e2-en.pdf |
| Netherlands* | 66 | .../netherlands_2019c3c1/db6bd540-en.pdf |
| Portugal | 8 | .../portugal_8fc281a9/f19ffc18-en.pdf |
| Serbia | 37 | .../serbia_99af5c9a/fe4beb90-en.pdf |
| Shanghai (China) | 9 | .../shanghai-china_298f22dc/52daa5ab-en.pdf |
| South Africa | 2 | .../south-africa_71d277ff/49ebbcf9-en.pdf |
| Spain | 13 | .../spain_aec77424/27b4ffaa-en.pdf |
| Türkiye | 26 | .../turkiye_f16e16f9/754c2c1a-en.pdf |
| United States | 5 | .../united-states_f81a056f/66573a34-en.pdf |
| Viet Nam | 19 | .../viet-nam_82c88ffd/2a361394-en.pdf |
| OECD average-27 | 19 | (reference value printed in every note) |

Common URL stem for all of the above:
`https://www.oecd.org/content/dam/oecd/en/publications/reports/2025/10/results-from-talis-2024-country-notes_eafd703e/`

**19 systems out of the 55 in TALIS 2024.** The systems shown on the x-axis of Figure 7.9 but
not obtained here (because their country-note PDF URL could not be resolved without the OECD
site index) include Albania, Alberta (Canada), Austria, Azerbaijan, Belgium, Brazil, Bulgaria,
Colombia, Costa Rica, Croatia, Czechia, Denmark, Estonia, Flemish Comm. (Belgium),
French Comm. (Belgium), Hungary, Iceland, Israel, Kazakhstan, Kosovo, Latvia, Lithuania,
Montenegro, New Zealand, North Macedonia, Norway, Poland, Romania, Saudi Arabia, Singapore,
Slovak Republic, Slovenia, Sweden, United Arab Emirates and Uzbekistan. **Brazil is known from
the report text to exceed 60% but no exact published value was seen, so it is absent from the
CSV rather than estimated.**

**Precision and flags.** Country notes round to whole percentage points; that is the precision
recorded. The report marks the Netherlands, Norway, New Zealand and Alberta (Canada) with an
asterisk: "Estimates should be interpreted with caution due to higher risk of non-response bias."
This applies to the Netherlands value of 66 in the CSV.

**Note on the OECD average.** The country notes state the OECD average as **19%**; the chapter
text says "approximately 20%" and Figure 7.9 labels the benchmark "OECD average-27" (27 OECD
systems). The CSV records 19 with the country-note source. A figure using both the OECD-27
TALIS average and the EAG OECD average must not treat them as the same aggregate.

---

## 4. Stated reasons for leaving, comparable across countries — NOT OBTAINED

No published source was found that reports **stated reasons for leaving** the teaching
profession, with comparable response categories, for two or more countries. Specifically:

- **TALIS 2024** does not ask leavers why they left. It surveys serving teachers and asks how
  many more years they intend to continue teaching; chapter 7 reports *intentions* ("Percentage
  of lower secondary teachers under age 30 who express the intention to leave teaching within
  the next five years", Figure 7.1, p. 233), and relates them to demands, motivation and
  satisfaction — not to a menu of stated reasons for actual exit. Leavers are out of scope by
  design, and the report itself warns (p. 232) that substitute, emergency and occasional
  teachers are not sampled, so "TALIS 2024 may underestimate the risk of teacher attrition
  among younger teachers".
- **EAG 2025 Table D8.4** is the only cross-national decomposition of *actual* exits by reason,
  and it has exactly **two** categories: "Resigned from the profession" and "Retired from the
  profession" (columns 2/3, 6/7, 10/11, 14/15), expressed as a percentage of leavers. These are
  in the CSV. They are administrative categories, not survey self-reports, and "resigned" is a
  residual that mixes voluntary exit, dismissal, non-renewal and moves to other education-sector
  jobs (see EAG footnote 5 for the United States, which explicitly folds in teachers "appointed
  to other positions in the education sector").
- National leaver surveys with rich reason categories exist (e.g. England's DfE working-lives
  surveys, US state exit surveys, RAND's State of the American Teacher), but their category
  wordings, populations and reference periods differ, so they are **not comparable across
  countries** and no such series has been included.

**Conclusion for the paper: any "reasons for leaving" figure must be built on the resign/retire
split alone, and must be labelled as an administrative two-category split, not as stated
reasons.**

---

## Caveat that every figure using these data must print

> Country coverage is partial and differs between indicators (19 systems for attrition, 31 for
> the pay ratio at primary level, 19 of TALIS's 55 systems for part-time work), reference years
> differ by country (attrition: 2021/22 for Denmark, France, England (UK) and New Zealand;
> pay: earnings reference years range from 2018 in Greece to 2023), and the education levels,
> populations and collection methods differ across the three indicators (administrative registers
> of fully qualified teachers in public institutions vs. salary/earnings statistics vs.
> self-reported lower secondary TALIS responses) — so the series may be read within an indicator
> but must not be combined into a single cross-indicator ranking, and absent countries are
> unreported, not zero.

---

## Reproduction notes

- OECD HTML pages (`www.oecd.org/en/publications/...`) and OECD iLibrary returned **HTTP 403** to
  every request from this environment; the OECD content CDN (`www.oecd.org/content/dam/...`) and
  the full-report PDFs were reachable, and all figures above were read from those PDFs.
- `https://stat.link/*` (the StatLink Excel redirector) was unreachable (TLS connection closed by
  the peer). No StatLink Excel file could be downloaded, so no online-only column of any table is
  included here.
- `web.archive.org` is blocked by the session's egress policy, so archived copies could not be
  used as a fallback.
- Numbers were parsed from `pdftotext -layout` output and the two pages of Table D8.4 were
  additionally verified against rendered page images (p. 506 and p. 507).
