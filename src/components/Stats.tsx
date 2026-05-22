/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState, useRef } from 'react';
import { useApp } from '../AppContext';
import { STATS_DATA } from '../data';
import { Award, GraduationCap, Globe, ShieldCheck } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<any>> = {
  'stat-years': GraduationCap,
  'stat-papers': Award,
  'stat-collaborations': Globe,
  'stat-projects': ShieldCheck,
};

// Count-up sub-component that detects when scrolled into view
function CountUpCard({ title, value, suffix, id }: any) {
  const { t } = useApp();
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);

  const iconColorMap: Record<string, string> = {
    'stat-years': 'text-blue-600 bg-blue-50 border-blue-150',
    'stat-papers': 'text-emerald-600 bg-emerald-50 border-emerald-150',
    'stat-collaborations': 'text-purple-600 bg-purple-50 border-purple-150',
    'stat-projects': 'text-amber-600 bg-amber-50 border-amber-150',
  };

  const IconComp = iconMap[id] || GraduationCap;
  const badgeColors = iconColorMap[id] || 'text-blue-600 bg-blue-50 border-blue-150';

  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    let frameId: number;

    const startAnimation = () => {
      const duration = 1500; // ms
      const startTime = performance.now();

      const animate = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Quad ease-out formulation for smooth deceleration
        const easeOutQuad = (x: number) => 1 - (1 - x) * (1 - x);
        const currentCount = Math.floor(easeOutQuad(progress) * value);

        setCount(currentCount);

        if (progress < 1) {
          frameId = requestAnimationFrame(animate);
        } else {
          setCount(value);
        }
      };

      frameId = requestAnimationFrame(animate);
    };

    if (elementRef.current) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            startAnimation();
            if (observer) {
              observer.unobserve(elementRef.current!);
              observer.disconnect();
            }
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(elementRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
      cancelAnimationFrame(frameId);
    };
  }, [value]);

  return (
    <div
      ref={elementRef}
      className="p-6 sm:p-7 rounded-2xl flex flex-col justify-between min-h-36 bg-slate-50/50 hover:bg-white border border-slate-200/80 hover:border-slate-300 hover:shadow-lg hover:scale-103 duration-300 transition-all font-sans"
    >
      {/* Upper section: Lightweight high scale number */}
      <div className="flex justify-between items-start">
        <span className="text-3.5xl sm:text-4xl font-light tracking-tight text-slate-900 font-display">
          {count}
          <span className="text-sm font-semibold text-slate-500 ml-1">{suffix}</span>
        </span>
        <div className={`p-2.5 rounded-xl border ${badgeColors}`}>
          <IconComp className="w-5 h-5" />
        </div>
      </div>

      {/* Downward section: Wide uppercase tags */}
      <div className="mt-6 border-t border-slate-150 pt-3">
        <span className="text-[10px] uppercase tracking-widest font-bold text-slate-500 block leading-tight">
          {t(title)}
        </span>
      </div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="py-16 bg-white transition-colors duration-500 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS_DATA.map((stat) => (
            <CountUpCard
              key={stat.id}
              id={stat.id}
              title={stat.title}
              value={stat.value}
              suffix={stat.suffix}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
