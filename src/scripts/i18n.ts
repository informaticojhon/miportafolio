// Sistema de traducciones del lado del cliente
import { translations, type Language } from '../i18n/translations';

function getLanguage(): Language {
  if (typeof localStorage !== 'undefined' && localStorage.getItem('language')) {
    const lang = localStorage.getItem('language');
    return (lang === 'en' ? 'en' : 'es') as Language;
  }
  const browserLang = navigator.language.toLowerCase();
  return browserLang.startsWith('es') ? 'es' : 'en';
}

function getNestedValue(obj: any, path: string): string {
  return path.split('.').reduce((current, key) => current?.[key], obj) || path;
}

export function updateTranslations() {
  const lang = getLanguage();
  const t = translations[lang];
  
  console.log('Updating translations to:', lang);
  
  // Actualizar todos los elementos con data-i18n
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.getAttribute('data-i18n');
    if (key) {
      const translation = getNestedValue(t, key);
      if (translation) {
        element.textContent = translation;
      }
    }
  });
  
  // Actualizar aria-labels con data-i18n-aria
  document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
    const key = element.getAttribute('data-i18n-aria');
    if (key) {
      const translation = getNestedValue(t, key);
      if (translation) {
        element.setAttribute('aria-label', translation);
      }
    }
  });
  
  // Actualizar atributo lang del HTML
  document.documentElement.lang = lang;
}

// Variable para evitar inicializaciones múltiples
let isInitialized = false;

// Escuchar cambios de idioma
if (typeof window !== 'undefined') {
  window.addEventListener('languageChanged', () => {
    console.log('Language changed event received');
    updateTranslations();
  });
  
  // Inicializar solo una vez
  function initializeTranslations() {
    if (isInitialized) return;
    isInitialized = true;
    console.log('Initializing translations');
    updateTranslations();
  }
  
  // Inicializar al cargar el DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeTranslations);
  } else {
    // DOM ya está listo
    initializeTranslations();
  }
}
