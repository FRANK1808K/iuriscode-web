import { supabase } from './client';
import { Publication, Project, EventItem, BlogPost } from '@/types';

// ==========================================
// PUBLICACIONES
// ==========================================
export async function getPublications() {
  const { data, error } = await supabase
    .from('publications')
    .select('*')
    .eq('published', true)
    .order('publication_date', { ascending: false });

  if (error) {
    console.error('Error fetching publications:', error);
    return [];
  }
  
  // Transform snake_case from DB to camelCase for the frontend
  return data.map(item => ({
    ...item,
    publicationDate: item.publication_date,
    journalOrPublisher: item.journal_or_publisher,
    externalUrl: item.external_url,
    pdfUrl: item.pdf_url
  })) as Publication[];
}

export async function getPublicationBySlug(slug: string) {
  const { data, error } = await supabase
    .from('publications')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error) return null;
  return {
    ...data,
    publicationDate: data.publication_date,
    journalOrPublisher: data.journal_or_publisher,
    externalUrl: data.external_url,
    pdfUrl: data.pdf_url
  } as Publication;
}

// ==========================================
// PROYECTOS
// ==========================================
export async function getProjects() {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('published', true)
    .order('start_date', { ascending: false });

  if (error) return [];
  
  return data.map(item => ({
    ...item,
    startDate: item.start_date,
    endDate: item.end_date,
    projectUrl: item.project_url,
    repositoryUrl: item.repository_url
  })) as Project[];
}

// ==========================================
// EVENTOS
// ==========================================
export async function getEvents() {
  const { data, error } = await supabase
    .from('events')
    .select('*')
    .eq('published', true)
    .order('event_date', { ascending: false });

  if (error) return [];
  
  return data.map(item => ({
    ...item,
    eventDate: item.event_date,
    eventEndDate: item.event_end_date,
    externalUrl: item.external_url
  })) as EventItem[];
}

// ==========================================
// BLOG POSTS
// ==========================================
export async function getBlogPosts() {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('published', true)
    .order('published_at', { ascending: false });

  if (error) return [];
  
  return data.map(item => ({
    ...item,
    coverImageUrl: item.cover_image_url,
    readingTimeMinutes: item.reading_time_minutes,
    publishedAt: item.published_at
  })) as BlogPost[];
}
