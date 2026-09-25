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
      A: "Provedor de Serviços (Service Provider), pois colhe (harvesting) periodicamente metadados dos repositórios de diversas universidades e oferece interface de busca e serviços integrados ao usuário final.",
      B: "Provedor de Dados (Data Provider), pois custodia em seus servidores centrais os arquivos originais em formato PDF de todas as defesas de pós-graduação realizadas em território nacional.",
      C: "Servidor Proxy de Autenticação Federada, cuja atribuição exclusiva é validar as credenciais acadêmicas de pesquisadores para autorizar o download de itens sob embargo comercial.",
      D: "Repositório Institucional Primário, responsável por emitir compulsoriamente os registros de catalogação na publicação (CIP) e atribuir códigos de barras digitais a cada dissertação.",
      E: "Base de Dados Relacional Fechada, estruturada em esquemas proprietários que prescindem da interoperabilidade com padrões abertos como o Dublin Core e o protocolo Z39.50."
    },
    correctAnswer: "A",
    justification: "A BDTD nacional atua como Provedor de Serviços (Service Provider). Ela não armazena os arquivos integrais de todas as universidades diretamente em primeira instância; ela colhe periodicamente os metadados expostos pelos Provedores de Dados (os repositórios de cada universidade via OAI-PMH) e disponibiliza uma interface única de busca e recuperação.",
    reference: "Rosetto (2008) / IBICT / Padrão OAI-PMH"
  },
  {
    id: "mq_m01_2",
    moduleId: "m01",
    text: "Os Princípios FAIR, estabelecidos por Wilkinson et al. (2016), tornaram-se a diretriz mundial para a gestão e curadoria de dados de pesquisa. A atribuição de um identificador persistente e único globalmente (como um DOI ou Handle) e a indexação sistemática por metadados ricos atendem prioritariamente ao princípio de:",
    options: {
      A: "Acessibilidade irrestrita (Accessibility), exigindo que os arquivos brutos sejam descarregados instantaneamente sem protocolos de autorização.",
      B: "Encontrabilidade / Localizabilidade (Findability), assegurando que tanto humanos quanto sistemas automatizados identifiquem e localizem o conjunto de dados.",
      C: "Interoperabilidade computacional (Interoperability), garantindo a conversão sintática automática entre diferentes formatos e ontologias de domínio.",
      D: "Reusabilidade condicionada (Reusability), estabelecendo termos contratuais e licenças patrimoniais restritas para transferência de propriedade tecnológica.",
      E: "Reprodutibilidade experimental (Reproducibility), atestando a exatidão empírica dos instrumentos laboratoriais utilizados no experimento científico."
    },
    correctAnswer: "B",
    justification: "O primeiro princípio FAIR é o 'F' de Findable (Encontrável): os dados e metadados devem ser fáceis de encontrar por humanos e computadores. Isso exige compulsoriamente identificadores persistentes e unívocos globais (ex: DOI, Handle) e metadados ricos indexados em sistemas de busca.",
    reference: "Wilkinson et al. (2016) - 'The FAIR Guiding Principles for scientific data management and stewardship'"
  },
  {
    id: "mq_m01_3",
    moduleId: "m01",
    text: "Um Plano de Gestão de Dados (PGD / Data Management Plan) é um documento formal cada vez mais exigido por agências de fomento à pesquisa (como FAPESP e CNPq). No ciclo de vida dos dados científicos, o objetivo precípuo do PGD é:",
    options: {
      A: "Garantir o sigilo perpétuo e a restrição definitiva de acesso a todas as investigações científicas financiadas com dotações orçamentárias públicas.",
      B: "Substituir integralmente a tramitação ética em pesquisas com seres humanos, isentando a equipe de submeter o projeto ao comitê de ética correspondente.",
      C: "Documentar, desde a concepção da pesquisa, como os dados serão coletados, organizados, documentados, armazenados, protegidos e compartilhados a longo prazo.",
      D: "Comprovar a liquidação financeira prévia e a aquisição de licenças proprietárias de softwares comerciais para tratamento estatístico e análise quantitativa.",
      E: "Definir tabelas de preços e tarifação compensatória para cobrança obrigatória de taxas de download direcionadas a outros pesquisadores acadêmicos."
    },
    correctAnswer: "C",
    justification: "O PGD é o planejamento prévio e dinâmico que descreve todo o ciclo de vida dos dados de pesquisa: métodos de coleta, formatos de arquivo (preferencialmente abertos), metadados de documentação, políticas de custódia, preservação a longo prazo e termos de compartilhamento sob princípios de Ciência Aberta.",
    reference: "Sayão e Sales (2014) - Curadoria Digital e PGDs"
  },
  {
    id: "mq_m01_4",
    moduleId: "m01",
    text: "No software DSpace, a mais consagrada plataforma de código aberto para repositórios institucionais no mundo, a estrutura organizacional hierárquica fundamental que organiza os conteúdos obedece à seguinte sequência (do nível mais abrangente para o item específico):",
    options: {
      A: "Coleções bibliográficas ➔ Comunidades acadêmicas ➔ Esquemas de metadados ➔ Registros de autoridades ➔ Fluxos de bits primários.",
      B: "Repositório central ➔ Pastas virtuais de rede ➔ Registros no padrão MARC 21 ➔ Arquivos de índices remissivos ➔ Ficheiros anexos.",
      C: "Fluxos de bits (Bitstreams) ➔ Registros de metadados ➔ Coleções temáticas ➔ Subcomunidades departamentais ➔ Comunidades gerais.",
      D: "Comunidades (Communities) ➔ Subcomunidades ➔ Coleções (Collections) ➔ Itens (Items) com seus respectivos Bitstreams (arquivos anexos).",
      E: "Unidades gestoras ➔ Grupos certificados de pesquisa ➔ Linhas temáticas ➔ Volumes encadernados ➔ Tabelas estatísticas relacionais."
    },
    correctAnswer: "D",
    justification: "A arquitetura clássica do DSpace estrutura-se em: Comunidades (ex: Faculdades ou Institutos) ➔ Subcomunidades (ex: Departamentos ou Programas de Pós-graduação) ➔ Coleções (ex: Teses, Artigos, Livros) ➔ Itens (registro bibliográfico com metadados Dublin Core) ➔ Bitstreams (os arquivos físicos, como PDFs, planilhas e imagens anexas).",
    reference: "DSpace Architecture Documentation / DSpace 7"
  },
  {
    id: "mq_m01_5",
    moduleId: "m01",
    text: "No modelo de Curadoria Digital de Dados de Pesquisa preconizado pelo Digital Curation Centre (DCC), a ação contínua de assegurar que os dados digitais permaneçam compreensíveis, autênticos e reutilizáveis ao longo do tempo mediante transformações tecnológicas denomina-se:",
    options: {
      A: "Expurgo documental sumário e descarte físico programado.",
      B: "Indexação por extração semântica em bases referenciais fechadas.",
      C: "Backup frio em fitas magnéticas offline sem verificação de integridade.",
      D: "Comutação bibliográfica internacional automatizada via rede postal.",
      E: "Ação de preservação digital sequencial e curadoria ativa de ciclo de vida."
    },
    correctAnswer: "E",
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
      A: "Elaboração de políticas institucionais e adoção de esquemas de metadados; e migração de formatos ou emulação de softwares legados.",
      B: "Reparo mecânico de rasgos no suporte celulósico com papel japonês; e encadernação artística em couro legítimo vegetal.",
      C: "Armazenamento provisório em unidades flash USB sem redundância; e instalação de sistemas de climatização nas salas de leitura.",
      D: "Digitalização óptica de negativos fotográficos em tons de cinza; e aplicação de defensivos químicos voláteis nas estantes.",
      E: "Contratação de apólices de seguro contra sinistros prediais; e terceirização integral dos serviços de balcão de referência."
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
      A: "DIP (Dissemination Information Package), AIP (Archival Information Package) e SIP (Submission Information Package).",
      B: "SIP (Submission Information Package), AIP (Archival Information Package) e DIP (Dissemination Information Package).",
      C: "AIP (Archival Information Package), SIP (Submission Information Package) e DIP (Dissemination Information Package).",
      D: "SIP (Submission Information Package), DIP (Dissemination Information Package) e AIP (Archival Information Package).",
      E: "AIC (Archival Information Collection), AIU (Archival Information Unit) e DIP (Dissemination Information Package)."
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
      A: "Temperatura oscilando entre 28ºC e 35ºC com taxa de umidade relativa permanentemente superior a 80%.",
      B: "Temperatura fixa de 25ºC e índice de umidade relativa com variações bruscas diárias entre 20% e 90%.",
      C: "Temperatura estabilizada entre 18ºC e 22ºC e umidade relativa rigorosamente controlada entre 45% e 55%.",
      D: "Temperatura criogênica abaixo de 0ºC em ambiente com saturação zero e ausência total de circulação de ar.",
      E: "Temperatura ambiente sem climatização com incidência perpendicular direta de radiação solar nas estantes."
    },
    correctAnswer: "C",
    justification: "A literatura de conservação preventiva (Cassares, Spinelli, IFLA) preconiza que a temperatura de guarda de papel deve situar-se entre 18ºC e 22ºC, com umidade relativa estabilizada entre 45% e 55%. Umidade acima de 65% ativa o desenvolvimento de fungos e insetos xilófagos; ar seco demais (<40%) torna as fibras do papel quebradiças.",
    reference: "Cassares (2000) - 'Como fazer conservação preventiva em arquivos e bibliotecas'"
  },
  {
    id: "mq_m02_4",
    moduleId: "m02",
    text: "O padrão internacional de metadados PREMIS (Preservation Metadata: Implementation Strategies) foi desenvolvido para apoiar a preservação digital a longo prazo. O modelo de dados do PREMIS é estruturado em cinco entidades fundamentais:",
    options: {
      A: "Obra, Expressão, Manifestação, Item físico e Ponto de acesso controlado do catálogo.",
      B: "Líder de registro, Diretório de campos, Indicadores de posição, Subcampos alfanuméricos e Campos fixos.",
      C: "Título principal, Autoria intelectual, Imprenta comercial, Colação física e Notas de conteúdo analítico.",
      D: "Entidades Intelectuais (Intellectual Entities), Objetos (Objects), Eventos (Events), Direitos (Rights) e Agentes (Agents).",
      E: "Documento primário, Documento secundário, Documento terciário, Literatura cinzenta e Obras em domínio público."
    },
    correctAnswer: "D",
    justification: "O modelo de dados conceitual do PREMIS organiza-se nas 5 entidades basilares: Entidade Intelectual (a obra ou conteúdo discreto), Objeto (a representação física, arquivo ou fluxo de bits), Evento (ações executadas sobre o objeto, como migração ou validação de checksum), Direitos (permissões legais de preservação) e Agentes (pessoas, softwares ou instituições executoras).",
    reference: "PREMIS Data Dictionary for Preservation Metadata (Library of Congress)"
  },
  {
    id: "mq_m02_5",
    moduleId: "m02",
    text: "Dentre as estratégias técnicas operacionais de preservação digital de longo prazo, a 'Emulação' distingue-se da 'Migração de Formato' pelo fato de que a Emulação:",
    options: {
      A: "Converte os binários originais em microfichas analógicas de halogeneto de prata para guarda em cofre à prova de fogo.",
      B: "Altera a codificação interna dos dados para formatos abertos como PDF/A, descartando os arquivos na versão original de software.",
      C: "Transfere os fluxos de bits exclusivamente entre suportes de mesma geração tecnológica sem reconfigurar o sistema de arquivos.",
      D: "Elimina compulsoriamente os direitos morais de autor mediante licenças compulsórias para permitir a reprogramação do binário.",
      E: "Cria um ambiente de software capaz de simular o hardware e o sistema operacional legados, executando o arquivo em sua integridade nativa."
    },
    correctAnswer: "E",
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
      A: "O autoarquivamento, pelo próprio pesquisador, de versões de seu manuscrito (preprints ou pós-prints) em um repositório digital de acesso aberto.",
      B: "A publicação exclusiva em revistas científicas comerciais de alto fator de impacto que exigem o pagamento de taxas de processamento de artigos.",
      C: "A venda de tiragens impressas de relatórios técnicos em livrarias universitárias mediante celebração de contratos de distribuição comercial.",
      D: "A contratação corporativa de grandes pacotes fechados de periódicos (Big Deals) com restrição de acesso por faixa de endereço IP do campus.",
      E: "A cessão total, irrevogável e definitiva de todos os direitos patrimoniais do autor para as editoras multinacionais de circulação fechada."
    },
    correctAnswer: "A",
    justification: "A Via Verde (Green Open Access) é a via do autoarquivamento: o autor deposita uma cópia do seu manuscrito (versão aceita ou prévia) no repositório institucional de sua universidade ou em um repositório temático, permitindo o acesso público gratuito sem necessidade de pagamento de taxas de publicação.",
    reference: "Budapest Open Access Initiative (BOAI, 2002) / Suber (2012)"
  },
  {
    id: "mq_m03_2",
    moduleId: "m03",
    text: "No contexto da transição para a Ciência Aberta, a modalidade de Acesso Aberto conhecida como 'Via Diamante' (Diamond / Platinum Open Access) diferencia-se da 'Via Dourada Comercial' porque na Via Diamante:",
    options: {
      A: "O acesso aos artigos é restrito exclusivamente a pesquisadores bolsistas vinculados a sociedades científicas internacionais reconhecidas.",
      B: "Nem os leitores pagam taxa de assinatura nem os autores arcam com custos de publicação (sem APCs), sendo a revista financiada por instituições públicas.",
      C: "Os conteúdos submetidos devem ser mantidos sob sigilo comercial e protegidos por patentes industriais antes de qualquer avaliação de mérito.",
      D: "A etapa de revisão por pares é integralmente dispensada para acelerar a indexação imediata nas plataformas automatizadas de busca.",
      E: "A editora estabelece um período mandatório de embargo de cinco anos antes de autorizar o download gratuito do artigo em formato PDF."
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
      A: "Depósito legal eletrônico obrigatório em bibliotecas depositárias nacionais.",
      B: "Curadoria ativa de dados experimentais em ambientes computacionais abertos.",
      C: "Double Dipping (Duplo Pagamento / Dupla Cobrança), auferindo lucro duplo sobre o mesmo objeto.",
      D: "Indexação por atribuição temática em esquemas de vocabulários controlados.",
      E: "Avaliação aberta por pares com publicação transparente dos pareceres técnicos emitidos."
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
      A: "CC BY-NC, que autoriza a reutilização e criação de obras derivadas exclusivamente para finalidades educacionais sem fins comerciais.",
      B: "CC BY-NC-ND, que veda qualquer alteração ou obra derivada e restringe a circulação do arquivo intacto a fins não comerciais.",
      C: "CC0 (Domínio Público), que implica a renúncia total aos direitos patrimoniais e morais em escala internacional sem necessidade de citação.",
      D: "CC BY (Atribuição), que confere ampla liberdade de distribuição, remixagem e exploração comercial, exigindo apenas o crédito de autoria.",
      E: "CC BY-SA (CompartilhaIgual), que impõe a obrigatoriedade de licenciar obras derivadas sob os mesmos termos da licença original."
    },
    correctAnswer: "D",
    justification: "A licença CC BY é a licença padrão recomendada para a Ciência Aberta plena (adotada pelo SciELO e pela BOAI): ela confere a máxima liberdade de circulação e reuso, exigindo apenas a atribuição da autoria original.",
    reference: "Creative Commons Legal Framework / SciELO Guidelines"
  },
  {
    id: "mq_m03_5",
    moduleId: "m03",
    text: "A Ciência Aberta (Open Science) é um conceito guarda-chuva que ultrapassa a mera abertura de artigos. Qual das seguintes alternativas apresenta elementos integrantes genuínos do ecossistema da Ciência Aberta?",
    options: {
      A: "Exigência de patenteamento de todos os achados científicos preliminares antes de qualquer divulgação à comunidade acadêmica.",
      B: "Encerramento gradual de repositórios institucionais abertos para restringir os arquivos a docentes titulares com vínculo ativo.",
      C: "Adoção de assinaturas financeiras diferenciadas baseadas no produto interno bruto per capita de cada país interessado na leitura.",
      D: "Destruição programada de dados brutos e cadernos de bancada após a aceitação do manuscrito para preservar a privacidade do laboratório.",
      E: "Dados Abertos (Open Data), Cadernos Abertos de Laboratório, Avaliação Aberta por Pares e Recursos Educacionais Abertos (REA)."
    },
    correctAnswer: "E",
    justification: "A Ciência Aberta engloba diversas práticas integradas: Acesso Aberto às publicações, Dados Abertos de pesquisa, Código/Software Aberto, Cadernos de Laboratório Abertos, Revisão Aberta por Pares, Recursos Educacionais Abertos e Ciência Cidadã.",
    reference: "UNESCO Recommendation on Open Science (2021)"
  },

  // ==========================================
  // MÓDULO 04: Inteligência Artificial na Biblioteconomia
  // ==========================================
  {
    id: "mq_m04_1",
    moduleId: "m04",
    text: "A aplicação de Grandes Modelos de Linguagem (LLMs) e Inteligência Artificial Generativa em serviços de informação tem despertado grande debate técnico. Quando um modelo de IA gera referências bibliográficas estruturalmente plausíveis, mas que não existem na realidade física ou nas bases indexadoras, ocorre o fenômeno denominado tecnicamente de:",
    options: {
      A: "Alucinação (Hallucination) / Confabulação sintática de saída estatística.",
      B: "Indexação exaustiva com sobrecarga deliberada de descritores autorizados.",
      C: "Revocação de cem por cento decorrente da convergência exata de termos de busca.",
      D: "Ruído documental intencional planejado em testes de avaliação de desempenho de recuperação.",
      E: "Desbastamento algorítmico automatizado em bases bibliográficas antigas."
    },
    correctAnswer: "A",
    justification: "Na terminologia da IA e Processamento de Linguagem Natural, 'alucinação' (hallucination) ocorre quando o modelo estatístico prevê sequências de palavras altamente prováveis e bem estruturadas sintaticamente, mas que são factualmente incorretas ou inventadas (como criar autores, títulos de periódicos e DOIs inexistentes).",
    reference: "Ji et al. (2023) - 'Survey of Hallucination in Natural Language Generation'"
  },
  {
    id: "mq_m04_2",
    moduleId: "m04",
    text: "Nos modernos sistemas de Recuperação da Informação potencializados por Inteligência Artificial, a 'Busca Semântica' difere da tradicional busca booleana por palavras-chave (keyword-based) porque:",
    options: {
      A: "Impõe a formulação obrigatória de comandos em linguagem SQL avançada por parte do usuário final no terminal.",
      B: "Recupera itens a partir do significado conceitual e vetores de termos (embeddings), achando dados sem correspondência léxica exata.",
      C: "Veda taxativamente a aplicação de operadores booleanos ou filtros facetados em toda a arquitetura de consulta.",
      D: "Processa exclusivamente variáveis numéricas em bancos relacionais e planilhas contábeis financeiras estruturadas.",
      E: "Substitui os campos bibliográficos convencionais por miniaturas gráficas comprimidas geradas por redes neurais generativas."
    },
    correctAnswer: "B",
    justification: "A busca semântica transforma palavras e frases em representações matemáticas densas (vetores/embeddings): ela mede a proximidade contextual entre os conceitos na base de dados, permitindo recuperar documentos de alto valor temático mesmo quando o usuário utiliza sinônimos ou termos afins não previstos na query literal.",
    reference: "Manning, Raghavan & Schütze (2008) / Jurafsky & Martin (2023)"
  },
  {
    id: "mq_m04_3",
    moduleId: "m04",
    text: "Na automação do processamento técnico de unidades de informação, a IA tem sido aplicada em tarefas de 'Extração Automática de Metadados'. Uma aplicação legítima e ética dessa tecnologia na catalogação de teses e artigos consiste em:",
    options: {
      A: "Substituir a validação intelectual humana, delegando integralmente as decisões de autoridade aos modelos neurais.",
      B: "Alterar arbitrariamente nomes de autores de outras nacionalidades para adequá-los aos cânones bibliográficos ocidentais.",
      C: "Apoiar a identificação de entidades, sugerir cabeçalhos temáticos de tesauros e gerar resumos preliminares com validação humana.",
      D: "Eliminar registros bibliográficos antigos do catálogo para desocupar espaço de processamento no banco de dados principal.",
      E: "Dispensar a aplicação das regras do MARC 21 e dos padrões internacionais de catalogação descritiva para simplificar os registros."
    },
    correctAnswer: "C",
    justification: "A literatura contemporânea preconiza o modelo 'Human-in-the-loop' (humano no controle): a IA acelera o processamento executando tarefas repetitivas de extração preliminar e sugestão de termos controlados, cabendo ao bibliotecário catalogador validar criticamente, refinar e garantir a fidedignidade dos metadados.",
    reference: "IFLA Statement on Libraries and Artificial Intelligence (2020)"
  },
  {
    id: "mq_m04_4",
    moduleId: "m04",
    text: "O 'Viés Algorítmico' (Algorithmic Bias) representa um dos maiores desafios éticos na implementação de algoritmos de recomendação e busca em acervos de bibliotecas. Esse viés se manifesta quando:",
    options: {
      A: "O servidor de rede da biblioteca perde a conectividade com os cabos de fibra óptica do campus durante a madrugada.",
      B: "A biblioteca substitui sistemas legados por plataformas de código aberto sob licença GNU General Public License.",
      C: "Os formulários eletrônicos do catálogo online exigem a digitação padronizada de diacríticos e acentuações da língua culta.",
      D: "Os dados de treino contêm preconceitos e assimetrias sociais históricas, fazendo a IA replicar e potencializar tais distorções.",
      E: "O sistema de gerenciamento de acervos adota templates responsivos para navegação em dispositivos móveis e tablets."
    },
    correctAnswer: "D",
    justification: "Modelos de IA aprendem com os dados do passado: se as bases de dados e a literatura histórica contêm vieses (como a invisibilização sistemática de autoras mulheres ou minorias), o algoritmo assimilará esses padrões como regra, perpetuando o preconceito e a exclusão nos resultados de busca.",
    reference: "Noble (2018) - 'Algorithms of Oppression: How Search Engines Reinforce Racism'"
  },
  {
    id: "mq_m04_5",
    moduleId: "m04",
    text: "No contexto da Competência Informacional contemporânea, o 'Letramento em Inteligência Artificial' (AI Literacy) capacita os usuários das bibliotecas universitárias primordialmente a:",
    options: {
      A: "Desenvolver novos microprocessadores e circuitos eletrônicos integrados em linguagem de montagem de baixo nível.",
      B: "Transferir a produção intelectual de dissertações e artigos a robôs conversacionais para abreviar a titulação acadêmica.",
      C: "Dispensar a conferência em fontes primárias revisadas por pares ao confiar cegamente nas sínteses automatizadas.",
      D: "Empregar plugins não autorizados para burla de autenticação em portais de periódicos científicos com assinaturas comerciais.",
      E: "Compreender limites da IA, estruturar prompts críticos, avaliar alucinações e aplicar ferramentas com integridade e ética."
    },
    correctAnswer: "E",
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
      A: "Diálogos de laboratório, correios eletrônicos entre pares, reuniões de grupos e circulação de manuscritos em colégios invisíveis.",
      B: "Artigos originais revisados por pares em periódicos indexados na Scopus e cartas-patentes homologadas pelo INPI.",
      C: "Monografias acadêmicas publicadas por imprensas universitárias e memórias publicadas em anais de congressos com ISBN.",
      D: "Teses e dissertações aprovadas depositadas na BDTD e relatórios de pesquisa arquivados no repositório institucional.",
      E: "Normas técnicas internacionais aprovadas pelo plenário da ISO e formulários de patentes de invenção industrial."
    },
    correctAnswer: "A",
    justification: "Canais informais caracterizam-se pela comunicação direta, rápida, não filtrada publicamente e restrita a redes interpessoais (trocas de cartas, e-mails, conversas de laboratório). Os canais formais envolvem o registro público permanente, revisão por pares e ampla circulação social (periódicos, livros, patentes).",
    reference: "Garvey & Griffith (1972) / Meadows (1999)"
  },
  {
    id: "mq_m05_2",
    moduleId: "m05",
    text: "Segundo a abordagem sistêmica de Yves-François Le Coadic (1996), a Ciência da Informação estuda a informação sob o prisma do seu ciclo vital. As três funções elementares que integram o ciclo de fluxo da informação são:",
    options: {
      A: "Aquisição documental por compra institucional, tombamento patrimonial em livro de registro e desbastamento físico por descarte.",
      B: "Construção (produção / gênese), Comunicação (circulação / transferência) e Uso (consumo / assimilação) da informação.",
      C: "Catalogação descritiva de itens, classificação temática decimal e indexação por cabeçalhos de assunto em linguagens controladas.",
      D: "Captura óptica por digitalização, compressão de imagens em formato TIFF e transferência por upload a repositórios em nuvem.",
      E: "Comercialização livreira em rede de varejo, tributação alfandegária de importação e apuração de lucro líquido contábil."
    },
    correctAnswer: "B",
    justification: "Para Le Coadic (1996, 'A Ciência da Informação'), a informação científica cumpre um ciclo tripartite constante: a fase de construção (pesquisa/produção), a fase de comunicação (registro, processamento, disseminação e transferência) e a fase de uso (leitura, assimilação e aplicação pelo usuário final).",
    reference: "Le Coadic (1996) - 'A Ciência da Informação'"
  },
  {
    id: "mq_m05_3",
    moduleId: "m05",
    text: "O conceito de 'Colégios Invisíveis' (Invisible Colleges), formulado originalmente por Robert Boyle no século XVII e consagrado na Ciência da Informação por Derek de Solla Price (1963), designa:",
    options: {
      A: "Instalações de ensino superior clandestinas que operam sem o devido credenciamento emitido pelo Ministério da Educação.",
      B: "Bibliotecas comunitárias que exercem atividades sem contar com um profissional bibliotecário com registro regular no CRB.",
      C: "Redes informais e estruturadas de colaboração científica entre pesquisadores de ponta que trocam ideias antes da publicação formal.",
      D: "Editoras universitárias que comercializam livros didáticos impressos sem a ficha de catalogação na publicação oficial.",
      E: "Servidores institucionais de armazenamento em rede que operam sem suporte técnico ao protocolo aberto OAI-PMH."
    },
    correctAnswer: "C",
    justification: "Colégios invisíveis são redes informais de comunicação e cooperação entre pesquisadores que lideram determinada área de pesquisa no mundo: eles trocam preprints, dados e percepções críticas rapidamente entre si muito antes de o artigo passar pelo moroso processo de publicação em periódicos impressos.",
    reference: "Price (1963) - 'Little Science, Big Science'"
  },
  {
    id: "mq_m05_4",
    moduleId: "m05",
    text: "Para o eminente teórico brasileiro Aldo Barreto, a informação atua como uma 'estrutura significante'. Em suas formulações conceituais, a transferência de informação só se completa efetivamente quando:",
    options: {
      A: "O arquivo digital em formato PDF é transferido com integridade de bits para a unidade de armazenamento do leitor.",
      B: "O exemplar bibliográfico é devolvido rigorosamente dentro do prazo estipulado no balcão de empréstimo da biblioteca.",
      C: "A ficha catalográfica com os códigos de assunto e classificação decimal é impressa no verso da folha de rosto da publicação.",
      D: "A mensagem emitida é percebida e assimilada pelo receptor, gerando transformação no seu estado de conhecimento prévio.",
      E: "O servidor de correio institucional expede uma notificação automatizada acusando o recebimento da solicitação de busca."
    },
    correctAnswer: "D",
    justification: "Aldo Barreto enfatiza a dimensão cognitiva da informação: a simples transmissão física de sinais ou dados não configura transferência da informação. A informação só se concretiza plenamente quando gera significado, sendo assimilada pela consciência do receptor e transformando seu estoque de conhecimento (conhecimento gerando conhecimento).",
    reference: "Barreto (1998) - 'Mudança estrutural no fluxo da informação'"
  },
  {
    id: "mq_m05_5",
    moduleId: "m05",
    text: "No estudo dos fluxos de transferência da informação científica, as 'Barreiras à Comunicação' impedem ou retardam o acesso ao conhecimento. A existência de barreiras econômicas causadas por muros de pagamento (paywalls) e cobrança de assinaturas restringe a circulação do saber, caracterizando uma barreira:",
    options: {
      A: "Barreira linguística e idiomática derivada da hegemonia da língua inglesa nas bases de dados indexadoras internacionais.",
      B: "Barreira fisiológica e perceptiva associada a limitações sensoriais e neurocognitivas dos pesquisadores consulentes.",
      C: "Barreira terminológica e conceitual gerada pela polissemia e imprecisão vocabular de descritores de assunto não controlados.",
      D: "Barreira ideológica e política decorrente de regimes de censura e controle de circulação de ideias por governos totalitários.",
      E: "Barreira financeira / econômica de acesso, condicionando o direito ao saber à capacidade orçamentária do usuário ou da instituição."
    },
    correctAnswer: "E",
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
      A: "1 : n : n² : n³... (crescimento geométrico do número de títulos para obter o mesmo rendimento de artigos).",
      B: "1 : 1 : 1 : 1... (distribuição perfeitamente equilibrada e uniforme de periódicos em todas as zonas do conhecimento).",
      C: "1 : 2 : 3 : 4... (progressão aritmética simples na razão de um periódico a mais a cada zona delimitada).",
      D: "n : n/2 : n/4 : n/8... (decaimento exponencial na quantidade de revistas necessárias para cobrir o campo temático).",
      E: "log(n) : exp(n)... (relação logarítmica pura independente do volume de artigos acumulados nas diferentes classes)."
    },
    correctAnswer: "A",
    justification: "A formulação matemática de Bradford demonstra que para obter o mesmo número de artigos sobre um assunto em zonas sucessivas, o número de periódicos necessários aumenta geometricamente na proporção 1 : n : n² (onde 'n' é o multiplicador de Bradford).",
    reference: "Bradford (1934) - 'Sources of information on specific subjects' / Vanti (2002)"
  },
  {
    id: "mq_m06_2",
    moduleId: "m06",
    text: "A Lei de Lotka (1926), ou Lei do Quadrado Inverso da Produtividade Científica, estuda a distribuição de autores por volume de artigos publicados. Essa lei empírica demonstra que:",
    options: {
      A: "Todos os autores acadêmicos publicam exatamente a mesma quantidade de artigos ao longo de suas trajetórias institucionais.",
      B: "O número de autores que produzem n artigos decai como 1/n², concentrando a maioria da produção em um núcleo restrito de autores.",
      C: "Quanto maior for a titulação formal do pesquisador, menor será sua produção bibliográfica em periódicos internacionais indexados.",
      D: "Artigos elaborados em coautoria múltipla recebem rigorosamente o dobro de citações em comparação a publicações de autoria única.",
      E: "O montante total da literatura científica mundial dobra de volume a cada dois anos de forma homogênea em todas as disciplinas."
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
      A: "Uma grandeza nula, indicando que os vocábulos perdem o valor semântico quando mensurados em modelos estatísticos.",
      B: "Um valor exponencialmente oscilatório, que se eleva de acordo com o total de referências bibliográficas do documento.",
      C: "Uma constante aproximada (r × f ≈ C), revelando que raras palavras hiperfrequentes compõem a maior fatia do texto.",
      D: "O dobro exato da extensão total do livro expressa em número de caracteres gráficos codificados no arquivo digital.",
      E: "Uma taxa inversamente proporcional à raiz cúbica do total de descritores autorizados no vocabulário controlado do catálogo."
    },
    correctAnswer: "C",
    justification: "A primeira Lei de Zipf afirma que o produto do posto (r) de uma palavra por sua frequência de ocorrência (f) é aproximadamente constante (r × f ≈ C). Poucas palavras muito frequentes (como artigos e preposições - stopwords) concentram a maior parte do texto, enquanto a imensa maioria dos termos tem frequência muito baixa.",
    reference: "Zipf (1949) - 'Human Behavior and the Principle of Least Effort'"
  },
  {
    id: "mq_m06_4",
    moduleId: "m06",
    text: "No Journal Citation Reports (JCR / Clarivate), o Fator de Impacto (Journal Impact Factor - JIF) de um periódico em um determinado ano (por exemplo, 2026) é calculado classicamente pela seguinte razão:",
    options: {
      A: "Total de artigos originais publicados em 2026 dividido pelo quantitativo de leitores cadastrados no portal eletrônico da revista.",
      B: "Média aritmética das notas quantitativas concedidas pelos pareceristas ad hoc nas avaliações por pares duplo-cegas do exercício.",
      C: "Soma das citações obtidas em 2026 pelos artigos de 2024 e 2025, multiplicada pelo valor monetário da taxa de publicação (APC).",
      D: "Citações recebidas em 2026 por artigos de 2024 e 2025, divididas pelo total de itens citáveis publicados pela revista nesse biênio.",
      E: "Número total de visualizações de página na internet apuradas no último quadrimestre do ano fiscal anterior pelo servidor institucional."
    },
    correctAnswer: "D",
    justification: "A fórmula clássica do Fator de Impacto de Garfield (JCR) para o ano N mede a média de citações por artigo nos dois anos precedentes: Citações em N a artigos de (N-1 e N-2) / Artigos citáveis publicados em (N-1 e N-2).",
    reference: "Garfield (1972) - 'Citation analysis as a tool in journal evaluation'"
  },
  {
    id: "mq_m06_5",
    moduleId: "m06",
    text: "O Índice H (H-Index), formulado pelo físico Jorge Hirsch em 2005 para quantificar o rendimento e impacto acumulado de um pesquisador individual, define que um cientista possui índice h se:",
    options: {
      A: "Alcançou exatamente a marca de h livros impressos editados no idioma inglês por editoras estrangeiras com arbitragem por pares.",
      B: "Atua há h anos ininterruptos como docente com estabilidade funcional e regime de dedicação exclusiva em universidade pública.",
      C: "Orientou h teses de doutorado acadêmico defendidas e homologadas perante programas de pós-graduação nota 7 da CAPES.",
      D: "Captou h bolsas de produtividade em pesquisa do CNPq em editais universais de grande concorrência orçamentária nacional.",
      E: "Possui h publicações que receberam, individualmente, pelo menos h citações, enquanto seus demais trabalhos têm menos de h citações."
    },
    correctAnswer: "E",
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
      A: "Artigos originais em periódicos, teses e dissertações acadêmicas, relatórios técnicos de pesquisa e cartas-patentes de invenção.",
      B: "Dicionários biográficos, enciclopédias temáticas em múltiplos volumes e roteiros gerais de localização de acervos em bibliotecas.",
      C: "Bases de dados referenciais como Scopus e Web of Science que armazenam apenas índices de citação e resumos documentais analíticos.",
      D: "Bibliografias retrospectivas nacionais e catálogos automatizados em linha de acesso público a bibliotecas universitárias (OPACs).",
      E: "Artigos de revisão integrativa da literatura, tratados de síntese bibliográfica e periódicos especializados em resumos (Abstracts)."
    },
    correctAnswer: "A",
    justification: "Fontes primárias trazem conhecimento novo, inédito, em primeira mão, que não sofreu condensação, filtro ou reprocessamento prévio por terceiros: artigos de pesquisa empírica, relatórios técnicos, teses, dissertações, patentes e anais de eventos científicos.",
    reference: "Grogan (1995) / Cunha (2001) - 'Para saber mais: fontes de informação em ciência e tecnologia'"
  },
  {
    id: "mq_m07_2",
    moduleId: "m07",
    text: "Embora sejam publicados em revistas científicas de prestígio com revisão por pares, os 'Artigos de Revisão de Literatura' (Review Articles / Revisões Sistemáticas) são classificados na Ciência da Informação formalmente como:",
    options: {
      A: "Fontes Primárias, uma vez que contêm dados empíricos gerados em bancada laboratorial com delineamento amostral inédito.",
      B: "Fontes Secundárias, pois não relatam descoberta inédita, mas sintetizam, analisam e consolidam estudos primários anteriores.",
      C: "Fontes Terciárias, equivalendo estruturalmente a repertórios de almanaques populares e pequenos dicionários lexicais de bolso.",
      D: "Literatura Cinzenta não científica, em virtude de não adotarem os procedimentos formais de depósito legal e circulação livreira.",
      E: "Documentos de circulação efémera em domínio público compulsório, dispensados da concessão formal de crédito aos autores originais."
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
      A: "As bases referenciais operam sem campos de indexação temática, enquanto as de texto completo utilizam vocabulários multilíngues.",
      B: "As bases de texto completo não admitem operadores booleanos, enquanto as referenciais realizam exclusivamente busca por frase exata.",
      C: "As bases referenciais indexam metadados analíticos e citações sem o arquivo integral; as de texto completo fornecem o documento na íntegra.",
      D: "As bases referenciais arquivam livros de ficção, ao passo que as de texto completo restringem-se ao depósito de teses em microfilme.",
      E: "As bases de texto completo funcionam exclusivamente em redes intranet locais, enquanto as referenciais exigem pagamentos por consulta."
    },
    correctAnswer: "C",
    justification: "Bases referenciais são inventários de metadados analíticos e índices de citação: apontam para onde a literatura está. Já as bases de texto completo armazenam nos seus servidores e entregam o arquivo completo (PDF/HTML) do texto para consulta direta.",
    reference: "Lancaster (2004) / Rowley (2002)"
  },
  {
    id: "mq_m07_4",
    moduleId: "m07",
    text: "O termo 'Literatura Cinzenta' (Grey Literature) é empregado na biblioteconomia para designar documentos que:",
    options: {
      A: "Apresentam encadernações cinzentas padronizadas resultantes da deterioração natural dos pigmentos da capa por oxidação física.",
      B: "Estão submetidos a regimes de segredo de estado e censura inquisitorial que proíbem o acesso público sob qualquer hipótese.",
      C: "Constituem reproduções reprográficas não autorizadas que violam dispositivos da legislação de direitos patrimoniais do autor.",
      D: "São produzidos por governos, academia ou indústrias, mas circulam fora dos canais comerciais convencionais de distribuição livreira.",
      E: "Abordam estritamente o impacto de resíduos industriais e índices de contaminação atmosférica em centros metropolitanos."
    },
    correctAnswer: "D",
    justification: "O conceito de literatura cinzenta (conferência de Luxemburgo, 1997) abrange o material produzido por órgãos públicos, laboratórios, empresas e universidades cuja circulação é restrita ou não passa pelo canal convencional de comercialização livreira, exigindo estratégias de busca e coleta especializadas das bibliotecas.",
    reference: "Alberani (1990) / Farace & Schöpfel (2010)"
  },
  {
    id: "mq_m07_5",
    moduleId: "m07",
    text: "As Patentes constituem uma das mais ricas fontes de informação tecnológica e industrial do mundo. No Brasil, o órgão federal responsável pela concessão, registro e manutenção da base pública de dados de patentes é o:",
    options: {
      A: "IBICT (Instituto Brasileiro de Informação em Ciência e Tecnologia), responsável pelo depósito e preservação de teses e dissertações.",
      B: "MEC (Ministério da Educação), responsável pela avaliação periódica da pós-graduação e regulação das faculdades universitárias.",
      C: "CNPq (Conselho Nacional de Desenvolvimento Científico e Tecnológico), gestor dos auxílios à pesquisa e da Plataforma Lattes.",
      D: "SBU (Sistema de Bibliotecas da Unicamp), encarregado da gestão técnica dos acervos informacionais das unidades universitárias.",
      E: "INPI (Instituto Nacional da Propriedade Industrial), autarquia federal responsável pela execução das normas de propriedade industrial."
    },
    correctAnswer: "E",
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
      A: "OR (OU), promovendo a reunião lógica de termos alternativos e sinônimos no conjunto recuperado.",
      B: "AND (E), executando a interseção restritiva entre termos para delimitar e estreitar os resultados.",
      C: "NOT (NÃO), excluindo compulsoriamente os registros que apresentem determinada palavra-chave da seleção.",
      D: "XOR (OU exclusivo), recuperando apenas itens que contenham estritamente um termo com descarte do outro.",
      E: "NEAR (Perto de), impondo proximidade espacial física obrigatória entre as expressões no texto integral."
    },
    correctAnswer: "A",
    justification: "O operador OR efetua a união dos conjuntos: ele recupera documentos que apresentem o termo A, o termo B ou ambos. É a ferramenta indispensável para agrupar sinônimos e variantes linguísticas (ex: 'câncer OR neoplasia OR tumor'), ampliando a revocação da busca.",
    reference: "Lancaster (2004) - 'Indexação e Resumos' / Rowley (2002)"
  },
  {
    id: "mq_m08_2",
    moduleId: "m08",
    text: "Durante uma pesquisa em base de dados bibliográfica, o bibliotecário utiliza o recurso de 'Truncamento' (geralmente representado pelos caracteres *, ? ou $). A finalidade técnica desse recurso é:",
    options: {
      A: "Interromper a consulta após determinado intervalo em segundos para desocupar o buffer de memória do servidor web.",
      B: "Recuperar a raiz ou radical de uma palavra com todas as suas flexões morfológicas de sufixo, prefixo, gênero e número.",
      C: "Filtrar os resultados para retirar registros redigidos em línguas estrangeiras que não pertençam ao vernáculo oficial.",
      D: "Impedir a exibição de resumos que apresentem percentuais de similaridade identificados por ferramentas de plágio.",
      E: "Padronizar automaticamente os termos de busca em caracteres maiúsculos independentemente do teclado do usuário."
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
      A: "Total de volumes catalogados no acervo / Quantitativo de consulentes presenciais atendidos no trimestre.",
      B: "Largura de banda do link de internet da biblioteca / Latência média de resposta em milissegundos do servidor.",
      C: "Proporção de relevantes recuperados sobre o total de relevantes existentes; e de relevantes recuperados sobre o total recuperado.",
      D: "Percentual de incorreções gramaticais no resumo analítico / Quantidade bruta de termos autorizados pelo tesauro.",
      E: "Média de cliques efetuados pelo usuário no navegador / Volume de páginas impressas nos terminais públicos."
    },
    correctAnswer: "C",
    justification: "Revocação mede a capacidade de esgotar o acervo: (Relevantes Recuperados) / (Total de Relevantes no Sistema). Precisão mede a pureza do resultado: (Relevantes Recuperados) / (Total de Itens Trazidos pela Busca). São grandezas inversamente proporcionais.",
    reference: "Lancaster (1979, 2004) - 'Information Retrieval Systems'"
  },
  {
    id: "mq_m08_4",
    moduleId: "m08",
    text: "Em uma busca especializada conduzida em uma base de dados científica, ocorre o fenômeno do 'Silêncio Documental' (Drop-out) quando:",
    options: {
      A: "A consulta gera um volume excessivo de documentos totalmente irrelevantes que poluem o conjunto recuperado.",
      B: "O sistema operacional de rede sofre uma falha física de hardware desligando as estações públicas de consulta.",
      C: "A comissão gestora da biblioteca veda o empréstimo domiciliar de títulos de referência durante as férias escolares.",
      D: "A busca deixa de recuperar itens relevantes existentes na base devido a uma formulação excessivamente restritiva.",
      E: "O terminal de pesquisa entra em modo de economia de energia e desconecta a sessão por inatividade do usuário."
    },
    correctAnswer: "D",
    justification: "Silêncio Documental ocorre quando documentos relevantes existem na base, mas a estratégia de busca foi excessivamente restrita (ou usou termos rígidos/sinônimos não mapeados), fazendo com que a busca não recupere o que o usuário precisava (baixa revocação). Ruído é o oposto (muitos itens inúteis trazidos na busca).",
    reference: "Lancaster (2004) / Chaumier (1988)"
  },
  {
    id: "mq_m08_5",
    moduleId: "m08",
    text: "Os operadores de proximidade (como NEAR, WITH, ADJ ou SAME) são ferramentas avançadas de recuperação da informação. A função desses operadores em relação ao operador booleano AND tradicional é:",
    options: {
      A: "Alargar a pesquisa para recuperar documentos em qualquer formato sem conexão contextual entre os campos indexados.",
      B: "Tornar a estratégia de busca equivalente ao operador OR, recuperando termos dissociados distribuídos pelo texto.",
      C: "Ignorar os critérios gramaticais de ordem alfabética para acelerar a indexação preliminar no catálogo público.",
      D: "Substituir a necessidade de indexação descritiva por meio da leitura direta de metadados binários nos ficheiros.",
      E: "Exigir que os termos de busca ocorram contíguos ou em distância determinada no mesmo campo, elevando a precisão."
    },
    correctAnswer: "E",
    justification: "O operador AND apenas exige que ambos os termos estejam no mesmo registro (um pode estar no título e o outro lá no final das referências, sem conexão real de sentido). Os operadores de proximidade (ex: NEAR/3) exigem contiguidade ou proximidade de palavras, garantindo que os conceitos estejam intimamente associados e reduzindo o ruído.",
    reference: "Rowley (2002) / Lancaster (2004)"
  }
];
