/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, Theme, BilingualText } from './types';

interface AppContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: Theme;
  toggleTheme: () => void;
  t: (bilingualText: BilingualText) => string;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Try to load initial language and theme from localStorage if available, default to browser settings
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('hayami_lab_lang');
    if (saved === 'en' || saved === 'jp') return saved;
    // Fallback to Japanese by default if Japanese locale detected, otherwise English
    if (typeof navigator !== 'undefined') {
      const isJapanese = navigator.language.startsWith('ja');
      return isJapanese ? 'jp' : 'en';
    }
    return 'en';
  });

  const [theme, setThemeState] = useState<Theme>('light');

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('hayami_lab_lang', lang);
  };

  const toggleTheme = () => {
    // Disabled to keep light theme ONLY
  };

  // Sync theme with document element for tailwind support
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('dark');
    root.style.colorScheme = 'light';
  }, []);

  // Translate function wrapper for easy in-render translations
  const t = (bilingualText: BilingualText): string => {
    if (!bilingualText) return '';
    return bilingualText[language] || bilingualText['en'] || '';
  };

  return (
    <AppContext.Provider value={{ language, setLanguage, theme, toggleTheme, t }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
