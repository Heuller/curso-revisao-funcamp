import type { AdvancedTopic } from '../types';

export const m19: AdvancedTopic = {
  id: "m19",
  title: "19. Classificação Decimal de Dewey (CDD) e CDU",
  authorsAndFrameworks: `Autores-Chave e Histórico:
• Melvil Dewey (1876): Pai da CDD, a classificação mais utilizada no mundo. Criou o conceito de classificação por "Disciplinas" e não por "Assunto" puro, e o uso de notações exclusivamente arábicas decimais (0-9).
• Paul Otlet e Henri La Fontaine (1895): Pais da CDU (Classificação Decimal Universal). Pegaram a CDD de Dewey, pediram permissão, e a transformaram num sistema multifacetado usando sinais de pontuação para o Instituto Internacional de Bibliografia (IIB).`,
  advancedTheory: `1. Epistemologia da CDD (Hierarquia e Disciplina)
A CDD não classifica o assunto puro (Ex: "Água"), ela classifica a DISCIPLINA onde o assunto é tratado (Ex: Água na Química = 540; Água na Religião = 200). 
Características:
• Sistema Hierárquico Decimal: Divide o saber humano em 10 classes (000 a 900), 100 divisões e 1000 seções.
• Notação Pura: Historicamente e predominantemente usa APENAS números arábicos decimais. O ponto é colocado após o 3º dígito (Ex: 025.431).
• Tabelas Auxiliares: Não podem ser usadas sozinhas! A CDD possui (geralmente) 6 tabelas auxiliares na edição completa, como Tabela 1 (Subdivisão Padrão, começa com -0), Tabela 2 (Geográfica, começa com -09...).

2. A Transição para a CDU (Faceted System)
A CDU é um sistema analítico-sintético (multifacetado). Enquanto a CDD é engessada, a CDU permite relacionar dois assuntos complexos através de SINAIS DE PONTUAÇÃO (Notação Mista).
Sinais Comuns da CDU:
• + (Adição / Coordenação): Cobre assuntos separados (e). Ex: 53 + 54 (Física e Química).
• / (Barra oblíqua / Extensão): Cobre do primeiro ao último (ate). Ex: 591/599 (Zoologia Sistemática inteira).
• : (Dois pontos / Relação simples): Relação entre dois assuntos de igual valor. Ex: 17:7 (Ética em relação à Arte).
• = (Sinal de Igual / Idioma): Ex: =111 (Em inglês).
• ( ) (Parênteses / Lugar): Ex: (81) Brasil.
• " " (Aspas / Tempo): Ex: "19" (Século XX).

3. Princípio de Classificação (Como Classificar?)
Regra de Ouro: Identifique primeiro a DISCIPLINA principal. Se a obra tiver 2 assuntos de igual peso, classifica-se pelo PRIMEIRO mencionado, a menos que um seja nitidamente o principal. Se tiver 3 ou mais assuntos, a regra da CDD/CDU manda classificar no assunto mais amplo que englobe todos eles.`,
  unicampContext: `O Sistema de Bibliotecas da Unicamp (SBU) adota historicamente a CDD (Classificação Decimal de Dewey) para organização de seu acervo físico em quase todas as suas bibliotecas. A Tabela de Cutter-Sanborn é usada para a notação de autor na cota do livro.`,
  boardAnalysis: {
    trends: `CEBRASPE (2018-2026): A banca adora comparar a notação da CDD (Pura) com a CDU (Mista). O CEBRASPE exige dominar os sinais da CDU, principalmente a diferença entre "+" (apenas A e B isolados) e "/" (de A até B, incluindo todos no meio). 
    
VUNESP / FUNCAMP: Costumam pedir decoreba leve das classes principais (Saber que 000 é Generalidades/Ciência da Computação, 100 Filosofia/Psicologia, 200 Religião, 300 Ciências Sociais, 500 Ciências Puras, 600 Tecnologia/Saúde, 800 Literatura, 900 História).`,
    commonTraps: `🚨 Pegadinha Clássica CEBRASPE: 
"Tanto a CDD quanto a CDU utilizam notação mista para permitir a construção de números complexos combinando letras, números romanos e sinais de pontuação."
(ERRADO: A CDD é famosa por usar notação PURA - apenas números arábicos. Quem usa notação mista de forma extrema (sinais, letras, etc.) é a CDU.)`
  },
  memorizationMatrix: `SINAIS DA CDU (SALVA-VIDAS)
+ (Adição) -> "E" (Assuntos Isolados). Ex: Direito + Ética.
/ (Barra) -> "De... Até". Ex: Religiões (21/29).
: (Dois Pontos) -> Relação forte entre duas áreas diferentes.
= (Sinal de igual) -> Idioma.
( ) (Parênteses) -> Local.
" " (Aspas) -> Tempo.`
};
