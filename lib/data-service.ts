import { supabase } from './supabase'
import { v4 as uuidv4 } from 'uuid'
import type {
  Noticia, Servicio, Enlace, Evento, Programa, Testimonio,
  GaleriaItem, InstagramPost, TickerItem, Config, Documento,
  POA, SeguimientoPOA, ContentData, CalendarioEvento
} from './types'

function now() { return new Date().toISOString() }

// ─── Noticias ───

export async function getAllNoticias(): Promise<Noticia[]> {
  const { data } = await supabase.from('noticias').select('*').order('fecha', { ascending: false }).order('created_at', { ascending: false })
  return (data || []).map(r => ({ ...r, galeria: typeof r.galeria === 'string' ? JSON.parse(r.galeria || '[]') : (r.galeria || []) }))
}

export async function getNoticiaById(id: string): Promise<Noticia | null> {
  const { data } = await supabase.from('noticias').select('*').eq('id', id).single()
  if (!data) return null
  return { ...data, galeria: typeof data.galeria === 'string' ? JSON.parse(data.galeria || '[]') : (data.galeria || []) }
}

export async function saveNoticia(data: Partial<Noticia> & { titulo: string }): Promise<Noticia> {
  const id = data.id || `noticia-${Date.now()}`
  const { data: existing } = await supabase.from('noticias').select('id').eq('id', id).maybeSingle()
  const record = {
    ...data,
    id,
    galeria: JSON.stringify(data.galeria || []),
    updated_at: now(),
    created_at: existing ? undefined : now(),
  }
  if (existing) {
    await supabase.from('noticias').update(record).eq('id', id)
  } else {
    await supabase.from('noticias').insert(record)
  }
  return (await getNoticiaById(id))!
}

export async function deleteNoticia(id: string): Promise<void> {
  await supabase.from('noticias').delete().eq('id', id)
}

// ─── Servicios ───

export async function getAllServicios(): Promise<Servicio[]> {
  const { data } = await supabase.from('servicios').select('*').order('created_at', { ascending: false })
  return data || []
}

export async function saveServicio(data: Partial<Servicio> & { titulo: string }): Promise<Servicio> {
  const id = data.id || `servicio-${Date.now()}`
  const { data: existing } = await supabase.from('servicios').select('id').eq('id', id).maybeSingle()
  const record = { ...data, id, updated_at: now(), created_at: existing ? undefined : now() }
  if (existing) {
    await supabase.from('servicios').update(record).eq('id', id)
  } else {
    await supabase.from('servicios').insert(record)
  }
  const { data: result } = await supabase.from('servicios').select('*').eq('id', id).single()
  return result!
}

export async function deleteServicio(id: string): Promise<void> {
  await supabase.from('servicios').delete().eq('id', id)
}

// ─── Enlaces ───

export async function getAllEnlaces(): Promise<Enlace[]> {
  const { data } = await supabase.from('enlaces').select('*').order('created_at', { ascending: false })
  return data || []
}

export async function saveEnlace(data: Partial<Enlace> & { nombre: string }): Promise<Enlace> {
  const id = data.id || `enlace-${Date.now()}`
  const { data: existing } = await supabase.from('enlaces').select('id').eq('id', id).maybeSingle()
  const record = { ...data, id, updated_at: now(), created_at: existing ? undefined : now() }
  if (existing) {
    await supabase.from('enlaces').update(record).eq('id', id)
  } else {
    await supabase.from('enlaces').insert(record)
  }
  const { data: result } = await supabase.from('enlaces').select('*').eq('id', id).single()
  return result!
}

export async function deleteEnlace(id: string): Promise<void> {
  await supabase.from('enlaces').delete().eq('id', id)
}

// ─── Eventos ───

export async function getAllEventos(): Promise<Evento[]> {
  const { data } = await supabase.from('eventos').select('*').order('fecha', { ascending: false }).order('created_at', { ascending: false })
  return data || []
}

