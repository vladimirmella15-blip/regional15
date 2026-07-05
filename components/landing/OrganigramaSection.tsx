'use client'
import React from "react";

// ─── Data ──────────────────────────────────────────────────────────────────────
const directDeps = [
  { label: "Sub-Dirección" },
  { label: "Planificación" },
  { label: "SCERD" },
  { label: "Unidad de Supervisión" },
  { label: "URSAD", sublabel: "Unidad Regional de Sistematización del Acompañamiento Docente" },
];

const execSupport = [
  { label: "Asesor" },
  { label: "Secretaría Ejecutiva" },
  { label: "Especialista Legal" },
];

const departments = [
  {
    label: "Gestión Humana",
    units: ["Certificaciones", "Técnicos de Gestión Humana", "Conserjes", "Choferes", "Recepcionista", "Servicios Generales", "Policía Escolar"],
  },
  {
    label: "Unidad Curricular",
    units: ["Nivel Inicial", "Nivel Primario", "Nivel Secundario", "Modalidad Arts.", "Modalidad Técnico Profesional", "Adultos", "Pruebas Nacionales", "Orientación y Psicología"],
  },
  {
    label: "Área Administrativa y Financiera",
    units: ["Contador General", "Técnicos Auxiliares de Contabilidad", "Encargado de Almacén"],
  },
  {
    label: "Mantenimiento",
    units: ["Técnicos de Mantenimiento", "Soporte Técnico"],
  },
  {
    label: "Área de Prensa y Comunicaciones",
    units: ["Relaciones Públicas", "Fotógrafos", "Editores", "Creador de Contenido"],
  },
];

// ─── Tokens ────────────────────────────────────────────────────────────────────
const C = {
  dir:   { bg: "#0C2D6B", text: "#fff" },
  side:  { bg: "#1A4A8A", text: "#fff" },
  dep:   { bg: "#1A4A8A", text: "#fff" },
  exec:  { bg: "#B8860B", text: "#fff" },
  dept:  { bg: "#C0392B", text: "#fff" },
  unit:  { bg: "#1E6BA0", text: "#fff" },
  line:  "#E74C3C",
  page:  "#E8EEF5",
};

const font = "'Segoe UI', Arial, sans-serif";

// ─── Primitives ────────────────────────────────────────────────────────────────
interface ChipProps {
  label: string;
  sublabel?: string;
  scheme: { bg: string; text: string };
  style?: React.CSSProperties;
}
const Chip: React.FC<ChipProps> = ({ label, sublabel, scheme, style }) => (
  <div style={{
    background: scheme.bg, color: scheme.text,
    borderRadius: 5, padding: "5px 10px",
    fontSize: 11, fontWeight: 600, lineHeight: 1.3,
    textAlign: "center", whiteSpace: "normal",
    ...style,
  }}>
    {label}
    {sublabel && <div style={{ fontSize: 9, fontWeight: 400, opacity: 0.9, marginTop: 2 }}>{sublabel}</div>}
  </div>
);

