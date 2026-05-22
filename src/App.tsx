/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { AppProvider } from './AppContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ResearchAreas from './components/ResearchAreas';
import ResearchVision from './components/ResearchVision';
import Stats from './components/Stats';
import Publications from './components/Publications';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-white text-[#0F172A] selection:bg-blue-500/10 selection:text-blue-800 transition-colors duration-500 ease-out flex flex-col">
        {/* Navigation Sticky Glass Header */}
        <Navbar />

        {/* Fullscreen Hero Showcase with animations and typewriter effect */}
        <main className="flex-1">
          <Hero />

          {/* Academic biography background details */}
          <About />

          {/* 8 Areas grid lookup */}
          <ResearchAreas />

          {/* Vision block quote with animated svg sine waves */}
          <ResearchVision />

          {/* Numeric milestones status increment counters */}
          <Stats />

          {/* Peer-reviewed filters search indexing log */}
          <Publications />

          {/* Visual equipment portfolio zooming lightboxes */}
          <Gallery />

          {/* Secretary forwarding forms & campus maps */}
          <Contact />
        </main>

        {/* Footers */}
        <Footer />
      </div>
    </AppProvider>
  );
}
