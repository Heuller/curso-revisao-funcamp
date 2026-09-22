import type { AdvancedTopic } from '../types';

export const m23: AdvancedTopic = {
  id: "m23",
  title: "23. Editoração Científica (Fluxo Editorial e OJS)",
  authorsAndFrameworks: `### Autores, Softwares e Órgãos de Governança

- **Arthur Jack Meadows (1999):** *"A comunicação científica"*. Obra seminal sobre a história, dinâmica e sociologia dos periódicos científicos e da revisão por pares.
- **PKP (Public Knowledge Project):** Consórcio universitário internacional criador do **Open Journal Systems (OJS)**, a plataforma de software livre que democratizou a editoração eletrônica global.
- **Crossref e DataCite:** Agências internacionais oficiais de registro e resolução de identificadores persistentes (**DOI**).
- **ORCID Inc.:** Organização sem fins lucrativos mantenedora do identificador digital aberto e persistente para pesquisadores.`,
  advancedTheory: `### 1. As Macroetapas do Fluxo Editorial Científico

A editoração de periódicos acadêmicos é um processo rigorosamente padronizado estruturado em cinco fases:

- **1. Submissão e Triagem Inicial (*Desk Review / Desk Reject*):**
  O autor submete o manuscrito. O Editor-Chefe realiza a avaliação preliminar de escopo e conformidade formal:
  - Se o artigo desrespeitar o foco da revista ou apresentar plágio evidente (detectado por softwares como Turnitin ou iThenticate), é rejeitado sumariamente (**Desk Reject**), poupando o tempo dos pareceristas.
- **2. Avaliação pelos Pares (*Peer Review*):**
  O artigo é encaminhado a especialistas *ad hoc*. Modalidades clássicas cobradas em concurso:
  - **Duplo-Cego (*Double-Blind*):** O modelo tradicional mais adotado. A identidade dos autores é ocultada dos avaliadores, e a identidade dos pareceristas é ocultada dos autores, mitigando vieses de prestígio ou preconceitos institucionais.
  - **Simples-Cego (*Single-Blind*):** Os pareceristas sabem quem é o autor, mas o autor desconhece quem são os pareceristas.
  - **Revisão Aberta (*Open Peer Review* / Ciência Aberta):** As identidades de ambas as partes são públicas, e os pareceres críticos podem ser publicados juntamente com o artigo aprovado.
- **3. Decisão Editorial:**
  Com base nos relatórios, o editor decide por: *Aceitar*, *Rejeitar* ou *Revisões (Maiores ou Menores)*.
- **4. Editoração e Produção Técnica (*Layout Editing*):**
  Preparação do texto aceito: revisão gramatical e estilística, normalização bibliográfica, marcação em **XML SciELO / JATS**, diagramação em PDF/HTML e atribuição do prefixo **DOI**.
- **5. Publicação e Disseminação:**
  Disponibilização do fascículo no portal e indexação automática via protocolo **OAI-PMH** em bases internacionais.

---

### 2. O Ecossistema do Open Journal Systems (OJS / SEER)

No Brasil, o OJS foi traduzido e disseminado pelo IBICT sob a denominação **SEER** (Sistema Eletrônico de Editoração de Revistas):
- **Software Livre (*Open Source*):** Desenvolvido em código aberto pela comunidade do PKP, sem custos de licenciamento de software proprietário.
- **Gestão Integral do Fluxo:** Rastreia e documenta todas as interações entre Autores, Editores, Pareceristas, Diagramadores e Leitores com trilhas de auditoria protegidas.
- **Interoperabilidade Nativa:** Possui servidor OAI-PMH embutido, expondo metadados em Dublin Core para colheita imediata por buscadores globais.

---

### 3. Identificadores Persistentes (*PIDs*): A Morte do "Erro 404"

- **DOI (*Digital Object Identifier*):**
  Identificador alfanumérico perene atribuído ao objeto digital (artigo, livro, conjunto de dados).
  *Mecânica de Persistência:* Diferente de uma URL comum (que quebra e gera *erro 404* quando a revista muda de servidor), o DOI é resolvido centralmente pela **Crossref**. Se o website da revista mudar de endereço, a editora atualiza o servidor central do DOI, e o link de acesso permanece eternamente funcional.
- **ORCID (*Open Researcher and Contributor ID*):**
  Código alfanumérico persistente de 16 dígitos atribuído unicamente a cada **pesquisador**. Resolve de forma definitiva o problema da **homonímia** e variações na grafia do nome do cientista.`,
  unicampContext: `O **Portal de Periódicos Eletrônicos Científicos da Unicamp (PPEC)**, coordenado pelo Sistema de Bibliotecas da Unicamp (SBU):

- **Atuação do Bibliotecário-Editor:** Os bibliotecários da Unicamp atuam diretamente na gestão técnica de instâncias do OJS, realizando o depósito automatizado de metadados XML na Crossref para emissão de DOIs institucionais.
- **Conformidade SciELO e Qualis:** O SBU assessora os conselhos editoriais das revistas da universidade para que atinjam os critérios de pontuação máxima no sistema de estratos da CAPES, adotando práticas de Ciência Aberta e políticas de dados de pesquisa.`,
  boardAnalysis: {
    trends: `### Análise de Bancas (CEBRASPE, VUNESP e FUNCAMP)

- **CEBRASPE:** Explora reiteradamente as características do **OJS/SEER**, afirmando falsamente que se trata de uma plataforma comercial paga de código fechado (ERRADO, é software livre e de código aberto). Também cobram o conceito de **Link Rot** (*apodrecimento de links*) para justificar a necessidade do **DOI**.
- **VUNESP / FUNCAMP:** Cobram os modelos de avaliação por pares (enfatizando o **Duplo-Cego**) e a correspondência entre identificadores persistentes: **ORCID** (para o pesquisador humano) versus **DOI** (para o artigo/documento digital).`,
    commonTraps: `> 🚨 **Pegadinha Clássica CEBRASPE / VUNESP:**
> *"A URL convencional de uma página web constitui o identificador persistente recomendado internacionalmente pela CAPES para garantir a localização permanente de artigos científicos em caso de descontinuidade da editora."*
>
> **Gabarito: ERRADO!**
> A URL comum não é persistente; ela é vulnerável a alterações de domínio e quebra de links (*erro 404*). O identificador persistente e perene consagrado internacionalmente para artigos digitais é o **DOI (Digital Object Identifier)**.`
  },
  memorizationMatrix: `### Mapeamento dos Identificadores Persistentes (PIDs)

| Objeto Identificado | Identificador Padrão | Entidade Registradora | Função Principal |
| :--- | :--- | :--- | :--- |
| **Pesquisador (Pessoa)** | **ORCID** (16 dígitos) | ORCID Inc. | Erradicar homonímias de nomes científicos |
| **Artigo / Objeto Digital** | **DOI** (*Digital Object Identifier*) | Crossref / DataCite | Link persistente à prova de mudança de servidores |
| **Publicação Seriada** | **ISSN** (8 dígitos) | Centro Internacional do ISSN / IBICT | Identificar o título da revista ou periódico |
| **Livro Monográfico** | **ISBN** (13 dígitos) | Câmara Brasileira do Livro (CBL) | Identificar a edição comercial da obra impressa/e-book |

#### Modalidades de Revisão por Pares
- **Duplo-Cego (*Double-Blind*):** Autor e Parecerista anônimos entre si.
- **Simples-Cego (*Single-Blind*):** Parecerista conhece o autor; autor não conhece o parecerista.
- **Aberta (*Open Peer Review*):** Transparência total de identidades e pareceres.`
};
