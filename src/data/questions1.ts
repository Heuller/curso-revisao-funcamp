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
    text: "Sobre as Bibliotecas Digitais e Repositórios Institucionais, assinale a alternativa que descreve corretamente a diferença essencial de missão entre eles:",
    options: {
      A: "A Biblioteca Digital tem foco na preservação da produção científica local da universidade, enquanto o Repositório compra acervos de editoras comerciais.",
      B: "O Repositório Institucional utiliza o protocolo Z39.50 para interoperabilidade comercial, enquanto a Biblioteca Digital depende do OAI-PMH.",
      C: "A Biblioteca Digital foca no consumo e aquisição de acervos externos para seus usuários, enquanto o Repositório foca na preservação e no acesso aberto da produção intelectual gerada na própria instituição.",
      D: "Ambos possuem a mesma finalidade, divergindo apenas quanto ao formato dos arquivos, já que repositórios não aceitam PDFs multimídia.",
      E: "Bibliotecas Digitais são obrigatoriamente de Acesso Aberto (Open Access), enquanto os Repositórios Institucionais cobram taxas de acesso (paywalls)."
    },
    correctAnswer: "C",
    justification: "Bibliotecas Digitais existem para servir leitores (consomem de fora: EBSCO, Elsevier). Repositórios Institucionais existem para servir a memória da universidade (guardam o que foi produzido por dentro: teses, artigos dos professores)."
  },
  {
    id: "q02",
    moduleId: "m02",
    text: "O ciclo da curadoria digital e a preservação em longo prazo enfrentam o risco constante da obsolescência tecnológica. No Modelo OAIS (Open Archival Information System), o pacote gerado com metadados pesados de preservação (PREMIS) e armazenado a sete chaves no servidor, inacessível ao público, é o:",
    options: {
      A: "SIP (Submission Information Package).",
      B: "DIP (Dissemination Information Package).",
      C: "AIP (Archival Information Package).",
      D: "OAI (Open Archive Initiative).",
      E: "METS (Metadata Encoding and Transmission Standard)."
    },
    correctAnswer: "C",
    justification: "O OAIS tem 3 pacotes: SIP (o que o autor submete), AIP (o 'Archive', o cofre onde o arquivo fica guardado com metadados de preservação) e o DIP (o arquivo otimizado para o usuário baixar no site)."
  },
  {
    id: "q03",
    moduleId: "m03",
    text: "O pesquisador Carlos publicou um artigo em uma revista científica tradicional fechada (paywall) de alto fator de impacto. No entanto, por exigência da universidade, ele depositou a versão 'postprint' de seu artigo, gratuitamente, no Repositório Institucional da universidade. Essa prática caracteriza-se como a via do acesso aberto denominada:",
    options: {
      A: "Via Dourada.",
      B: "Via Verde.",
      C: "Via Diamante.",
      D: "Via Bronze.",
      E: "Via Platina."
    },
    correctAnswer: "B",
    justification: "Via Verde (Green Road) é o autoarquivamento feito pelo autor no Repositório Institucional de sua instituição, mesmo que a publicação oficial tenha sido feita em uma revista comercial fechada."
  },
  {
    id: "q04",
    moduleId: "m04",
    text: "A implementação de Inteligência Artificial Generativa (LLMs) no serviço de referência de bibliotecas universitárias traz o desafio ético conhecido como 'Alucinação', que ocorre quando o sistema:",
    options: {
      A: "Extrai dados excessivos do usuário, ferindo a LGPD.",
      B: "Rejeita responder a comandos devido a filtros de segurança rígidos.",
      C: "Afirma fatos falsos ou cita referências bibliográficas inexistentes com alta confiança estatística.",
      D: "Herda preconceitos e vieses socioculturais presentes na base de treinamento.",
      E: "Demora excessivamente para processar PDFs extensos em linguagem natural."
    },
    correctAnswer: "C",
    justification: "Alucinação é o termo técnico para quando a IA inventa dados (livros, leis, autores que não existem) para completar a probabilidade de uma frase, demonstrando certeza na mentira. Herdar preconceito é 'Viés Algorítmico' (Bias)."
  },
  {
    id: "q05",
    moduleId: "m05",
    text: "As Redes de Informação no Brasil são mantidas por órgãos governamentais. Assinale a alternativa que indica o sistema responsável por indicar em QUAL biblioteca do Brasil está localizada uma determinada revista científica (periódico):",
    options: {
      A: "BDTD.",
      B: "COMUT.",
      C: "Portal de Periódicos CAPES.",
      D: "CCN (Catálogo Coletivo Nacional).",
      E: "Lattes."
    },
    correctAnswer: "D",
    justification: "O CCN (Catálogo Coletivo Nacional de Publicações Seriadas), mantido pelo IBICT, é a ferramenta mestra para localização física e eletrônica de fascículos de periódicos nas bibliotecas brasileiras."
  },
  {
    id: "q06",
    moduleId: "m06",
    text: "No contexto da Comutação Bibliográfica (COMUT) e das coleções cooperativas, quando uma biblioteca opta por solicitar o empréstimo entre bibliotecas (EEB) em vez de comprar um livro raro ou pouco utilizado, ela está aplicando o paradigma do:",
    options: {
      A: "Just in case (Acesso por precaução).",
      B: "Just in time (Acesso no momento exato da necessidade).",
      C: "Desenvolvimento de Coleções Autossuficiente.",
      D: "Desbastamento compulsório.",
      E: "Open Access (Acesso Aberto)."
    },
    correctAnswer: "B",
    justification: "Com a explosão informacional, as bibliotecas migraram do modelo 'Just in case' (ter na estante caso alguém peça um dia) para o 'Just in time' (ter acesso rápido através de redes e COMUT na hora que o usuário precisar)."
  },
  {
    id: "q07",
    moduleId: "m14",
    text: "Segundo os Princípios Internacionais de Catalogação (ICP, IFLA 2016), o catálogo não é apenas um depósito de descrições, mas uma ferramenta que deve cumprir tarefas específicas para o usuário. Qual das tarefas abaixo foi a grande NOVIDADE trazida pelo ICP/LRM em relação aos antigos Princípios de Paris?",
    options: {
      A: "Encontrar (Find).",
      B: "Identificar (Identify).",
      C: "Selecionar (Select).",
      D: "Navegar (Navigate).",
      E: "Obter (Obtain)."
    },
    correctAnswer: "D",
    justification: "Os Princípios de Paris já esboçavam encontrar, identificar. O modelo LRM e o ICP 2016 incluíram o 'Navegar' como tarefa crucial para o ambiente de Web Semântica (Linked Data), permitindo explorar conexões."
  },
  {
    id: "q08",
    moduleId: "m15",
    text: "De acordo com o AACR2R (Código de Catalogação Anglo-Americano, 2ª ed.), se uma obra possui na página de rosto o nome de quatro autores compartilhando a mesma responsabilidade, o Ponto de Acesso Principal (Main Entry) será:",
    options: {
      A: "O primeiro autor listado na folha de rosto.",
      B: "O autor que estiver em maior destaque tipográfico, independentemente da ordem.",
      C: "O coordenador da obra.",
      D: "O Título da obra.",
      E: "Todos os autores, não havendo hierarquia."
    },
    correctAnswer: "D",
    justification: "A famigerada 'Regra de 3' do AACR2 (Regra 21.6C2) dita que se a obra tem 4 ou mais autores, a entrada principal abandona os humanos e vai para o TÍTULO. (Nota: Isso foi abolido no RDA)."
  },
  {
    id: "q09",
    moduleId: "m15",
    text: "Ainda sobre o AACR2, a Fonte Principal de Informação (FPI) estabelecida para a catalogação de um Livro (Monografia Impressa) é:",
    options: {
      A: "A Capa.",
      B: "A Folha de Rosto (Página de Rosto).",
      C: "O Verso da Folha de Rosto.",
      D: "A Lombada.",
      E: "O Sumário."
    },
    correctAnswer: "B",
    justification: "Para o Capítulo 2 (Livros, folhetos e folhas volantes), a FPI absoluta é a Página de Rosto. O que for retirado da capa e não constar na folha de rosto deve ir obrigatoriamente entre colchetes [ ]."
  },
  {
    id: "q10",
    moduleId: "m16",
    text: "O formato MARC 21 possui uma arquitetura baseada na norma ISO 2709. Qual parte invisível do registro atua como um 'mapa' para a máquina, indicando exatamente em qual byte começa e termina cada campo variável (como o campo do autor ou do título)?",
    options: {
      A: "O Líder (Leader).",
      B: "Os Campos de Controle (00X).",
      C: "Os Subcampos.",
      D: "O Diretório (Directory).",
      E: "Os Indicadores."
    },
    correctAnswer: "D",
    justification: "O Diretório é o índice ou mapa gerado automaticamente pelo sistema que diz à máquina o tamanho e a posição inicial de cada campo no registro."
  },
  {
    id: "q11",
    moduleId: "m16",
    text: "No MARC 21 para Dados Bibliográficos, os campos fixos (001 a 008) são chamados de Campos de Controle. A característica fundamental que diferencia esses campos dos campos variáveis (ex: 245) é que os Campos de Controle:",
    options: {
      A: "Não possuem indicadores nem códigos de subcampo ($a, $b).",
      B: "Podem ser expandidos infinitamente pelo catalogador.",
      C: "Não possuem numeração de Tag.",
      D: "São utilizados exclusivamente para números de chamada e classificação (CDD/LC).",
      E: "Exigem a aplicação das regras do AACR2 na íntegra."
    },
    correctAnswer: "A",
    justification: "Os campos de controle (00X) são caixas fixas. Eles não usam indicadores (as duas posições pós-tag) e não utilizam cifrão ($a) de subcampos."
  },
  {
    id: "q12",
    moduleId: "m17",
    text: "O padrão RDA (Resource Description and Access) baniu diversas práticas do AACR2. A principal filosofia do RDA na transcrição de dados de um item é resumida pelo princípio 'Take what you see' (Aceite o que você vê). Como consequência prática, o RDA:",
    options: {
      A: "Reintroduziu o uso massivo do latim para padronizar acervos internacionais.",
      B: "Aboliu abreviaturas clássicas como [S.l.] e [s.n.], exigindo que a omissão seja descrita na língua do catalogador (ex: [editor não identificado]).",
      C: "Manteve a Designação Geral do Material (GMD) logo após o título, na tag 245 $h.",
      D: "Proibiu a transcrição de erros tipográficos no título, obrigando a correção automática pelo catalogador.",
      E: "Reduziu o registro dos autores a apenas 3 pessoas, escondendo o resto com [et al.]."
    },
    correctAnswer: "B",
    justification: "O RDA odeia abreviações não intuitivas. Ele matou o 'sine loco' e 'sine nomine', preferindo linguagem clara. Ele também matou o GMD (criando as tags 336, 337 e 338)."
  },
  {
    id: "q13",
    moduleId: "m18",
    text: "De acordo com o modelo conceitual FRBR (e mantido na essência pelo IFLA LRM), a alteração do tipo de suporte físico (ex: pegar um livro que estava em capa mole e imprimir uma edição idêntica, do mesmo ano, mas em Capa Dura) gera uma nova entidade no nível de:",
    options: {
      A: "Obra.",
      B: "Expressão.",
      C: "Manifestação.",
      D: "Item.",
      E: "Agente."
    },
    correctAnswer: "C",
    justification: "Mudança no formato físico (PDF pra impresso, capa mole pra capa dura, tamanho das páginas, fonte) geram uma nova Manifestação. Obras e Expressões são imateriais/intelectuais."
  },
  {
    id: "q14",
    moduleId: "m18",
    text: "No modelo IFLA LRM, as antigas entidades do Grupo 3 do FRBR (Conceito, Objeto, Evento e Lugar) foram consolidadas sob uma única super-entidade superior, que representa 'tudo aquilo que pode ser alvo de discurso humano'. O nome dessa entidade é:",
    options: {
      A: "Agente (Agent).",
      B: "Nomen (Nome).",
      C: "Res (Coisa).",
      D: "Place (Lugar).",
      E: "Timespan (Período de Tempo)."
    },
    correctAnswer: "C",
    justification: "Para limpar a ontologia, o LRM colocou tudo sob 'RES' (do latim 'Coisa'). Qualquer coisa do universo pode ser um 'RES' e, portanto, pode ser o assunto de uma Obra."
  },
  {
    id: "q15",
    moduleId: "m19",
    text: "Sobre a Classificação Decimal de Dewey (CDD), se um livro trata exata e equitativamente de dois assuntos distintos (por exemplo, Botânica - 580 e Zoologia - 590), o classificador, ao aplicar a regra da CDD, deverá classificar a obra:",
    options: {
      A: "Na classe mais geral que engloba ambas (Biologia - 570).",
      B: "Na classe que for mais solicitada pelo perfil dos usuários locais.",
      C: "Na classe que vier PRIMEIRO no esquema numérico (Botânica - 580).",
      D: "Em ambas as classes simultaneamente, criando duas etiquetas para a lombada.",
      E: "Na classe que vier POR ÚLTIMO no esquema numérico (Zoologia - 590)."
    },
    correctAnswer: "C",
    justification: "A Regra do Primeiro na Ordem (First of Two Rule) da CDD estabelece que, se houver duas disciplinas com igual ênfase, classifica-se na que aparecer primeiro na sequência numérica (580 ganha de 590)."
  },
  {
    id: "q16",
    moduleId: "m19",
    text: "Na Classificação Decimal de Dewey (CDD), as Tabelas Auxiliares possuem a função de expandir a especificidade da notação básica das classes principais. Dentre as seis tabelas auxiliares da CDD, qual é a ÚNICA que pode ser adicionada a qualquer número de classe sem a necessidade de haver uma instrução explícita de 'adicione a' (add instruction) na tabela principal?",
    options: {
      A: "Tabela 2 (Áreas Geográficas, Períodos Históricos e Pessoas).",
      B: "Tabela 1 (Subdivisões Padrão - Standard Subdivisions).",
      C: "Tabela 3 (Subdivisões para as Artes e Literaturas Individuais).",
      D: "Tabela 4 (Subdivisões de Línguas Individuais e Famílias Linguísticas).",
      E: "Tabela 6 (Línguas)."
    },
    correctAnswer: "B",
    justification: "A Tabela 1 (Subdivisões Padrão: -01 a -09) tem aplicação autônoma e universal na CDD: pode ser agregada a qualquer número de classe sem instrução prévia, desde que não haja redundância semântica. Todas as outras tabelas (T2 a T6) exigem permissão ou instrução 'adicione a' no esquema."
  },
  {
    id: "q17",
    moduleId: "m21",
    text: "No contexto da Recuperação da Informação e Avaliação de Sistemas, o paradoxo estabelecido por F.W. Lancaster indica que Revocação e Precisão são inversamente proporcionais. Portanto, se um bibliotecário executa uma busca que tenta maximizar a PRECISÃO (trazendo zero resultados inúteis), a consequência direta será:",
    options: {
      A: "Aumentar também a Revocação, alcançando 100% de eficiência.",
      B: "Queda na Revocação (Aumento do Silêncio), deixando documentos relevantes para trás.",
      C: "Aumento do Ruído Documentário (muitos documentos inúteis).",
      D: "Perda da consistência dos termos de busca.",
      E: "Exaustividade excessiva do catálogo."
    },
    correctAnswer: "B",
    justification: "A gangorra de Lancaster: Quando a Precisão sobe (busca super restrita), a Revocação cai violentamente, causando 'Silêncio' (você não acha lixo, mas deixa coisa boa e relevante esquecida na base)."
  },
  {
    id: "q18",
    moduleId: "m21",
    text: "Segundo a norma ISO 5963, a primeira etapa do processo de indexação feita pelo ser humano É:",
    options: {
      A: "Ler o documento integralmente, palavra por palavra.",
      B: "Traduzir os conceitos soltos para o Tesauro.",
      C: "O exame do documento, analisando partes chaves como título, sumário, introdução e conclusão.",
      D: "A criação de um resumo informativo do documento.",
      E: "A atribuição de notações de classificação decimal (CDD)."
    },
    correctAnswer: "C",
    justification: "Os 3 passos da ISO 5963: 1º Exame Analítico do doc (ler o miolo vital, nunca ler tudo); 2º Identificação de conceitos (na mente); 3º Tradução dos conceitos pra linguagem artificial (Tesauro)."
  },
  {
    id: "q19",
    moduleId: "m20",
    text: "Um software de Automação de Bibliotecas deve permitir a exportação e importação de registros sem perdas. O protocolo padrão internacional de comunicação cliente-servidor, que permite a uma biblioteca pesquisar e importar um registro MARC de outra biblioteca em tempo real (mesmo usando sistemas de empresas diferentes), é o:",
    options: {
      A: "OAI-PMH.",
      B: "ISO 2709.",
      C: "Z39.50.",
      D: "Dublin Core.",
      E: "HTTP/REST."
    },
    correctAnswer: "C",
    justification: "O Z39.50 é o protocolo lendário de busca e recuperação em catálogos (OPACs) de bibliotecas distintas. (Aviso: OAI-PMH é para Repositórios Institucionais, não confunda)."
  },
  {
    id: "q20",
    moduleId: "m12",
    text: "O Marketing em Bibliotecas é vital para a visibilidade. Uma biblioteca universitária que analisa seu público, identifica demandas reprimidas e lança uma 'Oficina de Gestão de Dados de Pesquisa e Princípios FAIR' específica para pesquisadores, está utilizando qual pilar do mix de marketing (4 P's de McCarthy)?",
    options: {
      A: "Praça (Place).",
      B: "Promoção (Promotion).",
      C: "Produto (Product).",
      D: "Preço (Price).",
      E: "Previsão (Prediction)."
    },
    correctAnswer: "C",
    justification: "O Produto no marketing da informação engloba serviços, palestras, consultorias e produtos informacionais tangíveis ou intangíveis."
  },
  {
    id: "q21",
    moduleId: "m09",
    text: "Segundo os Estudos de Usuários, há uma diferença sutil entre 'Necessidade de Informação' e 'Demanda de Informação'. A situação em que o usuário sabe exatamente o que precisa, vai até a biblioteca, pede no balcão e aguarda a resolução formal configura uma:",
    options: {
      A: "Necessidade Visceral.",
      B: "Necessidade Inconsciente.",
      C: "Demanda Manifesta.",
      D: "Uso Efetivo.",
      E: "Demanda Reprimida."
    },
    correctAnswer: "C",
    justification: "A Demanda Manifesta é a necessidade de informação que foi ativamente expressa em forma de pedido ao sistema ou ao bibliotecário. A demanda reprimida é quando ele precisa, mas desiste de pedir."
  },
  {
    id: "q22",
    moduleId: "m13",
    text: "No Desenvolvimento de Coleções, a etapa onde o livro que não tem mais circulação, está desatualizado ou com severo dano físico é fisicamente RETIRADO do acervo ativo (seja para o lixo, doação ou guarda-morta) chama-se:",
    options: {
      A: "Seleção.",
      B: "Avaliação.",
      C: "Aquisição.",
      D: "Desbastamento (Weeding / Descarte).",
      E: "Preservação."
    },
    correctAnswer: "D",
    justification: "O Desbastamento (Weeding) ou Descarte é a poda vital da árvore. Sem descarte, a biblioteca vira um museu morto. Remove-se o material para dar espaço ao novo ou proteger a precisão técnica da coleção."
  },
  {
    id: "q23",
    moduleId: "m11",
    text: "A Disseminação Seletiva da Informação (DSI), concebida por Hans Peter Luhn, tem como característica central e obrigatória:",
    options: {
      A: "A emissão de boletins gerais para todos os usuários da universidade simultaneamente.",
      B: "O cruzamento (matching) contínuo e automático entre o perfil do usuário e os novos documentos entrados no sistema.",
      C: "A busca retrospectiva feita manualmente pelo usuário na base de teses.",
      D: "O uso estrito de metadados PREMIS para notificação de segurança.",
      E: "A catalogação na fonte."
    },
    correctAnswer: "B",
    justification: "O coração da DSI é a personalização e o fluxo contínuo. Sistema rastreia o perfil X contra o Documento novo Y, deu match, ele manda alerta pro usuário de forma pró-ativa."
  },
  {
    id: "q24",
    moduleId: "m22",
    text: "No contexto dos Direitos Autorais brasileiros (Lei 9.610/98), as bibliotecas usufruem de exceções pontuais. É considerado uso permitido, que não constitui ofensa aos direitos autorais:",
    options: {
      A: "A reprodução integral (cópia total) de livros esgotados para disponibilização na internet.",
      B: "A reprodução em um só exemplar de pequenos trechos, para uso privado do copista, sem intuito de lucro.",
      C: "A venda de apostilas xerocadas dentro do campus para cobrir os custos operacionais da gráfica.",
      D: "O empréstimo de livros físicos cobrando taxas de aluguel por dia.",
      E: "A tradução não autorizada de obras científicas para facilitar o acesso de alunos."
    },
    correctAnswer: "B",
    justification: "A Lei de Direitos Autorais permite a cópia de 'pequenos trechos' para uso privado. Cópia integral é crime, a menos que a obra caia em Domínio Público (70 anos após a morte do autor)."
  },
  {
    id: "q25",
    moduleId: "m10",
    text: "A Competência em Informação (Information Literacy) vai além do simples 'saber usar o computador'. Segundo os padrões da ACRL (Association of College and Research Libraries), um estudante literado informacionalmente é aquele que, primariamente:",
    options: {
      A: "Domina a programação de buscas no Z39.50.",
      B: "Possui conhecimentos de restauro físico de obras raras.",
      C: "Sabe determinar a natureza da sua necessidade informacional, acessar, avaliar criticamente e usar a informação de forma ética.",
      D: "Decora esquemas e tabelas de classificação como a CDD.",
      E: "Publica exclusivamente na Via Dourada do Acesso Aberto."
    },
    correctAnswer: "C",
    justification: "CoInfo (Information Literacy) é uma habilidade cognitiva. O usuário sabe *que precisa*, *onde buscar*, como *julgar se é fake news* e como *usar sem cometer plágio* (uso ético)."
  }
];
