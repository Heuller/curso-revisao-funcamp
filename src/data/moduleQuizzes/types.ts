export interface ModuleQuizQuestion {
  id: string;
  moduleId: string;
  text: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
    E: string;
  };
  correctAnswer: 'A' | 'B' | 'C' | 'D' | 'E';
  justification: string;
  reference: string;
}
