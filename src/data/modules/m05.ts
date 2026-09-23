import type { AdvancedTopic } from '../types';

export const m05: AdvancedTopic = {
  id: "m05",
  title: "5. Redes e Sistemas de Informação",
  authorsAndFrameworks: `### Autores, Órgãos Centrais e Marcos Estruturais

- **IBICT (Instituto Brasileiro de Informação em Ciência e Tecnologia):** Unidade de pesquisa vinculada ao MCTI, órgão normatizador e gestor histórico dos sistemas integrados e cooperativos de informação científica no Brasil.
- **Murilo Bastos da Cunha (1999):** Referência bibliográfica seminal sobre redes, consórcios de bibliotecas universitárias e compartilhamento cooperativo de recursos documentais.
- **RNP (Rede Nacional de Ensino e Pesquisa):** Gestora da infraestrutura de telecomunicações acadêmicas avançadas do Brasil e da **Comunidade Acadêmica Federada (CAFe)**.
- **CAPES (Coordenação de Aperfeiçoamento de Pessoal de Nível Superior):** Fundação vinculada ao MEC, responsável pela pós-graduação stricto sensu e gestora do **Portal de Periódicos CAPES**.
- **Protocolos ANSI/NISO Z39.50 e ISO 23950:** Padrões internacionais para busca e recuperação de informações entre sistemas computacionais heterogêneos.`,
  advancedTheory: `### 1. Fundamentos das Redes de Informação e Interoperabilidade

Com o advento da explosão documental e os custos crescentes de assinaturas, a cooperação interbibliotecária tornou-se mandatória:
- **Redes de Cooperação Técnica:** Focadas no compartilhamento de registros catalográficos e metadados para evitar a duplicidade de trabalho técnico (catalogação cooperativa).
- **Consórcios de Aquisição (*Library Consortia*):** Focados no compartilhamento de recursos financeiros para negociação em bloco de contratos de licenciamento de bases de dados e pacotes de e-books com descontos de escala.
- **Níveis de Interoperabilidade:**
  - **Técnica/Sintática:** Capacidade de comunicação entre hardware e software mediante protocolos abertos (TCP/IP, HTTP, XML, JSON).
  - **Semântica:** Capacidade dos sistemas de interpretar o significado dos dados de forma unívoca (vocabulários controlados, ontologias, esquemas padronizados de metadados como Dublin Core e MARC 21).

---

### 2. Protocolos de Comunicação: Z39.50 vs. SRU/SRW vs. OAI-PMH

Cobrança clássica em concursos de bibliotecário (presente em 72.6% das provas):
- **Z39.50 (ANSI/NISO):** Protocolo síncrono cliente-servidor tradicional criado para busca remota e recuperação de registros em catálogos eletrônicos (OPACs). Opera em portas dedicadas (porta 210) e permite ao bibliotecário consultar o catálogo de outra biblioteca (ex.: Biblioteca do Congresso) e copiar o registro MARC 21 diretamente para o seu software local.
- **SRU (Search/Retrieve via URL) e SRW (Search/Retrieve Web Service):** A evolução moderna do Z39.50 sobre a World Wide Web, utilizando requisições REST/HTTP e retornos em XML/JSON, eliminando barreiras de firewall do protocolo original.
- **OAI-PMH:** Protocolo assíncrono para colheita massiva de metadados (*harvesting*) entre repositórios digitais em XML.

---

### 3. A Constelação de Sistemas Cooperativos Nacionais (IBICT e CAPES)

- **BDTD (Biblioteca Digital Brasileira de Teses e Dissertações):**
  Agregador nacional mantido pelo IBICT que colhe, via OAI-PMH, os metadados de teses e dissertações defendidas no Brasil e cadastradas nos repositórios institucionais locais, integrando a NDLTD (*Networked Digital Library of Theses and Dissertations*).
- **CCN (Catálogo Coletivo Nacional de Publicações Seriadas):**
  Rede cooperativa que cadastra e localiza a posse das coleções de periódicos científicos (impressos e eletrônicos) nas bibliotecas brasileiras.
  *Atenção:* O CCN é um catálogo de **localização física/digital da coleção** e **NÃO** um repositório de texto integral.
- **COMUT (Programa de Comutação Bibliográfica):**
  Mecanismo coordenado pelo IBICT para solicitar e fornecer cópias oficiais de documentos (artigos, capítulos de livros, teses) entre bibliotecas cooperantes no Brasil e no exterior.
- **Portal de Periódicos CAPES:**
  Maior biblioteca virtual consorciada de pesquisa do país, com acesso a milhares de periódicos internacionais de alto impacto, bases de patentes e normas técnicas, acessível pelo IP de instituições participantes ou remotamente pela **Rede CAFe**.`,
  unicampContext: `Na **Unicamp**, a atuação nas redes informacionais é estratégica:
- **Rede CAFe e VPN:** Os alunos e docentes da Unicamp acessam o Portal CAPES e bases proprietárias fora do campus utilizando a autenticação corporativa única da Rede CAFe ou a VPN gerenciada pelo CCUEC.
- **Integração BDTD e Oasisbr:** Todas as teses e dissertações do Repositório da Produção Científica da Unicamp são colhidas pelo IBICT para exibição nos portais nacionais BDTD e Oasisbr.
- **Rede de Bibliotecas da Unicamp (SBU):** Opera com catalogação cooperativa interna centralizada no catálogo unificado Acervus, minimizando retrabalho entre as dezenas de bibliotecas setoriais.`,
  boardAnalysis: {
    trends: `### Padrões Extraídos das Provas Reais (OBJETIVA, CEBRASPE, VUNESP):
- **O que faz o CCN:** Pegadinha unânime das bancas: afirmar que o CCN disponibiliza o texto completo de artigos de revistas. Gabarito: **ERRADO**. O CCN apenas informa *onde* (qual instituição) está o fascículo do periódico.
- **Diferença entre Z39.50 e OAI-PMH:** O Z39.50 executa pesquisas dinâmicas ponto a ponto em catálogos OPAC para cópia de registros MARC; o OAI-PMH realiza colheita em lote de metadados Dublin Core para repositórios.
- **Catalogação Cooperativa:** As bancas cobram o objetivo precípuo: economia de custos e tempo, redução do backlog técnico e erradicação do retrabalho.`,
    commonTraps: `> 🚨 **Pegadinha Clássica de Concurso (OBJETIVA / CEBRASPE):**
> *"O Catálogo Coletivo Nacional de Publicações Seriadas (CCN) substituiu o Portal de Periódicos da CAPES, passando a disponibilizar o download gratuito e imediato do texto integral de todos os periódicos indexados."*
>
> **Gabarito: ERRADO!**
> O CCN é gerido pelo **IBICT** e funciona exclusivamente como ferramenta de **localização** de títulos e fascículos de periódicos em bibliotecas brasileiras. O Portal de Periódicos é gerido pela **CAPES** e tem como foco o licenciamento de texto completo.`
  },
  memorizationMatrix: `### Quadro Comparativo dos Sistemas Nacionais de Informação

| Sistema / Protocolo | Órgão Gestor | Natureza / Função | Conteúdo que fornece |
| :--- | :--- | :--- | :--- |
| **BDTD** | IBICT / MCTI | Agregador nacional de teses e dissertações | Metadados e links para o texto completo |
| **CCN** | IBICT / MCTI | Catálogo coletivo de periódicos seriados | Apenas dados de **localização** da posse da coleção |
| **COMUT** | IBICT / MCTI | Serviço de comutação bibliográfica | Cópia sob demanda de artigos e capítulos |
| **Portal CAPES** | CAPES / MEC | Biblioteca virtual de pesquisa internacional | Texto integral de periódicos e bases referenciais |
| **Z39.50** | ANSI / NISO | Protocolo cliente-servidor de busca em OPACs | Registros catalográficos MARC 21 para importação |
| **OAI-PMH** | Open Archives | Protocolo assíncrono de colheita HTTP/XML | Metadados (Dublin Core) para interoperabilidade |`
};
