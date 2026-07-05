'use client'

import type { ReactNode } from 'react'
import { getTabIcon } from './Icons'

interface AdminLayoutProps {
  children: ReactNode
  activeTab: string
  onTabChange: (tab: string) => void
  onLogout: () => void
  onExport: () => void
  onImport: () => void
  tabs: { key: string; label: string }[]
}

export default function AdminLayout({ children, activeTab, onTabChange, onLogout, onExport, onImport, tabs }: AdminLayoutProps) {
  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body {
          font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
          background: #f1f5f9; color: #1e293b; display: flex; min-height: 100vh;
        }
        .admin-sidebar {
          width: 220px; background: #0f172a; color: #fff; padding: 1.5rem 0;
          display: flex; flex-direction: column; flex-shrink: 0;
        }
        .admin-sidebar h1 {
          font-size: 1rem; padding: 0 1.25rem 1.25rem; border-bottom: 1px solid #1e293b;
          letter-spacing: .02em;
        }
        .admin-sidebar h1 small { display: block; font-size: .7rem; opacity: .5; font-weight: 400; margin-top: .25rem; }
        .admin-sidebar nav { flex: 1; padding: .75rem 0; }
        .admin-sidebar nav a {
          display: flex; align-items: center; gap: .5rem; padding: .6rem 1.25rem;
          color: #94a3b8; text-decoration: none; font-size: .85rem; transition: .2s;
          border-left: 3px solid transparent; cursor: pointer;
        }
        .admin-sidebar nav a:hover { color: #fff; background: #1e293b; }
        .admin-sidebar nav a.active { color: #fff; border-left-color: #ef4444; background: #1e293b; }
        .admin-main { flex: 1; padding: 2rem; overflow-y: auto; }
        .admin-header {
          display: flex; justify-content: space-between; align-items: center;
          margin-bottom: 2rem; padding-bottom: 1rem; border-bottom: 2px solid #e2e8f0;
        }
        .admin-header h2 { font-size: 1.35rem; }
        .admin-actions { display: flex; gap: .5rem; }
        .btn {
          padding: .5rem 1rem; border: none; border-radius: 6px; font-size: .82rem;
          cursor: pointer; transition: .2s; font-weight: 600; display: inline-flex;
          align-items: center; gap: .35rem;
        }
        .btn-primary { background: #1d4ed8; color: #fff; }
        .btn-primary:hover { background: #1e40af; }
        .btn-success { background: #16a34a; color: #fff; }
        .btn-success:hover { background: #15803d; }
        .btn-warning { background: #d97706; color: #fff; }
        .btn-warning:hover { background: #b45309; }
        .btn-danger { background: #dc2626; color: #fff; }
        .btn-danger:hover { background: #b91c1c; }
        .btn-ghost { background: transparent; color: #64748b; border: 1px solid #cbd5e1; }
        .btn-ghost:hover { background: #f1f5f9; }
        .btn-sm { padding: .3rem .6rem; font-size: .75rem; }
        .card { background: #fff; border-radius: 10px; box-shadow: 0 1px 3px rgba(0,0,0,.08); overflow: hidden; }
        .card-header {
          padding: 1rem 1.25rem; border-bottom: 1px solid #e2e8f0;
          display: flex; justify-content: space-between; align-items: center;
        }
        .item-list { list-style: none; }
        .item-list li {
          padding: .85rem 1.25rem; border-bottom: 1px solid #f1f5f9;
          display: flex; justify-content: space-between; align-items: center; gap: 1rem;
        }
        .item-list li:last-child { border-bottom: none; }
        .item-list li:hover { background: #f8fafc; }
        .item-info { flex: 1; min-width: 0; }
        .item-title { font-weight: 600; font-size: .9rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .item-sub { font-size: .78rem; color: #64748b; margin-top: .15rem; }
        .item-actions { display: flex; gap: .35rem; flex-shrink: 0; }
        .empty-state { padding: 3rem 1.5rem; text-align: center; color: #94a3b8; }
        .badge { display: inline-block; background: #e2e8f0; font-size: .7rem; padding: 1px 7px; border-radius: 10px; margin-left: 6px; }
        .modal-overlay {
          display: none; position: fixed; inset: 0; background: rgba(0,0,0,.5);
          z-index: 1000; justify-content: center; align-items: center;
        }
        .modal-overlay.open { display: flex; }
        .modal {
          background: #fff; border-radius: 12px; width: 90%; max-width: 640px;
          max-height: 90vh; overflow-y: auto; padding: 2rem;
          box-shadow: 0 25px 60px rgba(0,0,0,.3);
        }
        .modal h3 { margin-bottom: 1.25rem; font-size: 1.1rem; }
        .form-group { margin-bottom: 1rem; }
        .form-group label { display: block; font-size: .78rem; font-weight: 600; margin-bottom: .35rem; color: #475569; }
        .form-group input, .form-group textarea, .form-group select {
          width: 100%; padding: .55rem .75rem; border: 1.5px solid #cbd5e1;
          border-radius: 6px; font-size: .88rem; transition: .2s; font-family: inherit;
        }
        .form-group input:focus, .form-group textarea:focus {
          outline: none; border-color: #1d4ed8; box-shadow: 0 0 0 3px rgba(29,78,216,.15);
        }
        .form-group textarea { resize: vertical; min-height: 80px; }
        .form-row { display: flex; gap: 1rem; }
        .form-row .form-group { flex: 1; }
        .modal-actions { display: flex; justify-content: flex-end; gap: .5rem; margin-top: 1.5rem; }
        .toast {
          position: fixed; bottom: 24px; right: 24px; padding: 12px 20px; border-radius: 8px;
          font-size: .85rem; font-weight: 600; z-index: 2000; transition: all .35s;
          transform: translateY(100px); opacity: 0;
        }
        .toast.show { transform: translateY(0); opacity: 1; }
        .toast.success { background: #16a34a; color: #fff; }
        .toast.error { background: #dc2626; color: #fff; }
        .sidebar-footer { padding: 1rem 1.25rem; border-top: 1px solid #1e293b; }
        .sidebar-footer button { width: 100%; }
      `}</style>

      <aside className="admin-sidebar">
        <h1>
          Regional 15
          <small>Panel de Administración</small>
        </h1>
        <nav>
          {tabs.map(t => (
            <a key={t.key} className={activeTab === t.key ? 'active' : ''} onClick={() => onTabChange(t.key)}>
              {getTabIcon(t.key)}
              {t.label}
            </a>
          ))}
        </nav>
        <div className="sidebar-footer">
          <button className="btn btn-ghost btn-sm" onClick={onLogout} style={{ width: '100%', justifyContent: 'center' }}>
            Cerrar Sesión
          </button>
        </div>
      </aside>

      <main className="admin-main">
        <div className="admin-header">
          <h2>{tabs.find(t => t.key === activeTab)?.label || ''}</h2>
          <div className="admin-actions">
            <button className="btn btn-ghost btn-sm" onClick={onImport}>Importar JSON</button>
            <button className="btn btn-ghost btn-sm" onClick={onExport}>Exportar JSON</button>
          </div>
        </div>
        {children}
      </main>
    </>
  )
}
