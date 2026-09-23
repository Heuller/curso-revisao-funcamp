export interface ModuleCategory {
  id: string;
  category: 'organizacao' | 'gestao' | 'tecnologia';
  categoryLabel: string;
  categoryShort: string;
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
  estimatedMinutes: number;
}

export const MODULE_CATEGORIES: Record<string, ModuleCategory> = {
  // 1. Biblioteca Digital e Repositório Institucional
  m01: { 
    id: 'm01', 
    category: 'tecnologia', 
    categoryLabel: 'Tecnologia & Repositórios', 
    categoryShort: 'Tecnologia',
    badgeBg: 'bg-emerald-50', 
    badgeText: 'text-emerald-700', 
    badgeBorder: 'border-emerald-200',
    estimatedMinutes: 10 
  },
  // 2. Preservação Digital (Estratégias e Metadados)
  m02: { 
    id: 'm02', 
    category: 'gestao', 
    categoryLabel: 'Gestão & Preservação', 
    categoryShort: 'Preservação',
    badgeBg: 'bg-amber-50', 
    badgeText: 'text-amber-800', 
    badgeBorder: 'border-amber-200',
    estimatedMinutes: 12 
  },
  // 3. Movimento de Acesso Aberto (Open Access)
  m03: { 
    id: 'm03', 
    category: 'tecnologia', 
    categoryLabel: 'Acesso Aberto & Redes', 
    categoryShort: 'Acesso Aberto',
    badgeBg: 'bg-emerald-50', 
    badgeText: 'text-emerald-700', 
    badgeBorder: 'border-emerald-200',
    estimatedMinutes: 10 
  },
  // 4. Inteligência Artificial em Bibliotecas e ChatGPT
  m04: { 
    id: 'm04', 
    category: 'tecnologia', 
    categoryLabel: 'Tecnologia & IA', 
    categoryShort: 'Inteligência Artificial',
    badgeBg: 'bg-purple-50', 
    badgeText: 'text-purple-700', 
    badgeBorder: 'border-purple-200',
    estimatedMinutes: 11 
  },
  // 5. Redes e Sistemas de Informação
  m05: { 
    id: 'm05', 
    category: 'tecnologia', 
    categoryLabel: 'Tecnologia & Redes', 
    categoryShort: 'Redes & Sistemas',
    badgeBg: 'bg-emerald-50', 
    badgeText: 'text-emerald-700', 
    badgeBorder: 'border-emerald-200',
    estimatedMinutes: 11 
  },
  // 6. Fluxos Informacionais, Comunicação Científica e Bibliometria
  m06: { 
    id: 'm06', 
    category: 'gestao', 
    categoryLabel: 'Comunicação Científica & Métrica', 
    categoryShort: 'Bibliometria',
    badgeBg: 'bg-blue-50', 
    badgeText: 'text-blue-700', 
    badgeBorder: 'border-blue-200',
    estimatedMinutes: 12 
  },
  // 7. Fontes de Informação e Bases de Dados
  m07: { 
    id: 'm07', 
    category: 'tecnologia', 
    categoryLabel: 'Fontes & Bases de Dados', 
    categoryShort: 'Bases de Dados',
    badgeBg: 'bg-emerald-50', 
    badgeText: 'text-emerald-700', 
    badgeBorder: 'border-emerald-200',
    estimatedMinutes: 14 
  },
  // 8. Recuperação da Informação (SRI) e Estratégias de Busca
  m08: { 
    id: 'm08', 
    category: 'tecnologia', 
    categoryLabel: 'Recuperação da Informação (SRI)', 
    categoryShort: 'Recuperação (SRI)',
    badgeBg: 'bg-emerald-50', 
    badgeText: 'text-emerald-700', 
    badgeBorder: 'border-emerald-200',
    estimatedMinutes: 15 
  },
  // 9. Competência Informacional (Information Literacy)
  m09: { 
    id: 'm09', 
    category: 'gestao', 
    categoryLabel: 'Mediação & Competência', 
    categoryShort: 'Competência Info',
    badgeBg: 'bg-blue-50', 
    badgeText: 'text-blue-700', 
    badgeBorder: 'border-blue-200',
    estimatedMinutes: 10 
  },
  // 10. Estudo de Usuários e Comunidades
  m10: { 
    id: 'm10', 
    category: 'gestao', 
    categoryLabel: 'Gestão & Usuários', 
    categoryShort: 'Estudo de Usuários',
    badgeBg: 'bg-blue-50', 
    badgeText: 'text-blue-700', 
    badgeBorder: 'border-blue-200',
    estimatedMinutes: 10 
  },
  // 11. Disseminação Seletiva da Informação (DSI) e Serviço de Referência
  m11: { 
    id: 'm11', 
    category: 'gestao', 
    categoryLabel: 'Serviços de Referência & DSI', 
    categoryShort: 'Referência & DSI',
    badgeBg: 'bg-blue-50', 
    badgeText: 'text-blue-700', 
    badgeBorder: 'border-blue-200',
    estimatedMinutes: 11 
  },
  // 12. Marketing de Serviços e Unidades de Informação
  m12: { 
    id: 'm12', 
    category: 'gestao', 
    categoryLabel: 'Gestão & Marketing', 
    categoryShort: 'Marketing',
    badgeBg: 'bg-blue-50', 
    badgeText: 'text-blue-700', 
    badgeBorder: 'border-blue-200',
    estimatedMinutes: 10 
  },
  // 13. Desenvolvimento de Coleções
  m13: { 
    id: 'm13', 
    category: 'gestao', 
    categoryLabel: 'Gestão de Coleções', 
    categoryShort: 'Coleções',
    badgeBg: 'bg-blue-50', 
    badgeText: 'text-blue-700', 
    badgeBorder: 'border-blue-200',
    estimatedMinutes: 12 
  },
  // 14. Representação Descritiva e Temática (Controle Bibliográfico)
  m14: { 
    id: 'm14', 
    category: 'organizacao', 
    categoryLabel: 'Organização da Informação', 
    categoryShort: 'Controle Bibliográfico',
    badgeBg: 'bg-indigo-50', 
    badgeText: 'text-indigo-700', 
    badgeBorder: 'border-indigo-200',
    estimatedMinutes: 14 
  },
  // 15. Código de Catalogação Anglo-Americano (AACR2)
  m15: { 
    id: 'm15', 
    category: 'organizacao', 
    categoryLabel: 'Catalogação & AACR2', 
    categoryShort: 'AACR2',
    badgeBg: 'bg-indigo-50', 
    badgeText: 'text-indigo-700', 
    badgeBorder: 'border-indigo-200',
    estimatedMinutes: 16 
  },
  // 16. MARC 21 (Machine-Readable Cataloging)
  m16: { 
    id: 'm16', 
    category: 'organizacao', 
    categoryLabel: 'Formatos & MARC 21', 
    categoryShort: 'MARC 21',
    badgeBg: 'bg-indigo-50', 
    badgeText: 'text-indigo-700', 
    badgeBorder: 'border-indigo-200',
    estimatedMinutes: 16 
  },
  // 17. RDA (Resource Description and Access)
  m17: { 
    id: 'm17', 
    category: 'organizacao', 
    categoryLabel: 'Catalogação Moderna & RDA', 
    categoryShort: 'RDA',
    badgeBg: 'bg-indigo-50', 
    badgeText: 'text-indigo-700', 
    badgeBorder: 'border-indigo-200',
    estimatedMinutes: 15 
  },
  // 18. Modelos Conceituais: FRBR e IFLA LRM
  m18: { 
    id: 'm18', 
    category: 'organizacao', 
    categoryLabel: 'Modelos Conceituais (FRBR/LRM)', 
    categoryShort: 'FRBR / LRM',
    badgeBg: 'bg-indigo-50', 
    badgeText: 'text-indigo-700', 
    badgeBorder: 'border-indigo-200',
    estimatedMinutes: 14 
  },
  // 19. Classificação Decimal de Dewey (CDD)
  m19: { 
    id: 'm19', 
    category: 'organizacao', 
    categoryLabel: 'Classificação Decimal de Dewey (CDD)', 
    categoryShort: 'CDD',
    badgeBg: 'bg-indigo-50', 
    badgeText: 'text-indigo-700', 
    badgeBorder: 'border-indigo-200',
    estimatedMinutes: 16 
  },
  // 20. Tecnologia de Softwares de Bibliotecas (SIGB / ILS)
  m20: { 
    id: 'm20', 
    category: 'tecnologia', 
    categoryLabel: 'Softwares & Automação (SIGB)', 
    categoryShort: 'SIGB / Automação',
    badgeBg: 'bg-emerald-50', 
    badgeText: 'text-emerald-700', 
    badgeBorder: 'border-emerald-200',
    estimatedMinutes: 12 
  },
  // 21. Indexação, Resumos e Controle Vocabular (Thesaurus)
  m21: { 
    id: 'm21', 
    category: 'organizacao', 
    categoryLabel: 'Indexação & Linguagens', 
    categoryShort: 'Indexação & Tesauros',
    badgeBg: 'bg-indigo-50', 
    badgeText: 'text-indigo-700', 
    badgeBorder: 'border-indigo-200',
    estimatedMinutes: 14 
  },
  // 22. Propriedade Intelectual e Direitos Autorais
  m22: { 
    id: 'm22', 
    category: 'gestao', 
    categoryLabel: 'Legislação & Direitos Autorais', 
    categoryShort: 'Direitos Autorais',
    badgeBg: 'bg-rose-50', 
    badgeText: 'text-rose-700', 
    badgeBorder: 'border-rose-200',
    estimatedMinutes: 12 
  },
  // 23. Editoração Científica (Fluxo Editorial e OJS)
  m23: { 
    id: 'm23', 
    category: 'gestao', 
    categoryLabel: 'Editoração Científica & OJS', 
    categoryShort: 'Editoração & OJS',
    badgeBg: 'bg-blue-50', 
    badgeText: 'text-blue-700', 
    badgeBorder: 'border-blue-200',
    estimatedMinutes: 11 
  },
};

export const CATEGORY_FILTERS = [
  { key: 'all', label: 'Todos os Módulos', count: 23 },
  { key: 'organizacao', label: 'Organização da Info', count: 7 },
  { key: 'tecnologia', label: 'Tecnologia & Redes', count: 7 },
  { key: 'gestao', label: 'Gestão & Serviços', count: 9 },
] as const;
