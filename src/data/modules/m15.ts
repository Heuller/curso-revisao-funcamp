import type { AdvancedTopic } from '../types';

export const m15: AdvancedTopic = {
  id: "m15",
  title: "15. Código de Catalogação Anglo-Americano (AACR2)",
  authorsAndFrameworks: `Autores-Chave e Histórico Crítico:
• Michael Gorman (Editor): Publicou a 2ª Edição (AACR2) em 1978. A revisão de 2002 (última major) foi atualizada até 2005 e abandonada.
• ISBD (International Standard Bibliographic Description): As normas da IFLA (1971) que ditaram a "Forma" de descrever materiais, cujos sinais de pontuação foram engolidos e injetados diretamente na Parte 1 do AACR2.`,
  advancedTheory: `1. A Engenharia Reversa do AACR2 (Parte 1 e Parte 2)
A confusão de 90% dos estudantes ocorre porque a estrutura mental do Código é inversa à prática.
• PARTE 1 (A Casca / Descrição Física): Ensina a registrar os dados físicos, baseando-se estritamente na ISBD. A divisão dos Capítulos é por TIPO DE SUPORTE (Cap. 2 Livros, Cap. 3 Cartográficos/Mapas, Cap. 6 Som, etc.). Regra Mestra: Transcrever os dados da "Fonte Principal de Informação". Tudo que vier de fora deve ser isolado entre colchetes [ ].
• PARTE 2 (O Cérebro / Pontos de Acesso): Ensina a Escolha (Main Entry) e a Forma do cabeçalho. Diferente da Parte 1, a Parte 2 NÃO É DIVIDIDA POR SUPORTE. Ela foca nas "Condições de Autoria" (Cap. 21).

2. Os Três Níveis de Descrição (Regra 1.0D)
O AACR2 não obriga a biblioteca a fazer descrições infinitas. Ele fornece três pacotes prontos:
• 1º Nível (Mínimo): O mais pobre (fast-food). Essencial para bibliotecas escolares e públicas pequenas. Título principal / 1º autor. -- Edição. -- Imprenta rápida.
• 2º Nível (Padrão): O "feijão com arroz" das Bibliotecas Universitárias. Inclui Título longo, outros autores, local, editora, data, notas.
• 3º Nível (Máximo): Usado raramente. Obras raras, incunábulos, catálogos nacionais, onde todo e qualquer detalhe do papel, tipografia e notas minuciosas são descritos.

3. As Fontes Principais de Informação (FPI)
O AACR2 abomina a capa do livro! A FPI de um livro (Cap. 2) é a PÁGINA DE ROSTO (Title Page). Para mapas (Cap. 3), é o próprio mapa. Para discos de vinil, é o selo central. O que o catalogador quer achar, tem que achar NA FPI. Se o título na capa é "História do Brasil" e na página de rosto é "A grande História do Brasil", a entrada no sistema 245 deve ser a da página de rosto.

4. A Polêmica Regra dos Três (Escolha do Ponto de Acesso Principal - Cap. 21)
• Regra 21.6: Autoria Compartilhada (Responsabilidade Dividida).
Se o livro tem UM, DOIS ou TRÊS autores, a entrada principal vai IMPRETERIVELMENTE para o PRIMEIRO AUTOR da página de rosto. (Os outros ganham entradas secundárias).
• Regra 21.6C2: Quatro ou Mais Autores.
O grande "bug" histórico do AACR2. Se o livro tiver 4, 50 ou 1000 autores, a entrada principal abandona o conceito de autor humano e vai para o TÍTULO DA OBRA. Apenas o 1º autor ganha uma mísera entrada secundária e os outros três (e todos os restos) sumiam no terrível buraco negro das reticências e do "[et al.]" (e outros). Essa regra foi abolida no RDA, mas continua cobrada em provas que perguntam estritamente sobre AACR2.

5. Entrada Secundária para o Título
O AACR2 manda fazer ponto de acesso secundário para o TÍTULO em quase todas as obras com entrada pelo Autor, garantindo que o usuário ache o livro pelo nome.`,
  unicampContext: `Cuidado mortal! A Unicamp transicionou para o RDA. Porém, o edital da FUNCAMP mantém o AACR2 explícito na bibliografia. O catalogador da Unicamp tem que ser "bilíngue" (saber ler registros antigos [s.n.], [S.l.] que infestam o Acervo, e catalogar registros novos sem latim, no padrão RDA).`,
  boardAnalysis: {
    trends: `CEBRASPE (2018-2026): A banca gosta da diferença entre as Fontes Principais. Uma pegadinha maldosa é dizer que "a lombada e a contracapa, por conterem o título claro, são FPI subsidiárias e não precisam de colchetes" (FALSO: Tudo fora da página de rosto, no Cap. 2, leva colchete). O CEBRASPE ama cobrar também os 3 Níveis de Descrição.
VUNESP / FUNCAMP: Amam a Regra dos Três (Autoria Compartilhada). Testam se o candidato cai na ilusão de que "O livro tem 4 autores, mas um é coordenador chefe, então a entrada principal vai pra ele" (Errado no AACR2. Se tem 4 na folha de rosto, entra pelo Título, não importa o cargo).`,
    commonTraps: `🚨 Pegadinha Clássica CEBRASPE: 
"Segundo o AACR2, a Parte I destina-se à descrição física com divisão exclusiva por tipo de suporte material, enquanto a Parte II determina os pontos de acesso (entradas principal e secundárias) e é subdividida com os mesmos capítulos da Parte I para manter coerência estrutural."
(ERRADO: A Parte 2 NÃO É DIVIDIDA POR SUPORTE MATERIAL. Ela independe do suporte (Condições de Autoria). Um livro de 3 autores e um disco de vinil de 3 autores seguem a MESMA REGRA de escolha de ponto de acesso na Parte 2 (Cap. 21).)`
  },
  memorizationMatrix: `MÁQUINA DO TEMPO DO AACR2
| Regra de Ouro | Resposta Imediata na Prova |
|---------------|----------------------------|
| FPI de Livro | Página de Rosto (Nunca a capa!) |
| O que vem de fora | Ganha COLCHETES [ ] obrigatoriamente. |
| 1 a 3 Autores | Principal no 1º Autor. |
| 4+ Autores | Principal no TÍTULO (Só 1º Autor é Secund.).|
| Níveis de Descr.| São TRÊS Níveis. 1º é o Mínimo/Escolar. |
| Idioma Oficial | Inglês base, uso feroz de Latim [S.l.: s.n.]|`
};
