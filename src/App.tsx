import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MarkdownViewer } from './components/MarkdownViewer';
import { modulesData } from './data';
import type { AdvancedTopic } from './data/types';
import Simulado from './components/Simulado';
import { MODULE_CATEGORIES, CATEGORY_FILTERS } from './data/categories';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './components/ui/accordion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { 
  BookOpen, AlertTriangle, Crosshair, Brain, GraduationCap, 
  Library, ShieldAlert, CheckCircle2, PlayCircle, Target, 
  Trophy, Search, X, Clock, ChevronRight, ChevronLeft, 
  RotateCcw, Compass, Check, ChevronDown
} from 'lucide-react';

const STORAGE_KEY_COMPLETED = 'funcamp_completed_modules';
const STORAGE_KEY_ACTIVE = 'funcamp_active_module_id';

function App() {
  // Persistence for active module
  const [activeModule, setActiveModule] = useState<AdvancedTopic>(() => {
    try {
      const savedId = localStorage.getItem(STORAGE_KEY_ACTIVE);
      const found = modulesData.find(m => m.id === savedId);
      return found || modulesData[0];
    } catch {
      return modulesData[0];
    }
  });

  const [currentView, setCurrentView] = useState<'curso' | 'simulado'>('curso');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Persistence for completed modules
  const [completedModules, setCompletedModules] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_COMPLETED);
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch {
      return new Set();
    }
  });

  // Save completed modules to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_COMPLETED, JSON.stringify(Array.from(completedModules)));
    } catch (e) {
      console.error('Failed to save completed modules', e);
    }
  }, [completedModules]);

  // Save active module to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_ACTIVE, activeModule.id);
    } catch (e) {
      console.error('Failed to save active module', e);
    }
  }, [activeModule.id]);

  const toggleComplete = (id: string) => {
    setCompletedModules(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const handleResetProgress = () => {
    if (window.confirm('Deseja realmente zerar o progresso dos módulos concluídos?')) {
      setCompletedModules(new Set());
      localStorage.removeItem(STORAGE_KEY_COMPLETED);
    }
  };

  // Filtered module list based on search and category
  const filteredModules = useMemo(() => {
    return modulesData.filter(mod => {
      const matchesSearch = 
        mod.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mod.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mod.advancedTheory.toLowerCase().includes(searchQuery.toLowerCase());
      
      const categoryData = MODULE_CATEGORIES[mod.id];
      const matchesCategory = 
        selectedCategory === 'all' || 
        (categoryData && categoryData.category === selectedCategory);

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const currentIndex = modulesData.findIndex(m => m.id === activeModule.id);
  const prevModule = currentIndex > 0 ? modulesData[currentIndex - 1] : null;
  const nextModule = currentIndex < modulesData.length - 1 ? modulesData[currentIndex + 1] : null;
  const isCurrentCompleted = completedModules.has(activeModule.id);
  const currentCategory = MODULE_CATEGORIES[activeModule.id];

  const progressPercentage = Math.round((completedModules.size / modulesData.length) * 100);

  const handleSelectModule = (mod: AdvancedTopic) => {
    setActiveModule(mod);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNextModule = () => {
    if (!completedModules.has(activeModule.id)) {
      toggleComplete(activeModule.id);
    }
    if (nextModule) {
      setActiveModule(nextModule);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setCurrentView('simulado');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevModule = () => {
    if (prevModule) {
      setActiveModule(prevModule);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 font-sans selection:bg-indigo-500 selection:text-white">
      
      {/* Top Navbar */}
      <header className="sticky top-0 z-50 bg-[#0f172a]/95 backdrop-blur-md text-white border-b border-slate-800 shadow-lg">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          
          {/* Logo & Platform Info */}
          <div className="flex items-center gap-6">
            <div 
              onClick={() => { setCurrentView('curso'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="p-2 bg-gradient-to-br from-indigo-500 via-indigo-600 to-purple-600 rounded-xl shadow-md group-hover:scale-105 transition-transform">
                <Library className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-lg font-black tracking-tight leading-none text-slate-50 group-hover:text-indigo-300 transition-colors">
                    Revisão Master
                  </h1>
                  <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-rose-900/60 text-rose-200 border border-rose-700/50">
                    Unicamp
                  </span>
                </div>
                <p className="text-indigo-300 text-[10px] font-bold tracking-[0.2em] uppercase mt-0.5">
                  Funcamp 2026 • Biblioteconomia
                </p>
              </div>
            </div>

            <div className="hidden lg:flex h-6 w-px bg-slate-800 mx-2"></div>

            {/* Desktop View Switcher */}
            <nav className="hidden md:flex bg-slate-800/70 p-1 rounded-xl ring-1 ring-slate-700/60">
              <button
                onClick={() => setCurrentView('curso')}
                className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  currentView === 'curso' 
                    ? 'bg-indigo-600 text-white shadow-md' 
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <PlayCircle className="w-4 h-4" />
                Trilha Teórica (23)
              </button>
              <button
                onClick={() => setCurrentView('simulado')}
                className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  currentView === 'simulado' 
                    ? 'bg-indigo-600 text-white shadow-md' 
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Target className="w-4 h-4" />
                Simulado Master (100Q)
              </button>
            </nav>
          </div>

          {/* Progress & Quick Actions */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-3 text-right">
              <div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center justify-end gap-1.5">
                  <span>Progresso do Edital</span>
                  <span className="text-slate-300 font-extrabold">{completedModules.size}/23</span>
                </div>
                <div className="w-32 h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-indigo-500 to-emerald-400 rounded-full transition-all duration-500"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
              </div>
              <div className="text-base font-black text-emerald-400 w-11">{progressPercentage}%</div>
            </div>

            {completedModules.size > 0 && (
              <button
                onClick={handleResetProgress}
                title="Zerar progresso dos tópicos"
                className="hidden xl:flex items-center gap-1 text-[11px] font-bold text-slate-400 hover:text-rose-300 transition-colors px-2 py-1 rounded bg-slate-800/40"
              >
                <RotateCcw className="w-3 h-3" />
                Zerar
              </button>
            )}

            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center border-2 border-indigo-400/50 shadow-inner">
              <span className="font-extrabold text-xs text-white">BIB</span>
            </div>
          </div>
        </div>

        {/* Mobile View Switcher */}
        <div className="md:hidden flex border-t border-slate-800 bg-slate-900">
          <button
            onClick={() => setCurrentView('curso')}
            className={`flex-1 flex justify-center items-center gap-2 py-2.5 text-xs font-bold border-b-2 ${
              currentView === 'curso' ? 'border-indigo-500 text-indigo-400' : 'border-transparent text-slate-400'
            }`}
          >
            <PlayCircle className="w-3.5 h-3.5" />
            Trilha Teórica ({completedModules.size}/23)
          </button>
          <button
            onClick={() => setCurrentView('simulado')}
            className={`flex-1 flex justify-center items-center gap-2 py-2.5 text-xs font-bold border-b-2 ${
              currentView === 'simulado' ? 'border-indigo-500 text-indigo-400' : 'border-transparent text-slate-400'
            }`}
          >
            <Target className="w-3.5 h-3.5" />
            Simulado 100Q
          </button>
        </div>
      </header>

      {/* Main Container */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-6 sm:py-8">
        
        {currentView === 'simulado' ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full"
          >
            <div className="mb-8 text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center justify-center p-3.5 bg-indigo-100 text-indigo-600 rounded-2xl mb-4 shadow-xs">
                <Trophy className="w-8 h-8" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-3 tracking-tight">
                Simulado Master: 100 Questões Inéditas
              </h2>
              <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
                Elaborado com o nível de exigência da <strong>Vunesp / Cebraspe</strong>. Contém distratores clássicos, cascas de banana conceituais e comentário pedagógico detalhado do professor para cada uma das alternativas.
              </p>
            </div>
            <Simulado />
          </motion.div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8 items-start relative">
            
            {/* Mobile Module Selector Button */}
            <div className="lg:hidden w-full bg-white p-4 rounded-2xl shadow-sm border border-slate-200">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-full flex items-center justify-between text-left"
              >
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Módulo Atual</div>
                  <div className="text-base font-bold text-slate-900 line-clamp-1">{activeModule.title}</div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-black text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-lg">
                    {activeModule.id.toUpperCase()}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${mobileMenuOpen ? 'rotate-180' : ''}`} />
                </div>
              </button>
            </div>

            {/* Sidebar Modules (Hotmart / Coursera Style) */}
            <aside className={`w-full lg:w-88 shrink-0 lg:sticky lg:top-24 max-h-[calc(100vh-8rem)] flex flex-col ${mobileMenuOpen ? 'block' : 'hidden lg:flex'}`}>
              <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-4 flex flex-col h-full overflow-hidden">
                
                {/* Search Bar */}
                <div className="relative mb-3">
                  <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Filtrar tópico (ex: RDA, AACR2, CDD)..."
                    className="w-full pl-9 pr-8 py-2.5 bg-slate-50 hover:bg-slate-100/80 focus:bg-white text-xs font-medium text-slate-800 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-slate-400"
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

                {/* Category Filter Chips */}
                <div className="flex gap-1.5 overflow-x-auto pb-2 mb-2 scrollbar-none">
                  {CATEGORY_FILTERS.map(f => (
                    <button
                      key={f.key}
                      onClick={() => setSelectedCategory(f.key)}
                      className={`whitespace-nowrap px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all ${
                        selectedCategory === f.key 
                          ? 'bg-slate-900 text-white shadow-xs' 
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>

                {/* Modules Navigation List */}
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest px-2 py-1 flex items-center justify-between border-t border-slate-100 pt-2">
                  <span>Conteúdo Programático</span>
                  <span>{filteredModules.length} módulos</span>
                </div>

                <nav className="flex-1 overflow-y-auto space-y-1 pr-1 mt-1">
                  {filteredModules.length === 0 ? (
                    <div className="p-6 text-center text-slate-400 text-xs">
                      Nenhum módulo encontrado para "{searchQuery}".
                    </div>
                  ) : (
                    filteredModules.map((mod) => {
                      const isCompleted = completedModules.has(mod.id);
                      const isActive = activeModule.id === mod.id;
                      const catMeta = MODULE_CATEGORIES[mod.id];
                      const moduleNum = parseInt(mod.id.replace('m', ''), 10);

                      return (
                        <button
                          key={mod.id}
                          onClick={() => handleSelectModule(mod)}
                          className={`group w-full text-left p-3 rounded-2xl text-xs transition-all duration-150 flex items-start gap-3 border ${
                            isActive 
                              ? 'bg-indigo-50/90 border-indigo-200 text-indigo-950 shadow-xs ring-1 ring-indigo-200' 
                              : 'bg-white border-transparent text-slate-700 hover:bg-slate-50 hover:border-slate-200'
                          }`}
                        >
                          {/* Module Number or Completed Checkmark */}
                          <div className="mt-0.5 shrink-0">
                            {isCompleted ? (
                              <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-xs">
                                <Check className="w-3 h-3 stroke-[3]" />
                              </div>
                            ) : (
                              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center text-[10px] font-black transition-colors ${
                                isActive 
                                  ? 'border-indigo-600 text-indigo-600 bg-white' 
                                  : 'border-slate-300 text-slate-400 group-hover:border-slate-400'
                              }`}>
                                {moduleNum}
                              </div>
                            )}
                          </div>

                          {/* Title & Metadata */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1.5 mb-0.5">
                              {catMeta && (
                                <span className={`text-[9px] font-extrabold uppercase tracking-wider px-1.5 py-0.2 rounded border ${catMeta.badgeBg} ${catMeta.badgeText}`}>
                                  {catMeta.categoryLabel.split(' ')[0]}
                                </span>
                              )}
                              <span className="text-[10px] text-slate-400 font-medium">
                                ~{catMeta?.estimatedMinutes || 10} min
                              </span>
                            </div>
                            <span className={`block line-clamp-2 leading-tight ${isActive ? 'font-bold text-indigo-950' : 'font-medium'}`}>
                              {mod.title.replace(/^\d+\.\s/, '')}
                            </span>
                          </div>

                          {isActive && (
                            <ChevronRight className="w-4 h-4 text-indigo-600 shrink-0 self-center" />
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
                    className="w-full py-2 px-3 bg-slate-900 hover:bg-indigo-600 text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-2 shadow-xs"
                  >
                    <Target className="w-3.5 h-3.5" />
                    Ir para Simulado 100Q
                  </button>
                </div>

              </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 w-full min-w-0 pb-20">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeModule.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="space-y-6"
                >
                  
                  {/* Module Header Card */}
                  <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6 sm:p-10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
                      <BookOpen className="w-64 h-64" />
                    </div>
                    
                    {/* Breadcrumbs & Tag Header */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-6 relative z-10">
                      <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-slate-500">
                        <span className="text-indigo-600 flex items-center gap-1">
                          <Compass className="w-3.5 h-3.5" />
                          Trilha Teórica
                        </span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
                        <span className="px-2.5 py-0.5 bg-slate-100 text-slate-700 rounded-md font-mono font-bold">
                          MÓDULO {activeModule.id.replace('m', '').padStart(2, '0')}
                        </span>
                        {currentCategory && (
                          <>
                            <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
                            <span className={`px-2 py-0.5 rounded-md border ${currentCategory.badgeBg} ${currentCategory.badgeText}`}>
                              {currentCategory.categoryLabel}
                            </span>
                          </>
                        )}
                        <span className="flex items-center gap-1 text-slate-400 font-medium ml-2">
                          <Clock className="w-3.5 h-3.5" /> ~{currentCategory?.estimatedMinutes || 12} min de estudo
                        </span>
                      </div>

                      {/* Complete Status Button */}
                      <button
                        onClick={() => toggleComplete(activeModule.id)}
                        className={`shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-xs ${
                          isCurrentCompleted
                            ? 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200 border border-emerald-200'
                            : 'bg-slate-900 text-white hover:bg-slate-800'
                        }`}
                      >
                        <CheckCircle2 className={`w-4 h-4 ${isCurrentCompleted ? 'text-emerald-600' : 'text-slate-400'}`} />
                        {isCurrentCompleted ? 'Módulo Concluído' : 'Marcar como Concluído'}
                      </button>
                    </div>

                    {/* Title */}
                    <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight mb-8 relative z-10">
                      {activeModule.title.replace(/^\d+\.\s/, '')}
                    </h1>

                    {/* Accordions for Theory and Authors */}
                    <Accordion type="multiple" defaultValue={["theory", "authors"]} className="w-full space-y-4 relative z-10">
                      
                      {/* Teoria Avançada */}
                      <AccordionItem value="theory" className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-xs transition-all">
                        <AccordionTrigger className="px-6 py-5 hover:bg-slate-50 hover:no-underline transition-colors">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-indigo-50 border border-indigo-100 rounded-xl text-indigo-700">
                              <BookOpen className="w-5 h-5" />
                            </div>
                            <div className="text-left">
                              <span className="font-extrabold text-slate-900 text-lg sm:text-xl block">
                                Teoria Avançada e Doutrina
                              </span>
                              <span className="text-slate-500 text-xs font-normal">
                                Conteúdo técnico exaustivo, normas internacionais e fundamentos
                              </span>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-8 pt-2">
                          <div className="max-w-[85ch]">
                            <MarkdownViewer content={activeModule.advancedTheory} />
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      {/* Marcos e Autores */}
                      <AccordionItem value="authors" className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-xs transition-all">
                        <AccordionTrigger className="px-6 py-5 hover:bg-slate-50 hover:no-underline transition-colors">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-emerald-50 border border-emerald-100 rounded-xl text-emerald-700">
                              <GraduationCap className="w-5 h-5" />
                            </div>
                            <div className="text-left">
                              <span className="font-extrabold text-slate-900 text-lg sm:text-xl block">
                                Marcos Normativos e Autores Cobrados
                              </span>
                              <span className="text-slate-500 text-xs font-normal">
                                Teóricos fundamentais, leis, códigos internacionais e doutrina de apoio
                              </span>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-6 pt-2">
                          <div className="max-w-[85ch]">
                            <MarkdownViewer content={activeModule.authorsAndFrameworks} />
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                    </Accordion>
                  </div>

                  {/* Operational Cards Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    
                    {/* Conexão Unicamp (SBU) */}
                    <Card className="border-rose-200/80 bg-gradient-to-br from-white via-rose-50/20 to-white shadow-sm hover:shadow-md transition-shadow">
                      <CardHeader className="pb-4 bg-rose-50/60 border-b border-rose-100/70">
                        <CardTitle className="flex items-center gap-2 text-rose-950 text-xl font-black">
                          <div className="p-2 bg-rose-100 text-rose-800 rounded-xl">
                            <Crosshair className="w-5 h-5" />
                          </div>
                          Conexão Unicamp (SBU)
                        </CardTitle>
                        <CardDescription className="text-rose-800/80 font-medium pl-11 text-xs sm:text-sm">
                          Aplicação real nas bibliotecas da Unicamp e rotinas práticas
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-6">
                        <div className="max-w-none">
                          <MarkdownViewer content={activeModule.unicampContext} />
                        </div>
                      </CardContent>
                    </Card>

                    {/* Raio-X da Banca (Vunesp / Funcamp) */}
                    <Card className="border-amber-200/80 bg-gradient-to-br from-white via-amber-50/30 to-white shadow-sm hover:shadow-md transition-shadow">
                      <CardHeader className="pb-4 bg-amber-50/60 border-b border-amber-100/70">
                        <CardTitle className="flex items-center gap-2 text-amber-950 text-xl font-black">
                          <div className="p-2 bg-amber-100 text-amber-800 rounded-xl">
                            <ShieldAlert className="w-5 h-5" />
                          </div>
                          Raio-X da Banca & Pegadinhas
                        </CardTitle>
                        <CardDescription className="text-amber-800/80 font-medium pl-11 text-xs sm:text-sm">
                          Tendências de cobrança e distratores recorrentes
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-6 space-y-5">
                        <MarkdownViewer content={activeModule.boardAnalysis.trends} />
                        <div className="bg-amber-100/60 p-5 rounded-2xl border border-amber-200 text-amber-950 font-medium text-[14.5px] shadow-xs relative overflow-hidden">
                          <AlertTriangle className="absolute top-0 right-0 w-24 h-24 text-amber-500/10 -translate-y-4 translate-x-4 pointer-events-none" />
                          <div className="relative z-10">
                            <MarkdownViewer content={activeModule.boardAnalysis.commonTraps} />
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Matriz de Memorização */}
                    <Card className="lg:col-span-2 border-slate-800 shadow-lg hover:shadow-xl transition-shadow overflow-hidden bg-slate-900 text-white">
                      <CardHeader className="pb-4 bg-slate-950/80 border-b border-slate-800">
                        <CardTitle className="flex items-center gap-2 text-white text-xl font-black">
                          <div className="p-2 bg-indigo-500/20 text-indigo-400 rounded-xl border border-indigo-500/30">
                            <Brain className="w-5 h-5" />
                          </div>
                          Matriz de Memorização Rápida & Síntese
                        </CardTitle>
                        <CardDescription className="text-slate-400 font-medium pl-11 text-xs sm:text-sm">
                          Tabelas comparativas, mnemônicos e regras de ouro para revisão de véspera
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-6 sm:p-8">
                        <div className="prose prose-invert max-w-none text-slate-200">
                          <MarkdownViewer content={activeModule.memorizationMatrix} />
                        </div>
                      </CardContent>
                    </Card>

                  </div>

                  {/* Bottom Navigation Bar */}
                  <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
                    {prevModule ? (
                      <button
                        onClick={handlePrevModule}
                        className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 font-bold text-sm transition-all"
                      >
                        <ChevronLeft className="w-4 h-4" />
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
                        className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-black text-sm transition-all shadow-lg shadow-indigo-100 hover:shadow-indigo-200 hover:-translate-y-0.5 active:translate-y-0"
                      >
                        <span>
                          {nextModule ? 'Concluir & Próximo Módulo' : 'Finalizar Trilha e Ir para Simulado'}
                        </span>
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                </motion.div>
              </AnimatePresence>
            </main>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
