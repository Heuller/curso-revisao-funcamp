import type { AdvancedTopic } from '../types';

export const m18: AdvancedTopic = {
  id: "m18",
  title: "18. Modelos Conceituais: FRBR e IFLA LRM",
  authorsAndFrameworks: `Autores-Chave e Guias:
• IFLA (1998): Relatório final do Grupo de Estudos sobre os Requisitos Funcionais.
• IFLA LRM (2017): O Library Reference Model, que unificou e substituiu o FRBR, FRAD e FRSAD.`,
  advancedTheory: `1. O Que é o FRBR? (Functional Requirements for Bibliographic Records)
O FRBR NÃO É um formato (como MARC) e NÃO É um código de regras (como RDA). O FRBR é um MODELO CONCEITUAL Entity-Relationship (Entidade-Relacionamento). Ele provê a filosofia por trás dos catálogos modernos, definindo como os dados bibliográficos se relacionam entre si para apoiar as tarefas do usuário (Encontrar, Identificar, Selecionar, Obter).

2. As Entidades do Grupo 1 (O Produto Intelectual)
A parte mais cobrada de toda a Biblioteconomia. O FRBR divide o "livro" em 4 abstrações de cima para baixo:
• OBRA (Work): Conceitual. É a criação artística abstrata na cabeça do autor. (Ex: A ideia de Romeu e Julieta).
• EXPRESSÃO (Expression): Intelectual. É a obra tomando uma forma alfa-numérica, musical ou coreográfica (Ex: O texto original em inglês de Romeu e Julieta; A tradução para o português).
• MANIFESTAÇÃO (Manifestation): Física. A corporificação da expressão. (Ex: A edição da Companhia das Letras em capa dura, ISBN 978...). É o que o editor produz em massa.
• ITEM (Item): Instância única. Aquele livro específico que está na estante da biblioteca, com o código de barras nº 1234 e um risco de caneta na página 10.

3. As Entidades do Grupo 2 e 3
• Grupo 2: Pessoa e Entidade Coletiva (quem cria a obra).
• Grupo 3: Conceito, Objeto, Evento, Lugar (sobre o que a obra trata - Assunto).

4. A Evolução para o IFLA LRM (2017)
O FRBR (descrição), o FRAD (autoridades) e o FRSAD (assuntos) eram três modelos desconexos. Em 2017, a IFLA uniu todos no LRM (Library Reference Model). O LRM adota a hierarquia rígida orientada a objetos ("é um subtipo de"). O LRM renomeou "Entidade Coletiva" para "Agente Coletivo".`,
  unicampContext: `A Unicamp acompanha as normativas da IFLA. Embora o sistema de gestão (Alma ou SophiA) rode o MARC 21 por baixo dos panos, a interface de busca pro usuário (Discovery) trabalha no modelo FRBRizado. Ou seja: se o usuário busca "Dom Casmurro", o sistema não joga 50 livros aleatórios na tela. Ele exibe 1 OBRA, e agrupa as 50 edições (Manifestações) dentro dela, limpando a poluição visual.`,
  boardAnalysis: {
    trends: `CEBRASPE (2018-2026): O CEBRASPE exige saber a diferença exata entre Obra, Expressão, Manifestação e Item (A sigla OEMI). Eles adoram a pegadinha clássica da Tradução.
    
VUNESP / FUNCAMP: Costumam cobrar as tarefas do usuário segundo o modelo conceitual (Encontrar, Identificar, Selecionar, Obter).`,
    commonTraps: `🚨 Pegadinha Clássica CEBRASPE: 
"A tradução do livro Dom Casmurro para o inglês e a versão em filme dessa mesma história representam Manifestações diferentes da mesma Obra."
(ERRADO: Mudanças intelectuais puras (Tradução para inglês, versão adaptada para cinema) geram novas EXPRESSÕES da Obra. Manifestação é mera mudança física (ex: edição capa dura vs capa mole).)`
  },
  memorizationMatrix: `Mnemônico das Entidades (O.E.M.I)
O - Obra -> A Ideia (Abstrato).
E - Expressão -> O Texto/Idioma/Tradução (Intelectual).
M - Manifestação -> A Edição da Editora/ISBN (Físico).
I - Item -> O exemplar na sua estante com código de barras (Único).`
};
