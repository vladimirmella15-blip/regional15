import { NextResponse } from 'next/server'

const CACHE_DURATION = 30 * 60 * 1000
let cache: { data: any[]; timestamp: number } | null = null

interface InstaPost {
  id: string
  src: string
  caption: string
  url: string
  likes?: number
  comments?: number
  timestamp?: number
}

async function tryGraphApi(token: string): Promise<InstaPost[] | null> {
  try {
    const res = await fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,timestamp&access_token=${token}&limit=6`)
    if (!res.ok) return null
    const json = await res.json()
    if (!json?.data?.length) return null
    return json.data.map((p: any, i: number) => ({
      id: p.id || `ig-${i}`,
      src: p.media_url || '',
      caption: p.caption || '',
      url: p.permalink || 'https://www.instagram.com/regional_15minerd/',
      likes: 0,
      comments: 0,
      timestamp: p.timestamp ? new Date(p.timestamp).getTime() / 1000 : Date.now() / 1000,
    }))
  } catch {
    return null
  }
}

async function tryScrapeInstagram(): Promise<InstaPost[] | null> {
  try {
    const res = await fetch('https://www.instagram.com/regional_15minerd/', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'es-DO,es;q=0.9,en;q=0.8',
      },
    })
    const html = await res.text()
    const extract = (obj: any): any[] | null => {
      if (obj?.entry_data?.ProfilePage?.[0]?.graphql?.user?.edge_owner_to_timeline_media?.edges)
        return obj.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges
      if (obj?.settings?.prefetch?.user) {
        const key = Object.keys(obj.settings.prefetch.user)[0]
        return obj.settings.prefetch.user[key]?.edge_owner_to_timeline_media?.edges
      }
      return null
    }
    const patterns = [
      () => { const m = html.match(/window\.__sharedData__\s*=\s*({[\s\S]*?});?\s*<\/script>/); return m ? extract(JSON.parse(m[1])) : null },
      () => { const m = html.match(/window\.__INITIAL_STATE__\s*=\s*({[\s\S]*?});?\s*<\/script>/); return m ? extract(JSON.parse(m[1])) : null },
    ]
    for (const p of patterns) {
      const edges = p()
      if (edges && edges.length > 0) return edges.slice(0, 6).map((e: any) => ({
        id: e.node?.id || '',
        src: e.node?.display_url || '',
        caption: e.node?.edge_media_to_caption?.edges?.[0]?.node?.text || '',
        url: `https://www.instagram.com/p/${e.node?.shortcode}/`,
        likes: e.node?.edge_liked_by?.count || 0,
        comments: e.node?.edge_media_to_comment?.count || 0,
        timestamp: e.node?.taken_at_timestamp || Date.now() / 1000,
      }))
    }
    return null
  } catch {
    return null
  }
}

export async function GET() {
  const now = Date.now()
  if (cache && now - cache.timestamp < CACHE_DURATION) {
    return NextResponse.json(cache.data)
  }

  const { getConfig, getAllInstagramPosts } = await import('@/lib/data-service')
  const config = await getConfig()
  const token = config.instagram_token || process.env.INSTAGRAM_ACCESS_TOKEN || ''

  let posts: InstaPost[] | null = null

  if (token) posts = await tryGraphApi(token)
  if (!posts) posts = await tryScrapeInstagram()

  if (!posts || posts.length === 0) {
    const localPosts = await getAllInstagramPosts()
    if (localPosts.length > 0) {
      posts = localPosts.map(p => ({ ...p, likes: 0, comments: 0, timestamp: Date.now() / 1000 }))
    }
  }

  if (posts && posts.length > 0) {
    cache = { data: posts, timestamp: now }
    return NextResponse.json(posts)
  }

  return NextResponse.json([{
    id: 'static-1',
    src: '',
    caption: 'Síguenos en Instagram: @regional_15minerd',
    url: 'https://www.instagram.com/regional_15minerd/',
  }])
}
