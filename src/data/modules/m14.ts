import type { AdvancedTopic } from '../types';

export const m14: AdvancedTopic = {
  id: "m14",
  title: "14. Representação Descritiva e Temática (Controle Bibliográfico)",
  authorsAndFrameworks: `Autores-Chave e Instrumentos Clássicos:
• Mey (1995) e Mey e Silveira (2009): Pioneiros no Brasil sobre a epistemologia da Catalogação e Controle Bibliográfico.
• IFLA (International Federation of Library Associations): O órgão magno das normativas globais de catalogação. Responsável pelas ISBD, ICP (Princípios de Paris / Princípios Internacionais de Catalogação).
• Cutter (1876): Regras para um catálogo dicionário. Criador da base moderna da representação descritiva.`,
  advancedTheory: `1. A Bipartição da Catalogação
No Brasil, costumamos separar a Catalogação em duas frentes indissociáveis:
• Representação Descritiva (Catalogação Descritiva): Olhar para as características FÍSICAS ou intrínsecas da manifestação. Quem é o autor? Qual a edição? Quantas páginas? Qual a editora? (Ferramentas: AACR2, RDA, ISBD).
• Representação Temática (Classificação / Indexação): Olhar para as características CONCEITUAIS. Sobre o que a obra trata? Qual seu assunto? (Ferramentas: CDD, CDU, Tesauros, Cabeçalhos de Assunto).

2. Os Princípios Internacionais de Catalogação (ICP)
Substituíram os clássicos "Princípios de Paris (1961)" na publicação da IFLA de 2009 (revisada em 2016).
Eles estabelecem os objetivos supremos do catálogo. O catálogo deve permitir ao usuário:
• ENCONTRAR (Find)
• IDENTIFICAR (Identify)
• SELECIONAR (Select)
• OBTER (Obtain)
• NAVEGAR (Navigate) - [Este último adicionado com foco nos modelos LRM/FRBR].

O Princípio Maior do ICP: A CONVENIÊNCIA DO USUÁRIO. Se houver um conflito nas regras, resolve-se pelo que for mais lógico e compreensível para o usuário final.

3. Pontos de Acesso e Controle de Autoridade
O coração da representação descritiva não é transcrever o título, é criar "Pontos de Acesso" (chaves de busca). 
• Ponto de Acesso Principal (Main Entry): Historicamente, o autor principal.
• Pontos de Acesso Secundários: Coautores, título, série, tradutor.
O Controle de Autoridade garante a UNIFORMIDADE. Se o autor "Machado de Assis" assinou um livro como "Joaquim Maria Machado de Assis" e outro como "J. M. Machado de Assis", o catálogo não pode dispersá-los. O controle de autoridade cria um Cabeçalho Autorizado e amarra as variantes como "Remissivas" (VER e VER TAMBÉM).`,
  unicampContext: `A Unicamp possui um catálogo unificado imenso. A representação descritiva na Unicamp segue o formato MARC 21 sob as diretrizes do RDA/AACR2. O controle de autoridades local precisa dialogar com padrões nacionais para garantir a interoperabilidade no catálogo Sophia ou Alma/Primo.`,
  boardAnalysis: {
    trends: `CEBRASPE (2018-2026): O CEBRASPE exige saber a diferença exata entre Representação Descritiva (forma) e Temática (conteúdo). A banca também foca pesado nas Funções do Catálogo segundo os Princípios da IFLA (ICP) - Encontrar, Identificar, Selecionar, Obter, Navegar.
    
VUNESP / FUNCAMP: Adoram cobrar o conceito de "Controle de Autoridade". Testam se o candidato sabe que a Remissiva VER encaminha do termo NÃO autorizado para o autorizado, enquanto a VER TAMBÉM liga termos relacionados.`,
    commonTraps: `🚨 Pegadinha Clássica CEBRASPE: 
"A Representação Descritiva e a Temática possuem objetivos idênticos e utilizam o mesmo conjunto de instrumentos normativos (como o AACR2), já que ambas buscam traduzir o pensamento do autor para o usuário."
(ERRADO: Objetivos e instrumentos são complementares, mas totalmente distintos. Descritiva = Forma Física (AACR2/RDA). Temática = Conteúdo Semântico (CDD/CDU/Tesauro).)`
  },
  memorizationMatrix: `TRILOGIA DOS PRINCÍPIOS (ICP 2016)
Princípio Mestre: [Conveniência do Usuário]
Missão do Catálogo (5 Verbos): [Encontrar, Identificar, Selecionar, Obter, Navegar].
Controle de Autoridade: [VER = Corrige erro/sinônimo] / [VER TAMBÉM = Amplia/Relaciona].`
};
