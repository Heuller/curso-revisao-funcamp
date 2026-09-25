import type { ModuleQuizQuestion } from './types';

export const moduleQuizzesLPPart1: ModuleQuizQuestion[] = [
  // ==========================================
  // LP01: Leitura e Interpretação de Textos (5 questões)
  // Gabarito: Q1: C, Q2: A, Q3: D, Q4: B, Q5: E
  // ==========================================
  {
    id: "mq_lp01_1",
    moduleId: "lp01",
    text: "Considere o enunciado a seguir: 'Após o término do expediente na biblioteca central, os pesquisadores ainda continuavam reunidos discutindo os dados'. A partir dos estudos linguísticos sobre pressuposição e subentendidos (Oswald Ducrot), a presença do advérbio 'ainda' gera como pressuposto irrefutável:",
    options: {
      A: "A constatação factual de que a biblioteca central nunca fecha suas portas aos finais de semana.",
      B: "O julgamento explícito de que os pesquisadores deveriam ter sido advertidos formalmente pela direção.",
      C: "A informação prévia de que os pesquisadores já estavam reunidos antes do término do expediente.",
      D: "A certeza matemática de que a pesquisa acadêmica em curso já foi aprovada pela reitoria.",
      E: "A insinuação maldosa de que os dados analisados apresentavam inconsistências metodológicas."
    },
    correctAnswer: "C",
    justification: "O advérbio 'ainda' funciona como um marcador linguístico formal de pressuposição. Dizer que eles 'ainda continuavam reunidos' após o expediente pressupõe logicamente que eles já estavam reunidos antes desse marco temporal. As demais opções trazem extrapolações infundadas sem qualquer respaldo textual.",
    reference: "Ducrot (1987) / Koch & Elias (2006)"
  },
  {
    id: "mq_lp01_2",
    moduleId: "lp01",
    text: "Em provas de concursos públicos formuladas por bancas como Vunesp e Funcamp, a distinção entre 'Compreensão Textual' e 'Interpretação Textual' é decisiva. Assinale a alternativa cujo comando exige estritamente uma operação de compreensão textual:",
    options: {
      A: "Segundo os dados expressos no segundo parágrafo pelo autor, a evasão escolar reduziu-se em 15%.",
      B: "Depreende-se das entrelinhas do discurso do narrador uma profunda mágoa em relação ao passado.",
      C: "Infere-se do posicionamento do articulista que as medidas governamentais surtirão efeito a longo prazo.",
      D: "O texto autoriza o leitor a concluir hipoteticamente que a tecnologia substituirá a leitura impressa.",
      E: "É possível subentender da metáfora final que o protagonista pretendia renunciar ao seu cargo público."
    },
    correctAnswer: "A",
    justification: "A compreensão textual atém-se ao que está explicitamente dito na superfície do texto ('Segundo os dados expressos...'). Os termos 'depreende-se', 'infere-se', 'concluir' e 'subentender' caracterizam operações hermenêuticas de interpretação e inferência.",
    reference: "Fiorin & Savioli (2006) - 'Lições de Texto'"
  },
  {
    id: "mq_lp01_3",
    moduleId: "lp01",
    text: "Um dos vícios interpretativos mais comuns em certames é o erro de 'extrapolação'. Esse desvio cognitivo ocorre precisamente quando o candidato:",
    options: {
      A: "Contradiz frontalmente o argumento exposto pelo autor em sua tese principal.",
      B: "Reduz a tese central da narrativa a um simples exemplo secundário citado no rodapé.",
      C: "Identifica com fidelidade literal as orações coordenadas semânticas da introdução.",
      D: "Agrega conceitos externos de seu conhecimento pessoal que não estão ancorados no texto.",
      E: "Inverte a relação de causalidade entre as orações subordinadas adverbiais consecutivas."
    },
    correctAnswer: "D",
    justification: "A extrapolação consiste em inserir juízos de valor, preconceitos ou dados do cotidiano do próprio leitor que não encontram respaldo em nenhuma linha do texto fornecido. O candidato responde com base no que ele acha do assunto, e não no que o texto escreveu.",
    reference: "Platão & Fiorin (2006)"
  },
  {
    id: "mq_lp01_4",
    moduleId: "lp01",
    text: "Analise o fragmento: 'Mantenha o silêncio nas salas de estudo individual. Não utilize aparelhos sonoros sem fones e guarde os livros consultados nos carrinhos indicados'. Quanto à tipologia textual, o fragmento classifica-se predominantemente como:",
    options: {
      A: "Dissertativo-argumentativo, pois pretende convencer o leitor mediante tese filosófica profunda.",
      B: "Injuntivo-instrucional, pois prescreve normas de conduta direta com verbos no modo imperativo.",
      C: "Narrativo-ficcional, pois apresenta progressão temporal entre ações sucessivas de personagens.",
      D: "Descritivo-estático, pois retrata as características visuais e espaciais da mobília do recinto.",
      E: "Expositivo-analítico, pois relata a evolução histórica do surgimento das bibliotecas universitárias."
    },
    correctAnswer: "B",
    justification: "O texto injuntivo (ou instrucional/prescritivo) tem como objetivo primordial guiar, instruir ou ordenar o comportamento do interlocutor. O fragmento estrutura-se com verbos imperativos ('mantenha', 'não utilize', 'guarde'), típico de regulamentos e manuais.",
    reference: "Marcuschi (2008) - 'Gêneros e Tipos Textuais'"
  },
  {
    id: "mq_lp01_5",
    moduleId: "lp01",
    text: "Leia o diálogo fictício entre dois funcionários: '— O concurso da Unicamp será concorrido? — Ora, você já viu algum certame de universidade paulista de ponta ter poucas inscrições?'. A resposta do segundo funcionário constitui:",
    options: {
      A: "Uma descrição técnica que omite voluntariamente os dados estatísticos dos editais pretéritos.",
      B: "Uma contradição formal que nega categoricamente a existência de concursos para instituições públicas.",
      C: "Um exemplo típico de paráfrase mecânica que repete ipsis litteris a oração dita pelo primeiro falante.",
      D: "Um equívoco gramatical grave que invalida a compreensão mútua entre os interlocutores no diálogo.",
      E: "Uma interrogação retórica cujo subentendido pragmaticamente confirma que haverá altíssima concorrência."
    },
    correctAnswer: "E",
    justification: "A interrogação retórica não visa obter uma resposta desconhecida, mas funciona como uma afirmação enfática velada. O subentendido contextual é direto: 'Sim, haverá muitos candidatos, pois concursos de universidades de ponta sempre são concorridíssimos'.",
    reference: "Koch & Elias (2006) / Ducrot (1987)"
  },

  // ==========================================
  // LP02: Princípios de Textualidade: Coesão e Coerência (5 questões)
  // Gabarito: Q1: B, Q2: D, Q3: A, Q4: E, Q5: C
  // ==========================================
  {
    id: "mq_lp02_1",
    moduleId: "lp02",
    text: "Em relação aos mecanismos de coesão referencial descritos por Ingedore Koch, o fenômeno da 'anáfora' ocorre rigorosamente quando um termo linguístico:",
    options: {
      A: "Antecipa uma ideia ou palavra que somente será revelada em períodos posteriores do parágrafo.",
      B: "Retoma e recupera um elemento já expresso anteriormente na malha do texto para evitar repetição.",
      C: "Oprime intencionalmente o sujeito da oração com o intuito de torná-lo gramaticalmente inexistente.",
      D: "Substitui um conectivo coordenativo aditivo por uma conjunção subordinativa proporcional no período.",
      E: "Insere uma contradição fática que quebra a coerência global pretendida pelo autor do ensaio."
    },
    correctAnswer: "B",
    justification: "A anáfora é o mecanismo coesivo de remissão retrospectiva: o termo anafórico aponta para trás, recuperando um referente já introduzido no texto. Quando aponta para frente, denomina-se catáfora.",
    reference: "Koch (2002) - 'A Coesão Textual'"
  },
  {
    id: "mq_lp02_2",
    moduleId: "lp02",
    text: "Considere o seguinte trecho: 'A direção adquiriu novos computadores para o laboratório; a coordenação, impressoras modernas'. A vírgula empregada na segunda oração fundamenta-se em qual recurso coesivo?",
    options: {
      A: "Hiperonímia lexical, empregando termo genérico para substituir substantivo de sentido singular.",
      B: "Catáfora sintática, antecipando termo que virá expresso com minúcias nas linhas subsequentes.",
      C: "Operação concessiva, quebrando a expectativa de encadeamento lógico entre as duas orações.",
      D: "Elipse (zeugma), assinalando a omissão subentendida da forma verbal 'adquiriu' dita antes.",
      E: "Polissíndeto enfático, reiterando desnecessariamente conjunções ao longo do mesmo período."
    },
    correctAnswer: "D",
    justification: "A elipse consiste na omissão de um termo facilmente recuperável pelo contexto. Quando o termo omitido já foi explicitamente mencionado antes (no caso, o verbo 'adquiriu'), a tradição gramatical denomina essa elipse específica de zeugma, grafada com vírgula vicária.",
    reference: "Bechara (2009) / Koch (2002)"
  },
  {
    id: "mq_lp02_3",
    moduleId: "lp02",
    text: "Sobre a relação entre coesão e coerência, Leonor Fávero e a linguística textual moderna asseveram com precisão teórica que:",
    options: {
      A: "É perfeitamente possível produzir textos com alta coesão gramatical, mas destituídos de coerência semântica.",
      B: "A coerência textual decorre mecanicamente da soma aritmética de todos os conectivos presentes na página.",
      C: "Nenhum texto pode ser julgado coerente se houver a supressão de ao menos uma conjunção integrante.",
      D: "A coesão e a coerência constituem conceitos sinônimos intercambiáveis segundo a Nomenclatura Gramatical.",
      E: "Textos orais não admitem coerência, uma vez que prescindem dos recursos anafóricos da pontuação formal."
    },
    correctAnswer: "A",
    justification: "Coesão diz respeito aos elos gramaticais e conectivos na superfície da frase; coerência diz respeito à harmonia lógica de sentido global. Frases como 'O sol congelava as águas ardentes do fogo doce' possuem conectivos e concordância impecáveis (coesão), mas são ilógicas e absurdas (incoerentes).",
    reference: "Fávero (1991) - 'Coesão e Coerência Textuais'"
  },
  {
    id: "mq_lp02_4",
    moduleId: "lp02",
    text: "No período: 'O Sistema de Bibliotecas da Unicamp reformulou o portal institucional. A entidade visa facilitar o acesso público', o termo 'entidade' atua como recurso de coesão lexical por:",
    options: {
      A: "Paronímia, visto que apresenta pronúncia quase idêntica ao termo antecedente imediato.",
      B: "Hiponímia, uma vez que restringe o significado técnico a uma fração mínima do órgão.",
      C: "Antonímia, estabelecendo contraste direto de finalidade entre as ações descritas nas frases.",
      D: "Catáfora, projetando o sentido da oração para uma informação que será detalhada adiante.",
      E: "Hiperonímia, empregando uma palavra de sentido mais abrangente para retomar o termo específico."
    },
    correctAnswer: "E",
    justification: "'Entidade' é um termo mais genérico (hiperônimo) que abarca 'Sistema de Bibliotecas da Unicamp' (hipônimo). O uso de hiperônimos é recurso coesivo de excelência para evitar a repetição enfadonha do nome próprio.",
    reference: "Koch (2002) / Cunha & Cintra (2001)"
  },
  {
    id: "mq_lp02_5",
    moduleId: "lp02",
    text: "Assinale a alternativa em que a substituição do conectivo em destaque altera substancialmente a relação lógico-semântica original estabelecida no período: 'Embora houvesse escassez de recursos, o projeto foi concluído':",
    options: {
      A: "Ainda que houvesse escassez de recursos, o projeto foi concluído.",
      B: "Conquanto houvesse escassez de recursos, o projeto foi concluído.",
      C: "Porquanto houvesse escassez de recursos, o projeto foi concluído.",
      D: "Mesmo que houvesse escassez de recursos, o projeto foi concluído.",
      E: "A despeito de haver escassez de recursos, o projeto foi concluído."
    },
    correctAnswer: "C",
    justification: "'Embora', 'ainda que', 'conquanto', 'mesmo que' e 'a despeito de' são conectivos concessivos (expressam quebra de expectativa sem invalidar a oração principal). Já 'porquanto' é uma conjunção causal/explicativa (= visto que, porque), alterando completamente a semântica da frase!",
    reference: "Bechara (2009) / Cunha & Cintra (2001)"
  },

  // ==========================================
  // LP03: Argumentação e Tipos de Argumentos (5 questões)
  // Gabarito: Q1: D, Q2: A, Q3: E, Q4: C, Q5: B
  // ==========================================
  {
    id: "mq_lp03_1",
    moduleId: "lp03",
    text: "'Conforme demonstram as diretrizes divulgadas pela Organização Mundial da Saúde (OMS), a exposição crônica a telas luminosas prejudica a consolidação do sono em jovens'. O fragmento apoia-se primordialmente em um argumento de:",
    options: {
      A: "Generalização empírica de senso comum sem qualquer validação epistêmica institucional.",
      B: "Analogia metafórica fundada no cotejo entre o descanso noturno e as engrenagens fabris.",
      C: "Causa aparente que incorre na falácia clássica denominada post hoc ergo propter hoc.",
      D: "Autoridade, legitimado no prestígio técnico-científico de organismo sanitário internacional.",
      E: "Exemplificação isolada restrita ao relato subjetivo do autor sobre seus hábitos domésticos."
    },
    correctAnswer: "D",
    justification: "O argumento de autoridade sustenta-se na citação e no respaldo de especialistas renomados, órgãos oficiais ou cientistas de credibilidade consagrada na matéria sob análise (no caso, a OMS).",
    reference: "Perelman & Olbrechts-Tyteca (1958) / Koch & Elias (2010)"
  },
  {
    id: "mq_lp03_2",
    moduleId: "lp03",
    text: "Em um artigo de opinião sobre a digitalização de acervos, o articulista escreve: 'Não se deve levar em consideração a proposta do bibliotecário Silva, pois ele é uma pessoa amarga e antipática com os alunos'. Esse argumento caracteriza a falácia denominada:",
    options: {
      A: "Argumentum ad Hominem, pois ataca a pessoa do propositor em vez de rebater seus argumentos técnicos.",
      B: "Petição de Princípio, pois encerra uma conclusão circular idêntica à premissa de partida.",
      C: "Falso Dilema, pois reduz indevidamente uma questão complexa a apenas duas opções excludentes.",
      D: "Apelo à Misericórdia, pois busca a comoção emotiva do leitor em favor de um réu confesso.",
      E: "Falácia do Espantalho, pois deturpa as diretrizes institucionais do Conselho Universitário."
    },
    correctAnswer: "A",
    justification: "A falácia Ad Hominem (ataque pessoal) ocorre quando o debatedor desqualifica o caráter, a personalidade ou as características físicas do emissor para invalidar uma proposta, sem jamais confrontar o mérito da tese apresentada.",
    reference: "Toulmin (1958) / Perelman (1958)"
  },
  {
    id: "mq_lp03_3",
    moduleId: "lp03",
    text: "Considere a frase: 'O aumento contínuo da temperatura global tem acelerado o derretimento das calotas polares, o que gera a elevação progressiva do nível dos oceanos'. Sob a ótica argumentativa, estruturou-se uma relação de:",
    options: {
      A: "Concessão irrefutável com atenuação voluntária da gravidade do fenômeno geológico narrado.",
      B: "Exclusão alternante em que a ocorrência de um evento impede faticamente a eclosão do outro.",
      C: "Comparação poética sustentada em analogia implícita com a climatologia pré-histórica.",
      D: "Citação direta de autoridade amparada nas memórias biográficas de renomado oceanógrafo.",
      E: "Causa e consequência, encadeando a premissa geradora ao seu respectivo desdobramento fático."
    },
    correctAnswer: "E",
    justification: "O fragmento constrói um nexo de causalidade rigoroso: o aquecimento global atua como causa motriz, e o derretimento das geleiras e elevação dos mares constituem as consequências físicas decorrentes.",
    reference: "Koch & Elias (2010) - 'Escrever e Argumentar'"
  },
  {
    id: "mq_lp03_4",
    moduleId: "lp03",
    text: "Na técnica de redação dissertativo-argumentativa, o procedimento retórico pelo qual o autor reconhece inicialmente um ponto válido da tese contrária para, em seguida, apresentar uma prova definitiva que a suplanta, denomina-se:",
    options: {
      A: "Tautologia discursiva involuntária.",
      B: "Redução ad absurdum do interlocutor.",
      C: "Contra-argumentação por concessão e refutação.",
      D: "Petição de princípio axiomática.",
      E: "Inversão sintática do período composto."
    },
    correctAnswer: "C",
    justification: "A concessão seguida de refutação é a quintessência da contra-argumentação madura: admite-se a verdade parcial do oponente ('É fato que a medida tem custos...'), mas introduz-se um argumento hierarquicamente superior que prevalece ('...todavia, os benefícios sociais compensam largamente o investimento').",
    reference: "Perelman (1958) / Platão & Fiorin (2006)"
  },
  {
    id: "mq_lp03_5",
    moduleId: "lp03",
    text: "Para fundamentar sua tese contrária ao desperdício de verbas em impressões, o autor cita: 'Segundo o censo do IBGE (2024), 84% dos procedimentos burocráticos já migraram integralmente para o formato eletrônico'. Esse expediente configura argumento por:",
    options: {
      A: "Analogia empírica fundada em parâmetros ficcionais de literatura de cordel.",
      B: "Provas concretas (dados estatísticos), ancorando a tese em levantamento fático oficial.",
      C: "Ironia discursiva que ridiculariza abertamente a transição digital das universidades.",
      D: "Autoridade individual fundamentada na trajetória pessoal de um funcionário público.",
      E: "Falácia de apelo à tradição, sugerindo que velhos métodos devem ser conservados a todo custo."
    },
    correctAnswer: "B",
    justification: "O argumento por evidências/provas concretas ancora-se em dados objetivos, estatísticas de órgãos oficiais com rigor metodológico (como o IBGE) e fatos históricos documentados.",
    reference: "Koch & Elias (2010)"
  },

  // ==========================================
  // LP04: Paragrafação e Estrutura Textual (5 questões)
  // Gabarito: Q1: C, Q2: E, Q3: A, Q4: D, Q5: B
  // ==========================================
  {
    id: "mq_lp04_1",
    moduleId: "lp04",
    text: "Na clássica teoria do parágrafo-padrão formulada por Othon Moacyr Garcia, o 'tópico frasal' desempenha a seguinte função estrutural indispensável no texto dissertativo:",
    options: {
      A: "Apresentar a bibliografia consultada pelo autor com base estrita nas normas da ABNT.",
      B: "Funcionar como apêndice decorativo que recapitula as regras de acentuação do parágrafo.",
      C: "Sintetizar em uma declaração inicial concisa e nuclear a ideia principal a ser desenvolvida.",
      D: "Introduzir obrigatoriamente um vocativo que interpela o leitor com tom coloquial de aviso.",
      E: "Encerrar o período composto com uma citação bíblica que encerra todo debate racional."
    },
    correctAnswer: "C",
    justification: "O tópico frasal é a oração que abre o parágrafo declarando a ideia-núcleo em torno da qual todos os argumentos e pormenores subsequentes irão girar.",
    reference: "Othon M. Garcia (1967) - 'Comunicação em Prosa Moderna'"
  },
  {
    id: "mq_lp04_2",
    moduleId: "lp04",
    text: "Assinale a alternativa que apresenta um tópico frasal estruturado sob a modalidade de 'divisão':",
    options: {
      A: "A leitura sistemática constitui a prática mais enriquecedora da trajetória universitária.",
      B: "O que leva tantos cidadãos qualificados a buscarem a estabilidade do concurso público?",
      C: "Preservação digital é o conjunto de métodos voltados à custódia de dados a longo prazo.",
      D: "Infelizmente, os recursos destinados à pesquisa científica continuam insuficientes no país.",
      E: "Dois motivos explicam a relevância dos repositórios: a democratização do saber e a visibilidade científica."
    },
    correctAnswer: "E",
    justification: "O tópico frasal por divisão antecipa e discrimina analiticamente as partes ou razões que serão esmiuçadas no desenvolvimento ('Dois motivos explicam...: motivo 1 e motivo 2').",
    reference: "Garcia (1967) / Fiorin & Savioli (2006)"
  },
  {
    id: "mq_lp04_3",
    moduleId: "lp04",
    text: "Em provas de redação e revisão técnica de textos oficiais, a ocorrência de sucessivos 'parágrafos-frase' (períodos isolados de uma ou duas linhas que abrem novos parágrafos sem desenvolvimento) é considerada uma falha grave porque:",
    options: {
      A: "Fragmenta a linha de raciocínio, tornando o texto truncado e desprovido de densidade analítica.",
      B: "Viola a regra da NGB que exige ao menos cinco pronomes demonstrativos em qualquer parágrafo.",
      C: "Obriga o uso de aspas em todos os substantivos próprios empregados ao longo do capítulo.",
      D: "Impede faticamente a correta conjugação dos verbos regulares no pretérito mais-que-perfeito.",
      E: "Transforma compulsoriamente a tipologia dissertativa em gênero lírico-dramático de cordel."
    },
    correctAnswer: "A",
    justification: "A fragmentação excessiva em parágrafos de uma única linha rompe a unidade temática, impedindo que a ideia-núcleo seja fundamentada, explicada e concluída com maturidade argumentativa.",
    reference: "Garcia (1967)"
  },
  {
    id: "mq_lp04_4",
    moduleId: "lp04",
    text: "O recurso textual empregado no término de um parágrafo que retoma o núcleo debatido e simultaneamente prepara a introdução do tema do parágrafo seguinte denomina-se tecnicamente:",
    options: {
      A: "Pleonasmo vicioso de fechamento.",
      B: "Anacoluto sintático de despedida.",
      C: "Tópico frasal conclusivo invertido.",
      D: "Gancho coesivo ou elo de transição interparágrafos.",
      E: "Aposto especificativo excludente."
    },
    correctAnswer: "D",
    justification: "O gancho coesivo (ou frase de transição) assegura a fluidez da leitura, conectando a conclusão da ideia anterior à introdução do novo subtema sem saltos bruscos ou rupturas na progressão textual.",
    reference: "Koch & Elias (2006) / Garcia (1967)"
  },
  {
    id: "mq_lp04_5",
    moduleId: "lp04",
    text: "Em relação à extensão e unidade temática dos parágrafos em um texto acadêmico ou oficial, assinale a recomendação correta:",
    options: {
      A: "O autor deve concentrar todas as ideias de uma tese em um único parágrafo-monstro de 50 linhas.",
      B: "Cada parágrafo deve preservar rigorosa unidade em torno de um único tópico central bem delimitado.",
      C: "A mudança de parágrafo só é juridicamente permitida caso ocorra a introdução de tabelas numéricas.",
      D: "Parágrafos dissertativos jamais comportam conectivos conclusivos em sua última oração.",
      E: "O número de parágrafos de uma redação formal deve coincidir obrigatoriamente com o número de páginas."
    },
    correctAnswer: "B",
    justification: "A regra de ouro da paragrafação é a unidade temática: um parágrafo para cada ideia-núcleo. Se o assunto ou a perspectiva mudam, deve-se abrir um novo parágrafo.",
    reference: "Garcia (1967) - 'Comunicação em Prosa Moderna'"
  },

  // ==========================================
  // LP05: Linguagem Denotativa e Conotativa (5 questões)
  // Gabarito: Q1: E, Q2: B, Q3: D, Q4: A, Q5: C
  // ==========================================
  {
    id: "mq_lp05_1",
    moduleId: "lp05",
    text: "A distinção entre linguagem denotativa e conotativa é fundamental na estilística. Assinale a alternativa em que a palavra 'chave' foi empregada em sentido estritamente denotativo (literal):",
    options: {
      A: "O reitor fez um pronunciamento chave para acalmar os ânimos da bancada discente.",
      B: "A disciplina e o método nos estudos são a chave definitiva para o sucesso no certame.",
      C: "Aquele pesquisador renomado fechou com chave de ouro o congresso latino-americano.",
      D: "Trata-se de uma questão chave que definirá as prioridades orçamentárias do instituto.",
      E: "O funcionário colocou a chave de metal na fechadura da sala do arquivo para abri-la."
    },
    correctAnswer: "E",
    justification: "Na opção E, 'chave' refere-se ao objeto físico de metal feito para abrir fechaduras (sentido literal, dicionarizado e denotativo). Nas demais alternativas, 'chave' é usada em sentido figurado (conotativo), significando 'crucial', 'decisivo' ou 'fundamental'.",
    reference: "Bechara (2009) / Jakobson (1960)"
  },
  {
    id: "mq_lp05_2",
    moduleId: "lp05",
    text: "Considere os versos de Carlos Drummond de Andrade: 'No meio do caminho tinha uma pedra / tinha uma pedra no meio do caminho'. No contexto literário do poema, a palavra 'pedra' carrega carga semântica conotativa porque:",
    options: {
      A: "Denota um mineral sedimentar recolhido por geólogos na orla da Lagoa do Taquaral.",
      B: "Simboliza poeticamente as adversidades, frustrações e obstáculos existenciais da vida.",
      C: "Descreve com exatidão matemática o calçamento histórico de ruas da época colonial.",
      D: "Comprova a necessidade urgente de obras de pavimentação por parte do poder executivo.",
      E: "Constitui um erro tipográfico não corrigido pela editora que publicou a primeira edição."
    },
    correctAnswer: "B",
    justification: "Na literatura, a pedra drummondiana transcende o significado mineral estrito (denotação) para adquirir densidade metafórica e conotativa (os dilemas, as barreiras e os percalços humanos).",
    reference: "Jakobson (1960) / Barthes (1964)"
  },
  {
    id: "mq_lp05_3",
    moduleId: "lp05",
    text: "A propriedade pela qual um mesmo vocábulo pode assumir diferentes significados dependendo do contexto situacional em que é empregado denomina-se tecnicamente:",
    options: {
      A: "Pleonasmo vicioso sintático.",
      B: "Catacrese estrutural primária.",
      C: "Heterofonia diacrônica dialetal.",
      D: "Polissemia lexical.",
      E: "Hipercorreção normativista."
    },
    correctAnswer: "D",
    justification: "A polissemia é o fenômeno semântico no qual uma única palavra abriga uma pluralidade de acepções ligadas por afinidade conceitual (ex.: rede de dormir, rede de computadores, rede social).",
    reference: "Ullmann (1964) - 'Semântica: Uma Introdução à Ciência do Significado'"
  },
  {
    id: "mq_lp05_4",
    moduleId: "lp05",
    text: "Em documentos oficiais (ofícios, pareceres, atas e relatórios institucionais da Unicamp), a norma técnica prescreve o uso exclusivo da linguagem:",
    options: {
      A: "Denotativa, privilegiando a clareza, a precisão e a objetividade factual da mensagem.",
      B: "Conotativa poética, estimulando a imaginação estética e as duplas leituras irônicas.",
      C: "Coloquial informal, aproximando a autoridade pública do vocabulário vulgar dos cidadãos.",
      D: "Arcaizante medieval, preservando vocábulos em latim e termos do português do século XVI.",
      E: "Figurada parabólica, transmitindo diretrizes orçamentárias por meio de metáforas líricas."
    },
    correctAnswer: "A",
    justification: "A redação oficial exige transparência pública, impessoalidade e clareza, o que impõe o emprego estrito da linguagem denotativa (literal e objetiva), banindo figuras de linguagem e ambiguidades.",
    reference: "Manual de Redação da Presidência da República (2018)"
  },
  {
    id: "mq_lp05_5",
    moduleId: "lp05",
    text: "Assinale a alternativa em que a frase apresenta ambiguidade estrutural não intencional (vício de linguagem decorrente de conotação/duplo sentido desastrado):",
    options: {
      A: "O candidato protocolou o recurso administrativo no horário determinado pelo edital.",
      B: "As obras raras do acervo histórico foram devidamente digitalizadas pela equipe técnica.",
      C: "O professor conversou com o coordenador sobre seu livro que havia sumido do arquivo.",
      D: "A reunião extraordinária da congregação deliberou a aprovação do relatório de gestão.",
      E: "Todos os inscritos no concurso deverão comparecer com documento de identidade oficial."
    },
    correctAnswer: "C",
    justification: "A frase 'O professor conversou com o coordenador sobre seu livro...' é ambígua (anfibologia): não é possível determinar de quem era o livro que sumiu (do professor ou do coordenador). Trata-se de defeito de redação gerado pelo mau uso do pronome possessivo 'seu'.",
    reference: "Garcia (1967) / Bechara (2009)"
  },

  // ==========================================
  // LP06: Figuras de Linguagem (5 questões)
  // Gabarito: Q1: A, Q2: C, Q3: E, Q4: B, Q5: D
  // ==========================================
  {
    id: "mq_lp06_1",
    moduleId: "lp06",
    text: "Considere a frase: 'Ele é um poço de serenidade mesmo nas situações mais tensas do concurso'. A figura de linguagem predominante na construção acima é a:",
    options: {
      A: "Metáfora, estabelecendo uma analogia direta e implícita sem conectivo comparativo formal.",
      B: "Comparação explícita, empregando o conectivo 'como' para aproximar dois elementos distintos.",
      C: "Metonímia, substituindo o autor pela obra literária de forma material e mensurável.",
      D: "Hipérbole, minimizando com eufemismo a fragilidade emocional do candidato perante a banca.",
      E: "Antítese, aproximando ideias que se anulam logicamente em um impasse existencial inconciliável."
    },
    correctAnswer: "A",
    justification: "A metáfora consiste em transferir o significado de uma palavra para outro campo com base em uma semelhança subjetiva implícita, sem o emprego de conectivos comparativos (diferente de 'Ele é como um poço').",
    reference: "Cunha & Cintra (2001) / Bechara (2009)"
  },
  {
    id: "mq_lp06_2",
    moduleId: "lp06",
    text: "Na biblioteca, o estudante comentou com entusiasmo: 'Neste semestre, já li todo o Graciliano Ramos e três volumes de Machado de Assis'. Ocorreu no trecho o emprego da figura denominada:",
    options: {
      A: "Catacrese, suprindo a carência de vocabulário específico para designar livros encadernados.",
      B: "Sinestesia, mesclando impressões sensoriais gustativas e visuais na mesma proposição.",
      C: "Metonímia, operando a substituição da obra intelectual pelo nome físico de seus autores.",
      D: "Paradoxo, formulando uma contradição lógica insuperável entre o ato de ler e os escritores.",
      E: "Eufemismo, atenuando a crítica literária referente à brevidade das narrativas modernas."
    },
    correctAnswer: "C",
    justification: "A metonímia é a substituição baseada em contiguidade real: o estudante não leu os autores fisicamente em carne e osso, mas sim os livros escritos por eles (o autor pela obra).",
    reference: "Bechara (2009) - 'Moderna Gramática Portuguesa'"
  },
  {
    id: "mq_lp06_3",
    moduleId: "lp06",
    text: "Assinale a alternativa que contém um exemplo autêntico de PARADOXO (e não de mera antítese):",
    options: {
      A: "O concurseiro estuda de dia e descansa brevemente durante a calada da noite.",
      B: "Na vida pública, convivem momentos de grande alegria e instantes de passageira tristeza.",
      C: "O auditório da universidade abrigava pessoas ricas e cidadãos muito pobres da comunidade.",
      D: "Aquele candidato apresentava respostas claras para algumas dúvidas e soluções obscuras para outras.",
      E: "Em meio àquela multidão ensandecida, eu experimentava uma estarrecedora solidão acompanhada."
    },
    correctAnswer: "E",
    justification: "O paradoxo (oxímoro) reúne conceitos antagônicos que se chocam e se anulam logicamente no plano da realidade física ('solidão acompanhada' é uma impossibilidade fática simultânea). As opções A, B, C e D contêm antíteses simples, cujos opostos coexistem sem contradição absurda.",
    reference: "Cunha & Cintra (2001) - 'Nova Gramática do Português Contemporâneo'"
  },
  {
    id: "mq_lp06_4",
    moduleId: "lp06",
    text: "Ao comunicar a perda de um ilustre professor emérito da instituição, a nota oficial expressou: 'Nosso estimado mestre entregou a alma ao Criador e descansou dos seus labores terrenos'. O expediente estilístico utilizado foi:",
    options: {
      A: "Hipérbole, exagerando desmedidamente o volume de trabalho acumulado pelo docente falecido.",
      B: "Eufemismo, amenizando com delicadeza e piedade o peso da palavra 'morte' perante a comunidade.",
      C: "Ironia, transmitindo o oposto da verdade com a intenção sarcástica de criticar o magistério.",
      D: "Prosopopeia, conferindo sentimentos biológicos à nota impressa distribuída nos murais.",
      E: "Pleonasmo vicioso, repetindo termos sinônimos que redundam em empobrecimento estilístico."
    },
    correctAnswer: "B",
    justification: "O eufemismo é a figura de pensamento que atenua, suaviza ou substitui termos chocantes, dolorosos ou desagradáveis (como a morte ou crimes) por expressões mais brandas e confortadoras.",
    reference: "Garcia (1967) / Bechara (2009)"
  },
  {
    id: "mq_lp06_5",
    moduleId: "lp06",
    text: "Considere as expressões cristalizadas no cotidiano: 'o braço da poltrona', 'a asa da xícara' e 'o dente de alho'. Sob a perspectiva da semântica estilística, todas constituem exemplos de:",
    options: {
      A: "Metonímia da causa pelo efeito.",
      B: "Sinestesia de estímulos auditivos e olfativos.",
      C: "Antítese de substantivos anatômicos.",
      D: "Catacrese, metáforas desgastadas pelo uso popular para suprir lacuna de termo próprio.",
      E: "Prosopopeia consciente empregada com exclusividade na poesia barroca seiscentista."
    },
    correctAnswer: "D",
    justification: "A catacrese é a metáfora fossilizada e generalizada pela comunidade linguística por falta de um termo específico no léxico (não há outro nome próprio para a saliência curva da xícara além de 'asa', nem para o apoio da poltrona além de 'braço').",
    reference: "Cunha & Cintra (2001)"
  }
];
