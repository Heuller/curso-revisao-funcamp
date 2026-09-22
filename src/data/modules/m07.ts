import type { AdvancedTopic } from '../types';

export const m07: AdvancedTopic = {
  id: "m07",
  title: "7. Fontes de Informação e Bases de Dados",
  authorsAndFrameworks: `Autores-Chave e Guias:
• Campello (2003): "Fontes de informação para pesquisadores e profissionais". A taxonomia clássica no Brasil.
• Cunha e Cavalcanti (2008): Dicionário de Biblioteconomia e Arquivologia (para definições exatas exigidas em provas).
• Besterman: Considerado o "pai" da bibliografia moderna.`,
  advancedTheory: `1. Tipologia Clássica das Fontes (Primárias, Secundárias, Terciárias)
O CEBRASPE adota a visão de Denis Grogan (ou Lancaster, variando a tradução), baseada no grau de consolidação da informação original:
• Primárias: Informação original, não interpretada. Resultados novos. 
  Ex: Artigos originais (papers), Teses e Dissertações, Patentes, Relatórios Técnicos, Preprints, Normas Técnicas.
• Secundárias: Organizam, indexam e facilitam o acesso às primárias. Não trazem conteúdo original inédito.
  Ex: Bibliografias, Índices, Resumos (Abstracts), Bases de Dados de Indexação (Scopus, Web of Science), Revisões de Literatura (Review articles), Catálogos de Bibliotecas.
• Terciárias: Condensação e consolidação final do conhecimento humano (geralmente derivadas das secundárias para busca rápida).
  Ex: Enciclopédias, Dicionários, Anuários, Guias de Literatura, Diretorias.

2. Fontes Especiais e Sua Importância
• Literatura Cinzenta (Grey Literature): Produção não convencional, publicada fora dos canais comerciais/editoriais (não tem ISBN/ISSN formal em editora). São cruciais para a vanguarda tecnológica. Ex: Relatórios governamentais, Teses, Anais de Congressos (Proceedings).
• Patentes: Têm dupla função jurídica e técnica. São fontes riquíssimas porque exigem "novidade, atividade inventiva e aplicação industrial". O INPI é o repositório nacional brasileiro.
• Revisões Sistemáticas (Systematic Reviews): Embora "artigos" sejam primários, o "artigo de revisão" é secundário, pois compila e analisa resultados primários anteriores. (Isso é uma pegadinha mortal em prova).

3. Bases de Dados Multidisciplinares de Alto Impacto
• Web of Science (WoS) / Clarivate: Tradicional, possui rígido processo de seleção (JIF). Possui a Coleção Principal (Core Collection).
• Scopus (Elsevier): Maior base em cobertura de títulos que a WoS. Utiliza métricas baseadas no Scimago (CiteScore, SJR, SNIP).
• SciELO (Scientific Electronic Library Online): A "Via Ouro/Diamante" Ibero-americana. Criada em 1998, é o principal projeto de fortalecimento de periódicos regionais de Acesso Aberto no mundo.`,
  unicampContext: `A Unicamp é mantenedora de importantes bases, sendo signatária do Portal de Periódicos da CAPES. A universidade também abriga o IBICT na área de preservação de fontes secundárias estatais (como a BDTD - Biblioteca Digital de Teses e Dissertações).`,
  boardAnalysis: {
    trends: `CEBRASPE (2018-2026): A banca AMA a fronteira turva entre Primárias e Secundárias. Eles costumam usar as Patentes e Anais de Congressos como itens primários e os Artigos de Revisão (Review) como secundários. Também cobram a definição de Literatura Cinzenta (frequentemente usando o Relatório Técnico como exemplo canônico).
    
VUNESP / FUNCAMP: Cobram o conhecimento básico de bases estatais e acadêmicas, como LILACS, SciELO, e BDTD. Sabem questionar se LILACS inclui TCCs (Sim, monografias, teses, dissertações e artigos da área da saúde).`,
    commonTraps: `🚨 Pegadinha Clássica CEBRASPE: 
"Anais de congressos e periódicos científicos são fontes secundárias, pois já passaram pelo processo de revisão por pares e formatação editorial, não sendo mais considerados rascunhos de bancada."
(ERRADO: Anais de congresso e artigos originais em periódicos são as vias régias da ciência NOVA, portanto, são fontes PRIMÁRIAS absolutas.)`
  },
  memorizationMatrix: `MATRIZ TRIPARTITE DE FONTES
| Nível | Nível de Originalidade | Exemplos Curinga (Prova) |
|-------|------------------------|--------------------------|
| 1ª (Primária) | Criação / Inédito | Artigo Original, Patente, Tese, Relatório Técnico |
| 2ª (Secundária)| Indexação / Organização| Web of Science, Catálogo da Biblioteca, Artigo de Revisão |
| 3ª (Terciária) | Consenso / Fato Frio | Enciclopédia, Dicionário, Wikipedia |`
};
