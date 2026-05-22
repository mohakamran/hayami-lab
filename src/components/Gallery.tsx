/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { useApp } from '../AppContext';
import { GALLERY_DATA } from '../data';
import { Images, X, ZoomIn, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GalleryItem } from '../types';

export default function Gallery() {
  const { language, t } = useApp();
  const [activeFilter, setActiveFilter] = useState<'all' | 'lab' | 'equipment' | 'research' | 'campus'>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filters = [
    { id: 'all', title: { en: 'All Photos', jp: 'すべて' } },
    { id: 'lab', title: { en: 'Equipment Setups', jp: '実験設備' } },
    { id: 'equipment', title: { en: 'Prototypes', jp: '試作デバイス' } },
    { id: 'research', title: { en: 'Research Views', jp: '研究活動' } },
    { id: 'campus', title: { en: 'Campus Env', jp: 'キャンパス景観' } },
  ] as const;

  const filteredGallery = useMemo(() => {
    if (activeFilter === 'all') return GALLERY_DATA;
    return GALLERY_DATA.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="gallery" className="py-24 bg-white transition-colors duration-500 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-blue-50 text-[#1E3A8A] rounded-full text-xs font-bold uppercase tracking-[0.2em] shadow-xs border border-blue-105">
            <Images className="w-3.5 h-3.5" />
            <span>{t({ en: 'VISUAL STUDY HUB', jp: '研究室ギャラリー' })}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-slate-900 font-display">
            {t({ en: 'Laboratory Spaces & Active Prototypes', jp: '研究活動・開発プロダクト・施設' })}
          </h2>
          <div className="w-12 h-0.5 bg-[#1E3A8A]" mx-auto />
          <p className="text-slate-650 text-sm max-w-2xl mx-auto leading-relaxed">
            {t({
              en: 'A visual insight into our specialized signal tracking suites, hardware mockups, and academic environment.',
              jp: '視線計測システムや多電極生体信号アレイ、開発中の感覚補償ウエアラブル靴下の実験環境・キャンパス景観。'
            })}
          </p>
        </div>

        {/* Gallery Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {filters.map((filter) => {
            const isActive = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide cursor-pointer transition-all ${
                  isActive
                    ? 'bg-[#1E3A8A] text-white shadow-md'
                    : 'bg-slate-50 border border-slate-205 text-slate-650 hover:text-[#1E3A8A] hover:bg-slate-100'
                }`}
              >
                {t(filter.title)}
              </button>
            );
          })}
        </div>

        {/* Masonry-like Flex-Grid with micro-animation */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredGallery.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                className="group relative bg-white border border-slate-200/60 rounded-3xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                {/* Photo container */}
                <div className="aspect-video sm:aspect-4/3 overflow-hidden relative bg-slate-50">
                  <img
                    src={item.imageUrl}
                    alt={t(item.title)}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                  />
                  {/* Hover magnifier effect icon overlays */}
                  <div className="absolute inset-0 bg-blue-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="p-3 bg-white/95 rounded-full text-[#1E3A8A] scale-90 group-hover:scale-100 transition-transform duration-300 shadow-md">
                      <ZoomIn className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Subtitle/Labels details */}
                <div className="p-5 space-y-2 bg-white">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-600 border border-blue-500/10 bg-blue-500/5 px-2 py-0.5 rounded-md">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-base leading-snug group-hover:text-blue-600 transition-colors">
                    {t(item.title)}
                  </h3>
                  <p className="text-xs text-slate-500 font-sans line-clamp-2 md:line-clamp-1 leading-relaxed">
                    {t(item.description)}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* High-fidelity zoom lightbox modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md"
              onClick={() => setSelectedImage(null)}
            >
              {/* Outer close floating button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-51 p-2 rounded-full bg-slate-900/90 text-white border border-slate-705/50 hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Main Dialog box frame */}
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                className="relative bg-white w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="grid grid-cols-1 md:grid-cols-12 bg-white">
                  {/* Photo Left */}
                  <div className="md:col-span-7 bg-slate-50 aspect-video md:aspect-auto select-none">
                    <img
                      src={selectedImage.imageUrl}
                      alt={t(selectedImage.title)}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover max-h-[500px]"
                    />
                  </div>

                  {/* Text Right */}
                  <div className="md:col-span-5 p-6 md:p-8 flex flex-col justify-between bg-white">
                    <div className="space-y-4">
                      {/* Badge info */}
                      <span className="inline-block text-[10px] font-mono tracking-wide font-bold uppercase border border-blue-500/10 bg-blue-500/5 px-2 py-0.5 rounded-md text-blue-600">
                        {selectedImage.category} Setup
                      </span>

                      {/* Header headings */}
                      <div className="space-y-1">
                        <h3 className="text-xl font-extrabold text-slate-900 font-display">
                          {selectedImage.title.en}
                        </h3>
                        {language === 'en' && (
                          <div className="text-sm font-semibold text-slate-400">
                            {selectedImage.title.jp}
                          </div>
                        )}
                        {language === 'jp' && (
                          <div className="text-sm font-semibold text-slate-400">
                            {selectedImage.title.en}
                          </div>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-sm text-slate-650 leading-relaxed font-sans">
                        {t(selectedImage.description)}
                      </p>
                    </div>

                    {/* Notice footnote */}
                    <div className="flex gap-2 items-start mt-6 border-t border-slate-100 pt-4 text-xs text-slate-400 font-sans leading-relaxed">
                      <Info className="w-4.5 h-4.5 text-blue-500 flex-shrink-0" />
                      <span>
                        {t({
                          en: 'All testing configurations strictly adhere to institutional ethics reviews under The University of Kitakyushu welfare regulations.',
                          jp: '当研究室で行われるすべての生体情報測定および実験は、北九州市立大学の生命倫理基準の下、倫理規程に従い被験者の安全を最優先に実施されています。'
                        })}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
