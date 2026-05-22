/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ResearchArea, Publication, StatItem, GalleryItem, AcademicTimelineItem } from './types';

export const LAB_NAME = {
  en: "Takehito Hayami Laboratory",
  jp: "速水 武人 研究室"
};

export const UNIVERSITY_NAME = {
  en: "The University of Kitakyushu",
  jp: "北九州市立大学"
};

export const INST_NAME = {
  en: "Faculty of Environmental Engineering | Department of Information Systems Engineering",
  jp: "国際環境工学部 | 情報システム工学科"
};

export const ABOUT_TEXT = {
  en: "Professor Takehito Hayami specializes in biomedical engineering, electrophysiology, and experimental psychology. His research focuses on measuring and analyzing human sensory and motor functions for healthcare and welfare applications. By bridging the gap between physiological indicators and engineering applications, our laboratory develops intelligent technologies that adapt to human needs.",
  jp: "速水武人教授は、生体医工学、電気生理学、実験心理学を専門としています。人間の感覚・運動機能の計測と解析を通じて、医療・福祉分野への応用研究を行っています。生理学的指標と工学的アプリケーションの架け橋となることで、私たちの研究室は人間のニーズに適応するインテリジェントな技術を開発しています。"
};

export const TIMELINE_DATA: AcademicTimelineItem[] = [
  {
    year: "2018 - Present",
    title: {
      en: "Professor",
      jp: "教授"
    },
    institution: {
      en: "The University of Kitakyushu, Department of Information Systems Engineering",
      jp: "北九州市立大学 国際環境工学部 情報システム工学科"
    }
  },
  {
    year: "2010 - 2018",
    title: {
      en: "Associate Professor",
      jp: "准教授"
    },
    institution: {
      en: "The University of Kitakyushu, Dept. of Information Systems Engineering",
      jp: "北九州市立大学 国際環境工学部 情報システム工学科"
    }
  },
  {
    year: "2005 - 2010",
    title: {
      en: "Assistant Professor / Researcher",
      jp: "助手 / 研究員"
    },
    institution: {
      en: "Graduate School of Biomedical Engineering, Kyushu University",
      jp: "九州大学 大学院 システム生命科学府 / 医療技術短期大学部"
    }
  }
];

