/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useApp } from '../AppContext';
import { RESEARCH_AREAS } from '../data';
import {
  Activity,
  BrainCircuit,
  Monitor,
  Zap,
  HeartHandshake,
  Search,
  Footprints,
  Cpu,
  Atom,
  CheckCircle2
} from 'lucide-react';
import { motion } from 'motion/react';

// Dictionary mapping icon names to Lucide icons
const iconMap: Record<string, React.ComponentType<any>> = {
  Activity,
  BrainCircuit,
  Monitor,
  Zap,
  HeartHandshake,
  Search,
  Footprints,
  Cpu,
};

export default function ResearchAreas() {
  const { t } = useApp();

  return (
    <section id="research" className="py-24 bg-slate-50/55 transition-colors duration-500 relative overflow-hidden">
      {/* Decorative vector background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-blue-50 text-[#1E3A8A] rounded-full text-xs font-bold uppercase tracking-[0.2em] shadow-sm border border-blue-105">
            <Atom className="w-3.5 h-3.5" />
            <span>{t({ en: 'RESEARCH CATEGORIES', jp: '生体医工学カテゴリ' })}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-slate-900 font-display">
            {t({ en: 'Specialized Research Horizons', jp: '生体・感覚情報の先端研究領域' })}
          </h2>
          <div className="w-12 h-0.5 bg-[#1E3A8A] mx-auto" />
          <p className="text-slate-505 text-sm max-w-2xl mx-auto leading-relaxed font-sans">
            {t({
              en: 'We dissect physiological bio-signals, cognitive load, and musculoskeletal coordinates to develop assistive systems that support everyday human mobility and health.',
              jp: '眼球運動や微小脳波、歩行時バイオメカニクス等の多次元生理データを計測し、「優しく使えるアシストインターフェイス」の確立を追求します。'
            })}
          </p>
        </div>

        {/* 8 Research Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {RESEARCH_AREAS.map((area, index) => {
            const IconComponent = iconMap[area.iconName] || Activity;
            const iconColors = [
              'bg-blue-50 text-blue-600 border border-blue-100',
              'bg-emerald-50 text-emerald-600 border border-emerald-100',
              'bg-amber-50 text-amber-600 border border-amber-100',
              'bg-purple-50 text-purple-600 border border-purple-100',
              'bg-sky-50 text-sky-600 border border-sky-100',
              'bg-rose-50 text-[#E11D48] border border-rose-100',
              'bg-teal-50 text-teal-600 border border-teal-100',
              'bg-indigo-50 text-indigo-600 border border-indigo-100',
            ];
            const currentColors = iconColors[index % iconColors.length];

            return (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group bg-white border border-slate-205/70 rounded-2xl p-6 shadow-xs hover:shadow-lg hover:border-[#1E3A8A]/30 transition-all duration-300 relative flex flex-col justify-between"
              >
                <div>
                  {/* Decorative glowing overlay */}
                  <div className="absolute inset-x-0 top-0 h-1 bg-[#1E3A8A] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Header / Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${currentColors} transition-all duration-300 shadow-xs font-semibold`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-medium text-slate-350 select-none">
                      #{String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Bilingual Titles */}
                  <div className="space-y-1 mb-4">
                    <h3 className="text-base font-bold text-[#0F172A] font-display group-hover:text-[#1E3A8A] transition-colors">
                      {area.title.en}
                    </h3>
                    <div className="text-xs text-slate-400 italic mb-2">
                      {area.title.jp}
                    </div>
                  </div>

                  {/* Sub-description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed min-h-[50px] mb-6">
                    {t(area.description)}
                  </p>
                </div>

                {/* Internal sub-topics list shown in clean layout */}
                <div className="border-t border-slate-100 pt-4 mt-auto">
                  <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-blue-600 block mb-2">
                    {t({ en: 'Core Projects', jp: '具体研究テーマ' })}
                  </span>
                  <ul className="space-y-2">
                    {area.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-1.5 text-xs text-slate-500 leading-tight">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span>{t(detail)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
