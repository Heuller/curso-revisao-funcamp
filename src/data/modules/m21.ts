import type { AdvancedTopic } from '../types';

export const m21: AdvancedTopic = {
  id: "m21",
  title: "21. Indexação, Resumos e Controle Vocabular (Thesaurus)",
  authorsAndFrameworks: `### Autores e Normas Técnicas Estruturantes

- **F. W. Lancaster (1993):** *"Indexação e Resumos: Teoria e Prática"*. A obra clássica definitiva da Ciência da Informação para o processamento temático documental.
- **Mariângela Spotti Lopes Fujita e Maria Inês Tomaél:** Principais pesquisadoras brasileiras na modelagem da leitura documentária e política de indexação.
- **Normas ISO 5963 / ISO 25964:** Padrões internacionais para exame sistemático de documentos, seleção de termos e construção de tesauros interoperáveis.
- **ABNT NBR 6028 (2021):** Norma brasileira para elaboração e apresentação de resumos documentais.`,
  advancedTheory: `### 1. As Três Etapas da Indexação (Norma ISO 5963)

A indexação é a operação intelectual de representação temática pela qual o conteúdo semântico de um documento é identificado e vertido em pontos de acesso temáticos. 

Segundo a **ISO 5963**, a indexação compõe-se de três etapas ordenadas e indissociáveis:

- **1. Exame Analítico do Documento (Leitura Documentária):**
  O indexador não lê a obra integralmente; ele executa uma leitura técnica seletiva em seções de alta densidade semântica (título, subtítulo, resumo, introdução, conclusões, cabeçalhos de seções e legendas de ilustrações).
- **2. Identificação dos Conceitos Essenciais:**
  O profissional formula mentalmente, em **Linguagem Natural**, quais são os tópicos centrais e o foco disciplinar abordado pelo autor.
- **3. Tradução dos Conceitos para a Linguagem Documentária:**
  Os conceitos identificados são convertidos para termos padronizados e autorizados em uma **Linguagem Controlada** (Tesauro, Lista de Cabeçalhos de Assunto ou Tabela de Classificação).

---

### 2. Linguagem Natural vs. Linguagem Controlada

- **Linguagem Natural (Indexação Livre / Texto Completo):**
  Utiliza os termos exatos empregados pelo autor da publicação.
  - *Vantagens:* Baixo custo, rapidez operacional e incorporação imediata de neologismos científicos de ponta.
  - *Desvantagens:* Alto índice de ambiguidade semântica provocada por **sinônimos** (ex: *cão*, *cachorro*, *canino*) e **homônimos/polissemias** (ex: *manga* fruta vs. *manga* de camisa), gerando ruído e silêncio na recuperação.

- **Linguagem Controlada (Vocabulário Controlado / Tesauro):**
  Lista padronizada e unívoca de descritores autorizados pelo sistema.
  - *Vantagens:* Erradica a dispersão sinonímica e a ambiguidade polissêmica; permite recuperação de alta precisão.
  - *Desvantagens:* Custo financeiro de manutenção por equipes especializadas e **latência temporal** (demora para aprovar novos termos técnicos emergentes).

---

### 3. A Estrutura Semântica dos Tesauros Documentários

O Tesauro é uma linguagem documentária dinâmica que se distingue de uma simples lista alfabética por estruturar formalmente **três relações semânticas**:

- **1. Relação de Equivalência (Preferência / Sinônimos):**
  Combate a sinonímia estabelecendo qual termo é autorizado e quais são remissivos:
  - **USE:** Direciona do termo não autorizado para o descritor autorizado (*Ex: Automóvel ➔ USE ➔ Carro*).
  - **UP (*Used For* / Usado Para):** Indica quais sinônimos foram substituídos pelo descritor oficial.
- **2. Relação Hierárquica (Gênero e Espécie / Todo e Parte):**
  Estrutura a taxonomia em níveis de subordinação conceitual:
  - **TG / BT (*Broader Term* / Termo Genérico):** Conceito mais amplo (*Ex: Veículo é TG de Carro*).
  - **TE / NT (*Narrower Term* / Termo Específico):** Conceito mais restrito (*Ex: Carro é TE de Veículo*).
- **3. Relação Associativa (Afinidade Semântica):**
  Conecta conceitos interdependentes que não possuem relação hierárquica nem são sinônimos:
  - **TR / RT (*Related Term* / Termo Relacionado):** (*Ex: Carro ➔ TR ➔ Rodovia, Mecânica, Combustível*).

---

### 4. Tipologia dos Resumos (ABNT NBR 6028)

- **Resumo Indicativo:** Indica apenas os pontos principais do documento de forma sucinta, sem apresentar dados quantitativos ou conclusões detalhadas. **NÃO dispensa a consulta ao documento original**.
- **Resumo Informativo:** Informa com precisão finalidades, metodologia, resultados estatísticos e conclusões centrais. **Pode dispensar a leitura do texto integral** em pesquisas rápidas.
- **Resumo Crítico (Resenha):** Elaborado por especialista independente, apresentando julgamento de valor, análise crítica e mérito da obra avaliada.`,
  unicampContext: `Nas bibliotecas da **Unicamp**:

- **Vocabulários Especializados:** O SBU utiliza o **DeCS/MeSH** (Descritores em Ciências da Saúde) para teses da Faculdade de Ciências Médicas (FCM) e Faculdade de Odontologia de Piracicaba (FOP), e vocabulários controlados interdisciplinares (como o VocUSP) nas Humanidades.
- **Curadoria no DSpace:** O bibliotecário revisa as palavras-chave livres atribuídas pelo autor na auto-submissão e inclui descritores controlados normalizados nos metadados Dublin Core (\`dc.subject\`), garantindo interoperabilidade com o Oasisbr e BDTD.`,
  boardAnalysis: {
    trends: `### Análise de Bancas (CEBRASPE, VUNESP e FUNCAMP)

- **CEBRASPE:** Explora rigorosamente as **três etapas da ISO 5963** (Exame do documento ➔ Identificação dos conceitos ➔ Tradução para a linguagem documentária). Também cobra as siglas das relações do tesauro: **USE/UP** (equivalência), **TG/TE** (hierárquica) e **TR** (associativa).
- **VUNESP / FUNCAMP:** Cobram com frequência a classificação da ABNT NBR 6028, com destaque para a distinção entre **Resumo Indicativo** (não substitui o original) e **Resumo Informativo** (pode substituir a leitura original).`,
    commonTraps: `> 🚨 **Pegadinha Clássica CEBRASPE / VUNESP:**
> *"Em um tesauro documentário, a relação entre o termo 'Medicina' e o termo 'Hospital' constitui uma relação hierárquica de gênero-espécie (TG/TE)."*
>
> **Gabarito: ERRADO!**
> Hospital não é um "tipo" de Medicina (gênero/espécie), nem é uma parte anatômica da disciplina. A ligação entre eles decorre de associação funcional ou institucional, configurando uma **Relação Associativa (TR — Termo Relacionado)**.`
  },
  memorizationMatrix: `### Relações Semânticas em Tesauros & Tipos de Resumos

| Tipo de Relação | Siglas (Português / Inglês) | Função Semântica | Exemplo Prático |
| :--- | :--- | :--- | :--- |
| **Equivalência** | **USE** / **UP** (*Used For*) | Controla sinônimos e grafias | Bicicleta ➔ USE ➔ Ciclismo |
| **Hierárquica** | **TG** (*Broader*) / **TE** (*Narrower*) | Gênero-Espécie / Todo-Parte | Meio de Transporte (TG) ➔ Bicicleta (TE) |
| **Associativa** | **TR** (*Related Term*) | Afinidade ou conexão temática | Bicicleta (TR) ➔ Ciclovia |

#### ABNT NBR 6028: Resumos
- **Indicativo:** Sintético, não traz resultados completos. **Não substitui o texto original**.
- **Informativo:** Completo (metodologia, dados e conclusões). **Pode dispensar o original**.
- **Crítico (Resenha):** Emite parecer e julgamento valorativo sobre a obra.`
};
