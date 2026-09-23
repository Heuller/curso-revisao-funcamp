import type { AdvancedTopic } from '../types';

export const m14: AdvancedTopic = {
  id: "m14",
  title: "14. Representação Descritiva e Temática (Controle Bibliográfico)",
  authorsAndFrameworks: `### Autores e Marcos Teóricos Estruturantes

- **Eliane Serrão Alves Mey e Nair Yumiko Silveira (2009):** *"Catalogação no plural"*. A principal referência doutrinária brasileira. Postulam que a catalogação não existe para o livro nem para deleite do bibliotecário, mas exclusivamente para a **conveniência do usuário**.
- **IFLA (International Federation of Library Associations):** Entidade internacional máxima responsável pela formulação das normativas estruturantes (**ISBD**, **Declaração de Princípios Internacionais de Catalogação - ICP** e a família de modelos conceituais **FRBR/LRM**).
- **Charles Ammi Cutter (1876):** *"Rules for a Dictionary Catalog"*. Estabeleceu os objetivos pioneiros do catálogo moderno: permitir encontrar um livro por Autor, Título ou Assunto; mostrar o que a biblioteca possui; e auxiliar na escolha do livro.
- **Seymour Lubetzky (1953):** *"Cataloging Rules and Principles"*. Crítico do casuísmo excessivo, defendeu a simplificação baseada em princípios universais de condições de autoria, subsidiando os Princípios de Paris (1961).
- **Controle Bibliográfico Universal (CBU / UBC - IFLA/UNESCO):** Filosofia de que cada documento deve ser catalogado apenas uma vez em seu país de origem pela agência bibliográfica nacional.`,
  advancedTheory: `### 1. A Divisão Epistemológica do Tratamento da Informação

Em concursos públicos (presente em 65.5% das provas analisadas), a organização da informação divide-se rigidamente em duas frentes:

- **Representação Descritiva (Catalogação Descritiva):**
  - Registra as características **extrínsecas (físicas e de publicação)** do recurso. Responde: Quem é o responsável intelectual? Qual o título e subtítulo exatos? Qual a edição, editora, local e data? Quantas páginas, ilustrações e dimensões possui?
  - *Instrumentos normativos:* **ISBD**, **AACR2r**, **RDA** e o formato de intercâmbio **MARC 21 Bibliográfico**.

- **Representação Temática (Classificação e Indexação):**
  - Identifica e sintetiza o conteúdo **intrínseco (conceitual/semântico)** da obra. Responde: De que assunto trata o documento?
  - *Instrumentos normativos:* **CDD (Classificação Decimal de Dewey)**, **Tabelas de Notação de Autor (Cutter-Sanborn, PHA)**, **Tesauros** e **Listas de Cabeçalhos de Assunto**.

---

### 2. Controle Bibliográfico Universal (CBU) e Depósito Legal

- **Filosofia do CBU (UBC - Universal Bibliographic Control):** Cada país é responsável por criar o registro catalográfico definitivo de todas as publicações emanadas em seu território nacional, disponibilizando esses registros internacionalmente para evitar redundância global.
- **Agência Bibliográfica Nacional:** No Brasil, esse papel cabe à **Biblioteca Nacional (FBN)**, sediada no Rio de Janeiro.
- **Mecanismo do Depósito Legal (Lei Federal nº 10.994/2004):** Obriga todo impressor e editor brasileiro a remeter à Biblioteca Nacional ao menos um exemplar de cada publicação produzida no território nacional no prazo de 30 dias após a publicação, sob pena de multa. É o alicerce que alimenta a **Bibliografia Brasileira**.

---

### 3. Os Princípios Internacionais de Catalogação (ICP - IFLA 2016)

Aprovados originariamente em 2009 e revisados em 2016 pela IFLA, os **ICPs** consagram as cinco **Tarefas do Usuário**:
1. **ENCONTRAR (*Find*):** Localizar recursos bibliográficos no catálogo usando qualquer atributo ou relação relevante (autor, título, assunto, data).
2. **IDENTIFICAR (*Identify*):** Confirmar com exatidão que o recurso recuperado corresponde exatamente à entidade procurada, distinguindo edições.
3. **SELECIONAR (*Select*):** Escolher o recurso que atende precisamente à necessidade do leitor (suporte físico, língua, edição).
4. **OBTER (*Obtain*):** Efetivar o acesso (localizar fisicamente na estante, solicitar por empréstimo entre bibliotecas ou baixar online).
5. **NAVEGAR (*Navigate*):** Explorar a teia de relações dentro do catálogo (navegar de um autor para suas obras derivadas, biografias ou assuntos).

> 💡 **O Princípio Supremo do ICP: A CONVENIÊNCIA DO USUÁRIO:**
> Ao formular regras descritivas ou resolver ambiguidades catalográficas, as necessidades e a linguagem comum dos leitores devem **sempre prevalecer** sobre o rigor burocrático e o purismo técnico do catalogador.

---

### 4. Pontos de Acesso e Controle de Autoridade

- **Ponto de Acesso Principal (*Main Entry*):** Ponto primordial de busca sob o qual o registro completo é estabelecido (autor pessoal único, primeiro autor de autoria compartilhada ou entidade coletiva quando couber).
- **Pontos de Acesso Secundários (*Added Entries*):** Entradas adicionais para coautores, tradutores, ilustradores, organizadores, títulos e séries.
- **Tipos de Remissivas de Autoridade:**
  - **Remissiva VER (*See*):** Encaminha de uma forma **não autorizada** (sinônimo, pseudônimo, grafia alternativa) para a forma **oficial adotada** (*Ex.: Garcia Marquez, Gabriel ➔ VER ➔ García Márquez, Gabriel*).
  - **Remissiva VER TAMBÉM (*See Also*):** Conecta duas formas **ambas autorizadas** que guardam relação de parentesco conceitual, mudança institucional ou evolução histórica (*Ex.: Ministério da Educação ➔ VER TAMBÉM ➔ Ministério da Educação e Cultura*).`,
  unicampContext: `Na **Unicamp**, a Divisão de Tratamento da Informação do SBU aplica o rigor do controle bibliográfico:
- **Catálogo de Autoridades Unificado:** O Acervus mantém catálogo de autoridades para nomes pessoais e entidades coletivas institucionais (Faculdades, Departamentos e Centros da Unicamp), assegurando recuperação precisa via remissivas *VER* e *VER TAMBÉM*.
- **Catalogação na Fonte (Ficha Catalográfica):** O SBU disponibiliza módulo automatizado para geração de fichas catalográficas para teses e dissertações acadêmicas conforme normas do AACR2/RDA e Código de Classificação Decimal.`,
  boardAnalysis: {
    trends: `### Padrões Extraídos das Provas Reais (OBJETIVA, CEBRASPE, VUNESP):
- **CBU e Depósito Legal:** Questões frequentes associam o Controle Bibliográfico Universal à legislação de Depósito Legal (Lei 10.994/2004) sob custódia da Biblioteca Nacional.
- **As 5 Tarefas do Usuário do ICP:** Cobrança literal dos verbos: Encontrar, Identificar, Selecionar, Obter e Navegar.
- **Remissiva VER vs. VER TAMBÉM:** As bancas adoram inverter os conceitos: afirmar que a remissiva *VER* liga duas formas autorizadas (ERRADO; liga não-autorizada para autorizada).`,
    commonTraps: `> 🚨 **Pegadinha Clássica de Prova (OBJETIVA / CEBRASPE):**
> *"A remissiva do tipo 'VER TAMBÉM' (See Also) é utilizada para encaminhar o consulente de um cabeçalho não autorizado ou termo alternativo para o único cabeçalho aprovado pelo catálogo da biblioteca."*
>
> **Gabarito: ERRADO!**
> A remissiva que direciona de um termo NÃO autorizado para o autorizado é a remissiva **VER (See)**. A remissiva **VER TAMBÉM (See Also)** conecta duas ou mais formas que são **AMBAS válidas e autorizadas** no catálogo.`
  },
  memorizationMatrix: `### Matriz de Controle Bibliográfico & Remissivas

| Instrumento | Função no Catálogo | Exemplo Prático |
| :--- | :--- | :--- |
| **CBU (UBC)** | Catalogação de cada obra em seu país de origem uma única vez | Alimentação da Bibliografia Brasileira |
| **Depósito Legal** | Envio obrigatório de cópia para a Biblioteca Nacional (Lei 10.994/04)| Preservação da memória bibliográfica pátria |
| **Remissiva VER** | Guia de termo **NÃO-AUTORIZADO** ➔ para **AUTORIZADO** | Silva, Chico da ➔ **VER** ➔ Silva, Francisco da |
| **Remissiva VER TAMBÉM**| Liga termos **AMBOS AUTORIZADOS** e correlacionados | Astronomia ➔ **VER TAMBÉM** ➔ Astrofísica |
| **Princípio Supremo**| **Conveniência do Usuário** (ICP / IFLA) | A regra serve ao leitor, não ao bibliotecário |`
};
