import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { modulesData } from './data';
import type { AdvancedTopic } from './data/types';
import Simulado from './components/Simulado';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './components/ui/accordion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { BookOpen, AlertTriangle, Crosshair, Brain, GraduationCap, Library, ShieldAlert, CheckCircle2, PlayCircle, Target, Trophy } from 'lucide-react';

function App() {
  const [activeModule, setActiveModule] = useState<AdvancedTopic>(modulesData[0]);
  const [currentView, setCurrentView] = useState<'curso' | 'simulado'>('curso');
  
  // Progress Tracking (Mock for demo, normally would be in localStorage/DB)
  const [completedModules, setCompletedModules] = useState<Set<string>>(new Set());

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

  const progressPercentage = Math.round((completedModules.size / modulesData.length) * 100);

  return (
    <div className="min-h-screen bg-[#f3f4f6] text-slate-900 font-sans selection:bg-indigo-200">
      
      {/* Navbar Premium EdTech */}
      <header className="sticky top-0 z-50 bg-[#1e293b] text-white shadow-xl border-b border-slate-800">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg shadow-inner">
                <Library className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-black tracking-tight leading-none text-slate-50">
                  Revisão Master
                </h1>
                <p className="text-indigo-300 text-[10px] font-bold tracking-[0.2em] uppercase mt-1">
                  Funcamp 2026
                </p>
              </div>
            </div>

            <div className="hidden md:flex h-8 w-px bg-slate-700 mx-4"></div>

            {/* View Switcher */}
            <nav className="hidden md:flex bg-slate-800/50 p-1 rounded-xl ring-1 ring-slate-700/50">
              <button
                onClick={() => setCurrentView('curso')}
                className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-sm font-semibold transition-all ${currentView === 'curso' ? 'bg-indigo-500 text-white shadow-md' : 'text-slate-400 hover:text-slate-200'}`}
              >
                <PlayCircle className="w-4 h-4" />
                Trilha Teórica
              </button>
              <button
                onClick={() => setCurrentView('simulado')}
                className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-sm font-semibold transition-all ${currentView === 'simulado' ? 'bg-indigo-500 text-white shadow-md' : 'text-slate-400 hover:text-slate-200'}`}
              >
                <Target className="w-4 h-4" />
                Simulado 100Q
              </button>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-3 text-right">
              <div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Seu Progresso</div>
                <div className="w-32 h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-emerald-400 rounded-full transition-all duration-500"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
              </div>
              <div className="text-lg font-black text-emerald-400 w-12">{progressPercentage}%</div>
            </div>
            
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-slate-700 to-slate-600 flex items-center justify-center border-2 border-slate-500 overflow-hidden shadow-inner">
              <span className="font-bold text-sm text-slate-200">HB</span>
            </div>
          </div>
        </div>
        
        {/* Mobile View Switcher */}
        <div className="md:hidden flex border-t border-slate-700/50 bg-slate-900/50">
          <button
            onClick={() => setCurrentView('curso')}
            className={`flex-1 flex justify-center items-center gap-2 py-3 text-sm font-bold border-b-2 ${currentView === 'curso' ? 'border-indigo-500 text-indigo-400' : 'border-transparent text-slate-400'}`}
          >
            Trilha
          </button>
          <button
            onClick={() => setCurrentView('simulado')}
            className={`flex-1 flex justify-center items-center gap-2 py-3 text-sm font-bold border-b-2 ${currentView === 'simulado' ? 'border-indigo-500 text-indigo-400' : 'border-transparent text-slate-400'}`}
          >
            Simulado
          </button>
        </div>
      </header>

      {/* Main Container */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-8">
        
        {currentView === 'simulado' ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full"
          >
            <div className="mb-8 text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center justify-center p-3 bg-indigo-100 text-indigo-600 rounded-2xl mb-4">
                <Trophy className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-black text-slate-900 mb-4">Simulado Final: 100 Questões</h2>
              <p className="text-slate-600 font-medium leading-relaxed">
                Este simulado exige alta resistência cognitiva. As questões cobrem os 23 tópicos do edital de forma aleatória, simulando o peso e as armadilhas (distratores) do CEBRASPE e VUNESP. Você tem 100 minutos.
              </p>
            </div>
            <Simulado />
          </motion.div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8 items-start relative">
            
            {/* Sidebar Modules (Hotmart style) */}
            <aside className="w-full lg:w-80 shrink-0 lg:sticky lg:top-24 max-h-[calc(100vh-8rem)] overflow-y-auto pr-2 pb-8 scrollbar-hide">
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4">
                <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 px-2">Conteúdo do Curso</h2>
                <nav className="flex flex-col gap-1">
                  {modulesData.map((mod, index) => {
                    const isCompleted = completedModules.has(mod.id);
                    const isActive = activeModule.id === mod.id;
                    return (
                      <button
                        key={mod.id}
                        onClick={() => {
                          setActiveModule(mod);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className={`group relative text-left px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-200 flex items-start gap-3
                          ${isActive 
                            ? 'bg-indigo-50 text-indigo-900' 
                            : 'bg-transparent text-slate-600 hover:bg-slate-50'}`}
                      >
                        <div className="mt-0.5 shrink-0">
                          {isCompleted ? (
                            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                          ) : (
                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center text-[10px] font-bold
                              ${isActive ? 'border-indigo-600 text-indigo-600' : 'border-slate-300 text-slate-400'}`}>
                              {index + 1}
                            </div>
                          )}
                        </div>
                        <span className={`line-clamp-2 leading-snug ${isActive ? 'font-bold' : ''}`}>
                          {mod.title.replace(/^\\d+\\.\\s/, '')}
                        </span>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 w-full min-w-0 pb-20">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeModule.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="space-y-6"
                >
                  {/* Hero Video/Title Card */}
                  <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 sm:p-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
                      <BookOpen className="w-64 h-64" />
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8 relative z-10">
                      <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-100 text-indigo-700 rounded-lg text-xs font-bold uppercase tracking-wider mb-4">
                          Módulo {activeModule.id.replace('m', '')}
                        </div>
                        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight">
                          {activeModule.title.replace(/^\\d+\\.\\s/, '')}
                        </h1>
                      </div>
                      
                      <button
                        onClick={() => toggleComplete(activeModule.id)}
                        className={`shrink-0 flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all
                          ${completedModules.has(activeModule.id)
                            ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200'
                            : 'bg-slate-900 text-white hover:bg-slate-800'}`}
                      >
                        <CheckCircle2 className="w-5 h-5" />
                        {completedModules.has(activeModule.id) ? 'Concluído' : 'Marcar Concluído'}
                      </button>
                    </div>

                    <Accordion type="multiple" defaultValue={["theory"]} className="w-full space-y-4 relative z-10">
                      
                      <AccordionItem value="theory" className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50/50 data-[state=open]:shadow-sm transition-all data-[state=open]:bg-white">
                        <AccordionTrigger className="px-6 py-5 hover:bg-slate-50 hover:no-underline transition-colors">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-indigo-100 rounded-lg text-indigo-700">
                              <BookOpen className="w-5 h-5" />
                            </div>
                            <span className="font-bold text-slate-800 text-lg">Teoria Avançada e Doutrina</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-8 pt-2">
                          <div className="prose prose-slate prose-headings:font-black prose-headings:text-slate-800 prose-headings:mb-4 prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-6 max-w-[80ch] text-[16px]">
                            {/* Rendering Theory with ReactMarkdown for better formatting */}
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                              {activeModule.advancedTheory}
                            </ReactMarkdown>
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="authors" className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50/50 data-[state=open]:shadow-sm transition-all data-[state=open]:bg-white">
                        <AccordionTrigger className="px-6 py-5 hover:bg-slate-50 hover:no-underline transition-colors">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-emerald-100 rounded-lg text-emerald-700">
                              <GraduationCap className="w-5 h-5" />
                            </div>
                            <span className="font-bold text-slate-800 text-lg">Marcos e Autores Cobrados</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-6 pt-2">
                          <div className="prose prose-slate max-w-[80ch] text-slate-600 whitespace-pre-wrap leading-relaxed text-[15px]">
                            {activeModule.authorsAndFrameworks}
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                    </Accordion>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <Card className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                      <CardHeader className="pb-4 bg-slate-50/50 border-b border-slate-100">
                        <CardTitle className="flex items-center gap-2 text-slate-800 text-xl">
                          <div className="p-2 bg-indigo-100 rounded-lg text-indigo-700">
                            <Crosshair className="w-5 h-5" />
                          </div>
                          Conexão Unicamp
                        </CardTitle>
                        <CardDescription className="text-slate-500 font-medium pl-11">Como o SBU aplica na prática</CardDescription>
                      </CardHeader>
                      <CardContent className="pt-6">
                        <p className="text-slate-600 whitespace-pre-wrap leading-relaxed text-[15px]">
                          {activeModule.unicampContext}
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-amber-200/60 bg-gradient-to-br from-white to-amber-50/30 shadow-sm hover:shadow-md transition-shadow">
                      <CardHeader className="pb-4 bg-amber-50/50 border-b border-amber-100/50">
                        <CardTitle className="flex items-center gap-2 text-amber-900 text-xl">
                          <div className="p-2 bg-amber-100 rounded-lg text-amber-700">
                            <ShieldAlert className="w-5 h-5" />
                          </div>
                          Raio-X da Banca
                        </CardTitle>
                        <CardDescription className="text-amber-700/70 font-medium pl-11">Tendências Funcamp/Vunesp</CardDescription>
                      </CardHeader>
                      <CardContent className="pt-6 space-y-5">
                        <div className="text-amber-900/90 whitespace-pre-wrap leading-relaxed text-[15px]">
                          {activeModule.boardAnalysis.trends}
                        </div>
                        <div className="bg-amber-100/50 p-5 rounded-2xl border border-amber-200 text-amber-950 whitespace-pre-wrap font-medium text-[15px] shadow-sm relative overflow-hidden">
                          <AlertTriangle className="absolute top-0 right-0 w-24 h-24 text-amber-500/10 -translate-y-4 translate-x-4" />
                          <div className="relative z-10">
                            {activeModule.boardAnalysis.commonTraps}
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="lg:col-span-2 border-slate-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                      <CardHeader className="pb-4 bg-slate-900 text-white">
                        <CardTitle className="flex items-center gap-2 text-white text-xl">
                          <div className="p-2 bg-white/10 rounded-lg text-indigo-300">
                            <Brain className="w-5 h-5" />
                          </div>
                          Matriz de Memorização
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-0">
                        <div className="bg-white overflow-x-auto">
                          <ReactMarkdown 
                            remarkPlugins={[remarkGfm]}
                            components={{
                              table: ({node, ...props}) => <table className="w-full text-sm text-left border-collapse min-w-[600px]" {...props} />,
                              th: ({node, ...props}) => <th className="px-6 py-4 bg-slate-50 text-slate-800 font-bold border-b border-slate-200 uppercase tracking-wider text-xs whitespace-nowrap" {...props} />,
                              td: ({node, ...props}) => <td className="px-6 py-4 border-b border-slate-100 text-slate-600 align-top" {...props} />,
                              tr: ({node, ...props}) => <tr className="hover:bg-slate-50/80 transition-colors" {...props} />,
                              p: ({node, ...props}) => <p className="p-6 pb-2 text-indigo-600 font-bold tracking-wide uppercase text-sm bg-indigo-50/50" {...props} />,
                            }}
                          >
                            {activeModule.memorizationMatrix}
                          </ReactMarkdown>
                        </div>
                      </CardContent>
                    </Card>
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
