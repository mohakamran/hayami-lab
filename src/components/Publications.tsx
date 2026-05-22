/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { useApp } from '../AppContext';
import { PUBLICATIONS_DATA } from '../data';
import { Search, Filter, BookOpen, ExternalLink, RefreshCw, Layers, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Publications() {
  const { language, t } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', title: { en: 'All Research', jp: '全領域' } },
    { id: 'biomedical', title: { en: 'Biomedical Engineering', jp: '生体医工学' } },
    { id: 'ophthalmology', title: { en: 'Ophthalmology', jp: '眼科応用工学' } },
    { id: 'interface', title: { en: 'Human Interface', jp: 'ヒューマンインタフェース' } },
    { id: 'medical-tech', title: { en: 'Medical Tech', jp: '医療・福祉機器' } },
    { id: 'psychophysiology', title: { en: 'Psychophysiology', jp: '精神・生理工学' } },
  ];

  // Client-side search and filtering logic
  const filteredPublications = useMemo(() => {
    return PUBLICATIONS_DATA.filter((pub) => {
      // Category match
      const categoryMatch = selectedCategory === 'all' || pub.category === selectedCategory;

      // Text query match
      const titleMatch =
        pub.title.en.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.title.jp.includes(searchQuery);
      const authorMatch =
        pub.authors.en.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.authors.jp.includes(searchQuery);
      const journalMatch =
        pub.journal.en.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.journal.jp.includes(searchQuery);

      return categoryMatch && (titleMatch || authorMatch || journalMatch);
    });
  }, [searchQuery, selectedCategory]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
  };

  return (
    <section id="publications" className="py-24 bg-slate-50/50 transition-colors duration-500 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-blue-50 text-[#1E3A8A] rounded-full text-xs font-bold uppercase tracking-[0.2em] shadow-xs border border-blue-100">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{t({ en: 'ACADEMIC PUBLICATIONS', jp: '論文・研究業績' })}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-slate-900 font-display">
            {t({ en: 'Peer-Reviewed Key Publications', jp: '査読付き主要掲載論文・著作' })}
          </h2>
          <div className="w-12 h-0.5 bg-[#1E3A8A] mx-auto" />
          <p className="text-slate-600 text-sm max-w-2xl mx-auto leading-relaxed">
            {t({
              en: 'Selected scientific journals and international transactions exploring Sensory Compensation, Eyecaps, and BCI paradigms.',
              jp: '眼電図活動、自律神経生理学的評価、および触覚フィードバックによる感覚システム歩行代替の研究業績の一部をご紹介します。'
            })}
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm mb-10 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* Live Search Input */}
            <div className="md:col-span-7 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t({
                  en: 'Search title, co-author, journal keywords...',
                  jp: '論文タイトル、共同著者名、ジャーナルから検索...'
                })}
                className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder-slate-400 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all font-sans"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-mono font-bold text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  CLEAR
                </button>
              )}
            </div>

            {/* Total Results Counter */}
            <div className="md:col-span-5 text-right font-mono text-xs text-slate-500">
              {t({ en: 'Showing', jp: '該当件数: ' })} <span className="font-bold text-blue-600 text-sm">{filteredPublications.length}</span> / {PUBLICATIONS_DATA.length} {t({ en: 'papers', jp: '本' })}
            </div>
          </div>

          {/* Grid Category pills */}
          <div className="border-t border-slate-100 pt-5">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
              <Filter className="w-3.5 h-3.5" />
              <span>{t({ en: 'Filter by Sub-discipline', jp: '学術カテゴリーで絞り込み' })}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide cursor-pointer transition-all ${
                      isActive
                        ? 'bg-[#1E3A8A] text-white shadow-md'
                        : 'bg-slate-50 border border-slate-200 text-slate-600 hover:text-[#1E3A8A] hover:bg-slate-100'
                    }`}
                  >
                    {t(cat.title)}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Publications interactive card list */}
        <div className="space-y-6 font-sans">
          <AnimatePresence mode="popLayout font-sans">
            {filteredPublications.length > 0 ? (
              filteredPublications.map((pub, idx) => (
                <motion.div
                  key={pub.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3, delay: Math.min(idx * 0.04, 0.4) }}
                  className="group bg-white border border-slate-200/60 border-l-[3px] border-l-transparent hover:border-l-[#1E3A8A] rounded-xl p-6 md:p-8 hover:shadow-md hover:border-slate-300 transition-all duration-305"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    
                    {/* Left Meta info block */}
                    <div className="lg:col-span-2 flex lg:flex-col gap-3 lg:gap-1.5 justify-between lg:justify-start">
                      {/* Year badge */}
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-50 text-indigo-700 rounded-lg text-xs font-mono font-bold w-fit">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{pub.year}</span>
                      </div>

                      {/* Discipline Badge mapping */}
                      <span className="text-[10px] font-mono tracking-wide font-bold uppercase text-slate-400">
                        {pub.category === 'biomedical' && t({ en: 'Biomedical', jp: '生体医工学' })}
                        {pub.category === 'ophthalmology' && t({ en: 'Ophthalmology', jp: '眼科工学' })}
                        {pub.category === 'interface' && t({ en: 'Interface', jp: '対人IF' })}
                        {pub.category === 'medical-tech' && t({ en: 'Medical Tech', jp: '医療・福祉' })}
                        {pub.category === 'psychophysiology' && t({ en: 'Psychology', jp: '精神生理' })}
                      </span>
                    </div>

                    {/* Right core publication info */}
                    <div className="lg:col-span-10 space-y-3">
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
                        {t(pub.title)}
                      </h3>
                      
                      {/* Co-Authors */}
                      <div className="text-sm font-medium text-slate-500">
                        {t(pub.authors)}
                      </div>

                      {/* Journal Info */}
                      <div className="text-xs text-slate-400 italic leading-none">
                        {t(pub.journal)}
                      </div>

                      {/* External links and citations info */}
                      {pub.doi && (
                        <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-slate-100-mt-3">
                          <span className="text-[11px] font-mono text-slate-400">
                            DOI: {pub.doi}
                          </span>
                          <a
                            href={pub.url}
                            className="inline-flex items-center gap-1 text-[11px] font-bold text-[#1E3A8A] hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span>Publisher Source</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12 bg-white border border-dashed border-slate-200 rounded-3xl"
              >
                <Layers className="w-8 h-8 text-slate-300 mx-auto mb-3" />
                <p className="text-sm font-semibold text-slate-600">
                  {t({ en: 'No publications matched your current filters.', jp: '該当する論文・研究成果が見つかりませんでした。' })}
                </p>
                <button
                  onClick={resetFilters}
                  className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:underline cursor-pointer"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>{t({ en: 'Reset Search & Categories', jp: '検索条件をクリア' })}</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
