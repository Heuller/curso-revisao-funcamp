import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { modulesData } from './data';
import type { AdvancedTopic } from './data/types';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './components/ui/accordion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { BookOpen, AlertTriangle, Crosshair, Brain, GraduationCap, ChevronRight, Library, ShieldAlert } from 'lucide-react';

function App() {
  const [activeModule, setActiveModule] = useState<AdvancedTopic>(modulesData[0]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-red-200">
      {/* Header Premium Unicamp - Glassmorphism */}
      <header className="sticky top-0 z-50 bg-red-800/95 backdrop-blur-md text-white shadow-lg border-b border-red-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-white/10 rounded-xl ring-1 ring-white/20">
              <Library className="w-8 h-8 text-red-50" />
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-red-200">
                Revisão Master FUNCAMP
              </h1>
              <p className="text-red-200/80 text-xs font-bold tracking-widest uppercase mt-0.5">
                Alta Performance • Edital 2026
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 flex flex-col lg:flex-row gap-8 items-start">
        
        {/* Sidebar de Navegação */}
        <aside className="w-full lg:w-80 shrink-0 sticky top-28 h-[calc(100vh-8rem)] overflow-y-auto pr-2 pb-8 scrollbar-hide">
          <div className="flex items-center gap-2 mb-4 px-2">
            <div className="h-4 w-1 bg-red-600 rounded-full"></div>
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Trilha de Conhecimento</h2>
          </div>
          <nav className="flex flex-col gap-1.5">
            {modulesData.map((mod) => (
              <button
                key={mod.id}
                onClick={() => setActiveModule(mod)}
                className={`group relative text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ease-out flex items-center justify-between overflow-hidden
                  ${activeModule.id === mod.id 
                    ? 'text-red-50 shadow-md ring-1 ring-red-700/50' 
                    : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200 shadow-sm hover:shadow'}`}
              >
                {activeModule.id === mod.id && (
                  <motion.div 
                    layoutId="active-pill"
                    className="absolute inset-0 bg-gradient-to-br from-red-700 to-red-900"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10 line-clamp-2 pr-4">{mod.title}</span>
                <ChevronRight className={`relative z-10 w-4 h-4 shrink-0 transition-transform duration-300 ${activeModule.id === mod.id ? 'translate-x-0 text-red-200' : '-translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'}`} />
              </button>
            ))}
          </nav>
        </aside>

        {/* Área de Conteúdo Principal */}
        <main className="flex-1 w-full min-w-0 pb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeModule.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="space-y-6"
            >
              <div className="bg-white rounded-3xl shadow-sm border border-slate-200/60 p-8 sm:p-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                  <Library className="w-48 h-48" />
                </div>
                
                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-8 leading-tight tracking-tight relative z-10">
                  {activeModule.title}
                </h1>

                <Accordion type="multiple" defaultValue={["theory", "authors"]} className="w-full space-y-4 relative z-10">
                  
                  <AccordionItem value="authors" className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50/50 data-[state=open]:shadow-sm transition-all">
                    <AccordionTrigger className="px-6 py-5 hover:bg-slate-100/50 hover:no-underline transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-indigo-100 rounded-lg text-indigo-700">
                          <GraduationCap className="w-5 h-5" />
                        </div>
                        <span className="font-bold text-slate-800 text-lg">Autores e Marcos Teóricos</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 pt-2">
                      <div className="prose prose-slate max-w-[70ch] text-slate-600 whitespace-pre-wrap leading-relaxed text-[15px]">
                        {activeModule.authorsAndFrameworks}
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="theory" className="border border-slate-200 rounded-2xl overflow-hidden bg-white data-[state=open]:shadow-sm transition-all">
                    <AccordionTrigger className="px-6 py-5 hover:bg-slate-50 hover:no-underline transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-emerald-100 rounded-lg text-emerald-700">
                          <BookOpen className="w-5 h-5" />
                        </div>
                        <span className="font-bold text-slate-800 text-lg">Teoria Avançada</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 pt-2">
                      <div className="prose prose-slate prose-headings:font-bold prose-headings:text-slate-800 max-w-[70ch] text-slate-700 whitespace-pre-wrap leading-relaxed text-[15px]">
                        {activeModule.advancedTheory}
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                </Accordion>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="border-red-100 bg-gradient-to-br from-white to-red-50/30 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-2 text-red-800 text-xl">
                      <div className="p-2 bg-red-100 rounded-lg">
                        <Crosshair className="w-5 h-5" />
                      </div>
                      Conexão Unicamp
                    </CardTitle>
                    <CardDescription className="text-red-700/70 font-medium pl-11">Aplicações práticas e institucionais</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-red-950 whitespace-pre-wrap leading-relaxed text-[15px]">
                      {activeModule.unicampContext}
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-amber-200 bg-gradient-to-br from-white to-amber-50/50 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-2 text-amber-900 text-xl">
                      <div className="p-2 bg-amber-100 rounded-lg text-amber-700">
                        <ShieldAlert className="w-5 h-5" />
                      </div>
                      Raio-X de Provas
                    </CardTitle>
                    <CardDescription className="text-amber-700/80 font-medium pl-11">CEBRASPE & VUNESP (2018-2026)</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    <div className="text-amber-950 whitespace-pre-wrap leading-relaxed text-[15px]">
                      {activeModule.boardAnalysis.trends}
                    </div>
                    <div className="bg-amber-100/60 p-5 rounded-xl border border-amber-300 text-amber-950 whitespace-pre-wrap font-medium text-[15px] shadow-inner relative">
                      <AlertTriangle className="absolute top-4 right-4 w-6 h-6 text-amber-500/20" />
                      {activeModule.boardAnalysis.commonTraps}
                    </div>
                  </CardContent>
                </Card>

                <Card className="lg:col-span-2 border-indigo-100 bg-gradient-to-br from-indigo-50/30 to-white shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-2 text-indigo-900 text-xl">
                      <div className="p-2 bg-indigo-100 rounded-lg text-indigo-700">
                        <Brain className="w-5 h-5" />
                      </div>
                      Matriz de Memorização Tática
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="font-mono text-[14px] bg-slate-900 p-6 rounded-2xl border border-slate-800 text-slate-50 whitespace-pre-wrap overflow-x-auto shadow-2xl leading-relaxed">
                      {activeModule.memorizationMatrix}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

export default App;
