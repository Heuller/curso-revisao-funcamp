import type { AdvancedTopic } from '../types';

export const m01: AdvancedTopic = {
  id: "m01",
  title: "1. Biblioteca Digital e Repositório Digital",
  authorsAndFrameworks: `Autores-Chave:
• F. W. Lancaster (1994): Precursor da transição do papel para o eletrônico, cunhando as tensões de acesso versus propriedade.
• Christine Borgman (1999): Definiu Bibliotecas Digitais (BD) não apenas como coleções organizadas, mas como extensões do ciclo de pesquisa e aprendizagem.
• Hélio Kuramoto (2006) & Fernando Leite (2009): Pioneiros no Brasil sobre a introdução dos Repositórios Institucionais (RI) e o movimento de Acesso Aberto (Via Verde).
  
Padrões: OAIS (ISO 14721) para preservação, Dublin Core (DC) para metadados, OAI-PMH para coleta.`,
  advancedTheory: `1. A Complexidade da Biblioteca Digital (BD)
Diferente da noção primária de "acervo digitalizado", a BD moderna é um ecossistema complexo (Borgman). Ela independe da proveniência do acervo: pode conter e-books assinados de editoras comerciais (ex: EBSCO, ProQuest), materiais em domínio público, ou coleções especiais digitalizadas. 
Seu foco principal é o USUÁRIO e os serviços agregados (busca avançada, descoberta, referência virtual). Não existe obrigatoriedade de depósito.

2. Repositório Institucional (RI): O Cofre da Memória
O RI possui uma filosofia completamente distinta (Kuramoto). Ele não "compra" livros comerciais. O RI é construído a partir da produção intelectual GERADA pela própria instituição matriz (teses, dissertações, preprints dos docentes).
• Mandato: A maioria das universidades federais e estaduais (incluindo a Unicamp) possui uma Política Mandatória (obrigatória) de depósito.
• Arquitetura Aberta: O RI é a base tecnológica da Via Verde do Acesso Aberto. Seu objetivo é interoperar com o mundo através do protocolo OAI-PMH (Open Archives Initiative Protocol for Metadata Harvesting).
• Tipologia: Pode ser Institucional (produção da própria universidade) ou Temático (focado em uma área, independente da instituição, como o arXiv ou E-LIS).

3. Interoperabilidade (Z39.50 vs OAI-PMH)
BDs clássicas focadas em catálogos (OPACs) utilizam o protocolo Z39.50 (busca distribuída em bancos relacionais MARC). Já os RIs utilizam o OAI-PMH, cujo papel não é a busca em tempo real, mas o "harvesting" (coleta) em massa de metadados padrão (geralmente Dublin Core).`,
  unicampContext: `A Unicamp possui um ecossistema bifurcado:
1. Repositório Institucional: O Repositório da Produção Científica e Intelectual (Acervus), onde a IN CCPG nº 001/2024 exige o depósito compulsório das dissertações e teses.
2. Biblioteca Digital da Unicamp (BBU): Plataformas gerenciadas pelo Sistema de Bibliotecas (SBU) integrando serviços assinados (CAPES, Minha Biblioteca) num ambiente de Discovery (Primo/Alma).`,
  boardAnalysis: {
    trends: `CEBRASPE (2018-2026): A banca adora explorar a diferença entre Repositório Temático e Institucional. Também insiste em cobrar a estrutura técnica: OAI-PMH é o sangue dos repositórios, e o formato de metadados obrigatório por excelência para que a coleta (harvesting) funcione é o Dublin Core (DC) sem qualificação.
    
VUNESP/FCC: Focam frequentemente no "Acesso Aberto", tentando dizer que bibliotecas digitais necessariamente exigem gratuidade de tudo. Errado. BDs possuem controle de acesso (DRM, senhas) para acervos assinados. RIs é que são focados no Open Access.`,
    commonTraps: `🚨 Pegadinha Clássica CEBRASPE: 
"Tanto a biblioteca digital quanto o repositório institucional possuem como diretriz principal a aquisição de obras de terceiros por meio de consórcios para atender à demanda de graduação." 
(ERRADO: Repositório não adquire obra de terceiro, ele arquiva a produção própria).`
  },
  memorizationMatrix: `DIFERENÇA CRÍTICA
| Característica | Biblioteca Digital (BD) | Repositório Institucional (RI) |
|----------------|--------------------------|--------------------------------|
| Origem do Acervo | Externo (comprado/assinado) + Local | Estritamente Local (produzido na inst.) |
| Foco Principal | O Usuário (Demanda de leitura) | O Produtor/Memória (Disseminação OA) |
| Interoperabilidade | Z39.50 (Catálogos) / APIs | OAI-PMH (Harvesting) |
| Mandato de Depósito | Não existe | Frequente (Obrigatório) |`
};
