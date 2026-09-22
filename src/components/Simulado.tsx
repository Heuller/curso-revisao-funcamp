import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { allQuestions } from '../data/questions';
import type { Question } from '../data/questions';
import { MODULE_CATEGORIES } from '../data/categories';
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

const STORAGE_KEY = 'funcamp_simulado_v2';

export default function Simulado() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, 'A'|'B'|'C'|'D'|'E'>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Set<string>>(new Set());
  const [isFinished, setIsFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(100 * 60); // 100 minutes
  const [studyMode, setStudyMode] = useState(true); // true = show immediate teacher feedback
  const [showGridDrawer, setShowGridDrawer] = useState(false);
  const [showConfirmFinishModal, setShowConfirmFinishModal] = useState(false);
  
  // Review filter after finished
  const [reviewFilter, setReviewFilter] = useState<'all' | 'wrong' | 'correct' | 'flagged'>('all');

  // Initialize or restore from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed: SimuladoSavedState = JSON.parse(saved);
        if (parsed.questions && parsed.questions.length > 0) {
          setQuestions(parsed.questions);
          setCurrentIndex(parsed.currentIndex ?? 0);
          setUserAnswers(parsed.userAnswers ?? {});
          setFlaggedQuestions(new Set(parsed.flaggedQuestionIds ?? []));
          setTimeLeft(parsed.timeLeft ?? 100 * 60);
          setIsFinished(parsed.isFinished ?? false);
          setStudyMode(parsed.studyMode ?? true);
          return;
        }
      }
    } catch (e) {
      console.error('Error restoring simulado from localStorage', e);
    }

    // Default start
    setQuestions(shuffleArray(allQuestions));
  }, []);

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
      localStorage.setItem(STORAGE_KEY, JSON.stringify(stateToSave));
    } catch (e) {
      console.error('Error saving simulado state', e);
    }
  }, [questions, currentIndex, userAnswers, flaggedQuestions, timeLeft, isFinished, studyMode]);

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
    // In study mode, allow answering once to see feedback; in real exam mode, allow changing anytime
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
    const newShuffled = shuffleArray(allQuestions);
    setQuestions(newShuffled);
    setCurrentIndex(0);
    setUserAnswers({});
    setFlaggedQuestions(new Set());
    setIsFinished(false);
    setTimeLeft(100 * 60);
    localStorage.removeItem(STORAGE_KEY);
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

    const areaStats: Record<string, { total: number; correct: number; label: string }> = {
      organizacao: { total: 0, correct: 0, label: 'Organização da Informação & Metadados (AACR2, RDA, MARC, CDD, CDU)' },
      gestao: { total: 0, correct: 0, label: 'Gestão, Políticas, Normas ABNT & Legislação (SBU, LAI, Coleções)' },
      tecnologia: { total: 0, correct: 0, label: 'Tecnologia, Repositórios Digitais & Acesso Aberto (DSpace, OAI-PMH)' },
    };

    questions.forEach(q => {
      const selected = userAnswers[q.id];
      const isAns = selected !== undefined;
      const isRight = selected === q.correctAnswer;
      
      if (isAns) answered++;
      if (isRight) correct++;

      const category = MODULE_CATEGORIES[q.moduleId]?.category || 'organizacao';
      if (areaStats[category]) {
        areaStats[category].total++;
        if (isRight) areaStats[category].correct++;
      }
    });

    const total = questions.length;
    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;

    let tierLabel = 'Abaixo do Ponto de Corte';
    let tierColor = 'text-rose-600';
    let tierBadge = 'bg-rose-100 text-rose-800 border-rose-200';
    let advice = 'É recomendável retomar a Trilha Teórica nos módulos mais cobrados (AACR2, RDA, MARC 21 e Preservação Digital) e refazer o simulado.';

    if (percentage >= 85) {
      tierLabel = 'Aprovado em Vaga Direta (Nível Excepcional)';
      tierColor = 'text-emerald-600';
      tierBadge = 'bg-emerald-100 text-emerald-800 border-emerald-200';
      advice = 'Parabéns! Sua precisão e velocidade cognitiva estão no nível dos primeiros colocados de concursos de bibliotecas universitárias de elite.';
    } else if (percentage >= 70) {
      tierLabel = 'Candidato Muito Competitivo (Zona de Classificação)';
      tierColor = 'text-indigo-600';
      tierBadge = 'bg-indigo-100 text-indigo-800 border-indigo-200';
      advice = 'Ótimo resultado! Você domina a base. Foque nas pegadinhas clássicas da Vunesp nas questões que errou para garantir a vaga.';
    } else if (percentage >= 50) {
      tierLabel = 'Em Evolução (Reforço Recomendado)';
      tierColor = 'text-amber-600';
      tierBadge = 'bg-amber-100 text-amber-800 border-amber-200';
      advice = 'Você já possui noções dos 23 tópicos, mas caiu em alguns distratores conceituais. Revise os comentários do professor abaixo.';
    }

    return { correct, answered, total, percentage, tierLabel, tierColor, tierBadge, advice, areaStats };
  }, [questions, userAnswers]);

  if (questions.length === 0 || !currentQ) {
    return (
      <div className="flex items-center justify-center p-12 text-slate-500 font-medium">
        Carregando simulado de 100 questões...
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
                  Avaliação completa dos 23 tópicos específicos do edital Funcamp / Unicamp
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
                {formatTime(100 * 60 - timeLeft)}
              </div>
              <div className="text-sm font-semibold text-slate-500 mt-2">
                Tempo restante: {formatTime(timeLeft)}
              </div>
            </div>
          </div>

          <div className="p-4 bg-slate-100/70 rounded-2xl border border-slate-200/80 mb-8">
            <p className="text-slate-700 text-sm font-medium leading-relaxed flex items-start gap-2.5">
              <Sparkles className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
              <span><strong>Diagnóstico Pedagógico:</strong> {scoreStats.advice}</span>
            </p>
          </div>

          {/* Area Breakdown */}
          <div className="space-y-4 pt-4 border-t border-slate-100">
            <h3 className="text-lg font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <LayoutGrid className="w-5 h-5 text-indigo-600" />
              Desempenho por Eixo Temático do Concurso
            </h3>
            
            <div className="grid grid-cols-1 gap-4">
              {Object.entries(scoreStats.areaStats).map(([key, stat]) => {
                const pct = stat.total > 0 ? Math.round((stat.correct / stat.total) * 100) : 0;
                return (
                  <div key={key} className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-bold text-slate-800">{stat.label}</span>
                      <span className="text-sm font-extrabold text-slate-900">
                        {stat.correct}/{stat.total} ({pct}%)
                      </span>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all duration-500 ${
                          pct >= 80 ? 'bg-emerald-500' : pct >= 60 ? 'bg-indigo-500' : 'bg-rose-500'
                        }`}
                        style={{ width: `${pct}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Question Review Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <h3 className="text-2xl font-black text-slate-900">
                Gabarito Comentado e Análise de Erros
              </h3>
              <p className="text-slate-500 text-sm font-medium">
                Confira o comentário do professor para cada questão e entenda os distratores da banca.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setReviewFilter('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  reviewFilter === 'all' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Todas ({questions.length})
              </button>
              <button
                onClick={() => setReviewFilter('wrong')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  reviewFilter === 'wrong' ? 'bg-rose-600 text-white' : 'bg-rose-50 text-rose-700 hover:bg-rose-100'
                }`}
              >
                Erros ({questions.length - scoreStats.correct})
              </button>
              <button
                onClick={() => setReviewFilter('correct')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  reviewFilter === 'correct' ? 'bg-emerald-600 text-white' : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
                }`}
              >
                Acertos ({scoreStats.correct})
              </button>
              <button
                onClick={() => setReviewFilter('flagged')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  reviewFilter === 'flagged' ? 'bg-amber-600 text-white' : 'bg-amber-50 text-amber-700 hover:bg-amber-100'
                }`}
              >
                Marcadas ({flaggedQuestions.size})
              </button>
            </div>
          </div>

          <div className="space-y-6">
            {filteredReviewQuestions.map((q) => {
              const userAns = userAnswers[q.id];
              const isCorrect = userAns === q.correctAnswer;
              const originalIndex = questions.findIndex(orig => orig.id === q.id);

              return (
                <div 
                  key={q.id}
                  className={`p-6 rounded-2xl border-2 transition-all ${
                    isCorrect 
                      ? 'border-emerald-200 bg-white' 
                      : userAns !== undefined 
                        ? 'border-rose-200 bg-rose-50/20' 
                        : 'border-slate-200 bg-slate-50/40'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold text-xs">
                        #{originalIndex + 1}
                      </span>
                      <span className="text-xs font-bold px-2.5 py-1 bg-slate-100 text-slate-700 rounded-md">
                        Módulo {q.moduleId.replace('m', '')}
                      </span>
                      {flaggedQuestions.has(q.id) && (
                        <span className="inline-flex items-center gap-1 text-xs font-bold px-2 py-0.5 bg-amber-100 text-amber-800 rounded">
                          <Bookmark className="w-3 h-3 fill-amber-500" /> Marcada
                        </span>
                      )}
                    </div>

                    <div>
                      {isCorrect ? (
                        <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                          <Check className="w-3.5 h-3.5" /> Acertou
                        </span>
                      ) : userAns !== undefined ? (
                        <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-rose-700 bg-rose-100 px-3 py-1 rounded-full">
                          <X className="w-3.5 h-3.5" /> Errou (Marcou {userAns})
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 bg-slate-200 px-3 py-1 rounded-full">
                          Em Branco
                        </span>
                      )}
                    </div>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 mb-4 leading-relaxed">
                    {q.text}
                  </h4>

                  {/* Options */}
                  <div className="space-y-2 mb-4">
                    {(Object.entries(q.options) as [string, string][]).map(([letterStr, optText]) => {
                      const letter = letterStr as 'A'|'B'|'C'|'D'|'E';
                      const isOptionCorrect = q.correctAnswer === letter;
                      const isOptionUser = userAns === letter;

                      let optClass = "border-slate-200 text-slate-700 bg-white";
                      if (isOptionCorrect) {
                        optClass = "border-emerald-500 bg-emerald-50 text-emerald-950 font-bold ring-1 ring-emerald-500";
                      } else if (isOptionUser && !isOptionCorrect) {
                        optClass = "border-rose-500 bg-rose-50 text-rose-950 font-semibold";
                      }

                      return (
                        <div 
                          key={letter}
                          className={`p-3 rounded-xl border text-sm flex items-start gap-3 ${optClass}`}
                        >
                          <span className={`w-6 h-6 rounded flex items-center justify-center font-bold text-xs shrink-0 ${
                            isOptionCorrect ? 'bg-emerald-600 text-white' : isOptionUser ? 'bg-rose-600 text-white' : 'bg-slate-100 text-slate-600'
                          }`}>
                            {letter}
                          </span>
                          <span className="flex-1 leading-snug pt-0.5">{optText}</span>
                          {isOptionCorrect && <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />}
                          {isOptionUser && !isOptionCorrect && <X className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />}
                        </div>
                      );
                    })}
                  </div>

                  {/* Professor Feedback */}
                  <div className="p-4 bg-slate-900 rounded-xl text-white text-xs leading-relaxed space-y-1">
                    <div className="text-indigo-400 font-extrabold uppercase tracking-widest text-[11px] flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5" /> Comentário do Professor
                    </div>
                    <p className="text-slate-300 font-medium">
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

  // ACTIVE EXAM VIEW
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      
      {/* Top Controller Bar */}
      <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-sm border border-slate-200 sticky top-20 z-40 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowGridDrawer(!showGridDrawer)}
            className="flex items-center gap-2 px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-all border border-slate-200"
          >
            <LayoutGrid className="w-4 h-4 text-indigo-600" />
            Grade 1-100 ({Object.keys(userAnswers).length}/100)
          </button>

          <button
            onClick={toggleFlagCurrent}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all border ${
              isCurrentFlagged 
                ? 'bg-amber-100 border-amber-300 text-amber-800' 
                : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            <Bookmark className={`w-4 h-4 ${isCurrentFlagged ? 'fill-amber-500 text-amber-500' : ''}`} />
            {isCurrentFlagged ? 'Marcada para Revisar' : 'Marcar para Revisar'}
          </button>
        </div>

        <div className="flex items-center gap-4">
          {/* Mode Switcher */}
          <div className="hidden sm:flex items-center gap-2 text-xs font-bold text-slate-600 bg-slate-100 p-1 rounded-xl">
            <button
              onClick={() => setStudyMode(true)}
              className={`px-2.5 py-1 rounded-lg transition-all ${studyMode ? 'bg-white text-indigo-700 shadow-xs' : 'text-slate-500'}`}
              title="Mostra explicação detalhada imediatamente ao responder"
            >
              Modo Estudo
            </button>
            <button
              onClick={() => setStudyMode(false)}
              className={`px-2.5 py-1 rounded-lg transition-all ${!studyMode ? 'bg-white text-indigo-700 shadow-xs' : 'text-slate-500'}`}
              title="Simula a prova real com feedback apenas ao final"
            >
              Modo Prova Real
            </button>
          </div>

          {/* Timer */}
          <div className={`flex items-center gap-2 px-4 py-2 rounded-xl font-mono font-bold text-base border shadow-xs ${
            timeLeft < 600 
              ? 'bg-rose-50 text-rose-700 border-rose-200 animate-pulse' 
              : 'bg-slate-900 text-white border-slate-800'
          }`}>
            <Clock className="w-4 h-4 text-indigo-400" />
            {formatTime(timeLeft)}
          </div>

          <button
            onClick={() => setShowConfirmFinishModal(true)}
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-xs transition-all"
          >
            Entregar Prova
          </button>
        </div>
      </div>

      {/* Grid Palette Modal / Drawer */}
      <AnimatePresence>
        {showGridDrawer && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden bg-white rounded-3xl p-6 border border-slate-200 shadow-lg"
          >
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
              <div>
                <h4 className="font-bold text-slate-900 text-base">Mapa Geral de Questões (1 a 100)</h4>
                <p className="text-slate-500 text-xs font-medium">Clique em qualquer número para pular diretamente para a questão.</p>
              </div>

              <div className="flex items-center gap-3 text-xs font-semibold">
                <span className="flex items-center gap-1.5"><span className="w-3 h-3 bg-indigo-600 rounded"></span> Respondida</span>
                <span className="flex items-center gap-1.5"><span className="w-3 h-3 bg-amber-400 rounded"></span> Marcada</span>
                <span className="flex items-center gap-1.5"><span className="w-3 h-3 bg-slate-100 border border-slate-300 rounded"></span> Em Branco</span>
              </div>
            </div>

            <div className="grid grid-cols-10 sm:grid-cols-20 gap-2 max-h-60 overflow-y-auto pr-1">
              {questions.map((q, index) => {
                const ans = userAnswers[q.id];
                const isFlagged = flaggedQuestions.has(q.id);
                const isCurrent = index === currentIndex;

                let btnBg = "bg-slate-100 text-slate-600 hover:bg-slate-200";
                if (isFlagged) {
                  btnBg = "bg-amber-400 text-amber-950 font-black";
                } else if (ans !== undefined) {
                  btnBg = "bg-indigo-600 text-white font-bold";
                }

                return (
                  <button
                    key={q.id}
                    onClick={() => {
                      setCurrentIndex(index);
                      setShowGridDrawer(false);
                      window.scrollTo({ top: 150, behavior: 'smooth' });
                    }}
                    className={`h-8 rounded-lg text-xs flex items-center justify-center transition-all ${btnBg} ${
                      isCurrent ? 'ring-2 ring-slate-900 ring-offset-2 font-black scale-105' : ''
                    }`}
                  >
                    {index + 1}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress Bar */}
      <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden shadow-inner">
        <div 
          className="bg-indigo-600 h-full rounded-full transition-all duration-300 ease-out"
          style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
        ></div>
      </div>

      {/* Main Question Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQ.id}
          initial={{ x: 15, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -15, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6 sm:p-10 relative"
        >
          {/* Question Metadata Header */}
          <div className="flex items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <span className="px-3.5 py-1 bg-slate-900 text-white text-xs font-black rounded-lg">
                Questão {currentIndex + 1} de {questions.length}
              </span>
              <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-bold rounded-lg border border-indigo-100">
                Módulo {currentQ.moduleId.replace('m', '')}
              </span>
              {MODULE_CATEGORIES[currentQ.moduleId] && (
                <span className="hidden sm:inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-lg">
                  {MODULE_CATEGORIES[currentQ.moduleId].categoryLabel}
                </span>
              )}
            </div>

            {isCurrentFlagged && (
              <span className="flex items-center gap-1 text-xs font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                <Bookmark className="w-3.5 h-3.5 fill-amber-500" />
                Marcada para revisar
              </span>
            )}
          </div>

          {/* Statement */}
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-8 leading-relaxed">
            {currentQ.text}
          </h3>

          {/* Options */}
          <div className="space-y-3.5">
            {(Object.entries(currentQ.options) as [string, string][]).map(([letterStr, optText]) => {
              const letter = letterStr as 'A'|'B'|'C'|'D'|'E';
              const isSelected = currentSelectedAnswer === letter;
              const isCorrect = currentQ.correctAnswer === letter;

              let cardStyle = "bg-white border-slate-200 text-slate-800 hover:border-indigo-300 hover:bg-indigo-50/40";
              let badgeStyle = "bg-slate-100 text-slate-600 border-slate-200";

              if (showFeedbackNow) {
                if (isCorrect) {
                  cardStyle = "bg-emerald-50 border-emerald-500 text-emerald-950 ring-1 ring-emerald-500";
                  badgeStyle = "bg-emerald-600 text-white border-emerald-600";
                } else if (isSelected) {
                  cardStyle = "bg-rose-50 border-rose-500 text-rose-950";
                  badgeStyle = "bg-rose-600 text-white border-rose-600";
                } else {
                  cardStyle = "bg-white border-slate-200 opacity-60";
                }
              } else if (isSelected) {
                cardStyle = "bg-indigo-50 border-indigo-600 ring-2 ring-indigo-600/30 text-indigo-950";
                badgeStyle = "bg-indigo-600 text-white border-indigo-600";
              }

              return (
                <button
                  key={letter}
                  onClick={() => handleSelectOption(letter)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border-2 transition-all duration-200 flex items-start gap-4 ${cardStyle}`}
                >
                  <div className={`shrink-0 w-8 h-8 rounded-xl border flex items-center justify-center font-bold text-sm transition-colors ${badgeStyle}`}>
                    {letter}
                  </div>
                  <div className="pt-0.5 font-medium leading-relaxed text-[15px] flex-1">
                    {optText}
                  </div>
                  {showFeedbackNow && isCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 ml-2 shrink-0 mt-1" />
                  )}
                  {showFeedbackNow && isSelected && !isCorrect && (
                    <XCircle className="w-5 h-5 text-rose-600 ml-2 shrink-0 mt-1" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Immediate Teacher Feedback (In Study Mode) */}
          <AnimatePresence>
            {showFeedbackNow && (
              <motion.div
                initial={{ opacity: 0, y: 10, height: 0 }}
                animate={{ opacity: 1, y: 0, height: 'auto' }}
                className="mt-8 overflow-hidden"
              >
                <div className="bg-slate-900 rounded-2xl p-6 text-white border border-slate-800 shadow-xl relative overflow-hidden">
                  <div className="flex items-center gap-2 text-indigo-300 font-bold uppercase tracking-wider text-xs mb-3">
                    <BookOpen className="w-4 h-4" />
                    Comentário Oficial do Professor
                  </div>
                  <p className="text-slate-200 leading-relaxed font-medium text-sm sm:text-base">
                    {currentQ.justification}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

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
              className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-bold transition-all shadow-md hover:shadow-lg shadow-indigo-100"
            >
              {currentIndex < questions.length - 1 ? (
                <>
                  Próxima Questão
                  <ArrowRight className="w-4 h-4" />
                </>
              ) : (
                <>
                  Finalizar Simulado
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
