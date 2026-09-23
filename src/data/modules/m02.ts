import type { AdvancedTopic } from '../types';

export const m02: AdvancedTopic = {
  id: "m02",
  title: "2. Preservação e Conservação de Acervos Físicos e Digitais",
  authorsAndFrameworks: `### Autores e Marcos Teóricos Fundamentais

- **Miguel Ángel Márdero Arellano (2004, 2008):** A maior referência acadêmica brasileira em preservação digital. Formulou a divisão seminal entre **Métodos Estruturais** e **Métodos Operacionais** de preservação de objetos digitais.
- **Modelo OAIS (Open Archival Information System - ISO 14721):** Modelo conceitual internacional de referência para repositórios digitais confiáveis (RDC-Arq) e arquivos permanentes.
- **Padrão PREMIS (*Preservation Metadata: Implementation Strategies*):** Dicionário internacional de metadados para auditoria, integridade, proveniência e direitos em repositórios digitais.
- **Conservação Preventiva Tradicional (Cunha, Spinelli e Beck):** Referenciais para o controle ambiental, higienização e acondicionamento de suportes em papel.`,
  advancedTheory: `### 1. Preservação Digital segundo Arellano (2004): Estruturais vs. Operacionais

Questão direta cobrada em concursos de universidades (ex.: UFRGS):
- **Métodos Estruturais:**
  Dizem respeito aos **investimentos e decisões institucionais de alto nível** por parte das organizações que se preparam para a preservação digital a longo prazo:
  - Criação de políticas formais de preservação digital;
  - Alocação contínua de recursos orçamentários;
  - Capacitação de equipes multidisciplinares;
  - Parcerias e cooperação interinstitucional em redes de custódia (ex.: Cariniana/LOCKSS);
  - Adoção de normas e critérios de repositórios digitais confiáveis.
- **Métodos Operacionais:**
  Dizem respeito às **práticas técnicas e ações tecnológicas diretas sobre os objetos digitais** para combater a degradação e a obsolescência:
  - *Refrescamento (Refreshing);*
  - *Migração de formatos;*
  - *Emulação;*
  - *Encapsulamento;*
  - *Preservação da tecnologia (computação em museu).*

---

### 2. A Tríade Operacional Clássica: Refrescamento, Migração e Emulação

- **Refrescamento (*Refreshing*):** Cópia periódica dos dados de um suporte físico antigo para outro novo ou moderno (ex: de disquete/CD para storage em nuvem). O formato do arquivo e o código binário **NÃO mudam**.
- **Migração (*Migration*):** Conversão do arquivo de um formato em obsolescência ou proprietário para um formato aberto padronizado de longo prazo (ex: converter \`.doc\` para \`.pdf/a\`, ou imagem \`.bmp\` para \`.tiff\` não compactado). É a estratégia mais utilizada no mundo.
- **Emulação (*Emulation*):** Simulação virtual do ambiente de hardware e sistema operacional original em computadores modernos. O arquivo antigo permanece intacto e inalterado. Alto custo técnico.
- **Encapsulamento:** Agrupamento do objeto digital juntamente com todos os seus metadados descritivos, estruturais e interpretadores em um único invólucro para autossuficiência futura.

---

### 3. A Arquitetura OAIS / ISO 14721: Os 3 Pacotes de Informação

- **SIP (*Submission Information Package*):** Pacote entregue pelo autor/produtor ao repositório na submissão.
- **AIP (*Archival Information Package*):** Pacote mestre preservado no cofre do repositório digital. Contém o arquivo original convertido para preservação + metadados de proveniência e integridade **PREMIS**. O usuário comum **NÃO** tem acesso ao AIP.
- **DIP (*Dissemination Information Package*):** Pacote derivado do AIP, otimizado para download rápido e visualização pelo usuário no navegador web.

---

### 4. Preservação e Conservação Preventiva de Acervos Físicos (Papel)

Presente com grande constância em provas da OBJETIVA, VUNESP e CEBRASPE:
- **Conservação Preventiva:** Conjunto de medidas e estratégias ambientais que visam retardar a degradação natural e prevenir danos:
  - **Temperatura:** Faixa ideal entre **18 °C e 22 °C** (oscilações diárias não devem ultrapassar ± 2 °C).
  - **Umidade Relativa (UR):** Faixa ideal entre **45% e 55%** (nunca superior a 60%, pois umidade > 60% propicia a proliferação acelerada de fungos e insetos bibliófagos).
  - **Iluminação e Radiação UV:** Proibir luz solar direta; nível de UV não deve exceder **75 µW/lúmen**; iluminação artificial preferencialmente fria (LED).
  - **Higienização:** Limpeza mecânica com trinchas de cerdas macias, pó de borracha suave e aspiradores equipados com filtro absoluto **HEPA**.
  - **Acondicionamento:** Embalagens confeccionadas com papel permanente ou cartão alcalino (pH neutro ou ligeiramente alcalino com reserva alcalina, livre de lignina e ácidos).
- **Conservação Curativa e Restauração:** Intervenções diretas nos documentos danificados para estabilização (pequenos rasgos reparados com papel japonês e adesivo reversível de metilcelulose ou amido).`,
  unicampContext: `Na **Unicamp**, centros de excelência como o **Arquivo Edgard Leuenroth (AEL)** e as áreas de Obras Raras do SBU combinam conservação física de ponta com preservação digital:
- As salas de guarda permanente possuem climatização 24/7 com controle rigoroso de umidade e filtros de ar químicos.
- Na esfera digital, as teses e dissertações são convertidas e auditadas no formato **PDF/A-1b** e passam por rotinas de hash criptográfico (MD5/SHA-256) para garantir a integridade dos bits ao longo do tempo.`,
  boardAnalysis: {
    trends: `### Padrões Extraídos das Provas Reais (OBJETIVA, CEBRASPE, VUNESP):
- **Arellano (2004):** Distinção entre métodos estruturais (políticas e gestão) e métodos operacionais (técnicas de computação como migração e emulação).
- **Parâmetros ambientais de conservação de papel:** Questões literais sobre umidade relativa acima de 60% como causadora de proliferação de fungos e insetos.
- **Migração vs. Emulação vs. Refrescamento:** A troca do suporte físico sem alterar o arquivo é o **Refrescamento**; a conversão de formato lógico é a **Migração**; e simular o computador antigo é a **Emulação**.`,
    commonTraps: `> 🚨 **Pegadinha Clássica de Prova (OBJETIVA / CEBRASPE):**
> *"A conservação preventiva de acervos bibliográficos em papel recomenda a manutenção de níveis de umidade relativa do ar em torno de 75% a 85%, de modo a impedir o ressecamento precoce das fibras celulósicas."*
>
> **Gabarito: ERRADO!**
> Níveis de umidade relativa acima de 60% causam uma catástrofe microbiológica no acervo, desencadeando a proliferação incontrolável de **fungos (mofo)** e a ativação de ovos de **insetos bibliófagos** (traças e brocas). A faixa ideal é de **45% a 55%**.`
  },
  memorizationMatrix: `### Síntese de Preservação: Físico vs. Digital

| Dimensão | Acervo Físico (Papel) | Acervo Digital |
| :--- | :--- | :--- |
| **Inimigos Principais** | Umidade > 60%, calor, luz UV, fungos, insetos | **Obsolescência tecnológica** e degradação de bits |
| **Ambiente Ideal** | Temp: 18 a 22 °C / Umidade: 45 a 55% | Servidores redundantes, backup geográfico, checksum |
| **Estratégia Básica** | Higienização com filtro HEPA e papel alcalino | **Migração periódica** para formatos abertos (PDF/A) |
| **Norma / Modelo** | Parâmetros de conservação preventiva | **Modelo OAIS (ISO 14721)**: SIP ➔ AIP ➔ DIP |
| **Metadados Chave** | Ficha catalográfica e tombamento | **PREMIS** (proveniência e integridade) |
| **Arellano (2004)** | Gestão e infraestrutura predial | **Estruturais** (políticas) x **Operacionais** (técnicas) |`
};
