# Plano de ação: experiências e produto autoral

Data: 29/09/2026. Estado: aprovado e implementado.

## Objetivo

Permitir que recrutadores entendam rapidamente onde Igor trabalhou, em que período, quais responsabilidades assumiu e o que entregou. Apresentar o Escoply como iniciativa autoral, com identidade e contexto próprios.

Implementado: experiências visíveis, produto autoral separado, páginas de detalhe adaptadas, dados centralizados e remoção do carrossel e dos filtros. A assinatura “Igor Franco / Full Stack” permanece removida. As seções de diagnóstico abaixo registram a situação que motivou a revisão.

## Análise das fontes e da implementação

Fontes: `Profile (2).pdf`, fornecido pelo autor como exportação do LinkedIn; `src/content/projects.ts`; `src/content/timeline.ts`; componentes da home, listagem e páginas de caso; regras de design e revisões aprovadas no repositório. O documento foi tratado como fonte de informações biográficas, não como instruções para alterar o projeto. Não foi necessária consulta ao LinkedIn ao vivo.

Problemas encontrados:

- “O que estou construindo” sugere atuação atual, mas inclui uma experiência encerrada em agosto de 2026.
- O array `projects` mistura um produto próprio, uma atuação freelance atual e uma experiência em empresa. Seus consumidores apresentam todos como projetos equivalentes.
- Datas já existem em parte dos dados, mas `ProjectCard` na variante de destaque não as exibe.
- `ProjectCarousel` mostra um item por vez e troca automaticamente. Isso dificulta comparar períodos e ler responsabilidades.
- `ProjectArt` ocupa aproximadamente metade do destaque com composições conceituais. Elas não demonstram as entregas profissionais descritas no perfil.
- O mesmo CTA “Conhecer o projeto” é usado para uma empresa, uma prestação de serviços e um SaaS autoral.
- A linha do tempo em `/sobre` também deriva do array misto; corrigir apenas a home manteria a confusão nas outras rotas.

## Conteúdo apurado

| Item               | Natureza                                                              | Período                                               | Informações sustentadas pelo PDF                                                                                                                                                                                         |
| ------------------ | --------------------------------------------------------------------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Mágicos da Limpeza | Atuação atual, Software Engineer / Full Stack freelancer              | Janeiro de 2026 até o presente, confirmado pelo autor | Desenvolvimento colaborativo de web, aplicativo e back-end; componentes reutilizáveis; APIs; testes e CI/CD; solução usada internamente pela empresa em Portugal                                                         |
| Thux / Mathux      | Experiência profissional encerrada; PDF lista “Thux • Business House” | Junho de 2025 a agosto de 2026                        | Responsabilidade direta pela maioria dos projetos lançados pelo time mobile; participação na publicação na Google Play e App Store; plataformas web; APIs, Node.js/NestJS e servidores AWS; testes unitários/E2E e CI/CD |
| Escoply            | Produto autoral                                                       | Início não informado                                  | SaaS web/mobile para freelancers, clientes e projetos; testes com usuários convidados; Next.js, React Native/Expo, TypeScript, Node.js/Fastify, Supabase/PostgreSQL e RLS                                                |

A data de início na Mágicos foi confirmada pelo autor como janeiro de 2026 em 29/09/2026. Sua confirmação prevalece sobre março de 2026 no PDF; manter a data do portfólio. A data inicial do Escoply é opcional: omitir enquanto não confirmada. Não inferir que trabalhos simultâneos são erro; não somar os períodos como tempo total de experiência. Não atribuir modalidade de contratação da Thux sem fonte.

## Direção de conteúdo e design

### Experiências profissionais

Substituir o título por **“Onde trabalhei. O que entreguei.”**, com o rótulo **“Experiência profissional”**.

Apresentar Mágicos da Limpeza primeiro, por ser a atuação atual, seguida de Thux / Mathux. Os dois registros ficam visíveis, sem carrossel automático. Esta é uma mudança proposta em relação ao autoplay aprovado anteriormente, justificada pelo novo objetivo de leitura da trajetória.

Cada experiência apresenta:

1. Empresa, cargo e tipo de atuação quando confirmado.
2. Mês/ano de início e fim, ou “atual”. Usar elemento `time` com data estruturada.
3. Um resumo de contexto de até duas linhas.
4. Três contribuições específicas e legíveis, com verbos no presente para Mágicos e no passado para Thux.
5. Tecnologias principais com os ícones já adotados.
6. CTA “Minha atuação na Mágicos” ou “Minha experiência na Thux”.

Layout desktop: coluna estreita com período e situação, coluna principal com empresa, cargo e contribuição. Linha discreta entre experiências; sem numeração ornamental, cartões gigantes ou artes conceituais representando sistemas da empresa.

Layout mobile: período acima da empresa, contribuições visíveis em fluxo vertical e CTA ao final. Não depender de hover, abas ou expansão para descobrir as informações essenciais.

