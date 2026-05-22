/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import React, { useEffect, useState } from 'react';
import { useApp } from '../AppContext';
import { ChevronUp, Mail, Landmark } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Footer() {
  const { language, setLanguage, t } = useApp();
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll height to show back-to-top button
  useEffect(() => {
    const checkScrollHeight = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', checkScrollHeight, { passive: true });
    return () => window.removeEventListener('scroll', checkScrollHeight);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
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

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-200 text-slate-605 py-16 font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-start mb-12">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5 text-slate-900">
              <div className="p-2 h-fit rounded-lg bg-blue-50 text-blue-600 border border-blue-100">
                <Landmark className="w-5 h-5 sm:w-6 h-6" />
              </div>
              <div>
                <span className="font-display font-bold text-lg sm:text-xl block tracking-tight text-[#0F172A]">
                  {t({ en: 'Takehito Hayami Lab', jp: '速水武人 研究室' })}
                </span>
                <span className="text-[10px] sm:text-xs font-mono font-medium block tracking-wider text-slate-400">
                  {t({ en: 'Biomedical & Sensory Eng.', jp: '生体医工学・人間情報処理' })}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-sm font-sans">
              {t({
                en: 'Pioneering sensory replacement diagnostics and micro-biosignal interfaces to empower visually and kinesthetically limited populations worldwide.',
                jp: '電気触覚刺激による感覚神経代替技術や非接触瞳孔チェックシステムを創出し、世界中の感覚機能低下者、高齢者の健康をアシスト。'
              })}
            </p>
          </div>

          {/* Quick Links Sitemaps */}
          <div className="md:col-span-3 space-y-4 text-xs sm:text-sm">
            <h4 className="font-bold text-[#0F172A] uppercase tracking-wider text-xs font-mono">
              {t({ en: 'Sitemap Indices', jp: '講義・学内リンク' })}
            </h4>
            <ul className="space-y-2">
              {[
                { id: 'home', label: { en: 'Home Portal', jp: 'ホームポータル' } },
                { id: 'about', label: { en: 'Biography Details', jp: '速水教授紹介' } },
                { id: 'research', label: { en: 'Research Areas', jp: '生体医工学カテゴリ' } },
                { id: 'vision', label: { en: 'Academic Mission', jp: 'ミッション・ビジョン' } },
                { id: 'publications', label: { en: 'Key Publications', jp: '査読付き論文' } },
                { id: 'gallery', label: { en: 'Visual Gallery', jp: '機器・実験風景' } },
                { id: 'contact', label: { en: 'Secretary inquiries', jp: 'お問い合わせ' } },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-slate-505 hover:text-[#1E3A8A] transition-colors duration-200 cursor-pointer text-left"
                  >
                    {t(link.label)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Core info quick links */}
          <div className="md:col-span-4 space-y-4 text-xs sm:text-sm">
            <h4 className="font-bold text-[#0F172A] uppercase tracking-wider text-xs font-mono">
              {t({ en: 'Research Affiliations', jp: '関連学術連携機関' })}
            </h4>
            <ul className="space-y-2 text-slate-550 leading-relaxed font-sans">
              <li>
                <span className="font-semibold text-slate-800 block">Japan Society of Med. Electronics</span>
                <span className="text-[11px] block">{t({ en: 'Full member & supervisor', jp: '日本生体医工学会 正会員・評議員' })}</span>
              </li>
              <li>
                <span className="font-semibold text-slate-800 block">The University of Kitakyushu</span>
                <span className="text-[11px] block">Faculty of Environmental Engineering | Dept of Information Systems Engineering</span>
              </li>
              <li>
                <span className="font-semibold text-slate-800 block">{t({ en: 'Email Gateway', jp: 'お急ぎの場合の連絡先' })}</span>
                <a href="mailto:hayami-t@kitakyu-u.ac.jp" className="hover:text-blue-700 transition-colors block text-blue-600 font-semibold text-xs sm:text-sm">
                  hayami-t@kitakyu-u.ac.jp
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Panel */}
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright text */}
          <div className="text-center md:text-left text-xs text-slate-500 font-sans">
            &copy; {currentYear} {t({ en: 'Takehito Hayami Laboratory', jp: '北九州市立大学 国際環境工学部 情報システム工学科 速水武人研究室' })}.
            <span className="block mt-1 md:inline md:ml-2">
              All Rights Reserved.
            </span>
          </div>

          {/* Bottom quick control overlays */}
          <div className="flex items-center gap-4">
            {/* Language toggle footer */}
            <div className="flex bg-white p-0.5 rounded-lg border border-slate-200">
              <button
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1 text-[11px] font-bold rounded-md transition-all ${
                  language === 'en' ? 'bg-slate-100 text-[#1E3A8A] shadow-xs' : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('jp')}
                className={`px-2.5 py-1 text-[11px] font-bold rounded-md transition-all ${
                  language === 'jp' ? 'bg-slate-100 text-[#1E3A8A] shadow-xs' : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                日本語
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Back to top scroll button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            onClick={handleScrollToTop}
            className="fixed bottom-6 right-6 z-49 p-3 sm:p-3.5 rounded-full bg-[#1E3A8A] text-white hover:bg-blue-800 shadow-xl cursor-pointer select-none"
            aria-label="Back To Top"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronUp className="w-5 h-5 flex-shrink-0" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
