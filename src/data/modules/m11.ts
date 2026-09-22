import type { AdvancedTopic } from '../types';

export const m11: AdvancedTopic = {
  id: "m11",
  title: "11. Disseminação Seletiva da Informação (DSI) e Serviço de Referência",
  authorsAndFrameworks: `Autores-Chave e Guias:
• Samuel Rothstein (1961): As 3 vertentes do serviço de referência (Mínima/Conservadora, Média/Intermediária e Máxima/Liberal).
• Grogan (1995): A prática do serviço de referência (os 8 passos do processo).
• Hans Peter Luhn (1958): O engenheiro da IBM que concebeu o conceito mecânico de Disseminação Seletiva da Informação (DSI / SDI).`,
  advancedTheory: `1. O Serviço de Referência (O Coração Humano da Biblioteca)
Diferente das áreas meio (catalogação, aquisição), a referência é a área FIM. Onde o bibliotecário encontra o usuário e faz a "Entrevista de Referência".
As 3 vertentes de Rothstein:
• Mínima (Conservadora): O bibliotecário apenas "aponta o caminho" ou ensina a usar o catálogo. O trabalho duro é do usuário. Foco acadêmico.
• Intermediária (Média): O bibliotecário ajuda na busca, mas ensina e orienta durante o processo.
• Máxima (Liberal): O bibliotecário faz a pesquisa completa e entrega a informação mastigada ao usuário. Típica de bibliotecas corporativas, jurídicas ou centros de P&D (onde tempo é dinheiro).

2. Entrevista de Referência (Processo de Grogan)
Passos cruciais: 1. O Problema (usuário chega), 2. A Entrevista (bibliotecário traduz a necessidade oculta na questão real), 3. Estratégia de Busca, 4. Processo de Busca, 5. Avaliação da resposta, etc. A falha principal do serviço é dar a resposta exata para a pergunta errada (quando a entrevista falha).

3. Disseminação Seletiva da Informação (DSI / SDI)
Criada por Luhn na IBM, a DSI é a proatividade máxima. O sistema não espera o usuário perguntar. 
Dinâmica:
• O bibliotecário levanta o Perfil de Interesse do usuário (quais assuntos e termos ele pesquisa).
• O sistema roda a busca periodicamente nas bases de dados (match entre o Perfil do Usuário e o Perfil do Documento Novo).
• O usuário é notificado (alerta de e-mail/push) com a bibliografia fresca.
Hoje, os "Alertas" de bases como Web of Science ou Scopus são a encarnação moderna da DSI tradicional (Push Technology).`,
  unicampContext: `Na Unicamp, o Serviço de Referência vai desde o balcão básico até o apoio à pesquisa complexa, ajudando doutorandos a elaborar estratégias de revisão sistemática (Apoio à Pesquisa / Vertente Intermediária). A DSI é estimulada instruindo os pesquisadores a criarem "Alertas de Citação" e "Alertas de Busca" nas bases CAPES.`,
  boardAnalysis: {
    trends: `CEBRASPE (2018-2026): A banca adora comparar a DSI tradicional (manual/bibliotecário) com a DSI automatizada (serviços de alerta web). O CEBRASPE sempre cobra quem foi o criador da DSI (H. P. Luhn) e as teorias de Rothstein sobre o nível do serviço.
    
VUNESP / FUNCAMP: Cobram incansavelmente que a "Entrevista de Referência" é o passo MAIS IMPORTANTE do processo, porque é onde se traduz a demanda expressa para a necessidade real.`,
    commonTraps: `🚨 Pegadinha Clássica CEBRASPE: 
"No modelo Liberal (ou Máximo) de serviço de referência, o bibliotecário foca na instrução do usuário, ensinando-o didaticamente a manusear as bases de dados para que ele mesmo faça sua pesquisa no futuro."
(ERRADO: Isso é o modelo Intermediário/Conservador. No modelo Liberal, o bibliotecário FAZ a pesquisa pelo usuário e entrega o resultado pronto (ex: levantamento bibliográfico completo numa empresa).)`
  },
  memorizationMatrix: `TRILOGIA DE ROTHSTEIN (REFERÊNCIA)
| Nível | Filosofia | Onde é comum? |
|-------|-----------|----------------|
| Mínimo/Conservador | "Te ensino a pescar (só onde tá a vara)" | Bibliotecas Escolares Públicas |
| Médio/Intermediário | "Pescamos juntos" | Universidades (Unicamp) |
| Máximo/Liberal | "Te dou o peixe frito" | Ambientes Corporativos (P&D, Jurídico) |`
};
