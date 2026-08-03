# Data sources for characterizing Learning Support Staff (LSS)

*Companion to Working Paper 4 — verified links, August 2026.*

LSS ≈ teaching assistants / teachers' aides / SEN assistants. In occupation-coded data the anchor is **ISCO-08 unit group 5312 (Teachers' aides)** — plus, depending on the definition adopted, 2352 (special needs teachers) and 5311 (childcare workers, when in schools). ESCO's finer codes (5312.1–5312.4) exist only in the ESCO classification itself; no census or LFS is ESCO-coded, so 4-digit ISCO (or a finer national classification) is the practical ceiling.

---

## 1. Classification and crosswalk references

| Resource | Link |
|---|---|
| ESCO ↔ ISCO-08 relationship (each ESCO occupation maps to one ISCO unit group) | https://esco.ec.europa.eu/en/about-esco/escopedia/escopedia/international-standard-classification-occupations-isco |
| EURES national classification ↔ ESCO mapping tables (all EU/EEA states) | https://esco.ec.europa.eu/en/use-esco/eures-countries-mapping-tables |
| ILO ISCO-08 companion guide (definitions of 5312 etc.) | https://www.ilo.org/publications/international-standard-classification-occupations-isco-08-companion-guide |

ESCO-coded *data* exists only for online job advertisements: Cedefop **Skills-OVATE** (EU-27 + EFTA + UK, free dashboard) — https://www.cedefop.europa.eu/en/tools/skills-online-vacancies — useful for the skills/tasks content of the 5312.x sub-occupations, not for employment stocks.

---

## 2. Microdata (compute any sociodemographic breakdown)

| Source | Coverage | Occupation detail | Access | Link |
|---|---|---|---|---|
| **EU-LFS** scientific/public use files | ~30 European countries, harmonized, quarterly/annual | ISCO-08 **3-digit** → group 531 mixes teachers' aides with childcare workers; restrict to NACE section P (education) to clean the proxy | Free; SUF requires research application | https://ec.europa.eu/eurostat/web/microdata/public-microdata/labour-force-survey |
| EU-LFS User Guide (variables) | — | — | — | https://ec.europa.eu/eurostat/documents/203647/20621087/EU+Labour+Force+Survey+Database+User+Guide+2024+release.pdf |
| **Spain — EPA microdata** | Quarterly since 2005 | CNO-2011 (3-digit) from 2011Q1 | Free direct download, no application | https://www.ine.es/dyngs/INEbase/es/operacion.htm?c=Estadistica_C&cid=1254736176918&menu=resultados&secc=1254736030639&idp=1254735976595 |
| **US — ACS/CPS via IPUMS USA** | Annual, very large samples | Detailed occupation incl. "Teaching assistants" (SOC 25-9042/25-9045) | Free registration | https://usa.ipums.org/ |
| **UK — LFS / APS** | Quarterly/annual | SOC2020 6112 (teaching assistants), 6113 (educational support assistants) — finer than ISCO | Free academic registration (UK Data Service) | https://ukdataservice.ac.uk/ |
| **UK — Understanding Society** (longitudinal; careers/attrition) | Annual panel | SOC-coded | UKDS | https://www.understandingsociety.ac.uk/ |
| **Germany — SOEP** (longitudinal) | Annual panel | KldB 2010 (official ISCO-08 crosswalk) | Application to DIW | https://www.diw.de/en/soep |
| **IPUMS International** (censuses) | 100+ countries | Varies; ISCO 3-digit harmonized, source variables sometimes 4-digit | Free registration | https://international.ipums.org/ |

National LFS microdata at true ISCO-08 4-digit (code 5312 directly recoverable) exist for most countries whose national classification is an ISCO-08 extension: Baltics, Czechia (CZ-ISCO), Slovakia, Poland (KZiS), Romania (COR), Bulgaria (NKPD), Slovenia (SKP-08), Croatia (NKZ-10), Denmark (DISCO-08), Norway (STYRK-08), Finland, Austria (Ö-ISCO), Portugal (CPP/2010), Italy (CP2011). Access via each NSI (downloadable files or safe centre).

---

## 3. Ready-made tables with sociodemographics (administrative / published)

### England — the anchor case
- **School Workforce Census** — TAs annually since 2011 (288,800 FTE in 2024/25, +67,300 since 2011) by gender, age band, ethnicity, working pattern, school phase:
  https://explore-education-statistics.service.gov.uk/find-statistics/school-workforce-in-england/2024
- Open-data CSV downloads: https://explore-education-statistics.service.gov.uk/find-statistics/school-workforce-in-england/2023/explore
- Methodology: https://explore-education-statistics.service.gov.uk/methodology/school-workforce-in-england

### United States
- **BLS cpsaat11** — employed persons by detailed occupation × sex, race, Hispanic ethnicity (includes "Teaching assistants"), annual: https://www.bls.gov/cps/cpsaat11.htm (archive years at e.g. https://www.bls.gov/cps/aa2020/cpsaat11.pdf)
- **NCES Digest of Education Statistics** — instructional aides staff counts, long time series (~905,000 in fall 2022): https://nces.ed.gov/programs/digest/
- **BLS OEWS** — wages by detailed SOC: https://www.bls.gov/oes/

### Ireland
- **NCSE Data and Statistics** (~23,000 SNAs in 2025; school-level open data): https://www.ncse.ie/ncse/data-and-statistics/
- SNA/SET allocations: https://www.ncse.ie/ncse/data-and-statistics/set-hours-special-class-teachers-and-sna-allocations/

### New Zealand (planned box)
- **Education Counts — Workforce** (payroll-based; teacher aides): https://www.educationcounts.govt.nz/topics/education-workforce
- Schooling workforce data service: https://www.educationcounts.govt.nz/data-services/national/schooling-workforce

### Rest of UK
- Scotland — school-level summary statistics (support staff): https://www.gov.scot/publications/school-level-summary-statistics/
- Wales — StatsWales, School Workforce Annual Census: https://statswales.gov.wales/Catalogue/Education-and-Skills

### Australia / Canada
- ACARA National Report on Schooling (non-teaching staff): https://www.acara.edu.au/reporting/national-report-on-schooling-in-australia
- ABS Census TableBuilder (ANZSCO 4221 education aides × demographics): https://www.abs.gov.au/statistics/microdata-tablebuilder/tablebuilder
- Statistics Canada census occupation tables (NOC 43100): https://www12.statcan.gc.ca/census-recensement/index-eng.cfm

### Nordics & Netherlands (portals)
- Norway — GSI school statistics (assistant FTEs): https://gsi.udir.no/
- Sweden — Skolverket statistics (elevassistenter): https://www.skolverket.se/skolutveckling/statistik
- Netherlands — DUO open education data (onderwijsondersteunend personeel): https://duo.nl/open_onderwijsdata/

---

## 4. Suggested workflow for the paper

1. **Establish expansion** from administrative series: England SWC + US NCES as long clean series; Ireland (SNAs), New Zealand, Australia, Nordics as supporting cases.
2. **Cross-country pattern**: EU-LFS group 531 within education sector, growth over time, with the childcare-contamination caveat stated openly.
3. **Characterize the workforce** (age, sex, part-time, contract type): England SWC + BLS cpsaat11 for immediate tables; EPA, EU-LFS, IPUMS USA, UKDS microdata for anything the published tables lack.
4. **Careers / attrition vs rotation**: Understanding Society (UK) and SOEP (Germany), defining LSS as a fixed set of occupation codes and following individuals over waves.
