import type { AdvancedTopic } from '../types';

export const m02: AdvancedTopic = {
  id: "m02",
  title: "2. Preservação Digital (Estratégias e Metadados)",
  authorsAndFrameworks: `### Autores e Marcos Teóricos Fundamentais

- **Digital Curation Centre (DCC):** Desenvolvedor do *DCC Curation Lifecycle Model* (Ciclo de Vida da Curadoria Digital), referência para curadoria ativa de dados de pesquisa.
- **Modelo OAIS (Open Archival Information System - ISO 14721):** O modelo conceitual padrão-ouro internacional para repositórios digitais confiáveis e arquivos de longo prazo.
- **Padrão PREMIS (Preservation Metadata: Implementation Strategies):** Dicionário de dados internacional mantido pela Library of Congress, focado estritamente em metadados de preservação (a "caixa-preta" e proveniência do objeto digital).
- **Projeto InterPARES (Luciana Duranti):** Pesquisa multinacional sobre a manutenção da autenticidade, integridade e confiabilidade de registros arquivísticos em sistemas eletrônicos.`,
  advancedTheory: `### 1. O Paradoxo da Preservação Digital: Ativa vs. Passiva

Documentos analógicos em suporte papel preservam-se de forma **passiva**: basta mantê-los em ambiente estável, ao abrigo da luz e da umidade, para que sobrevivam por séculos. 

Em contrapartida, os documentos digitais exigem **preservação ativa e contínua**:

- **Degradação de Bits (*Bit Rot*):** Corrupção física imperceptível dos setores magnéticos ou ópticos ao longo do tempo.
- **Obsolescência Tecnológica:** A maior vilã da era da informação. O arquivo binário permanece intacto, mas o hardware, os sistemas operacionais ou os programas necessários para decodificá-lo deixam de existir.

> 💡 **Conceito Essencial:**
> Preservar o objeto digital não é guardar o suporte físico (CDs, HDs), mas sim garantir que a **informação inteligível e autêntica** continue acessível através de sucessivas gerações tecnológicas.

---

### 2. A Tríade das Estratégias Clássicas de Preservação

Para combater a obsolescência de suportes lógicos e físicos, a Ciência da Informação estabelece três táticas fundamentais:

- **1. Refrescamento (*Refreshing*):**
  Transferência dos dados de um suporte físico antigo para outro mais moderno (ex: copiar dados de disquetes para discos rígidos, ou de HDs locais para a nuvem). 
  *Regra de Ouro:* O código binário e o formato lógico **NÃO mudam**. Troca-se apenas o meio físico.

- **2. Migração (*Migration*):**
  Conversão periódica do objeto digital de um formato em obsolescência para um formato padronizado e aberto de longo prazo (ex: converter arquivos antigos proprietários \`.doc\` para \`.pdf/a\`, ou imagens proprietárias para \`.tiff\` não compactado).
  *Regra de Ouro:* É a técnica mais amplamente empregada no mundo, embora envolva risco de pequenas perdas na diagramação original.

- **3. Emulação (*Emulation*):**
  Recriação virtual, em hardware moderno, do ambiente de software original do documento. O arquivo antigo permanece intacto e é executado por um emulador que simula o sistema operacional e os softwares originais.
  *Regra de Ouro:* Ideal para softwares interativos, bases de dados complexas e arte digital, mas possui alto custo computacional de desenvolvimento.

---

### 3. A Arquitetura do Modelo OAIS: Pacotes de Informação (IPs)

A norma **ISO 14721 (OAIS)** estrutura o ciclo de vida da custódia documental em três pacotes de informação (*Information Packages*):

- **SIP (*Submission Information Package*):**
  O pacote de submissão entregue pelo autor/produtor ao repositório (ex: documento de texto ou dados brutos de pesquisa ainda sem padronização).

- **AIP (*Archival Information Package*):**
  O pacote mestre de arquivamento preservado no "cofre digital". É composto pelo conteúdo original convertido para padrão de guarda permanente, acompanhado de metadados robustos de proveniência e integridade (**PREMIS**). O usuário final **não tem acesso direto** a este arquivo.

- **DIP (*Dissemination Information Package*):**
  O pacote de disseminação derivado do AIP, formatado em tamanho otimizado para navegação web e download rápido pelo usuário final (ex: PDF com OCR otimizado para tela).`,
  unicampContext: `Na **Unicamp**, centros de memória renomados internacionalmente como o **Arquivo Edgard Leuenroth (AEL)** e a **Biblioteca Central Cesar Lattes (BCC)** lidam com acervos históricos digitalizados e natodigitais.

- **Fluxo OAIS Prático:** As matrizes originais de digitalização em altíssima resolução (TIFF sem compressão a 600 DPI) são seladas com metadados PREMIS no nível de **AIP**, enquanto cópias de acesso e consulta pública são disponibilizadas como **DIP** nos portais web.
- **Padrão PDF/A:** Todas as teses e dissertações passam por rotinas de conversão e validação para o padrão **ISO 19005 (PDF/A)**, garantindo auto-suficiência dos arquivos (fontes embutidas e proibição de scripts executáveis).`,
  boardAnalysis: {
    trends: `### Análise de Bancas (CEBRASPE, VUNESP e FUNCAMP)

- **CEBRASPE:** Faz questão de tentar induzir o candidato ao erro trocando os conceitos de **Refrescamento** (troca de mídia física) e **Migração** (conversão de formato de arquivo). Também cobra de forma incisiva a sequência lógica do OAIS: **SIP ➔ AIP ➔ DIP**.
- **VUNESP / FUNCAMP:** Cobram a finalidade dos metadados **PREMIS** versus **Dublin Core**. O examinador testa se o candidato compreende que o Dublin Core visa à **descoberta** (*discovery*), enquanto o PREMIS é o padrão estruturado para documentar **proveniência, autenticidade e eventos de preservação**.`,
    commonTraps: `> 🚨 **Pegadinha Clássica CEBRASPE / VUNESP:**
> *"A estratégia de emulação caracteriza-se pela conversão contínua do formato dos arquivos proprietários para formatos abertos padronizados, constituindo a alternativa de menor custo financeiro para bibliotecas universitárias."*
>
> **Gabarito: ERRADO!**
> A conversão de formatos de arquivos é o conceito de **MIGRAÇÃO**. A emulação não altera os arquivos originais; ela programa um emulador para recriar o ambiente operacional antigo. Ademais, a emulação tem custo elevado e engenharia altamente especializada.`
  },
  memorizationMatrix: `### Síntese Prática: Estratégias de Preservação & Fluxo OAIS

| Estratégia / Conceito | Alvo da Ação | O que ocorre com o arquivo? |
| :--- | :--- | :--- |
| **Refrescamento** | Mídia Física (Suporte) | O arquivo binário permanece idêntico; apenas a mídia é trocada |
| **Migração** | Formato Lógico | O arquivo é convertido para formato mais novo ou aberto (ex: PDF/A) |
| **Emulação** | Ambiente Computacional | O arquivo não muda; cria-se um emulador que simula o sistema antigo |
| **Encapsulamento**| Autossuficiência | Agrupa o objeto digital e todos os detalhes técnicos necessários para lê-lo |

#### Fluxo dos Pacotes OAIS
- **SIP (Submission):** O autor entrega à biblioteca.
- **AIP (Archival):** A biblioteca guarda a 7 chaves com PREMIS (Pacote Mestre).
- **DIP (Dissemination):** O público visualiza e baixa no navegador.`
};
