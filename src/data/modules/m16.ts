import type { AdvancedTopic } from '../types';

export const m16: AdvancedTopic = {
  id: "m16",
  title: "16. MARC 21 (Machine-Readable Cataloging)",
  authorsAndFrameworks: `Autores-Chave e Guias:
• Henriette Avram (1966): Engenheira da Library of Congress (LoC). A lenda viva que uniu a computação das fitas magnéticas da IBM com o trabalho exaustivo das fichas de papel, criando o Projeto MARC original.
• Library of Congress (LoC): Órgão mantenedor e guardião internacional do padrão.
• ISO 2709 e Z39.2: As normas de estrutura da computação que o formato MARC 21 utiliza por trás dos panos.`,
  advancedTheory: `1. A Essência: Um Formato de Intercâmbio
O MARC NÃO dita regras sobre o que escrever (para isso serve o AACR2/RDA). Ele dita COMO o computador vai ler, armazenar e transferir isso para o servidor de outra biblioteca. (Por isso o "Machine-Readable").
O "21" significa a fusão (ocorrida em 1999) entre o USMARC (EUA) e o CAN/MARC (Canadá) para o Século 21. Há 5 formatos distintos da família MARC 21 (O erro comum é achar que MARC 21 é só pra livro):
- Formato para Dados Bibliográficos (O mais famoso).
- Formato para Dados de Autoridade.
- Formato para Dados de Classificação (CDD/CDU).
- Formato para Dados de Holdings (Coleções/Exemplares da biblioteca).
- Formato para Dados de Informação Comunitária.

2. A Estrutura Tripartite de Arquitetura do Registro (Invisível ao Usuário)
Qualquer registro MARC possui uma estrutura de bytes dura, dividida em três partes (como um pacote de correios):
• Líder (Leader): Os primeiros 24 caracteres do registro (posições de 00 a 23). O Líder fornece a "fita métrica" do pacote, dizendo o comprimento lógico total, a codificação de caracteres (UTF-8) e o tipo de material mestre (se a máquina vai ler um livro ou uma partitura).
• Diretório (Directory): É a "tabela de conteúdo" ou "mapa" do registro. É gerado AUTOMATICAMENTE pelo sistema (SophiA, Alma) e não pelo catalogador. O Diretório diz pra máquina onde começa o título e qual o seu tamanho em bytes. (Ex: O campo 245 tem 50 caracteres e começa no byte 150).
• Campos de Dados (Data Fields): Onde a magia humana acontece. Dividem-se em dois tipos letais para provas:
  - Campos de Controle (001 a 008): São campos FIXOS. NÃO possuem indicadores, NÃO possuem códigos de subcampos (aqueles cifrões $a). Eles têm um tamanho engessado. O 008, por exemplo, tem sempre 40 posições literais (a posição 35 a 37 diz o idioma original, "por" para português, "eng" para inglês).
  - Campos Variáveis (010 até 999): Têm tamanho ilimitado. Possuem Tag (Etiqueta de 3 números), 2 Indicadores, e os famigerados Subcampos ($a, $b, $c).

3. A Decoreba Tática das "Centenas" (Tags Mais Críticas)
Na hora da prova, o bloco das centenas é sua salvação:
• 0XX - Identificadores e Códigos Especiais (020 = ISBN / 022 = ISSN / 082 = CDD).
• 1XX - Ponto de Acesso Principal (100 = Autor Pessoa / 110 = Entidade / 111 = Evento/Congresso).
• 2XX - Título, Edição, Publicação (245 = Título / 246 = Título Variante / 250 = Edição / 260 = Imprenta AACR2 / 264 = Produção RDA).
• 3XX - Descrição Física (300 = Paginação e il. / 336 a 338 = Tipo de Conteúdo/Mídia/Suporte do RDA).
• 4XX e 8XX - Séries e Ligações.
• 5XX - Notas gerais (500 = Nota Geral / 505 = Nota de Conteúdo/Sumário / 504 = Nota de Bibliografia).
• 6XX - Assunto / Controle Temático (650 = Assunto Tópico, as palavras-chave).
• 7XX - Ponto de Acesso Secundário (700 = Coautor/Tradutor / 710 = Entidade Secundária).

4. Indicadores (A Afinação do Campo)
Logo após a Tag (Ex: 245), vêm duas posições numeradas (0 a 9, ou em branco/blank). Os indicadores são chaves que dizem como a máquina deve ler aquilo. No campo 245 (Título), o Segundo Indicador (245 _4) dita quantos caracteres a máquina deve IGNORAR ao ordenar alfabeticamente a lista. Ex: "The Matrix". Se o indicador for 4, a máquina ignora o "T, h, e, [espaço]" e joga o filme para a letra M (Matrix).`,
  unicampContext: `As bibliotecárias catalogadoras e chefes da DPT da Unicamp sonham em MARC. A transição que ocorre atualmente nos registros de Barão Geraldo é a conversão em massa (via script) do antigo campo 260 (AACR2 - Local, Publicador, Data) para a tripla tag 264 (RDA - onde o 2º indicador diz se o ano se refere a copyright, publicação ou manufatura). Essa é uma migração complexa.`,
  boardAnalysis: {
    trends: `CEBRASPE (2018-2026): A banca vai na jugular da diferença entre "Campos de Controle" (00X) e "Campos de Dados". Afirmam que o campo 008, por guardar informações valiosíssimas, exige o uso de subcampos $a e $b. (FALSO, 00X não tem subcampo). Outra tara do CEBRASPE é perguntar quem criou o Diretório (A resposta é a máquina/sistema, nunca o catalogador).
VUNESP / FUNCAMP: Gosta de testar o uso prático. Perguntar qual a tag do Título Principal (245) e qual a tag para Coautores (700) é certeza matemática.`,
    commonTraps: `🚨 Pegadinha Clássica CEBRASPE: 
"O MARC 21 estabelece as regras pormenorizadas e a pontuação padrão (ISBD) que devem ser seguidas pela biblioteca ao catalogar um livro raro."
(ERRADO: O MARC não estabelece regra NENHUMA de catalogação e nem de pontuação humana. O MARC é uma "caixa oca" de comunicação. Quem manda usar a pontuação ISBD e como descrever o livro raro é o AACR2, RDA ou DCRM(B).)`
  },
  memorizationMatrix: `TRÍADE DO REGISTRO MARC21
1. LÍDER: 24 posições (A fita métrica e o tipo do arquivo).
2. DIRETÓRIO: Gerado por Máquina (O mapa do tesouro).
3. CAMPOS DE DADOS: Onde nós escrevemos.
   - (00X): Tamanho Fixo. Sem Indicador. Sem Subcampo ($a).
   - (010-999): Variáveis. 2 Indicadores. Tem Subcampos.

GUIA DE TIROS CURTOS (AS TAGS DE OURO):
245 = Título Principal.
100 = Autor Principal (Pessoa).
700 = Autor Secundário (Os "outros", Tradutores).
300 = Número de páginas e tamanho.
260/264 = Editora e Data (Imprenta).`
};
