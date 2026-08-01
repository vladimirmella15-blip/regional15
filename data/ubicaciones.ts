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
  lng: -70.9386,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.506,-70.9386"
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
  lng: -70.9386,
  direccion: "Santo Domingo de Guzmán, Distrito Nacional",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.506,-70.9386"
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
  lng: -70.9825,
  direccion: "Santo Domingo Oeste, Santo Domingo",
  enlace: "https://www.google.com/maps/search/?api=1&query=18.474,-70.9825"
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
