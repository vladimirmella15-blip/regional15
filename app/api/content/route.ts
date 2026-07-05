import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth.config'
import { getContent } from '@/lib/content'

export async function GET() {
  try {
    const data = getContent()
    return NextResponse.json(data)
  } catch {
    const { getContentAsJSON } = await import('@/lib/data-service')
    const data = await getContentAsJSON()
    return NextResponse.json(data)
  }
}

export async function PUT() {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
    }
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Error al guardar' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
    }

    const body = await request.json()
    const role = (session.user as any)?.role

    if (!body.action || !body.entity) {
      return NextResponse.json({ error: 'Se requieren action y entity' }, { status: 400 })
    }

    if (role !== 'admin' && (body.action === 'save' || body.action === 'delete')) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 403 })
    }

    let result

    switch (body.entity) {
      case 'noticias': {
        const { getAllNoticias, saveNoticia, deleteNoticia } = await import('@/lib/data-service')
        if (body.action === 'list') result = await getAllNoticias()
        else if (body.action === 'save') result = await saveNoticia(body.data)
        else if (body.action === 'delete') { await deleteNoticia(body.id); result = { success: true } }
        break
      }
      case 'servicios': {
        const { getAllServicios, saveServicio, deleteServicio } = await import('@/lib/data-service')
        if (body.action === 'list') result = await getAllServicios()
        else if (body.action === 'save') result = await saveServicio(body.data)
        else if (body.action === 'delete') { await deleteServicio(body.id); result = { success: true } }
        break
      }
      case 'enlaces': {
        const { getAllEnlaces, saveEnlace, deleteEnlace } = await import('@/lib/data-service')
        if (body.action === 'list') result = await getAllEnlaces()
        else if (body.action === 'save') result = await saveEnlace(body.data)
        else if (body.action === 'delete') { await deleteEnlace(body.id); result = { success: true } }
        break
      }
      case 'eventos': {
        const { getAllEventos, saveEvento, deleteEvento } = await import('@/lib/data-service')
        if (body.action === 'list') result = await getAllEventos()
        else if (body.action === 'save') result = await saveEvento(body.data)
        else if (body.action === 'delete') { await deleteEvento(body.id); result = { success: true } }
        break
      }
      case 'programas': {
        const { getAllProgramas, savePrograma, deletePrograma } = await import('@/lib/data-service')
        if (body.action === 'list') result = await getAllProgramas()
        else if (body.action === 'save') result = await savePrograma(body.data)
        else if (body.action === 'delete') { await deletePrograma(body.id); result = { success: true } }
        break
      }
      case 'testimonios': {
        const { getAllTestimonios, saveTestimonio, deleteTestimonio } = await import('@/lib/data-service')
        if (body.action === 'list') result = await getAllTestimonios()
        else if (body.action === 'save') result = await saveTestimonio(body.data)
        else if (body.action === 'delete') { await deleteTestimonio(body.id); result = { success: true } }
        break
      }
      case 'galeria': {
        const { getAllGaleria, saveGaleriaItem, deleteGaleriaItem } = await import('@/lib/data-service')
        if (body.action === 'list') result = await getAllGaleria()
        else if (body.action === 'save') result = await saveGaleriaItem(body.data)
        else if (body.action === 'delete') { await deleteGaleriaItem(body.id); result = { success: true } }
        break
      }
      case 'instagram': {
        const { getAllInstagramPosts, saveInstagramPost, deleteInstagramPost } = await import('@/lib/data-service')
        if (body.action === 'list') result = await getAllInstagramPosts()
        else if (body.action === 'save') result = await saveInstagramPost(body.data)
        else if (body.action === 'delete') { await deleteInstagramPost(body.id); result = { success: true } }
        break
      }
      case 'ticker': {
        const { getAllTickerItems, saveTickerItem, deleteTickerItem } = await import('@/lib/data-service')
        if (body.action === 'list') result = await getAllTickerItems(false)
        else if (body.action === 'save') result = await saveTickerItem(body.data)
        else if (body.action === 'delete') { await deleteTickerItem(body.id); result = { success: true } }
        break
      }
      case 'calendario': {
        const { getAllCalendario, saveCalendario, deleteCalendario } = await import('@/lib/data-service')
        if (body.action === 'list') result = await getAllCalendario()
        else if (body.action === 'save') result = await saveCalendario(body.data)
        else if (body.action === 'delete') { await deleteCalendario(body.id); result = { success: true } }
        break
      }
      case 'config': {
        const { getConfig, updateConfig } = await import('@/lib/data-service')
        if (body.action === 'get') result = await getConfig()
        else if (body.action === 'save') { await updateConfig(body.data); result = { success: true } }
        break
      }
      default:
        return NextResponse.json({ error: `Entidad desconocida: ${body.entity}` }, { status: 400 })
    }

    return NextResponse.json(result)
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Error interno' }, { status: 500 })
  }
}
