# Ubicaciones pendientes — Regional 15

**Fecha:** 14 de octubre de 2026

De los **1.489 centros** del sitio, **1.428 tienen pinpoint verificado** en el mapa. Estos
**61 no lo tienen**, y se listan aquí para que cada distrito los confirme.

> **No se inventó ninguna coordenada.** Un pin falso es peor que ningún pin: pone a
> una familia a dar vueltas por un lugar equivocado. Por eso estos centros aparecen
> en el buscador y en la lista, con su enlace "Buscar en Google Maps", pero no como
> punto en el mapa.

## Dónde mirar cada uno

El **COEDOM** (Clasificador de Organismos del Estado Dominicano, del Ministerio de
Administración Pública) tiene una ficha por centro con **dirección y teléfono**:
<https://map.gob.do/COEDOM>. Busquen el nombre del centro y anoten la dirección; con
esa dirección ya se puede colocar el punto.

## Por qué no están

| Motivo | Centros | Qué pasó |
|---|---:|---|
| El padrón del MINERD trae la coordenada **vacía o `NULL`** | 28 | Ej. `05950` lat="," · `14709` lat="NULL" · `19048` lat="" |
| El padrón trae la **longitud truncada** | 6 | Ej. `05076`: el CSV trae `18.444,-69` + `0.9404`, que no reconstruye una longitud válida |
| **No aparecen** en el padrón, ni en 2022-23 ni en 2023-24 | 27 | Escuelas posteriores al período, o privadas sin coordenada oficial |

Se probaron y **descartaron** estas vías: geocodificación por nombre en OpenStreetMap
(0 aciertos de 6 intentos), Overpass API (sin cobertura útil de colegios dominicanos),
el SIIE Mapa Escolar (sin API pública) y dateas.com (bloquea el acceso y sus datos
están corruptos).

## 15-01 Los Alcarrizos

| Código | Centro |
|---|---|
| `09982` | *(privado, nivel sin dato)* |
| `14261` | *(privado)* |
| `14343` | PROF. LIGIA AMERICA VENTURA |
| `14695` | PROF. ARISTOTELES ANDRES ALCANTARA LOPEZ |
| `14709` | PLANTEL NUEVO (ESTANCIA 1CAPOTILLO) |
| `14718` | *(privado)* |
| `14780` | *(privado)* |
| `14781` | *(privado)* |
| `14812` | HERMANA ANA JOAQUINA GIL GENAO - FE Y ALEGRIA |
| `14871` | PROF. TONY MARTIN TURBIDES MATOS |
| `14877` | *(privado)* |
| `14903` | POLITECNICO PROF. SORAYA VALENTINA NUÑEZ DIAZ |
| `14959` | *(privado)* |
| `15103` | *(privado)* |
| `15185` | PROF. FERMINA PEGUERO PAYANO |
| `15411` | PADRE IGNACIO VILLAR (CHUCO) |
| `15468` | *(privado)* |
| `15505` | *(privado)* |
| `15510` | *(privado)* |
| `16394` | **LICEO PATRIA MIRABAL** |

## 15-02 Santo Domingo Centro

| Código | Centro |
|---|---|
| `05076` | COLEGIO INFANTIL OLGA CALERO DE VILLALONA |
| `05253` | COLEGIO DOMINICO CHINO |
| `05259` | JUAN RAMON JIMENEZ |
| `06198` | MELODIA DE ESPERANZA |
| `09271` | LUCES DEL FUTURO |
| `10699` | COLEGIO INFANTIL ANGEL DEL FUTURO |
| `15101` | *(privado)* |
| `15505` | *(privado)* |

## 15-03 Santo Domingo Sur-Central

| Código | Centro |
|---|---|
| `05950` | *(privado, el padrón trae la coordenada vacía)* |
| `06114` | *(privado)* |
| `09367` | *(privado)* |
| `09437` | *(privado)* |
| `09589` | *(privado)* |
| `09703` | *(privado)* |
| `09743` | *(privado)* |
| `09799` | *(privado)* |
| `09876` | *(privado)* |
| `09985` | *(privado)* |
| `10138` | *(privado)* |
| `11439` | *(privado)* |
| `11839` | *(privado)* |
| `12041` | *(privado)* |
| `12918` | *(privado)* |
| `13018` | *(privado)* |
| `13058` | *(privado)* |
| `14004` | *(privado)* |
| `17364` | *(privado)* |
| `17379` | *(privado)* |

## 15-04 Santo Domingo Noroeste

| Código | Centro |
|---|---|
| `00377` | CAIPI - LA FE - UNIDAD III |
| `12868` | COLEGIO ARRIAGA |
| `13078` | ESTRELLA |
| `13739` | BAJO LOS OLIVOS |
| `13950` | COLEGIO CRISTIANO MARILEIDY |
| `14004` | *(privado)* |
| `16913` | *(privado)* |
| `16934` | *(privado)* |
| `17203` | *(privado)* |
| `17423` | *(privado)* |
| `17433` | *(privado)* |

## 15-05 Herrera

| Código | Centro |
|---|---|
| `05079` | COLEGIO EDUCATIVO SILOE |
| `14004` | *(privado)* |
| `15134` | FIORDALIZA CASTILLO |
| `15473` | RAMON JULIAN PEÑA |
| `15476` | PROF. MARIA AMADA RAMIREZ DIAZ |
| `15477` | BENITO JUAREZ GARCIA |
| `15641` | BASICA LAS MALVINAS |
| `15754` | PROF. PETRONILA TRINIDAD SUAREZ |
| `16351` | PROF. ROSARIO BALBUENA SORIANO |
| `16759` | *(privado)* |
| `16760` | LA ESPERANZA |
| `16843` | *(privado)* |
| `17400` | *(privado)* |
| `17409` | *(privado)* |

## 15-06 Pedro Brand

| Código | Centro |
|---|---|
| `19048` | LA CUABA |
| `19049` | LA MERCED |

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

# Semioficiales

El sitio **no tiene ningún centro semioficial** en los datos, aunque antes se
prometían 18 en la pantalla de inicio. El padrón oficial 2024-2025 del MINERD
registra **23**. Faltan dar de alta.
