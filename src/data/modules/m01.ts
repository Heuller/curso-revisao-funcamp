import type { AdvancedTopic } from '../types';

export const m01: AdvancedTopic = {
  id: "m01",
  title: "1. Biblioteca Digital e Repositório Institucional",
  authorsAndFrameworks: `### Autores e Marcos Teóricos Fundamentais

- **F. W. Lancaster (1978):** *"Toward Paperless Information Systems"*. O visionário clássico da transição do suporte em papel para suportes eletrônicos e bibliotecas sem paredes.
- **Christine Borgman (2000):** *"From Gutenberg to the Global Information Infrastructure"*. Estabelece a distinção epistemológica clássica: *bibliotecas digitais como coleções orientadas a dados* versus *bibliotecas digitais como instituições sociais e de serviço*.
- **Clifford Lynch (2003):** Autor do manifesto fundador dos Repositórios Institucionais, definindo o RI como um conjunto de serviços que a universidade oferece à sua comunidade para gerenciamento e disseminação de materiais digitais gerados pela instituição.
- **Hélio Kuramoto (2006):** Pioneiro e articulador no IBICT da implantação das diretrizes nacionais de Repositórios Institucionais e do Movimento de Acesso Aberto no Brasil.
- **Open Archives Initiative (OAI):** Consórcio responsável pela especificação técnica do protocolo **OAI-PMH** (*Protocol for Metadata Harvesting*), alicerce da interoperabilidade mundial de repositórios.`,
  advancedTheory: `### 1. Distinção Estrutural de Concurso: Biblioteca Digital (BD) vs. Repositório Institucional (RI)

A confusão deliberada entre BD e RI é uma das armadilhas mais recorrentes em provas de concursos para bibliotecário (presente em 63.1% dos cadernos analisados):

- **Biblioteca Digital (BD) — Foco no Usuário/Consumo:**
  - **Objetivo precípuo:** Suprir demandas informacionais imediatas de leitura, estudo e pesquisa de sua comunidade.
  - **Origem do acervo:** Predominantemente **externa** (livros e periódicos comerciais licenciados de editoras como Elsevier, Wiley, Springer, bases EBSCO, pacotes de e-books assinados e coleções digitalizadas de domínio público).
  - **Acesso e Restrições:** Frequentemente restrito por autenticação de IP institucional, credenciais de login e sistemas de DRM (*Digital Rights Management*).

- **Repositório Institucional (RI) — Foco na Memória e Produção Própria:**
  - **Objetivo precípuo:** Coletar, organizar, preservar a longo prazo e democratizar a produção científica, técnica e artística gerada pela própria universidade.
  - **Origem do acervo:** Estritamente **interna** (teses, dissertações, artigos científicos de docentes, relatórios de pesquisa, patentes e preprints). O RI **não** compra acervo comercial de terceiros.
  - **Regime de Acesso:** Pauta-se no **Acesso Aberto (Open Access)**, sem barreiras financeiras ou cadastrais para leitura e download.

---

### 2. O Protocolo OAI-PMH: Arquitetura, Verbos e Metadados

O protocolo **OAI-PMH** opera sobre HTTP transportando metadados codificados em XML. Ele define dois papéis centrais e seis comandos funcionais (verbos) cobrados sistematicamente:

#### Papéis dos Participantes:
1. **Provedores de Dados (Data Providers):** Repositórios que mantêm os metadados e os expõem publicamente para colheita (ex.: DSpace universitário).
2. **Provedores de Serviços (Service Providers):** Agregadores que colhem metadados de múltiplos repositórios para criar portais unificados de busca e métricas (ex.: **Oasisbr**, **NDLTD**, **La Referencia**, **Google Acadêmico**).

#### Os 6 Verbos Oficiais do OAI-PMH:
- \`Identify\`: Retorna informações gerais sobre o repositório (nome, URL base, versão do protocolo, e-mail do administrador, granularidade de data).
- \`ListMetadataFormats\`: Lista os esquemas de metadados suportados pelo repositório (requisito mínimo obrigatório: Dublin Core simples - prefixo \`oai_dc\`).
- \`ListSets\`: Recupera a estrutura hierárquica de conjuntos/coleções do repositório.
- \`ListIdentifiers\`: Colhe apenas os cabeçalhos/identificadores dos registros (usado para verificação rápida de atualizações).
- \`ListRecords\`: Efetua a colheita completa dos registros de metadados em lote.
- \`GetRecord\`: Recupera um registro individual específico de metadados pelo seu identificador persistente.

---

### 3. Dublin Core Simples (15 Elementos Fundamentais)

Padrão internacional (ISO 15836 / IETF RFC 5013) obrigatório para conformidade OAI-PMH:
1. **Title** (Título)
2. **Creator** (Autor/Criador primário)
3. **Subject** (Assunto/Palavras-chave)
4. **Description** (Resumo/Descrição)
5. **Publisher** (Editora/Instituição publicadora)
6. **Contributor** (Colaborador secundário, orientador)
7. **Date** (Data do recurso)
8. **Type** (Natureza do conteúdo, ex.: tese, artigo)
9. **Format** (Formato de arquivo ou mídia, MIME type, ex.: application/pdf)
10. **Identifier** (Identificador unívoco, ex.: DOI, Handle, URI)
11. **Source** (Obra original de onde o recurso foi derivado)
12. **Language** (Idioma do conteúdo textual)
13. **Relation** (Relação com outro recurso correlato)
14. **Coverage** (Abrangência espacial e temporal)
15. **Rights** (Direitos autorais, copyright, licença Creative Commons)`,
  unicampContext: `Na **Unicamp**, a infraestrutura de repositórios digitais é gerida operacionalmente pelo **Sistema de Bibliotecas da Unicamp (SBU)**:
- **Repositório da Produção Científica e Intelectual da Unicamp:** Sustentado sobre a plataforma aberta **DSpace**, centraliza a produção de docentes e alunos e integra o portal nacional **Oasisbr** (IBICT) e o agregador latino-americano **La Referencia**.
- **Mandato Compulsório:** A homologação de títulos de mestrado e doutorado e a expedição de diplomas pela DAC exigem o autoarquivamento prévio da versão homologada da tese/dissertação no repositório.
- **Curadoria pelo Bibliotecário:** Antes da liberação pública, os metadados passam por revisão estrita (padronização de autoridades, termos controlados do Vocabulário Unicamp e verificação de licenças de uso).`,
  boardAnalysis: {
    trends: `### Padrões Extraídos das Provas Reais (CEBRASPE, OBJETIVA, VUNESP, FCC):
- **OAI-PMH vs Z39.50:** O Z39.50 é um protocolo síncrono cliente-servidor para busca e recuperação de registros em catálogos tradicionais (OPACs). O OAI-PMH é um protocolo assíncrono para colheita massiva de metadados XML para agregação.
- **Obrigatoriedade do Dublin Core:** As bancas cobram se o repositório exige MARC21 para o OAI-PMH. O gabarito é **NÃO**: o OAI-PMH exige expressamente o **Dublin Core simples (15 elementos)** como linha de base universal.
- **Mandato de Autoarquivamento:** Questões frequentemente contrastam o autoarquivamento voluntário (baixo índice de adesão, ~15%) com a política mandatória institucional com respaldo regulatório.`,
    commonTraps: `> 🚨 **Pegadinha Clássica de Prova (OBJETIVA / CEBRASPE):**
> *"O protocolo OAI-PMH exige que os repositórios institucionais disponibilizem o texto completo de todas as obras no corpo da mensagem XML colhida pelos provedores de serviço."*
>
> **Gabarito: ERRADO!**
> O protocolo OAI-PMH colhe **exclusivamente METADADOS** (descrição bibliográfica, links persistentes e metadados de direitos). Ele **não** transporta o arquivo de texto integral (bitstream/PDF) no pacote de colheita.`
  },
  memorizationMatrix: `### Matriz Decisiva para Concursos: BD vs. RI

| Critério | Biblioteca Digital (BD) | Repositório Institucional (RI) |
| :--- | :--- | :--- |
| **Origem do Conteúdo** | Externa (compra, assinatura, licenciamento comercial) | Interna (produção intelectual da própria comunidade) |
| **Público-Alvo Prioritário** | Alunos/usuários como **consumidores** da informação | A comunidade mundial como leitora da **produção institucional** |
| **Modelo Financeiro** | Pagamento contínuo de assinaturas a fornecedores | Custeado pela instituição pública com retorno em visibilidade |
| **Protocolo de Integração** | Z39.50, APIs proprietárias, SRU/SRW | OAI-PMH (*Protocol for Metadata Harvesting*) |
| **Metadados Obrigatórios** | Formatos ricos e especializados (MARC 21, MODS) | Dublin Core Simples (15 elementos universais) |
| **Regime de Licenciamento** | Direitos autorais rígidos (restrição por IP/login) | Acesso Aberto (Open Access, Creative Commons) |`
};
