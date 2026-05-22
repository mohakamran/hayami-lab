/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Language = 'en' | 'jp';
export type Theme = 'light' | 'dark';

export interface BilingualText {
  en: string;
  jp: string;
}

export interface ResearchArea {
  id: string;
  title: BilingualText;
  description: BilingualText;
  iconName: string; // Used to dynamically choose Lucide icons
  details: BilingualText[];
}

export interface Publication {
  id: string;
  title: BilingualText;
  authors: BilingualText;
  journal: BilingualText;
  year: number;
  category: 'biomedical' | 'ophthalmology' | 'interface' | 'medical-tech' | 'psychophysiology';
  doi?: string;
  url?: string;
}

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  title: BilingualText;
}

export interface GalleryItem {
  id: string;
  title: BilingualText;
  category: 'all' | 'lab' | 'equipment' | 'research' | 'campus';
  imageUrl: string;
  description: BilingualText;
}

export interface AcademicTimelineItem {
  year: string;
  title: BilingualText;
  institution: BilingualText;
}
