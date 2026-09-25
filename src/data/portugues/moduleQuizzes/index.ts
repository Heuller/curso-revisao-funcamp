import type { ModuleQuizQuestion } from './types';
import { moduleQuizzesLPPart1 } from './part1';
import { moduleQuizzesLPPart2 } from './part2';
import { moduleQuizzesLPPart3 } from './part3';

export * from './types';

export const allModuleQuestionsLP: ModuleQuizQuestion[] = [
  ...moduleQuizzesLPPart1,
  ...moduleQuizzesLPPart2,
  ...moduleQuizzesLPPart3
];

export const MODULE_QUIZZES_LP: Record<string, ModuleQuizQuestion[]> = allModuleQuestionsLP.reduce((acc, q) => {
  if (!acc[q.moduleId]) {
    acc[q.moduleId] = [];
  }
  acc[q.moduleId].push(q);
  return acc;
}, {} as Record<string, ModuleQuizQuestion[]>);

export function getQuizForModuleLP(moduleId: string): ModuleQuizQuestion[] {
  return MODULE_QUIZZES_LP[moduleId] || [];
}
