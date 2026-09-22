import type { AdvancedTopic } from '../types';

export const m17: AdvancedTopic = {
  id: "m17",
  title: "17. RDA (Resource Description and Access)",
  authorsAndFrameworks: `### Autores e Marcos Históricos do RDA

- **RSC (RDA Steering Committee):** Comitê internacional mantenedor responsável pela governança do padrão, em substituição ao antigo *Joint Steering Committee for Revision of AACR (JSC)*.
- **IFLA e os Modelos Conceituais (FRBR, FRAD, FRSAD e IFLA LRM):** A estrutura ontológica e filosófica profunda do RDA fundamenta-se nos Requisitos Funcionais para Registros Bibliográficos e no moderno **IFLA LRM (2017)**.
- **Library of Congress e Bibliotecas Nacionais (2010/2013):** Lançamento do *RDA Toolkit* (2010) e adoção oficial generalizada a partir de 2013 pelas agências nacionais dos EUA, Reino Unido, Canadá e Austrália.`,
  advancedTheory: `### 1. A Ruptura Paradigmática: Da Ficha Impressa aos Dados Conectados (*Linked Data*)

O AACR2 foi desenhado para o ecossistema linear das fichas de papel em gaveteiros de madeira. O **RDA (*Resource Description and Access*)** foi concebido como um **código flexível para a web semântica e ambientes digitais**.

- **Agnóstico em Relação ao Suporte:** O RDA não privilegia o livro em papel. Suas diretrizes aplicam-se com a mesma naturalidade a tábuas sumérias de argila, livros impressos, coleções de e-books, repositórios de dados brutos de pesquisa ou hologramas interativos.
- **Orientação a Entidades e Relações:** O RDA mapeia a realidade bibliográfica em termos de **Entidades**, seus **Atributos** e suas **Relações**, seguindo o modelo entidade-relacionamento da IFLA.

---

### 2. As Quatro Grandes Rupturas: Como o RDA Sepultou os Dogmas do AACR2

- **1ª Ruptura — A Abolição da "Regra dos Três" e do \`[et al.]\`:**
  O RDA revogou a regra punitiva do AACR2 que forçava a entrada pelo título quando a obra possuía mais de 3 autores. No RDA, **recomenda-se registrar todos os criadores**, valorizando a autoria plena e permitindo que o leitor recupere o livro buscando por qualquer um dos autores.
- **2ª Ruptura — O Fim das Abreviações Latinas \`[s.l.]\` e \`[s.n.]\`:**
  O usuário moderno não domina expressões latinas arcaicas como *sine loco* e *sine nomine*. O RDA determina o uso de termos transparentes no idioma do catálogo:
  - No lugar de \`[S.l.]\` ➔ Registra-se \`[local de publicação não identificado]\`;
  - No lugar de \`[s.n.]\` ➔ Registra-se \`[editor não identificado]\`.
- **3ª Ruptura — O Princípio "Take What You See" (Aceite o que vê):**
  Redução de intervenções artificiais do catalogador. Transcreve-se o título exatamente como grafado no documento original (inclusive com eventuais erros ortográficos patentes, documentados em nota se necessário).
- **4ª Ruptura — A Fragmentação do GMD (Designação Geral de Material):**
  O termo restritivo entre colchetes aposto ao título no AACR2 (ex: \`[recurso eletrônico]\`, \`[gravação de som]\`) foi extinto. O RDA substituiu o GMD por **três dimensões independentes**, mapeadas nas tags MARC 21:
  - **Tipo de Conteúdo (*Content Type* - Tag \`336\`):** Forma da comunicação mental (ex: \`texto\`, \`música notada\`, \`imagem estática\`).
  - **Tipo de Mídia (*Media Type* - Tag \`337\`):** Aparelho intermediário necessário para reprodução (ex: \`computador\`, \`áudio\`, \`não mediado\`).
  - **Tipo de Suporte (*Carrier Type* - Tag \`338\`):** O invólucro físico do recurso (ex: \`volume\`, \`disco de áudio\`, \`recurso online\`).

---

### 3. Elementos Centrais (*Core Elements*) vs. Julgamento do Catalogador

O RDA extinguiu os três níveis rígidos de descrição do AACR2, adotando:
- **Core Elements (Elementos Centrais):** Conjunto mínimo obrigatório de dados que deve constar em qualquer registro (ex: Título Principal, Menção de Responsabilidade do Primeiro Autor, Data de Publicação, Identificador Normalizado).
- **Cataloger's Judgment (Julgamento Profissional):** Concede autonomia formal ao bibliotecário para incluir elementos adicionais sempre que estes agregarem valor informacional à comunidade local atendida.`,
  unicampContext: `A **Unicamp** adota formalmente o RDA em sua rede de bibliotecas:

- **Normatização no SBU:** O preenchimento das tags \`336\`, \`337\` e \`338\` é mandatório em todo processamento de novas teses, dissertações e e-books.
- **Erradicação do Latim:** O controle de qualidade do catálogo unificado da Unicamp invalida registros contendo \`[s.l.]\` ou \`[s.n.]\`, padronizando termos vernáculos claros que facilitam a descoberta pelos alunos nos portais web.`,
  boardAnalysis: {
    trends: `### Análise de Bancas (CEBRASPE, VUNESP e FUNCAMP)

- **CEBRASPE:** Tenta induzir o candidato ao erro afirmando que o RDA substituiu e invalidou o formato MARC 21 (FALSO! O RDA é código descritivo, e o MARC 21 é formato de intercâmbio; o MARC foi atualizado para acomodar nativamente o RDA). Outra pegadinha clássica é dizer que o RDA aplica-se exclusivamente a recursos digitais e virtuais (FALSO: aplica-se a qualquer suporte).
- **VUNESP / FUNCAMP:** Cobram as novidades práticas diretas: a extinção da "Regra dos Três", o fim das abreviações latinas e a tríade de tags **336 (Conteúdo), 337 (Mídia) e 338 (Suporte)**.`,
    commonTraps: `> 🚨 **Pegadinha Clássica CEBRASPE / VUNESP:**
> *"Ao adotar o RDA, a biblioteca deve descontinuar a utilização do formato MARC 21, transferindo sua base obrigatoriamente para um esquema XML exclusivo que impossibilita a leitura de registros antigos do AACR2."*
>
> **Gabarito: ERRADO!**
> O RDA e o MARC 21 são **independentes e complementares**. O padrão MARC 21 adaptou-se perfeitamente ao RDA por meio da introdução de novos campos (como \`264\`, \`336\`, \`337\` e \`338\`), coexistindo harmoniosamente em sistemas integrados de bibliotecas.`
  },
  memorizationMatrix: `### Confronto Direto: AACR2 vs. RDA

| Dimensão Técnica | Como era no AACR2 (Legado) | Como é no RDA (Moderno) |
| :--- | :--- | :--- |
| **Mais de 3 Autores** | Entrada pelo Título com \`[et al.]\` | Entrada pelo 1º Autor e registro de **TODOS** |
| **Local / Editor Faltando** | Abreviações latinas \`[S.l.]\` e \`[s.n.]\` | Vernáculo: \`[local não identificado]\` / \`[editor não identificado]\` |
| **Designação de Material**| GMD no campo \`245 $h\` (ex: \`[vídeo]\`) | **Tríade MARC:** \`336\` (Conteúdo), \`337\` (Mídia), \`338\` (Suporte) |
| **Padrão de Imprenta** | Campo \`260\` genérico | Campo \`264\` com indicador de função (Publicação vs. Copyright) |
| **Filosofia Central** | Transcrição prescritiva para ficha física | Entidades e Relações (**IFLA LRM**) para a Web Semântica |`
};
