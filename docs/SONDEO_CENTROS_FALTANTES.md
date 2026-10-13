# Sondeo de centros faltantes — Regional 15

**Fecha:** 13 de octubre de 2026
**Método:** diff automático contra el padrón oficial del MINERD + verificación en prensa oficial.

---

## Estado de aplicación (13-oct-2026)

✅ **Aplicado — 24 de 25 centros de la sección 1**

| Dónde | Qué |
|---|---|
| `data/centros.ts` | 9 públicos/semioficiales (05266, 05941, 06184, 14709, 14728, 00377, 17089, 19049, 19048) |
| `data/centros-adicionales-privados.ts` (archivo nuevo) | 15 privados (04918, 05332, 12281, 05079, 05355, 06232, 13479, 17145, 06099, 09326, 09436, 09450, 10035, 12665, 16760) |
| `data/ubicaciones.ts` | 18 coordenadas válidas, en bloque aparte del que regenera el script |

**Total del sitio: 1.462 → 1.486 centros.** Los 24 verificados en su distrito correcto.

Detalles del proceso:

- **`05129 CENAPEC - STO DGO - REPUBLICA DE PARAGUAY` quedó fuera**: es duplicado de `00046`/`05257 REPUBLICA DE PARAGUAY` (mismo plantel, modalidad adultos).
- **Los privados van en un archivo aparte** porque `scripts/generate-centros-privados.js` reescribe `data/centros-privados.ts` por completo; editarlo a mano se perdería en la próxima regeneración.
- **`04918 ESCUELA DE SORDOS VIDA Y ESPERANZA`** figura como PÚBLICO en 2022-2023 y PRIVADO en 2023-2024. Se classifiersegún el período más reciente (privado). **Confirmar con la Regional 15.**
- **Matrícula tomada del período 20232024** (el más reciente del padrón), no de 2022-2023.
- **6 centros sin coordenadas válidas** en el padrón: `14709`, `19048`, `19049`, `16760` (sin dato), `05079` (longitud 9.95 → África) y `00377` (longitud 0.92 → Inglaterra). Quedan sin enlace a Google Maps.
- Se descartaron coordenadas fuera del bounding box de República Dominicana.

⚠️ **Estos 24 vienen de un padrón (2022-2024) más antiguo que la fuente de `data/centros-privados.ts` (2024-2025).** Que no aparezcan en el reporte más reciente puede significar cierre o fusión. **Hay que confirmar con la Regional 15 antes de dar por definitivos los 15 privados.**

---

## Fuentes utilizadas

| # | Fuente | Cobertura | Nota |
|---|---|---|---|
| 1 | Padrón oficial MINERD "Relación de Centros Educativos de RD, período escolar 2022-2024" (datos.gob.do, 3.4 MB, 18.350 filas) | 1.464 centros de la Regional 15 | Es el listado oficial **más reciente publicado**. |
| 2 | `data/centros.ts` + `data/centros-privados.ts` (repo) | 1.462 centros | Base del sitio web. |
| 3 | presidency.gob.do, ministeriodeeducacion.gob.do, regional15.edu.do, prensa (Hoy, El Nuevo Diario, N Digital, RCC, Listín) | Inauguraciones 2025-2026 | |

**Limitación importante:** el padrón oficial llega hasta 2023-2024. Los centros realmente **nuevos** en 2025-2026 no aparecen ahí; para esos hay que usar la prensa oficial (sección 3).

---

## Resumen

| Categoría | Centros |
|---|---|
| En el padrón oficial, **ausentes del sitio** y sin equivalente por nombre | **25** |
| En el padrón oficial, ausentes pero **existen con otro código** (doble registro) | 5 |
| En el padrón oficial, ausentes y del tipo "Radio Santa María" (educación de adultos) | 7 |
|Nuevos 2025-2026 **pendientes de alta** (fuera del padrón) | 2 |
|Nuevos 2025-2026 **ya añadidos** | 2 |
| **Total ausente del sitio** | **~39** |

Distribución del faltante: 15-01 (1) · 15-02 (6) · 15-03 (4) · 15-04 (4) · 15-05 (8) · 15-06 (2) · nuevos (2)

---

## 1. Ausentes del sitio — ALTA confianza

Están en el padrón oficial con código, nombre, distrito y matrícula. **Seguro para añadir.**

### 15-01 Los Alcarrizos
| Código | Centro | Sector | Nivel | Matrícula |
|---|---|---|---|---|
| `04918` | ESCUELA DE SORDOS VIDA Y ESPERANZA | Público | Primario | 19 |

### 15-02 Santo Domingo Centro
| Código | Centro | Sector | Nivel | Matrícula |
|---|---|---|---|---|
| `05266` | MIGUEL ANGEL GARRIDO | Público | Secundaria | 23 |
| `05941` | DIDASCALIO MARIA DE LA ALTAGRACIA | Semioficial | Inicial-Primaria-Secundaria | 596 |
| `06184` | INSTITUTO PREPARATORIO DE NIÑAS SANTO DOMINGO | Público | Primario | 3 |
| `05332` | BELLO AMANECER | Privado | Inicial | 16 |
| `12281` | JARDIN DE NIÑOS DIVINA LUZ | Privado | Inicial | 25 |
| `14709` | PLANTEL NUEVO (ESTANCIA 1CAPOTILLO) 4 SORT | Público | *nivel `#REF!` en origen* | 148 |

