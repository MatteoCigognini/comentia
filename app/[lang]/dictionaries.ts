import 'server-only';

// Tipizza il contenuto dei dizionari (puoi adattare a seconda della struttura JSON)
import en from './dictionaries/en.json';
export type Dictionary = typeof en; // 👈 derivato dal JSON

const dictionaries: Record<string, () => Promise<Dictionary>> = {
    en: () => import('./dictionaries/en.json').then((module) => module.default),
    it: () => import('./dictionaries/it.json').then((module) => module.default),
};

export const getDictionary = async (locale: string): Promise<Dictionary> => {
    return dictionaries[locale]();
};