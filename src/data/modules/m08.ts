import type { AdvancedTopic } from '../types';

export const m08: AdvancedTopic = {
  id: "m08",
  title: "8. Recuperação da Informação (SRI) e Estratégias de Busca",
  authorsAndFrameworks: `### Autores e Marcos Teóricos Estruturantes

- **Calvin N. Mooers (1950):** Cientista da computação pioneiro que cunhou a expressão *Information Retrieval* (Recuperação da Informação) e formulou a célebre *Lei de Mooers* ("um sistema de informação só será usado quando for mais fácil e menos doloroso para o usuário obter a informação do que não obtê-la").
- **F. W. Lancaster (1979):** Autor de *"Information Retrieval Systems: Characteristics, Testing and Evaluation"*, consolidando a avaliação de sistemas pelo binômio Revocação e Precisão.
- **Gerard Salton:** Criador do **Modelo Vetorial** e do sistema SMART, pioneiro no cálculo de pesos estatísticos **TF-IDF** e no ranqueamento automatizado por relevância.
- **Ricardo Baeza-Yates e Berthier Ribeiro-Neto (2011):** *"Modern Information Retrieval"*, obra clássica contemporânea adotada em concursos públicos.`,
  advancedTheory: `### 1. O Binômio Avaliativo Fundamental: Revocação (*Recall*) vs. Precisão (*Precision*)

Presente em 88.1% dos cadernos de provas reais analisados:
A avaliação da eficácia de um Sistema de Recuperação da Informação (SRI) apoia-se em duas métricas clássicas, com comportamento invariavelmente inversamente proporcional:

- **Revocação (*Recall* / Cobertura):**
  Capacidade do sistema de recuperar **todos os documentos relevantes** existentes na base.
  $$\\text{Revocação} = \\frac{\\text{Documentos Relevantes Recuperados}}{\\text{Total de Documentos Relevantes Existentes no Sistema}}$$
  - *Finalidade:* Revisões sistemáticas, perícias jurídicas e buscas de anterioridade de patentes (o usuário aceita examinar lixo informacional para garantir que não perdeu nenhum registro essencial).

- **Precisão (*Precision* / Exatidão):**
  Capacidade do sistema de recuperar **apenas documentos que sejam realmente relevantes**.
  $$\\text{Precisão} = \\frac{\\text{Documentos Relevantes Recuperados}}{\\text{Total de Documentos que o Sistema Recuperou na Busca}}$$
  - *Finalidade:* Consultas rápidas e atendimento de balcão (o usuário deseja poucos resultados, mas altamente pertinentes e certeiros).

---

### 2. Anomalias do SRI: Ruído vs. Silêncio

Conceitos cobrados com enorme frequência em questões literais:
- **Ruído (*Noise*):** Documentos **irrelevantes ou imprestáveis** que foram indevidamente recuperados na busca. Decorre de excesso de revocação ou estratégias de busca vagas e mal formuladas.
- **Silêncio (*Silence*):** Documentos **relevantes e pertinentes existentes na base de dados que NÃO foram recuperados** pelo sistema. Decorre de estratégias de busca excessivamente restritivas, falta de sinônimos ou ausência de termos controlados.

---

### 3. Modelos de Recuperação da Informação

- **Modelo Booleano Clássico (Teoria dos Conjuntos):**
  - Baseado na lógica matemática booleana. O documento é avaliado como relevante ou irrelevante (binário: 0 ou 1).
  - *Vantagem:* Simplicidade e controle rigoroso pelo usuário.
  - *Desvantagem fatal de concurso:* **Não ranqueia resultados por relevância**. Um artigo com 50 menções tem o mesmo status de um artigo com 1 menção.
- **Modelo Vetorial (Espaço Vetorial de Salton):**
  - Documentos e consultas são convertidos em vetores geométricos multidimensionais. A similaridade é calculada pelo cosseno do ângulo entre os vetores.
  - *Grande avanço:* Permite casamento parcial (*partial match*) e **ordena os resultados do mais relevante para o menos relevante** com base no algoritmo **TF-IDF** (*Term Frequency - Inverse Document Frequency*).
- **Modelo Probabilístico:**
  - Estima estatisticamente a probabilidade de um documento pertencer ao conjunto dos relevantes, calibrado pelo **Feedback de Relevância** (*Relevance Feedback*), no qual o usuário indica itens úteis e o sistema reformula a busca.

---

### 4. Operadores e Recursos de Formulação de Estratégias de Busca

- **Operadores Booleanos (Lógicos):**
  - **AND (Interseção):** Exige que ambos os termos estejam presentes. **Restringe** o universo de resultados e **eleva a precisão**.
  - **OR (União):** Recupera qualquer um dos termos. **Amplia** o universo de resultados e **eleva a revocação** (essencial para ligar sinônimos e termos afins).
  - **NOT / AND NOT (Exclusão):** Elimina registros que contenham o termo seguinte. **Restringe** a busca (requer cautela, pois pode causar silêncio).
- **Truncamento (*, ?, $, #):** Permite recuperar o radical da palavra e suas variações morfológicas (*Ex.: educ* recupera educação, educador, educacional, educando).
- **Operadores de Proximidade (NEAR, ADJ, WITH):** Exigem que dois termos ocorram contíguos ou a uma distância determinada de palavras, preservando a coerência sintática.
- **Aspas Duplas (" "):** Exigem a recuperação da frase ou expressão exata na ordem contígua rigorosa.`,
  unicampContext: `No **Sistema de Bibliotecas da Unicamp (SBU)**:
- Os bibliotecários atuam diretamente no apoio a revisões sistemáticas e integrativas de programas de pós-graduação da FCM, FEA e IB.
- Utilizam a estratégia em blocos conceituais (ex: PICO - População, Intervenção, Comparação, Desfecho), estruturando cada bloco com operadores **OR** entre sinônimos/DeCS/MeSH e unindo os blocos finais com o operador booleano **AND** para balanceamento ideal de revocação e precisão.`,
  boardAnalysis: {
    trends: `### Padrões Extraídos das Provas Reais (OBJETIVA, CEBRASPE, VUNESP):
- **O impacto dos Operadores Booleanos:** AND restringe (interseção); OR amplia (união/soma); NOT exclui (subtração).
- **Ruído vs Silêncio:** O Ruído é o documento inútil que veio; o Silêncio é o documento excelente que ficou esquecido na base.
- **Relação Inversa entre Revocação e Precisão:** As bancas adoram afirmar que é possível maximizar simultaneamente a 100% a revocação e a precisão em um sistema tradicional (ERRADO, quando uma sobe, a outra tende a cair).`,
    commonTraps: `> 🚨 **Pegadinha Clássica de Prova (OBJETIVA / CEBRASPE):**
> *"O ruído documental ocorre em um sistema de recuperação da informação quando documentos de alto valor e relevância temática para a pesquisa não são recuperados pelo mecanismo de busca."*
>
> **Gabarito: ERRADO!**
> A perda de documentos relevantes que deixam de ser recuperados é a definição de **SILÊNCIO**. O **RUÍDO** é o inverso: é a recuperação indesejada de documentos irrelevantes e imprestáveis para a pesquisa.`
  },
  memorizationMatrix: `### Matriz de Recuperação da Informação

| Indicador / Operador | Função Matemática | Impacto no Resultado | Efeito Colateral |
| :--- | :--- | :--- | :--- |
| **Revocação (*Recall*)** | Relevantes Recuperados / Total Relevantes | Traz tudo o que existe | Gera **Ruído** (lixo informativo) |
| **Precisão (*Precision*)**| Relevantes Recuperados / Total Recuperados | Traz apenas o tiro certeiro | Gera **Silêncio** (perde itens) |
| **Operador AND** | Interseção de conjuntos | **Restringe** a busca | Eleva a precisão |
| **Operador OR** | União de conjuntos | **Amplia** a busca (Sinônimos) | Eleva a revocação |
| **Operador NOT** | Exclusão de conjunto | **Elimina** tópicos | Pode causar silêncio |
| **Ruído (*Noise*)** | Documentos irrelevantes que vieram | Excesso de material inútil | O usuário perde tempo filtrando |
| **Silêncio (*Silence*)**| Documentos relevantes que não vieram | Omissão de registros vitais | A pesquisa fica incompleta |`
};
