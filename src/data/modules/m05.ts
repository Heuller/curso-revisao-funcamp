import type { AdvancedTopic } from '../types';

export const m05: AdvancedTopic = {
  id: "m05",
  title: "5. Redes e Sistemas de Informação",
  authorsAndFrameworks: `Autores e Órgãos Relacionados:
• IBICT (Instituto Brasileiro de Informação em Ciência e Tecnologia): Órgão Magno das Redes de Informação no Brasil.
• Murilo Bastos da Cunha (1999): Teórico clássico sobre Consórcios de Bibliotecas e Compartilhamento de Recursos.
• RNP (Rede Nacional de Ensino e Pesquisa): A espinha dorsal da internet acadêmica que interliga a Unicamp.`,
  advancedTheory: `1. Epistemologia das Redes (Por que cooperar?)
As bibliotecas abandonaram a autossuficiência. Nenhuma biblioteca (nem Harvard, nem Unicamp) consegue ter orçamentos para comprar 100% da produção mundial (Problema da Explosão Documental). 
A solução foi a Rede de Informação. 
• Rede de Informação: Conjunto de unidades interagindo formalmente para trocar dados, reduzir custos e evitar trabalho duplicado. O princípio basilar é o "Tratamento Cooperativo" e a "Sinergia".

2. Sistemas Tradicionais do IBICT
O governo federal sustenta o ecossistema nacional. Os concursos cobram a decoreba cruel das siglas criadas pelo IBICT (Sempre sediado em Brasília):
• BDTD (Biblioteca Digital Brasileira de Teses e Dissertações): Rede nacional que agrega, em um único portal (coletor OAI-PMH), as teses dos Repositórios Institucionais de todas as universidades federais e estaduais do Brasil (inclusive da Unicamp).
• CCN (Catálogo Coletivo Nacional de Publicações Seriadas): Um dinossauro importantíssimo. Um catálogo mestre que diz "qual biblioteca no Brasil tem a revista física/eletrônica X daquele ano específico". O pesquisador olha o CCN e pede o artigo via COMUT.
• COMUT (Programa de Comutação Bibliográfica): É o "Uber" da informação antes da internet. A biblioteca que não tem o artigo, solicita uma cópia escaneada/xerox da biblioteca que tem (via correio ou rede). Ainda vivo e caindo em prova.

3. Portal de Periódicos CAPES
Não é do IBICT! É da fundação CAPES (MEC). É o maior consórcio de assinaturas eletrônicas governamental do planeta. 
Funciona na lógica "Top-Down" de assinaturas pagas pelo governo federal. Libera o acesso a bases caríssimas (Scopus, Web of Science, IEEE) via IP das universidades autorizadas (Rede CAFe - Comunidade Acadêmica Federada, operada pela RNP).

4. Consórcios x Redes Tradicionais
• Redes tradicionais focam em compartilhar TRABALHO (ex: Catalogação cooperativa - uma biblioteca cataloga o livro, as outras 50 copiam o registro MARC).
• Consórcios focam em compartilhar PODER DE COMPRA (Acquisition Consortia). Várias bibliotecas se juntam para comprar um pacote de e-books da Springer com 40% de desconto.`,
  unicampContext: `A Unicamp está pendurada fortemente na Rede CAFe (da RNP). Quando o aluno da Unicamp está em casa, ele precisa configurar a "VPN da Unicamp" no computador dele (ou usar o proxy via CAFe) para que a Elsevier e a Clarivate "pensem" que o PC dele está fisicamente no campus de Barão Geraldo, liberando o acesso ao Portal CAPES.`,
  boardAnalysis: {
    trends: `CEBRASPE (2018-2026): A banca costuma focar no COMUT e no CCN. A questão canônica afirma que "o CCN garante o acesso integral e online a todos os textos completos das revistas que cadastra" (ERRADO! O CCN é apenas um CATÁLOGO localizador. Ele diz "A USP tem", quem traz o texto é o COMUT ou a ida física do usuário).
VUNESP / FUNCAMP: Gostam de cobrar as responsabilidades orgânicas: Saber que a BDTD e o CCN são do IBICT (Ministério de Ciência e Tecnologia), e o Portal de Periódicos é da CAPES (Ministério da Educação).`,
    commonTraps: `🚨 Pegadinha Clássica CEBRASPE: 
"A catalogação cooperativa em redes descentralizadas eleva o custo de processamento técnico individual, visto que os catalogadores locais precisam adaptar os registros aos padrões internacionais rígidos da rede."
(ERRADO: O objetivo da rede cooperativa é justamente DERUBAR OS CUSTOS. A catalogação cooperativa reduz drasticamente o custo financeiro e o tempo da equipe técnica, pois erradica a duplicação de esforços - uma pessoa faz, as outras 1.000 apenas baixam e usam o registro).`
  },
  memorizationMatrix: `SISTEMAS NACIONAIS BRASILEIROS
| Sigla | Orgão Pai | Função Mágica |
|-------|-----------|---------------|
| BDTD | IBICT (MCTI) | Concentrar as Teses e Dissertações do BR. |
| CCN | IBICT (MCTI) | Dizer em qual biblioteca tá uma revista. |
| COMUT | IBICT (MCTI) | Pedir cópia de artigo pra outra biblioteca. |
| Portal | CAPES (MEC) | Dar acesso VIP a bases de dados pagas ($$). |
| CAFe | RNP | Autenticar o aluno fora do campus (VPN). |`
};