### 15-03 Santo Domingo Sur-Central
| Código | Centro | Sector | Nivel | Matrícula |
|---|---|---|---|---|
| `05079` | DON MAX | Privado | Inicial-Primaria-Secundaria | 62 |
| `05355` | MAHATMA GANDHI | Privado | Inicial-Primaria-Secundaria | 187 |
| `06232` | CENTRO EDUCATIVO MLC SCHOOL | Privado | Inicial-Primaria-Secundaria | 142 |
| `05129` | CENAPEC - STO DGO - REPUBLICA DE PARAGUAY | Privado | Adultos | 8 |

### 15-04 Santo Domingo Noroeste / Cristo Rey
| Código | Centro | Sector | Nivel | Matrícula |
|---|---|---|---|---|
| `14728` | CAIPI - PALMA REAL (LOS GIRASOLES D.N.) | Público | Inicial | 266 |
| `00377` | CAIPI - LA FE - UNIDAD III | Público | Inicial | 107 |
| `17145` | CENTRO EDUCATIVO PEDAGOGICO CANAAN | Privado | Inicial-Primaria | 35 |
| `13479` | PASEO DE LA GRACIA DE DIOS | Privado | Inicial-Primaria | 18 |

### 15-05 Santo Domingo Oeste / Herrera
| Código | Centro | Sector | Nivel | Matrícula |
|---|---|---|---|---|
| `19049` | LA MERCED | Público | *nivel `#REF!` en origen* | 99 |
| `17089` | CENTRO DE SERVICIOS PSICOPEDAGOGICO Y DE APOYOS M… | Público | Inicial-Primaria | 35 |
| `06099` | CENTRO EDUCATIVO PROF. LUISA TAVAREZ DE DIAZ | Privado | Inicial-Primaria | 144 |
| `09326` | COLEGIO CRISTIANO ARCO DEL ARCA | Privado | Inicial-Primaria | 16 |
| `09436` | CARMELY | Privado | Inicial-Primaria | 14 |
| `09450` | MIRADOR DEL OESTE | Privado | Inicial-Primaria | 6 |
| `10035` | COLEGIO PSICOPEDAGOGICO PILAR INFANTIL | Privado | Inicial-Primaria | 16 |
| `12665` | COLEGIO LAS PALOMAS | Privado | Inicial-Primaria | 12 |

### 15-06 Pedro Brand
| Código | Centro | Sector | Nivel | Matrícula |
|---|---|---|---|---|
| `19048` | LA CUABA | Público | *nivel `#REF!` en origen* | 61 |
| `16760` | LA ESPERANZA | Privado | Inicial-Primaria | 25 |

> **Sobre los códigos `19xxx`:** 38 filas en todo el país con estas características: sector Público, nivel `#REF!` (error de Excel que se filtró al CSV) y matrícula válida. Es un bloque real y coherente, no basura. Confirmar el nivel con la Regional 15 antes de publicarlo.
>
> **Nombre truncado:** `17089` viene cortado en el padrón ("…Y DE APOYOS M"). Pedir el nombre completo.

---

## 2. Doble registro — requiere decisión de la Regional 15

El mismo centro aparece en el padrón con **dos códigos**; el sitio solo tiene uno. No es una omisión, pero puede faltar una sede.

| Código oficial | Centro | El sitio tiene | Distrito oficial | Nota |
|---|---|---|---|---|
| `05737` | PABLO NERUDA (Básica de Adultos) | `00229` PABLO NERUDA | 15-01 | Mismo plantel, modalidad adultos |
| `05607` | VICTOR GARRIDO (Secundaria) | `05609` VICTOR GARRIDO | 15-03 | Ídem |
| `06051` | LUX MUNDI (Primaria) | `05081` LUX MUNDI | 15-03 | Ídem |
| `04987` | CLUB 16 DE AGOSTO (Básica de Adultos) | `00013` CLUB 16 DE AGOSTO | 15-05 | Ídem |
| `05672` | GREGORIO LUPERON (Secundaria) | `05670`/`05671` GREGORIO LUPERON | **15-06** | El sitio ya tiene 2 en 15-06 y 1 en 15-05. **Este sí parece faltante** como tercero de Pedro Brand |

---

## 3. "Radio Santa María" — decisión editorial

7 registros del padrón con el prefijo `RADIO SANTA MARIA - ` (canal de entrega de **Básica de Adultos**). El sitio ya incluye 5 de este tipo; faltan 7:

