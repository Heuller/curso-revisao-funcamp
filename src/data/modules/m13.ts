import type { AdvancedTopic } from '../types';

export const m13: AdvancedTopic = {
  id: "m13",
  title: "13. Desenvolvimento de Coleções",
  authorsAndFrameworks: `### Autores e Marcos Teóricos Estruturantes

- **Waldomiro de Castro Santos Vergueiro (1989):** Autor do livro clássico *"Desenvolvimento de Coleções"*, sistematizador do modelo circular e processual de 6 etapas adotado em quase a totalidade dos concursos brasileiros.
- **G. Edward Evans (2000):** Teórico norte-americano fundamental na conceituação da mudança de foco de *"Seleção de Livros"* para *"Desenvolvimento de Coleções"* e, mais recentemente, para *"Gestão de Recursos Informacionais"*.
- **Modelo CREW (*Continuous Review, Evaluation, and Weeding*):** Metodologia de referência prática internacional para rotinas sistemáticas de avaliação física e desbastamento de acervos.`,
  advancedTheory: `### 1. O Processo Cíclico de Vergueiro (As 6 Macroetapas)

O Desenvolvimento de Coleções não é uma sequência linear e finita, mas sim um **processo ininterrupto, dinâmico e cíclico**. Segundo o modelo canônico de Waldomiro Vergueiro, compõe-se de seis etapas interdependentes:

- **1. Estudo da Comunidade (Diagnóstico Inicial):**
  Identificação prévia do perfil sociodemográfico, interesses de pesquisa, linhas de pós-graduação e demandas formativas da comunidade servida. É o pilar que ancora todas as decisões subsequentes.
- **2. Políticas de Desenvolvimento de Coleções (O Instrumento Regulador):**
  Documento formal, escrito e homologado pelas instâncias superiores da instituição. Define diretrizes claras sobre áreas prioritárias, critérios de seleção, limites orçamentários, idiomas aceitos e regras para barrar doações indesejadas (*dumping* bibliográfico).
- **3. Seleção (A Tomada de Decisão Intelectual):**
  Julgamento crítico de valor para decidir quais obras devem integrar o acervo, com base nas diretrizes da Política. Envolve comissões de seleção mistas (bibliotecários e docentes especialistas).
- **4. Aquisição (A Concretização Material):**
  Procedimentos administrativos e operacionais para a incorporação física ou contratação de acesso aos itens selecionados. Opera por três vias clássicas: **Compra**, **Doação** e **Permuta**.
- **5. Avaliação da Coleção (O Diagnóstico Contínuo):**
  Aferição da adequação do acervo aos objetivos institucionais por meio de métodos quantitativos (estatísticas de circulação, idade média, taxas de crescimento) e métodos qualitativos (avaliação de especialistas e análise de bibliografias recomendadas em planos de ensino).
- **6. Desbastamento (*Weeding* / Gestão de Espaço):**
  Retirada criteriosa de itens da coleção de livre acesso imediato. O desbastamento desdobra-se em dois destinos:
  - **Remanejamento:** Transferência da obra para depósitos fechados, estantes compactas ou coleções de obras raras.
  - **Descarte:** Exclusão definitiva do registro patrimonial (alienação, doação a outras entidades ou destruição física por dano irrecuperável).

---

### 2. A Virada Paradigmática: Acesso (*Access*) vs. Propriedade (*Ownership*)

- **Paradigma Tradicional da Posse (*Ownership*):** A importância e o prestígio da biblioteca eram mensurados pelo volume físico de livros guardados em suas estantes.
- **Paradigma Contemporâneo do Acesso (*Access*):** Com a explosão dos periódicos eletrônicos e pacotes de e-books na nuvem, o valor da biblioteca reside em garantir **acesso ágil e irrestrito**, desonerando o orçamento de custos de armazenamento e manutenção predial.

---

### 3. A Política de Seleção como Escudo Institucional

A existência de uma Política de Seleção formal e aprovada é vital para:
- Evitar o arbítrio e o viés ideológico individual de bibliotecários ou professores;
- Proteger a instituição contra pressões de censura moral, religiosa ou partidária;
- Justificar a recusa fundamentada de doações sem pertinência curricular.`,
  unicampContext: `Na **Unicamp**, a gestão do acervo do SBU vincula-se a rígidos processos administrativos estatais:

- **Aquisições e Lei de Licitações (Lei nº 14.133/2021):** Para compras no mercado nacional, adota-se o Pregão Eletrônico (Sistema de Registro de Preços). No caso de bases de dados e assinaturas internacionais de editoras científicas exclusivas, adota-se o rito formal de **Inexigibilidade de Licitação**.
- **Comissões Setoriais:** Cada biblioteca de instituto conta com comissões de biblioteca com representação paritária para validação das listas de aquisição antes do empenho orçamentário.`,
  boardAnalysis: {
    trends: `### Análise de Bancas (CEBRASPE, VUNESP e FUNCAMP)

- **CEBRASPE:** Explora agressivamente a distinção entre **Desbastamento** e **Descarte**. O examinador tenta confundir os termos afirmando que desbastar é sinônimo obrigatório de jogar o livro fora (ERRADO: o desbastamento é o gênero; o descarte é apenas uma de suas espécies, ao lado do remanejamento).
- **VUNESP / FUNCAMP:** Cobram a ordem exata do ciclo de Vergueiro e as três vias universais da etapa de **Aquisição** (Compra, Doação e Permuta).`,
    commonTraps: `> 🚨 **Pegadinha Clássica CEBRASPE / VUNESP:**
> *"A etapa de desbastamento do acervo é concluída invariavelmente pela destruição física ou alienação dos livros obsoletos, sendo vedada sua manutenção no espaço da instituição."*
>
> **Gabarito: ERRADO!**
> O desbastamento compreende tanto o **descarte** (exclusão definitiva) quanto o **remanejamento** (transferência para depósitos fechados de menor circulação ou salas especiais). O livro desbastado não é necessariamente destruído.`
  },
  memorizationMatrix: `### O Ciclo Hexagonal de Vergueiro: Etapas e Ações

| Ordem | Etapa do Ciclo | Foco da Ação | Elementos Cruciais em Concurso |
| :---: | :--- | :--- | :--- |
| **1º** | **Estudo da Comunidade** | Diagnóstico de Necessidades | Conhecer os programas de ensino e os usuários |
| **2º** | **Políticas de Coleções** | Elaboração Normativa | Documento escrito formal (Barra doações ruins e censura) |
| **3º** | **Seleção** | Julgamento e Escolha | Critérios de valor intelectual e adequação temática |
| **4º** | **Aquisição** | Concretização Operacional | **Compra**, **Doação** e **Permuta** (Tríade da aquisição) |
| **5º** | **Avaliação da Coleção** | Mensuração da Saúde | Métodos quantitativos (estatísticas) e qualitativos (peritos) |
| **6º** | **Desbastamento** | Gestão de Espaço | **Remanejamento** (guarda fechada) ou **Descarte** (saída) |`
};
