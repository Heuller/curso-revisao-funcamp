import type { AdvancedTopic } from '../types';

export const m03: AdvancedTopic = {
  id: "m03",
  title: "3. Movimento de Acesso Aberto (Open Access)",
  authorsAndFrameworks: `### Marcos Históricos e Doutrinários (As Declarações dos "3 B's")

- **Iniciativa de Budapeste (BOAI - 2002):** *Budapest Open Access Initiative*. O marco fundador formal que cunhou e conceituou internacionalmente o termo **Open Access**, definindo o autoarquivamento e os periódicos abertos.
- **Declaração de Bethesda (2003):** Focou no engajamento das agências de fomento, instituições biomédicas e na transferência dos direitos para repositórios digitais abertos.
- **Declaração de Berlim (2003):** O tratado de maior peso político global. Ampliou o Acesso Aberto para abranger não apenas artigos científicos, mas dados brutos de pesquisa, representações digitais e patrimônio cultural.
- **Peter Suber:** O mais influente teórico contemporâneo do Acesso Aberto, responsável pela distinção seminal entre *Gratis OA* e *Libre OA*.
- **SciELO e IBICT:** Pioneiros históricos no Brasil e América Latina na consolidação da publicação aberta sem custos de assinatura.`,
  advancedTheory: `### 1. O Conceito Jurídico e Operacional de "Acesso Aberto"

O verdadeiro Acesso Aberto não se resume à simples gratuidade (*free*). Segundo a formulação clássica de Peter Suber, o Acesso Aberto pleno exige a superação simultânea de duas barreiras:

- **Barreira de Preço (*Price Barrier*):** O leitor não se depara com cobranças de assinaturas, compras avulsas ou bloqueios de *paywall*.
- **Barreira de Permissão (*Permission Barrier*):** Os direitos patrimoniais de autor são flexibilizados mediante o uso de licenças abertas (notadamente **Creative Commons**, como **CC-BY**), outorgando a terceiros o direito de copiar, distribuir, imprimir, pesquisar ou minerar dados (*text and data mining*), resguardada a devida atribuição de autoria.

> 💡 **Distinção Fundamental (Peter Suber):**
> - **Gratis OA:** Remove apenas a barreira de preço (o artigo pode ser lido sem pagar, mas sob restrições severas de direitos autorais).
> - **Libre OA:** Remove as barreiras de preço E de permissão (garante liberdade jurídica ampla de reuso e mineração de dados).

---

### 2. A Tipologia das Vias (Cores) do Acesso Aberto

O ecossistema editorial internacional classifica a disseminação aberta em quatro rotas principais:

- **Via Verde (*Green Road* / Autoarquivamento):**
  O pesquisador publica em qualquer periódico (inclusive comercial e fechado), mas retém o direito de **autoarquivar** uma versão do trabalho (geralmente o *Preprint* ou *Postprint* revisado por pares) no **Repositório Institucional** da sua universidade.
  *Custo para o autor:* **Zero**.
  *Instrumento tecnológico:* Repositórios Digitais (DSpace, EPrints).

- **Via Dourada (*Gold Road* / Periódicos Abertos Comerciais):**
  O artigo nasce com acesso público direto no website do próprio periódico científico.
  *Custo de publicação:* O autor ou a agência de fomento financia uma taxa de processamento de artigo (**APC** — *Article Processing Charge*), frequentemente com valores vultosos pagos a grandes conglomerados editoriais.

- **Via Diamante / Platina (*Diamond Road* / Sem Taxas):**
  A revista opera em Acesso Aberto total, **sem cobrar taxa do leitor (assinatura) e sem cobrar taxa do autor (APC)**. Os custos operacionais são inteiramente subsidiados por universidades, associações científicas e órgãos estatais de fomento. É o modelo amplamente consolidado na América Latina (plataformas SciELO e Redalyc).

- **Via Bronze (*Bronze Road*):**
  Artigos acessíveis gratuitamente no site da editora comercial, mas sem uma licença formal Creative Commons anexada. A editora mantém a prerrogativa de reincluir o material atrás de um *paywall* a qualquer tempo.

---

### 3. O Dilema do Prestígio Científico e o Plano S

Historicamente, o Movimento de Acesso Aberto colidiu com a métrica do **Fator de Impacto (JIF)**, monopolizada por revistas de modelos tradicionais fechados:

- **Conflito de Interesses:** Os docentes apoiavam o acesso livre, mas submetiam seus melhores trabalhos a periódicos pagos e prestigiados para progredir na carreira acadêmica.
- **Intervenção Mandatória (Plano S):** Consórcios mundiais de agências financiadoras passaram a estabelecer que toda pesquisa científica custeada com verbas públicas deve ser publicada **obrigatoriamente** em acesso aberto imediato, sem períodos de embargo.`,
  unicampContext: `O **Sistema de Bibliotecas da Unicamp (SBU)** atua como um dos grandes catalisadores do Acesso Aberto no estado de São Paulo:

- **Via Verde Obrigatória:** Aplicação do Mandato de Depósito no Repositório da Produção Científica e Intelectual da Unicamp para toda a produção acadêmica da instituição.
- **Via Diamante Local:** O SBU gerencia o **Portal de Periódicos Eletrônicos da Unicamp (PPEC)**, oferecendo infraestrutura no sistema **OJS (Open Journal Systems)** para dezenas de revistas científicas da universidade que não cobram qualquer taxa de submissão ou processamento (APC).
- **Negociações e Acordos Transformativos:** Acompanhamento de acordos que visam migrar verbas de assinaturas fechadas para cobertura de taxas de publicação em periódicos abertos.`,
  boardAnalysis: {
    trends: `### Análise de Bancas (CEBRASPE, VUNESP e FUNCAMP)

- **CEBRASPE:** A banca costuma inverter maliciosamente as características da **Via Verde** e da **Via Dourada**. O examinador afirma que a Via Verde exige pagamento de APC pelo pesquisador ou que a Via Dourada dispensa a revisão por pares.
- **VUNESP / FUNCAMP:** Cobram o reconhecimento histórico das **3 Declarações "B"** (Budapeste, Bethesda e Berlim). Fique atento: se a questão indagar qual iniciativa marcou o surgimento do termo e a primeira definição formal de Acesso Aberto, o gabarito é **Budapeste (BOAI - 2002)**.`,
    commonTraps: `> 🚨 **Pegadinha Clássica CEBRASPE / VUNESP:**
> *"A Via Verde do acesso aberto caracteriza-se pelo recolhimento de taxas de processamento de artigos (APCs) por parte dos repositórios institucionais para remunerar os revisores por pares."*
>
> **Gabarito: ERRADO!**
> A **Via Verde** é baseada no autoarquivamento gratuito no repositório institucional e **não envolve cobrança de APCs**. Quem pratica APCs é a **Via Dourada** comercial. Ademais, repositórios universitários não remuneram revisores.`
  },
  memorizationMatrix: `### Matriz Cromática do Acesso Aberto (As 4 Vias)

| Rota / Cor | Onde o artigo fica disponível? | Quem custeia a operação? | Custo pro Leitor? | Licença Típica |
| :--- | :--- | :--- | :--- | :--- |
| **Via Verde (Green)** | Repositório Institucional (RI) | A Universidade (Infraestrutura) | **Grátis (Zero)** | CC-BY / Depósito |
| **Via Dourada (Gold)** | Site do Periódico Comercial | Autor ou Agência via **APC** | **Grátis (Zero)** | CC-BY / Open |
| **Via Diamante** | Site do Periódico Acadêmico | Sociedade Científica / Universidade | **Grátis (Sem APC)**| CC-BY / CC-BY-NC |
| **Via Bronze** | Site da Editora Comercial | A própria editora (Promocional) | **Grátis temporário**| Copyright padrão |`
};
