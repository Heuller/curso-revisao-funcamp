import type { AdvancedTopic } from '../types';

export const lp02: AdvancedTopic = {
  id: "lp02",
  title: "2. Princípios de Textualidade: Coesão e Coerência",
  authorsAndFrameworks: `### Autores e Marcos Teóricos Fundamentais

- **Ingedore Grunfeld Villaça Koch (2002):** *"A Coesão Textual"* e *"Desvendando os Segredos do Texto"*. A maior autoridade da linguística textual brasileira. Sistematizou a divisão científica entre **coesão referencial** (remissão a itens do universo textual) e **coesão sequencial** (encadeamento temporal e lógico de enunciados).
- **Beaugrande & Dressler (1981):** *"Introduction to Text Linguistics"*. Estabeleceram os 7 fatores constitutivos da textualidade: Coesão, Coerência, Intencionalidade, Aceitabilidade, Informatividade, Situacionalidade e Intertextualidade.
- **Leonor Fávero (1991):** *"Coesão e Coerência Textuais"*. Demonstrou a possibilidade de haver textos altamente coesos, mas inteiramente incoerentes (e vice-versa), delimitando as esferas gramatical (coesão) e pragmático-semântica (coerência).`,
  advancedTheory: `### 1. Coesão vs. Coerência: A Diferença Conceitual Irredutível

Muitos candidatos tratam coesão e coerência como sinônimos. Isso é um erro fatal em provas da Funcamp e Vunesp:

- **Coesão (Superfície Linguística):** É a conexão **gramatical e lexical** visível entre as palavras, orações e parágrafos de um texto. Funciona como a argamassa que une os tijolos (conectivos, pronomes, elipses, concordâncias).
- **Coerência (Profundidade Semântica e Pragmática):** É a harmonia global de **sentido e lógica** do texto. Depende da não contradição interna, da adequação ao mundo real e da interpretabilidade pelo leitor.

> 💡 **Exemplo Desmistificador Clássico:**
> *"O dia amanheceu ensolarado e radiante, portanto decidi levar o guarda-chuva porque as pedras voavam suavemente pelo céu de chocolate."*
> - **Possui coesão?** SIM! Gramaticalmente, usou conectivos perfeitos (*portanto, porque, e*).
> - **Possui coerência?** NÃO! É um disparate semântico; as proposições se contradizem e quebram a lógica da realidade fática.

---

### 2. Mecanismos de Coesão Referencial

A coesão referencial ocorre quando um elemento do texto aponta para outro elemento já dito ou que ainda será dito:

#### A) Anáfora (Olhar para Trás)
Ocorre quando um termo retoma um elemento antecedente no texto para evitar repetições monótonas:
> *"A pesquisadora da Unicamp publicou os dados do estudo. **Ela** foi ovacionada pela bancada."*
> *(O pronome "Ela" é anafórico, pois recupera "A pesquisadora da Unicamp").*

#### B) Catáfora (Olhar para Frente)
Ocorre quando um termo antecipa uma informação que só será revelada na sequência do texto:
> *"Só desejo **isto**: a aprovação no concurso da Unicamp."*
> *(O pronome "isto" é catafórico, pois projeta para o termo posterior "a aprovação").*

#### C) Elipse ou Zeugma (Omissão Subentendida)
Ocorre quando um termo já mencionado é omitido, ficando subentendido pelo contexto gramatical:
> *"Os técnicos elaboraram os relatórios; os analistas, [elaboraram] as diretrizes."*
> *(A vírgula substitui a forma verbal omitida, mantendo a coesão por elipse/zeugma).*

#### D) Coesão Lexical por Hiperonímia e Hiponímia
- **Hiperônimo:** Palavra de sentido mais amplo, genérico (ex.: *veículo, animal, documento, instituição*).
- **Hipônimo:** Palavra de sentido específico, particular (ex.: *motocicleta, leopardo, portaria, Unicamp*).
> *"A **Universidade Estadual de Campinas** concluiu a reforma. A **instituição** [hiperônimo] reabriu o campus."*

---

### 3. Coesão Sequencial e Conectivos

A coesão sequencial garante a progressão do texto, impedindo que ele ande em círculos (tautologia). Ela se apoia nos **operadores argumentativos**:

1. **Adição:** *além disso, não apenas... mas também, outrossim.*
2. **Adversidade / Oposição:** *contudo, todavia, não obstante, entretanto, porém.* (Quebram a expectativa criada na oração anterior).
3. **Concessão:** *embora, conquanto, ainda que, mesmo que, a despeito de.* (Aceita-se um fato contrário sem impedir a oração principal; exige verbo no subjuntivo).
4. **Causa e Consequência:** *visto que, já que, haja vista, por conseguinte, de sorte que.*
5. **Conclusão:** *portanto, logo, destarte, por conseguinte, dessarte.*

---

### 4. Fatores de Coerência Textual

Para que um texto seja considerado coerente pela linguística contemporânea, ele deve obedecer a 4 princípios pragmáticos:

1. **Princípio da Não Contradição:** O autor não pode afirmar $P$ no 1º parágrafo e defender o oposto de $P$ no 4º parágrafo, a menos que sinalize uma evolução deliberada de raciocínio.
2. **Princípio da Não Tautologia:** O texto não pode apenas repetir a mesma ideia com outras palavras sem acrescentar informação nova (o famoso "encher linguiça").
3. **Princípio da Relevância:** As partes do texto devem guardar relação direta com o tema central proposto, sem digressões aleatórias.
4. **Continuidade com Progressão Temática:** Manutenção do assunto-base (tema) acompanhado da introdução constante de novos dados informativos (rema).`,
  unicampContext: `Nos concursos da **Unicamp / Funcamp**, o examinador de Língua Portuguesa adora:
- Destacar um pronome demonstrativo (*este, esse, aquele*) ou relativo (*cujo, o qual, onde*) em um período longo e perguntar a qual substantivo ou oração inteira ele se refere.
- Trocar um conectivo concessivo (*embora*) por um adversativo (*no entanto*) e indagar se o sentido e a regência verbal original foram preservados.
- Avaliar a relação coesiva estabelecida pela pontuação (dois-pontos anunciando uma catáfora explicativa ou vírgula marcando zeugma).`,
  boardAnalysis: {
    trends: `### Padrões Extraídos das Provas Reais (VUNESP / FUNCAMP):
- **O Pronome Relativo "Cujo":** A banca adora testar o candidato sobre o pronome relativo *cujo*. Lembre-se: ele é estritamente anafórico (liga o substantivo antecedente ao consequente estabelecendo posse), nunca aceita artigo após si (*cujo o* não existe!) e concorda em gênero e número com a coisa possuída posterior (*o autor cuja obra*).
- **Confusão entre Este e Esse:**
  - *Este / Esta / Isto:* Refere-se ao que ainda vai ser dito (catáfora) ou ao termo imediatamente mais próximo em uma enumeração.
  - *Esse / Essa / Isso:* Refere-se ao que já foi dito anteriormente no parágrafo (anáfora).`,
    commonTraps: `> 🚨 **Pegadinha Clássica de Prova (VUNESP / FUNCAMP):**
> A banca afirma que a substituição de *"embora chovesse"* por *"apesar de que chovia"* ou *"contudo chovia"* mantém a mesma correção gramatical e sentido.
> 
> **Gabarito: CUIDADO!**
> Conectivos adversativos (*mas, porém, contudo*) iniciam orações coordenadas com verbo no **indicativo**. Conectivos concessivos (*embora, conquanto*) iniciam orações subordinadas com verbo no **subjuntivo**. A mera troca do conectivo sem ajustar o modo verbal acarreta erro gramatical!`
  },
  memorizationMatrix: `### Matriz Decisiva: Coesão e Coerência

| Elemento | Mecanismo | Exemplo Prático | Dica de Ouro de Concurso |
| :--- | :--- | :--- | :--- |
| **Anáfora** | Aponta para trás (retomada). | *"Aprovado no concurso, o candidato comemorou **sua** vitória."* | Usa-se pronome demonstrativo com **SS** (*esse, essa, isso*). |
| **Catáfora** | Aponta para frente (antecipação). | *"Ele disse apenas **isto**: estudem bastante."* | Usa-se pronome demonstrativo com **ST** (*este, esta, isto*). |
| **Elipse** | Omissão de termo recuperável. | *"Ela leu o livro; ele, o manual."* | A vírgula substitui a palavra omitida (*zeugma*). |
| **Hiperônimo** | Termo geral substitui o específico. | *"Ele comprou um **notebook**; o **aparelho** chegou intacto."* | Evita repetição cansativa do mesmo vocábulo. |
| **Concessão** | Quebra de expectativa sem anular. | *"**Embora** chovesse, fomos à aula na Unicamp."* | Exige verbo no **modo subjuntivo** (*chovesse*). |`
};
