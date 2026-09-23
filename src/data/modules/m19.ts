import type { AdvancedTopic } from '../types';

export const m19: AdvancedTopic = {
  id: "m19",
  title: "19. Classificação Decimal de Dewey (CDD)",
  authorsAndFrameworks: `### Autores e Marcos Históricos da CDD

- **Melvil Dewey (1876):** Criador da *Dewey Decimal Classification* (**CDD**), introduzindo a estrutura decimal de 10 classes, a notação pura arábica, a localização relativa e o revolucionário *Índice Relativo*.
- **OCLC (Online Computer Library Center):** Proprietária dos direitos autorais da CDD desde 1988 e mantenedora da plataforma digital contínua *WebDewey*.
- **Amherst College (1873-1876):** Berço onde Melvil Dewey desenvolveu o sistema para organizar a biblioteca da faculdade, rompendo com a rigidez da localização fixa nas estantes.`,
  advancedTheory: `### 1. A Arquitetura Decimal de Dewey (CDD)

A **CDD** é um sistema de classificação predominantemente **hierárquico e enumerativo** (com forte capacidade sintética via tabelas auxiliares). Divide o universo do saber humano em **10 Grandes Classes decimais (000 a 900)**:

- \`000\`: Ciência da Computação, Informação e Obras Gerais
- \`100\`: Filosofia e Psicologia
- \`200\`: Religião e Teologia
- \`300\`: Ciências Sociais (Sociologia, Ciência Política, Economia, Direito, Educação)
- \`400\`: Línguas e Linguística
- \`500\`: Ciências Puras (Matemática, Astronomia, Física, Química, Geociências, Biologia)
- \`600\`: Tecnologia e Ciências Aplicadas (Medicina, Engenharia, Agricultura, Gestão)
- \`700\`: Artes e Recreação (Urbanismo, Arquitetura, Música, Esportes)
- \`800\`: Literatura e Retórica
- \`900\`: História, Geografia e Biografias

> 💡 **Regras Notacionais Rígidas da CDD:**
> - **Mínimo Obrigatório de 3 Dígitos:** Uma notação de classe na CDD nunca possui menos de três algarismos. Classes gerais são completadas com zeros à direita (ex: Ciência não é \`5\`, mas compulsoriamente \`500\`; Física é \`530\`).
> - **O Ponto Decimal Obrigatório:** Após o terceiro dígito, insere-se obrigatoriamente um ponto \`.\` antes de qualquer subdivisão analítica (ex: \`530.1\` para Física Teórica). Nunca existe mais de um ponto na notação da CDD.
> - **Notação Pura:** A CDD utiliza exclusivamente números arábicos na notação de classe (não adota letras ou sinais relacionais externos em suas notações básicas).

---

### 2. A Estrutura dos Três Sumários da CDD

1. **Primeiro Sumário (As 10 Classes Principais):** As dez grandes divisões de centenas (\`000\` a \`900\`).
2. **Segundo Sumário (As 100 Divisões):** Cada classe principal divide-se em 10 divisões (ex: na classe \`500\`, temos \`510\` Matemática, \`520\` Astronomia, \`530\` Física, \`540\` Química, \`550\` Ciências da Terra, \`570\` Biologia, \`580\` Botânica, \`590\` Zoologia).
3. **Terceiro Sumário (As 1000 Seções):** Cada divisão divide-se em 10 seções decimais (ex: dentro de \`530\` Física, temos \`531\` Mecânica Clássica, \`535\` Luz e Óptica, \`537\` Eletricidade e Eletrônica).

---

### 3. O Índice Relativo (Relative Index)

A grande inovação metodológica de Melvil Dewey:
- Reúne em **ordem alfabética** todos os termos e assuntos, indicando sob quais disciplinas ou aspectos cada assunto pode ser tratado.
- Demonstra que um mesmo assunto pode figurar em diversas classes dependendo do enfoque disciplinar da obra:
  - *Exemplo clássico:* **Tabaco** pode ser classificado em \`633.7\` (Agricultura/Cultivo), \`613.8\` (Higiene/Saúde e Dependência) ou \`338.1\` (Economia e Comércio Agrícola).

---

### 4. As 6 Tabelas Auxiliares da CDD (DDC Tables 1–6)

As tabelas auxiliares da CDD **NUNCA podem ser utilizadas isoladamente** como número de classificação na estante; elas devem ser acopladas a uma notação da tabela principal:

- **Tabela 1 (Subdivisões Padrão - T1):** A única tabela que pode ser anexada a **QUALQUER** número da CDD sem a necessidade de instrução expressa prévia (*Add note*). Subdivisões fundamentais:
  - \`-01\`: Filosofia e teoria
  - \`-02\`: Miscelânea
  - \`-03\`: Dicionários, enciclopédias e concordâncias
  - \`-05\`: Publicações seriadas (periódicos e revistas)
  - \`-07\`: Educação, pesquisa e tópicos relacionados
  - \`-08\`: Grupos de pessoas
  - \`-09\`: Tratamento histórico, geográfico e pessoas
- **Tabela 2 (Áreas Geográficas, Períodos Históricos, Pessoas - T2):** Utilizada mediante instrução explícita ou acoplada via T1 (\`-09\`).
- **Tabela 3 (Subdivisões para Literaturas Individuais e Formas Literárias - T3):** Desdobrada em T3A, T3B e T3C (poesia, drama, ficção, ensaios).
- **Tabela 4 (Subdivisões de Línguas Individuais - T4):** Gramática, fonética, dicionários bilíngues.
- **Tabela 5 (Grupos Étnicos e Nacionais - T5):** Povos, etnias e nacionalidades.
- **Tabela 6 (Línguas / Idiomas - T6):** Especificação do idioma de textos e traduções.

---

### 5. Regras Oficiais de Decisão e Preferência na CDD

- **Regra do Primeiro na Ordem (First-of-Two Rule):** Se uma obra aborda com igual profundidade dois tópicos que não apresentam relação de causa/efeito nem subordinação hierárquica imediata, classifica-se sob o número que aparece **primeiro numericamente** nas tabelas da CDD (ex: obra sobre Física \`530\` e Química \`540\` ➔ classifica-se compulsoriamente em \`530\`).
- **Regra do Três (Rule of Three):** Se a obra aborda **três ou mais** tópicos que se subordinam a uma classe superior comum, deve-se classificá-la na **classe imediatamente superior** que engloba todos eles (ex: obra sobre Física \`530\`, Química \`540\` e Biologia \`570\` ➔ classifica-se em Ciências Puras \`500\`).
- **Regra do Zero (Rule of Zero):** Subdivisões sem zero têm preferência sobre subdivisões iniciadas por \`0\`, e estas têm preferência sobre subdivisões iniciadas por \`00\`.
- **Regra da Aplicação (Rule of Application):** Obras que tratam da aplicação de um princípio teórico a uma disciplina específica são classificadas na disciplina onde o princípio é aplicado.

---

### 6. Conceitos Avançados: Classes Fênix, Relocações e WebDewey

- **Classes Fênix (Phoenix Schedules):** Revisões totais e estruturais de uma classe ou divisão inteira em novas edições da CDD, descartando o esquema anterior sem reaproveitar a notação antiga para os mesmos fins (ex: a reestruturação da classe \`780\` Música na 20ª edição).
- **Relocações (Relocations):** Transferência de um assunto de uma notação para outra entre edições sucessivas da CDD.
- **WebDewey:** Versão eletrônica da CDD disponibilizada pela OCLC, atualizada continuamente, com mapeamento direto para termos do vocabulário controlado MeSH e cabeçalhos da Library of Congress (LCSH).
- **Número de Chamada (Call Number):** Composto pela Notação de Assunto da CDD + Notação de Autor (Tabela de Cutter-Sanborn ou PHA) + Ano / Volume / Exemplar.`,
  unicampContext: `Na **Unicamp**, a totalidade das bibliotecas do Sistema de Bibliotecas da Unicamp (SBU) adota a **CDD (Classificação Decimal de Dewey)** conjugada com a **Tabela de Cutter-Sanborn** para a indexação temática e ordenação física dos acervos nas estantes. O domínio das 10 Grandes Classes, das Tabelas 1 e 2 da CDD e das Regras de Preferência (Regra do Primeiro e Regra do Três) é ferramenta diária do bibliotecário no processamento de livros, teses e relatórios técnicos.`,
  boardAnalysis: {
    trends: `### Padrões Extraídos das Provas Reais (OBJETIVA, CEBRASPE, VUNESP e FUNCAMP)

- **A Exclusividade da Tabela 1:** A pergunta mais recorrente em provas sobre tabelas da CDD é qual tabela auxiliar pode ser anexada a qualquer número básico sem requerer instrução de "adicione a" (Gabarito: **Tabela 1 - Subdivisões Padrão**).
- **Regras de Preferência (Primeiro na Ordem e Regra do Três):** Cobrança exaustiva em provas de concurso para bibliotecário. Quando aparecem 2 temas iguais ➔ o menor número (primeiro na ordem); quando aparecem 3 temas ➔ classe superior ampla.
- **Estrutura Notacional:** Exigência de 3 dígitos obrigatórios e ponto decimal estritamente após o terceiro dígito (ex: \`025.431\` para CDD).`,
    commonTraps: `> 🚨 **Pegadinha Clássica de Concurso:**
> *"Na Classificação Decimal de Dewey (CDD), caso uma monografia aborde com igual profundidade a Sociologia (301) e a Economia (330), o catalogador deve classificá-la obrigatoriamente na classe de maior especificidade numérica (330)."*
>
> **Gabarito: ERRADO!**
> Pela regra do primeiro na ordem (*First-of-two rule*), quando dois tópicos recebem igual ênfase e não pertencem à mesma família hierárquica imediata, o classificador deve escolher a notação que vem **primeiro numericamente no esquema** (portanto, \`301\` Sociologia tem preferência sobre \`330\` Economia).`
  },
  memorizationMatrix: `### Matriz de Memorização: CDD (Classificação Decimal de Dewey)

| Grande Classe | Denominação | Exemplos Notáveis |
| :--- | :--- | :--- |
| **000** | Ciência da Computação, Informação e Obras Gerais | Biblioteconomia (\`020\`), Enciclopédias gerais (\`030\`) |
| **100** | Filosofia e Psicologia | Ética (\`170\`), Psicologia (\`150\`) |
| **200** | Religião e Teologia | Cristianismo, Bíblia, Teologia sistemática |
| **300** | Ciências Sociais | Sociologia (\`301\`), Economia (\`330\`), Direito (\`340\`), Educação (\`370\`) |
| **400** | Línguas e Linguística | Linguística (\`410\`), Língua Portuguesa (\`469\`) |
| **500** | Ciências Puras | Matemática (\`510\`), Física (\`530\`), Química (\`540\`), Biologia (\`570\`) |
| **600** | Tecnologia e Ciências Aplicadas | Medicina (\`610\`), Engenharia (\`620\`), Gestão (\`658\`) |
| **700** | Artes e Recreação | Artes plásticas, Música (\`780\`), Esportes |
| **800** | Literatura e Retórica | Literatura brasileira (\`869.8\`), Teoria literária |
| **900** | História, Geografia e Biografias | Geografia (\`910\`), Biografias (\`920\`), História geral (\`930-990\`) |

#### As 6 Tabelas Auxiliares da CDD (Nunca usadas sozinhas!)
- **T1:** Subdivisões Padrão (A única universal, dispensando nota "adicione a")
- **T2:** Áreas Geográficas, Períodos Históricos, Pessoas
- **T3:** Subdivisões de Literaturas Individuais e Formas Literárias (T3A, T3B, T3C)
- **T4:** Subdivisões de Línguas Individuais
- **T5:** Grupos Étnicos e Nacionais
- **T6:** Línguas / Idiomas

#### As 4 Regras Canônicas de Decisão da CDD
1. **Regra do Primeiro na Ordem:** 2 assuntos iguais ➔ escolhe o menor número da tabela.
2. **Regra do Três:** 3 ou mais assuntos da mesma grande área ➔ sobe para a classe superior comum.
3. **Regra do Zero:** Menos zeros têm preferência sobre mais zeros.
4. **Regra da Aplicação:** Princípio aplicado a um assunto ➔ classifica no assunto onde foi aplicado.`
};

