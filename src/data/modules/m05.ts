import type { AdvancedTopic } from '../types';

export const m05: AdvancedTopic = {
  id: "m05",
  title: "5. Preservação e Conservação de Acervos Físicos e Digitais",
  authorsAndFrameworks: `Autores-Chave e Guias:
• Cassares e Moi (2000): "Como fazer conservação preventiva" (Bíblia absoluta em concursos no Brasil).
• Spinelli e Pedersoli (2009): Conservação de acervos documentais.
• Padrão ISO 14721 (OAIS - Open Archival Information System): Modelo de referência obrigatório para preservação digital de longo prazo.`,
  advancedTheory: `1. A Tríade da Salvaguarda Física (Cassares)
Em concursos de alto nível, os termos não são sinônimos.
• Preservação: É a "Política" (Macroeconômico/Administrativo). Ações de prevenção, políticas de segurança, controle ambiental e planejamento financeiro para garantir a sobrevida do acervo.
• Conservação: São as "Ações Diretas". Intervenções feitas para paralisar ou retardar a degradação (ex: higienização, acondicionamento em caixas desacidificadas). É preventiva.
• Restauração: É a "Medicina/Cirurgia". Intervenção técnica invasiva para recuperar a integridade física de um dano já ocorrido (ex: enxerto de papel, obturação, banho de desacidificação). Só feita por especialistas.

2. Agentes de Degradação (Acervo Físico)
• Físicos: Temperatura (T) e Umidade Relativa (UR). O controle é a chave. Oscilações bruscas (higroscopia) destroem o papel.
• Químicos: Poluição, poeira e acidez intrínseca do papel (lignina presente na polpa de madeira pós-séc. XIX causa amarelecimento e fragilização).
• Biológicos: Insetos (traças, cupins, brocas), roedores e fungos (proliferam acima de 65% UR).
• Antrópicos (Humanos): Furto, vandalismo, dobras, uso de fitas adesivas ácidas (durex), clipes metálicos (ferrugem) e manuseio inadequado (saliva no dedo para virar página).

3. Preservação Digital (Paradigma do Longo Prazo)
A grande ameaça não é o inseto, mas a obsolescência tecnológica e a degradação do suporte físico (bit rot).
Estratégias de Preservação Digital:
• Refrescamento (Refreshing): Copiar os dados de um suporte velho para um novo, mantendo o formato exato (ex: copiar um PDF de um CD para um SSD). Previne a degradação física do suporte.
• Migração: Transformar o arquivo de um formato obsoleto para um formato padrão contemporâneo (ex: de um arquivo .doc do Word 95 para .pdf/A ou .xml). Previne a obsolescência de software.
• Emulação: Preservar o dado original bit a bit, mas criar um software (emulador) que simula o sistema operacional antigo na máquina nova (muito usado para games e softwares interativos antigos).
• Encapsulamento: Juntar o objeto digital e todos os metadados necessários para interpretá-lo no futuro em um único "pacote".

4. Modelo OAIS (Open Archival Information System)
Pacotes de Informação (Packages): SIP (Submissão - o que entra), AIP (Arquivamento - o que é preservado a longo prazo com metadados PREMIS) e DIP (Disseminação - o formato leve que o usuário acessa).`,
  unicampContext: `A Unicamp abriga centros de memória imensos como o Arquivo Edgard Leuenroth (AEL) no IFCH e as Obras Raras da BCE (Biblioteca Central Cesar Lattes). As questões da FUNCAMP que envolvem o AEL cobrarão conhecimentos rígidos sobre controle de temperatura e umidade, além de estratégias avançadas de restauração de manuscritos, desacidificação em massa e digitalização de acervos históricos sob diretrizes do CONARQ.`,
  boardAnalysis: {
    trends: `CEBRASPE (2018-2026): A banca foca fortemente na distinção entre Conservação, Preservação e Restauração, extraindo os textos literalmente do livro da Cassares. Em preservação digital, testam frequentemente a diferença técnica entre Migração e Emulação.
    
VUNESP / FUNCAMP: Costumam pedir os valores de temperatura e umidade ideais para acervos em papel (geralmente T = 18 a 22ºC e UR = 45 a 55%), e as ações proibidas (uso de fitas adesivas comerciais).`,
    commonTraps: `🚨 Pegadinha Clássica CEBRASPE: 
"A Emulação consiste na transferência periódica de dados de um suporte físico em risco de degradação para um suporte novo, sem alterar o formato dos dados originais."
(ERRADO: Isso é a definição de Refrescamento (Refreshing). Emulação é simular o hardware/software obsoleto.)`
  },
  memorizationMatrix: `FÓRMULA DA PRESERVAÇÃO DIGITAL
| Estratégia | O que combate? | Ação |
|------------|----------------|------|
| Refrescamento | Suporte velho (CD arranhado) | Copiar igual para um HD novo |
| Migração | Software obsoleto (.wpd) | Converter para formato aberto (.pdf/A) |
| Emulação | Software/SO morto | Simular o Windows 95 no Windows 11 |`
};
