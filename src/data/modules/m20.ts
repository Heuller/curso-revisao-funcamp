import type { AdvancedTopic } from '../types';

export const m20: AdvancedTopic = {
  id: "m20",
  title: "20. Tecnologia de Softwares de Bibliotecas (SIGB / ILS)",
  authorsAndFrameworks: `Terminologia Internacional:
• ILS (Integrated Library System): O equivalente gringo ao nosso SIGB.
• LSP (Library Services Platform): A nova geração de softwares, focados em nuvem e gestão de recursos eletrônicos (e-resources).`,
  advancedTheory: `1. Evolução Tecnológica
• 1ª Geração: Computadores de grande porte (Mainframes), processamento em lote (batch), sistemas proprietários não integrados.
• 2ª Geração (SIGB): O Sistema Integrado de Gestão de Bibliotecas clássico. Arquitetura cliente/servidor. Banco de dados relacional que compartilha registros entre os módulos (Aquisição, Catalogação, Circulação, OPAC). Foco apenas em acervo FÍSICO.
• 3ª Geração (Discovery e LSP): A arquitetura migra para a Web (Cloud-based / SaaS). Os sistemas agora gerenciam pesadamente acervos eletrônicos (livros digitais, assinaturas de periódicos). A interface do usuário separa o "Back-end" (onde o bibliotecário trabalha) do "Front-end" (Ferramenta de Descoberta / Discovery).

2. Módulos e Interoperabilidade
Um SIGB não existe sem interoperabilidade. O protocolo Z39.50 é a alma do SIGB clássico, permitindo a "catalogação cooperativa" (baixar o registro pronto da Library of Congress ou USP direto para a sua base).
O módulo de OPAC (Online Public Access Catalog) é a vitrine.

3. Discovery Tools (Ferramentas de Descoberta)
Mecanismos de busca que varrem uma miríade de fontes simultaneamente através de um único ponto de busca. Diferente da busca federada tradicional (que joga a busca em tempo real para as bases lentas), o Discovery pré-indexa os metadados de TODAS as bases assinadas (CAPES, Scopus, Catálogo Local) em um super-índice central (Index-based Discovery). Exemplos: Primo (ExLibris), EDS (EBSCO), Summon.`,
  unicampContext: `A Unicamp está no ápice dessa evolução. O SBU abandonou antigos sistemas legados (Acervus/Sophia) e implementou a plataforma Alma (Back-end) junto com o Primo (Discovery / Front-end), ambas da ExLibris, migrando totalmente para a nuvem. Isso unificou a gestão de acervo físico e assinaturas CAPES numa experiência de "Google Search" para o aluno.`,
  boardAnalysis: {
    trends: `CEBRASPE (2018-2026): A banca esmigalha o conceito de "Sistemas Integrados". A palavra chave é "Compartilhamento de Arquivo Mestre". Num SIGB, quando o setor de Aquisição compra o livro e gera um dado prévio, a Catalogação reaproveita esse mesmo dado, sem re-digitar.
    
VUNESP / FUNCAMP: Cobram as Ferramentas de Descoberta (Discovery) testando a diferença delas com OPACs convencionais. O OPAC só acha livro físico que a biblioteca tem, o Discovery acha artigos de periódicos dentro da Base de Dados da EBSCO.`,
    commonTraps: `🚨 Pegadinha Clássica CEBRASPE: 
"A Busca Federada e a Ferramenta de Descoberta (Discovery) operam sob o mesmo princípio: ambas realizam a busca em tempo real na base de cada fornecedor individual."
(ERRADO: Busca Federada age em tempo real (é lenta, espera cada base responder). Discovery pré-colhe (harvest) os metadados antes em um mega-índice e a busca acontece em milissegundos dentro do próprio servidor do Discovery.)`
  },
  memorizationMatrix: `SIGB vs DISCOVERY (EVOLUÇÃO)
| Característica | OPAC (SIGB Clássico) | Ferramenta de Descoberta |
|----------------|----------------------|--------------------------|
| O que indexa? | Apenas o Acervo Físico Local | Físico + Artigos + Bases (Tudo) |
| Servidor | Servidor Físico na Faculdade | Nuvem (SaaS) Mega-índice |
| Tempo | Base Relacional Tradicional | Pré-indexado (Busca Veloz) |`
};
