import type { AdvancedTopic } from '../types';

export const m20: AdvancedTopic = {
  id: "m20",
  title: "20. Tecnologia de Softwares de Bibliotecas (SIGB / ILS)",
  authorsAndFrameworks: `### Autores e Terminologia Tecnológica Internacional

- **Marshall Breeding:** A maior autoridade internacional contemporânea no monitoramento do mercado global de automação de bibliotecas (*Library Technology Guides*).
- **SIGB / ILS (*Integrated Library System* / Sistema Integrado de Gestão de Bibliotecas):** A designação clássica de softwares relacionais modulares para acervos físicos e patrimoniados.
- **LSP (*Library Services Platform*):** A nova geração de plataformas concebida nativamente em nuvem (*Cloud / Multi-tenant SaaS*), unificando a gestão de acervos impressos e assinaturas de recursos eletrônicos em larga escala.
- **Software Livre / Código Aberto (*Open Source*) vs. Proprietário:** Classificação jurídica e tecnológica recorrente em concursos públicos.`,
  advancedTheory: `### 1. Classificação dos Softwares de Biblioteca para Concursos

As bancas examinadoras cobram com grande regularidade (presente em 39.3% dos cadernos analisados) a categorização dos sistemas conforme o modelo de licenciamento e a origem:

#### A. Softwares Livres e de Código Aberto (Open Source):
- **Koha:** Primeiro software livre de automação de bibliotecas do mundo (criado na Nova Zelândia em 1999). Baseado em web, padrão MARC 21 nativo, protocolo Z39.50, OAI-PMH e banco de dados MySQL/MariaDB.
- **OpenBiblio:** Sistema livre simplificado para pequenas e médias bibliotecas.
- **Biblio-teQ:** Software livre multiplataforma com suporte a protocolos de catalogação.
- **Greenstone e DSpace:** Softwares de código aberto voltados a Bibliotecas Digitais e Repositórios Institucionais (não são SIGBs tradicionais, mas repositórios de objetos digitais).

#### B. Softwares Comerciais / Proprietários Nacionais:
- **Pergamum (PUCPR):** Um dos sistemas proprietários mais difundidos em universidades e órgãos públicos brasileiros.
- **SophiA Biblioteca (Prima Informática):** Amplamente adotado em instituições públicas, privadas e escolares no Brasil.
- **Alexandria, MultiAcervo e Biblioshop:** Outros sistemas comerciais de circulação nacional.

#### C. Softwares Comerciais / Corporativos Internacionais:
- **Aleph (Ex Libris):** SIGB clássico internacional de grande porte.
- **Alma (Ex Libris):** Plataforma de Serviços de Biblioteca (LSP) de última geração em nuvem.
- **Sierra / Millennium (Innovative Interfaces / Clarivate):** Sistemas amplamente utilizados em grandes redes mundiais.

---

### 2. A Arquitetura Modular do SIGB e o Arquivo Mestre Único

A característica definidora de um sistema "Integrado" é a ausência de redundância de dados:
- **Módulos Centrais:**
  1. **Aquisição:** Gerencia pedidos, fornecedores, empenhos, faturas e controle orçamentário. O registro inserido aqui já cria o pré-catálogo.
  2. **Catalogação / Processamento Técnico:** Detalha a descrição bibliográfica completa (MARC 21), autoridades e atribui número de chamada e exemplares.
  3. **Circulação:** Empréstimo, devolução, renovação, reservas, multas, suspensões e histórico de circulação de usuários.
  4. **Controle de Periódicos (Seriados):** Registro de fascículos recebidos (*check-in*), alertas de falhas na coleção, remessas para encadernação e controle de assinaturas.
  5. **OPAC (*Online Public Access Catalog*):** Interface pública de busca para o leitor.
  6. **Relatórios e Estatísticas:** Emissão de indicadores de uso e inventário patrimonial.

---

### 3. Ferramentas de Descoberta (*Discovery*) vs. Busca Federada

- **Busca Federada Tradicional (Tempo Real):** Dispara a consulta simultaneamente em dezenas de servidores externos (Elsevier, IEEE, Springer). Sofre com lentidão severa e incapacidade de ranquear relevância unificada.
- **Ferramentas de Descoberta (*Discovery Tools* - Primo, EDS, Summon):** Coletam e normalizam antecipadamente metadados de milhões de itens mundiais em um **Mega-Índice Centralizado na Nuvem**, oferecendo busca em milissegundos com navegação por facetas dinâmicas.`,
  unicampContext: `A **Unicamp** é referência em infraestrutura tecnológica bibliotecária:
- **Migração para Alma e Primo (Ex Libris):** O Sistema de Bibliotecas da Unicamp (SBU) descontinuou sistemas legados e unificou suas 28 bibliotecas setoriais na plataforma **Alma** (LSP em nuvem).
- **Interface Pública Unificada:** O **Primo** permite à comunidade da Unicamp pesquisar em uma única caixa de busca livros físicos locais, teses do repositório e artigos de periódicos internacionais assinados via CAPES.`,
  boardAnalysis: {
    trends: `### Padrões Extraídos das Provas Reais (OBJETIVA, CEBRASPE, VUNESP):
- **Identificação de Softwares Livres:** Questões de múltipla escolha com listas de nomes exigem saber categoricamente que **Koha** e **OpenBiblio** são código aberto, enquanto **Pergamum**, **SophiA** e **Aleph** são sistemas proprietários comerciais.
- **Conceito de Sistema Integrado:** As bancas exploram a relação entre os módulos: o leitor não consegue emprestar um livro se a catalogação não registrar o exemplar; a devolução no balcão atualiza imediatamente o OPAC sem necessidade de rotinas noturnas manuais.
- **O papel do Z39.50 no SIGB:** Protocolo nativo que permite ao módulo de catalogação importar registros MARC 21 de bibliotecas externas.`,
    commonTraps: `> 🚨 **Pegadinha Clássica de Prova (OBJETIVA / IBFC):**
> *"O Pergamum e o SophiA são softwares de domínio público e código aberto (open source), desenvolvidos pelo IBICT para distribuição gratuita a todas as bibliotecas públicas brasileiras."*
>
> **Gabarito: ERRADO!**
> Pergamum e SophiA são sistemas **proprietários e comerciais**, mantidos respectivamente pela PUCPR e pela Prima Informática, exigindo pagamento de licenças e contratos de suporte.`
  },
  memorizationMatrix: `### Matriz de Softwares para Bibliotecas em Concursos

| Software | Tipo de Licença | Origem | Categoria de Aplicação |
| :--- | :--- | :--- | :--- |
| **Koha** | **Software Livre (Open Source)** | Internacional (Nova Zelândia) | SIGB Completo com MARC 21 nativo |
| **OpenBiblio** | **Software Livre (Open Source)** | Internacional | SIGB leve para bibliotecas pequenas |
| **DSpace** | **Software Livre (Open Source)** | Internacional (MIT / HP) | Repositório Institucional Digital |
| **Pergamum** | **Comercial / Proprietário** | Nacional (PUCPR - Brasil) | SIGB corporativo de grande porte |
| **SophiA** | **Comercial / Proprietário** | Nacional (Prima Informática) | SIGB para bibliotecas e centros de doc. |
| **Alma / Primo**| **Comercial / Cloud (SaaS)** | Internacional (Ex Libris) | Plataforma de Serviços (LSP) + Discovery |`
};
