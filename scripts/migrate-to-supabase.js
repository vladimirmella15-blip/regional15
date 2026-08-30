/**
 * Script para migrar datos desde SQLite local a Supabase.
 * 
 * Uso:
 * 1. Configura NEXT_PUBLIC_SUPABASE_URL y NEXT_PUBLIC_SUPABASE_ANON_KEY en .env.local
 * 2. Ejecuta: node scripts/migrate-to-supabase.js
 * 
 * Requisitos:
 * - npm install @supabase/supabase-js dotenv
 */

require('dotenv').config({ path: '.env.local' })
const { createClient } = require('@supabase/supabase-js')
const Database = require('better-sqlite3')
const path = require('path')

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Faltan NEXT_PUBLIC_SUPABASE_URL o NEXT_PUBLIC_SUPABASE_ANON_KEY en .env.local')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)
const db = new Database(path.join(__dirname, '..', 'data', 'regional15.db'))
db.pragma('journal_mode = WAL')

const TABLES = [
  'noticias', 'servicios', 'enlaces', 'eventos', 'programas',
  'testimonios', 'galeria', 'instagram_posts', 'ticker', 'config',
  'distritos', 'documentos', 'poa', 'seguimiento_poa', 'calendario',
  'director', 'contact_messages', 'users', 'salon_requests',
]

async function migrate() {
  console.log('🚀 Iniciando migración a Supabase...\n')

  for (const table of TABLES) {
    try {
      const rows = db.prepare(`SELECT * FROM ${table}`).all()
      if (rows.length === 0) {
        console.log(`  ⏭️  ${table}: 0 registros (saltando)`)
        continue
      }

      // Procesar galeria JSON en noticias
      const processed = rows.map(r => {
        if (table === 'noticias' && r.galeria) {
          try { r.galeria = JSON.parse(r.galeria) } catch { r.galeria = [] }
        }
        if (table === 'director' && r.data) {
          try { r.data = JSON.parse(r.data) } catch { r.data = {} }
        }
        return r
      })

      // Insertar en lotes (Supabase tiene límite de ~50 por req)
      const BATCH = 50
      for (let i = 0; i < processed.length; i += BATCH) {
        const batch = processed.slice(i, i + BATCH)
        const { error } = await supabase.from(table).upsert(batch, { onConflict: 'id' })
        if (error) {
          console.error(`  ❌ ${table} (lote ${i / BATCH + 1}):`, error.message)
        }
      }
      console.log(`  ✅ ${table}: ${rows.length} registros migrados`)
    } catch (err) {
      console.error(`  ❌ ${table}:`, err.message)
    }
  }

  db.close()
  console.log('\n✨ Migración completada!')
}

migrate()
