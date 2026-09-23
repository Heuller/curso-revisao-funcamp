import type { AdvancedTopic } from '../types';

export const m16: AdvancedTopic = {
  id: "m16",
  title: "16. MARC 21 (Machine-Readable Cataloging)",
  authorsAndFrameworks: `### Autores e Marcos Históricos do MARC

- **Henriette Avram (1966):** Analista de sistemas da *Library of Congress (LoC)*. A pioneira que concebeu a estrutura piloto do formato MARC original, transformando a catalogação em cartões na catalogação legível por computador.
- **Library of Congress (LoC):** Guardiã e mantenedora oficial internacional do padrão MARC 21, em parceria com a Biblioteca e Arquivos do Canadá (BAC).
- **Normas ISO 2709 e ANSI/NISO Z39.2:** Padrões técnicos de telecomunicações e engenharia de software que padronizam a sintaxe física e a transmissão de registros bibliográficos em fita ou rede.`,
  advancedTheory: `### 1. A Natureza do MARC 21: Formato de Estrutura e Intercâmbio

Em concursos públicos (presente em 58.3% das provas analisadas), o examinador adora testar a fronteira entre código descritivo e formato:
- O **MARC 21 NÃO é um código de catalogação**. Ele não dita regras sobre quem é o autor principal ou se a primeira palavra do título deve ser maiúscula (isso cabe ao AACR2 ou ao RDA).
- O MARC 21 é um **padrão de estrutura, etiquetagem e intercâmbio de dados**: define etiquetas numéricas (tags), indicadores e subcampos para que sistemas de computadores diferentes compreendam os metadados bibliográficos.

#### A Família dos 5 Formatos MARC 21:
1. **Bibliográfico:** Para descrição de livros, periódicos, mapas, arquivos de computador e gravações.
2. **Autoridades:** Para controle e normalização de nomes de pessoas, entidades, eventos e cabeçalhos de assunto.
3. **Classificação:** Para esquemas e tabelas de classificação (CDD, LC).
4. **Holdings (Fundos / Dados de Exemplar):** Para controle de localização física de cópias, volumes e fascículos na estante.
5. **Informação Comunitária:** Para serviços locais e guias de cidadania.

---

### 2. A Arquitetura Física do Registro Bibliográfico

Composto por três blocos computacionais fundamentais:
- **1. Líder (*Leader*):** As primeiras **24 posições de caracteres (00 a 23)** do registro. Contém informações essenciais para a máquina (comprimento total do registro, status do registro, tipo de registro bibliográfico e nível de catalogação).
- **2. Diretório (*Directory*):** Gerado **automaticamente pelo sistema** (nunca digitado pelo bibliotecário). Atua como um índice remissivo binário que informa para cada campo: a Tag de 3 dígitos, o comprimento do campo e a posição do caractere inicial.
- **3. Campos de Dados:**
  - **Campos de Controle Fixos (001 a 008):** Tamanho fixo de caracteres. **NÃO possuem indicadores e NÃO possuem códigos de subcampo ($)**. Destaque para o campo \`008\` (rigorosamente 40 caracteres, contendo ano de publicação, país e código de 3 letras do idioma).
  - **Campos de Dados Variáveis (010 a 999):** Possuem etiqueta (Tag de 3 dígitos), **dois indicadores** e **subcampos** precedidos pelo delimitador \`$\` (ex.: \`$a\`, \`$b\`, \`$c\`).

---

### 3. As Tags Mais Cobradas em Concursos Públicos

#### Bloco 0XX — Códigos e Identificadores
- \`020\`: ISBN (\`$a\` número normalizado, \`$q\` encadernação/qualificador).
- \`022\`: ISSN (\`$a\` número normalizado de periódicos).
- \`040\`: Fonte da catalogação (\`$a\` agência catalogadora original, \`$c\` agência que transcreveu).
- \`082\`: Número de classificação CDD (\`$a\` número de classificação, \`$2\` edição da CDD).
- \`090\`: Número de chamada local (\`$a\` classificação, \`$b\` código do autor/Cutter).

#### Bloco 1XX — Ponto de Acesso Principal
- \`100\`: Nome pessoal como autor principal (\`$a\` nome invertido, \`$d\` datas de nascimento/morte).
- \`110\`: Entidade coletiva como autora principal (\`$a\` nome da entidade, \`$b\` unidade subordinada).
- \`111\`: Nome de evento/conferência como autor principal (\`$a\` nome do evento, \`$n\` número da edição, \`$d\` data do evento, \`$c\` local).

#### Bloco 2XX — Título, Edição e Publicação
- \`245\`: Título e Menção de Responsabilidade:
  - \`$a\`: Título principal.
  - \`$b\`: Subtítulo (outras informações sobre o título).
  - \`$c\`: Menção de responsabilidade (autoria, tradução, ilustrações).
  - *1º Indicador:* \`0\` (sem entrada secundária de título) ou \`1\` (gera entrada secundária de título).
  - *2º Indicador:* Quantidade de caracteres não arquiváveis a ignorar na ordenação (ex: \`2\` para "A ", \`3\` para "O ", \`4\` para "As ").
- \`250\`: Menção de edição (\`$a\` número ou descrição da edição).
- \`260\`: Imprenta tradicional (AACR2): \`$a\` Local, \`$b\` Editora, \`$c\` Data.
- \`264\`: Imprenta RDA: Distingue publicação (\`264 _1\`), produção (\`264 _0\`), distribuição (\`264 _2\`), fabricação (\`264 _3\`) e copyright (\`264 _4\`).

#### Bloco 3XX — Descrição Física e Suporte
- \`300\`: Descrição Física (\`$a\` paginação/volumes, \`$b\` ilustrações, \`$c\` dimensões em cm, \`$e\` material anexo).
- \`336\`: Tipo de Conteúdo (RDA).
- \`337\`: Tipo de Mídia (RDA).
- \`338\`: Tipo de Suporte (RDA).

#### Bloco 5XX — Notas
- \`500\`: Nota Geral.
- \`502\`: Nota de Dissertação ou Tese (grau acadêmico, instituição, ano).
- \`504\`: Nota de Bibliografia e Referências bibliográficas.
- \`505\`: Nota de Conteúdo Formatado (sumário dos capítulos).
- \`520\`: Nota de Resumo ou Sumário executivo.

#### Bloco 6XX — Acesso Temático (Assuntos)
- \`650\`: Assunto Tópico (\`$a\` termo principal, \`$x\` subdivisão geral, \`$z\` subdivisão geográfica, \`$y\` subdivisão cronológica, \`$v\` subdivisão de forma).
- \`600\`: Nome pessoal como assunto (obras biográficas ou estudos críticos sobre um autor).
- \`651\`: Nome geográfico como assunto.

#### Bloco 7XX e 8XX — Entradas Secundárias e Acesso Remoto
- \`700\`: Nome pessoal como entrada secundária (coautores, orientadores, tradutores, ilustradores).
- \`710\`: Entidade coletiva como entrada secundária.
- \`856\`: Localização e Acesso Eletrônico (\`$u\` endereço eletrônico URI/URL/Handle do recurso digital).`,
  unicampContext: `Na Divisão de Tratamento da Informação da **Unicamp**:
- O SBU utiliza rigorosamente o padrão MARC 21 Bibliográfico integrado ao sistema Alma/Primo.
- Nas teses e dissertações, o campo \`502\` é mandatório para registrar o grau acadêmico e faculdade da Unicamp, e o campo \`856 $u\` ancora o link permanente Handle do Repositório Institucional.
- O campo \`700\` recebe os orientadores e coorientadores com o subcampo \`$e\` de relação (*orient.*).`,
  boardAnalysis: {
    trends: `### Padrões Extraídos das Provas Reais (OBJETIVA, CEBRASPE, VUNESP):
- **Campos de Controle Fixos (001-008):** Cobrança insistente de que campos 00X **NÃO** possuem indicadores e **NÃO** possuem códigos de subcampo ($).
- **Subcampos do campo 245:** Questões práticas cobram o emparelhamento: \`$a\` Título, \`$b\` Subtítulo, \`$c\` Responsabilidade intelectual.
- **Segundo indicador do campo 245:** Questões perguntam qual o segundo indicador para o título *"Os Lusíadas"*. Resposta: \`3\` (pois "Os " possui 3 caracteres: O, s e o espaço).
- **Distinção entre 100 e 700:** O autor principal entra no campo \`100\`; todos os coautores e colaboradores secundários entram no campo \`700\`.`,
    commonTraps: `> 🚨 **Pegadinha Clássica de Prova (OBJETIVA / CEBRASPE):**
> *"No formato MARC 21 Bibliográfico, o campo fixo de controle 008 utiliza o subcampo $a para registrar a língua da publicação e o subcampo $b para o país de origem."*
>
> **Gabarito: ERRADO!**
> Os campos de controle (001 a 008) **não possuem delimitadores de subcampos ($)** nem indicadores. Seus dados são posicionais (ex.: idioma nas posições 35 a 37 do campo 008).`
  },
  memorizationMatrix: `### Resumo Estratégico das Tags MARC 21 mais Cobradas

| Tag MARC | Descrição do Campo | Subcampos Cruciais de Concurso |
| :--- | :--- | :--- |
| **008** | Campo Fixo de Controle (40 posições) | Sem subcampos nem indicadores (pos. 35-37 = Idioma) |
| **020** | ISBN | \`$a\` (Número do ISBN) |
| **082** | Notação da CDD | \`$a\` (Número da classe) |
| **100** | Autor Pessoal Principal | \`$a\` (Nome), \`$d\` (Datas de nascimento/morte) |
| **245** | Título e Responsabilidade | \`$a\` (Título), \`$b\` (Subtítulo), \`$c\` (Autoria) |
| **250** | Menção de Edição | \`$a\` (Edição, ex.: 3. ed.) |
| **260 / 264** | Publicação / Produção | \`$a\` (Local), \`$b\` (Editora), \`$c\` (Ano) |
| **300** | Descrição Física | \`$a\` (Páginas/Volumes), \`$b\` (Ilustrações), \`$c\` (Altura em cm) |
| **502** | Nota de Tese / Dissertação | \`$a\` (Grau acadêmico, instituição e ano da defesa) |
| **650** | Assunto Tópico | \`$a\` (Termo de assunto principal) |
| **700** | Entrada Secundária Pessoal | \`$a\` (Coautor, Tradutor, Orientador) |
| **856** | Acesso Eletrônico | \`$u\` (Link direto / URL do documento) |`
};
