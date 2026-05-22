/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useApp } from '../AppContext';
import { VISION_TEXTS } from '../data';
import { motion } from 'motion/react';
import { Compass, Sparkles, Quote, ShieldAlert, Heart } from 'lucide-react';

export default function ResearchVision() {
  const { t } = useApp();

  return (
    <section id="vision" className="py-24 bg-white transition-colors duration-500 overflow-hidden relative">
      {/* Decorative Wave Particles and Glows */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-[10%] w-72 h-72 rounded-full bg-blue-500/5 blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-[15%] w-96 h-96 rounded-full bg-sky-500/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Animated wave backgrounds & giant visionary quote block */}
          <div className="lg:col-span-6 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative p-8 md:p-12 rounded-3xl bg-[#0F172A] text-white overflow-hidden shadow-2xl border border-slate-900"
            >
              {/* Overlay animated wave background inside cards */}
              <div className="absolute inset-0 opacity-25 pointer-events-none select-none">
                <svg className="w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="none">
                  {/* Outer waves */}
                  <motion.path
                    d="M 0 200 Q 100 150 200 200 T 400 200"
                    fill="none"
                    stroke="#3B82F6"
                    strokeWidth="2.5"
                    animate={{ d: [
                      "M 0 200 Q 100 130 200 220 T 400 200",
                      "M 0 200 Q 100 250 200 160 T 400 200",
                      "M 0 200 Q 100 130 200 220 T 400 200"
                    ]}}
                    transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
                  />
                  <motion.path
                    d="M 0 250 Q 100 220 200 280 T 400 250"
                    fill="none"
                    stroke="#38BDF8"
                    strokeWidth="1.8"
                    animate={{ d: [
                      "M 0 250 Q 100 280 200 220 T 400 250",
                      "M 0 250 Q 100 190 200 290 T 400 250",
                      "M 0 250 Q 100 280 200 220 T 400 250"
                    ]}}
                    transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
                  />
                </svg>
              </div>

              {/* Glowing decorative floating dots */}
              <div className="absolute top-[20%] right-[15%] w-2 h-2 rounded-full bg-blue-400 animate-ping" />

              {/* Quote icon banner decoration */}
              <Quote className="w-12 h-12 text-blue-500/30 mb-6" />

              <blockquote className="space-y-4 relative z-10">
                <p className="text-xl sm:text-2xl font-bold font-display leading-relaxed text-slate-100 italic">
                  "{t(VISION_TEXTS.visionQuote)}"
                </p>
                <cite className="block text-sm font-semibold tracking-wider text-blue-400 font-mono mt-4">
                  — {t({ en: 'Takehito Hayami, PhD (Professor / Director)', jp: '工学博士 速水 武人 (教授 / 指導教官)' })}
                </cite>
              </blockquote>
            </motion.div>
          </div>

          {/* Right Side: Translation Details list */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-1 bg-blue-50 text-[#1E3A8A] rounded-full text-xs font-bold uppercase tracking-[0.2em] shadow-xs border border-blue-105">
                <Compass className="w-3.5 h-3.5" />
                <span>{t({ en: 'LAB MISSION STATEMENT', jp: '研究理念＆ミッション' })}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-light text-slate-900 font-display leading-tight">
                {t(VISION_TEXTS.missionTitle)}
              </h3>
              <div className="w-12 h-0.5 bg-[#1E3A8A]" />
              <p className="text-sm sm:text-base text-slate-650 leading-relaxed pt-2">
                {t(VISION_TEXTS.missionBody)}
              </p>
            </div>

            {/* Quick value grids */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex gap-4 items-start">
                <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    {t({ en: 'Non-Invasive Safety', jp: '非侵襲・非接触の高い安全性' })}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {t({
                      en: 'Measuring nervous activity, brain potential, and gaze coordinates without high stress or physical interference.',
                      jp: '体への侵襲（傷等）がない設計により、被験者のストレス・不安を完全に排除した客観的データを追究。'
                    })}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-2.5 rounded-xl bg-sky-50 text-sky-600 border border-sky-100 font-bold">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    {t({ en: 'Welfare Restoration', jp: '生活の質の向上・感覚補償' })}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {t({
                      en: 'Direct assistance devices restoring orientation and mobility for ocular disorders and auditory support.',
                      jp: '電気触覚等で視野障害を補い、空間認識・自立歩行を強力にアシストするユニバーサル福祉技術を完成。'
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
