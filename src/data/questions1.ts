export interface Question {
  id: string;
  moduleId: string;
  text: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
    E: string;
  };
  correctAnswer: 'A' | 'B' | 'C' | 'D' | 'E';
  justification: string;
}

export const q1_to_25: Question[] = [
  {
    id: "q01",
    moduleId: "m01",
    text: "Sobre as Bibliotecas Digitais e os Repositórios Institucionais, assinale a alternativa que descreve com rigor técnico a diferença primordial de missão e escopo entre eles:",
    options: {
      A: "A Biblioteca Digital foca na aquisição e disponibilização de coleções comerciais externas para sua comunidade, enquanto o Repositório Institucional foca na custódia, preservação e acesso aberto da produção científica e intelectual gerada pela própria instituição.",
      B: "A Biblioteca Digital tem por missão exclusiva o arquivamento de monografias e teses de pós-graduação locais, enquanto o Repositório Institucional adquire pacotes de e-books de editoras multinacionais mediante assinaturas periódicas e licenças de acesso.",
      C: "O Repositório Institucional opera obrigatoriamente sob o protocolo de busca federada Z39.50 para catálogos locais, enquanto a Biblioteca Digital depende unicamente do protocolo OAI-PMH para indexação de conteúdos restritos a redes acadêmicas internas.",
      D: "Ambos compartilham a mesma missão e arquitetura funcional de armazenamento, divergindo unicamente nos formatos dos dados, visto que repositórios institucionais não admitem objetos digitais multimídia ou conjuntos de dados brutos de pesquisa.",
      E: "As Bibliotecas Digitais vinculam-se unicamente ao movimento de Acesso Aberto (Open Access) global, ao passo que os Repositórios Institucionais cobram taxas de submissão e processamento de artigos (APCs) para custear os servidores de preservação."
    },
    correctAnswer: "A",
    justification: "Bibliotecas Digitais têm como foco central o consumo e a gestão de coleções externas (comerciais ou licenciadas) para atender seus usuários. Já os Repositórios Institucionais cumprem a função precípua de reunir, preservar e disseminar em acesso aberto a produção intelectual interna da universidade."
  },
  {
    id: "q02",
    moduleId: "m02",
    text: "No modelo conceitual de referência para preservação digital de longo prazo OAIS (Open Archival Information System - ISO 14721), o pacote de informação que é enriquecido com metadados estruturados de preservação (como o padrão PREMIS) e armazenado de forma protegida e definitiva no repositório digital, sem acesso público direto, denomina-se:",
    options: {
      A: "SIP (Submission Information Package), que consiste no pacote bruto entregue pelo produtor.",
      B: "AIP (Archival Information Package), que é o pacote arquivístico de preservação permanente.",
      C: "DIP (Dissemination Information Package), que é o pacote formatado para consulta e download.",
      D: "METS (Metadata Encoding and Transmission Standard), pacote exclusivo para troca de dados.",
      E: "OAI (Open Archive Information), que consiste no pacote reservado para harvesters externos."
    },
    correctAnswer: "B",
    justification: "O modelo OAIS define 3 pacotes principais: o SIP (entregue pelo autor/produtor), o AIP (pacote arquivístico completo, com metadados PREMIS para preservação a longo prazo no cofre do sistema) e o DIP (pacote derivado para disseminação e consumo público)."
  },
  {
    id: "q03",
    moduleId: "m03",
    text: "Um pesquisador da Unicamp publicou um artigo científico em um periódico internacional fechado (com acesso restrito por paywall). Em conformidade com a política institucional de acesso aberto da universidade, ele depositou a versão 'postprint' (revisada por pares) do mesmo artigo no Repositório Institucional. Esse procedimento de autoarquivamento caracteriza formalmente:",
    options: {
      A: "A Via Dourada (Gold Open Access), na qual o artigo é disponibilizado no repositório mediante pagamento de taxa APC.",
      B: "A Via Diamante (Diamond Open Access), em que o periódico comercial passa a ser integralmente financiado por fundações públicas.",
      C: "A Via Verde (Green Open Access), na qual o autor realiza o autoarquivamento de sua produção em um repositório institucional.",
      D: "A Via Bronze (Bronze Open Access), caracterizada pela liberação temporária e promocional de leitura no site da própria editora.",
      E: "A Via Híbrida (Hybrid Open Access), em que a editora exige que o repositório cobre mensalidades de acesso de usuários externos."
    },
    correctAnswer: "C",
    justification: "A Via Verde (Green Road) do Acesso Aberto é definida como a prática do autoarquivamento pelo próprio autor em repositórios digitais abertos (institucionais ou temáticos), respeitando eventuais períodos de embargo editorial."
  },
  {
    id: "q04",
    moduleId: "m04",
    text: "A incorporação de sistemas baseados em Modelos de Linguagem de Grande Escala (LLMs) e Inteligência Artificial generativa aos serviços de busca e referência de bibliotecas universitárias suscitou debates éticos e técnicos. Na terminologia da ciência da computação e da biblioteconomia, o fenômeno da 'Alucinação' (Hallucination) manifesta-se quando o sistema:",
    options: {
      A: "Reproduz sistematicamente preconceitos históricos, vieses de gênero e exclusões raciais contidos no corpus textual.",
      B: "Recusa-se a responder a consultas legítimas de usuários devido ao acionamento indevido de filtros de moderação.",
      C: "Exige tempos de processamento excessivamente longos para indexar acervos documentais em formato aberto PDF/A.",
      D: "Gera asserções factualmente falsas ou cita referências bibliográficas inexistentes com elevado grau de certeza aparente.",
      E: "Viola as salvaguardas da Lei Geral de Proteção de Dados (LGPD) ao expor termos de busca privados a outros consulentes."
    },
    correctAnswer: "D",
    justification: "A 'Alucinação' em IA ocorre quando o modelo probabilístico gera respostas sintaticamente perfeitas, mas contendo dados falsos ou invenção deliberada de títulos, autores e periódicos que nunca existiram. Reprodução de preconceitos históricos classifica-se como 'Viés Algorítmico'."
  },
  {
    id: "q05",
    moduleId: "m05",
    text: "O Instituto Brasileiro de Informação em Ciência e Tecnologia (IBICT) coordena diversas redes informacionais cooperativas estratégicas. O sistema nacional que atua especificamente como ferramenta cooperativa para a identificação, localização física e compartilhamento de títulos e fascículos de publicações seriadas existentes nas bibliotecas brasileiras é o:",
    options: {
      A: "SciELO (Scientific Electronic Library Online), focado no catálogo de periódicos indexados.",
      B: "Portal de Periódicos da CAPES, direcionado à assinatura centralizada de bases comerciais.",
      C: "BDTD (Biblioteca Digital Brasileira de Teses e Dissertações), agregador de teses nacionais.",
      D: "Currículo Lattes (CNPq), direcionado ao registro biográfico e da produção de pesquisadores.",
      E: "CCN (Catálogo Coletivo Nacional de Publicações Seriadas), voltado à localização de acervos."
    },
    correctAnswer: "E",
    justification: "O CCN (Catálogo Coletivo Nacional de Publicações Seriadas), mantido pelo IBICT, é a rede cooperativa que mapeia as coleções de revistas e periódicos científicos existentes em centenas de bibliotecas do Brasil, subsidiando o COMUT."
  },
  {
    id: "q06",
    moduleId: "m06",
    text: "No âmbito do Desenvolvimento de Coleções e das redes cooperativas, as bibliotecas universitárias modernas têm repensado suas políticas orçamentárias. A estratégia em que a biblioteca substitui a aquisição preventiva de livros pouco demandados pelo acesso sob demanda (por meio de comutação bibliográfica, empréstimo entre bibliotecas ou aquisição orientada pelo usuário) materializa a transição do modelo:",
    options: {
      A: "Just in case (acesso preventivo baseado na posse física) para o modelo Just in time (acesso ágil no exato momento da demanda).",
      B: "Just in time (aquisição em lote de obras raras) para o modelo Just in case (intercâmbio exclusivo de cópias reprográficas digitais).",
      C: "Open Access (acesso público irrestrito) para o modelo de Assinatura Fechada com controle biométrico de empréstimo local.",
      D: "Desbastamento compulsório anual para o modelo de Preservação Integral de todos os exemplares adquiridos no século passado.",
      E: "Depósito Legal obrigatório para o modelo de Cessão de Direitos Autorais patrimoniais de autores vinculados à instituição."
    },
    correctAnswer: "A",
    justification: "A transição do paradigma 'Just in case' (possuir na estante por precaução, sem saber se haverá uso) para o 'Just in time' (acessar cooperativamente ou adquirir pontualmente quando o usuário demandar) é um dos pilares da gestão contemporânea de acervos."
  },
  {
    id: "q07",
    moduleId: "m14",
    text: "Segundo a Declaração de Princípios Internacionais de Catalogação (ICP - IFLA 2016), inspirada no modelo conceitual IFLA LRM, o catálogo bibliográfico deve apoiar o usuário na execução de tarefas essenciais. A tarefa que representa a principal INOVAÇÃO conceitual do ICP e do LRM em relação aos antigos Princípios de Paris de 1961 é:",
    options: {
      A: "Encontrar (Find): localizar recursos bibliográficos que correspondam aos critérios de busca informados.",
      B: "Navegar (Navigate): explorar conexões e caminhos relacionais entre entidades, obras, autores e assuntos na teia de dados.",
      C: "Identificar (Identify): confirmar que a descrição do recurso corresponde à entidade procurada pelo usuário.",
      D: "Selecionar (Select): escolher um recurso que atenda aos requisitos específicos de conteúdo ou suporte físico.",
      E: "Obter (Obtain): adquirir ou obter acesso ao item mediante empréstimo físico, download ou licenciamento digital."
    },
    correctAnswer: "B",
    justification: "As tarefas de Encontrar, Identificar, Selecionar e Obter já vinham sendo consolidadas desde os Requisitos Funcionais (FRBR). A grande novidade do LRM e do ICP 2016 para a Web Semântica é a tarefa 'Navegar' (Navigate), que permite ao usuário explorar relacionamentos entre entidades."
  },
  {
    id: "q08",
    moduleId: "m15",
    text: "Em relação às regras de determinação de Ponto de Acesso Principal (Main Entry) preconizadas pelo Código de Catalogação Anglo-Americano (AACR2R, Regra 21.6C2), se uma obra monográfica impressa contiver na sua fonte principal de informação os nomes de QUATRO autores compartilhando a mesma responsabilidade intelectual, a entrada principal deverá ser formulada:",
    options: {
      A: "Pelo nome do primeiro autor mencionado na folha de rosto, elaborando-se entradas secundárias para os outros três.",
      B: "Pelo nome do coordenador ou organizador geral da edição, mesmo que a publicação não informe essa atribuição formal.",
      C: "Pelo Título próprio da obra, elaborando-se entrada secundária de autor apenas para o primeiro autor mencionado.",
      D: "Pelos quatro autores simultaneamente no cabeçalho principal, dividindo a responsabilidade em blocos de parágrafos.",
      E: "Pelo nome da instituição patrocinadora ou editora responsável pela publicação em nível de cabeçalho unificado."
    },
    correctAnswer: "C",
    justification: "A célebre 'Regra de Três' do AACR2 (21.6C2) estipula que, havendo mais de três autores sem predominância de responsabilidade, a entrada principal é feita obrigatoriamente pelo TÍTULO, gerando-se entrada secundária somente para o primeiro autor nomeado (seguido de et al.)."
  },
  {
    id: "q09",
    moduleId: "m15",
    text: "No processo de catalogação descritiva de um livro segundo o AACR2R (Capítulo 2), os dados devem ser extraídos preferencialmente da Fonte Principal de Informação (FPI). Assinale a alternativa que indica a FPI prioritária para monografias impressas:",
    options: {
      A: "A Capa (frente do livro), complementada pela lombada do exemplar.",
      B: "O Verso da folha de rosto, onde se localiza a ficha catalográfica oficial.",
      C: "A Orelha do livro, acompanhada das notas explicativas do editor comercial.",
      D: "A Página de Rosto (Folha de Rosto), que antecede o início do texto da obra.",
      E: "O Sumário detalhado e a introdução da monografia impressa no acervo."
    },
    correctAnswer: "D",
    justification: "No AACR2R, a Fonte Principal de Informação para livros, folhetos e folhas soltas é a Página de Rosto (Folha de Rosto). Qualquer dado descritivo que seja extraído de fora da página de rosto (ou das fontes prescritas de cada área) deve ser grafado entre colchetes [ ]."
  },
  {
    id: "q10",
    moduleId: "m16",
    text: "O formato MARC 21 estrutura seus registros bibliográficos e de autoridade com base na norma técnica internacional ISO 2709. O componente estrutural gerado automaticamente pelo software, que funciona como um sumário ou índice em bytes, indicando a etiqueta (tag), a posição inicial e o comprimento de cada campo variável no registro, denomina-se:",
    options: {
      A: "Líder (Leader), composto por exatamente 24 caracteres de comprimento fixo no início do registro.",
      B: "Subcampo (Subfield), delimitado pelo caractere cifrão ($) seguido de um código alfanumérico.",
      C: "Indicador (Indicator), formado por dois caracteres que qualificam a leitura dos campos variáveis.",
      D: "Campo de Controle (00X), reservado para metadados técnicos de processamento e data de catalogação.",
      E: "Diretório (Directory), estruturado em blocos de 12 caracteres para mapear cada campo variável existente."
    },
    correctAnswer: "E",
    justification: "O Diretório (Directory) é o mapa de navegação interna do registro MARC 21 segundo a ISO 2709. Ele é composto por entradas de 12 caracteres (3 dígitos para a tag, 4 dígitos para o comprimento do campo e 5 dígitos para a posição inicial em bytes)."
  },
  {
    id: "q11",
    moduleId: "m16",
    text: "No formato MARC 21 para Dados Bibliográficos, os campos com etiquetas compreendidas entre 001 e 008 são denominados Campos de Controle. A característica fundamental que diferencia esses campos de controle dos campos de dados variáveis (como os campos 100, 245 ou 650) reside no fato de que os Campos de Controle:",
    options: {
      A: "Não contêm indicadores nem códigos de subcampo delimitados por cifrão ($), sendo compostos por dados posicionais fixos.",
      B: "São campos de repetição ilimitada pelo catalogador, permitindo a inclusão livre de notas de conteúdo em texto corrido.",
      C: "Dispõem obrigatoriamente de dois indicadores numéricos e podem utilizar apenas subcampos alfabéticos minúsculos.",
      D: "Destinam-se unicamente ao registro do número de chamada do exemplar segundo a Classificação Decimal de Dewey (CDD).",
      E: "Exigem a aplicação das regras ortográficas da ABNT em detrimento das convenções internacionais da Library of Congress."
    },
    correctAnswer: "A",
    justification: "Os Campos de Controle (001 a 008) caracterizam-se por não possuírem indicadores nem delimitadores de subcampos ($a, $b, etc.). Eles armazenam códigos e dados de comprimento fixo em posições de caracteres rigorosamente pré-determinadas."
  },
  {
    id: "q12",
    moduleId: "m17",
    text: "O padrão de catalogação RDA (Resource Description and Access), concebido para superar as limitações do AACR2 no ambiente da Web Semântica, adota como preceito orientador o princípio 'Take what you see' (Aceite o que você vê). Entre as consequências práticas diretas desse princípio nas rotinas descritivas da catalogação com RDA, destaca-se:",
    options: {
      A: "A manutenção integral da Designação Geral do Material (GMD) no subcampo 245 $h para todos os tipos de documentos.",
      B: "A abolição de abreviaturas latinas artificiais como [S.l.] e [s.n.], substituídas por expressões na língua do catálogo.",
      C: "A proibição de registrar erros de grafia impressos na folha de rosto, obrigando o catalogador a corrigir o texto no título.",
      D: "A redução obrigatória da menção de responsabilidade a no máximo três autores, ocultando os demais com o uso de [et al.].",
      E: "O restabelecimento do latim clássico como língua internacional obrigatória para a confecção de notas de dissertação acadêmica."
    },
    correctAnswer: "B",
    justification: "O princípio 'Take what you see' do RDA preconiza transcrever os dados conforme aparecem na fonte. O RDA eliminou as arcaicas abreviaturas em latim como [S.l.] (sine loco) e [s.n.] (sine nomine), exigindo expressões claras na língua da agência catalogadora, como [local de publicação não identificado]."
  },
  {
    id: "q13",
    moduleId: "m18",
    text: "No modelo conceitual IFLA LRM (e no modelo FRBR original), as entidades do Grupo 1 organizam o universo bibliográfico em quatro níveis hierárquicos: Obra, Expressão, Manifestação e Item (WEMI). Se uma biblioteca universitária adquire um exemplar da mesma obra literária, com o mesmo texto original traduzido para o português pelo mesmo tradutor, porém publicado por outra editora com projeto gráfico novo e formato de bolso, essa nova publicação constitui formalmente uma nova:",
    options: {
      A: "Obra (Work), visto que a mudança de editora gera uma nova criação intelectual autônoma.",
      B: "Expressão (Expression), já que a mudança no design físico altera o conteúdo intelectivo da mensagem.",
      C: "Manifestação (Manifestation), por se tratar de uma nova corporificação física/comercial da expressão.",
      D: "Item (Item), pois a mudança de editora não impacta o plano das entidades conceituais bibliográficas.",
      E: "Res (Coisa), que substitui a categoria de manifestações em publicações de natureza comercial moderna."
    },
    correctAnswer: "C",
    justification: "A Manifestação é a corporificação física ou digital da expressão de uma obra (a edição produzida por determinada editora, com paginação, formato, ISBN e tipografia específicos). O texto e tradução são a Expressão; os exemplares nas mãos dos alunos são os Itens."
  },
  {
    id: "q14",
    moduleId: "m18",
    text: "Na transição do modelo FRBR para o modelo consolidado IFLA LRM (Library Reference Model), a taxonomia de entidades passou por um refinamento ontológico expressivo. As entidades que compunham o antigo Grupo 3 do FRBR (Conceito, Objeto, Evento e Lugar), historicamente utilizadas como assuntos de obras, foram consolidadas sob a entidade de nível mais alto denominada:",
    options: {
      A: "Agente (Agent), que engloba pessoas, grupos corporativos e coletividades de trabalho.",
      B: "Nomen (Nome), responsável pela associação entre designações verbais e objetos representados.",
      C: "Place (Lugar), que passou a absorver todas as noções de espaço geográfico e conceitual.",
      D: "Res (Coisa), que abrange qualquer entidade ou elemento que possa constituir objeto de pensamento humano.",
      E: "Timespan (Extensão Temporal), criada para agrupar marcos cronológicos da história documental."
    },
    correctAnswer: "D",
    justification: "No IFLA LRM, a entidade 'RES' (termo em latim para 'coisa') é a entidade topo da ontologia. Ela abrange todas as demais entidades do modelo e inclui tudo aquilo que pode ser assunto de uma obra, englobando conceitos, objetos, eventos e lugares."
  },
  {
    id: "q15",
    moduleId: "m19",
    text: "No sistema de Classificação Decimal de Dewey (CDD), quando um documento aborda simultaneamente dois assuntos de disciplinas distintas com a mesma extensão e profundidade (por exemplo, 580 - Botânica e 590 - Zoologia), sem que haja uma classe geral imediatamente superior que englobe ambas de forma harmoniosa, o classificador deve aplicar a regra de precedência denominada:",
    options: {
      A: "Regra do Assunto Mais Nobre, que prioriza ciências exatas em detrimento de biológicas.",
      B: "Regra da Última Notação, optando-se compulsoriamente pela classe de maior numeração sequencial.",
      C: "Regra da Dupla Notação, imprimindo-se duas etiquetas de chamada para afixação na mesma lombada.",
      D: "Regra da Conveniência Local, selecionando a classe sugerida pelo usuário que retirou a primeira cópia.",
      E: "Regra do Primeiro na Ordem (First of Two Rule), classificando o documento na notação que aparecer primeiro."
    },
    correctAnswer: "E",
    justification: "A regra 'First of Two' da CDD estabelece que, se um livro trata de dois assuntos com igual profundidade, deve-se classificá-lo na notação que aparecer primeiro no esquema numérico (580 ganha de 590)."
  },
  {
    id: "q16",
    moduleId: "m19",
    text: "Na Classificação Decimal de Dewey (CDD, 23ª edição), existem seis Tabelas Auxiliares que permitem sintetizar e detalhar números de classificação complexos. Dentre essas tabelas, a ÚNICA que possui autorização geral de uso, podendo ser anexada a qualquer número de classe básica sem a necessidade de uma instrução explícita de 'adicione a' (add instruction) na tabela principal, é a:",
    options: {
      A: "Tabela 1 (Subdivisões Padrão - Standard Subdivisions), aplicável universalmente a qualquer assunto da CDD.",
      B: "Tabela 2 (Áreas Geográficas, Períodos Históricos e Pessoas), que exige menção nominal no índice relativo.",
      C: "Tabela 3 (Subdivisões para as Artes e Literaturas Individuais), aplicada unicamente às classes 700 e 800.",
      D: "Tabela 4 (Subdivisões de Línguas Individuais e Famílias Linguísticas), privativa da classe de Linguística 400.",
      E: "Tabela 6 (Línguas), restrita à tradução de dicionários bilíngues e publicações seriadas internacionais."
    },
    correctAnswer: "A",
    justification: "A Tabela 1 (Subdivisões Padrão: -01 a -09) pode ser agregada livremente a qualquer notação da CDD (ex: 540 + 03 = 540.3 dicionário de química), a menos que haja restrição expressa. Todas as demais tabelas exigem instruções explícitas 'add from'."
  },
  {
    id: "q17",
    moduleId: "m21",
    text: "Na avaliação de Sistemas de Recuperação da Informação (SRI), F. W. Lancaster estabeleceu a existência de uma relação de proporcionalidade inversa entre as medidas de Revocação (Recall) e Precisão (Precision). Em conformidade com esse princípio, se um bibliotecário formula uma estratégia de busca extremamente restritiva e especializada, visando maximizar a PRECISÃO dos resultados, a consequência imediata esperada será:",
    options: {
      A: "A elevação simultânea da taxa de revocação, garantindo que nenhum documento relevante seja esquecido.",
      B: "A queda substancial na taxa de revocação, provocando um aumento no fenômeno conhecido como Silêncio Documentário.",
      C: "O aumento expressivo no volume de ruído informacional, trazendo dezenas de itens irrelevantes na lista final.",
      D: "A perda imediata da consistência terminológica dos termos selecionados no vocabulário controlado.",
      E: "A anulação das funções booleanas de interseção (AND) devido à saturação algorítmica da base de dados."
    },
    correctAnswer: "B",
    justification: "Revocação e Precisão são inversamente proporcionais. Quando a estratégia é excessivamente restritiva para garantir que todos os resultados sejam estritamente precisos (alta precisão), documentos relevantes deixam de ser recuperados, provocando 'Silêncio' (baixa revocação)."
  },
  {
    id: "q18",
    moduleId: "m21",
    text: "Segundo as diretrizes metodológicas da norma técnica internacional ISO 5963 (Procedimentos para Exame de Documentos, Determinação de seus Assuntos e Seleção de Termos de Indexação), a PRIMEIRA etapa que deve ser cumprida pelo indexador humano é:",
    options: {
      A: "A consulta minuciosa às tabelas de notação decimal para escolha preliminar de números de classificação.",
      B: "A tradução direta dos descritores livres para os termos preferenciais catalogados no tesauro da área.",
      C: "O exame do documento com leitura analítica de suas partes chaves (título, sumário, introdução e conclusões).",
      D: "A leitura linear e integral de todas as páginas da obra, da folha de guarda ao colofão tipográfico final.",
      E: "A elaboração prévia de um resumo crítico opinativo contendo o juízo de valor do catalogador da universidade."
    },
    correctAnswer: "C",
    justification: "A ISO 5963 estipula 3 passos: 1º Exame do documento (leitura seletiva dos pontos estruturais vitais: títulos, subtítulos, resumos, introdução e conclusão); 2º Identificação dos conceitos que representam o assunto; 3º Tradução dos conceitos para a linguagem de indexação (linguagem controlada)."
  },
  {
    id: "q19",
    moduleId: "m20",
    text: "A automação de bibliotecas universitárias requer protocolos robustos para viabilizar a cooperação interinstitucional. O protocolo padrão de comunicação cliente-servidor (norma ISO 23950 / ANSI/NISO Z39.50) tem como finalidade primordial permitir que:",
    options: {
      A: "Sistemas de repositórios digitais colham automaticamente pacotes OAI-PMH de teses e dissertações públicas.",
      B: "Arquivos permanentes transmitam dados contábeis em formato EDIFACT para fornecedores de mobiliário.",
      C: "Usuários remotos renovem o empréstimo de livros físicos mediante autenticação federada com biometria facial.",
      D: "Um sistema de biblioteca pesquise e importe registros catalográficos em MARC de outro catálogo remoto em tempo real.",
      E: "Editoras comerciais bloqueiem o acesso de estudantes não matriculados aos periódicos científicos internacionais."
    },
    correctAnswer: "D",
    justification: "O Z39.50 é o protocolo clássico que permite a busca e recuperação de registros bibliográficos entre catálogos de sistemas heterogêneos de bibliotecas, possibilitando copiar registros em MARC 21 diretamente de outros servidores de forma transparente."
  },
  {
    id: "q20",
    moduleId: "m12",
    text: "No contexto da gestão e do marketing em unidades de informação universitárias, uma biblioteca que elabora e oferece um serviço estruturado de 'Consultoria em Gestão de Dados de Pesquisa e Princípios FAIR' voltado aos laboratórios de pós-graduação está atuando precipuamente sobre qual variável do composto mercadológico (Mix de Marketing / 4 Ps de McCarthy)?",
    options: {
      A: "Preço (Price), fixando o custo monetário que será cobrado por hora de consultoria dos docentes.",
      B: "Praça (Place), definindo os canais físicos e balcões de atendimento onde os livros serão guardados.",
      C: "Promoção (Promotion), concentrando-se exclusivamente na confecção de banners e folhetos de divulgação.",
      D: "Previsão (Prediction), estimando a taxa de evasão de discentes no decorrer do próximo ano acadêmico.",
      E: "Produto (Product), configurando o conjunto de benefícios, serviços e soluções oferecidos ao usuário."
    },
    correctAnswer: "E",
    justification: "No marketing da informação, o 'Produto' compreende tanto bens tangíveis (livros, guias) quanto serviços e consultorias especializadas (como o suporte à gestão de dados científicos) desenvolvidos para solucionar as necessidades informacionais do público-alvo."
  },
  {
    id: "q21",
    moduleId: "m09",
    text: "Na literatura clássica de Estudos de Usuários e Necessidades de Informação, estabelece-se uma distinção entre necessidade e demanda. A situação na qual o usuário tem plena consciência de sua carência informacional, formula uma consulta explícita e a encaminha ao serviço de referência da biblioteca caracteriza uma:",
    options: {
      A: "Demanda Manifesta (ou expressa), que se materializa na formulação de um pedido formal ao sistema ou bibliotecário.",
      B: "Necessidade Visceral (inconsciente), na qual o indivíduo não consegue verbalizar a essência de sua dúvida.",
      C: "Demanda Reprimida, quando o usuário necessita da informação, mas desiste de procurar auxílio por receio ou descrença.",
      D: "Demanda Potencial, observada em membros da comunidade acadêmica que nunca frequentaram o espaço da biblioteca.",
      E: "Necessidade Consciente não expressa, na qual a dúvida permanece retida exclusivamente no plano mental do pesquisador."
    },
    correctAnswer: "A",
    justification: "A Demanda Manifesta (ou expressa) é aquela em que a necessidade de informação sai do plano mental do sujeito e se converte em uma solicitação ativa aos profissionais ou catálogos da unidade de informação."
  },
  {
    id: "q22",
    moduleId: "m13",
    text: "No processo contínuo de Desenvolvimento de Coleções, a etapa administrativa e técnica na qual determinados materiais bibliográficos — que se tornaram obsoletos, irremediavelmente danificados ou destituídos de valor histórico e demanda — são retirados do acervo ativo (para descarte, permuta ou remessa a depósito de guarda compartilhada) denomina-se:",
    options: {
      A: "Seleção qualitativa preliminar de obras de referência.",
      B: "Desbastamento (Weeding) e Descarte sistemático de materiais.",
      C: "Aquisição centralizada por meio de licitação pública anual.",
      D: "Avaliação do acervo baseada unicamente no método checklist.",
      E: "Preservação corretiva mediante encadernação em capa de couro."
    },
    correctAnswer: "B",
    justification: "O Desbastamento (Weeding) e o Descarte são processos essenciais para manter a vitalidade e a relevância das coleções. Sem a poda técnica periódica, as bibliotecas sofrem superlotação física e disseminam informações superadas e incorretas."
  },
  {
    id: "q23",
    moduleId: "m11",
    text: "O Serviço de Disseminação Seletiva da Informação (DSI), idealizado pioneiramente por Hans Peter Luhn nos laboratórios da IBM na década de 1950, caracteriza-se fundamentalmente por:",
    options: {
      A: "Publicar boletins impressos generalistas contendo a totalidade das novas aquisições para todos os alunos.",
      B: "Exigir que o pesquisador compareça semanalmente ao balcão de referência para renovar seus termos de busca.",
      C: "Cruzar automaticamente o perfil de interesses dos usuários com os metadados dos novos documentos incorporados à base.",
      D: "Operar unicamente mediante solicitações de comutação bibliográfica enviadas por correio eletrônico comercial.",
      E: "Restringir o acesso a novas teses e dissertações a professores titulares que possuam bolsa de produtividade do CNPq."
    },
    correctAnswer: "C",
    justification: "A essência da DSI é a proatividade e a personalização: o sistema armazena o perfil de interesse informacional do usuário e executa o cruzamento (matching) contínuo e automático desse perfil com os novos documentos adicionados à base, enviando alertas pertinentes."
  },
  {
    id: "q24",
    moduleId: "m22",
    text: "Em consonância com as disposições da Lei Brasileira de Direitos Autorais (Lei nº 9.610/1998, Art. 46), as instituições de ensino e bibliotecas universitárias atuam sob limitações legais específicas. Dentre as práticas abaixo, assinale a que NÃO constitui ofensa aos direitos autorais:",
    options: {
      A: "A digitalização integral de livros protegidos e sua disponibilização aberta e irrestrita na internet para download.",
      B: "A venda de apostilas contendo a cópia integral de obras didáticas para cobrir as despesas da associação de alunos.",
      C: "O aluguel remunerado de capítulos de teses protegidas a empresas privadas de pesquisa e desenvolvimento de mercado.",
      D: "A reprodução, em um só exemplar de pequenos trechos, para uso privado do copista, desde que feita sem intuito de lucro.",
      E: "A tradução não autorizada e comercialização de livros estrangeiros vigentes cujos autores residam fora do Brasil."
    },
    correctAnswer: "D",
    justification: "O Art. 46, inciso II, da Lei 9.610/98 estabelece expressamente que não constitui ofensa aos direitos autorais a reprodução, em um só exemplar de pequenos trechos, para uso privado do copista, desde que feita por este e sem intuito de lucro."
  },
  {
    id: "q25",
    moduleId: "m10",
    text: "De acordo com os referenciais conceituais estabelecidos pela ACRL (Association of College and Research Libraries), a Competência em Informação (Information Literacy) no ensino superior ultrapassa a mera habilidade operacional de manipular computadores, configurando uma capacidade reflexiva que capacita o indivíduo a:",
    options: {
      A: "Escrever rotinas de programação computacional em código aberto para migração de bases de dados de acervos.",
      B: "Memorizar códigos de classificação decimal (CDD e CDU) para localizar fisicamente os livros nas estantes.",
      C: "Preservar encadernações raras e realizar intervenções químicas de restauração de papel contra a acidez ambiental.",
      D: "Publicar pesquisas acadêmicas unicamente em periódicos comerciais indexados com cobrança obrigatória de taxas APC.",
      E: "Determinar a extensão de sua necessidade de informação, acessar, avaliar criticamente e utilizar a informação de modo ético."
    },
    correctAnswer: "E",
    justification: "Segundo a ACRL e a literatura de Competência em Informação (CoInfo), um indivíduo informacionalmente competente sabe reconhecer quando precisa de informação, tem capacidade de localizá-la, avaliá-la criticamente e utilizá-la com ética e legalidade."
  }
];
