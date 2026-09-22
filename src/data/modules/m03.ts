import { AdvancedTopic } from '../types';

export const m03: AdvancedTopic = {
  id: "m03",
  title: "3. Ciência Aberta (Open Science) e o Acesso Aberto (Open Access)",
  authorsAndFrameworks: `Autores-Chave e Marcos Históricos:
• Peter Suber (2012): O maior expoente global sobre Acesso Aberto (Open Access).
• Kuramoto (2006): Introdução do manifesto de acesso aberto no IBICT e Manifesto Brasileiro.
• Marcos Históricos (BBBs): Budapeste (2002), Bethesda (2003) e Berlim (2003). As três declarações fundamentais que cunharam o conceito de OA.
• OCDE e UNESCO (2021): Recomendação sobre Ciência Aberta, definindo-a como um constructo inclusivo que vai muito além de artigos gratuitos.`,
  advancedTheory: `1. O Guarda-Chuva da Ciência Aberta (Open Science)
A Ciência Aberta não é um fim em si mesmo, mas um movimento de mudança estrutural no ethos científico. O Acesso Aberto (Open Access - OA) é APENAS UM dos pilares. A taxonomia (escola de FOSTER) define a Ciência Aberta englobando:
• Acesso Aberto (Literatura)
• Dados Abertos (Open Data / FAIR)
• Pesquisa Reprodutível Aberta (Open Source / Open Notebooks)
• Avaliação Aberta pelos Pares (Open Peer Review)
• Ciência Cidadã (Citizen Science)
• Recursos Educacionais Abertos (OER)

2. Acesso Aberto (Open Access - OA): Definição Técnica (BBBs)
OA não significa apenas "gratuito para ler" (Gratis OA). O verdadeiro Open Access (Libre OA) exige remoção das barreiras de PREÇO (não há paywalls) e de PERMISSÃO (uso de licenças abertas, como Creative Commons, permitindo adaptação e reuso comercial ou não). 

3. As Vias do Acesso Aberto
• Via Verde (Green Road): Autoarquivamento (self-archiving). O autor publica num periódico (pago ou não) e deposita uma versão (geralmente o post-print / versão aceita) num Repositório Institucional. Tem custo zero para ler, zero para publicar. Baseia-se no protocolo OAI-PMH e em mandatos institucionais.
• Via Dourada (Gold Road): Publicação em periódicos nativamente abertos (Open Access Journals). Muitas vezes o custo financeiro é transferido do leitor para o autor através da taxa APC (Article Processing Charge). 
• Outras vias cobradas em prova: 
  - Via Diamante (Platina): Periódicos abertos que NÃO cobram APC do autor (subsidiados por instituições). 
  - Via Bronze: Artigos gratuitos para leitura nos sites das editoras comerciais (ex: Elsevier), mas SEM licença aberta (direitos continuam fechados). Não é considerado OA verdadeiro.
  - Vias Híbridas: Revistas pagas onde o autor paga APC apenas para o seu artigo específico ficar aberto. (Historicamente criticado por "double-dipping").`,
  unicampContext: `A Unicamp aderiu oficialmente à Ciência Aberta. Portal de Periódicos Eletrônicos (PPEC) para a Via Diamante/Dourada e o Repositório Institucional para a Via Verde. A CONSU-A-050/2020 regulamenta que a Unicamp incentiva fortemente a Ciência Aberta e a retenção de direitos autorais.`,
  boardAnalysis: {
    trends: `CEBRASPE (2018-2026): Tem fixação pela taxonomia das Vias (Verde, Dourada, Diamante). Eles testam ferozmente a confusão entre Via Dourada e Via Diamante, e se a Via Verde depende da vontade da editora. O CEBRASPE exige saber que o autoarquivamento da Via Verde lida com políticas de Embargo das editoras (período onde o arquivo fica fechado no RI antes de abrir).
    
VUNESP/FCC: Focam frequentemente no Manifesto de Budapeste (2002) e no conceito de "Gratis OA x Libre OA" de Peter Suber.`,
    commonTraps: `🚨 Pegadinha Clássica CEBRASPE/VUNESP: 
"A Via Dourada caracteriza-se pela publicação em periódicos em que o custo recai obrigatoriamente sobre o autor (modelo pay-to-publish)."
(ERRADO: O fato de ser Via Dourada não exige obrigatoriamente que o autor pague do bolso; a APC pode ser paga pela agência de fomento, e existem as revistas Diamante/Platina, que são um subconjunto da Dourada e NÃO possuem APC.)`
  },
  memorizationMatrix: `ROTEIRO TÁTICO DAS VIAS (OA)
| Via | Onde Publica? | Custa para Ler? | Custa para Publicar (APC)? | Foco Bibliotecário |
|-----|---------------|----------------|----------------------------|--------------------|
| Verde | Qualquer Revista + Repositório | Não | Não | Gerenciar Embargos (Sherpa/Romeo) |
| Ouro | Revista OA (Comercial) | Não | Sim (APC alta) | Negociar Acordos Transformativos |
| Diamante| Revista OA (Universitária) | Não | Não (Subsidio estatal) | OJS / SEER |`
};
