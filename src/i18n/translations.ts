// Traducciones del portafolio
export const translations = {
  es: {
    nav: {
      about: 'Sobre mí',
      projects: 'Proyectos',
      tools: 'Herramientas',
      contact: 'Contacto',
    },
    hero: {
      subtitle: 'Desarrollador Web · Creativo · Apasionado por la tecnología',
    },
    about: {
      title: 'Sobre mí',
      intro: '¡Hola! Soy',
      role: 'desarrollador web',
      description1: 'apasionado por construir experiencias digitales modernas, funcionales y accesibles. Disfruto trabajar con tecnologías como 🟩 Vue.js, 🌀 Astro, 💻 Django y 📱 Flutter.',
      description2: 'Me destaco por ser autodidacta, creativo y detallista. Cada línea de código que escribo tiene un propósito claro:',
      highlight: 'resolver problemas reales',
      description2end: 'con soluciones limpias y eficientes ✨.',
      description3: 'Además de mi pasión por el desarrollo, disfruto aprender sobre nuevas tecnologías y tendencias en el mundo digital. Siempre estoy buscando formas de mejorar mis habilidades y aportar valor a los proyectos en los que participo.',
      location: 'Actualmente vivo en',
      locationPlace: 'Melinka, Región de Aysén',
      locationEnd: ', y puedes contactarme a través de mi correo.',
    },
    technologies: {
      title: 'Tecnologías que manejo',
      languages: 'Lenguajes de Programación',
      frontend: 'Frontend',
      mobile: 'Desarrollo Móvil',
      backend: 'Backend',
    },
    projects: {
      title: 'Proyectos',
      viewProject: 'Ver proyecto',
      items: [
        {
          name: 'La Melinkana FM',
          description: 'Radio comunitaria del Archipiélago de las Guaitecas, transmitiendo en vivo desde Melinka.',
        },
        {
          name: 'Mapuche Trekan',
          description: 'Sitio web informativo sobre el turismo mapuche en el Valle de Elicura. Diseño cultural y mapa interactivo.',
        },
        {
          name: 'CABEN',
          description: 'Empresa de transporte marítimo y soluciones logísticas en el sur de Chile. Diseño limpio y adaptable.',
        },
      ],
    },
    contact: {
      title: 'Contacto',
      description: 'Si estás buscando a alguien comprometido, creativo y con ganas de aportar en proyectos web con propósito, estaré encantado de conversar. Ya sea para colaborar, resolver un problema, o simplemente compartir ideas, puedes escribirme directamente a mi correo:',
    },
    footer: {
      rights: 'Todos los derechos reservados.',
      location: 'Melinka, Chile.',
      backToTop: 'Volver arriba',
    },
  },
  en: {
    nav: {
      about: 'About',
      projects: 'Projects',
      tools: 'Tools',
      contact: 'Contact',
    },
    hero: {
      subtitle: 'Web Developer · Creative · Technology Enthusiast',
    },
    about: {
      title: 'About Me',
      intro: "Hi! I'm",
      role: 'web developer',
      description1: 'passionate about building modern, functional, and accessible digital experiences. I enjoy working with technologies like 🟩 Vue.js, 🌀 Astro, 💻 Django, and 📱 Flutter.',
      description2: 'I stand out for being self-taught, creative, and detail-oriented. Every line of code I write has a clear purpose:',
      highlight: 'solving real problems',
      description2end: 'with clean and efficient solutions ✨.',
      description3: 'Besides my passion for development, I enjoy learning about new technologies and trends in the digital world. I am always looking for ways to improve my skills and add value to the projects I participate in.',
      location: 'I currently live in',
      locationPlace: 'Melinka, Aysén Region',
      locationEnd: ', and you can contact me through my email.',
    },
    technologies: {
      title: 'Technologies I Work With',
      languages: 'Programming Languages',
      frontend: 'Frontend',
      mobile: 'Mobile Development',
      backend: 'Backend',
    },
    projects: {
      title: 'Projects',
      viewProject: 'View project',
      items: [
        {
          name: 'La Melinkana FM',
          description: 'Community radio of the Guaitecas Archipelago, broadcasting live from Melinka.',
        },
        {
          name: 'Mapuche Trekan',
          description: 'Informative website about Mapuche tourism in Elicura Valley. Cultural design and interactive map.',
        },
        {
          name: 'CABEN',
          description: 'Maritime transport and logistics solutions company in southern Chile. Clean and adaptable design.',
        },
      ],
    },
    contact: {
      title: 'Contact',
      description: "If you're looking for someone committed, creative, and eager to contribute to meaningful web projects, I'd be happy to talk. Whether to collaborate, solve a problem, or simply share ideas, you can write to me directly at my email:",
    },
    footer: {
      rights: 'All rights reserved.',
      location: 'Melinka, Chile.',
      backToTop: 'Back to top',
    },
  },
};

export type Language = keyof typeof translations;

export function getTranslations(lang: Language = 'es') {
  return translations[lang] || translations.es;
}
