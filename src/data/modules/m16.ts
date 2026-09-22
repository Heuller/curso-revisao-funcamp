import type { AdvancedTopic } from '../types';

export const m16: AdvancedTopic = {
  id: "m16",
  title: "16. MARC 21 (Machine-Readable Cataloging)",
  authorsAndFrameworks: `### Autores e Marcos Históricos do MARC

- **Henriette Avram (1966):** Engenheira de sistemas e analista da *Library of Congress (LoC)*. A visionária que estruturou o projeto piloto MARC original em fitas magnéticas da IBM, convertendo a catalogação física para processamento de máquina.
- **Library of Congress (LoC):** Entidade guardiã e mantenedora internacional do formato MARC 21, em conjunto com a Biblioteca e Arquivos do Canadá (BAC).
- **Normas ISO 2709 e ANSI/NISO Z39.2:** Padrões de engenharia computacional que definem a sintaxe física dos registros bibliográficos legíveis por máquina.`,
  advancedTheory: `### 1. A Natureza do MARC 21: Formato de Estrutura e Intercâmbio

O **MARC 21** (*Machine-Readable Cataloging for the 21st Century*) **NÃO é um código de catalogação**. Ele não dita regras de autoria nem pontuação de títulos (essas funções cabem ao AACR2 ou ao RDA). 

O MARC 21 é um **padrão de estrutura e comunicação de dados**: ele define como os computadores devem etiquetar, armazenar e transmitir registros catalográficos entre diferentes sistemas automatizados.

> 💡 **A Família dos 5 Formatos MARC 21:**
> 1. **Formato Bibliográfico:** Para descrição e acesso a livros, seriados, mapas e arquivos digitais;
> 2. **Formato de Autoridade:** Para padronização de nomes de autores, entidades, séries e assuntos;
> 3. **Formato de Classificação:** Para esquemas de notação (CDD, CDU, LC);
> 4. **Formato de Holdings (Fundos/Exemplares):** Para controle de localização física de volumes e fascículos;
> 5. **Formato de Informação Comunitária:** Para cadastramento de serviços de cidadania e instituições locais.

---

### 2. A Arquitetura Física do Registro Bibliográfico

Sob o capô de qualquer software de biblioteca, o registro MARC 21 ISO 2709 é composto por três blocos:

- **1. Líder (*Leader*):**
  Compreende exatamente as **primeiras 24 posições de caracteres (00 a 23)** do registro. Fornece metadados computacionais de controle (comprimento do registro, status, tipo de material mestre e nível de codificação).
- **2. Diretório (*Directory*):**
  É o "mapa de navegação" em bytes gerado **automaticamente pelo sistema** (o catalogador nunca digita o Diretório). Indica a tag do campo, a quantidade de caracteres de cada dado e a posição inicial onde o campo começa no arquivo binário.
- **3. Campos de Dados (*Data Fields*):**
  Onde os metadados catalográficos residem, subdivididos em:
  - **Campos de Controle Fixos (001 a 008):** Possuem tamanho engessado de caracteres. **NÃO possuem indicadores e NÃO possuem códigos de subcampo ($)**. *Exemplo:* o campo \`008\` possui rigorosamente 40 posições (as posições 35-37 indicam o idioma da publicação em código de 3 letras).
  - **Campos de Dados Variáveis (010 a 999):** Possuem tamanho dinâmico, identificados por uma **Etiqueta (Tag de 3 dígitos)**, **Dois Indicadores** (números de 0 a 9 ou espaço em branco) e **Subcampos** precedidos pelo delimitador \`$\` (ex: \`$a\`, \`$b\`, \`$c\`).

---

### 3. As Centenas do MARC 21 Bibliográfico (Mapa Estratégico de Tags)

- **0XX — Números de Controle e Códigos:**
  - \`020\`: ISBN (Número Internacional Normalizado para Livros);
  - \`022\`: ISSN (Número Internacional Normalizado para Publicações Seriadas);
  - \`082\`: Número de Classificação Decimal de Dewey (CDD);
  - \`080\`: Número de Classificação Decimal Universal (CDU).
- **1XX — Pontos de Acesso Principal:**
  - \`100\`: Nome Pessoal (Autor Principal);
  - \`110\`: Entidade Coletiva (Instituição autora);
  - \`111\`: Nome do Evento (Congresso, Simpósio, Seminário).
- **2XX — Título, Edição e Produção:**
  - \`245\`: Título e Menção de Responsabilidade (\`$a\` Título, \`$b\` Subtítulo, \`$c\` Autoria);
  - \`246\`: Título Variante (Capa, lombada ou forma equivalente);
  - \`250\`: Menção de Edição (\`$a\` Edição);
  - \`260\`: Publicação e Distribuição (Legado do AACR2: \`$a\` Local, \`$b\` Editora, \`$c\` Ano);
  - \`264\`: Produção, Publicação, Fabricação e Copyright (Padrão nativo do RDA).
- **3XX — Descrição Física e Suporte:**
  - \`300\`: Descrição Física (\`$a\` Paginação, \`$b\` Ilustrações, \`$c\` Dimensões);
  - \`336\` a \`338\`: Atributos RDA (Tipo de Conteúdo, Tipo de Mídia, Tipo de Suporte).
- **5XX — Notas Gerais e Específicas:**
  - \`500\`: Nota Geral;
  - \`504\`: Nota de Bibliografia e Referências;
  - \`505\`: Nota de Conteúdo Formatado (Sumário analítico de capítulos).
- **6XX — Acesso Temático (Assuntos):**
  - \`650\`: Assunto Tópico (*Topical Term*);
  - \`600\`: Assunto Nome Pessoal (Biografia de alguém);
  - \`651\`: Assunto Nome Geográfico (Localidade analisada).
- **7XX — Pontos de Acesso Secundários:**
  - \`700\`: Nome Pessoal Secundário (Coautor, Tradutor, Organizador, Ilustrador);
  - \`710\`: Entidade Coletiva Secundária.
- **8XX — Séries e Conexões Secundárias:**
  - \`856\`: Localização e Acesso Eletrônico (Link e URL direta para o PDF ou repositório).

---

### 4. Indicadores: A Sintaxe de Leitura da Máquina

Os dois indicadores refinam como o software de biblioteca processa o campo:
- **No campo \`245\` (Título):**
  - **1º Indicador:** Define se deve ser gerada entrada secundária para o título (\`0\` = Sem entrada secundária; \`1\` = Gera entrada secundária).
  - **2º Indicador:** Define o número de **caracteres não arquiváveis** a serem ignorados na ordenação alfabética (ex: para *"A República"*, o 2º indicador é \`2\`, ignorando *"A "* e ordenando por *"República"*).`,
  unicampContext: `Na Divisão de Tratamento da Informação da **Unicamp**:

- **Modernização para o Campo 264:** O SBU implementou scripts automatizados para desdobrar registros antigos do campo \`260\` nos múltiplos campos \`264\` do RDA, diferenciando explicitamente a data de publicação (\`264 _1\`) da data de proteção legal de direitos autorais (\`264 _4 $c c2024\`).
- **Campos 856 nos Repositórios:** O campo \`856 $u\` é fundamental na integração do Catálogo Acervos com o Repositório da Produção Intelectual, garantindo link direto permanente via protocolo Handle.`,
  boardAnalysis: {
    trends: `### Análise de Bancas (CEBRASPE, VUNESP e FUNCAMP)

- **CEBRASPE:** Foca na diferença técnica entre **Campos de Controle Fixos (001-008)** e **Campos de Dados**. Perguntam se o campo 008 usa subcampos \`$a\` e \`$b\` (FALSO, campos 00X não usam subcampos nem indicadores). Também cobram a função do Diretório, afirmando erradamente que ele é preenchido manualmente pelo catalogador (ERRADO, o Diretório é gerado pela máquina).
- **VUNESP / FUNCAMP:** Exigem com frequência a memorização prática das tags fundamentais: \`245\` (Título), \`100\` (Autor Principal), \`700\` (Coautores/Secundários), \`650\` (Assunto) e \`020\` (ISBN).`,
    commonTraps: `> 🚨 **Pegadinha Clássica CEBRASPE / VUNESP:**
> *"O formato MARC 21 estabelece a pontuação padrão da ISBD e os critérios normativos sobre quando o catalogador deve registrar o título abreviado de uma obra."*
>
> **Gabarito: ERRADO!**
> O MARC 21 **NÃO cria regras de descrição ou escolha de autoria**. Ele é apenas um formato técnico de empacotamento e intercâmbio de dados. As regras de catalogação pertencem exclusivamente a normas descritivas como o AACR2, RDA e ISBD.`
  },
  memorizationMatrix: `### O Mapa Mental das Centenas do MARC 21 Bibliográfico

| Bloco | Escopo do Conteúdo | Tags Canônicas de Prova |
| :--- | :--- | :--- |
| **0XX** | Códigos e Identificadores | \`020\` (ISBN), \`022\` (ISSN), \`082\` (CDD), \`080\` (CDU) |
| **1XX** | Ponto de Acesso Principal | \`100\` (Autor Pessoa), \`110\` (Entidade), \`111\` (Evento) |
| **2XX** | Título, Edição e Publicação | \`245\` (Título), \`250\` (Edição), \`260\` (Imprenta), \`264\` (RDA) |
| **3XX** | Descrição Física | \`300\` (Páginas/Dimensões), \`336-338\` (RDA Suporte) |
| **5XX** | Notas | \`500\` (Geral), \`504\` (Bibliografia), \`505\` (Sumário) |
| **6XX** | Assunto / Indexação | \`650\` (Assunto Tópico), \`600\` (Nome Pessoal como Assunto) |
| **7XX** | Pontos de Acesso Secundários| \`700\` (Coautores/Tradutores), \`710\` (Entidade Secundária) |
| **8XX** | Acesso Eletrônico e Séries | \`856\` (URL/Link de Acesso Eletrônico Direto) |`
};
