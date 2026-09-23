import type { AdvancedTopic } from '../types';

export const m03: AdvancedTopic = {
  id: "m03",
  title: "3. Ciência Aberta, Acesso Aberto e Dados de Pesquisa (FAIR)",
  authorsAndFrameworks: `### Marcos Históricos e Doutrinários

- **As Declarações dos 3 B's do Acesso Aberto:**
  - **Iniciativa de Budapeste (BOAI - 2002):** Cunhou e definiu formalmente o termo **Open Access**, estabelecendo as duas estratégias complementares: periódicos abertos e autoarquivamento.
  - **Declaração de Bethesda (2003):** Enfatizou o papel das instituições de pesquisa e agências biomédicas no financiamento do acesso aberto e depósito em repositórios.
  - **Declaração de Berlim (2003):** O marco de maior peso diplomático internacional. Expandiu o Acesso Aberto para além dos artigos, incluindo dados brutos de pesquisa, representações digitais e patrimônio científico.
- **Peter Suber:** Formulador da distinção seminal entre *Gratis OA* (apenas remoção da barreira de preço) e *Libre OA* (remoção da barreira de preço e de permissão com licenças abertas).
- **Consórcio FORCE11 (2016):** Publicação dos **Princípios FAIR** para gestão e administração de dados científicos (*Wilkinson et al., Nature*).
- **SciELO, IBICT e FAPESP:** Pioneiros no Brasil na consolidação de políticas de Ciência Aberta e mandatos de Planos de Gestão de Dados (PGD).`,
  advancedTheory: `### 1. Ciência Aberta (Open Science) vs. Acesso Aberto (Open Access)

Em concursos recentes (36.9% das provas analisadas), o conceito de **Ciência Aberta** é cobrado como um guarda-chuva amplo que ultrapassa a simples leitura gratuita de artigos:
- **Pilares da Ciência Aberta:**
  1. **Acesso Aberto (Open Access):** Acesso universal sem paywall a publicações científicas.
  2. **Dados Abertos de Pesquisa (Open Research Data):** Dados primários reutilizáveis.
  3. **Código Aberto (Open Source / Open Code):** Scripts, algoritmos e softwares de análise abertos.
  4. **Metodologias e Cadernos Abertos (Open Notebook Science):** Transparência do processo investigativo.
  5. **Avaliação por Pares Aberta (Open Peer Review):** Pareceres públicos, identidades reveladas e diálogo transparente.
  6. **Ciência Cidadã (Citizen Science):** Participação da sociedade na coleta e análise de dados.

---

### 2. As Vias do Acesso Aberto (Taxonomia Internacional)

- **Via Verde (*Green Road* / Autoarquivamento):** Depósito do manuscrito pelo próprio autor em **Repositório Institucional** ou temático. Sem cobrança de APC para o autor e gratuito para o leitor.
- **Via Dourada (*Gold Road* / Periódicos Abertos com APC):** Artigo imediatamente aberto no site da revista. Custos financiados por **Taxas de Processamento de Artigo (APC - Article Processing Charge)** pagas pelo autor ou sua agência de fomento.
- **Via Diamante / Platina (*Diamond/Platinum Road*):** Modelo ideal e não comercial. Acesso aberto para o leitor **SEM** cobrança de taxas (APC) para o autor. Financiado inteiramente por universidades, institutos públicos ou sociedades científicas (modelo predominante do SciELO).
- **Via Bronze (*Bronze Road*):** Conteúdo gratuito no site da editora, mas sem licença formal aberta (Creative Commons). A editora pode fechar o acesso a qualquer instante.

---

### 3. Ciclo de Vida dos Dados de Pesquisa e o Plano de Gestão de Dados (PGD)

Um tema em rápida ascensão em provas federais e estaduais (ex.: UFRGS, Unicamp, USP):
- **O Plano de Gestão de Dados (PGD / DMP):** Documento formal elaborado na submissão de projetos a agências de fomento (FAPESP, CNPq). Descreve como os dados serão coletados, documentados, formatados, protegidos, compartilhados e preservados a longo prazo.
- **Ciclo de Vida dos Dados Científicos (Etapas Canônicas de Concurso):**
  1. **Planejar:** Definição de recursos, formatos, metadados e PGD.
  2. **Coletar:** Obtenção de observações manuais, sensores, questionários ou experimentos.
  3. **Assegurar:** Validação de qualidade, anonimização e conformidade ética (LGPD).
  4. **Descrever:** Atribuição de metadados ricos e identificadores persistentes (DOI).
  5. **Preservar:** Depósito em repositório confiável de dados (ex.: Dataverse).
  6. **Descobrir:** Indexação em catálogos para recuperação global.
  7. **Integrar e Analisar:** Reuso e cruzamento com outros conjuntos de dados.

---

### 4. Os Princípios FAIR (Data Stewardship)

Os princípios FAIR destinam-se a garantir que os dados de pesquisa sejam legíveis e processáveis tanto por humanos quanto por **máquinas**:
- **Findable (Encontrável):** Dados e metadados com identificador único e persistente global (**PID/DOI**); metadados ricos e registrados em índice pesquisável.
- **Accessible (Acessível):** Metadados e dados recuperáveis por meio de um protocolo de comunicação padronizado, livre e aberto (ex.: HTTP/HTTPS, REST). *Atenção:* Permite autenticação/autorização quando houver dados sensíveis (segredo industrial, dados de saúde).
- **Interoperable (Interoperável):** Uso de formatos de arquivo não proprietários e abertos (ex.: CSV em vez de XLS; JSON em vez de formato binário fechado) e vocabulários/ontologias controladas.
- **Reusable (Reutilizável):** Metadados com descrição clara de procedência (quem gerou, quando e com que instrumentos) e licença de uso inequívoca (ex.: Creative Commons CC-BY, CC0).`,
  unicampContext: `Na **Unicamp**, a governança da Ciência Aberta e dos dados científicos é um padrão institucional:
- **Resolução CONSU-A-050/2020:** Estabelece a Política Institucional de Acesso Aberto da Unicamp.
- **Repositório de Dados de Pesquisa da Unicamp (REDU):** Construído sobre a plataforma aberta internacional **Dataverse**, administrado pelo SBU.
- **Instrução Normativa CCPG nº 001/2024:** Torna obrigatório o cadastramento de metadados dos dados de pesquisa vinculados a teses e dissertações defendidas na universidade no REDU.
- **Apoio a PGDs:** A equipe de bibliotecários da Unicamp oferece consultoria direta aos pesquisadores para a elaboração de Planos de Gestão de Dados exigidos pela FAPESP.`,
  boardAnalysis: {
    trends: `### Padrões Extraídos das Provas Reais (OBJETIVA, CEBRASPE, FCC):
- **O que significa "Acessível" no FAIR:** É a pegadinha número 1 de concursos. As bancas afirmam que para atender ao princípio *Accessible*, o dado precisa ser público, irrestrito e desprovido de qualquer senha. O gabarito é **ERRADO**: o dado pode ser restrito por questões de sigilo ético ou de patentes, desde que os protocolos de rede para solicitar acesso sejam claros, transparentes e abertos. A máxima da Ciência Aberta é: *"Tão aberto quanto possível, tão fechado quanto necessário"*.
- **Etapas do ciclo de vida dos dados:** Questões literais pedem a identificação da fase do ciclo (planejamento, coleta, asseguramento, descrição, preservação, reuso).
- **Diferença entre Via Verde e Via Diamante:** As bancas cobram que na Via Verde o pesquisador deposita em Repositório Institucional sem pagar APC, enquanto na Diamante publica em periódico sem taxas para autor e leitor.`,
    commonTraps: `> 🚨 **Pegadinha Clássica de Prova (OBJETIVA / FCC):**
> *"Os Princípios FAIR estabelecem que todos os dados de pesquisa devem ser obrigatoriamente colocados em domínio público ou sob acesso público irrestrito, sendo vedada qualquer exigência de autenticação ou autorização de usuários."*
>
> **Gabarito: ERRADO!**
> Princípios FAIR tratam da **encontrabilidade e interoperabilidade técnica**. Um conjunto de dados clínicos confidenciais pode ser estritamente FAIR e, ao mesmo tempo, exigir aprovação de comitê de ética e credenciais de login para acesso.`
  },
  memorizationMatrix: `### Matriz Mnemônica: Princípios FAIR

| Princípio | Conceito Central | Exigência Técnica de Concurso |
| :--- | :--- | :--- |
| **F** - Findable | Encontrável | Identificador persistente (**DOI / Handle**) + Metadados ricos indexados |
| **A** - Accessible | Acessível | Protocolo de rede aberto e universal (**HTTP/HTTPS**) + Autenticação se exigida |
| **I** - Interoperable | Interoperável | Vocabulários controlados + Formatos de arquivo abertos (**CSV, XML, JSON**) |
| **R** - Reusable | Reutilizável | Licença de uso explícita (**Creative Commons**) + Proveniência detalhada |`
};
