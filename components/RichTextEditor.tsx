'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { useEffect } from 'react'

interface RichTextEditorProps {
  value: string
  onChange: (html: string) => void
}

export default function RichTextEditor({ value, onChange }: RichTextEditorProps) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: value || '',
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
  })

  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value || '', { emitUpdate: false })
    }
  }, [value, editor])

  if (!editor) return null

  const btn = (label: string, action: () => void, isActive?: boolean) => (
    <button
      type="button"
      onClick={action}
      style={{
        background: isActive ? '#003876' : '#f1f5f9',
        color: isActive ? '#fff' : '#1e293b',
        border: 'none',
        borderRadius: 4,
        padding: '4px 10px',
        fontSize: 13,
        fontWeight: 600,
        cursor: 'pointer',
        transition: 'all .15s',
      }}
    >
      {label}
    </button>
  )

  return (
    <div style={{ border: '1px solid #e2e8f0', borderRadius: 8, overflow: 'hidden' }}>
      <div style={{ display: 'flex', gap: 4, padding: 8, borderBottom: '1px solid #e2e8f0', background: '#f8fafc', flexWrap: 'wrap' }}>
        {btn('B', () => editor.chain().focus().toggleBold().run(), editor.isActive('bold'))}
        {btn('I', () => editor.chain().focus().toggleItalic().run(), editor.isActive('italic'))}
        {btn('S', () => editor.chain().focus().toggleStrike().run(), editor.isActive('strike'))}
        {btn('H1', () => editor.chain().focus().toggleHeading({ level: 1 }).run(), editor.isActive('heading', { level: 1 }))}
        {btn('H2', () => editor.chain().focus().toggleHeading({ level: 2 }).run(), editor.isActive('heading', { level: 2 }))}
        {btn('• Lista', () => editor.chain().focus().toggleBulletList().run(), editor.isActive('bulletList'))}
        {btn('1. Lista', () => editor.chain().focus().toggleOrderedList().run(), editor.isActive('orderedList'))}
        {btn('❝ Cita', () => editor.chain().focus().toggleBlockquote().run(), editor.isActive('blockquote'))}
        {btn('⎯ Línea', () => editor.chain().focus().setHorizontalRule().run())}
      </div>
      <EditorContent editor={editor} style={{ padding: '12px 16px', minHeight: 160, fontSize: 14, lineHeight: 1.6 }} />
    </div>
  )
}
