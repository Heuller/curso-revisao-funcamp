import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { allQuestions } from '../data/questions';
import { simuladoLPQuestions } from '../data/portugues/questions';
import type { Question } from '../data/questions';
import { MODULE_CATEGORIES } from '../data/categories';
import { LP_MODULE_CATEGORIES } from '../data/portugues/categories';
import { 
  CheckCircle2, XCircle, Clock, Award, ArrowRight, ArrowLeft, 
  RotateCcw, Bookmark, LayoutGrid, Check, 
  X, Sparkles, BookOpen, AlertCircle
} from 'lucide-react';

// Randomize array helper
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

interface SimuladoSavedState {
  questions: Question[];
  currentIndex: number;
  userAnswers: Record<string, 'A' | 'B' | 'C' | 'D' | 'E'>;
  flaggedQuestionIds: string[];
  timeLeft: number;
  isFinished: boolean;
  studyMode: boolean; // true = immediate feedback, false = real exam mode
}

function loadSimuladoSavedState(storageKey: string, defaultQuestions: Question[], defaultTime: number) {
  try {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      const parsed: SimuladoSavedState = JSON.parse(saved);
      if (parsed.questions && parsed.questions.length > 0) {
        return {
          questions: parsed.questions,
          currentIndex: parsed.currentIndex ?? 0,
          userAnswers: parsed.userAnswers ?? {},
          flaggedQuestions: new Set(parsed.flaggedQuestionIds ?? []),
          timeLeft: parsed.timeLeft ?? defaultTime,
          isFinished: parsed.isFinished ?? false,
          studyMode: parsed.studyMode ?? true
        };
      }
    }
  } catch (e) {
    console.error('Error restoring simulado from localStorage', e);
  }

  return {
    questions: shuffleArray(defaultQuestions),
    currentIndex: 0,
    userAnswers: {} as Record<string, 'A'|'B'|'C'|'D'|'E'>,
    flaggedQuestions: new Set<string>(),
    timeLeft: defaultTime,
    isFinished: false,
    studyMode: true
  };
}

export interface SimuladoProps {
  discipline?: 'biblioteconomia' | 'portugues';
}

