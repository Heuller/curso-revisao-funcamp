import type { Question } from '../questions1';

export const simuladoLPQuestions: Question[] = [
  // ==========================================
  // BLOCO 1: QUESTÕES 01 A 10
  // Gabaritos: 1: C, 2: A, 3: E, 4: B, 5: D, 6: B, 7: E, 8: A, 9: D, 10: C
  // ==========================================
  {
    id: "lp_sim_01",
    moduleId: "lp01",
    text: "Considere o seguinte trecho adaptado de um ensaio acadêmico: 'Apesar de a inteligência artificial acelerar a extração preliminar de metadados, a validação humana pelos bibliotecários continua indispensável para mitigar as distorções éticas dos algoritmos'. Depreende-se da leitura atenta do texto que:",
    options: {
      A: "A inteligência artificial substitui de maneira definitiva e integral o trabalho dos profissionais da informação.",
      B: "A catalogação automatizada é desprovida de utilidade prática na rotina diária das bibliotecas modernas.",
      C: "A intervenção humana atua como filtro crítico e ético insubstituível diante das limitações tecnológicas.",
      D: "Os algoritmos computacionais operam sem quaisquer vieses ou distorções nos processos de recuperação.",
      E: "A extração de metadados demanda o abandono imediato de sistemas informatizados de busca digital."
    },
    correctAnswer: "C",
    justification: "O texto afirma expressamente que a validação humana é indispensável para mitigar (atenuar/corrigir) as distorções éticas dos algoritmos. Portanto, a intervenção humana age como mediadora ética necessária. As demais opções trazem distorções, negações diretas ou extrapolações infundadas."
  },
  {
    id: "lp_sim_02",
    moduleId: "lp01",
    text: "No enunciado: 'O novo diretor da biblioteca finalmente parou de impor restrições injustificadas ao acesso dos alunos da graduação aos terminais de pesquisa', o emprego da forma verbal 'parou de impor' gera como pressuposto linguístico irrefutável:",
    options: {
      A: "O fato de que o diretor anterior ou o próprio diretor praticava anteriormente tais restrições ao público.",
      B: "A certeza matemática de que os alunos da graduação nunca frequentaram os terminais antes da posse.",
      C: "A decisão unânime do conselho departamental em punir disciplinarmente os funcionários da recepção.",
      D: "A conclusão inequívoca de que os computadores da instituição se encontram obsoletos e avariados.",
      E: "A suspeita infundada de que o acesso aos livros raros foi cancelado por determinação superior."
    },
    correctAnswer: "A",
    justification: "Verbos que indicam mudança ou cessação de estado (como 'parar de') funcionam como operadores formais de pressuposição. Dizer que ele 'parou de impor' restrições pressupõe indiscutivelmente que as restrições existiam e vinham ocorrendo no passado."
  },
  {
    id: "lp_sim_03",
    moduleId: "lp01",
    text: "Em provas de alto rendimento formuladas para universidades públicas de prestígio, a distinção tipológica baseia-se na dinâmica discursiva. Assinale a opção que apresenta um fragmento com predominância da tipologia DESCRITIVA:",
    options: {
      A: "O aluno entrou apressado na sala, pegou a ficha de inscrição, assinou o protocolo e retirou-se em silêncio.",
      B: "A leitura é um direito fundamental inalienável, visto que amplia a consciência crítica de toda a cidadania.",
      C: "Preencha todos os campos do formulário eletrônico em letra maiúscula e anexe o comprovante em PDF.",
      D: "A universidade foi fundada na década de sessenta com a missão precípua de alavancar o desenvolvimento paulista.",
      E: "A sala do acervo raro tinha paredes de mogno escuro, aroma suave de alfazema e estantes altas de vidro fosco."
    },
    correctAnswer: "E",
    justification: "O texto descritivo caracteriza-se pela estática temporal, retrato sensorial (visual, olfativo), predomínio de substantivos qualificados por adjetivos e verbos de estado ('tinha paredes de mogno escuro, aroma de alfazema, estantes altas'). As outras são narrativa (A), argumentativa (B), injuntiva (C) e expositiva (D)."
  },
  {
    id: "lp_sim_04",
    moduleId: "lp02",
    text: "Considere o período: 'A Universidade Estadual de Campinas concluiu o processo de avaliação institucional. A renomada INSTITUIÇÃO ampliou seus investimentos em pesquisa'. O termo em destaque funciona como recurso coesivo de:",
    options: {
      A: "Catáfora sintática de antecipação temporal.",
      B: "Hiperonímia lexical em remissão anafórica.",
      C: "Elipse oracional de verbo de ligação direto.",
      D: "Antonímia contextual de valor restritivo.",
      E: "Polissíndeto enfático em período coordenado."
    },
    correctAnswer: "B",
    justification: "'Instituição' é um vocábulo de extensão semântica maior (hiperônimo) empregado para recuperar anaforicamente o termo específico antecedente ('Universidade Estadual de Campinas' - hipônimo), garantindo a coesão sem repetição monótona."
  },
  {
    id: "lp_sim_05",
    moduleId: "lp02",
    text: "Assinale a alternativa em que a substituição da locução conjuntiva em destaque preserva rigorosamente o sentido e a correção gramatical da frase: 'O projeto foi homologado, NÃO OBSTANTE houvesse divergências':",
    options: {
      A: "O projeto foi homologado, por conseguinte houvesse divergências.",
      B: "O projeto foi homologado, visto que houvesse divergências pontuais.",
      C: "O projeto foi homologado, consoante houvesse divergências técnicas.",
      D: "O projeto foi homologado, embora houvesse divergências conceituais.",
      E: "O projeto foi homologado, à medida que houvesse divergências sérias."
    },
    correctAnswer: "D",
    justification: "'Não obstante' rege verbo no subjuntivo e possui valor concessivo (= embora, ainda que). Portanto, a permuta por 'embora' preserva com exatidão tanto o valor semântico de quebra de expectativa quanto o modo verbal."
  },
  {
    id: "lp_sim_06",
    moduleId: "lp03",
    text: "'Conforme atestam os dados divulgados no relatório anual da UNESCO (2024), mais de 40% das bibliotecas em países em desenvolvimento enfrentam grave escassez orçamentária'. Esse excerto fundamenta-se simultaneamente em argumentos de:",
    options: {
      A: "Tradição popular empírica e analogia ficcional lírica.",
      B: "Autoridade institucional legítima e evidências estatísticas.",
      C: "Ataque ad hominem e falácia do espantalho generalizada.",
      D: "Causa aparente sem nexo e circularidade tautológica pura.",
      E: "Exemplificação isolada e desqualificação de testemunhas."
    },
    correctAnswer: "B",
    justification: "A citação da UNESCO ancora a legitimidade técnica de um organismo internacional de prestígio (autoridade), enquanto a apresentação do percentual de 40% confere prova empírica mensurável (evidência factual/estatística)."
  },
  {
    id: "lp_sim_07",
    moduleId: "lp03",
    text: "Durante um debate acadêmico, um debatedor afirma: 'Não devemos apoiar o plano de aquisições sugerido pelo bibliotecário, pois todos sabem que ele é uma pessoa extremamente arrogante em reuniões'. Essa linha de raciocínio incorre na falácia de:",
    options: {
      A: "Petição de princípio circular intransponível.",
      B: "Falso dilema por bifurcação de premissas reais.",
      C: "Apelo à ignorância fundamentado em dados vagos.",
      D: "Generalização apressada por amostragem ínfima.",
      E: "Ataque à pessoa (Argumentum ad Hominem)."
    },
    correctAnswer: "E",
    justification: "A falácia Ad Hominem busca refutar uma tese por meio do ataque moral ou psicológico à pessoa de quem a defendeu, esquivando-se do debate sobre o mérito objetivo da proposta apresentada."
  },
  {
    id: "lp_sim_08",
    moduleId: "lp04",
    text: "Considere o seguinte parágrafo retirado de um ensaio acadêmico sobre a função social das bibliotecas públicas: 'A democratização do acesso aos repositórios científicos constitui o alicerce da soberania intelectual de um país. Sem ela, os avanços gerados nos laboratórios permanecem confinados a grupos privilegiados, perpetuando abismos sociais e inviabilizando a tomada de decisões públicas baseadas em evidências empíricas'. Na arquitetura composicional desse parágrafo, o primeiro período atua como:",
    options: {
      A: "Tópico frasal afirmativo que declara a ideia-núcleo desdobrada nos períodos subsequentes.",
      B: "Contra-argumento de concessão que antecipa a tese defendida pelos opositores do autor.",
      C: "Aposto discriminativo puramente descritivo voltado a detalhar a infraestrutura predial.",
      D: "Exemplificação factual de amostragem quantitativa destinada a fundamentar a pesquisa.",
      E: "Conclusão sintetizadora que encerra a cadeia de raciocínio iniciada em seções prévias."
    },
    correctAnswer: "A",
    justification: "O primeiro período apresenta a tese mestra em torno da qual todos os outros segmentos do parágrafo giram (ideia-guia/núcleo). Essa formulação inicial direta é a definição clássica do tópico frasal segundo Othon M. Garcia."
  },
  {
    id: "lp_sim_09",
    moduleId: "lp04",
    text: "Em artigos de opinião e ensaios críticos, o parágrafo argumentativo pode ser iniciado por diferentes modalidades de tópico frasal. Assinale o excerto em que o desenvolvimento argumentativo é introduzido por meio de uma INTERROGAÇÃO RETÓRICA:",
    options: {
      A: "A consolidação da inteligência artificial generativa transforma a catalogação em rotina híbrida.",
      B: "Embora haja avanços tecnológicos expressivos, a exclusão digital persiste nas periferias do Estado.",
      C: "Três diretrizes fundamentam o novo plano diretor da universidade: inclusão, mérito e sustentabilidade.",
      D: "É concebível que uma universidade pública de excelência ignore as disparidades no acesso à internet?",
      E: "Conforme atestam os dados divulgados pela pró-reitoria de pesquisa, a produção docente bateu recordes."
    },
    correctAnswer: "D",
    justification: "A interrogação retórica é a pergunta provocativa formulada no início do parágrafo com o objetivo de despertar a reflexão do leitor e cuja resposta fundamentará toda a argumentação subsequente."
  },
  {
    id: "lp_sim_10",
    moduleId: "lp05",
    text: "A exploração dos recursos de conotação e denotação é recorrente nas provas da Unicamp. Leia a seguinte passagem de uma crônica: 'Os livros da biblioteca eram ilhas de silêncio navegando em um mar de tempestades sonoras do campus universitário'. No contexto discursivo, a expressão sublinhada 'ilhas de silêncio' foi empregada com valor:",
    options: {
      A: "Denotativo e geográfico, indicando a localização física de prédios isolados na cidade universitária.",
      B: "Injuntivo e prescritivo, determinando o recolhimento imediato dos estudantes aos seus dormitórios.",
      C: "Conotativo e metafórico, sugerindo que o acervo constituía refúgio de tranquilidade e concentração.",
      D: "Eufêmico e corretivo, atenuando a precariedade das instalações de alvenaria afetadas pelas chuvas.",
      E: "Hiperbólico e irônico, ridicularizando a recusa dos alunos em dialogar com os servidores do setor."
    },
    correctAnswer: "C",
    justification: "Chamar os livros de 'ilhas de silêncio' diante de um 'mar de tempestades sonoras' é um emprego flagrantemente metafórico e figurado (conotativo), evocando a ideia poética de refúgio de serenidade e reflexão no ambiente acadêmico."
  },

  // ==========================================
  // BLOCO 2: QUESTÕES 11 A 20
  // Gabaritos: 11: A, 12: D, 13: E, 14: B, 15: C, 16: D, 17: B, 18: A, 19: E, 20: C
  // ==========================================
  {
    id: "lp_sim_11",
    moduleId: "lp05",
    text: "Em relação ao gênero textual 'ofício' utilizado na comunicação universitária e administrativa da Unicamp, a norma-padrão prescreve o uso obrigatório da linguagem:",
    options: {
      A: "Denotativa, privilegiando a clareza, a precisão terminológica e a objetividade factual.",
      B: "Conotativa, incentivando jogos poéticos de palavras e ambiguidades estilísticas sutis.",
      C: "Coloquial informal, reproduzindo as abreviações e gírias típicas de conversas informais.",
      D: "Lírica barroca, empregando antíteses e hipérbatos complexos para impressionar o leitor.",
      E: "Mística doutrinária, substituindo pareceres técnicos por parábolas de fundo religioso."
    },
    correctAnswer: "A",
    justification: "A redação oficial rege-se pelos princípios da clareza, precisão, impessoalidade e concisão, exigindo o emprego exclusivo da linguagem denotativa (literal) e banindo conotações e expressões dúbias."
  },
  {
    id: "lp_sim_12",
    moduleId: "lp06",
    text: "Considere a frase: 'O silêncio ensurdecedor da sala de estudos foi quebrado apenas pelo gotejar monótono da chuva'. A figura de linguagem presente na expressão 'silêncio ensurdecedor' classifica-se como:",
    options: {
      A: "Eufemismo, amenizando a gravidade de um evento violento ocorrido no campus universitário.",
      B: "Metonímia, permutando a causa pelo efeito de forma quantitativa e matematicamente exata.",
      C: "Hipérbole, reduzindo a importância do ruído provocado pelos calouros no auditório central.",
      D: "Paradoxo (oxímoro), unindo termos mutuamente excludentes que geram uma contradição fática.",
      E: "Prosopopeia, conferindo sentimentos biológicos humanos aos móveis da recepção geral."
    },
    correctAnswer: "D",
    justification: "O paradoxo reúne ideias inconciliáveis na lógica material (o silêncio, por definição, é a ausência de som, não podendo 'ensurdecer'). A contradição aparente produz um efeito expressivo e poético profundo."
  },
  {
    id: "lp_sim_13",
    moduleId: "lp06",
    text: "Assinale a alternativa que apresenta um exemplo inconteste de METONÍMIA:",
    options: {
      A: "Aquele jovem concurseiro é forte como um touro selvagem nas sessões de estudo.",
      B: "Os livros da estante choravam lágrimas amargas de poeira durante o longo abandono.",
      C: "O candidato quase morreu de sede enquanto aguardava a abertura dos portões do prédio.",
      D: "Ela contemplava a escuridão da noite sonhando com a claridade luminosa da manhã.",
      E: "O estudante devorou todo o Machado de Assis antes de redigir a sua dissertação final."
    },
    correctAnswer: "E",
    justification: "Em 'devorou todo o Machado de Assis', ocorreu a troca do autor pela sua obra literária (o estudante leu os livros do autor, e não a pessoa física), caracterizando a metonímia clássica por contiguidade."
  },
  {
    id: "lp_sim_14",
    moduleId: "lp06",
    text: "Ao ser questionado sobre o paradeiro da verba extraviada, o réu declarou: 'Reconheço que faltei com a verdade em meu depoimento inicial'. A figura de linguagem empregada nessa fala denomina-se:",
    options: {
      A: "Catacrese, preenchendo a carência de um termo próprio com metáfora já cristalizada.",
      B: "Eufemismo, atenuando uma conduta desonesta mediante expressão mais branda e polida.",
      C: "Pleonasmo enfático, reiterando desnecessariamente o mesmo núcleo na oração subordinada.",
      D: "Sinestesia expressiva, mesclando dados sensoriais de audição e visão na mesma proposição.",
      E: "Anáfora estilística, repetindo palavras no início de sucessivos períodos dissertativos."
    },
    correctAnswer: "B",
    justification: "O eufemismo é a figura que atenua termos crus, agressivos ou vergonhosos ('faltou com a verdade' foi empregado para suavizar o verbo 'mentiu')."
  },
  {
    id: "lp_sim_15",
    moduleId: "lp07",
    text: "Em relação ao emprego dos pronomes oblíquos átonos com formas verbais terminadas em sons nasais ou consoantes específicas, assinale a opção inteiramente correta segundo a norma-padrão:",
    options: {
      A: "Os técnicos encontraram o documento e guardaram-no na pasta = Os técnicos encontraram ele.",
      B: "O diretor quis fazer o relatório com calma = O diretor quis fazê-o com extrema calma.",
      C: "Os avaliadores receberam a tese e avaliaram-na com rigor técnico e imparcialidade total.",
      D: "A comissão redigiu o edital e publicou-lo no portal institucional sem autorização prévia.",
      E: "O coordenador trouxe as certidões e entregou-as para mim assinar com caneta preta."
    },
    correctAnswer: "C",
    justification: "Quando a forma verbal termina em som nasal (-m, -ão, -õe), os pronomes 'o, a, os, as' transformam-se em '-no, -na, -nos, -nas' ('avaliaram + a = avaliaram-na'). A opção C está irretocável. Nas outras: A tem pronome reto como objeto; B deveria ser 'fazê-lo'; D deveria ser 'publicou-o'; E tem 'para mim assinar' (erro crasso, deve ser 'para eu assinar')."
  },
  {
    id: "lp_sim_16",
    moduleId: "lp07",
    text: "Considere a frase: 'As funcionárias estavam MEIO apreensivas diante de BASTANTES tarefas pendentes'. Quanto à flexão e classe morfológica das palavras destacadas, é correto afirmar:",
    options: {
      A: "Ambas as palavras deveriam obrigatoriamente flexionar-se no plural por serem adjetivos.",
      B: "Ambas as palavras são estritamente invariáveis por exercerem a função de advérbios de modo.",
      C: "'Meio' é adjetivo biforme concordante e 'bastantes' é numeral multiplicativo circunstancial.",
      D: "'Meio' é advérbio de intensidade (invariável) e 'bastantes' é pronome indefinido no plural.",
      E: "A frase apresenta erro grave, pois a forma culta correta deveria ser 'meias apreensivas'."
    },
    correctAnswer: "D",
    justification: "'Meio' equivale a 'um pouco' e modifica o adjetivo 'apreensivas', sendo advérbio (invariável). Já 'bastantes' determina o substantivo 'tarefas' no plural (= muitas tarefas), flexionando-se regularmente como pronome indefinido."
  },
  {
    id: "lp_sim_17",
    moduleId: "lp07",
    text: "Em um parecer emitido por uma câmara de pesquisa da Unicamp, avaliou-se a seguinte passagem: 'Quando os novos técnicos chegaram ao departamento, o coordenador convidou-os para [...] e assegurou que nada havia de pendente entre [...] e [...]; além disso, afirmou que não [...] pouparia esforços para viabilizar as pesquisas'. De acordo com a norma-padrão da língua portuguesa quanto ao emprego de pronomes, as lacunas devem ser preenchidas, correta e respectivamente, por:",
    options: {
      A: "eles participarem da reunião — eu e ti — lhes",
      B: "eles participarem da reunião — mim e ti — lhes",
      C: "eles participarem da reunião — mim e tu — os",
      D: "eles participarem da reunião — eu e você — lhes",
      E: "eles participarem da reunião — mim e você — os"
    },
    correctAnswer: "B",
    justification: "1ª lacuna: 'para ELES participarem' (sujeito do verbo no infinitivo flexionado 'participarem', exigindo pronome reto); 2ª e 3ª lacunas: 'entre MIM e TI' (após preposição como 'entre', exigem-se pronomes oblíquos tônicos); 4ª lacuna: 'não LHES pouparia esforços' (o pronome 'lhes' funciona como objeto indireto [poupar algo a alguém] e a palavra negativa 'não' exige próclise obrigatória)."
  },
  {
    id: "lp_sim_18",
    moduleId: "lp08",
    text: "Assinale a frase que respeita plenamente os preceitos de clareza, concisão e exatidão vocabular exigidos na redação oficial:",
    options: {
      A: "Encaminho a Vossa Senhoria o parecer conclusivo referente à reforma do auditório.",
      B: "Venho por meio deste informar que a coisa toda já foi resolvida a nível de reitoria.",
      C: "O coordenador viu o chefe em seu gabinete e disse que ia dar um jeito no processo.",
      D: "Temos certeza absoluta de que uma nova criação inédita resolverá os velhos problemas.",
      E: "A publicação da deliberação gerou grande comoção na administração da congregação."
    },
    correctAnswer: "A",
    justification: "A opção A é precisa, sóbria, concisa e atende ao padrão culto. As outras trazem jargões e imprecisões ('coisa', 'a nível de' em B), ambiguidade possessiva ('em seu gabinete' em C), pleonasmos viciosos ('certeza absoluta', 'criação inédita' em D) e eco vicioso de rimas ('-ção' em E)."
  },
  {
    id: "lp_sim_19",
    moduleId: "lp08",
    text: "No trecho de um relatório técnico institucional: 'O coordenador solicitou ao secretário a documentação do seu projeto para inclusão na pauta da congregação', identifica-se uma falha de clareza textual decorrente de:",
    options: {
      A: "Arcaísmo vocabular em desuso, dificultando o entendimento do vocabulário pelo público leigo.",
      B: "Pleonasmo enfático vicioso, reiterando sem necessidade o núcleo temático da oração principal.",
      C: "Cacofonia acústica desagradável, provocada pelo encontro fortuito de sílabas homófonas no fim.",
      D: "Inadequação diafásica de registro, mesclando termos da gíria juvenil com a redação burocrática.",
      E: "Ambiguidade estrutural (anfibologia), provocada pela imprecisão do pronome possessivo 'seu'."
    },
    correctAnswer: "E",
    justification: "O emprego do pronome possessivo de terceira pessoa 'seu projeto' gera ambiguidade insolúvel sem contexto adicional: não se sabe se o projeto pertence ao coordenador ou ao secretário. Isso caracteriza anfibologia/ambiguidade sintática."
  },
  {
    id: "lp_sim_20",
    moduleId: "lp09",
    text: "A concordância de verbos impessoais em períodos compostos complexos é um dos temas preferidos da Unicamp e Funcamp. Assinale o período inteiramente CORRETO quanto à flexão verbal segundo o padrão culto:",
    options: {
      A: "Houveram diversos questionamentos técnicos durante a realização da audiência pública da reitoria.",
      B: "Se houvessem mais recursos destinados à capacitação profissional, novos cursos seriam abertos.",
      C: "Havia meses que a congregação da faculdade não deliberava sobre a modernização dos currículos.",
      D: "Devem haver centenas de teses de doutorado aguardando a validação final da comissão examinadora.",
      E: "Nas prateleiras centrais do arquivo histórico da universidade haviam documentos do século XIX."
    },
    correctAnswer: "C",
    justification: "O verbo 'haver', quando indica tempo transcorrido ('Havia meses...') ou quando significa 'existir', é impessoal: não tem sujeito e fica compulsoriamente na 3ª pessoa do singular. Em D, o verbo auxiliar em locução com verbo impessoal também se mantém no singular ('Deve haver...'). As opções A, B, D e E contêm flexões plurais indevidas."
  },

  // ==========================================
  // BLOCO 3: QUESTÕES 21 A 30
  // Gabaritos: 21: A, 22: D, 23: B, 24: E, 25: C, 26: A, 27: D, 28: B, 29: E, 30: C
  // ==========================================
  {
    id: "lp_sim_21",
    moduleId: "lp09",
    text: "Considere o seguinte período extraído de um parecer da Procuradoria Geral da Unicamp sobre litígios contratuais: 'Caso a comissão de sindicância [...] a instrução probatória no prazo legal e a reitoria [...] os recursos de ofício, a deliberação homologatória [...] em vigor imediatamente'. Assinale a alternativa que preenche as lacunas com a rigorosa correlação de tempos e modos verbais exigida na norma culta:",
    options: {
      A: "conclua — acolha — entrará",
      B: "conclua — acolhesse — entraria",
      C: "concluísse — acolha — entrará",
      D: "concluir — acolher — entrava",
      E: "conclua — acolhesse — entrava"
    },
    correctAnswer: "A",
    justification: "A conjunção subordinativa condicional 'caso' exige o modo subjuntivo no tempo presente ('caso conclua... e acolha...'). Para manter a correlação com a consequência futura certa, a oração principal deve vir no futuro do presente do indicativo ('entrará em vigor')."
  },
  {
    id: "lp_sim_22",
    moduleId: "lp09",
    text: "No que se refere ao futuro do subjuntivo dos verbos VER (enxergar) e VIR (deslocar-se), assinale a frase perfeitamente correta:",
    options: {
      A: "Quando você ver o resultado da homologação no mural, avise seus colegas de sala.",
      B: "Assim que a comissão vir a Campinas para a visita técnica, faremos a recepção.",
      C: "Se ele não ver os arquivos digitais na pasta compartilhada, deverá contatar o suporte.",
      D: "Quando você vir o documento oficial na secretaria, solicite uma cópia autenticada.",
      E: "Se eles virem de ônibus para a universidade, chegarão atrasados para o seminário."
    },
    correctAnswer: "D",
    justification: "O futuro do subjuntivo do verbo VER é: quando eu VIR, tu VIRES, ele VIR, nós VIRMOS, eles VIREM. Já o futuro do subjuntivo de VIR é: quando eu VIER, tu VIERES, ele VIER, nós VIERMOS, eles VIEREM. A opção D emprega acertadamente 'quando você vir' (de enxergar o documento)."
  },
  {
    id: "lp_sim_23",
    moduleId: "lp10",
    text: "Em provas de alto rendimento da Unicamp e Funcamp, a análise do sinal indicativo de crase é indissociável da regência verbal e nominal. Assinale o período em que o acento grave foi empregado em DESACORDO com as normas gramaticais vigentes:",
    options: {
      A: "A direção do Instituto de Física concedeu acesso irrestrito à pesquisadora estrangeira.",
      B: "A reitoria da universidade comprometeu-se à divulgar os novos editais na próxima semana.",
      C: "Os dados tabulados pelo departamento de informática eram semelhantes àqueles de 2023.",
      D: "O colegiado docente permaneceu reunido na sala de deliberações das 14 horas às 18 horas.",
      E: "A biblioteca central prestou assistência especializada à comunidade acadêmica de Campinas."
    },
    correctAnswer: "B",
    justification: "Em 'comprometeu-se à divulgar', a palavra 'divulgar' é um verbo no infinitivo. É preceito elementar da gramática normativa que o sinal de crase é rigorosamente proibido diante de verbos, visto que formas verbais não admitem artigo feminino."
  },
  {
    id: "lp_sim_24",
    moduleId: "lp10",
    text: "Assinale a frase em que o uso do acento grave indicador de crase é estritamente FACULTATIVO:",
    options: {
      A: "Fizemos referência às diretrizes pedagógicas estabelecidas pelo ministério.",
      B: "O coordenador comprou todos os materiais necessários à vista no comércio local.",
      C: "O candidato respondeu a perguntas complexas formuladas pelos examinadores da banca.",
      D: "Todos os inscritos assistiram à magnífica conferência proferida pelo professor emérito.",
      E: "O servidor encaminhou os relatórios técnicos a sua supervisora imediata no setor."
    },
    correctAnswer: "E",
    justification: "Antes de pronome possessivo feminino singular ('sua'), a presença do artigo é opcional, tornando o uso da crase puramente facultativo: 'a sua supervisora' ou 'à sua supervisora' são ambas válidas."
  },
  {
    id: "lp_sim_25",
    moduleId: "lp10",
    text: "Considere a passagem de uma resolução acadêmica: 'O acesso às bases de dados internacionais foi facultado [...] pesquisadoras visitantes, estendendo-se [...] alunas de pós-graduação e subordinando-se [...] normas gerais de segurança da informação'. As lacunas do excerto devem ser preenchidas, correta e respectivamente, por:",
    options: {
      A: "às — a — às",
      B: "as — à — as",
      C: "a — às — às",
      D: "à — a — às",
      E: "a — às — as"
    },
    correctAnswer: "C",
    justification: "1ª lacuna: 'a pesquisadoras' (preposição simples sem artigo diante de palavra no plural = sem crase); 2ª lacuna: 'estendendo-se às alunas' (regência de estender-se a + artigo plural 'as' = crase obrigatória); 3ª lacuna: 'subordinando-se às normas' (regência de subordinar-se a + artigo plural 'as' = crase obrigatória)."
  },
  {
    id: "lp_sim_26",
    moduleId: "lp11",
    text: "Assinale a frase que atende perfeitamente às regras de concordância verbal com a partícula apassivadora 'SE':",
    options: {
      A: "Divulgaram-se os nomes dos candidatos aprovados na primeira fase do concurso da Unicamp.",
      B: "Divulgou-se os nomes dos candidatos aprovados na primeira fase do concurso da Unicamp.",
      C: "Precisam-se de novos técnicos laboratoriais para atuarem nas pesquisas de bioquímica.",
      D: "Tratam-se de reivindicações legítimas apresentadas pela associação dos docentes.",
      E: "Obedeceu-se aos critérios regimentais que haviam sidos propostos pela comissão."
    },
    correctAnswer: "A",
    justification: "Em 'Divulgaram-se os nomes...', o verbo 'divulgar' é Transitivo Direto (VTD). O pronome 'se' é partícula apassivadora e 'os nomes dos candidatos aprovados' é o sujeito paciente plural. O verbo deve concordar obrigatoriamente no plural ('divulgaram-se'). Em C e D, os verbos são VTI (com preposição), exigindo verbo no singular."
  },
  {
    id: "lp_sim_27",
    moduleId: "lp11",
    text: "Considere as frases sobre concordância nominal: I. 'As certidões seguem ANEXAS'; II. 'As certidões seguem EM ANEXO'; III. 'Havia MENOS pessoas no auditório hoje'. Quanto à correção gramatical:",
    options: {
      A: "Apenas a frase I está correta segundo a tradição normativa da língua portuguesa.",
      B: "Apenas as frases I e III estão corretas, pois 'em anexo' deve sempre flexionar-se.",
      C: "Apenas a frase II está correta, visto que 'anexo' é um vocábulo que não admite flexão.",
      D: "Todas as frases I, II e III estão plenamente corretas segundo a norma-padrão.",
      E: "Todas as frases contêm desvios de concordância condenados pela gramática formal."
    },
    correctAnswer: "D",
    justification: "'Anexo' é adjetivo que concorda em gênero e número ('anexas as certidões'). A locução adverbial 'em anexo' é invariável ('seguem em anexo'). O pronome 'menos' é estritamente invariável ('menos pessoas'). Todas estão corretas."
  },
  {
    id: "lp_sim_28",
    moduleId: "lp11",
    text: "Assinale a alternativa que apresenta concordância verbal em conformidade com as regras para o verbo FAZER indicando tempo decorrido:",
    options: {
      A: "Fazem quase dez anos que a biblioteca universitária passou pela última grande reforma.",
      B: "Faz quase dez anos que a biblioteca universitária passou pela última grande reforma.",
      C: "Vão fazerem três meses que o resultado definitivo do concurso público foi homologado.",
      D: "Haverão de fazerem muitos anos até que todas as obras raras sejam totalmente catalogadas.",
      E: "Deveriam fazerem duas semanas que o novo sistema de empréstimos entrou em operação."
    },
    correctAnswer: "B",
    justification: "O verbo 'fazer', quando indica tempo decorrido, é impessoal: não possui sujeito e deve permanecer compulsoriamente na 3ª pessoa do singular ('Faz quase dez anos'). Dizer 'Fazem dez anos' é erro clássico em provas."
  },
  {
    id: "lp_sim_29",
    moduleId: "lp12",
    text: "Na oração: 'O diretor da faculdade julgou a proposta da comissão EXCELENTE', o termo destacado exerce a função sintática de:",
    options: {
      A: "Adjunto Adnominal, qualificando permanentemente o núcleo simples do sujeito.",
      B: "Predicativo do Sujeito, concordando em gênero e número com o termo 'diretor'.",
      C: "Complemento Nominal preposicionado, completando o sentido de adjetivo abstrato.",
      D: "Objeto Direto pleonástico, reiterando o substantivo para fins de ênfase expressiva.",
      E: "Predicativo do Objeto, qualificando o objeto direto 'a proposta da comissão'."
    },
    correctAnswer: "E",
    justification: "'Excelente' qualifica o objeto direto ('a proposta da comissão') mediante atribuição realizada pelo verbo transitivo 'julgou'. Por conseguinte, exerce a função de Predicativo do Objeto."
  },
  {
    id: "lp_sim_30",
    moduleId: "lp12",
    text: "Considere as frases: I. 'A dedicação DO PROFESSOR comoveu os alunos'; II. 'A resposta AO PROFESSOR foi encaminhada pela congregação'. Os termos em destaque exercem, respectivamente, a função de:",
    options: {
      A: "Complemento Nominal em ambas as ocorrências, por serem introduzidos por preposição.",
      B: "Objeto Indireto na primeira oração e Agente da Passiva analítica na segunda frase.",
      C: "Adjunto Adnominal (sentido ativo: o professor se dedica) e Complemento Nominal (sentido paciente).",
      D: "Predicativo do Sujeito composto em I e Adjunto Adverbial circunstancial na frase II.",
      E: "Sujeito Simples preposicionado em I e Objeto Direto preposicionado na segunda ocorrência."
    },
    correctAnswer: "C",
    justification: "Em I, 'do professor' é Adjunto Adnominal porque possui sentido ativo (o professor pratica a ação de se dedicar). Em II, 'ao professor' é Complemento Nominal porque possui sentido paciente (o professor recebe a resposta)."
  },

  // ==========================================
  // BLOCO 4: QUESTÕES 31 A 40
  // Gabaritos: 31: A, 32: D, 33: B, 34: E, 35: C, 36: A, 37: D, 38: B, 39: E, 40: C
  // ==========================================
  {
    id: "lp_sim_31",
    moduleId: "lp12",
    text: "No período 'Convirá aos gestores das bibliotecas universitárias da Unicamp reavaliar com rigor crítico os critérios de descarte das publicações obsoletas', a oração sublinhada 'reavaliar com rigor crítico os critérios de descarte das publicações obsoletas' exerce a função sintática de:",
    options: {
      A: "Sujeito da oração principal, razão pela qual o verbo 'convirá' se mantém na terceira pessoa do singular.",
      B: "Objeto direto preposicionado, completando o sentido transitivo do verbo 'convirá' na oração regente.",
      C: "Complemento nominal do substantivo 'gestores', delimitando a abrangência temática de sua atuação.",
      D: "Adjunto adverbial de finalidade reduzido de infinitivo, indicando o propósito da reavaliação técnica.",
      E: "Aposto especificativo do termo 'bibliotecas universitárias', esclarecendo a metodologia de descarte."
    },
    correctAnswer: "A",
    justification: "Verbos como 'convir', 'urgir', 'bastar' e 'cumprir' frequentemente operam com sujeitos oracionais: 'Reavaliar com rigor crítico os critérios de descarte convirá aos gestores' = [ISSO convirá aos gestores]. A oração subordinada atua como Sujeito (Oração Subordinada Substantiva Subjetiva Reduzida de Infinitivo), mantendo o verbo regente no singular."
  },
  {
    id: "lp_sim_32",
    moduleId: "lp13",
    text: "No período: 'Estudou com afinco e perseverança, CONTUDO não obteve a classificação desejada no concurso', a conjunção destacada estabelece relação de:",
    options: {
      A: "Adição, somando duas etapas cronológicas sucessivas na trajetória do concorrente.",
      B: "Conclusão, deduzindo um desfecho necessário derivado da premissa anterior.",
      C: "Explicação, justificando a razão pela qual o concurseiro adotou tal rotina de estudos.",
      D: "Adversidade, contrapondo uma ideia que quebra a expectativa gerada pelo esforço.",
      E: "Concessão, exigindo compulsoriamente a conjugação do verbo no modo subjuntivo."
    },
    correctAnswer: "D",
    justification: "'Contudo' é uma conjunção coordenativa adversativa clássica (= porém, todavia, no entanto), que expressa oposição e quebra de expectativa diante da oração antecedente."
  },
  {
    id: "lp_sim_33",
    moduleId: "lp13",
    text: "Considere a oração: 'Os servidores da Unicamp que participaram do treinamento receberam certificado'. A ausência de vírgulas na oração adjetiva introduzida por 'que' indica que:",
    options: {
      A: "Todos os servidores da Unicamp participaram do treinamento e todos receberam certificado.",
      B: "Apenas a parcela de servidores que participou do treinamento recebeu o respectivo certificado.",
      C: "Nenhum servidor da universidade compareceu ao treinamento oferecido pelo departamento.",
      D: "O autor incorreu em erro gramatical, pois orações adjetivas exigem vírgulas obrigatórias.",
      E: "O certificado foi outorgado a todos os inscritos independentemente de sua frequência."
    },
    correctAnswer: "B",
    justification: "A oração adjetiva restritiva (sem vírgulas) limita e restringe a informação a um subconjunto do sujeito (apenas aqueles servidores que participaram do treinamento receberam o certificado; os demais não receberam)."
  },
  {
    id: "lp_sim_34",
    moduleId: "lp13",
    text: "Na frase: 'O coordenador do curso afirmou QUE TODOS OS INSCRITOS SERIAM CONVOCADOS', a oração destacada classifica-se como:",
    options: {
      A: "Subordinada Adjetiva Explicativa, generalizando o atributo dos inscritos no processo.",
      B: "Subordinada Adverbial Causal, indicando o motivo que gerou o pronunciamento oficial.",
      C: "Subordinada Substantiva Subjetiva, exercendo a função de sujeito do verbo afirmar.",
      D: "Coordenada Sindética Explicativa, trazendo uma justificativa para a fala do diretor.",
      E: "Subordinada Substantiva Objetiva Direta, completando o verbo transitivo direto 'afirmou'."
    },
    correctAnswer: "E",
    justification: "Quem afirma, afirma algo (verbo transitivo direto). Substituindo pelo macete do 'ISSO': 'O coordenador afirmou [ISSO]'. A oração funciona como objeto direto da principal, sendo, portanto, Subordinada Substantiva Objetiva Direta."
  },
  {
    id: "lp_sim_35",
    moduleId: "lp14",
    text: "Em um relatório de auditoria interna sobre a aquisição de acervos digitais na Unicamp, o auditor redigiu: 'Cumpre [...] o processo licitatório para corrigir falhas procedimentais, sem prejuízo de [...] as normas vigentes que garantem a lisura da concorrência pública'. Para que o período mantenha a precisão técnica e a propriedade semântica exigidas na norma culta, as lacunas devem ser preenchidas, respectivamente, por:",
    options: {
      A: "ratificar (confirmar o ato válido) — prescrever (determinar expressamente a aplicação)",
      B: "retificar (corrigir o que tem defeito) — proscrever (autorizar plenamente a execução)",
      C: "retificar (corrigir o que tem defeito) — prescrever (determinar expressamente a aplicação)",
      D: "ratificar (confirmar o ato válido) — proscrever (banir ou extinguir do ordenamento)",
      E: "retificar (corrigir o que tem defeito) — diferir (conceder aprovação sem restrições)"
    },
    correctAnswer: "C",
    justification: "'Retificar' significa corrigir, emendar falhas ('retificar o processo'); 'prescrever' significa ordenar, determinar, fixar normas ('prescrever as normas vigentes'). 'Ratificar' significaria validar ou confirmar, e 'proscrever' significaria banir, proibir."
  },
  {
    id: "lp_sim_36",
    moduleId: "lp14",
    text: "Considere os pares de palavras sublinhados nos seguintes enunciados: I. 'A nova diretoria do arquivo central procedeu à CESSÃO dos documentos para digitalização durante a SESSÃO solene da congregação.' II. 'O bibliotecário agiu com elevado SENSO de responsabilidade ao analisar os dados do CENSO demográfico discente.' Quanto às relações semânticas e fonético-gráficas existentes entre os vocábulos destacados em cada enunciado, é correto afirmar que se tratam de:",
    options: {
      A: "Homófonos em ambos os enunciados, pois possuem pronúncia idêntica, mas grafias e significados distintos.",
      B: "Homógrafos em ambos os enunciados, visto que compartilham a mesma escrita gráfica e fonética original.",
      C: "Parônimos imperfeitos em I e homônimos perfeitos na frase II segundo a classificação da ABL e do VOLP.",
      D: "Sinônimos contextuais absolutos em I e termos antônimos complementares no desenvolvimento da frase II.",
      E: "Hiperônimos lexicais em ambos os períodos, estabelecendo coesão referencial por abstração conceitual."
    },
    correctAnswer: "A",
    justification: "Cessão/Sessão e Senso/Censo soam de modo exatamente igual (fonemas idênticos / mesma pronúncia acústica), porém possuem representação ortográfica diferente e sentidos desvinculados. São, portanto, exemplos incontestes de homófonos heterográficos."
  },
  {
    id: "lp_sim_37",
    moduleId: "lp15",
    text: "De acordo com o Acordo Ortográfico vigente, assinale a opção em que TODAS as palavras estão acentuadas ou grafadas com absoluta correção:",
    options: {
      A: "Idéia — herói — microondas — auto-escola — paraquedas.",
      B: "Ideia — heroi — micro-ondas — autoescola — pára-quedas.",
      C: "Idéia — herói — micro-ondas — autoescola — paraquedas.",
      D: "Ideia — herói — micro-ondas — autoescola — paraquedas.",
      E: "Ideia — herói — microondas — auto-escola — para-quedas."
    },
    correctAnswer: "D",
    justification: "Em D: 'ideia' (sem acento no ditongo aberto paroxítono); 'herói' (com acento no ditongo aberto oxítono); 'micro-ondas' (com hífen por letras iguais: o-o); 'autoescola' (sem hífen por letras diferentes: o-e); 'paraquedas' (sem hífen e sem acento). Perfeito!"
  },
  {
    id: "lp_sim_38",
    moduleId: "lp15",
    text: "No fragmento 'A catalogação sistemática de obras raras confere CARÁTER indelével à memória documental da Unicamp', a palavra em destaque recebe acento gráfico por determinada regra normativa. Assinale a alternativa em que TODAS as palavras retiradas de textos acadêmicos são acentuadas rigorosamente pelo MESMO princípio gramatical da palavra sublinhada:",
    options: {
      A: "tórax — memória — histórico",
      B: "âmbar — cadáver — revólver",
      C: "açúcar — país — relatórios",
      D: "álbum — jiboia — pedagógico",
      E: "fóssil — heróico — voluntário"
    },
    correctAnswer: "B",
    justification: "'Ca-rá-ter' é uma palavra paroxítona terminada na consoante -R. Na alternativa B, todas as três palavras ('âm-bar', 'ca-dá-ver', 're-vól-ver') são igualmente paroxítonas terminadas em -R. As outras alternativas misturam paroxítonas em ditongo, proparoxítonas, hiatos e palavras desatualizadas."
  },
  {
    id: "lp_sim_39",
    moduleId: "lp16",
    text: "Assinale a frase em que o emprego da pontuação atende com absoluto rigor à norma-padrão da língua:",
    options: {
      A: "O coordenador geral do concurso, encaminhou todos os cadernos lacrados à diretoria.",
      B: "Os estudantes leram os artigos técnicos, e elaboraram resumos, sem erros conceituais.",
      C: "Campinas 25 de setembro de 2026 data em que se encerram as inscrições do certame.",
      D: "A reitoria adquiriu, computadores novos, impressoras a laser, e mesas ergonômicas.",
      E: "O diretor, ciente das dificuldades orçamentárias, autorizou a abertura do processo licitatório."
    },
    correctAnswer: "E",
    justification: "Na opção E, a oração intercalada explicativa ('ciente das dificuldades orçamentárias') está perfeitamente isolada entre duas vírgulas, sem separar indevidamente o sujeito do predicado. Nas outras: A separa sujeito de verbo por vírgula; B coloca vírgulas desnecessárias; C omite a vírgula após a cidade; D separa o verbo 'adquiriu' de seus objetos."
  },
  {
    id: "lp_sim_40",
    moduleId: "lp17",
    text: "Leia com atenção a seguinte declaração do linguista Ataliba de Castilho (professor emérito da Unicamp): 'A língua não é um bloco monolítico e imutável. Cada variedade linguística responde a exigências comunicativas perfeitamente estruturadas no interior de sua comunidade de falantes'. À luz das concepções teóricas que balizam as provas de Língua Portuguesa da Unicamp, é correto afirmar que:",
    options: {
      A: "A norma-padrão constitui a única variedade dotada de lógica intrínseca e rigor gramatical no português.",
      B: "O domínio das variedades populares dispensa o aprendizado da norma culta na escrita institucional.",
      C: "A diversidade linguística é legítima e o julgamento depreciativo de certas falas revela preconceito social.",
      D: "As manifestações da linguagem coloquial representam ameaça de degeneração para a língua nacional.",
      E: "A gramática prescritiva tradicional deve ser aplicada indistintamente a todos os gêneros textuais orais."
    },
    correctAnswer: "C",
    justification: "A tradição sociolinguística da Unicamp e do Instituto de Estudos da Linguagem (IEL) defende que todas as variantes linguísticas possuem gramática e coerência internas legítimas. A estigmatização de certas variedades reflete preconceito social, e não incapacidade cognitiva ou linguística dos falantes."
  }
];
