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
      A: "A Autoridade é Construída e Contextual (Authority Is Constructed and Contextual).",
      B: "A Pesquisa como Investigação Aberta (Research as Inquiry in Complex Environments).",
      C: "A Informação Possui Valor Intrínseco e Comercial (Information Has Social and Economic Value).",
      D: "A Busca como Exploração Estratégica Iterativa (Searching as Strategic Exploration).",
      E: "A Produção de Conteúdo como Processo Não Linear (Information Creation as a Process)."
    },
    correctAnswer: "A",
    justification: "O quadro 'A Autoridade é Construída e Contextual' (Authority Is Constructed and Contextual) ensina que a autoridade de uma informação depende do contexto da necessidade informacional e das normas da comunidade: a autoridade de um artigo científico difere da autoridade do relato de um líder comunitário ou de um paciente, exigindo análise crítica das vozes representadas.",
    reference: "ACRL (2015) - 'Framework for Information Literacy for Higher Education'"
  },
  {
    id: "mq_m09_2",
    moduleId: "m09",
    text: "Nas grandes declarações internacionais promovidas pela UNESCO e pela IFLA sobre Competência Informacional, as conferências de Praga (2003) e Alexandria (2005) marcaram época ao definirem que a Competência Informacional é:",
    options: {
      A: "Uma disciplina técnica de computação restrita aos acadêmicos de cursos de graduação em tecnologia e engenharia de software.",
      B: "Um direito humano básico fundamental para o aprendizado ao longo da vida e para a participação cívica democrática na sociedade.",
      C: "A habilidade estrita de memorizar normas prescritivas de documentação bibliográfica da ABNT e códigos de catalogação.",
      D: "Uma exigência comercial instituída por grandes conglomerados editoriais para a liberação controlada de senhas corporativas.",
      E: "Um conjunto de rotinas instrumentais que foi inteiramente superado pela emergência de modelos generativos de inteligência artificial."
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
      A: "Ambos os conceitos são rigorosamente sinônimos e limitam-se ao aprendizado mecânico de digitação e navegação na internet.",
      B: "A competência informacional restringe-se ao domínio de suportes analógicos em papel, ao passo que o letramento digital estuda as ideias.",
      C: "O letramento digital foca no domínio técnico de ferramentas e dispositivos; a competência informacional abrange o julgamento crítico e o uso ético.",
      D: "A alfabetização digital constitui uma faculdade cognitiva superior que torna prescindível o desenvolvimento da competência informacional.",
      E: "A competência informacional destina-se apenas a evitar sanções administrativas por atrasos de devolução no balcão da biblioteca."
    },
    correctAnswer: "C",
    justification: "Saber manusear o computador ou smartphone é letramento digital instrumental. A Competência Informacional (Information Literacy) é uma competência intelectual e crítica: envolve julgamento epistemológico, detecção de desinformação/fake news, raciocínio investigativo e respeito ético à autoria.",
    reference: "Campello (2003) - 'O movimento da competência informacional'"
  },
  {
    id: "mq_m09_4",
    moduleId: "m09",
    text: "O modelo britânico dos 'Sete Pilares da Competência Informacional' (Seven Pillars of Information Literacy), concebido pelo consórcio SCONUL (Society of College, National and University Libraries), organiza a trajetória do estudante em um ciclo de desenvolvimento de aptidões composto pelos pilares:",
    options: {
      A: "Orçar, Licitar, Adquirir, Tombar, Etiquetar, Emprestar e Descartar os documentos da biblioteca.",
      B: "Líder de registro, Diretório numérico, Tags de controle, Indicadores, Subcampos, Delimitadores e Pontuações.",
      C: "Hardware primário, Software de rede, Peopleware especializado, Firmware de BIOS, Netware, Antivírus e Firewall.",
      D: "Identificar, Dimensionar, Planejar, Reunir, Avaliar, Gerenciar e Apresentar a informação de forma ética.",
      E: "Leitura preliminar, Cópia mecânica, Tradução automatizada, Impressão física, Encadernação e Arquivamento em pasta."
    },
    correctAnswer: "D",
    justification: "O consagrado modelo SCONUL estrutura a competência em sete pilares progressivos: Identify (identificar a necessidade), Scope (dimensionar o conhecimento existente), Plan (planejar a estratégia), Gather (reunir as fontes), Evaluate (avaliar criticamente os dados), Manage (gerenciar organizando referências) e Present (sintetizar e comunicar eticamente).",
    reference: "SCONUL (2011) - 'The SCONUL Seven Pillars of Information Literacy'"
  },
  {
    id: "mq_m09_5",
    moduleId: "m09",
    text: "A dimensão ética da competência informacional assume papel de destaque nas bibliotecas universitárias da Unicamp e de outras instituições de ponta. O plágio por 'Paráfrase Indevida' ocorre quando o estudante:",
    options: {
      A: "Cita literalmente a frase original do pesquisador entre aspas duplas, transcrevendo a autoria, a data e a página exata da fonte consultada.",
      B: "Deposita voluntariamente uma versão prévia de seu manuscrito em repositório institucional sob termos de licença Creative Commons CC BY.",
      C: "Requer o auxílio técnico do bibliotecário de referência para normalizar as citações indiretas do seu trabalho segundo as normas da ABNT.",
      D: "Configura seu gestor eletrônico de referências para converter automaticamente as notas de rodapé em referências no padrão numérico.",
      E: "Reescreve ideias alheias com pequenas alterações lexicais, mas omite a menção à fonte original, apropriando-se da autoria intelectual."
    },
    correctAnswer: "E",
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
      A: "A necessidade de informação formalizada e verbalizada pelo usuário mediante solicitação concreta dirigida a um sistema ou serviço.",
      B: "O estado interior subjetivo e imperceptível de carência cognitiva que o indivíduo experimenta sem conseguir traduzir em palavras.",
      C: "O montante total de volumes impressos armazenados nas estantes da biblioteca que jamais registraram circulação pelo sistema.",
      D: "O total de recursos orçamentários transferidos mensalmente pela administração superior para custear assinaturas de periódicos.",
      E: "A quantidade de computadores públicos em funcionamento no saguão de atendimento presencial da biblioteca central."
    },
    correctAnswer: "A",
    justification: "A necessidade (Need) é o estado de carência cognitiva interior do usuário. Nem toda necessidade vira demanda: a Demanda (Demand) é a necessidade que foi concretamente expressa, traduzida em solicitação verbal ou consulta formal dirigida ao sistema de informação.",
    reference: "Figueiredo (1994) - 'Estudos de uso e usuários da informação' / Wilson (1981)"
  },
  {
    id: "mq_m10_2",
    moduleId: "m10",
    text: "Na metodologia dos estudos de usuários sistematizada por Sanz Casado (1994), os métodos de coleta de dados são classificados em 'Métodos Diretos' e 'Métodos Indiretos'. Constitui um exemplo inequívoco de Método Indireto:",
    options: {
      A: "A aplicação presencial de formulários e questionários estruturados aos estudantes na saída das salas de leitura.",
      B: "A análise estatística dos registros automatizados de circulação do SIGB e o estudo bibliométrico de citações das teses defendidas.",
      C: "A condução de entrevistas qualitativas em profundidade e grupos focais com docentes dos programas de pós-graduação.",
      D: "A observação participante do bibliotecário postado junto aos terminais de consulta monitorando as dificuldades de busca.",
      E: "A aplicação de testes laboratoriais de usabilidade com rastreamento ocular e gravação em vídeo das reações do consulente."
    },
    correctAnswer: "B",
    justification: "Métodos diretos envolvem a interpelação direta do usuário (questionários, entrevistas, grupos focais). Métodos indiretos analisam os vestígios, registros e comportamentos documentados sem consultar diretamente o indivíduo (estatísticas de circulação, logs de acesso ao catálogo, análise das referências citadas em teses e publicações da instituição).",
    reference: "Sanz Casado (1994) - 'Manual de estudios de usuarios' / Figueiredo (1994)"
  },
  {
    id: "mq_m10_3",
    moduleId: "m10",
    text: "A abordagem 'Sense-Making', formulada pela pesquisadora norte-americana Brenda Dervin, revolucionou os estudos de usuários ao introduzir uma perspectiva fenomenológica e centrada no sujeito. O núcleo conceitual do modelo de Dervin estrutura-se na tríade:",
    options: {
      A: "Dado bruto ➔ Informação processada ➔ Conhecimento tácito estruturado.",
      B: "Entrada de registros ➔ Processamento algorítmico ➔ Disseminação em catálogo.",
      C: "Situação concreta (Situation) ➔ Brecha cognitiva (Gap) ➔ Ponte de sentido/Uso (Bridge/Use).",
      D: "Seleção por comissão ➔ Aquisição patrimonial ➔ Desbastamento por obsolescência.",
      E: "Autoria intelectual ➔ Editoração comercial ➔ Leitura passiva do consulente."
    },
    correctAnswer: "C",
    justification: "No modelo Sense-Making de Brenda Dervin: o usuário encontra-se em uma Situação concreta na vida; depara-se com uma descontinuidade ou barreira cognitiva que não consegue transpor sozinho (Gap/Brecha); e busca a informação como uma Ponte (Bridge) para dar sentido ao seu mundo e poder seguir adiante (Use/Outcome).",
    reference: "Dervin (1992, 1998) - 'Sense-Making Methodology'"
  },
  {
    id: "mq_m10_4",
    moduleId: "m10",
    text: "O conceito de 'ASK' (Anomalous State of Knowledge / Estado Anômalo de Conhecimento), proposto por Nicholas Belkin (1980), é fundamental para compreender a interação entre usuários e sistemas de recuperação. O pressuposto basilar do ASK afirma que:",
    options: {
      A: "O leitor detém domínio prévio e absoluto de sua demanda, expressando os descritores exatos de busca na primeira tentativa no catálogo.",
      B: "O atendimento de referência deve limitar-se à recusa sistemática de perguntas formuladas com termos ambíguos ou informais.",
      C: "A assimilação informacional depende exclusivamente de coeficientes psicométricos elevados demonstrados pelo pesquisador.",
      D: "A necessidade nasce da percepção de uma lacuna em seu próprio saber, gerando dificuldade inerente de especificar o que precisa.",
      E: "Os usuários vinculados aos centros de pesquisa universitários não vivenciam dúvidas conceituais na formulação de buscas."
    },
    correctAnswer: "D",
    justification: "A teoria do ASK de Belkin demonstra que a necessidade de informação decorre de um estado anômalo: o indivíduo sabe que há algo faltando em seu conhecimento, mas justamente por não saber o que é, tem enorme dificuldade de traduzir sua dúvida em palavras exatas para o catálogo da biblioteca, exigindo o auxílio do bibliotecário de referência.",
    reference: "Belkin (1980) - 'Anomalous states of knowledge as a basis for information retrieval'"
  },
  {
    id: "mq_m10_5",
    moduleId: "m10",
    text: "Em uma biblioteca universitária de grande porte, o estudo dos 'Não-Usuários' da biblioteca é tão relevante quanto o dos usuários ativos. A literatura especializada aponta que a principal razão para o bibliotecário investigar os não-usuários é:",
    options: {
      A: "Adotar penalidades administrativas e restringir a matrícula acadêmica de quem não comprovar frequência às dependências da unidade.",
      B: "Determinar o encerramento imediato de bibliotecas setoriais para economizar despesas operacionais e custos com pessoal técnico.",
      C: "Instituir cobranças tributárias e emolumentos financeiros dos estudantes que optarem por estudar privadamente fora do campus.",
      D: "Condicionar o acesso aos bancos de teses e dissertações do repositório institucional apenas a leitores com histórico de empréstimo ativo.",
      E: "Identificar barreiras de acesso e lacunas de serviços que afastam a comunidade, criando bases para reorientar produtos e políticas."
    },
    correctAnswer: "E",
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
      A: "Cruzar o perfil de interesses cadastrado do usuário com os novos itens do acervo, expedindo alertas personalizados proativos.",
      B: "Distribuir encartes publicitários padronizados para todos os leitores que ingressam nas dependências físicas da biblioteca.",
      C: "Divulgar na imprensa interna da universidade a relação genérica com a capa de todos os livros comprados pela instituição no ano.",
      D: "Limitar o acesso a novos fascículos de periódicos científicos exclusivamente aos diretores e chefes departamentais do campus.",
      E: "Ocultar os registros bibliográficos de obras recém-incorporadas até que passem por um período de quarentena técnica no depósito."
    },
    correctAnswer: "A",
    justification: "Luhn (1958) concebeu a DSI como o casamento automatizado de dois conjuntos de dados: o Perfil do Usuário (seus tópicos de pesquisa, termos e palavras-chave) e o Perfil do Documento (novos itens indexados no sistema). Quando há coincidência relevante, o sistema envia o alerta proativo ao pesquisador.",
    reference: "Luhn (1958) - 'A Business Intelligence System' / Lancaster (2004)"
  },
  {
    id: "mq_m11_2",
    moduleId: "m11",
    text: "Na doutrina clássica do Serviço de Referência formulada por Samuel Rothstein (1961), a intensidade da assistência prestada pelo bibliotecário ao usuário é tipificada em três teorias ou níveis de serviço: Conservadora (Mínima), Moderada (Média) e Liberal (Máxima). O Nível Liberal (Máximo) caracteriza-se por:",
    options: {
      A: "Orientar o estudante exclusivamente apontando com as mãos a direção física das estantes no saguão principal do edifício.",
      B: "Assumir integralmente a responsabilidade da busca, entregando ao leitor a informação já selecionada, avaliada e refinada.",
      C: "Instruir pedagogicamente o usuário no catálogo para que ele resolva sua dúvida de forma autônoma sem intervenção adicional.",
      D: "Fixar uma tarifa monetária progressiva cobrada a cada pergunta técnica respondida pelo bibliotecário de plantão no balcão.",
      E: "Negar atendimento a consultas originadas por pesquisadores externos que não possuam vínculo institucional de emprego na instituição."
    },
    correctAnswer: "B",
    justification: "Rothstein (1961) categoriza: Nível Mínimo (apenas guia o usuário até as ferramentas); Nível Moderado (ensina o caminho e acompanha); Nível Máximo/Liberal (a biblioteca assume a busca inteira e entrega a resposta final compilada e validada, modelo comum em bibliotecas médicas e empresariais).",
    reference: "Rothstein (1961) - 'Reference Service: The New Dimension in Librarianship'"
  },
  {
    id: "mq_m11_3",
    moduleId: "m11",
    text: "Segundo Denis Grogan (1995, 2001), a 'Entrevista de Referência' é uma habilidade interpessoal e técnica crucial do bibliotecário. A principal finalidade da entrevista de referência é:",
    options: {
      A: "Inquirir formalmente o consulente para conferir sua situação financeira perante a tesouraria e o histórico de multas quitadas.",
      B: "Dissuadir o usuário de retirar livros raros em empréstimo domiciliar com o objetivo de poupar as costuras originais da encadernação.",
      C: "Negociar a dúvida informacional, clarificando a real necessidade do consulente que difere da sua formulação inicial vaga ou truncada.",
      D: "Julgar a habilidade linguística e o vocabulário gramatical do estudante antes de autorizar a consulta às fontes especializadas.",
      E: "Controlar rigorosamente a duração da interação humana para garantir que nenhuma consulta ultrapasse o limite estrito de dois minutos."
    },
    correctAnswer: "C",
    justification: "Grogan enfatiza que o usuário raramente chega ao balcão fazendo a pergunta exata da sua real necessidade (ex: pede 'um livro sobre África', mas na verdade precisa da taxa de mortalidade infantil em Angola em 2020). A entrevista de referência clarifica a dúvida oculta mediante perguntas abertas e escuta ativa.",
    reference: "Grogan (1995, 2001) - 'A prática do serviço de referência'"
  },
  {
    id: "mq_m11_4",
    moduleId: "m11",
    text: "O Programa de Comutação Bibliográfica (COMUT), instituído pelo Ministério da Educação e mantido pelo IBICT, é um dos mais tradicionais serviços cooperativos das bibliotecas universitárias brasileiras. A função primária do COMUT é:",
    options: {
      A: "Substituir automaticamente as penalidades por atraso na devolução mediante a entrega compulsória de livros novos ao acervo.",
      B: "Transferir a catalogação de monografias e periódicos do formato MARC 21 para o padrão simplificado de etiquetas de inventário.",
      C: "Remeter periodicamente balancetes patrimoniais de descarte e baixa de bens móveis aos órgãos de controle externo e fiscalização.",
      D: "Possibilitar a obtenção de cópias de documentos científicos de bibliotecas parceiras nacionais e internacionais quando ausentes no acervo local.",
      E: "Distribuir licenças corporativas de ferramentas antivírus e programas utilitários aos terminais de estudo de estudantes no campus."
    },
    correctAnswer: "D",
    justification: "O COMUT é a rede cooperativa nacional de compartilhamento de acervos: quando o pesquisador precisa de um artigo que a Unicamp não assina, o bibliotecário aciona o COMUT para solicitar a cópia digital ou reprográfica junto à biblioteca-base depositária (como USP, UFRJ ou bibliotecas internacionais).",
    reference: "IBICT - Programa de Comutação Bibliográfica (COMUT)"
  },
  {
    id: "mq_m11_5",
    moduleId: "m11",
    text: "Na prestação do moderno Serviço de Referência Virtual (SRV) em bibliotecas acadêmicas, a modalidade de atendimento 'Síncrono' difere da modalidade 'Assíncrona' porque na modalidade Síncrona:",
    options: {
      A: "A resposta é digitada pelo setor técnico e expedida por remessa física via correios com prazo padrão de até trinta dias úteis.",
      B: "O consulente é compelido a registrar seu comparecimento presencial na recepção da biblioteca para validação de identidade física.",
      C: "A elaboração do parecer informacional é confiada a agentes conversacionais automatizados sem nenhuma supervisão de bibliotecários.",
      D: "O sistema de consulta funciona exclusivamente durante períodos de recesso escolar, fechando-se integralmente durante o semestre letivo.",
      E: "A comunicação entre bibliotecário e usuário transcorre em tempo real (como em sessões interativas de chat ou vídeo online)."
    },
    correctAnswer: "E",
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
      A: "Um processo de gestão estratégica que identifica demandas e concebe produtos e serviços que agregam valor e satisfazem o usuário.",
      B: "Uma sequência de ações promocionais e distribuição de souvenirs voltadas exclusivamente a ampliar métricas de redes sociais.",
      C: "Uma política administrativa que impõe a cobrança compulsória de preços públicos em todas as modalidades de atendimento do setor.",
      D: "A transferência remunerada de bancos de dados com informações cadastrais de leitores a corporações de publicidade direcionada.",
      E: "A substituição gradativa de acervos didáticos recomendados por revistas ilustradas populares para avolumar o trânsito nos salões."
    },
    correctAnswer: "A",
    justification: "Para Amaral, marketing é uma filosofia de gestão integrada orientada ao usuário: começa no diagnóstico acurado de necessidades da comunidade, passa pelo design do serviço (produto), definição dos canais de entrega (praça), custos de transação para o usuário (preço) e comunicação efetiva (promoção).",
    reference: "Amaral (1998, 2011) - 'Marketing da informação: entre a teoria e a prática'"
  },
  {
    id: "mq_m12_2",
    moduleId: "m12",
    text: "Ao transpor o clássico Composto Mercadológico (Mix de Marketing / 4 Ps de McCarthy e Kotler) para o ambiente de bibliotecas universitárias, o pilar da 'Praça' (Place / Distribuição) manifesta-se concretamente através de:",
    options: {
      A: "Spots sonoros e informes radiofônicos veiculados em veículos de imprensa externa para noticiar lançamentos de editais de compras.",
      B: "Canais físicos e digitais de entrega, acessibilidade, horários, ergonomia de leitura e conexões remotas seguras (VPN/CAFe).",
      C: "Tabelas escalonadas de cobrança financeira aplicadas a títulos devolvidos fora do prazo regulamentar pelos usuários do sistema.",
      D: "Ementas programáticas de oficinas pedagógicas sobre normas de formatação de teses e citações segundo a ABNT NBR 10520.",
      E: "Volume total de páginas encadernadas e peso de cadernos gráficos de compêndios didáticos adotados no ciclo básico universitário."
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
      A: "Subdividir os espaços físicos dos salões de leitura por meio de divisórias opacas baseadas no gênero ou perfil biológico dos consulentes.",
      B: "Descentralizar as decisões orçamentárias alienando lotes de livros patrimoniados para empresas privadas de leilão judicial.",
      C: "Dividir a comunidade em grupos homogêneos de interesses comuns (graduandos, pesquisadores, docentes) para ofertar serviços sob medida.",
      D: "Assegurar regalias exclusivas de circulação bibliográfica aos professores titulares em detrimento de técnicos administrativos e alunos.",
      E: "Organizar fisicamente as monografias nas estantes de aço segundo a tonalidade cromática das capas e a dimensão em centímetros da lombada."
    },
    correctAnswer: "C",
    justification: "Segmentar é reconhecer a heterogeneidade da comunidade acadêmica: a demanda de um calouro que precisa se ambientar na universidade é totalmente distinta da demanda de um pós-doutorando que busca busca de patentes ou dados de pesquisa. Tratar todos igualmente gera ineficiência; o marketing exige serviços customizados por segmento.",
    reference: "Amaral (2011) / Kotler (2000)"
  },
  {
    id: "mq_m12_4",
    moduleId: "m12",
    text: "Em bibliotecas públicas e universitárias gratuitas, onde não há cobrança direta de mensalidades pela consulta ao acervo, como a teoria do marketing interpreta o pilar do 'Preço' (Price) para o usuário?",
    options: {
      A: "O elemento de precificação é nulo e inoperante em qualquer dimensão econômica por força do princípio da gratuidade universitária.",
      B: "O valor é fixado compulsoriamente pela somatória da remuneração bruta do quadro efetivo de servidores da respectiva biblioteca.",
      C: "O custo equivale ao preço de capa estipulado no código de barras impresso pelo livreiro comercial no ato do faturamento de venda.",
      D: "O preço engloba custos não monetários: tempo despendido, esforço cognitivo exigido, atritos com interfaces e perda de privacidade.",
      E: "O encargo é quantificado pela cota orçamentária gasta com energia elétrica e impressão de fichas de controle pelo sistema local."
    },
    correctAnswer: "D",
    justification: "Em serviços públicos de informação, o 'preço' pago pelo usuário é o custo de transação: o tempo que ele gasta para ir à biblioteca ou decifrar um catálogo complicado, o estresse emocional de ser mal atendido e o esforço mental. Se esse 'custo' for muito alto, o usuário desiste da biblioteca e recorre à busca rápida na internet.",
    reference: "Amaral (2011) - 'Marketing da informação' / Zeithaml (1988)"
  },
  {
    id: "mq_m12_5",
    moduleId: "m12",
    text: "O LibQUAL+ é um dos instrumentos de avaliação de qualidade em serviços mais amplamente adotados por consórcios de bibliotecas acadêmicas no mundo (desenvolvido pela Association of Research Libraries - ARL). O LibQUAL+ baseia-se na metodologia SERVQUAL para medir a qualidade dos serviços a partir da comparação entre:",
    options: {
      A: "O percentual de monografias descritas no modelo prescritivo do AACR2r e o volume transcrito nas diretrizes do padrão RDA.",
      B: "O montante monetário das anuidades cobradas pela instituição e os preços praticados pelas distribuidoras de livros acadêmicos.",
      C: "A capacidade de processamento de dados dos servidores de rede institucionais e a performance dos computadores residenciais dos leitores.",
      D: "O contingente de bibliotecários graduados em exercício e o quantitativo de estagiários matriculados no turno da noite.",
      E: "As expectativas mínimas e desejadas dos usuários e o nível de serviço que eles efetivamente percebem ter recebido (Gap de percepção)."
    },
    correctAnswer: "E",
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
      A: "Estudo da Comunidade ➔ Políticas de Seleção ➔ Aquisição ➔ Desbastamento/Descarte ➔ Avaliação da Coleção ➔ Preservação do Acervo.",
      B: "Levantamento Orçamentário ➔ Procedimento Licitatório ➔ Emissão de Empenho ➔ Liquidação de Nota ➔ Pagamento ➔ Tombamento Patrimonial.",
      C: "Catalogação Descritiva ➔ Classificação Temática ➔ Indexação por Assunto ➔ Preparo Físico ➔ Carimbagem de Folhas ➔ Disposição na Estante.",
      D: "Compra no Fornecedor ➔ Registro de Empréstimo ➔ Renovação do Prazo ➔ Devolução ao Balcão ➔ Cobrança de Multa ➔ Notificação Administrativa.",
      E: "Captura por Escaneamento ➔ Reconhecimento OCR ➔ Upload no Servidor ➔ Colheita por OAI-PMH ➔ Replicação em Backup ➔ Exclusão de Ficheiro."
    },
    correctAnswer: "A",
    justification: "Vergueiro (1989) esquematiza o processo como um ciclo ininterrupto: tudo começa conhecendo a comunidade (estudo da comunidade), definindo critérios explícitos em documento formal (políticas de seleção), executando a aquisição, retirando o material obsoleto (desbastamento/descarte), julgando a utilidade do acervo (avaliação) e assegurando sua guarda perene (preservação).",
    reference: "Vergueiro (1989) - 'Desenvolvimento de coleções'"
  },
  {
    id: "mq_m13_2",
    moduleId: "m13",
    text: "Uma formalizada 'Política de Desenvolvimento de Coleções' é um documento de gestão indispensável para bibliotecas universitárias. Qual é a principal função institucional desse documento?",
    options: {
      A: "Retirar a faculdade de indicação de referências bibliográficas do corpo docente dos departamentos de graduação e pós-graduação.",
      B: "Fixar diretrizes transparentes para seleção, aquisição, desbastamento e doações, protegendo a unidade de pressões arbitrárias.",
      C: "Definir o regime disciplinar e as punições funcionais aplicáveis a servidores públicos que cometerem faltas administrativas.",
      D: "Regulamentar a precificação de venda em hasta pública de exemplares descartados para arrecadação de receitas acessórias.",
      E: "Dispensar a obrigatoriedade de conferência patrimonial e a realização dos inventários periódicos determinados pelos tribunais de contas."
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
      A: "Incorporar todos os volumes ofertados para elevar a contagem estatística sem avaliação prévia de relevância curricular.",
      B: "Impor a recusa sumária de qualquer obra recebida por doação para prevenir o acúmulo de poeira e fungos nas áreas de guarda.",
      C: "Firmar Termo de Doação Sem Restrições, assegurando à biblioteca plena autonomia para incorporar, doar ou descartar o item.",
      D: "Armazenar doações em compartimentos trancados sem inclusão nos catálogos públicos para evitar demandas de empréstimo.",
      E: "Cobrar taxa de custódia patrimonial em pecúnia do doador para ressarcir despesas com processamento técnico dos títulos."
    },
    correctAnswer: "C",
    justification: "Doação não criteriosa entope acervos com materiais inúteis, mofados ou defasados. Uma política séria condiciona a doação à assinatura de um Termo de Doação Sem Restrições: a biblioteca decide se incorpora o item ou se o descarta, sem obrigação de mantê-lo eternamente na estante.",
    reference: "Vergueiro (1989) / Weitzel (2013)"
  },
  {
    id: "mq_m13_4",
    moduleId: "m13",
    text: "Na fase de desbastamento e descarte de coleções em bibliotecas, a metodologia norte-americana CREW (Continuous Review, Evaluation, and Weeding) adota o acrônimo MUSTIE para sintetizar seis motivos imperativos para retirar um livro da estante. No método MUSTIE, a letra 'M' e a letra 'U' correspondem a obras:",
    options: {
      A: "Modernizadas no suporte digital e Úteis para a montagem de bibliografias básicas de cursos de graduação em implantação.",
      B: "Multilíngues de ampla circulação internacional e Universais nos conceitos epistemológicos aplicados à ciência moderna.",
      C: "Memoráveis para a história institucional da unidade e Utilizadas com frequência regular em projetos de extensão universitária.",
      D: "Misleading (conteúdo incorreto / obsoleto cientificamente) e Ugly (suporte físico degradado sem viabilidade de restauração).",
      E: "Manuscritas de procedência rara histórica e Usadas com restrição protocolar estrita em salas de guarda especial de tesouros."
    },
    correctAnswer: "D",
    justification: "O critério MUSTIE do método CREW estabelece descarte quando o livro é: Misleading (conteúdo enganoso/falso pela defasagem), Ugly (deteriorado/feio), Superseded (substituído por edição nova), Trivial (sem mérito acadêmico), Irrelevant (irrelevante para a comunidade) ou Elsewhere (obtido facilmente em outras fontes).",
    reference: "Larson (2012) - 'CREW: A Weeding Manual for Modern Libraries'"
  },
  {
    id: "mq_m13_5",
    moduleId: "m13",
    text: "Na etapa de 'Avaliação da Coleção', os métodos centrados na coleção (Collection-centered) diferem substancialmente dos métodos centrados no usuário (Use-centered). Constitui um método de avaliação estritamente centrado no Uso:",
    options: {
      A: "A conferência de títulos do acervo contra listagens e bibliografias padronizadas de referência internacional.",
      B: "A contagem volumétrica do quantitativo de obras físicas alocadas nas diferentes classes decimais da CDD.",
      C: "O julgamento estético e a inspeção das condições materiais de conservação das capas dos livros raros.",
      D: "A medição linear em metros das prateleiras metálicas disponíveis para expansão de novos volumes impressos.",
      E: "A análise estatística de empréstimos, renovações, consultas no recinto e pedidos de comutação bibliográfica."
    },
    correctAnswer: "E",
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
      A: "Identificar e descrever os atributos físicos e contextuais extrínsecos da obra, garantindo sua singularização no catálogo.",
      B: "Analisar o conteúdo conceitual e semântico do texto para traduzi-lo em um número de classificação decimal da CDD ou CDU.",
      C: "Elaborar vocabulários controlados e tesauros documentários bilíngues para a padronização de descritores de assunto.",
      D: "Calcular o valor das indenizações patrimoniais a serem imputadas ao leitor em caso de extravio definitivo do livro.",
      E: "Realizar o restauro manual de rasgos no papel celulósico com aplicação de adesivos reversíveis e papel de fibra longa."
    },
    correctAnswer: "A",
    justification: "A Representação Descritiva (Catalogação) lida com as características externas e formais do objeto (quem escreveu, qual o título, qual a editora, ano, dimensões). A Representação Temática (Classificação e Indexação) lida com o conteúdo semântico intrínseco (sobre o que a obra trata).",
    reference: "Mey & Silveira (2009) - 'Catalogação no plural'"
  },
  {
    id: "mq_m14_2",
    moduleId: "m14",
    text: "Em suas clássicas 'Rules for a Dictionary Catalog' (1876), Charles Ammi Cutter enunciou os objetivos permanentes do catálogo da biblioteca que até hoje fundamentam os códigos internacionais. O primeiro objetivo enunciado por Cutter diz respeito à capacidade de o catálogo permitir que uma pessoa encontre um livro quando se conhece:",
    options: {
      A: "A espessura da lombada em milímetros ou o número de empenho financeiro do contrato governamental de fornecimento.",
      B: "O Autor, o Título ou o Assunto da obra, assegurando acessos múltiplos pelas vias fundamentais de consulta.",
      C: "O número de telefone e o registro empresarial da gráfica que confeccionou a impressão física da edição original.",
      D: "A cor exata do revestimento percalina da encadernação e o monograma do antigo colecionador de livros raros.",
      E: "O código hash de integridade criptográfica armazenado nos nós computacionais do repositório digital de backup."
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
      A: "Uma central bibliográfica única em Genebra deve registrar toda a produção intelectual mundial, vedando catálogos autônomos.",
      B: "As obras publicadas devem ser distribuídas sem registros bibliográficos catalográficos, fiando-se na indexação por IA.",
      C: "Cada país cataloga de forma definitiva sua produção editorial nacional e compartilha o registro universalmente sem duplicação.",
      D: "Os catálogos devem adotar compulsoriamente a língua latina como código linguístico comum em detrimento dos vernáculos nacionais.",
      E: "Os sistemas decimais de classificação devem ser suprimidos em favor de etiquetas livres e marcações populares (folcsonomias)."
    },
    correctAnswer: "C",
    justification: "A filosofia do CBU é o compartilhamento global descentralizado: 'catalogar uma vez para o mundo inteiro'. A agência bibliográfica nacional de cada país cria o registro padrão definitivo de suas publicações e o distribui no formato de intercâmbio internacional (evitando esforço redundante).",
    reference: "Anderson (1974) / IFLA UBCIM Programme"
  },
  {
    id: "mq_m14_4",
    moduleId: "m14",
    text: "No Brasil, a instituição oficial que atua como Agência Bibliográfica Nacional, encarregada de executar o Depósito Legal (Lei Federal nº 10.994/2004) e coordenar o controle bibliográfico da memória editorial do país, é a:",
    options: {
      A: "Biblioteca Central César Lattes (BCCL), responsável pelo gerenciamento de serviços no âmbito exclusivo da Unicamp.",
      B: "Academia Brasileira de Letras (ABL), entidade literária voltada ao cultivo da língua portuguesa e da criação artística.",
      C: "Câmara Brasileira do Livro (CBL), associação privada de natureza representativa do setor livreiro e editorial comercial.",
      D: "Fundação Biblioteca Nacional (FBN), encarregada da guarda da produção editorial e edição da Bibliografia Brasileira.",
      E: "Coordenação de Aperfeiçoamento de Pessoal de Nível Superior (CAPES), agência gestora do fomento à pós-graduação nacional."
    },
    correctAnswer: "D",
    justification: "A Fundação Biblioteca Nacional (FBN) é a depositária oficial da memória bibliográfica brasileira. A Lei do Depósito Legal obriga editores e autores a enviarem exemplares de tudo que é publicado no território nacional para a FBN, permitindo a produção da Bibliografia Brasileira.",
    reference: "Lei Federal nº 10.994/2004 / Fundação Biblioteca Nacional"
  },
  {
    id: "mq_m14_5",
    moduleId: "m14",
    text: "O Catálogo em Linha de Acesso Público (OPAC - Online Public Access Catalog) representou a transição da catalogação em fichas para o meio digital. Nos modernos OPACs de bibliotecas universitárias integrados a interfaces web responsivas, o recurso de 'Busca Facetada' permite que o usuário:",
    options: {
      A: "Atualize credenciais acadêmicas e senhas da rede de computadores institucionais sem intervenção dos técnicos de suporte.",
      B: "Suprima registros do catálogo eletrônico que versem sobre temas considerados desinteressantes ou ultrapassados no estudo.",
      C: "Realize a transferência não autorizada de obras cinematográficas e faixas de áudio comercial sem pagamento de direitos.",
      D: "Imprima fichas de cartolina padronizadas no formato 7,5 x 12,5 cm sem utilizar os procedimentos oficiais do sistema.",
      E: "Refine os resultados aplicando filtros interativos dinâmicos por autor, data, tipo documental, idioma e unidade gestora."
    },
    correctAnswer: "E",
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
      A: "Pelo TÍTULO da obra, com elaboração de entrada secundária obrigatória para o primeiro autor citado na fonte principal.",
      B: "Pelo primeiro autor listado na folha de rosto, elaborando-se entrada secundária para os demais seguidos da expressão [et al.].",
      C: "Pelo pesquisador que ostentar a maior titulação acadêmica formal entre os participantes da equipe executora do trabalho.",
      D: "Pelo nome da casa editorial comercial que financiou e coordenou a produção física e industrial da edição monográfica.",
      E: "Abrindo-se quatro registros bibliográficos monográficos totalmente autônomos no catálogo para cada um dos autores intelectuais."
    },
    correctAnswer: "A",
    justification: "Regra clássica do AACR2 (21.6C2): havendo responsabilidade compartilhada entre 4 ou mais pessoas e nenhuma for indicada como autor principal, a Entrada Principal é compulsoriamente PELO TÍTULO da obra. Faz-se entrada secundária para a primeira pessoa mencionada na fonte principal de informação.",
    reference: "AACR2r, Regra 21.6C2 / Ribeiro (2012)"
  },
  {
    id: "mq_m15_2",
    moduleId: "m15",
    text: "O AACR2 prevê casos específicos em que uma Entidade Coletiva (Corporate Body) pode ser escolhida como Ponto de Acesso Principal (Entrada Principal). Conforme a regra 21.1B2, uma instituição terá entrada principal para uma obra quando o documento tratar de:",
    options: {
      A: "Poesias líricas e peças teatrais monográficas compostas individualmente por servidores vinculados aos quadros de uma empresa.",
      B: "Obras administrativas sobre a própria entidade (políticas, operações, finanças), relatórios de comissões, atos legais ou anais de eventos.",
      C: "Compêndios didáticos de física elementar adotados nos cursos regulares de engenharia sem menção aos atos institucionais.",
      D: "Monografias de ficção científica lançadas por selos comerciais privados com distribuição regular no varejo livreiro.",
      E: "Vocabulários terminológicos gerais e dicionários enciclopédicos bilíngues de uso comum da população escolar."
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
      A: "Área 2: Edição, histórico de tiragens e menções de responsabilidade secundárias vinculadas à nova publicação.",
      B: "Área 4: Publicação, Distribuição etc. (dados da imprenta comercial, localidade, casa editora e datação de saída).",
      C: "Área 1: Título e Indicação de Responsabilidade autoral (título principal, títulos equivalentes, subtítulo e autores).",
      D: "Área 5: Descrição Física (extensão em páginas, materiais ilustrativos complementares e dimensões em centímetros).",
      E: "Área 7: Notas descritivas gerais (histórico, notas de dissertação acadêmica, restrições e sumários analíticos)."
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
      A: "Padronizar o corpo da fonte tipográfica e o espacejamento mecânico nos rótulos apostos no lombo dos livros encadernados.",
      B: "Exigir que trabalhos acadêmicos defendidos perante a pós-graduação obedeçam a limites rígidos de extensão vocabular no título.",
      C: "Efetuar a tradução literal automatizada dos cabeçalhos dos catálogos para a língua inglesa para exportação de dados.",
      D: "Reunir sob um único cabeçalho padronizado manifestações e traduções de uma mesma obra editadas sob títulos variantes.",
      E: "Substituir o nome civil do autor pessoal por designações criptônimas ou pseudônimos artísticos de registro secundário."
    },
    correctAnswer: "D",
    justification: "O Título Uniforme (Tag MARC 240) é um mecanismo de controle e reunião: se uma obra como 'Dom Quixote' foi publicada como 'El ingenioso hidalgo Don Quijote de la Mancha', 'O engenhoso fidalgo Dom Quixote' ou 'Don Quixote', o título uniforme padronizado agrupa todas essas variações sob uma única forma de acesso.",
    reference: "AACR2r, Capítulo 25 / Mey & Silveira (2009)"
  },
  {
    id: "mq_m15_5",
    moduleId: "m15",
    text: "Na descrição de uma monografia impressa conforme o AACR2, se a fonte principal de informação (folha de rosto) não indicar a data de publicação, distribuição ou copyright, mas o catalogador puder inferir com segurança a década de publicação provável, a regra de pontuação e colchetes determina registrar a data da seguinte forma:",
    options: {
      A: "Adoção da locução por extenso 'sem data de emissão' registrada em caixa baixa na folha de rosto.",
      B: "Inclusão da expressão 'década de vinte' entre aspas tipográficas simples no corpo do texto da imprenta.",
      C: "Registro de parênteses curvos envolvendo o numeral com ponto de interrogação posposto: (2020?).",
      D: "Transcrição isolada de barras oblíquas bilaterais delimitando os quatro dígitos calendários: /2020/.",
      E: "Adoção da notação canônica com colchetes e interrogação no dígito incerto correspondente: [202-?]."
    },
    correctAnswer: "E",
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
      A: "Possuir exatamente 24 caracteres fixos (00 a 23) que fornecem parâmetros de máquina como status, tipo e nível bibliográfico.",
      B: "Constituir um bloco de texto livre em linguagem natural reservado para as anotações críticas pessoais do bibliotecário catalogador.",
      C: "Conter o arquivo de imagem comprimida em alta definição referente à digitalização da capa e do sumário da publicação.",
      D: "Armazenar a transcrição integral do resumo analítico da obra vertido simultaneamente para três línguas de intercâmbio científico.",
      E: "Apresentar estrutura equivalente ao campo variável 245, comportando indicadores de posição e subcampos com delimitadores alfanuméricos."
    },
    correctAnswer: "A",
    justification: "O Líder do MARC 21 tem extensão rígida e invariável de exatamente 24 posições de caracteres (00 a 23). Ele contém metadados de máquina essenciais: comprimento total do registro, status (novo, corrigido), tipo de registro (texto impresso, recurso eletrônico, mapa) e nível bibliográfico (monográfico, seriado, analítico).",
    reference: "MARC 21 Format for Bibliographic Data (Library of Congress) / Furrie (2000)"
  },
  {
    id: "mq_m16_2",
    moduleId: "m16",
    text: "No formato MARC 21, os campos de controle fixos ocupam as tags do bloco 00X (001 a 008). O campo 008, denominado 'Elementos de Dados de Comprimento Fixo', possui extrema relevância técnica em catálogos eletrônicos porque:",
    options: {
      A: "Controla o saldo de multas pecuniárias aplicadas aos estudantes inadimplentes com o setor de circulação da unidade.",
      B: "Não possui indicadores nem subcampos, agrupando em 40 posições fixas (00 a 39) dados vitais codificados para filtros e buscas.",
      C: "Substitui os campos variáveis 650 para indexação temática mediante adoção de números arábicos contínuos e sequenciais.",
      D: "Destina-se ao cadastramento dos dados biográficos de doadores de compêndios raros com valor histórico para a universidade.",
      E: "Armazena as chaves de acesso criptografadas dos catalogadores autorizados a operar o módulo de catalogação do SIGB."
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
      A: "Subcampos $x (código analítico), $y (cronologia editorial) e $z (anotações de controle bibliográfico).",
      B: "Subcampos $1 (primeiro autor nominado), $2 (coautor colaborador) e $3 (material complementar).",
      C: "Subcampos $a (título principal), $b (subtítulo / outras informações sobre o título) e $c (indicação de responsabilidade).",
      D: "Subcampos $d (dimensões físicas), $e (material gráfico suplementar) e $f (formato de suporte).",
      E: "Subcampos $t (título uniforme alternativo), $u (identificador persistente URI) e $v (designação de volume)."
    },
    correctAnswer: "C",
    justification: "A anatomia universal do campo 245 do MARC 21 é: Tag 245 / Indicadores / $a Título principal : $b subtítulo ou outras informações sobre o título / $c indicação de responsabilidade (autores, tradutores, ilustradores).",
    reference: "Library of Congress - MARC 21 Bibliographic Field 245"
  },
  {
    id: "mq_m16_4",
    moduleId: "m16",
    text: "Em um registro MARC 21 bibliográfico, a tag reservada para armazenar o Ponto de Acesso Principal (Entrada Principal) por Nome Pessoal de autor é a tag:",
    options: {
      A: "Tag 245 (Campo de Título e Indicação de Responsabilidade da publicação).",
      B: "Tag 700 (Campo de Ponto de Acesso Secundário para Nome Pessoal de colaborador).",
      C: "Tag 650 (Campo de Ponto de Acesso de Assunto Tópico em vocabulário controlado).",
      D: "Tag 100 (Campo de Ponto de Acesso Principal - Nome Pessoal do autor responsável).",
      E: "Tag 856 (Campo de Localização e Acesso Eletrônico a documentos remotos na web)."
    },
    correctAnswer: "D",
    justification: "No MARC 21: Bloco 1XX = Entradas Principais. Tag 100 = Nome Pessoal; Tag 110 = Entidade Coletiva; Tag 111 = Evento/Conferência; Tag 130 = Título Uniforme como entrada principal. A Tag 700 é para Entrada Secundária de pessoa e a 650 para Assunto Tópico.",
    reference: "MARC 21 Bibliographic Format / Furrie (2000)"
  },
  {
    id: "mq_m16_5",
    moduleId: "m16",
    text: "Com a expansão das bibliotecas digitais e dos repositórios institucionais (como o Repositório da Unicamp), o campo 856 do formato MARC 21 tornou-se indispensável no registro bibliográfico. A finalidade do campo 856 é registrar:",
    options: {
      A: "A numeração serial e o código de barras patrimonial aposto no exemplar físico tombado no acervo.",
      B: "A localização de chamada da prateleira na estante metálica correspondente ao piso do salão de guarda.",
      C: "O código alfanumérico do profissional encadernador encarregado do restauro da costura da monografia.",
      D: "A notação decimal de classificação do assunto extraída das tabelas oficiais da CDD ou da CDU.",
      E: "A Localização e Acesso Eletrônico, fornecendo URL, Handle ou URI para acesso direto ao documento na internet."
    },
    correctAnswer: "E",
    justification: "O campo 856 (Electronic Location and Access) é a ponte que une o catálogo ao repositório: o subcampo $u armazena a URI/URL que permite ao leitor clicar diretamente no OPAC e abrir o arquivo digital da tese, artigo ou livro em texto integral.",
    reference: "Library of Congress - MARC 21 Field 856"
  }
];
