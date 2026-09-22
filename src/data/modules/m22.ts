import type { AdvancedTopic } from '../types';

export const m22: AdvancedTopic = {
  id: "m22",
  title: "22. Propriedade Intelectual e Direitos Autorais",
  authorsAndFrameworks: `Legislação-Chave e Acordos:
• Lei nº 9.610/1998 (LDA): A rigorosa Lei de Direitos Autorais Brasileira (Uma das mais restritivas do mundo).
• Convenção de Berna (1886): Tratado basilar internacional que dispensa formalidades para a proteção da obra.
• WIPO (World Intellectual Property Organization): Organização Global da ONU.`,
  advancedTheory: `1. O Guarda-Chuva da Propriedade Intelectual (PI)
A PI divide-se em dois grandes blocos completamente diferentes juridicamente:
• Propriedade Industrial: Protege a invenção técnica e a marca comercial. Depende ABSOLUTAMENTE de registro formal no INPI. Compreende: Patentes (invenções/modelos de utilidade), Marcas, Desenho Industrial, Indicação Geográfica.
• Direitos Autorais e Conexos: Protege a expressão literária, artística e científica. A proteção nasce com a CRIAÇÃO. O registro (na Biblioteca Nacional, por exemplo) é apenas declaratório (gera presunção de autoria), mas NÃO é obrigatório.

2. A Dicotomia do Direito Autoral (Moral vs Patrimonial)
A lei brasileira (9.610/98) separa fortemente o direito do autor em duas metades:
• Direitos Morais: O direito de ter seu nome na obra (paternidade), de modificar a obra ou de tirá-la de circulação. São INALIENÁVEIS e IRRENUNCIÁVEIS. O autor não pode vendê-los nem doá-los. Duram para sempre.
• Direitos Patrimoniais: O direito de exploração econômica (vender, licenciar, lucrar). Estes sim podem ser transferidos, cedidos ou vendidos para terceiros (ex: Editoras). Possuem prazo de validade (Domínio Público).

3. O Domínio Público e Exceções (Limitações)
No Brasil, os direitos patrimoniais duram por 70 anos contados a partir do dia 1º de janeiro do ano SUBSEQUENTE ao falecimento do autor. (Atenção: É do falecimento do autor, e não da publicação da obra!). Após isso, cai em Domínio Público (qualquer um pode usar sem pagar, mas OBRIGATORIAMENTE citando o nome do autor por causa do direito moral).
• Limitações da Lei: A cópia integral de livro é PROIBIDA no Brasil para fins privados. A lei só permite a cópia de "pequenos trechos" (sem definir quantos % é isso), para uso privado do copista, sem intuito de lucro.

4. Licenças Flexíveis (Creative Commons - CC)
O "Copyleft". O autor, dono dos direitos patrimoniais, usa as licenças CC para avisar o público antecipadamente: "Pode copiar e compartilhar sem me pedir permissão prévia, desde que cumpra estas condições". 
Atributos CC: BY (Atribuição - cite meu nome), NC (Non-Commercial - não ganhe dinheiro com isso), ND (No-Derivatives - não altere minha obra), SA (Share-Alike - se alterar, tem que usar essa mesma licença na obra nova).`,
  unicampContext: `A INOVA Unicamp é a agência de inovação da universidade, lidando exaustivamente com o patenteamento (Propriedade Industrial) das teses de engenharia e química. Já as bibliotecas lidam diariamente com a restrição da LDA para tirar cópias de livros físicos para os alunos (A famosa regra informal dos "10% ou um capítulo" na reprografia).`,
  boardAnalysis: {
    trends: `CEBRASPE (2018-2026): A banca adora questionar se o Direito Moral pode ser vendido para uma editora (FALSO, só o patrimonial). Também costumam testar a contagem dos 70 anos do domínio público (sempre contar do ano SEGUINTE à morte).
    
VUNESP / FUNCAMP: Costumam cobrar as licenças Creative Commons, especialmente o que significa a sigla CC-BY-NC (Você pode copiar e espalhar, desde que me dê o crédito e NÃO ganhe dinheiro com isso).`,
    commonTraps: `🚨 Pegadinha Clássica CEBRASPE: 
"Para que um livro possua proteção de direitos autorais no Brasil, é estritamente obrigatório que ele possua o ISBN registrado na Câmara Brasileira do Livro e o depósito averbado na Biblioteca Nacional."
(ERRADO: O Art. 18 da Lei 9.610/98 é claro: "A proteção aos direitos de que trata esta Lei INDEPENDE de registro". O registro é opcional.)`
  },
  memorizationMatrix: `DIVISÃO DA PROPRIEDADE INTELECTUAL
| Ramo | O que protege? | Exige Registro? | Quem cuida (BR)? |
|------|----------------|-----------------|------------------|
| Autorais | Livros, Músicas, Filmes | NÃO (Opcional) | FBN (Bib. Nac.) |
| Industrial| Patentes, Marcas | SIM (Obrigatório) | INPI |
| Morais | Paternidade e Ineditismo | Perpétuo | (Inalienável) |
| Patrimonial| Dinheiro, Venda, Cessão | 70 anos pós-morte| (Pode ser vendido)|`
};
