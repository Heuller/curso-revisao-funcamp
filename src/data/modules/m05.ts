import type { AdvancedTopic } from '../types';

export const m05: AdvancedTopic = {
  id: "m05",
  title: "5. Redes e Sistemas de Informação",
  authorsAndFrameworks: `### Autores, Órgãos Centrais e Marcos Estruturais

- **IBICT (Instituto Brasileiro de Informação em Ciência e Tecnologia):** Órgão de referência vinculado ao Ministério da Ciência, Tecnologia e Inovação (MCTI), responsável pela concepção e manutenção das redes e sistemas cooperativos de informação no país.
- **Murilo Bastos da Cunha (1999):** Autor clássico sobre redes, consórcios de bibliotecas universitárias e compartilhamento cooperativo de recursos documentais.
- **RNP (Rede Nacional de Ensino e Pesquisa):** Organização social responsável pela infraestrutura de conectividade avançada da academia brasileira e pela gestão da **Comunidade Acadêmica Federada (CAFe)**.
- **CAPES (Coordenação de Aperfeiçoamento de Pessoal de Nível Superior):** Fundação ligada ao MEC, gestora do **Portal de Periódicos CAPES**, um dos maiores consórcios mundiais de compras de assinaturas científicas.`,
  advancedTheory: `### 1. Fundamentos Epistemológicos das Redes de Informação

Com o fenômeno da **Explosão Documental** pós-Segunda Guerra Mundial, o mito da biblioteca autossuficiente ruiu. Nenhuma instituição — nem mesmo os maiores orçamentos de Harvard ou Oxford — tem capacidade financeira para adquirir a totalidade da produção científica mundial.

- **Conceito de Rede:** Conjunto formal de unidades de informação interconectadas por canais padronizados para intercâmbio de recursos, dados e competências técnicas.
- **Objetivo Central:** Erradicar a duplicação desnecessária de tarefas, maximizar o poder orçamentário de compra e democratizar o acesso à informação em escala territorial ampla.

---

### 2. A Constelação de Sistemas Cooperativos Nacionais (IBICT)

O ecossistema federal brasileiro estruturado pelo **IBICT** baseia-se em pilares essenciais frequentemente explorados em provas de concurso:

- **BDTD (Biblioteca Digital Brasileira de Teses e Dissertações):**
  Mega-agregador nacional que coleta, mediante o protocolo **OAI-PMH**, os metadados das teses e dissertações depositadas nos repositórios institucionais de mais de uma centena de universidades brasileiras. Permite ao cidadão pesquisar a produção pós-graduada nacional em um único ponto focal.

- **CCN (Catálogo Coletivo Nacional de Publicações Seriadas):**
  Instrumento referencial que localiza a posse de periódicos científicos (físicos e eletrônicos) no Brasil. O CCN responde à pergunta: *"Qual biblioteca do país possui o fascículo 3 do volume 12 da revista X publicado em 1978?"*. 
  *Atenção:* O CCN é um catálogo de **localização**, e não um provedor de texto integral.

- **COMUT (Programa de Comutação Bibliográfica):**
  Mecanismo de cooperação interbibliotecária que operacionaliza o envio de cópias de documentos (artigos de periódicos, teses, anais de congressos e partes de livros) entre bibliotecas cooperantes no Brasil e no exterior.

---

### 3. O Portal de Periódicos da CAPES e a Rede CAFe

Diferente dos sistemas do IBICT (focados em agregação e intercâmbio), o **Portal de Periódicos CAPES** atua como uma central de compras e licenciamento de literatura internacional de alto impacto:

- **Financiamento Centralizado:** O governo brasileiro desembolsa anualmente dezenas de milhões de dólares para adquirir assinaturas das maiores editoras comerciais do mundo (Elsevier, Springer-Nature, Wiley, IEEE, Web of Science, Scopus).
- **Rede CAFe (Comunidade Acadêmica Federada):** Gerida pela RNP, permite a autenticação federada unificada. O pesquisador ou estudante conecta-se de sua residência usando suas credenciais institucionais e obtém acesso remoto aos periódicos assinados como se estivesse fisicamente no campus universitário.

---

### 4. Redes Tradicionais vs. Consórcios de Aquisição

- **Redes Tradicionais de Cooperação:** Priorizam o **compartilhamento de trabalho técnico** (ex: catalogação cooperativa, onde uma única biblioteca processa o item bibliográfico e todas as demais unidades copiam o registro MARC).
- **Consórcios de Aquisição (*Library Consortia*):** Priorizam o **compartilhamento do poder de compra** para negociar preços em bloco com grandes corporações editoriais com descontos de escala.`,
  unicampContext: `A **Unicamp** integra plenamente as redes nacionais:

- **Conexão CAFe e VPN:** A comunidade da Unicamp acessa o Portal CAPES remotamente por autenticação federada da **Rede CAFe** ou pela VPN institucional gerenciada pelo Centro de Computação (CCUEC), validando os acessos corporativos por faixa de IP institucional.
- **BDTD e Oasisbr:** Todas as teses e dissertações defendidas na Unicamp e arquivadas no Repositório Institucional são automaticamente indexadas na BDTD e no Oasisbr através da colheita OAI-PMH.
- **COMUT no SBU:** O Sistema de Bibliotecas da Unicamp conta com postos de atendimento COMUT em suas bibliotecas setoriais para solicitar documentos raros não disponíveis nas assinaturas digitais correntes.`,
  boardAnalysis: {
    trends: `### Análise de Bancas (CEBRASPE, VUNESP e FUNCAMP)

- **CEBRASPE:** Testa frequentemente pegadinhas sobre o **CCN**. Afirma com frequência que *"o Catálogo Coletivo Nacional (CCN) franqueia acesso direto e online ao texto completo de todas as revistas cadastradas"*. Isso é **FALSO** — o CCN apenas indica qual instituição é detentora física ou digital da coleção.
- **VUNESP / FUNCAMP:** Cobram a distinção institucional entre órgãos: **IBICT** (vinculado ao MCTI — responsável por BDTD, CCN e COMUT) versus **CAPES** (vinculada ao MEC — responsável pelo Portal de Periódicos).`,
    commonTraps: `> 🚨 **Pegadinha Clássica CEBRASPE / VUNESP:**
> *"A participação em redes de catalogação cooperativa encarece a gestão técnica da biblioteca, em razão dos custos gerados pelas constantes adequações locais dos registros bibliográficos importados."*
>
> **Gabarito: ERRADO!**
> O escopo fulcral da catalogação cooperativa é **reduzir drasticamente os custos e o tempo** despendido pelo processamento técnico, eliminando a redundância de catalogar o mesmo livro centenas de vezes em bibliotecas diferentes.`
  },
  memorizationMatrix: `### Mapeamento dos Sistemas Nacionais de Informação

| Sistema / Rede | Entidade Gestora | Ministério | Função Estratégica Principal |
| :--- | :--- | :--- | :--- |
| **BDTD** | IBICT | MCTI | Agregação e visibilidade das Teses e Dissertações do país |
| **CCN** | IBICT | MCTI | Catálogo de localização das coleções de periódicos |
| **COMUT** | IBICT | MCTI | Intercâmbio de cópias de artigos entre bibliotecas |
| **Portal de Periódicos**| CAPES | MEC | Assinatura centralizada de bases de dados e e-journals |
| **Rede CAFe** | RNP | MCTI / MEC | Autenticação remota federada (acesso fora do campus) |`
};
