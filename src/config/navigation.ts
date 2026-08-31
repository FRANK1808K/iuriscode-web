import {
  Home,
  User,
  BookOpen,
  FolderKanban,
  Calendar,
  PenLine,
  Mail,
} from "lucide-react";
import type { ComponentType } from "react";

export interface NavItem {
  label: string;
  href: string;
  icon: ComponentType<{ className?: string; size?: number | string }>;
  description?: string;
}

export const navigationItems: NavItem[] = [
  {
    label: "Inicio",
    href: "/",
    icon: Home,
    description: "Página principal",
  },
  {
    label: "Sobre Mí",
    href: "/sobre-mi",
    icon: User,
    description: "Perfil profesional y académico",
  },
  {
    label: "Investigación",
    href: "/investigacion",
    icon: BookOpen,
    description: "Publicaciones e investigaciones",
  },
  {
    label: "Proyectos",
    href: "/proyectos",
    icon: FolderKanban,
    description: "Portafolio de proyectos",
  },
  {
    label: "Eventos",
    href: "/eventos",
    icon: Calendar,
    description: "Participaciones académicas",
  },
  {
    label: "Blog",
    href: "/blog",
    icon: PenLine,
    description: "Artículos y análisis",
  },
  {
    label: "Contacto",
    href: "/contacto",
    icon: Mail,
    description: "Formulario de contacto",
  },
];
