import type { AdvancedTopic } from '../types';

export const m15: AdvancedTopic = {
  id: "m15",
  title: "15. Código de Catalogação Anglo-Americano (AACR2)",
  authorsAndFrameworks: `### Autores e Marcos Históricos do AACR2

- **Michael Gorman e Paul W. Winkler:** Editores gerais da 2ª edição do *Anglo-American Cataloguing Rules* (**AACR2**, 1978) e de suas revisões consolidadas (AACR2r 1988, 1998 e 2002/2005).
- **IFLA e a ISBD (International Standard Bibliographic Description):** Estabeleceu a divisão em 8 áreas de descrição e os sinais formais de pontuação prescrita, os quais foram integralmente incorporados à **Parte I do AACR2**.
- **Regras de Paris (1961):** Estabeleceram o consenso internacional para a determinação da escolha e da forma das entradas de autor e título, alicerçando a **Parte II do AACR2**.`,
  advancedTheory: `### 1. A Estrutura Dual do AACR2: Parte I vs. Parte II

Questão clássica de concurso (presente em 81.0% das provas analisadas):
- **PARTE I — Descrição Bibliográfica (Capítulos 1 a 13):**
  - Ensina como transcrever a materialidade do documento.
  - **Critério de divisão:** É estritamente subdividida por **TIPO DE SUPORTE MATERIAL**:
    - Cap. 1: Regras Gerais; Cap. 2: Livros, folhetos e folhas impressas; Cap. 3: Materiais cartográficos; Cap. 4: Manuscritos; Cap. 5: Música; Cap. 6: Gravações de som; Cap. 7: Filmes e vídeos; Cap. 8: Materiais gráficos; Cap. 9: Recursos eletrônicos; Cap. 10: Artefatos tridimensionais; Cap. 11: Microformas; Cap. 12: Recursos contínuos (periódicos); Cap. 13: Análise.
  - **Fonte Principal de Informação (FPI):** Livros = **Folha de rosto** (*Title page*). Informações colhidas fora da FPI devem vir obrigatoriamente entre **colchetes \`[ ]\`**.

- **PARTE II — Cabeçalhos, Títulos Uniformes e Remissivas (Capítulos 21 a 26):**
  - Normatiza a escolha do **Ponto de Acesso Principal** (*Main Entry*) e Secundários (*Added Entries*).
  - **Critério de divisão:** **NÃO** é dividida por suporte físico! Rege-se exclusivamente pelo grau e pela natureza da **responsabilidade intelectual** (Cap. 21).

---

### 2. As 8 Áreas de Descrição da ISBD / AACR2 e a Pontuação Prescrita

Cada área é precedida por ponto, travessão e espaço (\`. — \`), salvo início de parágrafo:
1. **Área de Título e Menção de Responsabilidade:** Título principal : subtítulo / primeiro autor ; segundo autor.
2. **Área de Edição:** . — Edição / responsável pela edição.
3. **Área de Detalhes Específicos do Material:** . — Usada apenas para mapas (escala/projeção), música e seriados (numeração).
4. **Área de Publicação, Distribuição etc. (Imprenta):** . — Lugar de publicação : Nome do editor, data de publicação.
5. **Área de Descrição Física:** . — Extensão (páginas ou volumes) : outros detalhes físicos (ilustrações) ; dimensões (altura em cm) + material adicional.
6. **Área de Série:** . — (Título da série ; numeração na série).
7. **Área de Notas:** . — Notas livres ou estruturadas (ex.: bibliografia, conteúdo, dissertação).
8. **Área de Número Normalizado:** . — ISBN ou ISSN : preço ou termos de disponibilidade.

---

### 3. Falta de Dados de Publicação na Imprenta (Regra 1.4)

Quando faltam dados na folha de rosto, o AACR2 prescreve o uso de abreviaturas latinas entre colchetes:
- Sem local de publicação conhecido: \`[s.l.]\` (*sine loco*).
- Sem nome de editor conhecido: \`[s.n.]\` (*sine nomine*).
- Sem local e sem editor: \`[s.l. : s.n.]\`.
- **Datas de Publicação Aproximadas (Regra 1.4F7):**
  - \`[ca. 1980]\`: Data provável (cerca de 1980).
  - \`[198-]\`: Década certa.
  - \`[198-?]\`: Década provável.
  - \`[19--]\`: Século certo.
  - \`[19--?]\`: Século provável.
  - \`[s.d.]\`: Data completamente desconhecida (*sine data*).

---

### 4. Condições Especiais de Autoria e a Regra de Três (Cap. 21)

- **Autoria Pessoal Única:** Entrada principal pelo nome do autor.
- **Responsabilidade Compartilhada (Até 3 autores):** Entrada principal pelo **primeiro autor** nomeado na página de rosto; secundárias para o 2º e 3º autores.
- **Responsabilidade Compartilhada (4 ou mais autores):** Entrada principal obrigatória pelo **TÍTULO DA OBRA**. Na menção de responsabilidade, registra-se apenas o primeiro autor seguido da abreviatura latina **\`[et al.]\`**. Apenas o 1º autor ganha entrada secundária.
- **Responsabilidade Mista:**
  - **Adaptações e paráfrases:** Se o texto foi substancialmente reescrito, a entrada principal é pelo **adaptador**; secundária para o autor original.
  - **Ilustrações predominantes:** Se o texto for subordinado às ilustrações (livro de arte infantil), entrada principal pelo **ilustrador**.
  - **Comunicações Mediúnicas / Espíritas (Regra 21.26):** Entrada principal sob o **espírito**, desde que nomeado no recurso; entrada secundária para o **médium** (*Ex.: Luiz, André (Espírito) com secundária para Xavier, Francisco Cândido*).
- **Entidades Coletivas (Regra 21.1B2):** Só têm entrada principal por seu nome quando a obra for de caráter administrativo, relatórios financeiros ou trabalhos que registrem o pensamento oficial da instituição. Leis e constituições entram pela jurisdição (*Brasil; São Paulo (Estado)*).`,
  unicampContext: `No acervo histórico do **Sistema de Bibliotecas da Unicamp (SBU)**:
- Milhares de registros do acervo foram originalmente catalogados segundo o **AACR2r**, exigindo que o bibliotecário compreenda a pontuação ISBD e as regras de imprenta históricas (\`[s.l.]\`, \`[s.n.]\`, \`[et al.]\`).
- Na catalogação na fonte de teses e dissertações, a identificação precisa da responsabilidade (autor vs orientador como entrada secundária) segue a disciplina consolidada pelo AACR2 e MARC 21.`,
  boardAnalysis: {
    trends: `### Padrões Extraídos das Provas Reais (OBJETIVA, CEBRASPE, VUNESP):
- **Aplicação estrita da Regra de Três:** Casos hipotéticos com 4 autores perguntam quem é a entrada principal. O gabarito é SEMPRE o **TÍTULO**.
- **Datas aproximadas do 1.4F7:** Cobrança da sintaxe exata de datas aproximadas (\`[ca. 1980]\` para cerca de; \`[198-?]\` para década provável).
- **Fonte Principal de Informação (FPI):** As bancas afirmam que a capa externa de um livro pode substituir a folha de rosto como fonte principal sem necessidade de colchetes. Gabarito: **ERRADO**. A FPI de livros é estritamente a **folha de rosto**.`,
    commonTraps: `> 🚨 **Pegadinha Clássica de Prova (OBJETIVA / CEBRASPE):**
> *"Ao catalogar um livro impresso com quatro autores na folha de rosto, o catalogador deve atribuir a entrada principal ao autor mais famoso ou coordenador geral da pesquisa, gerando entradas secundárias para os outros três autores."*
>
> **Gabarito: ERRADO!**
> Conforme a regra 21.6C2 do AACR2, se houver quatro ou mais autores sem indicação de responsabilidade principal isolada, a entrada principal recai compulsoriamente sobre o **TÍTULO DA OBRA**. Na descrição, transcreve-se apenas o primeiro autor acompanhado de \`[et al.]\`.`
  },
  memorizationMatrix: `### Matriz de Decisão Rápida do AACR2

| Cenário Catalográfico | Entrada Principal (*Main Entry*) | Entradas Secundárias (*Added Entries*) |
| :--- | :--- | :--- |
| **1 Autor Pessoal** | Nome do Autor | Título da Obra |
| **2 ou 3 Autores** | **1º Autor** citado na folha de rosto | 2º Autor, 3º Autor e Título |
| **4 ou mais Autores** | **TÍTULO DA OBRA** | Apenas para o 1º Autor (com \`[et al.]\` no corpo) |
| **Obra Psicografada** | **Espírito** (se nominado na obra) | **Médium** e Título |
| **Adaptação Substancial**| **Adaptador** | Autor original e Título |
| **Leis e Decretos** | **Jurisdição geográfica** (ex: Brasil) | Órgão emissor e Título uniforme |`
};
