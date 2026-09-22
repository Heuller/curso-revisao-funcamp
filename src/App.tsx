import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { BookOpen, Target, Brain, AlertTriangle, GraduationCap, ArrowRight, LayoutDashboard, Menu, X } from 'lucide-react'
import { modules } from './data/modules'

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './components/ui/accordion'
import { Card, CardHeader, CardTitle, CardContent } from './components/ui/card'
import { cn } from './lib/utils'

function App() {
  const [activeModule, setActiveModule] = useState<number | null>(null)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden font-sans">
      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-slate-900/50 lg:hidden"
            onClick={toggleSidebar}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-80 bg-white border-r border-slate-200 transform transition-transform duration-300 lg:static lg:translate-x-0 flex flex-col",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-6 border-b border-slate-100">
          <div>
            <h1 className="text-xl font-bold tracking-tight text-primary-dark">Alta Performance</h1>
            <p className="text-sm text-slate-500 font-medium mt-1">FUNCAMP 2026</p>
          </div>
          <button onClick={toggleSidebar} className="lg:hidden text-slate-400 hover:text-slate-600">
            <X size={24} />
          </button>
        </div>
        
        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          <div className="px-3 mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
            Módulos de Revisão
          </div>
          {modules.map((mod, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveModule(index)
                setIsSidebarOpen(false)
              }}
              className={cn(
                "w-full text-left flex items-start gap-3 px-3 py-3 rounded-md text-sm transition-colors",
                activeModule === index 
                  ? "bg-primary-light/10 text-primary-dark font-medium" 
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              )}
            >
              <div className={cn("mt-0.5", activeModule === index ? "text-primary" : "text-slate-400")}>
                <BookOpen size={16} />
              </div>
              <span className="leading-snug">{mod.title}</span>
            </button>
          ))}
          
          <div className="px-3 mt-8 mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
            Avaliação
          </div>
          <button
             onClick={() => {
              setActiveModule(-1)
              setIsSidebarOpen(false)
            }}
            className={cn(
              "w-full text-left flex items-center gap-3 px-3 py-3 rounded-md text-sm transition-colors",
              activeModule === -1 
                  ? "bg-slate-800 text-white font-medium" 
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            )}
          >
            <Target size={16} className={activeModule === -1 ? "text-white" : "text-slate-400"} />
            Simulado (50 Questões)
          </button>
        </nav>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
        <header className="bg-white border-b border-slate-200 py-4 px-6 flex items-center shadow-sm z-10 sticky top-0">
          <button onClick={toggleSidebar} className="mr-4 lg:hidden text-slate-500 hover:text-slate-700">
            <Menu size={24} />
          </button>
          <div className="flex items-center gap-2 text-slate-500">
            <LayoutDashboard size={20} />
            <span className="font-medium text-sm">Painel de Estudos</span>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-6 md:p-10 scroll-smooth">
          <div className="max-w-prose-ideal mx-auto pb-20">
            <AnimatePresence mode="wait">
              {activeModule === null ? (
                <motion.div
                  key="welcome"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-center pt-20"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-light/10 text-primary mb-6">
                    <GraduationCap size={32} />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">Bem-vindo ao Curso de Revisão</h2>
                  <p className="text-lg text-slate-600 mb-8 max-w-lg mx-auto leading-relaxed">
                    Selecione um módulo no menu lateral para iniciar sua jornada focada na FUNCAMP 2026.
                  </p>
                  <button 
                    onClick={() => setActiveModule(0)}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  >
                    Começar pelo Módulo 1 <ArrowRight size={18} />
                  </button>
                </motion.div>
              ) : activeModule >= 0 ? (
                <motion.div
                  key={`module-${activeModule}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-8"
                >
                  <div className="border-b border-slate-200 pb-6 mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                      {modules[activeModule].title}
                    </h2>
                  </div>

                  <div className="prose prose-slate prose-lg max-w-none text-slate-700 leading-relaxed whitespace-pre-wrap">
                    {modules[activeModule].theory}
                  </div>

                  <div className="grid gap-6 mt-12">
                    <Card className="border-l-4 border-l-emerald-500">
                      <CardHeader className="pb-3">
                        <CardTitle className="flex items-center gap-2 text-emerald-700">
                          <GraduationCap className="h-5 w-5" />
                          Conexão com a Unicamp
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-slate-600 leading-relaxed">
                        {modules[activeModule].unicampContext}
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-amber-500">
                      <CardHeader className="pb-3">
                        <CardTitle className="flex items-center gap-2 text-amber-700">
                          <AlertTriangle className="h-5 w-5" />
                          Raio-X das Bancas
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-slate-600 leading-relaxed">
                        {modules[activeModule].boardTrends}
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-indigo-500 bg-indigo-50/50">
                      <CardHeader className="pb-3">
                        <CardTitle className="flex items-center gap-2 text-indigo-700">
                          <Brain className="h-5 w-5" />
                          Dica de Memorização
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-indigo-900 font-medium">
                        {modules[activeModule].memorization}
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="flex justify-between items-center mt-12 pt-8 border-t border-slate-200">
                    <button 
                      onClick={() => setActiveModule(Math.max(0, activeModule - 1))}
                      disabled={activeModule === 0}
                      className="px-4 py-2 text-sm font-medium text-slate-600 disabled:opacity-50 disabled:cursor-not-allowed hover:text-slate-900"
                    >
                      Módulo Anterior
                    </button>
                    <button 
                      onClick={() => setActiveModule(Math.min(modules.length - 1, activeModule + 1))}
                      disabled={activeModule === modules.length - 1}
                      className="px-6 py-2 bg-slate-900 text-white text-sm font-medium rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-800 transition-colors shadow-sm"
                    >
                      Próximo Módulo
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="simulado"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <div className="bg-primary text-white p-8 rounded-xl shadow-md mb-8">
                    <h2 className="text-3xl font-bold mb-3 flex items-center gap-3">
                      <Target className="h-8 w-8 text-primary-light" />
                      Simulado FUNCAMP 2026
                    </h2>
                    <p className="text-primary-100 text-lg opacity-90">
                      Questões exclusivas de revisão final baseadas no edital.
                    </p>
                  </div>

                  <Accordion type="single" collapsible className="w-full space-y-4">
                    <AccordionItem value="q1" className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm">
                      <AccordionTrigger className="px-6 hover:no-underline hover:bg-slate-50">
                        <span className="text-left font-semibold text-slate-800">
                          1. Qual a diferença fundamental entre Biblioteca Digital e Repositório Institucional?
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-6 pt-2">
                        <div className="bg-slate-50 p-4 rounded-md border border-slate-100 mt-2">
                          <p className="font-medium text-emerald-700 mb-2">Gabarito: Repositório exige mandato institucional e produção local.</p>
                          <p>O RI foca na preservação da memória da instituição que o mantém (teses e artigos de seus alunos e professores). Bibliotecas digitais adquirem acervos de qualquer fonte externa focando na leitura do usuário.</p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="q2" className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm">
                      <AccordionTrigger className="px-6 hover:no-underline hover:bg-slate-50">
                        <span className="text-left font-semibold text-slate-800">
                          2. A adoção dos Princípios FAIR impede a proteção de dados sigilosos?
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-6 pt-2">
                        <div className="bg-slate-50 p-4 rounded-md border border-slate-100 mt-2">
                          <p className="font-medium text-emerald-700 mb-2">Gabarito: Não.</p>
                          <p>O princípio A (Acessível) não é sinônimo de "Sem senha e aberto a todos". FAIR aceita dados fechados (por razões de ética ou patentes), desde que as *regras de acesso* e metadados sejam claros e acessíveis.</p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