| Código | Centro | Distrito | Matrícula |
|---|---|---|---|
| `05741` | RADIO SANTA MARIA - CARMEN CELIA BALAGUER | 15-01 | — |
| `15625` | RADIO SANTA MARIA - SAN JOSE FE Y ALEGRIA | 15-01 | — |
| `14746` | RADIO SANTA MARIA - CAMILA HENRIQUEZ - FE Y ALEGRIA | 15-01 | — |
| `15630` | RADIO SANTA MARIA - MARIO MORENO REYES | 15-05 | — |
| `15631` | RADIO SANTA MARIA - SANTA MARIA GORETTI | 15-04 | — |
| `09746` | RADIO SANTA MARIA POLIT. NTRA SRA. DE LOS ANGELES | 15-04 | — |
| `05165` | RADIO SANTA MARIA - POLITECNICO ANGELES CUSTODIOS | 15-04 | — |

**Pregunta para la Regional 15:** ¿deben aparecer estos 7? El sitio ya muestra 5 similares, así que incluirlos daría consistencia.

---

## 4. Nuevos 2025-2026

### 4.1 Ya añadidos ✅
| Centro | Distrito | Detalle |
|---|---|---|
| ESCUELA BASICA PAULINO JAIME ABREU | 15-05 | 27 aulas, Manoguayabo, 1-oct-2026 |
| POLITECNICO DEPORTIVO JOSE "CHECHE" ABREU VARGAS | 15-05 | 24 aulas, mismo complejo |

### 4.2 Pendientes

**a) Centro de Pedro Brand — NOMBRE EN CONFLICTO** 🔴

| Fuente | Nombre | Aulas | Estudiantes | Distrito |
|---|---|---|---|---|
| Memorándum oficial (vía elCaribe, RTN, RCC) | Escuela Básica **Espejo María Montessori** | 27 | 840–960 | Pedro Brand |
| presidencia.gob.do (1-oct 18:10) | Centro Educativo **Minerva Guzmán** | 23 | 960 | Pedro Brand |
| Escuela Espejo Minerva Mirabal | 27 | 840 | **Sabana Perdida, Sto Dgo. Norte (Regional 10)** | |

15-06 ya tiene `10547 MARIA MONTESSORI`. **No añadir hasta confirmar con la Regional 15.**

**b) Liceo Obras Públicas INVI** — 15-01, 24 aulas, 517 estudiantes a reubicar. En construcción desde marzo 2026, **sin nota de inauguración**. No añadir hasta confirmar.

---

## 5. Verificados que NO faltan (falsos positivos descartados)

Estos nombres aparecieron en notas de prensa de la DIE pero **no son centros nuevos de la Regional 15**:

| Nombre | Realidad |
|---|---|
| "Centro Educativo Las Mercedes" (Los Alcarrizos) | No existe. Es el **sector** Las Mercedes. |
| "Escuela Ulises Domínguez" (Herrera) | Es **Francisco Ulises Domínguez**, distrito **15-04**, ya en el sitio (`00032`, `05154`, `05160`, `10148`). |
| "Escuela Freddy Beras Goico" | Es `14427`, distrito **05-11 Villa Hermosa, Regional 05**. No es 15-01. |
| "Liceo Cerro del Norte" | **No existe** en el padrón nacional. |
| "Nueva Escuela Yldefonso María" | **No existe** en el padrón nacional. |
| Espejo Camila Henríquez Fe y Alegría | Ya está: `00319` (15-01). Fue **reingreso/culminación**, no alta. |
| Liceo Ercilia Pepín, Centro Educativo José Reyes, Félix Lope de Vega, Evaristo Brito Reyes | Ya están (`00237`/`13406`, `00328`, `15509`, `00404`). Fueron **ampliaciones**. |
| Ana Josefa Puello, Manuel Selmo Martínez, María Montessori/La Esperanza | Santo Domingo Este y Norte → **fuera de la Regional 15**. |

---

## 6. Cifras oficiales desactualizadas

| Dato | Sitio publica | Padrón / prensa |
|---|---|---|
| Centros totales | 1.443 | **1.462** en el repo · **1.464** en el padrón |
| Públicos / semioficiales | 627 | **630** en el repo |
| Matrícula total | 422.147 | **449.322** (Listín Diario, 25-ago-2026, año escolar 2026-2027) |

El desfase de matrícula es grande y merece confirmación directa con la Regional 15.

---

## 7. Acciones sugeridas

1. **Añadir los 25 de la sección 1** (tienen código, distrito y matrícula oficiales).
2. **Pedir a la Regional 15**: (a) nivel de `19048`/`19049`/`14709`, (b) nombre completo de `17089`, (c) decisión sobre `05672 GREGORIO LUPERON`, (d) nombre real del centro de Pedro Brand, (e) confirmación de la matrícula 2026-2027.
3. **Decidir** si se publican los 7 "Radio Santa María".
4. **Actualizar `public/data/content.json`** cuando la Regional 15 certifique las nuevas cifras.
5. **Refrescar periódicamente** el padrón: hoy laweb depende de un archivo de 2023-2024 y de una relación 2024-2025 pegada a mano.