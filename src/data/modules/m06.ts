import type { AdvancedTopic } from '../types';

export const m06: AdvancedTopic = {
  id: "m06",
  title: "6. Fluxos Informacionais, Comunicação Científica e Bibliometria",
  authorsAndFrameworks: `### Autores e Marcos Epistemológicos

- **William D. Garvey e Belver C. Griffith (1972):** Modelo canônico do fluxo de comunicação científica, mapeando a transição contínua entre canais informais e canais formais.
- **Derek J. de Solla Price (1963):** *"Little Science, Big Science"*. O pai da Cienciometria moderna, autor da teoria do crescimento exponencial da literatura e da teoria dos **Colégios Invisíveis**.
- **Alfred J. Lotka (1926), Samuel C. Bradford (1934), George K. Zipf (1949):** A tríade sagrada das leis empíricas fundamentais da Bibliometria.
- **Burton e Kebler (1960):** Conceito de **meia-vida da literatura científica** (*half-life*) e obsolescência documental.
- **Eugene Garfield (1955):** Fundador do ISI, criador do *Science Citation Index* e do **Fator de Impacto (JIF)**.
- **Jorge E. Hirsch (2005):** Físico formulador do **Índice H** (*h-index*).`,
  advancedTheory: `### 1. O Fluxo da Comunicação Científica: Canais Informais vs. Formais

Segundo o modelo paradigmático de **Garvey e Griffith**, a produção científica circula em dois grandes estágios:
- **Canais Informais (Comunicação Preliminar / Colégios Invisíveis):**
  - Ocorrem **antes** da publicação formal revisada por pares.
  - Abrangem conversas de laboratório, troca de correspondências/e-mails, apresentação de pôsteres e palestras em congressos, reuniões dos "Colégios Invisíveis" (redes de pesquisadores de ponta que trocam informações privilegiadas) e circulação de **Preprints**.
  - *Vantagens:* Agilidade e interatividade imediata. *Limitações:* Sem crivo metodológico estrito, público restrito e sem garantia formal de prioridade de descoberta.
- **Canais Formais (Comunicação Registrada e Certificada):**
  - Ocorrem **após** o crivo editorial e a revisão por pares (*peer review*).
  - Compreendem artigos publicados em periódicos indexados, monografias, livros acadêmicos e patentes.
  - *Vantagens:* Permanência documental definitiva, garantia pública de prioridade intelectual e amplo alcance. *Limitações:* Morosidade temporal do processo editorial.

---

### 2. A Tríade das Leis Bibliométricas Clássicas

Cobrança sistemática em concursos públicos (presente em 28.6% das provas com altíssima densidade conceitual):

- **1. Lei de Lotka (Produtividade dos Autores / Lei do Quadrado Inverso - 1926):**
  - Estabelece que uma pequena proporção de autores publica a maior fatia da literatura em qualquer campo, enquanto a grande maioria publica apenas um único trabalho.
  - *Fórmula conceitual:* O número de autores que publicam $n$ artigos é aproximadamente proporcional a $1/n^2$ do número de autores que publicam apenas um artigo.
  - *Aplicação:* Mapeamento de elites científicas e produtividade de grupos de pesquisa.

- **2. Lei de Bradford (Dispersão dos Periódicos / Zonas de Bradford - 1934):**
  - Demonstra que, ao ordenar os periódicos em ordem decrescente de artigos sobre determinado assunto, eles se distribuem em zonas com igual número de artigos: um **núcleo (*core*)** com poucos periódicos muito produtivos, seguido de zonas sucessivas com número exponencialmente crescente de periódicos ($1 : n : n^2$).
  - *Aplicação:* **Desenvolvimento e descarte de coleções**. Permite à biblioteca identificar o núcleo essencial de assinaturas e cancelar revistas periféricas com mínimo prejuízo informacional.

- **3. Lei de Zipf (Frequência de Ocorrência de Palavras / Princípio do Menor Esforço - 1949):**
  - Analisa a distribuição de palavras em um texto. Se as palavras forem ordenadas por ordem decrescente de frequência ($r$), o produto da ordem pela frequência ($f$) é aproximadamente constante ($r \\times f = C$).
  - *Aplicação:* **Indexação automática, recuperação da informação e elaboração de listas de stopwords** (palavras vazias de significado, como artigos e preposições, que devem ser eliminadas dos índices de busca).

---

### 3. Meia-Vida da Literatura e Obsolescência Científica (Burton & Kebler)

- **Meia-Vida (*Half-life*):** Tempo necessário para que metade da literatura citada em uma determinada área se torne obsoleta (ou seja, período em que são publicadas 50% das referências mais recentes citadas na área).
- Áreas de rápida obsolescência (ex: Biotecnologia, Computação, Medicina) possuem meia-vida curta (2 a 4 anos); áreas como Humanidades, História e Matemática possuem meia-vida longa (mais de 10 anos).
- Subsidia diretamente a política de desbastamento e remanejamento do acervo da biblioteca.

---

### 4. Indicadores de Avaliação: Fator de Impacto vs. Índice H

- **Fator de Impacto (JIF - Garfield / JCR):** Avalia a repercussão de um **periódico científico** (nunca de um autor isolado):
  $$\\text{JIF} = \\frac{\\text{Citações recebidas no ano no periódico de artigos dos 2 anos anteriores}}{\\text{Total de artigos citáveis publicados nos 2 anos anteriores}}$$
- **Índice H (*h-index* - Hirsch):** Avalia conjuntamente produtividade e impacto de um **pesquisador**: um autor tem índice $h$ se tem $h$ artigos citados no mínimo $h$ vezes cada um.
- **Altmetria (*Altmetrics*):** Mensuração do impacto social imediato (menções na web, redes sociais, notícias e blogs).`,
  unicampContext: `Na **Unicamp**:
- O SBU oferece serviços especializados de apoio à avaliação institucional utilizando ferramentas bibliométricas como **InCites (Web of Science)** e **SciVal (Scopus)**.
- A biblioteca atua ativamente no saneamento da filiação institucional da Unicamp e na padronização de registros de identificadores **ORCID** e **Lattes** para evitar a fragmentação de índices de citação em rankings internacionais (QS, THE, ARWU).`,
  boardAnalysis: {
    trends: `### Padrões Extraídos das Provas Reais (OBJETIVA, CEBRASPE, VUNESP):
- **Pareamento das Três Leis:** A questão clássica apresenta três assertivas e pede para associar: Bradford = Revistas/Periódicos; Lotka = Autores/Produtividade; Zipf = Palavras/Frequência textual.
- **Colégios Invisíveis de Derek de Solla Price:** Reconhecer como canal informal e preliminar de comunicação científica entre especialistas de ponta.
- **Fator de Impacto:** Lembrar que o JIF mede o **periódico** e não avalia o mérito de um artigo individual (um artigo de baixo impacto pode sair em uma revista de alto JIF).`,
    commonTraps: `> 🚨 **Pegadinha Clássica de Concurso (OBJETIVA / CEBRASPE):**
> *"A Lei de Bradford afirma que a produtividade dos autores científicos segue uma distribuição geométrica inversa, de tal modo que o quadrado dos autores produz a totalidade dos artigos."*
>
> **Gabarito: ERRADO!**
> A lei que trata da produtividade dos **autores** e do quadrado inverso é a **Lei de Lotka**. A **Lei de Bradford** trata estritamente da dispersão de artigos em **periódicos/revistas** divididos em zonas concêntricas de produtividade decrescente.`
  },
  memorizationMatrix: `### Mnemônico Fundamental das Leis Bibliométricas

| Lei Bibliométrica | Objeto Central de Estudo | Palavra-Chave de Prova | Aplicação Prática |
| :--- | :--- | :--- | :--- |
| **[L]otka** | **[L]iteratos / Autores** | Produtividade / Quadrado Inverso | Mapear pesquisadores prolíficos |
| **[B]radford** | **[B]ases / Periódicos** | Dispersão / Núcleo e Zonas | Assinatura e desbaste de revistas |
| **[Z]ipf** | **[Z]emântica / Palavras** | Frequência / Menor Esforço | Indexação automática e Stopwords |
| **Burton & Kebler** | **Literatura Científica** | **Meia-Vida** / Obsolescência | Política de desbastamento |`
};
