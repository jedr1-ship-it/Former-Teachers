# Comparative Panel File (CPF) — Requisitos para solicitar los datos, país por país

*Guía práctica para pedir el acceso a los paneles longitudinales que componen el CPF.*
*Elaborada contrastando al menos 3 fuentes oficiales por país. Fecha: agosto de 2026.*

---

## 0. Qué es el CPF y qué implica "solicitar los datos"

El **Comparative Panel File (CPF)** es un proyecto de armonización de código abierto creado por **Konrad Turek** y **Matthijs Kalmijn** (NIDI-KNAW, Países Bajos) y **Thomas Leopold** (Universidad de Colonia). Konrad Turek estuvo vinculado a **Tilburg University** — es "el de Tilburg" al que te referías.

Punto clave que condiciona todo lo demás:

> **El CPF NO es un dataset. Es código en Stata que armoniza paneles nacionales que tú tienes que conseguir por tu cuenta.**

Es decir, el CPF te da los *scripts* que integran los datos individuales y de hogar de varios paneles en una estructura común de tres niveles (persona / hogar / país-año). Pero **cada panel nacional hay que solicitarlo por separado a su institución proveedora**, y cada país tiene sus propios requisitos de acceso. Por eso esta guía va país por país.

- **Acceso al código CPF:** gratuito, desde <https://cpfdata.com/download/> y el repositorio <https://github.com/cpfdata/CPF-Code>. Documentación (Manual y Codebook) en <https://cpfdata.com/download/> y <https://github.com/cpfdata/CPF-Documentation>.
- **Software necesario:** **Stata** (el código son do-files).
- **Versión actual:** **CPF v2.0 beta (julio 2025)** — hasta 43 olas (1968–2024), 7 países, ~3 millones de observaciones de más de 400.000 personas.

### Flujo de trabajo (resumido)

