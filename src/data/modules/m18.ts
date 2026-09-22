import type { AdvancedTopic } from '../types';

export const m18: AdvancedTopic = {
  id: "m18",
  title: "18. Modelos Conceituais: FRBR e IFLA LRM",
  authorsAndFrameworks: `### Autores e Marcos Históricos dos Modelos Conceituais

- **IFLA (1998):** Publicação do estudo canônico *Functional Requirements for Bibliographic Records* (**FRBR**), introduzindo a modelagem entidade-relacionamento na Biblioteconomia.
- **Barbara Tillett e Gordon Dunsire:** Teóricos e líderes internacionais na expansão dos modelos funcionais para autoridades (**FRAD**, 2009) e dados de assunto (**FRSAD**, 2010).
- **Pat Riva, Patrick Le Bœuf e Maja Žumer (2017):** Formuladores e editores do **IFLA LRM (*Library Reference Model*)**, modelo conceitual consolidado que unificou e substituiu a trilogia FRBR/FRAD/FRSAD.`,
  advancedTheory: `### 1. A Natureza Ontológica de um "Modelo Conceitual"

O FRBR e o IFLA LRM **NÃO são códigos de regras prescritivas** (função do RDA) e **NÃO são formatos computacionais** (função do MARC 21). 

Eles constituem **modelos conceituais abstratos de Entidade-Relacionamento**, desenhados para mapear a lógica profunda do universo bibliográfico em prol das necessidades do usuário.

---

### 2. O Grupo 1 do FRBR: A Tétrade WEMI (O.E.M.I.)

O núcleo mais cobrado em provas divide o recurso informacional em quatro estratos ontológicos fundamentais:

- **1. OBRA (*Work* / Abstração Intelectual Máxima):**
  A criação intelectual ou artística em seu nível mais puro e imaterial, independente de suporte ou linguagem.
  *Exemplo:* A ideia filosófica e o enredo imaterial de *"Dom Casmurro"*, concebidos pelo intelecto de Machado de Assis.

- **2. EXPRESSÃO (*Expression* / Realização Semiótica e Linguística):**
  A corporificação intelectual da Obra em forma de texto alfanumérico, som, imagem, notação matemática ou coreografia.
  *Regra Crítica de Concurso:* **Traduções**, revisões substanciais de texto, roteiros adaptados e arranjos musicais criam **NOVAS EXPRESSÕES** da mesma Obra.
  *Exemplo:* O texto original em português de 1899 é uma Expressão; a tradução para o inglês de 1953 por Helen Caldwell é uma **nova Expressão** da mesma Obra.

- **3. MANIFESTAÇÃO (*Manifestation* / Produção Física ou Digital em Massa):**
  O conjunto comercial de todos os exemplares físicos ou pacotes digitais que compartilham as mesmas características de produção editorial e distribuição mercadológica.
  *Regra Crítica de Concurso:* Mudança de editora, de diagramação, de ISBN ou de formato (capa dura vs. brochura, PDF vs. e-Pub) constitui uma **NOVA MANIFESTAÇÃO**.
  *Exemplo:* A edição comemorativa em capa dura da Companhia das Letras com ISBN específico lançada em 2019.

- **4. ITEM (*Item* / Exemplar Singular Concreto):**
  Uma cópia física ou instância digital específica e individualizada de uma Manifestação. É o exemplar tangível que o usuário efetivamente segura na mão ou empresta no balcão.
  *Exemplo:* O livro tombado com código de barras nº 104582 na Biblioteca Central da Unicamp, contendo um carimbo da universidade e anotações a lápis na margem da página 30.

---

### 3. Grupos 2 e 3 do FRBR Clássico

- **Grupo 2 (Responsabilidade):** As entidades encarregadas da criação e custódia: **Pessoa** e **Entidade Coletiva**. (Uma Pessoa *cria* a Obra; *realiza* a Expressão; *produz* a Manifestação; *possui* o Item).
- **Grupo 3 (Assuntos):** Do que a Obra trata: **Conceito** (*Concept*), **Objeto** (*Object*), **Evento** (*Event*) e **Lugar** (*Place*).

---

### 4. A Unificação pelo IFLA LRM (Library Reference Model - 2017)

O modelo **LRM** harmonizou os modelos fragmentados anteriores em uma ontologia única de alto nível (*Linked Open Data*):

- **A Superentidade "RES" (Coisa):** O topo absoluto da hierarquia ontológica. Qualquer entidade no universo do catálogo (seja um livro, um conceito abstrato ou um rio geográfico) é uma instância de **RES**.
- **A Entidade Unificada "AGENTE" (*Agent*):** Substituiu a divisão rígida do Grupo 2, subdividindo-se em:
  - **Pessoa (*Person*):** Um indivíduo humano real;
  - **Agente Coletivo (*Collective Agent*):** Agrupamento formal de pessoas com nome próprio (corporações, governos, famílias).
- **A 5ª Tarefa do Usuário:** Além de Encontrar, Identificar, Selecionar e Obter, o LRM oficializou o verbo **NAVEGAR (*Navigate*)** como objetivo do catálogo.`,
  unicampContext: `Nos sistemas de descoberta do **SBU/Unicamp** (plataformas de catálogo tipo Discovery):

- **FRBRização dos Resultados:** O catálogo aplica algoritmos semânticos de agregação no nível de Obra (*Work-Level Grouping*). Se um aluno pesquisa por *"Os Lusíadas"*, em vez de exibir centenas de linhas dispersas para cada edição impressa desde o século XVI, a interface exibe **uma única Obra centralizada**, permitindo ao consulente desdobrar as Expressões (traduções/versões) e Manifestações (impressos/e-books).`,
  boardAnalysis: {
    trends: `### Análise de Bancas (CEBRASPE, VUNESP e FUNCAMP)

- **CEBRASPE:** Faz reiteradas questões de fronteira entre **Expressão** e **Manifestação**. A pegadinha infalível: afirma que a tradução de um livro em espanhol para o português gera uma nova "Manifestação" (ERRADO: Tradução é linguística, portanto gera uma nova **EXPRESSÃO**). Já a troca de formato (impresso para PDF) gera uma nova **MANIFESTAÇÃO**.
- **VUNESP / FUNCAMP:** Cobram a hierarquia conceitual do **IFLA LRM**, perguntando o significado da entidade topo **RES** e a consolidação da entidade **Agente**.`,
    commonTraps: `> 🚨 **Pegadinha Clássica CEBRASPE / VUNESP:**
> *"Conforme o modelo conceitual FRBR da IFLA, quando uma editora publica a versão em audiolivro (MP3) de um romance literário previamente editado em papel, cria-se uma nova Obra no catálogo da biblioteca."*
>
> **Gabarito: ERRADO!**
> A ideia e o enredo intelectual permanecem idênticos, logo a **Obra é a mesma**. A transposição para a linguagem falada/áudio gera uma **nova EXPRESSÃO**, e o arquivo em CD ou MP3 constitui uma **nova MANIFESTAÇÃO**.`
  },
  memorizationMatrix: `### A Hierarquia WEMI (O.E.M.I.) e IFLA LRM

| Entidade WEMI | Dimensão Ontológica | O que ela representa? | Caso Prático |
| :--- | :--- | :--- | :--- |
| **OBRA (*Work*)** | Abstrata / Intelectual | A ideia, o conceito imaterial | *"Dom Casmurro"* (a ideia machadiana) |
| **EXPRESSÃO** | Linguística / Semiótica | A linguagem, a forma, o texto | A tradução para o inglês por Helen Caldwell |
| **MANIFESTAÇÃO**| Físico-Editorial | O suporte, o ISBN, o formato | A edição capa dura da Cia das Letras de 2019 |
| **ITEM** | Concreta / Exemplar | O objeto único existente no mundo | O livro com código de barras nº 104582 na Unicamp |

#### Revoluções do IFLA LRM (2017)
- **RES:** A superentidade universal (*"tudo o que existe"*).
- **AGENTE:** Unifica Pessoa física e Agente Coletivo.
- **NAVEGAR:** A quinta tarefa funcional do catálogo.`
};
