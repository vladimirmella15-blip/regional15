// Genera una pagina HTML para revisar los 61 centros sin ubicacion.
// Cada fila abre el buscador de Google Maps o el de Waze con el nombre y el
// distrito, para que la persona vea donde cae y deje la coordenada.
//
// Es una herramienta de trabajo local: no toca los datos del sitio.
const fs = require('fs')

const d = JSON.parse(fs.readFileSync('docs/CENTROS-SIN-UBICACION.json', 'utf8'))

const porDist = new Map()
for (const c of d.centros) {
  if (!porDist.has(c.distrito)) porDist.set(c.distrito, [])
  porDist.get(c.distrito).push(c)
}
const orden = [...porDist.entries()].sort(
  (a, b) => parseInt((a[0].match(/^\d+/) || ['999'])[0], 10) - parseInt((b[0].match(/^\d+/) || ['999'])[0], 10)
)

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;')
const consulta = c => `${c.nombre}, ${c.distrito.replace(/^\d+\s*/, '')}, República Dominicana`
const urlMaps = c => `https://www.google.com/maps/search/${encodeURIComponent(consulta(c))}`
const urlWaze = c => `https://www.waze.com/ul?q=${encodeURIComponent(consulta(c))}&navigate=yes`

let fila = 0
let cuerpo = ''
for (const [dist, cs] of orden) {
  cuerpo += `<tr class="grupo"><td colspan="6">${esc(dist)} — ${cs.length} centros</td></tr>\n`
  cs.sort((a, b) => a.codigo.localeCompare(b.codigo)).forEach(c => {
    fila++
    const aviso = c.situacion.includes('ROTA')
      ? '<span class="rota" title="Tiene longitud ~0: el pin cae en el oceano. Hay que corregirlo.">coordenada rota</span>'
      : ''
    cuerpo += `<tr>
      <td class="n">${fila}</td>
      <td class="cod">${esc(c.codigo)}</td>
      <td class="nom">${esc(c.nombre)} ${aviso}</td>
      <td><a class="btn maps" target="_blank" rel="noopener" href="${urlMaps(c)}">Maps</a></td>
      <td><a class="btn waze" target="_blank" rel="noopener" href="${urlWaze(c)}">Waze</a></td>
      <td><input type="text" placeholder="18.479889, -69.757420" data-cod="${esc(c.codigo)}" class="coord"></td>
    </tr>\n`
  })
}

