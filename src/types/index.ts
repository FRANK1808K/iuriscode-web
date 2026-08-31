// ============================================================
// IurisCode — Global Type Definitions
// ============================================================

// --- Profile ---
export interface Education {
  degree: string;
  institution: string;
  year: string;
  description?: string;
}

export interface Experience {
  role: string;
  organization: string;
  period: string;
  description?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface SocialLinks {
  linkedin?: string;
  github?: string;
  email?: string;
  whatsapp?: string;
  twitter?: string;
}

export interface Profile {
  id: string;
  fullName: string;
  title: string;
  bio: string;
  bioExtended: string;
  avatarUrl?: string;
  education: Education[];
  experience: Experience[];
  skills: SkillCategory[];
  researchInterests: string[];
  socialLinks: SocialLinks;
  createdAt: string;
  updatedAt: string;
}

// --- Publications ---
export type PublicationType =
  | "article"
  | "book_chapter"
  | "paper"
  | "thesis"
  | "conference_paper";

export interface Publication {
  id: string;
  title: string;
  slug: string;
  abstract: string;
  content: string;
  type: PublicationType;
  authors: string[];
  journalOrPublisher?: string;
  publicationDate: string;
  externalUrl?: string;
  pdfUrl?: string;
  tags: string[];
  featured: boolean;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

// --- Projects ---
export type ProjectStatus = "completed" | "in_progress" | "planned";

export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  technologies: string[];
  status: ProjectStatus;
  projectUrl?: string;
  repositoryUrl?: string;
  imageUrl?: string;
  startDate: string;
  endDate?: string;
  tags: string[];
  featured: boolean;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

// --- Events ---
export type EventType =
  | "congress"
  | "conference"
  | "seminar"
  | "workshop"
  | "webinar";

export interface EventItem {
  id: string;
  title: string;
  slug: string;
  description: string;
  type: EventType;
  role: string;
  location: string;
  eventDate: string;
  eventEndDate?: string;
  externalUrl?: string;
  imageUrl?: string;
  tags: string[];
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

// --- Blog ---
export type BlogCategory =
  | "legaltech"
  | "ai"
  | "data_protection"
  | "digital_gov"
  | "innovation"
  | "cybersecurity";

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImageUrl?: string;
  category: BlogCategory;
  tags: string[];
  readingTimeMinutes: number;
  featured: boolean;
  published: boolean;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}

// --- Contact ---
export type ContactStatus = "new" | "read" | "replied" | "archived";

export interface Contact {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: ContactStatus;
  createdAt: string;
  updatedAt: string;
}

// --- UI Helpers ---
export interface FilterOption {
  label: string;
  value: string;
  count?: number;
}

export interface PaginationInfo {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
}