export const RESEARCH_AREAS: ResearchArea[] = [
  {
    id: "biomedical-eng",
    title: {
      en: "Biomedical Engineering",
      jp: "生体医工学"
    },
    description: {
      en: "Research on healthcare systems integrating engineering models with human physiology.",
      jp: "工学的なモデリングと人間の生理学を融合させた医療・福祉・ヘルスケアシステムの研究。"
    },
    iconName: "Activity",
    details: [
      { en: "Non-invasive neuro-engineering interfaces", jp: "非侵襲的な神経工学インターフェイス" },
      { en: "Mathematical modeling of bio-signals", jp: "生体信号の数理モデリングと予測" },
      { en: "Physiological assessment of fatigue levels", jp: "疲労およびストレス度の生理学的評価" }
    ]
  },
  {
    id: "experimental-psych",
    title: {
      en: "Experimental Psychology",
      jp: "実験心理学"
    },
    description: {
      en: "Investigating human cognitive processing and sensory perception through controlled behavioral experiments.",
      jp: "環境を適切に制御した行動実験を通じた、人間の認知能力および感覚情報処理の解明。"
    },
    iconName: "BrainCircuit",
    details: [
      { en: "Visual attention and search mechanics", jp: "視覚的注意および探索のメカニズムに関する研究" },
      { en: "Auditory cognitive load analysis", jp: "聴覚刺激による認知負荷の定量的分析" },
      { en: "Psychophysical threshold estimations", jp: "心理物理学的手法による感覚閾値の測定" }
    ]
  },
  {
    id: "human-interface",
    title: {
      en: "Human Interface Systems",
      jp: "ヒューマンインタフェースシステム"
    },
    description: {
      en: "Designing intuitive communication channels between humans and machines using gaze, EEG, and sensory signals.",
      jp: "視線追跡、脳波、各種生体制御信号を用いた、人間とコンピューター間の直感的伝達システムの創出。"
    },
    iconName: "Monitor",
    details: [
      { en: "Gaze-controlled tracking keyboard integrations", jp: "視線追跡を用いたコミュニケーションデバイス開発" },
      { en: "Brain-Computer Interfaces (BCI) for motor support", jp: "運動・生活支援向けブレイン・コンピューター・インターフェイス" },
      { en: "Virtual reality feedback optimization", jp: "VR環境における運動感覚フィードバックの最適化" }
    ]
  },
  {
    id: "electrophysiology",
    title: {
      en: "Electrophysiology",
      jp: "電気生理学"
    },
    description: {
      en: "Measuring and decoding electrical activity of the eye (EOG), muscles (EMG), and brain (EEG) to understand neural mechanisms.",
      jp: "眼電図 (EOG)、筋電図 (EMG)、脳電図 (EEG) 等の微小な生体電気活動を計測し、神経系動作を解読。"
    },
    iconName: "Zap",
    details: [
      { en: "Electroretinography (ERG) & sub-visual sensory feeds", jp: "網膜電図を用いた視細胞感度の評価" },
      { en: "Ocular motor dynamics and nystagmus analysis", jp: "眼球運動ダイナミクスと不随意微動の解析" },
      { en: "High-density surface muscular signaling map", jp: "高密度表面電極による微細な手の動作識別" }
    ]
  },
  {
    id: "healthcare-tech",
    title: {
      en: "Healthcare Technology",
      jp: "ヘルスケア技術"
    },
    description: {
      en: "Developing non-invasive, wearable sensor systems for rehabilitation guidance and long-term health monitoring.",
      jp: "リハビリ誘導訓練や家庭でのヘルスケア状態監視の為の、非侵襲的で安心なウェアラブルセンサーシステム。"
    },
    iconName: "HeartHandshake",
    details: [
      { en: "Wearable devices with embedded acceleration sensors", jp: "加速度＆ジャイロを用いた転倒検知、姿勢追従デバイス" },
      { en: "Daily continuous ocular health tracker", jp: "瞳孔応答を利用した自律神経系の日常チェック技術" },
      { en: "Haptic guidance for orientation aids", jp: "触覚インパルスを用いた歩行および空間認知アシスト" }
    ]
  },
  {
    id: "human-sensory",
    title: {
      en: "Human Sensory Analysis",
      jp: "人間感覚計測・解析"
    },
    description: {
      en: "Quantitative measurement and modeling of auditory, tactile, and visual responses under environmental stressors.",
      jp: "環境負荷、騒音、温度等の刺激下における視覚・聴覚・触覚情報の統合メカニズムに焦点を当てた定量解析。"
    },
    iconName: "Search",
    details: [
      { en: "Cross-modal interaction and sensory illusions", jp: "視覚・聴覚などのクロスモーダルな感覚相互作用" },
      { en: "Quantitative analysis of tactile textures", jp: "微細振動素子を用いた触感・質感表現技術の確立" },
      { en: "Objective measuring of environmental comfort scales", jp: "自律神経指標に基づいた製品使用快適性の数値化" }
    ]
  },
  {
    id: "motor-function",
    title: {
      en: "Motor Function Analysis",
      jp: "運動機能解析"
    },
    description: {
      en: "Analyzing human gait, fine motor control, and movement coordination to assist visual deficits and aging populations.",
      jp: "高齢者や感覚機能低下者のサポートのため、歩行パターンや手指の微細運動コーディネーションを力学解析。"
    },
    iconName: "Footprints",
    details: [
      { en: "Dynamic visual-field loss gait analysis", jp: "視野欠損が歩行パターンと姿勢安定性に与える影響計測" },
      { en: "Tremor suppression algorithms for smart controls", jp: "手振れ震え成分のインテリジェントノイズ除去" },
      { en: "Musculoskeletal loads modeling during operation", jp: "スマート車椅子等の操作時における骨格負荷シミュレート" }
    ]
  },
  {
    id: "human-centered-ai",
    title: {
      en: "Human-Centered AI Systems",
      jp: "人間中心のAIシステム"
    },
    description: {
      en: "Creating intelligent algorithms that adapt in real-time based on the physiological state, cognitive load, and fatigue of the user.",
      jp: "単なる自立稼働ではなく、オペレーターの脳血流、心拍数、心理的負荷を把握して優しく寄り添うAI制御システム。"
    },
    iconName: "Cpu",
    details: [
      { en: "State adaptive automated assistant controls", jp: "操縦者の緊張度合いに応じた運転アシストAIの介入最適化" },
      { en: "Machine learning for automated oculomotor pathology", jp: "機械学習を用いた眼球異常運動パターンのスクリーニング" },
      { en: "Cognitive exhaustion early-warning algorithms", jp: "注意障害、傾眠、集中力低下の兆候を検出するAIモデル" }
    ]
  }
];

