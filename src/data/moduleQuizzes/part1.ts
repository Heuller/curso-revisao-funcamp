import type { ModuleQuizQuestion } from './types';

export const moduleQuizzesPart1: ModuleQuizQuestion[] = [
  // ==========================================
  // MÓDULO 01: Biblioteca Digital e Repositório Digital
  // ==========================================
  {
    id: "mq_m01_1",
    moduleId: "m01",
    text: "No contexto da arquitetura do protocolo OAI-PMH (Open Archives Initiative Protocol for Metadata Harvesting), amplamente utilizado em repositórios digitais acadêmicos, as instituições participantes podem atuar como Provedores de Dados ou Provedores de Serviços. A Biblioteca Digital de Teses e Dissertações (BDTD), mantida pelo IBICT, é classificada tecnicamente como:",
    options: {
      A: "Provedor de Dados (Data Provider), pois armazena em seus discos locais os arquivos PDF integrais de todas as teses defendidas no Brasil.",
      B: "Provedor de Serviços (Service Provider), pois colhe (harvesting) metadados dos repositórios de diversas universidades e oferece busca e serviços unificados ao usuário.",
      C: "Servidor Proxy de Acesso Restrito, pois exige autenticação federada via rede CAFe para a liberação de downloads.",
      D: "Repositório Institucional Primário, pois substitui os sistemas das universidades de origem na emissão de fichas catalográficas.",
      E: "Base de Dados Relacional Proprietária, incompatível com o padrão de metadados Dublin Core."
    },
    correctAnswer: "B",
    justification: "A BDTD nacional atua como Provedor de Serviços (Service Provider). Ela não armazena os arquivos integrais de todas as universidades diretamente em primeira instância; ela colhe periodicamente os metadados expostos pelos Provedores de Dados (os repositórios de cada universidade via OAI-PMH) e disponibiliza uma interface única de busca e recuperação.",
    reference: "Rosetto (2008) / IBICT / Padrão OAI-PMH"
  },
  {
    id: "mq_m01_2",
    moduleId: "m01",
    text: "Os Princípios FAIR, estabelecidos por Wilkinson et al. (2016), tornaram-se a diretriz mundial para a gestão de dados de pesquisa. A atribuição de um identificador persistente e único globalmente (como um DOI ou Handle) e a descrição por metadados ricos atendem prioritariamente ao princípio de:",
    options: {
      A: "Findability (Encontrabilidade / Localizabilidade).",
      B: "Accessibility (Acessibilidade irrestrita).",
      C: "Interoperability (Interoperabilidade de vocabulários).",
      D: "Reusability (Reusabilidade sob licenças proprietárias).",
      E: "Reproducibility (Reprodutibilidade técnica)."
    },
    correctAnswer: "A",
    justification: "O primeiro princípio FAIR é o 'F' de Findable (Encontrável): os dados e metadados devem ser fáceis de encontrar por humanos e computadores. Isso exige compulsoriamente identificadores persistentes e unívocos globais (ex: DOI, Handle) e metadados ricos indexados em sistemas de busca.",
    reference: "Wilkinson et al. (2016) - 'The FAIR Guiding Principles for scientific data management and stewardship'"
  },
  {
    id: "mq_m01_3",
    moduleId: "m01",
    text: "Um Plano de Gestão de Dados (PGD / Data Management Plan) é um documento formal cada vez mais exigido por agências de fomento à pesquisa (como FAPESP e CNPq). No ciclo de vida dos dados, o objetivo precípuo do PGD é:",
    options: {
      A: "Garantir o sigilo perpétuo de todas as pesquisas acadêmicas financiadas com recursos públicos.",
      B: "Documentar, desde a concepção do projeto, como os dados serão coletados, organizados, documentados, armazenados, protegidos e compartilhados a longo prazo.",
      C: "Substituir a necessidade de submissão do projeto ao Comitê de Ética em Pesquisa.",
      D: "Comprovar a compra de licenças comerciais de softwares proprietários para análise estatística.",
      E: "Definir os valores monetários a serem cobrados pelo download dos conjuntos de dados gerados."
    },
    correctAnswer: "B",
    justification: "O PGD é o planejamento prévio e dinâmico que descreve todo o ciclo de vida dos dados de pesquisa: métodos de coleta, formatos de arquivo (preferencialmente abertos), metadados de documentação, políticas de custódia, preservação a longo prazo e termos de compartilhamento sob princípios de Ciência Aberta.",
    reference: "Sayão e Sales (2014) - Curadoria Digital e PGDs"
  },
  {
    id: "mq_m01_4",
    moduleId: "m01",
    text: "No software DSpace, a mais consagrada plataforma de código aberto para repositórios institucionais no mundo, a estrutura organizacional hierárquica fundamental que organiza os conteúdos obedece à seguinte sequência (do nível mais abrangente para o item específico):",
    options: {
      A: "Coleções ➔ Comunidades ➔ Metadados ➔ Itens.",
      B: "Comunidades (Communities) ➔ Subcomunidades ➔ Coleções (Collections) ➔ Itens (Items) com seus respectivos Bitstreams (arquivos anexos).",
      C: "Repositório ➔ Pastas de Rede ➔ Registros MARC ➔ Ficheiros.",
      D: "Bitstreams ➔ Metadados ➔ Coleções ➔ Comunidades.",
      E: "Unidades Gestoras ➔ Grupos de Pesquisa ➔ Tabelas ➔ Volumes."
    },
    correctAnswer: "B",
    justification: "A arquitetura clássica do DSpace estrutura-se em: Comunidades (ex: Faculdades ou Institutos) ➔ Subcomunidades (ex: Departamentos ou Programas de Pós-graduação) ➔ Coleções (ex: Teses, Artigos, Livros) ➔ Itens (registro bibliográfico com metadados Dublin Core) ➔ Bitstreams (os arquivos físicos, como PDFs, planilhas e imagens anexas).",
    reference: "DSpace Architecture Documentation / DSpace 7"
  },
  {
    id: "mq_m01_5",
    moduleId: "m01",
    text: "No modelo de Curadoria Digital de Dados de Pesquisa preconizado pelo Digital Curation Centre (DCC), a ação contínua de assegurar que os dados digitais permaneçam compreensíveis, autênticos e reutilizáveis ao longo do tempo mediante transformações tecnológicas denomina-se:",
    options: {
      A: "Descarte sumário.",
      B: "Indexação por extração simples.",
      C: "Ação de preservação digital sequencial e curadoria ativa.",
      D: "Backup estático em fita magnética sem controle de metadados.",
      E: "Comutação bibliográfica automatizada."
    },
    correctAnswer: "C",
    justification: "A Curadoria Digital (Digital Curation) supera a mera guarda estática (backup): é o gerenciamento ativo e contínuo dos dados durante todo o seu ciclo de vida, agregando valor, garantindo autenticidade, proveniência e viabilizando a reutilização futura frente à obsolescência tecnológica.",
    reference: "DCC Curation Lifecycle Model / Higgins (2008)"
  },

  // ==========================================
  // MÓDULO 02: Preservação e Conservação (Física e Digital)
  // ==========================================
  {
    id: "mq_m02_1",
    moduleId: "m02",
    text: "Segundo Arellano (2004), as estratégias metodológicas de preservação digital podem ser agrupadas em dois grandes tipos: estruturais e operacionais. Constituem, respectivamente, um exemplo de método estrutural e um de método operacional:",
    options: {
      A: "Elaboração de políticas e adoção de padrões de metadados; e migração de suporte ou emulação de software.",
      B: "Conserto físico de rasgos em folhas de papel; e encadernação em couro.",
      C: "Backup simples em pendrive; e instalação de ar-condicionado na sala do acervo.",
      D: "Digitalização de fotos; e desinfestação com gás tóxico.",
      E: "Compra de servidores em nuvem; e contratação de seguro predial."
    },
    correctAnswer: "A",
    justification: "Segundo Arellano (2004), métodos estruturais são os investimentos preliminares de gestão: formulação de políticas institucionais, normas e esquemas de metadados (ex: PREMIS). Métodos operacionais são as intervenções técnicas concretas aplicadas aos objetos: migração de formatos, emulação, encapsulamento e refrescamento de suporte.",
    reference: "Arellano (2004) - 'Critérios para a preservação de documentos digitais'"
  },
  {
    id: "mq_m02_2",
    moduleId: "m02",
    text: "O Modelo de Referência para um Sistema Aberto de Arquivamento (OAIS - Open Archival Information System / ISO 14721) define três pacotes de informação cruciais para a cadeia de custódia digital. O pacote gerado pelo produtor e entregue ao repositório, o pacote armazenado e preservado a longo prazo, e o pacote entregue ao usuário final são denominados, respectivamente:",
    options: {
      A: "DIP, AIP e SIP.",
      B: "SIP (Submission Information Package), AIP (Archival Information Package) e DIP (Dissemination Information Package).",
      C: "MARC, Dublin Core e MODS.",
      D: "PDF, XML e HTML.",
      E: "RAW, TIFF e JPEG."
    },
    correctAnswer: "B",
    justification: "Na terminologia rigorosa do modelo OAIS: SIP é o pacote de submissão recebido do produtor; AIP é o pacote de arquivamento definitivo, dotado de todos os metadados de preservação e integridade para guarda permanente; DIP é o pacote de disseminação, entregue ao usuário no formato amigável de consumo.",
    reference: "ISO 14721 (OAIS Reference Model)"
  },
  {
    id: "mq_m02_3",
    moduleId: "m02",
    text: "Na preservação de acervos físicos em suporte papel (livros raros, teses e documentos impressos), os dois parâmetros ambientais mais críticos para prevenir a proliferação fúngica e a hidrólise ácida celulósica são a Temperatura e a Umidade Relativa (UR). As faixas ideais recomendadas pela literatura conservacionista para áreas de guarda são:",
    options: {
      A: "Temperatura entre 28ºC a 35ºC e UR acima de 80%.",
      B: "Temperatura entre 18ºC a 22ºC e UR estável entre 45% e 55%.",
      C: "Temperatura abaixo de 0ºC com umidade absoluta nula.",
      D: "Temperatura de 25ºC constante e UR flutuante de 20% a 90% diariamente.",
      E: "Iluminação solar direta contínua nas estantes com lâmpadas incandescentes focadas."
    },
    correctAnswer: "B",
    justification: "A literatura de conservação preventiva (Cassares, Spinelli, IFLA) preconiza que a temperatura de guarda de papel deve situar-se entre 18ºC e 22ºC, com umidade relativa estabilizada entre 45% e 55%. Umidade acima de 65% ativa o desenvolvimento de fungos e insetos xilófagos; ar seco demais (<40%) torna as fibras do papel quebradiças.",
    reference: "Cassares (2000) - 'Como fazer conservação preventiva em arquivos e bibliotecas'"
  },
  {
    id: "mq_m02_4",
    moduleId: "m02",
    text: "O padrão internacional de metadados PREMIS (Preservation Metadata: Implementation Strategies) foi desenvolvido para apoiar a preservação digital a longo prazo. O modelo de dados do PREMIS é estruturado em cinco entidades fundamentais:",
    options: {
      A: "Autor, Editora, Ano, Página e Ilustração.",
      B: "Entidades Intelectuais (Intellectual Entities), Objetos (Objects), Eventos (Events), Direitos (Rights) e Agentes (Agents).",
      C: "Livro, Revista, Folheto, Disco e Fita.",
      D: "Líder, Diretório, Indicador, Subcampo e Ponto de Acesso.",
      E: "Texto, Áudio, Imagem, Vídeo e Holograma."
    },
    correctAnswer: "B",
    justification: "O modelo de dados conceitual do PREMIS organiza-se nas 5 entidades basilares: Entidade Intelectual (a obra ou conteúdo discreto), Objeto (a representação física, arquivo ou fluxo de bits), Evento (ações executadas sobre o objeto, como migração ou validação de checksum), Direitos (permissões legais de preservação) e Agentes (pessoas, softwares ou instituições executoras).",
    reference: "PREMIS Data Dictionary for Preservation Metadata (Library of Congress)"
  },
  {
    id: "mq_m02_5",
    moduleId: "m02",
    text: "Dentre as estratégias técnicas operacionais de preservação digital de longo prazo, a 'Emulação' distingue-se da 'Migração de Suporte / Formato' pelo fato de que a Emulação:",
    options: {
      A: "Converte os arquivos originais permanentemente em impressos em papel acid-free.",
      B: "Cria um ambiente de software capaz de simular o comportamento do hardware e sistema operacional originais, permitindo rodar o arquivo em sua forma nativa sem alterar seus bits de origem.",
      C: "Gera cópias do arquivo em formato PDF/A descartando o código-fonte original.",
      D: "Exige a quebra compulsória de direitos autorais para alterar o binário.",
      E: "Transfere dados exclusivamente de fitas magnéticas antigas para novos discos ópticos."
    },
    correctAnswer: "B",
    justification: "A Emulação preserva o objeto digital exatamente como foi concebido, sem converter seus formatos internos: ela constrói um software emulador que reproduz a máquina antiga em um computador moderno. Já a Migração altera o formato original do arquivo (ex: converte WordStar para PDF/A), correndo riscos de perda de dados e layout.",
    reference: "Arellano (2004) / Rothenberg (1999)"
  },

  // ==========================================
  // MÓDULO 03: Ciência Aberta (Open Science) e Acesso Aberto (Open Access)
  // ==========================================
  {
    id: "mq_m03_1",
    moduleId: "m03",
    text: "O movimento internacional pelo Acesso Aberto (Open Access) consolidou duas vias fundamentais de disseminação na Declaração de Budapeste (BOAI 2002): a Via Verde (Green Road) e a Via Dourada (Gold Road). A característica essencial que define a Via Verde é:",
    options: {
      A: "A publicação exclusiva em periódicos comerciais com pagamento obrigatório de APCs (Article Processing Charges).",
      B: "O autoarquivamento, pelo próprio pesquisador, de versões de seu artigo científico (preprints ou pós-prints permitidos) em um repositório digital de acesso aberto.",
      C: "A venda de cópias impressas de teses universitárias em livrarias do campus.",
      D: "A assinatura institucional de pacotes fechados de periódicos (Big Deals).",
      E: "A transferência total e exclusiva dos direitos patrimoniais para grandes conglomerados editoriais."
    },
    correctAnswer: "B",
    justification: "A Via Verde (Green Open Access) é a via do autoarquivamento: o autor deposita uma cópia do seu manuscrito (versão aceita ou prévia) no repositório institucional de sua universidade ou em um repositório temático, permitindo o acesso público gratuito sem necessidade de pagamento de taxas de publicação.",
    reference: "Budapest Open Access Initiative (BOAI, 2002) / Suber (2012)"
  },
  {
    id: "mq_m03_2",
    moduleId: "m03",
    text: "No contexto da transição para a Ciência Aberta, a modalidade de Acesso Aberto conhecida como 'Via Diamante' (Diamond / Platinum Open Access) diferencia-se da 'Via Dourada Comercial' porque na Via Diamante:",
    options: {
      A: "Apenas pesquisadores premiados têm direito de ler os artigos.",
      B: "Nem os leitores pagam assinatura para acessar os textos, nem os autores pagam taxas de publicação (sem cobrança de APCs), sendo o periódico financiado por instituições públicas, universidades ou sociedades científicas.",
      C: "Os artigos são obrigatoriamente protegidos por patentes industriais antes da publicação.",
      D: "A revisão por pares é completamente eliminada para acelerar a indexação.",
      E: "Os periódicos mantêm embargo comercial de cinco anos antes de abrir o PDF."
    },
    correctAnswer: "B",
    justification: "A Via Diamante é o modelo mais democrático e sustentável de Acesso Aberto: os periódicos são mantidos por universidades, sociedades científicas e agências públicas (como grande parte das revistas brasileiras do portal SciELO), garantindo gratuidade total tanto para quem publica (sem APC) quanto para quem lê.",
    reference: "Fuchs & Sandoval (2013) / SciELO Open Access"
  },
  {
    id: "mq_m03_3",
    moduleId: "m03",
    text: "A prática editorial em que periódicos científicos convencionais de assinatura exigem o pagamento de assinatura anual da biblioteca e, simultaneamente, cobram Taxas de Processamento de Artigos (APCs) dos autores para abrir artigos individuais em regime híbrido é denunciada na literatura como:",
    options: {
      A: "Peer Review aberto.",
      B: "Depósito legal eletrônico.",
      C: "Double Dipping (Duplo Pagamento / Dupla Cobrança).",
      D: "Preservação digital ativa.",
      E: "Indexação por atribuição."
    },
    correctAnswer: "C",
    justification: "O 'Double Dipping' é a prática predatória pela qual as grandes editoras comerciais lucram duplamente com o mesmo periódico: recebem a assinatura milionária das universidades pelo acesso à revista e cobram taxas astronômicas de APC (Article Processing Charge) dos autores para tornar seus artigos individuais abertos.",
    reference: "Björk & Solomon (2014) - 'Developing an Effective Market for Open Access Article Processing Charges'"
  },
  {
    id: "mq_m03_4",
    moduleId: "m03",
    text: "As licenças Creative Commons (CC) são instrumentos jurídicos padronizados fundamentais para a Ciência Aberta. A licença que permite a qualquer usuário distribuir, remixar, adaptar e criar a partir da obra, inclusive para fins comerciais, desde que seja atribuído o devido crédito ao autor original, é a:",
    options: {
      A: "CC BY (Atribuição).",
      B: "CC BY-NC (Atribuição - Não Comercial).",
      C: "CC BY-NC-ND (Atribuição - Não Comercial - Sem Derivações).",
      D: "Todos os Direitos Reservados (Copyright fechado).",
      E: "CC0 (Dedicação irrestrita ao domínio público sem citação)."
    },
    correctAnswer: "A",
    justification: "A licença CC BY é a licença padrão recomendada para a Ciência Aberta plena (adotada pelo SciELO e pela BOAI): ela confere a máxima liberdade de circulação e reuso, exigindo apenas a atribuição da autoria original.",
    reference: "Creative Commons Legal Framework / SciELO Guidelines"
  },
  {
    id: "mq_m03_5",
    moduleId: "m03",
    text: "A Ciência Aberta (Open Science) é um conceito guarda-chuva que ultrapassa a mera abertura de artigos. Qual das seguintes alternativas apresenta elementos integrantes genuínos do ecossistema da Ciência Aberta?",
    options: {
      A: "Dados Abertos (Open Data), Cadernos Abertos de Laboratório (Open Notebooks), Avaliação Aberta por Pares (Open Peer Review) e Recursos Educacionais Abertos (REA).",
      B: "Exigência de patenteamento de todos os achados científicos antes de qualquer divulgação.",
      C: "Fechamento de repositórios institucionais para acesso exclusivo de docentes titulares.",
      D: "Cobrança de assinaturas diferenciadas baseadas na renda per capita do país leitor.",
      E: "Destruição dos dados brutos após a publicação do artigo para proteger a privacidade dos pesquisadores."
    },
    correctAnswer: "A",
    justification: "A Ciência Aberta engloba diversas práticas integradas: Acesso Aberto às publicações, Dados Abertos de pesquisa, Código/Software Aberto, Cadernos de Laboratório Abertos, Revisão Aberta por Pares, Recursos Educacionais Abertos e Ciência Cidadã.",
    reference: "UNESCO Recommendation on Open Science (2021)"
  },

  // ==========================================
  // MÓDULO 04: Inteligência Artificial na Biblioteconomia
  // ==========================================
  {
    id: "mq_m04_1",
    moduleId: "m04",
    text: "A aplicação de Grandes Modelos de Linguagem (LLMs) e Inteligência Artificial Generativa em serviços de informação tem despertado grande debate técnico. Quando um modelo de IA gera referências bibliográficas plausíveis, mas que não existem na realidade física ou nas bases indexadoras, ocorre o fenômeno denominado tecnicamente de:",
    options: {
      A: "Indexação exaustiva.",
      B: "Alucinação (Hallucination) / Confabulação de saída.",
      C: "Revocação de 100%.",
      D: "Ruído documental intencional.",
      E: "Desbastamento algorítmico."
    },
    correctAnswer: "B",
    justification: "Na terminologia da IA e Processamento de Linguagem Natural, 'alucinação' (hallucination) ocorre quando o modelo estatístico prevê sequências de palavras altamente prováveis e bem estruturadas sintaticamente, mas que são factualmente incorretas ou inventadas (como criar autores, títulos de periódicos e DOIs inexistentes).",
    reference: "Ji et al. (2023) - 'Survey of Hallucination in Natural Language Generation'"
  },
  {
    id: "mq_m04_2",
    moduleId: "m04",
    text: "Nos modernos sistemas de Recuperação da Informação potencializados por Inteligência Artificial, a 'Busca Semântica' difere da tradicional busca booleana por palavras-chave (keyword-based) porque:",
    options: {
      A: "Recupera documentos com base no significado conceitual e nas relações vetoriais dos termos (embeddings), encontrando itens relevantes mesmo que não contenham exatamente as mesmas palavras digitadas pelo usuário.",
      B: "Proíbe a utilização de operadores booleanos em qualquer circunstância.",
      C: "Exige que o usuário digite suas dúvidas exclusivamente em linguagem SQL.",
      D: "Funciona exclusivamente com dados numéricos em tabelas financeiras.",
      E: "Substitui os metadados bibliográficos por imagens coloridas."
    },
    correctAnswer: "A",
    justification: "A busca semântica transforma palavras e frases em representações matemáticas densas (vetores/embeddings): ela mede a proximidade contextual entre os conceitos na base de dados, permitindo recuperar documentos de alto valor temático mesmo quando o usuário utiliza sinônimos ou termos afins não previstos na query literal.",
    reference: "Manning, Raghavan & Schütze (2008) / Jurafsky & Martin (2023)"
  },
  {
    id: "mq_m04_3",
    moduleId: "m04",
    text: "Na automação do processamento técnico de unidades de informação, a IA tem sido aplicada em tarefas de 'Extração Automática de Metadados'. Uma aplicação legítima e ética dessa tecnologia na catalogação de teses e artigos consiste em:",
    options: {
      A: "Substituir integralmente a validação de autoridade do bibliotecário sem necessidade de supervisão humana.",
      B: "Auxiliar na identificação preliminar de entidades nomeadas (autores, instituições, datas), sugestão assistida de cabeçalhos de assunto a partir de tesauros e geração de rascunhos de resumos para validação profissional (Human-in-the-loop).",
      C: "Alterar arbitrariamente os nomes dos autores para padronizar todos os pesquisadores com nomes anglo-saxões.",
      D: "Excluir teses antigas do repositório para economizar espaço de armazenamento em nuvem.",
      E: "Publicar os registros diretamente no catálogo sem respeitar as regras do MARC 21."
    },
    correctAnswer: "B",
    justification: "A literatura contemporânea preconiza o modelo 'Human-in-the-loop' (humano no controle): a IA acelera o processamento executando tarefas repetitivas de extração preliminar e sugestão de termos controlados, cabendo ao bibliotecário catalogador validar criticamente, refinar e garantir a fidedignidade dos metadados.",
    reference: "IFLA Statement on Libraries and Artificial Intelligence (2020)"
  },
  {
    id: "mq_m04_4",
    moduleId: "m04",
    text: "O 'Viés Algorítmico' (Algorithmic Bias) representa um dos maiores desafios éticos na implementação de algoritmos de recomendação e busca em acervos de bibliotecas. Esse viés se manifesta quando:",
    options: {
      A: "O servidor de rede da biblioteca perde a conexão física com a internet durante a noite.",
      B: "Os dados históricos utilizados para treinar o modelo de IA contêm preconceitos, sub-representações de grupos sociais ou assimetrias de gênero e raça, fazendo com que o algoritmo reproduza e amplifique essas distorções nas respostas e recomendações aos usuários.",
      C: "A biblioteca passa a utilizar softwares com licença aberta GNU/GPL.",
      D: "O sistema exige a digitação correta de acentuação gráfica nos formulários.",
      E: "O catálogo em linha adota o padrão responsivo para telefones móveis."
    },
    correctAnswer: "B",
    justification: "Modelos de IA aprendem com os dados do passado: se as bases de dados e a literatura histórica contêm vieses (como a invisibilização sistemática de autoras mulheres ou minorias), o algoritmo assimilará esses padrões como regra, perpetuando o preconceito e a exclusão nos resultados de busca.",
    reference: "Noble (2018) - 'Algorithms of Oppression: How Search Engines Reinforce Racism'"
  },
  {
    id: "mq_m04_5",
    moduleId: "m04",
    text: "No contexto da Competência Informacional contemporânea, o 'Letramento em Inteligência Artificial' (AI Literacy) capacita os usuários das bibliotecas universitárias primordialmente a:",
    options: {
      A: "Programar novos circuitos integrados de microprocessadores em linguagem assembly.",
      B: "Compreender os princípios de funcionamento dos sistemas de IA, formular comandos e prompts de busca estruturados de forma crítica, avaliar o risco de alucinações e empregar ferramentas de IA com integridade acadêmica e transparência de autoria.",
      C: "Delegar a redação integral de artigos científicos e teses aos chatbots para economizar tempo de estudo.",
      D: "Eliminar a necessidade de leitura de fontes primárias revisadas por pares.",
      E: "Instalar extensões ilegais de quebra de paywalls em navegadores públicos."
    },
    correctAnswer: "B",
    justification: "A AI Literacy desenvolvida pelas bibliotecas universitárias atua na dimensão crítica e ética: saber como formular prompts eficazes, compreender os limites da tecnologia, checar fontes e usar a IA como ferramenta de suporte sem comprometer a honestidade intelectual e a originalidade acadêmica.",
    reference: "Long & Magerko (2020) - 'What is AI Literacy? Competencies and Design Considerations'"
  },

  // ==========================================
  // MÓDULO 05: Fluxos Informacionais
  // ==========================================
  {
    id: "mq_m05_1",
    moduleId: "m05",
    text: "Na clássica teoria da comunicação científica descrita por William Garvey e Belver Griffith, a transferência da informação estrutura-se em dois grandes canais: canais formais e canais informais. Constituem canais informais de comunicação:",
    options: {
      A: "Artigos em periódicos indexados na Scopus e patentes registradas no INPI.",
      B: "Livros publicados por editoras universitárias e anais de congressos com ISBN.",
      C: "Conversas de corredor entre pesquisadores, trocas de e-mails, reuniões de grupos de pesquisa e circulação de manuscritos preliminares em colégios invisíveis.",
      D: "Teses registradas na BDTD e relatórios técnicos depositados no repositório institucional.",
      E: "Normas técnicas internacionais aprovadas pela ISO."
    },
    correctAnswer: "C",
    justification: "Canais informais caracterizam-se pela comunicação direta, rápida, não filtrada publicamente e restrita a redes interpessoais (trocas de cartas, e-mails, conversas de laboratório). Os canais formais envolvem o registro público permanente, revisão por pares e ampla circulação social (periódicos, livros, patentes).",
    reference: "Garvey & Griffith (1972) / Meadows (1999)"
  },
  {
    id: "mq_m05_2",
    moduleId: "m05",
    text: "Segundo a abordagem sistêmica de Yves-François Le Coadic (1996), a Ciência da Informação estuda a informação sob o prisma do seu ciclo vital. As três funções elementares que integram o ciclo de fluxo da informação são:",
    options: {
      A: "Construção (produção), Comunicação (circulação/transmissão) e Uso (consumo) da informação.",
      B: "Compra, Tombamento e Descarte.",
      C: "Catalogação, Classificação e Indexação.",
      D: "Digitalização, Compactação e Upload.",
      E: "Venda, Lucro e Tributação."
    },
    correctAnswer: "A",
    justification: "Para Le Coadic (1996, 'A Ciência da Informação'), a informação científica cumpre um ciclo tripartite constante: a fase de construção (pesquisa/produção), a fase de comunicação (registro, processamento, disseminação e transferência) e a fase de uso (leitura, assimilação e aplicação pelo usuário final).",
    reference: "Le Coadic (1996) - 'A Ciência da Informação'"
  },
  {
    id: "mq_m05_3",
    moduleId: "m05",
    text: "O conceito de 'Colégios Invisíveis' (Invisible Colleges), formulado originalmente por Robert Boyle no século XVII e consagrado na Ciência da Informação por Derek de Solla Price (1963), designa:",
    options: {
      A: "Instituições de ensino superior que funcionam clandestinamente sem autorização do MEC.",
      B: "Redes informais e estruturadas de colaboração científica e intercâmbio de ideias formadas por grupos de pesquisadores de ponta que partilham interesses comuns antes da publicação formal dos resultados.",
      C: "Bibliotecas abandonadas sem bibliotecário responsável.",
      D: "Editoras que publicam livros sem catalogação na publicação (CIP).",
      E: "Repositórios digitais que operam sem conexão com o OAI-PMH."
    },
    correctAnswer: "B",
    justification: "Colégios invisíveis são redes informais de comunicação e cooperação entre pesquisadores que lideram determinada área de pesquisa no mundo: eles trocam preprints, dados e percepções críticas rapidamente entre si muito antes de o artigo passar pelo moroso processo de publicação em periódicos impressos.",
    reference: "Price (1963) - 'Little Science, Big Science'"
  },
  {
    id: "mq_m05_4",
    moduleId: "m05",
    text: "Para o eminente teórico brasileiro Aldo Barreto, a informação atua como uma 'estrutura significante'. Em suas formulações conceituais, a transferência de informação só se completa efetivamente quando:",
    options: {
      A: "O arquivo em PDF é baixado com sucesso no disco rígido do leitor.",
      B: "A mensagem emitida é percebida, decodificada e assimilada pelo receptor, provocando uma modificação no seu estado prévio de conhecimento.",
      C: "O livro é devolvido no prazo regulamentar sem multas no balcão de empréstimo.",
      D: "A ficha catalográfica é impressa no verso da folha de rosto.",
      E: "O servidor de rede da biblioteca envia um e-mail de confirmação."
    },
    correctAnswer: "B",
    justification: "Aldo Barreto enfatiza a dimensão cognitiva da informação: a simples transmissão física de sinais ou dados não configura transferência da informação. A informação só se concretiza plenamente quando gera significado, sendo assimilada pela consciência do receptor e transformando seu estoque de conhecimento (conhecimento gerando conhecimento).",
    reference: "Barreto (1998) - 'Mudança estrutural no fluxo da informação'"
  },
  {
    id: "mq_m05_5",
    moduleId: "m05",
    text: "No estudo dos fluxos de transferência da informação científica, as 'Barreiras à Comunicação' impedem ou retardam o acesso ao conhecimento. A existência de barreiras econômicas causadas por muros de pagamento (paywalls) e cobrança de assinaturas restringe a circulação do saber, caracterizando uma barreira:",
    options: {
      A: "Linguística.",
      B: "Financeira / Econômica de acesso.",
      C: "Fisiológica.",
      D: "Terminológica.",
      E: "Cognitiva pura."
    },
    correctAnswer: "B",
    justification: "As barreiras financeiras e econômicas ocorrem quando o acesso ao conhecimento gerado pela humanidade é condicionado à capacidade de pagamento individual ou institucional (preço exorbitante de assinaturas de bases e periódicos), sendo o principal alvo de combate do Movimento de Acesso Aberto.",
    reference: "Pinheiro & Loureiro (1995) / Meadows (1999)"
  },

  // ==========================================
  // MÓDULO 06: Bibliometria
  // ==========================================
  {
    id: "mq_m06_1",
    moduleId: "m06",
    text: "A Lei de Bradford (1934), conhecida como a Lei da Dispersão Periódica, estabelece que se os periódicos forem ordenados em ordem decrescente de produtividade de artigos sobre determinado assunto, eles podem ser divididos em um núcleo de periódicos mais dedicados ao tema e várias zonas contendo o mesmo número de artigos. A relação entre a quantidade de periódicos no núcleo e nas zonas sucessivas obedece à proporção:",
    options: {
      A: "1 : 1 : 1 : 1.",
      B: "1 : n : n² : n³...",
      C: "1 : 2 : 3 : 4...",
      D: "n : n/2 : n/4...",
      E: "Log(n) : Exp(n)."
    },
    correctAnswer: "B",
    justification: "A formulação matemática de Bradford demonstra que para obter o mesmo número de artigos sobre um assunto em zonas sucessivas, o número de periódicos necessários aumenta geometricamente na proporção 1 : n : n² (onde 'n' é o multiplicador de Bradford).",
    reference: "Bradford (1934) - 'Sources of information on specific subjects' / Vanti (2002)"
  },
  {
    id: "mq_m06_2",
    moduleId: "m06",
    text: "A Lei de Lotka (1926), ou Lei do Quadrado Inverso da Produtividade Científica, estuda a distribuição de autores por volume de artigos publicados. Essa lei empírica demonstra que:",
    options: {
      A: "Todos os autores acadêmicos publicam exatamente a mesma quantidade de artigos ao longo de suas carreiras.",
      B: "O número de autores que produzem n artigos é inversamente proporcional a n² (isto é, uma grande proporção de autores publica apenas um único artigo, enquanto uma elite diminuta de autores é responsável pela maior parte da produção).",
      C: "Quanto mais velho for o pesquisador, menos artigos ele publicará.",
      D: "Autores que publicam em coautoria recebem o dobro de citações de autores únicos.",
      E: "A literatura científica dobra de tamanho a cada dois anos."
    },
    correctAnswer: "B",
    justification: "A Lei de Lotka constata que cerca de 60% de todos os autores em uma disciplina publicam apenas 1 trabalho ao longo da vida, enquanto a proporção de autores que publicam mais decai exponencialmente segundo o inverso do quadrado de sua produção (1/n²).",
    reference: "Lotka (1926) - 'The frequency distribution of scientific productivity'"
  },
  {
    id: "mq_m06_3",
    moduleId: "m06",
    text: "A Lei de Zipf (1949), também conhecida como a Lei do Mínimo Esforço, analisa a frequência de ocorrência de palavras em textos em linguagem natural. A lei demonstra que se ordenarmos as palavras de um documento em ordem decrescente de frequência (posto ou rank r) e multiplicarmos esse posto pela sua frequência absoluta (f), o resultado obtido é:",
    options: {
      A: "Igual a zero.",
      B: "Aproximadamente constante (r × f = C).",
      C: "Sempre um número negativo.",
      D: "O dobro do total de páginas do livro.",
      E: "Inversamente proporcional ao quadrado da raiz cúbica."
    },
    correctAnswer: "B",
    justification: "A primeira Lei de Zipf afirma que o produto do posto (r) de uma palavra por sua frequência de ocorrência (f) é aproximadamente constante (r × f ≈ C). Poucas palavras muito frequentes (como artigos e preposições - stopwords) concentram a maior parte do texto, enquanto a imensa maioria dos termos tem frequência muito baixa.",
    reference: "Zipf (1949) - 'Human Behavior and the Principle of Least Effort'"
  },
  {
    id: "mq_m06_4",
    moduleId: "m06",
    text: "No Journal Citation Reports (JCR / Clarivate), o Fator de Impacto (Journal Impact Factor - JIF) de um periódico em um determinado ano (por exemplo, 2026) é calculado classicamente pela seguinte razão:",
    options: {
      A: "Total de artigos publicados no ano de 2026 dividido pelo número de assinantes da revista.",
      B: "Número de citações recebidas em 2026 pelos artigos publicados pelo periódico nos dois anos imediatamente anteriores (2024 e 2025), dividido pelo número total de artigos citáveis publicados pela revista nesses mesmos dois anos (2024 e 2025).",
      C: "Número de visualizações de página do site oficial da revista no último mês de dezembro.",
      D: "Soma das notas atribuídas pelos pareceristas em regime duplo-cego.",
      E: "Multiplicação do número de autores pelo valor da taxa de submissão (APC)."
    },
    correctAnswer: "B",
    justification: "A fórmula clássica do Fator de Impacto de Garfield (JCR) para o ano N mede a média de citações por artigo nos dois anos precedentes: Citações em N a artigos de (N-1 e N-2) / Artigos citáveis publicados em (N-1 e N-2).",
    reference: "Garfield (1972) - 'Citation analysis as a tool in journal evaluation'"
  },
  {
    id: "mq_m06_5",
    moduleId: "m06",
    text: "O Índice H (H-Index), formulado pelo físico Jorge Hirsch em 2005 para quantificar o rendimento e impacto acumulado de um pesquisador individual, define que um cientista possui índice h se:",
    options: {
      A: "Publicou exatamente h livros no idioma inglês.",
      B: "Possui h artigos publicados que receberam, cada um, pelo menos h citações, enquanto os seus demais artigos possuem menos de h citações cada.",
      C: "Trabalha há h anos consecutivos como professor titular de uma universidade pública.",
      D: "Orientou h teses de doutorado aprovadas com distinção.",
      E: "Recebeu h bolsas de produtividade em pesquisa do CNPq."
    },
    correctAnswer: "B",
    justification: "A métrica do Índice H combina produtividade (número de artigos) e impacto (citações recebidas): um pesquisador tem h=15 se ele tem pelo menos 15 artigos com 15 ou mais citações cada um. Isso impede que um autor com apenas 1 artigo muito citado tenha nota altíssima ou que um autor com 100 artigos nunca citados tenha nota alta.",
    reference: "Hirsch (2005) - 'An index to quantify an individual's scientific research output'"
  },

  // ==========================================
  // MÓDULO 07: Fontes de Informação e Bases de Dados
  // ==========================================
  {
    id: "mq_m07_1",
    moduleId: "m07",
    text: "Na clássica tipologia de fontes de informação estabelecida por Denis Grogan e sistematizada no Brasil por Murilo Bastos da Cunha, as fontes dividem-se em Primárias, Secundárias e Terciárias. São exemplos exclusivos de Fontes Primárias de informação científica:",
    options: {
      A: "Dicionários bilíngues, enciclopédias temáticas e guias de bibliotecas.",
      B: "Artigos originais de pesquisa em periódicos, teses e dissertações acadêmicas, relatórios técnicos de pesquisa e patentes de invenção.",
      C: "Bases de dados referenciais como Scopus e PubMed.",
      D: "Bibliografias especializadas e catálogos em linha de bibliotecas (OPACs).",
      E: "Artigos de revisão integrativa de literatura e revistas de resumos (Abstracts)."
    },
    correctAnswer: "B",
    justification: "Fontes primárias trazem conhecimento novo, inédito, em primeira mão, que não sofreu condensação, filtro ou reprocessamento prévio por terceiros: artigos de pesquisa empírica, relatórios técnicos, teses, dissertações, patentes e anais de eventos científicos.",
    reference: "Grogan (1995) / Cunha (2001) - 'Para saber mais: fontes de informação em ciência e tecnologia'"
  },
  {
    id: "mq_m07_2",
    moduleId: "m07",
    text: "Embora sejam publicados em revistas científicas de prestígio com revisão por pares, os 'Artigos de Revisão de Literatura' (Review Articles / Revisões Sistemáticas) são classificados na Ciência da Informação formalmente como:",
    options: {
      A: "Fontes Primárias.",
      B: "Fontes Secundárias, pois não apresentam uma nova descoberta empírica original, mas sim analisam, sintetizam e indexam estudos primários pré-existentes.",
      C: "Fontes Terciárias, equivalentes a dicionários de bolso.",
      D: "Literatura Cinzenta não científica.",
      E: "Obras em domínio público compulsory."
    },
    correctAnswer: "B",
    justification: "Pegadinha clássica em provas de concurso: Artigos de revisão analisam a literatura primária pré-existente; portanto, sua função é organizar, filtrar, consolidar e apontar o estado da arte de pesquisas anteriores, constituindo tecnicamente uma Fonte Secundária de informação.",
    reference: "Grogan (1995) / Cunha (2001)"
  },
  {
    id: "mq_m07_3",
    moduleId: "m07",
    text: "No universo das bases de dados eletrônicas especializadas, qual é a principal distinção técnica entre uma 'Base de Dados Referencial' (como Scopus e Web of Science) e uma 'Base de Dados de Texto Completo' (como SciELO e ScienceDirect)?",
    options: {
      A: "As bases referenciais cobram assinatura, enquanto as de texto completo são sempre ilegais.",
      B: "As bases referenciais contêm metadados bibliográficos representativos (título, autor, resumo, filiação, citações e indexação) de milhares de publicações, mas não armazenam o arquivo integral (PDF), ao passo que as bases de texto completo disponibilizam o documento integral para leitura e download.",
      C: "As bases de texto completo não possuem campos de busca booleana.",
      D: "As bases referenciais só registram livros infantis.",
      E: "As bases de texto completo utilizam exclusivamente fichas catalográficas microfilmadas."
    },
    correctAnswer: "B",
    justification: "Bases referenciais são inventários de metadados analíticos e índices de citação: apontam para onde a literatura está. Já as bases de texto completo armazenam nos seus servidores e entregam o arquivo completo (PDF/HTML) do texto para consulta direta.",
    reference: "Lancaster (2004) / Rowley (2002)"
  },
  {
    id: "mq_m07_4",
    moduleId: "m07",
    text: "O termo 'Literatura Cinzenta' (Grey Literature) é empregado na biblioteconomia para designar documentos que:",
    options: {
      A: "Foram impressos com tinta preta de baixa qualidade que desbotou com a ação da luz.",
      B: "São produzidos nos âmbitos governamental, acadêmico, comercial e industrial, mas não são controlados nem distribuídos pelos canais comerciais convencionais de editoras e livrarias (como relatórios técnicos restritos, memorandos, preprints e pareceres técnicos).",
      C: "Estão sujeitos a processos de censura judicial.",
      D: "São cópias ilegais reprográficas não autorizadas.",
      E: "Tratam exclusivamente de poluição atmosférica."
    },
    correctAnswer: "B",
    justification: "O conceito de literatura cinzenta (conferência de Luxemburgo, 1997) abrange o material produzido por órgãos públicos, laboratórios, empresas e universidades cuja circulação é restrita ou não passa pelo canal convencional de comercialização livreira, exigindo estratégias de busca e coleta especializadas das bibliotecas.",
    reference: "Alberani (1990) / Farace & Schöpfel (2010)"
  },
  {
    id: "mq_m07_5",
    moduleId: "m07",
    text: "As Patentes constituem uma das mais ricas fontes de informação tecnológica e industrial do mundo. No Brasil, o órgão federal responsável pela concessão, registro e manutenção da base pública de dados de patentes é o:",
    options: {
      A: "IBICT (Instituto Brasileiro de Informação em Ciência e Tecnologia).",
      B: "INPI (Instituto Nacional da Propriedade Industrial).",
      C: "MEC (Ministério da Educação).",
      D: "CNPq (Conselho Nacional de Desenvolvimento Científico e Tecnológico).",
      E: "SBU (Sistema de Bibliotecas da Unicamp)."
    },
    correctAnswer: "B",
    justification: "O INPI (autarquia federal vinculada ao Ministério do Desenvolvimento, Indústria, Comércio e Serviços) é a agência estatal oficial de concessão e registro de marcas e patentes no Brasil, mantendo bancos de patentes fundamentais para estudos de prospecção tecnológica.",
    reference: "Lei Federal nº 9.279/1996 (Lei de Propriedade Industrial) / INPI"
  },

  // ==========================================
  // MÓDULO 08: Recuperação da Informação e Estratégias de Busca
  // ==========================================
  {
    id: "mq_m08_1",
    moduleId: "m08",
    text: "Na formulação de estratégias de busca em catálogos eletrônicos e bases de dados científicos, o uso dos operadores booleanos clássicos (AND, OR, NOT) altera sensivelmente o conjunto de resultados. O operador que realiza a UNIÃO lógica de conjuntos, ampliando a pesquisa para recuperar documentos que contenham qualquer um dos termos sinônimos pesquisados, aumentando a REVOCAÇÃO, é o:",
    options: {
      A: "AND (E).",
      B: "NOT (NÃO).",
      C: "OR (OU).",
      D: "XOR (OU exclusivo).",
      E: "NEAR (Perto de)."
    },
    correctAnswer: "C",
    justification: "O operador OR efetua a união dos conjuntos: ele recupera documentos que apresentem o termo A, o termo B ou ambos. É a ferramenta indispensável para agrupar sinônimos e variantes linguísticas (ex: 'câncer OR neoplasia OR tumor'), ampliando a revocação da busca.",
    reference: "Lancaster (2004) - 'Indexação e Resumos' / Rowley (2002)"
  },
  {
    id: "mq_m08_2",
    moduleId: "m08",
    text: "Durante uma pesquisa em base de dados bibliográfica, o bibliotecário utiliza o recurso de 'Truncamento' (geralmente representado pelos caracteres *, ? ou $). A finalidade técnica desse recurso é:",
    options: {
      A: "Interromper a busca automaticamente após 10 segundos.",
      B: "Recuperar a raiz ou radical de uma palavra com todas as suas variações morfológicas de sufixo, prefixo, gênero e número (ex: 'bibliotec*' recupera 'biblioteca', 'bibliotecário', 'biblioteconomia').",
      C: "Excluir palavras em língua estrangeira da lista final de resultados.",
      D: "Bloquear a visualização de resumos que contenham plágio acadêmico.",
      E: "Converter o texto para caixa alta."
    },
    correctAnswer: "B",
    justification: "O truncamento (truncation) é a substituição de um ou mais caracteres pelo caractere coringa (* ou $): permite que uma única raiz lexical recupere todas as derivações sufixais e flexões gramaticais sem necessidade de digitar cada termo individualmente com OR.",
    reference: "Rowley (2002) - 'A biblioteca eletrônica'"
  },
  {
    id: "mq_m08_3",
    moduleId: "m08",
    text: "A avaliação do desempenho de um Sistema de Recuperação da Informação (SRI) baseia-se historicamente nas métricas formuladas por Cyril Cleverdon nos experimentos de Cranfield e consagradas por F. W. Lancaster. As métricas de 'Revocação' (Recall) e 'Precisão' (Precision) são calculadas, respectivamente, como:",
    options: {
      A: "Total de documentos no acervo / Número de usuários atendidos no mês.",
      B: "Proporção de documentos relevantes recuperados em relação ao total de documentos relevantes existentes na base; e proporção de documentos relevantes recuperados em relação ao total de documentos que a busca recuperou.",
      C: "Velocidade em megabits do servidor / Tempo de resposta em segundos.",
      D: "Número de erros gramaticais / Quantidade de palavras no resumo.",
      E: "Quantidade de cliques no mouse / Número de páginas impressas."
    },
    correctAnswer: "B",
    justification: "Revocação mede a capacidade de esgotar o acervo: (Relevantes Recuperados) / (Total de Relevantes no Sistema). Precisão mede a pureza do resultado: (Relevantes Recuperados) / (Total de Itens Trazidos pela Busca). São grandezas inversamente proporcionais.",
    reference: "Lancaster (1979, 2004) - 'Information Retrieval Systems'"
  },
  {
    id: "mq_m08_4",
    moduleId: "m08",
    text: "Em uma busca especializada conduzida em uma base de dados científica, ocorre o fenômeno do 'Silêncio Documental' (Drop-out) quando:",
    options: {
      A: "A base de dados traz milhares de documentos totalmente inúteis e não relacionados ao tema pesquisado.",
      B: "O sistema deixa de recuperar documentos que são altamente relevantes para o usuário existentes na base, geralmente devido a uma estratégia de busca excessivamente restrita ou específica.",
      C: "O volume de áudio das estações de estudo da biblioteca é zerado.",
      D: "A biblioteca é proibida de realizar empréstimo domiciliar.",
      E: "O computador entra em modo de suspensão."
    },
    correctAnswer: "B",
    justification: "Silêncio Documental ocorre quando documentos relevantes existem na base, mas a estratégia de busca foi excessivamente restrita (ou usou termos rígidos/sinônimos não mapeados), fazendo com que a busca não recupere o que o usuário precisava (baixa revocação). Ruído é o oposto (muitos itens inúteis trazidos na busca).",
    reference: "Lancaster (2004) / Chaumier (1988)"
  },
  {
    id: "mq_m08_5",
    moduleId: "m08",
    text: "Os operadores de proximidade (como NEAR, WITH, ADJ ou SAME) são ferramentas avançadas de recuperação da informação. A função desses operadores em relação ao operador booleano AND tradicional é:",
    options: {
      A: "Exigir que os termos de busca ocorram próximos uns dos outros dentro de uma janela definida de palavras ou no mesmo campo/parágrafo, aumentando substancialmente a precisão da pesquisa.",
      B: "Tornar a pesquisa obrigatoriamente mais ampla e genérica que o operador OR.",
      C: "Ignorar a ordem alfabética das palavras-chave.",
      D: "Eliminar a necessidade de indexação na base de dados.",
      E: "Permitir a busca exclusiva em arquivos de vídeo."
    },
    correctAnswer: "A",
    justification: "O operador AND apenas exige que ambos os termos estejam no mesmo registro (um pode estar no título e o outro lá no final das referências, sem conexão real de sentido). Os operadores de proximidade (ex: NEAR/3) exigem contiguidade ou proximidade de palavras, garantindo que os conceitos estejam intimamente associados e reduzindo o ruído.",
    reference: "Rowley (2002) / Lancaster (2004)"
  }
];
