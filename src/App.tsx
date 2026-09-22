import React, { useState } from 'react';
import { modulesData } from './data';
import { AdvancedTopic } from './data/types';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './components/ui/accordion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { BookOpen, AlertTriangle, Crosshair, Brain, GraduationCap, ChevronRight, Library } from 'lucide-react';

function App() {
  const [activeModule, setActiveModule] = useState<AdvancedTopic>(modulesData[0]);

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans selection:bg-red-200">
      {/* Header Premium Unicamp */}
      <header className="bg-red-700 text-white shadow-md sticky top-0 z-50 border-b-4 border-red-900">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Library className="w-8 h-8 text-red-100" />
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Revisão de Alta Performance</h1>
              <p className="text-red-200 text-sm font-medium tracking-wide">BIBLIOTECÁRIO UNICAMP • FUNCAMP 2026</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row gap-8 items-start">
        {/* Sidebar de Navegação */}
        <aside className="w-full md:w-80 shrink-0 space-y-2">
          <h2 className="text-sm font-bold text-neutral-500 uppercase tracking-wider mb-4 px-2">Módulos Avançados</h2>
          <nav className="flex flex-col gap-1">
            {modulesData.map((mod) => (
              <button
                key={mod.id}
                onClick={() => setActiveModule(mod)}
                className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-all flex items-center justify-between group
                  ${activeModule.id === mod.id 
                    ? 'bg-red-700 text-white shadow-md' 
                    : 'bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200'}`}
              >
                <span className="line-clamp-2">{mod.title}</span>
                <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${activeModule.id === mod.id ? 'translate-x-1' : 'opacity-0 group-hover:opacity-100'}`} />
              </button>
            ))}
          </nav>
        </aside>

        {/* Área de Conteúdo Principal */}
        <main className="flex-1 w-full space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-8">
            <h1 className="text-3xl font-extrabold text-neutral-900 mb-6 leading-tight">
              {activeModule.title}
            </h1>

            <Accordion type="multiple" defaultValue={["theory", "authors"]} className="w-full space-y-4">
              
              <AccordionItem value="authors" className="border border-neutral-200 rounded-xl overflow-hidden bg-slate-50">
                <AccordionTrigger className="px-6 hover:bg-slate-100 hover:no-underline transition-colors">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="w-5 h-5 text-slate-600" />
                    <span className="font-semibold text-slate-900">Autores e Marcos Teóricos</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-2">
                  <div className="prose prose-slate max-w-[65ch] text-slate-700 whitespace-pre-wrap leading-relaxed">
                    {activeModule.authorsAndFrameworks}
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="theory" className="border border-neutral-200 rounded-xl overflow-hidden">
                <AccordionTrigger className="px-6 hover:bg-neutral-50 hover:no-underline transition-colors">
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-5 h-5 text-neutral-600" />
                    <span className="font-semibold text-neutral-900">Teoria Avançada</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-2">
                  <div className="prose prose-neutral max-w-[65ch] text-neutral-800 whitespace-pre-wrap leading-relaxed">
                    {activeModule.advancedTheory}
                  </div>
                </AccordionContent>
              </AccordionItem>

            </Accordion>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="border-red-100 bg-red-50/50 shadow-sm">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-red-800">
                  <Crosshair className="w-5 h-5" />
                  Conexão Unicamp
                </CardTitle>
                <CardDescription className="text-red-700/80">Contexto institucional prático</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-red-900 whitespace-pre-wrap leading-relaxed text-sm">
                  {activeModule.unicampContext}
                </p>
              </CardContent>
            </Card>

            <Card className="border-amber-200 bg-amber-50 shadow-sm">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-amber-900">
                  <AlertTriangle className="w-5 h-5 text-amber-600" />
                  Raio-X CEBRASPE / VUNESP
                </CardTitle>
                <CardDescription className="text-amber-700/80">Tendências e Pegadinhas</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-amber-900 whitespace-pre-wrap leading-relaxed text-sm">
                  {activeModule.boardAnalysis.trends}
                </div>
                <div className="bg-amber-100/50 p-4 rounded-lg border border-amber-200 text-amber-950 whitespace-pre-wrap font-medium text-sm">
                  {activeModule.boardAnalysis.commonTraps}
                </div>
              </CardContent>
            </Card>

            <Card className="lg:col-span-2 border-indigo-100 bg-indigo-50/30 shadow-sm">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-indigo-900">
                  <Brain className="w-5 h-5 text-indigo-600" />
                  Matriz de Memorização
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="font-mono text-sm bg-white p-6 rounded-xl border border-indigo-100 text-indigo-950 whitespace-pre-wrap overflow-x-auto shadow-inner">
                  {activeModule.memorizationMatrix}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
