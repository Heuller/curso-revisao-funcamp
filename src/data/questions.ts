import type { Question } from './questions1';
import { q1_to_25 } from './questions1';
import { q26_to_50 } from './questions2';
import { q51_to_75 } from './questions3';

export type { Question };

export const q76_to_100: Question[] = [
  {
    id: "q76",
    moduleId: "m19",
    text: "Na Classificação Decimal de Dewey (CDD), a regra para classificar biografias exige atenção. Onde um bibliotecário classificaria primariamente o livro biográfico de um Químico renomado?",
    options: {
      A: "Na classe geral de biografias (920).",
      B: "Na classe de Química (540), aplicando a subdivisão padrão para biografias (Tabela 1).",
      C: "Na classe Geral (000).",
      D: "Na classe de História (900), pois biografias relatam o passado.",
      E: "No número do país de nascimento do Químico."
    },
    correctAnswer: "B",
    justification: "Biografias de pessoas atreladas a uma ciência devem ficar JUNTAS aos livros daquela ciência. O livro de um químico fica na Química + Sufixo de Biografia."
  },
  {
    id: "q77",
    moduleId: "m20",
    text: "Muitos sistemas de bibliotecas (SIGB) operam integrados a leitores RFID (Radio Frequency Identification). A vantagem primordial do RFID sobre o clássico código de barras é que o RFID:",
    options: {
      A: "Impede hackers de invadirem o sistema OAI-PMH.",
      B: "Dispensa a etiqueta física no livro.",
      C: "Permite a leitura múltipla e instantânea de vários livros na pilha de uma vez, sem exigir a linha de visão (Line of Sight) direta do leitor com o chip.",
      D: "Reduz o peso do livro na prateleira.",
      E: "Não custa absolutamente nada em manutenção."
    },
    correctAnswer: "C",
    justification: "A grande revolução do RFID: Leitura em massa por radiofrequência sem precisar que o laser toque um código impresso, acelerando empréstimos e inventários absurdamente."
  },
  {
    id: "q78",
    moduleId: "m21",
    text: "Um resumo que contém não apenas o esqueleto da obra original, mas também o julgamento pessoal, crítico e opinativo de quem o escreveu, fugindo da neutralidade, denomina-se tecnicamente (segundo a teoria de F. W. Lancaster):",
    options: {
      A: "Resumo Informativo.",
      B: "Resumo Indicativo.",
      C: "Resenha (ou Resumo Crítico).",
      D: "Abstract.",
      E: "Sumário Executivo."
    },
    correctAnswer: "C",
    justification: "Resumo crítico (Resenha) é o único onde o autor pode dar opinião. Os outros (Indicativo, Informativo) exigem neutralidade clínica."
  },
  {
    id: "q79",
    moduleId: "m22",
    text: "As obras publicadas pelo governo brasileiro (leis, decretos, tratados) possuem uma especificidade nos Direitos Autorais (Lei 9610/98). Qual é a regra geral de acesso a esses documentos?",
    options: {
      A: "Proteção rígida de copyright da editora nacional por 50 anos.",
      B: "Domínio Público imediato, visto que não são objeto de proteção de direitos autorais, promovendo transparência pública.",
      C: "Protegidas apenas via DRMs governamentais fechados.",
      D: "Podem ser lidas, mas não podem ser reproduzidas.",
      E: "Devem ser cobradas via acesso COMUT."
    },
    correctAnswer: "B",
    justification: "A LDA art. 8º é clara: Leis, tratados, decisões judiciais e atos oficiais não são obras protegidas. Nascem essencialmente livres para cópia integral."
  },
  {
    id: "q80",
    moduleId: "m23",
    text: "Na Editoração Acadêmica, uma revista científica submete os preprints a uma revisão criteriosa e secreta. O modelo 'Double-Blind Peer Review' (Revisão Duplo-Cega) significa que:",
    options: {
      A: "O autor não sabe quem é o avaliador, mas o avaliador sabe quem é o autor.",
      B: "Nem o autor sabe a identidade do avaliador, e nem o avaliador sabe a identidade do autor.",
      C: "Ambos se conhecem, mas a revista oculta seus nomes do público final.",
      D: "A IA (Inteligência Artificial) revisa o artigo de forma opaca.",
      E: "São necessários pelo menos 10 revisores não identificados."
    },
    correctAnswer: "B",
    justification: "O padrão-ouro da isenção (Duplo-Cego) ocorre quando o nome de quem escreve é raspado do PDF, para que o juiz não avalie pelo prestígio do autor, e o autor nunca sabe quem foi o juiz que o criticou."
  },
  {
    id: "q81",
    moduleId: "m01",
    text: "O termo 'Preprint', que ganhou extrema popularidade recentemente na Biblioteconomia da Ciência Aberta, conceitualmente define-se como:",
    options: {
      A: "A prova final impressa da gráfica, pronta para corte.",
      B: "Um artigo manuscrito de rascunho sem valor científico.",
      C: "A versão de um artigo acadêmico disponibilizada publicamente ANTES de ser submetida e aprovada pela rigorosa Revisão por Pares oficial.",
      D: "Um resumo indicativo publicado no sumário da revista.",
      E: "O artigo finalizado após formatação XML."
    },
    correctAnswer: "C",
    justification: "Preprints (arquivados em repositórios como arXiv, SciELO Preprints) aceleram a ciência permitindo a leitura de um artigo 'cru' antes que a lenta revisão por pares oficial ocorra."
  },
  {
    id: "q82",
    moduleId: "m03",
    text: "O pagamento das famosas taxas APCs (Article Processing Charges) ocorre predominantemente para bancar os lucros e despesas de qual modalidade (cor) do Acesso Aberto?",
    options: {
      A: "Via Verde (Green).",
      B: "Via Dourada (Gold).",
      C: "Via Diamante.",
      D: "Via Bronze.",
      E: "Via Cobre."
    },
    correctAnswer: "B",
    justification: "Na Via Dourada, a editora comercial não cobra de quem lê, mas cobra fortunas do autor (ou governo do autor) pra publicar o texto lá (APC)."
  },
  {
    id: "q83",
    moduleId: "m05",
    text: "A Rede CAFe (Comunidade Acadêmica Federada), gerenciada pela RNP, soluciona um problema clássico de bibliotecas e portais assinados (como o Portal CAPES). Que problema é esse?",
    options: {
      A: "A lentidão da internet em campi federais.",
      B: "O roubo físico de livros Raros.",
      C: "O bloqueio de acesso a bases fechadas baseado em endereços de IP físicos, permitindo o login remoto de alunos e professores em suas casas.",
      D: "A falta de metadados padrão Dublin Core nas teses.",
      E: "O financiamento de impressões 3D."
    },
    correctAnswer: "C",
    justification: "Editoras liberam acesso checando o IP. A CAFe atua como passaporte digital unificado (VPN federada), permitindo acesso fora da universidade (em casa) comprovando vínculo institucional."
  },
  {
    id: "q84",
    moduleId: "m07",
    text: "Dentro das leis bibliométricas de dispersão, enquanto Bradford cuida de periódicos e Zipf de palavras, Lotka estudou a produtividade de cientistas. A regra geral da Lei do Quadrado Inverso de Lotka afirma que:",
    options: {
      A: "Muitos autores escrevem muitos artigos com frequência igualitária.",
      B: "A literatura científica dobra de tamanho a cada 10 anos.",
      C: "Um pequeno número de autores (a elite) é responsável por escrever a vasta e esmagadora maioria da produção científica total.",
      D: "Citações envelhecem mais rápido na Física do que na Filosofia.",
      E: "Homens publicam duas vezes mais rápido que mulheres."
    },
    correctAnswer: "C",
    justification: "Lotka = Produtividade Autoral. Poucos autores gigantes escrevem dezenas de coisas, enquanto a multidão (a base da pirâmide) escreve apenas 1 artigo na vida e some."
  },
  {
    id: "q85",
    moduleId: "m08",
    text: "Na diferenciação entre as Fontes de Informação, a Patente (documento oficial que descreve uma invenção técnica) é amplamente classificada pelos teóricos da Ciência da Informação como Fonte:",
    options: {
      A: "Secundária.",
      B: "Primária.",
      C: "Terciária.",
      D: "Informal.",
      E: "Digital Obsoleta."
    },
    correctAnswer: "B",
    justification: "Patentes contêm informação original, técnica inovadora bruta. Assim como teses e artigos primários, são Fontes Primárias puras."
  },
  {
    id: "q86",
    moduleId: "m12",
    text: "Na adoção dos 4 P's de Marketing (Mix) por bibliotecas, quando a diretoria decide estender o horário de funcionamento da biblioteca universitária para as 23h visando atender os alunos do curso noturno, estamos adequando o 'P' de:",
    options: {
      A: "Produto.",
      B: "Preço.",
      C: "Praça (Place/Distribuição).",
      D: "Promoção (Promotion/Divulgação).",
      E: "Pessoas."
    },
    correctAnswer: "C",
    justification: "Praça (Place) em bibliotecas lida com COMO o serviço chega ao cliente. Ampliar horário, melhorar a VPN ou mudar a biblioteca para o andar térreo são ações de Praça (Distribuição)."
  },
  {
    id: "q87",
    moduleId: "m13",
    text: "Dentro das políticas rigorosas de Desenvolvimento de Coleções em Bibliotecas Universitárias, a prática de receber materiais por doação requer a formulação de um documento prévio e assinado, orientando expectativas. O termo adequado para este instrumento é:",
    options: {
      A: "Política de Descarte Compulsório.",
      B: "Manual de Tombamento de Acervos.",
      C: "Termo de Doação (podendo prever a recusa ou descarte do material inapropriado, não obrigando a biblioteca a guarda-lo eternamente).",
      D: "Contrato de Empréstimo Intersistemas.",
      E: "Ata de Consórcio Nacional."
    },
    correctAnswer: "C",
    justification: "Uma política madura exige que quem doa assine o Termo, concordando que a Biblioteca pode descartar, repassar ou recusar a obra, evitando acúmulo de lixo indesejado."
  },
  {
    id: "q88",
    moduleId: "m15",
    text: "O AACR2 prevê 3 Níveis de Descrição. Qual a motivação primária para uma biblioteca de médio porte adotar o 'Segundo Nível' de descrição em vez do famigerado 'Terceiro Nível'?",
    options: {
      A: "O Terceiro Nível é ilegal segundo a IFLA.",
      B: "O Segundo Nível ignora regras gramaticais da ISBD.",
      C: "O Terceiro Nível exige descrição minuciosíssima, consumindo tempo e recursos humanos extremos, sendo justificado geralmente só para Obras Raras ou Bibliotecas Nacionais.",
      D: "O Segundo Nível é exclusivo para catálogos eletrônicos.",
      E: "O Segundo Nível não faz Ponto de Acesso."
    },
    correctAnswer: "C",
    justification: "O nível 3 transcreve até a poeira e pormenores de impressão de cada página do livro, impraticável na operação frenética de uma universitária normal, por isso se usa o Nível 2 (Feijão com Arroz)."
  },
  {
    id: "q89",
    moduleId: "m16",
    text: "As remissivas 'VER' no controle de autoridade de Nomes resolvem a confusão causada por variações nominais (sinonímia/pseudônimos). Um catalogador usando o formato MARC 21 Autoridades (Não confundir com Dados Bibliográficos) aplicaria essa remissiva em campos específicos. Apesar de raro em provas gerais, o conceito MARC 21 para Dados de Autoridade difere do de Bibliográfico porque:",
    options: {
      A: "Eles são incompatíveis.",
      B: "O Bibliográfico tem o campo 100 para apontar para o Título e o Autoridade aponta para a CDD.",
      C: "O formato Bibliográfico (o mais comum) descreve a Manifestação (livro físico), enquanto o Autoridades (um arquivo separado) fixa e padroniza estritamente os nomes de Agentes e Assuntos (ex: Machado de Assis vs. Assis, Machado de).",
      D: "O Bibliográfico usa a Tag 336 e o Autoridade usa Z39.50.",
      E: "Ambos são idênticos em todas as tags."
    },
    correctAnswer: "C",
    justification: "Há 5 formatos MARC21. O bibliográfico (livro físico) linka com o arquivo de autoridades, que padroniza e tranca as regras (o que é proibido [Tag 400] e o que é aprovado [Tag 100] para uso de um autor)."
  },
  {
    id: "q90",
    moduleId: "m18",
    text: "Para o modelo conceitual de catalogação FRBR e IFLA LRM, uma edição da Bíblia escrita puramente em Grego, e uma edição do Novo Testamento traduzida para o Português do Brasil com comentários de um teólogo, configuram:",
    options: {
      A: "A mesma Obra e a mesma Expressão, mudando apenas o Item.",
      B: "Diferentes Obras não relacionadas.",
      C: "A mesma Obra, mas EXPRESSÕES inteiramente diferentes.",
      D: "A mesma Obra, a mesma Expressão, apenas Mudança de CDD.",
      E: "Um caso clássico do Grupo 3 do LRM."
    },
    correctAnswer: "C",
    justification: "A Bíblia (A Obra abstrata) permanece no topo inalterada. Mas ao TRADUZIR (Linguagem), nascem DUAS novas entidades de nível EXPRESSÃO (Uma Expressão grega e outra Expressão em português com comentários)."
  },
  {
    id: "q91",
    moduleId: "m19",
    text: "A Classificação Decimal de Dewey (CDD) baseia-se num raciocínio indutivo e disciplinar. O conceito de 'Religião' encontra-se, como grande classe geral, nas centenas da:",
    options: {
      A: "100.",
      B: "200.",
      C: "300.",
      D: "400.",
      E: "800."
    },
    correctAnswer: "B",
    justification: "Classe 100 é Filosofia/Psicologia. Classe 200 é Religião/Teologia. Classe 300 é Ciências Sociais. A base canônica de memorização."
  },
  {
    id: "q92",
    moduleId: "m21",
    text: "No contexto da Recuperação de Informação e o uso de Tesauros, a 'Latência Temporal' descreve o(a):",
    options: {
      A: "A lentidão dos computadores ao carregar MARC21.",
      B: "O tempo que um documento demora para ir do fornecedor ao balcão.",
      C: "Ataque cibernético em bases do IBICT.",
      D: "O atraso severo (gap de meses ou anos) entre o surgimento de um neologismo num artigo científico e a oficialização hierárquica dessa nova palavra dentro do Tesauro.",
      E: "Acesso por redes."
    },
    correctAnswer: "D",
    justification: "Como a Linguagem Controlada é dura, ela demora a se atualizar. Cientistas criam o conceito de 'Covid-19' em janeiro, mas o Tesauro oficial pode demorar meses para inserir isso na árvore, causando perda na busca."
  },
  {
    id: "q93",
    moduleId: "m02",
    text: "Ao planejar a Preservação Digital a longo prazo de milhares de fitas magnéticas convertidas em formato digital de alto peso (Arquivos WAV mestres), a biblioteca deve considerar principalmente:",
    options: {
      A: "Reduzir brutalmente a qualidade dos arquivos (compressão com perda severa) para baratear o custo no modelo OAIS.",
      B: "Imprimir as ondas sonoras em papel A4.",
      C: "A integridade (fixity) dos arquivos originais sem compressão (AIPs), gerando hashes de criptografia, enquanto libera arquivos levinhos (MP3 - DIPs) pro usuário final ouvir.",
      D: "Ceder os direitos para o Spotify para cortar gastos do arquivo.",
      E: "Descartar os originais se o espaço físico esgotar."
    },
    correctAnswer: "C",
    justification: "O modelo OAIS é claro. Guarda o peso pesado e puro a sete chaves (AIP). E gera um 'MP3 leve' e barato para o usuário ouvir na tela do seu computador em casa (DIP)."
  },
  {
    id: "q94",
    moduleId: "m12",
    text: "O Marketing de Relacionamento (Marketing de Serviços) nas bibliotecas difere brutalmente do Marketing Tradicional, focando prioritariamente em:",
    options: {
      A: "Promoção massiva (Mídia de TV) vendendo pacotes caros.",
      B: "Lucro trimestral imediato da venda das coleções.",
      C: "Retenção do usuário e a criação de lealdade/vínculo contínuo a longo prazo entre o bibliotecário (instituição) e o aluno.",
      D: "Exibição dos livros novos em vitrines espelhadas de livrarias comerciais.",
      E: "Ignorar o calouro, focando em diretores."
    },
    correctAnswer: "C",
    justification: "Marketing de relacionamento (CRM) em bibliotecas não vende produtos, ele retém o aluno ao longo de sua graduação, tornando-o um frequentador vitalício por meio de confiança."
  },
  {
    id: "q95",
    moduleId: "m14",
    text: "Segundo Charles Ammi Cutter (1876), o catálogo deve possibilitar que o usuário não apenas 'ache' o que a biblioteca tem de um autor ou assunto, mas deve também auxiliá-lo de forma ativa na:",
    options: {
      A: "Compra direta do livro com as editoras.",
      B: "Remoção do livro fisicamente e sem intervenção humana.",
      C: "Acesso total à biografia do autor.",
      D: "Escolha de um livro com relação à sua edição ou ao seu caráter (características da obra).",
      E: "Preservação digital na nuvem."
    },
    correctAnswer: "D",
    justification: "As regras de Cutter clássicas (Os Objetivos do Catálogo): 1. Encontrar o que procura. 2. Mostrar o que a biblioteca tem. 3. Auxiliar o leitor na ESCOLHA do livro (por edição ou caráter literário)."
  },
  {
    id: "q96",
    moduleId: "m17",
    text: "Na revolução do código RDA em relação ao AACR2, as fontes de catalogação mudaram. No RDA, qual fonte detém prioridade máxima suprema acima de qualquer outra página dentro do próprio livro para extração do título?",
    options: {
      A: "Sempre a folha de rosto, não havendo exceções.",
      B: "O catálogo da editora Amazon na web.",
      C: "A própria capa externa, acima da folha de rosto.",
      D: "O verso da folha de rosto (onde há a ficha catalográfica anterior).",
      E: "A fonte de informação que o RDA designa, ainda mantendo forte preferência à folha de rosto (title page) ou seu substituto imediato, mas com muito menos rigor quanto ao uso excessivo de colchetes caso a informação seja achada no corpo inteiro do livro."
    },
    correctAnswer: "E",
    justification: "Diferente da paranoia do AACR2 que forçava colchetes para quase tudo, o RDA expandiu o que se aceita como fonte oficial, aceitando informações vitais vindas do próprio recurso inteiro de forma mais holística (menos [ ] inúteis)."
  },
  {
    id: "q97",
    moduleId: "m20",
    text: "Os Sistemas Integrados de Gestão de Bibliotecas (SIGB), como Koha, Pergamum, SophiA e Alma, operam quase todos na nuvem e integram diversos processos em um único banco de dados, exceto (que geralmente requer software de terceiros ou protocolos adicionais robustos):",
    options: {
      A: "Processamento de multas e empréstimos diários.",
      B: "Catalogação e indexação MARC21 de rotina.",
      C: "A preservação digital de longo prazo e coleta OAI-PMH robusta no estilo Repositório Institucional de publicações nativas.",
      D: "Avisos automáticos de devolução e atraso (DSI básica).",
      E: "Busca do catálogo (OPAC) pela web."
    },
    correctAnswer: "C",
    justification: "Softwares SIGB tradicionais (SophiA, Koha, Pergamum) gerenciam a circulação física e a catalogação. Eles não são bons na Preservação Digital (que exige DSpace, Archivematica e OAIS), exigindo softwares à parte para a biblioteca digital pesada."
  },
  {
    id: "q98",
    moduleId: "m06",
    text: "No contexto da Sociedade da Informação e Pós-Industrial, qual é a crítica central feita por teóricos sociais (como Castells) que um profissional da informação deve mitigar em seu trabalho diário com a comunidade de usuários?",
    options: {
      A: "Que computadores ocupam muito espaço e reduzem as estantes.",
      B: "A criação perigosa da 'Exclusão Digital' (Digital Divide), onde classes e países periféricos ficam marginalizados e reféns das infraestruturas tecnológicas das potências mundiais.",
      C: "A migração dos estudantes para o mercado de e-sports.",
      D: "A substituição total do papel pelo silício até o ano 2030, quebrando fábricas de celulose.",
      E: "O fato da indexação automática da IA ser lenta na rede TCP/IP."
    },
    correctAnswer: "B",
    justification: "A Exclusão Digital (Digital Divide) é a mazela sociológica número 1 da sociedade da informação moderna."
  },
  {
    id: "q99",
    moduleId: "m09",
    text: "Nos métodos de coleta em Estudos de Usuários, um instrumento amplamente usado por ser barato, anônimo e fácil de aplicar em larga escala para analisar um grande volume de calouros é o:",
    options: {
      A: "Focus Group (Grupo Focal).",
      B: "Incidente Crítico.",
      C: "Estudo Delphi com Especialistas.",
      D: "Questionário Fechado / Survey online.",
      E: "Entrevista Estruturada Presencial Profunda."
    },
    correctAnswer: "D",
    justification: "O Questionário / Survey (Forms) atinge milhares de alunos a custo zero em segundos. Focus Groups e Entrevistas são caríssimos e demorados."
  },
  {
    id: "q100",
    moduleId: "m22",
    text: "As restrições de direitos autorais de softwares e sistemas proprietários levaram muitas bibliotecas (inclusive federais) a adotarem sistemas como o Koha. A característica fundadora do Software Livre (Free Software) que o difere do Software Proprietário é:",
    options: {
      A: "A ausência absoluta de possibilidade de lucro ou comércio.",
      B: "O direito legal (as '4 liberdades' da FSF) para que a biblioteca execute, copie, estude e modifique o código-fonte do sistema para as necessidades locais, e repasse as melhorias.",
      C: "O direito exclusivo da empresa de reter os metadados do AACR2 em nuvem oculta.",
      D: "Seu funcionamento apenas via terminal Linux Command Line, impossibilitando navegação gráfica Web.",
      E: "O abandono do Z39.50."
    },
    correctAnswer: "B",
    justification: "Software Livre (GPL, Stallman) não significa ser 'grátis' em dinheiro. Significa a liberdade jurídica de abrir o código e alterar sem sofrer processo por quebra de patente. Fundamental para as universidades brasileiras."
  }
];

export const allQuestions: Question[] = [
  ...q1_to_25,
  ...q26_to_50,
  ...q51_to_75,
  ...q76_to_100
];
