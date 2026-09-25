export interface ModuleCategory {
  id: string;
  category: 'texto' | 'semantica' | 'morfossintaxe' | 'normaculta';
  categoryLabel: string;
  categoryShort: string;
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
  estimatedMinutes: number;
}

export const LP_MODULE_CATEGORIES: Record<string, ModuleCategory> = {
  // 1. Leitura e interpretação de textos
  lp01: { 
    id: 'lp01', 
    category: 'texto', 
    categoryLabel: 'Compreensão & Interpretação', 
    categoryShort: 'Interpretação',
    badgeBg: 'bg-sky-50', 
    badgeText: 'text-sky-700', 
    badgeBorder: 'border-sky-200',
    estimatedMinutes: 14 
  },
  // 2. Princípios de textualidade: coesão e coerência
  lp02: { 
    id: 'lp02', 
    category: 'texto', 
    categoryLabel: 'Textualidade: Coesão & Coerência', 
    categoryShort: 'Coesão e Coerência',
    badgeBg: 'bg-indigo-50', 
    badgeText: 'text-indigo-700', 
    badgeBorder: 'border-indigo-200',
    estimatedMinutes: 12 
  },
  // 3. Argumentação e tipos de argumentos
  lp03: { 
    id: 'lp03', 
    category: 'texto', 
    categoryLabel: 'Tipologia & Argumentação', 
    categoryShort: 'Argumentação',
    badgeBg: 'bg-purple-50', 
    badgeText: 'text-purple-700', 
    badgeBorder: 'border-purple-200',
    estimatedMinutes: 12 
  },
  // 4. Paragrafação e articulação textual
  lp04: { 
    id: 'lp04', 
    category: 'texto', 
    categoryLabel: 'Estrutura & Paragrafação', 
    categoryShort: 'Paragrafação',
    badgeBg: 'bg-blue-50', 
    badgeText: 'text-blue-700', 
    badgeBorder: 'border-blue-200',
    estimatedMinutes: 10 
  },
  // 5. Linguagem denotativa e conotativa
  lp05: { 
    id: 'lp05', 
    category: 'semantica', 
    categoryLabel: 'Semântica: Denotação & Conotação', 
    categoryShort: 'Denotação/Conotação',
    badgeBg: 'bg-emerald-50', 
    badgeText: 'text-emerald-700', 
    badgeBorder: 'border-emerald-200',
    estimatedMinutes: 10 
  },
  // 6. Figuras de Linguagem
  lp06: { 
    id: 'lp06', 
    category: 'semantica', 
    categoryLabel: 'Estilística & Figuras de Linguagem', 
    categoryShort: 'Figuras de Linguagem',
    badgeBg: 'bg-amber-50', 
    badgeText: 'text-amber-800', 
    badgeBorder: 'border-amber-200',
    estimatedMinutes: 14 
  },
  // 7. Classes de palavras (Morfologia)
  lp07: { 
    id: 'lp07', 
    category: 'morfossintaxe', 
    categoryLabel: 'Morfologia & Classes de Palavras', 
    categoryShort: 'Classes de Palavras',
    badgeBg: 'bg-violet-50', 
    badgeText: 'text-violet-700', 
    badgeBorder: 'border-violet-200',
    estimatedMinutes: 15 
  },
  // 8. Adequação vocabular, clareza e concisão
  lp08: { 
    id: 'lp08', 
    category: 'semantica', 
    categoryLabel: 'Semântica & Adequação Vocabular', 
    categoryShort: 'Adequação Vocabular',
    badgeBg: 'bg-teal-50', 
    badgeText: 'text-teal-700', 
    badgeBorder: 'border-teal-200',
    estimatedMinutes: 11 
  },
  // 9. Conjugação verbal, tempos e modos verbais
  lp09: { 
    id: 'lp09', 
    category: 'morfossintaxe', 
    categoryLabel: 'Verbos: Tempos, Modos e Vozes', 
    categoryShort: 'Conjugação Verbal',
    badgeBg: 'bg-rose-50', 
    badgeText: 'text-rose-700', 
    badgeBorder: 'border-rose-200',
    estimatedMinutes: 16 
  },
  // 10. Uso do sinal indicativo de crase
  lp10: { 
    id: 'lp10', 
    category: 'normaculta', 
    categoryLabel: 'Sintaxe & Emprego da Crase', 
    categoryShort: 'Crase',
    badgeBg: 'bg-red-50', 
    badgeText: 'text-red-700', 
    badgeBorder: 'border-red-200',
    estimatedMinutes: 13 
  },
  // 11. Concordância nominal e verbal
  lp11: { 
    id: 'lp11', 
    category: 'normaculta', 
    categoryLabel: 'Sintaxe: Concordância Nominal & Verbal', 
    categoryShort: 'Concordância',
    badgeBg: 'bg-orange-50', 
    badgeText: 'text-orange-800', 
    badgeBorder: 'border-orange-200',
    estimatedMinutes: 15 
  },
  // 12. Período simples e funções sintáticas
  lp12: { 
    id: 'lp12', 
    category: 'morfossintaxe', 
    categoryLabel: 'Sintaxe: Termos da Oração', 
    categoryShort: 'Período Simples',
    badgeBg: 'bg-indigo-50', 
    badgeText: 'text-indigo-700', 
    badgeBorder: 'border-indigo-200',
    estimatedMinutes: 15 
  },
  // 13. Período composto: coordenação e subordinação
  lp13: { 
    id: 'lp13', 
    category: 'morfossintaxe', 
    categoryLabel: 'Sintaxe: Período Composto & Conectivos', 
    categoryShort: 'Período Composto',
    badgeBg: 'bg-fuchsia-50', 
    badgeText: 'text-fuchsia-700', 
    badgeBorder: 'border-fuchsia-200',
    estimatedMinutes: 16 
  },
  // 14. Relações semânticas entre palavras: sinonímia e antonímia
  lp14: { 
    id: 'lp14', 
    category: 'semantica', 
    categoryLabel: 'Semântica: Sinonímia, Antonímia & Paronímia', 
    categoryShort: 'Relações Semânticas',
    badgeBg: 'bg-emerald-50', 
    badgeText: 'text-emerald-700', 
    badgeBorder: 'border-emerald-200',
    estimatedMinutes: 12 
  },
  // 15. Ortografia e acentuação gráfica (novo acordo ortográfico)
  lp15: { 
    id: 'lp15', 
    category: 'normaculta', 
    categoryLabel: 'Ortografia & Acentuação (Novo Acordo)', 
    categoryShort: 'Ortografia & Acentos',
    badgeBg: 'bg-cyan-50', 
    badgeText: 'text-cyan-800', 
    badgeBorder: 'border-cyan-200',
    estimatedMinutes: 14 
  },
  // 16. Emprego dos sinais de pontuação e efeitos de sentido
  lp16: { 
    id: 'lp16', 
    category: 'normaculta', 
    categoryLabel: 'Pontuação & Efeitos de Sentido', 
    categoryShort: 'Pontuação',
    badgeBg: 'bg-amber-50', 
    badgeText: 'text-amber-800', 
    badgeBorder: 'border-amber-200',
    estimatedMinutes: 13 
  },
  // 17. Variação linguística, norma padrão e situações de comunicação
  lp17: { 
    id: 'lp17', 
    category: 'texto', 
    categoryLabel: 'Sociolinguística & Norma-Padrão', 
    categoryShort: 'Variação Linguística',
    badgeBg: 'bg-stone-100', 
    badgeText: 'text-stone-800', 
    badgeBorder: 'border-stone-300',
    estimatedMinutes: 11 
  }
};

export const LP_CATEGORY_FILTERS = [
  { key: 'all', label: 'Todos os Módulos', count: 17 },
  { key: 'texto', label: 'Texto & Interpretação', count: 5 },
  { key: 'semantica', label: 'Semântica & Estilo', count: 4 },
  { key: 'morfossintaxe', label: 'Morfossintaxe', count: 4 },
  { key: 'normaculta', label: 'Norma Culta & Regras', count: 4 },
] as const;
