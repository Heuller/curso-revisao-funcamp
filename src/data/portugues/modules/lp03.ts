import type { AdvancedTopic } from '../types';

export const lp03: AdvancedTopic = {
  id: "lp03",
  title: "3. Argumentação e Tipos de Argumentos",
  authorsAndFrameworks: `### Autores e Marcos Teóricos Fundamentais

- **Chaïm Perelman & Lucie Olbrechts-Tyteca (1958):** *"Tratado da Argumentação: A Nova Retórica"*. A bíblia moderna da teoria da argumentação. Resgata a dialética aristotélica, demonstrando que a argumentação visa à persuasão e à adesão dos espíritos a uma tese.
- **Stephen Toulmin (1958):** *"Os Usos do Argumento"*. Criador do consagrado Modelo de Toulmin: Dado (Claim), Garantia (Warrant), Apoio (Backing) e Qualificador Modal.
- **Ingedore Koch & Vanda Elias (2010):** *"Escrever e Argumentar"*. Demonstram que a linguagem é intrinsecamente argumentativa: todo ato de fala visa influenciar ou orientar o julgamento do interlocutor.`,
  advancedTheory: `### 1. Estrutura Lógica: Tese vs. Argumento

Toda dissertação argumentativa é sustentada por dois pilares fundamentais:

- **Tese:** É a **opinião central**, o posicionamento, a ideia mestra que o autor deseja defender e fazer o leitor aceitar.
  *(Exemplo: "A inteligência artificial generativa exige regulamentação ética urgente nas universidades públicas.")*
- **Argumento:** É a **justificativa**, a prova, a razão lógica ou evidência concreta que responde à pergunta *"Por que você defende essa tese?"*.
  *(Exemplo: "Porque o uso indiscriminado e opaco de algoritmos tem amplificado vieses discriminatórios e plágio acadêmico não rastreável.")*

---

### 2. A Tipologia dos Argumentos em Concursos Públicos

As bancas examinadoras (Vunesp, Funcamp) exigem que o candidato reconheça os diferentes expedientes retóricos empregados nos textos de apoio:

#### A) Argumento de Autoridade (Argumentum ad Verecundiam Legítimo)
Sustenta-se na voz, no prestígio acadêmico ou na reputação técnica de um especialista ou instituição consagrada na área em debate.
> *"Como assevera o professor Antonio Candido, a literatura é um direito humano incompressível, indispensável para a humanização do indivíduo."*
> - **Marcador de identificação:** Citação direta ou indireta de cientistas, juristas, pesquisadores ou relatórios da OMS/UNESCO.

#### B) Argumento por Evidência / Provas Concretas (Dados Estatísticos e Fatos Históricos)
Apoia-se em dados empíricos, pesquisas laboratoriais, levantamentos estatísticos e fatos históricos documentados.
> *"Segundo dados consolidados pelo IBGE (2024), mais de 30% dos domicílios em áreas periféricas ainda não possuem acesso à internet banda larga, comprovando a persistência do fosso digital."*
> - **Marcador de identificação:** Porcentagens, séries temporais, gráficos e dados censitários.

#### C) Argumento de Causa e Consequência (Nexo Causal)
Demonstra que um fenômeno $B$ (efeito) decorre direta e inevitavelmente de um fenômeno $A$ (causa primária).
> *"A falta de investimento contínuo na conservação predial das bibliotecas (causa) culminou na proliferação de colônias de fungos e na perda irrecuperável de obras raras do século XVIII (consequência)."*

#### D) Argumento por Exemplificação / Ilustração
Traz um caso representativo real, notório e concreto para tirar a tese do campo abstrato e torná-la inquestionável aos olhos do leitor.
> *"A vulnerabilidade dos arquivos digitais não é teórica: em 2021, o ataque cibernético ao Ministério da Saúde paralisou por semanas a emissão de comprovantes de vacinação."*

#### E) Argumento por Comparação / Analogia
Estabelece um paralelo entre duas realidades distintas, demonstrando que a lógica aplicável a uma deve ser estendida à outra.
> *"Assim como um hospital não pode operar sem esterilização estrita de seus instrumentos, uma universidade não pode produzir ciência sem acervos bibliográficos fidedignos."*

---

### 3. Estratégias Argumentativas Avançadas: Concessão e Refutação

O argumentador maduro não finge que a oposição não existe. Ele utiliza a técnica da **contra-argumentação**:

1. **Concessão Prévia:** O autor reconhece uma verdade parcial do adversário (*"É verdade que a digitalização barateia o acesso..."*).
2. **Refutação / Quebra da Objeção:** Em seguida, introduz um argumento mais forte que derruba a oposição (*"...no entanto, confiar exclusivamente na nuvem privada coloca em risco a soberania da memória nacional"*).

---

### 4. Falácias Argumentativas Recorrentes em Provas

Falácias são raciocínios que parecem válidos à primeira vista, mas contêm vícios lógicos insolúveis:

- **Ad Hominem (Ataque Pessoal):** Desqualifica-se a pessoa do autor em vez de combater os argumentos e dados apresentados por ele.
- **Falácia do Espantalho (Straw Man):** O autor distorce, exagera ou caricatura a tese do oponente para poder refutá-la com facilidade.
- **Generalização Apressada:** Concluir uma regra universal a partir de um ou dois exemplos isolados (*"Conheço um pesquisador que usou ChatGPT e errou tudo, logo a IA é inútil para a ciência"*).
- **Petição de Princípio (Círculo Vicioso):** A conclusão repete exatamente a premissa de partida com outras palavras (*"A leitura é benéfica porque faz muito bem para a pessoa que lê"*).`,
  unicampContext: `Nos concursos da **Unicamp / Funcamp**, a banca Vunesp cobra a argumentação em textos opinativos de editorialistas e acadêmicos:
- **Identificação da Linha de Raciocínio:** Questões exigem que o candidato reconheça se o autor construiu sua tese por indução (do caso particular para a lei geral) ou dedução (da premissa universal para o caso particular).
- **Detecção de Falácias no Discurso de Personagens:** Em crônicas e contos, a banca costuma indagar: *"A fala da personagem no 3º quadrinho baseia-se em uma falácia de..."*
- **Relação entre Conectivo e Força Argumentativa:** Saber que o conectivo adversativo introduz a ideia com **maior peso argumentativo** (*"Ele estudou muito, mas não passou"* ➔ foco no fracasso; *"Ele não passou, mas estudou muito"* ➔ foco no esforço).`,
  boardAnalysis: {
    trends: `### Padrões Extraídos das Provas Reais (VUNESP / FUNCAMP):
- **Pergunta Típica de Enunciado:** *"No segundo parágrafo, para fundamentar sua opinião sobre a evasão escolar, o articulista recorre predominantemente a um argumento de..."* (autoridade, evidência factual, causa e efeito ou exemplificação).
- **A Força do Conectivo Adversativo:** A alternativa correta frequentemente assinala que orações iniciadas por *mas, porém, contudo* direcionam a conclusão do texto, subordinando a oração anterior.`,
    commonTraps: `> 🚨 **Pegadinha Clássica de Prova (VUNESP / FUNCAMP):**
> O candidato confunde **Exemplificação** com **Argumento por Evidência Estatística**.
> - Citar um caso concreto isolado ocorrido com uma pessoa = *Exemplificação*.
> - Citar uma pesquisa por amostragem do Datafolha ou IPEA com metodologia e números = *Evidência Estatística / Factual*.
> Marcar exemplificação quando há amostragem metodológica anula a questão!`
  },
  memorizationMatrix: `### Matriz Decisiva: Tipos de Argumento

| Tipo de Argumento | Como Identificar no Texto | Exemplo Típico | Palavra-Chave de Prova |
| :--- | :--- | :--- | :--- |
| **Autoridade** | Voz de perito, cientista ou órgão de renome. | *"Conforme aponta a UNESCO..."* | Citação / Especialista |
| **Evidência / Provas** | Números, levantamentos, censos, dados objetivos. | *"72% das pesquisas financiadas..."* | Estatística / Fato Empírico |
| **Causa e Efeito** | Relação de causalidade lógica direta. | *"A alta inflação reduziu o poder de compra..."* | Motivo / Desfecho Lógico |
| **Exemplificação** | Narração de um fato real ilustrativo emblemático. | *"O caso do incêndio do Museu Nacional..."* | Caso Concreto / Ilustração |
| **Analogia** | Comparação entre dois universos distintos. | *"Ler um clássico é como viajar no tempo..."* | Metáfora Lógica / Paralelo |`
};
