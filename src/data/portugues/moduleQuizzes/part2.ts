import type { ModuleQuizQuestion } from './types';

export const moduleQuizzesLPPart2: ModuleQuizQuestion[] = [
  // ==========================================
  // LP07: Classes de Palavras (Morfologia) (5 questões)
  // Gabarito: Q1: B, Q2: D, Q3: A, Q4: E, Q5: C
  // ==========================================
  {
    id: "mq_lp07_1",
    moduleId: "lp07",
    text: "Em relação ao pronome oblíquo átono 'lhe' na norma-padrão da língua portuguesa, assinale a frase em que o seu emprego está plenamente CORRETO:",
    options: {
      A: "Conheci o novo bibliotecário e informei-lhe que o amava como a um irmão.",
      B: "O diretor encontrou a pesquisadora no laboratório e entregou-lhe o certificado de mérito.",
      C: "A comissão avaliou o candidato com rigor e decidiu desclassificar-lhe do certame.",
      D: "Ele avistou a orientadora na entrada do prédio e abraçou-lhe com grande entusiasmo.",
      E: "O fiscal observou o aluno em atitude suspeita e expulsou-lhe da sala de provas imediatamente."
    },
    correctAnswer: "B",
    justification: "O pronome 'lhe' exerce a função de Objeto Indireto (completa verbos transitivos indiretos regidos pela preposição 'a', equivalendo a 'a ele / a ela'). Quem entrega, entrega algo (o certificado) A alguém (lhe = à pesquisadora). Verbos como 'amar', 'desclassificar', 'abraçar' e 'expulsar' são transitivos diretos, exigindo 'o/a' e nunca 'lhe'.",
    reference: "Bechara (2009) / Cunha & Cintra (2001)"
  },
  {
    id: "mq_lp07_2",
    moduleId: "lp07",
    text: "Na frase: 'A jovem bibliotecária parecia MEIO cansada diante de BASTANTES tarefas acumuladas', as palavras destacadas classificam-se, respectivamente, como:",
    options: {
      A: "Numeral fracionário flexionado em grau e pronome demonstrativo com função de adjunto adnominal.",
      B: "Adjetivo qualificativo invariável e advérbio de intensidade com terminação morfológica regular.",
      C: "Substantivo comum biforme e conjunção subordinativa causal com valor de conformidade textual.",
      D: "Advérbio de intensidade (invariável) e pronome indefinido (variável no plural concordando com tarefas).",
      E: "Preposição acidental de modo e adjetivo explicativo restrito aos cânones da literatura barroca."
    },
    correctAnswer: "D",
    justification: "'Meio' equivale a 'um pouco' e modifica o adjetivo 'cansada', sendo, portanto, advérbio (invariável). Já 'bastantes' equivale a 'muitas' e determina o substantivo 'tarefas', flexionando-se no plural como pronome indefinido adjetivo.",
    reference: "Cunha & Cintra (2001) - 'Nova Gramática do Português Contemporâneo'"
  },
  {
    id: "mq_lp07_3",
    moduleId: "lp07",
    text: "O fenômeno mórfico da 'derivação imprópria' (ou conversão funcional) ocorre formalmente quando uma palavra muda de classe sem sofrer acréscimo ou supressão de afixos. Assinale o período em que se verifica esse processo:",
    options: {
      A: "O olhar dos avaliadores intimidou os concorrentes durante a arguição pública.",
      B: "A encadernação do volume secular foi restaurada com materiais biodegradáveis.",
      C: "Os estudantes caminharam apressadamente pelas alamedas arborizadas do campus.",
      D: "A infelicidade do funcionário decorria do atraso crônico na publicação da portaria.",
      E: "Inúmeros candidatos compareceram aos locais de prova munidos de caneta transparente."
    },
    correctAnswer: "A",
    justification: "Em 'O olhar...', o vocábulo 'olhar' (originalmente um verbo no infinitivo) foi substantivado pela presença do artigo determinante 'o', caracterizando um caso autêntico de derivação imprópria.",
    reference: "Bechara (2009) - 'Moderna Gramática Portuguesa'"
  },
  {
    id: "mq_lp07_4",
    moduleId: "lp07",
    text: "Quanto ao emprego dos pronomes pessoais e preposições na norma culta, assinale a opção inteiramente livre de erros:",
    options: {
      A: "Não há desavenças nem segredos entre eu e você neste departamento.",
      B: "O coordenador trouxe estes relatórios técnicos para mim assinar hoje.",
      C: "O diretor solicitou para mim verificar as inconsistências do balanço anual.",
      D: "Deixe este processo administrativo comigo para mim analisar em casa.",
      E: "Entre mim e ele sempre existiu grande respeito e cooperação mútua."
    },
    correctAnswer: "E",
    justification: "Após preposições como 'entre', empregam-se os pronomes oblíquos tônicos ('entre mim e ele', 'entre mim e você'). Dizer 'entre eu e você' é erro crasso. Por outro lado, usa-se 'eu' quando for sujeito de verbo no infinitivo ('para eu assinar', 'para eu analisar'), e nunca 'para mim assinar'.",
    reference: "Rocha Lima (2011) / Bechara (2009)"
  },
  {
    id: "mq_lp07_5",
    moduleId: "lp07",
    text: "Considere as frases: I. 'Era um homem pobre'; II. 'Era um pobre homem'. Sob a ótica morfossintática e semântica, a mudança de posição do adjetivo acarreta:",
    options: {
      A: "A transformação obrigatória do adjetivo em pronome demonstrativo na segunda ocorrência.",
      B: "A anulação gramatical da concordância de gênero entre os termos constituintes do sintagma.",
      C: "A alteração de sentido de desprovido de dinheiro (I) para desafortunado/digno de pena (II).",
      D: "A necessidade de inserção de hífen segundo as regras do Novo Acordo Ortográfico vigente.",
      E: "O deslocamento funcional do termo para a categoria dos advérbios de modo circunstanciais."
    },
    correctAnswer: "C",
    justification: "A anteposição do adjetivo ao substantivo desloca o sentido de uma caracterização objetiva/econômica ('homem pobre' = sem recursos financeiros) para uma valoração subjetiva/afetiva ('pobre homem' = coitado, infeliz, digno de compaixão).",
    reference: "Cunha & Cintra (2001)"
  },

  // ==========================================
  // LP08: Adequação Vocabular, Clareza e Concisão (5 questões)
  // Gabarito: Q1: E, Q2: A, Q3: C, Q4: B, Q5: D
  // ==========================================
  {
    id: "mq_lp08_1",
    moduleId: "lp08",
    text: "Em redações oficiais e documentos universitários formais, a concisão é atributo essencial. Assinale a alternativa que substitui com máxima concisão e correção a fórmula prolixa: 'Venho por meio deste expediente levar ao conhecimento de Vossa Senhoria o fato real de que o prazo encerrou':",
    options: {
      A: "Por meio do presente memorando esclareço a esta reitoria que o prazo findou-se.",
      B: "Faço uso desta via documental para noticiar a consumação do término do referido prazo.",
      C: "Levo a efeito uma comunicação urgente no sentido de esclarecer que o prazo acabou.",
      D: "Sirvo-me destas linhas protocolares para cientificar que as datas expiraram no momento.",
      E: "Comunico a Vossa Senhoria que o prazo encerrou."
    },
    correctAnswer: "E",
    justification: "O Manual de Redação da Presidência da República condena bordões como 'Venho por meio deste...' e recomenda fórmulas diretas e concisas como 'Comunico a Vossa Senhoria que...'. A opção E transmite a totalidade da mensagem com o menor número de palavras.",
    reference: "Manual de Redação da Presidência da República (2018)"
  },
  {
    id: "mq_lp08_2",
    moduleId: "lp08",
    text: "Assinale a alternativa que apresenta vício de linguagem caracterizado por 'pleonasmo vicioso' (redundância semântica condenável na norma culta):",
    options: {
      A: "A diretoria pretende criar novas estratégias inéditas para otimizar os fluxos da biblioteca.",
      B: "O técnico examinou detidamente os manuscritos para localizar pequenas falhas de encadernação.",
      C: "Os pesquisadores apresentaram relatórios consistentes embasados em evidências empíricas.",
      D: "A reunião extraordinária da congregação ocorreu com a presença da maioria dos docentes.",
      E: "A comissão deliberou sobre os parâmetros de pontuação que serão aplicados no próximo concurso."
    },
    correctAnswer: "A",
    justification: "Dizer 'criar novas estratégias inéditas' contém duplo pleonasmo vicioso: quem cria, já faz algo novo; e algo novo já é inédito. Outros pleonasmos clássicos: 'elo de ligação', 'subir para cima', 'monopólio exclusivo'.",
    reference: "Garcia (1967) / Bechara (2009)"
  },
  {
    id: "mq_lp08_3",
    moduleId: "lp08",
    text: "O emprego de 'palavras-coringa' (como coisa, fazer, ter, negócio) enfraquece a precisão vocabular do texto formal. Assinale a frase que emprega vocábulo de máxima precisão técnica e culta:",
    options: {
      A: "A preservação de obras raras é uma coisa muito delicada que exige paciência dos técnicos.",
      B: "Na biblioteca central da universidade tinha muitos alunos consultando os computadores.",
      C: "A comissão permanente elaborou um parecer conclusivo sobre a viabilidade orçamentária.",
      D: "O servidor colocou os argumentos na mesa durante a conversa que teve com o chefe do setor.",
      E: "O departamento viu o problema e resolveu dar um jeito nas pendências das certidões."
    },
    correctAnswer: "C",
    justification: "A opção C utiliza precisão terminológica irretocável ('elaborou um parecer conclusivo sobre a viabilidade...'). As opções A ('coisa'), B ('tinha' no lugar de havia), D ('colocou os argumentos') e E ('viu o problema', 'dar um jeito') trazem linguagem frouxa, vaga e coloquial.",
    reference: "Manual de Redação da Presidência da República (2018)"
  },
  {
    id: "mq_lp08_4",
    moduleId: "lp08",
    text: "A 'cacofonia' é o defeito acústico que ocorre pelo encontro de sílabas que formam palavras ridículas ou obscenas ao serem lidas. Assinale a frase que ilustra esse vício:",
    options: {
      A: "A comissão encarregada da apuração dos votos divulgou os resultados parciais ontem à noite.",
      B: "O fiscal observou atentamente a boca dela enquanto a candidata cochichava durante a prova.",
      C: "A realização contínua de simulados aperfeiçoa o domínio técnico das matérias do edital.",
      D: "Todos os documentos enviados pela secretaria foram conferidos e arquivados na pasta segura.",
      E: "O coordenador agradeceu calorosamente o apoio irrestrito dos servidores durante o congresso."
    },
    correctAnswer: "B",
    justification: "A junção de 'boca dela' gera o som de 'cadela' (som chulo involuntário e grosseiro, típico vício de cacofonia). Para evitar, deve-se redigir 'sua boca' ou 'a boca da candidata'.",
    reference: "Garcia (1967) - 'Comunicação em Prosa Moderna'"
  },
  {
    id: "mq_lp08_5",
    moduleId: "lp08",
    text: "Assinale a alternativa que evita simultaneamente clichês surrados, ambiguidade e linguagem inadequada em correspondência universitária:",
    options: {
      A: "Fechamos com chave de ouro o ano letivo e vamos correr atrás do prejuízo no próximo semestre.",
      B: "O chefe pediu ao funcionário para assinar a lista em sua sala antes que fosse tarde demais.",
      C: "A nível de reitoria, a situação está preta devido à falta de verbas federais para os campi.",
      D: "Concluímos os trabalhos do período e envidaremos esforços para superar as metas estipuladas.",
      E: "No mundo globalizado de hoje em dia, quem não colocar a mão na massa ficará a ver navios."
    },
    correctAnswer: "D",
    justification: "A opção D é sóbria, elegante, concisa e livre de ambiguidades e chavões. As outras trazem clichês condenados ('chave de ouro', 'correr atrás do prejuízo', 'a nível de', 'mão na massa', 'a ver navios') ou ambiguidade possessiva em 'sua sala'.",
    reference: "Manual de Redação da Presidência da República (2018)"
  },

  // ==========================================
  // LP09: Conjugação Verbal e Emprego de Tempos e Modos (5 questões)
  // Gabarito: Q1: C, Q2: E, Q3: B, Q4: A, Q5: D
  // ==========================================
  {
    id: "mq_lp09_1",
    moduleId: "lp09",
    text: "Assinale a alternativa em que a conjugação verbal e a correlação entre tempos e modos obedecem com perfeição às normas da língua culta:",
    options: {
      A: "Se o governo manter os investimentos em educação básica, os índices melhorariam logo.",
      B: "Quando você ver o professor na biblioteca, entregue-lhe este ofício da congregação.",
      C: "Se a comissão propuser novas alterações no edital, os prazos serão estendidos.",
      D: "Caso o diretor intervisse no caso antes da reunião, nenhum atrito teria ocorrido.",
      E: "Se nós pormos mais livros nesta estante antiga de madeira, ela quebraria com o peso."
    },
    correctAnswer: "C",
    justification: "O verbo 'propor' deriva de 'pôr'. Seu futuro do subjuntivo é 'propuser' (e não 'propor'). A correlação entre o futuro do subjuntivo ('se propuser') e o futuro do presente ('serão estendidos') é impecável. Erros das outras: 'mantiver' (e não manter), 'vir' (futuro do subjuntivo de ver), 'interviesse' (derivado de vir) e 'pusermos' (e não pormos).",
    reference: "Bechara (2009) / Rocha Lima (2011)"
  },
  {
    id: "mq_lp09_2",
    moduleId: "lp09",
    text: "O verbo HAVER, quando empregado com o sentido de existir ou indicando tempo decorrido, é impessoal. Assinale a opção que atende estritamente à norma-padrão:",
    options: {
      A: "Houveram muitas dúvidas durante a aplicação do simulado no auditório da faculdade.",
      B: "Vão haver novas oportunidades de estágio para alunos de graduação neste semestre.",
      C: "Fazem três meses que a diretoria homologou o resultado do concurso público.",
      D: "Se não houvessem tantos empecilhos jurídicos, as obras já teriam sido inauguradas.",
      E: "Deve haver razões plausíveis para o cancelamento do seminário de bibliometria."
    },
    correctAnswer: "E",
    justification: "Em locuções verbais em que o verbo principal é 'haver' impessoal (sentido de existir), o verbo auxiliar ('deve') herda a impessoalidade e fica obrigatoriamente no singular ('Deve haver razões'). Dizer 'Houveram', 'Vão haver', 'Fazem três meses' e 'houvessem' são erros graves.",
    reference: "Cunha & Cintra (2001) / Bechara (2009)"
  },
  {
    id: "mq_lp09_3",
    moduleId: "lp09",
    text: "Considere as orações: I. 'Ontem ele não PÔDE comparecer à aula'; II. 'Hoje ele PODE assistir à aula'. A respeito dos verbos destacados, é correto afirmar que:",
    options: {
      A: "O acento circunflexo em I decorre de uma proparoxítona relativa não prevista no acordo.",
      B: "O acento circunflexo em I é um acento diferencial obrigatório de tempo verbal pretérito.",
      C: "O Novo Acordo Ortográfico aboliu compulsoriamente o acento gráfico na forma verbal da frase I.",
      D: "A forma verbal em II deveria receber acento agudo para assinalar a presença de vogal aberta.",
      E: "Ambas as formas constituem exemplos de verbos defectivos que não admitem pessoa gramatical."
    },
    correctAnswer: "B",
    justification: "O acento circunflexo em 'pôde' (pretérito perfeito do indicativo) é um dos raros acentos diferenciais expressamente mantidos pelo Acordo Ortográfico de 1990 para distingui-lo de 'pode' (presente do indicativo).",
    reference: "Acordo Ortográfico de 1990 / VOLP (2021)"
  },
  {
    id: "mq_lp09_4",
    moduleId: "lp09",
    text: "Na passagem: 'Naquela época, nós estudávamos na antiga biblioteca todos os fins de tarde', a forma verbal em destaque expressa aspecto de:",
    options: {
      A: "Ação habitual, contínua e repetida no pretérito (Pretérito Imperfeito do Indicativo).",
      B: "Ação pontual, concluída e delimitada em instante único no passado recente.",
      C: "Hipótese condicionada a evento futuro com valor semântico de certeza absoluta.",
      D: "Ação passada anterior a outro evento igualmente pretérito (Pretérito Mais-que-perfeito).",
      E: "Ordem formal atenuada por polidez cortesã direcionada a superiores hierárquicos."
    },
    correctAnswer: "A",
    justification: "O Pretérito Imperfeito do Indicativo ('estudávamos') é o tempo verbal por excelência da duração, do hábito, do processo continuado ou da rotina no passado, diferindo do Pretérito Perfeito ('estudamos ontem'), que é pontual e instantâneo.",
    reference: "Bechara (2009) - 'Moderna Gramática Portuguesa'"
  },
  {
    id: "mq_lp09_5",
    moduleId: "lp09",
    text: "Assinale a alternativa em que a conjugação dos verbos no modo imperativo respeita a uniformidade de tratamento (sem misturar tu e você):",
    options: {
      A: "Vem para a Unicamp e traga seus documentos para efetivar a sua matrícula.",
      B: "Estuda bastante todos os dias e não desista diante das primeiras dificuldades da vida.",
      C: "Não te preocupes com o resultado da prova e faça o melhor que você puder hoje.",
      D: "Venha para a Unicamp e traga seus documentos para efetivar a sua matrícula.",
      E: "Faze o teu relatório agora mesmo e guarde suas anotações no armário de aço."
    },
    correctAnswer: "D",
    justification: "Na opção D, ambas as formas verbais ('Venha' e 'traga') estão rigorosamente na 3ª pessoa do singular (você), oriundas do Presente do Subjuntivo, preservando a coerência pronominal ('sua matrícula'). As opções A, B, C e E misturam 'tu' (2ª pessoa) e 'você' (3ª pessoa) de forma viciosa.",
    reference: "Cunha & Cintra (2001)"
  },

  // ==========================================
  // LP10: Uso do Sinal Indicativo de Crase (5 questões)
  // Gabarito: Q1: B, Q2: D, Q3: A, Q4: E, Q5: C
  // ==========================================
  {
    id: "mq_lp10_1",
    moduleId: "lp10",
    text: "Assinale a frase em que o uso do acento grave indicativo de crase é expressamente PROIBIDO pela norma-padrão:",
    options: {
      A: "O pesquisador compareceu pontualmente à reunião convocada pela diretoria da faculdade.",
      B: "A equipe técnica começará a catalogar as novas obras doadas a partir da próxima semana.",
      C: "Todos os inscritos deverão comparecer ao anfiteatro no campus às 14 horas de amanhã.",
      D: "A professora referiu-se àquela magnífica tese defendida pelo doutorando no mês passado.",
      E: "O motorista do reitor virou à esquerda na rotatória principal para acessar o prédio da DAC."
    },
    correctAnswer: "B",
    justification: "Em 'a partir', a palavra 'partir' é um verbo no infinitivo. Não existe crase antes de verbos, pois verbos não têm gênero feminino nem aceitam artigo. Dizer 'à partir de' é erro clássico em provas!",
    reference: "Cunha & Cintra (2001) / Bechara (2009)"
  },
  {
    id: "mq_lp10_2",
    moduleId: "lp10",
    text: "Assinale a alternativa em que o uso do sinal indicativo de crase é puramente FACULTATIVO:",
    options: {
      A: "O candidato respondeu às questões de múltipla escolha com extraordinária rapidez.",
      B: "Comprei os livros didáticos necessários à vista e obtive excelente desconto da editora.",
      C: "Fizemos referência a leis antigas promulgadas durante a Primeira República no Brasil.",
      D: "O autor dedicou a publicação a sua antiga professora de teoria da informação da universidade.",
      E: "O auditório permaneceu lotado desde as oito horas da manhã até o final da conferência."
    },
    correctAnswer: "D",
    justification: "Antes de pronomes possessivos femininos no singular ('sua', 'minha', 'tua'), o artigo é facultativo. Logo, o uso da crase é opcional: tanto 'a sua professora' quanto 'à sua professora' são corretos.",
    reference: "Bechara (2009) - 'Moderna Gramática Portuguesa'"
  },
  {
    id: "mq_lp10_3",
    moduleId: "lp10",
    text: "Considere a frase: 'O conferencista dirigiu-se _____ salas de estudos, disposta _____ prestar auxílio _____ todas as alunas'. As lacunas devem ser preenchidas, correta e respectivamente, por:",
    options: {
      A: "às — a — a",
      B: "as — à — à",
      C: "às — à — a",
      D: "as — a — às",
      E: "às — à — às"
    },
    correctAnswer: "A",
    justification: "1ª lacuna: Quem se dirige, dirige-se 'a' + artigo plural 'as salas' = às salas (crase obrigatória); 2ª lacuna: antes do verbo 'prestar' não ocorre crase = a prestar; 3ª lacuna: antes do pronome indefinido 'todas' não ocorre crase = a todas.",
    reference: "Rocha Lima (2011) / Bechara (2009)"
  },
  {
    id: "mq_lp10_4",
    moduleId: "lp10",
    text: "No que concerne ao uso da crase com nomes de cidades e localidades geográficas, assinale a opção inteiramente correta:",
    options: {
      A: "No próximo feriado acadêmico, os alunos do centro acadêmico irão à Campinas.",
      B: "Nas férias de verão, a comissão de pós-graduação viajou à Curitiba para um congresso.",
      C: "O professor emérito retornou feliz à Roma dos seus antepassados imperiais e renascentistas.",
      D: "Todos os anos, centenas de pesquisadores estrangeiros deslocam-se à Brasília.",
      E: "A delegação de estudantes paulistas dirigiu-se à Bahia para participar do simpósio."
    },
    correctAnswer: "E",
    justification: "Aplica-se o mnemônico da volta: 'Se vou a e volto da, crase no a; se vou a e volto de, crase pra quê?'. Volta-se DA Bahia (admite artigo feminino 'a', logo: 'vou à Bahia' tem crase!). Volta-se DE Campinas, DE Curitiba, DE Brasília (sem artigo, logo sem crase). Na opção C, 'Roma' está qualificada ('dos seus antepassados'), mas o verbo 'retornou' rege preposição 'de' e não 'a'.",
    reference: "Cunha & Cintra (2001)"
  },
  {
    id: "mq_lp10_5",
    moduleId: "lp10",
    text: "O sinal indicativo de crase é OBRIGATÓRIO em qual das alternativas abaixo, devido à presença de locução adverbial feminina?",
    options: {
      A: "O rapaz comprou um lindo automóvel novo financiado a longo prazo pela instituição.",
      B: "Os turistas caminhavam a passos lentos observando as fachadas coloniais dos sobrados.",
      C: "A equipe de plantonistas do hospital atendeu os feridos do acidente às pressas ontem.",
      D: "Após o almoço, os amigos resolveram fazer um descontraído passeio a cavalo no sítio.",
      E: "A secretária redigiu a ata do conselho a lápis no rascunho antes da digitação formal."
    },
    correctAnswer: "C",
    justification: "'Às pressas' é uma locução adverbial feminina de modo, exigindo compulsoriamente o acento grave indicativo de crase. Expressões como 'a longo prazo', 'a passos lentos', 'a cavalo' e 'a lápis' são masculinas e não admitem crase.",
    reference: "Bechara (2009) / Rocha Lima (2011)"
  },

  // ==========================================
  // LP11: Concordância Nominal e Verbal (5 questões)
  // Gabarito: Q1: A, Q2: E, Q3: C, Q4: B, Q5: D
  // ==========================================
  {
    id: "mq_lp11_1",
    moduleId: "lp11",
    text: "Em relação à concordância verbal com a partícula 'SE', assinale a frase perfeitamente correta segundo a norma culta:",
    options: {
      A: "Analisaram-se os dados laboratoriais apresentados pelos pós-graduandos da Unicamp.",
      B: "Precisam-se de novos servidores públicos qualificados para o atendimento ao usuário.",
      C: "Tratam-se de assuntos de extrema relevância acadêmica para a comunidade universitária.",
      D: "Confiam-se em pessoas dedicadas e éticas para o gerenciamento dos recursos públicos.",
      E: "Assistem-se a belos espetáculos culturais no teatro universitário nos fins de semana."
    },
    correctAnswer: "A",
    justification: "Em 'Analisaram-se os dados', o verbo 'analisar' é Transitivo Direto (VTD). A partícula 'se' atua como partícula apassivadora, tornando 'os dados laboratoriais' o sujeito paciente no plural, com o qual o verbo concorda obrigatoriamente. Nas opções B, C, D e E, os verbos são Transitivos Indiretos (VTI) com preposição, logo o 'se' é índice de indeterminação do sujeito e o verbo fica OBRIGATORIAMENTE no singular!",
    reference: "Cunha & Cintra (2001) / Bechara (2009)"
  },
  {
    id: "mq_lp11_2",
    moduleId: "lp11",
    text: "Considere as frases sobre concordância nominal: I. 'As minutas do edital seguem ANEXAS ao processo'; II. 'As minutas seguem EM ANEXO'; III. 'Ela MESMA conferiu a lista de presença'. Está correto o que se afirma em:",
    options: {
      A: "Apenas I está gramaticalmente correta segundo os preceitos da Nomenclatura Gramatical.",
      B: "Apenas II e III obedecem às regras normativas de flexão estabelecidas pelas bancas.",
      C: "Apenas I e II estão corretas, pois o pronome de reforço feminino em III é invariável.",
      D: "Todas as frases contêm desvios graves de concordância nominal previstos nos manuais.",
      E: "Todas as frases I, II e III estão inteiramente corretas segundo a norma-padrão da língua."
    },
    correctAnswer: "E",
    justification: "'Anexo' é adjetivo e concorda com o substantivo feminino plural ('anexas as minutas'). A locução adverbial 'em anexo' é 100% invariável ('seguem em anexo'). O pronome 'mesma' concorda com a pessoa ('ela mesma conferiu'). Portanto, todas as frases estão perfeitas.",
    reference: "Rocha Lima (2011) / Bechara (2009)"
  },
  {
    id: "mq_lp11_3",
    moduleId: "lp11",
    text: "Assinale a alternativa correta quanto à concordância com a expressão 'É PROIBIDO / É PROIBIDA':",
    options: {
      A: "É proibido a entrada de pessoas não autorizadas na sala de servidores do centro de dados.",
      B: "É proibida entrada de pessoas não autorizadas na sala de servidores do centro de dados.",
      C: "É proibida a entrada de pessoas não autorizadas na sala de servidores do centro de dados.",
      D: "São proibidos a entrada e o acesso aos armários privativos durante os finais de semana.",
      E: "É proibidas a presença e a circulação de veículos pesados no pátio interno da reitoria."
    },
    correctAnswer: "C",
    justification: "Regra clássica: se o substantivo vier acompanhado de artigo determinante ('A entrada'), a concordância é obrigatória no feminino: 'É proibida a entrada'. Se não houver artigo, fica invariável no masculino singular: 'É proibido entrada'.",
    reference: "Bechara (2009) - 'Moderna Gramática Portuguesa'"
  },
  {
    id: "mq_lp11_4",
    moduleId: "lp11",
    text: "Em períodos com sujeito composto posposto ao verbo, a norma culta autoriza duas construções de concordância. Assinale a opção que ilustra corretamente essa duplicidade:",
    options: {
      A: "Faltou os técnicos e os professores na sessão de abertura do ano letivo da faculdade.",
      B: "Chegou o professor e os alunos / Chegaram o professor e os alunos ao anfiteatro.",
      C: "Compareceram na reunião apenas o coordenador e o assistente de gabinete do reitor.",
      D: "Houvem debates acalorados e discussões técnicas durante a plenária extraordinária.",
      E: "Foram anunciado as medidas de contenção orçamentária pelo diretor administrativo."
    },
    correctAnswer: "B",
    justification: "Quando o sujeito composto vem posposto ao verbo, o verbo pode ir para o plural concordando com a totalidade ('Chegaram o professor e os alunos') ou concordar com o núcleo mais próximo ('Chegou o professor e os alunos'). Ambas são corretas.",
    reference: "Cunha & Cintra (2001)"
  },
  {
    id: "mq_lp11_5",
    moduleId: "lp11",
    text: "Assinale a alternativa que apresenta concordância verbal em conformidade com as regras para expressões partitivas ('a maioria de', 'grande parte de'):",
    options: {
      A: "A maioria dos candidatos desobedeceram as normas expressas no edital do concurso.",
      B: "Grande parte dos funcionários recusaram-se a participar do processo eleitoral interno.",
      C: "A metade dos livros doados foram descartados por conter colônias ativas de fungos.",
      D: "A maioria dos inscritos compareceu ao exame / A maioria dos inscritos compareceram ao exame.",
      E: "Uma porção considerável dos alunos reclamou das novas diretrizes da biblioteca geral."
    },
    correctAnswer: "D",
    justification: "Com expressões partitivas seguidas de substantivo plural ('A maioria dos inscritos...'), a concordância é facultativa: o verbo pode ficar no singular (concordando com o núcleo 'a maioria') ou ir para o plural (concordando com o especificador 'inscritos'). A opção D retrata essa facultatividade oficial.",
    reference: "Bechara (2009) / Rocha Lima (2011)"
  },

  // ==========================================
  // LP12: Período Simples e Funções Sintáticas (5 questões)
  // Gabarito: Q1: C, Q2: A, Q3: E, Q4: B, Q5: D
  // ==========================================
  {
    id: "mq_lp12_1",
    moduleId: "lp12",
    text: "Considere as orações: I. 'A dedicação do aluno surpreendeu o corpo docente'; II. 'A resposta ao aluno foi divulgada pela secretaria'. Os termos sublinhados exercem, respectivamente, a função sintática de:",
    options: {
      A: "Complemento Nominal em ambas as frases, visto que são termos obrigatoriamente preposicionados.",
      B: "Objeto Indireto na primeira ocorrência e Adjunto Adnominal de posse na segunda oração.",
      C: "Adjunto Adnominal (sentido ativo: o aluno se dedica) e Complemento Nominal (sentido paciente).",
      D: "Agente da Passiva analítica em I e Sujeito Simples com preposição obrigatória na frase II.",
      E: "Predicativo do Sujeito composto em I e Adjunto Adverbial de destinatário na frase II."
    },
    correctAnswer: "C",
    justification: "Em I, 'do aluno' liga-se ao substantivo 'dedicação' com sentido ativo (o aluno pratica o ato de se dedicar) ➔ Adjunto Adnominal. Em II, 'ao aluno' liga-se ao substantivo 'resposta' com sentido paciente (o aluno recebe a resposta) ➔ Complemento Nominal.",
    reference: "Rocha Lima (2011) / Bechara (2009)"
  },
  {
    id: "mq_lp12_2",
    moduleId: "lp12",
    text: "Na oração: 'Faltaram aos candidatos tranquilidade e concentração durante a prova discursiva', o sujeito da forma verbal 'faltaram' é classificado como:",
    options: {
      A: "Sujeito Composto posposto, composto pelos núcleos 'tranquilidade' e 'concentração'.",
      B: "Sujeito Indeterminado, pois o verbo está na 3ª pessoa do plural sem referência contextual.",
      C: "Oração sem sujeito, visto que o verbo faltar possui natureza meteorológica impessoal.",
      D: "Sujeito Oculto desinencial, representado pelo pronome oblíquo átono na forma de objeto.",
      E: "Objeto Indireto preposicionado que sofreu transposição sintática para núcleo agente."
    },
    correctAnswer: "A",
    justification: "Colocando a oração na ordem direta: 'Tranquilidade e concentração [sujeito composto] faltaram aos candidatos [objeto indireto]'. O sujeito nunca é preposicionado; o verbo concordou no plural com seus dois núcleos pospostos.",
    reference: "Cunha & Cintra (2001) - 'Nova Gramática do Português Contemporâneo'"
  },
  {
    id: "mq_lp12_3",
    moduleId: "lp12",
    text: "A respeito do termo sintático 'VOCATIVO', é correto afirmar segundo as regras da sintaxe tradicional que ele:",
    options: {
      A: "Exerce a função essencial de completar o sentido de verbos transitivos diretos na voz passiva.",
      B: "Concorda obrigatoriamente em gênero e número com o predicativo do sujeito na oração principal.",
      C: "Constitui um termo integrante da oração, não podendo ser omitido sem quebrar a gramática.",
      D: "Liga-se ao verbo por meio de preposições essenciais que determinam a regência circunstancial.",
      E: "É um termo independente que serve para chamar ou interpelar o interlocutor, isolado por vírgula."
    },
    correctAnswer: "E",
    justification: "O vocativo é um termo sintático independente: não pertence ao sujeito nem ao predicado. Serve para chamar ou interpelar o destinatário da mensagem e vem obrigatoriamente isolado por vírgula ('Candidatos, iniciem a prova').",
    reference: "Bechara (2009) - 'Moderna Gramática Portuguesa'"
  },
  {
    id: "mq_lp12_4",
    moduleId: "lp12",
    text: "Na frase: 'A comissão julgadora considerou a proposta da universidade EXCELENTE', o termo destacado exerce a função sintática de:",
    options: {
      A: "Adjunto Adnominal restritivo, delimitando permanentemente o substantivo feminino singular.",
      B: "Predicativo do Objeto, qualificando o objeto direto 'a proposta' por atribuição do verbo.",
      C: "Complemento Nominal oracional, completando o sentido de um adjetivo de valor passivo.",
      D: "Predicativo do Sujeito, qualificando o núcleo simples 'comissão' por meio de verbo de ligação.",
      E: "Objeto Direto pleonástico, reiterando termo antecedente para conferir ênfase expressiva."
    },
    correctAnswer: "B",
    justification: "'Excelente' qualifica o objeto direto ('a proposta da universidade') através do julgamento feito pelo sujeito ('considerou'). Trata-se da clássica função de Predicativo do Objeto.",
    reference: "Rocha Lima (2011) / Cunha & Cintra (2001)"
  },
  {
    id: "mq_lp12_5",
    moduleId: "lp12",
    text: "Assinale a alternativa que apresenta um verbo intransitivo (VI):",
    options: {
      A: "O diretor assinou a portaria normativa na manhã de terça-feira.",
      B: "A pesquisadora obedeceu fielmente às orientações do comitê de ética.",
      C: "O comitê ofereceu aos alunos uma bolsa de estudos no exterior.",
      D: "O pássaro voou suavemente sobre os eucaliptos do campus da universidade.",
      E: "O servidor necessitava de auxílio técnico para concluir a catalogação."
    },
    correctAnswer: "D",
    justification: "O verbo 'voar' tem sentido completo em si mesmo, não exigindo objeto direto nem indireto para fechar sua significação (é intransitivo). Os termos 'suavemente' e 'sobre os eucaliptos...' são adjuntos adverbiais de modo e lugar.",
    reference: "Cunha & Cintra (2001)"
  }
];
