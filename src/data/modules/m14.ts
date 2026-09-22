import type { AdvancedTopic } from '../types';

export const m14: AdvancedTopic = {
  id: "m14",
  title: "14. Representação Descritiva e Temática (Controle Bibliográfico)",
  authorsAndFrameworks: `### Autores e Marcos Teóricos Estruturantes

- **Eliane Serrão Alves Mey e Nair Yumiko Silveira (2009):** *"Catalogação no plural"*. A principal referência doutrinária brasileira. Postulam que a catalogação não existe para o livro nem para satisfazer o bibliotecário, mas exclusivamente para atender à **conveniência do usuário**.
- **IFLA (International Federation of Library Associations):** Entidade internacional máxima responsável pela formulação das normativas estruturantes (**ISBD**, **Declaração de Princípios Internacionais de Catalogação - ICP** e a família de modelos conceituais **FRBR/LRM**).
- **Charles Ammi Cutter (1876):** *"Rules for a Dictionary Catalog"*. Estabeleceu os objetivos pioneiros do catálogo moderno: permitir encontrar um livro por Autor, Título ou Assunto; mostrar o que a biblioteca possui; e auxiliar na escolha do livro.
- **Seymour Lubetzky (1953):** *"Cataloging Rules and Principles"*. Crítico visceral do emaranhado casuístico de regras antigas, defendeu a simplificação baseada em princípios universais de condições de autoria, servindo de base filosófica para os Princípios de Paris (1961).`,
  advancedTheory: `### 1. A Divisão Epistemológica do Controle Bibliográfico

No Brasil, o tratamento técnico documental estrutura-se em duas vertentes complementares:

- **Representação Descritiva (Catalogação Descritiva):**
  Registra as características **extrínsecas (físicas e de publicação)** do recurso bibliográfico. Identifica: Quem criou a obra? Qual o título exato? Em que ano e cidade foi editada? Quantas páginas e ilustrações possui?
  *Instrumentos normativos:* **ISBD**, **AACR2**, **RDA** e o formato de intercâmbio **MARC 21 Bibliográfico**.

- **Representação Temática (Classificação e Indexação):**
  Identifica e sistematiza as características **intrínsecas (conteúdo semântico)** da obra. Responde: De que assunto trata o documento? Qual o seu foco disciplinar?
  *Instrumentos normativos:* Sistemas de Classificação Decimal (**CDD**, **CDU**), Tabelas de Notação de Autor (**Cutter-Sanborn**), **Tesauros** e **Listas de Cabeçalhos de Assunto**.

---

### 2. Os Novos Princípios Internacionais de Catalogação (ICP - IFLA 2016)

Aprovados originariamente em 2009 e atualizados em 2016 em substituição aos Princípios de Paris (1961), os **ICPs** consagram as cinco **Tarefas do Usuário** perante qualquer catálogo bibliográfico do planeta:

- **1. ENCONTRAR (*Find*):** Localizar recursos bibliográficos no catálogo usando qualquer atributo ou relação relevante (autor, título, assunto, data).
- **2. IDENTIFICAR (*Identify*):** Confirmar com exatidão que o recurso recuperado corresponde à entidade procurada, distinguindo entre duas edições ou recursos semelhantes.
- **3. SELECIONAR (*Select*):** Escolher o recurso que atende precisamente às necessidades do usuário (ex: selecionar a edição em língua portuguesa, ou formato acessível em audiolivro).
- **4. OBTER (*Obtain*):** Efetivar o acesso ao recurso (localizar o exemplar físico na estante, solicitar empréstimo entre bibliotecas ou baixar o arquivo digital via link).
- **5. NAVEGAR (*Navigate*):** Explorar a teia de relações bibliográficas dentro do catálogo (ex: navegar da obra de um autor para seus adaptadores, tradutores ou assuntos correlatos).

> 💡 **O Princípio Supremo do ICP: A CONVENIÊNCIA DO USUÁRIO:**
> Ao formular regras descritivas ou resolver ambiguidades catalográficas, as necessidades e a linguagem comum dos leitores devem **sempre prevalecer** sobre o rigor burocrático e purismos técnicos do catalogador.

---

### 3. Pontos de Acesso e o Sagrado Controle de Autoridade

A catalogação não se resume à transcrição literal do livro. Sua eficiência reside na padronização dos **Pontos de Acesso** (chaves de busca normalizadas):
- **Ponto de Acesso Principal (*Main Entry*):** Entrada mandatória primária (geralmente sob o nome do autor pessoal ou entidade responsável).
- **Pontos de Acesso Secundários (*Added Entries*):** Entradas adicionais sob títulos, coautores, tradutores, ilustradores e séries.
- **Controle de Autoridade:** Padroniza a forma única aceita de um nome de autor pessoal, entidade ou assunto no catálogo:
  - **Remissiva VER (*See*):** Direciona de uma forma NÃO-autorizada/sinônimo para a forma oficial adotada (*Ex: Garcia Marquez, G. ➔ VER ➔ García Márquez, Gabriel*).
  - **Remissiva VER TAMBÉM (*See Also*):** Liga dois cabeçalhos autorizados que possuem relação de parentesco conceitual ou mudança histórica (*Ex: Ministério da Educação ➔ VER TAMBÉM ➔ Ministério da Educação e Cultura*).`,
  unicampContext: `Na **Unicamp**, o Catálogo Acervos do SBU mantém bases de autoridade rigorosas gerenciadas pela Divisão de Tratamento da Informação:

- **Desafio das Entidades Coletivas:** Em universidades com institutos complexos (ex: FCM, IFGW, FEEC), a correta aplicação das remissivas *VER* e *VER TAMBÉM* impede a dispersão da produção científica de departamentos que mudaram de denominação ao longo das décadas.
- **Exportação OAI-PMH:** Os registros com pontos de acesso normalizados garantem que as buscas no Repositório da Produção Científica e Intelectual da Unicamp recuperem a totalidade dos artigos de um pesquisador, independentemente de como seu nome foi assinado na revista.`,
  boardAnalysis: {
    trends: `### Análise de Bancas (CEBRASPE, VUNESP e FUNCAMP)

- **CEBRASPE:** Explora rigorosamente a dicotomia entre **Representação Descritiva** (atributos extrínsecos da manifestação) e **Representação Temática** (conteúdo semântico intrínseco). Também formula itens sobre o princípio basilar da **Conveniência do Usuário**.
- **VUNESP / FUNCAMP:** Exigem a memorização dos **5 verbos das tarefas do usuário do ICP** (Encontrar, Identificar, Selecionar, Obter e **Navegar**), bem como a distinção entre remissivas *VER* (forma não autorizada para autorizada) e *VER TAMBÉM* (entre duas formas autorizadas correlatas).`,
    commonTraps: `> 🚨 **Pegadinha Clássica CEBRASPE / VUNESP:**
> *"Conforme a Declaração de Princípios Internacionais de Catalogação (ICP), o princípio da Conveniência do Usuário subordina-se à padronização das redes bibliográficas internacionais, de modo que os costumes locais dos leitores não podem influenciar a escolha dos pontos de acesso."*
>
> **Gabarito: ERRADO!**
> O princípio da **Conveniência do Usuário é o PRINCÍPIO SUPREMO** de toda a catalogação. Todas as decisões de padronização devem servir primariamente ao usuário, e não à conveniência dos sistemas de automação ou normas internacionais estéreis.`
  },
  memorizationMatrix: `### Síntese: Os 5 Verbos do ICP & Os Objetivos de Cutter

| Tarefa do Usuário (ICP 2016) | Ação Prática no Catálogo |
| :--- | :--- |
| **1. ENCONTRAR (*Find*)** | Fazer uma busca e trazer resultados relevantes |
| **2. IDENTIFICAR (*Identify*)** | Diferenciar uma edição específica de outras semelhantes |
| **3. SELECIONAR (*Select*)** | Escolher o formato ou suporte adequado (ex: audiolivro vs. impresso) |
| **4. OBTER (*Obtain*)** | Acessar o recurso (localizar na estante ou baixar o PDF) |
| **5. NAVEGAR (*Navigate*)** | Explorar relações entre autores, obras e assuntos correlatos |

#### Tipologia das Remissivas de Autoridade
- **VER (See):** De uma forma **errada/sinônimo** para a forma **oficial autorizada**.
- **VER TAMBÉM (See Also):** Entre duas formas **oficiais autorizadas** relacionadas historicamente.`
};