export default function Simulado({ discipline = 'biblioteconomia' }: SimuladoProps) {
  const isPortuguese = discipline === 'portugues';
  const baseQuestions = useMemo(() => isPortuguese ? simuladoLPQuestions : allQuestions, [isPortuguese]);
  const activeStorageKey = isPortuguese ? 'funcamp_simulado_portugues_v3' : 'funcamp_simulado_v3';
  const initialTime = isPortuguese ? 60 * 60 : 100 * 60; // 60 min for 40 questions, 100 min for 100 questions

  const [initialData] = useState(() => loadSimuladoSavedState(activeStorageKey, baseQuestions, initialTime));

  const [questions, setQuestions] = useState<Question[]>(initialData.questions);
  const [currentIndex, setCurrentIndex] = useState(initialData.currentIndex);
  const [userAnswers, setUserAnswers] = useState<Record<string, 'A'|'B'|'C'|'D'|'E'>>(initialData.userAnswers);
  const [flaggedQuestions, setFlaggedQuestions] = useState<Set<string>>(initialData.flaggedQuestions);
  const [isFinished, setIsFinished] = useState(initialData.isFinished);
  const [timeLeft, setTimeLeft] = useState(initialData.timeLeft);
  const [studyMode, setStudyMode] = useState(initialData.studyMode); // true = show immediate teacher feedback
  const [showGridDrawer, setShowGridDrawer] = useState(false);
  const [showConfirmFinishModal, setShowConfirmFinishModal] = useState(false);
  
  // Review filter after finished
  const [reviewFilter, setReviewFilter] = useState<'all' | 'wrong' | 'correct' | 'flagged'>('all');

  // Save to localStorage on state changes
  useEffect(() => {
    if (questions.length === 0) return;
    try {
      const stateToSave: SimuladoSavedState = {
        questions,
        currentIndex,
        userAnswers,
        flaggedQuestionIds: Array.from(flaggedQuestions),
        timeLeft,
        isFinished,
        studyMode
      };
      localStorage.setItem(activeStorageKey, JSON.stringify(stateToSave));
    } catch (e) {
      console.error('Error saving simulado state', e);
    }
  }, [questions, currentIndex, userAnswers, flaggedQuestions, timeLeft, isFinished, studyMode, activeStorageKey]);

  // Countdown Timer
  useEffect(() => {
    if (isFinished || questions.length === 0) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsFinished(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isFinished, questions.length]);

  const currentQ = questions[currentIndex];

  const handleSelectOption = (option: 'A'|'B'|'C'|'D'|'E') => {
    if (!currentQ || isFinished) return;
    setUserAnswers(prev => ({
      ...prev,
      [currentQ.id]: option
    }));
  };

  const toggleFlagCurrent = () => {
    if (!currentQ) return;
    setFlaggedQuestions(prev => {
      const next = new Set(prev);
      if (next.has(currentQ.id)) {
        next.delete(currentQ.id);
      } else {
        next.add(currentQ.id);
      }
      return next;
    });
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      window.scrollTo({ top: 150, behavior: 'smooth' });
    } else {
      setShowConfirmFinishModal(true);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      window.scrollTo({ top: 150, behavior: 'smooth' });
    }
  };

  const handleRestart = () => {
    const newShuffled = shuffleArray(baseQuestions);
    setQuestions(newShuffled);
    setCurrentIndex(0);
    setUserAnswers({});
    setFlaggedQuestions(new Set());
    setIsFinished(false);
    setTimeLeft(initialTime);
    localStorage.removeItem(activeStorageKey);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Score and Performance Analytics
  const scoreStats = useMemo(() => {
    let correct = 0;
    let answered = 0;

    const areaStats: Record<string, { total: number; correct: number; label: string }> = isPortuguese ? {
      texto: { total: 0, correct: 0, label: 'Compreensão, Interpretação, Argumentação & Paragrafação' },
      semantica: { total: 0, correct: 0, label: 'Semântica, Conotação, Figuras de Linguagem & Adequação Vocabular' },
      morfossintaxe: { total: 0, correct: 0, label: 'Morfossintaxe, Classes de Palavras, Verbos & Sintaxe' },
      normaculta: { total: 0, correct: 0, label: 'Norma Culta: Crase, Concordância, Ortografia & Pontuação' },
    } : {
      organizacao: { total: 0, correct: 0, label: 'Organização da Informação & Metadados (AACR2, RDA, MARC, CDD)' },
      gestao: { total: 0, correct: 0, label: 'Gestão, Políticas, Ética & Legislação (SBU, LAI, Coleções)' },
      tecnologia: { total: 0, correct: 0, label: 'Tecnologia, Repositórios Digitais & Acesso Aberto (DSpace, OAI-PMH)' },
    };

    questions.forEach(q => {
      const selected = userAnswers[q.id];
      const isAns = selected !== undefined;
      const isRight = selected === q.correctAnswer;
      
      if (isAns) answered++;
      if (isRight) correct++;

      const categoryKey = isPortuguese
        ? (LP_MODULE_CATEGORIES[q.moduleId]?.category || 'texto')
        : (MODULE_CATEGORIES[q.moduleId]?.category || 'organizacao');

      if (areaStats[categoryKey]) {
        areaStats[categoryKey].total++;
        if (isRight) areaStats[categoryKey].correct++;
      }
    });

    const total = questions.length;
    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;

    let tierLabel = 'Abaixo do Ponto de Corte';
    let tierColor = 'text-rose-600';
    let tierBadge = 'bg-rose-100 text-rose-800 border-rose-200';
    let advice = isPortuguese
      ? 'É recomendável retomar a Trilha Teórica nos módulos de Crase, Concordância, Conjunções e Pontuação, refazendo o simulado.'
      : 'É recomendável retomar a Trilha Teórica nos módulos mais cobrados (AACR2, RDA, MARC 21 e Preservação Digital) e refazer o simulado.';

    if (percentage >= 85) {
      tierLabel = 'Aprovado em Vaga Direta (Nível Excepcional)';
      tierColor = 'text-emerald-600';
      tierBadge = 'bg-emerald-100 text-emerald-800 border-emerald-200';
      advice = isPortuguese
        ? 'Parabéns! Sua precisão gramatical e discernimento textual estão no patamar dos primeiros colocados dos concursos da Unicamp.'
        : 'Parabéns! Sua precisão e velocidade cognitiva estão no nível dos primeiros colocados de concursos de bibliotecas universitárias de elite.';
    } else if (percentage >= 70) {
      tierLabel = 'Candidato Muito Competitivo (Zona de Classificação)';
      tierColor = 'text-indigo-600';
      tierBadge = 'bg-indigo-100 text-indigo-800 border-indigo-200';
      advice = 'Ótimo resultado! Você domina a base. Foque nas pegadinhas clássicas da banca nas questões que errou para garantir a vaga.';
    } else if (percentage >= 50) {
      tierLabel = 'Em Evolução (Reforço Recomendado)';
      tierColor = 'text-amber-600';
      tierBadge = 'bg-amber-100 text-amber-800 border-amber-200';
      advice = 'Você já possui noções do edital, mas caiu em alguns distratores conceituais. Revise os comentários detalhados do professor abaixo.';
    }

    return { correct, answered, total, percentage, tierLabel, tierColor, tierBadge, advice, areaStats };
  }, [questions, userAnswers, isPortuguese]);

  if (questions.length === 0 || !currentQ) {
    return (
      <div className="flex items-center justify-center p-12 text-slate-500 font-medium">
        Carregando simulado ({isPortuguese ? '40 questões' : '100 questões'})...
      </div>
    );
  }

  // Answered state for current question
  const currentSelectedAnswer = userAnswers[currentQ.id];
  const isAnswered = currentSelectedAnswer !== undefined;
  const isCurrentFlagged = flaggedQuestions.has(currentQ.id);
  const showFeedbackNow = studyMode && isAnswered;

  // Filtered questions for the Review mode
  const filteredReviewQuestions = questions.filter(q => {
    const ans = userAnswers[q.id];
    const isCorrect = ans === q.correctAnswer;
    const isFlagged = flaggedQuestions.has(q.id);

    if (reviewFilter === 'wrong') return ans !== undefined && !isCorrect;
    if (reviewFilter === 'correct') return isCorrect;
    if (reviewFilter === 'flagged') return isFlagged;
    return true;
  });

  // FINISHED SCREEN (Analytics & Full Review Mode)
  if (isFinished) {
    return (
      <div className="max-w-4xl mx-auto space-y-8 pb-16">
        {/* Results Card */}
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white p-8 sm:p-12 rounded-3xl shadow-xl border border-slate-200 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500"></div>
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-indigo-50 text-indigo-600 rounded-2xl">
                <Award className="w-10 h-10" />
              </div>
              <div>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider border ${scoreStats.tierBadge} mb-2`}>
                  {scoreStats.tierLabel}
                </span>
                <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                  Relatório de Desempenho
                </h2>
                <p className="text-slate-500 text-sm font-medium">
                  {isPortuguese 
                    ? 'Avaliação completa dos 17 tópicos de Língua Portuguesa do edital Funcamp / Unicamp' 
                    : 'Avaliação completa dos 23 tópicos específicos de Biblioteconomia do edital Funcamp / Unicamp'}
                </p>
              </div>
            </div>

            <button 
              onClick={handleRestart}
              className="flex items-center gap-2 px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold transition-all shadow-md shrink-0"
            >
              <RotateCcw className="w-4 h-4" />
              Refazer Simulado
            </button>
          </div>

          {/* Big Score Numbers */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-8">
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 text-center">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Acertos Totais</div>
              <div className="text-5xl font-black text-slate-900 tracking-tight">
                {scoreStats.correct} <span className="text-slate-400 text-2xl font-bold">/ {scoreStats.total}</span>
              </div>
              <div className="text-sm font-semibold text-slate-500 mt-2">
                {scoreStats.answered} de {scoreStats.total} respondidas
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 text-center">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Aproveitamento</div>
              <div className={`text-5xl font-black tracking-tight ${scoreStats.tierColor}`}>
                {scoreStats.percentage}%
              </div>
              <div className="w-full bg-slate-200 h-2.5 rounded-full mt-3 overflow-hidden">
                <div 
                  className={`h-full rounded-full ${scoreStats.percentage >= 70 ? 'bg-emerald-500' : 'bg-amber-500'}`}
                  style={{ width: `${scoreStats.percentage}%` }}
                ></div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 text-center">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Tempo de Prova</div>
              <div className="text-5xl font-black text-slate-900 tracking-tight font-mono">
                {formatTime(initialTime - timeLeft)}
              </div>
              <div className="text-sm font-semibold text-slate-500 mt-2">
                Tempo restante: {formatTime(timeLeft)}
              </div>
            </div>
          </div>

          {/* Teacher Recommendation Box */}
          <div className="p-6 rounded-2xl bg-indigo-50/70 border border-indigo-100 mb-8 flex items-start gap-4">
            <div className="p-2 bg-indigo-600 text-white rounded-xl shrink-0 mt-0.5">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-indigo-950 mb-1">Diagnóstico Pedagógico do Professor</h4>
              <p className="text-xs sm:text-sm text-indigo-900/80 leading-relaxed font-medium">
                {scoreStats.advice}
              </p>
            </div>
          </div>

          {/* Area Breakdown Bars */}
          <div className="space-y-4 pt-4 border-t border-slate-100">
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider">
              Desempenho por Eixo Temático
            </h3>

            <div className="space-y-3">
              {Object.entries(scoreStats.areaStats).map(([key, stat]) => {
                const perc = stat.total > 0 ? Math.round((stat.correct / stat.total) * 100) : 0;
                return (
                  <div key={key} className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <div className="flex justify-between items-center text-xs font-bold mb-1.5">
                      <span className="text-slate-800 line-clamp-1">{stat.label}</span>
                      <span className="text-slate-600 shrink-0 font-mono ml-2">
                        {stat.correct}/{stat.total} ({perc}%)
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all duration-500 ${perc >= 70 ? 'bg-emerald-500' : perc >= 50 ? 'bg-indigo-500' : 'bg-rose-500'}`}
                        style={{ width: `${perc}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </motion.div>

        {/* Detailed Question Review Section */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                Caderno de Correção Comentada
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 font-medium">
                Gabarito oficial com justificativas pedagógicas detalhadas para cada alternativa
              </p>
            </div>

            {/* Review Filter Pills */}
            <div className="flex items-center gap-1.5 bg-slate-200/70 p-1 rounded-xl self-start sm:self-auto text-xs font-bold">
              <button
                onClick={() => setReviewFilter('all')}
                className={`px-3 py-1.5 rounded-lg transition-all ${reviewFilter === 'all' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
              >
                Todas ({questions.length})
              </button>
              <button
                onClick={() => setReviewFilter('wrong')}
                className={`px-3 py-1.5 rounded-lg transition-all ${reviewFilter === 'wrong' ? 'bg-rose-500 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
              >
                Erros ({questions.length - scoreStats.correct})
              </button>
              <button
                onClick={() => setReviewFilter('correct')}
                className={`px-3 py-1.5 rounded-lg transition-all ${reviewFilter === 'correct' ? 'bg-emerald-500 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
              >
                Acertos ({scoreStats.correct})
              </button>
              {flaggedQuestions.size > 0 && (
                <button
                  onClick={() => setReviewFilter('flagged')}
                  className={`px-3 py-1.5 rounded-lg transition-all ${reviewFilter === 'flagged' ? 'bg-amber-500 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
                >
                  Marcadas ({flaggedQuestions.size})
                </button>
              )}
            </div>
          </div>

          {/* List of Review Questions */}
          <div className="space-y-4">
            {filteredReviewQuestions.map((q) => {
              const userAns = userAnswers[q.id];
              const isCorrect = userAns === q.correctAnswer;
              const originalIndex = questions.findIndex(orig => orig.id === q.id);

              return (
                <div 
                  key={q.id}
                  className={`bg-white p-6 sm:p-8 rounded-3xl border shadow-sm transition-all ${
                    isCorrect ? 'border-emerald-200/80 bg-emerald-50/10' : userAns ? 'border-rose-200/80 bg-rose-50/10' : 'border-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="w-8 h-8 rounded-xl bg-slate-900 text-white flex items-center justify-center font-black text-xs">
                        #{originalIndex + 1}
                      </span>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        {q.moduleId.toUpperCase()}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {isCorrect ? (
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200">
                          <CheckCircle2 className="w-4 h-4" /> Você Acertou
                        </span>
                      ) : userAns ? (
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-700 bg-rose-100 px-3 py-1 rounded-full border border-rose-200">
                          <XCircle className="w-4 h-4" /> Você Errou
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                          Em Branco
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-slate-800 font-semibold text-sm sm:text-base leading-relaxed mb-6">
                    {q.text}
                  </p>

                  <div className="space-y-2 mb-6">
                    {(Object.keys(q.options) as Array<'A'|'B'|'C'|'D'|'E'>).map(optKey => {
                      const isThisCorrect = optKey === q.correctAnswer;
                      const isThisSelected = userAns === optKey;

                      let style = "bg-slate-50 border-slate-200 text-slate-700";
                      if (isThisCorrect) {
                        style = "bg-emerald-50 border-emerald-300 text-emerald-950 font-semibold ring-1 ring-emerald-400";
                      } else if (isThisSelected) {
                        style = "bg-rose-50 border-rose-300 text-rose-950 font-semibold ring-1 ring-rose-400";
                      }

                      return (
                        <div key={optKey} className={`p-3.5 rounded-xl border text-xs sm:text-sm flex items-start gap-3 ${style}`}>
                          <span className={`w-6 h-6 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 ${
                            isThisCorrect 
                              ? 'bg-emerald-600 text-white' 
                              : isThisSelected 
                                ? 'bg-rose-600 text-white' 
                                : 'bg-slate-200 text-slate-700'
                          }`}>
                            {optKey}
                          </span>
                          <span className="flex-1 mt-0.5 leading-snug">{q.options[optKey]}</span>
                          {isThisCorrect && <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />}
                          {isThisSelected && !isThisCorrect && <X className="w-4 h-4 text-rose-600 shrink-0 mt-1" />}
                        </div>
                      );
                    })}
                  </div>

                  {/* Teacher Justification Box */}
                  <div className="bg-slate-900 text-slate-100 p-5 rounded-2xl text-xs sm:text-sm space-y-2">
                    <div className="flex items-center gap-2 text-indigo-400 font-bold uppercase tracking-wider text-[11px]">
                      <BookOpen className="w-4 h-4" /> Justificativa do Professor (Gabarito Oficial: {q.correctAnswer})
                    </div>
                    <p className="text-slate-300 leading-relaxed font-normal">
                      {q.justification}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    );
  }

  // ACTIVE EXAM INTERACTION SCREEN
  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-20">
      
      {/* Top Simulado Control Bar (Sticky for continuous access while scrolling) */}
      <div className="sticky top-16 md:top-20 z-20 bg-white/95 backdrop-blur-md p-3 sm:p-5 rounded-2xl sm:rounded-3xl shadow-sm border border-slate-200/90 flex flex-wrap items-center justify-between gap-3">
        
        {/* Left: Progress info & Map Button */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => setShowGridDrawer(!showGridDrawer)}
            className="flex items-center gap-2 px-3 sm:px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
          >
            <LayoutGrid className="w-4 h-4 text-slate-600" />
            <span className="hidden sm:inline">Mapa de Questões</span>
            <span className="text-[11px] font-black bg-slate-200 px-1.5 py-0.5 rounded-md ml-0.5">
              {currentIndex + 1}/{questions.length}
            </span>
          </button>

          <button
            onClick={toggleFlagCurrent}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-colors border cursor-pointer ${
              isCurrentFlagged 
                ? 'bg-amber-100 text-amber-900 border-amber-300' 
                : 'bg-white hover:bg-slate-50 text-slate-600 border-slate-200'
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${isCurrentFlagged ? 'fill-amber-600 text-amber-600' : 'text-slate-400'}`} />
            <span className="hidden sm:inline">{isCurrentFlagged ? 'Marcada para Revisão' : 'Marcar Dúvida'}</span>
          </button>
        </div>

        {/* Center: Timer & Mode Switch */}
        <div className="flex items-center gap-3">
          
          {/* Study Mode vs Exam Mode Switch */}
          <div className="hidden lg:flex items-center gap-2 text-xs font-bold text-slate-600">
            <span>Feedback Imediato:</span>
            <button
              onClick={() => setStudyMode(!studyMode)}
              className={`w-10 h-5.5 flex items-center rounded-full p-0.5 cursor-pointer transition-colors ${
                studyMode ? (isPortuguese ? 'bg-teal-600' : 'bg-indigo-600') : 'bg-slate-300'
              }`}
            >
              <div className={`bg-white w-4.5 h-4.5 rounded-full shadow-xs transform transition-transform ${
                studyMode ? 'translate-x-4.5' : 'translate-x-0'
              }`} />
            </button>
          </div>

          {/* Clock Timer */}
          <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-mono text-xs sm:text-sm font-black border ${
            timeLeft < 15 * 60 ? 'bg-rose-50 text-rose-700 border-rose-200 animate-pulse' : 'bg-slate-100 text-slate-800 border-slate-200'
          }`}>
            <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-500" />
            <span>{formatTime(timeLeft)}</span>
          </div>
        </div>

        {/* Right: Finish Action */}
        <button
          onClick={() => setShowConfirmFinishModal(true)}
          className="px-3.5 sm:px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
        >
          <span>Finalizar</span>
          <span className="text-[11px] text-slate-300">({Object.keys(userAnswers).length}/{questions.length})</span>
        </button>

      </div>

      {/* Grid Drawer Popover / Accordion */}
      {showGridDrawer && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="bg-white p-6 rounded-3xl border border-slate-200 shadow-lg"
        >
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Navegação Rápida ({questions.length} Questões)
            </h4>
            <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-600"></span> Respondida</span>
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span> Dúvida</span>
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-slate-200"></span> Em Branco</span>
            </div>
          </div>

          <div className="grid grid-cols-5 sm:grid-cols-10 md:grid-cols-20 gap-1.5 max-h-60 overflow-y-auto pr-1">
            {questions.map((q, idx) => {
              const isAns = userAnswers[q.id] !== undefined;
              const isFlag = flaggedQuestions.has(q.id);
              const isCurrent = idx === currentIndex;

              let bg = "bg-slate-100 text-slate-600 hover:bg-slate-200";
              if (isAns) bg = "bg-indigo-600 text-white font-bold";
              if (isFlag) bg = "bg-amber-500 text-white font-bold";

              return (
                <button
                  key={q.id}
                  onClick={() => {
                    setCurrentIndex(idx);
                    setShowGridDrawer(false);
                    window.scrollTo({ top: 150, behavior: 'smooth' });
                  }}
                  className={`h-8 rounded-lg text-xs transition-all flex items-center justify-center relative ${bg} ${
                    isCurrent ? 'ring-2 ring-indigo-400 ring-offset-2 scale-105' : ''
                  }`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>
        </motion.div>
      )}

      {/* Main Active Question Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQ.id}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          transition={{ duration: 0.2 }}
          className="bg-white p-6 sm:p-10 rounded-3xl shadow-sm border border-slate-200"
        >
          {/* Header of Question */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-slate-900 text-white font-black text-xs rounded-xl">
                QUESTÃO {currentIndex + 1} DE {questions.length}
              </span>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                MÓDULO {currentQ.moduleId.toUpperCase()}
              </span>
            </div>

            <div className="text-xs font-semibold text-slate-400">
              {isAnswered ? (
                <span className="text-emerald-600 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Respondida
                </span>
              ) : (
                'Pendente de resposta'
              )}
            </div>
          </div>

          {/* Question Text */}
          <div className="text-slate-900 text-base sm:text-lg font-bold leading-relaxed mb-8">
            {currentQ.text}
          </div>

          {/* Options List */}
          <div className="space-y-3 mb-8">
            {(Object.keys(currentQ.options) as Array<'A'|'B'|'C'|'D'|'E'>).map(optionKey => {
              const isSelected = currentSelectedAnswer === optionKey;
              const isCorrectAnswer = currentQ.correctAnswer === optionKey;

              let optionStyle = "bg-white border-slate-200/90 text-slate-800 hover:bg-slate-50 hover:border-slate-300";
              let badgeStyle = "bg-slate-100 text-slate-700 border-slate-200";

              if (showFeedbackNow) {
                if (isCorrectAnswer) {
                  optionStyle = "bg-emerald-50 border-emerald-400 text-emerald-950 font-bold ring-2 ring-emerald-500/20";
                  badgeStyle = "bg-emerald-600 text-white border-emerald-600";
                } else if (isSelected) {
                  optionStyle = "bg-rose-50 border-rose-400 text-rose-950 font-bold ring-2 ring-rose-500/20";
                  badgeStyle = "bg-rose-600 text-white border-rose-600";
                }
              } else if (isSelected) {
                optionStyle = "bg-indigo-50/90 border-indigo-400 text-indigo-950 font-bold ring-2 ring-indigo-500/20";
                badgeStyle = "bg-indigo-600 text-white border-indigo-600";
              }

              return (
                <button
                  key={optionKey}
                  onClick={() => handleSelectOption(optionKey)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border text-sm sm:text-base transition-all flex items-start gap-4 ${optionStyle}`}
                >
                  <span className={`w-8 h-8 rounded-xl flex items-center justify-center font-black text-xs shrink-0 border mt-0.5 ${badgeStyle}`}>
                    {optionKey}
                  </span>
                  <span className="flex-1 mt-1 leading-snug">{currentQ.options[optionKey]}</span>

                  {showFeedbackNow && isCorrectAnswer && (
                    <Check className="w-5 h-5 text-emerald-600 shrink-0 self-center" />
                  )}
                  {showFeedbackNow && isSelected && !isCorrectAnswer && (
                    <X className="w-5 h-5 text-rose-600 shrink-0 self-center" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Immediate Feedback in Study Mode */}
          {showFeedbackNow && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-6 rounded-2xl mb-8 border ${
                currentSelectedAnswer === currentQ.correctAnswer
                  ? 'bg-emerald-50/70 border-emerald-200 text-emerald-950'
                  : 'bg-rose-50/70 border-rose-200 text-rose-950'
              }`}
            >
              <div className="flex items-center gap-2 mb-2 font-black text-sm">
                {currentSelectedAnswer === currentQ.correctAnswer ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>Resposta Correta! Parabéns.</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-5 h-5 text-rose-600" />
                    <span>Resposta Incorreta. O gabarito oficial é a alternativa {currentQ.correctAnswer}.</span>
                  </>
                )}
              </div>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-700 font-medium">
                {currentQ.justification}
              </p>
            </motion.div>
          )}

          {/* Navigation Controls */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between gap-4">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold transition-all ${
                currentIndex === 0 
                  ? 'text-slate-300 cursor-not-allowed' 
                  : 'text-slate-700 bg-slate-100 hover:bg-slate-200'
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              Anterior
            </button>

            <div className="text-xs font-bold text-slate-400">
              {currentIndex + 1} de {questions.length}
            </div>

            <button
              onClick={handleNext}
              className={`flex items-center gap-2 px-6 py-3 text-white rounded-xl text-sm font-bold transition-all shadow-md hover:shadow-lg cursor-pointer ${
                isPortuguese 
                  ? 'bg-teal-600 hover:bg-teal-700 shadow-teal-100' 
                  : 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-100'
              }`}
            >
              {currentIndex < questions.length - 1 ? (
                <>
                  <span>Próxima Questão</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              ) : (
                <>
                  <span>Finalizar Simulado</span>
                  <Check className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Confirmation Modal */}
      <AnimatePresence>
        {showConfirmFinishModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl border border-slate-200"
            >
              <div className="flex items-center gap-3 text-amber-600 mb-4">
                <AlertCircle className="w-8 h-8" />
                <h3 className="text-xl font-black text-slate-900">Entregar o Simulado?</h3>
              </div>

              <p className="text-slate-600 text-sm font-medium leading-relaxed mb-6">
                Você respondeu <strong>{Object.keys(userAnswers).length}</strong> de <strong>{questions.length}</strong> questões.
                {questions.length - Object.keys(userAnswers).length > 0 && (
                  <span className="block text-rose-600 mt-2 font-bold">
                    ⚠️ Atenção: ainda existem {questions.length - Object.keys(userAnswers).length} questões em branco!
                  </span>
                )}
                {flaggedQuestions.size > 0 && (
                  <span className="block text-amber-700 mt-1">
                    Você possui {flaggedQuestions.size} questões marcadas para revisão.
                  </span>
                )}
              </p>

              <div className="flex items-center justify-end gap-3">
                <button
                  onClick={() => setShowConfirmFinishModal(false)}
                  className="px-5 py-2.5 rounded-xl font-bold text-slate-600 hover:bg-slate-100 text-sm"
                >
                  Continuar Respondendo
                </button>
                <button
                  onClick={() => {
                    setShowConfirmFinishModal(false);
                    setIsFinished(true);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-6 py-2.5 rounded-xl font-bold bg-slate-900 text-white hover:bg-slate-800 text-sm shadow-md"
                >
                  Confirmar e Ver Nota
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
