// src/projects.ts
// Liste des projets à afficher sur la page d'accueil

export interface Project {
  title: string;
  year: string;
  image: string;
  skills: string;
  link: string;
  testimonial: string;
  clientName: string;
}

export const projects: Project[] = [
  {
    title: "Extend Me",
    year: "2023",
    image: "/images/website.jpg",
    skills: "Vue.js, TypeScript, Tailwind",
    link: "https://monprojet.com",
    testimonial: "Excellent travail, dépassé nos attentes !",
    clientName: "Jean Dupont, CEO StartupCorp"
  },
  {
    title: "Portfolio",
    year: "2024",
    image: "/images/portfolio.jpg",
    skills: "Nuxt 3, Tailwind, Vercel",
    link: "https://monportfolio.com",
    testimonial: "Très professionnel et rapide.",
    clientName: "Marie Claire, Designer"
  },
  {
    title: "E-commerce",
    year: "2022",
    image: "/images/ecommerce.jpg",
    skills: "Vue.js, Firebase",
    link: "https://ecommerce.com",
    testimonial: "Un site robuste et performant.",
    clientName: "Paul Martin, CTO Shoply"
  }
];
