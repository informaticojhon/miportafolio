// Helper para obtener el idioma y traducciones
import { getTranslations, type Language } from './translations';

export function getLangFromLocalStorage(): Language {
  if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
    const stored = localStorage.getItem('language');
    if (stored === 'es' || stored === 'en') {
      return stored as Language;
    }
  }
  return 'es';
}

export function getCurrentTranslations() {
  const lang = getLangFromLocalStorage();
  return getTranslations(lang);
}
