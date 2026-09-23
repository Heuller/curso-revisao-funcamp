import type { AdvancedTopic } from '../types';

export const m21: AdvancedTopic = {
  id: "m21",
  title: "21. Indexação, Resumos e Controle Vocabular (Thesaurus)",
  authorsAndFrameworks: `### Autores e Normas Internacionais Estruturantes

- **F. W. Lancaster (1993, 2004):** *"Indexação e Resumos: Teoria e Prática"*. A obra clássica definitiva da Ciência da Informação para a representação temática e condensação documental.
- **Jacques Chaumier (1988):** Formulador dos conceitos fundamentais sobre linguagens documentárias pré e pós-coordenadas e indexação por extração vs. atribuição.
- **Mariângela Spotti Lopes Fujita:** Principal referência brasileira na metodologia de leitura documentária e política institucional de indexação.
- **ISO 5963 (Documentação):** Métodos internacionais para exame de documentos, determinação de seus assuntos e seleção de termos de indexação.
- **ISO 214 (Resumos):** Padrão internacional para elaboração e apresentação de resumos para publicações e documentação.
- **ISO 25964:** Padrão internacional para tesauros e interoperabilidade com outras linguagens documentárias.`,
  advancedTheory: `### 1. O Processo de Indexação: As Três Etapas Canônicas (ISO 5963 / Lancaster)

Cobrança onipresente em provas de concurso (presente em 91.7% das provas analisadas):
A indexação é a operação intelectual pela qual se analisa o conteúdo temático de um documento e se traduz esse conteúdo em termos de uma linguagem documentária.

Composta por 3 fases consecutivas e rigorosas:
1. **Exame do Documento (Leitura Documentária):** Leitura técnica e seletiva concentrada em elementos de alta densidade informativa (título, subtítulo, resumo, introdução, conclusões, cabeçalhos de capítulos, legendas). O bibliotecário não lê o documento integralmente.
2. **Identificação dos Conceitos (Análise Conceitual):** O profissional identifica os tópicos essenciais e determina o que o documento realmente trata em **Linguagem Natural**.
3. **Tradução dos Conceitos para a Linguagem de Indexação:** Os conceitos identificados são convertidos para termos autorizados em um **Vocabulário Controlado / Tesauro** ou esquema de classificação.

---

### 2. Dimensões Críticas: Exaustividade vs. Especificidade

O binômio de Lancaster mais cobrado pelas bancas:
- **Exaustividade:** Refere-se à **quantidade de conceitos** indexados no documento. Trata-se da cobertura ampla de todos os temas abordados, mesmo os secundários.
  - *Efeito na recuperação:* **Aumenta a Revocação (*Recall*)**, mas **diminui a Precisão**, gerando mais **Ruído**.
- **Especificidade:** Refere-se à **precisão e exatidão** com que o termo de indexação descreve o conceito. Usar o termo mais específico disponível (ex: usar *"Diabetes Mellitus tipo 2"* em vez de *"Doenças Metabólicas"*).
  - *Efeito na recuperação:* **Aumenta a Precisão (*Precision*)**, mas **diminui a Revocação**, podendo gerar **Silêncio**.

---

### 3. Tipos de Linguagens Documentárias: Pré-coordenação vs. Pós-coordenação

- **Linguagens Pré-coordenadas:** Os termos são combinados no momento da **indexação** pelo bibliotecário, antes da consulta (ex: Listas de Cabeçalhos de Assunto, CDD). A sintaxe e a ordem de citação são fixas (*Ex.: "Bibliotecas universitárias — Automação — Brasil — Século XXI"*).
- **Linguagens Pós-coordenadas:** Os termos são mantidos como conceitos isolados (*Unitermos* ou descritores de tesauros) e são combinados livremente pelo **usuário no momento da busca** mediante o uso de operadores booleanos (*Ex.: "Bibliotecas" AND "Automação" AND "Brasil"*).

---

### 4. Estrutura das Relações em Tesauros Documentários (ISO 25964)

Um tesauro controla termos normalizados estabelecendo 3 tipos canônicos de relações semânticas:
- **1. Relação de Equivalência (Preferência / Sinônimos):**
  - **USE:** Encaminha do termo não-descritor (sinônimo/proibido) para o descritor autorizado (*Ex.: Celular ➔ USE ➔ Telefone celular*).
  - **UP (*Used For* / Usado Para):** Registra sob o termo autorizado quais formas foram rejeitadas (*Ex.: Telefone celular ➔ UP ➔ Celular, Telefone móvel*).
- **2. Relação Hierárquica (Gênero/Espécie e Todo/Parte):**
  - **TG / BT (*Broader Term* / Termo Genérico):** Conceito mais amplo de nível imediatamente superior (*Ex.: Veículo é TG de Automóvel*).
  - **TE / NT (*Narrower Term* / Termo Específico):** Conceito subordinado (*Ex.: Automóvel é TE de Veículo*).
- **3. Relação Associativa (Afinidade Semântica):**
  - **TR / RT (*Related Term* / Termo Relacionado):** Liga termos que compartilham afinidade temática, mas não são sinônimos nem pertencem à mesma linhagem hierárquica (*Ex.: Automóvel ➔ TR ➔ Rodovia, Tráfego, Combustível*).

---

### 5. Tipologia de Resumos Documentais (F. W. Lancaster / ISO 214)

A teoria clássica da Ciência da Informação classifica os resumos documentais em três categorias fundamentais:
- **Resumo Indicativo (Descritivo):** Indica os tópicos e aspectos tratados no documento de forma concisa, sem apresentar metodologia detalhada, dados experimentais ou conclusões. **NÃO dispensa a leitura do texto original completo**.
- **Resumo Informativo (Analítico):** Apresenta as finalidades, a metodologia adotada, os resultados concretos e as principais conclusões do trabalho. É suficientemente abrangente para permitir que o leitor decida com precisão e, frequentemente, **dispensa a consulta imediata ao documento original**.
- **Resumo Crítico (Resenha):** Elaborado por especialista na área, analisa criticamente a obra, julgando seu mérito científico, originalidade, relevância e eventuais deficiências, expressando juízo de valor opinativo fundamentado.`,
  unicampContext: `No **Sistema de Bibliotecas da Unicamp (SBU)**:
- A indexação das teses e dissertações adota vocabulários controlados especializados (DeCS na área médica e VocUSP/VocUnicamp nas Humanidades e Exatas).
- A política de indexação da Unicamp preconiza alta especificidade para garantir que as buscas especializadas de pesquisadores recuperem conjuntos pertinentes com mínimo ruído.`,
  boardAnalysis: {
    trends: `### Padrões Extraídos das Provas Reais (OBJETIVA, CEBRASPE, VUNESP):
- **O impacto da Exaustividade e Especificidade:** Perguntas constantes sobre o que acontece com a revocação e a precisão quando se aumenta a exaustividade (aumenta revocação, cai precisão).
- **As 3 etapas da ISO 5963 / Lancaster:** Cobrança da sequência exata: Exame / Leitura documentária ➔ Identificação dos conceitos ➔ Tradução para a linguagem documentária.
- **Classificação de Relações em Tesauros:** Identificar se uma relação entre dois termos (ex.: *Agricultura* e *Trator*) é hierárquica ou associativa. Resposta: **Associativa (TR)**, pois Trator não é um "tipo" de Agricultura.
- **Tipologia de Resumos:** Reconhecer a diferença crucial entre resumo indicativo (não dispensa a leitura do original), informativo (dispensa para fins gerais de triagem) e crítico/resenha (opinativo).`,
    commonTraps: `> 🚨 **Pegadinha Clássica de Prova (OBJETIVA / CEBRASPE):**
> *"O aumento da especificidade na indexação amplia a revocação do sistema de busca, pois permite que o usuário encontre um volume muito maior de documentos correlatos."*
>
> **Gabarito: ERRADO!**
> O aumento da especificidade aumenta a **PRECISÃO** (traz documentos exatos) e diminui a **REVOCAÇÃO** (reduz o número total de itens recuperados, podendo gerar silêncio documental se a busca for genérica).`
  },
  memorizationMatrix: `### Matriz Decisória de Indexação & Tesauros

| Variável / Conceito | Mecanismo | Efeito na Busca |
| :--- | :--- | :--- |
| **Alta Exaustividade** | Atribui muitos termos (cobre tudo) | **Sobe Revocação** (traz muito), **Desce Precisão** (gera Ruído) |
| **Alta Especificidade** | Usa o termo exato mais aprofundado | **Sobe Precisão** (traz certo), **Desce Revocação** (gera Silêncio) |
| **USE / UP** | Relação de Equivalência | Controla sinônimos (ex: Avião ➔ USE ➔ Aeronave) |
| **TG / TE** | Relação Hierárquica | Gênero / Espécie (ex: Mamífero TG de Baleia) |
| **TR** | Relação Associativa | Conexão contextual (ex: Baleia TR Pesca) |
| **Resumo Indicativo** | Breve, sem dados conclusivos | **Não dispensa** a leitura do original |
| **Resumo Informativo**| Metodologia, dados e conclusão | **Dispensa** a leitura do original |
| **Resumo Crítico** | Análise e julgamento de valor | **Opinativo**, emitido por avaliador |`
};