export async function saveEvento(data: Partial<Evento> & { titulo: string }): Promise<Evento> {
  const id = data.id || `evento-${Date.now()}`
  const { data: existing } = await supabase.from('eventos').select('id').eq('id', id).maybeSingle()
  const record = { ...data, id, updated_at: now(), created_at: existing ? undefined : now() }
  if (existing) {
    await supabase.from('eventos').update(record).eq('id', id)
  } else {
    await supabase.from('eventos').insert(record)
  }
  const { data: result } = await supabase.from('eventos').select('*').eq('id', id).single()
  return result!
}

export async function deleteEvento(id: string): Promise<void> {
  await supabase.from('eventos').delete().eq('id', id)
}

// ─── Programas ───

export async function getAllProgramas(): Promise<Programa[]> {
  const { data } = await supabase.from('programas').select('*').order('created_at', { ascending: false })
  return data || []
}

export async function savePrograma(data: Partial<Programa> & { titulo: string }): Promise<Programa> {
  const id = data.id || `programa-${Date.now()}`
  const { data: existing } = await supabase.from('programas').select('id').eq('id', id).maybeSingle()
  const record = { ...data, id, updated_at: now(), created_at: existing ? undefined : now() }
  if (existing) {
    await supabase.from('programas').update(record).eq('id', id)
  } else {
    await supabase.from('programas').insert(record)
  }
  const { data: result } = await supabase.from('programas').select('*').eq('id', id).single()
  return result!
}

export async function deletePrograma(id: string): Promise<void> {
  await supabase.from('programas').delete().eq('id', id)
}

// ─── Testimonios ───

export async function getAllTestimonios(): Promise<Testimonio[]> {
  const { data } = await supabase.from('testimonios').select('*').order('created_at', { ascending: false })
  return data || []
}

export async function saveTestimonio(data: Partial<Testimonio> & { nombre: string }): Promise<Testimonio> {
  const id = data.id || `testimonio-${Date.now()}`
  const { data: existing } = await supabase.from('testimonios').select('id').eq('id', id).maybeSingle()
  const record = { ...data, id, updated_at: now(), created_at: existing ? undefined : now() }
  if (existing) {
    await supabase.from('testimonios').update(record).eq('id', id)
  } else {
    await supabase.from('testimonios').insert(record)
  }
  const { data: result } = await supabase.from('testimonios').select('*').eq('id', id).single()
  return result!
}

export async function deleteTestimonio(id: string): Promise<void> {
  await supabase.from('testimonios').delete().eq('id', id)
}

// ─── Galeria ───

export async function getAllGaleria(): Promise<GaleriaItem[]> {
  const { data } = await supabase.from('galeria').select('*').order('created_at', { ascending: false })
  return data || []
}

export async function saveGaleriaItem(data: Partial<GaleriaItem> & { imagen: string }): Promise<GaleriaItem> {
  const id = data.id || `galeria-${Date.now()}`
  const { data: existing } = await supabase.from('galeria').select('id').eq('id', id).maybeSingle()
  if (existing) {
    await supabase.from('galeria').update({ imagen: data.imagen, titulo: data.titulo || '' }).eq('id', id)
  } else {
    await supabase.from('galeria').insert({ id, imagen: data.imagen, titulo: data.titulo || '' })
  }
  const { data: result } = await supabase.from('galeria').select('*').eq('id', id).single()
  return result!
}

export async function deleteGaleriaItem(id: string): Promise<void> {
  await supabase.from('galeria').delete().eq('id', id)
}

// ─── Instagram Posts ───

export async function getAllInstagramPosts(): Promise<InstagramPost[]> {
  const { data } = await supabase.from('instagram_posts').select('*').order('created_at', { ascending: false })
  return data || []
}

export async function saveInstagramPost(data: Partial<InstagramPost> & { src: string }): Promise<InstagramPost> {
  const id = data.id || `ig-${Date.now()}`
  const { data: existing } = await supabase.from('instagram_posts').select('id').eq('id', id).maybeSingle()
  if (existing) {
    await supabase.from('instagram_posts').update({ src: data.src, caption: data.caption || '', url: data.url || '' }).eq('id', id)
  } else {
    await supabase.from('instagram_posts').insert({ id, src: data.src, caption: data.caption || '', url: data.url || '' })
  }
  const { data: result } = await supabase.from('instagram_posts').select('*').eq('id', id).single()
  return result!
}

