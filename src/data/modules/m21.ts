import type { AdvancedTopic } from '../types';

export const m21: AdvancedTopic = {
  id: "m21",
  title: "21. Indexação, Resumos e Controle Vocabular (Thesaurus)",
  authorsAndFrameworks: `Autores-Chave e Normas Essenciais:
• F.W. Lancaster (1993): "Indexação e Resumos: Teoria e Prática". O deus da indexação e da Avaliação de Sistemas de Recuperação da Informação (Precisão x Revocação).
• Maria Inês Pinto, Mariângela Fujita e Blanca Gil Urdiciain: Especialistas nacionais e ibéricas frequentemente citadas.
• NBR 6028 (ABNT): Regras para elaboração de Resumos.
• ISO 5963 (1985) / ISO 25964: Métodos de exame de documento para indexação.`,
  advancedTheory: `1. A Indexação e a Norma ISO 5963 (Os Três Estágios)
A indexação é a alma da representação temática. É a extração de conceitos que representam o assunto para que o leitor ache a obra.
Segundo a ISO 5963 (amada pelas bancas), a indexação TEM QUE SEGUIR 3 etapas inquebráveis:
• 1. Exame Analítico do Documento: O indexador lê partes vitais (título, sumário, introdução, conclusão). (Não se lê o livro inteiro!).
• 2. Identificação dos Conceitos: O profissional pensa: "Sobre o que é isso?" (Em linguagem natural, na mente do catalogador).
• 3. Tradução dos Conceitos para a Linguagem Documentária: Pegar os conceitos mentais e ir para o Tesauro, convertendo a palavra solta (Linguagem Natural) na palavra rígida aceita pelo sistema (Linguagem Controlada/Artificial).

2. Tipos de Linguagem na Indexação
• Linguagem Natural (Indexação Livre): Utiliza as palavras exatas do autor do texto.
   - Vantagens: Rápido, barato, extremamente atualizado (o autor usa a gíria científica de 2026).
   - Desvantagens: Recupera lixo semântico. Sofre com Sinônimos (Buscador procura "Cão", livro tá escrito "Cachorro") e Homônimos (Manga fruta x Manga camisa).
• Linguagem Controlada (Vocabulário Controlado / Tesauro): Lista fechada de termos pré-aprovados.
   - Vantagens: Evita o caos. Resolve o problema de Sinônimos e Homônimos. Recuperação cirúrgica.
   - Desvantagens: Custoso (precisa de tesauro e profissional treinado), e sofre "Latência Temporal" (demora meses para a IFLA/LoC aprovar um novo termo científico, atrasando a indexação de artigos de ponta).

3. O Paradoxo de Lancaster: Revocação x Precisão
Lancaster prova que Revocação e Precisão são inversamente proporcionais. É a "Balança da Maldição" (Se um sobe, o outro fatalmente desce).
• REVOCAÇÃO (Recall / Abrangência): É a capacidade do sistema trazer TODOS os documentos relevantes da base, não deixando nenhum para trás. Você recupera 100% da base, mas a balança desaba: Traz muito LIXO (ruído).
   - Equação: (Doc. Relevantes Recuperados) / (Total de Relevantes na Base INTEIRA).
• PRECISÃO (Precision): É a capacidade de NÃO trazer lixo (ruído). Você joga no sistema e ele traz SÓ O QUE É PERFEITO. Mas a balança desaba: Ele acaba deixando documentos bons para trás (Silêncio).
   - Equação: (Doc. Relevantes Recuperados) / (Total de Documentos Recuperados na sua Busca).

4. Taxonomia, Ontologia e Tesauros (O Eixo de Relacionamentos)
O controle de vocabulário mais perfeito que existe é o Tesauro. Diferente de uma simples lista de assuntos (Lista de Cabeçalhos), o Tesauro estabelece TRÊS relações semânticas formais:
• Relação de Equivalência (USE / UF - Used For): Combate sinônimos. (Ex: Cachorro -> USE -> Cães).
• Relação Hierárquica (TG/BT - Termo Genérico / TE/NT - Termo Específico): Classe e Subclasse. (Ex: Animal (TG) -> Cão (TE)).
• Relação Associativa ou Afim (TR/RT - Termo Relacionado): Assuntos que lembram o outro, mas não têm hierarquia. (Ex: Cão -> TR -> Osso, ou Veterinário).

5. Resumos (NBR 6028)
Os resumos representam o documento e podem ser:
• Indicativos: Apresenta só os pontos principais. (NÃO SUBSTITUI A LEITURA ORIGINAL).
• Informativos: Traz objetivos, metodologia, resultados e conclusão detalhada. (Em certos casos de urgência, SUBSTITUI A LEITURA DO ORIGINAL).
• Críticos (Resenha): Único resumo feito por terceira pessoa dando OPINIÃO valorativa do autor original.`,
  unicampContext: `A Unicamp processa quantidades insanas de teses e artigos (RI). A indexação das teses usa, na maioria, o Vocabulário Controlado da USP (VocUSP) e DeCS/MeSH (para a fortíssima área médica e odontológica de Piracicaba). Entender a tradução entre as palavras exatas que o doutorando botou no resumo (Linguagem Natural) e o termo exato do tesauro (Linguagem Controlada) é o dia a dia do bibliotecário referenceiro.`,
  boardAnalysis: {
    trends: `CEBRASPE (2018-2026): Banca perversa no binômio de Lancaster. Costumam inverter as equações ou afirmar absurdos como "Um sistema perfeito de inteligência artificial de buscas é capaz de maximizar a 100% tanto a Revocação quanto a Precisão simultaneamente". (FALSO E IMPOSSÍVEL. É um princípio matemático, se um sobe, o outro desce - Relação Inversamente Proporcional).
VUNESP / FUNCAMP: Pedem frequentemente os estágios da ISO 5963. A pegadinha fatal deles é dizer que a ISO manda o bibliotecário "ler e resumir a obra integralmente" (Errado: É uma análise e exame rápido de partes vitais).`,
    commonTraps: `🚨 Pegadinha Clássica CEBRASPE: 
"A Linguagem de Indexação Livre (Natural) é aquela adotada por Tesauros modernizados com sistemas de inteligência artificial, onde os termos hierárquicos (TG/TE) são atualizados em tempo real."
(ERRADO: Tesauros, independente de tecnologia, são SEMPRE exemplos de LINGUAGEM CONTROLADA (ou Artificial). Linguagem Natural/Livre não usa lista nenhuma, é a palavra crua da boca do autor ou leitor.)`
  },
  memorizationMatrix: `BALANÇA DA RECUPERAÇÃO (LANCASTER)
[REVOCAÇÃO ALTA] = Traz MUITA coisa. (Bônus: Nada escapa. Ônus: Muito Lixo/Ruído).
[PRECISÃO ALTA] = Traz POUCA coisa. (Bônus: Zero lixo. Ônus: Deixa coisa boa pra trás/Silêncio).

A SANTÍSSIMA TRINDADE DO TESAURO
(USE / UF) = Relação de Equivalência (Ponte entre Sinônimos).
(TG / TE) = Relação Hierárquica (Subir e Descer a Pirâmide).
(TR) = Relação Associativa (Lembrança cruzada entre primos).

AS TRÊS FASES (ISO 5963)
1. Exame Físico > 2. Identifica na Mente > 3. Traduz no Tesauro.`
};
