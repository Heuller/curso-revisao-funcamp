import type { ModuleQuizQuestion } from './types';
import { moduleQuizzesPart1 } from './part1';
import { moduleQuizzesPart2 } from './part2';
import { moduleQuizzesPart3 } from './part3';

export * from './types';

export const allModuleQuestions: ModuleQuizQuestion[] = [
  ...moduleQuizzesPart1,
  ...moduleQuizzesPart2,
  ...moduleQuizzesPart3
];

export const MODULE_QUIZZES: Record<string, ModuleQuizQuestion[]> = allModuleQuestions.reduce((acc, q) => {
  if (!acc[q.moduleId]) {
    acc[q.moduleId] = [];
  }
  acc[q.moduleId].push(q);
  return acc;
}, {} as Record<string, ModuleQuizQuestion[]>);

export function getQuizForModule(moduleId: string): ModuleQuizQuestion[] {
  return MODULE_QUIZZES[moduleId] || [];
}
