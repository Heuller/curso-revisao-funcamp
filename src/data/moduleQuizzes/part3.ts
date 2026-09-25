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
      A: "Aboliram-se abreviações artificiais do AACR2 (como 'p.', 'il.', 'et al.'), transcrevendo-se os dados tal como constam na fonte.",
      B: "Tornou-se obrigatória a tradução literal de todos os títulos em língua estrangeira para o vernáculo nacional adotado pela biblioteca.",
      C: "Veda-se terminantemente a inclusão de registros bibliográficos para recursos eletrônicos em rede e livros digitais sob acesso remoto.",
      D: "Extinguiram-se todas as entradas secundárias para coautores e colaboradores, admitindo-se exclusivamente o ponto de acesso principal.",
      E: "Exige-se a correção ortográfica silenciosa de lapsos do autor no título principal sem qualquer menção de nota explicativa no registro."
    },
    correctAnswer: "A",
    justification: "O princípio 'Take what you see' baniu o hábito do AACR2 de encurtar e abreviar termos artificialmente (resquício da era das fichas de papel com espaço físico limitado). No RDA, registra-se 'páginas' por extenso, 'ilustrações', e os nomes de todos os autores são transcritos sem corte arbitrário por [et al.].",
    reference: "Oliver (2011) - 'Introdução ao RDA' / RDA Toolkit"
  },
  {
    id: "mq_m17_2",
    moduleId: "m17",
    text: "Uma das rupturas conceituais mais expressivas entre o AACR2 e o RDA residiu na extinção da 'Designação Geral do Material' (DGM / GMD - subcampo $h da tag 245 no MARC 21). Para substituir a antiga DGM com maior granularidade e precisão semântica na descrição de suportes digitais e analógicos, o RDA introduziu os seguintes três elementos fundamentais (mapeados nos campos MARC 336, 337 e 338):",
    options: {
      A: "Ponto de Acesso Principal (100), Ponto de Acesso Secundário (700) e Cabeçalho de Assunto Tópico Controlado (650).",
      B: "Tipo de Conteúdo (Content Type - 336), Tipo de Mídia (Media Type - 337) e Tipo de Suporte (Carrier Type - 338).",
      C: "Número Normalizado Internacional (020), Código Decimal de Classificação (082) e Código de Barras Patrimonial (852).",
      D: "Título Principal Transcrito (245), Título da Coleção Seriada (490) e Notas de Conteúdo Analítico da Obra (505).",
      E: "Líder de Registro Fixo (000), Dados de Controle Bibliográfico (008) e Endereço de Localização Eletrônica (856)."
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
      A: "O RDA proibiu que obras acadêmicas elaboradas em coautoria sejam incorporadas aos catálogos bibliográficos informatizados.",
      B: "O RDA determinou que a entrada principal passe a ser atribuída exclusivamente à editora comercial detentora da publicação.",
      C: "O RDA eliminou o limite arbitrário, permitindo transcrever todos os criadores e gerar pontos de acesso para quantos forem relevantes.",
      D: "O RDA reduziu compulsoriamente a identificação autoral a apenas uma pessoa física, ignorando a equipe executora da pesquisa.",
      E: "O RDA manteve a essência rígida da regra de três, limitando-se a elevar a quantidade para no máximo cinco autores por registro."
    },
    correctAnswer: "C",
    justification: "No AACR2, se a obra tinha 4 autores, a entrada era obrigatória pelo título e 3 autores sumiam em [et al.]. No RDA (focado no ambiente digital), todos os coautores podem ser transcritos e todos podem ter pontos de acesso criados no catálogo, garantindo reconhecimento autoral integral.",
    reference: "Oliver (2011) / RDA Steering Committee"
  },
  {
    id: "mq_m17_4",
    moduleId: "m17",
    text: "O padrão RDA foi construído formalmente em conformidade com os modelos conceituais da família IFLA (especialmente FRBR e IFLA LRM). Essa fundamentação orientada a Entidades e Relacionamentos confere ao RDA a capacidade nativa de:",
    options: {
      A: "Acelerar a impressão mecânica de cartões de papel padronizados para alimentação manual de gaveteiros de madeira nos saguões.",
      B: "Substituir a necessidade de catalogadores humanos mediante a adoção compulsória de rotinas algorítmicas cegas sem supervisão.",
      C: "Dispensar a aplicação de normas de controle de autoridade na singularização de nomes de pesquisadores e instituições parceiras.",
      D: "Interoperar com a Web Semântica e Dados Conectados (LOD), expressando metadados em grafos RDF vinculados a bases globais como a Wikidata.",
      E: "Restringir a recuperação documental unicamente a estações locais de computadores desprovidas de acesso à rede mundial de computadores."
    },
    correctAnswer: "D",
    justification: "A grande revolução do RDA é transformar o catálogo da biblioteca de um silo de texto fechado (strings) em uma rede semântica de entidades conectadas (things): ao usar identificadores persistentes e relacionamentos explícitos, o catálogo passa a dialogar com os padrões da Web Semântica (RDF, OWL, SPARQL).",
    reference: "Coyle (2016) - 'FRBR, Before and After' / Oliver (2011)"
  },
  {
    id: "mq_m17_5",
    moduleId: "m17",
    text: "Ao catalogar um livro digital (e-book em formato PDF) segundo as diretrizes do RDA, os valores controlados corretos a serem atribuídos aos campos MARC 21 de Tipo de Conteúdo (336), Tipo de Mídia (337) e Tipo de Suporte (338) são, respectivamente:",
    options: {
      A: "imagem fixa bidimensional (336) / sem mediação humana (337) / volume encadernado padrão (338).",
      B: "som musical vocal (336) / dispositivo de áudio analógico (337) / disco fonográfico acústico (338).",
      C: "imagem em movimento tridimensional (336) / vídeo digital (337) / cartucho de fita magnética (338).",
      D: "microforma de redução óptica (336) / projetor diazóico (337) / jaqueta de microficha transparente (338).",
      E: "texto (336) / computador (337) / recurso online (338), caracterizando a natureza intelectual e o meio digital."
    },
    correctAnswer: "E",
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
      A: "Obra (Work), Expressão (Expression), Manifestação (Manifestation) e Item (Item).",
      B: "Autor Intelectual, Casa Editora, Ano Calendário de Publicação e Volume Encadernado.",
      C: "Dado Bruto de Pesquisa, Metadado Estruturado, Informação Refinada e Conhecimento Tácito.",
      D: "Conceito Abstrato, Objeto Tridimensional, Evento Histórico e Localização Espacial Geográfica.",
      E: "Título Principal, Subtítulo Complementar, Notação de Assunto e Notação de Autor de Cutter."
    },
    correctAnswer: "A",
    justification: "WEMI é o cerne do modelo FRBR: Obra (criação intelectual abstrata) ➔ Expressão (realização da obra em forma linguística/artística específica) ➔ Manifestação (corporificação física ou digital produzida por uma editora) ➔ Item (o exemplar físico ou arquivo singular existente na estante).",
    reference: "IFLA (1998) - 'Functional Requirements for Bibliographic Records' / IFLA LRM (2017)"
  },
  {
    id: "mq_m18_2",
    moduleId: "m18",
    text: "Considere o romance 'Memórias Póstumas de Brás Cubas', criado por Machado de Assis em 1881. A tradução desse texto para a língua inglesa realizada por Gregory Rabassa constitui, na rigorosa terminologia do modelo FRBR:",
    options: {
      A: "Uma nova Obra (Work) autônoma, cuja responsabilidade intelectual passa a pertencer exclusivamente ao tradutor norte-americano.",
      B: "Uma nova Expressão (Expression) da mesma Obra original concebida e delimitada intelectualmente por Machado de Assis.",
      C: "Apenas um Item (Item) físico singular que recebe um código numérico de patrimônio e carimbo de tombamento no balcão.",
      D: "Uma Manifestação (Manifestation) rigorosamente idêntica à primeira tiragem impressa pela Tipografia Nacional em 1881.",
      E: "Um Ponto de Acesso de Assunto Tópico destinado a reunir estudos biográficos e ensaios críticos sobre a literatura brasileira."
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
      A: "Orçar os custos de importação, Licitar publicamente, Adquirir o exemplar e Tombar patrimonialmente.",
      B: "Catalogar com detalhamento, Classificar por disciplinas, Indexar termos autorizados e Dispor na prateleira.",
      C: "Encontrar (Find), Identificar (Identify), Selecionar (Select) e Obter (Obtain) os recursos desejados.",
      D: "Digitalizar o suporte físico, Preservar os dados, Comprimir os arquivos binários e Deletar o registro obsoleto.",
      E: "Ler o documento integral, Copiar passagens textuais, Paráfrase das conclusões e Citar a fonte consultada."
    },
    correctAnswer: "C",
    justification: "As 4 tarefas clássicas do usuário no FRBR: 1. Encontrar recursos que correspondam aos critérios de busca; 2. Identificar uma entidade (confirmar se é a edição ou autor certo); 3. Selecionar o recurso apropriado às suas necessidades (idioma, suporte); 4. Obter acesso físico ou digital ao item.",
    reference: "IFLA (1998) - FRBR User Tasks"
  },
  {
    id: "mq_m18_4",
    moduleId: "m18",
    text: "No IFLA LRM (Library Reference Model, 2017), modelo de alto nível que consolidou e atualizou os modelos conceituais FRBR, FRAD e FRSAD, a entidade que engloba tanto pessoas físicas quanto grupos de pessoas que atuam como agentes responsáveis na criação ou custódia de recursos é denominada:",
    options: {
      A: "Item (Item), correspondente ao exemplar físico individualizado com registro patrimonial.",
      B: "Expressão (Expression), relativa à forma linguística particular adotada na obra.",
      C: "Resumo Documental (Abstract), que sintetiza formalmente os dados empíricos apurados.",
      D: "Agente (Agent), subdividido nas entidades Pessoa (Person) e Agente Coletivo (Collective Agent).",
      E: "Objeto Digital (Digital Object), referente ao bitstream arquivado nos discos computacionais."
    },
    correctAnswer: "D",
    justification: "O IFLA LRM simplificou as antigas entidades do Grupo 2 do FRBR (Pessoa e Entidade Coletiva) sob a superentidade 'Agente' (Agent), capaz de realizar ações e assumir responsabilidade legal/intelectual, subdividindo-se em 'Person' (indivíduo humano) e 'Collective Agent' (duas ou mais pessoas agindo conjuntamente, como instituições, empresas ou eventos).",
    reference: "Riva, Le Bœuf & Žumer (2017) - 'IFLA Library Reference Model (LRM)'"
  },
  {
    id: "mq_m18_5",
    moduleId: "m18",
    text: "Na aplicação do modelo WEMI a um caso concreto em uma biblioteca universitária, um exemplar de um livro impresso que possui capa amassada, carimbo de patrimônio da Unicamp e código de barras único na contracapa corresponde tecnicamente à entidade:",
    options: {
      A: "Obra (Work), que designa a criação intelectual intangível em sua abstração conceitual.",
      B: "Expressão (Expression), que reflete a corporificação semiótica ou linguística da ideia.",
      C: "Manifestação (Manifestation), que abrange a tiragem industrial produzida pela editora comercial.",
      D: "Agente Coletivo (Collective Agent), referente à pessoa jurídica depositária do bem móvel.",
      E: "Item (Item), corporificação física e singular do exemplar que existe concretamente na estante."
    },
    correctAnswer: "E",
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
      A: "3 algarismos arábicos (como 000, 100 ou 530), inserindo-se ponto após o terceiro dígito em expansões analíticas.",
      B: "1 único algarismo arábico isolado que sintetiza a totalidade da área temática da ciência geral correspondente.",
      C: "2 algarismos arábicos justapostos sem o uso de caracteres complementares de pontuação ortográfica decimal.",
      D: "4 algarismos arábicos subdivididos por uma barra oblíqua central indicativa de intervalo conceitual.",
      E: "Uma letra do alfabeto latino em caixa alta acompanhada de um número cardinal inteiro de três ordens."
    },
    correctAnswer: "A",
    justification: "A notação da CDD é pura (apenas números arábicos) e hierárquica decimal: nenhuma notação de assunto básico tem menos de 3 dígitos (completa-se com zeros, como 500 para Ciências). Após o 3º dígito, insere-se um ponto (ex: 530.1) para expansões analíticas.",
    reference: "Dewey (2011) - Dewey Decimal Classification (DDC 23) / OCLC"
  },
  {
    id: "mq_m19_2",
    moduleId: "m19",
    text: "Na estrutura das 10 Grandes Classes da CDD (Centenas de 000 a 900), o assunto 'Religião e Teologia' e o assunto 'Línguas e Linguística' encontram-se alocados, respectivamente, nas classes:",
    options: {
      A: "Classe 100 (Filosofia e Psicologia) e Classe 300 (Ciências Sociais aplicadas).",
      B: "Classe 200 (Religião e Teologia) e Classe 400 (Línguas, Linguística e Idiomas específicos).",
      C: "Classe 500 (Ciências Puras e Matemáticas) e Classe 600 (Tecnologia e Ciências Aplicadas).",
      D: "Classe 700 (Artes e Recreação) e Classe 800 (Literatura e Retórica de autores).",
      E: "Classe 000 (Informação e Obras Gerais) e Classe 900 (História e Geografia Universal)."
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
      A: "Exigir compulsoriamente autorização expressa em nota de 'adicione a' no esquema para que o classificador possa empregá-la.",
      B: "Servir unicamente para representar nomes geográficos de países e cidades do continente sul-americano em monografias.",
      C: "Poder ser aplicada autonomamente a qualquer número de assunto do esquema, sem exigir instrução explícita nas tabelas.",
      D: "Restringir-se com exclusividade ao detalhamento de textos poéticos e obras dramáticas alocadas na grande classe 800.",
      E: "Adotar caracteres alfabéticos do alfabeto grego maiúsculo para distinguir aspectos históricos e cronológicos."
    },
    correctAnswer: "C",
    justification: "Cobrança onipresente em concursos: A Tabela 1 (subdivisões como -01 Teoria, -02 Compêndios, -03 Dicionários, -05 Periódicos, -07 Ensino) é a ÚNICA tabela da CDD dotada de faculdade autônoma universal: qualquer classificador pode anexá-la ao número de assunto básico sem precisar que o esquema ordene.",
    reference: "Dewey (2011) - DDC Manual, Table 1 / OCLC"
  },
  {
    id: "mq_m19_4",
    moduleId: "m19",
    text: "Ao classificar uma monografia pela CDD que trata com igual profundidade e ênfase de dois assuntos pertencentes a divisões distintas do esquema (por exemplo, Economia - 330 e Ciência Política - 320), qual regra oficial da CDD deve ser aplicada pelo bibliotecário?",
    options: {
      A: "A Regra da Última Notação, classificando compulsoriamente no número numericamente mais alto (no caso concreto, 330).",
      B: "A criação de uma notação mista artificial agregando os dois números separados por sinal de adição aritmético.",
      C: "O cancelamento formal do processamento técnico com devolução da obra ao departamento requisitante da universidade.",
      D: "A Regra do Primeiro na Ordem (First-of-Two Rule), classificando na notação que surgir primeiro nas tabelas (320).",
      E: "A alocação genérica na classe 100 de Filosofia, considerando que toda ciência decorre originariamente do saber filosófico."
    },
    correctAnswer: "D",
    justification: "A regra oficial de preferência da CDD para duas disciplinas com igual ênfase é a 'First-of-two rule': na ausência de uma instrução contrária do esquema, classifica-se na notação que vem PRIMEIRO numericamente nas tabelas (320 precede 330).",
    reference: "OCLC - Dewey Decimal Classification Principles and Application"
  },
  {
    id: "mq_m19_5",
    moduleId: "m19",
    text: "O 'Índice Relativo' (Relative Index) foi concebido por Melvil Dewey como uma das maiores inovações da CDD. Sua finalidade técnica e metodológica fundamental é:",
    options: {
      A: "Ordenar os servidores da equipe técnica por antiguidade e tempo de serviço público na instituição universitária.",
      B: "Estimar o valor venal das apólices de seguro contra incêndio incidentes sobre os compêndios raros do acervo.",
      C: "Verificar se determinado usuário ultrapassou a cota limite de títulos autorizados para empréstimo simultâneo.",
      D: "Monitar o calendário acadêmico anual de datas limites para liquidação de taxas e penalidades por atraso.",
      E: "Reunir alfabeticamente os múltiplos contextos disciplinares de um assunto nas tabelas da CDD, guiando à notação exata."
    },
    correctAnswer: "E",
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
      A: "Aquisição (Acquisitions), responsável pelo controle orçamentário, pedidos de compra, faturas e recebimento de doações.",
      B: "Circulação e Empréstimo, que gerencia exclusivamente o balcão de atendimento, reservas, suspensões e multas diárias.",
      C: "OPAC (Catálogo Público em Linha), voltado à interface de busca, refinamento facetado e recuperação para os leitores.",
      D: "Controle de Autoridades, encarregado de unificar nomes pessoais, entidades coletivas, títulos uniformes e assuntos.",
      E: "Preservação e Restauro, que documenta as intervenções físicas de higienização, encadernação e reparos de folhas."
    },
    correctAnswer: "A",
    justification: "O módulo de Aquisições é o coração gerencial dos SIGBs: controla pedidos, pedidos pendentes (claims), gestão de fornecedores, empenhos orçamentários, entrada de notas fiscais e recebimento preliminar de itens comprados ou doados antes da catalogação definitiva.",
    reference: "Rowley (2002) - 'A biblioteca eletrônica' / Corte et al. (2002)"
  },
  {
    id: "mq_m20_2",
    moduleId: "m20",
    text: "No cenário internacional e brasileiro de softwares livres para automação de bibliotecas, o 'Koha' destaca-se amplamente. As principais características técnicas que consagram o Koha como uma plataforma de referência aberta são:",
    options: {
      A: "Estrutura de software proprietário fechado com cobrança de licença monetária perpétua por cada máquina cliente instalada.",
      B: "Software livre de código aberto (GNU/GPL), suporte pleno a MARC 21, Z39.50 e OAI-PMH, interface web e OPAC responsivo.",
      C: "Incompatibilidade formal com os modelos conceituais da IFLA, operando sem suporte a cabeçalhos autorizados de assunto.",
      D: "Arquitetura cliente-servidor legada que impede o funcionamento em navegadores modernos e conexões públicas de internet.",
      E: "Estruturação interna em planilhas eletrônicas locais em substituição aos sistemas de bancos de dados relacionais SQL."
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
      A: "Protocolo SMTP (Simple Mail Transfer Protocol), utilizado para remessa automatizada de faturas contratuais aos fornecedores.",
      B: "Protocolo FTP (File Transfer Protocol), empregado na cópia não criptografada de imagens de capas para os diretórios web.",
      C: "Protocolo SIP2 (Standard Interchange Protocol v2) ou NCIP, permitindo comunicação segura entre hardware e o banco do SIGB.",
      D: "Protocolo DNS (Domain Name System), voltado prioritariamente à conversão de nomes de domínios em endereços IP na rede.",
      E: "Protocolo Bluetooth doméstico de curto alcance, destinado à sincronização de periféricos de áudio sem fio do balcão."
    },
    correctAnswer: "C",
    justification: "O protocolo SIP2 (criado originalmente pela 3M) e o NCIP (NISO Circulation Interchange Protocol) são os padrões mundiais que permitem que terminais de autoatendimento conversem em tempo real com o software da biblioteca (verificando se o usuário está suspenso, baixando o empréstimo e desarmando o alarme da tag).",
    reference: "NISO Standard NCIP (ANSI/NISO Z39.83) / 3M SIP2 Standard"
  },
  {
    id: "mq_m20_4",
    moduleId: "m20",
    text: "A tecnologia RFID (Radio Frequency Identification / Identificação por Radiofrequência) tem substituído progressivamente os códigos de barras tradicionais nas grandes bibliotecas acadêmicas. A principal vantagem operacional da tecnologia RFID sobre o código de barras óptico convencional é:",
    options: {
      A: "O custo unitário de aquisição de cada tag de radiofrequência ser inferior ao custo de impressão de papel autoadesivo.",
      B: "Eliminar a necessidade de catalogação descritiva e classificação dos volumes, uma vez que a etiqueta auto-indexa o texto.",
      C: "Proteger as fibras celulósicas da folha de papel contra a oxidação ácida e o ataque de microrganismos e fungos ambientais.",
      D: "Permitir leitura simultânea de múltiplos itens sem contato físico ou visada óptica, unindo identificação e segurança antifurto.",
      E: "Aumentar a massa física e a densidade volumétrica do livro para evitar que exemplares sejam facilmente ocultados."
    },
    correctAnswer: "D",
    justification: "O código de barras exige que o operador posicione o laser exatamente na linha de visada, um a um. Com RFID, uma pilha de 5 livros pode ser lida em um único segundo no balcão ou durante o inventário nas estantes usando uma antena leitora portátil, sem precisar abrir as capas, além de operar como sistema antifurto.",
    reference: "Boss (2004) - 'RFID Technology for Libraries' / Cunha & Cavalcanti (2008)"
  },
  {
    id: "mq_m20_5",
    moduleId: "m20",
    text: "Durante a modernização tecnológica ou troca do sistema de gestão de uma biblioteca universitária, a 'Migração de Dados' bibliográficos é uma operação crítica. Para garantir que milhares de registros bibliográficos e de autoridades sejam exportados do sistema antigo e importados no novo sistema sem corrupção de acentuação e campos, o formato de intercâmbio de dados de referência mundial adotado deve ser o padrão:",
    options: {
      A: "Documento proprietário DOCX do Microsoft Word com tabelas embutidas.",
      B: "Arquivo gráfico JPEG em baixa resolução com compactação com perdas.",
      C: "Texto simples sem formatação (TXT) separado por barras verticais manuscritas.",
      D: "Formato de imagem bitmap monocromática de 16 cores não compactada.",
      E: "Padrão ISO 2709 / MARCXML estruturado com codificação de caracteres em UTF-8."
    },
    correctAnswer: "E",
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
      A: "Exame do documento (leitura documentária) ➔ Análise conceitual (identificação dos temas) ➔ Tradução para a linguagem de indexação.",
      B: "Tradução imediata para termos de tesauro ➔ Exame sumário da contracapa ➔ Catalogação descritiva de dados de imprenta.",
      C: "Formulações de consultas booleanas ➔ Impressão mecanizada de fichas ➔ Encadernação e reforço de lombada em percalina.",
      D: "Desbastamento por obsolescência ➔ Tombamento patrimonial de controle ➔ Determinação do número de autor pela tabela Cutter.",
      E: "Varredura de frequência vocabular ➔ Supressão de partículas de stopwords ➔ Redação do resumo crítico avaliativo."
    },
    correctAnswer: "A",
    justification: "Sequência canônica de concurso (ISO 5963): 1. Leitura documentária (exame das partes ricas do texto); 2. Análise conceitual (determinar do que a obra realmente trata, formulando conceitos em linguagem natural); 3. Tradução (converter esses conceitos nos termos autorizados do vocabulário controlado).",
    reference: "ISO 5963 / Lancaster (2004) - 'Indexação e Resumos' / Fujita (2003)"
  },
  {
    id: "mq_m21_2",
    moduleId: "m21",
    text: "Na teoria da representação temática da informação de Lancaster, a política de indexação de uma biblioteca deve calibrar os níveis de 'Exaustividade' e 'Especificidade'. Se uma biblioteca universitária especializada adota uma política de ALTA ESPECIFICIDADE na atribuição de termos, o impacto direto dessa decisão na recuperação da informação será:",
    options: {
      A: "Aumentar a Revocação da pesquisa, recuperando todos os documentos gerais e diminuindo a Precisão do resultado obtido.",
      B: "Aumentar a Precisão dos resultados da busca (itens altamente pertinentes) e reduzir a Revocação global do sistema.",
      C: "Gerar cem por cento de ruído documental em todas as pesquisas efetuadas pelos consulentes no catálogo em linha.",
      D: "Tornar inteiramente dispensável a criação de tesauros e vocabulários controlados para normalização terminológica.",
      E: "Impossibilitar em definitivo a recuperação de quaisquer registros bibliográficos cadastrados no acervo da unidade."
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
      A: "Relação Hierárquica estrita do tipo todo/parte (partitiva) ou gênero/espécie (genérica) entre classes conceituais.",
      B: "Relação de causalidade lógica e operacional entre instrumentos tecnológicos e os processos industriais fabris.",
      C: "Relação de Equivalência, controlando sinônimos ao remeter do termo não-autorizado para o descritor padrão do tesauro.",
      D: "Nota de escopo restritiva destinada a registrar balizas cronológicas e eventos históricos ocorridos no período.",
      E: "Definição etimológica pura de vocábulos eruditos de línguas clássicas sem efeito na padronização de descritores."
    },
    correctAnswer: "C",
    justification: "Relação de Equivalência controla a polissemia e a sinonímia na linguagem natural: o termo proibido aponta via 'USE' para o termo autorizado (ex: 'Aeronave USE Avião'), e sob o termo autorizado registra-se 'UP' (Usado Para: Aeronave), garantindo consistência no vocabulário.",
    reference: "ISO 25964 / Currás (1995) - 'Tesauros: linguagens de indexação'"
  },
  {
    id: "mq_m21_4",
    moduleId: "m21",
    text: "Na tipologia clássica de condensação documental formulada por F. W. Lancaster e constante da literatura internacional da Ciência da Informação (ISO 214), o resumo documental que descreve concisamente os tópicos abordados no documento original sem apresentar a metodologia pormenorizada, os dados quantitativos ou as conclusões definitivas da pesquisa denomina-se:",
    options: {
      A: "Resumo Informativo, que sintetiza dados qualitativos e quantitativos dispensando a consulta ao documento original.",
      B: "Resumo Crítico (Resenha), que apresenta juízo de valor opinativo fundamentado sobre o mérito científico do autor.",
      C: "Sumário Executivo, que sumariza conclusões fiscais e metas estratégicas para subsidiar tomadas imediatas de decisão.",
      D: "Resumo Indicativo (ou Descritivo), que apenas aponta os temas sem detalhar conclusões, exigindo ler a obra integral.",
      E: "Índice de Citações, que quantifica matematicamente o volume de remissões bibliográficas cruzadas no trabalho."
    },
    correctAnswer: "D",
    justification: "O Resumo Indicativo apenas aponta os tópicos presentes no trabalho de forma breve e genérica (ex: 'Discute-se o impacto da inflação na educação superior'). Por não trazer os resultados e conclusões concretas, ele NÃO permite que o leitor tome decisões definitivas sem ler o artigo original.",
    reference: "Lancaster (2004) / ISO 214 (Documentation — Abstracts for publications)"
  },
  {
    id: "mq_m21_5",
    moduleId: "m21",
    text: "Na classificação das linguagens documentárias quanto à sintaxe de composição dos conceitos, as 'Linguagens Pré-coordenadas' distinguem-se das 'Linguagens Pós-coordenadas' porque nas linguagens pré-coordenadas:",
    options: {
      A: "A associação dos descritores ocorre no ato da busca pelo próprio usuário final, mediante aplicação de operadores booleanos.",
      B: "Prescinde-se inteiramente de qualquer forma de controle vocabular, permitindo o emprego livre da linguagem natural.",
      C: "Os descritores são listados unicamente segundo a antiguidade cronológica de introdução dos termos na literatura.",
      D: "A representação dos assuntos fundamenta-se exclusivamente em códigos visuais pictográficos e símbolos gráficos livres.",
      E: "Os termos são combinados pelo indexador no processamento técnico segundo ordem fixa, compondo um cabeçalho único prévio."
    },
    correctAnswer: "E",
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
      A: "Inalienáveis e irrenunciáveis, permitindo ao autor reivindicar a paternidade da obra e opor-se a alterações indevidas.",
      B: "Passíveis de alienação comercial plena mediante contrato particular oneroso firmado com conglomerados editoriais.",
      C: "Extintos no prazo decadencial de dez anos contados a partir da data de publicação da primeira tiragem impressa.",
      D: "Propriedade compulsória originária da instituição de ensino superior onde o pesquisador mantém vínculo empregatício.",
      E: "Condicionados ao recolhimento periódico de taxas pecuniárias de manutenção administrativa perante o poder público."
    },
    correctAnswer: "A",
    justification: "O Art. 27 da LDA consagra a intangibilidade dos direitos morais: são inalienáveis e irrenunciáveis. O autor jamais pode vender sua autoria nem renunciar ao seu nome na obra; qualquer cláusula contratual em contrário é nula de pleno direito.",
    reference: "Lei Federal nº 9.610/1998, Arts. 24 e 27 / Carboni (2008)"
  },
  {
    id: "mq_m22_2",
    moduleId: "m22",
    text: "Conforme o artigo 41 da Lei de Direitos Autorais (Lei nº 9.610/1998), qual é o prazo legal geral de vigência dos direitos patrimoniais sobre uma obra intelectual antes de ela cair em Domínio Público no Brasil?",
    options: {
      A: "20 anos contados a partir do protocolo de entrega do exemplar na Fundação Biblioteca Nacional para fins de depósito legal.",
      B: "70 anos contados a partir de 1º de janeiro do ano subsequente ao do falecimento do autor (regra post mortem autoris).",
      C: "50 anos calculados a partir da data comprovada de nascimento do autor intellectual da obra literária ou científica.",
      D: "Prazo indeterminado e perpétuo enquanto existirem sucessores legítimos ou herdeiros testamentários do titular.",
      E: "5 anos contados da formalização do contrato de edição comercial firmado entre o autor e a respectiva editora."
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
      A: "A cópia reprográfica integral de manuais didáticos para comercialização com lucro aos estudantes do campus.",
      B: "A digitalização desautorizada de obras comerciais protegidas para disponibilização em servidores abertos de download.",
      C: "A citação de passagens para estudo ou crítica e a cópia de pequenos trechos para uso privado do copista sem lucro.",
      D: "A alteração imotivada do nome do autor original para atribuir os créditos de autoria ao orientador da pesquisa.",
      E: "A distribuição pública de arquivos protegidos por tecnologias DRM contornando travas de proteção criptográfica."
    },
    correctAnswer: "C",
    justification: "Art. 46 da Lei 9.610/98: Não constitui ofensa aos direitos autorais a citação em livros ou artigos de passagens de qualquer obra para fins de estudo/crítica indicando autor e fonte, nem a reprodução de 'pequenos trechos' para uso privado do copista sem intuito de lucro.",
    reference: "Lei Federal nº 9.610/1998, Art. 46 / Branco & Paranaguá (2009)"
  },
  {
    id: "mq_m22_4",
    moduleId: "m22",
    text: "No que se refere aos atos governamentais e documentos públicos oficiais (como leis, decretos, decisões judiciais e atos do poder público), o artigo 8º da Lei nº 9.610/1998 estabelece textualmente que:",
    options: {
      A: "São resguardados por copyright governamental restrito de titularidade exclusiva dos gabinetes dos tribunais.",
      B: "Permanecem protegidos por segredo autoral até a homologação formal pelos comitês de patrimônio arquivístico.",
      C: "Exigem a intermediação financeira e o recolhimento prévio de taxas de licenciamento por quem os consulte.",
      D: "Não são objeto de proteção autoral, podendo ser reproduzidos, consultados e disseminados livremente pela sociedade.",
      E: "Configuram literatura cinzenta de circulação estritamente vedada a pesquisadores que não integrem a carreira pública."
    },
    correctAnswer: "D",
    justification: "O Art. 8º da LDA exclui explicitamente da proteção autoral os textos de tratados, convenções, leis, decretos, regulamentos, decisões judiciais e demais atos oficiais. Por sua própria natureza de interesse público, tais documentos pertencem ao patrimônio social.",
    reference: "Lei Federal nº 9.610/1998, Art. 8º, IV"
  },
  {
    id: "mq_m22_5",
    moduleId: "m22",
    text: "Qual é a principal distinção formal e jurídica entre a proteção concedida pela 'Propriedade Industrial' (marcas e patentes) e a proteção assegurada pelos 'Direitos Autorais' (obras científicas e literárias) no Brasil?",
    options: {
      A: "Os direitos autorais demandam outorga formal do poder público, ao passo que marcas e patentes operam sem registro estatal.",
      B: "As patentes industriais vigoram por prazo perpétuo, enquanto os direitos autorais expiram em cinco anos da publicação.",
      C: "Os direitos autorais protegem apenas circuitos eletrônicos, enquanto a propriedade industrial protege poemas e prosas.",
      D: "A fiscalização dos direitos autorais compete ao INPI, ao passo que a concessão de patentes é gerida pela Biblioteca Nacional.",
      E: "O direito autoral nasce com a criação e dispensa registro; a propriedade industrial depende de concessão pelo INPI."
    },
    correctAnswer: "E",
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
      A: "Desk Review (ou Desk Reject), triagem preliminar de conformidade temática, escopo e integridade pelo editor.",
      B: "Diagramação final e editoração de provas gráficas para envio à gráfica universitária de impressão.",
      C: "Atribuição de prefixo alfanumérico e registro do sufixo persistente de DOI nos servidores da Crossref.",
      D: "Marcação estrutural em XML conforme as diretrizes do guia de estilo e especificação técnica SciELO Publishing Schema.",
      E: "Indexação por extração semântica realizada por colhedores automáticos do protocolo aberto OAI-PMH."
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
      A: "Publicar o manuscrito instantaneamente na internet sem qualquer avaliação prévia de mérito ou checagem conceitual.",
      B: "Ocultar a identidade dos autores dos pareceristas e a dos pareceristas dos autores, mitigando vieses de prestígio e filiação.",
      C: "Revelar aos avaliadores o nome e a instituição do autor, proibindo que os autores conheçam a identidade dos pareceristas.",
      D: "Disponibilizar os pareceres abertamente com as assinaturas de avaliadores e autores nos anais da revista.",
      E: "Exigir que a comissão editorial realize reuniões presenciais obrigatórias com os autores para julgamento do texto."
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
      A: "Impõe a cobrança compulsória de licenças em moeda estrangeira a cada submissão recepcionada pela plataforma.",
      B: "Substitui a redação de pesquisadores humanos por compilações textuais sintéticas geradas por modelos de linguagem.",
      C: "É uma plataforma aberta que gerencia todo o fluxo editorial (da submissão à publicação online), integrando OAI-PMH.",
      D: "Impede deliberadamente a interoperabilidade com motores de busca abertos como o Google Acadêmico e bases SciELO.",
      E: "Exige compulsoriamente a impressão mecânica em papel de todos os fascículos antes da visualização na web."
    },
    correctAnswer: "C",
    justification: "O OJS/SEER democratizou a editoração de revistas científicas: permite rastrear todo o fluxo de trabalho (submissão, pareceres, edições de texto, diagramação, publicação) com trilhas de auditoria, além de expor metadados automaticamente via OAI-PMH para colhedores internacionais.",
    reference: "Public Knowledge Project (PKP) - OJS Documentation / IBICT"
  },
  {
    id: "mq_m23_4",
    moduleId: "m23",
    text: "O Digital Object Identifier (DOI) é um identificador persistente e unívoco essencial para a comunicação científica contemporânea. A agência oficial internacional de registro de DOIs amplamente utilizada por periódicos e editores de artigos científicos no ecossistema do OJS e SciELO é a:",
    options: {
      A: "Câmara Brasileira do Livro (CBL), encarregada do registro do ISBN em monografias comerciais no Brasil.",
      B: "Coordenação de Aperfeiçoamento de Pessoal de Nível Superior (CAPES), mantenedora da avaliação Qualis Periódicos.",
      C: "Fundação Biblioteca Nacional (FBN), responsável pelo depósito legal e controle bibliográfico nacional.",
      D: "Crossref, agência oficial da International DOI Foundation dedicada a publicações acadêmicas e ligações entre citações.",
      E: "Federação Internacional de Futebol (FIFA), entidade privada desportiva sediada na Suíça sem fins editoriais."
    },
    correctAnswer: "D",
    justification: "A Crossref é a principal agência oficial de registro da Fundação Internacional do DOI (IDF) especializada em literatura acadêmica: vincula metadados editoriais ao identificador persistente, viabilizando links diretos e permanentes entre citações científicas mundiais.",
    reference: "International DOI Foundation / Crossref Guidelines"
  },
  {
    id: "mq_m23_5",
    moduleId: "m23",
    text: "O Open Researcher and Contributor ID (ORCID) tornou-se uma exigência padrão na editoração científica internacional e nas submissões ao SBU e repositórios da Unicamp. O propósito fundamental do identificador ORCID é:",
    options: {
      A: "Instituir a cobrança tributária de anuidades sindicais dos docentes com pós-graduação stricto sensu nas universidades.",
      B: "Substituir os currículos acadêmicos nacionais por um código comercial fechado de monitoramento de produtividade.",
      C: "Custodiar cópias de segurança criptografadas de mensagens de correio eletrônico de uso pessoal de pesquisadores.",
      D: "Registrar a frequência biométrica de entrada e saída de funcionários nos portais físicos de bibliotecas setoriais.",
      E: "Fornecer identificador persistente único de 16 dígitos ao pesquisador, resolvendo a desambiguação de nomes de autores."
    },
    correctAnswer: "E",
    justification: "O ORCID (ex: `https://orcid.org/0000-0002-1825-0097`) distingue inequivocamente cada cientista no mundo, unificando toda a sua produção intelectual sob um identificador persistente e resolvendo homônimos e variações de grafia nos sistemas de informação e periódicos.",
    reference: "ORCID Inc. Documentation / SciELO Criteria"
  }
];
