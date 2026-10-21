# Ubicaciones pendientes — Regional 15

**Fecha:** 21 de octubre de 2026

De los **1.489 centros** del sitio, **1.429 tienen pinpoint verificado** en el mapa. Estos
**60 no lo tienen**, y se listan aquí para que cada distrito los confirme.

> **No se inventó ninguna coordenada.** Un pin falso es peor que ningún pin: pone a
> una familia a dar vueltas por un lugar equivocado. Por eso estos centros aparecen
> en el buscador y en la lista, con su enlace "Buscar en Google Maps", pero no como
> punto en el mapa.

El detalle centro por centro, con un campo por fuente, está en
**`data/sin-ubicacion.json`**, que se genera con `scripts/generar-valorables.js`.

## Dónde mirar cada uno

El **COEDOM** (Clasificador de Organismos del Estado Dominicano, del Ministerio de
Administración Pública) tiene una ficha por centro con **dirección y teléfono**:
<https://map.gob.do/COEDOM>. Busquen el nombre del centro y anoten la dirección; con
esa dirección ya se puede colocar el punto.

## Por qué no están

| Motivo | Centros | Qué pasó |
|---|---:|---|
| Tienen fila en el padrón 2024‑2025, pero **sin coordenadas** | 49 | El campo viene vacío o `NULL`. Ej. `05950` lat="," · `14709` lat="NULL" · `19048` lat="" |
| **No aparecen** en ningún padrón (ni 2022‑23, ni 2023‑24, ni 2024‑25) | 11 | Escuelas abiertas después de la publicación, o privadas que el MINERD no registra |

### Lo que ya se intentó y no funcionó

| Vía | Resultado |
|---|---|
| Geocodificación por nombre en OpenStreetMap | **0 aciertos de 6 intentos.** OSM tiene pocos colegios dominicanos mapeados |
| Overpass API | Se cae por timeout y la cobertura de colegios es pobre |
| SIIE Mapa Escolar (`siie.minerd.gob.do`) | Es el mapa oficial por código SIGERD, pero la página **no expone API ni JSON** |
| dateas.com | Tiene el campo `Dirrección`, pero da **403** al descargar y los datos están corruptos (`Dirreción: calle/25`, `Teléfono: #39 Call`) |
| **COEDOM** (`map.gob.do`) | **Tiene las direcciones** (ej. Minerva Mirabal → `C/ La Isabela`), pero no deja sacarlas en bloque: el JSON y las descargas CSV/TXT/XML solo traen los 324 organismos raíz, el buscador solo busca ahí, `Details/<id>` da error 500, y la grille de "Escuelas" carga los datos por JavaScript sin endpoint accesible |

**Conclusión:** el MINERD no publica coordenadas de estos 60 en ningún conjunto de datos
abierto. La salida es pedir al **Ministerio de Administración Pública** la exportación
del COEDOM filtrada por tipo de organismo **"Escuelas"**: son ~26.000 registros de todo
el país con dirección, y con eso los 60 quedan resueltos de una pasada.

## 15-01 Los Alcarrizos

| Código | Centro |
|---|---|
| `09985` | COLEGIO LA TIA MERCEDES |
| `10138` | COLEGIO EVANGELICO PIMENTEL |
| `14343` | PROF. LIGIA AMERICA VENTURA |
| `14812` | HERMANA ANA JOAQUINA GIL GENAO - FE Y ALEGRIA |
| `15411` | PADRE IGNACIO VILLAR (CHUCO) |
| `15505` | CRECIENDO JUNTOS, ESPACIOS DE APRENDIZAJE CREJESAP |
| `15510` | PROF. FRANCISCO POLANCO |
| `16394` | LICEO PATRIA MIRABAL |
| `17423` | SEMBRANDO SEMILLAS PARA CRISTO |
| `17433` | CARMEN QUIDIELLO DE BOSCH |

## 15-02 Santo Domingo Centro

| Código | Centro |
|---|---|
| `05950` | EL BUEN HOGAR |
| `13058` | PRE-ESCOLAR NIDO DE AMOR |
| `14709` | PLANTEL NUEVO (ESTANCIA 1CAPOTILLO ) 4 SORT |
| `16913` | COLEGIO MINISTERIO CON CRISTO SE PUEDE |
| `17407` | CAIPI - CAPOTILLO ESTE |

## 15-03 Santo Domingo Sur-Central

