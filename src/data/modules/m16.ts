import type { AdvancedTopic } from '../types';

export const m16: AdvancedTopic = {
  id: "m16",
  title: "16. MARC 21 (Machine-Readable Cataloging)",
  authorsAndFrameworks: `Autores-Chave e Guias:
• Henriette Avram (1966): Engenheira da Library of Congress (LoC) que inventou o formato MARC original.
• Library of Congress (LoC): Órgão mantenedor oficial do formato no mundo (Network Development and MARC Standards Office).`,
  advancedTheory: `1. Epistemologia do MARC
O MARC NÃO é um código de catalogação (como AACR2 ou RDA). Ele é um FORMATO de comunicação. O AACR2 diz "o que escrever" (ex: 200 p. : il.), o MARC diz "como envelopar isso" para a máquina entender (Tag 300, subcampo $a, $b). O MARC 21 é a fusão do USMARC (EUA) com o CAN/MARC (Canadá) ocorrida em 1999.

2. A Estrutura Tripartite de um Registro MARC
Qualquer registro MARC (Bibliográfico, Autoridade ou Holdings) é composto estritamente por 3 partes invisíveis para o usuário final, mas cruciais para o sistema:
• Líder (Leader): Os primeiros 24 caracteres do registro (posições 00 a 23). Traz dados fixos sobre o tipo de registro (se é livro, mapa, partitura) e o tamanho total do arquivo.
• Diretório (Directory): É o "índice" do registro. Diz para a máquina onde cada campo começa e qual o seu tamanho. O sistema usa o diretório para "pular" direto para o campo 245 sem ler tudo antes.
• Campos de Dados (Data Fields): Onde reside a informação humana. Divididos em:
  - Campos de Controle (001 a 008): Não possuem indicadores nem subcampos. O famoso campo 008 traz dados fixos (ano de publicação, país, idioma em formato de código).
  - Campos Variáveis (010 a 999): Possuem Tags, Indicadores e Subcampos.

3. Anatomia de um Campo Variável (Os 3 Pilares)
• Tag (Etiqueta): 3 dígitos (ex: 100, 245, 650).
• Indicadores: Duas posições numéricas logo após a tag. Eles "afinam" o campo. (Ex: No 245, o 2º indicador = 4 manda a máquina ignorar o "The " na alfabetação do título).
• Subcampos: Delimitados por um caractere especial (como o cifrão $ ou a adaga ǂ) seguido de uma letra ou número (Ex: $a para Título, $c para menção de responsabilidade).

4. Os Blocos Canônicos (As Centenas)
0XX - Informações de Controle e Códigos (020 = ISBN).
1XX - Entrada Principal (100 = Autor Pessoal).
2XX - Título e Edição (245 = Título, 250 = Edição, 260/264 = Imprenta).
3XX - Descrição Física (300 = Páginas e tamanho).
4XX - Séries (Vínculos).
5XX - Notas (Geral).
6XX - Assunto (650 = Assunto tópico, CDD, Tesouro).
7XX - Entradas Secundárias (Coautor).
8XX - Séries Secundárias.
9XX - Reservado para uso LOCAL da biblioteca.`,
  unicampContext: `A Unicamp processa todo o seu acervo em MARC 21. Os bibliotecários na DPT (Divisão de Processamento Técnico) preenchem metadados diretamente no módulo de catalogação do sistema SophiA ou Alma. A FUNCAMP pode exigir a memorização das tags mais comuns (100, 245, 260, 300, 650).`,
  boardAnalysis: {
    trends: `CEBRASPE (2018-2026): A banca foca na diferença estrutural: cobrar se um campo de controle (008) possui indicadores e subcampos (FALSO, não possuem). Também cobram quem criou o formato (Henriette Avram, LoC).
    
VUNESP / FUNCAMP: Cobram decoreba tática das tags. Saber que 245 é Título, 100 é Autor Pessoal e 020 é ISBN é OBRIGATÓRIO.`,
    commonTraps: `🚨 Pegadinha Clássica CEBRASPE: 
"O MARC 21 é o atual código de catalogação descritiva adotado internacionalmente para substituir as regras obsoletas do AACR2."
(ERRADO: O MARC é um FORMATO DE INTERCÂMBIO LEGÍVEL POR MÁQUINA, não um código de regras. Ele só envelopa o que o AACR2/RDA mandam escrever.)`
  },
  memorizationMatrix: `ANATOMIA MARC (DECOREBA TÁTICA)
Líder: 24 posições fixas.
Campos de Controle (00X): SEM indicadores, SEM subcampos.
100 = Autor (Pessoa) / 110 = Entidade.
245 = Título.
260/264 = Publicação (Imprenta).
300 = Descrição Física (Páginas).
650 = Assunto Tópico.`
};
