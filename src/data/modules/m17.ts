import type { AdvancedTopic } from '../types';

export const m17: AdvancedTopic = {
  id: "m17",
  title: "17. RDA (Resource Description and Access)",
  authorsAndFrameworks: `Autores-Chave e Histórico:
• JSC (Joint Steering Committee for Development of RDA): Órgão que substituiu os velhos comitês do AACR. Agora rebatizado para RSC (RDA Steering Committee).
• IFLA: Criadora do FRBR, FRAD e FRSAD, que foram fundidos no modelo IFLA LRM (2017) - a alma filosófica e ontológica pura por trás do RDA.
• Lançamento Oficial: 2010 (Substituição progressiva e final do AACR2 em grandes agências mundiais a partir de 2013, como a Library of Congress).`,
  advancedTheory: `1. O Abandono do Papel e o Foco no Usuário (LRM)
O AACR2 assumia que o produto final da catalogação era uma Ficha de Papel impressa. O RDA (Resource Description and Access) foi concebido EXCLUSIVAMENTE para o ambiente digital (Web, catálogos online, Linked Data).
A essência do RDA é estruturada totalmente nos modelos da IFLA (FRBR/LRM). O RDA não vê um livro; ele vê a "Obra" (a abstração), a "Expressão" (o texto/idioma), e a "Manifestação" (o livro impresso, o epub). 
As regras do RDA servem para registrar "Atributos" e construir "Relacionamentos" entre essas entidades.

2. A Queda dos Dogmas do AACR2 (As Grandes Diferenças)
• 1º Dogma Derrubado: A "Regra de 3". O AACR2 escondia autores sob a manta do "et al." e forçava a entrada no Título se a obra tivesse mais de 3 autores. O RDA baniu a Regra de 3. Recomenda-se registrar TODOS os autores (favorecendo a busca do usuário), mas há a opção de registrar apenas o primeiro e indicar de forma clara que há outros, SEM usar a famigerada abreviação [et al.].
• 2º Dogma Derrubado: O Latim e as Abreviações Padrão. O RDA aboliu "s.n.", "S.l.", "ca.", "il.". O princípio máximo do RDA é: Take what you see, accept what you get (Aceite o que vier). Transcreve-se o que está no item! O usuário não fala latim. Portanto, usa-se [editor não identificado], [local não identificado], "ilustrações". (Tudo na língua do catalogador).
• 3º Dogma Derrubado: O Fim do GMD (General Material Designation). Aquela nota entre colchetes logo após o título (Ex: Machado de Assis [gravação de som]) morreu! O RDA estilhaçou o velho GMD (tag 245 $h) em três novos campos flexíveis (As tags 336, 337 e 338 do MARC):
   - Tipo de Conteúdo (Content Type - Tag 336): O que está lá dentro? (Ex: texto, imagem em movimento).
   - Tipo de Mídia (Media Type - Tag 337): Precisa de intermediário? (Ex: computador, não mediado).
   - Tipo de Suporte (Carrier Type - Tag 338): Como está gravado? (Ex: volume, disco de áudio, recurso online).

3. Core Elements (Elementos Centrais Obrigatórios)
O RDA abandonou os 3 níveis de descrição rígidos do AACR2. Ele introduziu os "Core Elements" (Elementos Mínimos Obrigatórios para qualquer registro não virar um fantasma na base). Se algo for um Core Element (como Título Principal, Identificador/ISBN, Primeiro Criador), o catalogador TEM que colocar. 
Também trouxe opções pesadas de "Catalogador Julga" (Cataloger's Judgment) - onde o profissional tem liberdade para decidir se a informação extra beneficia a comunidade local ou não.

4. A Preparação para a Web Semântica (Linked Data)
O RDA quebra as correntes do "Texto". Ele prefere "URIs" (Uniform Resource Identifiers). Em vez de escrever o texto cego "Companhia das Letras", o RDA prefere que o catálogo insira a URI exata (um link perene) para a identidade da "Cia das Letras" na web. Isso permite que sistemas globais integrem catálogos brasileiros com americanos em milissegundos sem esbarrar na barreira do idioma.`,
  unicampContext: `A Unicamp aderiu globalmente ao RDA. Uma das mudanças drásticas que um catalogador novato enfrenta na Unicamp hoje é preencher os novos campos 336, 337 e 338 do MARC21 que substituíram a indicação geral de material. O uso de [s.n.] é proibido e gera correção pelo controle de qualidade da coordenação, devendo o estagiário substituir por [publisher not identified] ou [editor não identificado].`,
  boardAnalysis: {
    trends: `CEBRASPE (2018-2026): A banca costuma fazer uma teia entre AACR2, MARC e RDA. Eles vão tentar forçar a ideia de que o RDA foi criado apenas para "Recursos Digitais" ou E-books. (FALSO! RDA cataloga tudo, desde tábuas de argila até hologramas de realidade virtual, ele é AGNÓSTICO em relação ao suporte físico). 
VUNESP / FUNCAMP: Gosta das diferenças cruas e diretas. Saber de cor a abolição da "Regra de 3", a abolição do GMD (Designação Geral de Material) pelas três tags 33x, e o abandono de todas as abreviações não intuitivas da ISBD.`,
    commonTraps: `🚨 Pegadinha Clássica CEBRASPE: 
"Por ser uma atualização filosófica focada nas entidades do FRBR, o RDA eliminou a necessidade de se utilizar o formato MARC 21 nas bibliotecas, adotando nativamente um formato XML puro que impossibilita a transição legada."
(ERRADO: O RDA não substitui o MARC! Eles são independentes. O MARC 21 se adaptou e sofreu dezenas de atualizações para suportar o RDA (como a criação das tags 336, 337, 338 e o uso da 264 para imprenta). Você aplica regras do RDA e escreve *dentro* do formato MARC.)`
  },
  memorizationMatrix: `OS CÓDIGOS DE HAMURABI DO RDA
Regra 1: [Take what you see]. Pare de corrigir o livro, transcreva o erro tipográfico se ele for real e importante.
Regra 2: [Morte ao Latim]. Sai "[S.l.]", entra "[Local não identificado]".
Regra 3: [A Queda da Trindade]. Pode ter 10 autores, registra todos se a agência local quiser (morte do et al.).
Regra 4: [A Partilha do GMD]. O antigo "Designador Geral" do AACR2 virou a Santa Trindade do RDA (Conteúdo, Mídia e Suporte - Tags 336, 337, 338).`
};
