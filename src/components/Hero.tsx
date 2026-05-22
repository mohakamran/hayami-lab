/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { useApp } from '../AppContext';
import { motion } from 'motion/react';
import { ArrowRight, Mail, Sparkles, Binary, Compass } from 'lucide-react';

export default function Hero() {
  const { language, t } = useApp();
  const [typedText, setTypedText] = useState('');
  const [keywordIndex, setKeywordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Core research keywords loop
  const keywords = [
    { en: 'Sensory Electrophysiology', jp: '感覚神経系電気生理学' },
    { en: 'Assistive Human Interfaces', jp: '感覚補償型アシスト装置' },
    { en: 'Gaze & Pupillary Analysis', jp: '瞳孔応答・視線トラッキング' },
    { en: 'Biomedical Signal Processing', jp: '生体情報信号数理処理' },
  ];

  useEffect(() => {
    const currentWord = keywords[keywordIndex][language];
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      timer = setTimeout(() => {
        setTypedText(currentWord.substring(0, typedText.length - 1));
      }, 50);
    } else {
      timer = setTimeout(() => {
        setTypedText(currentWord.substring(0, typedText.length + 1));
      }, 100);
    }

    if (!isDeleting && typedText === currentWord) {
      timer = setTimeout(() => setIsDeleting(true), 1500); // Wait before starting to delete
    } else if (isDeleting && typedText === '') {
      setIsDeleting(false);
      setKeywordIndex((prev) => (prev + 1) % keywords.length);
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, keywordIndex, language]);

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

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex items-center overflow-hidden bg-white text-slate-900"
    >
      {/* Decorative Floating Polygons and Wave Background */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-40 pointer-events-none">
        {/* Animated grid lines pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800d_1px,transparent_1px),linear-gradient(to_bottom,#8080800d_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        {/* Soft blue glowing spheres */}
        <div className="absolute top-1/4 left-1/4 w-[150px] sm:w-[350px] h-[150px] sm:h-[350px] rounded-full bg-blue-400/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[200px] sm:w-[450px] h-[200px] sm:h-[450px] rounded-full bg-sky-400/15 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Stylized interactive biosignal visualization representing Eye Tracking and sensory interfaces */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-square rounded-3xl p-6 md:p-8 bg-white/90 backdrop-blur-xl border border-slate-200/80 shadow-xl"
            >
              <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-mono border border-blue-100">
                <Binary className="w-3.5 h-3.5 animate-spin" />
                <span>SYS_HEALTH: ACTIVE</span>
              </div>

              {/* Central Eye-tracking Focus Illustration */}
              <div className="w-full h-full flex flex-col justify-between pt-6">
                <div className="flex-1 flex flex-col items-center justify-center relative">
                  {/* Floating particles represent sensory stimulus */}
                  <motion.div
                    animate={{ y: [0, -12, 0], opacity: [0.3, 0.8, 0.3] }}
                    transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                    className="absolute top-10 right-16 w-3 h-3 rounded-full bg-blue-500"
                  />
                  <motion.div
                    animate={{ y: [0, 8, 0], opacity: [0.2, 0.6, 0.2] }}
                    transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 }}
                    className="absolute bottom-16 left-12 w-4 h-2 rounded-full bg-sky-400"
                  />

                  {/* Concentric Eye Gaze Tracking lines */}
                  <div className="relative w-52 h-52 sm:w-60 sm:h-60 rounded-full border border-dashed border-slate-200 flex items-center justify-center animate-[spin_50s_linear_infinite]">
                    <div className="w-40 h-40 rounded-full border border-blue-105 flex items-center justify-center">
                      <div className="w-28 h-28 rounded-full bg-slate-50 border border-slate-150 flex items-center justify-center">
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                          className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#1E3A8A] to-[#3B82F6] flex items-center justify-center text-white"
                        >
                          <Compass className="w-8 h-8 animate-compass" />
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  {/* High contrast eye reticle indicator coordinates */}
                  <div className="absolute top-1/2 left-4 text-[10px] font-mono text-slate-500 transform -translate-y-1/2 select-none">
                    <div>P_DIA: 4.82mm</div>
                    <div>X_CRD: +124.5</div>
                    <div>Y_CRD: -88.19</div>
                  </div>
                </div>

                {/* Simulated Real-time Biosignal graph (Sine-waves) */}
                <div className="h-16 border-t border-slate-150 pt-3">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 mb-2">
                    <span>EEG Alpha Oscillation</span>
                    <span className="text-emerald-500 animate-pulse">10.4 Hz</span>
                  </div>
                  <div className="flex gap-1 h-8 items-end justify-between px-1">
                    {[30, 45, 80, 50, 40, 60, 90, 75, 45, 30, 65, 80, 50, 70, 95, 60, 40, 55, 75, 35].map((val, idx) => (
                      <motion.div
                        key={idx}
                        animate={{ height: [`${val * 0.25}px`, `${val * 0.4}px`, `${val * 0.25}px`] }}
                        transition={{ repeat: Infinity, duration: 1.5 + (idx % 3) * 0.3, ease: 'easeInOut' }}
                        className="w-2 bg-[#1E3A8A]/80 rounded-t-xs"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: English & Japanese branding, dynamic subtitles, descriptions */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-8 text-center lg:text-left relative z-10">
            {/* Upper Right Geometric Curve Overlay */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-50 rounded-full opacity-40 blur-xl -z-10 pointer-events-none" />
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-5"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-bold text-[#1E3A8A] uppercase tracking-[0.2em] mb-2 block">
                <Sparkles className="w-3 h-3 text-[#1E3A8A]" />
                <span>
                  {t({ en: 'The University of Kitakyushu', jp: '北九州市立大学 国際環境工学部' })}
                </span>
              </div>

              {/* Main Title / Names */}
              <h1 className="font-display tracking-tight text-[#0F172A]">
                <span className="block text-4xl sm:text-5xl lg:text-6xl font-light leading-tight mb-2">
                  {language === 'en' ? 'Takehito Hayami' : <span className="font-normal">速水 武人</span>}
                  <span className="text-[18px] sm:text-[22px] font-semibold text-slate-400 ml-3 block sm:inline">
                    {t({ en: 'Professor, PhD', jp: '教授 (工学博士)' })}
                  </span>
                </span>
                <span className="block text-lg sm:text-xl font-medium text-slate-500 leading-snug">
                  {t({ en: 'Biomedical Engineering & Human Information Processing', jp: '生体医工学・人間情報処理研究室' })}
                </span>
              </h1>

              {/* Highlight pl-4 accent detail */}
              <div className="border-l-2 border-[#1E3A8A] pl-4 py-2 text-left bg-[#1E3A8A]/5 rounded-r-xl max-w-xl mx-auto lg:mx-0">
                <p className="text-[12px] sm:text-xs text-slate-550 font-mono italic leading-relaxed">
                  {t({ en: 'Biomedical Engineering & Human Information Processing.', jp: '生体医工学・人間情報処理' })}
                </p>
              </div>

              {/* Dynamic Sub-discipline Tagline */}
              <div className="h-8 flex items-center justify-center lg:justify-start gap-2 font-mono text-xs sm:text-sm text-[#1E3A8A] bg-slate-100 px-3 py-1.5 rounded-lg w-fit mx-auto lg:mx-0 border border-slate-200">
                <span className="text-[10px] uppercase font-bold text-slate-450 tracking-wider">
                  {language === 'en' ? 'Research Area' : '専門領域'}:
                </span>
                <span className="font-bold">{typedText}</span>
                <span className="w-1.5 h-4 bg-[#1E3A8A] animate-pulse inline-block" />
              </div>

              {/* Decisive bio description */}
              <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed pt-2">
                {t({
                  en: 'Advancing healthcare and human-centered technologies through high-fidelity functional biomedical sensors, sensory replacement devices, and cognitive pupil responses at Kitakyushu.',
                  jp: '感覚代替ヒューマンインタフェース、電気生理センシング、および非接触型瞳孔チェック技術の開発を行い、高齢者や感覚機能障がい者のモビリティを全般アシスト。'
                })}
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3"
            >
              {/* Explore action */}
              <button
                onClick={() => scrollToSection('research')}
                className="w-full sm:w-auto bg-[#1E3A8A] text-white px-8 py-3 rounded-full text-xs font-bold shadow-lg shadow-blue-900/10 hover:bg-blue-900 cursor-pointer transition-all flex items-center justify-center gap-2 group border border-transparent"
              >
                <span>{t({ en: 'EXPLORE RESEARCH', jp: '研究テーマを探索' })}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Contact action */}
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto border border-slate-300 px-8 py-3 rounded-full text-xs font-bold hover:bg-slate-105 text-[#0F172A] transition-all flex items-center justify-center gap-2 cursor-pointer bg-transparent"
              >
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span>{t({ en: 'CONTACT LAB', jp: 'お問い合わせ先' })}</span>
              </button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
