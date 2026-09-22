import type { AdvancedTopic } from '../types';

export const m17: AdvancedTopic = {
  id: "m17",
  title: "17. RDA (Resource Description and Access)",
  authorsAndFrameworks: `Autores-Chave e Guias:
• JSC (Joint Steering Committee for Development of RDA): O comitê criador (agora chamado RDA Steering Committee - RSC).
• IFLA: O modelo LRM (e o antigo FRBR) é a espinha dorsal conceitual do RDA.`,
  advancedTheory: `1. O Colapso do AACR2 e o Nascimento do RDA
O AACR2 foi feito para um mundo onde o catálogo era de FICHAS de papel e o suporte era o LIVRO. Com a internet, a catalogação entrou em crise. O RDA surge em 2010 não como uma nova edição, mas como uma revolução. Ele abandona a regra da "Capa x Página de Rosto" do AACR2. 
Princípio do RDA: "Take what you see, accept what you get" (Escreva exatamente o que você vê). Abolição completa do jargão em latim (Fim do [S.l.: s.n.] - entra "Place of publication not identified").

2. Estrutura baseada em FRBR/LRM
Enquanto o AACR2 dividia o código pelo "tipo de suporte" (Cap 2 para livro, Cap 3 para mapa), o RDA é estruturado de acordo com as ENTIDADES do FRBR (Obra, Expressão, Manifestação, Item). O foco não é o livro físico, mas os RELACIONAMENTOS entre essas entidades.

3. A Morte da "Regra dos Três"
No AACR2, se um livro tivesse 4 autores, você ignorava 3 deles e dava entrada pelo título. 
No RDA, essa regra NÃO EXISTE. Se um livro tem 10 autores, a recomendação base é registrar TODOS ELES (ou, opcionalmente, o primeiro e resumir o resto de forma legível em inglês ou português claro, sem o "et al." em latim). O RDA é focado na Recuperação (usuário achar), então esconder autores era péssimo para a base de dados.

4. Atributos x Relacionamentos
A interface do RDA (RDA Toolkit) instrui o catalogador a preencher os "Atributos" da Obra/Manifestação e a criar os "Relacionamentos". O RDA é pensado para Linked Data (Dados Conectados), onde o catálogo se integra à Web Semântica, não apenas a um banco relacional fechado da biblioteca.`,
  unicampContext: `A Unicamp aderiu globalmente ao RDA. A principal mudança nas bibliotecas da Unicamp e USP foi a eliminação das abreviações em latim ([S.l.], [s.n.], "et al.") nas novas catalogações, substituindo-as pelas frases por extenso em português ("[local não identificado]", "[editor não identificado]").`,
  boardAnalysis: {
    trends: `CEBRASPE (2018-2026): A banca faz comparações diretas RDA vs AACR2. A principal cobrança é o princípio "Take what you see" (escreva como está), e a eliminação do latim. Também testam o fato de que o RDA foi desenhado nativamente para o ambiente digital/Web, diferente do AACR2.
    
VUNESP / FUNCAMP: Gostam de focar na "Regra dos Três". O RDA aboliu a obrigatoriedade de entrar pelo título para mais de 3 autores, o que era a espinha dorsal do AACR2.`,
    commonTraps: `🚨 Pegadinha Clássica CEBRASPE: 
"Por ser uma atualização direta do AACR2, o RDA manteve intacta a tradição do uso de abreviações padronizadas e termos em latim, visando economizar espaço de armazenamento nos servidores."
(ERRADO: O RDA não liga para economia de caracteres (fichas de papel). Ele baniu o latim para ser amigável ao usuário comum.)`
  },
  memorizationMatrix: `AACR2 vs RDA (DIFERENÇAS LETAIS)
| Regra | AACR2 (1978) | RDA (2010+) |
|-------|--------------|-------------|
| Arquitetura | Por Tipo de Suporte | Por Entidades FRBR |
| Idioma/Abrev.| Uso de Latim ([S.l.], et al.)| Zero Latim (Escreva por extenso) |
| Precisão | Transcrição normalizada | "Take what you see" (Cópia fiel) |
| 4 Autores | Oculta e entra pelo Título | Pode registrar TODOS |`
};
