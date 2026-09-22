import type { AdvancedTopic } from '../types';

export const m08: AdvancedTopic = {
  id: "m08",
  title: "8. Recuperação da Informação (SRI) e Estratégias de Busca",
  authorsAndFrameworks: `Autores-Chave e Guias:
• Lancaster (1979): Avaliação de Serviços de Recuperação da Informação (Revocação x Precisão).
• Baeza-Yates e Ribeiro-Neto (2011): "Modern Information Retrieval" (Bíblia da Ciência da Computação adotada pela CI).
• Calvin Mooers (1950): Cunhou o termo "Information Retrieval".`,
  advancedTheory: `1. O Teorema Fundamental do SRI: Revocação x Precisão
O Santo Graal da Biblioteconomia para concursos. Esses dois indicadores são *inversamente proporcionais* em sistemas tradicionais booleanos.
• Revocação (Recall): "Não deixar nada relevante de fora". Fórmula: (Documentos Relevantes Recuperados) / (Total de Documentos Relevantes EXISTENTES na Base). Uma revocação de 100% significa que você achou tudo que importava (mas pode ter trazido muito lixo junto). Busca-se alta revocação em Revisões Sistemáticas.
• Precisão (Precision): "Não trazer lixo". Fórmula: (Documentos Relevantes Recuperados) / (Total de Documentos RECUPERADOS). Uma precisão de 100% significa que todos os 5 artigos que você achou são úteis (mas você pode ter perdido 50 outros artigos que também eram). Busca-se alta precisão em buscas rápidas no Google.

2. Modelos Clássicos de Recuperação
• Modelo Booleano: Baseado em Teoria dos Conjuntos. A resposta é Binária (Match exato: o documento tem a palavra ou não tem). Não permite ranqueamento (ordenação por relevância). É rígido.
• Modelo Vetorial (Salton): Documentos e consultas são vetores no espaço multidimensional. Calcula o ângulo (cosseno) entre eles. Permite correspondência parcial (Partial Match) e *ranqueamento de relevância*. Usa o cálculo TF-IDF (Term Frequency - Inverse Document Frequency).
• Modelo Probabilístico: Tenta estimar a probabilidade de um documento ser relevante usando realimentação do usuário.

3. Estratégias e Operadores
• Operadores Booleanos: AND (Interseção/Restringe), OR (União/Amplia - usado para sinônimos), NOT (Exclusão/Restringe).
• Operadores de Proximidade: NEAR, ADJ, WITH. Mais fortes que o AND, exigem que as palavras estejam fisicamente próximas no texto.
• Truncamento (*, ?, $): Recupera raízes semânticas. Ex: *educa** recupera educar, educação, educador.
• Expressão Exata: Uso de aspas "". Retorna exatamente aquela cadeia de caracteres (desliga a lematização do motor de busca).`,
  unicampContext: `As bibliotecas da Unicamp realizam treinamentos avançados de estratégias de busca para mestrandos e doutorandos usando a PICO (Patient, Intervention, Comparison, Outcome) em Saúde ou SPIDER/PICoC nas Humanidades, ensinando a cruzar descritores MeSH (Medical Subject Headings) com palavras-chave nos campos Title/Abstract usando operadores booleanos na Web of Science.`,
  boardAnalysis: {
    trends: `CEBRASPE (2018-2026): A banca espreme até a última gota a relação inversa entre Revocação e Precisão. Eles amam descrever uma situação onde o pesquisador precisa fazer uma Revisão Sistemática (logo, não pode perder NADA) e perguntar se ele deve maximizar a Precisão. A resposta é não, ele maximiza a REVOCAÇÃO (usando OR para sinônimos).
    
VUNESP / FUNCAMP: Cobram o Modelo Vetorial perguntando qual modelo resolveu a incapacidade do modelo booleano de "ordenar os resultados do mais importante para o menos importante (ranqueamento)".`,
    commonTraps: `🚨 Pegadinha Clássica CEBRASPE: 
"A ampliação de uma busca bibliográfica (aumento do número de resultados) é obtida com a aplicação do operador booleano AND, enquanto o operador OR restringe a busca aos termos específicos."
(ERRADO: TOTALMENTE invertido. O "AND" exige que as duas palavras existam juntas, logo o grupo diminui - restringe. O "OR" diz "qualquer um serve", logo a rede fica maior - amplia.)`
  },
  memorizationMatrix: `MACETE DE LANCASTER (SRI)
[QUERO TUDO!] -> Alta REVOCAÇÃO -> Uso 'OR' e Truncamento. (Vem lixo junto).
[QUERO SÓ A ELITE!] -> Alta PRECISÃO -> Uso 'AND', 'NOT' e "Aspas Duplas". (Perco coisas).
Regra de Ouro: P e R são inimigos íntimos. Se um sobe, o outro desce.`
};