export async function deleteInstagramPost(id: string): Promise<void> {
  await supabase.from('instagram_posts').delete().eq('id', id)
}

// ─── Ticker ───

export async function getAllTickerItems(activosOnly = true): Promise<TickerItem[]> {
  let query = supabase.from('ticker').select('*').order('orden', { ascending: true }).order('created_at', { ascending: true })
  if (activosOnly) query = query.eq('activo', 1)
  const { data } = await query
  return data || []
}

export async function saveTickerItem(data: { id?: string; mensaje: string; activo?: number; orden?: number }): Promise<TickerItem> {
  const id = data.id || `ticker-${Date.now()}`
  const { data: existing } = await supabase.from('ticker').select('id').eq('id', id).maybeSingle()
  if (existing) {
    await supabase.from('ticker').update({ mensaje: data.mensaje, activo: data.activo ?? 1, orden: data.orden ?? 0 }).eq('id', id)
  } else {
    await supabase.from('ticker').insert({ id, mensaje: data.mensaje, activo: data.activo ?? 1, orden: data.orden ?? 0 })
  }
  const { data: result } = await supabase.from('ticker').select('*').eq('id', id).single()
  return result!
}

export async function deleteTickerItem(id: string): Promise<void> {
  await supabase.from('ticker').delete().eq('id', id)
}

// ─── Config ───

export async function getConfig(): Promise<Config> {
  const { data, error } = await supabase.from('config').select('*').eq('id', 'main').single()
  if (error && error.code === 'PGRST116') {
    await supabase.from('config').insert({ id: 'main' })
    const { data: inserted } = await supabase.from('config').select('*').eq('id', 'main').single()
    return inserted as Config
  }
  return data as Config
}

export async function updateConfig(data: Partial<Config>): Promise<void> {
  const existing = await getConfig()
  await supabase.from('config').update({
    ultima_actualizacion: data.ultima_actualizacion ?? existing.ultima_actualizacion,
    google_analytics_id: data.google_analytics_id ?? existing.google_analytics_id,
    instagram_token: data.instagram_token ?? existing.instagram_token,
    stats_distritos: data.stats_distritos ?? existing.stats_distritos,
    stats_publicaciones: data.stats_publicaciones ?? existing.stats_publicaciones,
    stats_seguidores: data.stats_seguidores ?? existing.stats_seguidores,
    stats_galas: data.stats_galas ?? existing.stats_galas,
    stats_anio_escolar: data.stats_anio_escolar ?? existing.stats_anio_escolar,
    updated_at: now(),
  }).eq('id', 'main')
}

// ─── Documentos ───

export async function getAllDocumentos(): Promise<Documento[]> {
  const { data } = await supabase.from('documentos').select('*').order('created_at', { ascending: false })
  return data || []
}

export async function saveDocumento(data: Partial<Documento> & { title: string; filename: string }): Promise<Documento> {
  const id = data.id || `doc-${Date.now()}`
  const record = {
    id, title: data.title, description: data.description || '',
    category: data.category || 'General', filename: data.filename,
    originalName: data.originalName || data.filename,
    url: data.url || `/uploads/${data.filename}`, size: data.size || 0, type: data.type || '',
    uploadedAt: now(), created_at: now(),
  }
  await supabase.from('documentos').insert(record)
  const { data: result } = await supabase.from('documentos').select('*').eq('id', id).single()
  return result!
}

export async function deleteDocumento(id: string): Promise<void> {
  await supabase.from('documentos').delete().eq('id', id)
}

// ─── POA ───

export async function getAllPOA(): Promise<POA[]> {
  const { data } = await supabase.from('poa').select('*').order('anio', { ascending: false }).order('trimestre', { ascending: true }).order('created_at', { ascending: false })
  return data || []
}

export async function getPOAById(id: string): Promise<POA | null> {
  const { data } = await supabase.from('poa').select('*').eq('id', id).single()
  return data
}

export async function savePOA(data: Partial<POA> & { nombre: string; anio: number }): Promise<POA> {
  const id = data.id || `poa-${Date.now()}`
  const { data: existing } = await supabase.from('poa').select('id').eq('id', id).maybeSingle()
  const record = { ...data, id, updated_at: now(), created_at: existing ? undefined : now() }
  if (existing) {
    await supabase.from('poa').update(record).eq('id', id)
  } else {
    await supabase.from('poa').insert(record)
  }
  return (await getPOAById(id))!
}

