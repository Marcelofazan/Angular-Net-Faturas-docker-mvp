export type LanguageCode = 'pt' | 'eng' | 'es';

export interface LanguageOption {
  code: LanguageCode;
  label: string;
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { code: 'pt', label: 'Português' },
  { code: 'eng', label: 'Inglês' },
  { code: 'es', label: 'Espanhol' },
];

export const DEFAULT_LANGUAGE: LanguageCode = 'eng';

export const LOCALE_MAP: Record<LanguageCode, string> = {
  pt: 'pt-BR',
  eng: 'en-US', // Alterado para en-US (comum para inglês internacional), mas pode manter en-GB se preferir.
  es: 'es-ES', // Configurado para o espanhol padrão.
};

export interface TranslationsResponse {
  language: string;
  translations: Record<string, string>;
}
