
// Translations index file
import { en } from './en';
import { nl } from './nl';
import { ro } from './ro';

// Export all translations
export const translations = {
  en,
  nl,
  ro
};

// Export language type
export type Language = keyof typeof translations;

// Helper to check if a language is supported
export function isValidLanguage(lang: string): lang is Language {
  return ['en', 'nl', 'ro'].includes(lang);
}
