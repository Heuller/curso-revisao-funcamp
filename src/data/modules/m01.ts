import type { AdvancedTopic } from '../types';

export const m01: AdvancedTopic = {
  id: "m01",
  title: "1. Biblioteca Digital e Repositório Institucional",
  authorsAndFrameworks: `### Autores e Marcos Teóricos Fundamentais

- **F. W. Lancaster (1978):** *"Toward Paperless Information Systems"*. Considerado o grande visionário da desmaterialização dos suportes físicos e da emergência da biblioteca sem papel.
- **Christine Borgman (2000):** *"From Gutenberg to the Global Information Infrastructure"*. Estabelece a distinção epistemológica clássica: *bibliotecas digitais como coleções orientadas a dados* versus *bibliotecas digitais como instituições sociais e de serviço*.
- **Clifford Lynch (2003):** Autor do manifesto fundador dos Repositórios Institucionais, definindo o RI como um conjunto de serviços que a universidade oferece à sua comunidade para o gerenciamento e disseminação de materiais digitais criados pela instituição.
- **Hélio Kuramoto (2006):** Pioneiro e articulador no IBICT da implantação do Movimento de Acesso Aberto e das diretrizes nacionais de Repositórios Institucionais no Brasil.
- **Open Archives Initiative (OAI):** Consórcio responsável pelo protocolo **OAI-PMH**, padrão técnico que tornou viável a interoperabilidade e a colheita automatizada de metadados em escala global.`,
  advancedTheory: `### 1. A Fronteira Estrutural: Biblioteca Digital (BD) vs. Repositório Institucional (RI)

O erro mais comum em provas de concurso é assumir que o **Repositório Institucional (RI)** é meramente uma Biblioteca Digital menor ou um repositório comum de arquivos. A diferença central reside na **missão institucional** e no **fluxo de aquisição informacional**:

- **Biblioteca Digital (BD) — Foco no Consumo:**
  Sua missão prioritária é atender às necessidades imediatas de estudo e leitura do usuário. O acervo provém predominantemente do meio **externo** por meio de compras, consórcios e licenciamento de editoras comerciais (ex: bases de dados EBSCO, ProQuest, assinaturas de periódicos e pacotes de e-books).
  *Pergunta condutora:* "O que os nossos usuários e alunos precisam consumir?"

- **Repositório Institucional (RI) — Foco na Produção e Memória:**
  Sua missão é registrar, preservar a longo prazo e democratizar em **Acesso Aberto** a memória intelectual da própria universidade. O acervo provém estritamente de **dentro** da instituição (teses, dissertações, artigos de docentes, preprints, relatórios de pesquisa e patentes). O RI não adquire nem comercializa literatura externa.
  *Pergunta condutora:* "O que a nossa universidade gerou de conhecimento?"

> 💡 **Princípio Decisivo de Prova:**
> A **Biblioteca Digital** compra e licencia acervo externo para leitura; o **Repositório Institucional** custodia, preserva e difunde a produção científica interna em regime de acesso aberto.

---

### 2. O Protocolo OAI-PMH e a Arquitetura de Interoperabilidade

Um Repositório Institucional isolado do mundo não cumpre sua função. Para que a produção acadêmica ganhe visibilidade global, os repositórios precisam comunicar seus registros com motores de busca e agregadores (como **Oasisbr**, **NDLTD**, **La Referencia** e **Google Acadêmico**).

Essa integração ocorre por meio do protocolo **OAI-PMH** (*Open Archives Initiative Protocol for Metadata Harvesting*), estruturado em dois agentes:

- **Provedores de Dados (Data Providers):**
  São os repositórios institucionais locais (instalados sobre plataformas como **DSpace**) que expõem seus metadados de forma padronizada via HTTP/XML para serem colhidos.

- **Provedores de Serviço (Service Providers):**
  São as entidades colhedoras (*harvesters*) que percorrem os repositórios cadastrados, extraem os metadados e constroem portais unificados de pesquisa e indicadores bibliométricos.

> ⚠️ **Metadados Obrigatórios:**
> O protocolo OAI-PMH estabelece como requisito mínimo e universal de conformidade o padrão de metadados **Dublin Core (15 elementos básicos)** em sua versão simples (não qualificada).

---

### 3. Políticas de Sustentabilidade: Mandato de Depósito vs. Adesão Voluntária

Para que um Repositório Institucional mantenha representatividade e volume documental, a biblioteca universitária atua na gestão de políticas mandatórias:

- **Depósito Voluntário:**
  Historicamente ineficaz no contexto universitário, com taxas de autoarquivamento espontâneo raramente superando **15%**, dada a sobrecarga de tarefas de docentes e pesquisadores.

- **Mandato Institucional de Depósito:**
  Resolução normativa de instâncias deliberativas da universidade que torna **compulsório** o depósito da versão final de teses, dissertações e artigos decorrentes de verba pública como condição prévia para titulação ou prestação de contas.`,
  unicampContext: `Na **Universidade Estadual de Campinas (Unicamp)**, o Repositório da Produção Científica e Intelectual é uma das maiores referências do país, sustentado pela plataforma **DSpace** e gerido operacionalmente pelo **Sistema de Bibliotecas da Unicamp (SBU)**.

- **Mandato Compulsório:** Na Unicamp, a entrega e auto-submissão digital da versão final de teses e dissertações aprovadas é requisito obrigatório para a expedição de diplomas pela Diretoria Acadêmica (DAC).
- **Curadoria e Validação:** A equipe de bibliotecários do SBU valida criteriosamente os metadados (padronização de termos, autoridades e licenças de direito autoral) antes da publicação definitiva e exposição via protocolo OAI-PMH para indexação internacional.`,
  boardAnalysis: {
    trends: `### Análise de Bancas (CEBRASPE, VUNESP e FUNCAMP)

- **CEBRASPE:** Explora reiteradamente o contraste entre **Z39.50** (protocolo cliente-servidor tradicional focado em catalogação cooperativa e consulta remota de OPACs) e **OAI-PMH** (protocolo assíncrono baseado em colheita de metadados XML para repositórios). A banca costuma criar itens incorretos afirmando que repositórios universitários devem despender orçamento com assinaturas de e-books comerciais.
- **VUNESP / FUNCAMP:** Cobram com frequência os conceitos de **Dublin Core simples** como requisito nativo do OAI-PMH e a articulação entre as diretrizes de preservação digital e as políticas institucionais de autoarquivamento compulsório.`,
    commonTraps: `> 🚨 **Pegadinha Clássica CEBRASPE / VUNESP:**
> *"Tanto a biblioteca digital quanto o repositório institucional possuem como diretriz precípua a aquisição onerosa de licenças de periódicos científicos e e-books comerciais para suprir o acervo de graduação."*
>
> **Gabarito: ERRADO!**
> Repositórios Institucionais **NUNCA** compram nem licenciam obras comerciais de terceiros. Seu escopo exclusivo é arquivar, preservar e franquear o acesso livre à produção gerada internamente pela própria instituição de ensino e pesquisa.`
  },
  memorizationMatrix: `### Matriz de Diferenciação Estrutural: BD vs. RI

| Dimensão de Análise | Biblioteca Digital (BD) | Repositório Institucional (RI) |
| :--- | :--- | :--- |
| **Origem do Acervo** | Externa (compras, doações, licenciamentos comerciais) | Estritamente Interna (produção própria da comunidade acadêmica) |
| **Foco de Atuação** | Demanda imediata do consumidor/leitor | Registro da memória institucional e difusão científica livre |
| **Protocolo Predominante**| Z39.50, SRU/SRW e APIs proprietárias | OAI-PMH (*Metadata Harvesting*) |
| **Padrão de Metadados**| MARC21, MODS e esquemas ricos | Dublin Core (15 elementos fundamentais) |
| **Regime de Acesso** | Restrito a usuários autorizados (DRMs, controle de IP) | Universal e irrestrito (**Open Access** - Acesso Aberto) |`
};
