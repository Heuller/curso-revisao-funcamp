import type { AdvancedTopic } from '../types';

export const m04: AdvancedTopic = {
  id: "m04",
  title: "4. Inteligência Artificial em Bibliotecas e ChatGPT",
  authorsAndFrameworks: `Autores e Marcos Relevantes:
• Ranganathan (1931): As Cinco Leis da Biblioteconomia. O alicerce ético para a adoção de IAs (Especialmente a 4ª e 5ª lei).
• Alan Turing (1950): O Teste de Turing e a origem do questionamento das IAs.
• Modelos LLM (Large Language Models): Arquitetura Transformer (Google, 2017) que permitiu o surgimento de IAs Generativas como o ChatGPT.`,
  advancedTheory: `1. O Que É Uma IA Generativa (LLM)?
Diferente da busca tradicional do Google (que acha um site existente e entrega um link), as IAs Generativas (LLMs, como ChatGPT, Claude, Gemini) NÃO buscam num banco de dados rígido. Elas "prevêem a próxima palavra" usando redes neurais probabilísticas (Machine Learning e Deep Learning) baseadas em bilhões de textos da internet.
• Vantagem na Biblioteca: Pode resumir textos longos, gerar metadados preliminares (MARC) e extrair entidades.
• Desvantagem Crítica (Alucinação): Como prevê probabilidade e não verifica a "verdade factual", a IA inventa informações se não souber a resposta, criando autores e referências bibliográficas que não existem. Esse é o terror da Referência.

2. Impacto no Serviço de Referência (O Fim do Google Tradicional?)
A transição da busca baseada em palavras-chave (Booleana) para a busca semântica conversacional. O usuário de biblioteca universitária parou de digitar "aquecimento AND global" e passou a pedir "Escreva 5 parágrafos sobre aquecimento global citando autores da USP". O papel do bibliotecário migrou de "achador de links" para "Engenheiro de Prompt" (Prompt Engineering) e validador de fontes (combate à Desinformação/Fake News).

3. Questões Éticas e Viés Algorítmico
A IA aprende com textos humanos da internet. Logo, herda racismo, sexismo e xenofobia históricos contidos nesses dados. Bibliotecários atuam auditando esse Viés (Algorithmic Bias).
Outro ponto letal: Direitos Autorais. Ao alimentar um PDF protegido por copyright para uma IA mastigar e resumir, ocorre infração da lei se o conteúdo gerado replicar a essência da obra original? (Área cinzenta da LGPD e LDA).

4. Releitura das Leis de Ranganathan na Era da IA
• 1. Livros são para uso -> "A IA é para facilitar o acesso à informação."
• 2. A cada leitor, seu livro -> "A cada usuário, sua resposta customizada pela IA."
• 3. A cada livro, seu leitor -> "O algoritmo recomenda dados baseados no perfil do usuário."
• 4. Poupe o tempo do leitor -> O princípio MAGNO da IA na busca.
• 5. A Biblioteca é um organismo em crescimento -> Crescimento tecnológico (a biblioteca abandona o catálogo de fichas e abraça LLMs locais).`,
  unicampContext: `A Unicamp adota cautela institucional. A PRG (Pró-Reitoria de Graduação) orienta os docentes contra o plágio gerado por IA (uso de detectores como Turnitin, embora falhos). No Sistema de Bibliotecas, a IA tem sido testada em catálogos "Discovery" inteligentes (Busca Semântica), que conseguem perdoar erros de digitação dos alunos e sugerir artigos pelo sentido do parágrafo, não apenas pela ocorrência da palavra.`,
  boardAnalysis: {
    trends: `CEBRASPE (2018-2026): Provas recentíssimas de 2024 pra frente abordam maciçamente as "Alucinações" e o "Viés Algorítmico". Eles testam se o candidato acha que IAs são perfeitamente neutras e infalíveis (Falso).
VUNESP / FUNCAMP: Gosta de questionar qual das Cinco Leis de Ranganathan justifica a implementação de softwares de automação e inteligência artificial nas bibliotecas. Resposta de ouro: A 4ª Lei (Poupe o tempo do leitor) e a 5ª (O organismo em crescimento).`,
    commonTraps: `🚨 Pegadinha Clássica CEBRASPE: 
"Por utilizarem bases de dados massivas e matemática avançada, os algoritmos de Inteligência Artificial generativa, como o ChatGPT, entregam resultados isentos de preconceito humano ou vieses ideológicos."
(ERRADO: O oposto é verdadeiro. IAs sofrem do princípio "Garbage In, Garbage Out" (Lixo entra, lixo sai). Como são treinadas com textos humanos da internet, elas replicam e até amplificam vieses racistas e socioculturais se não forem freadas por filtros pesados (RLHF).)`
  },
  memorizationMatrix: `DOGMAS DA IA NA BIBLIOTECA
1. ALUCINAÇÃO: A IA inventa fatos com extrema confiança. O bibliotecário deve checar as referências.
2. VIÉS (BIAS): A IA herda o preconceito da base de dados (Ex: Assume que 'enfermeiro' é sempre mulher).
3. PROMPT ENGINEERING: É a nova Entrevista de Referência. Saber perguntar é o novo "Saber buscar".
4. LEIS DE RANGANATHAN: Justificativa para investir em TI na biblioteca -> 4ª Lei (Tempo) e 5ª (Crescimento).`
};
