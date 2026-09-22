import type { AdvancedTopic } from '../types';

export const m20: AdvancedTopic = {
  id: "m20",
  title: "20. Tecnologia de Softwares de Bibliotecas (SIGB / ILS)",
  authorsAndFrameworks: `### Autores e Terminologia Tecnológica Internacional

- **Marshall Breeding:** A maior autoridade internacional contemporânea no monitoramento dos sistemas de automação de bibliotecas (*Library Technology Guides*).
- **ILS / SIGB (*Integrated Library System* / Sistema Integrado de Gestão de Bibliotecas):** A designação clássica de softwares relacionais modulares para acervos físicos.
- **LSP (*Library Services Platform*):** A nova geração de plataformas concebida nativamente em nuvem (*Cloud / SaaS*), unificando a gestão de acervos impressos e assinaturas de recursos eletrônicos em larga escala.
- **Protocolo Z39.50 e SRU/SRW:** Padrões cliente-servidor para busca e recuperação remota de registros catalográficos entre servidores heterogêneos.`,
  advancedTheory: `### 1. A Evolução Geracional dos Sistemas de Automação

A tecnologia computacional aplicada às bibliotecas atravessou três grandes ciclos históricos:

- **1ª Geração (Mainframes e Processamento em Lote - Décadas de 1960/70):**
  Sistemas isolados e monolíticos, sem integração entre setores. O processamento era em lote (*batch*), com cartões perfurados ou fitas magnéticas, voltados estritamente ao controle de circulação ou impressão de fichas catalográficas.
- **2ª Geração — O SIGB Clássico (Décadas de 1980 a 2000):**
  Arquitetura cliente-servidor baseada em **Bancos de Dados Relacionais**. Caracteriza-se pela integração de módulos em torno de um **Arquivo Mestre Único**:
  - Quando a Aquisição cadastra o pedido de um livro, o registro preliminar fica imediatamente acessível para a Catalogação, que apenas o complementa;
  - A Circulação bloqueia o exemplar no balcão e o **OPAC** (*Online Public Access Catalog*) atualiza instantaneamente a disponibilidade para o usuário.
  *Limitação severa:* Desenhados quase que exclusivamente para o controle de itens **físicos patrimoniados**.
- **3ª Geração — LSP (*Library Services Platform*) e Descoberta (Era Atual):**
  Plataformas operando integralmente na nuvem (*Multi-tenant SaaS*). Gerenciam de forma unificada acervos físicos, pacotes massivos de e-books, repositórios digitais e periódicos sob licença. O catálogo para o usuário desvincula-se do sistema de gestão, sendo substituído por **Ferramentas de Descoberta (*Discovery Tools*)**.

---

### 2. Ferramentas de Descoberta (*Discovery*) vs. Busca Federada Tradicional

As bancas cobram com rigor a mecânica técnica que separa a Busca Federada do moderno *Discovery*:

- **Busca Federada Tradicional (Transmissão em Tempo Real):**
  Quando o usuário digita a consulta, o sistema dispara a busca simultaneamente para cada uma das dezenas de bases assinadas (Elsevier, IEEE, Springer).
  *Problema crônico:* **Extrema lentidão** (o sistema fica travado aguardando o retorno da base mais lenta), timeouts constantes e impossibilidade de aplicar um ranqueamento de relevância unificado.

- **Ferramentas de Descoberta (*Index-Based Discovery* - Ex: Primo, EDS, Summon):**
  O provedor do sistema pré-coleta e pré-indexa previamente os metadados de milhões de artigos científicos e e-books em um **Mega-Índice Centralizado na Nuvem**.
  *Grande vantagem:* A pesquisa ocorre em milissegundos com experiência idêntica à do Google, oferecendo facetas dinâmicas e ranqueamento integrado por relevância.`,
  unicampContext: `A **Unicamp** realizou uma das migrações tecnológicas mais complexas da universidade pública brasileira:

- **Adoção do Alma e Primo (ExLibris):** O Sistema de Bibliotecas da Unicamp (SBU) descontinuou sistemas legados locais e unificou todas as suas 28 bibliotecas setoriais na plataforma **Alma** (LSP em nuvem), integrando a consulta pública no **Primo** (Discovery Tool).
- **Catálogo Integrado Único:** Na mesma barra de pesquisa, o aluno da Unicamp pesquisa o livro impresso na estante do IFCH e, simultaneamente, acessa em texto completo artigos científicos internacionais das bases CAPES.`,
  boardAnalysis: {
    trends: `### Análise de Bancas (CEBRASPE, VUNESP e FUNCAMP)

- **CEBRASPE:** Explora rigorosamente o conceito de **"Sistema Integrado"** fundamentado no compartilhamento de dados sem redundância (um dado inserido pela Aquisição é aproveitado pela Catalogação e lido pela Circulação). Também formula pegadinhas sobre a diferença entre Busca Federada e Discovery.
- **VUNESP / FUNCAMP:** Cobram o papel do **Protocolo Z39.50** (protocolo de interoperabilidade para importação remota de registros MARC 21) e o funcionamento das ferramentas de Descoberta integradas a plataformas em nuvem.`,
    commonTraps: `> 🚨 **Pegadinha Clássica CEBRASPE / VUNESP:**
> *"As modernas ferramentas de descoberta (Discovery Tools) operam pelo mecanismo de busca federada instantânea, consultando individualmente e em tempo real os servidores de cada base de dados externa no momento exato em que o leitor digita sua consulta."*
>
> **Gabarito: ERRADO!**
> Essa é a definição da antiga e lenta **Busca Federada**. As **Ferramentas de Descoberta** baseiam-se em um **Mega-Índice Central pré-indexado na nuvem**, garantindo recuperação instantânea de dados já colhidos previamente.`
  },
  memorizationMatrix: `### Evolução dos Softwares de Biblioteca: SIGB Clássico vs. Discovery

| Critério de Comparação | OPAC Tradicional (SIGB) | Ferramenta de Descoberta (Discovery / LSP) |
| :--- | :--- | :--- |
| **Escopo do Acervo** | Restrito ao Acervo Físico Local | **Universal:** Físico + E-books + Bases CAPES + Repositório |
| **Arquitetura de Busca** | Consulta ao banco SQL local | **Mega-Índice Central pré-indexado** na nuvem |
| **Velocidade de Retorno** | Rápida para o acervo físico | **Instantânea** para milhões de artigos globais |
| **Ponto Único de Acesso** | Somente localização física | Texto completo em 1 clique (Link Resolver / OpenURL) |
| **Exemplos de Mercado** | Koha, Sophia, Pergamum | **Primo (ExLibris)**, EDS (EBSCO), Summon |`
};