export async function deletePOA(id: string): Promise<void> {
  await supabase.from('seguimiento_poa').delete().eq('poa_id', id)
  await supabase.from('poa').delete().eq('id', id)
}

export async function getSeguimientoByPOAId(poaId: string): Promise<SeguimientoPOA[]> {
  const { data } = await supabase.from('seguimiento_poa').select('*').eq('poa_id', poaId).order('fecha', { ascending: false })
  return data || []
}

export async function saveSeguimientoPOA(data: { poa_id: string; avance_porcentaje: number; observacion: string; usuario: string }): Promise<SeguimientoPOA> {
  const id = `seg-${Date.now()}`
  await supabase.from('seguimiento_poa').insert({ id, poa_id: data.poa_id, avance_porcentaje: data.avance_porcentaje, observacion: data.observacion, usuario: data.usuario })
  await supabase.from('poa').update({ avance_porcentaje: data.avance_porcentaje, updated_at: now() }).eq('id', data.poa_id)
  const { data: result } = await supabase.from('seguimiento_poa').select('*').eq('id', id).single()
  return result!
}

// ─── Distritos ───

export async function getAllDistritos(): Promise<any[]> {
  const { data } = await supabase.from('distritos').select('*').order('codigo', { ascending: true })
  return data || []
}

export async function getDistritoById(id: string): Promise<any | null> {
  const { data } = await supabase.from('distritos').select('*').eq('id', id).single()
  return data
}

export async function saveDistrito(data: any): Promise<any> {
  const id = data.id || `dist-${Date.now()}`
  const { data: existing } = await supabase.from('distritos').select('id').eq('id', id).maybeSingle()
  const record = { ...data, id, updated_at: now(), created_at: existing ? undefined : now() }
  if (existing) {
    await supabase.from('distritos').update(record).eq('id', id)
  } else {
    await supabase.from('distritos').insert(record)
  }
  return getDistritoById(id)
}

export async function deleteDistrito(id: string): Promise<boolean> {
  const { error } = await supabase.from('distritos').delete().eq('id', id)
  return !error
}

// ─── Calendario ───

export async function getAllCalendario(): Promise<CalendarioEvento[]> {
  const { data } = await supabase.from('calendario').select('*').order('fecha_inicio', { ascending: true }).order('hora', { ascending: true })
  return data || []
}

export async function saveCalendario(data: Partial<CalendarioEvento> & { titulo: string; fecha_inicio: string }): Promise<CalendarioEvento> {
  const id = data.id || `cal-${Date.now()}`
  const { data: existing } = await supabase.from('calendario').select('id').eq('id', id).maybeSingle()
  const record = { ...data, id, updated_at: now(), created_at: existing ? undefined : now() }
  if (existing) {
    await supabase.from('calendario').update(record).eq('id', id)
  } else {
    await supabase.from('calendario').insert(record)
  }
  const { data: result } = await supabase.from('calendario').select('*').eq('id', id).single()
  return result!
}

export async function deleteCalendario(id: string): Promise<void> {
  await supabase.from('calendario').delete().eq('id', id)
}

// ─── Director ───

export async function getDirector(): Promise<any> {
  const { data, error } = await supabase.from('director').select('data').eq('id', 'main').single()
  if (error || !data?.data) return null
  try { return typeof data.data === 'string' ? JSON.parse(data.data) : data.data } catch { return null }
}

export async function saveDirector(data: any): Promise<any> {
  await supabase.from('director').upsert({ id: 'main', data: JSON.stringify(data), updated_at: now() })
  return data
}

// ─── Dashboard Stats ───

export interface DashboardStats {
  totalNoticias: number; totalServicios: number; totalEnlaces: number;
  totalEventos: number; totalProgramas: number; totalTestimonios: number;
  totalGaleria: number; totalDocumentos: number; totalPOA: number;
  totalCalendario: number; poaCompletados: number; poaEnProgreso: number;
  poaRetrasados: number; ultimaActualizacion: string;
}