// ─── Main ──────────────────────────────────────────────────────────────────────
export default function OrganigramaRegional15() {
  return (
    <div id="organigrama" style={{ background: C.page, fontFamily: font, padding: "40px 12px" }}>

      {/* ── Header ── */}
      <div style={{ textAlign: "center", marginBottom: 20 }}>
        <div style={{ fontSize: 11, color: "#555", letterSpacing: 1, textTransform: "uppercase" }}>
          Gobierno de la República Dominicana · Ministerio de Educación
        </div>
        <div style={{
          display: "inline-block", background: C.dir.bg, color: C.dir.text,
          borderRadius: 8, padding: "6px 28px", fontSize: 13, fontWeight: 700,
          marginTop: 6, letterSpacing: 0.5,
        }}>
          EDUCACIÓN · Regional 15
        </div>
      </div>

      {/* ── Row 1: Junta — Dirección — Directores (flex:1 ensures Dirección is exactly centered) ── */}
      <div style={{ display: "flex", alignItems: "stretch" }}>
        {/* Left side: Junta + h-line */}
        <div style={{ flex: 1, display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
          <Chip label="Junta Regional" scheme={C.side} style={{ minWidth: 120, maxWidth: 140, fontSize: 11 }} />
          <div style={{ width: 24, height: 2, background: C.line, flexShrink: 0 }} />
        </div>

        {/* Center anchor: Dirección Regional + vertical line to spine */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Chip label="DIRECCIÓN REGIONAL" scheme={C.dir} style={{ minWidth: 190, fontSize: 14, fontWeight: 700, padding: "8px 18px" }} />
          <div style={{ width: 2, height: 20, background: C.line, flexShrink: 0 }} />
        </div>

        {/* Right side: empty spacer (Directores Distritales moved to central spine) */}
        <div style={{ flex: 1 }} />
      </div>

      {/* ── Central vertical spine (continuous from Dirección through Row 2 down to H-bar) ── */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        {/* Gap + Directores row (absolute-positioned chip to right, spine continuous) */}
        <div style={{ position: "relative", width: "100%", minHeight: 54 }}>
          {/* Continuous spine segment at exactly 50% */}
          <div style={{ position: "absolute", top: 0, bottom: 0, left: "50%", width: 2, background: C.line, transform: "translateX(-50%)" }} />
          {/* Directores Distritales chip with tick on the right */}
          <div style={{ position: "absolute", top: "50%", left: "calc(50% + 1px)", transform: "translateY(-50%)", display: "flex", alignItems: "center" }}>
            <div style={{ width: 24, height: 2, background: C.line, flexShrink: 0 }} />
            <Chip label="Directores Distritales" scheme={C.side} style={{ minWidth: 140, maxWidth: 170, fontSize: 11 }} />
          </div>
        </div>

        {/* Row 2: Dependencias + Apoyo (spine at exactly 50% via flex:1) */}
        <div style={{ display: "flex", width: "100%" }}>
          {/* Left: Dependencias Directas */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "flex-end", justifyContent: "center" }}>
            {directDeps.map((n, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", marginBottom: 3 }}>
                <Chip label={n.label} sublabel={n.sublabel} scheme={C.dep} style={{ minWidth: 170, maxWidth: 200, textAlign: "left" }} />
                <div style={{ width: 24, height: 2, background: C.line, flexShrink: 0 }} />
              </div>
            ))}
          </div>

          {/* Spine: continuation of the line above */}
          <div style={{ width: 2, background: C.line, alignSelf: "stretch", minHeight: 140, flexShrink: 0 }} />

          {/* Right: Apoyo Ejecutivo */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center" }}>
            {execSupport.map((n, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", marginBottom: 3 }}>
                <div style={{ width: 24, height: 2, background: C.line, flexShrink: 0 }} />
                <Chip label={n.label} scheme={C.exec} style={{ minWidth: 150, maxWidth: 180 }} />
              </div>
            ))}
          </div>
        </div>

        {/* Gap from Row 2 to H-bar */}
        <div style={{ width: 2, height: 20, background: C.line }} />

        {/* H-bar */}
        <div style={{ width: "92%", maxWidth: 960, height: 2, background: C.line }} />
      </div>

      {/* ── Row 3: Department columns ── */}
      <div style={{ display: "flex", justifyContent: "center", gap: 10, flexWrap: "wrap", marginTop: 0 }}>
        {departments.map((dept, di) => (
          <div key={di} style={{ display: "flex", flexDirection: "column", alignItems: "center", minWidth: 130, maxWidth: 175 }}>
            <div style={{ width: 2, height: 16, background: C.line }} />
            <Chip label={dept.label} scheme={C.dept} style={{ width: "100%", fontSize: 10 }} />
            <div style={{ width: 2, height: 10, background: C.line }} />
            <div style={{ display: "flex", flexDirection: "column", gap: 3, width: "100%" }}>
              {dept.units.map((u, ui) => (
                <Chip key={ui} label={u} scheme={C.unit} style={{ width: "100%", fontSize: 10 }} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ── Legend ── */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 32, justifyContent: "center" }}>
        {[
          { bg: C.dir.bg,  label: "Dirección" },
          { bg: C.side.bg, label: "Órganos colegiados" },
          { bg: C.dep.bg,  label: "Dependencias directas" },
          { bg: C.exec.bg, label: "Apoyo ejecutivo" },
          { bg: C.dept.bg, label: "Departamentos" },
          { bg: C.unit.bg, label: "Unidades operativas" },
        ].map(({ bg, label }) => (
          <div key={label} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: "#444" }}>
            <div style={{ width: 12, height: 12, borderRadius: 2, background: bg }} />
            {label}
          </div>
        ))}
      </div>

    </div>
  );
}
