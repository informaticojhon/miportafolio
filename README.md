# 🌐 Portafolio Personal - Jhon Chiguay

Portafolio web moderno y responsivo construido con Astro y Tailwind CSS, diseñado para mostrar mis proyectos y habilidades como desarrollador web full-stack.

## ✨ Características

- 🚀 **Ultra rápido**: Construido con Astro para máximo rendimiento
- 🎨 **Diseño moderno**: Interfaz elegante con Tailwind CSS
- 🌓 **Modo claro/oscuro**: Toggle manual con persistencia en localStorage
- 🌍 **Multiidioma (i18n)**: Soporte completo para Español e Inglés
- 📱 **Totalmente responsivo**: Optimizado para móviles, tablets y desktop
- ♿ **Accesible**: Cumple con estándares de accesibilidad web
- 🎭 **Animaciones suaves**: Transiciones y efectos visuales con Intersection Observer
- 🔍 **SEO optimizado**: Meta tags completos para mejor posicionamiento

## 🛠️ Stack Tecnológico

- **Framework**: [Astro](https://astro.build) 4.0
- **Estilos**: [Tailwind CSS](https://tailwindcss.com) 3.4
- **Lenguaje**: TypeScript
- **Deployment**: Ready para Vercel/Netlify

## 📂 Estructura del Proyecto

```
mi-portafolio/
├── public/               # Archivos estáticos (imágenes, favicon, etc.)
├── src/
│   ├── components/       # Componentes reutilizables
│   │   ├── Navbar.astro
│   │   ├── Footer.astro
│   │   ├── SobreMi.astro
│   │   ├── Proyectos.astro
│   │   ├── ProjectCard.astro
│   │   ├── Tecnologias.astro
│   │   ├── Subtitle.astro
│   │   ├── ThemeToggle.astro      # Toggle modo claro/oscuro
│   │   └── LanguageToggle.astro   # Selector de idioma
│   ├── i18n/             # Sistema de traducciones
│   │   ├── translations.ts        # Traducciones ES/EN
│   │   └── utils.ts               # Helpers i18n
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   └── index.astro
│   ├── scripts/
│   │   └── i18n.ts               # Lógica de traducciones
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.js
└── package.json
```

## 🚀 Comandos

| Comando | Acción |
|---------|--------|
| `npm install` | Instalar dependencias |
| `npm run dev` | Iniciar servidor de desarrollo en `localhost:4321` |
| `npm run build` | Construir el sitio para producción en `./dist/` |
| `npm run preview` | Previsualizar la construcción localmente |

## 🎯 Secciones del Portafolio

### 🏠 Hero
Presentación principal con nombre y título profesional

### 👨‍� Sobre mí
Biografía profesional y ubicación

### 🔧 Tecnologías
Grid interactivo con todas mis habilidades técnicas:
- **Lenguajes**: JavaScript/TypeScript, Python, Dart, HTML/CSS
- **Frontend**: Vue.js, React/Next.js, Astro, Tailwind, Bootstrap
- **Mobile**: Flutter
- **Backend**: Django, Express.js

### 💼 Proyectos
Galería de proyectos destacados con enlaces directos:
- La Melinkana FM
- Mapuche Trekan
- CABEN

### 📧 Contacto
Información de contacto y enlaces a redes sociales

## 🎨 Paleta de Colores

**Modo Oscuro (Dark):**
```css
background: #0e0e0e    /* Negro profundo */
surface: #181818       /* Gris oscuro */
primary: #38bdf8       /* Azul cyan */
secondary: #a1a1aa     /* Gris medio */
```

**Modo Claro (Light):**
```css
light-background: #f8fafc    /* Gris muy claro */
light-surface: #ffffff       /* Blanco */
light-primary: #0284c7       /* Azul sky */
light-secondary: #64748b     /* Gris slate */
```

## ⚡ Optimizaciones Implementadas

- ✅ Lazy loading en imágenes
- ✅ Animaciones con Intersection Observer
- ✅ Meta tags SEO completos
- ✅ Smooth scrolling
- ✅ Componentes reutilizables
- ✅ Tema claro/oscuro con persistencia
- ✅ Sistema i18n (ES/EN)
- ✅ Accesibilidad mejorada
- ✅ Prevención de FOUC (Flash of Unstyled Content)

## 📱 Responsive Design

El sitio está optimizado para:
- 📱 Móviles (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Pantallas grandes (1280px+)

## 🌐 Deployment

Este proyecto está listo para ser desplegado en:
- [Vercel](https://vercel.com)
- [Netlify](https://netlify.com)
- [GitHub Pages](https://pages.github.com)

## 👤 Autor

**Jhon Chiguay**
- 📧 Email: jhonalan@gmail.com
- 💼 LinkedIn: [jhon-chiguay](https://www.linkedin.com/in/jhon-chiguay/)
- 🐙 GitHub: [informaticojhon](https://github.com/informaticojhon)
- 📍 Ubicación: Melinka, Región de Aysén, Chile

## � Licencia

Este proyecto es de código abierto y está disponible para inspiración y aprendizaje.

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!


Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
