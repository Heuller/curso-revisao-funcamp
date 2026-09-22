import type { AdvancedTopic } from '../types';

export const m11: AdvancedTopic = {
  id: "m11",
  title: "11. Disseminação Seletiva da Informação (DSI) e Serviço de Referência",
  authorsAndFrameworks: `### Autores e Marcos Teóricos Estruturantes

- **Samuel Rothstein (1961):** Teórico seminal que categorizou as três filosofias ou vertentes do Serviço de Referência: *Mínima (Conservadora)*, *Média (Intermediária)* e *Máxima (Liberal)*.
- **Denis Grogan (1995):** Autor da obra de referência mundial *"A prática do serviço de referência"*, mapeando o fluxo cognitivo e comunicacional do bibliotecário e as 8 etapas da resolução de consultas.
- **Hans Peter Luhn (1958):** Engenheiro e pesquisador da IBM que concebeu formalmente o sistema de **Disseminação Seletiva da Informação (DSI / SDI)**, automatizando o cruzamento (*matching*) entre perfis de interesse e novos documentos.`,
  advancedTheory: `### 1. O Serviço de Referência: As Três Filosofias de Rothstein

O Serviço de Referência constitui a **atividade-fim** por excelência da biblioteca, momento em que o bibliotecário atua diretamente como mediador humano entre a informação e o consulente.

A intensidade dessa mediação varia conforme a postura institucional adotada (**Teoria de Rothstein**):

- **1. Vertente Mínima (Conservadora):**
  O bibliotecário limita-se a "apontar o caminho", indicando a localização física das obras ou instruindo sumariamente sobre o uso do catálogo. O esforço investigativo recai exclusivamente sobre o usuário.
  *Ambiente típico:* Bibliotecas escolares e públicas orientadas ao autoatendimento básico.

- **2. Vertente Média (Intermediária / Educativa):**
  O bibliotecário orienta ativamente a formulação da pesquisa, explica a sintaxe de operadores, auxilia na escolha das bases de dados e acompanha o consulente na triagem, atuando como instrutor pedagógico.
  *Ambiente típico:* Bibliotecas universitárias (como a Unicamp), onde o objetivo é a emancipação acadêmica do aluno.

- **3. Vertente Máxima (Liberal / Especializada):**
  O bibliotecário assume a execução integral da busca: pesquisa as fontes, extrai os dados, traduz textos se necessário, sintetiza relatórios executivos e entrega o resultado final consolidado.
  *Ambiente típico:* Bibliotecas jurídicas, gabinetes governamentais e centros de P&D corporativos, onde a tomada de decisão do executivo exige rapidez e profundidade.

---

### 2. A Dinâmica da Entrevista de Referência (Denis Grogan)

O ponto mais vulnerável do atendimento ao usuário é a **Entrevista de Referência**. O usuário raramente externaliza sua necessidade real na primeira frase dita no balcão:

- **A Pergunta Expressa vs. A Necessidade Real:** A pergunta inicial formulada pelo usuário é quase sempre ampla demais, vaga ou conceitualmente equivocada. Cabe ao bibliotecário, mediante escuta ativa e perguntas de clarificação, **desvelar a real necessidade informacional oculta**.
- **Erro Fatal de Atendimento:** Fornecer com extrema agilidade a resposta perfeita para a pergunta errada!

---

### 3. Disseminação Seletiva da Informação (DSI / SDI): A Proatividade Máxima

Diferente do balcão de referência tradicional (que aguarda passivamente a chegada da demanda), a **DSI** opera na modalidade **proativa (*Push Technology*)**:

- **Mecânica Operacional:**
  1. **Perfil de Interesse do Usuário:** Mapeamento estruturado de descritores, autores e áreas temáticas de interesse de cada pesquisador ou departamento.
  2. **Perfil Documental:** Indexação das novas aquisições, artigos de periódicos recém-chegados e relatórios recebidos pela biblioteca.
  3. **Confronto Automatizado (*Matching*):** O sistema cruza os termos do perfil do usuário com os metadados dos novos documentos.
  4. **Notificação Personalizada:** O pesquisador recebe periodicamente alertas com a literatura relevante filtrada especificamente para ele.`,
  unicampContext: `No **Sistema de Bibliotecas da Unicamp (SBU)**:

- **Apoio Especializado à Pós-Graduação:** O serviço de referência atua primordialmente na **Vertente Intermediária**, prestando consultoria em revisões integrativas e levantamentos bibliográficos para teses de doutorado.
- **Alertas e DSI Digital:** Os bibliotecários treinam a comunidade acadêmica para configurar perfis automatizados de DSI diretamente nas plataformas do Portal de Periódicos CAPES, PubMed (*My NCBI*), Scopus e Web of Science, garantindo acompanhamento contínuo da vanguarda científica de cada laboratório.`,
  boardAnalysis: {
    trends: `### Análise de Bancas (CEBRASPE, VUNESP e FUNCAMP)

- **CEBRASPE:** Explora reiteradamente o nome de **Hans Peter Luhn** como criador conceitual da DSI na IBM. Também cobra com frequência a **Vertente Liberal (Máxima)** de Rothstein, formulando pegadinhas ao afirmar que esse modelo foca na instrução didática do usuário (ERRADO, quem instrui é a vertente Intermediária; a Liberal entrega a pesquisa pronta).
- **VUNESP / FUNCAMP:** Cobram as fases do processo de referência de Grogan, enfatizando que a **Entrevista de Referência** é o elemento determinante para o sucesso da recuperação.`,
    commonTraps: `> 🚨 **Pegadinha Clássica CEBRASPE / VUNESP:**
> *"Na vertente Liberal do serviço de referência, o bibliotecário adota uma postura prioritariamente pedagógica, recusando-se a realizar a busca pelo consulente para preservar a autonomia de pesquisa do usuário universitário."*
>
> **Gabarito: ERRADO!**
> A recusa em realizar a busca para forçar o aprendizado autônomo é a postura da vertente **Mínima / Conservadora**. Na vertente **Liberal**, o bibliotecário realiza toda a busca e entrega o produto informacional pronto e lapidado para o consulente.`
  },
  memorizationMatrix: `### Filosofias de Atendimento de Samuel Rothstein

| Vertente de Referência | Postura do Bibliotecário | Metáfora Pedagógica | Cenário Predominante |
| :--- | :--- | :--- | :--- |
| **Mínima (Conservadora)** | Apenas aponta estantes e catálogos | *"Ensino onde fica a vara de pesca"* | Bibliotecas Públicas e Escolares |
| **Média (Intermediária)** | Orienta estratégias e capacita | *"Pescamos juntos (Co-aprendizagem)"*| Bibliotecas Universitárias (Unicamp) |
| **Máxima (Liberal)** | Executa toda a busca e entrega pronta | *"Entrego o peixe frito no prato"* | Centros Corporativos, P&D e Jurídico |

#### Pilares da DSI (Luhn)
- **Perfil do Usuário** $\\Longleftrightarrow$ **Perfil do Documento** = Notificação Seletiva Proativa.`
};
