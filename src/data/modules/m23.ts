import type { AdvancedTopic } from '../types';

export const m23: AdvancedTopic = {
  id: "m23",
  title: "23. Editoração Científica (Fluxo Editorial e OJS)",
  authorsAndFrameworks: `Autores-Chave e Softwares (Sistemas):
• Meadows (1999): A comunicação científica em transição para o modelo digital.
• PKP (Public Knowledge Project): Desenvolvedora do Open Journal Systems (OJS) e OMP (Livros).
• Crossref: Agência mundial emissora de DOIs.`,
  advancedTheory: `1. O Fluxo Editorial de uma Revista Científica
O processo moderno é regido por sistemas de gestão editorial (SGE) e segue rigorosamente:
• Submissão: O autor envia o artigo (Preprint). O Editor-Chefe faz a "Triagem de Balcão" (Desk Reject), avaliando se bate com o Escopo da revista ou se tem plágio grosseiro.
• Avaliação pelos Pares (Peer Review): O artigo vai para especialistas externos. Modelos:
  - Single-Blind (Duplo-Cego): Mais comum. O autor não sabe quem avalia, o avaliador não sabe quem é o autor (foco no conteúdo, evita viés).
  - Open Peer Review (Revisão Aberta): Nova tendência da Ciência Aberta. Todo mundo sabe o nome de todo mundo, e os relatórios dos pareceristas são publicados junto com o artigo.
• Decisão: Aceito, Rejeitado, ou Revisões Maiores/Menores (Revise and Resubmit).
• Produção (Diagramação, Normalização APA/ABNT, atribuição de DOI e marcação XML/SciELO).
• Publicação.

2. Open Journal Systems (OJS) / SEER
O OJS (Sistema Eletrônico de Editoração de Revistas - nome do IBICT no Brasil) é um software de código aberto (Open Source) criado pelo PKP que gerencia TODO o fluxo (da submissão à indexação). 
Módulos do OJS: 1) Submissão, 2) Avaliação, 3) Edição/Produção, 4) Publicação.
Importante: O OJS automatiza o envio de metadados OAI-PMH (interoperabilidade nativa) e facilita o uso do DOI.

3. Identificadores Persistentes e Metadados
• DOI (Digital Object Identifier): É um link inquebrável. Diferente de uma URL (que pode dar erro 404 se a editora mudar o site), o DOI é um código alfanumérico resolvido por agências centrais (Crossref, Datacite). Se o arquivo mudar de lugar, a editora atualiza o banco do DOI, e o link continua funcionando.
• ORCID: O identificador único do PESQUISADOR, resolvendo o problema de homonímia (Ex: Maria Silva = 0000-0001...).

4. A Avaliação do Periódico Científico no Brasil (Qualis/CAPES)
O estrato Qualis (agora Qualis Único - A1, A2, A3, A4, B1, B2, B3, B4 e C) classifica o prestígio das revistas para os programas de Pós-Graduação, baseando-se intensamente em indicadores bibliométricos (JIF, CiteScore, h5-index).`,
  unicampContext: `A Unicamp hospeda o PPEC (Portal de Periódicos Eletrônicos Científicos), utilizando instâncias do OJS. O bibliotecário nesse setor não trabalha no balcão de empréstimo: atua como bibliotecário-editor, ajustando templates XML, submetendo metadados à Crossref para emissão de DOI, orientando os conselhos editoriais a não caírem no Qualis predatório, e usando ferramentas anti-plágio (Turnitin) na etapa de Desk Reject.`,
  boardAnalysis: {
    trends: `CEBRASPE (2018-2026): A banca gosta de misturar os termos. Gostam de falar que o OJS é um software proprietário fechado e caro (FALSO, é software livre e gratuito mantido pela comunidade PKP). Também cobram os identificadores, testando a diferença entre DOI (para o arquivo digital) e ORCID (para a pessoa).
    
VUNESP / FUNCAMP: Costumam focar na Avaliação por Pares. Cobram exatamente a definição do Duplo-Cego (Double-blind peer review) e como isso evita parcialidades e conflitos de interesse na publicação científica.`,
    commonTraps: `🚨 Pegadinha Clássica CEBRASPE: 
"A URL (Uniform Resource Locator) é o mecanismo de identificação digital mais seguro e permanente para publicações científicas, suplantando os custos e a lentidão na atualização do sistema DOI."
(ERRADO: URL sofre de Link Rot (Apodrecimento de link - erro 404). O DOI é o padrão-ouro de persistência, exatamente porque não é fixo a um endereço de servidor, mas sim ao metadado do objeto através de uma central.)`
  },
  memorizationMatrix: `FLUXO E IDENTIFICADORES
| Objeto | Identificador Padrão | Agência Comum |
|--------|----------------------|---------------|
| Pessoa (Autor)| ORCID | ORCID Inc. |
| Artigo Digital| DOI | Crossref |
| Revista (Periódico)| ISSN | IBICT (no BR) |
| Livro  | ISBN | CBL (Câmara Bras. Livro)|
| Avaliação Duplo-Cega | Autor oculto, Parecerista oculto | Justiça cega |`
};
