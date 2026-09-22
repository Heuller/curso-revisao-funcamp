import type { AdvancedTopic } from '../types';

export const m19: AdvancedTopic = {
  id: "m19",
  title: "19. Classificação Decimal de Dewey (CDD) e CDU",
  authorsAndFrameworks: `### Autores e Marcos Históricos dos Sistemas Decimais

- **Melvil Dewey (1876):** Criador da *Dewey Decimal Classification* (**CDD**), introduzindo a estrutura decimal de 10 classes, o índice relativo e o sistema de tabelas auxiliares.
- **Paul Otlet e Henri La Fontaine (1895):** Fundadores do *Institut International de Bibliographie* (IIB). Adaptaram a CDD para a documentação analítica de artigos de periódicos, concebendo a **Classificação Decimal Universal (CDU)** com facetas e operadores relacionais.
- **OCLC (Online Computer Library Center):** Proprietária dos direitos da CDD e mantenedora da plataforma digital *WebDewey*.
- **UDC Consortium:** Consórcio internacional sediado em Haia, gestor da manutenção e evolução da CDU.`,
  advancedTheory: `### 1. A Arquitetura Decimal de Dewey (CDD)

A **CDD** é um sistema de classificação predominantemente **hierárquico e enumerativo** (com elementos facetados modernos). Divide o universo do saber humano em **10 Grandes Classes decimais (000 a 900)**:

- \`000\`: Ciência da Computação, Informação e Obras Gerais
- \`100\`: Filosofia e Psicologia
- \`200\`: Religião e Teologia
- \`300\`: Ciências Sociais
- \`400\`: Línguas e Linguística
- \`500\`: Ciências Puras (Matemática, Física, Química, Biologia)
- \`600\`: Tecnologia e Ciências Aplicadas (Medicina, Engenharia)
- \`700\`: Artes e Recreação
- \`800\`: Literatura e Retórica
- \`900\`: História, Geografia e Biografias

> 💡 **Regras Notacionais Rígidas da CDD:**
> - **Mínimo de 3 Dígitos:** Uma notação de classe na CDD nunca possui menos que três algarismos (ex: Ciência não é \`5\`, mas compulsoriamente \`500\`).
> - **O Ponto Decimal Obrigatório:** Após o terceiro dígito, insere-se obrigatoriamente um ponto \`.\` antes de qualquer subdivisão analítica (ex: \`530.1\` para Física Teórica).
> - **Notação Pura:** A CDD utiliza exclusivamente números arábicos (não mistura letras ou símbolos matemáticos complexos em suas notações básicas).

---

### 2. As 6 Tabelas Auxiliares da CDD

As tabelas auxiliares da CDD **NUNCA podem ser utilizadas isoladamente** como números de chamada na estante; elas devem ser acopladas a uma classe da tabela principal:

- **Tabela 1 (Subdivisões Padrão):** A única tabela que pode ser anexada a **QUALQUER** número da CDD sem requerer instrução específica prévia (ex: \`-03\` Dicionários e Enciclopédias, \`-05\` Publicações Seriadas, \`-09\` Tratamento Histórico e Geográfico).
- **Tabela 2:** Áreas Geográficas, Períodos Históricos e Pessoas.
- **Tabela 3:** Subdivisões para Literaturas Individuais e Formas Literárias.
- **Tabela 4:** Subdivisões para Línguas Individuais.
- **Tabela 5:** Grupos Étnicos e Nacionais.
- **Tabela 6:** Línguas / Idiomas.

---

### 3. Regras Oficiais de Decisão na Classificação por Dewey

- **Regra do Primeiro na Ordem de Classificação:** Se uma obra trata com igual profundidade de dois tópicos sem uma relação de influência recíproca, classifica-se sob o assunto que aparece **primeiro** na numeração das tabelas da CDD (ex: obra sobre Física \`530\` e Química \`540\` ➔ classifica-se em \`530\`).
- **Regra do Três:** Se a obra aborda **três ou mais** disciplinas que se subordinam a uma classe mais ampla, deve-se classificá-la na **classe imediatamente superior** que engloba todas elas (ex: se trata de Álgebra, Geometria e Cálculo, classifica-se em Matemática \`510\`).
- **Regra do Zero (*Rule of Zero*):** Subdivisões sem zero têm preferência sobre subdivisões iniciadas por \`0\`, e estas têm preferência sobre as iniciadas por \`00\`.

---

### 4. A Classificação Decimal Universal (CDU): A Abordagem Analítico-Sintética

Diferente da CDD, a **CDU** é um sistema **semi-facetado e analítico-sintético**:
- Não exige o preenchimento artificial de 3 dígitos (ex: Religião na CDU é simplesmente \`2\`).
- Apresenta **notação mista** e um rico conjunto de operadores e sinais auxiliares:
  - \`+\` (Adição / Coordenação): Liga assuntos não consecutivos (ex: \`51+53\` = Matemática e Física).
  - \`/\` (Barra Oblíqua / Extensão Consecutiva): Abrange uma faixa de classes sequenciais (ex: \`221/225\` = Da Bíblia Hebraica aos Evangelhos).
  - \`:\` (Dois Pontos / Relação Simples): Indica relação ou influência entre dois conceitos (ex: \`17:32\` = Ética relacionada à Política). É o sinal mais emblemático da CDU.
  - \`::\` (Dois Pontos Duplo / Ordem Fixa): Relação irreversível no sistema automatizado.
  - \`( )\` (Parênteses de Lugar): Designa localidade geográfica (ex: \`(81)\` = Brasil).
  - \`" "\` (Aspas / Tempo): Designa data ou época histórica (ex: \`"2024"\`).
  - \`=\` (Sinal de Igual / Língua): Designa o idioma do documento (ex: \`=111\` = em inglês).`,
  unicampContext: `Na **Unicamp**, a quase totalidade das bibliotecas do Sistema SBU adota a **CDD (Classificação Decimal de Dewey)** conjugada com a **Tabela de Cutter-Sanborn** para ordenação física das estantes. O conhecimento profundo das Tabelas 1 e 2 da CDD é exigência prática cotidiana no processamento técnico de livros importados e teses defendidas no campus de Campinas.`,
  boardAnalysis: {
    trends: `### Análise de Bancas (CEBRASPE, VUNESP e FUNCAMP)

- **CEBRASPE:** Explora rigorosamente as **Regras de Preferência da CDD** (a regra do primeiro na ordem e a regra do três). Na CDU, as questões focam nos sinais auxiliares, tentando inverter a função da Barra Oblíqua \`/\` (extensão consecutiva) com o sinal de Adição \`+\` (coordenação não consecutiva).
- **VUNESP / FUNCAMP:** Cobram recorrentemente a **Tabela 1 da CDD** (Subdivisões Padrão), perguntando qual tabela auxiliar pode ser aplicada de forma autônoma a qualquer notação de assunto sem necessidade de instrução de "adicione a".`,
    commonTraps: `> 🚨 **Pegadinha Clássica CEBRASPE / VUNESP:**
> *"Na Classificação Decimal de Dewey (CDD), caso uma monografia aborde com igual profundidade a Sociologia (301) e a Economia (330), o catalogador deve classificá-la obrigatoriamente na classe de maior especificidade numérica (330)."*
>
> **Gabarito: ERRADO!**
> Pela regra do primeiro na ordem (*First-of-two rule*), quando dois tópicos recebem igual ênfase e não pertencem à mesma família hierárquica imediata, o classificador deve escolher a notação que vem **primeiro numericamente no esquema** (portanto, \`301\` Sociologia tem preferência sobre \`330\` Economia).`
  },
  memorizationMatrix: `### Síntese Comparativa: CDD vs. CDU

| Dimensão Notacional | CDD (Dewey) | CDU (Universal) |
| :--- | :--- | :--- |
| **Tipo de Sistema** | Hierárquico Enumerativo | Analítico-Sintético / Semi-facetado |
| **Número Mínimo de Dígitos** | **3 Dígitos** (ex: \`500\`) | Sem mínimo (ex: \`5\`) |
| **Tipo de Notação** | Pura (Exclusivamente algarismos) | Mista (Números + Sinais gráficos + Letras) |
| **Tabela Auxiliar Universal**| **Tabela 1 (Subdivisões Padrão)** | Auxiliares Comuns e Especiais |

#### Tabela de Sinais Emblemáticos da CDU
- \`+\` : Adição / Conexão não sequencial (\`51+53\`)
- \`/\` : Extensão sequencial contínua (\`51/53\`)
- \`:\` : Relação / Influência entre assuntos (\`17:32\`)
- \`( )\`: Lugar geográfico (\`(81)\` = Brasil)
- \`" "\` : Tempo / Época (\`"2026"\`)
- \`=\` : Idioma (\`=134.3\` = Português)`
};
