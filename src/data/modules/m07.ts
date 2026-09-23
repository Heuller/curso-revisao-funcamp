import type { AdvancedTopic } from '../types';

export const m07: AdvancedTopic = {
  id: "m07",
  title: "7. Fontes de Informação e Bases de Dados",
  authorsAndFrameworks: `### Autores e Taxonomias Teóricas de Referência

- **Denis Grogan e F. W. Lancaster:** Formuladores do modelo tripartite paradigmático das fontes de informação (Primárias, Secundárias e Terciárias), balizado pelo grau de originalidade e proximidade com o fato documentado.
- **Beatriz Valadares Cendón e Bernadete Santos Campello (2003):** *"Fontes de informação para pesquisadores e profissionais"*. A principal obra de referência taxonômica no Brasil sobre literatura especializada.
- **Murilo Bastos da Cunha e Cordélia Robalinho Cavalcanti (2008):** *Dicionário de Biblioteconomia e Arquivologia*. Fonte lexicográfica padrão utilizada por bancas de concurso para conceitos e definições estritas.`,
  advancedTheory: `### 1. A Tipologia Tripartite Clássica das Fontes de Informação

Presente em 85.7% dos cadernos de provas reais analisados (uma das maiores frequências do concurso):

- **1. Fontes Primárias (Informação Inédita e Original):**
  - Contêm relatos originais em primeira mão, novas descobertas empíricas ou ideias científicas não filtradas nem condensadas previamente por terceiros.
  - *Exemplos clássicos de concurso:* Artigos científicos originais (*papers* de pesquisa), Teses e Dissertações acadêmicas, Patentes de invenção, Relatórios Técnicos de projetos, Normas Técnicas (ISO, IEEE), Anais de Congressos (*Proceedings*), Correspondências epistolares, Legislação e Diários oficiais.

- **2. Fontes Secundárias (Organização, Filtro e Apontamento):**
  - Não trazem conhecimento inédito primário; sua função precípua é **organizar, indexar, resumir ou facilitar o acesso** às fontes primárias.
  - *Exemplos clássicos de concurso:* Bases de dados bibliográficas e referenciais (Scopus, Web of Science, PubMed, LILACS, ERIC), Catálogos em linha de bibliotecas (OPACs), Bibliografias especializadas, Revistas de resumos (*Abstracts*), Índices de citação e **Artigos de Revisão de Literatura** (*Review Articles*).

- **3. Fontes Terciárias (Consolidação e Consulta Rápida):**
  - Apresentam a informação em estágio final de consolidação enciclopédica ou atuam como guias direcionadores para localizar fontes primárias e secundárias.
  - *Exemplos clássicos de concurso:* Dicionários da língua e técnicos, Enciclopédias gerais e especializadas, Anuários estatísticos, Manuais técnicos (*Handbooks*), Diretórios institucionais e Guias de fontes bibliográficas (bibliografias de bibliografias).

> ⚠️ **Atenção Máxima em Prova (Artigos de Revisão):**
> Embora publicados em revistas científicas com chancela por pares, os **Artigos de Revisão Sistemática ou Integrativa** são classificados como **FONTES SECUNDÁRIAS**, pois não relatam um experimento novo de bancada, mas sim compilam e sintetizam estudos primários pré-existentes.

---

### 2. Tipologia das Bases de Dados: Referenciais vs. Texto Completo

Cobrança direta identificada em dezenas de provas:
- **Bases de Dados Referenciais (Bibliográficas):**
  Contêm exclusivamente metadados representativos do documento (autor, título, fonte, resumo, termos de indexação e citações). Não armazenam o arquivo integral (PDF), embora possam fornecer links para ele (*resolvers*).
  *Exemplos:* **Scopus**, **Web of Science**, **PubMed / MEDLINE**, **ERIC** (educação), **LILACS**.
- **Bases de Dados de Texto Completo (*Full Text*):**
  Armazenam e disponibilizam para leitura e download o conteúdo integral dos documentos originais (artigos em PDF ou HTML).
  *Exemplos:* **SciELO**, **ScienceDirect (Elsevier)**, **IEEE Xplore**, **SpringerLink**, **JSTOR**.
- **Bases de Dados Fatuais / Numéricas:**
  Armazenam dados brutos, estatísticas, fórmulas químicas, estruturas moleculares ou séries temporais (ex: bases do IBGE, GenBank, PubChem).

---

### 3. Literatura Cinzenta (*Grey Literature*) e Patentes

- **Literatura Cinzenta:** Produção intelectual gerada no âmbito governamental, acadêmico, industrial e comercial **que não é distribuída através dos canais comerciais convencionais de edição e livrarias** (sem depósito comercial padrão). Exemplos: relatórios técnicos restritos, atas de reuniões, apostilas, separatas, pareceres governamentais e certidões técnicas.
- **Patentes de Invenção:** Títulos de propriedade temporária concedidos pelo Estado que descrevem invenções e processos industriais inéditos. No Brasil, o órgão responsável pelo registro e concessão é o **INPI** (Instituto Nacional da Propriedade Industrial).`,
  unicampContext: `O **Sistema de Bibliotecas da Unicamp (SBU)**:
- Mantém catálogo e guias de acesso a centenas de bases referenciais e de texto completo assinadas nacionalmente pela CAPES ou localmente pela universidade.
- Em parceria com a **Inova Unicamp** (Agência de Inovação da Unicamp), bibliotecários especializados prestam consultoria técnica na prospecção e busca de anterioridade de patentes nas bases Derwent Innovations Index, Espacenet e banco de dados do INPI.`,
  boardAnalysis: {
    trends: `### Padrões Extraídos das Provas Reais (OBJETIVA, CEBRASPE, VUNESP):
- **Classificação das Fontes:** Provas cobram listas de itens para associar (1) Primária, (2) Secundária, (3) Terciária. Lembrar: Patente, Tese e Anais de Congresso são sempre **Primárias**; Bases de dados, OPACs e Artigos de Revisão são **Secundárias**; Dicionários, Enciclopédias e Diretórios são **Terciárias**.
- **Natureza da base Scopus e Web of Science:** Ambas são formalmente classificadas como **bases referenciais e de citação**, e não primariamente como provedoras de texto integral.
- **Literatura Cinzenta:** O conceito clássico é: documento não publicado pelos canais comerciais formais.`,
    commonTraps: `> 🚨 **Pegadinha Clássica de Prova (OBJETIVA / CEBRASPE):**
> *"A base de dados Scopus é classificada na Ciência da Informação como uma fonte de informação primária, haja vista que publica pesquisas científicas inéditas conduzidas pela editora Elsevier."*
>
> **Gabarito: ERRADO!**
> A Scopus **não publica artigos inéditos**; ela é uma **base de dados referencial (fonte secundária)** que indexa metadados e citações de artigos publicados por milhares de revistas científicas de terceiros.`
  },
  memorizationMatrix: `### Matriz Decisória das Fontes de Informação

| Tipo de Fonte | Função | Exemplos Clássicos de Prova |
| :--- | :--- | :--- |
| **Primária** | Conhecimento inédito / original | Artigos originais, Teses, Patentes, Normas Técnicas, Anais de Congressos |
| **Secundária** | Organização, filtro e indexação | Bases referenciais (Scopus, WoS, PubMed), OPACs, **Artigos de Revisão** |
| **Terciária** | Síntese de fatos consolidados | Dicionários, Enciclopédias, Diretórios, Anuários estatísticos, Manuais |
| **Base Referencial** | Contém metadados e resumos | Scopus, Web of Science, LILACS, ERIC, MEDLINE |
| **Base Full-Text** | Contém o texto integral (PDF) | SciELO, ScienceDirect, IEEE Xplore, JSTOR |`
};