const html = `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Centros sin ubicacion — Regional 15 (${d.total})</title>
<style>
  :root { --azul:#1e5aa8; --linea:#d9dee5; --fondo:#f6f8fa; }
  * { box-sizing: border-box; }
  body { font-family: "Segoe UI", system-ui, sans-serif; margin:0; background:var(--fondo); color:#1b1f24; }
  header { background:var(--azul); color:#fff; padding:18px 22px; }
  header h1 { margin:0 0 4px; font-size:1.25rem; }
  header p { margin:0; opacity:.9; font-size:.85rem; }
  .aviso { background:#fffbeb; border-bottom:1px solid #fde68a; padding:12px 22px; font-size:.83rem; color:#78350f; }
  .barra { position:sticky; top:0; background:#fff; border-bottom:1px solid var(--linea); padding:10px 22px;
           display:flex; gap:14px; align-items:center; flex-wrap:wrap; font-size:.85rem; }
  .barra strong { color:var(--azul); }
  .barra button { background:var(--azul); color:#fff; border:0; padding:7px 14px; border-radius:6px;
                  font-size:.82rem; cursor:pointer; font-weight:600; }
  .barra button.sec { background:#5b6472; }
  table { width:100%; border-collapse:collapse; font-size:.83rem; }
  th, td { padding:7px 10px; text-align:left; border-bottom:1px solid var(--linea); vertical-align:middle; }
  thead th { background:#eef2f7; font-size:.76rem; text-transform:uppercase; letter-spacing:.04em; color:#48505c; }
  tr.grupo td { background:#e6edf6; font-weight:700; color:var(--azul); font-size:.82rem; letter-spacing:.02em; }
  .n { width:34px; color:#8a94a1; text-align:right; }
  .cod { font-family:Consolas,monospace; width:66px; }
  .nom { max-width:420px; }
  .btn { display:inline-block; padding:4px 11px; border-radius:5px; color:#fff; font-size:.74rem;
         text-decoration:none; font-weight:600; white-space:nowrap; }
  .maps { background:#0f9d58; } .waze { background:#1e5aa8; }
  .btn:hover { filter:brightness(1.12); }
  .rota { background:#fee2e2; color:#991b1b; font-size:.66rem; padding:2px 6px; border-radius:4px; margin-left:6px; }
  .coord { width:190px; padding:5px 7px; border:1px solid var(--linea); border-radius:5px; font-family:Consolas,monospace; font-size:.8rem; }
  .coord:focus { outline:2px solid var(--azul); border-color:var(--azul); }
  .lleno { background:#ecfdf5 !important; border-color:#10b981 !important; }
  @media print { .barra, thead { display:none } }
</style>
</head>
<body>
<header>
  <h1>Centros educativos sin ubicacion — Regional 15</h1>
  <p>${d.total} centros. Buscalos en Maps o Waze y escribe la coordenada.</p>
</header>

<div class="aviso">
  <strong>Como se usa:</strong> abrís <b>Maps</b> o <b>Waze</b>, el buscador te lleva al lugar mas parecido.
  Si es el centro correcto, copias la coordenada y la pegas aqui.
  Si el resultado NO es ese centro, déjalo vacío y anótalo en la lista de pendientes.
  <br><strong>Ojo:</strong> muchos nombres se repiten en toda la República. Verifica que caiga en el distrito correcto.
</div>

<div class="barra">
  <span>Completados: <strong id="c">0</strong> de ${d.total}</span>
  <button onclick="copiar()">Copiar lo que llevo</button>
  <button class="sec" onclick="descargar()">Descargar CSV</button>
  <button class="sec" onclick="limpiar()">Limpiar casillas</button>
</div>

<table>
<thead><tr><th>#</th><th>Codigo</th><th>Centro</th><th>Google Maps</th><th>Waze</th><th>Coordenada (lat, lng)</th></tr></thead>
<tbody>
${cuerpo}</tbody>
</table>

<script>
const campos = [...document.querySelectorAll('.coord')];
function contar() {
  document.getElementById('c').textContent = campos.filter(c => c.value.trim()).length;
}
campos.forEach(c => {
  c.addEventListener('input', () => {
    c.classList.toggle('lleno', /^-?\\d{1,2}\\.\\d+,\\s*-?\\d{1,3}\\.\\d+$/.test(c.value.trim()));
    contar();
  });
});
function filas() {
  return [...document.querySelectorAll('tbody tr:not(.grupo)')].map(tr => {
    const t = tr.querySelectorAll('td');
    return { cod: t[1].innerText.trim(), nom: t[2].innerText.replace(/coordenada rota/,'').trim(),
             coord: tr.querySelector('.coord').value.trim() };
  }).filter(f => f.coord);
}
function copiar() {
  const txt = filas().map(f => f.cod + '\\t' + f.nom + '\\t' + f.coord).join('\\n');
  navigator.clipboard.writeText(txt).then(() => alert('Copiado ' + filas().length + ' centro(s). Pegalo en el chat.'));
}
function descargar() {
  const t = filas().map(f => '"' + f.cod + '";"' + f.nom + '";"' + f.coord + '"').join('\\r\\n');
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob(['\\ufeffcodigo;nombre;coordenada\\r\\n' + t], {type:'text/csv'}));
  a.download = 'coordenadas-centros.csv'; a.click();
}
function limpiar() { campos.forEach(c => { c.value=''; c.classList.remove('lleno'); }); contar(); }
</script>
</body>
</html>`

fs.writeFileSync('docs/CENTROS-SIN-UBICACION.html', html)
console.log('Generado docs/CENTROS-SIN-UBICACION.html')
console.log('  ' + fila + ' centros con botones de Maps y Waze')
console.log('')
console.log('Abrelo con:  start docs\\CENTROS-SIN-UBICACION.html')