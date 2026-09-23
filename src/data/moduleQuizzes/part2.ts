import type { ModuleQuizQuestion } from './types';

export const moduleQuizzesPart2: ModuleQuizQuestion[] = [
  // ==========================================
  // MÓDULO 09: Competência Informacional (Information Literacy)
  // ==========================================
  {
    id: "mq_m09_1",
    moduleId: "m09",
    text: "O Framework for Information Literacy for Higher Education, aprovado pela Association of College and Research Libraries (ACRL) em 2015, substituiu a visão prescritiva de padrões rígidos por seis quadros conceituais centrais. Um desses quadros afirma que os pesquisadores devem compreender que a credibilidade de uma fonte não é absoluta nem estática, mas construída socialmente e dependente da comunidade de prática. Trata-se do quadro:",
    options: {
      A: "A Pesquisa como Investigação Aberta.",
      B: "A Autoridade é Construída e Contextual.",
      C: "A Informação Possui Valor Comercial.",
      D: "A Busca como Exploração Estratégica.",
      E: "A Produção de Dados como Protocolo Rígido."
    },
    correctAnswer: "B",
    justification: "O quadro 'A Autoridade é Construída e Contextual' (Authority Is Constructed and Contextual) ensina que a autoridade de uma informação depende do contexto da necessidade informacional e das normas da comunidade: a autoridade de um artigo científico difere da autoridade do relato de um líder comunitário ou de um paciente, exigindo análise crítica das vozes representadas.",
    reference: "ACRL (2015) - 'Framework for Information Literacy for Higher Education'"
  },
  {
    id: "mq_m09_2",
    moduleId: "m09",
    text: "Nas grandes declarações internacionais promovidas pela UNESCO e pela IFLA sobre Competência Informacional, as conferências de Praga (2003) e Alexandria (2005) marcaram época ao definirem que a Competência Informacional é:",
    options: {
      A: "Uma disciplina técnica de computação restrita aos alunos dos cursos de engenharia de software.",
      B: "Um direito humano básico fundamental para o aprendizado ao longo de toda a vida e para a participação cívica democrática na Sociedade da Informação.",
      C: "A capacidade exclusiva de memorizar normas de catalogação.",
      D: "Uma exigência comercial imposta por editoras internacionais para a liberação de senhas de acesso.",
      E: "Uma habilidade substituída integralmente pela inteligência artificial generativa."
    },
    correctAnswer: "B",
    justification: "A Declaração de Praga ('Rumo a uma Sociedade Letrada em Informação', 2003) e a Declaração de Alexandria ('Faróis da Sociedade da Informação', 2005) consagraram a Information Literacy no patamar de direito humano fundamental, vital para o desenvolvimento social, cidadania e educação continuada (lifelong learning).",
    reference: "UNESCO / NCLIS (2003, 2005) - Declarações de Praga e Alexandria"
  },
  {
    id: "mq_m09_3",
    moduleId: "m09",
    text: "Em concursos públicos para bibliotecários universitários, é recorrente a diferenciação conceitual entre 'Alfabetização Digital' (Digital Literacy) e 'Competência Informacional' (Information Literacy). Assinale a afirmativa que expressa a relação correta entre esses conceitos:",
    options: {
      A: "Ambos os termos são rigorosamente sinônimos e tratam apenas de saber digitar no computador e instalar softwares de escritório.",
      B: "A alfabetização digital diz respeito primordialmente ao domínio instrumental das ferramentas e tecnologias (computadores, navegadores, hardware), enquanto a competência informacional envolve habilidades cognitivas e atitudinais de saber reconhecer a necessidade de informação, localizar, avaliar criticamente a veracidade e o valor das fontes e aplicar a informação eticamente.",
      C: "A competência informacional dispensa o uso de qualquer tecnologia digital, aplicando-se apenas a manuscritos medievais.",
      D: "A alfabetização digital é uma habilidade intelectual superior que engloba a competência informacional.",
      E: "A competência informacional limita-se a evitar multas no balcão de empréstimo da biblioteca."
    },
    correctAnswer: "B",
    justification: "Saber manusear o computador ou smartphone é letramento digital instrumental. A Competência Informacional (Information Literacy) é uma competência intelectual e crítica: envolve julgamento epistemológico, detecção de desinformação/fake news, raciocínio investigativo e respeito ético à autoria.",
    reference: "Campello (2003) - 'O movimento da competência informacional'"
  },
  {
    id: "mq_m09_4",
    moduleId: "m09",
    text: "O modelo britânico dos 'Sete Pilares da Competência Informacional' (Seven Pillars of Information Literacy), concebido pelo consórcio SCONUL (Society of College, National and University Libraries), organiza a trajetória do estudante em um ciclo de desenvolvimento de aptidões composto pelos pilares:",
    options: {
      A: "Comprar, Tombar, Etiquetar, Emprestar, Cobrar, Renovar e Devolver.",
      B: "Identificar, Dimensionar, Planejar, Reunir, Avaliar, Gerenciar e Apresentar a informação.",
      C: "Líder, Diretório, Tag, Indicador, Subcampo, Ponto e Traço.",
      D: "Hardware, Software, Peopleware, Firmware, Netware, Malware e Spyware.",
      E: "Leitura, Cópia, Cola, Tradução, Impressão, Encadernação e Arquivo."
    },
    correctAnswer: "B",
    justification: "O consagrado modelo SCONUL estrutura a competência em sete pilares progressivos: Identify (identificar a necessidade), Scope (dimensionar o conhecimento existente), Plan (planejar a estratégia), Gather (reunir as fontes), Evaluate (avaliar criticamente os dados), Manage (gerenciar organizando referências) e Present (sintetizar e comunicar eticamente).",
    reference: "SCONUL (2011) - 'The SCONUL Seven Pillars of Information Literacy'"
  },
  {
    id: "mq_m09_5",
    moduleId: "m09",
    text: "A dimensão ética da competência informacional assume papel de destaque nas bibliotecas universitárias da Unicamp e de outras instituições de ponta. O plágio por 'Paráfrase Indevida' ocorre quando o estudante:",
    options: {
      A: "Cita literalmente o texto entre aspas com indicação exata de autor, ano e página.",
      B: "Reescreve as ideias do autor original com suas próprias palavras (ou trocando sinônimos pontuais), mas omite deliberadamente a citação da fonte original, apropriando-se indevidamente do mérito intelectual do pesquisador.",
      C: "Publica seu próprio artigo em um repositório institucional em regime de Acesso Aberto.",
      D: "Pede orientação ao bibliotecário de referência sobre como preencher a ficha catalográfica.",
      E: "Utiliza um software de gestão de referências para formatar suas citações."
    },
    correctAnswer: "B",
    justification: "Paráfrase legítima exige reescrever a ideia com citação expressa da fonte. A paráfrase indevida (uma das formas mais sutis e comuns de plágio) ocorre quando o autor altera levemente o vocabulário, mas 'esquece' de creditar a fonte, fazendo parecer que a ideia original é sua.",
    reference: "Krokoscz (2012) - 'Autoria e plágio: um guia para estudantes, professores, pesquisadores e editores'"
  },

  // ==========================================
  // MÓDULO 10: Estudo de Usuários e Comunidades
  // ==========================================
  {
    id: "mq_m10_1",
    moduleId: "m10",
    text: "Nos estudos de comportamento informacional e necessidades de usuários, Nice Menezes de Figueiredo (1994) enfatiza a distinção entre 'Necessidade de Informação' e 'Demanda de Informação'. Assinale a alternativa que define com exatidão a Demanda de Informação:",
    options: {
      A: "O estado interior subjetivo e inconsciente de carência que o indivíduo sente, mas que é incapaz de expressar em palavras.",
      B: "A necessidade de informação formalmente articulada, expressa e direcionada pelo usuário a um sistema ou serviço de informação (como uma consulta formulada no balcão de referência ou uma query no catálogo).",
      C: "A quantidade de livros guardados no depósito da biblioteca que nunca foram emprestados.",
      D: "O valor em reais que a universidade repassa mensalmente para o pagamento de assinaturas de bases.",
      E: "O percentual de computadores com acesso à internet disponíveis no saguão."
    },
    correctAnswer: "B",
    justification: "A necessidade (Need) é o estado de carência cognitiva interior do usuário. Nem toda necessidade vira demanda: a Demanda (Demand) é a necessidade que foi concretamente expressa, traduzida em solicitação verbal ou consulta formal dirigida ao sistema de informação.",
    reference: "Figueiredo (1994) - 'Estudos de uso e usuários da informação' / Wilson (1981)"
  },
  {
    id: "mq_m10_2",
    moduleId: "m10",
    text: "Na metodologia dos estudos de usuários sistematizada por Sanz Casado (1994), os métodos de coleta de dados são classificados em 'Métodos Diretos' e 'Métodos Indiretos'. Constitui um exemplo inequívoco de Método Indireto:",
    options: {
      A: "A aplicação de questionários estruturados aplicados pessoalmente aos alunos no saguão da biblioteca.",
      B: "A condução de entrevistas em profundidade e grupos focais com os líderes de pesquisa.",
      C: "A análise estatística dos registros automatizados de empréstimo e circulação do SIGB e a análise bibliométrica de citações das teses defendidas no campus.",
      D: "A observação direta participante do comportamento dos leitores diante das estantes.",
      E: "A realização de testes de usabilidade com gravação em vídeo das reações do usuário."
    },
    correctAnswer: "C",
    justification: "Métodos diretos envolvem a interpelação direta do usuário (questionários, entrevistas, grupos focais). Métodos indiretos analisam os vestígios, registros e comportamentos documentados sem consultar diretamente o indivíduo (estatísticas de circulação, logs de acesso ao catálogo, análise das referências citadas em teses e publicações da instituição).",
    reference: "Sanz Casado (1994) - 'Manual de estudios de usuarios' / Figueiredo (1994)"
  },
  {
    id: "mq_m10_3",
    moduleId: "m10",
    text: "A abordagem 'Sense-Making', formulada pela pesquisadora norte-americana Brenda Dervin, revolucionou os estudos de usuários ao introduzir uma perspectiva fenomenológica e centrada no sujeito. O núcleo conceitual do modelo de Dervin estrutura-se na tríade:",
    options: {
      A: "Dado, Informação e Conhecimento.",
      B: "Situação (Situation) ➔ Brecha/Vazio Cognitivo (Gap) ➔ Ponte/Ajuda (Bridge/Use).",
      C: "Compra ➔ Tombamento ➔ Descarte.",
      D: "Entrada ➔ Processamento ➔ Saída.",
      E: "Autor ➔ Editora ➔ Leitor."
    },
    correctAnswer: "B",
    justification: "No modelo Sense-Making de Brenda Dervin: o usuário encontra-se em uma Situação concreta na vida; depara-se com uma descontinuidade ou barreira cognitiva que não consegue transpor sozinho (Gap/Brecha); e busca a informação como uma Ponte (Bridge) para dar sentido ao seu mundo e poder seguir adiante (Use/Outcome).",
    reference: "Dervin (1992, 1998) - 'Sense-Making Methodology'"
  },
  {
    id: "mq_m10_4",
    moduleId: "m10",
    text: "O conceito de 'ASK' (Anomalous State of Knowledge / Estado Anômalo de Conhecimento), proposto por Nicholas Belkin (1980), é fundamental para compreender a interação entre usuários e sistemas de recuperação. O pressuposto basilar do ASK afirma que:",
    options: {
      A: "O usuário sempre sabe com precisão cirúrgica o que precisa e digita descritores perfeitos logo na primeira tentativa.",
      B: "A necessidade de informação surge precisamente quando o usuário percebe uma anomalia, lacuna ou inadequação em seu próprio estado de conhecimento sobre um tema, o que torna difícil para ele especificar com exatidão o que procura para sanar essa lacuna.",
      C: "A informação só pode ser assimilada por usuários com QI superior à média.",
      D: "O bibliotecário deve recusar atendimento a perguntas ambíguas.",
      E: "Os usuários de bibliotecas universitárias não possuem dúvidas conceituais."
    },
    correctAnswer: "B",
    justification: "A teoria do ASK de Belkin demonstra que a necessidade de informação decorre de um estado anômalo: o indivíduo sabe que há algo faltando em seu conhecimento, mas justamente por não saber o que é, tem enorme dificuldade de traduzir sua dúvida em palavras exatas para o catálogo da biblioteca, exigindo o auxílio do bibliotecário de referência.",
    reference: "Belkin (1980) - 'Anomalous states of knowledge as a basis for information retrieval'"
  },
  {
    id: "mq_m10_5",
    moduleId: "m10",
    text: "Em uma biblioteca universitária de grande porte, o estudo dos 'Não-Usuários' da biblioteca é tão relevante quanto o dos usuários ativos. A literatura especializada aponta que a principal razão para o bibliotecário investigar os não-usuários é:",
    options: {
      A: "Punir os alunos que não frequentam o prédio com notas baixas na graduação.",
      B: "Identificar as barreiras físicas, psicológicas, informacionais e institucionais que afastam membros da comunidade acadêmica dos serviços da biblioteca, permitindo reorientar políticas de acesso e desenhar serviços adequados às suas demandas reais.",
      C: "Fechar as bibliotecas setoriais menos frequentadas para cortar despesas de pessoal.",
      D: "Cobrar mensalidades dos estudantes que preferem estudar em suas residências.",
      E: "Restringir o acesso ao repositório institucional unicamente aos usuários frequentes."
    },
    correctAnswer: "B",
    justification: "Estudar o não-usuário permite descobrir falhas da própria biblioteca: acervo desatualizado, horários incompatíveis, atendimento hostil, desconhecimento dos recursos disponíveis ou barreiras arquitetônicas, fornecendo subsídios para reformular produtos e democratizar o acesso.",
    reference: "Figueiredo (1994) / Sanz Casado (1994)"
  },

  // ==========================================
  // MÓDULO 11: Disseminação Seletiva da Informação (DSI) e Serviço de Referência
  // ==========================================
  {
    id: "mq_m11_1",
    moduleId: "m11",
    text: "O conceito pioneiro de 'Disseminação Seletiva da Informação' (DSI / SDI - Selective Dissemination of Information) foi introduzido por Hans Peter Luhn em 1958 na IBM. O mecanismo operacional essencial de um serviço de DSI consiste em:",
    options: {
      A: "Distribuir panfletos de papel para todos os transeuntes na entrada da biblioteca.",
      B: "Comparar sistematicamente (matching automatizado) o Perfil de Interesse (Profile) pré-cadastrado do usuário com os metadados dos novos documentos e publicações incorporados ao acervo, enviando alertas personalizados aos interessados.",
      C: "Publicar no jornal do campus uma lista genérica com as capas de todos os livros comprados no ano.",
      D: "Restringir a circulação de revistas científicas apenas aos chefes de departamento.",
      E: "Excluir os registros de periódicos do catálogo público."
    },
    correctAnswer: "B",
    justification: "Luhn (1958) concebeu a DSI como o casamento automatizado de dois conjuntos de dados: o Perfil do Usuário (seus tópicos de pesquisa, termos e palavras-chave) e o Perfil do Documento (novos itens indexados no sistema). Quando há coincidência relevante, o sistema envia o alerta proativo ao pesquisador.",
    reference: "Luhn (1958) - 'A Business Intelligence System' / Lancaster (2004)"
  },
  {
    id: "mq_m11_2",
    moduleId: "m11",
    text: "Na doutrina clássica do Serviço de Referência formulada por Samuel Rothstein (1961), a intensidade da assistência prestada pelo bibliotecário ao usuário é tipificada em três teorias ou níveis de serviço: Conservadora (Mínima), Moderada (Média) e Liberal (Máxima). O Nível Liberal (Máximo) caracteriza-se por:",
    options: {
      A: "Limitar-se a apontar fisicamente onde ficam as estantes de dicionários no salão de leitura.",
      B: "Ensinar o usuário a pesquisar sozinho, sem nunca fornecer a resposta direta da dúvida.",
      C: "Fornecer a informação completa já selecionada, avaliada e mastigada ao consulente, assumindo a busca integral como responsabilidade do bibliotecário.",
      D: "Cobrar taxas adicionais a cada pergunta respondida no balcão.",
      E: "Recusar consultas de usuários externos à universidade."
    },
    correctAnswer: "C",
    justification: "Rothstein (1961) categoriza: Nível Mínimo (apenas guia o usuário até as ferramentas); Nível Moderado (ensina o caminho e acompanha); Nível Máximo/Liberal (a biblioteca assume a busca inteira e entrega a resposta final compilada e validada, modelo comum em bibliotecas médicas e empresariais).",
    reference: "Rothstein (1961) - 'Reference Service: The New Dimension in Librarianship'"
  },
  {
    id: "mq_m11_3",
    moduleId: "m11",
    text: "Segundo Denis Grogan (1995, 2001), a 'Entrevista de Referência' é uma habilidade interpessoal e técnica crucial do bibliotecário. A principal finalidade da entrevista de referência é:",
    options: {
      A: "Interrogar o leitor para verificar se ele já pagou todas as multas pendentes.",
      B: "Negociar a dúvida do usuário, distinguindo a pergunta inicialmente verbalizada (frequentemente vaga, ampla ou distorcida) da sua real necessidade de informação subjacente.",
      C: "Convencer o usuário a não retirar livros emprestados para evitar desgaste da encadernação.",
      D: "Avaliar o sotaque e o vocabulário gramatical do consulente.",
      E: "Cronometrar o tempo de conversa para não ultrapassar dois minutos por leitor."
    },
    correctAnswer: "B",
    justification: "Grogan enfatiza que o usuário raramente chega ao balcão fazendo a pergunta exata da sua real necessidade (ex: pede 'um livro sobre África', mas na verdade precisa da taxa de mortalidade infantil em Angola em 2020). A entrevista de referência clarifica a dúvida oculta mediante perguntas abertas e escuta ativa.",
    reference: "Grogan (1995, 2001) - 'A prática do serviço de referência'"
  },
  {
    id: "mq_m11_4",
    moduleId: "m11",
    text: "O Programa de Comutação Bibliográfica (COMUT), instituído pelo Ministério da Educação e mantido pelo IBICT, é um dos mais tradicionais serviços cooperativos das bibliotecas universitárias brasileiras. A função primária do COMUT é:",
    options: {
      A: "Comutar automaticamente as multas de atraso em doações de livros para a biblioteca.",
      B: "Permitir a obtenção de cópias de documentos técnico-científicos (artigos de periódicos, teses e anais de congressos) não disponíveis no acervo local, solicitando-as a outras bibliotecas cooperantes no país e no exterior.",
      C: "Substituir a catalogação em MARC 21 por código de barras.",
      D: "Exportar dados patrimoniais para o Tribunal de Contas da União.",
      E: "Instalar antivírus nos computadores dos laboratórios acadêmicos."
    },
    correctAnswer: "B",
    justification: "O COMUT é a rede cooperativa nacional de compartilhamento de acervos: quando o pesquisador precisa de um artigo que a Unicamp não assina, o bibliotecário aciona o COMUT para solicitar a cópia digital ou reprográfica junto à biblioteca-base depositária (como USP, UFRJ ou bibliotecas internacionais).",
    reference: "IBICT - Programa de Comutação Bibliográfica (COMUT)"
  },
  {
    id: "mq_m11_5",
    moduleId: "m11",
    text: "Na prestação do moderno Serviço de Referência Virtual (SRV) em bibliotecas acadêmicas, a modalidade de atendimento 'Síncrono' difere da modalidade 'Assíncrona' porque na modalidade Síncrona:",
    options: {
      A: "A resposta é enviada ao usuário por carta impressa via correios após trinta dias úteis.",
      B: "A interação entre o bibliotecário de referência e o usuário ocorre em tempo real (como em sessões de chat instantâneo, videochamada ou atendimento web ao vivo).",
      C: "O usuário é obrigado a comparecer pessoalmente à biblioteca.",
      D: "A resposta é gerada exclusivamente por robôs sem intervenção humana.",
      E: "O sistema opera apenas nos finais de semana e feriados."
    },
    correctAnswer: "B",
    justification: "Serviços síncronos de referência digital operam em tempo real (chat, mensagens instantâneas, videoconferência), viabilizando negociação imediata da dúvida. Serviços assíncronos operam com intervalo de tempo entre a pergunta e a resposta (e-mail, formulários web de 'Pergunte ao Bibliotecário').",
    reference: "Accart (2012) - 'Serviço de referência: do presencial ao virtual'"
  },

  // ==========================================
  // MÓDULO 12: Marketing de Serviços e Unidades de Informação
  // ==========================================
  {
    id: "mq_m12_1",
    moduleId: "m12",
    text: "Segundo a obra pioneira de Sueli Angélica do Amaral (1998, 2011), o Marketing em Unidades de Informação não deve ser confundido com mera propaganda ou publicidade promocional. A essência do marketing da informação consiste em:",
    options: {
      A: "Distribuir brindes e adesivos para aumentar o número de seguidores nas redes sociais da biblioteca.",
      B: "Um processo contínuo de gestão estratégica que identifica as necessidades, desejos e demandas dos usuários, concebendo, precificando, distribuindo e promovendo produtos e serviços informacionais que agreguem valor real e satisfaçam a comunidade.",
      C: "Tornar todos os serviços da biblioteca universitária obrigatoriamente pagos.",
      D: "Vender dados cadastrais dos estudantes para empresas de publicidade.",
      E: "Substituir o acervo de livros por revistas em quadrinhos para atrair o público jovem."
    },
    correctAnswer: "B",
    justification: "Para Amaral, marketing é uma filosofia de gestão integrada orientada ao usuário: começa no diagnóstico acurado de necessidades da comunidade, passa pelo design do serviço (produto), definição dos canais de entrega (praça), custos de transação para o usuário (preço) e comunicação efetiva (promoção).",
    reference: "Amaral (1998, 2011) - 'Marketing da informação: entre a teoria e a prática'"
  },
  {
    id: "mq_m12_2",
    moduleId: "m12",
    text: "Ao transpor o clássico Composto Mercadológico (Mix de Marketing / 4 Ps de McCarthy e Kotler) para o ambiente de bibliotecas universitárias, o pilar da 'Praça' (Place / Distribuição) manifesta-se concretamente através de:",
    options: {
      A: "Campanhas publicitárias veiculadas em emissoras de rádio.",
      B: "Canais físicos e digitais de entrega dos serviços, acessibilidade arquitetônica, horários de funcionamento do edifício, facilidade de navegação no portal web e acesso remoto seguro via VPN aos periódicos científicos.",
      C: "Tabelas de valores de multas cobradas por atraso na devolução.",
      D: "Conteúdo dos workshops de competência informacional.",
      E: "Número de páginas de um livro didático."
    },
    correctAnswer: "B",
    justification: "Praça em marketing da informação lida com a logística e acessibilidade de como o produto/serviço alcança o cliente: localização física das unidades de informação, ergonomia dos espaços de estudo, horários estendidos e plataformas virtuais de acesso remoto seguro (ex: VPN/CAFe).",
    reference: "Amaral (2011) / McCarthy (1960)"
  },
  {
    id: "mq_m12_3",
    moduleId: "m12",
    text: "No contexto da gestão mercadológica de bibliotecas, o conceito de 'Segmentação de Mercado' significa:",
    options: {
      A: "Dividir o espaço físico da biblioteca com biombos de madeira para separar alunos homens e mulheres.",
      B: "Fracionar a comunidade total de usuários em grupos menores e homogêneos que partilham características, necessidades e hábitos informacionais semelhantes (como calouros de graduação, pesquisadores de pós-graduação, docentes e técnicos), desenvolvendo serviços específicos para cada grupo.",
      C: "Vender partes do acervo para editoras privadas.",
      D: "Limitar o empréstimo domiciliar apenas aos professores titulares.",
      E: "Classificar os livros nas estantes por tamanho e cor da lombada."
    },
    correctAnswer: "B",
    justification: "Segmentar é reconhecer a heterogeneidade da comunidade acadêmica: a demanda de um calouro que precisa se ambientar na universidade é totalmente distinta da demanda de um pós-doutorando que busca busca de patentes ou dados de pesquisa. Tratar todos igualmente gera ineficiência; o marketing exige serviços customizados por segmento.",
    reference: "Amaral (2011) / Kotler (2000)"
  },
  {
    id: "mq_m12_4",
    moduleId: "m12",
    text: "Em bibliotecas públicas e universitárias gratuitas, onde não há cobrança direta de mensalidades pela consulta ao acervo, como a teoria do marketing interpreta o pilar do 'Preço' (Price) para o usuário?",
    options: {
      A: "O preço é inexistente e nulo em todas as suas dimensões.",
      B: "O preço engloba os 'Custos Não-Monetários' despendidos pelo leitor, tais como o tempo gasto no deslocamento, o esforço cognitivo exigido para aprender a usar os sistemas da biblioteca, a frustração com interfaces lentas e a perda de privacidade.",
      C: "O preço corresponde ao salário pago pelo governo ao bibliotecário.",
      D: "O preço é fixado obrigatoriamente pelo valor de capa do livro impresso.",
      E: "O preço equivale ao custo de impressão da ficha catalográfica."
    },
    correctAnswer: "B",
    justification: "Em serviços públicos de informação, o 'preço' pago pelo usuário é o custo de transação: o tempo que ele gasta para ir à biblioteca ou decifrar um catálogo complicado, o estresse emocional de ser mal atendido e o esforço mental. Se esse 'custo' for muito alto, o usuário desiste da biblioteca e recorre à busca rápida na internet.",
    reference: "Amaral (2011) - 'Marketing da informação' / Zeithaml (1988)"
  },
  {
    id: "mq_m12_5",
    moduleId: "m12",
    text: "O LibQUAL+ é um dos instrumentos de avaliação de qualidade em serviços mais amplamente adotados por consórcios de bibliotecas acadêmicas no mundo (desenvolvido pela Association of Research Libraries - ARL). O LibQUAL+ baseia-se na metodologia SERVQUAL para medir a qualidade dos serviços a partir da comparação entre:",
    options: {
      A: "O número de livros catalogados no AACR2 e no RDA.",
      B: "As expectativas mínimas e desejadas dos usuários em relação ao serviço e o nível de serviço que eles efetivamente percebem ter recebido (Gap de percepção).",
      C: "O valor da mensalidade da faculdade e o preço dos livros didáticos.",
      D: "A velocidade dos computadores da biblioteca e a velocidade dos computadores domésticos.",
      E: "A quantidade de bibliotecários formados e a quantidade de estagiários."
    },
    correctAnswer: "B",
    justification: "O LibQUAL+ mede a 'distância' (gap) entre a expectativa do usuário (nível mínimo aceitável e nível desejado de excelência) e a realidade percebida em três dimensões: Afetividade do Serviço (atendimento), Biblioteca como Espaço e Controle da Informação (acesso ao acervo).",
    reference: "ARL - LibQUAL+ / Parasuraman, Zeithaml & Berry (1988) - SERVQUAL"
  },

  // ==========================================
  // MÓDULO 13: Desenvolvimento de Coleções
  // ==========================================
  {
    id: "mq_m13_1",
    moduleId: "m13",
    text: "Na consagrada teoria formulada por Waldomiro Vergueiro (1989), o Desenvolvimento de Coleções é conceituado não como uma tarefa isolada de compras, mas como um processo dinâmico, contínuo e cíclico. As seis etapas sequenciais que constituem o ciclo de desenvolvimento de coleções são:",
    options: {
      A: "Orçamento, Licitação, Empenho, Pagamento, Nota Fiscal e Tombamento.",
      B: "Estudo da Comunidade ➔ Políticas de Seleção ➔ Aquisição ➔ Desbastamento/Descarte ➔ Avaliação da Coleção ➔ Preservação do Acervo.",
      C: "Catalogação, Classificação, Indexação, Etiquetagem, Carimbagem e Estante.",
      D: "Compra, Empréstimo, Renovação, Devolução, Multa e Cobrança.",
      E: "Digitalização, OCR, Upload, Colheita, Backup e Exclusão."
    },
    correctAnswer: "B",
    justification: "Vergueiro (1989) esquematiza o processo como um ciclo ininterrupto: tudo começa conhecendo a comunidade (estudo da comunidade), definindo critérios explícitos em documento formal (políticas de seleção), executando a aquisição, retirando o material obsoleto (desbastamento/descarte), julgando a utilidade do acervo (avaliação) e assegurando sua guarda perene (preservação).",
    reference: "Vergueiro (1989) - 'Desenvolvimento de coleções'"
  },
  {
    id: "mq_m13_2",
    moduleId: "m13",
    text: "Uma formalizada 'Política de Desenvolvimento de Coleções' é um documento de gestão indispensável para bibliotecas universitárias. Qual é a principal função institucional desse documento?",
    options: {
      A: "Impedir que os professores escolham os livros de suas disciplinas.",
      B: "Estabelecer diretrizes claras, critérios técnicos objetivos e normas transparentes para a seleção, aquisição, aceitação de doações, desbastamento e preservação de materiais, protegendo a biblioteca de pressões arbitrárias e descontinuidade administrativa.",
      C: "Definir as punições disciplinares para servidores que chegarem atrasados ao trabalho.",
      D: "Determinar o valor de venda de livros repetidos em leilões.",
      E: "Eliminar a necessidade de fazer o inventário anual do patrimônio."
    },
    correctAnswer: "B",
    justification: "A política escrita é a salvaguarda da biblioteca: orienta a equipe técnica, estabelece prioridades de gasto do orçamento público, define prioridades de compra alinhadas aos projetos pedagógicos de curso (PPCs) e regulamenta a recusa de doações indesejadas, evitando que o acervo cresça ao sabor de gostos pessoais transitórios.",
    reference: "Vergueiro (1989) / Weitzel (2013)"
  },
  {
    id: "mq_m13_3",
    moduleId: "m13",
    text: "Na rotina de aquisições de uma biblioteca acadêmica pública, a entrada de materiais por 'Doação' requer cuidados técnicos rigorosos. A prática recomendada pela biblioteconomia para o recebimento de doações é:",
    options: {
      A: "Aceitar incondicionalmente todos os livros velhos oferecidos pela comunidade para inflar os números do acervo no relatório do MEC.",
      B: "Exigir a assinatura prévia de um Termo de Doação, no qual o doador concorda que a biblioteca terá autonomia técnica total para avaliar, selecionar, incorporar, repassar ou descartar as obras que não atendam ao perfil pedagógico da instituição.",
      C: "Recusar terminantemente qualquer doação para não acumular poeira nas prateleiras.",
      D: "Guardar os livros doados em armários trancados sem incluí-los no catálogo público.",
      E: "Cobrar uma taxa de custódia em dinheiro de quem doa."
    },
    correctAnswer: "B",
    justification: "Doação não criteriosa entope acervos com materiais inúteis, mofados ou defasados. Uma política séria condiciona a doação à assinatura de um Termo de Doação Sem Restrições: a biblioteca decide se incorpora o item ou se o descarta, sem obrigação de mantê-lo eternamente na estante.",
    reference: "Vergueiro (1989) / Weitzel (2013)"
  },
  {
    id: "mq_m13_4",
    moduleId: "m13",
    text: "Na fase de desbastamento e descarte de coleções em bibliotecas, a metodologia norte-americana CREW (Continuous Review, Evaluation, and Weeding) adota o acrônimo MUSTIE para sintetizar seis motivos imperativos para retirar um livro da estante. No método MUSTIE, a letra 'M' e a letra 'U' correspondem a obras:",
    options: {
      A: "Modernas e Úteis.",
      B: "Misleading (Factualmente incorretas ou enganosas devido à desatualização científica) e Ugly (Fisicamente deterioradas, rasgadas ou manchadas sem possibilidade de restauro).",
      C: "Multilíngues e Universais.",
      D: "Memoráveis e Unicamp.",
      E: "Manuscritas e Usadas."
    },
    correctAnswer: "B",
    justification: "O critério MUSTIE do método CREW estabelece descarte quando o livro é: Misleading (conteúdo enganoso/falso pela defasagem), Ugly (deteriorado/feio), Superseded (substituído por edição nova), Trivial (sem mérito acadêmico), Irrelevant (irrelevante para a comunidade) ou Elsewhere (obtido facilmente em outras fontes).",
    reference: "Larson (2012) - 'CREW: A Weeding Manual for Modern Libraries'"
  },
  {
    id: "mq_m13_5",
    moduleId: "m13",
    text: "Na etapa de 'Avaliação da Coleção', os métodos centrados na coleção (Collection-centered) diferem substancialmente dos métodos centrados no usuário (Use-centered). Constitui um método de avaliação estritamente centrado no Uso:",
    options: {
      A: "A verificação e conferência do acervo contra bibliografias-padrão nacionais.",
      B: "A análise estatística dos dados de empréstimo circulante, renovações, consultas internas e solicitações de empréstimo entre bibliotecas não atendidas.",
      C: "A contagem física simples da quantidade total de volumes e títulos existentes por classe da CDD.",
      D: "A avaliação estética do estado de conservação das capas dos livros raros.",
      E: "A medição em metros lineares das prateleiras de aço."
    },
    correctAnswer: "B",
    justification: "Métodos centrados na coleção analisam a estante fria (tamanho do acervo, idade média das publicações, comparação com bibliografias recomendadas). Métodos centrados no uso medem a vida real da biblioteca: dados empíricos de empréstimo, taxa de rotatividade das obras, estatísticas de circulação e pedidos de comutação.",
    reference: "Vergueiro (1989) / Lancaster (1993)"
  },

  // ==========================================
  // MÓDULO 14: Representação Descritiva e Temática
  // ==========================================
  {
    id: "mq_m14_1",
    moduleId: "m14",
    text: "Na teoria biblioteconômica consagrada por Eliane Serrão Mey e Nair Silveira (2009), o tratamento técnico da informação cinde-se em Representação Descritiva e Representação Temática. A Representação Descritiva tem como foco precípuo:",
    options: {
      A: "Descobrir o assunto profundo da obra e traduzi-lo em um número de classificação decimal.",
      B: "Identificar, registrar e descrever os atributos físicos e contextuais extrínsecos do documento (responsabilidade intelectual, título, edição, dados de publicação, paginação e suporte), viabilizando sua identificação e diferenciação inequívoca no catálogo.",
      C: "Elaborar o tesauro bilíngue da unidade de informação.",
      D: "Definir o valor das multas financeiras para livros extraviados.",
      E: "Restaurar páginas corroídas por traças e fungos."
    },
    correctAnswer: "B",
    justification: "A Representação Descritiva (Catalogação) lida com as características externas e formais do objeto (quem escreveu, qual o título, qual a editora, ano, dimensões). A Representação Temática (Classificação e Indexação) lida com o conteúdo semântico intrínseco (sobre o que a obra trata).",
    reference: "Mey & Silveira (2009) - 'Catalogação no plural'"
  },
  {
    id: "mq_m14_2",
    moduleId: "m14",
    text: "Em suas clássicas 'Rules for a Dictionary Catalog' (1876), Charles Ammi Cutter enunciou os objetivos permanentes do catálogo da biblioteca que até hoje fundamentam os códigos internacionais. O primeiro objetivo enunciado por Cutter diz respeito à capacidade de o catálogo permitir que uma pessoa encontre um livro quando se conhece:",
    options: {
      A: "O peso em gramas ou o valor da fatura de compra do item.",
      B: "O Autor, o Título ou o Assunto.",
      C: "O número de telefone da gráfica que imprimiu a obra.",
      D: "A cor exata do tecido da encadernação.",
      E: "O código do servidor de backup do repositório."
    },
    correctAnswer: "B",
    justification: "Os Objetivos de Cutter (1876) são a pedra angular da catalogação moderna: 1. Permitir encontrar um livro conhecendo seu Autor, Título ou Assunto; 2. Mostrar o que a biblioteca possui de determinado autor, sobre determinado assunto ou em determinado gênero; 3. Auxiliar na escolha do livro (por sua edição ou caráter).",
    reference: "Cutter (1876) - 'Rules for a Printed Dictionary Catalogue' / Mey & Silveira (2009)"
  },
  {
    id: "mq_m14_3",
    moduleId: "m14",
    text: "O programa de Controle Bibliográfico Universal (CBU / UBC - Universal Bibliographic Control), concebido pela IFLA e pela UNESCO, baseia-se na premissa operacional de que:",
    options: {
      A: "Uma única superbiblioteca localizada em Paris deve catalogar todos os livros de todo o planeta e proibir a atuação de bibliotecários locais.",
      B: "Cada país é responsável por catalogar de forma definitiva, abrangente e padronizada toda a produção bibliográfica publicada em seu território nacional, disponibilizando esses registros universalmente para que os demais países não precisem recatalogá-la.",
      C: "Os livros devem ser digitalizados e publicados sem qualquer registro catalográfico.",
      D: "As línguas nacionais devem ser substituídas pelo esperanto nos catálogos.",
      E: "Os sistemas de classificação devem ser abolidos em favor de buscas automáticas por IA."
    },
    correctAnswer: "B",
    justification: "A filosofia do CBU é o compartilhamento global descentralizado: 'catalogar uma vez para o mundo inteiro'. A agência bibliográfica nacional de cada país cria o registro padrão definitivo de suas publicações e o distribui no formato de intercâmbio internacional (evitando esforço redundante).",
    reference: "Anderson (1974) / IFLA UBCIM Programme"
  },
  {
    id: "mq_m14_4",
    moduleId: "m14",
    text: "No Brasil, a instituição oficial que atua como Agência Bibliográfica Nacional, encarregada de executar o Depósito Legal (Lei Federal nº 10.994/2004) e coordenar o controle bibliográfico da memória editorial do país, é a:",
    options: {
      A: "Biblioteca Central César Lattes da Unicamp.",
      B: "Fundação Biblioteca Nacional (FBN), sediada no Rio de Janeiro.",
      C: "Academia Brasileira de Letras (ABL).",
      D: "Câmara Brasileira do Livro (CBL).",
      E: "Fundação Coordenação de Aperfeiçoamento de Pessoal de Nível Superior (CAPES)."
    },
    correctAnswer: "B",
    justification: "A Fundação Biblioteca Nacional (FBN) é a depositária oficial da memória bibliográfica brasileira. A Lei do Depósito Legal obriga editores e autores a enviarem exemplares de tudo que é publicado no território nacional para a FBN, permitindo a produção da Bibliografia Brasileira.",
    reference: "Lei Federal nº 10.994/2004 / Fundação Biblioteca Nacional"
  },
  {
    id: "mq_m14_5",
    moduleId: "m14",
    text: "O Catálogo em Linha de Acesso Público (OPAC - Online Public Access Catalog) representou a transição da catalogação em fichas para o meio digital. Nos modernos OPACs de bibliotecas universitárias integrados a interfaces web responsivas, o recurso de 'Busca Facetada' permite que o usuário:",
    options: {
      A: "Altere a senha de e-mail institucional da universidade.",
      B: "Refine dinamicamente os resultados de uma busca ampla inicial, aplicando filtros interativos por autor, tipo de documento, data de publicação, idioma, assunto ou biblioteca depositária do sistema.",
      C: "Apague registros de livros que não deseja mais ler.",
      D: "Execute downloads ilegais de filmes comerciais.",
      E: "Crie fichas catalográficas impressas sem autorização do bibliotecário."
    },
    correctAnswer: "B",
    justification: "A navegação facetada (faceted search) é a maior inovação dos OPACs de última geração: após a query inicial, a tela exibe 'facetas' com a contagem de itens por autor, ano, formato (livro, tese, artigo), unidade gestora etc., permitindo ao leitor filtrar o resultado progressivamente com um clique.",
    reference: "Rowley (2002) / Mey & Silveira (2009)"
  },

  // ==========================================
  // MÓDULO 15: Código de Catalogação Anglo-Americano (AACR2r)
  // ==========================================
  {
    id: "mq_m15_1",
    moduleId: "m15",
    text: "No AACR2 (Capítulo 21 - Escolha de Acessos), a chamada 'Regra de Três' é um dos tópicos mais cobrados em concursos públicos. Se uma obra for elaborada sob responsabilidade compartilhada por QUATRO ou mais autores com a mesma ênfase de responsabilidade, a regra geral determina que a Entrada Principal seja efetuada:",
    options: {
      A: "Pelo primeiro autor listado na folha de rosto, fazendo entrada secundária para os demais seguidos de [et al.].",
      B: "Pelo TÍTULO da obra, elaborando-se entrada secundária apenas para o primeiro autor nominado na fonte principal de informação.",
      C: "Pelo autor que tiver o grau acadêmico mais elevado.",
      D: "Pela editora comercial que financiou a publicação.",
      E: "Em um registro novo aberto para cada um dos quatro autores."
    },
    correctAnswer: "B",
    justification: "Regra clássica do AACR2 (21.6C2): havendo responsabilidade compartilhada entre 4 ou mais pessoas e nenhuma for indicada como autor principal, a Entrada Principal é compulsoriamente PELO TÍTULO da obra. Faz-se entrada secundária para a primeira pessoa mencionada na fonte principal de informação.",
    reference: "AACR2r, Regra 21.6C2 / Ribeiro (2012)"
  },
  {
    id: "mq_m15_2",
    moduleId: "m15",
    text: "O AACR2 prevê casos específicos em que uma Entidade Coletiva (Corporate Body) pode ser escolhida como Ponto de Acesso Principal (Entrada Principal). Conforme a regra 21.1B2, uma instituição terá entrada principal para uma obra quando o documento tratar de:",
    options: {
      A: "Romances literários e poemas de ficção escritos por funcionários de uma empresa.",
      B: "Obras de natureza administrativa sobre a própria entidade (suas políticas internas, operações, quadro de pessoal, finanças ou acervo), relatórios de comissões oficiais, atos legislativos e anais de conferências/eventos.",
      C: "Livros didáticos de cálculo diferencial adotados em cursos de engenharia.",
      D: "Qualquer livro publicado por uma editora comercial.",
      E: "Dicionários gerais de línguas estrangeiras."
    },
    correctAnswer: "B",
    justification: "O AACR2 é muito restritivo quanto à autoria de entidades coletivas (21.1B2): uma entidade coletiva só ganha entrada principal se a obra versar sobre ela mesma (caráter administrativo, orçamentos, relatórios internos), relatórios de comissões, atos legais/governamentais ou publicações que registram o pensamento coletivo de eventos científicos (congressos).",
    reference: "AACR2r, Regra 21.1B2 / Ribeiro (2012)"
  },
  {
    id: "mq_m15_3",
    moduleId: "m15",
    text: "A Parte I do AACR2 organiza a descrição bibliográfica em oito áreas padronizadas baseadas na estrutura da ISBD (International Standard Bibliographic Description). A Área 1 da ISBD/AACR2 corresponde à Área de:",
    options: {
      A: "Edição.",
      B: "Publicação, Distribuição etc. (Imprenta).",
      C: "Título e Indicação de Responsabilidade.",
      D: "Descrição Física.",
      E: "Notas."
    },
    correctAnswer: "C",
    justification: "A sequência fixa das 8 áreas da ISBD/AACR2 é: 1. Título e Indicação de Responsabilidade; 2. Edição; 3. Detalhes específicos do material; 4. Publicação, Distribuição etc.; 5. Descrição Física; 6. Série; 7. Notas; 8. Número Normalizado (ISBN) e Termos de Disponibilidade.",
    reference: "AACR2r, Capítulo 1 / ISBD Consolidada"
  },
  {
    id: "mq_m15_4",
    moduleId: "m15",
    text: "No AACR2, a função dos 'Títulos Uniformes' (Uniform Titles - Capítulo 25) na prática da catalogação descritiva é:",
    options: {
      A: "Uniformizar o tamanho físico da fonte tipográfica impressa no lombo do livro.",
      B: "Reunir sob um único cabeçalho padronizado todas as edições, traduções, manifestações e versões de uma mesma obra que foram publicadas ao longo da história sob títulos variantes diferentes (como clássicos anônimos, obras sagradas e peças teatrais).",
      C: "Exigir que todas as teses defendidas na universidade tenham títulos curtos.",
      D: "Traduzir automaticamente os títulos de livros para o inglês no catálogo.",
      E: "Substituir o cabeçalho de autor pessoal por um pseudônimo."
    },
    correctAnswer: "B",
    justification: "O Título Uniforme (Tag MARC 240) é um mecanismo de controle e reunião: se uma obra como 'Dom Quixote' foi publicada como 'El ingenioso hidalgo Don Quijote de la Mancha', 'O engenhoso fidalgo Dom Quixote' ou 'Don Quixote', o título uniforme padronizado agrupa todas essas variações sob uma única forma de acesso.",
    reference: "AACR2r, Capítulo 25 / Mey & Silveira (2009)"
  },
  {
    id: "mq_m15_5",
    moduleId: "m15",
    text: "Na descrição de uma monografia impressa conforme o AACR2, se a fonte principal de informação (folha de rosto) não indicar a data de publicação, distribuição ou copyright, mas o catalogador puder inferir com segurança a década de publicação provável, a regra de pontuação e colchetes determina registrar a data da seguinte forma:",
    options: {
      A: "[202-?]",
      B: "sem data",
      C: "década de vinte",
      D: "(2020?)",
      E: "/2020/"
    },
    correctAnswer: "A",
    justification: "Conforme o AACR2r (Regra 1.4F7): quando a data exata não pode ser determinada, usam-se datas prováveis entre colchetes seguidas de interrogação. Para década provável (ex: entre 2020 e 2029), a notação canônica é `[202-?]`. O termo 's.d.' em português só era usado na falta total de qualquer evidência (hoje abolido no RDA).",
    reference: "AACR2r, Regra 1.4F7 / Ribeiro (2012)"
  },

  // ==========================================
  // MÓDULO 16: MARC 21
  // ==========================================
  {
    id: "mq_m16_1",
    moduleId: "m16",
    text: "No formato MARC 21 para Dados Bibliográficos (estruturado conforme a ISO 2709), o 'Líder' (Leader) é o primeiro elemento do registro eletrônico. O Líder é caracterizado tecnicamente por:",
    options: {
      A: "Ser um campo de texto livre onde o bibliotecário digita sua opinião sobre a obra.",
      B: "Conter exatamente 24 caracteres de comprimento fixo (posições 00 a 23), codificados por números ou letras que informam à máquina parâmetros fundamentais sobre o registro, como status, tipo de registro (monografia, periódico) e nível bibliográfico.",
      C: "Armazenar a imagem digitalizada da capa do livro em alta resolução.",
      D: "Exibir o resumo em três línguas estrangeiras.",
      E: "Ser idêntico ao campo 245 de título."
    },
    correctAnswer: "B",
    justification: "O Líder do MARC 21 tem extensão rígida e invariável de exatamente 24 posições de caracteres (00 a 23). Ele contém metadados de máquina essenciais: comprimento total do registro, status (novo, corrigido), tipo de registro (texto impresso, recurso eletrônico, mapa) e nível bibliográfico (monográfico, seriado, analítico).",
    reference: "MARC 21 Format for Bibliographic Data (Library of Congress) / Furrie (2000)"
  },
  {
    id: "mq_m16_2",
    moduleId: "m16",
    text: "No formato MARC 21, os campos de controle fixos ocupam as tags do bloco 00X (001 a 008). O campo 008, denominado 'Elementos de Dados de Comprimento Fixo', possui extrema relevância técnica em catálogos eletrônicos porque:",
    options: {
      A: "Registra o valor das multas aplicadas aos estudantes atrasados.",
      B: "Não possui indicadores nem delimitadores de subcampos ($), agrupando em 40 posições de caracteres (00 a 39) informações vitais codificadas para filtragem avançada, tais como data de publicação, país de origem, idioma do texto, código de ilustrações e público-alvo.",
      C: "Substitui integralmente o campo de cabeçalhos de assunto 650.",
      D: "É reservado para o cadastro de doadores de livros raros.",
      E: "Guarda as senhas dos catalogadores da universidade."
    },
    correctAnswer: "B",
    justification: "O campo 008 é a 'caixa de engrenagens' dos filtros do catálogo: não usa indicadores nem subcampos ($a). Cada posição posicional tem significado rígido (ex: posições 35-37 indicam o código de idioma em 3 letras, como 'por' para português, 'eng' para inglês), viabilizando os filtros de facetas em OPACs.",
    reference: "Furrie (2000) - 'O MARC bibliográfico: um guia introdutório'"
  },
  {
    id: "mq_m16_3",
    moduleId: "m16",
    text: "No MARC 21, o campo 245 destina-se à transcrição do 'Título e Indicação de Responsabilidade'. Os subcampos mais frequentemente empregados na catalogação desse campo para separar o título principal, o subtítulo e a indicação de responsabilidade de autoria são, respectivamente:",
    options: {
      A: "$a, $b e $c.",
      B: "$1, $2 e $3.",
      C: "$x, $y e $z.",
      D: "$d, $e e $f.",
      E: "$t, $u e $v."
    },
    correctAnswer: "A",
    justification: "A anatomia universal do campo 245 do MARC 21 é: Tag 245 / Indicadores / $a Título principal : $b subtítulo ou outras informações sobre o título / $c indicação de responsabilidade (autores, tradutores, ilustradores).",
    reference: "Library of Congress - MARC 21 Bibliographic Field 245"
  },
  {
    id: "mq_m16_4",
    moduleId: "m16",
    text: "Em um registro MARC 21 bibliográfico, a tag reservada para armazenar o Ponto de Acesso Principal (Entrada Principal) por Nome Pessoal de autor é a tag:",
    options: {
      A: "Tag 245.",
      B: "Tag 100.",
      C: "Tag 650.",
      D: "Tag 700.",
      E: "Tag 856."
    },
    correctAnswer: "B",
    justification: "No MARC 21: Bloco 1XX = Entradas Principais. Tag 100 = Nome Pessoal; Tag 110 = Entidade Coletiva; Tag 111 = Evento/Conferência; Tag 130 = Título Uniforme como entrada principal. A Tag 700 é para Entrada Secundária de pessoa e a 650 para Assunto Tópico.",
    reference: "MARC 21 Bibliographic Format / Furrie (2000)"
  },
  {
    id: "mq_m16_5",
    moduleId: "m16",
    text: "Com a expansão das bibliotecas digitais e dos repositórios institucionais (como o Repositório da Unicamp), o campo 856 do formato MARC 21 tornou-se indispensável no registro bibliográfico. A finalidade do campo 856 é registrar:",
    options: {
      A: "A numeração de tombo do livro patrimoniado.",
      B: "A localização física exata da prateleira na estante de aço.",
      C: "A Localização e Acesso Eletrônico, permitindo vincular ao registro a URL, Handle ou link persistente (URI) para download direto do arquivo digital (PDF/texto integral) na internet.",
      D: "O código do encadernador do volume.",
      E: "O código de classificação na CDD."
    },
    correctAnswer: "C",
    justification: "O campo 856 (Electronic Location and Access) é a ponte que une o catálogo ao repositório: o subcampo $u armazena a URI/URL que permite ao leitor clicar diretamente no OPAC e abrir o arquivo digital da tese, artigo ou livro em texto integral.",
    reference: "Library of Congress - MARC 21 Field 856"
  }
];