export const PUBLICATIONS_DATA: Publication[] = [
  {
    id: "pub-1",
    title: {
      en: "A sensory compensation system using electrotactile pattern feedback for assistive navigation",
      jp: "触覚刺激パターンフィードバックを活用した感覚補償型歩行誘導アシストシステムの構築"
    },
    authors: {
      en: "T. Takezaki, T. Hayami, J. Wakamatsu",
      jp: "竹崎太郎, 速水武人, 若松純一"
    },
    journal: {
      en: "IEEE Transactions on Neural Systems and Rehabilitation Engineering, Vol. 32, pp. 112-121",
      jp: "IEEE 医工学・リハビリテーション分野国際学術誌"
    },
    year: 2024,
    category: "biomedical",
    doi: "10.1109/TNSRE.2024.331204",
    url: "#"
  },
  {
    id: "pub-2",
    title: {
      en: "Quantitative evaluation of visual search strategies in ophthalmic sensory deficits through high-speed micro-gaze tracking",
      jp: "超高速視線トラッキングを用いた視野欠損患者の探索戦略・注視挙動の定量的評価"
    },
    authors: {
      en: "T. Hayami, M. Kitakyu",
      jp: "速水武人, 北九州真一"
    },
    journal: {
      en: "International Journal of Ophthalmology & Assistive Engineering, Vol. 15, No. 3, pp. 245-254",
      jp: "眼科応用工学国際ジャーナル"
    },
    year: 2023,
    category: "ophthalmology",
    doi: "10.1016/j.ijoae.2023.05.004",
    url: "#"
  },
  {
    id: "pub-3",
    title: {
      en: "EEG motor imagery decoding using spatio-temporal deep-learning networks for upper limb exoskeleton controls",
      jp: "上肢外骨格制御に向けた時空間ディープラーニングによる脳波運動意図（イメージ）の推定"
    },
    authors: {
      en: "K. Hibikino, T. Hayami",
      jp: "響野健太, 速水武人"
    },
    journal: {
      en: "Journal of Human Interface and Ergonomics Society, Vol. 28, No. 1, pp. 45-56",
      jp: "ヒューマンインタフェース・人間工学研究会誌"
    },
    year: 2023,
    category: "interface",
    url: "#"
  },
  {
    id: "pub-4",
    title: {
      en: "Development of non-contact infrared pupillometry for continuous autonomic stress estimation under auditory tasks",
      jp: "聴覚負荷実験における自律神経ストレス連続推定に向けた非接触赤外線瞳孔測定装置の開発"
    },
    authors: {
      en: "T. Hayami",
      jp: "速水武人"
    },
    journal: {
      en: "Japanese Journal of Medical Electronics and Biological Engineering, Vol. 61, No. 4, pp. 182-191",
      jp: "生体医工学（日本生体医工学会誌）"
    },
    year: 2022,
    category: "psychophysiology",
    doi: "10.11239/jsmbe.61.182",
    url: "#"
  },
  {
    id: "pub-5",
    title: {
      en: "A postural stability assistant using inertial measurement socks and localized vibrotactile feedback prompts",
      jp: "靴下型慣性計測センサーと局所振動プロンプトを組み合わせた歩行安定性支援ウェルビーイング技術"
    },
    authors: {
      en: "A. Kokura, T. Hayami",
      jp: "小倉明子, 速水武人"
    },
    journal: {
      en: "Sensors and Actuators A: Physical, Vol. 339, Art. 113426",
      jp: "センサー・アクチュエーター物理紀要"
    },
    year: 2022,
    category: "medical-tech",
    doi: "10.1016/j.sna.2022.113426",
    url: "#"
  },
  {
    id: "pub-6",
    title: {
       en: "Binaural sound spatialization patterns and tactile coordinate maps for sensory substitution in visual field limitations",
       jp: "視野制限下における感覚代替のためのバイノーラル音声空間移動パターンと触覚座標マップの相互作用"
    },
    authors: {
      en: "T. Hayami, J. Wakamatsu, S. Moji",
      jp: "速水武人, 若松純一, 門司誠"
    },
    journal: {
      en: "IEEE Industry Applications & Sensory Interaction Forum, pp. 98-105",
      jp: "IEEE 産業応用・感覚インタラクション集録"
    },
    year: 2021,
    category: "interface",
    url: "#"
  },
  {
     id: "pub-7",
     title: {
        en: "Analysis of pupil dilation oscillations for early stage fatigue alarm during night driving simulations",
        jp: "夜間模擬運転時における早期疲労警告に向けた瞳孔動揺周波数（瞳孔揺らぎ）スペクトル解析"
     },
     authors: {
       en: "S. Orio, T. Hayami",
       jp: "折尾茂, 速水武人"
     },
     journal: {
       en: "Journal of Medical Technology and Biological Physics, Vol. 48, pp. 12-21",
       jp: "医療システム＆臨床物理学会誌"
     },
     year: 2021,
     category: "psychophysiology",
     url: "#"
  },
  {
     id: "pub-8",
     title: {
        en: "Wearable electronic glasses with adaptive edge contrast amplification for patients with central vision loss",
        jp: "中心暗点視野欠損患者のためのアダプティブ・エッジコントラスト強調回路搭載ウェアラブル電子メガネ開発"
     },
     authors: {
       en: "T. Hayami, G. Tobata",
       jp: "速水武人, 戸畑五郎"
     },
     journal: {
       en: "IEEE Transactions on Rehabilitative Engineering and sensory replacement, Vol. 29, pp. 602-611",
       jp: "IEEE リハビリテーション神経工学・感覚支援トランザクション"
     },
     year: 2020,
     category: "ophthalmology",
     doi: "10.1109/TRES.2020.1294811",
     url: "#"
  }
];

