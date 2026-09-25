import { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MarkdownViewer } from './components/MarkdownViewer';
import { modulesData } from './data';
import { modulesDataLP } from './data/portugues';
import type { AdvancedTopic } from './data/types';
import Simulado from './components/Simulado';
import { ModuleQuiz } from './components/ModuleQuiz';
import { MODULE_CATEGORIES, CATEGORY_FILTERS } from './data/categories';
import { LP_MODULE_CATEGORIES, LP_CATEGORY_FILTERS } from './data/portugues/categories';
import { UNICAMP_EXAM_STRATEGY } from './data/portugues/unicampGuide';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './components/ui/accordion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { 
  BookOpen, AlertTriangle, Crosshair, Brain, GraduationCap, 
  Library, ShieldAlert, Target, Trophy, Search, X, Clock, 
  ChevronRight, ChevronLeft, RotateCcw, Compass, Check, 
  ChevronDown, Languages, Sparkles, ArrowUp, Layers, 
  Bookmark, CheckCircle2
} from 'lucide-react';

const STORAGE_KEY_DISCIPLINE = 'funcamp_active_discipline';
const STORAGE_KEY_COMPLETED_BIB = 'funcamp_completed_modules';
const STORAGE_KEY_COMPLETED_LP = 'funcamp_completed_modules_lp';
const STORAGE_KEY_ACTIVE_BIB = 'funcamp_active_module_id';
const STORAGE_KEY_ACTIVE_LP = 'funcamp_active_module_id_lp';

