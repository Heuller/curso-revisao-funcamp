import type { Question } from './questions1';

export const q26_to_50: Question[] = [
  {
    id: "q26",
    moduleId: "m01",
    text: "O padrão internacional que permite a coleta automática de metadados por provedores de serviço (harvesters), viabilizando a rede global de Repositórios Institucionais, é o:",
    options: {
      A: "MARC 21.",
      B: "Z39.50.",
      C: "OAI-PMH.",
      D: "ISO 2709.",
      E: "Dublin Core."
    },
    correctAnswer: "C",
    justification: "O OAI-PMH (Protocol for Metadata Harvesting) é o sangue dos Repositórios Institucionais. (O Dublin Core é o 'padrão de metadados' transportado pelo OAI-PMH)."
  },
  {
    id: "q27",
    moduleId: "m02",
    text: "Uma biblioteca digital universitária decidiu adotar o formato PDF/A para o armazenamento vitalício de todas as teses, descartando os arquivos originais em .DOCX. Essa estratégia de preservação digital, cujo objetivo é driblar a obsolescência de software alterando o formato lógico do arquivo, é a:",
    options: {
      A: "Emulação.",
      B: "Refrescamento (Refreshing).",
      C: "Migração.",
      D: "Encapsulamento.",
      E: "Preservação Tecnológica (Museu de Hardware)."
    },
    correctAnswer: "C",
    justification: "Sempre que houver TROCA DE FORMATO (ex: .DOC para .PDF), trata-se de MIGRACÃO. O Refrescamento troca a mídia física, e a Emulação cria um ambiente virtual."
  },
  {
    id: "q28",
    moduleId: "m03",
    text: "O modelo de publicação onde a universidade ou governo patrocina financeiramente a revista científica, garantindo que o acesso seja gratuito para o leitor e isento de taxas APC (Article Processing Charges) para o pesquisador publicar, é a Via do Acesso Aberto:",
    options: {
      A: "Dourada.",
      B: "Verde.",
      C: "Bronze.",
      D: "Platina / Diamante.",
      E: "Híbrida."
    },
    correctAnswer: "D",
    justification: "A via Diamante/Platina (predominante na América Latina, como o SciELO) isenta tanto quem lê quanto quem publica de taxas, bancando os custos pelo Estado."
  },
  {
    id: "q29",
    moduleId: "m04",
    text: "No contexto ético do uso de Inteligência Artificial em catálogos de bibliotecas, o fenômeno do 'Viés Algorítmico' (Algorithmic Bias) manifesta-se quando a IA:",
    options: {
      A: "Inventa fontes bibliográficas aleatórias em respostas a usuários.",
      B: "Privilegia resultados que refletem preconceitos raciais, de gênero ou culturais herdados da base de dados histórica que a treinou.",
      C: "Bloqueia o acesso a bases de dados internacionais devido a firewalls corporativos.",
      D: "Apresenta lentidão no processamento de linguagem natural, exigindo busca booleana.",
      E: "Transfere o controle de autoridade para o usuário."
    },
    correctAnswer: "B",
    justification: "O Viés (Bias) é o preconceito herdado. A invenção de fontes falsas (opção A) é a Alucinação."
  },
  {
    id: "q30",
    moduleId: "m05",
    text: "Mantido pelo IBICT, qual sistema nacional age como um agregador e coletor gigante, centralizando os metadados de todas as teses e dissertações defendidas no Brasil e depositadas nos repositórios institucionais locais?",
    options: {
      A: "Portal de Periódicos CAPES.",
      B: "Plataforma Lattes.",
      C: "CCN.",
      D: "BDTD.",
      E: "SciELO."
    },
    correctAnswer: "D",
    justification: "A BDTD (Biblioteca Digital Brasileira de Teses e Dissertações) usa o OAI-PMH para colher teses de todos os cantos do país em um único portal de buscas unificado."
  },
  {
    id: "q31",
    moduleId: "m14",
    text: "De acordo com os Princípios Internacionais de Catalogação (ICP, IFLA 2016), quando a aplicação de uma regra técnica internacional entrar em conflito direto com as necessidades de compreensão do público da biblioteca local, o catalogador deve invocar o Princípio Supremo do(a):",
    options: {
      A: "Padronização Internacional (ISBD).",
      B: "Intercâmbio Comercial de Metadados.",
      C: "Conveniência do Usuário.",
      D: "Fidelidade Absoluta ao Suporte Físico.",
      E: "Transliteração Romana."
    },
    correctAnswer: "C",
    justification: "A Conveniência do Usuário é o farol maior do ICP. Se a regra prejudica a busca, ela deve ser adaptada em favor do leitor (vocabulário comum ganha de preciosismo acadêmico inútil)."
  },
  {
    id: "q32",
    moduleId: "m15",
    text: "Segundo as regras do AACR2, se a página de rosto de um livro indicar a autoria de exatas TRÊS pessoas que compartilham igualmente a criação da obra, o ponto de acesso principal deve recair sobre:",
    options: {
      A: "O Título da obra, fazendo entradas secundárias para todos.",
      B: "O primeiro autor listado na página de rosto, fazendo entradas secundárias para os outros dois.",
      C: "O autor que tiver maior titulação acadêmica (ex: PhD).",
      D: "O último autor listado.",
      E: "Qualquer um dos autores, escolhido a critério do catalogador."
    },
    correctAnswer: "B",
    justification: "A Regra dos Três do AACR2 (21.6) diz: Até três autores, o Ponto Principal é do primeiro que aparece na página de rosto. Acima de três (4 ou mais), o Ponto Principal vai pro Título."
  },
  {
    id: "q33",
    moduleId: "m16",
    text: "Em um registro MARC 21 para dados bibliográficos, as informações relativas ao Título Principal e à Responsabilidade da obra ficam alojadas em qual etiqueta (Tag)?",
    options: {
      A: "100.",
      B: "245.",
      C: "260.",
      D: "300.",
      E: "500."
    },
    correctAnswer: "B",
    justification: "A Tag 245 é a mais sagrada do MARC21 (Title Statement). A 100 é o Ponto de Acesso Principal (Autor Pessoa), 260/264 a Imprenta, e 300 a Descrição Física."
  },
  {
    id: "q34",
    moduleId: "m17",
    text: "O modelo RDA (Resource Description and Access) aboliu diversas siglas latinas do velho AACR2 visando maior clareza para o usuário moderno. Caso o catalogador depare-se com um livro em que a cidade de publicação não possa ser identificada, como ele deve transcrever no registro usando o padrão RDA?",
    options: {
      A: "[S.l.].",
      B: "[s.n.].",
      C: "[sine loco].",
      D: "[Local não identificado] ou [Place of publication not identified].",
      E: "Omitir completamente o campo, pulando direto para a editora."
    },
    correctAnswer: "D",
    justification: "O RDA aboliu 'S.l' (sine loco) e 's.n' (sine nomine). A instrução é escrever por extenso, na língua da agência catalogadora, o que falta."
  },
  {
    id: "q35",
    moduleId: "m18",
    text: "No modelo conceitual FRBR, o nível de abstração mais alto, que representa a pura criação intelectual ou artística imaterial (a ideia central da criação), é denominado:",
    options: {
      A: "Item.",
      B: "Obra.",
      C: "Manifestação.",
      D: "Expressão.",
      E: "Nomen."
    },
    correctAnswer: "B",
    justification: "A 'Obra' (Work) é o grau zero, puramente abstrato. Quando essa obra ganha linguagem, vira 'Expressão'. Quando ganha capa/físico, vira 'Manifestação'."
  },
  {
    id: "q36",
    moduleId: "m19",
    text: "Na Classificação Decimal de Dewey (CDD), a regra de subordinação hierárquica dita que nenhuma notação de classe básica pode conter menos de:",
    options: {
      A: "1 dígito.",
      B: "2 dígitos.",
      C: "3 dígitos.",
      D: "4 dígitos.",
      E: "O uso de letras A-Z."
    },
    correctAnswer: "C",
    justification: "Na CDD, a notação básica exige compulsoriamente no mínimo TRÊS algarismos arábicos (ex: 000, 100, 500), completando-se com zeros à direita quando necessário."
  },
  {
    id: "q37",
    moduleId: "m19",
    text: "Ao classificar uma obra complexa pela Classificação Decimal de Dewey (CDD), o bibliotecário constata que o livro aborda de forma equilibrada TRÊS subdivisões pertencentes a uma mesma divisão hierárquica mais ampla (por exemplo: Álgebra - 512, Geometria - 516 e Análise Matemática - 515). Segundo a consagrada 'Regra de Três' da CDD, a obra deve ser classificada:",
    options: {
      A: "No número correspondente ao assunto que possuir a maior quantidade de páginas.",
      B: "No número do assunto que vier primeiro na sequência numérica (Álgebra - 512).",
      C: "No número de classe imediatamente superior que abranja todas as três disciplinas (Matemática - 510).",
      D: "Obrigatoriamente nas Obras Gerais (000).",
      E: "Criando-se uma notação combinada com barra oblíqua."
    },
    correctAnswer: "C",
    justification: "Pela Regra de Três da CDD: se uma obra trata de três ou mais disciplinas subordinadas a uma classe superior comum, ela deve ser classificada no número hierárquico imediatamente superior que abranja todos os assuntos (no caso, 510 Matemática Geral). A Regra do Primeiro só se aplica para duas disciplinas (First-of-two)."
  },
  {
    id: "q38",
    moduleId: "m21",
    text: "Em um Vocabulário Controlado (Tesauro), a Relação Hierárquica, que liga uma classe maior às suas subclasses menores (ex: Insetos e Formigas), é representada convencionalmente pelas siglas:",
    options: {
      A: "USE / UF.",
      B: "TR / RT (Termo Relacionado).",
      C: "TG / TE (Termo Genérico / Termo Específico).",
      D: "SN (Scope Note).",
      E: "ND (Não Descritor)."
    },
    correctAnswer: "C",
    justification: "TG (Termo Genérico / BT - Broader Term) e TE (Termo Específico / NT - Narrower Term) formam o esqueleto hierárquico."
  },
  {
    id: "q39",
    moduleId: "m11",
    text: "O Serviço de Referência tradicional é tido como 'Reativo', onde o bibliotecário aguarda a demanda do usuário no balcão. Qual serviço é conhecido como 'Pró-ativo', pois se antecipa informando o pesquisador sobre novos artigos recém-chegados que casam com o seu perfil de interesse?",
    options: {
      A: "Comutação Bibliográfica (COMUT).",
      B: "Disseminação Seletiva da Informação (DSI).",
      C: "Empréstimo Entre Bibliotecas (EEB).",
      D: "Catálogo Coletivo Nacional (CCN).",
      E: "Serviço de Alerta Geral."
    },
    correctAnswer: "B",
    justification: "A DSI cruza automaticamente o Perfil do Usuário com as novidades do Acervo, enviando notificações diretas. O Alerta Geral envia tudo pra todos; a DSI é 'Seletiva'."
  },
  {
    id: "q40",
    moduleId: "m13",
    text: "A doação de materiais à biblioteca universitária muitas vezes vira um problema por falta de espaço. Na política de Desenvolvimento de Coleções, a seleção de materiais doados deve ser feita com:",
    options: {
      A: "Menor rigor do que a seleção de compra, aceitando tudo para inchar o acervo.",
      B: "O mesmo rigor e critérios aplicados à aquisição por compra, descartando imediatamente o que for inadequado.",
      C: "Aceitação compulsória, pois é proibido legalmente descartar doações em instituições públicas.",
      D: "Direcionamento imediato às seções de obras raras, independentemente da data de publicação.",
      E: "Transferência automática e sem triagem para o acervo circulante."
    },
    correctAnswer: "B",
    justification: "A biblioteca universitária NUNCA deve aceitar doações indiscriminadas. O custo de catalogar e guardar um livro inútil é alto. O rigor é o MESMO da compra."
  },
  {
    id: "q41",
    moduleId: "m10",
    text: "Na estrutura da Competência em Informação (Information Literacy), o modelo clássico focado na aprendizagem K-12 e na solução de problemas informacionais, amplamente utilizado, composto por 6 passos metodológicos (Definição da Tarefa, Estratégia de Busca, Localização, etc.), é o:",
    options: {
      A: "Big6 (Eisenberg e Berkowitz).",
      B: "Modelo FRBR.",
      C: "Protocolo OAI-PMH.",
      D: "Lancaster Model.",
      E: "Norma ISO 9001."
    },
    correctAnswer: "A",
    justification: "O 'Big6' é o framework mais cobrado em provas (especialmente Cebraspe e Vunesp) quando o tema é Competência em Informação Escolar/Universitária."
  },
  {
    id: "q42",
    moduleId: "m09",
    text: "O comportamento informacional do usuário é complexo. Segundo o Modelo de Busca de Informação de Carol Kuhlthau (ISP - Information Search Process), o usuário experimenta forte 'Ansiedade', 'Dúvida' e 'Frustração' principalmente na fase de:",
    options: {
      A: "Extração da Informação Final.",
      B: "Apresentação dos Resultados.",
      C: "Início do Processo, quando a necessidade surge e ele percebe que não sabe por onde começar.",
      D: "Indexação da obra.",
      E: "Comutação de dados em rede CAFe."
    },
    correctAnswer: "C",
    justification: "O modelo de Kuhlthau foca nas emoções (afetividade). O início da busca é sempre marcado pela confusão, ansiedade e incerteza, que diminui conforme ele encontra o foco."
  },
  {
    id: "q43",
    moduleId: "m15",
    text: "Segundo o AACR2 (Capítulo 2, Livros), qualquer informação descritiva retirada de uma fonte QUE NÃO SEJA a 'Fonte Principal de Informação' (FPI) do campo, deve ser transcrita:",
    options: {
      A: "Em negrito.",
      B: "Sublinhada.",
      C: "Com asteriscos duplos.",
      D: "Entre colchetes [ ].",
      E: "Entre parênteses ( )."
    },
    correctAnswer: "D",
    justification: "Regra clássica e onipresente do AACR2. O que vem 'de fora' (ex: o ano de publicação não tem na página de rosto, mas o catalogador achou na contracapa) ganha colchetes [ ]."
  },
  {
    id: "q44",
    moduleId: "m16",
    text: "No registro MARC 21, o Indicador 2 do campo 245 (Título) possui a função de:",
    options: {
      A: "Criar uma entrada secundária.",
      B: "Avisar a máquina quantos caracteres (non-filing characters) ignorar para a ordenação alfabética (ex: Omissão de artigos 'The', 'O', 'A').",
      C: "Informar a data de publicação.",
      D: "Travar a alteração do registro por outros bibliotecários.",
      E: "Identificar se a obra é digital ou física."
    },
    correctAnswer: "B",
    justification: "O indicador 2 da Tag 245 (non-filing characters) é usado para artigos. Ex: 'O Guarani'. Se colocar indicador 2, a máquina ignora o 'O ' e indexa no 'G'."
  },
  {
    id: "q45",
    moduleId: "m17",
    text: "Qual das opções abaixo substituiu a antiquada 'Designação Geral do Material' (GMD - tag 245 $h) do AACR2, transformando-a em três novos campos no RDA?",
    options: {
      A: "Campos de Controle 001, 007, 008.",
      B: "Tipo de Conteúdo (336), Tipo de Mídia (337) e Tipo de Suporte (338).",
      C: "Entradas de Assunto (650) e Forma (655).",
      D: "O Líder do MARC e o Diretório.",
      E: "Remissivas VER e VER TAMBÉM."
    },
    correctAnswer: "B",
    justification: "A queda do GMD no AACR2 gerou o trio Content/Media/Carrier Type do RDA, injetado nas famosas tags 33X do MARC."
  },
  {
    id: "q46",
    moduleId: "m19",
    text: "Uma importante Regra da Classificação Decimal de Dewey (CDD) ordena o bibliotecário a parar de destrinchar o assunto caso o livro englobe TRÊS OU MAIS áreas do conhecimento (Ex: Física, Química e Biologia). A CDD manda classificá-lo na classe que os abranja de forma ampla (Ex: Ciências Naturais - 500). Trata-se da:",
    options: {
      A: "Regra do Primeiro na Ordem.",
      B: "Regra da Atração.",
      C: "Regra do Zero.",
      D: "Regra de Três.",
      E: "Classificação Cruzada."
    },
    correctAnswer: "D",
    justification: "Regra de 3 na CDD: Tratou de três disciplinas, sobe para o termo genérico superior que abraça as três (ciências puras)."
  },
  {
    id: "q47",
    moduleId: "m21",
    text: "Na estrutura de tesauros (Linguagem Documentária Controlada), quando ocorre de uma palavra poder ter duplo sentido ou causar ambiguidade grave (Ex: 'Manga'), o tesauro utiliza a ferramenta SN para esclarecer o uso exato na base. SN significa:",
    options: {
      A: "Sinônimo Não-Aceito.",
      B: "Semântica Nula.",
      C: "Scope Note (Nota de Escopo).",
      D: "Subject Noun.",
      E: "Sinal de Negação."
    },
    correctAnswer: "C",
    justification: "A Scope Note (Nota de Escopo - NE em português) não cria um relacionamento, ela é um textinho explicativo dizendo 'Use este termo apenas para frutas e não para roupas'."
  },
  {
    id: "q48",
    moduleId: "m22",
    text: "O tratado internacional recente da OMPI (Organização Mundial da Propriedade Intelectual) que flexibiliza as leis rígidas de copyright para permitir que bibliotecas quebrem DRMs e reproduzam livros integralmente em formatos acessíveis (áudio/braille) sem autorização da editora para pessoas com deficiência visual, é o:",
    options: {
      A: "Tratado de Paris.",
      B: "Convenção de Berna.",
      C: "Tratado de Marraqueche.",
      D: "Declaração de Berlim.",
      E: "Acordo de TRIPS."
    },
    correctAnswer: "C",
    justification: "O Tratado de Marraqueche (promulgado no Brasil recentemente com status de emenda constitucional) revolucionou as bibliotecas para pessoas cegas, legalizando a quebra do copyright por motivos de acessibilidade."
  },
  {
    id: "q49",
    moduleId: "m01",
    text: "Segundo a taxonomia das publicações, a versão de um artigo científico em que já ocorreu a rigorosa e cega 'Revisão por Pares' (Peer Review), mas a diagramação final, paginação e logomarca da editora comercial (publisher) ainda NÃO foram aplicados, é denominada:",
    options: {
      A: "Preprint.",
      B: "Postprint (Versão Final do Autor / Aceita).",
      C: "Versão Publicada (Version of Record).",
      D: "Trabalho de Conclusão de Curso.",
      E: "Prova de Galé."
    },
    correctAnswer: "B",
    justification: "A versão Pós-Revisão por pares, mas Pré-Diagramação é o Postprint (Author Accepted Manuscript - AAM). Essa é a versão favorita da Via Verde do Acesso Aberto nos RIs."
  },
  {
    id: "q50",
    moduleId: "m18",
    text: "Segundo a IFLA LRM (2017), o fato do Bibliotecário ir à estante, procurar e não encontrar o livro porque outro aluno levou para casa, lida materialmente e exclusivamente com a entidade do Grupo 1 conhecida como:",
    options: {
      A: "Obra (Work).",
      B: "Expressão (Expression).",
      C: "Manifestação (Manifestation).",
      D: "Item (Item).",
      E: "Coisa (Res)."
    },
    correctAnswer: "D",
    justification: "O empréstimo físico lida com o 'Item' (o exemplar isolado). A Biblioteca Unicamp tem 1 Manifestação do livro XYZ, mas pode possuir 5 Itens (cópias) físicos circulando."
  }
];
