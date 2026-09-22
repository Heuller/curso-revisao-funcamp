import type { AdvancedTopic } from '../types';

export const m15: AdvancedTopic = {
  id: "m15",
  title: "15. Código de Catalogação Anglo-Americano (AACR2)",
  authorsAndFrameworks: `### Autores e Marcos Históricos do AACR2

- **Michael Gorman e Paul W. Winkler:** Editores responsáveis pela 2ª edição do *Anglo-American Cataloguing Rules* (**AACR2**, 1978) e suas revisões sucessivas (1988, 1998 e 2002/2005).
- **IFLA e a ISBD (International Standard Bibliographic Description):** Criada a partir de 1971 para ditar as 8 áreas de descrição e os sinais formais de pontuação prescrita, os quais foram integralmente incorporados à **Parte I do AACR2**.
- **Joint Steering Committee for Revision of AACR (JSC):** Comitê internacional mantenedor que decretou o encerramento do desenvolvimento do AACR2 e a transição para o RDA.`,
  advancedTheory: `### 1. A Estrutura Dual do AACR2: Parte I vs. Parte II

O Código organiza-se em duas metades com lógicas radicalmente distintas:

- **PARTE I — Descrição Bibliográfica (Capítulos 1 a 13):**
  Ensina a registrar a materialidade do documento (transcrição de dados). É **estritamente subdividida por TIPO DE SUPORTE MATERIAL**:
  - Cap. 1: Regras Gerais para Descrição;
  - Cap. 2: Livros, Folhetos e Folhas Impressas;
  - Cap. 3: Materiais Cartográficos (Mapas);
  - Cap. 4: Manuscritos;
  - Cap. 5: Música;
  - Cap. 6: Gravações de Som;
  - Cap. 9: Recursos Eletrônicos;
  - Cap. 12: Recursos Contínuos (Periódicos).
  *Regra Mestra:* A transcrição fundamenta-se na **Fonte Principal de Informação (FPI)**. Qualquer dado extraído de fora da FPI deve ser inserido compulsoriamente entre **colchetes \`[ ]\`**.

- **PARTE II — Cabeçalhos, Títulos Uniformes e Remissivas (Capítulos 21 a 26):**
  Normatiza a escolha e a forma dos **Pontos de Acesso** (entradas principais e secundárias). 
  *Atenção Crítica:* A Parte II **NÃO é dividida por suporte físico**. Ela é regida exclusivamente pelas **condições de autoria e responsabilidade intelectual** (Cap. 21). As regras para um livro com três autores ou um CD com três compositores são idênticas.

---

### 2. Os Três Níveis de Descrição (Regra 1.0D)

O AACR2 não impõe uma catalogação exaustiva idêntica para todas as bibliotecas; ele faculta a escolha de três patamares de detalhamento:

- **1º Nível (Mínimo):** O mais conciso. Título principal / primeiro autor ; menção de edição resumida ; dados básicos de publicação (data) ; extensão física elementar. Adequado a pequenas bibliotecas escolares e comunitárias.
- **2º Nível (Padrão):** O padrão adotado pela grande maioria das bibliotecas universitárias e de pesquisa. Inclui títulos equivalentes, subtítulos, outros responsáveis intelectuais, localidade, editora, dimensões e notas essenciais.
- **3º Nível (Exaustivo):** O mais rico e detalhado. Descreve minuciosamente todos os elementos facultativos, particularidades de encadernação, tipografia e notas minuciosas. Empregado em acervos de Obras Raras e Bibliotecas Nacionais.

---

### 3. Fontes Principais de Informação (FPI)

O catalogador deve sempre respeitar a FPI definida pelo código para cada suporte:
- **Livros e Folhetos (Cap. 2):** A **Página de Rosto** (*Title Page*). A capa e a lombada **NÃO** são fontes principais de informação para livros!
- **Recursos Cartográficos (Cap. 3):** O próprio mapa ou sua legenda.
- **Gravações de Som (Cap. 6):** O selo do disco de vinil ou o corpo impresso do CD.

---

### 4. A Famosa "Regra dos Três" na Escolha do Ponto de Acesso Principal (Cap. 21)

Em obras de responsabilidade compartilhada entre autores pessoais:

- **De 1 a 3 Autores (Regra 21.6B / 21.6C1):**
  A **Entrada Principal** é feita obrigatoriamente pelo **primeiro autor** nomeado na página de rosto. Os demais autores (o segundo e o terceiro) recebem **entradas secundárias** sob seus respectivos nomes.
- **Quatro ou Mais Autores (Regra 21.6C2):**
  A **Entrada Principal** é feita compulsoriamente pelo **TÍTULO DA OBRA**. Somente o primeiro autor citado na fonte ganha uma entrada secundária; todos os demais autores são omitidos da menção de responsabilidade e substituídos pela expressão latina **\`[et al.]\`** (ou *"e outros"*).

> 💡 **Pontos de Acesso Secundários Mandatórios:**
> Para obras cuja entrada principal recai sobre o nome do autor, o AACR2 recomenda a feitura sistemática de entrada secundária para o **Título**, garantindo a recuperabilidade da obra pelo nome.`,
  unicampContext: `Embora o Sistema de Bibliotecas da Unicamp (SBU) tenha adotado o RDA para suas novas aquisições, o domínio do **AACR2** é mandatória para o concurso da FUNCAMP e para a gestão do legado:

- **Catálogo Retrospectivo:** Centenas de milhares de fichas e registros MARC 21 históricos da Unicamp foram processados sob as regras rígidas do AACR2 (presença das abreviações em latim \`[s.l.]\` - *sine loco*, \`[s.n.]\` - *sine nomine* e \`[et al.]\`).
- **Compatibilização de Registros:** O bibliotecário deve saber operar a migração e convivência harmônica entre os registros herdados em AACR2 e os novos metadados flexibilizados do RDA.`,
  boardAnalysis: {
    trends: `### Análise de Bancas (CEBRASPE, VUNESP e FUNCAMP)

- **CEBRASPE:** Explora rigorosamente a lógica estrutural: afirma que a Parte II é subdividida por tipo de suporte material (ERRADO, apenas a Parte I é dividida por suporte). Também testa o uso de colchetes para elementos fora da Fonte Principal de Informação.
- **VUNESP / FUNCAMP:** Cobram repetidamente a aplicação matemática da **Regra dos Três**: uma questão descreve um livro com 4 coautores e pergunta se o cabeçalho principal vai para o autor de maior titulação acadêmica (FALSO: entra pelo **TÍTULO**, não importando o status acadêmico do autor).`,
    commonTraps: `> 🚨 **Pegadinha Clássica CEBRASPE / VUNESP:**
> *"Ao catalogar um livro impresso com quatro autores explicitados na folha de rosto, o catalogador deve estabelecer como ponto de acesso principal o nome do autor responsável pela coordenação pedagógica da obra."*
>
> **Gabarito: ERRADO!**
> Conforme a regra 21.6C2 do AACR2, quando uma obra possui **quatro ou mais autores**, a entrada principal deve ser feita compulsoriamente pelo **TÍTULO DA OBRA**. O primeiro autor recebe apenas entrada secundária, e os demais são suprimidos sob a designação \`[et al.]\`.`
  },
  memorizationMatrix: `### Matriz Decisória do AACR2: Autoria e FPI

| Regra / Elemento | Condição do Documento | Decisão Catalográfica Obrigatória |
| :--- | :--- | :--- |
| **Fonte Principal (FPI)** | Livro impresso (Capítulo 2) | **Página de Rosto** (Capa externa NUNCA é FPI) |
| **Dado Fora da FPI** | Extraído de contracapa ou sumário | Envolver obrigatoriamente entre **colchetes \`[ ]\`** |
| **Até 3 Autores** | Responsabilidade compartilhada | Entrada Principal no **1º Autor**; outros são secundários |
| **4 ou mais Autores** | Responsabilidade compartilhada | Entrada Principal no **TÍTULO**; apenas 1º é secundário com \`[et al.]\` |
| **Níveis de Descrição** | Regra 1.0D | **1º Nível (Mínimo)**, **2º Nível (Padrão)**, **3º Nível (Exaustivo)** |`
};