export const STATS_DATA: StatItem[] = [
  {
    id: "stat-years",
    value: 20,
    suffix: "+",
    title: {
      en: "Years Active Research",
      jp: "最先端研究活動歴"
    }
  },
  {
    id: "stat-papers",
    value: 80,
    suffix: "+",
    title: {
      en: "Academic Publications",
      jp: "査読付き学術公表論文"
    }
  },
  {
    id: "stat-collaborations",
    value: 12,
    suffix: "",
    title: {
      en: "Global Partnerships",
      jp: "国際共同プロジェクト数"
    }
  },
  {
    id: "stat-projects",
    value: 45,
    suffix: "+",
    title: {
      en: "Advanced Medical Patents / Projects",
      jp: "医療工学応用特許・開発品"
    }
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: "gal-1",
    title: {
      en: "Ocular & Gaze Measurement Lab",
      jp: "眼球・視線動作計測ステーション"
    },
    category: "lab",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    description: {
      en: "Active setups featuring ultra-high speed eye tracking cameras and digital pupil sensors to map sensory stimuli.",
      jp: "視覚・聴覚刺激下における瞳孔の不随意運動とフォーカス状態を、非接触で追尾計測する機器ブース。"
    }
  },
  {
    id: "gal-2",
    title: {
      en: "Wearable Physiological Prototyping",
      jp: "ウェアラブル生理センサープロトタイプ"
    },
    category: "equipment",
    imageUrl: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&q=80&w=800",
    description: {
      en: "Development of custom accelerometers and conductive fabric bands for long-term health monitoring and rehabilitation guidance.",
      jp: "歩行時や特定動作時の骨格負荷、重心、生理反応を測定して評価する、肌に優しいパッシブ型ウェアラブルモジュール。"
    }
  },
  {
    id: "gal-3",
    title: {
      en: "Multisensory EEG Experiments",
      jp: "他感覚モダリティEEG研究実験"
    },
    category: "research",
    imageUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800",
    description: {
      en: "Subject evaluating auditory cognitive tasks while high density EEG records cortical stress indicators.",
      jp: "複雑なターゲット追跡ゲームや聴覚ノイズに接した被験者の、リアルタイム脳波ポテンシャル分布を解析する風景。"
    }
  },
  {
    id: "gal-4",
    title: {
      en: "Department Design Studio",
      jp: "情報システム工学スタジオ"
    },
    category: "campus",
    imageUrl: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&q=80&w=800",
    description: {
      en: "Where engineering computations, mathematical modeling, and AI algorithm designs are integrated.",
      jp: "大学院生や卒研生が、PythonやMATLAB等を用いて生体物理シミュレーションをコーディング、分析する環境。"
    }
  },
  {
    id: "gal-5",
    title: {
      en: "Vibrotactile Coordinate Actuators",
      jp: "微細電気触覚・振動刺激アレイ"
    },
    category: "equipment",
    imageUrl: "https://images.unsplash.com/photo-1532187863486-abf9d39d66e8?auto=format&fit=crop&q=80&w=800",
    description: {
      en: "Actuator array used to generate spatial texture illusions for navigation sensory compensation.",
      jp: "視覚に頼らず、微小な電気触刺激パターンを背中や指先に提供し、障害物との安全距離を警告する電子ボード。"
    }
  },
  {
    id: "gal-6",
    title: {
      en: "Kitakyushu Hibikino Campus",
      jp: "ひびきのキャンパスの景観"
    },
    category: "campus",
    imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800",
    description: {
      en: "The beautiful, eco-friendly research environment of the Faculty of Environmental Engineering in Kitakyushu.",
      jp: "北九州市若松区に位置し、学術研究機関が多角的にコラボレートする最新鋭のひびきの研究学術都市キャンパス。"
    }
  }
];