export async function getDashboardStats(): Promise<DashboardStats> {
  const noticias = await supabase.from('noticias').select('*', { count: 'exact', head: true })
  const servicios = await supabase.from('servicios').select('*', { count: 'exact', head: true })
  const enlaces = await supabase.from('enlaces').select('*', { count: 'exact', head: true })
  const eventos = await supabase.from('eventos').select('*', { count: 'exact', head: true })
  const programas = await supabase.from('programas').select('*', { count: 'exact', head: true })
  const testimonios = await supabase.from('testimonios').select('*', { count: 'exact', head: true })
  const galeria = await supabase.from('galeria').select('*', { count: 'exact', head: true })
  const docs = await supabase.from('documentos').select('*', { count: 'exact', head: true })
  const poa = await supabase.from('poa').select('*', { count: 'exact', head: true })
  const calendario = await supabase.from('calendario').select('*', { count: 'exact', head: true })
  const poaCompletados = await supabase.from('poa').select('*', { count: 'exact', head: true }).eq('estado', 'completado')
  const poaEnProgreso = await supabase.from('poa').select('*', { count: 'exact', head: true }).eq('estado', 'en_progreso')
  const poaRetrasados = await supabase.from('poa').select('*', { count: 'exact', head: true }).eq('estado', 'retrasado')
  const config = await getConfig()

  return {
    totalNoticias: noticias.count || 0,
    totalServicios: servicios.count || 0,
    totalEnlaces: enlaces.count || 0,
    totalEventos: eventos.count || 0,
    totalProgramas: programas.count || 0,
    totalTestimonios: testimonios.count || 0,
    totalGaleria: galeria.count || 0,
    totalDocumentos: docs.count || 0,
    totalPOA: poa.count || 0,
    totalCalendario: calendario.count || 0,
    poaCompletados: poaCompletados.count || 0,
    poaEnProgreso: poaEnProgreso.count || 0,
    poaRetrasados: poaRetrasados.count || 0,
    ultimaActualizacion: config.ultima_actualizacion,
  }
}

// ─── Busqueda ───

export interface SearchResult {
  id: string; tipo: string; titulo: string; descripcion: string; url: string; fecha: string;
}

export async function searchContent(q: string): Promise<SearchResult[]> {
  const term = `%${q}%`
  const results: SearchResult[] = []

  const { data: noticias } = await supabase.from('noticias').select('id, titulo, descripcion, fecha')
    .or(`titulo.ilike.${term},descripcion.ilike.${term},contenido_completo.ilike.${term}`).limit(10)
  for (const n of noticias || []) {
    results.push({ id: n.id, tipo: 'Noticia', titulo: n.titulo, descripcion: n.descripcion, url: '#noticias', fecha: n.fecha })
  }

  const { data: eventos } = await supabase.from('eventos').select('id, titulo, descripcion, fecha')
    .or(`titulo.ilike.${term},descripcion.ilike.${term}`).limit(10)
  for (const e of eventos || []) {
    results.push({ id: e.id, tipo: 'Evento', titulo: e.titulo, descripcion: e.descripcion, url: '#eventos', fecha: e.fecha })
  }

  const { data: programas } = await supabase.from('programas').select('id, titulo, descripcion')
    .or(`titulo.ilike.${term},descripcion.ilike.${term}`).limit(10)
  for (const p of programas || []) {
    results.push({ id: p.id, tipo: 'Programa', titulo: p.titulo, descripcion: p.descripcion, url: '#programas', fecha: '' })
  }

  const { data: calendario } = await supabase.from('calendario').select('id, titulo, descripcion, fecha_inicio')
    .or(`titulo.ilike.${term},descripcion.ilike.${term}`).limit(10)
  for (const c of calendario || []) {
    results.push({ id: c.id, tipo: 'Evento Calendario', titulo: c.titulo, descripcion: c.descripcion, url: '#calendario', fecha: c.fecha_inicio })
  }

  return results
}

// ─── Content JSON export ───

