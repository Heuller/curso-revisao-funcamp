import { AdvancedTopic } from '../types';

export const m02: AdvancedTopic = {
  id: "m02",
  title: "2. Plano de Dados de Pesquisa, Curadoria e Princípios FAIR",
  authorsAndFrameworks: `Autores-Chave e Guias:
• Sayão e Sales (2012): Referências no Brasil sobre a mudança de paradigma da comunicação científica baseada em artigos para a comunicação baseada em dados primários.
• Wilkinson et al. (2016): O artigo seminal publicado no 'Scientific Data' que cunhou oficialmente os Princípios FAIR.
• DCC (Digital Curation Centre, UK): Principal autoridade internacional no ciclo de vida da curadoria de dados.`,
  advancedTheory: `1. O 4º Paradigma da Ciência (e-Science)
A pesquisa deixou de ser empírica ou apenas computacional para se tornar baseada em dados intensivos (Data-Intensive Science, Jim Gray). O dado cru (raw data) tornou-se um ativo científico com valor inerente, independentemente do artigo publicado.

2. Plano de Gestão de Dados (PGD / DMP)
O Data Management Plan (DMP) não é feito *depois* da pesquisa. É um documento formal, vivo, criado *antes* do início do projeto, exigido hoje por agências de fomento (FAPESP, CNPq, Horizonte Europa). Ele descreve a proveniência, a metodologia de coleta, os padrões de metadados, o arquivamento e as licenças de reuso.

3. Curadoria de Dados de Pesquisa
Diferente da preservação (que é manter os bits vivos), a curadoria implica agregação contínua de valor (DCC Lifecycle Model). Envolve a anotação com metadados robustos (ontologias), migração para formatos legíveis por máquinas e disponibilização a longo prazo. O curador de dados garante que o dado faça sentido daqui a 50 anos para um cientista de outra disciplina.

4. Os Princípios FAIR (Profundidade)
• Findable (Encontrável): Uso mandatório de identificadores persistentes globais (ex: DOI, Handle) e metadados ricos indexados em sistemas de busca.
• Accessible (Acessível): Acesso via protocolos padronizados de rede (ex: HTTPS, FTP). Importante: O protocolo deve ser livre e aberto. FAIR *não* proíbe autenticação e autorização (senha).
• Interoperable (Interoperável): O ponto mais difícil. Exige que metadados usem linguagens e vocabulários formais, acessíveis e compartilhados (ex: RDF, OWL), permitindo que máquinas de diferentes instituições conversem. (Não usar formatos proprietários fechados).
• Reusable (Reutilizável): Os dados devem ter pluralidade de atributos de proveniência (quem fez, como fez, em qual máquina) e uma licença de uso clara (ex: Creative Commons CC-BY).`,
  unicampContext: `O REDU (Repositório de Dados de Pesquisa da Unicamp) utiliza a plataforma Dataverse (desenvolvida por Harvard). O REDU é a pedra angular para os pesquisadores cumprirem as exigências da FAPESP sobre PGDs. Além disso, a Política de Boas Práticas Científicas da Unicamp exige o depósito de datasets associados a teses (IN CCPG nº 001/2024).`,
  boardAnalysis: {
    trends: `CEBRASPE (2020-2026): A banca costuma separar questões de FAIR em duas categorias: as que testam o acrônimo puro, e as que testam a pegadinha do "Acesso Aberto". CEBRASPE frequentemente testa a capacidade do candidato de distinguir PGD (planejamento) do Repositório (armazenamento final).
    
Universidades Federais / FUNCAMP: Costumam cobrar o papel do bibliotecário no Ciclo de Curadoria do DCC (Digital Curation Centre). Saber que o bibliotecário não gera o dado, mas atua na concepção (PGD) e no Arquivamento/Ingestão é crucial.`,
    commonTraps: `🚨 Pegadinha Clássica:
"Para que um dataset atenda aos princípios FAIR, ele deve obrigatoriamente estar sob a filosofia do Acesso Aberto (sem custo, sem barreiras de senha e sem embargos)."
(ERRADO: "As open as possible, as closed as necessary". Dados sigilosos de saúde (LGPD) podem ser FAIR mantendo o 'A' de Accessible por trás de um protocolo de autenticação segura, desde que o *metadado* seja público.)`
  },
  memorizationMatrix: `Mnemônico FAIR Técnico:
[F] Identificador Único Persistente (PID/DOI).
[A] Protocolo de Rede Padrão (Pode ter senha!).
[I] Ontologias e RDF (Máquina entende a Máquina).
[R] Proveniência e Licença de Uso (CC-BY).`
};
