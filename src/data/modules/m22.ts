import type { AdvancedTopic } from '../types';

export const m22: AdvancedTopic = {
  id: "m22",
  title: "22. Propriedade Intelectual e Direitos Autorais",
  authorsAndFrameworks: `### Legislação, Tratados e Órgãos Centrais

- **Lei Federal nº 9.610/1998 (LDA):** A Lei Brasileira de Direitos Autorais, considerada uma das legislações mais protetivas e restritivas do cenário internacional.
- **Convenção de Berna (1886):** Tratado internacional basilar que consagrou o **Princípio da Proteção Automática**, dispensando formalidades ou registro prévio para o reconhecimento do direito de autor.
- **OMPI / WIPO (World Intellectual Property Organization):** Agência especializada das Nações Unidas encarregada da cooperação e governança global da propriedade intelectual.
- **Instituto Nacional da Propriedade Industrial (INPI):** Autarquia federal brasileira competente para concessão e registro de marcas e patentes.`,
  advancedTheory: `### 1. A Estrutura Bipartida da Propriedade Intelectual (PI)

A ordem jurídica divide a proteção das criações do intelecto em dois ramos fundamentais com naturezas distintas:

- **1. Propriedade Industrial (Patentes, Marcas e Desenhos Industriais):**
  Protege invenções técnicas aplicáveis à indústria e sinais distintivos de mercado.
  *Requisito Jurídico Mandatório:* A proteção **DEPENDE COMPULSORIAMENTE DE REGISTRO FORMAL** concedido pelo **INPI**. Sem a carta-patente ou o certificado de registro de marca, não há exclusividade legal.
- **2. Direitos Autorais e Direitos Conexos (Criações Literárias, Artísticas e Científicas):**
  Protege a forma de expressão original do espírito humano (livros, artigos científicos, músicas, filmes, códigos de computador).
  *Requisito Jurídico:* Conforme o Art. 18 da Lei nº 9.610/98, **a proteção independe de registro formal**. O direito nasce no instante mesmo da criação da obra. O eventual registro (na Biblioteca Nacional ou no Conselho Federal de Engenharia) tem caráter meramente **declaratório de presunção de autoria**, e não constitutivo.

---

### 2. A Dicotomia dos Direitos Autorais: Morais vs. Patrimoniais

A Lei nº 9.610/98 cinde os direitos autorais em duas esferas com regimes jurídicos opostos:

- **Direitos Morais (Vínculo de Personalidade do Autor):**
  Compreendem o direito perpétuo de reivindicar a paternidade da obra (ter seu nome creditado), de manter a obra inédita e de opor-se a modificações que desonrem sua reputação.
  *Atributos Jurídicos:* São **INALIENÁVEIS, IMPRESCRITÍVEIS e IRRENUNCIÁVEIS**. O autor **não pode vender, ceder nem renunciar** aos seus direitos morais (qualquer cláusula contratual em contrário é nula de pleno direito).
- **Direitos Patrimoniais (Exploração Econômica):**
  Compreendem o direito exclusivo de utilizar, fruir e dispor economicamente da obra (venda, reprodução, tradução, adaptação para cinema ou licenciamento comercial).
  *Atributos Jurídicos:* Podem ser **cedidos, transferidos ou vendidos** total ou parcialmente a terceiros (ex: contratos com editoras comerciais).

---

### 3. A Regra do Domínio Público e as Limitações aos Direitos Autorais

- **Prazo de Vigência Patrimonial (Art. 41 da LDA):**
  Os direitos patrimoniais perduram por **70 anos contados a partir de 1º de janeiro do ano subsequente ao falecimento do autor**. 
  *Regra Crítica de Prova:* A contagem **NÃO se inicia na data de publicação da obra**, mas sim no dia 1º de janeiro do ano seguinte à morte do criador.
  *Efeito do Domínio Público:* Qualquer pessoa pode reproduzir, traduzir e comercializar a obra livremente, mantendo-se **obrigatória a menção ao nome do autor original** (por força da perpetuidade dos direitos morais).
- **Limitações Legais (Reprodução em Bibliotecas):**
  A lei brasileira veda a cópia reprográfica integral de livros protegidos para fins privados. É autorizada a cópia reprográfica de **pequenos trechos** (a lei não fixa porcentagem exata), para uso exclusivamente privado do copista, sem intuito de lucro direto ou indireto.

---

### 4. As Licenças Abertas: O Ecossistema Creative Commons (CC)

As licenças **Creative Commons** constituem uma camada jurídica voluntária de licenciamento flexível baseada no lema *"Alguns Direitos Reservados"*:
- **BY (Atribuição):** Requisito obrigatório de creditar a autoria original;
- **NC (Não Comercial):** Veda a exploração comercial direta da obra por terceiros;
- **ND (Não a Obras Derivadas):** Permite a distribuição da obra apenas em sua forma original e integral, proibindo traduções, remixes ou adaptações;
- **SA (Compartilha Igual):** Obriga que qualquer obra derivada gerada seja distribuída sob os exatos termos da mesma licença original.`,
  unicampContext: `Na **Unicamp**:

- **Patentes na Inova Unicamp:** A Agência de Inovação da Unicamp gerencia um dos maiores portfólios de patentes acadêmicas da América Latina, zelando pelo depósito de invenções antes da publicação de teses de engenharia química e biotecnologia.
- **Licenciamento Aberto no Repositório:** O SBU adota a licença **Creative Commons Atribuição-NãoComercial (CC BY-NC)** como padrão na auto-submissão de teses e dissertações, garantindo que o conhecimento gerado com recursos públicos seja compartilhado livremente, sem apropriação comercial predatória por editoras privadas.`,
  boardAnalysis: {
    trends: `### Análise de Bancas (CEBRASPE, VUNESP e FUNCAMP)

- **CEBRASPE:** A banca explora reiteradamente o Art. 18 da Lei 9.610/98 afirmando falsamente que uma obra só é protegida se for registrada na Biblioteca Nacional ou se tiver ISBN (ERRADO, o direito nasce com a criação; o registro é facultativo). Também cobram que os **Direitos Morais são inalienáveis e perpétuos**.
- **VUNESP / FUNCAMP:** Cobram a fórmula exata do **Domínio Público** (70 anos a partir de 1º de janeiro do ano seguinte à morte do autor) e o significado das cláusulas das licenças **Creative Commons** (especialmente CC-BY-NC).`,
    commonTraps: `> 🚨 **Pegadinha Clássica CEBRASPE / VUNESP:**
> *"Ao firmar contrato de edição com editora universitária, o autor transfere a totalidade de seus direitos morais e patrimoniais, renunciando ao direito de exigir a menção de seu nome nas tiragens subsequentes."*
>
> **Gabarito: ERRADO!**
> Os **Direitos Morais são legalmente inalienáveis e irrenunciáveis**. O autor pode transferir unicamente os direitos **patrimoniais** de edição e venda. O direito de ter seu nome vinculado à obra é perpétuo e inderrogável.`
  },
  memorizationMatrix: `### Quadro Comparativo: Ramos da Propriedade Intelectual

| Dimensão Jurídica | Direitos Autorais (LDA 9.610/98) | Propriedade Industrial (LPI 9.279/96) |
| :--- | :--- | :--- |
| **Objeto de Proteção** | Obras literárias, científicas e artísticas | Invenções, Patentes, Marcas, Desenhos |
| **Exigência de Registro**| **NÃO EXIGE** (Registro é meramente declaratório) | **OBRIGATÓRIO** (Concedido pelo INPI) |
| **Direitos Morais** | Perpétuos, inalienáveis e irrenunciáveis | Direito de ser nomeado como inventor |
| **Direitos Patrimoniais**| **70 anos** pós-morte (a contar de 1º de janeiro seguinte) | Patente de Invenção: **20 anos** da data de depósito |
| **Órgão de Custódia** | Fundação Biblioteca Nacional (FBN) | Instituto Nacional da Propriedade Industrial (INPI) |`
};