1. Descargar el código CPF y descomprimirlo en la carpeta `11_CPF_in_syntax`.
2. Ejecutar `1_CPF-Folder-Setup.do` → crea la estructura de carpetas (p. ej. `C:\CPF\02_Country_Data_Origin\...`).
3. **Solicitar y descargar cada panel nacional** de su proveedor (lo que cubre esta guía).
4. Copiar los ficheros originales a la carpeta de cada país dentro de `02_Country_Data_Origin\`.
5. Ejecutar `2_CPF-Data-Run.do` → genera el dataset armonizado.

**Estructura de carpetas por país** (confirmada en el repositorio del CPF):
`01_HILDA` · `02_KLIPS` · `03_PSID` · `04_RLMS` · `05_SHP` · `06_SOEP` · `07_UKHLS` · `08_LISS`

### Nota sobre versiones y países

| Versión | Países incluidos |
|---|---|
| **CPF v2.0 (actual, jul-2025)** | Australia (HILDA), Alemania (SOEP), Reino Unido (BHPS+UKHLS), Corea del Sur (KLIPS), Suiza (SHP), EE. UU. (PSID), **Países Bajos (LISS)** |
| **CPF v1.x (hasta v1.4/1.5)** | Los anteriores **+ Rusia (RLMS-HSE)**, pero **sin** LISS |

> **Rusia (RLMS-HSE) fue retirado del CPF en la v2.0** (tras la invasión de Ucrania de 2022). Solo lo necesitas si trabajas con una versión v1.x. Se incluye al final como panel heredado.

---

## 1. Tabla resumen de requisitos por país

| País / Panel | Proveedor | Coste | Requisito principal | Modalidad | ¿Accesible desde universidad europea? |
|---|---|---|---|---|---|
| 🇦🇺 **HILDA** | DSS / Melbourne Inst. → ADA Dataverse | Gratis | Cuenta + **Confidentiality Deed Poll** firmado | Descarga (General Release) | **Sí** (General Release; la Restricted es solo para Australia) |
| 🇩🇪 **SOEP** | DIW Berlin (FDZ-SOEP) | Gratis | **Contrato de distribución de datos** con firma institucional | Descarga por pedido (enlace + SMS) | **Sí** → recibe la *EU Edition* al 100 % |
| 🇬🇧 **BHPS + UKHLS** | UK Data Service (ISER-Essex) | Gratis | Registro UKDS + **End User Licence (EUL)** | Descarga directa (EUL) | **Sí** (registro con usuario/contraseña) |
| 🇰🇷 **KLIPS** | Korea Labor Institute (KLI) | Gratis | Registro de cuenta + aceptar términos | Descarga tras login | **Sí** (portal en inglés) |
| 🇨🇭 **SHP** | FORS → SWISSUbase | Gratis | Cuenta (SWITCH edu-ID) + **contrato de uso** individual | Descarga directa | **Sí** |
| 🇺🇸 **PSID** | ISR, Univ. Michigan | Gratis | Registro + aceptar **Conditions of Use** | Descarga (Data Center / ZIP) | **Sí** (datos públicos) |
| 🇳🇱 **LISS** | Centerdata (Tilburg) | Gratis | Registro + **statement of consent** firmado | Descarga (~5 días laborables) | **Sí** |
| 🇷🇺 **RLMS-HSE** *(heredado)* | HSE Moscú + UNC | Gratis | Registro + Data-Use Agreement | Descarga | Sí, pero ⚠️ ver advertencias |

**Todos los paneles son gratuitos.** Lo que varía es la fricción del trámite: desde un simple registro (PSID, KLIPS) hasta un contrato con firma institucional (SOEP), pasando por licencias y declaraciones firmadas (UKDS, SHP, LISS, HILDA).

---

## 2. Fichas detalladas por país

### 🇦🇺 Australia — HILDA

- **Panel:** Household, Income and Labour Dynamics in Australia (anual desde 2001).
- **Proveedor:** propiedad del *Department of Social Services* (DSS); gestión científica del *Melbourne Institute* (Univ. de Melbourne); **distribución vía Australian Data Archive (ADA) Dataverse**, coordinado por el *National Centre for Longitudinal Data* (NCLD).
- **Elegibilidad:** investigadores de organismos públicos, académicos y sin ánimo de lucro. La **General Release** está disponible también **fuera de Australia** → un investigador europeo puede obtenerla. La **Restricted Release** (con fecha de nacimiento, código postal, geografía fina) es **solo para usuarios australianos** con necesidad demostrada.
- **Proceso:**
  1. Crear cuenta en el **ADA Dataverse** (<https://dataverse.ada.edu.au/>).
  2. Firmar (una vez) el **"Confidentiality Deed Poll"** del DSS — lo firman el solicitante y todo colaborador que vea los microdatos.
  3. Enviar el documento firmado a **LongitudinalStudiesDataAccess@dss.gov.au** y **ada@ada.edu.au**.
  4. Localizar HILDA en el catálogo (colección NCLD / *DSS Longitudinal Studies*) y solicitar el acceso al dataset.
  5. Tras aprobación del NCLD/DSS, **descarga directa y gratuita** de la General Release.
- **Requisitos:** cuenta en ADA Dataverse · Deed Poll firmado · afiliación institucional · cita obligatoria. No se exige propuesta formal ni ética para la General Release.
- **Formatos:** **Stata, SPSS, SAS** (ficheros "Combined" y "Other").
- **Enlaces:**
  - Portal de datos ADA: <https://dataverse.ada.edu.au/>
  - Catálogo HILDA: <https://dataverse.ada.edu.au/dataverse/hilda>
  - Colección NCLD (ruta que indica el CPF): <https://dataverse.ada.edu.au/dataverse/ncld>
  - Página ADA de HILDA: <https://ada.edu.au/household-income-and-labour-dynamics-in-australia-hilda-survey/>
  - "For Data Users" (Melbourne Inst.): <https://melbourneinstitute.unimelb.edu.au/hilda/for-data-users>
  - DSS "Accessing our datasets": <https://www.dss.gov.au/long-term-research/accessing-our-datasets>
- **Conexión con CPF:** el CPF 2.0 se construyó con **HILDA Release 20 (ver. 2000; `global hilda_w "20"`)**. Descargar los paquetes **STATA "190c"** (el sufijo **"c" = confidencializada = General Release**, justo la accesible desde Europa), colocándolos en `02_Country_Data_Origin\01_HILDA\Data\` (subcarpetas "Combined" y "Other").
- ⚠️ **Fiabilidad:** el alias exacto de la URL "DSS Longitudinal Studies Dataverse" no se pudo confirmar (protección anti-bot); llega a él desde el catálogo HILDA/NCLD. Melbourne Institute y ADA bloquean el acceso automatizado; contenido verificado vía extractos oficiales y el Manual del CPF 2.0.

### 🇩🇪 Alemania — SOEP

- **Panel:** Socio-Economic Panel (SOEP-Core, desde 1984). El SOEP es el más "burocrático" del conjunto.
- **Proveedor:** **DIW Berlin**, a través de su *Research Data Centre SOEP* (FDZ-SOEP). Contacto: **soepmail@diw.de**.
- **Elegibilidad:** solo investigadores en una **institución científica** (universidad o instituto). **No hay descarga libre.** Hace falta un **contrato de distribución de datos** firmado con respaldo institucional, ligado a un proyecto.
  - **Universidad de la UE/EEE (tu caso):** recibes la **"EU Edition"** con el **100 %** de casos y variables geográficas detalladas.
  - Fuera de la UE/sin adecuación: "International Edition" con el 95 % de hogares y geografía reducida.
- **Proceso:**
  1. Revisar la página *Data Access* y escribir a **soepmail@diw.de** si hay dudas.
  2. Presentar la **solicitud de contrato de distribución** describiendo el proyecto (y prueba de institución científica si no es universidad alemana / instituto reconocido por el BMBF).
  3. Firmar el **contrato** (firma institucional).
  4. Hacer el **pedido online** eligiendo formato (Stata/SPSS/CSV/R) e idioma de etiquetas.
  5. **Entrega:** enlace de descarga personalizado con caducidad + **dos contraseñas por SMS** al móvil.
- **Requisitos:** contrato de distribución · firma/afiliación institucional · descripción del proyecto · uso solo científico.
- **Formatos:** **Stata (.dta), SPSS, CSV, R**. Existen ediciones EU (100 %), International (95 %) y Teaching (50 %).
- **Enlaces:**
  - Data Access: <https://www.diw.de/en/diw_01.c.601584.en/data_access.html>
  - Data Order / formulario: <https://www.diw.de/en/diw_01.c.601662.en/data_order.html> · atajo <http://www.diw.de/SOEPorder>
  - FDZ-SOEP: <https://www.diw.de/en/diw_01.c.678568.en/research_data_center_soep.html>
  - Ficha KonsortSWD: <https://www.konsortswd.de/en/services/research/all-datacentres/fdz-soep/>
  - Ediciones (SOEPcompanion): <https://companion.soep.de/Data%20Structure%20of%20SOEPcore/Editions.html>
- **Conexión con CPF:** pedir SOEP-Core en **formato Stata** y colocarlo en `02_Country_Data_Origin\06_SOEP\data`. La versión exacta de SOEP por release del CPF está en el Manual del CPF.
- ⚠️ **Fiabilidad:** el dominio `diw.de` bloquea el acceso automatizado; el contenido se confirmó vía extractos oficiales, KonsortSWD y SOEPcompanion. Conviene confirmar que las URLs abren en tu navegador.

### 🇬🇧 Reino Unido — BHPS + UKHLS (Understanding Society)

- **Paneles:** **BHPS** (1991–2009, 18 olas) y **UKHLS / Understanding Society** (desde 2009, que continúa la muestra BHPS). El CPF los trata como un panel continuo.
- **Proveedor:** producidos por el **ISER (Univ. de Essex)**; **acceso y distribución a través del UK Data Service (UKDS)**. Understanding Society NO distribuye microdatos directamente: remite al UKDS.
- **Elegibilidad:** "investigadores, estudiantes y docentes de **cualquier disciplina, organización o país**". Un investigador europeo se registra con **usuario y contraseña propios** (su institución no está en la federación británica UKAMF, así que usa el formulario "apply for a username").
- **Proceso:**
  1. **Registrarse en el UK Data Service** (formulario para usuarios de instituciones fuera de la UKAMF).
  2. Iniciar sesión.
  3. Localizar el estudio: **SN 6614** (fichero combinado UKHLS + Harmonised BHPS) — o SN 5151 para BHPS independiente.
  4. **Aceptar la End User Licence (EUL)** en línea → **acceso instantáneo** a la descarga.
  5. Descargar en Stata/SPSS/tab.
  6. *(Solo si necesitas variables excluidas de la EUL)* solicitar la **Special Licence** — **no hace falta para el CPF**.
- **Requisitos:** registro UKDS (obligatorio; nada es descarga anónima) · aceptar EUL (nivel "safeguarded"). La *Special Licence* y el *Secure Lab* (datos sensibles) no son necesarios para el CPF.
- **Formatos:** **Stata (.dta)**, SPSS, tab-delimited. El CPF usa **Stata**.
- **Enlaces:**
  - Acceso (Understanding Society): <https://www.understandingsociety.ac.uk/documentation/access-data/>
  - Ficha UKDS **SN 6614** (UKHLS + Harmonised BHPS): <https://datacatalogue.ukdataservice.ac.uk/studies/study/6614>
  - Cómo registrarse si no eres usuario académico del RU: <https://ukdataservice.ac.uk/help/registration/how-to-register-if-you-are-not-a-uk-academic-user/>
  - Condiciones de acceso: <https://ukdataservice.ac.uk/find-data/access-conditions/>
- **Conexión con CPF:** **una sola descarga —la EUL de SN 6614 en Stata— aporta a la vez el BHPS armonizado y el UKHLS**. El código (carpeta `07_UKHLS`) lee `b{a-r}_indresp`/`b{a-r}_hhresp` (BHPS) y `{w}_indresp`/`{w}_hhresp` + `xwavedat` (UKHLS), en subcarpetas `bhps/` y `ukhls/` bajo `02_Country_Data_Origin\07_UKHLS\`.
- ⚠️ **Fiabilidad:** confirmados registro, gratuidad, niveles EUL/SL/Secure y SN 6614. La URL exacta de la ficha SN 5151 y una antigua página del CPF en understandingsociety.ac.uk (dio 404) no se confirmaron.

### 🇰🇷 Corea del Sur — KLIPS

- **Panel:** Korean Labor and Income Panel Study (desde 1998).
- **Proveedor:** **Korea Labor Institute (KLI)**. Contacto: **klips@kli.re.kr**.
- **Elegibilidad:** acceso público previo **registro**; existe **portal en inglés** para usuarios no coreanos y una **versión en inglés** de datos y documentación. No consta requisito de nacionalidad ni afiliación coreana.
- **Proceso:**
  1. Entrar al portal en inglés: <https://www.kli.re.kr/klips_eng>
  2. Registrarse ("Register") aceptando los términos.
  3. Iniciar sesión.
  4. Ir a **Data → Download**.
  5. Descargar datos y documentación (User's Guide, Code Book, Questionnaire) en inglés.
  6. Si la versión en inglés no aparece en el "board", solicitarla a **klips@kli.re.kr**.
- **Requisitos:** cuenta de usuario + aceptación de términos de uso. Para la *public-release* **no** consta contrato formal ni propuesta (a diferencia de otros paneles) — punto a confirmar caso por caso con el KLI.
- **Formatos:** SPSS, Stata (y SAS) + documentación PDF.
- **Enlaces:**
  - Portal KLIPS en inglés: <https://www.kli.re.kr/klips_eng>
  - Descarga (Data → Download, requiere login): <https://www.kli.re.kr/menu.es?mid=a50601000000>
  - Ficha en re3data: <https://www.re3data.org/repository/r3d100012208>
- **Conexión con CPF:** colocar los ficheros (versión en inglés) en la carpeta `02_KLIPS` bajo `02_Country_Data_Origin\`.
- ⚠️ **Fiabilidad:** verificados portal en inglés, registro, gratuidad y formatos. No se pudo comprobar dentro del área autenticada el listado exacto de ficheros.

### 🇨🇭 Suiza — SHP (Swiss Household Panel)

- **Panel:** Swiss Household Panel / "Living in Switzerland" (anual desde 1999).
- **Proveedor:** **FORS** (Univ. de Lausana); **distribución vía SWISSUbase** (antes FORSbase). Soporte de descarga: contact@swissubase.ch; contenido: swisspanel@fors.unil.ch.
- **Elegibilidad:** **gratis para toda la comunidad investigadora**, sin restricción de nacionalidad. Uso no comercial. Se autentica con **SWITCH edu-ID** (cualquiera puede crear una gratis) + cuenta SWISSUbase. Cada miembro del equipo firma el contrato individualmente.
- **Proceso:**
  1. Ir a la ficha del estudio SHP en SWISSUbase (estudio **6097**, "Living in Switzerland").
  2. Pestaña **"Datasets"**.
  3. Elegir el dataset de la ola o el longitudinal completo.
  4. Pulsar **"Start download"**.
  5. Autenticarse con **SWITCH edu-ID** (crearla si no se tiene).
  6. **Aceptar/firmar el contrato de uso** (Data Use Agreement).
  7. Descargar.
- **Requisitos:** cuenta SWISSUbase + edu-ID · contrato de uso individual · uso no comercial (para docencia, un "teaching contract" aparte) · cita obligatoria. No se exige propuesta ni revisión por comité.
- **Formatos:** **Stata, SPSS, SAS** (+ sintaxis de fusión).
- **Enlaces:**
  - SHP en FORS: <https://forscenter.ch/projects/swiss-household-panel/>
  - Acceso a datos: <https://forscenter.ch/projects/swiss-household-panel/data/>
  - Ficha del dataset en SWISSUbase (estudio 6097): <https://www.swissubase.ch/en/catalogue/studies/6097/latest>
  - edu-ID: <https://eduid.ch>
- **Conexión con CPF:** colocar los ficheros SHP (Stata) en `02_Country_Data_Origin\05_SHP\data`. Ficheros típicos: `shpXX_p_user` (individuo), `shpXX_h_user` (hogar) y el fichero maestro; lista exacta en el Manual del CPF.
- ⚠️ **Fiabilidad:** todo confirmado en FORS/SWISSUbase salvo una URL aislada de "registro" (el alta se integra en el flujo de "Start download").

### 🇺🇸 Estados Unidos — PSID

- **Panel:** Panel Study of Income Dynamics (desde 1968; el panel de hogares más antiguo del mundo).
- **Proveedor:** **Institute for Social Research (ISR), Univ. de Michigan**. Contacto: psidhelp@umich.edu.
- **Elegibilidad:** los **datos públicos** están abiertos a **cualquier investigador, también internacional**; basta registro gratuito. Cada persona que use los datos se registra por separado.
- **Proceso (datos públicos):**
  1. Abrir la página de registro (Data Center / Login).
  2. Rellenar el formulario (país, afiliación, disciplina, etc.).
  3. **Aceptar las "PSID Conditions of Use"**.
  4. Verificar la cuenta por email.
  5. Iniciar sesión y usar el **Data Center** ("data carts" con fusión automática entre olas) o descargar los **"Packaged Data"** (ZIP).
- **Requisitos:** cuenta/registro personal · aceptar las Conditions of Use (10 condiciones) · cita obligatoria. Los **datos restringidos/sensibles** (geografía fina, causa de muerte, genética) requieren contrato aparte, IRB, plan de seguridad y acceso vía enclave seguro — **no necesarios para el CPF**.
- **Formatos:** texto (ASCII) + programas para **SAS, SPSS, Stata**; codebooks y documentación.
- **Enlaces:**
  - Página principal PSID: <https://psidonline.isr.umich.edu/>
  - Data Center: <https://simba.isr.umich.edu/data/data.aspx>
  - Login / Registro: <https://simba.isr.umich.edu/U/Login.aspx>
  - Conditions of Use: <https://simba.isr.umich.edu/u/conduse.aspx>
  - Datos empaquetados (ZIP): <https://simba.isr.umich.edu/Zips/ZipMain.aspx>
- **Conexión con CPF:** descargar **todos los Family Files anuales (desde 1968)** + el **Cross-Year Individual File** como ZIP y **dejarlos comprimidos**, en `02_Country_Data_Origin\03_PSID\data`.
- ⚠️ **Fiabilidad:** el dominio `simba.isr.umich.edu` bloquea la lectura automatizada (Cloudflare); contenido verificado en las réplicas oficiales `simbatest`/`psidtest`. Las URLs de producción son correctas.

### 🇳🇱 Países Bajos — LISS *(nuevo en CPF v2.0)*

- **Panel:** Longitudinal Internet studies for the Social Sciences (panel por internet, desde 2007). Incorporado al CPF en la v2.0.
- **Proveedor:** **Centerdata** (instituto sin ánimo de lucro en el campus de **Tilburg University**), vía el **LISS Data Archive**. Contacto: info@lissdata.nl.
- **Elegibilidad:** investigación **no comercial** (científica o de política pública). Admite estudiantes, investigadores y profesorado; afiliación académica europea válida. Sin propuesta formal previa para los datos ya publicados.
- **Proceso:**
  1. Ir al portal de registro/declaración: <https://liss.statements.centerdata.nl/>
  2. Rellenar el formulario (datos personales, afiliación, país, cargo).
  3. **Firmar digitalmente el "statement of consent / data use"**.
  4. Enviar; Centerdata evalúa.
  5. Esperar el procesamiento (**~5 días laborables**) → se recibe la contraseña.
  6. Entrar al **LISS Data Archive** (<https://www.dataarchive.lissdata.nl/>) y descargar.
- **Requisitos:** registro + declaración firmada (confidencialidad, no redistribución, uso no comercial, entregar copia de publicaciones, cita obligatoria). La contraseña **caduca a los 2 años** (renovable).
- **Formatos:** **SPSS, Stata, CSV** (los ficheros se enlazan por el identificador `nomem_encr`).
- **Enlaces:**
  - Registro/declaración: <https://liss.statements.centerdata.nl/>
  - LISS Data Archive: <https://www.dataarchive.lissdata.nl/>
  - Cómo funciona el archivo: <https://www.lissdata.nl/how-it-works-archive>
  - Usar los datos: <https://www.lissdata.nl/use-the-data>
- **Conexión con CPF:** colocar los ficheros LISS en su carpeta `08_LISS` bajo `02_Country_Data_Origin\`. Manual y Codebook v2.0: <https://github.com/cpfdata/CPF-Documentation>.
- ⚠️ **Fiabilidad:** confirmados registro, statement, plazo ~5 días, gratuidad y formatos. La lista exacta de olas/ficheros LISS que pide el CPF v2.0 se confirma en el Manual v2.0.

### 🇷🇺 Rusia — RLMS-HSE *(panel heredado, solo CPF v1.x)*

- **Panel:** Russia Longitudinal Monitoring Survey – HSE (1994–2024). **Retirado del CPF en la v2.0.** Solo relevante si usas CPF v1.4 o anterior.
- **Proveedor:** **Higher School of Economics (HSE, Moscú)** + **Carolina Population Center (UNC-Chapel Hill)**.
- **Elegibilidad:** datos públicos abiertos a cualquier usuario (registro); datos sensibles restringidos a investigadores cualificados con acuerdo de uso.
- **Proceso:** elegir canal (HSE o UNC/Dataverse) → crear cuenta (canal HSE) → aceptar/firmar el **Data-Use Agreement** → descargar. En el canal UNC los datos públicos se descargan sin solicitud.
- **Requisitos:** registro + Data-Use Agreement (para datos sensibles, además, plan de seguridad o IRB).
- **Formatos:** **Stata (v11+), SPSS Portable** (Dataverse añade R/texto).
- **Enlaces:**
  - RLMS en HSE (inglés): <https://www.hse.ru/en/rlms/>
  - Requisitos de acceso (HSE): <https://www.hse.ru/en/rlms/reg>
  - RLMS en UNC-CPC: <https://rlms-hse.cpc.unc.edu/>
  - Disponibilidad y acceso (UNC): <https://rlms-hse.cpc.unc.edu/data/availability/>
- ⚠️ **Advertencias:** retirado del CPF v2.0; el servidor primario está en la HSE (Moscú), por lo que puede haber **restricciones, sanciones o intermitencia de acceso** por el contexto geopolítico. Verifica el estado en el momento de descargar.

---

## 3. Recomendaciones prácticas

1. **Empieza por los trámites lentos.** El **SOEP** (contrato con firma institucional) y **LISS** (~5 días laborables) son los que más tardan; lánzalos primero. PSID, KLIPS y SHP son casi inmediatos.
2. **Pide todo en formato Stata (.dta)** — es el que consume el código del CPF.
3. **Involucra a tu oficina de investigación/data steward** de la Universidad de Alicante para las firmas institucionales (SOEP sobre todo).
4. **Guarda las citas obligatorias** de cada panel desde el principio: todas las licencias las exigen en las publicaciones.
5. **Fija tu versión de CPF antes de pedir datos.** Si usas la v2.0, ignora Rusia y añade LISS; si usas v1.x, al revés. La versión también determina qué **olas** de cada panel necesitas (p. ej., HILDA Release 20 en CPF 2.0), detalle que está en el **Manual del CPF**.
6. **Confirma en el navegador** las URLs marcadas con ⚠️: varios proveedores (DIW, PSID/simba, Melbourne Institute, ADA) bloquean el acceso automatizado, así que aquí se verificaron por vías oficiales alternativas, pero conviene abrirlas tú directamente.

---

### Fuentes principales

- CPF — sitio oficial: <https://cpfdata.com/> · Data: <https://cpfdata.com/data/> · Working with CPF: <https://cpfdata.com/working-with-cpf/> · Código: <https://github.com/cpfdata/CPF-Code> · Documentación: <https://github.com/cpfdata/CPF-Documentation>
- Artículo de referencia: Turek, K., Kalmijn, M., & Leopold, T. (2021). *The Comparative Panel File: Harmonized Household Panel Surveys from Seven Countries.* European Sociological Review, 37(3), 505–523. <https://academic.oup.com/esr/article/37/3/505/6168670>
- Portales de cada panel: enlazados en cada ficha (sección 2).
