import type { AdvancedTopic } from '../types';

export const m18: AdvancedTopic = {
  id: "m18",
  title: "18. Modelos Conceituais: FRBR e IFLA LRM",
  authorsAndFrameworks: `Autores-Chave e Guias:
• IFLA (1998): Relatório original e histórico sobre Requisitos Funcionais de Registros Bibliográficos (FRBR).
• Barbara Tillett e Gordon Dunsire: Mentores intelectuais na formulação e expansão do universo FR (FRAD para Autoridades, FRSAD para Assuntos).
• Pat Riva, Patrick Le Boeuf e Maja Žumer (2017): Os criadores finais do IFLA LRM (Library Reference Model), a revolução definitiva.`,
  advancedTheory: `1. O Abismo Inicial: O que é um "Modelo Conceitual"?
Uma das piores deficiências de estudantes de Biblioteconomia. O FRBR ou LRM **NÃO É** uma lista de regras, **NÃO É** um código como o RDA, e **NÃO É** um formato computacional como o MARC. 
Ele é um "Modelo Entidade-Relacionamento" abstrato, formulado no campo da Ciência da Computação (Ontologia), para modelar o cérebro do banco de dados da biblioteca. Ele diz "O mundo é composto por entidades, que possuem atributos, e se relacionam entre si".

2. O Grupo 1 (Produtos do Esforço Intelectual/Artístico) - A Decoreba O.E.M.I
A mais cobrada divisão do FRBR clássico que destrinchou o "Livro" em quatro facetas gravitacionais:
• OBRA (Work): Altamente abstrato. A concepção imaterial da ideia original. É a criação artística em seu ápice conceitual, independente da linguagem. Ex: "A ideia da jornada do herói em O Senhor dos Anéis".
• EXPRESSÃO (Expression): Intelectual/Linguístico. É a Obra ganhando sua primeira materialização sensorial (alfanumérica, coreográfica, musical). Diferentes traduções, revisões severas de texto e versões instrumentais geram *novas Expressões* da mesma obra.
• MANIFESTAÇÃO (Manifestation): Físico-Produção. O que a editora empacota e distribui em massa. Engloba as características físicas (PDF, capa dura, 300 páginas, ISBN). Uma tradução (Expressão X) pode ter sido impressa em capa mole pela Cia. das Letras (Manifestação 1) e depois reeditada em capa dura comemorativa, sem alterar o texto (Manifestação 2).
• ITEM (Item): Instância Singular. A corporificação física da manifestação. Aquele exemplar específico que está na Biblioteca da Unicamp, com um risco de marca-texto na página 12 e código de barras nº 987654. É o que você efetivamente "toca" ou "perde".

3. Grupo 2 e Grupo 3 do FRBR Clássico
• Grupo 2 (Responsabilidade): Quem criou ou alterou? Pessoa (Humano) e Entidade Coletiva (Corporação/Governo). A Pessoa *cria* a Obra; *realiza* a Expressão; *produz* a Manifestação; *possui* o Item.
• Grupo 3 (Assunto/Temática): Do que trata? Conceito, Objeto, Evento e Lugar. (Obs: Toda entidade do Grupo 1 e 2 também pode servir de assunto. Posso fazer um livro sobre "Olavo Bilac" [Pessoa] ou sobre o próprio "O Senhor dos Anéis" [Obra]).

4. O Salto para o IFLA LRM (Library Reference Model - 2017)
O mundo estava caótico (FRBR para livros, FRAD para nomes/autoridades, FRSAD para assuntos). Em 2017, a IFLA uniu a Santíssima Trindade em um único metamodelo (LRM), muito mais alinhado com tecnologias de Linked Open Data.
Mudanças Brutais do LRM (Cai na FUNCAMP!):
• Resolveu um grande buraco do FRBR: A criação da entidade unificadora "Agente" (Agent) e seus dois "subtipos" (Pessoa e Agente Coletivo).
• As entidades Grupo 3 originais (Objeto, Evento...) sumiram da superfície principal! No LRM, para simplificar a ontologia, tudo o que pode ser objeto de discurso humano (um rio, uma ideia abstrata) é agrupado debaixo de uma super-entidade suprema chamada apenas de "RES" (Coisa, no Latim).
• Trouxe uma 5ª tarefa do usuário: NAVEGAR (Navigate), complementando os velhos EIS (Encontrar, Identificar, Selecionar, Obter).`,
  unicampContext: `Os sistemas Discovery modernos implementados pelas Universidades Paulistas (como o Primo da ExLibris, usado na Unicamp) tentam simular o modelo FRBR/LRM (chamado de FRBRização de catálogos). Em vez de você buscar por "A Origem das Espécies" e o sistema te dar 40 links repetidos de 40 edições de anos diferentes (causando poluição visual pesada), a IA do catálogo tenta agrupar todas essas Manifestações debaixo de apenas UMA Obra na tela (O "Work-Level grouping").`,
  boardAnalysis: {
    trends: `CEBRASPE (2018-2026): A banca é aficionada nas fronteiras sutis entre Expressão e Manifestação. Lembre da regra de ouro do Cebraspe: "Tradução" NUNCA é mudança de Manifestação, Tradução é criação de uma NOVA EXPRESSÃO de uma Obra pré-existente.
VUNESP / FUNCAMP: Costuma se prender ao LRM. Vão cobrar o que significa "Res" no LRM, ou como a entidade "Agente" substituiu a distinção confusa entre pessoa e instituição no modelo antigo.`,
    commonTraps: `🚨 Pegadinha Clássica CEBRASPE: 
"Segundo o modelo conceitual FRBR (e mantido no LRM), o formato de publicação (como capa dura, e-book PDF e e-book Epub) pertencem ao estrato da 'Expressão', visto que expressam materialidades distintas da mesma obra acadêmica."
(ERRADO: Mudança de suporte físico, formato de pacote eletrônico (PDF pra EPUB) ou características tipográficas são mudanças no nível de MANIFESTAÇÃO. A 'Expressão' liga-se estritamente ao aspecto linguístico e sensível - música, notas, texto.)`
  },
  memorizationMatrix: `ANATOMIA O.E.M.I E LRM
[OBRA] -> A Alma Intocável (Ideia).
[EXPRESSÃO] -> O Sangue e Voz (Texto / Tradução / Revisão).
[MANIFESTAÇÃO] -> O Corpo da Editora (ISBN / Capa / PDF / Epub).
[ITEM] -> O Exemplar Único (Com o carimbo da Biblioteca / Sujo de café).

[IFLA LRM]:
Novo Chefão dos Assuntos -> "RES" (A Coisa-Toda).
Novo Chefão de Autoria -> "Agente" (engloba Pessoa e Coletivo).
Novo Verbo -> "NAVEGAR" (no mar dos Linked Data).`
};
