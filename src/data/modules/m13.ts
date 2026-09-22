import type { AdvancedTopic } from '../types';

export const m13: AdvancedTopic = {
  id: "m13",
  title: "13. Desenvolvimento de Coleções",
  authorsAndFrameworks: `Autores-Chave e Guias:
• Vergueiro (1989): O modelo canônico de Desenvolvimento de Coleções no Brasil. O clássico fluxograma circular de 6 etapas.
• Evans (2000): Referência norte-americana para a evolução da área, mudando de "Seleção" para "Desenvolvimento" e depois para "Gestão" de Coleções.
• Weeding (Desbastamento): Práticas focadas no modelo CREW (Continuous Review, Evaluation, and Weeding).`,
  advancedTheory: `1. O Processo Contínuo (O Fluxograma de Vergueiro)
O Desenvolvimento de Coleções NÃO é uma linha reta, é um processo CÍCLICO, dinâmico e ininterrupto, composto de 6 macroetapas:
1. Estudo da Comunidade: O pilar zero. Identifica o perfil, necessidades institucionais (ensino, pesquisa, extensão).
2. Políticas de Seleção: O cérebro. Documento escrito, aprovado institucionalmente, que rege "o que entra" e "o que sai". (Evita viés pessoal do bibliotecário e barra "doações de lixo").
3. Seleção: A tomada de decisão. Escolher os itens baseado na Política. (Uso de listas de editores, pedidos de professores, catálogos).
4. Aquisição: O braço comercial. Pode ser por Compra (licitação/inexigibilidade), Doação ou Permuta (troca).
5. Avaliação da Coleção: Medir a saúde do acervo (qualitativa e quantitativamente). Os livros estão velhos? São consultados?
6. Desbastamento (Weeding): Retirar itens do acervo ATIVO. Pode ser um Descarte (jogar fora/doar) ou um Remanejamento (ir para uma sala de obras raras ou depósito fechado). E então o ciclo recomeça (volta ao passo 1).

2. Transição Paradigmática
Do "Acesso" vs "Propriedade" (Access vs Ownership). Nas décadas passadas, o valor da biblioteca era o tamanho físico (Ownership). Hoje, as coleções são híbridas. Compensa mais assinar o acesso a uma base de dados na nuvem (Access) do que comprar e estocar o livro impresso.

3. Políticas e Doação
A Política é a principal arma contra o "dumping bibliográfico" (quando a biblioteca vira depósito de lixo de professores aposentados). Toda doação deve passar pelo filtro rigoroso da Política de Seleção ANTES de ser integrada ao acervo.`,
  unicampContext: `A SBU (Sistema de Bibliotecas da Unicamp) possui uma Política de Desenvolvimento de Coleções extremamente formal. Numa autarquia estadual, a fase de Aquisição (Compra) esbarra em rigorosos processos de Licitação (Lei 14.133) e, mais comumente para e-books estrangeiros, em Inexigibilidade de Licitação (fornecedor exclusivo).`,
  boardAnalysis: {
    trends: `CEBRASPE (2018-2026): A banca EXPLORA agressivamente o conceito de Desbastamento (Weeding) x Descarte. Eles costumam jogar na prova que "desbastamento é o ato de destruir fisicamente um livro". Errado. Desbastar é retirar da coleção de livre acesso, o descarte é apenas uma de suas vias (a outra é remanejar). Também cobram que a Avaliação é dividida em Qualitativa (opinião dos experts) e Quantitativa (dados numéricos de empréstimo/tamanho).
    
VUNESP / FUNCAMP: Adoram focar na Política de Seleção, exigindo saber que ela DEVE SER ESCRITA, e que ela serve de escudo e defesa legal para a biblioteca na hora de negar a entrada de um material censurado ou inadequado.`,
    commonTraps: `🚨 Pegadinha Clássica CEBRASPE: 
"A etapa de Aquisição no modelo de Vergueiro restringe-se exclusivamente à compra de materiais, dada a exigência orçamentária das universidades."
(ERRADO: A Aquisição compreende três meios universais na CI: Compra, Doação e Permuta.)`
  },
  memorizationMatrix: `O HEXÁGONO DE VERGUEIRO (CICLO VITAL)
1º Estudo da Comunidade -> Diagnóstico
2º Políticas -> As Leis/Regras
3º Seleção -> A Escolha Mental
4º Aquisição -> A Obtenção Física (Compra/Doa/Permuta)
5º Avaliação -> O Checkup (Medir se tá bom)
6º Desbastamento -> A Faxina (Descarta ou Remaneja)`
};
