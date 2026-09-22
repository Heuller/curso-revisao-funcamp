import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { allQuestions } from '../data/questions';
import type { Question } from '../data/questions';
import { CheckCircle2, XCircle, Clock, Award, ArrowRight, RotateCcw, AlertTriangle } from 'lucide-react';

// Randomize array helper
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export default function Simulado() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<'A'|'B'|'C'|'D'|'E'|null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(100 * 60); // 100 minutes
  
  useEffect(() => {
    // Start simulado with shuffled 100 questions
    setQuestions(shuffleArray(allQuestions));
  }, []);

  useEffect(() => {
    if (isFinished) return;
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
  }, [isFinished]);

  const handleAnswer = (option: 'A'|'B'|'C'|'D'|'E') => {
    if (showFeedback) return;
    setSelectedAnswer(option);
    setShowFeedback(true);
    
    if (option === questions[currentIndex].correctAnswer) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setQuestions(shuffleArray(allQuestions));
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setScore(0);
    setIsFinished(false);
    setTimeLeft(100 * 60);
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  if (questions.length === 0) return null;

  const currentQ = questions[currentIndex];
  const progress = ((currentIndex) / questions.length) * 100;

  if (isFinished) {
    const percentage = (score / questions.length) * 100;
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center max-w-2xl mx-auto p-8">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white p-10 rounded-3xl shadow-xl border border-slate-200 w-full relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-red-500 to-indigo-600"></div>
          <Award className={`w-24 h-24 mx-auto mb-6 ${percentage >= 80 ? 'text-emerald-500' : 'text-amber-500'}`} />
          <h2 className="text-4xl font-black text-slate-900 mb-2">Simulado Concluído</h2>
          <p className="text-slate-500 font-medium mb-8">Performance na avaliação final</p>
          
          <div className="text-7xl font-black bg-clip-text text-transparent bg-gradient-to-br from-slate-800 to-slate-500 mb-6">
            {score}/{questions.length}
          </div>
          
          <div className="w-full bg-slate-100 rounded-full h-4 mb-6 overflow-hidden">
            <div 
              className={`h-4 rounded-full ${percentage >= 80 ? 'bg-emerald-500' : 'bg-amber-500'}`}
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
          
          <p className="text-lg text-slate-700 font-medium mb-10">
            {percentage >= 80 ? 'Excepcional! Você está no nível de aprovação.' : 'Você precisa revisar mais a teoria avançada.'}
          </p>
          
          <button 
            onClick={handleRestart}
            className="flex items-center justify-center gap-2 w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors"
          >
            <RotateCcw className="w-5 h-5" />
            Refazer Simulado
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Top Bar */}
      <div className="flex items-center justify-between bg-white p-5 rounded-2xl shadow-sm border border-slate-200 mb-6 sticky top-24 z-40">
        <div>
          <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Progresso</div>
          <div className="text-lg font-black text-slate-800">
            Questão {currentIndex + 1} <span className="text-slate-400">/ {questions.length}</span>
          </div>
        </div>
        
        <div className="flex flex-col items-end">
          <div className="flex items-center gap-2 text-rose-600 bg-rose-50 px-4 py-2 rounded-lg font-mono font-bold text-lg border border-rose-100">
            <Clock className="w-5 h-5" />
            {formatTime(timeLeft)}
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-200 h-2 rounded-full mb-8 overflow-hidden">
        <div 
          className="bg-indigo-600 h-2 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Question Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQ.id}
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -20, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-3xl shadow-md border border-slate-200 p-8 sm:p-10"
        >
          <div className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider rounded-md mb-6">
            Módulo ID: {currentQ.moduleId}
          </div>
          
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-10 leading-relaxed">
            {currentQ.text}
          </h3>

          <div className="space-y-4">
            {(Object.entries(currentQ.options) as [string, string][]).map(([letterStr, text]) => {
              const letter = letterStr as 'A'|'B'|'C'|'D'|'E';
              const isSelected = selectedAnswer === letter;
              const isCorrect = currentQ.correctAnswer === letter;
              
              let buttonStyle = "bg-white border-slate-200 text-slate-700 hover:border-indigo-300 hover:bg-indigo-50";
              let letterStyle = "bg-slate-100 text-slate-500";
              
              if (showFeedback) {
                if (isCorrect) {
                  buttonStyle = "bg-emerald-50 border-emerald-500 text-emerald-900 ring-1 ring-emerald-500";
                  letterStyle = "bg-emerald-500 text-white";
                } else if (isSelected) {
                  buttonStyle = "bg-rose-50 border-rose-500 text-rose-900";
                  letterStyle = "bg-rose-500 text-white";
                } else {
                  buttonStyle = "bg-white border-slate-200 opacity-50";
                }
              } else if (isSelected) {
                buttonStyle = "bg-indigo-50 border-indigo-500 ring-1 ring-indigo-500";
                letterStyle = "bg-indigo-500 text-white";
              }

              return (
                <button
                  key={letter}
                  onClick={() => handleAnswer(letter)}
                  disabled={showFeedback}
                  className={`w-full text-left p-5 rounded-2xl border-2 transition-all duration-200 flex items-start gap-4 ${buttonStyle}`}
                >
                  <div className={`shrink-0 w-8 h-8 flex items-center justify-center rounded-lg font-bold text-sm transition-colors ${letterStyle}`}>
                    {letter}
                  </div>
                  <div className="pt-1.5 font-medium leading-relaxed text-[15px]">
                    {text}
                  </div>
                  {showFeedback && isCorrect && (
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 ml-auto shrink-0 mt-1" />
                  )}
                  {showFeedback && isSelected && !isCorrect && (
                    <XCircle className="w-6 h-6 text-rose-500 ml-auto shrink-0 mt-1" />
                  )}
                </button>
              );
            })}
          </div>

          <AnimatePresence>
            {showFeedback && (
              <motion.div
                initial={{ opacity: 0, y: 10, height: 0 }}
                animate={{ opacity: 1, y: 0, height: 'auto' }}
                className="mt-8 overflow-hidden"
              >
                <div className="bg-slate-900 rounded-2xl p-6 text-white border border-slate-800 shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <AlertTriangle className="w-24 h-24" />
                  </div>
                  <h4 className="text-indigo-300 font-bold uppercase tracking-widest text-xs mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
                    Comentário do Professor
                  </h4>
                  <p className="text-slate-300 leading-relaxed font-medium relative z-10">
                    {currentQ.justification}
                  </p>
                </div>

                <div className="mt-8 flex justify-end">
                  <button
                    onClick={handleNext}
                    className="flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-indigo-200 hover:shadow-indigo-300 hover:-translate-y-0.5 active:translate-y-0"
                  >
                    {currentIndex < questions.length - 1 ? 'Próxima Questão' : 'Finalizar Simulado'}
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </motion.div>
      </AnimatePresence>
    </div>
  );
}
