// Ubicaciones de centros educativos por código SIGERD.
// - Distrito 15-03: investigación manual (dirección + enlace Google Maps place_id) en data/1503-ubicaciones.json.
// - Resto y respaldo: coordenadas oficiales del MINERD (dataset de centros educativos 2022-2024, datos.gob.do).

export interface Ubicacion {
  lat?: number
  lng?: number
  direccion?: string
  enlace?: string
}

export const ubicacionesPorCodigo: Record<string, Ubicacion> = {
  // ===== CENTROS PRIVADOS (generado: scripts/generate-centros-privados.js) =====
  '04937': {
  lat: 18.521751,
  lng: -70.031845,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.521751,-70.031845"
  },
  '04962': {
  lat: 18.530683,
  lng: -69.996508,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.530683,-69.996508"
  },
  '04991': {
  lat: 18.521033,
  lng: -70.039339,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.521033,-70.039339"
  },
  '05078': {
  lat: 18.52634,
  lng: -70.015561,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.52634,-70.015561"
  },
  '05711': {
  lat: 18.528298,
  lng: -70.035638,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.528298,-70.035638"
  },
  '05714': {
  lat: 18.520833,
  lng: -70.012754,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.520833,-70.012754"
  },
  '05715': {
  lat: 18.521315,
  lng: -70.036621,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.521315,-70.036621"
  },
  '05717': {
  lat: 18.522948,
  lng: -70.013382,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.522948,-70.013382"
  },
  '05720': {
  lat: 18.526008,
  lng: -70.051996,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.526008,-70.051996"
  },
  '05724': {
  lat: 18.522031,
  lng: -70.02036,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.522031,-70.02036"
  },
  '05728': {
  lat: 18.521195,
  lng: -70.022811,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.521195,-70.022811"
  },
  '05730': {
  lat: 18.52944,
  lng: -70.021658,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.52944,-70.021658"
  },
  '05732': {
  lat: 18.529307,
  lng: -70.025147,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.529307,-70.025147"
  },
  '05742': {
  lat: 18.524276,
  lng: -70.037666,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.524276,-70.037666"
  },
  '05743': {
  lat: 18.521811,
  lng: -70.035722,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.521811,-70.035722"
  },
  '05745': {
  lat: 18.520513,
  lng: -70.042545,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.520513,-70.042545"
  },
  '06020': {
  lat: 18.533968,
  lng: -69.993806,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.533968,-69.993806"
  },
  '06036': {
  lat: 18.522224,
  lng: -70.030985,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.522224,-70.030985"
  },
  '06039': {
  lat: 18.525574,
  lng: -70.029232,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.525574,-70.029232"
  },
  '06055': {
  lat: 18.525966,
  lng: -70.055166,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.525966,-70.055166"
  },
  '06071': {
  lat: 18.515633,
  lng: -70.050668,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.515633,-70.050668"
  },
  '06072': {
  lat: 18.532802,
  lng: -69.993719,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.532802,-69.993719"
  },
  '06078': {
  lat: 18.513425,
  lng: -70.037158,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.513425,-70.037158"
  },
  '06080': {
  lat: 18.51986,
  lng: -70.043304,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.51986,-70.043304"
  },
  '06082': {
  lat: 18.533737,
  lng: -70.015573,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.533737,-70.015573"
  },
  '09281': {
  lat: 18.527055,
  lng: -70.015067,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.527055,-70.015067"
  },
  '09283': {
  lat: 18.542431,
  lng: -70.065608,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.542431,-70.065608"
  },
  '09302': {
  lat: 18.527587,
  lng: -70.006789,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.527587,-70.006789"
  },
  '09327': {
  lat: 18.53381,
  lng: -70.021613,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.53381,-70.021613"
  },
  '09329': {
  lat: 18.539266,
  lng: -70.003274,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.539266,-70.003274"
  },
  '09331': {
  lat: 18.536561,
  lng: -70.058219,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.536561,-70.058219"
  },
  '09332': {
  lat: 18.527876,
  lng: -70.022952,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.527876,-70.022952"
  },
  '09333': {
  lat: 18.530105,
  lng: -70.018712,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.530105,-70.018712"
  },
  '09337': {
  lat: 18.534422,
  lng: -70.016872,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.534422,-70.016872"
  },
  '09340': {
  lat: 18.53038,
  lng: -70.021649,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.53038,-70.021649"
  },
  '09344': {
  lat: 18.521663,
  lng: -70.002405,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.521663,-70.002405"
  },
  '09346': {
  lat: 18.519312,
  lng: -70.001747,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.519312,-70.001747"
  },
  '09365': {
  lat: 18.514431,
  lng: -70.038442,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.514431,-70.038442"
  },
  '09366': {
  lat: 18.521903,
  lng: -70.03783,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.521903,-70.03783"
  },
  '09369': {
  lat: 18.527121,
  lng: -70.022457,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.527121,-70.022457"
  },
  '09371': {
  lat: 18.511059,
  lng: -70.007471,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.511059,-70.007471"
  },
  '09372': {
  lat: 18.515373,
  lng: -70.03708,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.515373,-70.03708"
  },
  '09375': {
  lat: 18.541967,
  lng: -70.068032,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.541967,-70.068032"
  },
  '09498': {
  lat: 18.527813,
  lng: -70.017068,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.527813,-70.017068"
  },
  '09499': {
  lat: 18.527544,
  lng: -70.024182,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.527544,-70.024182"
  },
  '09557': {
  lat: 18.533383,
  lng: -69.994952,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.533383,-69.994952"
  },
  '09583': {
  lat: 18.537225,
  lng: -70.031102,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.537225,-70.031102"
  },
  '09594': {
  lat: 18.532849,
  lng: -70.017673,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.532849,-70.017673"
  },
  '09607': {
  lat: 18.538105,
  lng: -69.991486,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.538105,-69.991486"
  },
  '09611': {
  lat: 18.510811,
  lng: -70.053184,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.510811,-70.053184"
  },
  '09613': {
  lat: 18.523933,
  lng: -70.03538,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.523933,-70.03538"
  },
  '09616': {
  lat: 18.535087,
  lng: -70.059844,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.535087,-70.059844"
  },
  '09714': {
  lat: 18.537165,
  lng: -69.994122,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.537165,-69.994122"
  },
  '09721': {
  lat: 18.509884,
  lng: -70.015689,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.509884,-70.015689"
  },
  '09723': {
  lat: 18.525318,
  lng: -70.034311,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.525318,-70.034311"
  },
  '09724': {
  lat: 18.521231,
  lng: -70.023945,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.521231,-70.023945"
  },
  '09894': {
  lat: 18.518676,
  lng: -70.040417,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.518676,-70.040417"
  },
  '09983': {
  lat: 18.53527,
  lng: -69.993015,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.53527,-69.993015"
  },
  '09995': {
  lat: 18.527059,
  lng: -70.015071,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.527059,-70.015071"
  },
  '10068': {
  lat: 18.528504,
  lng: -69.994871,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.528504,-69.994871"
  },
  '10085': {
  lat: 18.521329,
  lng: -70.040515,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.521329,-70.040515"
  },
  '10091': {
  lat: 18.525326,
  lng: -70.040386,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.525326,-70.040386"
  },
  '10095': {
  lat: 18.540388,
  lng: -69.986456,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.540388,-69.986456"
  },
  '10103': {
  lat: 18.521268,
  lng: -70.037249,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.521268,-70.037249"
  },
  '10155': {
  lat: 18.530796,
  lng: -70.021805,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.530796,-70.021805"
  },
  '10171': {
  lat: 18.521976,
  lng: -70.025169,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.521976,-70.025169"
  },
  '10241': {
  lat: 18.528736,
  lng: -70.00208,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.528736,-70.00208"
  },
  '10299': {
  lat: 18.521709,
  lng: -70.045866,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.521709,-70.045866"
  },
  '10564': {
  lat: 18.524452,
  lng: -70.020661,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.524452,-70.020661"
  },
  '11093': {
  lat: 18.52061,
  lng: 70.045845,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.52061,70.045845"
  },
  '11739': {
  lat: 18.521208,
  lng: -70.032251,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.521208,-70.032251"
  },
  '11801': {
  lat: 18.530851,
  lng: -70.030102,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.530851,-70.030102"
  },
  '12212': {
  lat: 18.536067,
  lng: -70.023167,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.536067,-70.023167"
  },
  '12310': {
  lat: 18.521199,
  lng: -70.003261,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.521199,-70.003261"
  },
  '12441': {
  lat: 18.514126,
  lng: -70.024661,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.514126,-70.024661"
  },
  '12551': {
  lat: 18.528545,
  lng: -70.002828,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.528545,-70.002828"
  },
  '12672': {
  lat: 18.525007,
  lng: -69.994923,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.525007,-69.994923"
  },
  '12759': {
  lat: 18.520305,
  lng: -70.014426,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.520305,-70.014426"
  },
  '12868': {
  lat: 18.51701,
  lng: 70.03206,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.51701,70.03206"
  },
  '12888': {
  lat: 18.514333,
  lng: -70.036923,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.514333,-70.036923"
  },
  '13070': {
  lat: 18.527149,
  lng: -70.055684,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.527149,-70.055684"
  },
  '13078': {
  lat: 18.53712,
  lng: 69.9895,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.53712,69.9895"
  },
  '13083': {
  lat: 18.542613,
  lng: -70.067154,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.542613,-70.067154"
  },
  '13115': {
  lat: 18.529785,
  lng: -70.028923,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.529785,-70.028923"
  },
  '13128': {
  lat: 18.521737,
  lng: -70.032935,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.521737,-70.032935"
  },
  '13138': {
  lat: 18.536943,
  lng: -70.004753,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.536943,-70.004753"
  },
  '13143': {
  lat: 18.506581,
  lng: -70.027933,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.506581,-70.027933"
  },
  '13196': {
  lat: 18.515239,
  lng: -70.036308,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.515239,-70.036308"
  },
  '13198': {
  lat: 18.532164,
  lng: -70.034527,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.532164,-70.034527"
  },
  '13242': {
  lat: 18.525183,
  lng: -70.024937,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.525183,-70.024937"
  },
  '13582': {
  lat: 18.521976,
  lng: -70.005292,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.521976,-70.005292"
  },
  '13739': {
  lat: 18.5131,
  lng: 0.02616,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.5131,0.02616"
  },
  '13861': {
  lat: 18.523876,
  lng: -70.051726,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.523876,-70.051726"
  },
  '13864': {
  lat: 18.52112,
  lng: -70.01975,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.52112,-70.01975"
  },
  '13950': {
  lat: 18.51873,
  lng: 70.04672,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.51873,70.04672"
  },
  '14002': {
  lat: 18.527557,
  lng: -70.017216,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.527557,-70.017216"
  },
  '14767': {
  lat: 18.523513,
  lng: -69.994797,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.523513,-69.994797"
  },
  '14794': {
  lat: 18.515539,
  lng: -70.006432,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.515539,-70.006432"
  },
  '15508': {
  lat: 18.524373,
  lng: -69.996433,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.524373,-69.996433"
  },
  '15654': {
  lat: 18.521639,
  lng: -69.994184,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.521639,-69.994184"
  },
  '15906': {
  lat: 18.527405,
  lng: -70.00663,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.527405,-70.00663"
  },
  '15908': {
  lat: 18.533881,
  lng: -70.024141,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.533881,-70.024141"
  },
  '15910': {
  lat: 18.527066,
  lng: -70.02599,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.527066,-70.02599"
  },
  '15912': {
  lat: 18.5255,
  lng: -70.037022,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.5255,-70.037022"
  },
  '15913': {
  lat: 18.540886,
  lng: -69.997519,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.540886,-69.997519"
  },
  '15914': {
  lat: 18.541075,
  lng: -70.003096,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.541075,-70.003096"
  },
  '15917': {
  lat: 18.530764,
  lng: -70.037443,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.530764,-70.037443"
  },
  '16997': {
  lat: 18.53363,
  lng: 70.02496,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.53363,70.02496"
  },
  '16998': {
  lat: 18.527367,
  lng: -70.028657,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.527367,-70.028657"
  },
  '16999': {
  lat: 18.517034,
  lng: -70.007715,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.517034,-70.007715"
  },
  '17000': {
  lat: 18.521637,
  lng: -70.006956,
  direccion: "LOS ALCARRIZOS, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.521637,-70.006956"
  },
  '05212': {
  lat: 18.495532,
  lng: -69.905173,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.495532,-69.905173"
  },
  '05214': {
  lat: 18.4862,
  lng: 9.9085,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.4862,9.9085"
  },
  '05218': {
  lat: 18.492672,
  lng: -69.9011,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.492672,-69.9011"
  },
  '05219': {
  lat: 18.490152,
  lng: -69.907581,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.490152,-69.907581"
  },
  '05220': {
  lat: 18.487962,
  lng: -69.90462,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.487962,-69.90462"
  },
  '05267': {
  lat: 18.485782,
  lng: -69.898529,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.485782,-69.898529"
  },
  '05268': {
  lat: 18.481748,
  lng: -69.899147,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.481748,-69.899147"
  },
  '05272': {
  lat: 18.502982,
  lng: -69.899375,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.502982,-69.899375"
  },
  '05274': {
  lat: 18.500349,
  lng: -69.899866,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.500349,-69.899866"
  },
  '05285': {
  lat: 18.500826,
  lng: -69.903294,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.500826,-69.903294"
  },
  '05286': {
  lat: 18.502168,
  lng: -69.896222,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.502168,-69.896222"
  },
  '05295': {
  lat: 18.504434,
  lng: -69.906451,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.504434,-69.906451"
  },
  '05309': {
  lat: 18.50439,
  lng: -69.895828,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.50439,-69.895828"
  },
  '05310': {
  lat: 18.5034,
  lng: 9.892,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.5034,9.892"
  },
  '05321': {
  lat: 18.490951,
  lng: -69.886367,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.490951,-69.886367"
  },
  '05341': {
  lat: 18.4881,
  lng: 9.901,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.4881,9.901"
  },
  '05342': {
  lat: 18.488439,
  lng: -69.891384,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.488439,-69.891384"
  },
  '05400': {
  lat: 18.50186,
  lng: -69.882375,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.50186,-69.882375"
  },
  '05401': {
  lat: 18.500481,
  lng: -69.87979,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.500481,-69.87979"
  },
  '05952': {
  lat: 18.499175,
  lng: -69.88847,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.499175,-69.88847"
  },
  '05953': {
  lat: 18.507074,
  lng: -69.886427,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.507074,-69.886427"
  },
  '06245': {
  lat: 18.498272,
  lng: -69.891188,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.498272,-69.891188"
  },
  '06255': {
  lat: 18.500258,
  lng: -69.894392,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.500258,-69.894392"
  },
  '06276': {
  lat: 18.502022,
  lng: -69.880854,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.502022,-69.880854"
  },
  '06280': {
  lat: 18.502398,
  lng: -69.890843,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.502398,-69.890843"
  },
  '06287': {
  lat: 18.487309,
  lng: -69.891352,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.487309,-69.891352"
  },
  '10534': {
  lat: 18.486689,
  lng: -69.889767,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.486689,-69.889767"
  },
  '10671': {
  lat: 18.507053,
  lng: -69.900871,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.507053,-69.900871"
  },
  '10776': {
  lat: 18.507861,
  lng: -69.888528,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.507861,-69.888528"
  },
  '11457': {
  lat: 18.490867,
  lng: -69.886958,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.490867,-69.886958"
  },
  '11489': {
  lat: 18.504342,
  lng: -69.888077,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.504342,-69.888077"
  },
  '11529': {
  lat: 18.491959,
  lng: -69.893194,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.491959,-69.893194"
  },
  '11705': {
  lat: 18.503444,
  lng: -69.905703,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.503444,-69.905703"
  },
  '11837': {
  lat: 18.49137,
  lng: -69.894707,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.49137,-69.894707"
  },
  '12176': {
  lat: 18.51204,
  lng: -69.896813,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.51204,-69.896813"
  },
  '12238': {
  lat: 18.501945,
  lng: -69.879627,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.501945,-69.879627"
  },
  '12243': {
  lat: 18.504626,
  lng: -69.89806,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.504626,-69.89806"
  },
  '12244': {
  lat: 18.508055,
  lng: -69.899931,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.508055,-69.899931"
  },
  '12419': {
  lat: 18.492621,
  lng: -69.887162,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.492621,-69.887162"
  },
  '12420': {
  lat: 18.486126,
  lng: -69.905693,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.486126,-69.905693"
  },
  '12430': {
  lat: 18.504419,
  lng: -69.893603,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.504419,-69.893603"
  },
  '12604': {
  lat: 18.488526,
  lng: -69.886157,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.488526,-69.886157"
  },
  '12641': {
  lat: 18.50664,
  lng: -69.893952,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.50664,-69.893952"
  },
  '12709': {
  lat: 18.487966,
  lng: -69.901047,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.487966,-69.901047"
  },
  '12765': {
  lat: 18.509194,
  lng: -69.895558,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.509194,-69.895558"
  },
  '12777': {
  lat: 18.50159,
  lng: -69.908341,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.50159,-69.908341"
  },
  '12794': {
  lat: 18.50672,
  lng: -69.899902,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.50672,-69.899902"
  },
  '12804': {
  lat: 18.503011,
  lng: -69.889198,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.503011,-69.889198"
  },
  '12805': {
  lat: 18.499099,
  lng: -69.908981,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.499099,-69.908981"
  },
  '12825': {
  lat: 18.508584,
  lng: -69.914335,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.508584,-69.914335"
  },
  '12836': {
  lat: 18.486806,
  lng: -69.907584,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.486806,-69.907584"
  },
  '12848': {
  lat: 18.506991,
  lng: -69.880625,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.506991,-69.880625"
  },
  '12875': {
  lat: 18.489498,
  lng: -69.913083,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.489498,-69.913083"
  },
  '12879': {
  lat: 18.507094,
  lng: -69.883408,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.507094,-69.883408"
  },
  '12932': {
  lat: 18.494091,
  lng: -69.886559,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.494091,-69.886559"
  },
  '13040': {
  lat: 18.509896,
  lng: -69.89328,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.509896,-69.89328"
  },
  '13052': {
  lat: 18.484746,
  lng: -69.907464,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.484746,-69.907464"
  },
  '13086': {
  lat: 18.486221,
  lng: -69.903156,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.486221,-69.903156"
  },
  '13177': {
  lat: 18.506987,
  lng: -69.907177,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.506987,-69.907177"
  },
  '13193': {
  lat: 18.507324,
  lng: -69.906722,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.507324,-69.906722"
  },
  '13615': {
  lat: 18.503023,
  lng: -69.914034,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.503023,-69.914034"
  },
  '13631': {
  lat: 18.497689,
  lng: -69.886945,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.497689,-69.886945"
  },
  '13633': {
  lat: 18.499342,
  lng: -69.910449,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.499342,-69.910449"
  },
  '13807': {
  lat: 18.50272,
  lng: -69.902577,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.50272,-69.902577"
  },
  '14881': {
  lat: 18.486863,
  lng: -69.905157,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.486863,-69.905157"
  },
  '15879': {
  lat: 18.496753,
  lng: -69.889701,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.496753,-69.889701"
  },
  '15884': {
  lat: 18.491851,
  lng: -69.885931,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.491851,-69.885931"
  },
  '15887': {
  lat: 18.503146,
  lng: -69.890742,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.503146,-69.890742"
  },
  '15889': {
  lat: 18.507555,
  lng: -69.888727,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.507555,-69.888727"
  },
  '15891': {
  lat: 18.499709,
  lng: -69.888096,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.499709,-69.888096"
  },
  '15895': {
  lat: 18.507369,
  lng: -69.888936,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.507369,-69.888936"
  },
  '15899': {
  lat: 18.50605,
  lng: -69.912159,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.50605,-69.912159"
  },
  '15900': {
  lat: 18.498522,
  lng: -69.88371,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.498522,-69.88371"
  },
  '15905': {
  lat: 18.493394,
  lng: -69.883601,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.493394,-69.883601"
  },
  '15931': {
  lat: 18.504897,
  lng: -69.892421,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.504897,-69.892421"
  },
  '15933': {
  lat: 18.49471,
  lng: -69.881892,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.49471,-69.881892"
  },
  '15936': {
  lat: 18.504097,
  lng: -69.877402,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.504097,-69.877402"
  },
  '15940': {
  lat: 18.502097,
  lng: -69.876204,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.502097,-69.876204"
  },
  '16655': {
  lat: 18.497078,
  lng: -69.890173,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.497078,-69.890173"
  },
  '16656': {
  lat: 18.492482,
  lng: -69.880967,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.492482,-69.880967"
  },
  '16658': {
  lat: 18.496599,
  lng: -69.907434,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.496599,-69.907434"
  },
  '16659': {
  lat: 18.482737,
  lng: -69.902571,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.482737,-69.902571"
  },
  '16660': {
  lat: 18.498897,
  lng: -69.910663,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.498897,-69.910663"
  },
  '16914': {
  lat: 18.507615,
  lng: -69.885238,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.507615,-69.885238"
  },
  '17001': {
  lat: 18.50031,
  lng: -69.900442,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.50031,-69.900442"
  },
  '17002': {
  lat: 18.499642,
  lng: -69.897616,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.499642,-69.897616"
  },
  '17032': {
  lat: 18.504097,
  lng: -69.877402,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.504097,-69.877402"
  },
  '17033': {
  lat: 18.492492,
  lng: -69.884585,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.492492,-69.884585"
  },
  '17034': {
  lat: 18.508706,
  lng: -69.89832,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.508706,-69.89832"
  },
  '17035': {
  lat: 18.505995,
  lng: -69.884965,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.505995,-69.884965"
  },
  '17036': {
  lat: 18.502241,
  lng: -69.913691,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.502241,-69.913691"
  },
  '04995': {
  lat: 18.433328,
  lng: -69.962837,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.433328,-69.962837"
  },
  '05001': {
  lat: 18.447639,
  lng: -69.964806,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.447639,-69.964806"
  },
  '05021': {
  lat: 18.449414,
  lng: -69.969446,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.449414,-69.969446"
  },
  '05022': {
  lat: 18.4455,
  lng: 9.9736,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.4455,9.9736"
  },
  '05023': {
  lat: 18.44684,
  lng: -69.969636,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.44684,-69.969636"
  },
  '05025': {
  lat: 18.4507,
  lng: 9.9685,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.4507,9.9685"
  },
  '05026': {
  lat: 18.454856,
  lng: -69.967408,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.454856,-69.967408"
  },
  '05038': {
  lat: 18.433979,
  lng: -69.951128,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.433979,-69.951128"
  },
  '05046': {
  lat: 18.481694,
  lng: -69.945237,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.481694,-69.945237"
  },
  '05048': {
  lat: 18.4794,
  lng: 9.9589,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.4794,9.9589"
  },
  '05049': {
  lat: 18.474872,
  lng: -69.966445,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.474872,-69.966445"
  },
  '05051': {
  lat: 18.475694,
  lng: -69.959233,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.475694,-69.959233"
  },
  '05053': {
  lat: 18.476508,
  lng: -69.960734,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.476508,-69.960734"
  },
  '05054': {
  lat: 18.455796,
  lng: -69.958904,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.455796,-69.958904"
  },
  '05055': {
  lat: 18.461558,
  lng: -69.959171,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.461558,-69.959171"
  },
  '05058': {
  lat: 18.4573,
  lng: 9.9624,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.4573,9.9624"
  },
  '05061': {
  lat: 18.4489,
  lng: 9.9624,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.4489,9.9624"
  },
  '05064': {
  lat: 18.434251,
  lng: -69.97013,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.434251,-69.97013"
  },
  '05066': {
  lat: 18.4356,
  lng: 9.9531,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.4356,9.9531"
  },
  '05068': {
  lat: 18.433395,
  lng: -69.964966,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.433395,-69.964966"
  },
  '05070': {
  lat: 18.433471,
  lng: -69.958595,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.433471,-69.958595"
  },
  '05071': {
  lat: 18.473395,
  lng: -69.888244,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.473395,-69.888244"
  },
  '05073': {
  lat: 18.440495,
  lng: -69.952148,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.440495,-69.952148"
  },
  '05075': {
  lat: 18.4441,
  lng: 9.9448,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.4441,9.9448"
  },
  '05076': {
  lat: 18.444,
  lng: 0.9404,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.444,0.9404"
  },
  '05081': {
  lat: 18.474574,
  lng: -69.936845,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.474574,-69.936845"
  },
  '05082': {
  lat: 18.457353,
  lng: -69.936472,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.457353,-69.936472"
  },
  '05083': {
  lat: 18.455786,
  lng: -69.950374,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.455786,-69.950374"
  },
  '05085': {
  lat: 18.4617,
  lng: 9.9521,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.4617,9.9521"
  },
  '05087': {
  lat: 18.462395,
  lng: -69.944723,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.462395,-69.944723"
  },
  '05088': {
  lat: 18.456776,
  lng: -69.96952,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.456776,-69.96952"
  },
  '05091': {
  lat: 18.458832,
  lng: -69.948682,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.458832,-69.948682"
  },
  '05092': {
  lat: 18.4616,
  lng: 9.9503,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.4616,9.9503"
  },
  '05094': {
  lat: 18.4632,
  lng: 9.9486,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.4632,9.9486"
  },
  '05095': {
  lat: 18.470229,
  lng: -69.933735,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.470229,-69.933735"
  },
  '05098': {
  lat: 18.4757,
  lng: 9.9382,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.4757,9.9382"
  },
  '05101': {
  lat: 18.458604,
  lng: -69.928981,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.458604,-69.928981"
  },
  '05104': {
  lat: 18.451465,
  lng: -69.931479,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.451465,-69.931479"
  },
  '05106': {
  lat: 18.4445,
  lng: 9.9313,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.4445,9.9313"
  },
  '05108': {
  lat: 18.4405,
  lng: -69.937486,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.4405,-69.937486"
  },
  '05110': {
  lat: 18.450703,
  lng: -69.932882,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.450703,-69.932882"
  },
  '05111': {
  lat: 18.441127,
  lng: -69.933387,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.441127,-69.933387"
  },
  '05112': {
  lat: 18.4474,
  lng: 9.9322,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.4474,9.9322"
  },
  '05113': {
  lat: 18.4491,
  lng: 9.9297,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.4491,9.9297"
  },
  '05114': {
  lat: 18.450844,
  lng: -69.923346,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.450844,-69.923346"
  },
  '05116': {
  lat: 18.452023,
  lng: -69.92489,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.452023,-69.92489"
  },
  '05117': {
  lat: 18.449456,
  lng: -69.936037,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.449456,-69.936037"
  },
  '05121': {
  lat: 18.455952,
  lng: -69.920345,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.455952,-69.920345"
  },
  '05122': {
  lat: 18.45621,
  lng: -69.924542,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.45621,-69.924542"
  },
  '05124': {
  lat: 18.4595,
  lng: 9.9142,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.4595,9.9142"
  },
  '05130': {
  lat: 18.466894,
  lng: -69.915609,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.466894,-69.915609"
  },
  '05132': {
  lat: 18.4717,
  lng: 9.9047,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.4717,9.9047"
  },
  '05133': {
  lat: 18.4698,
  lng: 9.9306,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.4698,9.9306"
  },
  '05134': {
  lat: 18.476499,
  lng: -69.925401,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.476499,-69.925401"
  },
  '05224': {
  lat: 18.48,
  lng: -69.9058,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.48,-69.9058"
  },
  '05232': {
  lat: 18.470634,
  lng: -69.900197,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.470634,-69.900197"
  },
  '05233': {
  lat: 18.463681,
  lng: -69.90329,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.463681,-69.90329"
  },
  '05234': {
  lat: 18.4669,
  lng: 9.9078,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.4669,9.9078"
  },
  '05235': {
  lat: 18.4747,
  lng: 9.901,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.4747,9.901"
  },
  '05238': {
  lat: 18.4627,
  lng: 9.9014,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.4627,9.9014"
  },
  '05243': {
  lat: 18.475337,
  lng: -69.902037,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.475337,-69.902037"
  },
  '05246': {
  lat: 18.466907,
  lng: -69.905103,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.466907,-69.905103"
  },
  '05252': {
  lat: 18.4728,
  lng: 9.8952,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.4728,9.8952"
  },
  '05253': {
  lat: 18.471,
  lng: 0.8985,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.471,0.8985"
  },
  '05259': {
  lat: 18.474,
  lng: 0.8932,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.474,0.8932"
  },
  '05260': {
  lat: 18.479229,
  lng: -69.894809,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.479229,-69.894809"
  },
  '05261': {
  lat: 18.476372,
  lng: -69.889708,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.476372,-69.889708"
  },
  '05262': {
  lat: 18.4763,
  lng: 9.8947,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.4763,9.8947"
  },
  '05345': {
  lat: 18.484824,
  lng: -69.889157,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.484824,-69.889157"
  },
  '05347': {
  lat: 18.485706,
  lng: -69.889829,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.485706,-69.889829"
  },
  '05629': {
  lat: 18.4557,
  lng: 9.963,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.4557,9.963"
  },
  '05886': {
  lat: 18.472647,
  lng: -69.95523,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.472647,-69.95523"
  },
  '05925': {
  lat: 18.469193,
  lng: -69.965475,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.469193,-69.965475"
  },
  '05926': {
  lat: 18.431128,
  lng: -69.979638,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.431128,-69.979638"
  },
  '05936': {
  lat: 18.473175,
  lng: -69.930287,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.473175,-69.930287"
  },
  '05937': {
  lat: 18.466831,
  lng: -69.940734,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.466831,-69.940734"
  },
  '05955': {
  lat: 18.476486,
  lng: -69.96027,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.476486,-69.96027"
  },
  '05957': {
  lat: 18.4477,
  lng: 9.9518,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.4477,9.9518"
  },
  '05970': {
  lat: 18.4718,
  lng: 9.9441,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.4718,9.9441"
  },
  '05972': {
  lat: 18.471465,
  lng: -69.96568,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.471465,-69.96568"
  },
  '05980': {
  lat: 18.451482,
  lng: -69.947155,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.451482,-69.947155"
  },
  '05983': {
  lat: 18.4504,
  lng: 9.9332,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.4504,9.9332"
  },
  '05997': {
  lat: 18.46008,
  lng: -69.947727,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.46008,-69.947727"
  },
  '06001': {
  lat: 18.4772,
  lng: 9.9247,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.4772,9.9247"
  },
  '06006': {
  lat: 18.480627,
  lng: -69.890329,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.480627,-69.890329"
  },
  '06031': {
  lat: 18.4732,
  lng: 9.9382,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.4732,9.9382"
  },
  '06053': {
  lat: 18.478314,
  lng: -69.924357,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.478314,-69.924357"
  },
  '06054': {
  lat: 18.4504,
  lng: 9.9675,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.4504,9.9675"
  },
  '06089': {
  lat: 18.4298,
  lng: 9.972,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.4298,9.972"
  },
  '06098': {
  lat: 18.429815,
  lng: -69.975891,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.429815,-69.975891"
  },
  '06108': {
  lat: 18.429712,
  lng: -69.976179,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.429712,-69.976179"
  },
  '06109': {
  lat: 18.435632,
  lng: -69.958744,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.435632,-69.958744"
  },
  '06115': {
  lat: 18.436959,
  lng: -69.959799,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.436959,-69.959799"
  },
  '06116': {
  lat: 18.44286,
  lng: -69.948932,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.44286,-69.948932"
  },
  '06138': {
  lat: 18.445302,
  lng: -69.954946,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.445302,-69.954946"
  },
  '06191': {
  lat: 18.4664,
  lng: 9.9339,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.4664,9.9339"
  },
  '06204': {
  lat: 18.447508,
  lng: -69.968307,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.447508,-69.968307"
  },
  '06210': {
  lat: 18.475249,
  lng: -69.894741,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.475249,-69.894741"
  },
  '06227': {
  lat: 18.450238,
  lng: -69.961613,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.450238,-69.961613"
  },
  '06229': {
  lat: 18.4679,
  lng: 9.9306,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.4679,9.9306"
  },
  '06231': {
  lat: 18.479588,
  lng: -69.940958,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.479588,-69.940958"
  },
  '06244': {
  lat: 18.477284,
  lng: -69.94209,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.477284,-69.94209"
  },
  '06248': {
  lat: 18.464053,
  lng: -69.957648,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.464053,-69.957648"
  },
  '06249': {
  lat: 18.4591,
  lng: 9.9512,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.4591,9.9512"
  },
  '06251': {
  lat: 18.470637,
  lng: -69.916797,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.470637,-69.916797"
  },
  '06252': {
  lat: 18.467781,
  lng: -69.904768,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.467781,-69.904768"
  },
  '06262': {
  lat: 18.4814,
  lng: 9.892,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.4814,9.892"
  },
  '06268': {
  lat: 18.460311,
  lng: -69.942499,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.460311,-69.942499"
  },
  '06270': {
  lat: 18.466664,
  lng: -69.94984,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.466664,-69.94984"
  },
  '06271': {
  lat: 18.451354,
  lng: -69.947572,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.451354,-69.947572"
  },
  '06272': {
  lat: 18.465918,
  lng: -69.9266,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.465918,-69.9266"
  },
  '06288': {
  lat: 18.465598,
  lng: -69.949557,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.465598,-69.949557"
  },
  '06292': {
  lat: 18.461053,
  lng: -69.946422,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.461053,-69.946422"
  },
  '06293': {
  lat: 18.467978,
  lng: -69.956277,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.467978,-69.956277"
  },
  '06294': {
  lat: 18.466804,
  lng: -69.945,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.466804,-69.945"
  },
  '06311': {
  lat: 18.431018,
  lng: -69.969114,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.431018,-69.969114"
  },
  '06312': {
  lat: 18.456479,
  lng: -69.959106,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.456479,-69.959106"
  },
  '06315': {
  lat: 18.457828,
  lng: -69.940128,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.457828,-69.940128"
  },
  '06317': {
  lat: 18.463903,
  lng: -69.964052,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.463903,-69.964052"
  },
  '09447': {
  lat: 18.463307,
  lng: -69.960777,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.463307,-69.960777"
  },
  '09451': {
  lat: 18.434545,
  lng: -69.967105,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.434545,-69.967105"
  },
  '09471': {
  lat: 18.438472,
  lng: -69.95409,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.438472,-69.95409"
  },
  '09475': {
  lat: 18.438067,
  lng: -69.964193,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.438067,-69.964193"
  },
  '09478': {
  lat: 18.458769,
  lng: -69.958257,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.458769,-69.958257"
  },
  '09484': {
  lat: 18.453679,
  lng: -69.966442,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.453679,-69.966442"
  },
  '09693': {
  lat: 18.479735,
  lng: -69.954501,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.479735,-69.954501"
  },
  '09700': {
  lat: 18.428551,
  lng: -69.983603,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.428551,-69.983603"
  },
  '09782': {
  lat: 18.427896,
  lng: -69.9836,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.427896,-69.9836"
  },
  '09800': {
  lat: 18.470694,
  lng: -69.928691,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.470694,-69.928691"
  },
  '09817': {
  lat: 18.456654,
  lng: -69.946452,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.456654,-69.946452"
  },
  '09822': {
  lat: 18.466893,
  lng: -69.96741,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.466893,-69.96741"
  },
  '09831': {
  lat: 18.455686,
  lng: -69.949195,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.455686,-69.949195"
  },
  '09849': {
  lat: 18.479467,
  lng: -69.904812,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.479467,-69.904812"
  },
  '09919': {
  lat: 18.437296,
  lng: -69.963164,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.437296,-69.963164"
  },
  '09971': {
  lat: 18.448231,
  lng: -69.953997,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.448231,-69.953997"
  },
  '10049': {
  lat: 18.477639,
  lng: -69.95486,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.477639,-69.95486"
  },
  '10077': {
  lat: 18.438892,
  lng: -69.950177,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.438892,-69.950177"
  },
  '10131': {
  lat: 18.427041,
  lng: -70.009229,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.427041,-70.009229"
  },
  '10197': {
  lat: 18.465685,
  lng: -69.957228,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.465685,-69.957228"
  },
  '10283': {
  lat: 18.448657,
  lng: -69.963402,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.448657,-69.963402"
  },
  '10344': {
  lat: 18.436085,
  lng: -69.949372,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.436085,-69.949372"
  },
  '10357': {
  lat: 18.48486,
  lng: -69.889087,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.48486,-69.889087"
  },
  '11207': {
  lat: 18.459368,
  lng: -69.957841,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.459368,-69.957841"
  },
  '11357': {
  lat: 18.461202,
  lng: -69.940926,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.461202,-69.940926"
  },
  '11470': {
  lat: 18.477884,
  lng: -69.95474,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.477884,-69.95474"
  },
  '11482': {
  lat: 18.473875,
  lng: -69.951381,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.473875,-69.951381"
  },
  '11655': {
  lat: 18.47439,
  lng: -69.951517,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.47439,-69.951517"
  },
  '11755': {
  lat: 18.453167,
  lng: -69.930638,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.453167,-69.930638"
  },
  '11806': {
  lat: 18.454349,
  lng: -69.952775,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.454349,-69.952775"
  },
  '11830': {
  lat: 18.48045,
  lng: -69.927649,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.48045,-69.927649"
  },
  '11834': {
  lat: 18.468948,
  lng: -69.946395,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.468948,-69.946395"
  },
  '11853': {
  lat: 18.480308,
  lng: -69.89065,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.480308,-69.89065"
  },
  '11898': {
  lat: 18.470557,
  lng: -69.890021,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.470557,-69.890021"
  },
  '11957': {
  lat: 18.474384,
  lng: -69.952787,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.474384,-69.952787"
  },
  '11980': {
  lat: 18.453616,
  lng: -69.930931,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.453616,-69.930931"
  },
  '12107': {
  lat: 18.459882,
  lng: -69.928423,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.459882,-69.928423"
  },
  '12211': {
  lat: 18.463356,
  lng: -69.952586,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.463356,-69.952586"
  },
  '12261': {
  lat: 18.447137,
  lng: -69.931401,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.447137,-69.931401"
  },
  '12279': {
  lat: 18.478918,
  lng: -69.96138,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.478918,-69.96138"
  },
  '12280': {
  lat: 18.457468,
  lng: -69.957576,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.457468,-69.957576"
  },
  '12291': {
  lat: 18.468044,
  lng: -69.948093,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.468044,-69.948093"
  },
  '12294': {
  lat: 18.465233,
  lng: -69.913859,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.465233,-69.913859"
  },
  '12392': {
  lat: 18.48076,
  lng: -69.925295,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.48076,-69.925295"
  },
  '12733': {
  lat: 18.457978,
  lng: -69.930867,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.457978,-69.930867"
  },
  '12943': {
  lat: 18.480777,
  lng: -69.93526,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.480777,-69.93526"
  },
  '13021': {
  lat: 18.454525,
  lng: -69.967309,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.454525,-69.967309"
  },
  '13053': {
  lat: 18.467548,
  lng: -69.951123,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.467548,-69.951123"
  },
  '13095': {
  lat: 18.472376,
  lng: -69.960178,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.472376,-69.960178"
  },
  '13102': {
  lat: 18.445992,
  lng: -69.952916,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.445992,-69.952916"
  },
  '13154': {
  lat: 18.442213,
  lng: -69.973483,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.442213,-69.973483"
  },
  '13169': {
  lat: 18.43269,
  lng: -69.970325,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.43269,-69.970325"
  },
  '13327': {
  lat: 18.45511,
  lng: -69.929598,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.45511,-69.929598"
  },
  '13343': {
  lat: 18.459464,
  lng: -69.966056,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.459464,-69.966056"
  },
  '13585': {
  lat: 18.44655,
  lng: 69.9681,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.44655,69.9681"
  },
  '13586': {
  lat: 18.427596,
  lng: -69.972848,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.427596,-69.972848"
  },
  '13659': {
  lat: 18.473393,
  lng: -69.922803,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.473393,-69.922803"
  },
  '13660': {
  lat: 18.461585,
  lng: -69.956306,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.461585,-69.956306"
  },
  '13661': {
  lat: 18.476852,
  lng: -69.946267,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.476852,-69.946267"
  },
  '13662': {
  lat: 18.452623,
  lng: -69.932237,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.452623,-69.932237"
  },
  '13664': {
  lat: 18.46492,
  lng: -69.940717,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.46492,-69.940717"
  },
  '13665': {
  lat: 18.460008,
  lng: -69.910296,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.460008,-69.910296"
  },
  '13672': {
  lat: 18.465614,
  lng: -69.946967,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.465614,-69.946967"
  },
  '13911': {
  lat: 18.443844,
  lng: -69.961838,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.443844,-69.961838"
  },
  '13925': {
  lat: 18.469811,
  lng: -69.893511,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.469811,-69.893511"
  },
  '13932': {
  lat: 18.465734,
  lng: -69.948933,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.465734,-69.948933"
  },
  '14010': {
  lat: 18.435944,
  lng: -69.955546,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.435944,-69.955546"
  },
  '14015': {
  lat: 18.47064,
  lng: -69.887909,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.47064,-69.887909"
  },
  '14016': {
  lat: 18.466322,
  lng: -69.943057,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.466322,-69.943057"
  },
  '14018': {
  lat: 18.440318,
  lng: -69.958807,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.440318,-69.958807"
  },
  '14021': {
  lat: 18.464215,
  lng: -69.912841,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.464215,-69.912841"
  },
  '14022': {
  lat: 18.451942,
  lng: -69.949154,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.451942,-69.949154"
  },
  '14128': {
  lat: 18.468845,
  lng: -69.944533,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.468845,-69.944533"
  },
  '14129': {
  lat: 18.479541,
  lng: -69.897439,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.479541,-69.897439"
  },
  '14154': {
  lat: 18.467731,
  lng: -69.940703,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.467731,-69.940703"
  },
  '14167': {
  lat: 18.437283,
  lng: -69.949758,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.437283,-69.949758"
  },
  '14171': {
  lat: 18.457451,
  lng: -69.951219,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.457451,-69.951219"
  },
  '14262': {
  lat: 18.478665,
  lng: -69.904096,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.478665,-69.904096"
  },
  '14423': {
  lat: 18.443757,
  lng: -69.932319,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.443757,-69.932319"
  },
  '14581': {
  lat: 18.472334,
  lng: -69.945719,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.472334,-69.945719"
  },
  '15102': {
  lat: 18.460929,
  lng: -69.962211,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.460929,-69.962211"
  },
  '15110': {
  lat: 18.44164,
  lng: -69.936329,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.44164,-69.936329"
  },
  '15113': {
  lat: 18.460149,
  lng: -69.911391,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.460149,-69.911391"
  },
  '15201': {
  lat: 18.449685,
  lng: -69.961857,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.449685,-69.961857"
  },
  '15716': {
  lat: 18.478814,
  lng: -69.95495,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.478814,-69.95495"
  },
  '15820': {
  lat: 18.464781,
  lng: -69.965684,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.464781,-69.965684"
  },
  '15823': {
  lat: 18.435734,
  lng: -69.950517,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.435734,-69.950517"
  },
  '15826': {
  lat: 18.436265,
  lng: -69.965663,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.436265,-69.965663"
  },
  '15829': {
  lat: 18.473636,
  lng: -69.94536,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.473636,-69.94536"
  },
  '15834': {
  lat: 18.445523,
  lng: -69.931289,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.445523,-69.931289"
  },
  '15835': {
  lat: 18.480429,
  lng: -69.931987,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.480429,-69.931987"
  },
  '16689': {
  lat: 18.463769,
  lng: -69.957255,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.463769,-69.957255"
  },
  '16702': {
  lat: 18.473919,
  lng: -69.944994,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.473919,-69.944994"
  },
  '16711': {
  lat: 18.447101,
  lng: -69.958601,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.447101,-69.958601"
  },
  '16713': {
  lat: 18.447493,
  lng: -69.935378,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.447493,-69.935378"
  },
  '16885': {
  lat: 18.451278,
  lng: -69.957538,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.451278,-69.957538"
  },
  '16887': {
  lat: 18.448359,
  lng: -69.957767,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.448359,-69.957767"
  },
  '16888': {
  lat: 18.452746,
  lng: -69.968726,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.452746,-69.968726"
  },
  '16926': {
  lat: 18.446442,
  lng: -69.953163,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.446442,-69.953163"
  },
  '16927': {
  lat: 18.448246,
  lng: -69.958879,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.448246,-69.958879"
  },
  '16938': {
  lat: 18.432646,
  lng: -69.968125,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.432646,-69.968125"
  },
  '17003': {
  lat: 18.459387,
  lng: -69.969265,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.459387,-69.969265"
  },
  '17004': {
  lat: 18.467467,
  lng: -69.898749,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.467467,-69.898749"
  },
  '17005': {
  lat: 18.478013,
  lng: -69.932775,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.478013,-69.932775"
  },
  '17007': {
  lat: 18.446577,
  lng: -69.962701,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.446577,-69.962701"
  },
  '17009': {
  lat: 18.479297,
  lng: -69.902961,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.479297,-69.902961"
  },
  '17010': {
  lat: 18.445943,
  lng: -69.931215,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.445943,-69.931215"
  },
  '17038': {
  lat: 18.471968,
  lng: -69.903177,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.471968,-69.903177"
  },
  '17039': {
  lat: 18.470609,
  lng: -69.903464,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.470609,-69.903464"
  },
  '17141': {
  lat: 18.464114,
  lng: -69.939057,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.464114,-69.939057"
  },
  '17142': {
  lat: 18.446656,
  lng: -69.953375,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.446656,-69.953375"
  },
  '17143': {
  lat: 18.455736,
  lng: -69.967983,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.455736,-69.967983"
  },
  '17152': {
  lat: 18.463697,
  lng: -69.944759,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.463697,-69.944759"
  },
  '17153': {
  lat: 18.476671,
  lng: -69.909868,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.476671,-69.909868"
  },
  '17154': {
  lat: 18.432446,
  lng: -69.972915,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.432446,-69.972915"
  },
  '17186': {
  lat: 18.460624,
  lng: -69.935928,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.460624,-69.935928"
  },
  '17302': {
  lat: 18.433388,
  lng: -69.960936,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.433388,-69.960936"
  },
  '17303': {
  lat: 18.473864,
  lng: -69.900014,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.473864,-69.900014"
  },
  '17306': {
  lat: 18.466214,
  lng: -69.955819,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.466214,-69.955819"
  },
  '17307': {
  lat: 18.457163,
  lng: -69.933616,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.457163,-69.933616"
  },
  '04961': {
  lat: 18.505331,
  lng: -69.996665,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.505331,-69.996665"
  },
  '04963': {
  lat: 18.504414,
  lng: -69.996859,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.504414,-69.996859"
  },
  '04965': {
  lat: 18.517246,
  lng: -69.986215,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.517246,-69.986215"
  },
  '04966': {
  lat: 18.497705,
  lng: -69.929108,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.497705,-69.929108"
  },
  '04969': {
  lat: 18.4862,
  lng: 9.9674,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.4862,9.9674"
  },
  '04979': {
  lat: 18.486582,
  lng: -69.974654,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.486582,-69.974654"
  },
  '05028': {
  lat: 18.500603,
  lng: -69.942409,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.500603,-69.942409"
  },
  '05030': {
  lat: 18.486041,
  lng: -69.955452,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.486041,-69.955452"
  },
  '05031': {
  lat: 18.5026,
  lng: 9.9919,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.5026,9.9919"
  },
  '05034': {
  lat: 18.502826,
  lng: -69.981477,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.502826,-69.981477"
  },
  '05035': {
  lat: 18.486771,
  lng: -69.953361,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.486771,-69.953361"
  },
  '05042': {
  lat: 18.509092,
  lng: -69.942401,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.509092,-69.942401"
  },
  '05043': {
  lat: 18.522168,
  lng: -69.986529,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.522168,-69.986529"
  },
  '05044': {
  lat: 18.504146,
  lng: -69.944208,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.504146,-69.944208"
  },
  '05045': {
  lat: 18.487424,
  lng: -69.939503,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.487424,-69.939503"
  },
  '05141': {
  lat: 18.4906,
  lng: 9.9193,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.4906,9.9193"
  },
  '05142': {
  lat: 18.49133,
  lng: -69.922766,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.49133,-69.922766"
  },
  '05145': {
  lat: 18.492084,
  lng: -69.930875,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.492084,-69.930875"
  },
  '05158': {
  lat: 18.505319,
  lng: -69.926768,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.505319,-69.926768"
  },
  '05162': {
  lat: 18.502561,
  lng: -69.925375,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.502561,-69.925375"
  },
  '05166': {
  lat: 18.503524,
  lng: -69.922023,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.503524,-69.922023"
  },
  '05177': {
  lat: 18.500778,
  lng: -69.927196,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.500778,-69.927196"
  },
  '05223': {
  lat: 18.48727,
  lng: -69.916177,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.48727,-69.916177"
  },
  '05588': {
  lat: 18.50174,
  lng: -69.91852,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.50174,-69.91852"
  },
  '05621': {
  lat: 18.500054,
  lng: -69.958118,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.500054,-69.958118"
  },
  '05721': {
  lat: 18.530469,
  lng: -69.970458,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.530469,-69.970458"
  },
  '05877': {
  lat: 18.496472,
  lng: -69.961693,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.496472,-69.961693"
  },
  '05882': {
  lat: 18.500311,
  lng: -69.991264,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.500311,-69.991264"
  },
  '05884': {
  lat: 18.501954,
  lng: -69.921466,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.501954,-69.921466"
  },
  '05956': {
  lat: 18.488985,
  lng: -69.935217,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.488985,-69.935217"
  },
  '05992': {
  lat: 18.493125,
  lng: -69.938189,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.493125,-69.938189"
  },
  '06003': {
  lat: 18.50092,
  lng: -69.94202,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.50092,-69.94202"
  },
  '06004': {
  lat: 18.488779,
  lng: -69.934351,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.488779,-69.934351"
  },
  '06005': {
  lat: 18.514014,
  lng: -69.941212,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.514014,-69.941212"
  },
  '06026': {
  lat: 18.519575,
  lng: -69.978383,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.519575,-69.978383"
  },
  '06027': {
  lat: 18.499796,
  lng: -69.924405,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.499796,-69.924405"
  },
  '06043': {
  lat: 18.506432,
  lng: -69.937454,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.506432,-69.937454"
  },
  '06044': {
  lat: 18.48338,
  lng: -69.918863,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.48338,-69.918863"
  },
  '06045': {
  lat: 18.506659,
  lng: -69.994792,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.506659,-69.994792"
  },
  '06081': {
  lat: 18.51766,
  lng: -69.990659,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.51766,-69.990659"
  },
  '06087': {
  lat: 18.491293,
  lng: -69.930626,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.491293,-69.930626"
  },
  '06120': {
  lat: 18.511517,
  lng: -69.965711,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.511517,-69.965711"
  },
  '06148': {
  lat: 18.484699,
  lng: -69.927329,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.484699,-69.927329"
  },
  '06159': {
  lat: 18.498022,
  lng: -69.960833,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.498022,-69.960833"
  },
  '06187': {
  lat: 18.5193,
  lng: 9.9791,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.5193,9.9791"
  },
  '06194': {
  lat: 18.490766,
  lng: -69.96747,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.490766,-69.96747"
  },
  '06197': {
  lat: 18.498818,
  lng: -69.923266,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.498818,-69.923266"
  },
  '06198': {
  lat: 18.497,
  lng: 0.9612,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.497,0.9612"
  },
  '06208': {
  lat: 18.510591,
  lng: -69.986422,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.510591,-69.986422"
  },
  '06212': {
  lat: 18.488416,
  lng: -69.940972,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.488416,-69.940972"
  },
  '06218': {
  lat: 18.498757,
  lng: -69.962707,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.498757,-69.962707"
  },
  '06219': {
  lat: 18.501266,
  lng: -69.949951,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.501266,-69.949951"
  },
  '06237': {
  lat: 18.505226,
  lng: -69.97626,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.505226,-69.97626"
  },
  '06246': {
  lat: 18.493444,
  lng: -69.967599,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.493444,-69.967599"
  },
  '06250': {
  lat: 18.511726,
  lng: -69.976579,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.511726,-69.976579"
  },
  '06254': {
  lat: 18.51548,
  lng: -69.989746,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.51548,-69.989746"
  },
  '06263': {
  lat: 18.5015,
  lng: 9.9585,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.5015,9.9585"
  },
  '06266': {
  lat: 18.498191,
  lng: -69.982838,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.498191,-69.982838"
  },
  '06267': {
  lat: 18.501118,
  lng: -69.942361,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.501118,-69.942361"
  },
  '06300': {
  lat: 18.488129,
  lng: -69.967891,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.488129,-69.967891"
  },
  '06301': {
  lat: 18.483629,
  lng: -69.954768,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.483629,-69.954768"
  },
  '06302': {
  lat: 18.494501,
  lng: -69.93222,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.494501,-69.93222"
  },
  '06305': {
  lat: 18.487764,
  lng: -69.944498,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.487764,-69.944498"
  },
  '06307': {
  lat: 18.489266,
  lng: -69.935051,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.489266,-69.935051"
  },
  '06316': {
  lat: 18.501322,
  lng: -69.982657,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.501322,-69.982657"
  },
  '06321': {
  lat: 18.520538,
  lng: -69.987983,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.520538,-69.987983"
  },
  '06323': {
  lat: 18.504144,
  lng: -69.981218,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.504144,-69.981218"
  },
  '09858': {
  lat: 18.509832,
  lng: -69.977446,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.509832,-69.977446"
  },
  '10024': {
  lat: 18.520123,
  lng: -69.983362,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.520123,-69.983362"
  },
  '10059': {
  lat: 18.502159,
  lng: -69.982197,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.502159,-69.982197"
  },
  '10099': {
  lat: 18.511458,
  lng: -69.984825,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.511458,-69.984825"
  },
  '10136': {
  lat: 18.487758,
  lng: -69.967627,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.487758,-69.967627"
  },
  '10327': {
  lat: 18.496391,
  lng: -69.928549,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.496391,-69.928549"
  },
  '10352': {
  lat: 18.482316,
  lng: -69.971857,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.482316,-69.971857"
  },
  '10353': {
  lat: 18.497657,
  lng: -69.92952,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.497657,-69.92952"
  },
  '10530': {
  lat: 18.490557,
  lng: -69.918596,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.490557,-69.918596"
  },
  '10571': {
  lat: 18.483408,
  lng: -69.915006,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.483408,-69.915006"
  },
  '10734': {
  lat: 18.515838,
  lng: -69.954971,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.515838,-69.954971"
  },
  '10989': {
  lat: 18.512222,
  lng: -69.984841,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.512222,-69.984841"
  },
  '11326': {
  lat: 18.483964,
  lng: -69.973765,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.483964,-69.973765"
  },
  '11346': {
  lat: 18.491539,
  lng: -69.972177,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.491539,-69.972177"
  },
  '11426': {
  lat: 18.491438,
  lng: -69.96736,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.491438,-69.96736"
  },
  '11566': {
  lat: 18.500358,
  lng: -69.959299,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.500358,-69.959299"
  },
  '11595': {
  lat: 18.5,
  lng: 236,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.5,236"
  },
  '11895': {
  lat: 18.492929,
  lng: -69.97512,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.492929,-69.97512"
  },
  '12008': {
  lat: 18.483496,
  lng: -69.9624,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.483496,-69.9624"
  },
  '12187': {
  lat: 18.502523,
  lng: -69.953564,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.502523,-69.953564"
  },
  '12225': {
  lat: 18.492272,
  lng: -69.967474,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.492272,-69.967474"
  },
  '12298': {
  lat: 18.498004,
  lng: -69.960891,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.498004,-69.960891"
  },
  '12316': {
  lat: 18.505178,
  lng: -69.997229,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.505178,-69.997229"
  },
  '12340': {
  lat: 18.506649,
  lng: -69.938052,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.506649,-69.938052"
  },
  '12383': {
  lat: 18.487367,
  lng: -69.969837,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.487367,-69.969837"
  },
  '12384': {
  lat: 18.487726,
  lng: -69.970758,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.487726,-69.970758"
  },
  '12398': {
  lat: 18.506362,
  lng: -69.937509,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.506362,-69.937509"
  },
  '12400': {
  lat: 18.488899,
  lng: -69.917831,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.488899,-69.917831"
  },
  '12409': {
  lat: 18.489326,
  lng: -69.973452,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.489326,-69.973452"
  },
  '12442': {
  lat: 18.499724,
  lng: -69.964058,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.499724,-69.964058"
  },
  '12500': {
  lat: 18.504259,
  lng: -69.939924,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.504259,-69.939924"
  },
  '12506': {
  lat: 18.494617,
  lng: -69.928882,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.494617,-69.928882"
  },
  '12602': {
  lat: 18.520109,
  lng: -69.969133,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.520109,-69.969133"
  },
  '12603': {
  lat: 18.484876,
  lng: -69.966136,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.484876,-69.966136"
  },
  '12607': {
  lat: 18.494234,
  lng: -69.929611,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.494234,-69.929611"
  },
  '12637': {
  lat: 18.520118,
  lng: -69.969053,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.520118,-69.969053"
  },
  '12642': {
  lat: 18.499039,
  lng: -69.934187,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.499039,-69.934187"
  },
  '12752': {
  lat: 18.498081,
  lng: -69.960464,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.498081,-69.960464"
  },
  '12895': {
  lat: 18.50231,
  lng: -69.938315,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.50231,-69.938315"
  },
  '12983': {
  lat: 18.490526,
  lng: -69.971496,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.490526,-69.971496"
  },
  '12993': {
  lat: 18.510372,
  lng: -69.976642,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.510372,-69.976642"
  },
  '13145': {
  lat: 18.504284,
  lng: -69.988432,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.504284,-69.988432"
  },
  '13237': {
  lat: 18.512403,
  lng: -69.997532,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.512403,-69.997532"
  },
  '13471': {
  lat: 18.495144,
  lng: -69.930101,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.495144,-69.930101"
  },
  '13474': {
  lat: 18.492955,
  lng: -69.928918,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.492955,-69.928918"
  },
  '13476': {
  lat: 18.49887,
  lng: -69.984822,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.49887,-69.984822"
  },
  '13498': {
  lat: 18.495871,
  lng: -69.927426,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.495871,-69.927426"
  },
  '13537': {
  lat: 18.511184,
  lng: -69.979644,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.511184,-69.979644"
  },
  '13674': {
  lat: 18.490318,
  lng: -69.972324,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.490318,-69.972324"
  },
  '13675': {
  lat: 18.496512,
  lng: -69.963227,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.496512,-69.963227"
  },
  '13676': {
  lat: 18.496879,
  lng: -69.965752,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.496879,-69.965752"
  },
  '13680': {
  lat: 18.498758,
  lng: -69.935941,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.498758,-69.935941"
  },
  '13682': {
  lat: 18.501274,
  lng: -69.928598,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.501274,-69.928598"
  },
  '13928': {
  lat: 18.495714,
  lng: -69.987227,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.495714,-69.987227"
  },
  '13929': {
  lat: 18.490185,
  lng: -69.937862,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.490185,-69.937862"
  },
  '14934': {
  lat: 18.489963,
  lng: -69.938187,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.489963,-69.938187"
  },
  '15850': {
  lat: 18.504559,
  lng: -69.950021,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.504559,-69.950021"
  },
  '15853': {
  lat: 18.48944,
  lng: -69.973789,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.48944,-69.973789"
  },
  '15854': {
  lat: 18.490685,
  lng: -69.940398,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.490685,-69.940398"
  },
  '15855': {
  lat: 18.521341,
  lng: -69.986156,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.521341,-69.986156"
  },
  '15856': {
  lat: 18.485751,
  lng: -69.943155,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.485751,-69.943155"
  },
  '15857': {
  lat: 18.521886,
  lng: -69.978734,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.521886,-69.978734"
  },
  '15859': {
  lat: 18.494298,
  lng: -69.985897,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.494298,-69.985897"
  },
  '15860': {
  lat: 18.486153,
  lng: -69.919815,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.486153,-69.919815"
  },
  '15862': {
  lat: 18.520212,
  lng: -69.987686,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.520212,-69.987686"
  },
  '15864': {
  lat: 18.485602,
  lng: -69.951326,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.485602,-69.951326"
  },
  '15865': {
  lat: 18.503335,
  lng: -69.951147,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.503335,-69.951147"
  },
  '15866': {
  lat: 18.518617,
  lng: -69.986218,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.518617,-69.986218"
  },
  '15867': {
  lat: 18.480724,
  lng: -69.969745,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.480724,-69.969745"
  },
  '15868': {
  lat: 18.509546,
  lng: -69.974924,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.509546,-69.974924"
  },
  '15869': {
  lat: 18.486698,
  lng: -69.970826,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.486698,-69.970826"
  },
  '16462': {
  lat: 18.494176,
  lng: -69.93481,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.494176,-69.93481"
  },
  '16725': {
  lat: 18.490833,
  lng: -69.938483,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.490833,-69.938483"
  },
  '16727': {
  lat: 18.497187,
  lng: -69.927391,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.497187,-69.927391"
  },
  '16745': {
  lat: 18.483987,
  lng: -69.947188,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.483987,-69.947188"
  },
  '16748': {
  lat: 18.502737,
  lng: -69.960077,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.502737,-69.960077"
  },
  '16750': {
  lat: 18.506931,
  lng: -69.935588,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.506931,-69.935588"
  },
  '16918': {
  lat: 18.483415,
  lng: -69.922634,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.483415,-69.922634"
  },
  '16919': {
  lat: 18.503321,
  lng: -69.988863,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.503321,-69.988863"
  },
  '16921': {
  lat: 18.510468,
  lng: -69.998106,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.510468,-69.998106"
  },
  '17040': {
  lat: 18.498264,
  lng: -69.964888,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.498264,-69.964888"
  },
  '17122': {
  lat: 18.484521,
  lng: -69.964007,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.484521,-69.964007"
  },
  '17140': {
  lat: 18.510967,
  lng: -69.990624,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.510967,-69.990624"
  },
  '17144': {
  lat: 18.511506,
  lng: -69.986162,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.511506,-69.986162"
  },
  '17147': {
  lat: 18.523546,
  lng: -69.994748,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.523546,-69.994748"
  },
  '17177': {
  lat: 18.494731,
  lng: -69.966021,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.494731,-69.966021"
  },
  '17180': {
  lat: 18.503055,
  lng: -69.956679,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.503055,-69.956679"
  },
  '17195': {
  lat: 18.48861,
  lng: 69.94261,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.48861,69.94261"
  },
  '17283': {
  lat: 18.504262,
  lng: -69.934686,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.504262,-69.934686"
  },
  '17284': {
  lat: 18.491427,
  lng: -69.967223,
  direccion: "SANTO DOMINGO DE GUZMÁN, DISTRITO NACIONAL",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.491427,-69.967223"
  },
  '04640': {
  lat: 18.478596,
  lng: -70.008814,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.478596,-70.008814"
  },
  '04936': {
  lat: 18.445956,
  lng: -69.987847,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.445956,-69.987847"
  },
  '04939': {
  lat: 18.44717,
  lng: -69.983854,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.44717,-69.983854"
  },
  '04940': {
  lat: 18.449612,
  lng: -69.985234,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.449612,-69.985234"
  },
  '04942': {
  lat: 18.428132,
  lng: -69.992149,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.428132,-69.992149"
  },
  '04943': {
  lat: 18.450628,
  lng: -69.985079,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.450628,-69.985079"
  },
  '04946': {
  lat: 18.463993,
  lng: -69.995824,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.463993,-69.995824"
  },
  '04948': {
  lat: 18.472928,
  lng: -69.985727,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.472928,-69.985727"
  },
  '04955': {
  lat: 18.478626,
  lng: -69.984839,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.478626,-69.984839"
  },
  '04957': {
  lat: 18.480229,
  lng: -69.984196,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.480229,-69.984196"
  },
  '04959': {
  lat: 18.479133,
  lng: -69.99064,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.479133,-69.99064"
  },
  '04960': {
  lat: 18.488566,
  lng: -69.986827,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.488566,-69.986827"
  },
  '04970': {
  lat: 18.480165,
  lng: -69.976781,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.480165,-69.976781"
  },
  '04971': {
  lat: 18.47999,
  lng: -69.972876,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.47999,-69.972876"
  },
  '04972': {
  lat: 18.479343,
  lng: -69.976443,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.479343,-69.976443"
  },
  '04973': {
  lat: 18.479595,
  lng: -69.975275,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.479595,-69.975275"
  },
  '04985': {
  lat: 18.475448,
  lng: -69.974573,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.475448,-69.974573"
  },
  '04986': {
  lat: 18.472454,
  lng: -69.986429,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.472454,-69.986429"
  },
  '04988': {
  lat: 18.469385,
  lng: -69.975785,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.469385,-69.975785"
  },
  '04993': {
  lat: 18.471273,
  lng: -69.974947,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.471273,-69.974947"
  },
  '04996': {
  lat: 18.459024,
  lng: -69.979691,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.459024,-69.979691"
  },
  '05000': {
  lat: 18.457159,
  lng: -69.988623,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.457159,-69.988623"
  },
  '05002': {
  lat: 18.4717,
  lng: -69.989095,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.4717,-69.989095"
  },
  '05004': {
  lat: 18.4691,
  lng: -69.986808,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.4691,-69.986808"
  },
  '05006': {
  lat: 18.46403,
  lng: -69.999513,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.46403,-69.999513"
  },
  '05009': {
  lat: 18.469611,
  lng: -69.972185,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.469611,-69.972185"
  },
  '05063': {
  lat: 18.483703,
  lng: -70.029001,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.483703,-70.029001"
  },
  '05567': {
  lat: 18.4758,
  lng: -69.978455,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.4758,-69.978455"
  },
  '05570': {
  lat: 18.477358,
  lng: -69.982565,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.477358,-69.982565"
  },
  '05572': {
  lat: 18.4643,
  lng: 9.9801,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.4643,9.9801"
  },
  '05574': {
  lat: 18.461399,
  lng: -69.978236,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.461399,-69.978236"
  },
  '05575': {
  lat: 18.464204,
  lng: -69.977931,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.464204,-69.977931"
  },
  '05576': {
  lat: 18.462966,
  lng: -69.978045,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.462966,-69.978045"
  },
  '05713': {
  lat: 18.467819,
  lng: -70.002182,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.467819,-70.002182"
  },
  '05763': {
  lat: 18.481006,
  lng: -70.008387,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.481006,-70.008387"
  },
  '05764': {
  lat: 18.478852,
  lng: -70.001325,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.478852,-70.001325"
  },
  '05765': {
  lat: 18.475715,
  lng: -69.991751,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.475715,-69.991751"
  },
  '05766': {
  lat: 18.469388,
  lng: -70.035417,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.469388,-70.035417"
  },
  '05770': {
  lat: 18.463354,
  lng: -70.002815,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.463354,-70.002815"
  },
  '05870': {
  lat: 18.509903,
  lng: -70.008843,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.509903,-70.008843"
  },
  '05961': {
  lat: 18.453188,
  lng: -69.976913,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.453188,-69.976913"
  },
  '05973': {
  lat: 18.432583,
  lng: -69.996522,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.432583,-69.996522"
  },
  '05989': {
  lat: 18.471687,
  lng: -69.973954,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.471687,-69.973954"
  },
  '06057': {
  lat: 18.478166,
  lng: -69.992979,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.478166,-69.992979"
  },
  '06088': {
  lat: 18.427812,
  lng: -69.994808,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.427812,-69.994808"
  },
  '06091': {
  lat: 18.479009,
  lng: -70.016335,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.479009,-70.016335"
  },
  '06092': {
  lat: 18.474198,
  lng: -70.007508,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.474198,-70.007508"
  },
  '06097': {
  lat: 18.468186,
  lng: -69.999479,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.468186,-69.999479"
  },
  '06100': {
  lat: 18.4678,
  lng: 9.9796,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.4678,9.9796"
  },
  '06101': {
  lat: 18.488128,
  lng: -70.004571,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.488128,-70.004571"
  },
  '06103': {
  lat: 18.455505,
  lng: -69.985852,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.455505,-69.985852"
  },
  '06105': {
  lat: 18.4767,
  lng: 9.9935,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.4767,9.9935"
  },
  '06106': {
  lat: 18.474257,
  lng: -69.997428,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.474257,-69.997428"
  },
  '06107': {
  lat: 18.471246,
  lng: -69.990143,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.471246,-69.990143"
  },
  '06112': {
  lat: 18.4482,
  lng: 9.9875,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.4482,9.9875"
  },
  '06113': {
  lat: 18.468169,
  lng: -69.983725,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.468169,-69.983725"
  },
  '06117': {
  lat: 18.427665,
  lng: -69.994706,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.427665,-69.994706"
  },
  '06118': {
  lat: 18.443226,
  lng: -69.990591,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.443226,-69.990591"
  },
  '06139': {
  lat: 18.46915,
  lng: -69.98194,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.46915,-69.98194"
  },
  '07108': {
  lat: 18.470044,
  lng: -69.991312,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.470044,-69.991312"
  },
  '08350': {
  lat: 18.46642,
  lng: -69.982191,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.46642,-69.982191"
  },
  '09050': {
  lat: 18.444348,
  lng: -69.989645,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.444348,-69.989645"
  },
  '09255': {
  lat: 18.473428,
  lng: -69.986654,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.473428,-69.986654"
  },
  '09271': {
  lat: 18.479,
  lng: 0.0101,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.479,0.0101"
  },
  '09277': {
  lat: 18.427096,
  lng: -69.993978,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.427096,-69.993978"
  },
  '09285': {
  lat: 18.477284,
  lng: -70.038409,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.477284,-70.038409"
  },
  '09330': {
  lat: 18.508536,
  lng: -70.014816,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.508536,-70.014816"
  },
  '09434': {
  lat: 18.473228,
  lng: -69.974021,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.473228,-69.974021"
  },
  '09439': {
  lat: 18.4843,
  lng: -70.006345,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.4843,-70.006345"
  },
  '09442': {
  lat: 18.474226,
  lng: -69.974244,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.474226,-69.974244"
  },
  '09444': {
  lat: 18.488249,
  lng: -69.984656,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.488249,-69.984656"
  },
  '09445': {
  lat: 18.436531,
  lng: -70.000213,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.436531,-70.000213"
  },
  '09446': {
  lat: 18.483612,
  lng: -69.99237,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.483612,-69.99237"
  },
  '09453': {
  lat: 18.4915,
  lng: 9.9882,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.4915,9.9882"
  },
  '09455': {
  lat: 18.482713,
  lng: -69.993353,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.482713,-69.993353"
  },
  '09456': {
  lat: 18.438198,
  lng: -69.995851,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.438198,-69.995851"
  },
  '09457': {
  lat: 18.476311,
  lng: -69.98758,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.476311,-69.98758"
  },
  '09458': {
  lat: 18.465081,
  lng: -69.996308,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.465081,-69.996308"
  },
  '09459': {
  lat: 18.461481,
  lng: -69.977142,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.461481,-69.977142"
  },
  '09460': {
  lat: 18.467009,
  lng: -70.003775,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.467009,-70.003775"
  },
  '09461': {
  lat: 18.485279,
  lng: -69.995227,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.485279,-69.995227"
  },
  '09463': {
  lat: 18.486323,
  lng: -70.007234,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.486323,-70.007234"
  },
  '09466': {
  lat: 18.478022,
  lng: -70.005229,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.478022,-70.005229"
  },
  '09473': {
  lat: 18.468635,
  lng: -69.978913,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.468635,-69.978913"
  },
  '09476': {
  lat: 18.44629,
  lng: -69.986162,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.44629,-69.986162"
  },
  '09477': {
  lat: 18.465291,
  lng: -69.97606,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.465291,-69.97606"
  },
  '09479': {
  lat: 18.479469,
  lng: -70.010263,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.479469,-70.010263"
  },
  '09480': {
  lat: 18.477261,
  lng: -69.992341,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.477261,-69.992341"
  },
  '09482': {
  lat: 18.477261,
  lng: -69.992341,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.477261,-69.992341"
  },
  '09483': {
  lat: 18.459349,
  lng: -69.988313,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.459349,-69.988313"
  },
  '09555': {
  lat: 18.480983,
  lng: -70.03351,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.480983,-70.03351"
  },
  '09558': {
  lat: 18.495717,
  lng: -70.05266,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.495717,-70.05266"
  },
  '09622': {
  lat: 18.483363,
  lng: -70.030775,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.483363,-70.030775"
  },
  '09626': {
  lat: 18.488636,
  lng: -69.989716,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.488636,-69.989716"
  },
  '09751': {
  lat: 18.478235,
  lng: -69.988241,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.478235,-69.988241"
  },
  '09768': {
  lat: 18.43492,
  lng: -69.99829,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.43492,-69.99829"
  },
  '09780': {
  lat: 18.461389,
  lng: -69.978231,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.461389,-69.978231"
  },
  '09781': {
  lat: 18.462784,
  lng: -69.991732,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.462784,-69.991732"
  },
  '09828': {
  lat: 18.437478,
  lng: -69.999351,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.437478,-69.999351"
  },
  '09843': {
  lat: 18.488023,
  lng: -70.009619,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.488023,-70.009619"
  },
  '09848': {
  lat: 18.482743,
  lng: -69.97722,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.482743,-69.97722"
  },
  '09861': {
  lat: 18.458456,
  lng: -69.979669,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.458456,-69.979669"
  },
  '09917': {
  lat: 18.449147,
  lng: -69.984621,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.449147,-69.984621"
  },
  '09975': {
  lat: 18.482666,
  lng: -69.977454,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.482666,-69.977454"
  },
  '09984': {
  lat: 18.50618,
  lng: -70.013574,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.50618,-70.013574"
  },
  '10096': {
  lat: 18.463363,
  lng: -70.002848,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.463363,-70.002848"
  },
  '10098': {
  lat: 18.473415,
  lng: -70.00876,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.473415,-70.00876"
  },
  '10104': {
  lat: 18.472442,
  lng: -69.995946,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.472442,-69.995946"
  },
  '10139': {
  lat: 18.478375,
  lng: -69.973928,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.478375,-69.973928"
  },
  '10404': {
  lat: 18.458708,
  lng: -69.989923,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.458708,-69.989923"
  },
  '10531': {
  lat: 18.478193,
  lng: -69.980172,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.478193,-69.980172"
  },
  '10686': {
  lat: 18.4691,
  lng: 9.9811,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.4691,9.9811"
  },
  '10699': {
  lat: 18.465,
  lng: 0.9788,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.465,0.9788"
  },
  '10825': {
  lat: 18.452848,
  lng: -69.978752,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.452848,-69.978752"
  },
  '10887': {
  lat: 18.475827,
  lng: -69.992749,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.475827,-69.992749"
  },
  '11050': {
  lat: 18.478892,
  lng: -69.972013,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.478892,-69.972013"
  },
  '11250': {
  lat: 18.436374,
  lng: -69.998862,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.436374,-69.998862"
  },
  '11332': {
  lat: 18.448426,
  lng: -69.985943,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.448426,-69.985943"
  },
  '11352': {
  lat: 18.510556,
  lng: -70.00905,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.510556,-70.00905"
  },
  '11454': {
  lat: 18.469842,
  lng: -69.981088,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.469842,-69.981088"
  },
  '11590': {
  lat: 18.479631,
  lng: -70.037134,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.479631,-70.037134"
  },
  '11684': {
  lat: 18.464597,
  lng: -69.981147,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.464597,-69.981147"
  },
  '11724': {
  lat: 18.471808,
  lng: -70.035199,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.471808,-70.035199"
  },
  '11770': {
  lat: 18.427844,
  lng: -70.009255,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.427844,-70.009255"
  },
  '11822': {
  lat: 18.471529,
  lng: -69.999249,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.471529,-69.999249"
  },
  '11901': {
  lat: 18.471312,
  lng: -69.994702,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.471312,-69.994702"
  },
  '11903': {
  lat: 18.476005,
  lng: -69.981811,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.476005,-69.981811"
  },
  '11960': {
  lat: 18.484613,
  lng: -70.044489,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.484613,-70.044489"
  },
  '12181': {
  lat: 18.467209,
  lng: -69.978303,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.467209,-69.978303"
  },
  '12183': {
  lat: 18.470714,
  lng: -69.980866,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.470714,-69.980866"
  },
  '12213': {
  lat: 18.481173,
  lng: -70.039106,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.481173,-70.039106"
  },
  '12258': {
  lat: 18.440334,
  lng: -69.995205,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.440334,-69.995205"
  },
  '12269': {
  lat: 18.475805,
  lng: -69.975505,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.475805,-69.975505"
  },
  '12380': {
  lat: 18.446774,
  lng: -69.98476,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.446774,-69.98476"
  },
  '12406': {
  lat: 18.475542,
  lng: -69.996915,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.475542,-69.996915"
  },
  '12453': {
  lat: 18.448563,
  lng: -69.985942,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.448563,-69.985942"
  },
  '12471': {
  lat: 18.458028,
  lng: -69.986858,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.458028,-69.986858"
  },
  '12852': {
  lat: 18.496484,
  lng: -70.052751,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.496484,-70.052751"
  },
  '12954': {
  lat: 18.443387,
  lng: -69.990458,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.443387,-69.990458"
  },
  '12957': {
  lat: 18.450694,
  lng: -69.988621,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.450694,-69.988621"
  },
  '12991': {
  lat: 18.445845,
  lng: -69.990671,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.445845,-69.990671"
  },
  '13009': {
  lat: 18.469527,
  lng: -69.981888,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.469527,-69.981888"
  },
  '13019': {
  lat: 18.461255,
  lng: -69.981955,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.461255,-69.981955"
  },
  '13026': {
  lat: 18.47391,
  lng: -69.980195,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.47391,-69.980195"
  },
  '13072': {
  lat: 18.479964,
  lng: -69.986735,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.479964,-69.986735"
  },
  '13206': {
  lat: 18.461502,
  lng: -69.981179,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.461502,-69.981179"
  },
  '13267': {
  lat: 18.466594,
  lng: -69.996723,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.466594,-69.996723"
  },
  '13344': {
  lat: 18.446236,
  lng: -69.988721,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.446236,-69.988721"
  },
  '13459': {
  lat: 18.468879,
  lng: -69.976687,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.468879,-69.976687"
  },
  '13460': {
  lat: 18.476145,
  lng: -69.978295,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.476145,-69.978295"
  },
  '13461': {
  lat: 18.478204,
  lng: -70.040368,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.478204,-70.040368"
  },
  '13509': {
  lat: 18.472889,
  lng: -69.982965,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.472889,-69.982965"
  },
  '13590': {
  lat: 18.454819,
  lng: -69.984838,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.454819,-69.984838"
  },
  '13591': {
  lat: 18.487359,
  lng: -70.010028,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.487359,-70.010028"
  },
  '13854': {
  lat: 18.486871,
  lng: -70.030621,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.486871,-70.030621"
  },
  '13999': {
  lat: 18.50559,
  lng: -70.028583,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.50559,-70.028583"
  },
  '14007': {
  lat: 18.465026,
  lng: -70.009817,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.465026,-70.009817"
  },
  '14014': {
  lat: 18.468433,
  lng: -70.000125,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.468433,-70.000125"
  },
  '14017': {
  lat: 18.438409,
  lng: -70.001367,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.438409,-70.001367"
  },
  '14040': {
  lat: 18.489821,
  lng: -70.015097,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.489821,-70.015097"
  },
  '14142': {
  lat: 18.492475,
  lng: -69.988587,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.492475,-69.988587"
  },
  '14163': {
  lat: 18.460639,
  lng: -69.97386,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.460639,-69.97386"
  },
  '14445': {
  lat: 18.477369,
  lng: -69.992727,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.477369,-69.992727"
  },
  '14447': {
  lat: 18.475908,
  lng: -70.00064,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.475908,-70.00064"
  },
  '14779': {
  lat: 18.480839,
  lng: -69.994258,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.480839,-69.994258"
  },
  '14948': {
  lat: 18.467601,
  lng: -70.004131,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.467601,-70.004131"
  },
  '15723': {
  lat: 18.465786,
  lng: -69.988562,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.465786,-69.988562"
  },
  '15724': {
  lat: 18.491688,
  lng: -69.991896,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.491688,-69.991896"
  },
  '15726': {
  lat: 18.495526,
  lng: -70.008652,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.495526,-70.008652"
  },
  '15727': {
  lat: 18.448672,
  lng: -69.986056,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.448672,-69.986056"
  },
  '15728': {
  lat: 18.484233,
  lng: -69.99536,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.484233,-69.99536"
  },
  '15729': {
  lat: 18.487512,
  lng: -70.005341,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.487512,-70.005341"
  },
  '15732': {
  lat: 18.471263,
  lng: -69.973337,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.471263,-69.973337"
  },
  '15733': {
  lat: 18.48595,
  lng: -69.989167,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.48595,-69.989167"
  },
  '15734': {
  lat: 18.462685,
  lng: -69.974325,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.462685,-69.974325"
  },
  '15735': {
  lat: 18.430525,
  lng: -69.992448,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.430525,-69.992448"
  },
  '15737': {
  lat: 18.488634,
  lng: -70.007458,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.488634,-70.007458"
  },
  '15810': {
  lat: 18.48581,
  lng: -70.014755,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.48581,-70.014755"
  },
  '15815': {
  lat: 18.485046,
  lng: -70.011265,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.485046,-70.011265"
  },
  '16855': {
  lat: 18.459096,
  lng: -69.988373,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.459096,-69.988373"
  },
  '16889': {
  lat: 18.451427,
  lng: -69.990118,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.451427,-69.990118"
  },
  '16890': {
  lat: 18.48769,
  lng: -70.009047,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.48769,-70.009047"
  },
  '16891': {
  lat: 18.475087,
  lng: -69.988006,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.475087,-69.988006"
  },
  '16892': {
  lat: 18.471858,
  lng: -69.999883,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.471858,-69.999883"
  },
  '16895': {
  lat: 18.484915,
  lng: -69.992247,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.484915,-69.992247"
  },
  '16910': {
  lat: 18.447359,
  lng: -69.985522,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.447359,-69.985522"
  },
  '17050': {
  lat: 18.45908,
  lng: -69.986389,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.45908,-69.986389"
  },
  '17171': {
  lat: 18.47056,
  lng: -69.973719,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.47056,-69.973719"
  },
  '17172': {
  lat: 18.482464,
  lng: -69.992189,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.482464,-69.992189"
  },
  '17174': {
  lat: 18.501095,
  lng: -70.023498,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.501095,-70.023498"
  },
  '17178': {
  lat: 18.463955,
  lng: -69.973504,
  direccion: "SANTO DOMINGO OESTE, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.463955,-69.973504"
  },
  '05718': {
  lat: 18.548937,
  lng: -70.048849,
  direccion: "PEDRO BRAND, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.548937,-70.048849"
  },
  '06073': {
  lat: 18.561795,
  lng: -70.084388,
  direccion: "PEDRO BRAND, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.561795,-70.084388"
  },
  '06188': {
  lat: 18.554164,
  lng: -70.060134,
  direccion: "PEDRO BRAND, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.554164,-70.060134"
  },
  '09370': {
  lat: 18.544225,
  lng: -70.03878,
  direccion: "PEDRO BRAND, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.544225,-70.03878"
  },
  '12312': {
  lat: 18.554111,
  lng: -70.05944,
  direccion: "PEDRO BRAND, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.554111,-70.05944"
  },
  '14821': {
  lat: 18.559152,
  lng: -70.015942,
  direccion: "PEDRO BRAND, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.559152,-70.015942"
  },
  '15147': {
  lat: 18.535049,
  lng: -70.039047,
  direccion: "PEDRO BRAND, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.535049,-70.039047"
  },
  '15918': {
  lat: 18.56362,
  lng: 70.085668,
  direccion: "PEDRO BRAND, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.56362,70.085668"
  },
  '16935': {
  lat: 18.553863,
  lng: -70.061382,
  direccion: "PEDRO BRAND, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.553863,-70.061382"
  },
  '17041': {
  lat: 18.559925,
  lng: -70.077276,
  direccion: "PEDRO BRAND, SANTO DOMINGO",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.559925,-70.077276"
  },
  // ===== FIN CENTROS PRIVADOS =====

  '00211': {
  lat: 18.522054,
  lng: -70.012021,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.522054,-70.012021"
  },
  '00212': {
  lat: 18.529151,
  lng: -70.022639,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.529151,-70.022639"
  },
  '00213': {
  lat: 18.523173,
  lng: -70.014071,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.523173,-70.014071"
  },
  '00214': {
  lat: 18.520652,
  lng: -70.046922,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.520652,-70.046922"
  },
  '00215': {
  lat: 18.528298,
  lng: -70.035638,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.528298,-70.035638"
  },
  '00216': {
  lat: 18.523171,
  lng: -70.002472,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.523171,-70.002472"
  },
  '00218': {
  lat: 18.5414,
  lng: -70.0071,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.5414,-70.0071"
  },
  '00219': {
  lat: 18.542884,
  lng: -69.974481,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.542884,-69.974481"
  },
  '00222': {
  lat: 18.522878,
  lng: -70.020154,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.522878,-70.020154"
  },
  '00224': {
  lat: 18.523404,
  lng: -70.025181,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.523404,-70.025181"
  },
  '00225': {
  lat: 18.518668,
  lng: -70.034645,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.518668,-70.034645"
  },
  '00226': {
  lat: 18.528804,
  lng: -70.028564,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.528804,-70.028564"
  },
  '00227': {
  lat: 18.524407,
  lng: -70.035407,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.524407,-70.035407"
  },
  '00228': {
  lat: 18.528799,
  lng: -70.021994,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.528799,-70.021994"
  },
  '00229': {
  lat: 18.529863,
  lng: -70.019695,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.529863,-70.019695"
  },
  '00230': {
  lat: 18.524452,
  lng: -70.020661,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.524452,-70.020661"
  },
  '00232': {
  lat: 18.517303,
  lng: -70.039248,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.517303,-70.039248"
  },
  '00259': {
  lat: 18.534632,
  lng: -69.990878,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.534632,-69.990878"
  },
  '00285': {
  lat: 18.524604,
  lng: -70.052893,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.524604,-70.052893"
  },
  '00319': {
  lat: 18.516037,
  lng: -70.049673,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.516037,-70.049673"
  },
  '00326': {
  lat: 18.517092,
  lng: -70.034627,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.517092,-70.034627"
  },
  '00327': {
  lat: 18.514423,
  lng: -70.027019,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.514423,-70.027019"
  },
  '00328': {
  lat: 18.532669,
  lng: -70.02715,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.532669,-70.02715"
  },
  '00330': {
  lat: 18.529887,
  lng: -70.025899,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.529887,-70.025899"
  },
  '00331': {
  lat: 18.528291,
  lng: -69.994961,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.528291,-69.994961"
  },
  '00332': {
  lat: 18.53158,
  lng: -70.039187,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.53158,-70.039187"
  },
  '00333': {
  lat: 18.517999,
  lng: -70.017986,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.517999,-70.017986"
  },
  '00348': {
  lat: 18.535444,
  lng: -70.034256,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.535444,-70.034256"
  },
  '00349': {
  lat: 18.527813,
  lng: -70.043162,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.527813,-70.043162"
  },
  '00359': {
  lat: 18.511383,
  lng: -70.025243,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.511383,-70.025243"
  },
  '00396': {
  lat: 18.5108,
  lng: -70.0329,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.5108,-70.0329"
  },
  '00399': {
  lat: 18.525394,
  lng: -70.043285,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.525394,-70.043285"
  },
  '00400': {
  lat: 18.526978,
  lng: -70.034804,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.526978,-70.034804"
  },
  '00403': {
  lat: 18.523287,
  lng: -70.047489,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.523287,-70.047489"
  },
  '00404': {
  lat: 18.529489,
  lng: -70.061571,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.529489,-70.061571"
  },
  '00415': {
  lat: 18.527251,
  lng: -70.036576,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.527251,-70.036576"
  },
  '04847': {
  lat: 18.528614,
  lng: -70.059412,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.528614,-70.059412"
  },
  '04849': {
  lat: 18.513402,
  lng: -70.045386,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.513402,-70.045386"
  },
  '04854': {
  lat: 18.537702,
  lng: -70.003448,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.537702,-70.003448"
  },
  '04856': {
  lat: 18.538133,
  lng: -69.996663,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.538133,-69.996663"
  },
  '04861': {
  lat: 18.544203,
  lng: -70.073966,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.544203,-70.073966"
  },
  '04862': {
  lat: 18.532474,
  lng: -69.985412,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.532474,-69.985412"
  },
  '04872': {
  lat: 18.531538,
  lng: -70.045845,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.531538,-70.045845"
  },
  '05709': {
  lat: 18.522054,
  lng: -70.012021,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.522054,-70.012021"
  },
  '05710': {
  lat: 18.517717,
  lng: -70.018541,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.517717,-70.018541"
  },
  '05712': {
  lat: 18.528298,
  lng: -70.035638,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.528298,-70.035638"
  },
  '05719': {
  lat: 18.523171,
  lng: -70.002472,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.523171,-70.002472"
  },
  '05722': {
  lat: 18.520398,
  lng: -70.027079,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.520398,-70.027079"
  },
  '05723': {
  lat: 18.520307,
  lng: -70.014431,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.520307,-70.014431"
  },
  '05725': {
  lat: 18.522031,
  lng: -70.02036,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.522031,-70.02036"
  },
  '05726': {
  lat: 18.517004,
  lng: -70.022169,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.517004,-70.022169"
  },
  '05727': {
  lat: 18.523404,
  lng: -70.025181,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.523404,-70.025181"
  },
  '05729': {
  lat: 18.521884,
  lng: -70.03308,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.521884,-70.03308"
  },
  '05731': {
  lat: 18.528804,
  lng: -70.028564,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.528804,-70.028564"
  },
  '05734': {
  lat: 18.524407,
  lng: -70.035407,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.524407,-70.035407"
  },
  '05735': {
  lat: 18.528799,
  lng: -70.021994,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.528799,-70.021994"
  },
  '05738': {
  lat: 18.52748,
  lng: -70.026824,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.52748,-70.026824"
  },
  '05740': {
  lat: 18.524452,
  lng: -70.020661,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.524452,-70.020661"
  },
  '05749': {
  lat: 18.517303,
  lng: -70.039248,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.517303,-70.039248"
  },
  '05750': {
  lat: 18.517303,
  lng: -70.039248,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.517303,-70.039248"
  },
  '05799': {
  lat: 18.534632,
  lng: -69.990878,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.534632,-69.990878"
  },
  '05871': {
  lat: 18.523421,
  lng: -70.052075,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.523421,-70.052075"
  },
  '05873': {
  lat: 18.525119,
  lng: -70.052655,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.525119,-70.052655"
  },
  '05998': {
  lat: 18.517092,
  lng: -70.034627,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.517092,-70.034627"
  },
  '05999': {
  lat: 18.519334,
  lng: -70.02801,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.519334,-70.02801"
  },
  '06000': {
  lat: 18.519376,
  lng: -70.029921,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.519376,-70.029921"
  },
  '06008': {
  lat: 18.529887,
  lng: -70.025899,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.529887,-70.025899"
  },
  '06011': {
  lat: 18.526655,
  lng: -70.017282,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.526655,-70.017282"
  },
  '06041': {
  lat: 18.520669,
  lng: -70.01158,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.520669,-70.01158"
  },
  '06050': {
  lat: 18.511383,
  lng: -70.025243,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.511383,-70.025243"
  },
  '06075': {
  lat: 18.514619,
  lng: -70.042639,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.514619,-70.042639"
  },
  '09553': {
  lat: 18.520513,
  lng: -70.042545,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.520513,-70.042545"
  },
  '09747': {
  lat: 18.524452,
  lng: -70.020661,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.524452,-70.020661"
  },
  '09785': {
  lat: 18.518474,
  lng: -70.005967,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.518474,-70.005967"
  },
  '10201': {
  lat: 18.525119,
  lng: -70.052655,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.525119,-70.052655"
  },
  '10954': {
  lat: 18.535976,
  lng: -70.000388,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.535976,-70.000388"
  },
  '10955': {
  lat: 18.542775,
  lng: -69.989303,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.542775,-69.989303"
  },
  '11171': {
  lat: 18.533731,
  lng: -70.062962,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.533731,-70.062962"
  },
  '11531': {
  lat: 18.528804,
  lng: -70.028564,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.528804,-70.028564"
  },
  '11547': {
  lat: 18.517303,
  lng: -70.039248,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.517303,-70.039248"
  },
  '11560': {
  lat: 18.523171,
  lng: -70.002472,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.523171,-70.002472"
  },
  '11574': {
  lat: 18.523171,
  lng: -70.002472,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.523171,-70.002472"
  },
  '11619': {
  lat: 18.523171,
  lng: -70.002472,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.523171,-70.002472"
  },
  '11882': {
  lat: 18.517303,
  lng: -70.039248,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.517303,-70.039248"
  },
  '11959': {
  lat: 18.514423,
  lng: -70.027019,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.514423,-70.027019"
  },
  '11961': {
  lat: 18.523272,
  lng: -70.035924,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.523272,-70.035924"
  },
  '12370': {
  lat: 18.5232,
  lng: -70.0359,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.5232,-70.0359"
  },
  '12965': {
  lat: 18.531728,
  lng: -70.03983,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.531728,-70.03983"
  },
  '13158': {
  lat: 18.526854,
  lng: -70.03419,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.526854,-70.03419"
  },
  '13338': {
  lat: 18.530754,
  lng: -69.998529,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.530754,-69.998529"
  },
  '13362': {
  lat: 18.528804,
  lng: -70.028564,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.528804,-70.028564"
  },
  '13400': {
  lat: 18.52608,
  lng: -70.043924,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.52608,-70.043924"
  },
  '13401': {
  lat: 18.533526,
  lng: -70.063252,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.533526,-70.063252"
  },
  '13402': {
  lat: 18.509445,
  lng: -70.040475,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.509445,-70.040475"
  },
  '13403': {
  lat: 18.538645,
  lng: -70.014899,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.538645,-70.014899"
  },
  '13404': {
  lat: 18.517092,
  lng: -70.034627,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.517092,-70.034627"
  },
  '14122': {
  lat: 18.521611,
  lng: -70.009833,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.521611,-70.009833"
  },
  '14125': {
  lat: 18.543967,
  lng: -70.073561,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.543967,-70.073561"
  },
  '14153': {
  lat: 18.543967,
  lng: -70.073561,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.543967,-70.073561"
  },
  '14327': {
  lat: 18.540068,
  lng: -69.977363,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.540068,-69.977363"
  },
  '14328': {
  lat: 18.542789,
  lng: -69.988502,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.542789,-69.988502"
  },
  '14340': {
  lat: 18.553284,
  lng: -70.075006,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.553284,-70.075006"
  },
  '14797': {
  lat: 18.512197,
  lng: -70.047551,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.512197,-70.047551"
  },
  '14815': {
  lat: 18.530223,
  lng: -69.998209,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.530223,-69.998209"
  },
  '14820': {
  lat: 18.521379,
  lng: -70.059801,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.521379,-70.059801"
  },
  '14822': {
  lat: 18.530112,
  lng: -70.042438,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.530112,-70.042438"
  },
  '15031': {
  lat: 18.531557,
  lng: -69.998609,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.531557,-69.998609"
  },
  '15039': {
  lat: 18.518173,
  lng: -70.044341,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.518173,-70.044341"
  },
  '15319': {
  lat: 18.542265,
  lng: -69.993413,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.542265,-69.993413"
  },
  '15466': {
  lat: 18.524699,
  lng: -70.04634,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.524699,-70.04634"
  },
  '15504': {
  lat: 18.523421,
  lng: -70.052075,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.523421,-70.052075"
  },
  '15506': {
  lat: 18.524064,
  lng: -70.057373,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.524064,-70.057373"
  },
  '15507': {
  lat: 18.521884,
  lng: -70.03308,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.521884,-70.03308"
  },
  '15516': {
  lat: 18.529489,
  lng: -70.061571,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.529489,-70.061571"
  },
  '15529': {
  lat: 18.513014,
  lng: -70.022302,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.513014,-70.022302"
  },
  '15626': {
  lat: 18.534632,
  lng: -69.990878,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.534632,-69.990878"
  },
  '15679': {
  lat: 18.522878,
  lng: -70.020154,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.522878,-70.020154"
  },
  '15966': {
  lat: 18.522878,
  lng: -70.020154,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.522878,-70.020154"
  },
  '16901': {
  lat: 18.530683,
  lng: -69.996508,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.530683,-69.996508"
  },
  '17100': {
  lat: 18.525119,
  lng: -70.052655,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.525119,-70.052655"
  },
  '17117': {
  lat: 18.526854,
  lng: -70.03419,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.526854,-70.03419"
  },
  '17288': {
  lat: 18.533731,
  lng: -70.062962,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.533731,-70.062962"
  },
  '00040': {
  lat: 18.49763,
  lng: -69.908757,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.49763,-69.908757"
  },
  '00041': {
  lat: 18.497766,
  lng: -69.909761,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.497766,-69.909761"
  },
  '00042': {
  lat: 18.504072,
  lng: -69.912301,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.504072,-69.912301"
  },
  '00043': {
  lat: 18.488035,
  lng: -69.912741,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.488035,-69.912741"
  },
  '00044': {
  lat: 18.486863,
  lng: -69.905157,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.486863,-69.905157"
  },
  '00049': {
  lat: 18.486159,
  lng: -69.898603,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.486159,-69.898603"
  },
  '00051': {
  lat: 18.497425,
  lng: -69.896357,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.497425,-69.896357"
  },
  '00052': {
  lat: 18.502203,
  lng: -69.904358,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.502203,-69.904358"
  },
  '00054': {
  lat: 18.506518,
  lng: -69.902776,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.506518,-69.902776"
  },
  '00055': {
  lat: 18.504325,
  lng: -69.904679,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.504325,-69.904679"
  },
  '00057': {
  lat: 18.508955,
  lng: -69.89795,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.508955,-69.89795"
  },
  '00058': {
  lat: 18.509712,
  lng: -69.899824,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.509712,-69.899824"
  },
  '00059': {
  lat: 18.513159,
  lng: -69.897775,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.513159,-69.897775"
  },
  '00061': {
  lat: 18.504598,
  lng: -69.889676,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.504598,-69.889676"
  },
  '00062': {
  lat: 18.493022,
  lng: -69.884282,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.493022,-69.884282"
  },
  '00063': {
  lat: 18.492045,
  lng: -69.887886,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.492045,-69.887886"
  },
  '00064': {
  lat: 18.494377,
  lng: -69.896683,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.494377,-69.896683"
  },
  '00065': {
  lat: 18.496958,
  lng: -69.883486,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.496958,-69.883486"
  },
  '00066': {
  lat: 18.494154,
  lng: -69.888475,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.494154,-69.888475"
  },
  '00067': {
  lat: 18.486689,
  lng: -69.889767,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.486689,-69.889767"
  },
  '00077': {
  lat: 18.500151,
  lng: -69.881916,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.500151,-69.881916"
  },
  '00078': {
  lat: 18.49545,
  lng: -69.879742,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.49545,-69.879742"
  },
  '00079': {
  lat: 18.505322,
  lng: -69.885777,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.505322,-69.885777"
  },
  '00115': {
  lat: 18.51181,
  lng: -69.894665,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.51181,-69.894665"
  },
  '00116': {
  lat: 18.510555,
  lng: -69.891682,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.510555,-69.891682"
  },
  '00292': {
  lat: 18.502063,
  lng: -69.913797,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.502063,-69.913797"
  },
  '00293': {
  lat: 18.503249,
  lng: -69.885458,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.503249,-69.885458"
  },
  '00294': {
  lat: 18.503566,
  lng: -69.876992,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.503566,-69.876992"
  },
  '00295': {
  lat: 18.492015,
  lng: -69.889943,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.492015,-69.889943"
  },
  '00308': {
  lat: 18.486505,
  lng: -69.907577,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.486505,-69.907577"
  },
  '00324': {
  lat: 18.511084,
  lng: -69.88991,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.511084,-69.88991"
  },
  '00342': {
  lat: 18.498001,
  lng: -69.887965,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.498001,-69.887965"
  },
  '00345': {
  lat: 18.497878,
  lng: -69.910593,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.497878,-69.910593"
  },
  '00346': {
  lat: 18.504473,
  lng: -69.904209,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.504473,-69.904209"
  },
  '00364': {
  lat: 18.503293,
  lng: -69.911406,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.503293,-69.911406"
  },
  '00368': {
  lat: 18.506612,
  lng: -69.915226,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.506612,-69.915226"
  },
  '00417': {
  lat: 18.508388,
  lng: -69.901756,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.508388,-69.901756"
  },
  '00418': {
  lat: 18.506626,
  lng: -69.87923,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.506626,-69.87923"
  },
  '00419': {
  lat: 18.506701,
  lng: -69.893668,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.506701,-69.893668"
  },
  '00420': {
  lat: 18.4995,
  lng: -69.8782,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.4995,-69.8782"
  },
  '05039': {
  lat: 18.481122,
  lng: -69.897717,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.481122,-69.897717"
  },
  '05197': {
  lat: 18.497766,
  lng: -69.909761,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.497766,-69.909761"
  },
  '05198': {
  lat: 18.499035,
  lng: -69.910064,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.499035,-69.910064"
  },
  '05200': {
  lat: 18.504072,
  lng: -69.912301,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.504072,-69.912301"
  },
  '05203': {
  lat: 18.494616,
  lng: -69.904567,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.494616,-69.904567"
  },
  '05207': {
  lat: 18.488035,
  lng: -69.912741,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.488035,-69.912741"
  },
  '05208': {
  lat: 18.48372,
  lng: -69.902819,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.48372,-69.902819"
  },
  '05215': {
  lat: 18.486863,
  lng: -69.905157,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.486863,-69.905157"
  },
  '05216': {
  lat: 18.4884,
  lng: -69.9075,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.4884,-69.9075"
  },
  '05217': {
  lat: 18.4884,
  lng: -69.9075,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.4884,-69.9075"
  },
  '05264': {
  lat: 18.491691,
  lng: -69.898826,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.491691,-69.898826"
  },
  '05270': {
  lat: 18.486839,
  lng: -69.899915,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.486839,-69.899915"
  },
  '05271': {
  lat: 18.483839,
  lng: -69.896182,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.483839,-69.896182"
  },
  '05275': {
  lat: 18.5007,
  lng: -69.8975,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.5007,-69.8975"
  },
  '05277': {
  lat: 18.5007,
  lng: -69.8975,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.5007,-69.8975"
  },
  '05278': {
  lat: 18.50047,
  lng: -69.899726,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.50047,-69.899726"
  },
  '05280': {
  lat: 18.501692,
  lng: -69.898389,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.501692,-69.898389"
  },
  '05282': {
  lat: 18.501692,
  lng: -69.898389,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.501692,-69.898389"
  },
  '05283': {
  lat: 18.497425,
  lng: -69.896357,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.497425,-69.896357"
  },
  '05284': {
  lat: 18.497425,
  lng: -69.896357,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.497425,-69.896357"
  },
  '05288': {
  lat: 18.502203,
  lng: -69.904358,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.502203,-69.904358"
  },
  '05289': {
  lat: 18.506971,
  lng: -69.901948,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.506971,-69.901948"
  },
  '05290': {
  lat: 18.506971,
  lng: -69.901948,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.506971,-69.901948"
  },
  '05299': {
  lat: 18.509845,
  lng: -69.897952,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.509845,-69.897952"
  },
  '05300': {
  lat: 18.509845,
  lng: -69.897952,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.509845,-69.897952"
  },
  '05303': {
  lat: 18.509712,
  lng: -69.899824,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.509712,-69.899824"
  },
  '05304': {
  lat: 18.509712,
  lng: -69.899824,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.509712,-69.899824"
  },
  '05306': {
  lat: 18.513159,
  lng: -69.897775,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.513159,-69.897775"
  },
  '05308': {
  lat: 18.506701,
  lng: -69.893668,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.506701,-69.893668"
  },
  '05314': {
  lat: 18.500089,
  lng: -69.888109,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.500089,-69.888109"
  },
  '05319': {
  lat: 18.493022,
  lng: -69.884282,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.493022,-69.884282"
  },
  '05324': {
  lat: 18.491533,
  lng: -69.889851,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.491533,-69.889851"
  },
  '05328': {
  lat: 18.494377,
  lng: -69.896683,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.494377,-69.896683"
  },
  '05336': {
  lat: 18.491533,
  lng: -69.889851,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.491533,-69.889851"
  },
  '05338': {
  lat: 18.494154,
  lng: -69.888475,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.494154,-69.888475"
  },
  '05339': {
  lat: 18.494154,
  lng: -69.888475,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.494154,-69.888475"
  },
  '05344': {
  lat: 18.493056,
  lng: -69.888285,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.493056,-69.888285"
  },
  '05398': {
  lat: 18.500151,
  lng: -69.881916,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.500151,-69.881916"
  },
  '05399': {
  lat: 18.500151,
  lng: -69.881916,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.500151,-69.881916"
  },
  '05402': {
  lat: 18.505322,
  lng: -69.885777,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.505322,-69.885777"
  },
  '05403': {
  lat: 18.505322,
  lng: -69.885777,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.505322,-69.885777"
  },
  '05406': {
  lat: 18.50742,
  lng: -69.887724,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.50742,-69.887724"
  },
  '05407': {
  lat: 18.50742,
  lng: -69.887724,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.50742,-69.887724"
  },
  '05589': {
  lat: 18.50306,
  lng: -69.915074,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.50306,-69.915074"
  },
  '05890': {
  lat: 18.502063,
  lng: -69.913797,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.502063,-69.913797"
  },
  '05942': {
  lat: 18.50183,
  lng: -69.89903,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.50183,-69.89903"
  },
  '06060': {
  lat: 18.506612,
  lng: -69.915226,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.506612,-69.915226"
  },
  '06309': {
  lat: 18.491462,
  lng: -69.884614,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.491462,-69.884614"
  },
  '06310': {
  lat: 18.501286,
  lng: -69.897847,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.501286,-69.897847"
  },
  '06313': {
  lat: 18.497691,
  lng: -69.910165,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.497691,-69.910165"
  },
  '06319': {
  lat: 18.506391,
  lng: -69.902791,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.506391,-69.902791"
  },
  '08853': {
  lat: 18.486689,
  lng: -69.889767,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.486689,-69.889767"
  },
  '09759': {
  lat: 18.509845,
  lng: -69.897952,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.509845,-69.897952"
  },
  '09998': {
  lat: 18.50742,
  lng: -69.887724,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.50742,-69.887724"
  },
  '10232': {
  lat: 18.506612,
  lng: -69.915226,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.506612,-69.915226"
  },
  '10383': {
  lat: 18.486863,
  lng: -69.905157,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.486863,-69.905157"
  },
  '10384': {
  lat: 18.486863,
  lng: -69.905157,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.486863,-69.905157"
  },
  '10753': {
  lat: 18.488993,
  lng: -69.88759,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.488993,-69.88759"
  },
  '11388': {
  lat: 18.496403,
  lng: -69.914762,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.496403,-69.914762"
  },
  '11685': {
  lat: 18.506971,
  lng: -69.901948,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.506971,-69.901948"
  },
  '12320': {
  lat: 18.506612,
  lng: -69.915226,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.506612,-69.915226"
  },
  '13876': {
  lat: 18.509081,
  lng: -69.903995,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.509081,-69.903995"
  },
  '13903': {
  lat: 18.480127,
  lng: -69.902548,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.480127,-69.902548"
  },
  '14489': {
  lat: 18.501412,
  lng: -69.904397,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.501412,-69.904397"
  },
  '14494': {
  lat: 18.503293,
  lng: -69.911406,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.503293,-69.911406"
  },
  '14525': {
  lat: 18.501412,
  lng: -69.904397,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.501412,-69.904397"
  },
  '15633': {
  lat: 18.500151,
  lng: -69.881916,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.500151,-69.881916"
  },
  '15937': {
  lat: 18.507711,
  lng: -69.911258,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.507711,-69.911258"
  },
  '16384': {
  lat: 18.488972,
  lng: -69.907308,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.488972,-69.907308"
  },
  '16386': {
  lat: 18.504205,
  lng: -69.913944,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.504205,-69.913944"
  },
  '16654': {
  lat: 18.495018,
  lng: -69.879998,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.495018,-69.879998"
  },
  '17139': {
  lat: 18.494154,
  lng: -69.888475,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.494154,-69.888475"
  },
  '00017': {
  lat: 18.438067,
  lng: -69.964193,
  direccion: "C2QP+8C6, Av. Cayetano Germosén, Santo Domingo, Dominican Republic",
  enlace: "https://www.google.com/maps/place/?q=place_id:ChIJZzePfI5hpY4RL5NwCVFOJsU"
  },
  '00018': {
  lat: 18.461538,
  lng: -69.955493,
  direccion: "F26V+FW4, C. Pl. de la Cultura, Santo Domingo, Dominican Republic",
  enlace: "https://www.google.com/maps/place/?q=place_id:ChIJaxrDG-NhpY4R4cbZQW7qX5s"
  },
  '00019': {
  lat: 18.444823,
  lng: -69.968198,
  direccion: "C. Leonardo Da Vinci 40, Santo Domingo, Dominican Republic",
  enlace: "https://www.google.com/maps/place/?q=place_id:ChIJM1WtUu1hpY4RwI1jTJkqY_g"
  },
  '00021': {
  lat: 18.479607,
  lng: -69.951721,
  direccion: "F2HX+V9R, Santo Domingo, Dominican Republic",
  enlace: "https://www.google.com/maps/place/?q=place_id:ChIJ9X1qk_eJr44Ron6KR4HTOyw"
  },
  '00022': {
  lat: 18.438086,
  lng: -69.949393,
  direccion: "C. A, Santo Domingo, Dominican Republic",
  enlace: "https://www.google.com/maps/place/?q=place_id:ChIJy2QDXyFipY4RRsw_9Mg4XTA"
  },
  '00023': {
  lat: 18.4567,
  lng: -69.9438,
  direccion: "Edificio VINSA II, Calle Desiderio Arias 68, Santo Domingo, Dominican Republic",
  enlace: "https://www.google.com/maps/place/?q=place_id:ChIJ7Q_m1A5ipY4RBPWYibjdjHs"
  },
  '00024': {
  lat: 18.4479,
  lng: -69.9369,
  direccion: "C. 7 8, Santo Domingo, Dominican Republic",
  enlace: "https://www.google.com/maps/place/?q=place_id:ChIJy_KC4xNipY4RZ9K-3kspZfo"
  },
  '00025': {
  lat: 18.453808,
  lng: -69.928128,
  direccion: "F33C+JQF, Santo Domingo, Dominican Republic",
  enlace: "https://www.google.com/maps/place/?q=place_id:ChIJCUNitd5jpY4Rycz1pbJU3ZA"
  },
  '00026': {
  lat: 18.4588,
  lng: -69.9216,
  direccion: "F35H+C75, C. Gral. Modesto Díaz, Santo Domingo 10105, Dominican Republic",
  enlace: "https://www.google.com/maps/place/?q=place_id:ChIJufXQG3dipY4RRVN1vfcOZmY"
  },
  '00027': {
  lat: 18.4583,
  lng: -69.9217,
  direccion: "C. Antonio De la Maza, Santo Domingo 10105, Dominican Republic",
  enlace: "https://www.google.com/maps/place/?q=place_id:ChIJv2CcIndipY4RuVvIy3M4Gzc"
  },
  '00046': {
  lat: 18.46694,
  lng: -69.89295,
  direccion: "10208, C. José Gabriel García 603, Santo Domingo 10208, Dominican Republic",
  enlace: "https://www.google.com/maps/place/?q=place_id:ChIJZUKRsSWIr44R_JJ3rrTVh2I"
  },
  '00047': {
  lat: 18.475062,
  lng: -69.894678,
  direccion: "F4G4+375, C. 16 de Agosto, Santo Domingo, Dominican Republic",
  enlace: "https://www.google.com/maps/place/?q=place_id:ChIJc1w0FDqIr44RzwQZEELIZgE"
  },
  '00048': {
  lat: 18.478548,
  lng: -69.893777,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.478548,-69.893777"
  },
  '00068': {
  lat: 18.48214,
  lng: -69.888792,
  direccion: "C. Caracas no. 57, Santo Domingo 10214, Dominican Republic",
  enlace: "https://www.google.com/maps/place/?q=place_id:ChIJTci3ukCIr44R9ibVKJQOWlw"
  },
  '00069': {
  lat: 18.48486,
  lng: -69.891347,
  direccion: "G45G+6P2, Santo Domingo Este 11906, Dominican Republic",
  enlace: "https://www.google.com/maps/place/?q=place_id:ChIJ8WG3bk2Jr44RW-6Mg4Bn4Xc"
  },
  '00071': {
  lat: 18.475151,
  lng: -69.886884,
  direccion: "Santo Domingo 10211, Dominican Republic",
  enlace: "https://www.google.com/maps/place/?q=place_id:ChIJP_uByiaJr44RF2v4M92QHOc"
  },
  '00124': {
  lat: 18.427064,
  lng: -69.988901,
  direccion: "C2G6+W92, Santo Domingo, Dominican Republic",
  enlace: "https://www.google.com/maps/place/?q=place_id:ChIJx7EgYQBhpY4RnRYuL1lPV9Y"
  },
  '00125': {
  lat: 18.428815,
  lng: -69.973609,
  direccion: "Cancha Baloncesto Escuela victor garrido, C. E, Santo Domingo, Dominican Republic",
  enlace: "https://www.google.com/maps/place/?q=place_id:ChIJe6sss55hpY4Ro2Neh8iKCY8"
  },
  '00132': {
  lat: 18.45473,
  lng: -69.965315,
  direccion: "C. Manganagua 18, Santo Domingo, Dominican Republic",
  enlace: "https://www.google.com/maps/place/?q=place_id:ChIJxYxRE_BhpY4RDEe_mhx8W74"
  },
  '00286': {
  lat: 18.441372,
  lng: -69.95198,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.441372,-69.95198"
  },
  '00370': {
  lat: 18.468798,
  lng: -69.92743,
  direccion: "F39F+G25 Calle Jr Scouts, Santo Domingo, Dominican Republic",
  enlace: "https://www.google.com/maps/place/?q=place_id:ChIJOw29fhyJr44Rs9GpH0aqn9M"
  },
  '00383': {
  lat: 18.432938,
  lng: -69.983927,
  direccion: "C2J8+XFR, Av. Cayetano Germosén, Santo Domingo, Dominican Republic",
  enlace: "https://www.google.com/maps/place/?q=place_id:ChIJuymVFaNhpY4RqC5gQztrVag"
  },
  '00421': {
  lat: 18.43253,
  lng: -69.9671,
  direccion: "Av. Independencia km.9, Santo Domingo, Dominican Republic",
  enlace: "https://www.google.com/maps/place/?q=place_id:ChIJ0cVftJphpY4Ro38o954Cwwc"
  },
  '04910': {
  lat: 18.462551,
  lng: -69.941988,
  direccion: "F375+35Q, C. Pº de los Locutores, Santo Domingo, Dominican Republic",
  enlace: "https://www.google.com/maps/place/?q=place_id:ChIJHz01aQhipY4RDgr41FuJSwo"
  },
  '05013': {
  lat: 18.438067,
  lng: -69.964193,
  direccion: "C2QP+8C6, Av. Cayetano Germosén, Santo Domingo, Dominican Republic",
  enlace: "https://www.google.com/maps/place/?q=place_id:ChIJZzePfI5hpY4RL5NwCVFOJsU"
  },
  '05014': {
  lat: 18.4479,
  lng: -69.9369,
  direccion: "C. 7 8, Santo Domingo, Dominican Republic",
  enlace: "https://www.google.com/maps/place/?q=place_id:ChIJy_KC4xNipY4RZ9K-3kspZfo"
  },
  '05015': {
  lat: 18.4479,
  lng: -69.9369,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.4479,-69.9369"
  },
  '05016': {
  lat: 18.454979,
  lng: -69.958129,
  direccion: "C. Luis F. Thomén 616, Santo Domingo, Dominican Republic",
  enlace: "https://www.google.com/maps/place/?q=place_id:ChIJlVUugPdhpY4Rru10HvpNwjo"
  },
  '05020': {
  lat: 18.444823,
  lng: -69.968198,
  direccion: "C. Leonardo Da Vinci 40, Santo Domingo, Dominican Republic",
  enlace: "https://www.google.com/maps/place/?q=place_id:ChIJM1WtUu1hpY4RwI1jTJkqY_g"
  },
  '05050': {
  lat: 18.475694,
  lng: -69.959233,
  direccion: "C2X8+92F, C. 10, Santo Domingo, Dominican Republic",
  enlace: "https://www.google.com/maps/place/?q=place_id:ChIJ0xWOscBhpY4RpJegulAjj-U"
  },
  '05052': {
  lat: 18.479607,
  lng: -69.951721,
  direccion: "F2HX+V9R, Santo Domingo, Dominican Republic",
  enlace: "https://www.google.com/maps/place/?q=place_id:ChIJ9X1qk_eJr44Ron6KR4HTOyw"
  },
  '05056': {
  lat: 18.461538,
  lng: -69.955493,
  direccion: "Escuela El Millón, Calle Bellas Artes, Santo Domingo 10149, Dominican Republic",
  enlace: "https://www.google.com/maps/place/?q=place_id:ChIJT5FEXP9hpY4RdQ2WRUsgObg"
  },
  '05057': {
  lat: 18.461538,
  lng: -69.955493,
  direccion: "F26V+MPQ, C. Pl. de la Cultura, Santo Domingo, Dominican Republic",
  enlace: "https://www.google.com/maps/place/?q=place_id:ChIJqWk1Tv9hpY4R93WnO6Qfk9s"
  },
  '05062': {
  lat: 18.455955,
  lng: -69.950484,
  direccion: "F2HX+V9R, Santo Domingo, Dominican Republic",
  enlace: "https://www.google.com/maps/place/?q=place_id:ChIJ9X1qk_eJr44Ron6KR4HTOyw"
  },
  '05084': {
  lat: 18.45251,
  lng: -69.941399,
  direccion: "C. Helios &, Santo Domingo, Dominican Republic",
  enlace: "https://www.google.com/maps/place/?q=place_id:ChIJf7MTIxBipY4RTEtC9k0UgS0"
  },
  '05093': {
  lat: 18.461538,
  lng: -69.955493,
  direccion: "Av 27 de Febrero 402, Santo Domingo, Dominican Republic",
  enlace: "https://www.google.com/maps/place/?q=place_id:ChIJz2oYawNipY4RK--cjm_da18"
  },
  '05096': {
  lat: 18.47368,
  lng: -69.939304,
  direccion: "C/ 1ra Esquina Central, Santo Domingo, Dominican Republic",
  enlace: "https://www.google.com/maps/place/?q=place_id:ChIJf3i8seWJr44R9iaxGKjfvsY"
  },
  '05102': {
  lat: 18.463364,
  lng: -69.924069,
  direccion: "Av. Albert Thomas #230, Santo Domingo 10401, Dominican Republic",
  enlace: "https://www.google.com/maps/place/?q=place_id:ChIJwynFI02Jr44RiwL1I-h7gwU"
  },
  '05119': {
  lat: 18.4583,
  lng: -69.9217,
  direccion: "C. Antonio De la Maza, Santo Domingo 10105, Dominican Republic",
  enlace: "https://www.google.com/maps/place/?q=place_id:ChIJk2LkPHdipY4RygMtQioxa4k"
  },
  '05120': {
  lat: 18.455952,
  lng: -69.920345,
  direccion: "Av. Independencia 1301, Santo Domingo, Dominican Republic",
  enlace: "https://www.google.com/maps/place/?q=place_id:ChIJGSBRsXBipY4RmedG7byNI6I"
  },
  '05125': {
  lat: 18.456026,
  lng: -69.921413,
  direccion: "C. Luis Braille 1, Santo Domingo, Dominican Republic",
  enlace: "https://www.google.com/maps/place/?q=place_id:ChIJxd3lF4ZjpY4RCgSflBsuiI0"
  },
  '05131': {
  lat: 18.466894,
  lng: -69.915609,
  direccion: "Av Simón Bolívar 807, Santo Domingo 10106, Dominican Republic",
  enlace: "https://www.google.com/maps/place/?q=place_id:ChIJZQPc0taJr44R50-_uSzkaGs"
  },
  '05226': {
  lat: 18.479169,
  lng: -69.909484,
  direccion: "Santo Domingo 10203, Dominican Republic",
  enlace: "https://www.google.com/maps/place/?q=place_id:ChIJv9TbEsuJr44RNUYUhimxdGY"
  },
  '05227': {
  lat: 18.479169,
  lng: -69.909484,
  direccion: "Santo Domingo 10203, Dominican Republic",
  enlace: "https://www.google.com/maps/place/?q=place_id:ChIJv9TbEsuJr44RNUYUhimxdGY"
  },
  '05229': {
  lat: 18.477945,
  lng: -69.900901,
  direccion: "Av. México 31, Santo Domingo 10201, Dominican Republic",
  enlace: "https://www.google.com/maps/place/?q=place_id:ChIJAeOFPzGIr44RxOf4ttuvArw"
  },
  '05236': {
  lat: 18.469281,
  lng: -69.907416,
  direccion: "C. Caonabo 44, Santo Domingo, Dominican Republic",
  enlace: "https://www.google.com/maps/place/?q=place_id:ChIJqS5w1dKJr44RqlzVSwtLi18"
  },
  '05239': {
  lat: 18.475622,
  lng: -69.899913,
  direccion: "Av. México 31, Santo Domingo 10201, Dominican Republic",
  enlace: "https://www.google.com/maps/place/?q=place_id:ChIJAeOFPzGIr44RxOf4ttuvArw"
  },
  '05240': {
  lat: 18.475622,
  lng: -69.899913,
  direccion: "Av. México 31, Santo Domingo 10201, Dominican Republic",
  enlace: "https://www.google.com/maps/place/?q=place_id:ChIJAeOFPzGIr44RxOf4ttuvArw"
  },
  '05241': {
  lat: 18.475622,
  lng: -69.899913,
  direccion: "Av. México 31, Santo Domingo 10201, Dominican Republic",
  enlace: "https://www.google.com/maps/place/?q=place_id:ChIJAeOFPzGIr44RxOf4ttuvArw"
  },
  '05247': {
  lat: 18.465849,
  lng: -69.908035,
  direccion: "F38R+6V3, C. Juan Sánchez Ramírez, Santo Domingo, Dominican Republic",
  enlace: "https://www.google.com/maps/place/?q=place_id:ChIJP0zOsNSJr44RdhrGUpmUsZY"
  },
  '05249': {
  lat: 18.465849,
  lng: -69.908035,
  direccion: "F38R+6V3, C. Juan Sánchez Ramírez, Santo Domingo, Dominican Republic",
  enlace: "https://www.google.com/maps/place/?q=place_id:ChIJP0zOsNSJr44RdhrGUpmUsZY"
  },
  '05257': {
  lat: 18.46694,
  lng: -69.89295,
  direccion: "10208, C. José Gabriel García 603, Santo Domingo 10208, Dominican Republic",
  enlace: "https://www.google.com/maps/place/?q=place_id:ChIJZUKRsSWIr44R_JJ3rrTVh2I"
  },
  '05258': {
  lat: 18.470099,
  lng: -69.892292,
  direccion: "C. Canela, Santo Domingo 10208, Dominican Republic",
  enlace: "https://www.google.com/maps/place/?q=place_id:ChIJhw5g0SSIr44RfyTu_G1bTRw"
  },
  '05263': {
  lat: 18.478548,
  lng: -69.893777,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.478548,-69.893777"
  },
  '05346': {
  lat: 18.48214,
  lng: -69.888792,
  direccion: "C. Caracas no. 57, Santo Domingo 10214, Dominican Republic",
  enlace: "https://www.google.com/maps/place/?q=place_id:ChIJTci3ukCIr44R9ibVKJQOWlw"
  },
  '05348': {
  lat: 18.470878,
  lng: -69.888619,
  direccion: "C. Sánchez #160, Santo Domingo 10210, Dominican Republic",
  enlace: "https://www.google.com/maps/place/?q=place_id:ChIJ9yv1uTyIr44Re4BpbIGhkyE"
  },
  '05349': {
  lat: 18.471413,
  lng: -69.883823,
  direccion: "F4H8+X53, C. Isabel La Católica, Santo Domingo 10212, Dominican Republic",
  enlace: "https://www.google.com/maps/place/?q=place_id:ChIJSRYZ6D-Ir44RA9PJ2OGY63U"
  },
  '05357': {
  lat: 18.478717,
  lng: -69.885588,
  direccion: "C. Benito González 22, Santo Domingo 10212, Dominican Republic",
  enlace: "https://www.google.com/maps/place/?q=place_id:ChIJizROG0mJr44Re1qATkxOSDk"
  },
  '05358': {
  lat: 18.473395,
  lng: -69.888244,
  direccion: "GX4F+C22, Santo Domingo, Dominican Republic",
  enlace: "https://www.google.com/maps/place/?q=place_id:ChIJJRP-kMKKr44RURHhJpBJ9_4"
  },
  '05359': {
  lat: 18.475151,
  lng: -69.886884,
  direccion: "C. Duarte 106, Santo Domingo 10210, Dominican Republic",
  enlace: "https://www.google.com/maps/place/?q=place_id:ChIJg58OLTyIr44Rj5UhWUJ_mN8"
  },
  '05360': {
  lat: 18.470278,
  lng: -69.887605,
  direccion: "C. Padre Billini 304, Santo Domingo 10210, Dominican Republic",
  enlace: "https://www.google.com/maps/place/?q=place_id:ChIJJcRnzzyIr44RDIrXTlFpqv4"
  },
  '05361': {
  lat: 18.472262,
  lng: -69.882802,
  direccion: "F4C8+XWV, Santo Domingo 10210, Dominican Republic",
  enlace: "https://www.google.com/maps/place/?q=place_id:ChIJiyYB1ReIr44R9PHZs9MkiT0"
  },
  '05602': {
  lat: 18.429707,
  lng: -69.974359,
  direccion: "KM 10, Peatón 2 68, Santo Domingo 11101, Dominican Republic",
  enlace: "https://www.google.com/maps/place/?q=place_id:ChIJ91_OPplhpY4R4oPtTdgBi6g"
  },
  '05608': {
  lat: 18.428815,
  lng: -69.973609,
  direccion: "Cancha Baloncesto Escuela victor garrido, C. E, Santo Domingo, Dominican Republic",
  enlace: "https://www.google.com/maps/place/?q=place_id:ChIJe6sss55hpY4Ro2Neh8iKCY8"
  },
  '05609': {
  lat: 18.428815,
  lng: -69.973609,
  direccion: "Cancha Baloncesto Escuela victor garrido, C. E, Santo Domingo, Dominican Republic",
  enlace: "https://www.google.com/maps/place/?q=place_id:ChIJe6sss55hpY4Ro2Neh8iKCY8"
  },
  '05628': {
  lat: 18.45473,
  lng: -69.965315,
  direccion: "C. Manganagua 18, Santo Domingo, Dominican Republic",
  enlace: "https://www.google.com/maps/place/?q=place_id:ChIJxYxRE_BhpY4RDEe_mhx8W74"
  },
  '05875': {
  lat: 18.454723,
  lng: -69.96604,
  direccion: "10001, C. Francisco Prats Ramírez 858, Santo Domingo 10001, Dominican Republic",
  enlace: "https://www.google.com/maps/place/?q=place_id:ChIJtwstEfBhpY4RVARyzSFVNQ4"
  },
  '05887': {
  lat: 18.45366,
  lng: -69.924608,
  direccion: "F33G+C62, Av. Abraham Lincoln 52, Santo Domingo 10102, Dominican Republic",
  enlace: "https://www.google.com/maps/place/?q=place_id:ChIJObyhogpjpY4R8Kcwh4Aiojw"
  },
  '05889': {
  lat: 18.45366,
  lng: -69.924608,
  direccion: "F33G+C62, Av. Abraham Lincoln 52, Santo Domingo 10102, Dominican Republic",
  enlace: "https://www.google.com/maps/place/?q=place_id:ChIJObyhogpjpY4R8Kcwh4Aiojw"
  },
  '06137': {
  lat: 18.437114,
  lng: -69.962396,
  direccion: "Av. Cayetano Germosen &, Santo Domingo, Dominican Republic",
  enlace: "https://www.google.com/maps/place/?q=place_id:ChIJ1RI3nY5hpY4R7HcgKmUZpds"
  },
  '06179': {
  lat: 18.432938,
  lng: -69.983927,
  direccion: "C2J8+XFR, Av. Cayetano Germosén, Santo Domingo, Dominican Republic",
  enlace: "https://www.google.com/maps/place/?q=place_id:ChIJuymVFaNhpY4RqC5gQztrVag"
  },
  '06180': {
  lat: 18.432938,
  lng: -69.983927,
  direccion: "C2J8+XFR, Av. Cayetano Germosén, Santo Domingo, Dominican Republic",
  enlace: "https://www.google.com/maps/place/?q=place_id:ChIJuymVFaNhpY4RqC5gQztrVag"
  },
  '09754': {
  lat: 18.477945,
  lng: -69.900901,
  direccion: "Av. México &, Santo Domingo 10217, Dominican Republic",
  enlace: "https://www.google.com/maps/place/?q=place_id:ChIJm0nwIzmIr44RyGr4gI1CpJs"
  },
  '10000': {
  lat: 18.45366,
  lng: -69.924608,
  direccion: "F33G+C62, Av. Abraham Lincoln 52, Santo Domingo 10102, Dominican Republic",
  enlace: "https://www.google.com/maps/place/?q=place_id:ChIJObyhogpjpY4R8Kcwh4Aiojw"
  },
  '11715': {
  lat: 18.427662,
  lng: -69.989332,
  direccion: "Av. Independencia esquina, Av. Gregorio Luperón, Santo Domingo, Dominican Republic",
  enlace: "https://www.google.com/maps/place/?q=place_id:ChIJka6lSaZhpY4RYZvRzy-M4QE"
  },
  '12595': {
  lat: 18.479169,
  lng: -69.909484,
  direccion: "Santo Domingo 10203, Dominican Republic",
  enlace: "https://www.google.com/maps/place/?q=place_id:ChIJv9TbEsuJr44RNUYUhimxdGY"
  },
  '12903': {
  lat: 18.469118,
  lng: -69.951529,
  direccion: "F29X+M98, C. Ángel Severo Cabral, Santo Domingo, Dominican Republic",
  enlace: "https://www.google.com/maps/place/?q=place_id:ChIJeRJKjD-Jr44RV0mDG-LhT0Q"
  },
  '13123': {
  lat: 18.478548,
  lng: -69.893777,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.478548,-69.893777"
  },
  '13441': {
  lat: 18.478548,
  lng: -69.893777,
  direccion: "Calle Las Mercedes, Santo Domingo 10211, Dominican Republic",
  enlace: "https://www.google.com/maps/place/?q=place_id:ChIJdfYHLTyIr44RDf7ZD9lAG4g"
  },
  '13553': {
  lat: 18.45473,
  lng: -69.965315,
  direccion: "C. Manganagua 18, Santo Domingo, Dominican Republic",
  enlace: "https://www.google.com/maps/place/?q=place_id:ChIJxYxRE_BhpY4RDEe_mhx8W74"
  },
  '14130': {
  lat: 18.4479,
  lng: -69.9369,
  direccion: "C. 7 8, Santo Domingo, Dominican Republic",
  enlace: "https://www.google.com/maps/place/?q=place_id:ChIJy_KC4xNipY4RZ9K-3kspZfo"
  },
  '14131': {
  lat: 18.466894,
  lng: -69.915609,
  direccion: "Av Simón Bolívar 807, Santo Domingo 10106, Dominican Republic",
  enlace: "https://www.google.com/maps/place/?q=place_id:ChIJZQPc0taJr44R50-_uSzkaGs"
  },
  '14132': {
  lat: 18.461538,
  lng: -69.955493,
  direccion: "F26V+MPQ, C. Pl. de la Cultura, Santo Domingo, Dominican Republic",
  enlace: "https://www.google.com/maps/place/?q=place_id:ChIJqWk1Tv9hpY4R93WnO6Qfk9s"
  },
  '14749': {
  lat: 18.464922,
  lng: -69.914551,
  direccion: "F37P+X54, Santo Domingo 10105, Dominican Republic",
  enlace: "https://www.google.com/maps/place/?q=place_id:ChIJrdW0Fe6Jr44R4SfTqb4eDxM"
  },
  '15573': {
  lat: 18.45251,
  lng: -69.941399,
  direccion: "C. Helios &, Santo Domingo, Dominican Republic",
  enlace: "https://www.google.com/maps/place/?q=place_id:ChIJf7MTIxBipY4RTEtC9k0UgS0"
  },
  '15627': {
  lat: 18.477945,
  lng: -69.900901,
  direccion: "Av. México &, Santo Domingo 10217, Dominican Republic",
  enlace: "https://www.google.com/maps/place/?q=place_id:ChIJm0nwIzmIr44RyGr4gI1CpJs"
  },
  '15635': {
  lat: 18.4479,
  lng: -69.9369,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.4479,-69.9369"
  },
  '16714': {
  lat: 18.477945,
  lng: -69.900901,
  direccion: "C. San Juan Bosco 27, Santo Domingo 10201, Dominican Republic",
  enlace: "https://www.google.com/maps/place/?q=place_id:ChIJxzpYpzaIr44RePuBfbCbFLg"
  },
  '16718': {
  lat: 18.469268,
  lng: -69.89892,
  direccion: "C. Josefa Perdomo 6, Santo Domingo, Dominican Republic",
  enlace: "https://www.google.com/maps/place/?q=place_id:ChIJpdOWSC6Ir44RUaxYwqih8e8"
  },
  '17428': {
  direccion: "km 10, Av. Cayetano Germosén 26, Santo Domingo 11102, Dominican Republic",
  enlace: "https://www.google.com/maps/place/?q=place_id:ChIJqTlmGflhpY4RNsVw0OVcRSg"
  },
  '00005': {
  lat: 18.518739,
  lng: -69.96762,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.518739,-69.96762"
  },
  '00006': {
  lat: 18.501576,
  lng: -69.994238,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.501576,-69.994238"
  },
  '00007': {
  lat: 18.49854,
  lng: -69.964326,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.49854,-69.964326"
  },
  '00020': {
  lat: 18.487104,
  lng: -69.962738,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.487104,-69.962738"
  },
  '00028': {
  lat: 18.486738,
  lng: -69.930155,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.486738,-69.930155"
  },
  '00030': {
  lat: 18.490557,
  lng: -69.918596,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.490557,-69.918596"
  },
  '00031': {
  lat: 18.490557,
  lng: -69.918596,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.490557,-69.918596"
  },
  '00032': {
  lat: 18.49412,
  lng: -69.928237,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.49412,-69.928237"
  },
  '00033': {
  lat: 18.499342,
  lng: -69.929318,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.499342,-69.929318"
  },
  '00034': {
  lat: 18.496635,
  lng: -69.927099,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.496635,-69.927099"
  },
  '00035': {
  lat: 18.48345,
  lng: -69.918123,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.48345,-69.918123"
  },
  '00036': {
  lat: 18.504172,
  lng: -69.91839,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.504172,-69.91839"
  },
  '00038': {
  lat: 18.503562,
  lng: -69.919628,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.503562,-69.919628"
  },
  '00119': {
  lat: 18.504397,
  lng: -69.92976,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.504397,-69.92976"
  },
  '00120': {
  lat: 18.500976,
  lng: -69.918537,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.500976,-69.918537"
  },
  '00121': {
  lat: 18.506471,
  lng: -69.922069,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.506471,-69.922069"
  },
  '00123': {
  lat: 18.484555,
  lng: -69.921355,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.484555,-69.921355"
  },
  '00128': {
  lat: 18.506,
  lng: -69.9386,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.506,-69.9386"
  },
  '00129': {
  lat: 18.502379,
  lng: -69.945007,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.502379,-69.945007"
  },
  '00131': {
  lat: 18.485868,
  lng: -69.945435,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.485868,-69.945435"
  },
  '00220': {
  lat: 18.531023,
  lng: -69.971061,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.531023,-69.971061"
  },
  '00231': {
  lat: 18.49524,
  lng: -69.985215,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.49524,-69.985215"
  },
  '00288': {
  lat: 18.497314,
  lng: -69.931875,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.497314,-69.931875"
  },
  '00289': {
  lat: 18.518769,
  lng: -69.987527,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.518769,-69.987527"
  },
  '00341': {
  lat: 18.506494,
  lng: -69.922497,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.506494,-69.922497"
  },
  '00357': {
  lat: 18.513967,
  lng: -69.954979,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.513967,-69.954979"
  },
  '00371': {
  lat: 18.495004,
  lng: -69.929542,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.495004,-69.929542"
  },
  '00379': {
  lat: 18.505046,
  lng: -69.949968,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.505046,-69.949968"
  },
  '00387': {
  lat: 18.51814,
  lng: -69.990628,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.51814,-69.990628"
  },
  '04964': {
  lat: 18.49483,
  lng: -69.937872,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.49483,-69.937872"
  },
  '04967': {
  lat: 18.49854,
  lng: -69.964326,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.49854,-69.964326"
  },
  '04968': {
  lat: 18.49854,
  lng: -69.964326,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.49854,-69.964326"
  },
  '05029': {
  lat: 18.487104,
  lng: -69.962738,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.487104,-69.962738"
  },
  '05033': {
  lat: 18.487253,
  lng: -69.950722,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.487253,-69.950722"
  },
  '05037': {
  lat: 18.502567,
  lng: -69.94394,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.502567,-69.94394"
  },
  '05137': {
  lat: 18.486258,
  lng: -69.93187,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.486258,-69.93187"
  },
  '05138': {
  lat: 18.486738,
  lng: -69.930155,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.486738,-69.930155"
  },
  '05146': {
  lat: 18.504256,
  lng: -69.996547,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.504256,-69.996547"
  },
  '05150': {
  lat: 18.488791,
  lng: -69.93209,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.488791,-69.93209"
  },
  '05152': {
  lat: 18.490131,
  lng: -69.925808,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.490131,-69.925808"
  },
  '05154': {
  lat: 18.49412,
  lng: -69.928237,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.49412,-69.928237"
  },
  '05155': {
  lat: 18.499342,
  lng: -69.929318,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.499342,-69.929318"
  },
  '05160': {
  lat: 18.49412,
  lng: -69.928237,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.49412,-69.928237"
  },
  '05163': {
  lat: 18.500416,
  lng: -69.92928,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.500416,-69.92928"
  },
  '05170': {
  lat: 18.501538,
  lng: -69.926936,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.501538,-69.926936"
  },
  '05173': {
  lat: 18.503562,
  lng: -69.919628,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.503562,-69.919628"
  },
  '05174': {
  lat: 18.503562,
  lng: -69.919628,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.503562,-69.919628"
  },
  '05587': {
  lat: 18.504397,
  lng: -69.92976,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.504397,-69.92976"
  },
  '05590': {
  lat: 18.501804,
  lng: -69.918717,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.501804,-69.918717"
  },
  '05592': {
  lat: 18.500976,
  lng: -69.918537,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.500976,-69.918537"
  },
  '05600': {
  lat: 18.484555,
  lng: -69.921355,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.484555,-69.921355"
  },
  '05601': {
  lat: 18.484555,
  lng: -69.921355,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.484555,-69.921355"
  },
  '05620': {
  lat: 18.506,
  lng: -69.9386,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.506,-69.9386"
  },
  '05622': {
  lat: 18.501566,
  lng: -69.994301,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.501566,-69.994301"
  },
  '05623': {
  lat: 18.501566,
  lng: -69.994301,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.501566,-69.994301"
  },
  '05625': {
  lat: 18.485868,
  lng: -69.945435,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.485868,-69.945435"
  },
  '05627': {
  lat: 18.49483,
  lng: -69.937872,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.49483,-69.937872"
  },
  '05879': {
  lat: 18.518769,
  lng: -69.987527,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.518769,-69.987527"
  },
  '05880': {
  lat: 18.518769,
  lng: -69.987527,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.518769,-69.987527"
  },
  '05962': {
  lat: 18.492058,
  lng: -69.931594,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.492058,-69.931594"
  },
  '06046': {
  lat: 18.488281,
  lng: -69.917454,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.488281,-69.917454"
  },
  '06192': {
  lat: 18.51814,
  lng: -69.990628,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.51814,-69.990628"
  },
  '06193': {
  lat: 18.51814,
  lng: -69.990628,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.51814,-69.990628"
  },
  '10148': {
  lat: 18.49412,
  lng: -69.928237,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.49412,-69.928237"
  },
  '10191': {
  lat: 18.486738,
  lng: -69.930155,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.486738,-69.930155"
  },
  '10198': {
  lat: 18.499342,
  lng: -69.929318,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.499342,-69.929318"
  },
  '10204': {
  lat: 18.49854,
  lng: -69.964326,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.49854,-69.964326"
  },
  '10329': {
  lat: 18.505369,
  lng: -69.926817,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.505369,-69.926817"
  },
  '11300': {
  lat: 18.490557,
  lng: -69.918596,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.490557,-69.918596"
  },
  '12631': {
  lat: 18.518769,
  lng: -69.987527,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.518769,-69.987527"
  },
  '12671': {
  lat: 18.504405,
  lng: -69.920661,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.504405,-69.920661"
  },
  '12989': {
  lat: 18.490557,
  lng: -69.918596,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.490557,-69.918596"
  },
  '12997': {
  lat: 18.506471,
  lng: -69.922069,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.506471,-69.922069"
  },
  '13032': {
  lat: 18.506471,
  lng: -69.922069,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.506471,-69.922069"
  },
  '13109': {
  lat: 18.484555,
  lng: -69.921355,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.484555,-69.921355"
  },
  '13113': {
  lat: 18.49854,
  lng: -69.964326,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.49854,-69.964326"
  },
  '14143': {
  lat: 18.502379,
  lng: -69.945007,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.502379,-69.945007"
  },
  '14224': {
  lat: 18.5269,
  lng: -69.981,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.5269,-69.981"
  },
  '14598': {
  lat: 18.5274,
  lng: -69.9813,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.5274,-69.9813"
  },
  '14599': {
  lat: 18.519017,
  lng: -69.985759,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.519017,-69.985759"
  },
  '14724': {
  lat: 18.497079,
  lng: -69.962123,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.497079,-69.962123"
  },
  '14727': {
  lat: 18.505482,
  lng: -69.922155,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.505482,-69.922155"
  },
  '14800': {
  lat: 18.518769,
  lng: -69.987527,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.518769,-69.987527"
  },
  '14900': {
  lat: 18.518769,
  lng: -69.987527,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.518769,-69.987527"
  },
  '15108': {
  lat: 18.489243,
  lng: -69.96746,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.489243,-69.96746"
  },
  '15205': {
  lat: 18.528142,
  lng: -69.96924,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.528142,-69.96924"
  },
  '15632': {
  lat: 18.504146,
  lng: -69.944208,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.504146,-69.944208"
  },
  '16346': {
  lat: 18.487394,
  lng: -69.962418,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.487394,-69.962418"
  },
  '16703': {
  lat: 18.499582,
  lng: -69.923317,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.499582,-69.923317"
  },
  '16868': {
  lat: 18.501576,
  lng: -69.994238,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.501576,-69.994238"
  },
  '16902': {
  lat: 18.510637,
  lng: -69.998404,
  direccion: "Los Alcarrizos, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.510637,-69.998404"
  },
  '17204': {
  lat: 18.516848,
  lng: -69.989156,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.516848,-69.989156"
  },
  '17205': {
  lat: 18.503524,
  lng: -69.922023,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.503524,-69.922023"
  },
  '17206': {
  lat: 18.502826,
  lng: -69.981477,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.502826,-69.981477"
  },
  '17207': {
  lat: 18.504414,
  lng: -69.996859,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.504414,-69.996859"
  },
  '17252': {
  lat: 18.516849,
  lng: -69.989146,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.516849,-69.989146"
  },
  '17282': {
  lat: 18.521341,
  lng: -69.986156,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.521341,-69.986156"
  },
  '00001': {
  lat: 18.44837,
  lng: -69.984998,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.44837,-69.984998"
  },
  '00002': {
  lat: 18.44837,
  lng: -69.984998,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.44837,-69.984998"
  },
  '00003': {
  lat: 18.463685,
  lng: -69.996991,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.463685,-69.996991"
  },
  '00008': {
  lat: 18.481878,
  lng: -69.975478,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.481878,-69.975478"
  },
  '00009': {
  lat: 18.481772,
  lng: -69.978677,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.481772,-69.978677"
  },
  '00010': {
  lat: 18.475048,
  lng: -69.972112,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.475048,-69.972112"
  },
  '00011': {
  lat: 18.472631,
  lng: -69.973084,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.472631,-69.973084"
  },
  '00012': {
  lat: 18.468032,
  lng: -69.98343,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.468032,-69.98343"
  },
  '00013': {
  lat: 18.467605,
  lng: -69.981483,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.467605,-69.981483"
  },
  '00014': {
  lat: 18.4665,
  lng: -69.982705,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.4665,-69.982705"
  },
  '00015': {
  lat: 18.466424,
  lng: -69.974524,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.466424,-69.974524"
  },
  '00016': {
  lat: 18.430585,
  lng: -69.991466,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.430585,-69.991466"
  },
  '00109': {
  lat: 18.454623,
  lng: -69.985825,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.454623,-69.985825"
  },
  '00110': {
  lat: 18.469513,
  lng: -69.985618,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.469513,-69.985618"
  },
  '00111': {
  lat: 18.472637,
  lng: -69.982534,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.472637,-69.982534"
  },
  '00112': {
  lat: 18.478193,
  lng: -69.980172,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.478193,-69.980172"
  },
  '00113': {
  lat: 18.472327,
  lng: -69.984898,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.472327,-69.984898"
  },
  '00114': {
  lat: 18.461756,
  lng: -69.979752,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.461756,-69.979752"
  },
  '00130': {
  lat: 18.485402,
  lng: -69.981708,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.485402,-69.981708"
  },
  '00221': {
  lat: 18.508645,
  lng: -70.010341,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.508645,-70.010341"
  },
  '00233': {
  lat: 18.50045,
  lng: -70.051328,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.50045,-70.051328"
  },
  '00234': {
  lat: 18.481428,
  lng: -70.062028,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.481428,-70.062028"
  },
  '00235': {
  lat: 18.48919,
  lng: -70.050715,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.48919,-70.050715"
  },
  '00236': {
  lat: 18.482062,
  lng: -70.037655,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.482062,-70.037655"
  },
  '00237': {
  lat: 18.470169,
  lng: -70.03376,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.470169,-70.03376"
  },
  '00238': {
  lat: 18.5089,
  lng: -70.0145,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.5089,-70.0145"
  },
  '00239': {
  lat: 18.490561,
  lng: -70.004412,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.490561,-70.004412"
  },
  '00240': {
  lat: 18.479847,
  lng: -70.006437,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.479847,-70.006437"
  },
  '00241': {
  lat: 18.482152,
  lng: -69.988172,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.482152,-69.988172"
  },
  '00242': {
  lat: 18.47216,
  lng: -70.001845,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.47216,-70.001845"
  },
  '00287': {
  lat: 18.422211,
  lng: -69.990644,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.422211,-69.990644"
  },
  '00321': {
  lat: 18.452799,
  lng: -69.989129,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.452799,-69.989129"
  },
  '00322': {
  lat: 18.427619,
  lng: -70.010228,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.427619,-70.010228"
  },
  '00329': {
  lat: 18.505461,
  lng: -70.027231,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.505461,-70.027231"
  },
  '00343': {
  lat: 18.489409,
  lng: -70.012109,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.489409,-70.012109"
  },
  '00351': {
  lat: 18.464944,
  lng: -69.98929,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.464944,-69.98929"
  },
  '00352': {
  lat: 18.464399,
  lng: -69.986877,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.464399,-69.986877"
  },
  '00365': {
  lat: 18.498846,
  lng: -70.053759,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.498846,-70.053759"
  },
  '00372': {
  lat: 18.462254,
  lng: -70.004871,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.462254,-70.004871"
  },
  '00397': {
  lat: 18.44065,
  lng: -69.994513,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.44065,-69.994513"
  },
  '00398': {
  lat: 18.470248,
  lng: -69.992311,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.470248,-69.992311"
  },
  '00409': {
  lat: 18.47647,
  lng: -69.990879,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.47647,-69.990879"
  },
  '04892': {
  lat: 18.502179,
  lng: -70.059896,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.502179,-70.059896"
  },
  '04938': {
  lat: 18.44837,
  lng: -69.984998,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.44837,-69.984998"
  },
  '04941': {
  lat: 18.468561,
  lng: -69.980609,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.468561,-69.980609"
  },
  '04945': {
  lat: 18.448798,
  lng: -69.984399,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.448798,-69.984399"
  },
  '04947': {
  lat: 18.463685,
  lng: -69.996991,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.463685,-69.996991"
  },
  '04951': {
  lat: 18.473986,
  lng: -69.995084,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.473986,-69.995084"
  },
  '04954': {
  lat: 18.477186,
  lng: -69.994722,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.477186,-69.994722"
  },
  '04974': {
  lat: 18.481878,
  lng: -69.975478,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.481878,-69.975478"
  },
  '04975': {
  lat: 18.472526,
  lng: -69.983172,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.472526,-69.983172"
  },
  '04982': {
  lat: 18.472637,
  lng: -69.982534,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.472637,-69.982534"
  },
  '04983': {
  lat: 18.4747,
  lng: -69.9749,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.4747,-69.9749"
  },
  '04984': {
  lat: 18.4665,
  lng: -69.982705,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.4665,-69.982705"
  },
  '04989': {
  lat: 18.468032,
  lng: -69.98343,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.468032,-69.98343"
  },
  '04990': {
  lat: 18.468032,
  lng: -69.98343,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.468032,-69.98343"
  },
  '04997': {
  lat: 18.447544,
  lng: -69.983873,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.447544,-69.983873"
  },
  '05007': {
  lat: 18.465404,
  lng: -69.981913,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.465404,-69.981913"
  },
  '05010': {
  lat: 18.470903,
  lng: -69.979077,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.470903,-69.979077"
  },
  '05011': {
  lat: 18.430585,
  lng: -69.991466,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.430585,-69.991466"
  },
  '05012': {
  lat: 18.430585,
  lng: -69.991466,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.430585,-69.991466"
  },
  '05562': {
  lat: 18.454623,
  lng: -69.985825,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.454623,-69.985825"
  },
  '05564': {
  lat: 18.469513,
  lng: -69.985618,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.469513,-69.985618"
  },
  '05568': {
  lat: 18.472526,
  lng: -69.983172,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.472526,-69.983172"
  },
  '05569': {
  lat: 18.478193,
  lng: -69.980172,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.478193,-69.980172"
  },
  '05573': {
  lat: 18.461756,
  lng: -69.979752,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.461756,-69.979752"
  },
  '05752': {
  lat: 18.481428,
  lng: -70.062028,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.481428,-70.062028"
  },
  '05755': {
  lat: 18.482062,
  lng: -70.037655,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.482062,-70.037655"
  },
  '05756': {
  lat: 18.5089,
  lng: -70.0145,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.5089,-70.0145"
  },
  '05759': {
  lat: 18.48299,
  lng: -69.999534,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.48299,-69.999534"
  },
  '05760': {
  lat: 18.48299,
  lng: -69.999534,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.48299,-69.999534"
  },
  '05761': {
  lat: 18.48299,
  lng: -69.999534,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.48299,-69.999534"
  },
  '05762': {
  lat: 18.48299,
  lng: -69.999534,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.48299,-69.999534"
  },
  '05771': {
  lat: 18.47216,
  lng: -70.001845,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.47216,-70.001845"
  },
  '05772': {
  lat: 18.47216,
  lng: -70.001845,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.47216,-70.001845"
  },
  '05979': {
  lat: 18.459767,
  lng: -69.978336,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.459767,-69.978336"
  },
  '06028': {
  lat: 18.464399,
  lng: -69.986877,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.464399,-69.986877"
  },
  '09238': {
  lat: 18.452129,
  lng: -69.986104,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.452129,-69.986104"
  },
  '09735': {
  lat: 18.459767,
  lng: -69.978336,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.459767,-69.978336"
  },
  '10142': {
  lat: 18.482062,
  lng: -70.037655,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.482062,-70.037655"
  },
  '10340': {
  lat: 18.47216,
  lng: -70.001845,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.47216,-70.001845"
  },
  '10456': {
  lat: 18.443144,
  lng: -69.990702,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.443144,-69.990702"
  },
  '10545': {
  lat: 18.498964,
  lng: -70.053765,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.498964,-70.053765"
  },
  '10632': {
  lat: 18.481428,
  lng: -70.062028,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.481428,-70.062028"
  },
  '10736': {
  lat: 18.482062,
  lng: -70.037655,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.482062,-70.037655"
  },
  '10986': {
  lat: 18.43891,
  lng: -69.993867,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.43891,-69.993867"
  },
  '11008': {
  lat: 18.47764,
  lng: -70.038045,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.47764,-70.038045"
  },
  '11725': {
  lat: 18.503385,
  lng: -70.060587,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.503385,-70.060587"
  },
  '12005': {
  lat: 18.447258,
  lng: -69.985058,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.447258,-69.985058"
  },
  '12260': {
  lat: 18.470322,
  lng: -70.034225,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.470322,-70.034225"
  },
  '12372': {
  lat: 18.430585,
  lng: -69.991466,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.430585,-69.991466"
  },
  '12937': {
  lat: 18.430585,
  lng: -69.991466,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.430585,-69.991466"
  },
  '13241': {
  lat: 18.50045,
  lng: -70.051328,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.50045,-70.051328"
  },
  '13349': {
  lat: 18.47987,
  lng: -70.025072,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.47987,-70.025072"
  },
  '13406': {
  lat: 18.474396,
  lng: -70.033323,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.474396,-70.033323"
  },
  '13560': {
  lat: 18.460025,
  lng: -69.979185,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.460025,-69.979185"
  },
  '13562': {
  lat: 18.4546,
  lng: -69.9864,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.4546,-69.9864"
  },
  '13563': {
  lat: 18.48299,
  lng: -69.999534,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.48299,-69.999534"
  },
  '14146': {
  lat: 18.468032,
  lng: -69.98343,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.468032,-69.98343"
  },
  '14227': {
  lat: 18.505385,
  lng: -70.026704,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.505385,-70.026704"
  },
  '14228': {
  lat: 18.475263,
  lng: -70.041616,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.475263,-70.041616"
  },
  '14329': {
  lat: 18.48538,
  lng: -70.049072,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.48538,-70.049072"
  },
  '14330': {
  lat: 18.507227,
  lng: -70.011077,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.507227,-70.011077"
  },
  '14332': {
  lat: 18.507901,
  lng: -70.014904,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.507901,-70.014904"
  },
  '14570': {
  lat: 18.495858,
  lng: -70.023939,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.495858,-70.023939"
  },
  '14736': {
  lat: 18.474,
  lng: -69.9825,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.474,-69.9825"
  },
  '14760': {
  lat: 18.44837,
  lng: -69.984998,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.44837,-69.984998"
  },
  '14763': {
  lat: 18.488443,
  lng: -70.041895,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.488443,-70.041895"
  },
  '14775': {
  lat: 18.459567,
  lng: -69.977812,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.459567,-69.977812"
  },
  '14776': {
  lat: 18.4384717,
  lng: -69.9940199,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.4384717,-69.9940199"
  },
  '15055': {
  lat: 18.467445,
  lng: -69.986406,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.467445,-69.986406"
  },
  '15134': {
  lat: 18.483958,
  lng: -70.061603,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.483958,-70.061603"
  },
  '15151': {
  lat: 18.476316,
  lng: -69.976228,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.476316,-69.976228"
  },
  '15287': {
  lat: 18.44837,
  lng: -69.984998,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.44837,-69.984998"
  },
  '15352': {
  lat: 18.477786,
  lng: -69.984264,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.477786,-69.984264"
  },
  '15356': {
  lat: 18.466129,
  lng: -69.977962,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.466129,-69.977962"
  },
  '15472': {
  lat: 18.474396,
  lng: -70.033323,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.474396,-70.033323"
  },
  '15473': {
  lat: 18.480441,
  lng: -69.978841,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.480441,-69.978841"
  },
  '15475': {
  lat: 18.43805,
  lng: -69.994662,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.43805,-69.994662"
  },
  '15476': {
  lat: 18.480242,
  lng: -70.041681,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.480242,-70.041681"
  },
  '15477': {
  lat: 18.486626,
  lng: -70.012622,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.486626,-70.012622"
  },
  '15478': {
  lat: 18.483086,
  lng: -70.00299,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.483086,-70.00299"
  },
  '15479': {
  lat: 18.473886,
  lng: -69.973789,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.473886,-69.973789"
  },
  '15480': {
  lat: 18.47042,
  lng: -70.000587,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.47042,-70.000587"
  },
  '15481': {
  lat: 18.492627,
  lng: -70.016766,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.492627,-70.016766"
  },
  '15482': {
  lat: 18.436087,
  lng: -69.995384,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.436087,-69.995384"
  },
  '15500': {
  lat: 18.495801,
  lng: -70.051236,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.495801,-70.051236"
  },
  '15629': {
  lat: 18.47647,
  lng: -69.990879,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.47647,-69.990879"
  },
  '15641': {
  lat: 18.459767,
  lng: -69.978336,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.459767,-69.978336"
  },
  '15754': {
  lat: 18.484248,
  lng: -70.002903,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.484248,-70.002903"
  },
  '16351': {
  lat: 18.471046,
  lng: -70.000261,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.471046,-70.000261"
  },
  '17046': {
  lat: 18.495801,
  lng: -70.051236,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.495801,-70.051236"
  },
  '17118': {
  lat: 18.474396,
  lng: -70.033323,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.474396,-70.033323"
  },
  '17119': {
  lat: 18.498964,
  lng: -70.053765,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.498964,-70.053765"
  },
  '17199': {
  lat: 18.4843,
  lng: -70.006345,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.4843,-70.006345"
  },
  '00004': {
  lat: 18.559152,
  lng: -70.015942,
  direccion: "Pedro Brand, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.559152,-70.015942"
  },
  '00145': {
  lat: 18.572044,
  lng: -70.120084,
  direccion: "Pedro Brand, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.572044,-70.120084"
  },
  '00146': {
  lat: 18.549943,
  lng: -70.113603,
  direccion: "Pedro Brand, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.549943,-70.113603"
  },
  '00147': {
  lat: 18.604728,
  lng: -70.136426,
  direccion: "Pedro Brand, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.604728,-70.136426"
  },
  '00148': {
  lat: 18.573004,
  lng: -70.086495,
  direccion: "Pedro Brand, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.573004,-70.086495"
  },
  '00149': {
  lat: 18.597154,
  lng: -70.148498,
  direccion: "Pedro Brand, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.597154,-70.148498"
  },
  '00150': {
  lat: 18.5699,
  lng: -70.0967,
  direccion: "Pedro Brand, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.5699,-70.0967"
  },
  '00151': {
  lat: 18.548356,
  lng: -70.055735,
  direccion: "Pedro Brand, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.548356,-70.055735"
  },
  '00252': {
  lat: 18.646794,
  lng: -70.057586,
  direccion: "Pedro Brand, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.646794,-70.057586"
  },
  '00253': {
  lat: 18.599191,
  lng: -70.031883,
  direccion: "Pedro Brand, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.599191,-70.031883"
  },
  '00254': {
  lat: 18.615252,
  lng: -70.059144,
  direccion: "Pedro Brand, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.615252,-70.059144"
  },
  '00255': {
  lat: 18.576692,
  lng: -70.031852,
  direccion: "Pedro Brand, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.576692,-70.031852"
  },
  '00256': {
  lat: 18.547871,
  lng: -70.047382,
  direccion: "Pedro Brand, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.547871,-70.047382"
  },
  '00257': {
  lat: 18.612658,
  lng: -70.097882,
  direccion: "Pedro Brand, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.612658,-70.097882"
  },
  '00258': {
  lat: 18.596704,
  lng: -70.082538,
  direccion: "Pedro Brand, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.596704,-70.082538"
  },
  '00260': {
  lat: 18.6623,
  lng: -70.1033,
  direccion: "Pedro Brand, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.6623,-70.1033"
  },
  '00284': {
  lat: 18.569293,
  lng: -70.103921,
  direccion: "Pedro Brand, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.569293,-70.103921"
  },
  '00290': {
  lat: 18.558652,
  lng: -70.037085,
  direccion: "Pedro Brand, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.558652,-70.037085"
  },
  '00291': {
  lat: 18.6609,
  lng: -70.0808,
  direccion: "Pedro Brand, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.6609,-70.0808"
  },
  '00350': {
  lat: 18.54244,
  lng: -70.04269,
  direccion: "Pedro Brand, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.54244,-70.04269"
  },
  '00355': {
  lat: 18.56213,
  lng: -70.074901,
  direccion: "Pedro Brand, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.56213,-70.074901"
  },
  '00410': {
  lat: 18.647402,
  lng: -70.058173,
  direccion: "Pedro Brand, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.647402,-70.058173"
  },
  '00414': {
  lat: 18.676316,
  lng: -70.065266,
  direccion: "Pedro Brand, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.676316,-70.065266"
  },
  '03250': {
  lat: 18.632466,
  lng: -70.123377,
  direccion: "Pedro Brand, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.632466,-70.123377"
  },
  '04870': {
  lat: 18.610935,
  lng: -70.034348,
  direccion: "Pedro Brand, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.610935,-70.034348"
  },
  '05668': {
  lat: 18.573004,
  lng: -70.086495,
  direccion: "Pedro Brand, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.573004,-70.086495"
  },
  '05669': {
  lat: 18.573004,
  lng: -70.086495,
  direccion: "Pedro Brand, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.573004,-70.086495"
  },
  '05670': {
  lat: 18.564843,
  lng: -70.089441,
  direccion: "Pedro Brand, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.564843,-70.089441"
  },
  '05671': {
  lat: 18.564843,
  lng: -70.089441,
  direccion: "Pedro Brand, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.564843,-70.089441"
  },
  '05673': {
  lat: 18.5699,
  lng: -70.0967,
  direccion: "Pedro Brand, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.5699,-70.0967"
  },
  '05795': {
  lat: 18.648711,
  lng: -70.062242,
  direccion: "Pedro Brand, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.648711,-70.062242"
  },
  '05796': {
  lat: 18.650378,
  lng: -70.060892,
  direccion: "Pedro Brand, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.650378,-70.060892"
  },
  '05797': {
  lat: 18.601845,
  lng: -70.030244,
  direccion: "Pedro Brand, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.601845,-70.030244"
  },
  '05798': {
  lat: 18.546464,
  lng: -70.048466,
  direccion: "Pedro Brand, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.546464,-70.048466"
  },
  '06034': {
  lat: 18.56213,
  lng: -70.074901,
  direccion: "Pedro Brand, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.56213,-70.074901"
  },
  '10547': {
  lat: 18.564105,
  lng: -70.081356,
  direccion: "Pedro Brand, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.564105,-70.081356"
  },
  '12592': {
  lat: 18.650378,
  lng: -70.060892,
  direccion: "Pedro Brand, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.650378,-70.060892"
  },
  '12616': {
  lat: 18.573004,
  lng: -70.086495,
  direccion: "Pedro Brand, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.573004,-70.086495"
  },
  '13061': {
  lat: 18.56213,
  lng: -70.074901,
  direccion: "Pedro Brand, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.56213,-70.074901"
  },
  '13405': {
  lat: 18.546464,
  lng: -70.048466,
  direccion: "Pedro Brand, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.546464,-70.048466"
  },
  '13574': {
  lat: 18.581828,
  lng: -70.137969,
  direccion: "Pedro Brand, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.581828,-70.137969"
  },
  '14145': {
  lat: 18.546464,
  lng: -70.048466,
  direccion: "Pedro Brand, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.546464,-70.048466"
  },
  '14600': {
  lat: 18.561315,
  lng: -70.09735,
  direccion: "Pedro Brand, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.561315,-70.09735"
  },
  '14817': {
  lat: 18.53927,
  lng: -70.030863,
  direccion: "Pedro Brand, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.53927,-70.030863"
  },
  '15204': {
  lat: 18.550375,
  lng: -70.015461,
  direccion: "Pedro Brand, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.550375,-70.015461"
  },
  '15509': {
  lat: 18.538924,
  lng: -70.030169,
  direccion: "Pedro Brand, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.538924,-70.030169"
  },
  '15515': {
  lat: 18.545233,
  lng: -70.043713,
  direccion: "Pedro Brand, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.545233,-70.043713"
  },
  '15518': {
  lat: 18.601845,
  lng: -70.030244,
  direccion: "Pedro Brand, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.601845,-70.030244"
  },
  '15549': {
  lat: 18.585445,
  lng: -70.060969,
  direccion: "Pedro Brand, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.585445,-70.060969"
  },
  '17102': {
  lat: 18.63202,
  lng: -70.123137,
  direccion: "Pedro Brand, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.63202,-70.123137"
  }
}
