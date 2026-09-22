import type { AdvancedTopic } from '../types';

export const m04: AdvancedTopic = {
  id: "m04",
  title: "4. Inteligência Artificial em Bibliotecas e ChatGPT",
  authorsAndFrameworks: `### Autores, Marcos Teóricos e Conceituais

- **Shiyali Ramamrita Ranganathan (1931):** *As Cinco Leis da Biblioteconomia*. O referencial axiológico clássico indispensável para justificar e orientar a aplicação de inteligência artificial na automação informacional (notadamente a 4ª e a 5ª leis).
- **Alan Turing (1950):** Artigo seminal *"Computing Machinery and Intelligence"*, inaugurando o questionamento dos limites da inteligência de máquina e o *Teste de Turing*.
- **Arquitetura Transformer (Vaswani et al., 2017):** Modelo de atenção ("Attention Is All You Need") desenvolvido por pesquisadores do Google que viabilizou a era dos *Large Language Models* (LLMs) como ChatGPT, Claude e Gemini.
- **Princípios FAIR de Dados de Pesquisa:** *Findable, Accessible, Interoperable, Reusable*. Base metodológica para treinar algoritmos em ambientes acadêmicos confiáveis.`,
  advancedTheory: `### 1. A Natureza dos Modelos LLM e a Mecânica Probabilística

Diferente dos sistemas tradicionais de recuperação da informação baseados em índices invertidos rígidos (como o Apache Lucene), os modelos de linguagem em grande escala (**LLMs** — *Large Language Models*) operam por **cálculo probabilístico neural**:

- **Previsão de Próximo Token:** O modelo decompõe a linguagem natural em unidades menores (*tokens*) e prediz estatisticamente as palavras mais prováveis com base em bilhões de parâmetros aprendidos.
- **Aplicações em Bibliotecas:** Geração assistida de resumos documentais, enriquecimento preliminar de metadados em esquemas padronizados, apoio à indexação por assuntos e tradução instantânea de textos multilíngues.

> ⚠️ **Alucinação Algorítmica (*Hallucination*):**
> O modelo prioriza a fluência sintática em detrimento da veracidade factual. Quando confrontado com temas de nicho ou lacunas probabilísticas, o LLM gera citações, autores, DOIs e títulos de periódicos inteiramente falsos com absoluta convicção estilística. É o maior risco para o Serviço de Referência.

---

### 2. A Transformação do Serviço de Referência: Da Busca Booleana ao Prompt

A incorporação das ferramentas de IA generativa altera a dinâmica do usuário perante os sistemas de busca bibliográfica:

- **Migração Paradigmática:** O usuário afasta-se da busca booleana fragmentada (*"vacinas AND covid AND eficácia"*) em direção ao diálogo em linguagem natural (*"Sintetize 3 estudos de revisão sistemática sobre a eficácia de vacinas bivalentes publicados em periódicos de alto impacto"*).
- **O Bibliotecário como Curador e Engenheiro de Prompt:** O profissional deixa de atuar como mero "localizador de links" e assume a função crítica de **auditor de credibilidade**, instrutor de estratégias de refinamento de comandos (*prompt engineering*) e validador contra desinformação e fontes adulteradas.

---

### 3. Ética Algorítmica, Viés e Direitos Autorais na Biblioteca

O emprego de IA em centros de documentação e universidades suscita graves dilemas regulatórios:

- **Viés Algorítmico (*Algorithmic Bias*):** Os algoritmos reproduzem e cristalizam estereótipos de gênero, raça e disparidades geográficas presentes no corpus de treinamento da internet (predomínio do norte global e da língua inglesa).
- **Propriedade Intelectual e Fair Use:** A ingestão não consentida de teses, livros protegidos e acervos acadêmicos para alimentar redes neurais comerciais gera litígios sobre infração de direitos autorais e exigências de conformidade com a LGPD (dados sensíveis).

---

### 4. As Leis de Ranganathan na Era dos Algoritmos

As clássicas Leis de Ranganathan ganham renovada vigência no contexto das IAs:

- **1ª Lei — Os livros são para usar:** A IA deve atuar como ponte para facilitar a descoberta e fruição do acervo digital.
- **2ª Lei — A cada leitor, seu livro:** Respostas customizadas e recomendações personalizadas ao nível de instrução do consulente.
- **3ª Lei — A cada livro, seu leitor:** Descoberta semântica de obras esquecidas e dados científicos por afinidade temática.
- **4ª Lei — Poupe o tempo do leitor:** A síntese ágil e a busca contextual cumprem com maestria a otimização temporal do pesquisador.
- **5ª Lei — A biblioteca é um organismo em crescimento:** A biblioteca universitária não é estática; ela incorpora ferramentas emergentes para não se tornar um museu obsoleto.`,
  unicampContext: `Na **Unicamp**, as diretrizes institucionais quanto ao uso de IAs combinam inovação e salvaguardas éticas:

- **Integridade Científica:** A Pró-Reitoria de Pós-Graduação e a Comissão de Integridade em Pesquisa determinam que ferramentas de IA generativa não podem figurar na autoria de trabalhos acadêmicos (IAs não possuem personalidade jurídica nem assumem responsabilidade ética sobre o conteúdo).
- **Busca Semântica no SBU:** O Sistema de Bibliotecas da Unicamp avalia soluções de *Discovery* equipadas com inteligência artificial para permitir pesquisas conceituais mais intuitivas no catálogo do acervo, auxiliando na recuperação por sentido semântico e perdoando desvios ortográficos dos usuários.`,
  boardAnalysis: {
    trends: `### Análise de Bancas (CEBRASPE, VUNESP e FUNCAMP)

- **CEBRASPE:** Em provas contemporâneas, o tema da **Alucinação dos LLMs** e a **Reprodução de Vieses Culturais** é cobrado à exaustão. A banca formula itens tentando seduzir o candidato a acreditar que sistemas de IA são máquinas perfeitamente neutras e infalíveis.
- **VUNESP / FUNCAMP:** Têm predileção por associar inovações tecnológicas às **Cinco Leis de Ranganathan**. Memorize: a introdução de IAs e automação no atendimento ao usuário fundamenta-se prioritariamente na **4ª Lei (Poupe o tempo do leitor)** e na **5ª Lei (A biblioteca é um organismo em crescimento)**.`,
    commonTraps: `> 🚨 **Pegadinha Clássica CEBRASPE / VUNESP:**
> *"Os grandes modelos de linguagem (LLMs) constituem bases de dados factuais perfeitas para o serviço de referência bibliográfica, uma vez que suas conexões neurais impedem a formulação de erros de citação ou a atribuição incorreta de autorias científicas."*
>
> **Gabarito: ERRADO!**
> Os LLMs são motores probabilísticos e **NÃO** bancos de dados de fatos verificados. Eles sofrem inerentemente do fenômeno de **alucinação**, inventando com frequência referências, artigos e periódicos fictícios com aparência fidedigna.`
  },
  memorizationMatrix: `### Pilares da IA na Biblioteconomia Moderna

| Conceito Crítico | Descrição e Mecânica | Impacto no Bibliotecário |
| :--- | :--- | :--- |
| **Alucinação (*Hallucination*)** | Fabricação de fontes e dados com sintaxe perfeita | Auditoria rigorosa de todas as referências citadas |
| **Viés (*Bias*)** | Reprodução de preconceitos históricos do dataset | Mediação crítica e auditoria da representatividade |
| **Engenharia de Prompt** | Formulação estruturada de consultas em linguagem natural | Evolução da tradicional "Entrevista de Referência" |
| **4ª Lei de Ranganathan** | Poupe o tempo do leitor | Justificativa técnica para uso de IAs na busca e síntese |
| **5ª Lei de Ranganathan** | Organismo em crescimento perpétuo | Justificativa institucional para a biblioteca se modernizar |`
};
