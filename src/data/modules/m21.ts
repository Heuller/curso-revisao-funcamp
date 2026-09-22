import type { AdvancedTopic } from '../types';

export const m21: AdvancedTopic = {
  id: "m21",
  title: "21. Indexação",
  authorsAndFrameworks: `Autores-Chave e Guias:
• Lancaster (1993): "Indexação e Resumos". É a obra magna absoluta no Brasil sobre o tema.
• Foskett (1973) e Chaumier (1988): Teóricos estruturais sobre vocabulários controlados e análise documental.`,
  advancedTheory: `1. O Processo de Indexação (Lancaster)
A indexação (análise temática) possui 3 etapas obrigatórias e estritas:
1. Análise Conceitual (Compreensão do documento): O indexador não lê o texto inteiro. Ele lê Título, Resumo, Sumário, Introdução e Conclusão.
2. Extração (Identificação de Conceitos): Identificar quais conceitos são representativos do conteúdo (o que o autor quis dizer).
3. Tradução: Traduzir os conceitos extraídos para uma linguagem de indexação (Vocabulário Controlado / Tesauro), gerando os termos de indexação (Cabeçalhos).

2. Exhaustividade x Especificidade
São as duas políticas macroeconômicas da biblioteca na hora de indexar, e impactam diretamente no Teorema do SRI (Revocação x Precisão).
• Exhaustividade (Quantidade): Até que profundidade eu indexo? Posso colocar 20 cabeçalhos de assunto num livro (alta exhaustividade) ou apenas 2 (baixa). Alta exhaustividade aumenta a REVOCAÇÃO do sistema (acha mais), mas destrói a precisão (traz lixo, falsas recuperações).
• Especificidade (Qualidade/Profundidade): É usar o termo exato. Em vez de usar "Cachorro", usar "Golden Retriever". Aumentar a especificidade aumenta a PRECISÃO (traz só o que importa) mas diminui a revocação (alguém buscando por 'Cão' não vai achar).

3. Linguagens de Indexação
• Linguagem Natural: As próprias palavras do autor no texto (Free-text). Permite alta revocação (tem muitos sinônimos soltos), mas sofre com ambiguidades e homonímias (Manga fruta vs Manga camisa).
• Linguagem Controlada (Tesauro/Vocabulário): Acaba com a ambiguidade. Une todos os sinônimos num termo só autorizado e liga os não-autorizados através de remissivas (USE). Aumenta a Precisão de forma astronômica. Estrutura do Tesauro: TG (Termo Genérico), TE (Termo Específico), TR (Termo Relacionado), UP (Usado Para - não autorizado).`,
  unicampContext: `A Unicamp processa uma variedade insana de teses e artigos. O indexador da área biomédica usará o DeCS (Descritores em Ciências da Saúde) para garantir a especificidade da Medicina, enquanto o indexador de exatas pode usar termos não controlados (Linguagem Natural) no campo de abstract para tecnologias extremamente novas que ainda não entraram no vocabulário controlado (ex: termos novos de IA generativa).`,
  boardAnalysis: {
    trends: `CEBRASPE (2018-2026): A banca copia e cola frases inteiras do livro do Lancaster. Eles exigem domínio absoluto da relação entre Exhaustividade e Precisão. Costumam testar a etapa de "Tradução" do processo.
    
VUNESP / FUNCAMP: Adoram cobrar a estrutura de um Tesauro. Questão garantida: perguntar o que significa a sigla "UP" (Usado Para - indica o termo que NÃO DEVE ser usado, que aponta para o termo válido/USE).`,
    commonTraps: `🚨 Pegadinha Clássica CEBRASPE: 
"O aumento da exhaustividade da indexação (atribuição de muitos termos a um documento) resulta na melhoria direta da precisão do sistema de recuperação da informação."
(ERRADO: Alta exhaustividade destrói a precisão. Se o livro tem 5 páginas sobre cães no meio de 300 páginas sobre gatos, e você indexa "cães", o usuário buscando livro de cão vai achar essa obra e ficar furioso com a "falsa recuperação". Alta exhaustividade melhora a REVOCAÇÃO.)`
  },
  memorizationMatrix: `FÍSICA DA INDEXAÇÃO (LANCASTER)
| Política | O que é? | Efeito na Busca |
|----------|----------|-----------------|
| Exhaustividade | + Quantidade de Termos | Sobe Revocação / Cai Precisão (Vem lixo) |
| Especificidade | + Exatidão do Termo | Sobe Precisão / Cai Revocação (Elite) |
| Tesauro TR | Termo Relacionado | Primo semântico (Ex: Livro TR Leitura) |
| Tesauro UP | Usado Para | Lixo / Sinônimo rejeitado. |`
};
