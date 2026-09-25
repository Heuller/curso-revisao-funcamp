import type { Question } from './questions1';

export const q26_to_50: Question[] = [
  {
    id: "q26",
    moduleId: "m01",
    text: "O padrão internacional que permite a coleta automatizada e interoperável de metadados descritivos por provedores de serviço (harvesters), viabilizando a integração em rede de Repositórios Institucionais ao redor do mundo, é o:",
    options: {
      A: "ISO 2709, que define a formatação magnética de registros em fitas de dados e diretórios posicionais.",
      B: "Z39.50 (ISO 23950), voltado primordialmente à catalogação cooperativa e cópia remota de fichas em MARC 21.",
      C: "OAI-PMH (Open Archives Initiative Protocol for Metadata Harvesting), baseado em requisições HTTP e XML.",
      D: "Protocolo SPARQL, utilizado com exclusividade para consulta de dados em grafos na Web Semântica aberta.",
      E: "Dublin Core Qualificado, que atua como esquema de classificação decimal para acervos multimídia físicos."
    },
    correctAnswer: "C",
    justification: "O OAI-PMH é o protocolo de colheita (harvesting) de metadados por excelência nos Repositórios Institucionais em todo o mundo. O Dublin Core é o conjunto de metadados transportado, e o Z39.50 é voltado a catálogos de bibliotecas."
  },
  {
    id: "q27",
    moduleId: "m02",
    text: "Uma biblioteca universitária decidiu converter todo o seu acervo digital de teses e dissertações antigas arquivadas em formato proprietário '.DOCX' para o padrão aberto e normalizado 'PDF/A', assegurando a legibilidade futura dos arquivos independentemente de softwares comerciais. Essa estratégia técnica de preservação digital de longo prazo denomina-se:",
    options: {
      A: "Migração de formato, que converte o arquivo lógico de um padrão tecnológico obsoleto para um padrão estável.",
      B: "Emulação tecnológica, que desenvolve programas para simular o funcionamento de processadores e sistemas antigos.",
      C: "Refrescamento de mídia (Refreshing), que transfere os bits de um disco rígido antigo para um servidor em nuvem.",
      D: "Encapsulamento informacional, que agrupa o arquivo e o software visualizador dentro de um único pacote criptografado.",
      E: "Arqueologia digital, que reconstitui bits danificados a partir de restos magnéticos de fitas perfuradas históricas."
    },
    correctAnswer: "A",
    justification: "A Migração de Formato consiste na transferência periódica de dados digitais de um formato lógico de arquivo para outro mais moderno ou normalizado (ex: .doc para PDF/A), driblando a obsolescência de software."
  },
  {
    id: "q28",
    moduleId: "m03",
    text: "No ecossistema do Acesso Aberto (Open Access), o modelo de publicação científica amplamente disseminado na América Latina (como no modelo SciELO) e mantido por consórcios de universidades públicas e agências de fomento, no qual o artigo é disponibilizado gratuitamente para os leitores e o autor NÃO paga taxa de processamento de artigo (APC), classifica-se como:",
    options: {
      A: "Via Dourada com APC (Gold Open Access), mantida pela cobrança de taxas de autores para custear o periódico.",
      B: "Via Verde (Green Open Access), na qual o artigo fica sob embargo no site da editora e é autoarquivado.",
      C: "Via Híbrida (Hybrid Open Access), na qual periódicos comerciais tradicionais cobram assinatura e APC simultaneamente.",
      D: "Via Bronze (Bronze Open Access), em que o artigo é liberado temporariamente para leitura sem licença Creative Commons.",
      E: "Via Diamante ou Platina (Diamond/Platinum Open Access), sustentada institucionalmente e sem custos para autores e leitores."
    },
    correctAnswer: "E",
    justification: "A Via Diamante (ou Platina) do Acesso Aberto caracteriza-se pela gratuidade absoluta para ambos os lados: não cobra dos leitores (acesso aberto) e não cobra dos autores (isenta de APCs), sendo mantida por universidades, sociedades científicas e agências públicas de fomento."
  },
  {
    id: "q29",
    moduleId: "m04",
    text: "No contexto da ética aplicada e do uso de Inteligência Artificial em catálogos e serviços de busca de bibliotecas, o fenômeno do 'Viés Algorítmico' (Algorithmic Bias) manifesta-se quando:",
    options: {
      A: "O sistema computacional inventa títulos de teses e inventa autores fictícios com aparência de verossimilhança.",
      B: "O algoritmo reproduz, amplifica ou perpetua discriminações e preconceitos contidos nos dados de seu treinamento.",
      C: "A ferramenta de busca substitui automaticamente operadores booleanos por consultas em linguagem natural aberta.",
      D: "O software de indexação paralisa suas atividades devido ao excesso de requisições concorrentes de alunos.",
      E: "A base de dados bloqueia o acesso a usuários que não possuem certificado digital emitido pela autoridade local."
    },
    correctAnswer: "B",
    justification: "O Viés Algorítmico ocorre quando o modelo reflete e perpetua os preconceitos (sociais, raciais, de gênero ou culturais) existentes na base documental histórica utilizada para seu treinamento, gerando assimetrias injustas nos resultados."
  },
  {
    id: "q30",
    moduleId: "m05",
    text: "Mantido e coordenado tecnicamente pelo IBICT, qual sistema nacional opera como agregador centralizado em rede, utilizando o protocolo OAI-PMH para colher os metadados de todas as teses e dissertações defendidas no Brasil e depositadas nos repositórios institucionais locais?",
    options: {
      A: "Portal de Periódicos da CAPES, direcionado à consulta de periódicos científicos e patentes internacionais.",
      B: "Plataforma Lattes, destinada exclusivamente ao registro curricular individual de pesquisadores e estudantes.",
      C: "CCN (Catálogo Coletivo Nacional), cuja função é a localização física de fascículos de publicações seriadas.",
      D: "BDTD (Biblioteca Digital Brasileira de Teses e Dissertações), portal unificado nacional do IBICT.",
      E: "SciELO Brasil, plataforma de publicação eletrônica cooperativa de periódicos científicos de alto impacto."
    },
    correctAnswer: "D",
    justification: "A BDTD (Biblioteca Digital Brasileira de Teses e Dissertações), mantida pelo IBICT, é a rede nacional que integra os sistemas de informação de teses e dissertações das instituições de ensino superior do país em um único ponto de acesso público."
  },
  {
    id: "q31",
    moduleId: "m14",
    text: "De acordo com a Declaração de Princípios Internacionais de Catalogação (ICP - IFLA 2016), quando a aplicação estrita de uma regra técnica ou código internacional entrar em conflito direto com as necessidades informacionais reais da comunidade acadêmica atendida pela biblioteca, o catalogador deve guiar-se prioritariamente pelo Princípio Supremo da:",
    options: {
      A: "Padronização Internacional Universal (Universal Standardization), que proíbe qualquer adaptação de termos em nível local.",
      B: "Conveniência do Usuário (Convenience of the User), adaptando a descrição em benefício da busca e recuperação do leitor.",
      C: "Interoperabilidade Comercial de Dados, que exige a preservação das formas linguísticas adotadas pelos grandes livreiros.",
      D: "Economia de Processamento Técnico, priorizando regras que reduzam o tempo gasto na transcrição dos elementos da obra.",
      E: "Fidelidade Absoluta ao Suporte Físico, obrigando o catalogador a transcrever apenas caracteres tipográficos visíveis."
    },
    correctAnswer: "B",
    justification: "O Princípio da Conveniência do Usuário é o farol maior de toda a teoria catalográfica contemporânea da IFLA (ICP 2016): as decisões sobre a formulação de descrições e pontos de acesso devem ser tomadas tendo sempre em vista o interesse e a facilidade do usuário."
  },
  {
    id: "q32",
    moduleId: "m15",
    text: "Em conformidade com as regras do Código de Catalogação Anglo-Americano (AACR2R, Regra 21.6), se a folha de rosto de um livro indicar a autoria de exatamente TRÊS pessoas que compartilham igualmente a criação da obra, sem destaque tipográfico ou indicação de coordenador, a determinação do Ponto de Acesso Principal deverá recair sobre:",
    options: {
      A: "O Título próprio da obra, elaborando-se entradas secundárias para os três autores mencionados na publicação.",
      B: "Todos os três autores em cabeçalhos principais independentes, criando-se três registros catalográficos distintos.",
      C: "O autor que tiver maior antiguidade acadêmica ou titulação científica informada no verso da folha de rosto.",
      D: "A instituição de ensino ou editora universitária responsável pelo financiamento da pesquisa publicada.",
      E: "O primeiro autor listado na folha de rosto, elaborando-se entradas secundárias para os outros dois autores."
    },
    correctAnswer: "E",
    justification: "Na regra de três do AACR2 (21.6B1): havendo dois ou três autores com responsabilidade compartilhada, o ponto de acesso principal é dado ao PRIMEIRO mencionado na folha de rosto, elaborando-se entradas secundárias para os demais. Apenas quando houver quatro ou mais autores é que a entrada principal migra para o Título."
  },
  {
    id: "q33",
    moduleId: "m16",
    text: "No formato MARC 21 para Dados Bibliográficos, as informações relativas ao Título Principal, título equivalente, subtítulo e indicação de responsabilidade da obra encontram-se estruturadas e alojadas na etiqueta (Tag):",
    options: {
      A: "Tag 100, reservada privativamente para o ponto de acesso principal de nome pessoal do primeiro autor.",
      B: "Tag 260 ou 264, que abriga os dados de imprenta, compreendendo local, editora e data de publicação do item.",
      C: "Tag 300, destinada ao registro da descrição física, abrangendo número de páginas, dimensões e ilustrações.",
      D: "Tag 245 (Title Statement), subdividida em subcampos como $a (título principal) e $c (menção de responsabilidade).",
      E: "Tag 500, utilizada para a inserção de notas gerais e observações textuais de interesse do catalogador."
    },
    correctAnswer: "D",
    justification: "A Tag 245 é o campo principal de título no MARC 21. Ela comporta subcampos essenciais como $a (título principal), $b (outras informações sobre o título/subtítulo) e $c (indicação de responsabilidade)."
  },
  {
    id: "q34",
    moduleId: "m17",
    text: "O padrão de descrição e acesso a recursos RDA (Resource Description and Access) eliminou o uso de antigas siglas e abreviaturas em latim do AACR2, prezando pela clareza ao consulente. Diante de uma monografia em que a cidade e o local de publicação não possam ser determinados ou inferidos pelo catalogador, a diretriz correta de transcrição segundo o RDA é:",
    options: {
      A: "Inserir compulsoriamente a abreviatura latina tradicional [S.l.] entre colchetes no subcampo de imprenta.",
      B: "Utilizar a indicação em latim por extenso [sine loco] para assegurar padronização com bibliotecas da Europa.",
      C: "Registrar a indicação expressa na língua da agência catalogadora, como [Local de publicação não identificado].",
      D: "Deixar o campo de publicação em branco, saltando diretamente para a menção da editora ou fabricante da obra.",
      E: "Substituir a ausência do local pelo nome do país de registro do ISBN informado no código de barras impresso."
    },
    correctAnswer: "C",
    justification: "O RDA aboliu expressamente as siglas latinas arcaicas. Em vez de [S.l.] (sine loco), o RDA instrui registrar a expressão por extenso na língua da agência: [Local de publicação não identificado] (ou [Place of publication not identified])."
  },
  {
    id: "q35",
    moduleId: "m18",
    text: "No modelo conceitual FRBR (Functional Requirements for Bibliographic Records) e no consolidado IFLA LRM, o nível ontológico mais elevado e abstrato do Grupo 1, que representa a criação intelectual ou artística em seu estado puramente conceitual, independente de qualquer forma de expressão linguística ou suporte material, denomina-se:",
    options: {
      A: "Obra (Work), que constitui a criação intelectual ou artística abstrata como conceito ontológico originário.",
      B: "Expressão (Expression), que compreende a realização linguística, musical ou coreográfica da mensagem intelectual.",
      C: "Manifestação (Manifestation), que personifica a corporificação física ou digital produzida por uma editora.",
      D: "Nomen (Nome), responsável pela atribuição de rótulos linguísticos e códigos de autoridade aos registros.",
      E: "Item (Item), correspondente ao objeto físico singular que se encontra acondicionado na estante da biblioteca."
    },
    correctAnswer: "A",
    justification: "A 'Obra' (Work) é o conceito mais abstrato na hierarquia WEMI do FRBR/LRM: é a ideia central e criação intelectual em si. Quando essa obra se materializa em signos e linguagem, temos a Expressão; quando é editada e publicada, temos a Manifestação; e cada exemplar é um Item."
  },
  {
    id: "q36",
    moduleId: "m19",
    text: "Na estrutura sistemática e na notação básica da Classificação Decimal de Dewey (CDD, 23ª edição), a regra estrutural de subordinação hierárquica estabelece que NENHUMA notação de classe básica principal pode ser grafada com menos de:",
    options: {
      A: "Cinco dígitos posicionais com inclusão obrigatória de indicadores de idioma e localização física da obra.",
      B: "Dois algarismos arábicos seguidos de uma letra maiúscula que represente a subdivisão temática principal.",
      C: "Quatro algarismos arábicos separados por ponto decimal após o segundo dígito (exemplo: 50.40).",
      D: "Um algarismo romano precedido do sinal gráfico de adição (+) para indicar a hierarquia das ciências.",
      E: "Três algarismos arábicos (como 000, 100 ou 530), completando-se com zeros à direita caso necessário."
    },
    correctAnswer: "E",
    justification: "Na CDD, nenhuma notação básica tem menos de 3 dígitos (ex: 000 Generalidades, 500 Ciências Naturais, 510 Matemática, 512 Álgebra). Se o número for menor, completa-se com zeros à direita para manter o padrão tridimensional mínimo."
  },
  {
    id: "q37",
    moduleId: "m19",
    text: "Ao classificar uma obra pela Classificação Decimal de Dewey (CDD), o bibliotecário constata que o documento analisa com igual profundidade e abrangência TRÊS tópicos pertencentes a uma mesma classe hierárquica superior (por exemplo: 512 - Álgebra, 515 - Análise e 516 - Geometria). De acordo com a clássica 'Regra de Três' da CDD, a obra deve ser classificada:",
    options: {
      A: "Na notação da disciplina que ocupar o maior percentual de páginas ilustradas no corpo do documento.",
      B: "Obrigatoriamente na classe geral de enciclopédias e obras de referência multidisciplinares (030).",
      C: "Na classe da disciplina que aparecer primeiro na ordenação numérica das tabelas da CDD (512 - Álgebra).",
      D: "No número de classe imediatamente superior que abranja de forma abrangente todas as três disciplinas (510 - Matemática).",
      E: "Criando-se uma notação composta ligada pelo sinal de dois-pontos (:), a exemplo da prática adotada na CDU."
    },
    correctAnswer: "D",
    justification: "A 'Regra de Três' da CDD estabelece que, se um livro trata de três ou mais disciplinas que sejam subdivisões de uma classe comum mais ampla, ele deve ser classificado na classe imediatamente superior que as engloba (neste caso, 510 Matemática Geral). A regra do primeiro na ordem (First of Two) só se aplica quando forem dois assuntos."
  },
  {
    id: "q38",
    moduleId: "m21",
    text: "Na estrutura conceitual dos Tesauros e Linguagens Documentárias Controladas, as relações de subordinação e supraordinação lógica entre classes mais amplas e suas subdivisões específicas (como a relação entre 'Metais' e 'Alumínio') são formalmente codificadas pelas siglas:",
    options: {
      A: "TG / TE (Termo Genérico / Termo Específico), que estrutura o encadeamento hierárquico vertical entre conceitos.",
      B: "TR / RT (Termo Relacionado / Related Term), que representa associações conceituais de afinidade e contiguidade temática.",
      C: "USE / UP (Use / Usado Para), que estabelece a relação de equivalência e sinonímia entre termos do vocabulário.",
      D: "NE / SN (Nota de Escopo / Scope Note), que define e restringe o significado e a aplicação do descritor na base.",
      E: "ND / NA (Não Descritor / Não Autorizado), que indica termos rejeitados por critérios de obsolescência lexical."
    },
    correctAnswer: "A",
    justification: "A relação hierárquica em tesauros é representada pelo par TG (Termo Genérico / Broader Term - BT) e TE (Termo Específico / Narrower Term - NT). USE/UP é equivalência e TR é relação associativa."
  },
  {
    id: "q39",
    moduleId: "m11",
    text: "Diferentemente do serviço de referência convencional, frequentemente classificado como 'reativo' por aguardar a presença física do consulente, o serviço de informação que se caracteriza pelo perfil 'pró-ativo', antecipando-se às necessidades dos pesquisadores mediante alertas personalizados de novas publicações com base em seus interesses, é o(a):",
    options: {
      A: "Comutação Bibliográfica (COMUT), responsável pelo fornecimento de cópias impressas de artigos por via postal.",
      B: "Disseminação Seletiva da Informação (DSI), que cruza continuamente os perfis temáticos com o acervo recém-ingressado.",
      C: "Catalogação na Fonte (CIP), que confecciona a ficha catalográfica no verso da folha de rosto das edições comerciais.",
      D: "Empréstimo Entre Bibliotecas (EEB), que viabiliza o translado de exemplares físicos entre instituições conveniadas.",
      E: "Depósito Legal obrigatório, que exige o envio compulsório de exemplares à biblioteca nacional para guarda de memória."
    },
    correctAnswer: "B",
    justification: "A Disseminação Seletiva da Informação (DSI) é o serviço pró-ativo por excelência: a biblioteca cadastra o perfil temático do usuário e o sistema dispara notificações e alertas contínuos sobre novas publicações que correspondam exatamente àquele perfil."
  },
  {
    id: "q40",
    moduleId: "m13",
    text: "O recebimento de doações de livros e periódicos em bibliotecas universitárias requer diretrizes claras na política de Desenvolvimento de Coleções. Para evitar a superlotação física com materiais desprovidos de pertinência acadêmica, a literatura especializada e as boas práticas de gestão determinam que a seleção de doações deve:",
    options: {
      A: "Ser dispensada de triagem técnica, aceitando-se indiscriminadamente qualquer material para inflar os índices do MEC.",
      B: "Ser feita com menor rigor que a aquisição por compra, já que materiais doados não geram desembolso financeiro direto.",
      C: "Obedecer rigorosamente aos mesmos critérios de qualidade, pertinência e relevância adotados para as compras regulares.",
      D: "Ser encaminhada integralmente ao setor de obras raras e coleções especiais, independentemente do estado e da data.",
      E: "Submeter-se à aceitação compulsória, sendo juridicamente vedado o descarte de materiais doados a órgãos públicos."
    },
    correctAnswer: "C",
    justification: "Materiais recebidos por doação demandam custos de processamento técnico, espaço físico e conservação. Portanto, a seleção de doações deve seguir com exatidão os MESMOS critérios de seleção estabelecidos para a compra de materiais, descartando o que não agregar valor ao currículo e à pesquisa da universidade."
  },
  {
    id: "q41",
    moduleId: "m10",
    text: "No domínio da Competência em Informação (Information Literacy), o modelo conceitual formulado por Michael Eisenberg e Robert Berkowitz, estruturado em seis etapas lógicas para a solução de problemas de informação (Definição da Tarefa, Estratégia de Busca, Localização e Acesso, Uso da Informação, Síntese e Avaliação), denomina-se:",
    options: {
      A: "Ciclo de Curadoria Digital do DCC, direcionado à preservação contínua de metadados em repositórios digitais.",
      B: "Modelo SCONUL das Sete Competências, focado nas bibliotecas universitárias e de pesquisa do Reino Unido.",
      C: "Modelo ISP de Carol Kuhlthau, voltado à análise dos sentimentos de dúvida e ansiedade no processo de busca.",
      D: "Big6 Skills, amplamente aplicado em programas de formação de usuários e alfabetização informacional.",
      E: "Framework da ACRL para o Ensino Superior, baseado em limiares conceituais epistemológicos e autoria aberta."
    },
    correctAnswer: "D",
    justification: "O modelo Big6 (Eisenberg e Berkowitz) é um dos modelos mais cobrados em concursos públicos para programas de competência informacional, dividindo o processo de busca e resolução de problemas informacionais em seis passos práticos e iterativos."
  },
  {
    id: "q42",
    moduleId: "m09",
    text: "Na investigação sobre o Comportamento Informacional de Usuários, o modelo ISP (Information Search Process), desenvolvido pela pesquisadora Carol Kuhlthau, destaca a dimensão afetiva que acompanha a busca. De acordo com o modelo de Kuhlthau, o usuário vivencia seus índices mais elevados de incerteza, frustração e ansiedade tipicamente na fase de:",
    options: {
      A: "Apresentação e fechamento dos resultados consolidados da pesquisa para os avaliadores acadêmicos.",
      B: "Coleta e síntese final das evidências documentais já selecionadas nas estantes da unidade de informação.",
      C: "Iniciação e seleção preliminar do tópico, quando ele reconhece a carência informacional e ainda carece de foco.",
      D: "Indexação sistemática dos descritores utilizando termos preferenciais extraídos de tesauros especializados.",
      E: "Auditoria contábil da comutação de dados em redes de empréstimo entre bibliotecas universitárias conveniadas."
    },
    correctAnswer: "C",
    justification: "O modelo ISP de Carol Kuhlthau integra cognição e sentimentos. As etapas iniciais (Iniciação e Seleção) são caracterizadas por sentimentos intensos de incerteza, dúvida, frustração e ansiedade, sentimentos que diminuem conforme o usuário formula um foco claro para a pesquisa."
  },
  {
    id: "q43",
    moduleId: "m15",
    text: "De acordo com os preceitos gerais de transcrição descritiva do AACR2R (Capítulo 1 e 2), qualquer elemento ou dado catalográfico que seja retirado de uma fonte de informação EXTERNA à Fonte Principal de Informação (FPI) prescrita para a área respectiva deve ser obrigatoriamente grafado:",
    options: {
      A: "Em caixa-alta e sublinhado no corpo da ficha catalográfica para advertir o pesquisador sobre a origem do dado.",
      B: "Entre colchetes [ ], sinal gráfico padronizado para indicar intervenção do catalogador com dados de fora da FPI.",
      C: "Em fonte itálica antecedida pelo sinal de barra oblíqua (/) para indicar menção de responsabilidade secundária.",
      D: "Entre parênteses curvos ( ), indicando que a informação possui caráter meramente subsidiário e provisório.",
      E: "Precedido de asteriscos duplos (**) no início de cada linha de cabeçalho do registro catalográfico principal."
    },
    correctAnswer: "B",
    justification: "No AACR2R, os colchetes [ ] são a convenção internacional para demarcar informações interpoladas pelo catalogador que foram extraídas de fontes externas à Fonte Principal de Informação daquela área ou tipo de suporte."
  },
  {
    id: "q44",
    moduleId: "m16",
    text: "No formato MARC 21 para Dados Bibliográficos, o Segundo Indicador posicional do campo 245 (Título Principal) desempenha uma função operacional crucial nos sistemas automatizados de bibliotecas, que consiste em:",
    options: {
      A: "Criar compulsoriamente um ponto de acesso secundário de assunto com base nas palavras-chave do título.",
      B: "Classificar a obra na Tabela 1 da CDD de acordo com o idioma oficial em que o texto foi originalmente redigido.",
      C: "Bloquear a edição colaborativa do registro por catalogadores terceirizados que operem em regime remoto.",
      D: "Definir se o recurso bibliográfico se encontra disponível em formato impresso ou exclusivamente em suporte eletrônico.",
      E: "Informar a quantidade de caracteres não ordenáveis (non-filing characters) a serem ignorados pelo sistema (ex: artigos 'O', 'A', 'The')."
    },
    correctAnswer: "E",
    justification: "O segundo indicador do campo 245 no MARC 21 especifica o número de caracteres a serem ignorados na ordenação alfabética (non-filing characters). Por exemplo, para 'O cortiço', usa-se indicador 2 (ignora 'O' e o espaço, indexando em 'C')."
  },
  {
    id: "q45",
    moduleId: "m17",
    text: "A fim de superar a rigidez e a ambiguidade da antiga 'Designação Geral do Material' (GMD - subcampo 245 $h) do AACR2, o código RDA (Resource Description and Access) instituiu uma nova abordagem tripartite para a descrição das características físicas e lógicas dos itens, mapeada no MARC 21 nos campos:",
    options: {
      A: "Campos 336 (Tipo de Conteúdo), 337 (Tipo de Mídia) e 338 (Tipo de Suporte), que substituíram integralmente o GMD.",
      B: "Campos de notas 500, 505 e 520, que detalham o sumário analítico e o resumo descritivo do documento examinado.",
      C: "Campos de assunto 600, 650 e 651, que classificam os tópicos temáticos e geográficos abordados no texto.",
      D: "Campos de catalogação na fonte 080, 082 e 090, que definem a notação decimal e o número de chamada do exemplar.",
      E: "Campos de controle 001, 007 e 008, que registram parâmetros técnicos de preservação em fita magnética."
    },
    correctAnswer: "A",
    justification: "O RDA aboliu o GMD (245 $h) e criou o trio de atributos Content Type (campo 336), Media Type (campo 337) e Carrier Type (campo 338), conferindo precisão granular aos novos suportes digitais e analógicos."
  },
  {
    id: "q46",
    moduleId: "m19",
    text: "A Classificação Decimal de Dewey (CDD) possui regras de precedência rígidas para orientar o catalogador na atribuição de notações. Quando um documento trata de três ou mais disciplinas pertencentes a uma mesma classe maior (por exemplo: 530 - Física, 540 - Química e 550 - Geociências), a CDD orienta que a obra seja classificada no número geral que engloba todas (500 - Ciências Naturais). Essa diretriz metodológica denomina-se:",
    options: {
      A: "Regra de Três da CDD, que prescreve subir na hierarquia para a classe imediatamente superior que abranja os assuntos.",
      B: "Regra do Primeiro na Ordem, que impõe classificar na disciplina que figurar em primeiro lugar no sumário.",
      C: "Regra da Atração Decimal, que atrai o documento para o número da classe com maior volume de acervo circulante.",
      D: "Regra da Inclusão Forçada, que permite criar notações personalizadas fora do esquema oficial mantido pela OCLC.",
      E: "Regra do Assunto Principal, que divide o exemplar físico em três tomos com etiquetas de chamada independentes."
    },
    correctAnswer: "A",
    justification: "A célebre 'Regra de Três' da CDD: se uma obra trata de três ou mais assuntos que compõem uma classe imediatamente superior comum, classifica-se na classe geral superior (ex: 500 para Física, Química e Geologia)."
  },
  {
    id: "q47",
    moduleId: "m21",
    text: "Na construção e manutenção de Tesauros e Linguagens de Indexação, é comum encontrar vocábulos que apresentam homonímia, polissemia ou significados múltiplos (como o termo 'Manga'). O elemento metodológico utilizado pelo tesauro para delimitar o sentido exato e a abrangência em que o descritor deve ser empregado na base denomina-se:",
    options: {
      A: "Relação Associativa (TR / RT), que vincula termos de campos semânticos vizinhos para ampliar a busca.",
      B: "Operador de Proximidade Booleana, que estipula o intervalo numérico de palavras entre dois conceitos de busca.",
      C: "Relação de Equivalência (USE / UP), que encaminha o usuário de uma forma não autorizada para o termo aceito.",
      D: "Subdivisão de Forma, que identifica o suporte material ou gênero editorial em que a obra foi publicada.",
      E: "Nota de Escopo (NE / Scope Note - SN), texto explicativo que restringe e esclarece a aplicação do descritor."
    },
    correctAnswer: "E",
    justification: "A Nota de Escopo (NE / SN - Scope Note) é uma nota de esclarecimento que define os limites conceituais e a abrangência com que determinado termo preferencial (descritor) deve ser empregado na indexação e recuperação, evitando equívocos polissêmicos."
  },
  {
    id: "q48",
    moduleId: "m22",
    text: "O tratado internacional promulgado pela Organização Mundial da Propriedade Intelectual (OMPI) que estabeleceu exceções obrigatórias às leis de direitos autorais para permitir que bibliotecas e instituições adaptem e reproduzam obras protegidas em formatos acessíveis (como braille e audiolivro) para pessoas com deficiência visual, sem necessidade de autorização prévia ou pagamento de royalties ao titular, é o:",
    options: {
      A: "Tratado de Cooperação em Matéria de Patentes (PCT), focado no registro multinacional de invenções tecnológicas.",
      B: "Convenção de Berna para a Proteção das Obras Literárias e Artísticas, marco fundador do direito de autor clássico.",
      C: "Tratado de Marraqueche, que visa facilitar o acesso a obras publicadas para pessoas cegas ou com deficiência visual.",
      D: "Acordo sobre Aspectos dos Direitos de Propriedade Intelectual Relacionados ao Comércio (TRIPS / OMC).",
      E: "Declaração de Berlim sobre o Acesso Aberto ao Conhecimento em Ciências e Humanidades, ligada ao Open Access."
    },
    correctAnswer: "C",
    justification: "O Tratado de Marraqueche (incorporado ao ordenamento jurídico brasileiro com equivalência de emenda constitucional) autorizou as bibliotecas e entidades autorizadas a produzir e transferir obras em formatos acessíveis a pessoas com deficiência visual sem ferir os direitos autorais."
  },
  {
    id: "q49",
    moduleId: "m01",
    text: "Na taxonomia das publicações científicas e das políticas de depósito em Repositórios Institucionais, a versão de um artigo acadêmico que já foi submetida, avaliada e formalmente aprovada no processo de 'Revisão por Pares' (Peer Review), mas que ainda não recebeu a editoração gráfica final, paginação e logomarca da editora comercial, classifica-se tecnicamente como:",
    options: {
      A: "Preprint, versão bruta disponibilizada antes ou durante o processo formal de avaliação por pares.",
      B: "Version of Record (Versão Publicada), contendo o layout definitivo e a paginação da revista comercial.",
      C: "Prova tipográfica de galé, documento provisório de revisão ortográfica com marcas de correções do autor.",
      D: "Postprint (Author Accepted Manuscript - AAM), correspondente à versão final revisada e aceita para publicação.",
      E: "Relatório técnico preliminar, documento interno de circulação restrita aos membros da equipe do laboratório."
    },
    correctAnswer: "D",
    justification: "O 'Postprint' (ou Author Accepted Manuscript - AAM) é a versão final do artigo após passar e ser aprovado pela revisão por pares, mas antes da diagramação final e inclusão do logotipo da editora comercial. É a versão mais amplamente aceita para depósito nos Repositórios Institucionais (Via Verde)."
  },
  {
    id: "q50",
    moduleId: "m18",
    text: "De acordo com o modelo conceitual IFLA LRM (2017) e os requisitos funcionais do FRBR, quando um estudante se dirige à biblioteca universitária e não consegue realizar o empréstimo domiciliar de um livro porque o exemplar físico que estava na estante foi retirado por outro leitor, essa situação operacional envolve diretamente a entidade do nível:",
    options: {
      A: "Obra (Work), visto que a ausência do exemplar físico anula a criação intelectual abstrata original do autor.",
      B: "Item (Item), que representa o objeto físico individual e concreto de uma manifestação sob custódia da biblioteca.",
      C: "Manifestação (Manifestation), por representar a edição comercial inteira produzida pela editora para circulação.",
      D: "Res (Coisa), entidade superior que engloba apenas conceitos filosóficos imateriais que não circulam fisicamente.",
      E: "Expressão (Expression), já que o empréstimo domiciliar altera a realização linguística da tradução examinada."
    },
    correctAnswer: "B",
    justification: "O 'Item' é o exemplar concreto e individualizado de uma manifestação (o livro com código de barras específico que está na estante ou na mochila do usuário). A biblioteca pode ter 1 Manifestação do livro e possuir 5 Itens (cópias físicas) desse mesmo título."
  }
];
