import type { AdvancedTopic } from '../types';

export const m07: AdvancedTopic = {
  id: "m07",
  title: "7. Fontes de Informação e Bases de Dados",
  authorsAndFrameworks: `### Autores e Taxonomias Teóricas de Referência

- **Denis Grogan e F. W. Lancaster:** Formuladores do modelo tripartite paradigmático das fontes de informação (Primárias, Secundárias e Terciárias), balizado pelo grau de originalidade e proximidade com o fato documentado.
- **Beatriz Valadares Cendón e Bernadete Santos Campello (2003):** *"Fontes de informação para pesquisadores e profissionais"*. A principal obra de referência taxonômica no Brasil sobre literatura especializada.
- **Murilo Bastos da Cunha e Cordélia Robalinho Cavalcanti (2008):** *Dicionário de Biblioteconomia e Arquivologia*. Fonte lexicográfica padrão utilizada por bancas de concurso para conceitos e definições estritas.`,
  advancedTheory: `### 1. A Tipologia Tripartite Clássica das Fontes de Informação

A literatura biblioteconômica divide as fontes documentais em três categorias estruturantes:

- **1. Fontes Primárias (Informação Inédita e Original):**
  Contêm conhecimento novo, descobertas recentes ou relatos em primeira mão que ainda não foram filtrados, sintetizados ou avaliados por terceiros.
  *Exemplos clássicos de concurso:* Artigos científicos originais (*papers* de pesquisa), Teses e Dissertações acadêmicas, Patentes de invenção, Relatórios Técnicos de projetos, Normas Técnicas (ABNT, ISO), Anais de Congressos (*Proceedings*), Correspondências epistolares e Diários oficiais.

- **2. Fontes Secundárias (Organização, Filtro e Apontamento):**
  Não trazem conhecimento inédito; sua função precípua é **organizar, indexar, resumir ou facilitar o acesso** às fontes primárias.
  *Exemplos clássicos de concurso:* Bases de dados bibliográficas e referenciais (Scopus, Web of Science, PubMed), Catálogos em linha de bibliotecas (OPACs), Bibliografias especializadas, Revistas de resumos (*Abstracts*), Índices de citação e **Artigos de Revisão de Literatura** (*Review Articles*).

- **3. Fontes Terciárias (Consolidação e Consulta Rápida):**
  Apresentam a informação em estágio final de consolidação enciclopédica ou atuam como guias direcionadores para as fontes secundárias e primárias.
  *Exemplos clássicos de concurso:* Dicionários da língua e técnicos, Enciclopédias gerais e especializadas, Anuários estatísticos, Manuais técnicos (*Handbooks*), Diretórios institucionais e Guias de fontes bibliográficas.

> ⚠️ **Atenção Máxima em Prova (Artigos de Revisão):**
> Embora publicados em revistas científicas, os **Artigos de Revisão Sistemática ou Integrativa** são classificados como **FONTES SECUNDÁRIAS**, pois não relatam um experimento novo de bancada, mas sim compilam e sintetizam estudos primários pré-existentes.

---

### 2. Categorias Especiais de Documentos

- **Literatura Cinzenta (*Grey Literature*):**
  Compreende a produção intelectual não convencional, gerada no âmbito governamental, acadêmico, industrial e comercial, **que não é disponibilizada através dos canais comerciais formais de edição e venda** (sem registro editorial padrão ou distribuição comercial em livrarias).
  *Exemplos típicos:* Teses, relatórios técnicos confidenciais ou institucionais, atas de conferências, traduções não publicadas e regulamentos internos.

- **Patentes de Invenção:**
  Documentos com dupla dimensão (jurídica e tecnológica). Revelam detalhadamente o estado da arte e soluções industriais inéditas antes que cheguem aos artigos científicos. No Brasil, o órgão regulador e depositário é o **INPI** (Instituto Nacional da Propriedade Industrial).

---

### 3. Grandes Bases Multidisciplinares Internacionais

- **Web of Science (Clarivate Analytics):**
  A mais tradicional base de indexação seletiva do mundo. Reúne a *Core Collection* e fundamenta o cálculo do Fator de Impacto (JIF) via *Journal Citation Reports (JCR)*.
- **Scopus (Elsevier):**
  Maior cobertura quantitativa de títulos e conferências globais que a Web of Science. Baseia seus índices no SCImago (*SJR — SCImago Journal Rank* e *CiteScore*).
- **LILACS (Literatura Latino-Americana em Ciências da Saúde):**
  Coordenada pela BIREME/OPAS/OMS, indexa a literatura em saúde da América Latina e Caribe, incluindo artigos, teses e monografias não capturadas pelas bases anglo-saxãs.`,
  unicampContext: `O **Sistema de Bibliotecas da Unicamp (SBU)** atua como ponte mediadora para o ecossistema de fontes:

- **Treinamento Especializado:** O SBU mantém programas contínuos de capacitação de discentes e docentes no uso avançado de bases como PubMed/MEDLINE, Scopus, Web of Science, SciFinder e IEEE Xplore.
- **Normalização e Suporte a Patentes:** Em articulação com a **Inova Unicamp** (Agência de Inovação da Unicamp), os bibliotecários prestam apoio técnico a pesquisadores na busca de anterioridade em bases de patentes (Espacenet, Derwent, INPI).`,
  boardAnalysis: {
    trends: `### Análise de Bancas (CEBRASPE, VUNESP e FUNCAMP)

- **CEBRASPE:** A banca é implacável na classificação hierárquica das fontes. As armadilhas mais recorrentes tentam classificar **Patentes** e **Anais de Congressos** como secundárias (ERRADO, são primárias) ou **Artigos de Revisão** como primárias (ERRADO, são secundárias).
- **VUNESP / FUNCAMP:** Exigem com frequência a definição canônica de **Literatura Cinzenta** e o reconhecimento de bases estatais em saúde e educação (LILACS, SciELO, Eric, PubMed).`,
    commonTraps: `> 🚨 **Pegadinha Clássica CEBRASPE / VUNESP:**
> *"Os anais de eventos científicos (proceedings) constituem fontes secundárias de informação, uma vez que decorrem de apresentações públicas já filtradas pela comissão avaliadora do congresso."*
>
> **Gabarito: ERRADO!**
> Os trabalhos publicados em anais de congressos trazem comunicações e pesquisas científicas de primeira mão; são, portanto, **fontes PRIMÁRIAS** por excelência.`
  },
  memorizationMatrix: `### Matriz Tripartite das Fontes de Informação

| Nível | Função Conceitual | Natureza do Conteúdo | Exemplos Irrefutáveis de Concurso |
| :--- | :--- | :--- | :--- |
| **Primária** | Geração e Registro | Inédito / Direto / Original | Artigos originais, Teses, Patentes, Normas ABNT, Anais, Relatórios Técnicos |
| **Secundária** | Mediação e Acesso | Filtro / Indexação / Síntese | Bases de dados (Scopus/WoS), Catálogos (OPACs), Bibliografias, **Artigos de Revisão** |
| **Terciária** | Consulta e Localização| Consolidado / Fato Estabelecido | Dicionários, Enciclopédias, Guias de fontes, Diretórios, Anuários |`
};
