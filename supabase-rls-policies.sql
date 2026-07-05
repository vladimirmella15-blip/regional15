-- Habilita RLS y crea políticas de SELECT para anon en todas las tablas públicas
-- Ejecuta esto en: https://supabase.com/dashboard/project/gbogttjsuuyjroysibuy/sql/new

DO $$
DECLARE
  tables TEXT[] := ARRAY['noticias', 'servicios', 'enlaces', 'eventos', 'programas',
                         'testimonios', 'galeria', 'instagram_posts', 'ticker', 'config',
                         'distritos', 'documentos', 'director', 'calendario'];
  t TEXT;
BEGIN
  FOREACH t IN ARRAY tables
  LOOP
    EXECUTE format('ALTER TABLE %I ENABLE ROW LEVEL SECURITY;', t);
    BEGIN
      EXECUTE format('DROP POLICY IF EXISTS "anon_select" ON %I;', t);
      EXECUTE format('CREATE POLICY "anon_select" ON %I FOR SELECT USING (true);', t);
    EXCEPTION WHEN OTHERS THEN
      RAISE NOTICE 'Error en %: %', t, SQLERRM;
    END;
  END LOOP;
END $$;
