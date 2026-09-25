import type { Question } from './questions1';
import { q1_to_25 } from './questions1';
import { q26_to_50 } from './questions2';
import { q51_to_75 } from './questions3';

export type { Question };

export const q76_to_100: Question[] = [
  {
    id: "q76",
    moduleId: "m19",
    text: "No sistema de Classificação Decimal de Dewey (CDD), a classificação de obras de caráter biográfico requer especial atenção metodológica. Onde um bibliotecário deve classificar prioritariamente a biografia de um químico renomado?",
    options: {
      A: "Na classe de Química (540), aplicando-se a subdivisão padrão de pessoas e biografias da Tabela 1 da CDD.",
      B: "Na classe geral de Biografias e Genealogia (920), independentemente da disciplina científica exercida pelo biografado.",
      C: "Na classe de Obras Raras e Enciclopédias Gerais (030), por registrar o histórico de vida de uma personalidade célebre.",
      D: "Na classe de História Geral da Europa (940), adotando como critério de ordenação o continente de nascimento do cientista.",
      E: "Na classe de Filosofia e Teoria da Ciência (501), vinculando a trajetória pessoal à epistemologia geral do conhecimento."
    },
    correctAnswer: "A",
    justification: "Na CDD, a regra para biografias de indivíduos associados a uma disciplina específica determina que a biografia deve ser classificada juntamente com o assunto respectivo (Química 540 + subdivisão de biografia -092 da Tabela 1), reunindo a vida do cientista com a literatura de sua ciência."
  },
  {
    id: "q77",
    moduleId: "m20",
    text: "Muitos Sistemas Integrados de Gestão de Bibliotecas (SIGB) operam integrados a sensores e antenas com tecnologia RFID (Radio Frequency Identification). A vantagem operacional primordial do RFID sobre as tradicionais etiquetas de código de barras unidimensional consiste no fato de que o RFID:",
    options: {
      A: "Dispensa a aplicação física de qualquer suporte adesivo ou etiqueta de identificação nos exemplares do acervo.",
      B: "Permite a leitura múltipla e instantânea de vários livros empilhados simultaneamente, sem exigir linha de visão direta com o leitor.",
      C: "Bloqueia automaticamente o acesso de hackers e usuários externos não autorizados aos servidores do protocolo OAI-PMH.",
      D: "Reduz o peso físico dos livros nas prateleiras ao substituir a encadernação original por chips poliméricos flexíveis.",
      E: "Elimina integralmente os custos orçamentários de aquisição e manutenção de sistemas de segurança antifurto predial."
    },
    correctAnswer: "B",
    justification: "A grande revolução do RFID nas bibliotecas é a leitura por radiofrequência sem necessidade de visada ótica (Line of Sight) direta: permite ler dezenas de itens empilhados numa única passada de leitor, agilizando autoempréstimo, devoluções e inventários de acervo."
  },
  {
    id: "q78",
    moduleId: "m21",
    text: "Na teoria da indexação e condensação documental sistematizada por F. W. Lancaster e normatizada pela ABNT, a modalidade de resumo que contém não apenas a síntese expositiva dos tópicos fundamentais da obra original, mas também o julgamento pessoal, crítico, avaliativo e opinativo do resenhista, rompendo deliberadamente com a neutralidade descritiva, classifica-se tecnicamente como:",
    options: {
      A: "Resumo Informativo, que destaca objetivos, metodologia, resultados e conclusões com neutralidade clínica.",
      B: "Resumo Indicativo, que apenas sinaliza os temas abordados no documento sem dispensar a leitura integral da obra.",
      C: "Resumo Crítico (ou Resenha), que analisa criticamente o documento emitindo julgamento de mérito e juízo de valor.",
      D: "Abstract Internacional, formulado em língua estrangeira para indexação obrigatória em bases comerciais científicas.",
      E: "Sumário Executivo, destinado à prestação de contas de projetos gerenciais perante conselhos de administração pública."
    },
    correctAnswer: "C",
    justification: "O Resumo Crítico (ou Resenha / Review) é a única modalidade de resumo que comporta a emissão de juízo de valor, análise opinativa e comentários críticos do autor da resenha sobre o mérito, a relevância e a qualidade da obra original."
  },
  {
    id: "q79",
    moduleId: "m22",
    text: "No ordenamento jurídico brasileiro, as publicações governamentais oficiais — compreendendo textos de leis, decretos, resoluções administrativas, atos de órgãos públicos e tratados internacionais — possuem tratamento singular no Art. 8º da Lei de Direitos Autorais (Lei nº 9.610/1998). Assinale a alternativa que descreve corretamente o regime de direitos autorais desses documentos:",
    options: {
      A: "São protegidos com exclusividade pelas gráficas oficiais da União pelo prazo inalienável de cinquenta anos.",
      B: "Exigem autorização prévia por escrito do Ministério da Justiça para qualquer reprodução que ultrapasse dois parágrafos.",
      C: "Podem ser consultados presencialmente nas bibliotecas, mas sua reprodução digital integral constitui ilícito civil.",
      D: "Não são objeto de proteção de direitos autorais, podendo ser livre e integralmente reproduzidos em prol da transparência pública.",
      E: "Ficam submetidos a licenças Creative Commons restritivas que vedam a compilação em repositórios universitários."
    },
    correctAnswer: "D",
    justification: "O Art. 8º, inciso IV, da Lei nº 9.610/98 é taxativo: não são objeto de proteção como direitos autorais os textos de tratados ou convenções, leis, decretos, regulamentos, decisões judiciais e demais atos oficiais. Nascem essencialmente livres para reprodução integral."
  },
  {
    id: "q80",
    moduleId: "m23",
    text: "No fluxo de editoração e gestão de periódicos científicos acadêmicos, o modelo de avaliação de manuscritos designado internacionalmente como 'Double-Blind Peer Review' (Revisão por Pares Duplo-Cega) caracteriza-se operacionalmente pelo fato de que:",
    options: {
      A: "O autor do manuscrito conhece a identidade dos avaliadores, mas os pareceristas desconhecem a autoria do artigo submetido.",
      B: "Os pareceristas se reúnem presencialmente com os autores em audiência aberta para negociar as correções metodológicas exigidas.",
      C: "A avaliação é realizada inteiramente por algoritmos probabilísticos de inteligência artificial sem intervenção de pareceristas humanos.",
      D: "A revista científica divulga publicamente na internet os nomes e as anotações dos revisores juntamente com o artigo publicado.",
      E: "Nem os pareceristas conhecem a identidade dos autores, nem os autores têm conhecimento da identidade dos pareceristas que os avaliaram."
    },
    correctAnswer: "E",
    justification: "A avaliação Duplo-Cega (Double-Blind) é o padrão clássico de imparcialidade científica: a identidade dos autores é ocultada dos pareceristas para evitar viés de prestígio ou instituição, e a identidade dos pareceristas é ocultada dos autores para garantir liberdade total de crítica."
  },
  {
    id: "q81",
    moduleId: "m01",
    text: "O conceito de 'Preprint', que adquiriu extraordinária relevância nas práticas de Ciência Aberta e na comunicação científica rápida durante emergências sanitárias globais, define-se tecnicamente no âmbito da biblioteconomia como:",
    options: {
      A: "A versão completa de um manuscrito científico disponibilizada publicamente em um repositório antes da avaliação por pares e publicação formal.",
      B: "A prova tipográfica de corte impressa pela gráfica comercial imediatamente antes da distribuição física às livrarias universitárias.",
      C: "O rascunho manuscrito preliminar elaborado por estudantes de graduação que ainda não receberam orientação docente formal.",
      D: "O resumo analítico bilíngue que antecede obrigatoriamente o sumário de teses e dissertações aprovadas em congregação acadêmica.",
      E: "A versão definitiva de um artigo que já transitou em julgado editorial e que foi diagramada com os logotipos oficiais da editora."
    },
    correctAnswer: "A",
    justification: "Preprints são manuscritos científicos completos depositados e compartilhados abertamente em servidores especializados (como arXiv, bioRxiv, SciELO Preprints) antes de passarem pela avaliação formal por pares de um periódico, acelerando a circulação do conhecimento."
  },
  {
    id: "q82",
    moduleId: "m03",
    text: "O pagamento das denominadas APCs (Article Processing Charges ou Taxas de Processamento de Artigos) na comunicação científica contemporânea ocorre primordialmente para financiar a publicação e viabilizar a sustentabilidade econômica de qual modalidade do Acesso Aberto?",
    options: {
      A: "Via Verde (Green Open Access), na qual o autoarquivamento é realizado pelo próprio autor em repositórios institucionais.",
      B: "Via Dourada Comercial (Gold Open Access), na qual o periódico oferece acesso aberto imediato ao leitor cobrando taxas do autor ou financiador.",
      C: "Via Diamante (Diamond Open Access), mantida pelo financiamento institucional de universidades sem cobrança de taxas de autores.",
      D: "Via Bronze (Bronze Open Access), caracterizada pela liberação temporária e promocional de leitura nas páginas da editora.",
      E: "Via Platina (Platinum Open Access), modalidade governamental latino-americana que veda qualquer cobrança de taxas financeiras."
    },
    correctAnswer: "B",
    justification: "Na Via Dourada (Gold Road) com APC, a editora comercial não cobra assinaturas dos leitores (garantindo acesso aberto no site da revista), mas transfere os custos operacionais e margem de lucro para os autores ou suas instituições de fomento por meio das APCs."
  },
  {
    id: "q83",
    moduleId: "m05",
    text: "A Comunidade Acadêmica Federada (CAFe), serviço estratégico de federação de identidades gerido e mantido no Brasil pela Rede Nacional de Ensino e Pesquisa (RNP), resolve um desafio crítico de acesso para as bibliotecas universitárias ao:",
    options: {
      A: "Acelerar a velocidade física de transmissão de pacotes de dados por cabos de fibra ótica subterrâneos nos campi federais.",
      B: "Restringir o acesso aos periódicos científicos internacionais unicamente aos computadores situados no prédio central da biblioteca.",
      C: "Permitir o acesso remoto autenticado e seguro a bases de dados por assinatura (como o Portal CAPES) fora do campus via login institucional.",
      D: "Automatizar a conversão de livros raros digitalizados em arquivos sonoros protegidos por certificados de chave pública governamental.",
      E: "Substituir a necessidade de catalogação descritiva nos módulos de aquisição dos sistemas integrados locais de informação."
    },
    correctAnswer: "C",
    justification: "A CAFe permite a autenticação federada segura: o pesquisador ou estudante da Unicamp, mesmo em casa ou em viagem internacional, utiliza suas credenciais institucionais locais para validar o acesso ao Portal de Periódicos da CAPES e outras bases restritas, sem depender de IP fixo do campus."
  },
  {
    id: "q84",
    moduleId: "m07",
    text: "No campo das Leis Bibliométricas, enquanto a Lei de Bradford investiga a dispersão de artigos em periódicos e a Lei de Zipf analisa a frequência de palavras em textos, a Lei de Lotka (Lei do Quadrado Inverso) dedica-se a analisar a produtividade científica de autores. A premissa central demonstrada empiricamente por Lotka estabelece que:",
    options: {
      A: "A vasta maioria dos pesquisadores publica múltiplos artigos por ano com frequência perfeitamente homogênea e uniforme.",
      B: "A literatura científica dobra de volume acumulado a cada dez anos em decorrência do crescimento exponencial das universidades.",
      C: "As citações recebidas por artigos da área de ciências exatas envelhecem mais lentamente que as referências das humanidades.",
      D: "Uma pequena fração de autores altamente produtivos (a elite) é responsável pela autoria de uma grande parcela da literatura total.",
      E: "O número de autores em coautoria interdisciplinar cresce na proporção direta do financiamento orçamentário dos laboratórios."
    },
    correctAnswer: "D",
    justification: "A Lei de Lotka (produtividade dos autores) demonstra uma distribuição assimétrica: um número muito pequeno de pesquisadores produz muito (núcleo de alta produtividade), enquanto a esmagadora maioria dos autores publica apenas um ou dois artigos ao longo de sua carreira acadêmica."
  },
  {
    id: "q85",
    moduleId: "m08",
    text: "Na diferenciação tipológica das Fontes de Informação adotada nos estudos de referência e documentação, a 'Patente' (documento técnico e jurídico que descreve detalhadamente uma invenção técnica inédita e os limites de sua proteção patentária) é classificada formalmente como uma:",
    options: {
      A: "Fonte Secundária, por reunir dados consolidados e resumos de invenções já desenvolvidas no mercado industrial.",
      B: "Fonte Terciária, concebida para orientar o inventor sobre a localização de bancos de dados comerciais em nível global.",
      C: "Fonte Informal, caracterizada pela ausência de validade documental e circulação efêmera em feiras de negócios.",
      D: "Fonte Obsoleta, desprovida de valor informacional em razão dos prazos de segredo industrial dos laboratórios de pesquisa.",
      E: "Fonte Primária, por conter o relato original e detalhado em primeira mão de um conhecimento técnico inédito criado pelo inventor."
    },
    correctAnswer: "E",
    justification: "Patentes são fontes primárias por excelência: consistem em documentos oficiais originais que descrevem detalhadamente invenções e inovações técnicas diretamente de seus criadores, sem passar por filtros de condensação de fontes secundárias."
  },
  {
    id: "q86",
    moduleId: "m12",
    text: "Na aplicação do Composto de Marketing (4 Ps de McCarthy) à administração de bibliotecas universitárias, quando a gestão decide prorrogar o horário de atendimento físico do balcão até as 23 horas e disponibilizar caixas de autoatendimento para devolução 24 horas no campus, essa ação atua diretamente sobre o 'P' de:",
    options: {
      A: "Praça (Place / Distribuição), adequando e expandindo os canais, horários e pontos de contato de acesso aos serviços informacionais.",
      B: "Preço (Price), calculando a tarifa monetária que será repassada aos estudantes de pós-graduação pelo uso noturno das salas.",
      C: "Produto (Product), alterando a encadernação e o conteúdo intelectivo dos livros que compõem o catálogo bibliográfico central.",
      D: "Promoção (Promotion), concentrando-se na produção de anúncios de rádio e cartazes publicitários para divulgar o vestibular.",
      E: "Parceria (Partnership), estabelecendo convênios comerciais com empresas privadas de transporte coletivo municipal."
    },
    correctAnswer: "A",
    justification: "O 'P' de Praça (Place ou Distribuição) no marketing de bibliotecas envolve a logística de entrega dos serviços: horários de funcionamento, localização predial, facilidade de devolução, acessibilidade física e plataformas digitais de acesso remoto."
  },
  {
    id: "q87",
    moduleId: "m13",
    text: "Na formulação de Políticas de Desenvolvimento de Coleções em bibliotecas universitárias, o recebimento de doações de acervos particulares de professores e cidadãos exige um instrumento formal de gestão para evitar a aceitação de materiais desnecessários. Esse instrumento, que estabelece que a biblioteca se reserva o direito de selecionar, descartar ou repassar obras, denomina-se:",
    options: {
      A: "Manual de Classificação Decimal da Coleção Especial, que dita o arranjo físico das estantes de acordo com a ordem do MEC.",
      B: "Termo de Doação, documento assinado pelo doador declarando ciência de que a instituição aplicará os critérios da política de seleção.",
      C: "Ata de Consórcio Federado, que obriga a universidade a remeter exemplares duplicados a bibliotecas de outros Estados.",
      D: "Certificado de Depósito Legal Compulsório, emitido pela Fundação Biblioteca Nacional para comprovar a entrada da obra.",
      E: "Contrato de Alienação de Bens Imateriais, que converte doações bibliográficas em créditos orçamentários de custeio anual."
    },
    correctAnswer: "B",
    justification: "O Termo de Doação é o documento jurídico-administrativo essencial no qual o doador transfere a guarda e manifesta concordância expressa com as regras da biblioteca, garantindo à instituição a autonomia técnica de incorporar apenas o que for relevante e descartar ou repassar o que não for pertinente."
  },
  {
    id: "q88",
    moduleId: "m15",
    text: "O Código de Catalogação Anglo-Americano (AACR2R) prevê três Níveis de Descrição (Regra 1.0D), do mais sucinto (Nível 1) ao mais detalhado (Nível 3). A justificativa técnica primordial para que uma biblioteca universitária adote o 'Segundo Nível' de descrição em suas rotinas regulares reside no fato de que:",
    options: {
      A: "O Terceiro Nível é expressamente proibido pela norma internacional ISBD em virtude do risco de redundância catalográfica.",
      B: "O Segundo Nível elimina a necessidade de identificar a autoria principal e secundária nas fichas bibliográficas do sistema.",
      C: "O Terceiro Nível exige a descrição exaustiva de minúcias de fabricação, sendo justificado geralmente apenas para Obras Raras e especiais.",
      D: "O Primeiro Nível é exclusivo para catálogos comerciais informatizados e o Terceiro Nível destina-se unicamente a sebos e livrarias.",
      E: "O Segundo Nível dispensa o preenchimento de pontos de acesso de assunto baseados em linguagens documentárias controladas."
    },
    correctAnswer: "C",
    justification: "O Nível 3 do AACR2 exige a transcrição de absolutamente todos os elementos possíveis descritos no código (detalhes pormenorizados de ilustrações, dimensões ao milímetro, notas exaustivas), o que demanda tempo e recursos incompatíveis com o fluxo diário, sendo reservado a acervos raros e preciosos. O Nível 2 equilibra precisão e economia de processamento."
  },
  {
    id: "q89",
    moduleId: "m16",
    text: "No universo dos padrões MARC 21 mantidos pela Library of Congress, existe uma distinção fundamental entre o formato MARC 21 para Dados Bibliográficos e o formato MARC 21 para Dados de Autoridade. Essa distinção conceitual e prática caracteriza-se pelo fato de que:",
    options: {
      A: "O formato de Autoridade destina-se ao registro contábil e patrimonial dos bens materiais permanentes da unidade de informação.",
      B: "O formato Bibliográfico opera unicamente com o protocolo Z39.50 e o formato de Autoridade funciona exclusivamente sob OAI-PMH.",
      C: "O formato de Autoridade é privativo da catalogação de mapas geográficos e o formato Bibliográfico é restrito a artigos impressos.",
      D: "O formato Bibliográfico descreve os recursos e manifestações físicas, enquanto o de Autoridade fixa as formas autorizadas de nomes e assuntos.",
      E: "Ambos os formatos utilizam as mesmas etiquetas numéricas sem distinção de tags para pontos de acesso principais e remissivas."
    },
    correctAnswer: "D",
    justification: "O MARC 21 Bibliográfico descreve as publicações (título, imprenta, paginação, notas, etc.), enquanto o MARC 21 de Autoridades estrutura os registros de controle de autoridade, padronizando a forma autorizada de autores, entidades e termos de assunto e estabelecendo as remissivas VER e VER TAMBÉM."
  },
  {
    id: "q90",
    moduleId: "m18",
    text: "Segundo as diretrizes conceituais do modelo IFLA LRM e do modelo FRBR original, a análise comparativa entre uma edição integral do clássico 'Dom Casmurro' em língua portuguesa original e uma edição da mesma obra literária traduzida para a língua inglesa com notas explicativas de um crítico estrangeiro evidencia que se tratam de:",
    options: {
      A: "Duas Obras totalmente distintas e independentes no catálogo, em virtude da alteração da nacionalidade dos leitores.",
      B: "Duas criações que compartilham a mesma Expressão textual, divergindo unicamente quanto ao número de chamada do exemplar.",
      C: "Duas manifestações que pertencem a Obras distintas, pois o tradutor passa a ser considerado o criador primário do texto.",
      D: "Dois Itens físicos correspondentes a uma única Manifestação unificada produzida pela mesma gráfica internacional cooperativa.",
      E: "Uma única e mesma Obra (a criação de Machado de Assis), que se materializou em duas Expressões distintas (o texto em português e a tradução inglesa)."
    },
    correctAnswer: "E",
    justification: "No modelo FRBR/LRM, a Obra abstrata 'Dom Casmurro' de Machado de Assis é uma só. Quando esse texto é traduzido para o inglês, surge uma nova EXPRESSÃO (a realização linguística do texto em outro idioma). Cada edição comercial lançada de cada expressão é uma Manifestação."
  },
  {
    id: "q91",
    moduleId: "m19",
    text: "Na estrutura sistemática das dez classes principais da Classificação Decimal de Dewey (CDD, 23ª edição), que organiza o conhecimento humano pelo princípio disciplinar introduzido por Melvil Dewey, as obras dedicadas à Teologia, Religiões Comparadas e Mitologia encontram-se agrupadas na centena:",
    options: {
      A: "Centena 200 (Religião), subdividida em classes que abrangem desde teologia natural até as grandes tradições religiosas mundiais.",
      B: "Centena 100 (Filosofia e Psicologia), que engloba sistemas metafísicos, ética e epistemologia do pensamento humano.",
      C: "Centena 300 (Ciências Sociais), que compreende sociologia, ciência política, direito, economia e práticas pedagógicas.",
      D: "Centena 400 (Línguas e Linguística), dedicada à gramática comparada e aos estudos estruturais dos idiomas naturais.",
      E: "Centena 800 (Literatura e Retórica), que reúne poesia, dramaturgia, ficção e ensaios críticos de literaturas nacionais."
    },
    correctAnswer: "A",
    justification: "A estrutura decimal clássica da CDD organiza as 10 classes principais: 000 Obras Gerais/Ciência da Computação; 100 Filosofia e Psicologia; 200 Religião; 300 Ciências Sociais; 400 Línguas; 500 Ciências Naturais; 600 Tecnologia e Ciências Aplicadas; 700 Artes; 800 Literatura; 900 História e Geografia."
  },
  {
    id: "q92",
    moduleId: "m21",
    text: "Na gestão de Linguagens Documentárias e Sistemas de Recuperação da Informação, os tesauros enfrentam o desafio da 'Latência Temporal' (ou gap temporal de atualização terminológica), fenômeno que decorre do fato de que:",
    options: {
      A: "Os computadores de servidores de bibliotecas sofrem degradação física de processamento com o acúmulo de acessos simultâneos.",
      B: "Existe um hiato temporal significativo entre o surgimento de um novo conceito na literatura científica e sua inclusão formal no tesauro.",
      C: "Os dados catalográficos em formato MARC 21 perdem sua validade jurídica após cinco anos de depósito no banco de dados.",
      D: "A velocidade de colheita de registros pelo protocolo OAI-PMH diminui quando há documentos em formatos abertos em PDF/A.",
      E: "O tempo de atendimento presencial nos balcões de referência ultrapassa a tolerância estipulada nas cartas de serviços ao usuário."
    },
    correctAnswer: "B",
    justification: "Linguagens controladas (como tesauros) são instrumentos padronizados que dependem de comitês técnicos para validar e incluir novos termos. O tempo que decorre entre o aparecimento de um neologismo científico ou termo de vanguarda na literatura e sua oficialização no tesauro é denominado latência temporal."
  },
  {
    id: "q93",
    moduleId: "m02",
    text: "Ao planejar a preservação digital e a curadoria de um acervo histórico composto por milhares de depoimentos orais em áudio gravados originalmente em fita cassete e digitalizados em arquivos sonoros mestres (arquivos WAV descompactados de alto peso), a biblioteca universitária deve conciliar segurança e usabilidade segundo o modelo OAIS mediante:",
    options: {
      A: "A eliminação definitiva dos arquivos mestres para liberar espaço em disco, mantendo apenas resumos em texto descritivo.",
      B: "A impressão física das ondas sonoras e frequências em papel cartão resistente para guarda em pastas de arquivo deslizante.",
      C: "A guarda segura dos arquivos brutos não comprimidos em pacotes AIP protegidos com checksum, gerando derivados leves (DIPs) para consulta do usuário.",
      D: "A cessão exclusiva e onerosa dos direitos patrimoniais do acervo sonoro a plataformas privadas de streaming na internet.",
      E: "A compactação de todo o acervo histórico em formatos com perda irreversível de qualidade sem manter os dados brutos."
    },
    correctAnswer: "C",
    justification: "O modelo OAIS estrutura a cadeia de custódia: os arquivos mestres originais de alta fidelidade sem perdas são mantidos como Pacotes de Informação Arquivística (AIP) com metadados PREMIS e controle de integridade (fixity/checksum), enquanto derivados comprimidos (DIPs) são criados para acesso rápido e leve aos usuários."
  },
  {
    id: "q94",
    moduleId: "m12",
    text: "O Marketing de Relacionamento (Customer Relationship Management - CRM) aplicado a bibliotecas universitárias diferencia-se das abordagens transacionais tradicionais de marketing, tendo como objetivo estratégico primordial:",
    options: {
      A: "Maximizar o lucro financeiro obtido por meio da cobrança de multas por devolução em atraso de materiais bibliográficos.",
      B: "Promover campanhas publicitárias de massa em meios de comunicação aberta para atrair público desprovido de vínculo com o campus.",
      C: "Incentivar a venda direta de exemplares duplicados do acervo circulante em feiras de troca de livros didáticos no início do semestre.",
      D: "Construir e consolidar vínculos contínuos de confiança, fidelização e cooperação mútua a longo prazo entre a biblioteca e sua comunidade de usuários.",
      E: "Restringir o atendimento personalizado aos estudantes de graduação que apresentarem maior coeficiente de rendimento escolar."
    },
    correctAnswer: "D",
    justification: "O Marketing de Relacionamento em unidades de informação foca no longo prazo: busca compreender as necessidades contínuas de alunos, professores e pesquisadores, construindo uma relação duradoura de parceria, confiança e fidelização ao longo de toda a sua trajetória acadêmica."
  },
  {
    id: "q95",
    moduleId: "m14",
    text: "Em suas clássicas regras para elaboração de um catálogo impresso em fichas (Rules for a Dictionary Catalog, 1876), Charles Ammi Cutter enunciou os objetivos fundamentais que um catálogo deve cumprir. Além de permitir que o usuário ENCONTRE um livro de que se conhece o autor, título ou assunto, e de MOSTRAR o que a biblioteca possui, Cutter postulou que o catálogo deve:",
    options: {
      A: "Efetuar a compra imediata de obras similares junto aos fornecedores comerciais credenciados pela universidade.",
      B: "Substituir a necessidade de leitura integral dos textos mediante a criação de sumários analíticos de inteligência artificial.",
      C: "Calcular o tempo de decomposição física do suporte material com base nas taxas de acidez da celulose das páginas.",
      D: "Impor a notação de classificação decimal da CDD como único elemento recuperável no catálogo de autoridade de assunto.",
      E: "Auxiliar o usuário na ESCOLHA de um livro, seja com relação à sua edição (bibliograficamente) ou ao seu caráter (literariamente)."
    },
    correctAnswer: "E",
    justification: "Os Objetivos do Catálogo formulados por Cutter em 1876 são tríplices: 1. Permitir ENCONTRAR um livro do qual se conheça autor, título ou assunto; 2. MOSTRAR o que a biblioteca possui; 3. AUXILIAR na ESCOLHA do livro (com relação à sua edição ou ao seu caráter literário/tópico). Esse postulado inspirou os objetivos contemporâneos da IFLA."
  },
  {
    id: "q96",
    moduleId: "m17",
    text: "Na transição do código AACR2R para o padrão RDA (Resource Description and Access), a hierarquia e o rigor de prescrição das fontes de informação passaram por uma evolução paradigmática significativa. No padrão RDA, a determinação da fonte de informação para a transcrição do título e dados da manifestação caracteriza-se por:",
    options: {
      A: "Priorizar o próprio recurso como um todo, aceitando dados do corpo do item com flexibilidade e reduzindo a exigência de colchetes.",
      B: "Impor o uso obrigatório e inflexível da folha de rosto, proibindo a retirada de dados de qualquer outra página da obra sob pena de nulidade.",
      C: "Adotar prioritariamente as descrições constantes em sites de livrarias virtuais comerciais em detrimento dos dados impressos no item.",
      D: "Exigir que todos os dados catalográficos que não constem na capa externa do exemplar sejam compulsoriamente grafados em letras maiúsculas.",
      E: "Restringir as fontes de informação aos metadados Dublin Core inseridos na assinatura eletrônica de certificação digital do autor."
    },
    correctAnswer: "A",
    justification: "O RDA substituiu o conceito rígido de 'Fonte Principal de Informação' do AACR2 pelo princípio de que o próprio recurso em sua totalidade é a fonte primária, com ordem de preferência (dando preferência à página com título formal), mas aceitando informações encontradas em qualquer parte do recurso sem a exigência obsessiva de colchetes do passado."
  },
  {
    id: "q97",
    moduleId: "m20",
    text: "Os Sistemas Integrados de Gestão de Bibliotecas (SIGB) operam integrando múltiplos módulos funcionais (catalogação, circulação, aquisição, controle de periódicos e OPAC). No entanto, quando se trata de implementar a custódia e a PRESERVAÇÃO DIGITAL de longo prazo de coleções de teses e dissertações nato-digitais segundo o modelo OAIS, a boa prática e a arquitetura tecnológica recomendam:",
    options: {
      A: "Utilizar o módulo de empréstimos do SIGB para armazenar os arquivos digitais em pastas compartilhadas de rede sem controle de versão.",
      B: "Integrar o SIGB a um software especializado de Repositório Digital (como DSpace ou Archivematica), próprio para curadoria e coleta OAI-PMH.",
      C: "Converter todo o acervo digital em microfichas analógicas de acetato de celulose para armazenamento em gaveteiros de aço blindado.",
      D: "Bloquear o compartilhamento de metadados em rede para impedir que robôs de busca indexem as pesquisas acadêmicas da universidade.",
      E: "Desativar os protocolos Z39.50 e ISO 2709 para evitar o consumo de largura de banda nos servidores de catalogação cooperativa."
    },
    correctAnswer: "B",
    justification: "Sistemas SIGB (como Koha, Pergamum, SophiA) são concebidos para gestão bibliográfica e circulação de exemplares. Eles não possuem a arquitetura de pacotes (SIP, AIP, DIP), esquemas PREMIS e controle de integridade exigidos para preservação digital de longo prazo, demandando plataformas especializadas de repositório (DSpace, Tainacan, Archivematica)."
  },
  {
    id: "q98",
    moduleId: "m06",
    text: "Na reflexão sociológica contemporânea sobre a 'Sociedade da Informação e do Conhecimento' e a era da rede (conforme teorizado por Manuel Castells), um dos maiores desafios estruturais que as bibliotecas universitárias e públicas são convocadas a mitigar em suas comunidades é:",
    options: {
      A: "A diminuição no consumo de energia elétrica em razão da desativação progressiva de computadores e terminais de autoatendimento.",
      B: "O risco de esgotamento prematuro do papel sulfite nas dependências da universidade devido à expansão das reprografias.",
      C: "A 'Exclusão Digital' (Digital Divide), abismo que marginaliza indivíduos e grupos sociais sem competências ou acesso às tecnologias da informação.",
      D: "A substituição total de cursos presenciais de ensino superior por treinamentos virtuais de curta duração sem supervisão docente.",
      E: "O encerramento definitivo das atividades de editoras comerciais em decorrência da universalização do protocolo Z39.50."
    },
    correctAnswer: "C",
    justification: "A Exclusão Digital (Digital Divide) é a assimetria que separa cidadãos com pleno acesso e letramento informacional/tecnológico daqueles desprovidos de conectividade e habilidades críticas, perpetuando desigualdades socioeconômicas. As bibliotecas desempenham papel central na inclusão e justiça informacional."
  },
  {
    id: "q99",
    moduleId: "m09",
    text: "Nos métodos de coleta de dados empíricos em Estudos de Usuários em bibliotecas universitárias de grande porte, quando o objetivo da pesquisa é levantar de forma quantitativa e padronizada as opiniões, hábitos de leitura e níveis de satisfação de milhares de estudantes com agilidade e baixo custo operacional, o instrumento metodológico mais adequado é o:",
    options: {
      A: "Grupo Focal (Focus Group), que reúne pequenos grupos de cinco a oito participantes para discussões aprofundadas mediadas por moderador.",
      B: "Método do Incidente Crítico, que analisa detalhadamente relatos retrospectivos de eventos traumáticos específicos no balcão de referência.",
      C: "Técnica Delphi, que realiza sucessivas rodadas de questionamento anônimo entre peritos e especialistas de renome internacional.",
      D: "Questionário Estruturado (Survey online), instrumento com perguntas padronizadas que permite amostragem ampla e tratamento estatístico ágil.",
      E: "Observação Participante Contínua, na qual o pesquisador convive diariamente com os alunos registrando notas em diário de campo."
    },
    correctAnswer: "D",
    justification: "O Questionário Estruturado (Survey) é a técnica quantitativa de coleta por excelência quando se busca atingir populações extensas (como o corpo discente de uma universidade) com baixo custo, rapidez de aplicação e facilidade de tabulação estatística dos dados."
  },
  {
    id: "q100",
    moduleId: "m22",
    text: "No contexto das políticas de tecnologia da informação e soberania das instituições públicas, muitas bibliotecas universitárias têm optado por sistemas de código aberto como o Koha. A característica fundadora que define tecnicamente e juridicamente o 'Software Livre' (Free Software, segundo as quatro liberdades da Free Software Foundation) e o distingue do software proprietário reside no fato de que:",
    options: {
      A: "É expressamente vedado qualquer tipo de suporte técnico remunerado ou remuneração de profissionais que atuem no desenvolvimento.",
      B: "O sistema opera unicamente em servidores instalados fisicamente no campus, sendo proibido o uso de infraestruturas em nuvem híbrida.",
      C: "Os dados do catálogo bibliográfico devem ser compulsoriamente eliminados a cada ano letivo para garantir o sigilo de privacidade discente.",
      D: "O software funciona unicamente por meio de comandos em modo texto, sendo tecnicamente proibida a criação de interfaces gráficas na web.",
      E: "O usuário e a instituição têm a liberdade jurídica de executar, estudar o código-fonte, modificar e redistribuir cópias do sistema sem restrições."
    },
    correctAnswer: "E",
    justification: "Segundo a Free Software Foundation (FSF), Software Livre define-se por quatro liberdades essenciais: Liberdade 0 (executar o programa para qualquer propósito); Liberdade 1 (estudar o funcionamento e modificá-lo via acesso ao código-fonte); Liberdade 2 (redistribuir cópias); Liberdade 3 (melhorar o programa e liberar os aprimoramentos ao público)."
  }
];

export const allQuestions: Question[] = [
  ...q1_to_25,
  ...q26_to_50,
  ...q51_to_75,
  ...q76_to_100
];
