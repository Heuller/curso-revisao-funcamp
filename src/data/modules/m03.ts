import type { AdvancedTopic } from '../types';

export const m03: AdvancedTopic = {
  id: "m03",
  title: "3. Movimento de Acesso Aberto (Open Access)",
  authorsAndFrameworks: `Marcos Históricos (As 3 Grandes Iniciativas "B"):
• Budapeste (2002): Budapest Open Access Initiative (BOAI). O documento fundador que cunhou o termo "Open Access".
• Bethesda (2003): Declaração sobre a publicação de acesso aberto. Focou no apoio institucional e agências de fomento.
• Berlim (2003): Declaração de Berlim (A mais famosa). O acesso deve ser livre a toda e qualquer pesquisa científica no mundo, expandindo a definição legal do Acesso Aberto.
• Peter Suber: O principal filósofo moderno do Acesso Aberto.
• SciELO / IBICT: A vanguarda do Acesso Aberto na América Latina (A Via Dourada).`,
  advancedTheory: `1. O Que Exatamente é "Acesso Aberto"?
Não significa apenas "gratuito" (gratis). O Acesso Aberto real (Libre OA) exige a quebra de duas barreiras:
- Barreira de Preço (Price barrier): O usuário não paga assinatura nem paywall para ler.
- Barreira de Permissão (Permission barrier): Os direitos autorais são flexibilizados (geralmente via licenças Creative Commons, como CC-BY), permitindo baixar, copiar, distribuir e minerar texto, desde que citado o autor. 
Se um artigo está grátis no site, mas protegido por copyright estrito impedindo distribuição, ele é apenas "Gratis", não "Libre Open Access".

2. As Cores (Vias) do Acesso Aberto
A espinha dorsal para qualquer concurso público. Como o autor libera o artigo?
• Via Verde (Green Road): O autor publica o artigo em uma revista fechada (paga/Elsevier), MAS ele tem o direito de autoarquivar uma versão do artigo (geralmente o Preprint ou o Postprint sem a diagramação da editora) no REPOSITÓRIO INSTITUCIONAL da sua universidade. Custo: Zero. Instrumento técnico: O Repositório (DSpace).
• Via Dourada / Ouro (Gold Road): O artigo NASCE livre. A revista inteira é aberta. Custo: O autor (ou a agência de fomento) paga uma APC (Article Processing Charge) caríssima para a editora (cerca de 3 mil dólares). A editora libera pro mundo no site dela.
• Via Diamante / Platina (Diamond Road): A evolução latino-americana da via dourada. A revista é aberta, O LEITOR NÃO PAGA PARA LER, E O AUTOR NÃO PAGA APC PARA PUBLICAR. Quem banca a revista? Universidades, governos federais (via CAPES/CNPq) e ONGs. É o modelo do SciELO.
• Via Bronze (Bronze Road): A editora libera a leitura no site, mas não anexa uma licença Creative Commons clara (pode fechar o paywall amanhã). É um acesso aberto falho.

3. O Paradoxo do Prestígio
Pesquisadores queriam o Acesso Aberto, mas seus currículos acadêmicos exigiam publicação em revistas de alto Fator de Impacto (JIF), que historicamente eram fechadas. A solução das agências de fomento (como o Plan S na Europa) foi proibir pesquisadores que recebem dinheiro público de publicar em revistas totalmente fechadas.`,
  unicampContext: `No SBU/Unicamp, o suporte ao Movimento de Acesso Aberto é gigantesco. A Unicamp usa fortemente a "Via Verde" obrigando os professores a colocarem suas pesquisas no Repositório da Unicamp. Ao mesmo tempo, atua na "Via Diamante" ao sediar e financiar revistas científicas locais através do Portal de Periódicos Eletrônicos (PPEC) usando o sistema OJS (Open Journal Systems), sem cobrar taxas APC dos pesquisadores brasileiros.`,
  boardAnalysis: {
    trends: `CEBRASPE (2018-2026): A banca esmigalha o candidato na definição das vias. Eles sempre invertem as cores. O padrão do Cebraspe é dizer que a "Via Verde exige pagamento de altíssimas taxas APC pelo autor" (ERRADO, Via Verde é o depósito grátis no RI. Quem cobra APC é a Via Dourada de editoras comerciais).
VUNESP / FUNCAMP: Costumam pedir as Declarações dos "3 B's" (Budapeste, Bethesda, Berlim). Se a prova perguntar onde o termo "Open Access" foi inventado legalmente, a resposta é Budapeste (2002).`,
    commonTraps: `🚨 Pegadinha Clássica CEBRASPE: 
"A Via Dourada (Gold Road) caracteriza-se pelo depósito da versão pré-print do artigo no repositório institucional da universidade do pesquisador, dispensando a revisão por pares oficial."
(ERRADO: Isso é a Via Verde. A Via Dourada ocorre quando o artigo é publicado e finalizado na própria revista, e o autor geralmente paga a APC para a revista liberá-lo no site da editora.)`
  },
  memorizationMatrix: `A AQUARELA DO ACESSO ABERTO (AS VIAS)
| Via / Cor | Onde fica o arquivo? | Quem paga a conta? | Custo pro Leitor? |
|-----------|-----------------------|--------------------|-------------------|
| VERDE (Green)| Repositório da Uni (RI) | Ninguém (É grátis) | Zero |
| OURO (Gold) | Site da Revista | Autor paga a APC | Zero |
| DIAMANTE | Site da Revista (SciELO)| A Universidade/Governo banca | Zero |
| BRONZE | Site da Revista | Ninguém, mas sem licença clara | Zero (Temporário)|`
};
