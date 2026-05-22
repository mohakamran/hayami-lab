/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { useApp } from '../AppContext';
import { Menu, X, Landmark } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const { language, setLanguage, t } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Nav links with both languages
  const navItems = [
    { id: 'home', title: { en: 'Home', jp: 'ホーム' } },
    { id: 'about', title: { en: 'About', jp: '紹介' } },
    { id: 'research', title: { en: 'Research', jp: '研究分野' } },
    { id: 'vision', title: { en: 'Vision', jp: 'ビジョン' } },
    { id: 'publications', title: { en: 'Publications', jp: '論文' } },
    { id: 'gallery', title: { en: 'Gallery', jp: 'ギャラリー' } },
    { id: 'contact', title: { en: 'Contact', jp: '問合せ' } },
  ];

  // Track scroll status for glassmorphism background & active highlighting
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Check which section is in view
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 120; // offset for navbar

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // offset of the sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-350 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 py-3 shadow-md'
          : 'bg-white/50 backdrop-blur-xs py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / branding */}
          <div
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            <div className="w-10 h-10 bg-[#1E3A8A] rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-md hover:scale-105 transition-transform duration-350">
              H
            </div>
            <div>
              <span className="font-display font-bold text-sm sm:text-base tracking-tight text-[#1E3A8A] block leading-tight">
                {language === 'en' ? 'HAYAMI LAB' : '速水研究室'}
              </span>
              <div className="text-[9px] sm:text-[10px] text-slate-500 font-semibold uppercase tracking-widest leading-none mt-0.5">
                {language === 'en' ? 'Kitakyushu University' : '北九州市立大学'}
              </div>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-lg text-[13px] font-bold tracking-wider uppercase transition-colors duration-200 relative cursor-pointer ${
                    isActive
                      ? 'text-[#1E3A8A]'
                      : 'text-slate-600 hover:text-[#1E3A8A]'
                  }`}
                >
                  <span className="relative z-10">{t(item.title)}</span>
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-slate-100 rounded-full -z-0"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop controls (Language) */}
          <div className="hidden lg:flex items-center gap-3 pl-3 border-l border-slate-200">
            {/* Language switch */}
            <div className="flex bg-slate-100 p-0.5 rounded-lg border border-slate-200/50">
              <button
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all ${
                  language === 'en'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-500 hover:text-slate-950'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('jp')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all ${
                  language === 'jp'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-500 hover:text-slate-950'
                }`}
              >
                日本語
              </button>
            </div>
          </div>

          {/* Mobile controllers (lang, hamburger) */}
          <div className="flex lg:hidden items-center gap-2">
            {/* Language toggle mobile quick */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'jp' : 'en')}
              className="px-2.5 py-1 text-xs font-bold rounded-lg border border-slate-300 bg-slate-100 text-slate-700 hover:bg-slate-200"
            >
              {language === 'en' ? 'JP' : 'EN'}
            </button>

            {/* Hamburger button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 rounded-lg bg-slate-100 text-slate-600 hover:text-slate-950 transition-colors"
              aria-label="Menu Toggle"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-slate-250 bg-white/95 backdrop-blur-md overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-[#1E3A8A]/10 text-[#1E3A8A]'
                        : 'text-slate-705 hover:bg-slate-100'
                    }`}
                  >
                    {t(item.title)}
                  </button>
                );
              })}

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between px-4">
                <span className="text-sm font-medium text-slate-500">
                  {language === 'en' ? 'Language Setting' : '言語設定'}
                </span>
                <div className="flex bg-slate-100 p-0.5 rounded-lg">
                  <button
                    onClick={() => setLanguage('en')}
                    className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${
                      language === 'en'
                        ? 'bg-white text-slate-900'
                        : 'text-slate-505'
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => setLanguage('jp')}
                    className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${
                      language === 'jp'
                        ? 'bg-white text-slate-900'
                        : 'text-slate-505'
                    }`}
                  >
                    日本語
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