| Código | Centro |
|---|---|
| `05076` | COLEGIO INFANTIL OLGA CALERO DE VILLALONA |
| `05253` | COLEGIO DOMINICO CHINO |
| `05259` | JUAN RAMON JIMENEZ |
| `09876` | KIDS ADVENTURE LEARNING CENTER |
| `11439` | ROSA JAZMIN |
| `11839` | PRE-ESCOLAR LOS INFANTES |
| `12918` | REINA DE LOS ANGELES |
| `13018` | JARDIN INFANTIL LLUVIA DE SABERES |
| `15101` | COLEGIO CRISTIANO GENESIS ESPAÑOL |
| `15103` | CENTRO EDUCATIVO CRISTIANO GRACE |
| `17203` | AULAS HOPE |
| `17379` | PREESCOLAR ARFI |
| `17409` | COLEGIO CONEXUS |

## 15-04 Santo Domingo Noroeste

| Código | Centro |
|---|---|
| `00037` | ANGEL MANUEL BELLIARD - MIS MUCHACHITOS |
| `00377` | CAIPI - LA FE - UNIDAD III |
| `06198` | MELODIA DE ESPERANZA |
| `14781` | PROF. YLUMINADA MEJIA PEREZ |
| `14871` | PROF. TONY MARTIN TURBIDES MATOS |
| `14903` | POLITECNICO PROF. SORAYA VALENTINA NUÑEZ DIAZ |

## 15-05 Herrera

| Código | Centro |
|---|---|
| `06114` | CENTRO MATERNAL LOS PATICOS |
| `09271` | LUCES DEL FUTURO |
| `09437` | CARITA FELIZ |
| `10699` | COLEGIO INFANTIL ANGEL DEL FUTURO |
| `14004` | CENTRO DE ESTIMULACIÓN TEMPRANA MANITAS DE COLORES |
| `14261` | CENTRO DE ESTUDIO DISFRUTA Y APRENDE |
| `14718` | CENTRO EDUCATIVO LAS MARIPOSA |
| `14780` | CAIPI - ALAMEDA |
| `17364` | CAIPI - FUNDACION LA MERCED |
| `17444` | CENTRO PEDAGOGICO AMIGOS DE JESUS PROF. MARIZOL BAUTISTA |
| `19049` | LA MERCED |

## 15-06 Pedro Brand

| Código | Centro |
|---|---|
| `09367` | COLEGIO PELUCHIN |
| `09589` | SONRISA INFANTIL |
| `09703` | CENTRO PSICOPEDAGOGICO LOS AMIGUITOS |
| `09743` | COLEGIO SANTA TERESA |
| `09799` | CENTRO EDUCATIVO HUERTO INFANTIL |
| `09982` | ENGIMI |
| `12041` | CENTRO EDUCATIVO DOTES |
| `14959` | EXPERIMENTAL UASD PROF. MARIA MERCEDES LOPEZ LOPEZ |
| `15185` | PROF. FERMINA PEGUERO PAYANO |
| `16759` | CREACION DE DIOS |
| `16760` | LA ESPERANZA |
| `16843` | CENTRO EDUCATIVO EN ARTES PROF. EVELINA URBANO GONZALEZ |
| `16934` | PROVERBIOS 22:16 |
| `17400` | CAIPI - LA CUABA |
| `19048` | LA CUABA |

---

# Centros sin confirmar que están en la web

Estos **29 códigos** aparecen en el sitio pero **no** en el listado oficial de la
Regional 15 ni en el padrón 2024-2025 del MINERD. No se borraron —pueden ser escuelas
inauguradas después de la publicación—, pero conviene confirmarlos:

```
04918  05079  05266  05332  05355  06099  06184  06232  09326  09436
09450  10035  12281  12665  13479  14343  14709  14812  14871  14877
14903  16394  16760  17089  17145  17428  17433  19048  19049
```

# Semioficiales — YA RESUELTO ✅

Antes este documento decía que faltaban 23 centros semioficiales. **Era al revés:
los 23 ya estaban todos en la página, pero 22 estaban etiquetados como "Público"**
porque el listado nunca declaraba el campo `tipo` y todo caía en el valor por
defecto.

El padrón oficial 2024‑2025 del MINERD (`data/padron-2024-2025.json`) sí distingue
PUBLICO / PRIVADO / **SEMIOFICIAL**, así que `scripts/aplicar-padron-2024-2025.js`
ya los corrigió. Ahora la página muestra 23 semioficiales, que es lo que dice el
MINERD.

De paso, el mismo padrón trajo la **Tanda** (turno: Matutina, Vespertina, Nocturna,
Semipresencial) que el padrón 2023‑2024 no tenía: **588 centros** ya la tienen, y se
ve en su ficha. Es el dato que explica por qué un mismo plantel aparece con varios
códigos SIGERD: no son escuelas distintas, son turnos del mismo edificio.