export const VISION_TEXTS = {
  missionTitle: {
    en: "Bridging Human Behavior & Digital Intelligence",
    jp: "人間の本質とデジタル知能の懸け橋となる"
  },
  missionBody: {
    en: "Our primary objective is to investigate the complex mechanisms of human sensory capabilities and develop sophisticated assistive interfaces. By merging custom electromechanical medical-grade biosensors with modern deep neural networks, we pioneer non-invasive, human-centered systems destined for global healthcare, mobility aids, and sensory rehabilitation.",
    jp: "私たちは、人間に備わった精巧な感覚受容器や筋肉制御の限界と特性を深く突き止め、全く新しいアシストシステムを作り出します。医療用ウェアラブル機器と先端AIアルゴリズムを一体化させることで、高齢者や障害を抱える方々が安全・自立的に暮らせるユニバーサル社会を目指します。"
  },
  visionQuote: {
    en: "Our mission is to bridge engineering and healthcare by developing intelligent systems that understand human sensory and motor behavior.",
    jp: "工学と医療を融合し、人間の感覚・運動行動を理解する知能システムの研究を推進します。"
  }
};

export const CONTACT_INFO = {
  address: {
    en: "The University of Kitakyushu, Faculty of Environmental Engineering, Department of Information Systems Engineering\n1-1 Hibikino, Wakamatsu-ku, Kitakyushu, Fukuoka, 808-0135, Japan",
    jp: "北九州市立大学 国際環境工学部 情報システム工学科 速水 武人 研究室\n〒808-0135 福岡県北九州市若松区ひびきの1-1 N棟"
  },
  professor: {
    en: "Professor Takehito Hayami",
    jp: "速水 武人 教授"
  },
  email: "hayami-t@kitakyu-u.ac.jp",
  office: {
    en: "Room N-405, Hibikino Campus",
    jp: "ひびきのキャンパス N棟 405号室"
  }
};
