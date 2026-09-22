import type { AdvancedTopic } from '../types';

export const m04: AdvancedTopic = {
  id: "m04",
  title: "4. Inteligência artificial aplicada à Biblioteconomia e Ciência da Informação",
  authorsAndFrameworks: `Autores-Chave e Linhas de Pesquisa:
• S.R. Ranganathan (1931): As 5 Leis da Biblioteconomia reinterpretadas no contexto da IA (A IA está aí para economizar o tempo do usuário).
• Floridi (2014): O pai da "Filosofia da Informação", trata da ética da informação algorítmica e da onisfera.
• Ryan Cordell / Miriam Posner: Autores sobre o impacto do Machine Learning e OCR avançado nas Humanidades Digitais.`,
  advancedTheory: `1. O Escopo da IA em Unidades de Informação
A Inteligência Artificial não se limita a "chatbots". Na Biblioteconomia de alta performance, ela se divide em três grandes vertentes técnicas:
• Processamento de Linguagem Natural (PLN / NLP): Extração automatizada de entidades nomeadas (NER) de textos completos (identificar autores, datas, assuntos), tradução automática de metadados e indexação semântica automatizada.
• Visão Computacional: Utilizada em coleções especiais e acervos históricos (Humanidades Digitais) para OCR inteligente de manuscritos (HTR - Handwritten Text Recognition) e indexação automática de fotografias (tagueamento de imagens).
• Sistemas de Recomendação: Algoritmos de filtragem colaborativa e filtragem baseada em conteúdo, inseridos em OPACs (Catálogos) e plataformas de Discovery (como o Alma/Primo), sugerindo leitura com base no perfil de empréstimo.

2. IA e Indexação Automática
Sistemas híbridos (machine learning + vocabulários controlados). A máquina sugere os cabeçalhos de assunto mapeados a ontologias (ex: DeCS/MeSH, SKOS), mas a decisão final (curadoria e controle de qualidade) passa pelo indexador humano. O conceito-chave é o "Human-in-the-loop" (HitL).

3. Desafios Éticos e Viés Algorítmico (Algorithmic Bias)
Bibliotecários são curadores da verdade informacional. O uso de IA generativa (LLMs) levanta problemas críticos:
• Alucinação Algorítmica: A criação de citações falsas ou dados inexistentes.
• Viés e Preconceito: Algoritmos treinados em acervos históricos tendem a perpetuar preconceitos raciais, de gênero ou coloniais. A "Descolonização do Catálogo" usando IA exige auditoria de algoritmos.
• Direito Autoral (Copyright): Treinamento de LLMs sob obras protegidas versus a doutrina do "Fair Use" ou exceções de Text and Data Mining (TDM).`,
  unicampContext: `A Unicamp, polo de tecnologia, trabalha o conceito de Humanidades Digitais. As ferramentas de IA no Sistema de Bibliotecas da Unicamp (SBU) são visíveis nos softwares de discovery e na interface do usuário (chatbots de referência). As regulamentações sobre integridade acadêmica (PRP Unicamp) alertam para o uso ético da IA na geração de teses e dissertações depositadas no repositório.`,
  boardAnalysis: {
    trends: `CEBRASPE (2022-2026): A banca começou a cobrar IA focando no viés algorítmico (bias), privacidade do usuário (LGPD) e o papel do bibliotecário na era dos algoritmos. O CEBRASPE tende a considerar a IA não como uma substituta do bibliotecário, mas como uma ferramenta de apoio (suporte à decisão). 
    
Universidades Federais / VUNESP: Focam muito na aplicação prática: Indexação Automática (extração de palavras-chave) e a diferença entre extração (tirar da obra) e atribuição (usar um tesauro/vocabulário controlado para classificar a obra através da IA).`,
    commonTraps: `🚨 Pegadinha Clássica CEBRASPE: 
"A implementação de Inteligência Artificial para indexação temática elimina a necessidade do uso de vocabulários controlados e tesauros documentários, visto que o algoritmo compreende o texto em linguagem natural."
(ERRADO: A IA de ponta na CI funciona ancorada a ontologias e tesauros para garantir consistência estrutural e interoperabilidade - SKOS/RDF.)`
  },
  memorizationMatrix: `APLICAÇÕES DA IA NA BC (MAPA MENTAL)
| Ramo da IA | Aplicação Prática no Acervo | Benefício (Lei de Ranganathan) |
|------------|----------------------------|--------------------------------|
| NLP / LLMs | Indexação Semântica / Resumos | Poupa o tempo do leitor (4ª Lei)|
| Visão Comp.| OCR de Manuscritos Históricos | A cada leitor seu livro (2ª Lei) |
| Rec-Sys    | Filtro colaborativo no OPAC | O Livro é para uso (1ª Lei) |`
};
