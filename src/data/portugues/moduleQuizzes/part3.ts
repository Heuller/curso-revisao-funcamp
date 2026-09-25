import type { ModuleQuizQuestion } from './types';

export const moduleQuizzesLPPart3: ModuleQuizQuestion[] = [
  // ==========================================
  // LP13: Período Composto: Coordenação e Subordinação (5 questões)
  // Gabarito: Q1: B, Q2: E, Q3: A, Q4: D, Q5: C
  // ==========================================
  {
    id: "mq_lp13_1",
    moduleId: "lp13",
    text: "Considere as orações: I. 'Os pesquisadores da Unicamp, QUE PUBLICARAM O ARTIGO, foram premiados'; II. 'Os pesquisadores da Unicamp QUE PUBLICARAM O ARTIGO foram premiados'. Sob a perspectiva semântica, a presença das vírgulas em I em comparação com sua ausência em II indica que:",
    options: {
      A: "Em I, apenas uma parcela restrita do corpo de pesquisadores publicou o artigo e foi premiada.",
      B: "Em I, todos os pesquisadores daquele grupo publicaram o artigo; em II, apenas os que publicaram foram premiados.",
      C: "Em II, generaliza-se a premiação a todos os docentes da universidade, independentemente de publicações.",
      D: "A frase I apresenta um erro sintático grosseiro, pois orações adjetivas nunca admitem vírgulas.",
      E: "Ambas as frases possuem rigorosamente o mesmo valor semântico restritivo segundo os gramáticos.",
    },
    correctAnswer: "B",
    justification: "Em I, a oração adjetiva explicativa (entre vírgulas) tem valor universal/generalizador: todos os pesquisadores daquele grupo publicaram e foram premiados. Em II, a oração adjetiva restritiva (sem vírgulas) limita o fato apenas aos pesquisadores que publicaram o artigo, excluindo os que não publicaram.",
    reference: "Bechara (2009) / Cunha & Cintra (2001)"
  },
  {
    id: "mq_lp13_2",
    moduleId: "lp13",
    text: "No período: 'O candidato estudou com afinco e método; OBTEVE, POIS, A APROVAÇÃO ALMEJADA', a conjunção destacada possui valor semântico de:",
    options: {
      A: "Explicação ou justificativa de um comando emitido anteriormente pela coordenação do curso.",
      B: "Causa geradora que precede cronologicamente o início dos estudos preparatórios do concurso.",
      C: "Adversidade que contraria a expectativa natural gerada pelo esforço intelectual do candidato.",
      D: "Concessão que atenua a importância da aprovação obtida nas etapas eliminatórias do certame.",
      E: "Conclusão, funcionando como conectivo conclusivo por estar posposto à forma verbal.",
    },
    correctAnswer: "E",
    justification: "Quando a conjunção 'pois' vem posposta ao verbo (e entre vírgulas), ela funciona compulsoriamente como conjunção coordenativa conclusiva (= portanto, logo). Quando anteposta ao verbo, funciona como explicativa (= porque).",
    reference: "Cunha & Cintra (2001) - 'Nova Gramática do Português Contemporâneo'"
  },
  {
    id: "mq_lp13_3",
    moduleId: "lp13",
    text: "Na frase: 'É FUNDAMENTAL que todos os servidores conheçam o regimento da instituição', a oração subordinada em destaque classifica-se como:",
    options: {
      A: "Subordinada Substantiva Subjetiva, exercendo a função de sujeito da oração principal.",
      B: "Subordinada Substantiva Objetiva Direta, completando verbo transitivo direto da principal.",
      C: "Subordinada Substantiva Completiva Nominal, completando o sentido de substantivo abstrato.",
      D: "Subordinada Adverbial Conformativa, expressando conformidade com as leis vigentes no país.",
      E: "Subordinada Adjetiva Explicativa, caracterizando a totalidade dos funcionários públicos da Unicamp.",
    },
    correctAnswer: "A",
    justification: "Aplicando o teste do 'ISSO': 'É fundamental [ISSO]' ➔ 'ISSO é fundamental'. A oração introduzida por 'que' funciona como o sujeito do verbo de ligação 'é' + adjetivo 'fundamental'. Logo, é Subordinada Substantiva Subjetiva.",
    reference: "Rocha Lima (2011) / Bechara (2009)"
  },
  {
    id: "mq_lp13_4",
    moduleId: "lp13",
    text: "No enunciado: 'COMO não obteve a pontuação mínima exigida na primeira fase, o concorrente foi desclassificado', a conjunção subordinativa 'como' estabelece relação de:",
    options: {
      A: "Conformidade, equivalendo semanticamente ao conectivo 'segundo' ou 'consoante'.",
      B: "Comparação explícita entre a trajetória de dois concorrentes inscritos no concurso.",
      C: "Proporcionalidade, indicando variação concomitante entre a pontuação e a classificação.",
      D: "Causa, equivalendo a 'já que' ou 'visto que', por introduzir a oração anteposta à principal.",
      E: "Condição hipotética necessária para a homologação das inscrições deferidas no certame.",
    },
    correctAnswer: "D",
    justification: "Quando a conjunção 'como' encabeça uma oração subordinada anteposta à oração principal, ela possui valor semântico de CAUSA (= Já que não obteve / Visto que não obteve a nota mínima...).",
    reference: "Bechara (2009) - 'Moderna Gramática Portuguesa'"
  },
  {
    id: "mq_lp13_5",
    moduleId: "lp13",
    text: "Assinale a alternativa que apresenta conectivo com valor de CONCESSÃO (quebra de expectativa sem anular a realização da oração principal):",
    options: {
      A: "O candidato fez a prova com tranquilidade, porquanto havia estudado todas as semanas.",
      B: "O candidato não apenas respondeu às questões discursivas, mas também revisou a redação.",
      C: "O candidato compareceu ao local de prova, conquanto estivesse acometido de forte gripe.",
      D: "O candidato permaneceu em silêncio durante o teste a fim de que pudesse concentrar-se.",
      E: "O candidato foi aprovado no exame, logo assumirá suas funções na biblioteca em breve.",
    },
    correctAnswer: "C",
    justification: "'Conquanto' é conjunção subordinativa concessiva clássica (= embora, ainda que), exigindo verbo no modo subjuntivo ('estivesse'). As outras expressam causa ('porquanto'), adição ('não apenas... mas também'), finalidade ('a fim de que') e conclusão ('logo').",
    reference: "Cunha & Cintra (2001)"
  },

  // ==========================================
  // LP14: Relações Semânticas entre Palavras (5 questões)
  // Gabarito: Q1: D, Q2: A, Q3: C, Q4: E, Q5: B
  // ==========================================
  {
    id: "mq_lp14_1",
    moduleId: "lp14",
    text: "Considere as frases: I. 'O perigo de desabamento era IMINENTE'; II. 'O EMINENTE jurista proferiu a aula magna'. Os vocábulos destacados constituem um par de:",
    options: {
      A: "Homófonos perfeitos com pronúncia estritamente idêntica segundo a fonologia oficial.",
      B: "Homógrafos heterofônicos com grafia idêntica e variação de timbre vocálico na tônica.",
      C: "Sinônimos absolutos que podem ser permutados livremente sem qualquer perda de sentido.",
      D: "Parônimos, pois possuem grafia e som parecidos, mas significados inteiramente distintos.",
      E: "Antônimos radicais formados por aposição de prefixos de negação na raiz etimológica.",
    },
    correctAnswer: "D",
    justification: "'Iminente' (que está prestes a acontecer de imediato) e 'eminente' (ilustre, notável, sublime) são palavras parônimas: parecidas na pronúncia e na grafia, mas com sentidos completamente diferentes.",
    reference: "Ullmann (1964) / Bechara (2009)"
  },
  {
    id: "mq_lp14_2",
    moduleId: "lp14",
    text: "O servidor público que comete transgressão grave e desrespeita o regimento da universidade pratica uma conduta que INFRINGE as normas, cabendo à autoridade competente INFLIGIR-LHE a penalidade cabível. Os verbos destacados significam, respectivamente:",
    options: {
      A: "Violar / Desrespeitar — Aplicar / Cominar pena.",
      B: "Aplicar pena — Cometer infração gravíssima.",
      C: "Perdoar o réu — Encaminhar aos tribunais.",
      D: "Homologar diretriz — Revogar a portaria anterior.",
      E: "Corrigir os autos — Confirmar a acusação penal.",
    },
    correctAnswer: "A",
    justification: "'Infringir' significa transgredir, violar, desobedecer a uma lei ou regra. 'Infligir' significa aplicar pena, castigo, dor ou sanção administrativa.",
    reference: "Luft (2002) - 'Dicionário Prático de Regência e Semântica'"
  },
  {
    id: "mq_lp14_3",
    moduleId: "lp14",
    text: "Assinale a alternativa que preenche correta e respectivamente as lacunas da frase: 'Na última _____ plenária da câmara, foi autorizada a _____ de terrenos públicos para a nova _____ da biblioteca':",
    options: {
      A: "seção — sessão — cessão",
      B: "cessão — seção — sessão",
      C: "sessão — cessão — seção",
      D: "sessão — seção — cessão",
      E: "seção — cessão — sessão",
    },
    correctAnswer: "C",
    justification: "1ª lacuna: 'sessão' com SS = reunião que dura um intervalo de tempo; 2ª lacuna: 'cessão' com C = ato de ceder, doar ou transferir direitos; 3ª lacuna: 'seção' com Ç = repartição, departamento, corte ou setor físico da biblioteca.",
    reference: "Bechara (2009) / VOLP (2021)"
  },
  {
    id: "mq_lp14_4",
    moduleId: "lp14",
    text: "A respeito do par de palavras RATIFICAR e RETIFICAR, assinale a opção que define com exatidão a distinção entre os seus significados:",
    options: {
      A: "Ratificar significa consertar um erro; Retificar significa doar bens ao patrimônio público.",
      B: "Ambos os termos são sinônimos perfeitos aplicados com exclusividade no direito civil.",
      C: "Retificar significa autenticar com firma em cartório; Ratificar significa apagar os autos.",
      D: "Ratificar e retificar são homônimos homófonos com pronúncia rigorosamente indiferenciada.",
      E: "Ratificar significa confirmar, validar e reafirmar; Retificar significa corrigir, emendar e reparar.",
    },
    correctAnswer: "E",
    justification: "Ratificar = confirmar, validar o que já foi dito (lembre-se do 'R' de Reafirmar). Retificar = corrigir, emendar o erro (lembre-se do 'R' de Reparar/Rascunho).",
    reference: "Luft (2002) / Cunha & Cintra (2001)"
  },
  {
    id: "mq_lp14_5",
    moduleId: "lp14",
    text: "Em um laudo sobre o patrimônio de uma fundação, o auditor registrou: 'A entidade movimentou valores VULTOSOS no último trimestre'. A palavra em destaque foi empregada:",
    options: {
      A: "Incorretamente, pois deveria ser grafada com 'lh' segundo as regras do Acordo Ortográfico.",
      B: "Corretamente, pois significa de grande monta, expressivo volume financeiro ou grande porte.",
      C: "Incorretamente, pois a forma adequada à norma culta para valores numéricos é 'vultuosos'.",
      D: "Com sentido metafórico jocoso para caracterizar documentos sem qualquer validade contábil.",
      E: "Em desacordo com a regência do verbo movimentar, que exige complemento preposicionado.",
    },
    correctAnswer: "B",
    justification: "'Vultoso' significa volumoso, de grande valor, imenso (ex.: somas vultosas). 'Vultuoso', por sua vez, significa com o rosto inchado, vermelho, congesto por acúmulo de sangue. Portanto, 'valores vultosos' está perfeitamente correto.",
    reference: "VOLP (2021) / Luft (2002)"
  },

  // ==========================================
  // LP15: Ortografia e Acentuação Gráfica (5 questões)
  // Gabarito: Q1: A, Q2: C, Q3: E, Q4: B, Q5: D
  // ==========================================
  {
    id: "mq_lp15_1",
    moduleId: "lp15",
    text: "Com a vigência definitiva do Acordo Ortográfico da Língua Portuguesa, perderam compulsoriamente o acento gráfico os ditongos abertos 'ÉI' e 'ÓI' presentes nas palavras:",
    options: {
      A: "Paroxítonas, como em 'ideia', 'plateia', 'jiboia', 'heroico' e 'assembleia'.",
      B: "Oxítonas terminadas em vogal tônica, como em 'herói', 'troféu' e 'dói'.",
      C: "Monossílabos tônicos de alta frequência, como em 'céu', 'réu' e 'véu'.",
      D: "Proparoxítonas eruditas de origem grega ou latina terminadas em consoante líquida.",
      E: "Palavras derivadas de nomes próprios estrangeiros aportuguesados com sufixo -ismo.",
    },
    correctAnswer: "A",
    justification: "O Novo Acordo aboliu o acento gráfico nos ditongos abertos éi e ói EXCLUSIVAMENTE nas palavras paroxítonas ('ideia', 'heroico', 'jiboia'). Nas oxítonas ('herói', 'papéis', 'troféu') e nos monossílabos ('dói', 'céu'), o acento continua obrigatório!",
    reference: "Acordo Ortográfico de 1990 / Bechara (2009)"
  },
  {
    id: "mq_lp15_2",
    moduleId: "lp15",
    text: "Assinale a alternativa em que TODAS as palavras estão grafadas e acentuadas em perfeita consonância com o Novo Acordo Ortográfico:",
    options: {
      A: "Vôo — anti-inflamatório — microondas — paraquedas — idéia.",
      B: "Voo — antiinflamatório — micro-ondas — pára-quedas — plateia.",
      C: "Voo — anti-inflamatório — micro-ondas — paraquedas — plateia.",
      D: "Vôo — anti-inflamatório — micro-ondas — paraquedas — platéia.",
      E: "Voo — antiinflamatório — microondas — pára-quedas — ideia.",
    },
    correctAnswer: "C",
    justification: "Na opção C: 'voo' (sem acento no hiato duplicado oo); 'anti-inflamatório' (hífen obrigatório por letras iguais: i-i); 'micro-ondas' (hífen obrigatório por letras iguais: o-o); 'paraquedas' (sem hífen e sem acento no verbo parar); 'plateia' (ditongo aberto em paroxítona sem acento). Perfeito!",
    reference: "VOLP (2021) / Acordo Ortográfico de 1990"
  },
  {
    id: "mq_lp15_3",
    moduleId: "lp15",
    text: "No que se refere ao uso dos QUATRO PORQUÊS, assinale a opção inteiramente correta segundo as normas gramaticais vigentes:",
    options: {
      A: "Não compareci ao seminário por que estava muito doente ontem pela manhã.",
      B: "Gostaria imensamente de saber o por que de tanta indecisão entre os membros da banca.",
      C: "Os fiscais não permitiram a entrada do candidato na sala de provas, mas ninguém soube porquê.",
      D: "Você decidiu mudar de área de estudos após a aprovação no certame? Porque?",
      E: "Não compreendemos os motivos por que o projeto foi indeferido pela diretoria técnica.",
    },
    correctAnswer: "E",
    justification: "Na opção E, 'por que' está separado e sem acento porque funciona como pronome relativo (= pelos quais / pelos motivos pelos quais...). Erros das outras: A) 'porque' (junto e sem acento, causal); B) 'o porquê' (junto e com circunflexo, substantivado por artigo); C e D) 'por quê' (separado e com circunflexo, no fim da frase).",
    reference: "Cunha & Cintra (2001) / Bechara (2009)"
  },
  {
    id: "mq_lp15_4",
    moduleId: "lp15",
    text: "Assinale a alternativa em que a palavra destacada NÃO deve receber acento gráfico segundo as regras vigentes da língua portuguesa:",
    options: {
      A: "O candidato guardou o bilhete na gaveta como um ÍMÃ de recordações familiares.",
      B: "O fiscal observou atentamente os HIFENS grafados no texto pelos concorrentes.",
      C: "A comissão solicitou o envio do ÁLBUM histórico com as fotos dos fundadores.",
      D: "Aquele estudante possui um CARÁTER admirável comprovado pela sua conduta ética.",
      E: "O auditório da universidade recebeu um PÚBLICO numeroso na abertura do simpósio.",
    },
    correctAnswer: "B",
    justification: "'Hífen' (no singular) tem acento por ser paroxítona terminada em -n. Contudo, seu plural 'hifens' NÃO tem acento, pois passa a seguir a regra das paroxítonas terminadas em -ens (como 'jovens', 'nuvens', 'homens', que não levam acento).",
    reference: "Bechara (2009) - 'Moderna Gramática Portuguesa'"
  },
  {
    id: "mq_lp15_5",
    moduleId: "lp15",
    text: "De acordo com a regra de emprego do hífen com prefixos, assinale a palavra que deve ser grafada COM HÍFEN (-):",
    options: {
      A: "Autoescola (prefixo terminado em vogal diferente da vogal inicial da palavra seguinte).",
      B: "Infraestrutura (prefixo terminado em vogal 'a' seguido de vogal 'e').",
      C: "Antirreflexo (prefixo terminado em vogal seguido de palavra iniciada pela consoante 'r').",
      D: "Anti-higiênico (prefixo acoplado a palavra seguinte iniciada pela letra 'h').",
      E: "Minissaia (prefixo terminado em vogal seguido de palavra iniciada pela consoante 's').",
    },
    correctAnswer: "D",
    justification: "Com qualquer prefixo, se a palavra seguinte for iniciada pela letra 'H', o uso do hífen é estritamente obrigatório ('anti-higiênico', 'super-homem', 'micro-história'). Nas demais: 'autoescola' e 'infraestrutura' juntam sem hífen; 'antirreflexo' e 'minissaia' dobram o 'r' e 's'.",
    reference: "Acordo Ortográfico de 1990 / VOLP (2021)"
  },

  // ==========================================
  // LP16: Sinais de Pontuação e Efeitos de Sentido (5 questões)
  // Gabarito: Q1: C, Q2: E, Q3: B, Q4: D, Q5: A
  // ==========================================
  {
    id: "mq_lp16_1",
    moduleId: "lp16",
    text: "Assinale a alternativa que apresenta ERRO CRASSO de pontuação por violar o mandamento sintático que proíbe a separação de termos imediatos da oração:",
    options: {
      A: "Campinas, 25 de setembro de 2026.",
      B: "Durante a reunião do conselho departamental, discutiram-se as reformas curriculares.",
      C: "Os estudantes de biblioteconomia e os técnicos do laboratório, organizaram o acervo.",
      D: "A biblioteca adquiriu novos computadores, mesas ergonômicas, cadeiras e estantes.",
      E: "O professor emérito da instituição, homem de ilibada reputação, recebeu a medalha.",
    },
    correctAnswer: "C",
    justification: "Na opção C, colocou-se uma vírgula proibida separando o sujeito composto ('Os estudantes de biblioteconomia e os técnicos do laboratório') do seu verbo/predicado ('organizaram o acervo'). Em hipótese alguma se separa sujeito de verbo por vírgula!",
    reference: "Garcia (1967) / Bechara (2009)"
  },
  {
    id: "mq_lp16_2",
    moduleId: "lp16",
    text: "Considere a frase: 'O pesquisador dedicou-se com ardor aos estudos; obteve, portanto, a classificação em primeiro lugar'. O emprego do ponto e vírgula e das vírgulas justifica-se porque:",
    options: {
      A: "Houve a introdução de uma oração subordinada adjetiva restritiva de alta complexidade.",
      B: "A conjunção integrante 'portanto' exige compulsoriamente ponto e vírgula na introdução.",
      C: "O autor incorreu em vício estilístico de anacoluto, desarticulando a sintaxe da frase.",
      D: "O sujeito da segunda oração foi transferido compulsoriamente para o início do período.",
      E: "O ponto e vírgula separa coordenadas cuja conjunção conclusiva está deslocada e isolada por vírgulas.",
    },
    correctAnswer: "E",
    justification: "Em períodos com orações coordenadas sindéticas cuja conjunção conclusiva ou adversativa vem deslocada após o verbo ('obteve, portanto,...'), separa-se a oração anterior por ponto e vírgula e isola-se a conjunção deslocada entre duas vírgulas.",
    reference: "Cunha & Cintra (2001) - 'Nova Gramática do Português Contemporâneo'"
  },
  {
    id: "mq_lp16_3",
    moduleId: "lp16",
    text: "O emprego de vírgula antes da conjunção aditiva 'E' é facultado ou recomendado na norma culta no seguinte caso:",
    options: {
      A: "Em toda e qualquer oração aditiva curta de dois ou três vocábulos nominais.",
      B: "Quando as duas orações coordenadas aditivas possuem sujeitos gramaticais diferentes.",
      C: "Quando a conjunção aditiva antecede um verbo conjugado no pretérito imperfeito.",
      D: "Apenas quando o período não contém nenhum substantivo masculino flexionado no plural.",
      E: "Exclusivamente em textos jurídicos promulgados pelo Diário Oficial da União.",
    },
    correctAnswer: "B",
    justification: "Embora a regra geral dispense vírgula antes do 'e' aditivo, quando as orações coordenadas possuem sujeitos distintos ('O reitor assinou a portaria, e os funcionários aplaudiram a decisão'), o uso da vírgula é recomendado para evitar ambiguidade sintática.",
    reference: "Bechara (2009) / Rocha Lima (2011)"
  },
  {
    id: "mq_lp16_4",
    moduleId: "lp16",
    text: "Assinale a alternativa em que a alteração da pontuação original acarreta PROFUNDA MUDANÇA DE SENTIDO no enunciado:",
    options: {
      A: "Comprei maçãs, uvas e bananas. ➔ Comprei maçãs, bananas e uvas.",
      B: "Ontem à tarde, o diretor chegou. ➔ O diretor chegou ontem à tarde.",
      C: "A aluna, dedicada e serena, concluiu o teste. ➔ Dedicada e serena, a aluna concluiu o teste.",
      D: "Os relatórios que foram aprovados serão arquivados. ➔ Os relatórios, que foram aprovados, serão arquivados.",
      E: "Ele estudou muito; passou, pois, no concurso. ➔ Ele estudou muito, portanto passou no concurso.",
    },
    correctAnswer: "D",
    justification: "Na opção D, sem vírgulas a oração é restritiva (apenas parte dos relatórios foi aprovada, e apenas esses serão arquivados). Com vírgulas, torna-se explicativa (todos os relatórios foram aprovados e todos serão arquivados). A mudança de sentido é profunda e evidente!",
    reference: "Cunha & Cintra (2001) / Platão & Fiorin (2006)"
  },
  {
    id: "mq_lp16_5",
    moduleId: "lp16",
    text: "O sinal de DOIS-PONTOS (:) pode ser legitimamente empregado para:",
    options: {
      A: "Introduzir uma citação direta, um esclarecimento, uma síntese ou um aposto explicativo.",
      B: "Substituir a desinência número-pessoal nos verbos transitivos diretos na voz passiva.",
      C: "Separar obrigatoriamente o sujeito simples do predicativo do objeto na ordem direta.",
      D: "Indicar a elipse de conjunções subordinativas temporais no meio de orações subordinadas.",
      E: "Finalizar parágrafos dissertativos que dispensam conclusão de acordo com as normas da ABNT.",
    },
    correctAnswer: "A",
    justification: "Os dois-pontos têm valor catafórico (anunciador): introduzem citações literais com aspas, esclarecimentos conceituais, sínteses ou apostos explicativos/enumerativos.",
    reference: "Bechara (2009) - 'Moderna Gramática Portuguesa'"
  },

  // ==========================================
  // LP17: Variação Linguística e Norma-Padrão (5 questões)
  // Gabarito: Q1: B, Q2: E, Q3: C, Q4: A, Q5: D
  // ==========================================
  {
    id: "mq_lp17_1",
    moduleId: "lp17",
    text: "A respeito das variações linguísticas, o fenômeno que diferencia a forma como falantes de diferentes regiões do Brasil nomeiam o mesmo tubérculo (mandioca no Sudeste, aipim no Rio de Janeiro e macaxeira no Nordeste) denomina-se variação:",
    options: {
      A: "Diastrática ou sociocultural, relacionada ao estrato econômico e de instrução dos indivíduos.",
      B: "Diatópica ou geográfica/regional, associada ao espaço territorial e à origem física dos falantes.",
      C: "Diafásica ou situacional, determinada pelo grau de formalidade ou informalidade do evento.",
      D: "Diacrônica ou histórica, decorrente do envelhecimento natural do vocabulário ao longo de séculos.",
      E: "Idioletal patológica, caracterizada por desvios cognitivos individuais na formulação da sintaxe.",
    },
    correctAnswer: "B",
    justification: "A variação diatópica (do grego tópos = lugar) diz respeito às particularidades lexicais, fonéticas e prosódicas decorrentes da localização geográfica dos falantes de uma mesma língua.",
    reference: "Bagno (1999) / Labov (1972)"
  },
  {
    id: "mq_lp17_2",
    moduleId: "lp17",
    text: "Na sociolinguística moderna praticada nas universidades brasileiras, o conceito ingênuo de 'falar certo ou falar errado' é superado pelo critério científico de:",
    options: {
      A: "Purismo ortográfico compulsório, exigindo sanções penais a gírias regionais em ambiente público.",
      B: "Superioridade inata da variedade urbana paulistana em relação aos dialetos do interior.",
      C: "Eliminação voluntária das desinências verbais na escrita acadêmica formal e em leis públicas.",
      D: "Invariabilidade estrita da linguagem coloquial em contraponto às variações da redação oficial.",
      E: "Adequação linguística, avaliando a pertinência do registro adotado em face da situação de comunicação.",
    },
    correctAnswer: "E",
    justification: "A sociolinguística contemporânea demonstra que toda variedade linguística possui lógica interna estruturada. O que existe é adequação ou inadequação do registro (formal ou informal) à situação comunicativa e ao gênero textual em uso.",
    reference: "Bagno (1999) / Possenti (1996)"
  },
  {
    id: "mq_lp17_3",
    moduleId: "lp17",
    text: "A passagem histórica da forma de tratamento 'Vossa Mercê' para 'Vosmecê', culminando na forma moderna 'Você' (e na redução oral 'Cê'), constitui um exemplo inconteste de variação:",
    options: {
      A: "Diatópica, restrita a um único estado da federação brasileira.",
      B: "Diafásica, ativada unicamente em situações de solenidade fúnebre.",
      C: "Diacrônica ou histórica, refletindo a evolução temporal e natural do idioma ao longo dos séculos.",
      D: "Diastrática de jargão profissional restrito aos quadros da advocacia pública.",
      E: "Sintática passiva com supressão de complementos nominais obrigatórios.",
    },
    correctAnswer: "C",
    justification: "A variação diacrônica (de krónos = tempo) estuda as transformações fônicas, morfológicas e lexicais ocorridas na língua no transcorrer dos períodos históricos.",
    reference: "Labov (1972) / Bagno (1999)"
  },
  {
    id: "mq_lp17_4",
    moduleId: "lp17",
    text: "Assinale a alternativa que descreve com fidedignidade o papel da 'NORMA-PADRÃO' em uma instituição universitária pública como a Unicamp:",
    options: {
      A: "É o modelo de referência e equidade para documentos oficiais, relatórios técnicos e produções acadêmicas.",
      B: "É a língua materna espontânea aprendida naturalmente por todas as crianças brasileiras no lar.",
      C: "Constitui uma ferramenta arcaica e inútil que deve ser banida sumariamente dos certames de concurso.",
      D: "Permite a livre inserção de gírias e abreviações da internet em pareceres e portarias normativas.",
      E: "Serve para comprovar a inferioridade cognitiva dos falantes que utilizam variedades populares.",
    },
    correctAnswer: "A",
    justification: "A norma-padrão funciona como um parâmetro unificado de comunicação institucional e acadêmica. Ela garante clareza, uniformidade jurídica e democratização do acesso à produção científica e aos atos públicos.",
    reference: "Bechara (2009) / Possenti (1996)"
  },
  {
    id: "mq_lp17_5",
    moduleId: "lp17",
    text: "O 'Preconceito Linguístico', exaustivamente denunciado por linguistas como Marcos Bagno, manifesta-se concretamente quando:",
    options: {
      A: "O servidor redige uma certidão oficial com estrita obediência às regras de concordância da NGB.",
      B: "O professor universitário corrige os desvios gramaticais em uma dissertação de mestrado acadêmico.",
      C: "A banca examinadora anula uma questão cujo gabarito continha erro tipográfico comprovado.",
      D: "Um indivíduo é discriminado, ridicularizado ou marginalizado com base no seu sotaque ou variedade popular.",
      E: "Um dicionário registra os diferentes significados de um vocábulo de acordo com o contexto cultural.",
    },
    correctAnswer: "D",
    justification: "O preconceito linguístico é a discriminação social, elitista e estigmatizante dirigida a falantes de dialetos populares ou regionais de menor prestígio social, confundindo diferença com deficiência.",
    reference: "Bagno (1999) - 'Preconceito Linguístico: o que é, como se faz'"
  }
];
