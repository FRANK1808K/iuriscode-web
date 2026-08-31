-- Habilitar la extensión UUID
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ==========================================
-- TABLA: PUBLICACIONES
-- ==========================================
CREATE TABLE public.publications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    type TEXT NOT NULL, -- article, book_chapter, thesis, paper, conference_paper
    abstract TEXT NOT NULL,
    content TEXT NOT NULL,
    authors TEXT[] NOT NULL,
    journal_or_publisher TEXT,
    publication_date DATE NOT NULL,
    external_url TEXT,
    pdf_url TEXT,
    tags TEXT[] DEFAULT '{}',
    featured BOOLEAN DEFAULT false,
    published BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ==========================================
-- TABLA: PROYECTOS
-- ==========================================
CREATE TABLE public.projects (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    description TEXT NOT NULL,
    content TEXT NOT NULL,
    status TEXT NOT NULL, -- completed, in_progress, planned
    start_date DATE NOT NULL,
    end_date DATE,
    technologies TEXT[] DEFAULT '{}',
    tags TEXT[] DEFAULT '{}',
    project_url TEXT,
    repository_url TEXT,
    featured BOOLEAN DEFAULT false,
    published BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ==========================================
-- TABLA: EVENTOS
-- ==========================================
CREATE TABLE public.events (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    type TEXT NOT NULL, -- congress, conference, seminar, workshop, webinar
    role TEXT NOT NULL, -- Ponente, Panelista, Moderador, Organizador
    event_date DATE NOT NULL,
    event_end_date DATE,
    location TEXT NOT NULL,
    description TEXT NOT NULL,
    external_url TEXT,
    published BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ==========================================
-- TABLA: BLOG POSTS
-- ==========================================
CREATE TABLE public.blog_posts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    excerpt TEXT NOT NULL,
    content TEXT NOT NULL,
    category TEXT NOT NULL,
    cover_image_url TEXT,
    tags TEXT[] DEFAULT '{}',
    reading_time_minutes INTEGER,
    featured BOOLEAN DEFAULT false,
    published BOOLEAN DEFAULT false,
    published_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Configuración de Seguridad RLS (Row Level Security)
-- Por defecto, lectura pública para contenido publicado, escritura solo para el dueño

ALTER TABLE public.publications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- Políticas de Lectura (Cualquiera puede leer lo que está publicado)
CREATE POLICY "Publicaciones visibles para todos si están publicadas" ON public.publications FOR SELECT USING (published = true);
CREATE POLICY "Proyectos visibles para todos si están publicados" ON public.projects FOR SELECT USING (published = true);
CREATE POLICY "Eventos visibles para todos si están publicados" ON public.events FOR SELECT USING (published = true);
CREATE POLICY "Posts visibles para todos si están publicados" ON public.blog_posts FOR SELECT USING (published = true);