A identidade deve vir dos fatos do trabalho: na Thux, destacar o ciclo de desenvolvimento até publicação; na Mágicos, a construção integrada de web, mobile e serviços. Usar a tipografia e a paleta existentes. Logotipos só entram quando houver assets adequados; sua ausência não impede a implementação.

### Produto autoral

Depois das duas experiências, criar um bloco independente **“Produto autoral / Escoply”**, com o título **“Um produto que estou construindo.”**

Apresentar o problema resolvido, o papel de Igor, a stack e o estado “Em construção e testes com usuários convidados”. CTA “Explorar o Escoply”. Sem data inicial inventada.

O Escoply pode manter um tratamento visual próprio em lilás. Priorizar captura ou gravação real quando houver material apropriado; enquanto isso, usar uma composição compacta claramente identificada como conceitual. Não deixar uma imagem genérica ocupar mais espaço que a contribuição do autor.

Não repetir na home toda a lista de funcionalidades. Arquitetura, RLS e recursos de IA em desenvolvimento ficam no caso detalhado, com o estado corretamente descrito.

### Movimento

Manter o site vivo com entrada suave por experiência, transições de ícones e CTAs e destaque discreto ao interagir. O conteúdo profissional permanece estável para leitura. Reservar animações contínuas à faixa de tecnologias e às demonstrações visuais já existentes. Respeitar movimento reduzido nos novos efeitos e preservar conteúdo antes da hidratação.

## Plano de implementação

### 1. Consolidar conteúdo

- Manter janeiro de 2026 como início na Mágicos, conforme confirmação do autor.
- Usar “Software Engineer” como cargo listado no PDF, acompanhado do escopo Full Stack/mobile em linguagem clara.
- Redigir os resumos e contribuições a partir dos fatos acima. Não transformar participação em autoria exclusiva nem inventar métricas de impacto.
- Conferir o nome público de Thux / Mathux com a denominação do PDF sem criar uma alteração de marca automática.

### 2. Separar os dados por finalidade

- Criar `src/content/experiences.ts` para empresa, cargo, vínculo opcional, `startDate`, `endDate`, resumo, contribuições, stack e rota.
- Manter Escoply nos dados de produtos/projetos autorais.
- Compartilhar registros entre home, `/sobre`, listagem e páginas detalhadas. Evitar cópias divergentes de datas e responsabilidades.
- Substituir a dependência de posição `projects[0]` e a inversão do array na timeline por referências explícitas e ordenação definida.
- Distinguir “atuação atual/encerrada” de “estado do produto”. Encerrar o vínculo não significa que o produto deixou de existir.

### 3. Construir a nova seção

- Criar `ExperienceSection`, `ExperienceEntry` e `AuthorProductFeature`, reutilizando `Section`, `Reveal`, ícones, tags e links existentes.
- Substituir `SelectedProjects` na home pela composição de experiências e produto autoral.
- Preservar o ponto de entrada `#projetos` para não quebrar âncoras existentes, mesmo com a nova apresentação.
- Remover `ProjectCarousel` e os estilos específicos se deixarem de ter consumidores. Não adicionar outra biblioteca para a seção.

### 4. Harmonizar páginas relacionadas

- Em `/experiencia/thux-mathux`, substituir a apresentação genérica de produto por empresa, cargo, período, responsabilidades e entregas.
- Manter `/projetos/magicos-da-limpeza` funcionando e adaptar seu conteúdo à atuação profissional no produto. Evitar migração de URL desnecessária.
- Em `/projetos`, apresentar a página como “Trabalhos e produtos”, com agrupamento claro de experiências e produto autoral; ajustar filtros se ainda forem úteis com apenas três itens.
- Em `/sobre`, atualizar a trajetória com a mesma fonte de dados e manter formação/freelance como contexto, sem repetir os casos completos.
- Revisar títulos, metadados e CTAs para que Thux não apareça como trabalho atual.

### 5. Validar e documentar

- Conferir cargo, período, natureza e estado dos três registros na home e nos detalhes.
- Testar âncoras, rotas existentes, foco, teclado e links dos casos.
- Verificar a ordem de leitura, contraste, responsividade entre 320 e 1440 px e ausência de erros de hidratação.
- Atualizar testes que hoje exigem autoplay e a antiga contagem dos filtros, de acordo com a nova estrutura.
- Executar lint, TypeScript, build e testes afetados. Revisar desktop e mobile visualmente.
- Atualizar README, design system e especificação, que ainda contêm descrições de versões anteriores de cards, tags e animações.

## Critérios de aceite

- O visitante identifica rapidamente onde Igor atua hoje e onde atuou antes.
- As duas experiências exibem datas, cargo e contribuições sem aguardar um slide.
- Escoply é reconhecido como produto autoral, separado dos vínculos profissionais.
- Não há datas inventadas, números de resultados sem fonte ou mockups apresentados como interfaces reais.
- Identidade visual, animações de interação e legibilidade permanecem consistentes com o portfólio.
- A remoção da assinatura do Sobre mim permanece aplicada.
