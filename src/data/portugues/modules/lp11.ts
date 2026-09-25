import type { AdvancedTopic } from '../types';

export const lp11: AdvancedTopic = {
  id: "lp11",
  title: "11. Concordância Nominal e Concordância Verbal",
  authorsAndFrameworks: `### Autores e Marcos Teóricos Fundamentais

- **Evanildo Bechara (2009):** *"Moderna Gramática Portuguesa"*. Sistematização rigorosa da concordância gramatical (lógica) vs. silepse (concordância ideológica) e as regras especiais com o pronome apassivador e índice de indeterminação.
- **Celso Cunha & Lindley Cintra (2001):** *"Nova Gramática do Português Contemporâneo"*. Estudo detalhado dos casos de dupla concordância facultativa (expressões partitivas e numerais percentuais).
- **Rocha Lima (2011):** *"Gramática Normativa da Língua Portuguesa"*. Diretrizes canônicas para concordância com adjetivos pospostos e antepostos a múltiplos substantivos.`,
  advancedTheory: `### 1. Concordância Verbal: O Núcleo do Sujeito como Bússola

A regra geral parece simples: **o verbo concorda em número (singular/plural) e pessoa (1ª, 2ª, 3ª) com o núcleo do sujeito**.
No entanto, os concursos exploram sistematicamente os casos especiais em que o sujeito está camuflado ou distante:

---

### 2. Os Casos de Concordância Verbal Mais Cobrados

#### A) O Enigma da Partícula "SE": Apassivadora vs. Indeterminadora
Esta é a questão campeã absoluta em provas da Vunesp / Funcamp:

| Estrutura da Partícula | Características Gramaticais | Regra de Concordância e Exemplos |
| :--- | :--- | :--- |
| **Partícula Apassivadora (VTD + SE)** | Verbo transitivo direto (aceita pergunta "O quê?"). Há **sujeito paciente**. | O verbo **concorda no plural**: *"Aluga-se uma sala"* vs. *"**Alugam-se** salas"*; *"Analisaram-se os relatórios técnicos"*. |
| **Índice de Indeterminação (VTI/VI + SE)** | Verbo transitivo indireto com preposição (*de, em, a*). **Sujeito indeterminado**. | O verbo fica **sempre no singular**: *"**Precisa-se** de novos técnicos"* (nunca *"Precisam-se de"*!); *"Trata-se de questões"*. |


#### B) Verbos Impessoais: HAVER e FAZER
- **HAVER (existir, acontecer, tempo decorrido):** Fica estritamente no singular.
  - *"**Havia** dez candidatos na sala."* (E nunca: "Haviam dez").
  - *"**Houve** muitos acertos no simulado."*
  - Locução verbal: *"**Deve haver** soluções viáveis."* (O auxiliar não vai ao plural!).
- **FAZER (tempo decorrido ou clima):** Fica estritamente no singular.
  - *"**Faz** cinco anos que me formei na Unicamp."* (E nunca: "Fazem cinco anos").
  - *"**Fazia** dias muito quentes no verão."*

#### C) Sujeito com Expressão Partitiva (*a maioria de, grande parte de, metade de*)
Quando a expressão partitiva vem seguida de um substantivo no plural, **a concordância é facultativa**:
- *"A maioria dos alunos **aprovou** a medida."* (Concorda com o núcleo singular "a maioria").
- *"A maioria dos alunos **aprovaram** a medida."* (Concorda com o especificador plural "alunos").
*(Ambas as construções são 100% corretas segundo a norma culta!).*

#### D) Pronomes Relativos: QUE vs. QUEM
- Com o pronome **QUE:** O verbo concorda compulsoriamente com o antecedente.
  - *"Fui **eu que elaborei** o projeto."* / *"Fomos **nós que elaboramos** o projeto."*
- Com o pronome **QUEM:** Duas opções corretas: concorda com o antecedente OU fica na 3ª pessoa do singular.
  - *"Fui **eu quem elaborei** o projeto"* OU *"Fui **eu quem elaborou** o projeto"*.

---

### 3. Concordância Nominal: Regras de Ouro e Pegadinhas

A regra básica exige que artigos, adjetivos, pronomes e numerais concordem em gênero (masculino/feminino) e número (singular/plural) com o substantivo.

#### A) O Quarteto "Anexo, Incluso, Próprio e Mesmo"
Concordam rigorosamente com a palavra a que se referem:
- *"As certidões seguem **anexas** ao processo."* (Mulher diz: *"Muito **obrigada**"*).
- *"Os documentos seguem **inclusos** na pasta."*
- *"Elas **mesmas** / Elas **próprias** conferiram o acervo."*
- ⚠️ **Atenção:** A locução prepositiva **"EM ANEXO"** é invariável!
  - *"As certidões seguem **em anexo**."*

#### B) "É Proibido", "É Necessário", "É Bom", "É Permitido"
1. **Sem artigo determinante:** Fica invariável no masculino singular!
   - *"É **proibido** entrada de pessoas estranhas."*
   - *"Paciência é **necessário** para vencer."*
2. **Com artigo determinante:** Concorda obrigatoriamente com o artigo!
   - *"É **proibida A** entrada de pessoas estranhas."*
   - *"**A** paciência é **necessária** para vencer."*

#### C) Palavras SEMPRE Invariáveis em Concursos
- **Menos:** Nunca existe "menas" na língua portuguesa!
  *(Certo: "Havia **menos** pessoas na palestra").*
- **Alerta:** Permanece invariável quando tem valor de advérbio (*"Os guardas estavam **alerta**"*).
- **Pseudo:** Prefixo invariável (*"Eram **pseudo**cientistas"*).`,
  unicampContext: `Nas provas da **Unicamp / Funcamp**, a banca Vunesp adora:
- **Sujeito Oracional:** Quando o sujeito é uma oração inteira (iniciada geralmente por "que"), o verbo principal deve ficar **obrigatoriamente na 3ª pessoa do singular**.
  *(Ex.: "Convém [verbo no singular] que todos os alunos participem do evento").*
- **Inversão Sintática Deliberada:** A banca coloca o sujeito depois de uma longa oração intercalada para tentar induzir o candidato ao erro de concordância.
  *(Ex.: "Constatou-se, após exaustivas análises das atas e relatórios trimestrais elaborados pela comissão paritária, **a inconsistência** [sujeito singular] dos números").*`,
  boardAnalysis: {
    trends: `### Padrões Extraídos das Provas Reais (VUNESP / FUNCAMP):
- **O Verbo "Existir" vs. "Haver":** A banca cria distratores trocando um pelo outro para ver se o candidato pluraliza o haver impessoal ou deixa o existir no singular erradamente.
  - Errado: *"Devem haver muitos motivos."* ➔ Correto: *"**Deve haver** muitos motivos."*
  - Errado: *"Existe muitos motivos."* ➔ Correto: *"**Existem** muitos motivos."*
- **Concordância da Partícula "SE":** Se houver preposição após o verbo com "se" (*precisa-se de, confia-se em, assiste-se a*), o verbo nunca vai para o plural!`,
    commonTraps: `> 🚨 **Pegadinha Clássica de Prova (VUNESP / FUNCAMP):**
> *"Tratam-se de propostas inovadoras para a educação."*
> 
> **Gabarito: ERRADO!**
> Quem se trata, trata-se **DE** alguma coisa (VTI com preposição). O termo *"de propostas inovadoras"* é objeto indireto preposicionado, e objeto não pode ser sujeito. Portanto, o sujeito é indeterminado e o verbo fica estritamente no singular: **"Trata-se de propostas inovadoras"**!`
  },
  memorizationMatrix: `### Matriz Decisiva: Concordância Verbal e Nominal

| Estrutura / Palavra | Regra Resumida | Exemplo Correto | Exemplo Errado de Prova |
| :--- | :--- | :--- | :--- |
| **VTD + SE** | Voz passiva; concorda com sujeito | *"**Vendem-se** livros usados."* | *"Vende-se livros usados."* |
| **VTI + SE** | Sujeito indeterminado; só no singular | *"**Precisa-se** de estagiários."* | *"Precisam-se de estagiários."* |
| **Haver** (sentido existir) | Verbo impessoal; sempre no singular | *"**Havia** dez alunos."* | *"Haviam dez alunos."* |
| **Fazer** (tempo decorrido) | Verbo impessoal; sempre no singular | *"**Faz** três meses."* | *"Fazem três meses."* |
| **Anexo(a)** | Concorda com o substantivo | *"Seguem **anexas** as fichas."* | *"Seguem anexo as fichas."* |
| **Em anexo** | Expressão 100% invariável | *"Seguem **em anexo** as fichas."* | *"Seguem em anexas as fichas."* |
| **É proibido / proibida** | Sem artigo = o; Com artigo = a | *"É **proibido** entrada."* / *"É **proibida a** entrada."* | *"É proibida entrada."* |`
};
