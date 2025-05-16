
// Import language translations
import { en } from './en';
import { nl } from './nl';
import { ro } from './ro';

// Import service-specific translations
import { servicesEn } from './services/en';
import { servicesNl } from './services/nl';
import { servicesRo } from './services/ro';

// Merge the main translations with service-specific translations
const mergedEn = { ...en, ...servicesEn };
const mergedNl = { ...nl, ...servicesNl };
const mergedRo = { ...ro, ...servicesRo };

// Export all translations
export const translations = {
  en: mergedEn,
  nl: mergedNl,
  ro: mergedRo
};

// Export language type
export type Language = keyof typeof translations;

// Helper to check if a language is supported
export function isValidLanguage(lang: string): lang is Language {
  return ['en', 'nl', 'ro'].includes(lang);
}
