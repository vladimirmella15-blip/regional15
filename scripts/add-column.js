const path = require('path')
const D = require('better-sqlite3')
const db = new D(path.join(process.cwd(), 'data', 'regional15.db'))
try {
  db.exec('ALTER TABLE calendario ADD COLUMN todo_el_dia INTEGER NOT NULL DEFAULT 0')
  console.log('Column added')
} catch (e) {
  if (e.message.includes('duplicate column')) console.log('Column already exists')
  else console.log('Error:', e.message)
}
db.close()
