import type { AdvancedTopic } from '../types';

export const m01: AdvancedTopic = {
  id: "m01",
  title: "1. Biblioteca Digital e Repositório Institucional",
  authorsAndFrameworks: `Autores e Marcos:
• F.W. Lancaster (1978): "Toward Paperless Information Systems". O visionário da desmaterialização do acervo.
• Christine Borgman (2000): "From Gutenberg to the Global Information Infrastructure". Distingue bibliotecas digitais como coleções X bibliotecas digitais como instituições.
• Clifford Lynch (2003): Manifesto fundador dos Repositórios Institucionais.
• Hélio Kuramoto (2006): Pioneiro da implantação do Movimento de Acesso Aberto e dos RIs no Brasil (IBICT).
• Protocolo OAI-PMH (Open Archives Initiative Protocol for Metadata Harvesting): O sangue que corre nas veias dos RIs.`,
  advancedTheory: `1. A Fronteira entre Biblioteca Digital (BD) e Repositório Institucional (RI)
O erro fatal é achar que RI é apenas uma BD menor. A diferença é de MISSÃO, não de tamanho.
• Biblioteca Digital (BD): Atua na ponta do CONSUMO. Sua missão é servir ao usuário (leitor). O acervo vem de fora: livros eletrônicos comprados (licenciados de editoras como EBSCO, ProQuest), bases assinadas. Foco: O que meu usuário quer ler?
• Repositório Institucional (RI): Atua na ponta da PRODUÇÃO (Memória). Sua missão é servir à instituição e à sociedade (Acesso Aberto). O acervo vem DE DENTRO: teses, dissertações, preprints dos docentes da casa. O RI nunca compra material externo. Foco: O que minha instituição produziu?

2. O Protocolo OAI-PMH e a Interoperabilidade
Um RI isolado é inútil. Ele precisa ser "colhido" por buscadores (como o OasisBR).
O OAI-PMH divide o mundo em dois agentes:
• Provedores de Dados (Data Providers): O Repositório Institucional local que expõe seus metadados (Dublin Core).
• Provedores de Serviço (Service Providers): O "coletor" (Harvester) que varre os RIs, coleta os metadados e cria um mega-índice global (ex: NDLTD, Google Scholar).
O padrão mínimo e obrigatório de metadados exigido pelo OAI-PMH é o Dublin Core (15 elementos básicos).

3. Mandato de Depósito e a Resistência Docente
Para um RI sobreviver, ele precisa de "Mandatos" (políticas institucionais que obrigam o pesquisador a depositar sua obra lá). Sem o mandato, o depósito voluntário fica em torno de 15%.`,
  unicampContext: `A Unicamp possui um dos maiores RIs do Brasil, gerido sob a plataforma DSpace. O Sistema de Bibliotecas (SBU) lida com a auto-submissão e o "mandato de depósito" de Teses e Dissertações, que é estritamente obrigatório para obtenção do diploma na Unicamp. A biblioteca atua validando os metadados antes de expor a obra para o mundo via OAI-PMH.`,
  boardAnalysis: {
    trends: `CEBRASPE (2018-2026): A banca esmigalha o candidato na diferença entre Z39.50 (usado para catálogo cooperativo antigo) e OAI-PMH (usado para RIs modernos). Eles adoram afirmar que um RI deve comprar acervos externos para suprir as demandas bibliográficas dos calouros (ERRADO!).
VUNESP / FUNCAMP: Costumam focar no padrão de metadados obrigatório dos repositórios (Dublin Core) e no conceito de Preservação Digital atrelado à missão do RI a longo prazo.`,
    commonTraps: `🚨 Pegadinha Clássica CEBRASPE: 
"Tanto a biblioteca digital quanto o repositório institucional possuem como diretriz principal a aquisição de obras de terceiros por meio de consórcios para atender à demanda de graduação."
(ERRADO: Repositório NÃO adquire obra de terceiro, ele arquiva estritamente a produção própria da universidade para dar acesso livre.)`
  },
  memorizationMatrix: `DIFERENÇA CRÍTICA: BD vs RI
| Característica | Biblioteca Digital (BD) | Repositório Institucional (RI) |
|----------------|-------------------------|--------------------------------|
| Origem do Acervo | Externo (comprado/assinado) | Estritamente Local (produzido na inst.) |
| Foco Principal | O Consumidor (Leitor) | O Produtor e a Memória Inst. |
| Interoperabilidade| Z39.50 / APIs Comerciais | OAI-PMH (Harvesting) + Dublin Core |
| Política Legal | DRMs restritivos | Acesso Aberto (Open Access) |`
};
