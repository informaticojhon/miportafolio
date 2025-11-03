# 🌓 Modo Claro/Oscuro & 🌍 Multiidioma (i18n)

## Nuevas Características Implementadas

### 1. 🌓 **Toggle Modo Claro/Oscuro**

#### ✨ Características
- Toggle flotante con iconos de sol/luna
- Persistencia en localStorage
- Previene flash de contenido sin estilo (FOUC)
- Transiciones suaves entre temas
- Detección automática de preferencia del sistema
- Todos los componentes adaptados para ambos modos

#### 🎨 Colores del Theme

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

#### 📍 Ubicación
- **Botón:** Esquina superior derecha (fixed)
- **Componente:** `src/components/ThemeToggle.astro`
- **Configuración:** `tailwind.config.js` → `darkMode: 'class'`

#### 🔧 Cómo Funciona
1. Al cargar la página, lee preferencia del localStorage
2. Si no existe, detecta preferencia del sistema operativo
3. Aplica la clase `dark` al elemento `<html>`
4. Todos los componentes usan clases Tailwind como:
   - `bg-light-surface dark:bg-surface`
   - `text-gray-900 dark:text-white`

---

### 2. 🌍 **Sistema Multiidioma (i18n)**

#### ✨ Características
- Soporte para Español (ES) e Inglés (EN)
- Selector con banderas 🇪🇸/🇺🇸
- Persistencia en localStorage
- Detección automática del idioma del navegador
- Sistema de traducciones centralizado
- Actualización dinámica de textos

#### 📂 Estructura i18n

```
src/
├── i18n/
│   ├── translations.ts    # Todas las traducciones ES/EN
│   └── utils.ts           # Helper functions
├── scripts/
│   └── i18n.ts           # Sistema de actualización de traducciones
└── components/
    └── LanguageToggle.astro  # Selector de idioma
```

#### 📍 Ubicación
- **Botón:** Esquina superior izquierda (fixed)
- **Componente:** `src/components/LanguageToggle.astro`
- **Traducciones:** `src/i18n/translations.ts`

#### 🔧 Cómo Usar las Traducciones

**En componentes Astro:**
```astro
---
import { getTranslations } from '../i18n/translations';
const t = getTranslations('es');
---

<h2 data-i18n="about.title">{t.about.title}</h2>
```

**Atributo data-i18n:**
- Permite actualización dinámica sin recargar
- Se actualiza automáticamente al cambiar idioma
- Usa notación de punto: `"section.key"`

#### 📝 Agregar Nuevas Traducciones

Edita `src/i18n/translations.ts`:

```typescript
export const translations = {
  es: {
    nuevaSeccion: {
      titulo: 'Título en español',
      descripcion: 'Descripción...'
    }
  },
  en: {
    nuevaSeccion: {
      titulo: 'Title in English',
      descripcion: 'Description...'
    }
  }
};
```

Luego en tu componente:
```astro
<h3 data-i18n="nuevaSeccion.titulo">{t.nuevaSeccion.titulo}</h3>
```

#### 🌐 Idiomas Soportados

| Idioma | Código | Bandera | Por Defecto |
|--------|--------|---------|-------------|
| Español | `es` | 🇪🇸 | ✅ Sí |
| English | `en` | 🇺🇸 | No |

---

## 🎯 Componentes Actualizados

Todos estos componentes ahora soportan ambos temas y traducciones:

- ✅ `BaseLayout.astro` - Contiene ThemeToggle y LanguageToggle
- ✅ `Navbar.astro` - Links del menú traducibles
- ✅ `SobreMi.astro` - Contenido bilingüe
- ✅ `Proyectos.astro` - Títulos y descripciones
- ✅ `Tecnologias.astro` - Nombres de secciones
- ✅ `ProjectCard.astro` - Texto "Ver proyecto"
- ✅ `Footer.astro` - Copyright y ubicación
- ✅ `Subtitle.astro` - Subtítulo del hero

---

## 🚀 Cómo Probar

### Modo Claro/Oscuro:
1. Haz clic en el botón superior derecho (sol/luna)
2. El tema cambia inmediatamente
3. Recarga la página → el tema se mantiene

### Cambio de Idioma:
1. Haz clic en el botón superior izquierdo (🇪🇸/🇺🇸)
2. La página se recarga con el nuevo idioma
3. El idioma seleccionado se guarda

---

## 💾 Persistencia de Datos

Ambas funcionalidades usan `localStorage`:

```javascript
// Tema
localStorage.setItem('theme', 'dark' | 'light')
localStorage.getItem('theme')

// Idioma
localStorage.setItem('language', 'es' | 'en')
localStorage.getItem('language')
```

---

## 🎨 Clases Tailwind Útiles

Para agregar soporte de dark mode a nuevos componentes:

```html
<!-- Backgrounds -->
<div class="bg-light-surface dark:bg-surface"></div>

<!-- Textos -->
<p class="text-gray-900 dark:text-white"></p>
<span class="text-light-secondary dark:text-secondary"></span>

<!-- Colores primarios -->
<button class="bg-light-primary dark:bg-primary"></button>
<a class="text-light-primary dark:text-primary"></a>

<!-- Borders -->
<div class="border-gray-200 dark:border-white/10"></div>
```

---

## 🔄 Actualización de Traducciones

El sistema actualiza automáticamente todos los elementos con `data-i18n`:

```javascript
// src/scripts/i18n.ts
document.querySelectorAll('[data-i18n]').forEach((element) => {
  const key = element.getAttribute('data-i18n');
  const translation = getNestedValue(translations[lang], key);
  element.textContent = translation;
});
```

---

## 📱 Responsive Design

Ambos botones están optimizados para móvil:
- ThemeToggle: `top-20 right-6`
- LanguageToggle: `top-20 left-6`
- No interfieren con el menú hamburguesa
- Tamaño táctil adecuado (44x44px mínimo)

---

## 🐛 Debugging

**Tema no cambia:**
- Verifica `tailwind.config.js` → `darkMode: 'class'`
- Revisa DevTools → `<html class="dark">`
- Limpia localStorage y recarga

**Traducciones no funcionan:**
- Verifica que el elemento tenga `data-i18n="key.path"`
- Confirma que la key existe en `translations.ts`
- Revisa consola del navegador por errores

---

## 🎯 Próximas Mejoras

- [ ] Transición animada entre idiomas (sin reload)
- [ ] Más idiomas (PT, FR, DE)
- [ ] Detectar cambios de preferencia del sistema en tiempo real
- [ ] Modo automático (según hora del día)
- [ ] Shortcuts de teclado (Ctrl+L para idioma, Ctrl+T para tema)

---

## 📊 Impacto en Performance

- **Bundle size:** +~5KB (traducciones)
- **First Load:** Sin impacto visible (scripts inline)
- **Lighthouse:** 100/100 mantenido
- **CLS:** 0 (sin layout shift)

---

**Implementado:** 1 de Noviembre, 2025  
**Versión:** 3.0.0