export default function App() {
  // Discipline selector: 'biblioteconomia' | 'portugues'
  const [discipline, setDiscipline] = useState<'biblioteconomia' | 'portugues'>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_DISCIPLINE);
      return (saved === 'portugues' || saved === 'biblioteconomia') ? saved : 'biblioteconomia';
    } catch {
      return 'biblioteconomia';
    }
  });

  const isPortuguese = discipline === 'portugues';
  const activeModulesList = isPortuguese ? modulesDataLP : modulesData;
  const activeCategoriesMap = isPortuguese ? LP_MODULE_CATEGORIES : MODULE_CATEGORIES;
  const activeCategoryFilters = isPortuguese ? LP_CATEGORY_FILTERS : CATEGORY_FILTERS;

  // Active module ID persistence per discipline
  const [activeModuleId, setActiveModuleId] = useState<string>(() => {
    try {
      const initDiscipline = localStorage.getItem(STORAGE_KEY_DISCIPLINE) === 'portugues' ? 'portugues' : 'biblioteconomia';
      const key = initDiscipline === 'portugues' ? STORAGE_KEY_ACTIVE_LP : STORAGE_KEY_ACTIVE_BIB;
      const savedId = localStorage.getItem(key);
      const list = initDiscipline === 'portugues' ? modulesDataLP : modulesData;
      const found = list.find(m => m.id === savedId);
      return found ? found.id : list[0].id;
    } catch {
      return modulesData[0].id;
    }
  });

  const [currentView, setCurrentView] = useState<'curso' | 'simulado' | 'guia-unicamp'>('curso');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  // Mobile drawer state
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  // Accordion state to allow programmatic expansion when clicking anchor jump pills
  const [accordionValues, setAccordionValues] = useState<string[]>(['theory', 'authors']);

  // Reading progress and back to top
  const [readingProgress, setReadingProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Persistence for completed modules in Biblioteconomia
  const [completedModulesBib, setCompletedModulesBib] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_COMPLETED_BIB);
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch {
      return new Set();
    }
  });

  // Persistence for completed modules in Língua Portuguesa
  const [completedModulesLP, setCompletedModulesLP] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_COMPLETED_LP);
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch {
      return new Set();
    }
  });

  // Scroll listener for reading progress bar and back to top button
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      if (totalScroll > 0) {
        setReadingProgress(Math.min(100, Math.max(0, Math.round((currentScroll / totalScroll) * 100))));
      }
      setShowBackToTop(currentScroll > 350);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Save completed modules to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_COMPLETED_BIB, JSON.stringify(Array.from(completedModulesBib)));
    } catch (e) {
      console.error('Failed to save bib completed modules', e);
    }
  }, [completedModulesBib]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_COMPLETED_LP, JSON.stringify(Array.from(completedModulesLP)));
    } catch (e) {
      console.error('Failed to save lp completed modules', e);
    }
  }, [completedModulesLP]);

  // Save active module ID per discipline
  useEffect(() => {
    try {
      const key = isPortuguese ? STORAGE_KEY_ACTIVE_LP : STORAGE_KEY_ACTIVE_BIB;
      localStorage.setItem(key, activeModuleId);
    } catch (e) {
      console.error('Failed to save active module', e);
    }
  }, [activeModuleId, isPortuguese]);

  // Save active discipline to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_DISCIPLINE, discipline);
    } catch (e) {
      console.error('Failed to save discipline', e);
    }
  }, [discipline]);

  // Current active module object
  const activeModule = useMemo(() => {
    return activeModulesList.find(m => m.id === activeModuleId) || activeModulesList[0];
  }, [activeModulesList, activeModuleId]);

  const completedModules = isPortuguese ? completedModulesLP : completedModulesBib;
  const setCompletedModules = isPortuguese ? setCompletedModulesLP : setCompletedModulesBib;

  const toggleComplete = useCallback((id: string) => {
    setCompletedModules(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  }, [setCompletedModules]);

  const handleResetProgress = () => {
    const disciplineName = isPortuguese ? 'Língua Portuguesa' : 'Biblioteconomia';
    if (window.confirm(`Deseja realmente zerar o progresso dos módulos concluídos de ${disciplineName}?`)) {
      setCompletedModules(new Set());
      const key = isPortuguese ? STORAGE_KEY_COMPLETED_LP : STORAGE_KEY_COMPLETED_BIB;
      localStorage.removeItem(key);
    }
  };

  // Switch discipline cleanly
  const handleChangeDiscipline = (newDiscipline: 'biblioteconomia' | 'portugues') => {
    if (newDiscipline === discipline) return;
    setDiscipline(newDiscipline);
    setSelectedCategory('all');
    setSearchQuery('');
    setMobileDrawerOpen(false);

    try {
      const key = newDiscipline === 'portugues' ? STORAGE_KEY_ACTIVE_LP : STORAGE_KEY_ACTIVE_BIB;
      const savedId = localStorage.getItem(key);
      const list = newDiscipline === 'portugues' ? modulesDataLP : modulesData;
      const found = list.find(m => m.id === savedId);
      setActiveModuleId(found ? found.id : list[0].id);
    } catch {
      setActiveModuleId(newDiscipline === 'portugues' ? modulesDataLP[0].id : modulesData[0].id);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Filtered module list based on search and category
  const filteredModules = useMemo(() => {
    return activeModulesList.filter(mod => {
      const matchesSearch = 
        mod.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mod.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mod.advancedTheory.toLowerCase().includes(searchQuery.toLowerCase());
      
      const categoryData = activeCategoriesMap[mod.id];
      const matchesCategory = 
        selectedCategory === 'all' || 
        (categoryData && categoryData.category === selectedCategory);

      return matchesSearch && matchesCategory;
    });
  }, [activeModulesList, searchQuery, selectedCategory, activeCategoriesMap]);

  const currentIndex = activeModulesList.findIndex(m => m.id === activeModule.id);
  const prevModule = currentIndex > 0 ? activeModulesList[currentIndex - 1] : null;
  const nextModule = currentIndex < activeModulesList.length - 1 ? activeModulesList[currentIndex + 1] : null;
  const isCurrentCompleted = completedModules.has(activeModule.id);
  const currentCategory = activeCategoriesMap[activeModule.id];

  const progressPercentage = Math.round((completedModules.size / activeModulesList.length) * 100);

  const handleSelectModule = (mod: AdvancedTopic) => {
    setActiveModuleId(mod.id);
    setMobileDrawerOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNextModule = () => {
    if (!completedModules.has(activeModule.id)) {
      toggleComplete(activeModule.id);
    }
    if (nextModule) {
      setActiveModuleId(nextModule.id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setCurrentView('simulado');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevModule = () => {
    if (prevModule) {
      setActiveModuleId(prevModule.id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Jump directly to a module section
  const handleJumpToSection = (sectionId: string, accordionKey?: string) => {
    if (accordionKey && !accordionValues.includes(accordionKey)) {
      setAccordionValues(prev => [...prev, accordionKey]);
    }
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        const offset = 90;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = el.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 50);
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 font-sans selection:bg-indigo-500 selection:text-white pb-24 md:pb-12">
      
      {/* Scroll Reading Progress Bar (Fixed Top) */}
      <div 
        className="fixed top-0 left-0 right-0 h-1 z-50 pointer-events-none transition-all duration-150"
        style={{
          width: `${readingProgress}%`,
          background: isPortuguese 
            ? 'linear-gradient(90deg, #0d9488, #10b981, #34d399)' 
            : 'linear-gradient(90deg, #6366f1, #8b5cf6, #10b981)'
        }}
      />

      {/* Top Navbar */}
      <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-xl text-white border-b border-slate-800/80 shadow-md">
        
        {/* Desktop Header Content (md+) */}
        <div className="hidden md:flex max-w-[1440px] mx-auto px-4 sm:px-6 h-16 items-center justify-between gap-4">
          
          {/* Left: Brand Logo & Segmented Discipline Switcher */}
          <div className="flex items-center gap-4 lg:gap-5">
            {/* Logo */}
            <div 
              onClick={() => { setCurrentView('curso'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="flex items-center gap-2.5 cursor-pointer group shrink-0"
            >
              <div className={`w-9 h-9 rounded-xl shadow-xs flex items-center justify-center transition-transform group-hover:scale-105 ${
                isPortuguese 
                  ? 'bg-gradient-to-br from-teal-500 to-emerald-600 shadow-teal-950/30' 
                  : 'bg-gradient-to-br from-indigo-500 to-purple-600 shadow-indigo-950/30'
              }`}>
                {isPortuguese ? (
                  <Languages className="w-4.5 h-4.5 text-white" />
                ) : (
                  <Library className="w-4.5 h-4.5 text-white" />
                )}
              </div>
              <div className="leading-tight">
                <div className="flex items-center gap-1.5">
                  <span className="text-sm lg:text-base font-black tracking-tight text-white group-hover:text-indigo-300 transition-colors">
                    Revisão Master
                  </span>
                  <span className="px-1.5 py-0.2 rounded text-[9px] font-black uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/30">
                    Unicamp
                  </span>
                </div>
                <div className="text-[10px] text-slate-400 font-bold tracking-wider uppercase mt-0.5">
                  Funcamp 2026
                </div>
              </div>
            </div>

            <div className="hidden xl:block h-6 w-px bg-slate-800/80"></div>

            {/* Segmented Discipline Switcher (High-End & Subtle) */}
            <div className="flex items-center bg-slate-900/90 p-1 rounded-xl border border-slate-800 shadow-inner">
              <button
                onClick={() => handleChangeDiscipline('biblioteconomia')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  !isPortuguese
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                <Library className="w-3.5 h-3.5" />
                <span>Biblioteconomia</span>
                <span className={`text-[10px] font-mono px-1 rounded ${!isPortuguese ? 'bg-indigo-700/80 text-indigo-100 font-black' : 'text-slate-500'}`}>
                  23
                </span>
              </button>

              <button
                onClick={() => handleChangeDiscipline('portugues')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  isPortuguese
                    ? 'bg-teal-600 text-white shadow-xs'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                <Languages className="w-3.5 h-3.5" />
                <span>Língua Portuguesa</span>
                <span className={`text-[10px] font-mono px-1 rounded ${isPortuguese ? 'bg-teal-700/80 text-teal-100 font-black' : 'text-slate-500'}`}>
                  17
                </span>
              </button>
            </div>
          </div>

          {/* Center: Primary Navigation Tabs (Clean & Floating) */}
          <nav className="flex items-center gap-1 bg-slate-900/60 p-1 rounded-2xl border border-slate-800/70 shadow-inner">
            <button
              onClick={() => { setCurrentView('curso'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                currentView === 'curso' 
                  ? 'bg-slate-800 text-white shadow-xs border border-slate-700/80' 
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
              }`}
            >
              <BookOpen className={`w-3.5 h-3.5 ${currentView === 'curso' ? (isPortuguese ? 'text-teal-400' : 'text-indigo-400') : 'text-slate-400'}`} />
              <span>Trilha Teórica</span>
            </button>

            <button
              onClick={() => { setCurrentView('simulado'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                currentView === 'simulado' 
                  ? 'bg-slate-800 text-white shadow-xs border border-slate-700/80' 
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
              }`}
            >
              <Target className={`w-3.5 h-3.5 ${currentView === 'simulado' ? (isPortuguese ? 'text-teal-400' : 'text-indigo-400') : 'text-slate-400'}`} />
              <span>Simulado Master</span>
              <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded-md ${
                currentView === 'simulado' ? 'bg-slate-700 text-slate-100' : 'bg-slate-800/90 text-slate-400'
              }`}>
                {isPortuguese ? '40Q' : '100Q'}
              </span>
            </button>

            {isPortuguese && (
              <button
                onClick={() => { setCurrentView('guia-unicamp'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  currentView === 'guia-unicamp'
                    ? 'bg-amber-500/20 text-amber-200 border border-amber-500/40 shadow-xs'
                    : 'text-amber-400/80 hover:text-amber-200 hover:bg-amber-500/10'
                }`}
              >
                <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
                <span>Raio-X IEL</span>
              </button>
            )}
          </nav>

          {/* Right: Integrated High-Tech Progress Capsule */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-3 bg-slate-900/90 border border-slate-800/90 pl-2.5 pr-3.5 py-1.5 rounded-2xl shadow-inner">
              {/* Circular Progress SVG Ring */}
              <div className="relative w-7 h-7 flex items-center justify-center shrink-0">
                <svg className="w-7 h-7 -rotate-90" viewBox="0 0 28 28">
                  <circle
                    cx="14"
                    cy="14"
                    r="11"
                    fill="none"
                    stroke="currentColor"
                    className="text-slate-800"
                    strokeWidth="2.5"
                  />
                  <circle
                    cx="14"
                    cy="14"
                    r="11"
                    fill="none"
                    stroke="currentColor"
                    className={isPortuguese ? 'text-teal-400' : 'text-indigo-400'}
                    strokeWidth="2.5"
                    strokeDasharray={2 * Math.PI * 11}
                    strokeDashoffset={2 * Math.PI * 11 - ((2 * Math.PI * 11) * progressPercentage) / 100}
                    strokeLinecap="round"
                    style={{ transition: 'stroke-dashoffset 0.5s ease-in-out' }}
                  />
                </svg>
                <span className="absolute text-[8px] font-black text-slate-200">
                  {progressPercentage}%
                </span>
              </div>

              {/* Fraction and Label */}
              <div className="text-left leading-tight">
                <div className="flex items-center gap-1 text-[11px] font-black text-white">
                  <span>{completedModules.size}</span>
                  <span className="text-slate-500 font-normal">/</span>
                  <span className="text-slate-400 font-bold">{activeModulesList.length}</span>
                  <span className="text-[10px] text-slate-400 font-medium ml-0.5">módulos</span>
                </div>
                <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                  {isPortuguese ? 'Edital Português' : 'Edital Biblioteconomia'}
                </div>
              </div>

              {/* Reset Button (only if > 0) */}
              {completedModules.size > 0 && (
                <button
                  onClick={handleResetProgress}
                  title="Zerar progresso da disciplina ativa"
                  className="ml-1 p-1 text-slate-500 hover:text-rose-400 hover:bg-slate-800/80 rounded-lg transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                </button>
              )}
            </div>
          </div>

        </div>

        {/* Ultra-Clean Mobile Header Content (under 768px: Single 54px Row) */}
        <div className="md:hidden flex items-center justify-between px-3 h-14">
          {/* Logo & Mini Pill */}
          <div 
            onClick={() => { setCurrentView('curso'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className={`w-8 h-8 rounded-xl text-white flex items-center justify-center shadow-xs ${
              isPortuguese ? 'bg-gradient-to-br from-teal-500 to-emerald-600' : 'bg-gradient-to-br from-indigo-500 to-purple-600'
            }`}>
              {isPortuguese ? <Languages className="w-4 h-4" /> : <Library className="w-4 h-4" />}
            </div>
            <div className="leading-tight">
              <div className="flex items-center gap-1.5">
                <span className="font-black text-sm text-white tracking-tight">Revisão Master</span>
                <span className="px-1.5 py-0.2 rounded text-[9px] font-black uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/30">
                  Unicamp
                </span>
              </div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Funcamp 2026
              </span>
            </div>
          </div>

          {/* Quick Discipline Switcher Pill & Progress Ring */}
          <div className="flex items-center gap-2">
            {/* Quick Switch Button (BIB ⇄ LP) */}
            <button
              onClick={() => handleChangeDiscipline(isPortuguese ? 'biblioteconomia' : 'portugues')}
              className="px-2.5 py-1 rounded-xl text-[11px] font-bold bg-slate-900 border border-slate-800 text-slate-300 hover:text-white flex items-center gap-1.5 transition-all shadow-xs cursor-pointer active:scale-95"
            >
              <span className="text-slate-400 text-[10px]">Trocar:</span>
              <span className={`font-black ${isPortuguese ? 'text-indigo-400' : 'text-teal-400'}`}>
                {isPortuguese ? 'BIB' : 'LP'}
              </span>
            </button>

            {/* Mobile Module Drawer Trigger with Progress Ring */}
            <button
              onClick={() => setMobileDrawerOpen(true)}
              className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 pl-1.5 pr-2 py-1 rounded-xl text-slate-200 shadow-xs cursor-pointer active:scale-95"
              title="Abrir lista de módulos"
            >
              <div className="relative w-5 h-5 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 -rotate-90" viewBox="0 0 20 20">
                  <circle cx="10" cy="10" r="8" fill="none" stroke="currentColor" className="text-slate-800" strokeWidth="2.5" />
                  <circle
                    cx="10" cy="10" r="8" fill="none" stroke="currentColor"
                    className={isPortuguese ? 'text-teal-400' : 'text-indigo-400'}
                    strokeWidth="2.5"
                    strokeDasharray={2 * Math.PI * 8}
                    strokeDashoffset={2 * Math.PI * 8 - ((2 * Math.PI * 8) * progressPercentage) / 100}
                    strokeLinecap="round"
                    style={{ transition: 'stroke-dashoffset 0.5s ease-in-out' }}
                  />
                </svg>
                <span className="absolute text-[7px] font-black">{progressPercentage}%</span>
              </div>
              <span className="text-[11px] font-black text-white">{completedModules.size}/{activeModulesList.length}</span>
            </button>
          </div>
        </div>

      </header>

      {/* Main Container */}
      <div className="max-w-[1440px] mx-auto px-3 sm:px-6 py-4 sm:py-8">
        
        {currentView === 'guia-unicamp' ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-5xl mx-auto space-y-6 sm:space-y-8"
          >
            {/* Header Banner */}
            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 p-5 sm:p-10 rounded-3xl text-white shadow-xl border border-slate-700/80 relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
              
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-black uppercase tracking-wider border border-amber-400/30">
                  <GraduationCap className="w-4 h-4" />
                  <span>Método IEL / Unicamp • Alto Rendimento</span>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                  <button
                    onClick={() => { setCurrentView('simulado'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-400 hover:to-emerald-500 text-white font-bold text-xs shadow-md transition-all cursor-pointer"
                  >
                    <Target className="w-3.5 h-3.5" />
                    <span>Simulado (40Q)</span>
                  </button>
                  <button
                    onClick={() => { setCurrentView('curso'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs border border-slate-700 transition-all cursor-pointer"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Trilha Teórica</span>
                  </button>
                </div>
              </div>

              <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight mb-3 sm:mb-4">
                O DNA das Provas da Unicamp em Língua Portuguesa
              </h2>
              <p className="text-slate-300 text-xs sm:text-base leading-relaxed max-w-3xl">
                A <strong>Universidade Estadual de Campinas</strong> é consagrada mundialmente por sua tradição em Linguística através do renomado <strong>IEL (Instituto de Estudos da Linguagem)</strong>. A prova de Língua Portuguesa nunca cobra gramática como mero conjunto de regras mortas: cobra <strong>efeitos de sentido, polifonia, precisão argumentativa e adequação discursiva</strong>.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-6 pt-6 border-t border-slate-700/60">
                <div className="bg-slate-800/60 p-4 rounded-2xl border border-slate-700/60">
                  <div className="text-amber-400 text-xs font-black uppercase tracking-wider mb-1">Textos Autênticos</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Ensaios científicos, editoriais e crônicas densas. A leitura exige atenção às vozes e pressupostos.
                  </p>
                </div>
                <div className="bg-slate-800/60 p-4 rounded-2xl border border-slate-700/60">
                  <div className="text-teal-400 text-xs font-black uppercase tracking-wider mb-1">Distratores Elegantes</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Alternativas verossímeis que trazem 'verdades do mundo' não autorizadas pelo texto ou inversão de causas.
                  </p>
                </div>
                <div className="bg-slate-800/60 p-4 rounded-2xl border border-slate-700/60">
                  <div className="text-indigo-400 text-xs font-black uppercase tracking-wider mb-1">Gramática Aplicada</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Sintaxe, crase, pontuação e correlações verbais sempre atreladas aos efeitos de sentido e clareza.
                  </p>
                </div>
              </div>
            </div>

            {/* Strategy Modules */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-amber-500" />
                  <span>5 Pilares Estratégicos para Dominar a Prova</span>
                </h3>
                <span className="text-xs font-bold text-slate-500 bg-slate-200/80 px-2.5 py-1 rounded-full">
                  Exclusivo Funcamp
                </span>
              </div>

              <div className="space-y-6">
                {UNICAMP_EXAM_STRATEGY.map((strat, index) => (
                  <Card key={strat.id} className="border-slate-200/90 shadow-sm overflow-hidden bg-white rounded-3xl">
                    <CardHeader className="bg-slate-50/80 border-b border-slate-100 p-5 sm:p-7">
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-indigo-50 text-indigo-700 border border-indigo-200/60">
                          {strat.badge}
                        </span>
                        <span className="text-xs font-bold text-slate-400">
                          Pilar 0{index + 1} de 05
                        </span>
                      </div>
                      <CardTitle className="text-base sm:text-xl font-black text-slate-900 tracking-tight">
                        {strat.title}
                      </CardTitle>
                      <CardDescription className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
                        {strat.summary}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-5 sm:p-8">
                      <MarkdownViewer content={strat.content} />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Bottom Call to Action */}
            <div className="bg-gradient-to-r from-teal-900 to-slate-900 p-6 sm:p-8 rounded-3xl text-white text-center shadow-lg border border-teal-800/50">
              <h3 className="text-xl sm:text-2xl font-black mb-2 tracking-tight">Pronto para Testar o Conhecimento em Alto Nível?</h3>
              <p className="text-xs sm:text-sm text-teal-200/90 max-w-xl mx-auto mb-6 leading-relaxed">
                Aplique estas diretrizes estratégicas agora mesmo no Simulado Master de 40 questões inéditas de Língua Portuguesa com cronômetro de prova.
              </p>
              <button
                onClick={() => { setCurrentView('simulado'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-teal-400 to-emerald-500 text-slate-950 font-black text-xs sm:text-sm shadow-md hover:scale-105 transition-all cursor-pointer inline-flex items-center gap-2"
              >
                <Target className="w-4 h-4" />
                <span>Começar Simulado Master Unicamp (40Q)</span>
              </button>
            </div>
          </motion.div>
        ) : currentView === 'simulado' ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full"
          >
            <div className="mb-6 sm:mb-8 text-center max-w-3xl mx-auto px-2">
              <div className={`inline-flex items-center justify-center p-3 rounded-2xl mb-3 shadow-xs ${
                isPortuguese ? 'bg-teal-100 text-teal-700' : 'bg-indigo-100 text-indigo-600'
              }`}>
                <Trophy className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 mb-2 sm:mb-3 tracking-tight">
                {isPortuguese 
                  ? 'Simulado Master: 40 Questões Inéditas de Língua Portuguesa' 
                  : 'Simulado Master: 100 Questões Inéditas de Biblioteconomia'}
              </h2>
              <p className="text-slate-600 text-xs sm:text-base font-medium leading-relaxed">
                {isPortuguese ? (
                  <>
                    Elaborado com o rigor da <strong>Vunesp / Funcamp</strong>, cobrindo os 17 tópicos do edital. Distratores balanceados em extensão textual para evitar indução de resposta, com gabarito equilibrado e comentário pedagógico detalhado do professor.
                  </>
                ) : (
                  <>
                    Elaborado com o nível de exigência da <strong>Vunesp / Cebraspe</strong>. Contém distratores clássicos, cascas de banana conceituais e comentário pedagógico detalhado do professor para cada uma das alternativas.
                  </>
                )}
              </p>
            </div>
            <Simulado key={discipline} discipline={discipline} />
          </motion.div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start relative">
            
            {/* Mobile Module Quick Bar (Touch Card to Open Drawer) */}
            <div className="lg:hidden w-full bg-white p-3.5 rounded-2xl shadow-xs border border-slate-200 flex items-center justify-between">
              <div className="flex-1 min-w-0 pr-3">
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full ${isPortuguese ? 'bg-teal-500' : 'bg-indigo-600'}`}></span>
                  <span>{isPortuguese ? 'Língua Portuguesa' : 'Biblioteconomia'} • Módulo Atual</span>
                </div>
                <div className="text-sm font-extrabold text-slate-900 truncate mt-0.5">
                  {activeModule.title.replace(/^\d+\.\s/, '')}
                </div>
              </div>
              <button
                onClick={() => setMobileDrawerOpen(true)}
                className={`px-3 py-1.5 rounded-xl text-xs font-black flex items-center gap-1 shadow-xs shrink-0 ${
                  isPortuguese ? 'bg-teal-600 text-white' : 'bg-indigo-600 text-white'
                }`}
              >
                <span>{activeModule.id.toUpperCase()}</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Desktop Sidebar Modules */}
            <aside className="hidden lg:flex w-88 shrink-0 sticky top-24 max-h-[calc(100vh-7.5rem)] flex-col">
              <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-4 flex flex-col h-full overflow-hidden">
                
                {/* Discipline Header Ribbon */}
                <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className={`w-2.5 h-2.5 rounded-full ${isPortuguese ? 'bg-teal-500' : 'bg-indigo-600'}`}></span>
                    <span className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
                      {isPortuguese ? 'Língua Portuguesa' : 'Biblioteconomia'}
                    </span>
                  </div>
                  <span className="text-[11px] font-bold text-slate-400">
                    {completedModules.size}/{activeModulesList.length} concluídos
                  </span>
                </div>

                {/* Search Bar */}
                <div className="relative mb-3">
                  <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={`Filtrar tópicos (${isPortuguese ? 'ex: crase, concordância' : 'ex: RDA, MARC'})...`}
                    className="w-full pl-9 pr-8 py-2 bg-slate-50 hover:bg-slate-100/70 focus:bg-white text-xs font-medium text-slate-800 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-slate-400"
                  />
                  {searchQuery && (
                    <button 
                      onClick={() => setSearchQuery('')}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* Category Filter Chips (Wrap gracefully, NO TRUNCATION!) */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {activeCategoryFilters.map(f => {
                    const isSelected = selectedCategory === f.key;
                    return (
                      <button
                        key={f.key}
                        onClick={() => setSelectedCategory(f.key)}
                        className={`px-2.5 py-1.5 rounded-xl text-[11px] font-bold transition-all flex items-center gap-1.5 border ${
                          isSelected 
                            ? (isPortuguese 
                                ? 'bg-gradient-to-r from-teal-600 to-emerald-600 text-white border-teal-600 shadow-xs' 
                                : 'bg-gradient-to-r from-indigo-600 to-indigo-700 text-white border-indigo-600 shadow-xs')
                            : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200/80'
                        }`}
                      >
                        <span>{f.label}</span>
                        <span className={`text-[10px] font-black px-1.5 py-0.2 rounded-md ${
                          isSelected 
                            ? (isPortuguese ? 'bg-teal-900/60 text-white' : 'bg-indigo-950/60 text-white')
                            : 'bg-slate-200/80 text-slate-600'
                        }`}>
                          {f.count}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Modules Navigation List */}
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest px-1 py-1.5 flex items-center justify-between border-t border-slate-100 pt-2">
                  <span>Conteúdo Programático</span>
                  <span className="text-slate-500 font-extrabold">{filteredModules.length} módulos</span>
                </div>

                <nav className="flex-1 overflow-y-auto space-y-1.5 pr-1 mt-1 scrollbar-thin">
                  {filteredModules.length === 0 ? (
                    <div className="p-6 text-center text-slate-400 text-xs">
                      Nenhum módulo encontrado para "{searchQuery}".
                    </div>
                  ) : (
                    filteredModules.map((mod) => {
                      const isCompleted = completedModules.has(mod.id);
                      const isActive = activeModule.id === mod.id;
                      const catMeta = activeCategoriesMap[mod.id];
                      const moduleNum = parseInt(mod.id.replace(/[^\d]/g, ''), 10);

                      return (
                        <button
                          key={mod.id}
                          onClick={() => handleSelectModule(mod)}
                          className={`group w-full text-left p-3 rounded-2xl text-xs transition-all duration-150 flex items-start gap-3 border ${
                            isActive 
                              ? (isPortuguese 
                                  ? 'bg-teal-50/95 border-l-4 border-l-teal-600 border-teal-300 text-teal-950 shadow-xs ring-1 ring-teal-500/20' 
                                  : 'bg-indigo-50/95 border-l-4 border-l-indigo-600 border-indigo-300 text-indigo-950 shadow-xs ring-1 ring-indigo-500/20')
                              : isCompleted
                                ? 'bg-white border-slate-200/80 text-slate-800 hover:bg-slate-50/80 hover:border-slate-300'
                                : 'bg-white border-slate-200/70 text-slate-700 hover:bg-slate-50/80 hover:border-slate-300'
                          }`}
                        >
                          {/* Module Number or Completed Checkmark */}
                          <div className="mt-0.5 shrink-0">
                            {isCompleted ? (
                              <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-xs">
                                <Check className="w-3.5 h-3.5 stroke-[3]" />
                              </div>
                            ) : (
                              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-[10px] font-black transition-colors ${
                                isActive 
                                  ? (isPortuguese ? 'border-teal-600 text-teal-700 bg-white shadow-xs' : 'border-indigo-600 text-indigo-600 bg-white shadow-xs')
                                  : 'border-slate-300 text-slate-400 group-hover:border-slate-400'
                              }`}>
                                {moduleNum.toString().padStart(2, '0')}
                              </div>
                            )}
                          </div>

                          {/* Title & Category Badge */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-1 mb-1">
                              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${catMeta?.badgeBg || 'bg-slate-100'} ${catMeta?.badgeBorder || 'border-slate-200'} ${catMeta?.badgeText || 'text-slate-700'}`}>
                                {catMeta?.categoryShort || 'Tópico'}
                              </span>
                              <span className="text-[10px] font-medium text-slate-400 flex items-center gap-1">
                                <Clock className="w-3 h-3 text-slate-300" />
                                {catMeta?.estimatedMinutes || 12} min
                              </span>
                            </div>
                            
                            <h4 className={`text-[13px] leading-snug line-clamp-2 ${
                              isActive 
                                ? (isPortuguese ? 'font-black text-teal-950' : 'font-black text-indigo-950')
                                : 'font-semibold text-slate-800 group-hover:text-indigo-900'
                            }`}>
                              {mod.title.replace(/^\d+\.\s/, '')}
                            </h4>
                          </div>

                          {isActive && (
                            <ChevronRight className={`w-4 h-4 shrink-0 self-center ${isPortuguese ? 'text-teal-600' : 'text-indigo-600'}`} />
                          )}
                        </button>
                      );
                    })
                  )}
                </nav>

                {/* Sidebar Footer Hint */}
                <div className="mt-3 pt-3 border-t border-slate-100 text-center">
                  <button
                    onClick={() => { setCurrentView('simulado'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className={`w-full py-2 px-3 text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer ${
                      isPortuguese ? 'bg-slate-900 hover:bg-teal-600' : 'bg-slate-900 hover:bg-indigo-600'
                    }`}
                  >
                    <Target className="w-3.5 h-3.5" />
                    Ir para Simulado ({isPortuguese ? '40Q' : '100Q'})
                  </button>
                </div>

              </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 w-full min-w-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeModule.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="space-y-6"
                >
                  
                  {/* Module Header Card */}
                  <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-5 sm:p-8 lg:p-10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
                      <BookOpen className="w-64 h-64" />
                    </div>
                    
                    {/* Breadcrumbs & Dynamic Checkpoint Button */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 relative z-10">
                      <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-slate-500">
                        <span className={`flex items-center gap-1 font-black ${isPortuguese ? 'text-teal-700' : 'text-indigo-600'}`}>
                          {isPortuguese ? <Languages className="w-3.5 h-3.5" /> : <Compass className="w-3.5 h-3.5" />}
                          {isPortuguese ? 'Língua Portuguesa' : 'Biblioteconomia'}
                        </span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
                        <span className="px-2.5 py-0.5 bg-slate-100 text-slate-700 rounded-md font-mono font-bold">
                          MÓDULO {activeModule.id.replace(/[^\d]/g, '').padStart(2, '0')}
                        </span>
                        {currentCategory && (
                          <>
                            <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
                            <span className={`px-2 py-0.5 rounded-md border ${currentCategory.badgeBg} ${currentCategory.badgeText}`}>
                              {currentCategory.categoryLabel}
                            </span>
                          </>
                        )}
                        <span className="flex items-center gap-1 text-slate-400 font-medium sm:ml-2">
                          <Clock className="w-3.5 h-3.5" /> ~{currentCategory?.estimatedMinutes || 12} min
                        </span>
                      </div>

                      {/* Elevated Completion Button */}
                      <button
                        onClick={() => toggleComplete(activeModule.id)}
                        className={`shrink-0 flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-2xl font-black text-xs sm:text-sm transition-all shadow-xs cursor-pointer ${
                          isCurrentCompleted
                            ? 'bg-emerald-600 text-white hover:bg-emerald-700 ring-2 ring-emerald-400/40 shadow-emerald-100'
                            : 'bg-slate-900 text-white hover:bg-slate-800'
                        }`}
                      >
                        {isCurrentCompleted ? (
                          <>
                            <Check className="w-4 h-4 stroke-[3]" />
                            <span>Módulo Concluído!</span>
                          </>
                        ) : (
                          <>
                            <CheckCircle2 className="w-4 h-4 text-slate-300" />
                            <span>Marcar como Concluído</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Title */}
                    <h1 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight mb-6 relative z-10">
                      {activeModule.title.replace(/^\d+\.\s/, '')}
                    </h1>

                    {/* Quick Jump Anchor Pills Bar (UX Supercharger!) */}
                    <div className="relative z-10 bg-slate-50/90 p-2 sm:p-2.5 rounded-2xl border border-slate-200/90 mb-6">
                      <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 px-1">
                        <Bookmark className="w-3 h-3 text-indigo-500" />
                        <span>Ir direto para uma seção:</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        <button
                          onClick={() => handleJumpToSection('sec-theory', 'theory')}
                          className="px-2.5 py-1.5 rounded-xl bg-white hover:bg-indigo-50 text-slate-700 hover:text-indigo-900 font-bold text-xs border border-slate-200/80 transition-colors shadow-2xs flex items-center gap-1.5 cursor-pointer"
                        >
                          <BookOpen className="w-3.5 h-3.5 text-indigo-600" />
                          <span>Teoria</span>
                        </button>
                        <button
                          onClick={() => handleJumpToSection('sec-authors', 'authors')}
                          className="px-2.5 py-1.5 rounded-xl bg-white hover:bg-emerald-50 text-slate-700 hover:text-emerald-900 font-bold text-xs border border-slate-200/80 transition-colors shadow-2xs flex items-center gap-1.5 cursor-pointer"
                        >
                          <GraduationCap className="w-3.5 h-3.5 text-emerald-600" />
                          <span>{isPortuguese ? 'Gramáticos' : 'Marcos Teóricos'}</span>
                        </button>
                        <button
                          onClick={() => handleJumpToSection('sec-unicamp')}
                          className="px-2.5 py-1.5 rounded-xl bg-white hover:bg-rose-50 text-slate-700 hover:text-rose-900 font-bold text-xs border border-slate-200/80 transition-colors shadow-2xs flex items-center gap-1.5 cursor-pointer"
                        >
                          <Crosshair className="w-3.5 h-3.5 text-rose-600" />
                          <span>Conexão Unicamp</span>
                        </button>
                        <button
                          onClick={() => handleJumpToSection('sec-raiox')}
                          className="px-2.5 py-1.5 rounded-xl bg-white hover:bg-amber-50 text-slate-700 hover:text-amber-900 font-bold text-xs border border-slate-200/80 transition-colors shadow-2xs flex items-center gap-1.5 cursor-pointer"
                        >
                          <ShieldAlert className="w-3.5 h-3.5 text-amber-600" />
                          <span>Pegadinhas</span>
                        </button>
                        <button
                          onClick={() => handleJumpToSection('sec-memorizacao')}
                          className="px-2.5 py-1.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 hover:text-slate-900 font-bold text-xs border border-slate-200/80 transition-colors shadow-2xs flex items-center gap-1.5 cursor-pointer"
                        >
                          <Brain className="w-3.5 h-3.5 text-purple-600" />
                          <span>Memorização</span>
                        </button>
                        <button
                          onClick={() => handleJumpToSection('sec-quiz')}
                          className={`px-2.5 py-1.5 rounded-xl font-black text-xs border transition-colors shadow-2xs flex items-center gap-1.5 cursor-pointer ${
                            isPortuguese ? 'bg-teal-50 text-teal-800 border-teal-200 hover:bg-teal-100' : 'bg-indigo-50 text-indigo-800 border-indigo-200 hover:bg-indigo-100'
                          }`}
                        >
                          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                          <span>Quiz (5Q)</span>
                        </button>
                      </div>
                    </div>

                    {/* Accordions for Theory and Authors */}
                    <Accordion 
                      type="multiple" 
                      value={accordionValues} 
                      onValueChange={setAccordionValues} 
                      className="w-full space-y-4 relative z-10"
                    >
                      {/* Teoria Avançada */}
                      <AccordionItem id="sec-theory" value="theory" className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-xs transition-all">
                        <AccordionTrigger className="px-5 sm:px-6 py-4 sm:py-5 hover:bg-slate-50 hover:no-underline transition-colors">
                          <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-xl ${
                              isPortuguese ? 'bg-teal-50 border border-teal-100 text-teal-700' : 'bg-indigo-50 border border-indigo-100 text-indigo-700'
                            }`}>
                              <BookOpen className="w-5 h-5" />
                            </div>
                            <div className="text-left">
                              <span className="font-extrabold text-slate-900 text-base sm:text-xl block">
                                {isPortuguese ? 'Teoria Didática e Desmistificação' : 'Teoria Avançada e Doutrina'}
                              </span>
                              <span className="text-slate-500 text-xs font-normal">
                                {isPortuguese ? 'Conceitos explicados passo a passo com exemplos práticos e desmistificação das regras' : 'Conteúdo técnico exaustivo, normas internacionais e fundamentos'}
                              </span>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-4 sm:px-6 pb-8 pt-2">
                          <div className="max-w-[85ch]">
                            <MarkdownViewer content={activeModule.advancedTheory} />
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      {/* Marcos e Autores */}
                      <AccordionItem id="sec-authors" value="authors" className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-xs transition-all">
                        <AccordionTrigger className="px-5 sm:px-6 py-4 sm:py-5 hover:bg-slate-50 hover:no-underline transition-colors">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-emerald-50 border border-emerald-100 rounded-xl text-emerald-700">
                              <GraduationCap className="w-5 h-5" />
                            </div>
                            <div className="text-left">
                              <span className="font-extrabold text-slate-900 text-base sm:text-xl block">
                                {isPortuguese ? 'Gramáticos de Referência e Marcos Teóricos' : 'Marcos Normativos e Autores Cobrados'}
                              </span>
                              <span className="text-slate-500 text-xs font-normal">
                                {isPortuguese ? 'Bechara, Celso Cunha, Rocha Lima, Koch, Fiorin, Bagno e VOLP/ABL' : 'Teóricos fundamentais, leis, códigos internacionais e doutrina de apoio'}
                              </span>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-4 sm:px-6 pb-6 pt-2">
                          <div className="max-w-[85ch]">
                            <MarkdownViewer content={activeModule.authorsAndFrameworks} />
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                    </Accordion>
                  </div>

                  {/* Operational Cards Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    
                    {/* Conexão Unicamp */}
                    <div id="sec-unicamp">
                      <Card className="border-rose-200/80 bg-gradient-to-br from-white via-rose-50/20 to-white shadow-sm hover:shadow-md transition-shadow rounded-3xl h-full">
                        <CardHeader className="pb-4 bg-rose-50/60 border-b border-rose-100/70 p-5 sm:p-6">
                          <CardTitle className="flex items-center gap-2 text-rose-950 text-lg sm:text-xl font-black">
                            <div className="p-2 bg-rose-100 text-rose-800 rounded-xl">
                              <Crosshair className="w-5 h-5" />
                            </div>
                            {isPortuguese ? 'Perfil de Cobrança: Unicamp & Funcamp' : 'Conexão Unicamp (SBU)'}
                          </CardTitle>
                          <CardDescription className="text-rose-800/80 font-medium pl-11 text-xs sm:text-sm">
                            {isPortuguese ? 'Como as bancas da Unicamp e Funcamp articulam o tema nas provas' : 'Aplicação real nas bibliotecas da Unicamp e rotinas práticas'}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="p-5 sm:p-6">
                          <div className="max-w-none">
                            <MarkdownViewer content={activeModule.unicampContext} />
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Raio-X da Banca (Vunesp / Funcamp) */}
                    <div id="sec-raiox">
                      <Card className="border-amber-200/80 bg-gradient-to-br from-white via-amber-50/30 to-white shadow-sm hover:shadow-md transition-shadow rounded-3xl h-full">
                        <CardHeader className="pb-4 bg-amber-50/60 border-b border-amber-100/70 p-5 sm:p-6">
                          <CardTitle className="flex items-center gap-2 text-amber-950 text-lg sm:text-xl font-black">
                            <div className="p-2 bg-amber-100 text-amber-800 rounded-xl">
                              <ShieldAlert className="w-5 h-5" />
                            </div>
                            Raio-X da Banca & Pegadinhas
                          </CardTitle>
                          <CardDescription className="text-amber-800/80 font-medium pl-11 text-xs sm:text-sm">
                            Tendências de cobrança e distratores recorrentes
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="p-5 sm:p-6 space-y-4">
                          <MarkdownViewer content={activeModule.boardAnalysis.trends} />
                          <div className="bg-amber-100/60 p-4 sm:p-5 rounded-2xl border border-amber-200 text-amber-950 font-medium text-[14.5px] shadow-xs relative overflow-hidden">
                            <AlertTriangle className="absolute top-0 right-0 w-24 h-24 text-amber-500/10 -translate-y-4 translate-x-4 pointer-events-none" />
                            <div className="relative z-10">
                              <MarkdownViewer content={activeModule.boardAnalysis.commonTraps} />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Matriz de Memorização */}
                    <div id="sec-memorizacao" className="lg:col-span-2">
                      <Card className="border-slate-800 shadow-lg hover:shadow-xl transition-shadow overflow-hidden bg-slate-900 text-white rounded-3xl">
                        <CardHeader className="pb-4 bg-slate-950/80 border-b border-slate-800 p-5 sm:p-7">
                          <CardTitle className="flex items-center gap-2 text-white text-lg sm:text-xl font-black">
                            <div className={`p-2 rounded-xl border ${
                              isPortuguese ? 'bg-teal-500/20 text-teal-400 border-teal-500/30' : 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30'
                            }`}>
                              <Brain className="w-5 h-5" />
                            </div>
                            Matriz de Memorização Rápida & Síntese
                          </CardTitle>
                          <CardDescription className="text-slate-400 font-medium pl-11 text-xs sm:text-sm">
                            Tabelas comparativas, mnemônicos e regras de ouro para revisão de véspera
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="p-5 sm:p-8">
                          <div className="max-w-none text-slate-200">
                            <MarkdownViewer content={activeModule.memorizationMatrix} variant="dark" />
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                  </div>

                  {/* Module 5-Question Quiz */}
                  <div id="sec-quiz">
                    <ModuleQuiz key={activeModule.id} moduleId={activeModule.id} moduleTitle={activeModule.title} />
                  </div>

                  {/* Bottom Navigation Pagination Bar */}
                  <div className="bg-white rounded-3xl p-5 sm:p-8 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
                    {prevModule ? (
                      <button
                        onClick={handlePrevModule}
                        className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-2xl border border-slate-200 text-slate-700 hover:bg-slate-50 font-bold text-xs sm:text-sm transition-all cursor-pointer"
                      >
                        <ChevronLeft className="w-4 h-4 shrink-0" />
                        <div className="text-left">
                          <div className="text-[10px] text-slate-400 uppercase tracking-wider">Módulo Anterior</div>
                          <div className="text-xs font-bold line-clamp-1">{prevModule.title.replace(/^\d+\.\s/, '')}</div>
                        </div>
                      </button>
                    ) : (
                      <div className="hidden sm:block"></div>
                    )}

                    <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                      <button
                        onClick={handleNextModule}
                        className={`w-full sm:w-auto flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 text-white rounded-2xl font-black text-xs sm:text-sm transition-all shadow-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer ${
                          isPortuguese
                            ? 'bg-teal-600 hover:bg-teal-700 shadow-teal-100 hover:shadow-teal-200'
                            : 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-100 hover:shadow-indigo-200'
                        }`}
                      >
                        <span>
                          {nextModule ? 'Concluir & Próximo Módulo' : 'Finalizar Trilha e Ir para Simulado'}
                        </span>
                        <ChevronRight className="w-5 h-5 shrink-0" />
                      </button>
                    </div>
                  </div>

                </motion.div>
              </AnimatePresence>
            </main>
          </div>
        )}
      </div>

      {/* Mobile Slide-Up Module Drawer (Bottom Sheet) */}
      <AnimatePresence>
        {mobileDrawerOpen && (
          <div className="fixed inset-0 z-50 lg:hidden flex flex-col justify-end">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileDrawerOpen(false)}
              className="absolute inset-0 bg-slate-950/70 backdrop-blur-xs"
            />

            {/* Sheet Content */}
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="relative bg-white rounded-t-3xl shadow-2xl max-h-[85vh] flex flex-col overflow-hidden z-10"
            >
              {/* Top Handle */}
              <div className="pt-3 pb-1 flex justify-center">
                <div className="w-12 h-1.5 bg-slate-300 rounded-full" />
              </div>

              {/* Drawer Header */}
              <div className="p-4 border-b border-slate-100 flex items-center justify-between">
                <div>
                  <h3 className="font-extrabold text-base text-slate-900">
                    {isPortuguese ? 'Módulos de Língua Portuguesa' : 'Módulos de Biblioteconomia'}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    {completedModules.size} de {activeModulesList.length} concluídos ({progressPercentage}%)
                  </p>
                </div>
                <button
                  onClick={() => setMobileDrawerOpen(false)}
                  className="p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Drawer Search */}
              <div className="p-3 border-b border-slate-100">
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Buscar tópico..."
                    className="w-full pl-9 pr-8 py-2 bg-slate-50 text-xs font-medium rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
                  />
                  {searchQuery && (
                    <button 
                      onClick={() => setSearchQuery('')}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 p-1"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* Filter Chips inside Drawer */}
                <div className="flex flex-wrap gap-1 mt-2.5 max-h-24 overflow-y-auto">
                  {activeCategoryFilters.map(f => {
                    const isSelected = selectedCategory === f.key;
                    return (
                      <button
                        key={f.key}
                        onClick={() => setSelectedCategory(f.key)}
                        className={`px-2 py-1 rounded-lg text-[10px] font-bold border transition-colors ${
                          isSelected 
                            ? (isPortuguese ? 'bg-teal-600 text-white border-teal-600' : 'bg-indigo-600 text-white border-indigo-600')
                            : 'bg-slate-100 text-slate-600 border-slate-200'
                        }`}
                      >
                        {f.label} ({f.count})
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Module List inside Drawer */}
              <div className="flex-1 overflow-y-auto p-3 space-y-2">
                {filteredModules.map((mod) => {
                  const isCompleted = completedModules.has(mod.id);
                  const isActive = activeModule.id === mod.id;
                  const catMeta = activeCategoriesMap[mod.id];
                  const moduleNum = parseInt(mod.id.replace(/[^\d]/g, ''), 10);

                  return (
                    <button
                      key={mod.id}
                      onClick={() => handleSelectModule(mod)}
                      className={`w-full text-left p-3 rounded-2xl text-xs flex items-center gap-3 border transition-colors ${
                        isActive 
                          ? (isPortuguese ? 'bg-teal-50 border-teal-400 text-teal-950 font-black' : 'bg-indigo-50 border-indigo-400 text-indigo-950 font-black')
                          : 'bg-white border-slate-200 text-slate-800 hover:bg-slate-50'
                      }`}
                    >
                      <div className="shrink-0">
                        {isCompleted ? (
                          <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center">
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </div>
                        ) : (
                          <div className="w-6 h-6 rounded-full border-2 border-slate-300 text-slate-400 flex items-center justify-center text-[10px] font-bold">
                            {moduleNum.toString().padStart(2, '0')}
                          </div>
                        )}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="text-[10px] text-slate-400 font-medium">
                          {catMeta?.categoryShort} • {catMeta?.estimatedMinutes || 12} min
                        </div>
                        <div className="truncate text-xs font-bold text-slate-900">
                          {mod.title.replace(/^\d+\.\s/, '')}
                        </div>
                      </div>

                      {isActive && <ChevronRight className="w-4 h-4 text-teal-600 shrink-0" />}
                    </button>
                  );
                })}
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Floating "Voltar ao Topo" (Back to Top) Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-20 md:bottom-8 right-4 md:right-8 z-30 p-3 rounded-2xl bg-slate-900/90 text-white shadow-xl hover:bg-slate-800 border border-slate-700/80 backdrop-blur-md cursor-pointer transition-transform hover:scale-110 active:scale-95"
            title="Voltar ao topo da página"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Mobile Thumb-Friendly Fixed Bottom Navigation Bar (md:hidden) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 shadow-2xl px-2 py-1.5 flex items-center justify-around">
        {/* Tab 1: Trilha Teórica */}
        <button
          onClick={() => { setCurrentView('curso'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-colors cursor-pointer ${
            currentView === 'curso'
              ? (isPortuguese ? 'text-teal-400 font-extrabold' : 'text-indigo-400 font-extrabold')
              : 'text-slate-400'
          }`}
        >
          <BookOpen className="w-4 h-4 mb-0.5" />
          <span className="text-[10px]">Trilha</span>
        </button>

        {/* Tab 2: Módulos (Opens Drawer) */}
        <button
          onClick={() => setMobileDrawerOpen(true)}
          className="flex flex-col items-center justify-center py-1 px-3 rounded-xl text-slate-300 hover:text-white transition-colors cursor-pointer"
        >
          <div className="relative">
            <Layers className="w-4 h-4 mb-0.5" />
            <span className="absolute -top-1 -right-2 px-1 py-0.2 bg-emerald-500 text-white text-[8px] font-black rounded-full">
              {completedModules.size}
            </span>
          </div>
          <span className="text-[10px]">Módulos</span>
        </button>

        {/* Tab 3: Simulado Master */}
        <button
          onClick={() => { setCurrentView('simulado'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-colors cursor-pointer ${
            currentView === 'simulado'
              ? (isPortuguese ? 'text-teal-400 font-extrabold' : 'text-indigo-400 font-extrabold')
              : 'text-slate-400'
          }`}
        >
          <Target className="w-4 h-4 mb-0.5" />
          <span className="text-[10px]">Simulado ({isPortuguese ? '40Q' : '100Q'})</span>
        </button>

        {/* Tab 4: Raio-X IEL (LP) or Progresso (BIB) */}
        {isPortuguese ? (
          <button
            onClick={() => { setCurrentView('guia-unicamp'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-colors cursor-pointer ${
              currentView === 'guia-unicamp'
                ? 'text-amber-300 font-extrabold'
                : 'text-slate-400'
            }`}
          >
            <GraduationCap className="w-4 h-4 mb-0.5" />
            <span className="text-[10px]">Raio-X IEL</span>
          </button>
        ) : (
          <button
            onClick={() => {
              window.alert(`Progresso do Edital: ${completedModules.size} de ${activeModulesList.length} módulos concluídos (${progressPercentage}%).`);
            }}
            className="flex flex-col items-center justify-center py-1 px-3 rounded-xl text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <Trophy className="w-4 h-4 mb-0.5 text-amber-400" />
            <span className="text-[10px]">{progressPercentage}% Edital</span>
          </button>
        )}
      </nav>

    </div>
  );
}
