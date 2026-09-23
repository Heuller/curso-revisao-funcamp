import type { ModuleQuizQuestion } from './types';

export const moduleQuizzesPart3: ModuleQuizQuestion[] = [
  // ==========================================
  // MÓDULO 17: RDA (Resource Description and Access)
  // ==========================================
  {
    id: "mq_m17_1",
    moduleId: "m17",
    text: "O padrão internacional de catalogação RDA (Resource Description and Access), concebido para suceder ao AACR2 e alinhar os catálogos à Web Semântica, adotou o princípio fundamental denominado 'Take what you see' (Aceite o que você vê). Como consequência direta desse princípio na transcrição dos dados da fonte:",
    options: {
      A: "O catalogador é obrigado a traduzir todos os títulos de obras estrangeiras para a língua vernácula da biblioteca.",
      B: "Foram abolidas abreviações arbitrárias historicamente impostas pelo AACR2 (como 'p.', 'v.', 'il.', 'et al.'), transcrevendo-se as informações de títulos e menções de responsabilidade exatamente como grafadas na fonte de informação.",
      C: "Ficou proibida a catalogação de e-books e recursos da internet.",
      D: "Os pontos de acesso secundários para autores foram extintos.",
      E: "Exige-se que o catalogador corrija silenciosamente os erros ortográficos do autor na transcrição do título."
    },
    correctAnswer: "B",
    justification: "O princípio 'Take what you see' baniu o hábito do AACR2 de encurtar e abreviar termos artificialmente (resquício da era das fichas de papel com espaço físico limitado). No RDA, registra-se 'páginas' por extenso, 'ilustrações', e os nomes de todos os autores são transcritos sem corte arbitrário por [et al.].",
    reference: "Oliver (2011) - 'Introdução ao RDA' / RDA Toolkit"
  },
  {
    id: "mq_m17_2",
    moduleId: "m17",
    text: "Uma das rupturas conceituais mais expressivas entre o AACR2 e o RDA residiu na extinção da 'Designação Geral do Material' (DGM / GMD - subcampo $h da tag 245 no MARC 21). Para substituir a antiga DGM com maior granularidade e precisão semântica na descrição de suportes digitais e analógicos, o RDA introduziu os seguintes três elementos fundamentais (mapeados nos campos MARC 336, 337 e 338):",
    options: {
      A: "Autor, Editora e Ano de Publicação.",
      B: "Tipo de Conteúdo (Content Type), Tipo de Mídia (Media Type) e Tipo de Suporte (Carrier Type).",
      C: "Texto, Imagem e Áudio.",
      D: "ISBN, ISSN e DOI.",
      E: "Classe, Divisão e Seção."
    },
    correctAnswer: "B",
    justification: "A antiga DGM (como `[recurso eletrônico]` ou `[gravação de som]`) misturava formato com suporte. O RDA separou essas dimensões no trio 33X: Tipo de Conteúdo (336 - ex: 'texto', 'música notada'), Tipo de Mídia (337 - o dispositivo para ler, ex: 'computador', 'sem mediação') e Tipo de Suporte (338 - o recipiente físico, ex: 'volume', 'recurso online').",
    reference: "Oliver (2011) / Library of Congress - RDA in MARC"
  },
  {
    id: "mq_m17_3",
    moduleId: "m17",
    text: "No tratamento da responsabilidade compartilhada por múltiplos autores, como o RDA superou a tradicional e restritiva 'Regra de Três' do AACR2?",
    options: {
      A: "O RDA proibiu que obras com mais de três autores sejam catalogadas.",
      B: "O RDA eliminou o limite artificial de três autores: permite transcrever todos os nomes presentes na fonte principal e autoriza a criação de pontos de acesso autorizados para quantos criadores forem considerados relevantes pela política da biblioteca.",
      C: "O RDA obriga que a entrada principal seja sempre feita pelo nome da editora.",
      D: "O RDA restringe a catalogação a apenas um único autor por registro.",
      E: "O RDA adotou a 'Regra de Cinco' autores como substituta idêntica."
    },
    correctAnswer: "B",
    justification: "No AACR2, se a obra tinha 4 autores, a entrada era obrigatória pelo título e 3 autores sumiam em [et al.]. No RDA (focado no ambiente digital), todos os coautores podem ser transcritos e todos podem ter pontos de acesso criados no catálogo, garantindo reconhecimento autoral integral.",
    reference: "Oliver (2011) / RDA Steering Committee"
  },
  {
    id: "mq_m17_4",
    moduleId: "m17",
    text: "O padrão RDA foi construído formalmente em conformidade com os modelos conceituais da família IFLA (especialmente FRBR e IFLA LRM). Essa fundamentação orientada a Entidades e Relacionamentos confere ao RDA a capacidade nativa de:",
    options: {
      A: "Imprimir fichas catalográficas em cartolina com maior velocidade mecânica.",
      B: "Interoperar com as tecnologias da Web Semântica e Dados Conectados (Linked Open Data), permitindo que os metadados da biblioteca sejam expressos em tripletos RDF e conectados a bases globais como Wikidata e VIAF.",
      C: "Substituir os bibliotecários por robôs de inteligência artificial em todas as etapas.",
      D: "Eliminar a necessidade de controle de autoridade de nomes.",
      E: "Operar apenas em computadores desconectados da internet."
    },
    correctAnswer: "B",
    justification: "A grande revolução do RDA é transformar o catálogo da biblioteca de um silo de texto fechado (strings) em uma rede semântica de entidades conectadas (things): ao usar identificadores persistentes e relacionamentos explícitos, o catálogo passa a dialogar com os padrões da Web Semântica (RDF, OWL, SPARQL).",
    reference: "Coyle (2016) - 'FRBR, Before and After' / Oliver (2011)"
  },
  {
    id: "mq_m17_5",
    moduleId: "m17",
    text: "Ao catalogar um livro digital (e-book em formato PDF) segundo as diretrizes do RDA, os valores controlados corretos a serem atribuídos aos campos MARC 21 de Tipo de Conteúdo (336), Tipo de Mídia (337) e Tipo de Suporte (338) são, respectivamente:",
    options: {
      A: "texto (336) / computador (337) / recurso online (338).",
      B: "imagem fixa (336) / sem mediação (337) / volume (338).",
      C: "áudio (336) / áudio (337) / disco de áudio (338).",
      D: "vídeo (336) / vídeo (337) / fita de vídeo (338).",
      E: "microforma (336) / projetado (337) / microficha (338)."
    },
    correctAnswer: "A",
    justification: "Para um e-book online: Tipo de Conteúdo = 'texto' (natureza intelectual da informação); Tipo de Mídia = 'computador' (dispositivo de mediação para decodificar o arquivo binário); Tipo de Suporte = 'recurso online' (o veículo digital acessado via rede sem mídia física discreta).",
    reference: "Library of Congress - RDA Term and Code Lists for MARC 21"
  },

  // ==========================================
  // MÓDULO 18: FRBR e IFLA LRM
  // ==========================================
  {
    id: "mq_m18_1",
    moduleId: "m18",
    text: "No modelo conceitual FRBR (Functional Requirements for Bibliographic Records) e no seu sucessor unificado IFLA LRM (Library Reference Model), as Entidades do Grupo 1 representam os produtos do esforço artístico ou intelectual. A hierarquia canônica de quatro níveis que compõe a linhagem WEMI é formada por:",
    options: {
      A: "Autor, Editora, Ano e Volume.",
      B: "Obra (Work), Expressão (Expression), Manifestação (Manifestation) e Item (Item).",
      C: "Dado, Metadado, Informação e Conhecimento.",
      D: "Conceito, Objeto, Evento e Lugar.",
      E: "Título, Subtítulo, Assunto e Chamada."
    },
    correctAnswer: "B",
    justification: "WEMI é o cerne do modelo FRBR: Obra (criação intelectual abstrata) ➔ Expressão (realização da obra em forma linguística/artística específica) ➔ Manifestação (corporificação física ou digital produzida por uma editora) ➔ Item (o exemplar físico ou arquivo singular existente na estante).",
    reference: "IFLA (1998) - 'Functional Requirements for Bibliographic Records' / IFLA LRM (2017)"
  },
  {
    id: "mq_m18_2",
    moduleId: "m18",
    text: "Considere o romance 'Memórias Póstumas de Brás Cubas', criado por Machado de Assis em 1881. A tradução desse texto para a língua inglesa realizada por Gregory Rabassa constitui, na rigorosa terminologia do modelo FRBR:",
    options: {
      A: "Uma nova Obra (Work) inteiramente diferente.",
      B: "Uma nova Expressão (Expression) da mesma Obra original de Machado de Assis.",
      C: "Apenas um Item (Item) físico com código de barras da biblioteca.",
      D: "Uma Manifestação (Manifestation) idêntica à edição original brasileira de 1881.",
      E: "Um Ponto de Acesso de Assunto Tópico."
    },
    correctAnswer: "B",
    justification: "Na modelagem FRBR: qualquer alteração na realização intelectual ou semiótica (tradução de idioma, revisão textual de edição crítica, arranjo para outra orquestra) gera uma NOVA EXPRESSÃO da mesma Obra original.",
    reference: "IFLA FRBR (1998) / Moreno (2006)"
  },
  {
    id: "mq_m18_3",
    moduleId: "m18",
    text: "O modelo FRBR definiu quatro 'Tarefas do Usuário' (User Tasks) essenciais que os catálogos bibliográficos devem permitir que qualquer pesquisador execute com eficácia. Essas quatro tarefas clássicas são:",
    options: {
      A: "Comprar, Pagar, Vender e Lucrar.",
      B: "Encontrar (Find), Identificar (Identify), Selecionar (Select) e Obter (Obtain).",
      C: "Catalogar, Classificar, Indexar e Tombar.",
      D: "Digitalizar, Preservar, Compactar e Deletar.",
      E: "Ler, Copiar, Colar e Paráfrase."
    },
    correctAnswer: "B",
    justification: "As 4 tarefas clássicas do usuário no FRBR: 1. Encontrar recursos que correspondam aos critérios de busca; 2. Identificar uma entidade (confirmar se é a edição ou autor certo); 3. Selecionar o recurso apropriado às suas necessidades (idioma, suporte); 4. Obter acesso físico ou digital ao item.",
    reference: "IFLA (1998) - FRBR User Tasks"
  },
  {
    id: "mq_m18_4",
    moduleId: "m18",
    text: "No IFLA LRM (Library Reference Model, 2017), modelo de alto nível que consolidou e atualizou os modelos conceituais FRBR, FRAD e FRSAD, a entidade que engloba tanto pessoas físicas quanto grupos de pessoas que atuam como agentes responsáveis na criação ou custódia de recursos é denominada:",
    options: {
      A: "Item.",
      B: "Agente (Agent), subdividido em Pessoa (Person) e Agente Coletivo (Collective Agent).",
      C: "Resumo.",
      D: "Expressão.",
      E: "Objeto Digital."
    },
    correctAnswer: "B",
    justification: "O IFLA LRM simplificou as antigas entidades do Grupo 2 do FRBR (Pessoa e Entidade Coletiva) sob a superentidade 'Agente' (Agent), capaz de realizar ações e assumir responsabilidade legal/intelectual, subdividindo-se em 'Person' (indivíduo humano) e 'Collective Agent' (duas ou mais pessoas agindo conjuntamente, como instituições, empresas ou eventos).",
    reference: "Riva, Le Bœuf & Žumer (2017) - 'IFLA Library Reference Model (LRM)'"
  },
  {
    id: "mq_m18_5",
    moduleId: "m18",
    text: "Na aplicação do modelo WEMI a um caso concreto em uma biblioteca universitária, um exemplar de um livro impresso que possui capa amassada, carimbo de patrimônio da Unicamp e código de barras único na contracapa corresponde tecnicamente à entidade:",
    options: {
      A: "Obra (Work).",
      B: "Expressão (Expression).",
      C: "Manifestação (Manifestation).",
      D: "Item (Item).",
      E: "Agente (Agent)."
    },
    correctAnswer: "D",
    justification: "O Item é a única entidade do Grupo 1 que existe como um exemplar singular e concreto no mundo físico: é o livro específico que você segura nas mãos, com suas anotações marginais, manchas, carimbos de tombo e código de barras individual.",
    reference: "IFLA FRBR (1998) / Mey & Silveira (2009)"
  },

  // ==========================================
  // MÓDULO 19: Classificação Decimal de Dewey (CDD)
  // ==========================================
  {
    id: "mq_m19_1",
    moduleId: "m19",
    text: "A Classificação Decimal de Dewey (CDD), concebida por Melvil Dewey em 1876 e atualmente mantida pela OCLC, estrutura-se sobre uma notação puramente arábica de base decimal. A regra notacional fundamental da CDD estabelece que uma notação básica de classe principal deve conter compulsoriamente no mínimo:",
    options: {
      A: "1 algarismo.",
      B: "2 algarismos.",
      C: "3 algarismos arábicos (como 000, 100 ou 530), inserindo-se obrigatoriamente um ponto decimal após o terceiro dígito em subdivisões mais específicas.",
      D: "4 algarismos separados por barras.",
      E: "Uma letra maiúscula seguida de três números."
    },
    correctAnswer: "C",
    justification: "A notação da CDD é pura (apenas números arábicos) e hierárquica decimal: nenhuma notação de assunto básico tem menos de 3 dígitos (completa-se com zeros, como 500 para Ciências). Após o 3º dígito, insere-se um ponto (ex: 530.1) para expansões analíticas.",
    reference: "Dewey (2011) - Dewey Decimal Classification (DDC 23) / OCLC"
  },
  {
    id: "mq_m19_2",
    moduleId: "m19",
    text: "Na estrutura das 10 Grandes Classes da CDD (Centenas de 000 a 900), o assunto 'Religião e Teologia' e o assunto 'Línguas e Linguística' encontram-se alocados, respectivamente, nas classes:",
    options: {
      A: "100 e 300.",
      B: "200 e 400.",
      C: "500 e 600.",
      D: "700 e 800.",
      E: "000 e 900."
    },
    correctAnswer: "B",
    justification: "A divisão canônica das 10 grandes classes da CDD é: 000 Informação/Gerais; 100 Filosofia/Psicologia; 200 Religião; 300 Ciências Sociais; 400 Línguas/Linguística; 500 Ciências Puras; 600 Tecnologia/Ciências Aplicadas; 700 Artes; 800 Literatura; 900 História/Geografia.",
    reference: "Dewey Decimal Classification Summaries / OCLC"
  },
  {
    id: "mq_m19_3",
    moduleId: "m19",
    text: "Na CDD, as Tabelas Auxiliares (Auxiliary Tables) fornecem notações secundárias para especificar aspectos recorrentes de forma, lugar, língua ou grupo social. Dentre as tabelas auxiliares da CDD, a Tabela 1 (Subdivisões Padrão - Standard Subdivisions) caracteriza-se por:",
    options: {
      A: "Exigir sempre autorização expressa em nota de 'adicione a' no esquema para poder ser utilizada.",
      B: "Poder ser aplicada de forma autônoma a qualquer número básico de assunto do esquema sem necessidade de instrução explícita de adição nas tabelas principais.",
      C: "Representar exclusivamente nomes de países da América Latina.",
      D: "Ser restrita às obras literárias de ficção da classe 800.",
      E: "Utilizar letras gregas maiúsculas."
    },
    correctAnswer: "B",
    justification: "Cobrança onipresente em concursos: A Tabela 1 (subdivisões como -01 Teoria, -02 Compêndios, -03 Dicionários, -05 Periódicos, -07 Ensino) é a ÚNICA tabela da CDD dotada de faculdade autônoma universal: qualquer classificador pode anexá-la ao número de assunto básico sem precisar que o esquema ordene.",
    reference: "Dewey (2011) - DDC Manual, Table 1 / OCLC"
  },
  {
    id: "mq_m19_4",
    moduleId: "m19",
    text: "Ao classificar uma monografia pela CDD que trata com igual profundidade e ênfase de dois assuntos pertencentes a divisões distintas do esquema (por exemplo, Economia - 330 e Ciência Política - 320), qual regra oficial da CDD deve ser aplicada pelo bibliotecário?",
    options: {
      A: "A Regra da Última Notação, classificando no número mais alto (330).",
      B: "A Regra do Primeiro na Ordem (First-of-Two Rule), segundo a qual o documento deve ser classificado na notação que aparecer primeiro na sequência numérica do esquema (no caso, 320).",
      C: "A Regra de criação de notações compostas unidas por dois pontos.",
      D: "A obrigatoriedade de descartar a obra por falta de especificidade.",
      E: "A classificação sumária na classe geral de Filosofia (100)."
    },
    correctAnswer: "B",
    justification: "A regra oficial de preferência da CDD para duas disciplinas com igual ênfase é a 'First-of-two rule': na ausência de uma instrução contrária do esquema, classifica-se na notação que vem PRIMEIRO numericamente nas tabelas (320 precede 330).",
    reference: "OCLC - Dewey Decimal Classification Principles and Application"
  },
  {
    id: "mq_m19_5",
    moduleId: "m19",
    text: "O 'Índice Relativo' (Relative Index) foi concebido por Melvil Dewey como uma das maiores inovações da CDD. Sua finalidade técnica e metodológica fundamental é:",
    options: {
      A: "Listar os nomes dos bibliotecários da instituição em ordem de antiguidade.",
      B: "Reunir em ordem alfabética os múltiplos aspectos e contextos disciplinares sob os quais um determinado assunto pode ser classificado nas tabelas da CDD, evitando a dispersão temática e guiando o classificador para o número correto.",
      C: "Calcular o valor relativo do seguro do acervo da biblioteca.",
      D: "Indicar a quantidade de livros que um usuário tem emprestados.",
      E: "Controlar as datas de vencimento das devoluções."
    },
    correctAnswer: "B",
    justification: "Como a CDD é disciplinar e não orientada puramente a termos isolados, um mesmo assunto aparece espalhado em várias classes (ex: o termo 'Casamento' é classificado sob o aspecto legal em 340, sociológico em 306, religioso em 200 e moral em 170). O Índice Relativo junta alfabeticamente todas essas facetas, servindo de guia indispensável.",
    reference: "Dewey (1876, 2011) / Piedade (1983) - 'Introdução à teoria da classificação'"
  },

  // ==========================================
  // MÓDULO 20: Tecnologia de Softwares de Bibliotecas (SIGB / ILS)
  // ==========================================
  {
    id: "mq_m20_1",
    moduleId: "m20",
    text: "Um Sistema Integrado de Gestão de Bibliotecas (SIGB / ILS - Integrated Library System) caracteriza-se por gerenciar as rotinas da unidade de informação mediante módulos operacionais interconectados sobre uma base de dados unificada. O módulo responsável pelo controle de compras de livros, processamento de faturas e acompanhamento de orçamentos e doações é o módulo de:",
    options: {
      A: "Circulação e Empréstimo.",
      B: "Aquisição (Acquisitions).",
      C: "OPAC (Catálogo Público).",
      D: "Controle de Autoridades.",
      E: "Preservação e Restauro."
    },
    correctAnswer: "B",
    justification: "O módulo de Aquisições é o coração gerencial dos SIGBs: controla pedidos, pedidos pendentes (claims), gestão de fornecedores, empenhos orçamentários, entrada de notas fiscais e recebimento preliminar de itens comprados ou doados antes da catalogação definitiva.",
    reference: "Rowley (2002) - 'A biblioteca eletrônica' / Corte et al. (2002)"
  },
  {
    id: "mq_m20_2",
    moduleId: "m20",
    text: "No cenário internacional e brasileiro de softwares livres para automação de bibliotecas, o 'Koha' destaca-se amplamente. As principais características técnicas que consagram o Koha como uma plataforma de referência aberta são:",
    options: {
      A: "Código fechado proprietário com custo anual obrigatório de licença por máquina.",
      B: "Software livre de código aberto (licença GNU/GPL), compatibilidade nativa com o formato MARC 21, suporte a protocolos Z39.50 e OAI-PMH, interface web completa para catalogação e OPAC responsivo.",
      C: "Incompatibilidade total com padrões de metadados da IFLA.",
      D: "Exigência de utilização exclusiva em terminais de computador sem internet.",
      E: "Substituição do banco de dados relacional por planilhas estáticas."
    },
    correctAnswer: "B",
    justification: "O Koha foi o primeiro SIGB de código aberto do mundo (criado em 1999 na Nova Zelândia) e é adotado por milhares de bibliotecas públicas e acadêmicas: possui arquitetura robusta, adota MARC 21 integral, protocolos Z39.50/SRU e interface 100% web amigável e expansível.",
    reference: "Koha Community Documentation / Breeding (2020)"
  },
  {
    id: "mq_m20_3",
    moduleId: "m20",
    text: "Nas estações automatizadas de autoatendimento para empréstimo e devolução de livros (Self-checkout stations) e nos portais de segurança das bibliotecas modernas, qual protocolo de comunicação padronizado é mundialmente utilizado para integrar esses dispositivos de hardware diretamente ao banco de dados do SIGB da instituição?",
    options: {
      A: "Protocolo SIP2 (Standard Interchange Protocol v2) ou NCIP.",
      B: "Protocolo SMTP de envio de e-mails.",
      C: "Protocolo FTP para transferência de arquivos em lote.",
      D: "Protocolo DNS de resolução de domínios web.",
      E: "Protocolo Bluetooth doméstico."
    },
    correctAnswer: "A",
    justification: "O protocolo SIP2 (criado originalmente pela 3M) e o NCIP (NISO Circulation Interchange Protocol) são os padrões mundiais que permitem que terminais de autoatendimento conversem em tempo real com o software da biblioteca (verificando se o usuário está suspenso, baixando o empréstimo e desarmando o alarme da tag).",
    reference: "NISO Standard NCIP (ANSI/NISO Z39.83) / 3M SIP2 Standard"
  },
  {
    id: "mq_m20_4",
    moduleId: "m20",
    text: "A tecnologia RFID (Radio Frequency Identification / Identificação por Radiofrequência) tem substituído progressivamente os códigos de barras tradicionais nas grandes bibliotecas acadêmicas. A principal vantagem operacional da tecnologia RFID sobre o código de barras óptico convencional é:",
    options: {
      A: "O custo unitário de cada etiqueta de RFID ser cem vezes menor que o de uma etiqueta de papel comum.",
      B: "Permitir a leitura instantânea de múltiplos itens simultaneamente sem necessidade de contato físico direto ou alinhamento óptico de visada do feixe de laser, integrando a identificação do exemplar com a segurança antifurto na mesma etiqueta.",
      C: "Tornar desnecessária a classificação decimal das obras nas estantes.",
      D: "Impedir que os livros sofram ação de fungos e umidade.",
      E: "Aumentar o peso físico do livro impresso."
    },
    correctAnswer: "B",
    justification: "O código de barras exige que o operador posicione o laser exatamente na linha de visada, um a um. Com RFID, uma pilha de 5 livros pode ser lida em um único segundo no balcão ou durante o inventário nas estantes usando uma antena leitora portátil, sem precisar abrir as capas, além de operar como sistema antifurto.",
    reference: "Boss (2004) - 'RFID Technology for Libraries' / Cunha & Cavalcanti (2008)"
  },
  {
    id: "mq_m20_5",
    moduleId: "m20",
    text: "Durante a modernização tecnológica ou troca do sistema de gestão de uma biblioteca universitária, a 'Migração de Dados' bibliográficos é uma operação crítica. Para garantir que milhares de registros bibliográficos e de autoridades sejam exportados do sistema antigo e importados no novo sistema sem corrupção de acentuação e campos, o formato de intercâmbio de dados de referência mundial adotado deve ser o padrão:",
    options: {
      A: "DOCX do Microsoft Word.",
      B: "ISO 2709 / MARCXML com codificação de caracteres em UTF-8.",
      C: "JPEG em 72 dpi.",
      D: "TXT simples separado por tabulação de máquina de escrever.",
      E: "BMP de 16 cores."
    },
    correctAnswer: "B",
    justification: "A ISO 2709 é o formato universal de intercâmbio de informações bibliográficas em fita/disco (base estrutural dos registros MARC), e o MARCXML é sua versão em sintaxe XML moderna. A codificação obrigatória em UTF-8 garante a preservação de toda a diacrítica e acentuação da língua portuguesa e idiomas estrangeiros.",
    reference: "ISO 2709 / Library of Congress - MARCXML Standards"
  },

  // ==========================================
  // MÓDULO 21: Indexação, Resumos e Controle Vocabular (Thesaurus)
  // ==========================================
  {
    id: "mq_m21_1",
    moduleId: "m21",
    text: "Segundo a norma internacional ISO 5963 e a clássica metodologia descrita por F. W. Lancaster (2004), o processo de indexação temática de um documento compõe-se de três etapas consecutivas essenciais. A ordem rigorosa dessas etapas é:",
    options: {
      A: "Tradução para o tesauro ➔ Exame do documento ➔ Catalogação descritiva.",
      B: "Exame do documento (leitura documentária seletiva) ➔ Análise conceitual (identificação dos conceitos em linguagem natural) ➔ Tradução dos conceitos para os termos da linguagem de indexação (vocabulário controlado).",
      C: "Busca booleana ➔ Impressão de ficha ➔ Encadernação.",
      D: "Desbastamento ➔ Tombamento ➔ Notação de autor.",
      E: "Contagem de palavras ➔ Eliminação de stopwords ➔ Resumo crítico."
    },
    correctAnswer: "B",
    justification: "Sequência canônica de concurso (ISO 5963): 1. Leitura documentária (exame das partes ricas do texto); 2. Análise conceitual (determinar do que a obra realmente trata, formulando conceitos em linguagem natural); 3. Tradução (converter esses conceitos nos termos autorizados do vocabulário controlado).",
    reference: "ISO 5963 / Lancaster (2004) - 'Indexação e Resumos' / Fujita (2003)"
  },
  {
    id: "mq_m21_2",
    moduleId: "m21",
    text: "Na teoria da representação temática da informação de Lancaster, a política de indexação de uma biblioteca deve calibrar os níveis de 'Exaustividade' e 'Especificidade'. Se uma biblioteca universitária especializada adota uma política de ALTA ESPECIFICIDADE na atribuição de termos, o impacto direto dessa decisão na recuperação da informação será:",
    options: {
      A: "Aumentar a Revocação da busca e diminuir a Precisão.",
      B: "Aumentar a Precisão dos resultados da pesquisa (trazendo documentos que tratam exatamente do assunto detalhado) e diminuir a Revocação (podendo ocasionar Silêncio Documental se o usuário fizer uma busca mais genérica).",
      C: "Gerar 100% de ruído em todas as pesquisas.",
      D: "Eliminar a necessidade de tesauros.",
      E: "Impedir a localização de qualquer documento no sistema."
    },
    correctAnswer: "B",
    justification: "Alta especificidade significa usar o termo mais profundo e exato disponível (ex: 'Cardiopatia chagásica crônica' e não apenas 'Doenças'). Isso aumenta a PRECISÃO (quem busca pelo termo exato só acha o que quer, sem lixo), mas reduz a REVOCAÇÃO (se alguém buscar genericamente por 'Doenças', não achará o livro se o sistema não tiver expansão hierárquica).",
    reference: "Lancaster (2004) - 'Indexação e Resumos'"
  },
  {
    id: "mq_m21_3",
    moduleId: "m21",
    text: "Em um Vocabulário Controlado estruturado conforme os padrões de Tesauros (ISO 25964), as relações semânticas entre os termos dividem-se em Relação de Equivalência, Relação Hierárquica e Relação Associativa. A relação indicada pela sigla USE / UP (Usado Para) constitui uma:",
    options: {
      A: "Relação de Equivalência, cuja função é controlar sinônimos e termos concorrentes, remetendo do termo não-autorizado (rejeitado) para o descritor padrão adotado pelo tesauro.",
      B: "Relação Hierárquica de gênero e espécie.",
      C: "Relação de causalidade física entre máquinas e operários.",
      D: "Nota de escopo restrita a datas históricas.",
      E: "Definição etimológica de palavras em latim."
    },
    correctAnswer: "A",
    justification: "Relação de Equivalência controla a polissemia e a sinonímia na linguagem natural: o termo proibido aponta via 'USE' para o termo autorizado (ex: 'Aeronave USE Avião'), e sob o termo autorizado registra-se 'UP' (Usado Para: Aeronave), garantindo consistência no vocabulário.",
    reference: "ISO 25964 / Currás (1995) - 'Tesauros: linguagens de indexação'"
  },
  {
    id: "mq_m21_4",
    moduleId: "m21",
    text: "Na tipologia clássica de condensação documental formulada por F. W. Lancaster e constante da literatura internacional da Ciência da Informação (ISO 214), o resumo documental que descreve concisamente os tópicos abordados no documento original sem apresentar a metodologia pormenorizada, os dados quantitativos ou as conclusões definitivas da pesquisa denomina-se:",
    options: {
      A: "Resumo Informativo.",
      B: "Resumo Indicativo (ou Descritivo), o qual NÃO dispensa a consulta ao texto original completo.",
      C: "Resumo Crítico (Resenha).",
      D: "Sumário Executivo.",
      E: "Índice de Citações."
    },
    correctAnswer: "B",
    justification: "O Resumo Indicativo apenas aponta os tópicos presentes no trabalho de forma breve e genérica (ex: 'Discute-se o impacto da inflação na educação superior'). Por não trazer os resultados e conclusões concretas, ele NÃO permite que o leitor tome decisões definitivas sem ler o artigo original.",
    reference: "Lancaster (2004) / ISO 214 (Documentation — Abstracts for publications)"
  },
  {
    id: "mq_m21_5",
    moduleId: "m21",
    text: "Na classificação das linguagens documentárias quanto à sintaxe de composição dos conceitos, as 'Linguagens Pré-coordenadas' distinguem-se das 'Linguagens Pós-coordenadas' porque nas linguagens pré-coordenadas:",
    options: {
      A: "A coordenação dos termos é feita exclusivamente pelo usuário no momento da consulta com operadores booleanos AND/OR.",
      B: "Os termos e conceitos são combinados e estruturados previamente pelo indexador no momento do processamento técnico, obedecendo a uma ordem fixa de citação antes de o documento ser colocado à disposição para consulta no catálogo.",
      C: "Não existe nenhum controle terminológico ou gramatical.",
      D: "Os termos são dispostos em ordem cronológica decrescente de publicação.",
      E: "Utilizam-se apenas emojis na representação do assunto."
    },
    correctAnswer: "B",
    justification: "Na pré-coordenação, o bibliotecário indexador combina os termos de acordo com regras de sintaxe prévias criando um único cabeçalho composto (ex: 'Engenharia química — Brasil — Século XXI'). Na pós-coordenação, os termos são mantidos isolados (Unitermos) e o usuário os combina dinamicamente na hora da busca.",
    reference: "Chaumier (1988) - 'Linguagens documentárias' / Lancaster (2004)"
  },

  // ==========================================
  // MÓDULO 22: Propriedade Intelectual e Direitos Autorais
  // ==========================================
  {
    id: "mq_m22_1",
    moduleId: "m22",
    text: "No ordenamento jurídico brasileiro, a Lei Federal nº 9.610/1998 (Lei de Direitos Autorais - LDA) estabelece a distinção basilar entre 'Direitos Morais' e 'Direitos Patrimoniais' do autor sobre sua obra. Em relação aos Direitos Morais (art. 24 e 27 da LDA), é correto afirmar que eles são:",
    options: {
      A: "Vendáveis e transferíveis mediante contrato comercial com editoras privadas.",
      B: "Inalienáveis e irrenunciáveis, permitindo ao autor reivindicar a qualquer tempo a paternidade de sua criação e opor-se a alterações que desonrem sua reputação.",
      C: "Extintos no prazo de 10 anos após a primeira edição impressa.",
      D: "Propriedade compulsória da universidade onde o pesquisador trabalha.",
      E: "Condicionados ao pagamento de taxas anuais de manutenção ao Ministério da Cultura."
    },
    correctAnswer: "B",
    justification: "O Art. 27 da LDA consagra a intangibilidade dos direitos morais: são inalienáveis e irrenunciáveis. O autor jamais pode vender sua autoria nem renunciar ao seu nome na obra; qualquer cláusula contratual em contrário é nula de pleno direito.",
    reference: "Lei Federal nº 9.610/1998, Arts. 24 e 27 / Carboni (2008)"
  },
  {
    id: "mq_m22_2",
    moduleId: "m22",
    text: "Conforme o artigo 41 da Lei de Direitos Autorais (Lei nº 9.610/1998), qual é o prazo legal geral de vigência dos direitos patrimoniais sobre uma obra intelectual antes de ela cair em Domínio Público no Brasil?",
    options: {
      A: "20 anos a contar da data de depósito da obra na Biblioteca Nacional.",
      B: "70 anos contados a partir de 1º de janeiro do ano subsequente ao do falecimento do autor.",
      C: "50 anos contados da data de nascimento do autor.",
      D: "Prazo indeterminado enquanto os herdeiros estiverem vivos.",
      E: "5 anos contados da primeira edição impressa."
    },
    correctAnswer: "B",
    justification: "Art. 41 da LDA: Os direitos patrimoniais do autor perduram por setenta anos contados de 1º de janeiro do ano subsequente ao de seu falecimento (regra post mortem autoris). Transcorrido esse prazo, a obra cai em domínio público e pode ser livremente reproduzida.",
    reference: "Lei Federal nº 9.610/1998, Art. 41"
  },
  {
    id: "mq_m22_3",
    moduleId: "m22",
    text: "A Lei de Direitos Autorais brasileira prevê hipóteses taxativas de 'Limitações aos Direitos Autorais' (art. 46), nas quais a reprodução não constitui ofensa aos direitos do criador. Constitui uma conduta expressamente autorizada por essa regra de exceção:",
    options: {
      A: "A cópia reprográfica integral de livros técnicos didáticos para venda a preço de custo aos colegas de classe.",
      B: "A reprodução de pequenos trechos de obras pré-existentes para uso privado do copista, sem intuito de lucro direto ou indireto, bem como a citação de passagens para fins de estudo, crítica ou polêmica com a devida indicação da autoria e da fonte.",
      C: "A digitalização completa do acervo de uma livraria comercial para download livre.",
      D: "A substituição do nome do autor pelo nome do professor da disciplina.",
      E: "A transmissão não autorizada de livros eletrônicos protegidos por DRM em redes torrent públicas."
    },
    correctAnswer: "B",
    justification: "Art. 46 da Lei 9.610/98: Não constitui ofensa aos direitos autorais a citação em livros ou artigos de passagens de qualquer obra para fins de estudo/crítica indicando autor e fonte, nem a reprodução de 'pequenos trechos' para uso privado do copista sem intuito de lucro.",
    reference: "Lei Federal nº 9.610/1998, Art. 46 / Branco & Paranaguá (2009)"
  },
  {
    id: "mq_m22_4",
    moduleId: "m22",
    text: "No que se refere aos atos governamentais e documentos públicos oficiais (como leis, decretos, decisões judiciais e atos do poder público), o artigo 8º da Lei nº 9.610/1998 estabelece textualmente que:",
    options: {
      A: "São protegidos por direitos autorais pertencentes com exclusividade à Presidência da República.",
      B: "Não são objeto de proteção como direitos autorais de que trata a referida Lei, podendo ser livremente reproduzidos e consultados pela sociedade.",
      C: "Só podem ser consultados mediante pagamento de direitos de exploração comercial.",
      D: "Exigem a concessão prévia de patente no INPI.",
      E: "São classificados como literatura cinzenta de circulação proibida."
    },
    correctAnswer: "B",
    justification: "O Art. 8º da LDA exclui explicitamente da proteção autoral os textos de tratados, convenções, leis, decretos, regulamentos, decisões judiciais e demais atos oficiais. Por sua própria natureza de interesse público, tais documentos pertencem ao patrimônio social.",
    reference: "Lei Federal nº 9.610/1998, Art. 8º, IV"
  },
  {
    id: "mq_m22_5",
    moduleId: "m22",
    text: "Qual é a principal distinção formal e jurídica entre a proteção concedida pela 'Propriedade Industrial' (marcas e patentes) e a proteção assegurada pelos 'Direitos Autorais' (obras científicas e literárias) no Brasil?",
    options: {
      A: "Os direitos autorais dependem compulsoriamente de registro prévio e concessão formal pelo Estado para passarem a existir, enquanto as patentes nascem automaticamente sem registro.",
      B: "A proteção dos Direitos Autorais independe de registro prévio (o direito nasce no momento da criação da obra intelectual, tendo eventual registro efeito meramente declaratório), ao passo que a proteção da Propriedade Industrial (patentes e marcas) depende compulsoriamente de registro e concessão formal pelo INPI.",
      C: "As patentes duram 70 anos após a morte do inventor.",
      D: "Os direitos autorais aplicam-se exclusivamente a softwares de computador.",
      E: "O INPI é responsável pelo registro de livros de poesia."
    },
    correctAnswer: "B",
    justification: "Princípio fundamental da Propriedade Intelectual: O direito de autor nasce com a criação da obra (Art. 18 da Lei 9.610/98 consagra o princípio da Convenção de Berna: proteção automática independente de registro). Em contrapartida, patentes e marcas dependem do processo administrativo de concessão no INPI para conferir exclusividade legal.",
    reference: "Lei nº 9.610/1998, Art. 18 / Lei nº 9.279/1996 (LPI) / Cerqueira (1982)"
  },

  // ==========================================
  // MÓDULO 23: Editoração Científica (Fluxo Editorial e OJS)
  // ==========================================
  {
    id: "mq_m23_1",
    moduleId: "m23",
    text: "Na primeira etapa do fluxo de editoração de um periódico científico acadêmico, antes mesmo de enviar o artigo para os avaliadores externos ad hoc, o Editor-Chefe realiza uma triagem formal e temática de conformidade. Essa avaliação prévia interna que pode resultar na rejeição sumária do manuscrito é denominada na editoração como:",
    options: {
      A: "Desk Review (ou Desk Reject).",
      B: "Diagramação final.",
      C: "Atribuição de DOI.",
      D: "Marcação em XML SciELO.",
      E: "Indexação por extração."
    },
    correctAnswer: "A",
    justification: "O 'Desk Review' (ou Desk Reject) é o filtro preliminar na mesa do editor: se o artigo estiver flagrantemente fora do escopo da revista, desrespeitar normas éticas fundamentais ou apresentar plágio evidente na checagem de similaridade, ele é recusado imediatamente, poupando pareceristas e acelerando a fila editorial.",
    reference: "Meadows (1999) - 'A comunicação científica' / Associação Brasileira de Editores Científicos (ABEC)"
  },
  {
    id: "mq_m23_2",
    moduleId: "m23",
    text: "No processo de Avaliação pelos Pares (Peer Review), a modalidade mais amplamente consolidada na comunicação científica tradicional é a 'Avaliação Duplo-Cega' (Double-blind peer review). Essa modalidade caracteriza-se fundamentalmente por:",
    options: {
      A: "Publicar o artigo sem nenhuma leitura prévia de pareceristas.",
      B: "Ocultar a identidade dos autores em relação aos pareceristas avaliadores e, simultaneamente, ocultar a identidade dos pareceristas em relação aos autores, mitigando vieses de prestígio, gênero ou filiação institucional.",
      C: "Permitir que os pareceristas saibam quem são os autores, mas proibindo os autores de saberem quem são os pareceristas.",
      D: "Divulgar os nomes de autores e avaliadores abertamente na internet com os pareceres assinados.",
      E: "Exigir que dois pareceristas avaliem o texto em reuniões presenciais."
    },
    correctAnswer: "B",
    justification: "No modelo Duplo-Cego (Double-blind): o anonimato é bilateral. Os avaliadores não sabem de quem é o artigo (eliminando favoritismo para pesquisadores famosos ou preconceito contra iniciantes) e os autores não sabem quem avaliou (garantindo liberdade e isenção crítica no parecer).",
    reference: "Meadows (1999) / ABEC Brasil"
  },
  {
    id: "mq_m23_3",
    moduleId: "m23",
    text: "O software Open Journal Systems (OJS), desenvolvido internacionalmente pelo consórcio Public Knowledge Project (PKP) e disseminado no Brasil pelo IBICT sob a denominação SEER (Sistema Eletrônico de Editoração de Revistas), revolucionou a publicação de periódicos acadêmicos porque:",
    options: {
      A: "Cobra mensalidades em dólares de todas as universidades que o utilizam.",
      B: "É uma plataforma aberta, gratuita e de código livre que gerencia integralmente todas as etapas do fluxo editorial científico (da submissão à publicação online), integrando servidor OAI-PMH para indexação automática e suporte a metadados Dublin Core.",
      C: "Substitui os autores humanos por redação automatizada de artigos científicos.",
      D: "Impede a indexação dos periódicos no Google Acadêmico e no SciELO.",
      E: "Exige que todos os artigos sejam impressos em gráfica antes de aparecerem na tela."
    },
    correctAnswer: "B",
    justification: "O OJS/SEER democratizou a editoração de revistas científicas: permite rastrear todo o fluxo de trabalho (submissão, pareceres, edições de texto, diagramação, publicação) com trilhas de auditoria, além de expor metadados automaticamente via OAI-PMH para colhedores internacionais.",
    reference: "Public Knowledge Project (PKP) - OJS Documentation / IBICT"
  },
  {
    id: "mq_m23_4",
    moduleId: "m23",
    text: "O Digital Object Identifier (DOI) é um identificador persistente e unívoco essencial para a comunicação científica contemporânea. A agência oficial internacional de registro de DOIs amplamente utilizada por periódicos e editores de artigos científicos no ecossistema do OJS e SciELO é a:",
    options: {
      A: "Crossref.",
      B: "Microsoft Corporation.",
      C: "Biblioteca do Congresso Norte-Americano.",
      D: "Associação Comercial de São Paulo.",
      E: "Federação Internacional de Futebol (FIFA)."
    },
    correctAnswer: "A",
    justification: "A Crossref é a principal agência oficial de registro da Fundação Internacional do DOI (IDF) especializada em literatura acadêmica: vincula metadados editoriais ao identificador persistente, viabilizando links diretos e permanentes entre citações científicas mundiais.",
    reference: "International DOI Foundation / Crossref Guidelines"
  },
  {
    id: "mq_m23_5",
    moduleId: "m23",
    text: "O Open Researcher and Contributor ID (ORCID) tornou-se uma exigência padrão na editoração científica internacional e nas submissões ao SBU e repositórios da Unicamp. O propósito fundamental do identificador ORCID é:",
    options: {
      A: "Cobrar taxas de anuidade dos pesquisadores pós-graduados.",
      B: "Fornecer um identificador digital persistente, aberto e unívoco de 16 dígitos para cada pesquisador, resolvendo em definitivo problemas graves de ambiguidade de nomes (autores com sobrenomes idênticos, mudanças de nome de casados ou variações de abreviatura).",
      C: "Substituir o currículo Lattes por um código de barras comercial.",
      D: "Armazenar cópias de segurança de e-mails pessoais de professores.",
      E: "Medir a frequência de batimentos cardíacos de quem escreve teses."
    },
    correctAnswer: "B",
    justification: "O ORCID (ex: `https://orcid.org/0000-0002-1825-0097`) distingue inequivocamente cada cientista no mundo, unificando toda a sua produção intelectual sob um identificador persistente e resolvendo homônimos e variações de grafia nos sistemas de informação e periódicos.",
    reference: "ORCID Inc. Documentation / SciELO Criteria"
  }
];
