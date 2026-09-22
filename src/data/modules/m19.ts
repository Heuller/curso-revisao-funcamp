import type { AdvancedTopic } from '../types';

export const m19: AdvancedTopic = {
  id: "m19",
  title: "19. Classificação Decimal de Dewey (CDD) e CDU",
  authorsAndFrameworks: `Autores-Chave e Histórico Crítico:
• Melvil Dewey (1876): Publicou a 1ª edição da CDD anonimamente. Famoso por sua obsessão por eficiência (que originou as tabelas auxiliares).
• Paul Otlet e Henri La Fontaine (1895): Consideraram a CDD gessada para classificar artigos de revistas, então pediram permissão a Dewey para criar a CDU (Classificação Decimal Universal), injetando facetas e sinais gráficos para maior especificidade.
• OCLC (Online Computer Library Center): O detentor dos direitos e publicador da CDD hoje. Mantém o WebDewey ativo.`,
  advancedTheory: `1. A Arquitetura Decimal de Dewey (CDD)
A CDD é uma classificação do tipo "Hierárquica e Enumerativa" (tenta listar quase todos os assuntos do mundo nas classes principais, mas é semi-facetada hoje).
Toda a base do conhecimento humano foi dividida em 10 Grandes Classes (000 a 900). A base de tudo (O Trivial, O Conhecimento Geral) fica no 000 (Ciência da Computação, Biblioteconomia, Obras Gerais).
• Regra Ouro do Tamanho: Um número CDD nunca tem menos que 3 dígitos (Ex: 500, não 5). Um ponto (.) é OBRIGATÓRIO após o terceiro dígito para qualquer expansão matemática (Ex: 530.1).
• Notação da CDD: É Pura (Utiliza exclusivamente algarismos indo-arábicos). No máximo usa o ponto, mas não mescla com letras (A-Z).
• Índices Relativos: Ao final da CDD, há um índice alfabético espetacular. Ele avisa que "Ferrovias" aparece em várias classes dependendo da faceta: pode ser Engenharia (625), Economia de Transportes (385), ou Sociologia (300).

2. As Tabelas Auxiliares da CDD (A Alma da Expansão)
Existem 6 Tabelas Auxiliares atualmente. Elas NUNCA podem ser usadas sozinhas! Sempre grudam em um número principal. A Funcamp vai perguntar o que elas são:
• T1 (Subdivisões Padrão): Podem ser aplicadas a QUALQUER número base do sistema (Ex: -03 Dicionários, -05 Revistas, -09 História).
• T2 (Áreas Geográficas): Para dividir por países, rios e regiões.
• T3 (Subdivisões para Artes/Literatura).
• T4 (Subdivisões para Idiomas).
• T5 (Grupos Étnicos e Nacionais).
• T6 (Línguas / Idiomas Falados).

3. Regras Complexas de Decisão (A Ordem de Preferência de Dewey)
Quando um livro aborda dois ou três temas fortíssimos (Ex: "A Ética na Política", "Filosofia e Religião"), o catalogador precisa saber a regra oficial para a escolha:
• Regra do Zero (Rule of Zero): Subdivisões mais específicas que começam sem zero (ou com números regulares) têm preferência sobre aquelas que começam com zero (0), e as com (0) ganham das que começam com duplo zero (00).
• Regra do Primeiro na Ordem: Se o livro foca IGUALMENTE em duas disciplinas (ex: "Física e Química"), você classifica na que vem primeiro no esquema da CDD (Física 530 vence Química 540).
• Regra do 3: Se o livro engloba TRES OU MAIS disciplinas distintas... PARE. Mova o livro para a Classe Geral Acima delas, ou para 000 (Obras Gerais).

4. A CDU (A Mutação Otletiana)
A CDU é uma classificação "Semi-Facetada / Analítico-Sintética". Diferente da CDD, ela ABOLIU a exigência de 3 dígitos (Classe Geral = 0, Religião = 2). A notação é MISTA (Usa letras, números e vários símbolos astrofísicos).
• Sinais Críticos (Cobrados em Concurso):
   + (Sinal de Adição / Coordenação): Obras que unem assuntos desconexos que não têm uma classe mãe (ex: "Matemática E Direito" = 51+34).
   / (Barra Oblíqua / Extensão): Assuntos contíguos na árvore (ex: "Religião Cristã do Antigo ao Novo Testamento" = 221/225).
   : (Dois Pontos / Relação Simples): O mais amado da CDU. Relaciona coisas (ex: 17:32 = Ética em relação à Política).
   :: (Dois Pontos Duplo / Fixação de Ordem): Igual o simples, mas proíbe o computador/usuário de inverter a ordem no catálogo.
   [] (Colchetes / Subagrupamento algébrico): Resolve problemas matemáticos de ambiguidade nas relações.
   = (Sinal de Igual / Idioma): Ex: =111 (Em inglês).
   ( ) (Parênteses Geográficos): Ex: (81) (No Brasil).`,
  unicampContext: `A Unicamp, assim como quase todas as mega-universidades estaduais e federais paulistas (USP, Unesp), é território hegemônico da CDD. Manuais de Processamento Técnico internos seguem a Tabela Cutter-Sanborn combinada com a CDD. Saber a T1 e T2 da CDD e o descarte da regra do 3 é essencial para quem vai trabalhar em Barão Geraldo.`,
  boardAnalysis: {
    trends: `CEBRASPE (2018-2026): Ama brincar com a Regra do Primeiro na Ordem e a Regra do 3 (CDD). Na CDU, testam sinais, frequentemente trocando a função da Barra Oblíqua (/) com a da Adição (+). 
VUNESP / FUNCAMP: Costumam focar na Tabela Auxiliar 1 da CDD (Eles vão perguntar qual tabela pode ser acoplada em qualquer classe sem precisar de instrução prévia - Resposta: Tabela 1 - Subdivisões Padrão).`,
    commonTraps: `🚨 Pegadinha Clássica CEBRASPE: 
"A Classificação Decimal Universal (CDU) exige, assim como seu antecessor CDD, um mínimo de três algarismos em sua notação para representar qualquer classe principal (Ex: a classe geral é registrada como 000 e Religião como 200)."
(ERRADO: Isso é estrito da CDD. A CDU aboliu essa regra e compacta ao máximo. Na CDU, a classe geral é apenas "0", Religião é "2", sem zeros de preenchimento inútil.)`
  },
  memorizationMatrix: `FÓRMULA DECIMAL BÁSICA E SINAIS CDU
[CDD]:
Tamanho Mínimo = 3 dígitos. (000, 100, 200...).
T1 = Pode aplicar em tudo (Dicionário, História).
Notação = Pura (só números arábicos).

[CDU Sinais Gráficos de Sangue]:
[ + ] : Adição/Coordenação (X e Y que não têm nada a ver).
[ / ] : Extensão (Assuntos vizinhos de X até Y).
[ : ] : Relacionamento (A influência de X em Y).
[ = ] : Idioma (Escrito em francês, alemão...).
[ () ] : Lugar Geográfico (Acontece no Brasil, SP).
[ " " ] : Tempo/Cronologia (Século XX).`
};
