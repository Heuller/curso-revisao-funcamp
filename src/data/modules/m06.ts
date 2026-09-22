import type { AdvancedTopic } from '../types';

export const m06: AdvancedTopic = {
  id: "m06",
  title: "6. Fluxos Informacionais, Comunicação Científica e Bibliometria",
  authorsAndFrameworks: `### Autores e Marcos Epistemológicos

- **William D. Garvey e Belver C. Griffith (1972):** Modelo clássico e contínuo do fluxo de comunicação científica, mapeando a transição entre canais informais e canais formais.
- **Derek J. de Solla Price (1963):** *"Little Science, Big Science"*. O pai da Cienciometria, autor da teoria do crescimento exponencial da literatura científica e do conceito dos *"Colégios Invisíveis"*.
- **Alfred J. Lotka (1926), Samuel C. Bradford (1934), George K. Zipf (1949):** A tríade sagrada das leis empíricas fundamentais da Bibliometria.
- **Eugene Garfield (1955):** Fundador do *Institute for Scientific Information (ISI)*, arquiteto do *Science Citation Index* e formulador do **Fator de Impacto (JIF)**.
- **Jorge E. Hirsch (2005):** Criador do **Índice H** (*h-index*).`,
  advancedTheory: `### 1. O Fluxo da Comunicação Científica: Canais Informais vs. Formais

Segundo o modelo paradigmático de **Garvey e Griffith**, a produção da ciência desdobra-se em duas esferas complementares:

- **Canais Informais (Comunicação Preliminar):**
  Ocorrem **antes** do registro formal e da revisão por pares (*peer review*). Abrangem conversas de laboratório, correspondências, participação em congressos, reuniões dos "Colégios Invisíveis" e circulação de *Preprints*.
  *Atributos:* Agilidade extrema, restrição de público, interatividade direta e ausência de garantia formal de autoria.

- **Canais Formais (Comunicação Registrada):**
  Ocorrem **após** o crivo editorial e a revisão por pares. Compreendem artigos publicados em periódicos indexados, monografias, livros acadêmicos e patentes concedidas.
  *Atributos:* Lentidão temporal no ciclo editorial, permanência documental definitiva, ampla visibilidade pública e atribuição formal de crédito/propriedade intelectual.

---

### 2. A Tríade das Leis Bibliométricas Clássicas

A quantificação da atividade científica baseia-se em três regularidades matemáticas:

- **Lei de Lotka (Produtividade dos Autores / Quadrado Inverso):**
  Estabelece que um número reduzido de autores muito prolíficos produz uma parcela substancial da literatura, enquanto uma grande massa de autores publica apenas um ou dois trabalhos ao longo da carreira.
  *Foco analítico:* **Autores e produtividade científica individual**.

- **Lei de Bradford (Dispersão dos Periódicos / Zonas de Bradford):**
  Demonstra que os artigos sobre determinado assunto concentram-se em um núcleo estrito de periódicos altamente especializados (*core journals*), seguidos por zonas sucessivas contendo um número cada vez maior de revistas que abordam o tema de forma marginal.
  *Foco analítico:* **Periódicos e desenvolvimento/descarte racional de coleções**.

- **Lei de Zipf (Frequência e Ocorrência de Palavras / Mínimo Esforço):**
  Demonstra a relação inversa entre a frequência de uma palavra em um texto e a sua ordem de classificação (*ranking*). Um vocabulário reduzido é repetido exaustivamente, enquanto a vasta maioria das palavras ocorre raramente.
  *Foco analítico:* **Linguagem natural, indexação automática e recuperação de dados**.

---

### 3. Indicadores de Citação: Fator de Impacto vs. Índice H

- **Fator de Impacto (JIF - Garfield / Journal Citation Reports):**
  Métrica que avalia o prestígio e a visibilidade de um **periódico científico**, e não de um artigo ou autor isolado.
  $$\\text{JIF (Ano X)} = \\frac{\\text{Total de citações em X de artigos publicados em X-1 e X-2}}{\\text{Total de artigos citáveis publicados pela revista em X-1 e X-2}}$$

- **Índice H (*h-index* - Hirsch):**
  Indicador que sintetiza concomitantemente a **produtividade** (quantidade) e o **impacto** (qualidade/citações) de um **pesquisador**.
  *Definição formal:* Um cientista possui índice $h$ se tem $h$ artigos publicados, e cada um deles recebeu pelo menos $h$ citações. (Ex: um autor com $h=15$ possui no mínimo 15 trabalhos com 15 ou mais citações).

---

### 4. Altmetria (*Altmetrics* / Métricas Alternativas)

Com a evolução da web social, surgiram métricas que complementam a contagem tradicional de citações acadêmicas:
- Monitoram o engajamento imediato em redes sociais (menções no X/Twitter, visualizações no YouTube, menções em políticas públicas e matérias jornalísticas).
- Vantagem: Rapidez de aferição e captura do impacto social extramuros da universidade.`,
  unicampContext: `Na **Unicamp**, os estudos bibliométricos subsidiam o planejamento estratégico institucional e a alocação de recursos da reitoria:

- **Bases de Referência:** O Sistema de Bibliotecas da Unicamp (SBU) orienta docentes no manuseio de ferramentas de análise bibliométrica como **InCites (Clarivate/Web of Science)** e **SciVal (Elsevier/Scopus)**.
- **Normalização de Identificadores:** As bibliotecas da Unicamp conduzem campanhas contínuas de cadastramento e unificação do **ORCID** dos pesquisadores, evitando a fragmentação de citações gerada por variações do nome do autor ou grafias incorretas da filiação institucional.`,
  boardAnalysis: {
    trends: `### Análise de Bancas (CEBRASPE, VUNESP e FUNCAMP)

- **CEBRASPE:** Faz reiteradas pegadinhas permutando os objetos de estudo das três leis bibliométricas: afirma que Bradford mede produtividade de autores (falso, é Lotka) ou que Lotka mede a dispersão de termos em um vocabulário (falso, é Zipf).
- **VUNESP / FUNCAMP:** Cobram enfaticamente os **Colégios Invisíveis** (redes informais que debatem a ciência antes da publicação oficial) e a fórmula conceitual do **Índice H**.`,
    commonTraps: `> 🚨 **Pegadinha Clássica CEBRASPE / VUNESP:**
> *"O índice H constitui a ferramenta bibliométrica mais confiável para confrontar diretamente o mérito científico individual de pesquisadores pertencentes a diferentes áreas do conhecimento, tais como a Matemática Pura e a Bioquímica Clínica."*
>
> **Gabarito: ERRADO!**
> Indicadores de citação (tanto o Fator de Impacto quanto o Índice H) **NÃO podem ser comparados diretamente entre áreas distintas**, visto que as disciplinas científicas possuem ritmos de publicação e hábitos de citação radicalmente díspares.`
  },
  memorizationMatrix: `### Mnemônico Imbatível: A Tríade Bibliométrica (L - B - Z)

| Lei | Criador | Objeto da Lei | Aplicação Prática na Biblioteca |
| :--- | :--- | :--- | :--- |
| **[L]otka** | Alfred J. Lotka | **[L]íderes / Autores** | Identificar os autores mais produtivos de um domínio |
| **[B]radford** | Samuel C. Bradford | **[B]ases / Periódicos** | Definir o núcleo prioritário de revistas para assinatura/corte |
| **[Z]ipf** | George K. Zipf | **[Z]emântica / Palavras** | Indexação automática e cálculo de relevância textual |

#### Métricas de Impacto
- **Fator de Impacto (JIF):** Mede a **revista**.
- **Índice H:** Mede o **pesquisador** (produtividade + citações).
- **Altmetria:** Mede a **repercussão social imediata** na internet.`
};
