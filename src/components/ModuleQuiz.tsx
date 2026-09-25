import React, { useState, useEffect, useMemo } from 'react';
import { getQuizForModule } from '../data/moduleQuizzes';
import { 
  CheckCircle2, XCircle, HelpCircle, RotateCcw, 
  Award, Sparkles, BookOpen, Check
} from 'lucide-react';

interface ModuleQuizProps {
  moduleId: string;
  moduleTitle: string;
}

export const ModuleQuiz: React.FC<ModuleQuizProps> = ({ moduleId, moduleTitle }) => {
  const questions = useMemo(() => getQuizForModule(moduleId), [moduleId]);
  const storageKey = `funcamp_module_quiz_v3_${moduleId}`;

  // State: Record of questionId -> selectedOption ('A' | 'B' | 'C' | 'D' | 'E')
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Save to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(userAnswers));
    } catch (e) {
      console.error('Failed to save quiz state', e);
    }
  }, [userAnswers, storageKey]);

  const handleSelectOption = (questionId: string, optionKey: string) => {
    // If already answered, allow re-selection or keep locked?
    // Let's allow answering if not yet answered, or click to switch if desired,
    // but showing immediate feedback once chosen:
    setUserAnswers(prev => ({
      ...prev,
      [questionId]: optionKey
    }));
  };

  const handleResetQuiz = () => {
    if (window.confirm('Deseja reiniciar o simulado deste tópico para refazer as questões?')) {
      setUserAnswers({});
      localStorage.removeItem(storageKey);
    }
  };

  // Score metrics
  const totalQuestions = questions.length;
  const answeredCount = Object.keys(userAnswers).length;
  const correctCount = questions.reduce((acc, q) => {
    return acc + (userAnswers[q.id] === q.correctAnswer ? 1 : 0);
  }, 0);
  const percentage = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;
  const isAllAnswered = answeredCount === totalQuestions && totalQuestions > 0;

  if (questions.length === 0) {
    return null;
  }

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden mt-8 transition-all">
      {/* Top Banner Header */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white p-6 sm:p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <Award className="w-48 h-48 text-indigo-400" />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-indigo-300">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Simulado de Fixação do Tópico</span>
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
              <span>5 Questões Inéditas</span>
            </div>
            
            <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white">
              Teste seus Conhecimentos em {moduleTitle.replace(/^\d+\.\s/, '')}
            </h2>
            
            <p className="text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
              Questões de alto nível elaboradas com base na literatura canônica e no raio-x das provas reais 
              de concurso. Responda para fixar a doutrina e memorizar as pegadinhas da banca.
            </p>
          </div>

          {/* Score Counter / Badges */}
          <div className="shrink-0 flex items-center gap-3">
            <div className="bg-white/10 backdrop-blur-md border border-white/15 px-4 py-3 rounded-2xl flex flex-col items-center justify-center min-w-[120px]">
              <span className="text-[10px] uppercase font-bold text-slate-300 tracking-wider">
                Desempenho
              </span>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="text-2xl font-black text-white">{correctCount}</span>
                <span className="text-xs text-slate-300">/ {totalQuestions}</span>
                <span className={`text-xs font-bold ml-1 ${percentage >= 70 ? 'text-emerald-400' : 'text-amber-300'}`}>
                  ({percentage}%)
                </span>
              </div>
            </div>

            {answeredCount > 0 && (
              <button
                onClick={handleResetQuiz}
                title="Reiniciar simulado deste módulo"
                className="p-3 bg-white/10 hover:bg-white/20 border border-white/15 rounded-2xl text-slate-200 hover:text-white transition-all flex items-center justify-center"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Progress Dots Indicator */}
        <div className="mt-6 pt-5 border-t border-white/10 flex items-center gap-2">
          {questions.map((q, idx) => {
            const answered = userAnswers[q.id];
            const isRight = answered === q.correctAnswer;
            let statusColor = 'bg-white/20 border-white/20';
            if (answered) {
              statusColor = isRight ? 'bg-emerald-500 border-emerald-400 text-white' : 'bg-rose-500 border-rose-400 text-white';
            }
            return (
              <div 
                key={q.id}
                className={`flex-1 h-2 rounded-full border transition-all ${statusColor}`}
                title={`Questão ${idx + 1}: ${answered ? (isRight ? 'Correta' : 'Incorreta') : 'Pendente'}`}
              />
            );
          })}
        </div>
      </div>

      {/* Completion Trophy Card */}
      {isAllAnswered && (
        <div className={`p-5 mx-6 sm:mx-8 mt-6 rounded-2xl border flex items-center gap-4 ${
          percentage >= 80 
            ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
            : percentage >= 60
            ? 'bg-indigo-50 border-indigo-200 text-indigo-950'
            : 'bg-amber-50 border-amber-200 text-amber-950'
        }`}>
          <div className={`p-3 rounded-xl shrink-0 ${
            percentage >= 80 ? 'bg-emerald-200 text-emerald-800' : 'bg-indigo-200 text-indigo-800'
          }`}>
            <Award className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h4 className="font-extrabold text-sm sm:text-base">
              {percentage >= 80 
                ? 'Excelente aproveitamento! Domínio pleno da disciplina!' 
                : percentage >= 60 
                ? 'Bom resultado! Revise os gabaritos para lapidar os detalhes finos.'
                : 'Vale a pena reler a teoria e refazer o simulado para consolidar a fixação!'}
            </h4>
            <p className="text-xs mt-0.5 opacity-85">
              Você acertou {correctCount} de {totalQuestions} questões ({percentage}%).
            </p>
          </div>
          <button
            onClick={handleResetQuiz}
            className="px-4 py-2 bg-white text-slate-800 border border-slate-200 hover:bg-slate-50 rounded-xl text-xs font-bold transition-all shadow-xs shrink-0 flex items-center gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Refazer
          </button>
        </div>
      )}

      {/* Questions List */}
      <div className="p-6 sm:p-8 space-y-10 divide-y divide-slate-100">
        {questions.map((q, index) => {
          const selectedAnswer = userAnswers[q.id];
          const isAnswered = selectedAnswer !== undefined;
          const isCorrect = isAnswered && selectedAnswer === q.correctAnswer;

          return (
            <div key={q.id} className={`${index > 0 ? 'pt-8' : ''} space-y-4`}>
              
              {/* Question Header & Badge */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-200 font-mono font-black text-xs flex items-center justify-center">
                    {index + 1}
                  </span>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Questão {index + 1} de {totalQuestions}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-md border border-slate-200">
                    {q.reference}
                  </span>
                  {isAnswered && (
                    <span className={`flex items-center gap-1 text-xs font-extrabold px-2.5 py-0.5 rounded-full ${
                      isCorrect 
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-200' 
                        : 'bg-rose-100 text-rose-800 border border-rose-200'
                    }`}>
                      {isCorrect ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          Correta
                        </>
                      ) : (
                        <>
                          <XCircle className="w-3.5 h-3.5 text-rose-600" />
                          Incorreta
                        </>
                      )}
                    </span>
                  )}
                </div>
              </div>

              {/* Question Text */}
              <p className="text-slate-900 font-bold text-sm sm:text-base leading-relaxed">
                {q.text}
              </p>

              {/* Options */}
              <div className="space-y-2.5 pt-1">
                {(Object.entries(q.options) as [string, string][]).map(([key, optText]) => {
                  const isSelected = selectedAnswer === key;
                  const isThisCorrect = key === q.correctAnswer;

                  let optionStyle = 'border-slate-200 bg-white text-slate-800 hover:border-indigo-300 hover:bg-slate-50/70';
                  let keyBadgeStyle = 'bg-slate-100 text-slate-700 border-slate-200';

                  if (isAnswered) {
                    if (isThisCorrect) {
                      // Correct option always highlighted green
                      optionStyle = 'border-emerald-300 bg-emerald-50/70 text-emerald-950 font-semibold ring-1 ring-emerald-400';
                      keyBadgeStyle = 'bg-emerald-600 text-white border-emerald-600';
                    } else if (isSelected && !isThisCorrect) {
                      // User selected wrong option
                      optionStyle = 'border-rose-300 bg-rose-50 text-rose-950 font-medium ring-1 ring-rose-300';
                      keyBadgeStyle = 'bg-rose-600 text-white border-rose-600';
                    } else {
                      // Other unselected options
                      optionStyle = 'border-slate-200/70 bg-slate-50/50 text-slate-600 opacity-80';
                      keyBadgeStyle = 'bg-slate-100 text-slate-500 border-slate-200';
                    }
                  } else if (isSelected) {
                    optionStyle = 'border-indigo-600 bg-indigo-50/50 text-indigo-950 ring-1 ring-indigo-500 font-medium';
                    keyBadgeStyle = 'bg-indigo-600 text-white border-indigo-600';
                  }

                  return (
                    <button
                      key={key}
                      onClick={() => handleSelectOption(q.id, key)}
                      className={`w-full text-left p-3.5 sm:p-4 rounded-2xl border transition-all flex items-start gap-3.5 group cursor-pointer ${optionStyle}`}
                    >
                      <span className={`w-7 h-7 rounded-xl font-mono font-bold text-xs flex items-center justify-center shrink-0 border transition-all ${keyBadgeStyle}`}>
                        {key}
                      </span>
                      <span className="text-xs sm:text-[13.5px] leading-relaxed flex-1 pt-0.5">
                        {optText}
                      </span>
                      {isAnswered && isThisCorrect && (
                        <Check className="w-5 h-5 text-emerald-600 shrink-0 self-center" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Commented Justification / Explanation */}
              {isAnswered && (
                <div className={`mt-4 p-4 sm:p-5 rounded-2xl border text-xs sm:text-sm leading-relaxed transition-all ${
                  isCorrect 
                    ? 'bg-emerald-50/50 border-emerald-200/90 text-emerald-950' 
                    : 'bg-slate-50 border-slate-200 text-slate-900'
                }`}>
                  <div className="flex items-center gap-2 mb-2 font-black text-xs uppercase tracking-wider text-indigo-900">
                    <BookOpen className="w-4 h-4 text-indigo-600" />
                    <span>Gabarito Comentado Oficial: Alternativa ({q.correctAnswer})</span>
                  </div>
                  <p className="text-slate-800 font-medium">
                    {q.justification}
                  </p>
                </div>
              )}

            </div>
          );
        })}
      </div>

      {/* Footer Hint */}
      <div className="bg-slate-50 p-4 sm:p-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
        <div className="flex items-center gap-2">
          <HelpCircle className="w-4 h-4 text-slate-400" />
          <span>Ficou com dúvida? Releia o tópico na aba <strong>Teoria Avançada e Doutrina</strong> acima.</span>
        </div>
        {answeredCount > 0 && (
          <button
            onClick={handleResetQuiz}
            className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors flex items-center gap-1"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Limpar e refazer respostas
          </button>
        )}
      </div>
    </div>
  );
};
