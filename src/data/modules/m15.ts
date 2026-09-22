import type { AdvancedTopic } from '../types';

export const m15: AdvancedTopic = {
  id: "m15",
  title: "15. Código de Catalogação Anglo-Americano (AACR2)",
  authorsAndFrameworks: `Autores-Chave e Marcos:
• Michael Gorman e Paul W. Winkler (Editores do AACR2 original - 1978).
• ISBD (International Standard Bibliographic Description): Padrão de pontuação da IFLA que foi incorporado integralmente na estrutura do AACR2.
• O AACR2 parou de ser atualizado oficialmente em 2005 (última revisão). Foi sucedido pelo RDA.`,
  advancedTheory: `1. A Estrutura Bipartida do AACR2
O Código é rigorosamente dividido em duas grandes partes (ordem contra-intuitiva ao trabalho diário):
• PARTE 1 - Descrição (ISBD): Como descrever fisicamente o material. Dividida por tipo de suporte (Cap. 2 Livros, Cap. 3 Cartográficos, Cap. 7 Multimeios...). 
Regra de Ouro: Baseia-se na "Fonte Principal de Informação". Se é um livro, a fonte suprema é a *página de rosto*, e não a capa! O que estiver fora da fonte principal deve vir entre colchetes [ ].
• PARTE 2 - Escolha e Forma dos Pontos de Acesso: O Cabeçalho (Main Entry e Added Entries). Como determinar se a obra entra pelo Autor, pelo Título ou por Entidade Coletiva. 

2. As 8 Áreas de Descrição (ISBD no AACR2)
O AACR2 adotou a pontuação prescrita da ISBD (ex: Espaço-Sinal-Espaço).
1. Título e indicação de responsabilidade.
2. Edição.
3. Detalhes específicos do material (Usada para Mapas/Música).
4. Publicação, distribuição, etc. (Imprenta - Local: Editora, Data).
5. Descrição física (Páginas : ilustrações ; tamanho).
6. Série.
7. Notas.
8. Número normalizado (ISBN/ISSN) e preço.

3. Regra dos Três (Escolha do Ponto de Acesso Principal)
• 1, 2 ou 3 Autores: A entrada principal é pelo PRIMEIRO autor. Os outros fazem ponto de acesso secundário.
• Mais de 3 autores (4 ou mais): A regra de ouro do AACR2 diz para IGNORAR a autoria principal e dar a entrada pelo TÍTULO. Faz-se entrada secundária apenas para o primeiro autor. (Isso mudou drasticamente no RDA).`,
  unicampContext: `A Unicamp ainda possui milhões de registros bibliográficos "legados" em AACR2 no seu banco de dados, o que exige que o bibliotecário entenda a regra dos 3 e o uso de colchetes e abreviações (como [S.l.] sine loco).`,
  boardAnalysis: {
    trends: `CEBRASPE (2018-2026): A banca gosta de jogar com os colchetes e a regra dos três. Exemplo clássico: afirmar que um livro de 4 autores deve ter entrada principal pelo autor coordenador. Errado. Mais de 3 autores = Entrada pelo Título.
    
VUNESP / FUNCAMP: Adoram cobrar os níveis de descrição do AACR2. O código prevê 3 níveis. O 1º nível é o mais simples (básico), o 3º nível é o exaustivo (livros raros).`,
    commonTraps: `🚨 Pegadinha Clássica CEBRASPE: 
"Segundo o AACR2, a Fonte Principal de Informação de um livro impresso para a retirada dos dados de título e responsabilidade é a Capa da obra, por ser a face mais visível ao usuário."
(ERRADO: A fonte primaz de um livro impresso, historicamente no AACR2, é a Página de Rosto (Title Page). A capa é secundária. Dados retirados da capa vão para os colchetes.)`
  },
  memorizationMatrix: `REGRA DOS TRÊS (AACR2 - Entrada Principal)
| Qtd Autores | Onde entra? | Secundária para quem? |
|-------------|-------------|-----------------------|
| 1 Autor | No Autor 1 | Não tem. |
| 2 ou 3 Autores | No Autor 1 | Nos Autores 2 e 3. |
| 4+ Autores | NO TÍTULO! | Apenas no Autor 1. |`
};
