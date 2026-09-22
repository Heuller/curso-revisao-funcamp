import type { AdvancedTopic } from '../types';

export const m06: AdvancedTopic = {
  id: "m06",
  title: "6. Fluxos Informacionais, Comunicação Científica e Bibliometria",
  authorsAndFrameworks: `Autores-Chave e Guias:
• Garvey e Griffith (1972): Modelo clássico de comunicação científica (canais formais e informais).
• Derek de Solla Price (1963): "Little Science, Big Science" - Lei do crescimento exponencial da ciência.
• Lotka (1926), Bradford (1934), Zipf (1949): As três leis clássicas da Bibliometria.
• Eugene Garfield (1955): Criação do Science Citation Index (SCI) e do Fator de Impacto (JIF).`,
  advancedTheory: `1. O Fluxo da Comunicação Científica
O modelo de Garvey-Griffith estipula que a informação científica flui em dois canais principais:
• Informal: Ocorre ANTES da publicação oficial (congressos, preprints, colégios invisíveis). É rápido, restrito, focado na vanguarda.
• Formal: Ocorre DEPOIS da revisão por pares (artigos de periódicos, livros acadêmicos). É lento, permanente, público e confere autoria/prestígio. 
Hoje, as redes sociais acadêmicas (ResearchGate) e repositórios de preprints (arXiv) tensionam e mesclam as fronteiras entre o formal e o informal.

2. A Trindade da Bibliometria Clássica
• Lei de Lotka (Produtividade de Autores): Apenas uma pequena minoria de autores produz a esmagadora maioria da literatura em um campo. A proporção é do quadrado inverso (se 100 publicam 1 artigo, 25 publicam 2...). Foco: Autores.
• Lei de Bradford (Dispersão do Conhecimento): Um pequeno "núcleo" (core) de periódicos concentra a maior parte dos artigos de uma disciplina, enquanto o resto se dispersa numa longa cauda de muitas revistas. Foco: Periódicos.
• Lei de Zipf (Frequência de Palavras): Uma pequena quantidade de palavras ocorre com muita frequência num texto, enquanto a maioria ocorre raramente. Foco: Palavras/Termos (usado em indexação automática).

3. Indicadores de Citação e o Fator de Impacto (Garfield)
O Fator de Impacto de uma revista = Citações recebidas no ano 'X' por artigos publicados em 'X-1' e 'X-2' DIVIDIDO pelo total de artigos publicáveis nesses mesmos dois anos.
Crítica Moderna: O JIF mede o prestígio da *revista*, não do *artigo*.
• Índice H (Hirsch, 2005): Mede simultaneamente produtividade e impacto do AUTOR. Um índice h=10 significa que o autor tem 10 artigos que receberam pelo menos 10 citações cada.

4. Altmetria (Métricas Alternativas)
Mede o impacto da pesquisa nas mídias sociais (menções no Twitter, downloads no Mendeley, citações na Wikipedia). É rápida, captura impacto social (não apenas acadêmico), mas é suscetível a "likes" ou publicidade negativa.`,
  unicampContext: `A Unicamp utiliza a Bibliometria intensamente para auto-avaliação através da Coordenadoria Geral da Universidade (CGU) e do Núcleo de Avaliação Institucional. Indicadores do SciVal (Elsevier) e InCites (Clarivate) são usados para ranqueamento internacional e prestação de contas dos orçamentos da FAPESP. A biblioteca apoia os pesquisadores a limparem seus perfis no ORCID e ResearcherID para não perderem citações.`,
  boardAnalysis: {
    trends: `CEBRASPE (2018-2026): A banca possui um repertório de questões clássicas que trocam o conceito das três leis. A pegadinha nº 1 é inverter Lotka com Bradford. O CEBRASPE também cobra o Índice H profundamente, perguntando se ele favorece pesquisadores em início de carreira (FALSO, favorece pesquisadores veteranos por ser cumulativo).
    
VUNESP/FUNCAMP: O foco frequentemente recai sobre a Comunicação Científica (Garvey). Adoram usar o termo "Colégios Invisíveis" (rede informal de pesquisadores colaborando antes da publicação) e diferenciar canais formais de informais.`,
    commonTraps: `🚨 Pegadinha Clássica CEBRASPE: 
"O índice H é o melhor indicador bibliométrico para comparar o impacto de dois pesquisadores de áreas científicas diferentes, como Matemática e Medicina."
(ERRADO: O índice H e o Fator de Impacto não podem ser usados para comparar áreas diferentes, pois os padrões de citação divergem drasticamente - na Medicina publica-se e cita-se muito mais rápido).`
  },
  memorizationMatrix: `Mnemônico das 3 Leis (L-B-Z)
[L]otka = [L]íderes (Autores que mais publicam).
[B]radford = [B]ases / [B]ibliotecas (Revistas núcleo para corte de orçamento).
[Z]ipf = [Z]emântica (Frequência de palavras no texto).`
};
