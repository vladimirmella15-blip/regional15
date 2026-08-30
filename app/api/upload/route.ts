import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth.config'
import { supabase } from '@/lib/supabase'

const BUCKET_NAME = 'uploads'

async function ensureBucket() {
  const { data: buckets } = await supabase.storage.listBuckets()
  if (!buckets?.find(b => b.name === BUCKET_NAME)) {
    await supabase.storage.createBucket(BUCKET_NAME, { public: true })
  }
}

export async function GET() {
  try {
    const { getAllDocumentos } = await import('@/lib/data-service')
    const docs = await getAllDocumentos()
    return NextResponse.json(docs)
  } catch {
    return NextResponse.json([])
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
    }

    await ensureBucket()
    const formData = await req.formData()
    const file = formData.get('file') as File | null
    const title = (formData.get('title') as string) || ''
    const description = (formData.get('description') as string) || ''
    const category = (formData.get('category') as string) || 'General'

    if (!file) return NextResponse.json({ error: 'No se recibió ningún archivo.' }, { status: 400 })

    const safeName = `${Date.now()}_${file.name.replace(/[^a-zA-Z0-9._-]/g, '_')}`
    const buffer = Buffer.from(await file.arrayBuffer())

    const { error: uploadError } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(safeName, buffer, {
        contentType: file.type,
        upsert: false,
      })

    if (uploadError) throw new Error(uploadError.message)

    const { data: urlData } = supabase.storage.from(BUCKET_NAME).getPublicUrl(safeName)
    const publicUrl = urlData?.publicUrl || ''

    const { saveDocumento } = await import('@/lib/data-service')
    const newDoc = await saveDocumento({
      title: title || file.name,
      description,
      category,
      filename: safeName,
      originalName: file.name,
      url: publicUrl,
      size: file.size,
      type: file.type,
    })

    return NextResponse.json(newDoc)
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
    }

    const { id } = await req.json()
    const { getAllDocumentos, deleteDocumento } = await import('@/lib/data-service')
    const docs = await getAllDocumentos()
    const doc = docs.find(d => d.id === id)
    if (doc) {
      await supabase.storage.from(BUCKET_NAME).remove([doc.filename])
    }
    await deleteDocumento(id)
    return NextResponse.json({ ok: true })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
