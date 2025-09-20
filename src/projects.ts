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
  isUpwork: boolean;
}

export const projects: Project[] = [
  {
    title: "Site web de e-santé",
    year: "2022 - 2025",
    image: "/images/symbiocenter.jpg",
    skills: "Vue.js, Node.js, Bulma",
    link: "https://www.symbiocenter.com",
    testimonial: "",
    clientName: "Symbiofi",
    isUpwork: false,
  },
  {
    title: "Automatic Orders on Wix",
    year: "2025",
    image: "/images/wix-orders.jpg",
    skills: "Wix, JavaScript, Automation",
    link: "",
    testimonial: "Louis is a great developer! I hired him for a job that other developers said was not doable. Louis not only did it, but got it done in less than a day! Highly recommended.",
    clientName: "Client Upwork",
    isUpwork: true,
  },
  {
    title: "PDF Generation from HTML",
    year: "2025",
    image: "/images/pdf-generation.png",
    skills: "JavaScript, HTML, PDF generation",
    link: "",
    testimonial: "Louis is very dedicated and have a lot of good suggestion during the period of work. He deliver excellent work and he is easy to work with. If I have similar work in the future I will definitely hire Louis again. Thank You Louis!!",
    clientName: "Client Upwork",
    isUpwork: true,
  }
];
