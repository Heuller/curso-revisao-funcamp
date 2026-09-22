export interface ModuleCategory {
  id: string;
  category: 'organizacao' | 'gestao' | 'tecnologia';
  categoryLabel: string;
  categoryColor: string;
  badgeBg: string;
  badgeText: string;
  estimatedMinutes: number;
}

export const MODULE_CATEGORIES: Record<string, ModuleCategory> = {
  m01: { id: 'm01', category: 'tecnologia', categoryLabel: 'Tecnologia & Acesso', categoryColor: 'emerald', badgeBg: 'bg-emerald-50 border-emerald-200', badgeText: 'text-emerald-700', estimatedMinutes: 10 },
  m02: { id: 'm02', category: 'gestao', categoryLabel: 'Gestão & Políticas', categoryColor: 'blue', badgeBg: 'bg-blue-50 border-blue-200', badgeText: 'text-blue-700', estimatedMinutes: 12 },
  m03: { id: 'm03', category: 'gestao', categoryLabel: 'Gestão & Políticas', categoryColor: 'blue', badgeBg: 'bg-blue-50 border-blue-200', badgeText: 'text-blue-700', estimatedMinutes: 10 },
  m04: { id: 'm04', category: 'gestao', categoryLabel: 'Gestão & Políticas', categoryColor: 'blue', badgeBg: 'bg-blue-50 border-blue-200', badgeText: 'text-blue-700', estimatedMinutes: 11 },
  m05: { id: 'm05', category: 'gestao', categoryLabel: 'Gestão & Políticas', categoryColor: 'blue', badgeBg: 'bg-blue-50 border-blue-200', badgeText: 'text-blue-700', estimatedMinutes: 11 },
  m06: { id: 'm06', category: 'gestao', categoryLabel: 'Gestão & Políticas', categoryColor: 'blue', badgeBg: 'bg-blue-50 border-blue-200', badgeText: 'text-blue-700', estimatedMinutes: 10 },
  m07: { id: 'm07', category: 'organizacao', categoryLabel: 'Organização & Metadados', categoryColor: 'indigo', badgeBg: 'bg-indigo-50 border-indigo-200', badgeText: 'text-indigo-700', estimatedMinutes: 15 },
  m08: { id: 'm08', category: 'organizacao', categoryLabel: 'Organização & Metadados', categoryColor: 'indigo', badgeBg: 'bg-indigo-50 border-indigo-200', badgeText: 'text-indigo-700', estimatedMinutes: 16 },
  m09: { id: 'm09', category: 'organizacao', categoryLabel: 'Organização & Metadados', categoryColor: 'indigo', badgeBg: 'bg-indigo-50 border-indigo-200', badgeText: 'text-indigo-700', estimatedMinutes: 16 },
  m10: { id: 'm10', category: 'organizacao', categoryLabel: 'Organização & Metadados', categoryColor: 'indigo', badgeBg: 'bg-indigo-50 border-indigo-200', badgeText: 'text-indigo-700', estimatedMinutes: 10 },
  m11: { id: 'm11', category: 'organizacao', categoryLabel: 'Organização & Metadados', categoryColor: 'indigo', badgeBg: 'bg-indigo-50 border-indigo-200', badgeText: 'text-indigo-700', estimatedMinutes: 11 },
  m12: { id: 'm12', category: 'organizacao', categoryLabel: 'Organização & Metadados', categoryColor: 'indigo', badgeBg: 'bg-indigo-50 border-indigo-200', badgeText: 'text-indigo-700', estimatedMinutes: 11 },
  m13: { id: 'm13', category: 'organizacao', categoryLabel: 'Organização & Metadados', categoryColor: 'indigo', badgeBg: 'bg-indigo-50 border-indigo-200', badgeText: 'text-indigo-700', estimatedMinutes: 12 },
  m14: { id: 'm14', category: 'organizacao', categoryLabel: 'Organização & Metadados', categoryColor: 'indigo', badgeBg: 'bg-indigo-50 border-indigo-200', badgeText: 'text-indigo-700', estimatedMinutes: 11 },
  m15: { id: 'm15', category: 'tecnologia', categoryLabel: 'Tecnologia & Acesso', categoryColor: 'emerald', badgeBg: 'bg-emerald-50 border-emerald-200', badgeText: 'text-emerald-700', estimatedMinutes: 11 },
  m16: { id: 'm16', category: 'tecnologia', categoryLabel: 'Tecnologia & Acesso', categoryColor: 'emerald', badgeBg: 'bg-emerald-50 border-emerald-200', badgeText: 'text-emerald-700', estimatedMinutes: 11 },
  m17: { id: 'm17', category: 'tecnologia', categoryLabel: 'Tecnologia & Acesso', categoryColor: 'emerald', badgeBg: 'bg-emerald-50 border-emerald-200', badgeText: 'text-emerald-700', estimatedMinutes: 12 },
  m18: { id: 'm18', category: 'tecnologia', categoryLabel: 'Tecnologia & Acesso', categoryColor: 'emerald', badgeBg: 'bg-emerald-50 border-emerald-200', badgeText: 'text-emerald-700', estimatedMinutes: 10 },
  m19: { id: 'm19', category: 'organizacao', categoryLabel: 'Organização & Metadados', categoryColor: 'indigo', badgeBg: 'bg-indigo-50 border-indigo-200', badgeText: 'text-indigo-700', estimatedMinutes: 15 },
  m20: { id: 'm20', category: 'organizacao', categoryLabel: 'Organização & Metadados', categoryColor: 'indigo', badgeBg: 'bg-indigo-50 border-indigo-200', badgeText: 'text-indigo-700', estimatedMinutes: 15 },
  m21: { id: 'm21', category: 'gestao', categoryLabel: 'Gestão & Políticas', categoryColor: 'blue', badgeBg: 'bg-blue-50 border-blue-200', badgeText: 'text-blue-700', estimatedMinutes: 12 },
  m22: { id: 'm22', category: 'gestao', categoryLabel: 'Gestão & Políticas', categoryColor: 'blue', badgeBg: 'bg-blue-50 border-blue-200', badgeText: 'text-blue-700', estimatedMinutes: 12 },
  m23: { id: 'm23', category: 'gestao', categoryLabel: 'Gestão & Políticas', categoryColor: 'blue', badgeBg: 'bg-blue-50 border-blue-200', badgeText: 'text-blue-700', estimatedMinutes: 10 },
};

export const CATEGORY_FILTERS = [
  { key: 'all', label: 'Todos os Módulos' },
  { key: 'organizacao', label: 'Organização & Metadados' },
  { key: 'gestao', label: 'Gestão & Normas' },
  { key: 'tecnologia', label: 'Tecnologia & SBU' },
] as const;