export async function getContentAsJSON(): Promise<ContentData> {
  const [noticias, servicios, enlaces, eventos, programas, testimonios, galeria, instagram, calendario, distritos, config, director] = await Promise.all([
    getAllNoticias(), getAllServicios(), getAllEnlaces(), getAllEventos(), getAllProgramas(),
    getAllTestimonios(), getAllGaleria(), getAllInstagramPosts(), getAllCalendario(), getAllDistritos(),
    getConfig(), getDirector(),
  ])
  const tickerItems = await getAllTickerItems(true)
  return {
    noticias, servicios, enlaces, eventos, programas, testimonios, galeria, instagram, calendario, distritos,
    config: {
      ultima_actualizacion: config.ultima_actualizacion,
      google_analytics_id: config.google_analytics_id,
      instagram_token: config.instagram_token,
      ticker: tickerItems.map(t => t.mensaje),
      stats: {
        distritos: config.stats_distritos,
        publicaciones: config.stats_publicaciones,
        seguidores: config.stats_seguidores,
        galas: config.stats_galas,
        anio_escolar: config.stats_anio_escolar,
      },
    },
    director,
  }
}

// ─── Users ───

export async function getAllUsers(): Promise<any[]> {
  const { data } = await supabase.from('users').select('id, nombre, email, rol, activo, created_at').order('created_at', { ascending: false })
  return data || []
}

export async function getUserByEmail(email: string): Promise<any> {
  const { data } = await supabase.from('users').select('*').eq('email', email).maybeSingle()
  return data
}

export async function getUser(id: string): Promise<any> {
  const { data } = await supabase.from('users').select('*').eq('id', id).maybeSingle()
  return data
}

export async function saveUser(data: { id?: string; nombre: string; email: string; password_hash: string; rol: string }): Promise<any> {
  const id = data.id || `user-${Date.now()}`
  const { data: existing } = await supabase.from('users').select('id').eq('id', id).maybeSingle()
  if (existing) {
    await supabase.from('users').update({ nombre: data.nombre, email: data.email, rol: data.rol, updated_at: now() }).eq('id', id)
  } else {
    await supabase.from('users').insert({ id, nombre: data.nombre, email: data.email, password_hash: data.password_hash, rol: data.rol })
  }
  const { data: result } = await supabase.from('users').select('id, nombre, email, rol, activo, created_at').eq('id', id).single()
  return result
}

export async function deleteUser(id: string): Promise<void> {
  await supabase.from('users').delete().eq('id', id)
}

// ─── Salon Requests ───

export async function getAllSalonRequests(): Promise<any[]> {
  const { data } = await supabase.from('salon_requests').select('*').order('created_at', { ascending: false })
  return data || []
}

export async function getSalonRequest(id: string): Promise<any> {
  const { data } = await supabase.from('salon_requests').select('*').eq('id', id).maybeSingle()
  return data
}

export async function createSalonRequest(data: {
  solicitante_nombre: string; solicitante_email: string; solicitante_telefono: string;
  titulo_actividad: string; descripcion: string; fecha_solicitada: string;
  hora_inicio: string; hora_fin: string
}): Promise<any> {
  const id = `sr-${Date.now()}`
  await supabase.from('salon_requests').insert({
    id, solicitante_nombre: data.solicitante_nombre, solicitante_email: data.solicitante_email,
    solicitante_telefono: data.solicitante_telefono, titulo_actividad: data.titulo_actividad,
    descripcion: data.descripcion, fecha_solicitada: data.fecha_solicitada,
    hora_inicio: data.hora_inicio, hora_fin: data.hora_fin,
  })
  const { data: result } = await supabase.from('salon_requests').select('*').eq('id', id).single()
  return result
}

export async function approveSalonRequest(id: string, calendario_evento_id: string): Promise<any> {
  await supabase.from('salon_requests').update({ estado: 'aprobado', calendario_evento_id, updated_at: now() }).eq('id', id)
  const { data: result } = await supabase.from('salon_requests').select('*').eq('id', id).single()
  return result
}

export async function rejectSalonRequest(id: string, motivo: string): Promise<any> {
  await supabase.from('salon_requests').update({ estado: 'rechazado', motivo_rechazo: motivo, updated_at: now() }).eq('id', id)
  const { data: result } = await supabase.from('salon_requests').select('*').eq('id', id).single()
  return result
}
