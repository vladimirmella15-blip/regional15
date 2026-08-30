import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  try {
    const url = new URL(request.url)
    const q = url.searchParams.get('q') || ''
    if (!q || q.trim().length < 2) {
      return NextResponse.json([])
    }
    const { searchContent } = await import('@/lib/data-service')
    const results = await searchContent(q.trim())
    return NextResponse.json(results)
  } catch {
    return NextResponse.json([])
  }
}
