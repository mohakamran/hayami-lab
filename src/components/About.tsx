/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useApp } from '../AppContext';
import { ABOUT_TEXT, TIMELINE_DATA } from '../data';
import { GraduationCap, Award, Globe, UserCheck, Flame, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  const { language, t } = useApp();

  const corePillars = [
    {
      icon: GraduationCap,
      color: 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40',
      title: { en: 'Academic Integrity', jp: '学術研究の根幹' },
      body: {
        en: 'Expertise in electrophysiology and experimental psychology provides a highly objective mathematical foundation for our assistive engineering solutions.',
        jp: '電気生理学と実験心理学の深い知見。これに基づく微細生体信号処理が、高精度で客観的なアシスト機器の動作環境を構築します。'
      }
    },
    {
      icon: UserCheck,
      color: 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40',
      title: { en: 'Human-Centered Focus', jp: '人間第一の開発哲学' },
      body: {
        en: 'Our technologies are designed around human sensory and motor thresholds, guaranteeing safety, high ergonomics, and zero learning curve.',
        jp: '人間の限界閾値や生理情報を基準にデバイスを逆引き設計。装着者の負担、違和感を極限まで軽減る優しい設計です。'
      }
    },
    {
      icon: Globe,
      color: 'text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/40',
      title: { en: 'Global Synergy', jp: '国際研究ネットワーク' },
      body: {
        en: 'We cultivate active collaborations with global ophthalmology centers and rehabilitation clinics to validate system efficacy in real scenarios.',
        jp: '海外の眼科先進医学センターや最先端リハビリ病院と緊密に連携。現場で即応できるか実証テストを重ねています。'
      }
    },
    {
      icon: Award,
      color: 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40',
      title: { en: 'Translational Impact', jp: '社会実装・特許への昇華' },
      body: {
        en: 'Our lab successfully translates sensory research into real wearable devices, medical patents, and commercial healthcare accessories.',
        jp: '単なる論文公表に留まらず、実際に触覚で歩行案内する靴下や、電子メガネなどの社会福祉特許、民間共同開発製品を生み出します。'
      }
    }
  ];

  return (
    <section id="about" className="py-24 bg-white transition-colors duration-500 overflow-hidden relative">
      <div className="absolute inset-x-0 bottom-0 top-1/2 bg-slate-50/50 pointer-events-none -z-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-blue-50 text-[#1E3A8A] rounded-full text-xs font-bold uppercase tracking-[0.2em] shadow-xs border border-blue-100">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{t({ en: 'ABOUT PROFESSOR', jp: '速水教授紹介' })}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-slate-900 font-display">
            {t({ en: 'Takehito Hayami Laboratory', jp: '速水 武人 教授 経歴・方針' })}
          </h2>
          <div className="w-12 h-0.5 bg-[#1E3A8A] mx-auto" />
        </div>

        {/* Introduction Paragraph */}
        <div className="max-w-4xl mx-auto mb-20 text-center">
          <p className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed font-sans first-letter:text-3xl first-letter:font-bold first-letter:text-blue-600">
            {t(ABOUT_TEXT)}
          </p>
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-8">
          
          {/* Left Side: Career Timeline Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="sticky top-24 bg-slate-50 border border-slate-205/60 rounded-3xl p-6 md:p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2 mb-6 border-b border-slate-200 pb-3">
                <Flame className="w-5 h-5 text-blue-600" />
                <span>{t({ en: 'Academic Chronology', jp: '経歴・教育背景' })}</span>
              </h3>

              <div className="space-y-6 relative border-l-2 border-slate-200 ml-3 pl-5 md:pl-6">
                {TIMELINE_DATA.map((item, index) => (
                  <div key={index} className="relative group">
                    {/* Ring Indicator */}
                    <div className="absolute -left-[30px] md:-left-[35px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-blue-500 group-hover:scale-120 group-hover:bg-blue-500 transition-all duration-300" />
                    
                    {/* Items */}
                    <div>
                      <span className="text-xs font-mono font-bold tracking-wider text-blue-600">
                        {item.year}
                      </span>
                      <h4 className="font-semibold text-slate-900 mt-1 text-sm md:text-base">
                        {t(item.title)}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-500 mt-1">
                        {t(item.institution)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Core Methodology Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {corePillars.map((item, index) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white border border-slate-250/60 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-bl-full transform translate-x-4 -translate-y-4 group-hover:translate-x-3 group-hover:-translate-y-3 transition-transform" />
                  
                  {/* Icon */}
                  <div className={`p-3 rounded-xl w-fit ${item.color} mb-4`}>
                    <IconComp className="w-5 h-5" />
                  </div>

                  {/* Title */}
                  <h4 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                    {t(item.title)}
                  </h4>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {t(item.body)}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
