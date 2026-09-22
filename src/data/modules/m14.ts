import type { AdvancedTopic } from '../types';

export const m14: AdvancedTopic = {
  id: "m14",
  title: "14. Representação Descritiva e Temática (Controle Bibliográfico)",
  authorsAndFrameworks: `Autores-Chave e Instrumentos Clássicos:
• Mey (1995) e Mey e Silveira (2009): A Bíblia nacional. "A catalogação é o mapa do universo bibliográfico". Enfatizam que a catalogação existe não para o livro, mas para o *usuário*.
• IFLA (International Federation of Library Associations): O oráculo global. Responsável pelas normativas-mãe (ISBD, ICP).
• Charles Ammi Cutter (1876): Rules for a Dictionary Catalog. O criador da fundação do catálogo moderno, estipulando os primeiros objetivos (Autor, Título, Assunto).
• Seymour Lubetzky (1953): O gênio que criticou as velhas regras da ALA, pregando que o catálogo deveria focar nas "Condições de Autoria" em vez de criar regras pontuais para cada caso anômalo, dando base aos Princípios de Paris (1961).`,
  advancedTheory: `1. A Epistemologia Bipartida da Catalogação (Forma x Conteúdo)
No Brasil (diferente da tradição anglo-saxônica, onde "Cataloging" engloba tudo), costumamos dividir o Controle Bibliográfico rigorosamente:
• Representação Descritiva (Catalogação Descritiva): Foca nas características EXTRÍNSECAS / FÍSICAS da manifestação. Quem a criou? Quando? Onde? Quantas páginas? (Instrumentos: AACR2, RDA, ISBD, MARC 21). 
• Representação Temática (Classificação e Indexação): Foca nas características INTRÍNSECAS / SEMÂNTICAS. Do que trata a obra? (Instrumentos: CDD, CDU, Tesauros, Vocabulários Controlados).

2. Os Princípios Internacionais de Catalogação (ICP 2016)
Historicamente, os Princípios de Paris (1961) ditavam o ritmo. Eles foram revogados pela IFLA em 2009 (com atualização forte em 2016) pelos "Novos Princípios Internacionais de Catalogação" (ICP).
Eles estabelecem a "Missão" (Tarefas) de qualquer catálogo no planeta. O catálogo não deve ser um depósito morto, ele deve permitir que o usuário atinja 5 verbos:
• ENCONTRAR (Find): Trazer um ou vários recursos em uma busca.
• IDENTIFICAR (Identify): Confirmar se o recurso encontrado é realmente aquele que o usuário quer (não confundir a edição de 1990 com a de 2020).
• SELECIONAR (Select): Escolher o material adequado às suas necessidades (ex: escolher a versão em áudio em vez da impressa por ser cego).
• OBTER (Obtain): Adquirir acesso ao item físico ou digital (saber onde está na estante ou clicar no link).
• NAVEGAR (Navigate): [Novidade do LRM]. Mover-se pela rede de catálogos e descobrir relacionamentos (ex: Clicar em "Machado de Assis" e ver a rede de todas as obras dele).

O Princípio Maior do ICP: A CONVENIÊNCIA DO USUÁRIO (User Convenience). Se os princípios entrarem em choque ou a regra do código for absurda, o bibliotecário deve escolher a forma mais óbvia e simples para o leitor, ignorando purismos.

3. Pontos de Acesso e o Sagrado Controle de Autoridade
Se a catalogação descritiva fosse apenas transcrever o título, qualquer robô faria. A alma da catalogação é a escolha dos "Pontos de Acesso" (Chaves de recuperação).
• Main Entry (Ponto de Acesso Principal): O Cabeçalho (geralmente o autor).
• Added Entries (Secundários): Título, Tradutor, Ilustrador.
Para evitar o "Caos da Recuperação" (onde um livro de "G. Garcia Marquez" se perde dos outros 10 cadastrados como "Gabriel García Márquez"), cria-se o Controle de Autoridade.
O Controle fixa UM ÚNICO NOME AUTORIZADO (Cabeçalho de Autoridade) e cria:
- Remissivas VER (SEE): "Márquez, G. -> VER -> García Márquez, Gabriel". (Corrige erro/sinônimo).
- Remissivas VER TAMBÉM (SEE ALSO): Liga conceitos e nomes que mudaram (Ex: "Ministério da Educação -> VER TAMBÉM -> Ministério da Educação e Cultura"). Relaciona parentescos, não sinônimos diretos.`,
  unicampContext: `A Unicamp processa mais de 1 milhão de registros. Manter a "Autoridade" limpa é a missão mais cara da Divisão de Processamento Técnico (DPT). Se a Unicamp cadastra "Instituto de Filosofia" e "IFCH" como coisas separadas sem controle de autoridade (VER TAMBÉM), metade da memória acadêmica da instituição fica "invisível" para o usuário final no sistema de busca.`,
  boardAnalysis: {
    trends: `CEBRASPE (2018-2026): A banca é absolutamente sádica com a diferença entre "Representação Descritiva" e "Temática". Se a prova fala em "Tradução de Conceitos", é Temática (Indexação). Se fala em "Transcrição de Atributos da Publicação", é Descritiva (Catalogação). Também cobram massivamente Lubetzky e os Princípios de Cutter.
VUNESP / FUNCAMP: Cobram exaustivamente os 5 verbos do ICP. Memorize o "Navegar" (Navigate), pois é a adição mais moderna do modelo FRBR/LRM que não existia nos Princípios de Paris.`,
    commonTraps: `🚨 Pegadinha Clássica CEBRASPE: 
"Segundo os Princípios Internacionais de Catalogação (ICP, IFLA), o princípio da Conveniência do Usuário estabelece que os dados devem ser padronizados internacionalmente para beneficiar o intercâmbio de dados entre as bibliotecas e sistemas comerciais, ainda que isso contrarie a lógica local do leitor."
(ERRADO: TOTALMENTE ERRADO. A Conveniência do Usuário diz o oposto: As decisões na construção das descrições e formas devem ser focadas primeiramente no USUÁRIO. O intercâmbio comercial e as regras internacionais devem se submeter a isso, e não o contrário.)`
  },
  memorizationMatrix: `TRILOGIA DE CUTTER (1876)
1. Capacitar o usuário a [ENCONTRAR] (Autor, Tít, Ass).
2. Mostrar o que a biblioteca [TEM] (Do autor, do Ass).
3. Auxiliar na [ESCOLHA] do livro (Por edição ou caráter).

AS TAREFAS MODERNAS (LRM / ICP)
E I S O N -> (Encontrar, Identificar, Selecionar, Obter, Navegar).

CONTROLE DE AUTORIDADE
VER = É lixo, aponta pro Ouro. (Assis, J.M. -> Machado de Assis).
VER TAMBÉM = É ouro, aponta pra ouro "parente" (MEC <-> Ministério da Ed).`
};
