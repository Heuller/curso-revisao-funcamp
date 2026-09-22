import type { AdvancedTopic } from '../types';

export const m02: AdvancedTopic = {
  id: "m02",
  title: "2. Preservação Digital (Estratégias e Metadados)",
  authorsAndFrameworks: `Autores e Marcos:
• Digital Curation Centre (DCC): Criador do Ciclo de Vida da Curadoria Digital.
• OAIS (Open Archival Information System - ISO 14721): O modelo de referência padrão-ouro para qualquer arquivo digital no planeta.
• PREMIS (Preservation Metadata: Implementation Strategies): O padrão de metadados focado estritamente na preservação (a "caixa preta" do arquivo).
• Projeto INTERPARES (Luciana Duranti): Foco na autenticidade de documentos arquivísticos digitais.`,
  advancedTheory: `1. O Paradoxo da Preservação Digital
Documentos de papel se preservam de forma PASSIVA (coloque numa sala escura, sem umidade, e ele durará 500 anos). Documentos digitais exigem preservação ATIVA. Se você gravar um arquivo hoje e largá-lo por 20 anos, ele sofrerá "Degradação de Bits" (Bit rot) ou Obsolescência Tecnológica (o hardware/software não existe mais para abri-lo).

2. As 3 Estratégias Clássicas de Preservação
Para combater a obsolescência de hardware e software, a Biblioteconomia adota 3 táticas fundamentais:
• Refrescamento (Refreshing): Atualização da mídia física. Copiar do disquete para o CD, do CD para o Pendrive, do Pendrive para a Nuvem. O arquivo (os zeros e uns) NÃO MUDA, apenas o suporte físico é trocado. Combate a falha de hardware.
• Migração (Migration): Atualização do formato lógico. Converter um arquivo .DOC de 1995 para .DOCX, e depois para .PDF/A (formato de arquivamento a longo prazo). O documento sofre leves mutações. Combate a obsolescência de software. É a técnica mais usada no mundo.
• Emulação (Emulation): Criar um "software que finge ser o computador antigo" dentro do computador novo. Em vez de converter o arquivo velho, você emula o sistema operacional de 1990 para rodar o arquivo original. Usado muito em preservação de videogames e softwares complexos (CD-ROMs interativos).

3. O Modelo OAIS (SIP, AIP e DIP)
Todo sistema de preservação digital robusto segue a norma OAIS, que divide o fluxo informacional (Pacotes de Informação - IP) em três fases:
• SIP (Submission IP): É o que o autor/pesquisador envia para a biblioteca. (Ex: um arquivo do Word não padronizado).
• AIP (Archival IP): É a "caixa-forte". O sistema converte o SIP, adiciona metadados PREMIS pesados, sela tudo e guarda no servidor. O usuário NÃO tem acesso ao AIP.
• DIP (Dissemination IP): É o arquivo levinho e otimizado gerado a partir do AIP para ser mostrado ao usuário final na tela do computador (Ex: um PDF otimizado para web).`,
  unicampContext: `A Unicamp abriga documentos históricos inestimáveis no Arquivo Edgard Leuenroth (AEL) e na BCC (Biblioteca Central). A transição desses acervos sonoros, iconográficos e textuais para o digital exige uso estrito da MIGRACÃO para o formato PDF/A (textos) e TIFF não comprimido (imagens mestre - AIP), disponibilizando JPGs (DIP) para a consulta pública.`,
  boardAnalysis: {
    trends: `CEBRASPE (2018-2026): O CEBRASPE tem fetiche por confundir Refrescamento e Migração. Sempre lembre: Refrescamento = Troca de Mídia Física (Disquete para Nuvem). Migração = Troca de Formato (DOC para PDF/A). Eles também amam as siglas SIP, AIP e DIP do modelo OAIS.
    
VUNESP / FUNCAMP: Gostam de cobrar o conceito PREMIS. Testam se o candidato sabe que Dublin Core é para "descoberta" (achar o documento) e PREMIS é para a "saúde a longo prazo" (rastrear quem alterou, quando e como - proveniência).`,
    commonTraps: `🚨 Pegadinha Clássica CEBRASPE: 
"A Emulação, por converter permanentemente os arquivos de formatos antigos para formatos contemporâneos, é a estratégia mais barata e utilizada em bibliotecas universitárias."
(ERRADO: Isso é a descrição da MIGRACÃO. A emulação NÃO converte o arquivo, ela recria o ambiente original. Além disso, a emulação é caríssima e complexa de se manter).`
  },
  memorizationMatrix: `MACETE DAS ESTRATÉGIAS & OAIS
| Ameaça | Estratégia de Combate | O que muda? |
|--------|-----------------------|-------------|
| Ferrugem / Quebra (Mídia)| Refrescamento | O PenDrive (Suporte físico). |
| Software Antigo | Migração | O formato do arquivo (.DOC -> .PDF). |
| Sistema Inteiro Morto | Emulação | Cria-se uma "máquina do tempo" virtual.|

OAIS Flow: Autor manda [SIP] -> Cofre guarda [AIP] -> Usuário lê [DIP].`
};
