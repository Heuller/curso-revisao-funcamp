import type { AdvancedTopic } from '../types';

export const m08: AdvancedTopic = {
  id: "m08",
  title: "8. Recuperação da Informação (SRI) e Estratégias de Busca",
  authorsAndFrameworks: `### Autores e Marcos Teóricos Estruturantes

- **Calvin N. Mooers (1950):** Cientista da computação que cunhou o termo *Information Retrieval* (Recuperação da Informação) e formulou a célebre *Lei de Mooers* sobre o comportamento de busca do usuário.
- **F. W. Lancaster (1979):** Autor do clássico *"Information Retrieval Systems: Characteristics, Testing and Evaluation"*, consolidando a teoria da avaliação de sistemas com base no binômio Revocação e Precisão.
- **Gerard Salton:** Criador do **Modelo Vetorial** e do sistema SMART, pioneiro no cálculo de pesos **TF-IDF** e no ranqueamento automatizado por relevância.
- **Ricardo Baeza-Yates e Berthier Ribeiro-Neto (2011):** *"Modern Information Retrieval"*, obra de referência canônica internacional adotada em concursos públicos.`,
  advancedTheory: `### 1. O Teorema Fundamental do SRI: Revocação (*Recall*) vs. Precisão (*Precision*)

A avaliação da eficácia de qualquer Sistema de Recuperação da Informação repousa em duas medidas centrais, as quais mantêm uma **relação tipicamente inversa**:

- **Revocação (*Recall* / Cobertura):**
  Mede a capacidade do sistema de **não deixar documentos relevantes de fora**.
  $$\\text{Revocação} = \\frac{\\text{Documentos Relevantes Recuperados}}{\\text{Total de Documentos Relevantes Existentes no Acervo}}$$
  *Quando buscar alta revocação:* Em pesquisas exaustivas, revisões sistemáticas da literatura e buscas de anterioridade de patentes, onde o pesquisador prefere analisar centenas de resultados irrelevantes (*ruído*) a perder um único estudo crucial.

- **Precisão (*Precision* / Exatidão):**
  Mede a capacidade do sistema de **não trazer documentos irrelevantes (ruído)**.
  $$\\text{Precisão} = \\frac{\\text{Documentos Relevantes Recuperados}}{\\text{Total de Documentos Recuperados pelo Sistema}}$$
  *Quando buscar alta precisão:* Em consultas pontuais de balcão e buscas rápidas de usuários, que necessitam de apenas três ou quatro artigos pertinentes e não dispõem de tempo para filtrar longas listagens.

> 💡 **Regra de Ouro em Concursos:**
> Revocação e Precisão comportam-se como uma gangorra: ao adotar estratégias para aumentar a Revocação (ampliando a busca com **OR** e truncamentos), a Precisão fatalmente cai (aumenta o ruído documental).

---

### 2. Modelos Clássicos de Recuperação da Informação

- **Modelo Booleano (Teoria dos Conjuntos):**
  Compara rigidamente os termos da consulta com o índice. A correspondência é binária e exata (*match* de sim ou não).
  *Limitação severa:* **Não permite ranqueamento** de relevância (todos os documentos recuperados possuem o mesmo peso).

- **Modelo Vetorial (Espaço Vetorial / Salton):**
  Representa documentos e consultas como vetores num espaço multidimensional, medindo a similaridade pelo cálculo do cosseno do ângulo entre eles.
  *Grande avanço:* Permite correspondência parcial (*partial match*) e **ordena os resultados do mais relevante para o menos relevante** com base no peso **TF-IDF** (*Term Frequency - Inverse Document Frequency*).

- **Modelo Probabilístico:**
  Estima a probabilidade matemática de um documento pertencer ao conjunto dos relevantes mediante mecanismos de realimentação de relevância (*relevance feedback*).

---

### 3. Mecânica dos Operadores e Técnicas de Busca

- **Operadores Booleanos:**
  - **AND (Interseção):** Exige a presença simultânea de ambos os termos. **Restringe** a busca (diminui o total de itens, elevando a precisão).
  - **OR (União):** Recupera qualquer um dos termos. **Amplia** a busca (essencial para agrupar sinônimos e grafias alternativas, elevando a revocação).
  - **NOT / AND NOT (Exclusão):** Elimina registros que contenham o termo indesejado. **Restringe** a busca (cuidado: pode excluir documentos relevantes inadvertidamente).
- **Operadores de Proximidade (NEAR, ADJ, WITH):**
  Exigem que as palavras ocorram a uma distância determinada no texto, controlando a coerência sintática.
- **Truncamento (*, ?, $):**
  Substitui caracteres no final ou meio da palavra para recuperar variações de gênero, número e derivações morfológicas (ex: \`bibliotec*\` recupera biblioteca, bibliotecário, biblioteconomia).
- **Busca por Expressão Exata ("Aspas Duplas"):**
  Obriga o motor a recuperar as palavras na sequência idêntica e contígua em que foram digitadas.`,
  unicampContext: `No **Sistema de Bibliotecas da Unicamp (SBU)**, a busca estruturada é componente diário da rotina técnica:

- **Estratégias PICO e SPIDER:** Os bibliotecários prestam consultoria metodológica especializada para pós-graduandos em Ciências Médicas e Odontologia, estruturando sintaxes de busca rigorosas (usando termos controlados **MeSH/DeCS** intercalados com **OR**, e combinando os blocos da pergunta clínica com **AND**).
- **Capacitação em Bases Avançadas:** Oferta de oficinas sobre filtros de sensibilidade (alta revocação) e especificidade (alta precisão) no PubMed, Embase e Web of Science.`,
  boardAnalysis: {
    trends: `### Análise de Bancas (CEBRASPE, VUNESP e FUNCAMP)

- **CEBRASPE:** Explora à exaustão as funções dos operadores booleanos **AND** (restringir/interseção) versus **OR** (ampliar/união). Também formula itens propondo que uma revisão sistemática exige formulação de sintaxes voltadas à máxima precisão (FALSO, revisões sistemáticas exigem **alta revocação**).
- **VUNESP / FUNCAMP:** Cobram o Modelo Vetorial de Salton como resposta à principal deficiência do Modelo Booleano (a impossibilidade de ranquear os resultados por ordem de importância).`,
    commonTraps: `> 🚨 **Pegadinha Clássica CEBRASPE / VUNESP:**
> *"Para expandir o universo de recuperação de documentos em uma pesquisa sobre 'Direito Administrativo', o bibliotecário deve articular os termos correlatos mediante a utilização do operador booleano AND."*
>
> **Gabarito: ERRADO!**
> O operador **AND** promove a **interseção**, o que diminui e restringe o número total de resultados. Para expandir a abrangência da busca e abarcar termos correlatos e sinônimos, deve-se utilizar o operador booleano **OR**.`
  },
  memorizationMatrix: `### Síntese Estratégica: O Equilíbrio da Recuperação

| Objetivo do Usuário | Métrica Prioritária | Tática Operacional | Efeito Colateral |
| :--- | :--- | :--- | :--- |
| **"Não quero perder nada!"** (Revisão Sistemática) | **Alta Revocação** (*Recall*) | Uso massivo de **OR**, truncamentos (\`*\`) e termos livres | Aumenta o ruído (documentos inúteis no meio) |
| **"Quero 3 artigos perfeitos!"** (Consulta Rápida) | **Alta Precisão** (*Precision*) | Uso de **AND**, **NOT**, aspas duplas e limites de ano/idioma | Aumenta o silêncio (perda de documentos pertinentes) |

#### Funções dos Operadores Booleanos
- **AND:** Interseção ➔ **Restringe** o resultado.
- **OR:** União ➔ **Amplia** o resultado (Ideal para sinônimos).
- **NOT:** Exclusão ➔ **Elimina** termos específicos.`
};
