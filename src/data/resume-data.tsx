import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Fran Moreno Navas",
  initials: "FM",
  location: "Murcia, España",
  locationLink: "https://www.google.com/maps/place/Murcia,+Spain",
  // Resumir en una frase
  about:
    "Desarrollador Full Stack especializado en el desarrollo de aplicaciones web.",
  summary:
    "Desarrollador Full Stack con más de 15 años de experiencia en el desarrollo de aplicaciones web. Actualmente trabajo principalmente con TypeScript, React y Node.js. Tengo experiencia en trabajar de forma remota con empresas de todo el mundo. Amplia experiencia en gestión de equipos y liderazgo técnico.",
  avatarUrl: "https://avatars.githubusercontent.com/u/527572?v=4",
  personalWebsiteUrl: "https://www.franmoreno.com",
  contact: {
    email: "fran@franmoreno.com",
    tel: "+34639393276",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/siner",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/franmorenonavas/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/siner",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Universidad de Murcia",
      degree: "Máster en Tecnología de la Información y Telemática Avanzada",
      start: "2009",
      end: "2010",
    },
    {
      school: "Universidad de Murcia",
      degree: "Ingeniería Informática",
      start: "2003",
      end: "2009",
    },
  ],
  work: [
    {
      company: "Estrim",
      link: "https://estrim.com",
      badges: ["Manager"],
      title: "Project Manager",
      start: "2023",
      end: "",
      description:
        "Gestión de equipos de desarrollo y liderazgo técnico en el desarrollo de la aplicación web y móvil de Estrim",
    },
    {
      company: "AltaMK",
      link: "https://altamarketing.com",
      badges: ["Remote", "React", "TypeScript"],
      title: "CTO",
      start: "2020",
      end: "",
      description:
        "Liderazgo técnico en el desarrollo de proyectos web para los clientes de AltaMK",
    },
    {
      company: "Sozpic",
      link: "https://www.sozpic.com/",
      badges: ["Founder", "WordPress", "Laravel", "React", "TypeScript"],
      title: "CEO / CTO",
      start: "2011",
      end: "2021",
      description:
        "Socio fundador y CTO de Sozpic, una empresa de desarrollo web, aplicaciones móviles y marketing online. Tecnologías con las que trabajé: PHP, WordPress, Laravel, React, VUE, TypeScript, Astro, NextJS, NuxtJS",
    },
    {
      company: "Canales Corporativos",
      link: "https://www.canalescorporativos.com/",
      badges: ["WordPress"],
      title: "Frontend Developer",
      start: "2010",
      end: "2011",
      description: "Desarrollo de webs corporativas en WordPress",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Astro",
    "Node.js",
    "PHP",
    "Supabase",
    "WordPress",
    "Laravel",
    "Tailwind CSS",
    "Vercel",
    "Cloudflare Workers",
    "GIT",
    "Management",
    "Leadership",
  ],
  projects: [
    {
      title: "Web Fran Moreno",
      techStack: ["Side Project", "TypeScript", "Astro", "Tailwind CSS"],
      description: "Mi web personal y blog",
      link: {
        label: "franmoreno.com",
        href: "https://franmoreno.com/",
      },
    },
    {
      title: "Torneos Poker Live",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "Cloudflare Workers",
        "Supabase",
      ],
      description: "Web informativa con torneos de poker en vivo en España",
      link: {
        label: "torneospokerlive.com",
        href: "https://torneospokerlive.com/",
      },
    },
    {
      title: "Estrim",
      techStack: ["Management"],
      description: "Project management de la aplicación web y móvil de Estrim",
      link: {
        label: "estrim.com",
        href: "https://estrim.com/",
      },
    },
    {
      title: "Web 4500",
      techStack: ["React", "Tailwind CSS"],
      description: "Web del despacho de abogados 4500",
      link: {
        label: "4500.lu",
        href: "https://4500.lu/",
      },
    },
  ],
} as const;
