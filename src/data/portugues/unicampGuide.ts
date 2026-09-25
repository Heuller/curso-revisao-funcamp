export interface UnicampStrategy {
  id: string;
  title: string;
  badge: string;
  summary: string;
  content: string;
}

export const UNICAMP_EXAM_STRATEGY: UnicampStrategy[] = [
  {
    id: "iel_philosophy",
    title: "1. A Concepção de Língua da Unicamp (O Viés do IEL)",
    badge: "Epistemologia da Banca",
    summary: "A Unicamp não enxerga a língua como um museu de regras mortas, mas como interação social, atividade discursiva e ideológica.",
    content: `A Unicamp abriga o **Instituto de Estudos da Linguagem (IEL)**, um dos centros de pesquisa linguística mais respeitados do mundo. Por essa razão, as provas de Língua Portuguesa da universidade (organizadas pela Comvest, Funcamp ou bancas sob suas diretrizes pedagógicas) possuem um DNA inconfundível:

- **Língua como Discurso e Ação:** O candidato nunca encontrará questões isoladas de "decoreba" de regras vazias. A gramática é sempre cobrada **a serviço da construção do sentido, da argumentação e da intencionalidade do autor**.
- **Polifonia e Multivocalidade:** A banca adora textos em que várias vozes dialogam (a voz do autor, a voz da comunidade científica, a voz do senso comum refutada). A pegadinha clássica da Unicamp é atribuir ao autor uma tese que ele apenas citou para desmentir!
- **Textos Autênticos e Provocativos:** Os excertos são retirados de ensaios de divulgação científica (*Revista ComCiência*, *Pesquisa FAPESP*), artigos de opinião de alto calibre intelectual (Antonio Candido, Sérgio Buarque, Florestan Fernandes, Lélia Gonzalez, Ailton Krenak) e crônicas literárias densas (Machado de Assis, Graciliano Ramos, Drummond).`
  },
  {
    id: "reading_traps",
    title: "2. Como Desarmar os Distratores de Interpretação",
    badge: "Técnica de Resolução",
    summary: "Os 4 tipos de distratores sofisticados que a Unicamp constrói para eliminar quem apenas 'passa o olho' no texto.",
    content: `Em concursos de universidades públicas de excelência, as alternativas erradas parecem brilhantes e convincentes. Guarde os 4 padrões de armadilha:

1. **A Extrapolação Filosófica (O distrator 'verdadeiro no mundo'):** A alternativa traz uma afirmação correta, inteligente e socialmente louvável, mas que **não está contida nem autorizada no texto**. O candidato com formação superior concorda com a frase e marca imediatamente. *Cuidado:* Não marque o que você pensa; marque o que as pistas do texto sustentam!
2. **A Inversão de Causa e Efeito (Falácia da Causalidade):** O texto diz que *"a precarização do acervo gerou a evasão de pesquisadores"*; a alternativa inverte e afirma que *"a evasão dos pesquisadores foi a causa originária do sucateamento do acervo"*.
3. **A Generalização Abusiva (Troca de Modificadores):** O autor do texto escreve com cautela acadêmica (*"em determinados casos", "pode sugerir", "indícios parciais"*); o distrator transforma isso em certeza absoluta (*"comprova taxativamente", "invariavelmente", "sempre"*).
4. **A Confusão Polifônica (A voz alheia):** O autor cita uma opinião preconceituosa ou retrógrada para desconstruí-la no parágrafo seguinte. A alternativa pega aquela citação e afirma que *"o autor defende que..."*.`
  },
  {
    id: "syntax_nuance",
    title: "3. Gramática Aplicada: As Sutilezas Sintáticas Preferidas",
    badge: "Morfossintaxe de Alto Nível",
    summary: "Os tópicos gramaticais onde as bancas mais elevam a complexidade das frases.",
    content: `Para testar o domínio real da norma-padrão em nível superior, a Unicamp seleciona estruturas com alto índice de atrito sintático:

- **Complemento Nominal vs. Adjunto Adnominal Preposicionado:**
  - *"O medo dos candidatos"* (Os candidatos sentem medo = valor ativo / agente ➔ **Adjunto Adnominal**).
  - *"O medo da prova"* (A prova é temida = valor passivo / paciente ➔ **Complemento Nominal**).
- **O Verbo 'Haver' e 'Fazer' Contaminando o Auxiliar:**
  - ❌ *"Devem haver muitas vagas."* (ERRADO! O verbo impessoal transfere sua impessoalidade para o auxiliar).
  - ✅ *"Deve haver muitas vagas."* (CERTO! Auxiliar no singular).
  - ✅ *"Devem existir muitas vagas."* ('Existir' tem sujeito regular 'muitas vagas', logo vai para o plural).
- **A Concordância com o 'SE' Apassivador vs. Indeterminação:**
  - *"Restauraram-se os manuscritos raros."* ('manuscritos raros' é sujeito paciente plural ➔ verbo no plural!).
  - *"Precisa-se de novos bibliotecários."* ('de novos bibliotecários' tem preposição obrigatória; é objeto indireto, 'se' é índice de indeterminação ➔ verbo obrigatoriamente no singular!).
- **Regência Culta com Pronome Relativo:**
  - ❌ *"O acervo que eu mais gosto."* (Quem gosta, gosta **de** algo).
  - ✅ *"O acervo de que eu mais gosto."* (A preposição exigida pelo verbo migra para antes do pronome relativo!).`
  },
  {
    id: "punctuation_effects",
    title: "4. Pontuação e Deslocamento: Efeitos de Sentido",
    badge: "Estilística e Pragmática",
    summary: "A Unicamp nunca pergunta apenas 'se tem vírgula', mas qual transformação semântica a pontuação causa.",
    content: `Na Unicamp, a pontuação é estudada como partitura da argumentação:

- **A Vírgula que Altera a Realidade do Todo (Restrição vs. Explicação):**
  - *"Os servidores da Unicamp, que participaram da greve, foram elogiados pela coragem."* (Explicativa: **TODOS** os servidores participaram da greve).
  - *"Os servidores da Unicamp que participaram da greve foram elogiados pela coragem."* (Restritiva: **APENAS PARTE** dos servidores participou; os demais não).
- **Topicalização e Focalização (Deslocamento de Adjuntos):**
  - *"O reitor aprovou a proposta silenciosamente ontem."* (Foco na ação institucional neutra).
  - *"Ontem, silenciosamente, o reitor aprovou a proposta."* (Foco na furtividade e no elemento temporal, gerando tom de denúncia ou reserva discursiva).
- **A Vírgula do Vocativo Esquecida em Diálogos Institucionais:**
  - *"Informo aos senhores diretores que a ata foi lida."* ('aos senhores diretores' é objeto indireto).
  - *"Informo, senhores diretores, que a ata foi lida."* ('senhores diretores' é vocativo, chamamento direto intercalado obrigatório entre vírgulas).`
  },
  {
    id: "verbal_nuances",
    title: "5. Tempos e Modos Verbais: Intencionalidade e Polidez",
    badge: "Semântica Verbal",
    summary: "O emprego do Pretérito Imperfeito de cortesia, do Futuro do Pretérito e das correlações subjuntivas.",
    content: `A flexão verbal é analisada sob a ótica pragmática:

- **O Pretérito Imperfeito de Cortesia / Atenuação:**
  - Ao invés de usar o presente impositivo (*"Eu quero falar com o diretor"*), o falante educado opta pelo imperfeito do indicativo: *"Eu **queria** falar com o diretor"*. O recuo no tempo gramatical serve para atenuar a imposição, gerando polidez e deferência discursiva.
- **Correlação Verbal Clássica (Se... então):**
  - Condição no Pretérito Imperfeito do Subjuntivo + Consequência no Futuro do Pretérito do Indicativo:
    - *"Se a universidade **disponibilizasse** mais recursos, a biblioteca **ampliaria** o horário de atendimento."*
  - Condição no Futuro do Subjuntivo + Consequência no Futuro do Presente do Indicativo:
    - *"Se a universidade **disponibilizar** recursos, a biblioteca **ampliará** o atendimento."*
- **O Futuro do Pretérito com Valor de Dúvida / Hipótese / Notícia Não Confirmada:**
  - *"O novo edital **traria** benefícios substanciais aos técnicos."* (Expressa rumor, incerteza factual ou probabilidade não confirmada).`
  }
];
