export interface TopicInfo {
  title: string;
  theory: string;
  unicampContext: string;
  boardTrends: string;
  memorization: string;
}

export const modules: TopicInfo[] = [
  {
    title: "1. Biblioteca Digital e Repositório Digital",
    theory: `A Biblioteca Digital foca no serviço aos usuários, colecionando, gerenciando e preservando coleções digitais ricas e específicas da comunidade. Não se prende à proveniência do material (comprado, doado, assinado).\n\nO Repositório Institucional (RI) foca na memória da instituição. A missão é reunir, preservar, disseminar e dar acesso livre (Acesso Aberto) primariamente à produção intelectual gerada pela comunidade universitária (docentes, pesquisadores, discentes). O RI é a base técnica da via verde do acesso aberto.`,
    unicampContext: "A Unicamp possui o Repositório da Produção Científica e Intelectual da Unicamp (Acervus/Nou-Rau). Teses e dissertações defendidas lá são compulsoriamente depositadas neste repositório institucional público.",
    boardTrends: "Bancas como CEBRASPE adoram afirmar que 'Biblioteca Digital é sinônimo de Repositório Institucional'. Isso é FALSO. Fique atento à palavra 'mandato' (obrigatoriedade), muito forte nos repositórios institucionais.",
    memorization: "BD = Foco no Usuário (Qualquer material). RI = Foco no Produtor/Instituição (Material feito em casa)."
  },
  {
    title: "2. Dados de Pesquisa e FAIR",
    theory: "O Plano de Gestão de Dados (PGD) é exigido desde a submissão de projetos a agências de fomento (FAPESP, CNPq). Ele delineia o ciclo de vida dos dados.\n\nPrincípios FAIR:\n• Findable (Encontrável): Uso de DOIs e metadados ricos.\n• Accessible (Acessível): Protocolos abertos e claros. Não significa que é liberado sem senha, mas que o caminho de acesso é universal.\n• Interoperable (Interoperável): Formatos não proprietários (CSV em vez de XLS) e vocabulários controlados.\n• Reusable (Reutilizável): Licenças de uso claras e proveniência transparente.",
    unicampContext: "O Repositório de Dados da Unicamp (REDU) utiliza a plataforma Dataverse. A Instrução Normativa CCPG nº 001/2024 obriga os alunos de pós-graduação a cadastrarem metadados de suas pesquisas no REDU.",
    boardTrends: "Pegadinha comum (FCC e VUNESP): Dizer que para ser FAIR, o dado tem que estar aberto sem nenhuma restrição e sem senha. ERRADO. O princípio é 'tão aberto quanto possível, tão fechado quanto necessário'.",
    memorization: "Acessível (A do FAIR) não é sinônimo de Gratuito ou Aberto. É sinônimo de Protocolo de Rede Claro e Aberto (ex: HTTP)."
  },
  {
    title: "3. Ciência Aberta e Acesso Aberto (Open Access)",
    theory: "Ciência aberta engloba acesso aberto, dados abertos, código aberto e peer-review aberta.\n\nVias do Acesso Aberto:\n• Via Verde: Autodepósito em repositórios institucionais/temáticos.\n• Via Dourada: Publicação em periódicos totalmente abertos ao leitor. Muitas vezes exige pagamento de APC (Article Processing Charge) pelo autor.\n• Via Diamante (Platina): O ideal acadêmico. Nem autor nem leitor pagam. O custo é absorvido pelas instituições públicas ou sociedades científicas.",
    unicampContext: "Regida pela Deliberação CONSU-A-050/2020. A Política Institucional de Acesso Aberto da Unicamp exige que publicações e teses sejam abertas para democratizar o retorno social da verba pública.",
    boardTrends: "Bancas amam criar uma 'Via Amarela' para confundir candidatos. Essa via não existe na taxonomia aceita. Decore Verde (Repositório) e Dourada (Revista com APC).",
    memorization: "Ouro (Dourada) = Lembra dinheiro (APC). Diamante = Algo precioso dado de graça pela universidade (sem APC)."
  },
  {
    title: "4. Inteligência Artificial na Biblioteconomia",
    theory: "A IA está saindo das interfaces de busca para os bastidores (back-office) da biblioteca.\nPrincipais frentes:\n• Processamento de Linguagem Natural (NLP): Chatbots treinados nas políticas da biblioteca para serviço de referência virtual 24/7.\n• Indexação Automática: Uso de LLMs (Large Language Models) e Machine Learning para sugerir cabeçalhos de assunto (Vocabulário Controlado) ao ler resumos.\n• Letramento em IA (AI Literacy): A nova fronteira da competência informacional. O bibliotecário deve ensinar usuários a combater vieses algorítmicos e 'alucinações' (respostas falsas) de sistemas como o ChatGPT.",
    unicampContext: "Sistemas como o Alma e Primo (Ex Libris/ProQuest) da Unicamp utilizam algoritmos de Machine Learning no backend (CDI) para ranquear e recomendar materiais baseados na relevância de leitura do perfil do usuário.",
    boardTrends: "Provas de 2024/2025 frequentemente abordam os vieses inerentes ao treinamento da IA. A resposta correta sempre aponta para o papel mediador e ético do bibliotecário.",
    memorization: "IA não substitui a indexação controlada, ela a potencializa. Letramento Informacional agora inclui Letramento em IA."
  },
  {
    title: "5. Preservação de Acervos",
    theory: "Físico: Conservação preventiva (controle termo-higrométrico, monitorar UV) x Conservação curativa (restauração de pequenos rasgos). \nInimigos biológicos (fungos) florescem em umidade acima de 60%.\n\nDigital: O foco é combater a obsolescência de software e hardware. O modelo OAIS (Open Archival Information System / ISO 14721) define pacotes de informação: SIP (Entrada/Submissão), AIP (Guarda Segura), DIP (Disseminação/Saída para o usuário).",
    unicampContext: "Como universidade de pesquisa de ponta com um grande acervo histórico (ex: Arquivo Edgard Leuenroth), a Unicamp aplica normas estritas de arquivamento digital e salas com clima controlado (HVAC).",
    boardTrends: "Diferença entre Emulação e Migração. Migração (atualiza o formato, ex: .doc para .pdf). Emulação (simula o ambiente antigo para rodar o arquivo antigo sem alterá-lo).",
    memorization: "SIP (Submissão) -> AIP (Arquivo/Preservação) -> DIP (Disseminação). SAD!"
  },
  {
    title: "6. Fluxos Informacionais e Bibliometria",
    theory: "A bibliometria estuda a quantificação do registro escrito.\nAs 3 leis clássicas:\n• Lei de Bradford (Dispersão): Uma pequena fração de revistas publica a maior parte dos artigos de um assunto específico (o núcleo).\n• Lei de Lotka (Produtividade): Uma pequena parcela de autores publica a maior quantidade de artigos. (A maioria esmagadora publica apenas 1).\n• Lei de Zipf (Frequência): Algumas palavras aparecem muitas vezes (artigos, preposições), e muitas palavras aparecem raramente (termos de indexação).",
    unicampContext: "Na Unicamp, avaliações departamentais utilizam indicadores cientométricos derivados dessas leis (ex: Fator de Impacto e Índice H) via bases como Web of Science e Scopus.",
    boardTrends: "Saber o pareamento exato (Bradford=Revistas; Lotka=Autores; Zipf=Palavras). Trocar os nomes é a questão clássica de bancas como CEBRASPE.",
    memorization: "BLZ: Bradford (Library/Revistas), Lotka (Literatos/Autores), Zipf (Zzz-Palavras)."
  }
];
