# Portfólio de Igor Franco

## Especificação obrigatória de produto, design e desenvolvimento

Versão 1.0 · 28/09/2026 · Idioma: português brasileiro.

Este documento fica na raiz do projeto, fora das pastas de design. É a referência normativa para transformar a proposta aprovada em um portfólio desenvolvido com Next.js. Deve ser lido integralmente antes de implementar ou alterar a interface.

As decisões de identidade, conteúdo, hierarquia, ordem de seções e organização dos contatos devem ser seguidas à risca. Somente uma solicitação explícita posterior de Igor pode substituí-las. Ajustes técnicos necessários para responsividade, acessibilidade e desempenho são permitidos quando preservam a intenção e devem ser registrados. Não interpretar liberdade técnica como autorização para redesenhar o produto.

Este arquivo especifica a implementação futura. Ele não declara que o aplicativo Next.js, as animações ou os testes de produção já foram implementados.

## 1. Hierarquia das referências

1. Pedido explícito mais recente de Igor.
2. Este documento, incluindo as decisões consolidadas abaixo.
3. A versão atual de `outputs/design.html`, para composição e aparência.
4. `outputs/design.md`, como material complementar.
5. Documentação oficial das ferramentas, para funcionamento técnico.

Documentação técnica e exemplos de componentes não podem substituir decisões de produto. A referência visual é o HTML atual, não as imagens de inspiração iniciais nem as primeiras versões verdes e acobreadas.

Os controles Desktop/Celular, seletor de telas e moldura externa da prévia são ferramentas de revisão. Não devem aparecer no site público. Não portar o iframe ou os manipuladores `parent.show` para produção. Implementar páginas e links reais.

## 2. Ideia e objetivo do projeto

Criar um portfólio pessoal para apresentar Igor Franco, sua trajetória, suas competências e seus trabalhos. A experiência deve permitir que um recrutador, potencial cliente ou outro desenvolvedor entenda quem é Igor, onde atua e como entrar em contato.

O portfólio deve combinar presença pessoal e evidência concreta. Nome e fotografia representam a pessoa; casos mostram contexto e participação; repositórios permitem conhecer o código público. A narrativa central é desenvolvimento Full Stack com foco em mobile, conectando aplicativo, web e back-end.

Resultados esperados da experiência:

- Entender o foco profissional logo na primeira dobra.
- Conhecer Igor na própria home, sem precisar abrir outra página.
- Encontrar todas as tecnologias e práticas do currículo em uma seção dedicada.
- Explorar trabalhos com contexto, contribuição e estado atual.
- Acessar os repositórios públicos indicados.
- Entrar em contato por e-mail, telefone, WhatsApp ou LinkedIn.

Não adicionar login, dashboard, pagamento, CMS, newsletter, blog, chatbot do portfólio ou formulário sem pedido posterior. A autorização para usar bibliotecas e animações não amplia automaticamente o escopo funcional.

## 3. Decisões que não podem ser alteradas por iniciativa da implementação

- Usar Next.js com App Router e TypeScript.
- Preservar preto, branco, roxo e lilás como identidade.
- Manter a foto real de Igor, sem substituir por avatar ou retrato gerado.
- Preservar a abertura com o nome grande “IGOR FRANCO.”.
- Manter Sobre mim e Minha stack na home, antes dos projetos.
- Colocar contato direto dentro da seção Contatos, nunca como seção independente abaixo dela.
- Exibir a stack completa, sem reduzir a lista apenas às tecnologias favoritas.
- Preservar o menu mobile com painel modal, fechamento explícito e atalhos de seção.
- Não usar travessões nos textos da interface ou da documentação. Usar pontos, vírgulas, dois-pontos, ponto médio ou a palavra “a” em intervalos. Hífens de URLs e nomes técnicos continuam válidos.
- Não inventar números, clientes, resultados, avaliações, disponibilidade ou eventos biográficos.
- Não misturar repositórios privados ao conteúdo público.
- Manter a identificação das imagens conceituais até que sejam substituídas por capturas reais.
- Implementar animações com propósito, preservando a hierarquia e os estados finais do design.

## 4. Fontes e dados oficiais do conteúdo

### 4.1 Identificação e contatos

| Campo | Valor |
|---|---|
| Nome de apresentação | Igor Franco |
| Nome completo | Igor Vinicius Pimentel Franco |
| Atuação | Desenvolvedor Full Stack com foco em mobile |
| E-mail | igorviniciusf10@gmail.com |
| Telefone exibido | (21) 97488-5166 |
| Link de ligação | `tel:+5521974885166` |
| WhatsApp | `https://wa.me/5521974885166` |
| GitHub | `https://github.com/igorVtermions` |
| LinkedIn | `https://www.linkedin.com/in/igor-vinicius-574657232` |

Não enviar mensagens automaticamente. O WhatsApp apenas abre a conversa. E-mail abre o cliente configurado do visitante. Não prometer prazo de resposta.

### 4.2 Trajetória

- Desenvolvimento web freelance desde 2023.
- Tecnólogo em Análise e Desenvolvimento de Sistemas, Universidade Unopar, concluído em 2023.
- Thux/Mathux: Desenvolvedor Full Stack, junho de 2025 a agosto de 2026.
- Mágicos da Limpeza: Desenvolvedor Full Stack Freelance, janeiro de 2026 até atual, conforme o currículo.
- Escoply: produto autoral em construção e testes com usuários convidados.
- Formação complementar: StarSe Executive Education, Vai Na Web e Alura.

O perfil GitHub consultado em 28/09/2026 ainda descreve a Thux como trabalho atual, enquanto o currículo informa término em agosto de 2026. Manter o período do currículo até nova correção de Igor. Não calcular automaticamente um total de anos para exibição.

### 4.3 Materiais locais

| Material | Localização |
|---|---|
| Design navegável aprovado | `outputs/design.html` |
| Documentação complementar | `outputs/design.md` |
| Vetores | `outputs/icons/` |
| Currículo original | `D:/curriculos/Full stack/Igor_Franco_Full_Stack.pdf` |
| Foto original | `C:/Users/igor_/Downloads/WhatsApp Image 2026-07-14 at 15.06.07.jpeg` |

Na implementação, copiar o retrato para os assets do projeto com nome estável. Não depender de um caminho de Downloads em produção. O HTML atual contém a foto incorporada e pode servir como recuperação do asset se necessário. Não publicar o currículo automaticamente apenas porque foi usado como fonte; o botão de download não faz parte do escopo ativo.

As referências iniciais de imagens serviram para inspiração. Elas não definem a paleta ou a composição atual.

## 5. Arquitetura de informação

### 5.1 Rotas

| Rota | Conteúdo |
|---|---|
| `/` | Home completa |
| `/projetos` | Lista e filtros de casos |
| `/projetos/escoply` | Caso autoral |
| `/projetos/magicos-da-limpeza` | Caso profissional |
| `/experiencia/thux-mathux` | Atuação na empresa |
| `/sobre` | História e formação detalhadas |
| `/contato` | Canais de contato |

O guia visual é interno, fora do menu público. Durante desenvolvimento, pode existir como rota restrita ao ambiente de desenvolvimento ou como documentação de componentes. Não publicar uma rota administrativa desprotegida para esse fim.

Slugs desconhecidos devem retornar uma página 404 real, com retorno à home. Não redirecionar qualquer projeto inválido para o Escoply.

### 5.2 Ordem imutável da home

1. Cabeçalho.
2. Apresentação pessoal com foto e nome.
3. Faixa breve de tecnologias, complementar à stack completa.
4. Sobre mim, com `id="sobre"`.
5. Minha stack, com `id="stack"`.
6. Projetos selecionados, com `id="projetos"`.
7. Repositórios públicos.
8. Contatos, com `id="contatos"`, incluindo telefone e WhatsApp dentro dela.
9. Rodapé.

Essa ordem deve ser igual no DOM, visualmente e para leitores de tela, em desktop e mobile. Não usar CSS `order` para produzir uma leitura diferente da estrutura.

## 6. Design detalhado da home

### 6.1 Cabeçalho

Assinatura pequena “igor franco /” à esquerda. Navegação discreta à direita. Destinos desktop: Sobre mim, Stack, Projetos, Minha história e Contato.

Sobre mim aponta para `/#sobre`; Stack para `/#stack`; Projetos para `/projetos`; Minha história para `/sobre`; Contato para `/contato`. Usar links semânticos, não botões que simulam navegação. A marca leva à home.

O cabeçalho não precisa ficar fixo: manter o comportamento da referência. Não acrescentar uma barra flutuante ou transformar a navegação em um dock.

### 6.2 Abertura

Desktop: texto à esquerda, fotografia à direita. A proporção aproximada é 1,32:1. O nome ocupa duas linhas, com IGOR em branco e FRANCO em lilás. O ponto final roxo integra a assinatura.

Textos de referência:

> Meu foco é mobile. Meu trabalho conecta o produto inteiro.

> React Native no aplicativo. React na web. Node.js no back-end. Sou desenvolvedor Full Stack e gosto de acompanhar o que construo até a entrega.

Ações: “Explorar projetos” para `/projetos` e “Quem está por trás” para `/sobre`. Manter o nome real como H1 textual, não uma imagem inacessível. No mobile, apresentação e ações precedem o retrato.

A fotografia deve ter moldura retangular, detalhe roxo deslocado e legenda lilás. Monograma IF na margem inferior, sem cobrir o rosto. Preservar proporção e cores naturais. Sem tratamento que altere traços faciais.

Faixa de tecnologias: React Native, TypeScript, React/Next.js e Node.js. Não transformar em carrossel ou marquee que esconda itens.

### 6.3 Sobre mim

Título: “Sou Igor. Gosto de entender o projeto por inteiro.”

Desktop em duas colunas: título e assinatura à esquerda, narrativa à direita. No mobile, uma coluna. Texto proposto:

> Meu foco é desenvolvimento mobile com React Native, mas meu trabalho também passa pela web, pelas APIs e pelos dados que conectam tudo.

> Atuo como freelancer desde 2023, ano em que concluí Análise e Desenvolvimento de Sistemas na Unopar. Na Thux/Mathux, participei de produtos web e mobile e assumi responsabilidade direta por entregas do time mobile, do desenvolvimento ao lançamento.

> Na Mágicos da Limpeza, colaboro na construção de aplicações para uma empresa em Portugal. Também desenvolvo o Escoply, meu SaaS para organizar a rotina de freelancers, atualmente em construção e testes com usuários convidados.

Ação “Minha trajetória completa” leva a `/sobre`. Não substituir esse conteúdo por uma chamada curta que obrigue o visitante a sair da home para conhecer Igor.

### 6.4 Minha stack

Título: “As ferramentas por trás das entregas.” Subtexto: “Do aplicativo à infraestrutura. Minha base de trabalho e estudo.”

Grade de duas colunas no desktop e uma no mobile. Oito grupos, todos visíveis, sem depender de hover ou abrir acordeões. Categorias numeradas, descrição curta e etiquetas de tecnologia.

| Grupo | Itens obrigatórios |
|---|---|
| 01 · Mobile | React Native, Expo |
| 02 · Front-end | React, Next.js, HTML, CSS, SCSS, Tailwind CSS |
| 03 · Back-end | Node.js, NestJS, Express.js, Fastify, Spring Boot |
| 04 · Dados | Supabase, PostgreSQL, MySQL, MongoDB, NoSQL |
| 05 · Linguagens | JavaScript, TypeScript, Java |
| 06 · Ferramentas e infraestrutura | Git, GitHub, AWS, CI/CD |
| 07 · Qualidade e métodos | Testes unitários, testes E2E, Clean Code, Scrum, Kanban |
| 08 · Inteligência artificial | APIs de IA, Engenharia de prompts, LLM, RAG |

MongoDB consta na formação complementar. NoSQL é uma categoria. O chatbot com LLM e conceitos de RAG está em desenvolvimento no Escoply. Preservar essas distinções. A stack profissional de Igor não significa que todas essas ferramentas devem ser instaladas no portfólio.

Etiquetas são conteúdo, não controles. Não lhes dar `tabindex`, aparência de botão clicável ou filtros fictícios. Não exibir porcentagens, estrelas de proficiência ou “especialista” sem fonte.

### 6.5 Projetos selecionados

Escoply é o destaque, com texto e composição em colunas, status “Em construção”, etiquetas Web + mobile e link do caso. No mobile, texto antes da composição.

Mágicos da Limpeza e Thux/Mathux aparecem depois em linhas numeradas com descrição breve e seta. Manter alvos clicáveis claros. Não duplicar links aninhados dentro de um card inteiramente clicável.

Não transformar toda a seção em uma grade de cards idênticos. O destaque do Escoply faz parte da hierarquia.

### 6.6 Repositórios públicos

Links obrigatórios:

- `https://github.com/igorVtermions/escoply-web`: frente web, TypeScript.
- `https://github.com/igorVtermions/escoply-mobile`: frente mobile, TypeScript.
- `https://github.com/igorVtermions/Master-Manager`: repositório fixado no perfil, JavaScript.

Título: “Por dentro dos projetos.” Linhas com nome, contexto, linguagem e seta externa. No mobile, metadados abaixo do nome.

Não atribuir funcionalidades ao Master-Manager: o README consultado é inicial de React/Vite. Não usar contagem de contribuições como métrica de qualidade ou resultado. Não consultar GitHub no cliente a cada visita para montar essa lista; os dados podem ser estáticos e revisáveis.

### 6.7 Contatos

Título: “Me conta o que você quer construir.” Convite e link para a página completa, seguidos do bloco de telefone/WhatsApp dentro do mesmo elemento `section`.

Texto do bloco: “Prefere conversar pelo WhatsApp? Você também pode me ligar.” Número visível e ações “Conversar no WhatsApp” e “Ligar para Igor”.

Não repetir esse bloco como seção separada depois de Contatos. Rodapé e menu podem continuar oferecendo atalhos de contato.

## 7. Telas internas

### 7.1 Projetos

Título “Projetos com nome e contexto.” Filtros Todos, Autoral e Profissional atuam sobre os três casos. Mostrar contagem coerente: 3, 1 e 2. O índice de código público é separado e não desaparece ao filtrar casos.

O foco permanece no filtro acionado. Informar a quantidade resultante em uma região de status discreta. Estado vazio, se o acervo evoluir: “Nenhum projeto nesta categoria” e ação “Ver todos”. Não simular carregamento para uma lista local.

### 7.2 Escoply

Título “Organizar o trabalho. Abrir espaço para criar.” Papel autoral e status antes da imagem. Seções: contexto, minha contribuição, tecnologia e estado atual.

Produto SaaS web e mobile para clientes, projetos, escopos, orçamentos, aprovações, materiais, prazos e lembretes de freelancers. Arquitetura informada: Next.js, React Native/Expo, TypeScript, Node.js/Fastify e Supabase/PostgreSQL, com Row Level Security.

Descrever testes com convidados e chatbot com LLM/RAG em desenvolvimento. Links de código reais para as duas frentes. Não anunciar lançamento, número de clientes ou recursos de IA concluídos.

### 7.3 Mágicos da Limpeza

Título “Conectar serviços. Conectar as pontas.” Full Stack Freelance, janeiro de 2026 até atual, conforme currículo.

Serviços de limpeza, manutenção e dedetização em Portugal. Participação conjunta desde o início, React na web, React Native no aplicativo, Node.js e Supabase no back-end, integrações, testes e CI/CD. Estado: uso interno pela empresa. Não atribuir o trabalho inteiro exclusivamente a Igor.

### 7.4 Thux/Mathux

Título “Construir. Testar. Colocar no mundo.” Período junho de 2025 a agosto de 2026.

Trata-se de experiência profissional, não de um produto único. Abrange e-commerce, serviços, gestão financeira, relatórios de visitas técnicas, aplicativo para prefeitura, redes sociais com chat e canais de voz, dashboards, CRM, ERP e landing pages.

Responsabilidade direta pela maioria dos projetos lançados pelo time mobile, com desenvolvimento, testes e publicação. React, Next.js, React Native, Node.js, NestJS e AWS. Incluir testes unitários, E2E e CI/CD. Não expor detalhes confidenciais ou inventar nomes dos clientes.

### 7.5 Minha história

Título “Prazer, Igor Franco.” Foto real, introdução, narrativa “Do freelance ao mobile. E ao meu próprio produto.” e linha do tempo com formação/freelance em 2023, Thux/Mathux, Mágicos da Limpeza e Escoply.

Preservar períodos sobrepostos. Não dar data inicial ao Escoply sem informação adicional. Competências e formação complementar aparecem no final. A página amplia o Sobre mim da home.

### 7.6 Contato

Título “Me conta a sua ideia.” Texto: “Um projeto, uma oportunidade ou uma troca sobre desenvolvimento. Pode me chamar.”

E-mail em destaque, botão para escrever e ação para copiar. Mensagens: “Endereço copiado.” ou “Não foi possível copiar. Selecione o endereço acima.” Usar `aria-live="polite"` ou `role="status"`.

Telefone e WhatsApp dentro da seção principal. GitHub e LinkedIn completam o conteúdo. O clipboard pode falhar; o endereço deve permanecer selecionável. Não adicionar formulário ou back-end de mensagens.

## 8. Sistema visual obrigatório

### 8.1 Tokens de cor

| Token | Valor | Uso |
|---|---|---|
| `background` | `#101014` | Fundo principal |
| `foreground` | `#F7F7FA` | Leitura principal |
| `accent-soft` | `#C6ABFF` | Nome, foco, detalhes e ênfase |
| `accent` | `#7541D6` | Botão primário e moldura |
| `muted` | `#B8B6C2` | Texto secundário |
| `border` | `#3C3946` | Separadores |
| `surface` | `#1B1822` | Superfície secundária |
| `stack-surface` | `#17151D` | Grupos de stack |
| `tag-surface` | `#221C2D` | Etiquetas |
| `tag-border` | `#51465F` | Contorno de etiquetas e controles |
| `tag-text` | `#E8DDFF` | Texto de etiquetas |

Composições conceituais podem usar `#E4DCF4` e `#C5C5D2`. Esses valores não representam marcas oficiais dos clientes. Não adicionar tema claro automático ou alternador de tema sem pedido. O visual escuro deve permanecer consistente com as preferências de Igor.

### 8.2 Tipografia

Arial/Helvetica/sans-serif para títulos e corpo. Consolas/monospace para índices. Não substituir por Inter, fonte geométrica da moda ou serifa sem solicitação. Fontes locais licenciadas equivalentes só se houver necessidade comprovada de reprodução e aprovação de mudança visual.

| Elemento | Desktop | Mobile |
|---|---|---|
| Nome da abertura | Até 108 px; peso 800; entrelinha 0,86 | Até 72 px; escala fluida; entrelinha 0,9 |
| Títulos internos | Até 84 px; peso 700 | Geralmente 48 px |
| Título de contato | Até 120 px | Até 60 px |
| Títulos de seção | 30 a 44 px | 26 a 34 px |
| Corpo | 14 a 18 px | 14 a 16 px |
| Introdução Sobre mim | 20 px | 19 px |
| Metadados | 9 a 12 px | 9 a 12 px |

Títulos grandes usam espaçamento negativo moderado. Texto corrido usa entrelinha de aproximadamente 1,6 a 1,8. Metadados pequenos são auxiliares. Não esconder informação essencial neles. Evitar quebra do nome que resulte em ponto final sozinho ou corte lateral.

### 8.3 Grade, espaçamento e bordas

Referência desktop: viewport da prévia com 1200 px, margens internas de 60 px e contêiner máximo de 1320 px. Mobile: 390 px, margens de 24 px. Testar também 320, 360, 768, 1024 e 1440 px.

Quebras orientadoras: mobile até 700 px; composição intermediária de 701 a 900 px; desktop acima de 900 px. Usar breakpoints customizados se necessário; não trocar silenciosamente pelo padrão de uma biblioteca.

Escala de espaços: 8, 12, 16, 24, 32, 40, 48, 64 e 72 px. Separadores de 1 px. Cantos majoritariamente retos; etiquetas podem usar 2 px. Evitar transformar toda superfície em cartões arredondados.

### 8.4 Botões e links

Botão primário: roxo com texto branco. Hover: lilás com texto preto. Altura mínima de 44 px. Secundário: texto e seta, sem bloco pesado. Foco visível de 2 px, com afastamento de 4 a 6 px.

Hover deve ter equivalente de foco quando expressa informação ou interatividade. Em telas touch, o estado padrão precisa ser completo. Não depender do hover para revelar títulos, links ou descrições.

### 8.5 Fotografia e composições

Usar o retrato real em arquivo otimizado, com dimensões e `sizes` adequados. `object-fit: cover`, posição ajustada para preservar o rosto. Não embutir a foto em base64 no aplicativo final.

O nome e a imagem principal não devem aguardar animações longas para aparecer. Reservar a área do retrato para evitar deslocamento de layout. Carregar prioritariamente apenas a imagem realmente crítica da primeira dobra, conforme a API da versão instalada de Next.js.

Composições de projetos continuam identificadas como conceituais. Não apresentá-las como screenshots do software. Capturas autorizadas podem substituí-las sem alterar a hierarquia do caso.

### 8.6 Ícones

Preservar os 12 SVGs de `outputs/icons/`: arrow-up-right, arrow-right, arrow-left, arrow-down, menu, close, mail, copy, check, download, plus e external-link.

Grade 24 × 24, traço 1,6 px, sem preenchimento, pontas arredondadas e `currentColor`. Transformar em componentes SVG tipados se desejado. Menu e close têm uso real; download e plus permanecem reservas. Não criar funcionalidades apenas para utilizar todos os ícones.

GitHub, LinkedIn e WhatsApp podem continuar como textos com seta externa. Não substituir a família aprovada por uma biblioteca inteira. Bibliotecas de ícones só devem complementar uma lacuna real, mantendo a aparência.

## 9. Menu mobile e navegação

Acionador com texto “Menu”, ícone, nome acessível e `aria-expanded`. Painel escuro, fundo externo atenuado, largura de até 440 px limitada à viewport menos 24 px, margem de 12 px e altura máxima `calc(100dvh - 24px)`.

Entradas numeradas: Início, Projetos, Sobre mim, Minha stack, Minha história e Contato. Destinos de seção usam hashes da home. Rodapé do painel contém WhatsApp, telefone e e-mail.

Comportamentos obrigatórios:

- Abrir com clique, Enter ou Espaço no botão.
- Mover foco para Fechar; manter Tab/Shift+Tab dentro do painel.
- Fechar por botão, Escape e clique no backdrop.
- Retornar foco ao acionador quando fechar sem navegar.
- Ao navegar, focar o destino apropriado, sem devolver foco para um botão que foi desmontado.
- Bloquear rolagem do documento sem salto horizontal; manter rolagem interna do painel.
- Não deixar elementos invisíveis interativos durante a saída animada.
- Fechar ao passar para o breakpoint desktop.
- Respeitar safe areas e teclado virtual; não cortar os contatos em telas baixas.

A prévia usa `dialog` nativo. A implementação Next.js pode usar Radix Dialog, preservando a aparência. Radix fornece uma base para gerenciamento de foco e teclado, mas a integração animada precisa ser testada. Referência: [Radix Dialog](https://www.radix-ui.com/primitives/docs/components/dialog).

## 10. Stack técnica do portfólio

### 10.1 Base prevista

| Tecnologia | Decisão e responsabilidade |
|---|---|
| Next.js + React | Obrigatórios; App Router e rotas reais |
| TypeScript | Obrigatório; conteúdo e componentes tipados |
| Tailwind CSS | Estilos e tokens; preservar valores do design |
| Motion for React, pacote `motion` | Motor principal das animações |
| Radix Dialog | Base acessível do painel mobile |
| CSS nativo | Hover, foco, cores e estados simples |
| Playwright | Verificação de fluxos, responsividade e teclado |

Escolher versões estáveis compatíveis no início da implementação e registrar versões exatas no lockfile. Não usar instruções antigas de instalação sem conferir a documentação da versão. Não instalar simultaneamente `motion` e `framer-motion` para executar os mesmos efeitos. A importação adotada é `motion/react`, conferida na documentação da versão instalada.

### 10.2 Bibliotecas e componentes externos autorizados

Igor autorizou usar bibliotecas conhecidas e componentes animados da internet. Essa autorização permite adotar mecanismos e adaptar código ao design, sem importar o visual completo de um template.

| Recurso | Aplicação prevista | Condição |
|---|---|---|
| Motion | Revelações, menu, filtros, pequenos gestos e feedback | Base principal |
| Magic UI Blur Fade | Referência para um componente de revelação reutilizável | Adaptar para sem blur no texto, sem alterar tokens |
| GSAP + `@gsap/react` + ScrollTrigger | Alternativa para uma sequência complexa da linha do tempo | Usar apenas se a sequência justificar outro motor; não duplicar Motion no mesmo nó |
| Radix Primitives | Comportamento acessível do menu | Estilizar integralmente com o sistema próprio |

Não instalar todas as bibliotecas disponíveis. Usar todas as dependências necessárias aos efeitos selecionados, evitando motores redundantes. GSAP é uma opção autorizada para necessidade específica, não uma dependência obrigatória para uma linha do tempo simples.

Antes de copiar um componente, verificar origem, licença, atribuição, dependências e APIs. Registrar em `docs/third-party-components.md` o nome, URL, versão ou revisão, licença e adaptações. Não incluir assets pagos sem licença. Não rodar scripts arbitrários encontrados em exemplos.

Referências: [Motion useScroll](https://motion.dev/docs/react-use-scroll), [Magic UI Blur Fade](https://magicui.design/docs/components/blur-fade), [GSAP em React](https://gsap.com/resources/React/) e [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/).

## 11. Direção de animação

A implementação deve ter movimento perceptível e bem acabado. As animações complementam a identidade existente. Seus valores finais devem reproduzir o design estático, sem reorganizar conteúdo, atrasar contato ou transformar leitura em apresentação obrigatória.

Todos os parâmetros a seguir são decisões propostas para este projeto, não valores prescritos pelas bibliotecas.

### 11.1 Tokens de movimento

| Token | Valor de referência | Uso |
|---|---|---|
| `motion-fast` | 140 a 180 ms | Hover, seta e feedback simples |
| `motion-base` | 240 a 320 ms | Filtros e painel |
| `motion-reveal` | 400 a 500 ms | Entrada de seção |
| `motion-hero` | Até 600 ms | Composição inicial completa |
| `motion-stagger` | 40 a 60 ms | Sequência curta de grupos |
| `ease-out` | `[0.22, 1, 0.36, 1]` | Entrada suave |
| `distance-small` | 6 a 8 px | Mobile e microinterações |
| `distance-base` | 12 a 16 px | Entrada desktop |

Não usar atraso acumulado acima de 300 ms para alcançar um elemento importante. Limitar stagger por grupo visível, não pelo índice absoluto de uma lista longa. Entradas ocorrem uma vez por montagem/visita; não repetir a cada pequena oscilação de scroll.

### 11.2 Mapa de inserção das animações

| Local | Gatilho e efeito | Parâmetros | Mobile e movimento reduzido |
|---|---|---|---|
| Cabeçalho | Sublinhado de link e cor da marca no hover/foco | 160 ms, sem deslocar layout | Mesmo foco; sem depender de hover |
| Nome da abertura | Assentamento curto da composição, mantendo texto legível desde o início | Até 8 px, 450 ms; sem soletrar letras | Até 4 px; estático com redução |
| Foto e moldura | Moldura entra em relação à foto estática | 12 px para 0, 500 ms | 6 px; estática com redução |
| Botões | Cor e seta deslocada no hover/foco; pequena resposta ao pressionar | Seta até 3 px, 160 ms; escala mínima 0,98 | Feedback de toque; sem escala com redução |
| Sobre mim | Título e texto aparecem em sequência curta ao entrar na viewport | 12 px, 420 ms, intervalo 60 ms | 6 px; conteúdo imediatamente visível com redução |
| Grupos de stack | Revelação por linha de grupos, uma vez | 12 px, 400 ms, intervalo 45 ms | Um grupo por vez, 6 px; sem stagger com redução |
| Etiquetas de stack | Ajuste sutil de cor da borda ao hover, sem movimento | 160 ms | Estáticas no touch; não se tornam botões |
| Escoply destacado | Entrada do bloco e enquadramento conceitual | 12 px, 450 ms; hover da imagem até escala 1,015 | Sem zoom hover; estático com redução |
| Linhas profissionais | Seta e realce de fundo no hover/foco | 3 px, 160 ms | Estado de toque e foco |
| Filtros | Saída curta e reorganização dos itens restantes | Saída 120 ms, layout 240 ms | Sem transform com redução, atualização imediata |
| Repositórios | Seta externa e sublinhado do nome | 160 ms | Sem deslocamento com redução |
| Linha do tempo | Marco realça ao entrar na viewport | Opacidade e cor, 300 ms | Sem pinning nem scroll obrigatório |
| Contatos | Entrada discreta da área completa | 8 px, 350 ms | Sem atraso nos links; estático com redução |
| Copiar e-mail | Troca entre copiar e check acompanhada de texto de status | 140 ms, estado por cerca de 2 s | Mensagem permanece acessível; sem movimento necessário |
| Menu mobile | Backdrop aparece; painel desliza a partir da direita | Backdrop 180 ms, painel 280 ms; saída 180 ms | Com redução, abertura imediata ou fade de até 100 ms |
| Itens do menu | Sequência curta ao abrir, nunca obrigatória para clicar | 30 ms entre itens, limite 150 ms | Sem stagger com redução |
| Entrada de rota | Revelação leve do conteúdo secundário após navegação | 180 a 240 ms, sem tela de espera | Sem transição com redução |

### 11.3 Implementação das animações

Criar wrappers pequenos como `Reveal`, `StaggerGroup`, `AnimatedArrow`, `ProjectFilterMotion` e `MobileNavigation`. Evitar transformar a página inteira em Client Component.

Usar `whileInView`/IntersectionObserver para elementos abaixo da dobra. Usar `AnimatePresence` para estados locais realmente desmontados. Não assumir que animações de saída entre rotas funcionarão automaticamente no App Router. A navegação não deve aguardar uma saída; entrada simples é suficiente.

Para reorganização de filtros, preferir layout por transform e chaves estáveis. Não animar `height: auto` de toda a página. Se usar LazyMotion, selecionar o pacote de recursos que inclui os efeitos usados; não presumir que o conjunto mínimo cobre layout. Referência: [LazyMotion](https://motion.dev/docs/react-lazy-motion).

Um componente inspirado em Blur Fade deve ser adaptado para legibilidade: sem blur sobre parágrafos, sem atraso longo e sem conteúdo permanentemente oculto. Não copiar estilos de demo. O HTML servido deve manter leitura e links disponíveis quando JavaScript falhar.

Se GSAP for adotado, isolar o trecho, carregar apenas onde necessário, usar escopo local e cleanup com `useGSAP`. Não criar dois observadores/motores controlando a mesma transformação. Sem pinning da stack ou da história, sem sequestrar scroll.

### 11.4 Movimento reduzido

Usar `MotionConfig reducedMotion="user"` e `useReducedMotion` para casos que precisam de lógica própria. A configuração automática não substitui revisar CSS, GSAP ou efeitos de terceiros. Referência: [acessibilidade no Motion](https://motion.dev/docs/react-accessibility).

Com `prefers-reduced-motion: reduce`, retirar deslocamentos, escala, stagger, scroll suave e efeitos de entrada que ocultem conteúdo. Feedback de cor e status pode permanecer instantâneo. Não exigir animação para compreender uma mudança de filtro ou encontrar o menu.

### 11.5 Efeitos fora da direção aprovada

Não inserir partículas, fundos WebGL, holofotes seguindo o mouse, brilho neon, gradientes animados, cursores magnéticos, rolagem horizontal forçada, carrossel automático, letras embaralhadas, typewriter ou contadores de resultados.

A autorização atual permite enriquecer o movimento nos pontos especificados. Não autoriza trocar a identidade por um conjunto de efeitos de biblioteca. Novas experiências visuais que alterem a composição dependem de pedido de Igor.

## 12. Arquitetura de implementação Next.js

Usar Server Components por padrão para conteúdo estático. Reservar Client Components para filtros, menu, clipboard e camadas de movimento. Dados tipados centralizados evitam divergência entre home, detalhe e contatos. Referência: [Server e Client Components](https://nextjs.org/learn/react-foundations/server-and-client-components).

Estrutura orientadora:

```text
src/
  app/
    layout.tsx
    page.tsx
    projetos/page.tsx
    projetos/[slug]/page.tsx
    experiencia/thux-mathux/page.tsx
    sobre/page.tsx
    contato/page.tsx
    not-found.tsx
    globals.css
  components/
    layout/header.tsx
    layout/mobile-navigation.tsx
    layout/footer.tsx
    home/hero.tsx
    home/about-section.tsx
    home/stack-section.tsx
    home/selected-projects.tsx
    home/repository-index.tsx
    contact/contact-section.tsx
    contact/direct-contact.tsx
    contact/copy-email.tsx
    projects/project-case.tsx
    projects/project-filter.tsx
    motion/reveal.tsx
    motion/stagger-group.tsx
    motion/motion-provider.tsx
    ui/icon.tsx
  content/
    profile.ts
    projects.ts
    stack.ts
    repositories.ts
  lib/
    motion-tokens.ts
public/
  images/igor-franco.jpeg
  icons/
docs/
  third-party-components.md
```

Estrutura pode ser ajustada tecnicamente sem alterar o produto. `DirectContact` deve ser filho de `ContactSection` ou da seção principal da página Contato. Não renderizá-lo como irmão posterior na home.

`Project` deve distinguir categoria, papel, período, estado, tecnologias, contexto, contribuição, imagem conceitual e links verificados. Conteúdo compartilhado deve vir do mesmo objeto, sem cópias divergentes em cada página.

Utilizar `next/link` para rotas internas e âncoras com hash para seções. Ao navegar para uma seção de outra rota, respeitar o hash após montagem e mover foco para o título/seção, sem depender de timeout arbitrário. Preservar histórico do navegador e retorno.

Usar `next/image` com dimensões, `sizes` e descrição adequada para o retrato. Imagens secundárias podem ser carregadas sob demanda. Referência: [Image Optimization](https://nextjs.org/docs/app/getting-started/images).

Não incluir segredos, tokens do GitHub, identificadores de sessão ou arquivos privados no bundle. Este portfólio não necessita de autenticação ou banco de dados para seu escopo atual.

## 13. SEO, desempenho e acessibilidade

### 13.1 SEO

Título por rota, descrição coerente com o conteúdo, um H1 principal por página e hierarquia semântica. Definir domínio canônico, sitemap e robots quando o domínio real existir. Não inventar URL de produção.

Open Graph pode usar nome, cargo e composição aprovada. Dados estruturados Person devem conter apenas dados reais e públicos; não inventar empregador atual. Links externos com nova aba usam `rel="noopener noreferrer"`.

### 13.2 Desempenho

Metas de validação, não resultados já medidos: LCP até 2,5 s, INP até 200 ms e CLS até 0,1, quando houver dados de campo suficientes. Em desenvolvimento, usar medições de laboratório como diagnóstico, sem afirmar equivalência a métricas reais de usuários.

Priorizar transform e opacity; evitar blur em grandes áreas, listeners por etiqueta, vídeos de fundo e animações contínuas. Reservar tamanho de imagens. Lazy-load de motores secundários. Fazer limpeza de observers, subscriptions e timelines. Não manter `will-change` em dezenas de elementos permanentemente.

Texto e foto da primeira dobra não podem ficar invisíveis esperando efeito ou carregamento de uma biblioteca. Na falha de JavaScript, o conteúdo principal deve ser legível e os contatos devem funcionar como links normais.

### 13.3 Acessibilidade

Objetivo: WCAG 2.2 AA. Verificar contraste real de combinações, foco, navegação por teclado, nomes acessíveis, zoom de 200% e leitura em 320 px. Separadores discretos não podem ser o único indicador de um controle.

Skip link para conteúdo principal. Menu modal com foco contido e restaurado. Botões apenas para ações; links para navegação. Ícones decorativos ocultos de leitores de tela. Feedback de clipboard e filtro anunciado sem interromper leitura.

Não aplicar `aria-hidden` ao conteúdo principal sem uma estratégia modal correta. Não deixar elementos com foco dentro de uma árvore ocultada. Testar reduced motion em todas as bibliotecas, não apenas no CSS global.

## 14. Critérios de aceite

### Conteúdo e fidelidade

- [ ] Foto, paleta, tipografia e hierarquia reproduzem a proposta atual.
- [ ] Home segue a ordem definida neste arquivo.
- [ ] Sobre mim e stack aparecem antes dos projetos em todas as larguras.
- [ ] Oito grupos de stack completos, com ressalvas de formação e IA.
- [ ] Telefone e WhatsApp estão dentro de Contatos, sem seção independente.
- [ ] Datas e estados dos projetos correspondem às fontes.
- [ ] Composições conceituais estão identificadas.
- [ ] Nenhum travessão em textos visíveis e documentação nova.
- [ ] Não há controles de revisão do protótipo no produto.

### Funcionalidade

- [ ] Todas as rotas abrem por acesso direto e refresh.
- [ ] Todos os hashes funcionam dentro e fora da home.
- [ ] Filtros retornam 3, 1 e 2 casos corretamente.
- [ ] Repositórios abrem os endereços verificados.
- [ ] WhatsApp e ligação usam o número correto sem disparo automático.
- [ ] Clipboard apresenta sucesso ou falha, mantendo e-mail selecionável.
- [ ] Slugs desconhecidos retornam 404.

### Movimento e interação

- [ ] Aplicadas as animações obrigatórias do mapa, com limites indicados.
- [ ] Menu abre, fecha por três meios e gerencia foco corretamente.
- [ ] Foco e cliques não ficam bloqueados por saída animada.
- [ ] Filtro não deixa elementos removidos focáveis.
- [ ] Reduced motion remove deslocamentos e animações desnecessárias.
- [ ] Sem repetição excessiva de entradas ao rolar para cima e para baixo.
- [ ] Sem motores duplicados na mesma propriedade.
- [ ] Foto e texto inicial aparecem sem espera artificial.

### Qualidade técnica

- [ ] Typecheck, lint e build passam.
- [ ] Fluxos principais verificados com Playwright.
- [ ] Inspeção visual em 320, 360, 390, 768, 1024 e 1440 px.
- [ ] Sem overflow horizontal ou nome cortado.
- [ ] Teclado, foco, Escape, zoom e leitor de tela revisados.
- [ ] Sem erros de hidratação, console ou imagens quebradas.
- [ ] Licenças de componentes externos documentadas.
- [ ] Medições de desempenho registradas com ambiente e limitações.

## 15. Sequência recomendada de execução

1. Ler este documento e abrir a referência visual atual.
2. Configurar Next.js, TypeScript, tokens e arquivos de conteúdo.
3. Implementar todas as rotas com aparência estática fiel.
4. Implementar a home na ordem obrigatória e contatos agrupados.
5. Conectar menu, filtros, hashes e clipboard.
6. Aplicar as animações do mapa com Motion e CSS.
7. Adaptar componentes externos pontuais quando agregarem valor.
8. Implementar a experiência reduzida e validar acessibilidade.
9. Revisar responsividade, performance e estados de falha.
10. Comparar capturas com a referência e registrar verificação.

Não trocar o design para facilitar o uso de um componente pronto. Adaptar o componente à identidade. Não entregar apenas uma landing page com o nome e a foto: o escopo inclui home completa, casos, história e contato.

## 16. Registro de decisões futuras

Quando Igor pedir uma alteração, atualizar este documento com data, mudança e área afetada. Remover instruções antigas contraditórias, preservando um resumo do histórico quando útil. A regra é seguir a decisão mais recente de Igor, sem usar esta especificação para bloquear mudanças que ele solicitar.

As animações aqui propostas são a direção da implementação, enquanto o HTML é a referência de composição estática. A autorização atual já permite implementar os efeitos descritos e adaptar bibliotecas, sem nova confirmação para cada microinteração.

## 17. Design system obrigatório

O projeto deve possuir um design system próprio, implementado em código e documentado. Componentes de bibliotecas são bases de comportamento, não a identidade visual do portfólio. Todas as páginas devem consumir o mesmo conjunto de tokens e componentes, sem recriar estilos semelhantes isoladamente.

### 17.1 Camadas do sistema

| Camada | Responsabilidade | Exemplos |
|---|---|---|
| Fundamentos | Valores visuais e regras de comportamento | Cores, tipografia, espaços, movimento, breakpoints |
| Primitivos | Elementos pequenos, reutilizáveis e sem conteúdo de negócio | Button, Icon, Container, Tag, Divider |
| Padrões compostos | Combinações recorrentes com semântica definida | SectionHeading, ActionLink, ContactMethods, RepositoryRow |
| Componentes de domínio | Interface ligada ao conteúdo do portfólio | ProjectCard, StackGroup, ExperienceTimeline |
| Seções | Blocos completos com uma finalidade de leitura | AboutSection, StackSection, ContactSection |
| Páginas | Composição de seções e definição de metadados | Home, lista de projetos, detalhe e contato |

Não criar uma abstração apenas para satisfazer essa classificação. Criar componentes quando houver responsabilidade própria, comportamento relevante ou reutilização real. Uma página não deve implementar internamente todos os componentes que utiliza.

### 17.2 Tokens e fonte única de verdade

Declarar os tokens em um arquivo central, como `src/styles/tokens.css`, e consumi-los no tema do Tailwind e nos componentes. Evitar manter duas tabelas independentes de cores ou espaçamento. Valores definidos na seção 8 continuam obrigatórios.

Organizar tokens em três níveis quando necessário:

1. Primitivos: valores básicos, como roxo, lilás e espaços.
2. Semânticos: finalidade, como fundo, texto secundário, borda e ação principal.
3. De componente: apenas quando um componente realmente exige um contrato próprio, como largura do menu.

Famílias mínimas:

- Cores: background, foreground, accent, accent-soft, muted, border e superfícies.
- Tipografia: famílias, tamanhos, pesos, entrelinhas e espaçamento entre letras.
- Espaçamento: escala definida na seção 8 e espaçamentos de seção.
- Layout: largura máxima, margens de página e breakpoints.
- Bordas: espessuras, raios e contorno de foco.
- Camadas: conteúdo, elementos elevados, backdrop e diálogo.
- Movimento: durações, curvas, distâncias e intervalos de sequência.

Não espalhar valores hexadecimais, durações e `z-index` arbitrários nos arquivos. Exceções como a composição de uma imagem devem ser nomeadas, localizadas e justificadas. Não adicionar uma cor de erro ou sucesso sem definir contraste e uso; mensagens também precisam de texto, não apenas cor.

Tokens de movimento consumidos por JavaScript ficam em `src/lib/motion-tokens.ts`. Evitar duplicar os mesmos parâmetros em cada componente. Valores CSS e JavaScript relacionados devem compartilhar uma fonte ou ter uma correspondência explícita e verificável.

### 17.3 Catálogo mínimo de componentes

| Componente | Contrato e responsabilidade |
|---|---|
| Container | Largura máxima e margens responsivas consistentes |
| Section | Espaçamento de seção, identificador e relação com título |
| SectionHeading | Índice opcional, título e descrição; nível de heading explícito |
| Button | Ação sem navegação; variantes primary e secondary; tamanhos limitados |
| ActionLink | Navegação interna ou externa; semântica de link e seta opcional |
| Icon | Família SVG aprovada; tamanho e nome tipados |
| Tag | Etiqueta informativa não interativa |
| FilterButton | Estado selecionado acessível e mudança de filtro |
| Portrait | Retrato com proporção, enquadramento e texto alternativo |
| ProjectCard / ProjectRow | Apresentações distintas de um mesmo modelo de projeto |
| RepositoryRow | Nome, descrição, linguagem e link externo |
| StackGroup | Categoria, descrição, lista de tecnologias e nota opcional |
| ContactMethods | Canais de contato vindos de dados centralizados |
| DirectContact | Telefone e WhatsApp, sempre dentro da seção de contatos |
| CopyEmail | Clipboard, feedback e tratamento de falha |
| MobileNavigation | Diálogo, navegação, foco e fechamento |
| Reveal / StaggerGroup | Movimento reutilizável com modo reduzido |

O catálogo define responsabilidades, não exige um arquivo para cada elemento HTML. `ContactSection` pode compor `ContactMethods` e `DirectContact`, mas não deve duplicar números ou endereços.

### 17.4 API e variantes

As APIs dos componentes devem ser pequenas e explícitas. Preferir `variant="primary"` a combinações como `isPurple`, `isLarge`, `isRounded` e `isSpecial`. Não criar dezenas de booleanos que permitam estados contraditórios.

- Props de conteúdo devem ter nomes claros, como `title`, `description`, `items` e `href`.
- Variantes precisam corresponder a usos reais do design, não a possibilidades hipotéticas.
- Botões de ação e links devem preservar a semântica, mesmo quando parecem semelhantes.
- Não criar controles interativos aninhados.
- Aceitar atributos de acessibilidade e encaminhar referências quando o comportamento exigir.
- Não fornecer um `as` genérico sem necessidade; usar composição ou alternativas semânticas explícitas.
- `className` pode ajustar composição local, mas não deve ser usado para contornar a identidade do componente em todas as páginas.

### 17.5 Estados e documentação

Documentar para cada componente aplicável: padrão, hover, foco visível, pressionado, selecionado, desabilitado, aberto, fechado, erro e sucesso. Não implementar estados irrelevantes apenas para completar uma tabela. Loading só existe quando há uma operação assíncrona real.

O guia interno deve apresentar exemplos de componentes, variantes e estados, incluindo menu, filtro, clipboard, textos longos e versão reduzida das animações. Pode ser uma rota apenas de desenvolvimento ou um catálogo local; Storybook é opcional, não uma dependência obrigatória.

Cada componente compartilhado deve ter documentação curta contendo finalidade, props principais, exemplo de uso e restrições de acessibilidade. Atualizar o guia quando houver mudança real no contrato. Não manter exemplos que já não funcionam.

### 17.6 Consistência e evolução

Antes de criar um novo componente, procurar um equivalente no catálogo. Antes de adicionar uma variante, conferir se uma composição existente resolve o caso. Se um padrão precisar mudar em várias páginas, alterar a origem compartilhada e revisar todos os usos.

Uma alteração de token tem alcance global. Revisar impacto em contraste, legibilidade, layout e estados antes de aceitá-la. O design system deve consolidar a aparência aprovada, não facilitar mudanças visuais não solicitadas.

## 18. Componentização e tamanho dos arquivos

É obrigatório dividir o projeto por responsabilidade para evitar arquivos gigantes. Não concentrar conteúdo, estilos, lógica, animações e renderização de todas as seções em `page.tsx`.

### 18.1 Limites orientadores

| Tipo de arquivo | Faixa orientadora | Sinal de revisão |
|---|---|---|
| Página ou layout | Geralmente até 120 linhas | Contém lógica de vários recursos ou JSX de seções inteiras |
| Componente | Geralmente até 200 linhas | Mistura responsabilidades, muitos estados ou variantes |
| Hook ou módulo de lógica | Geralmente até 150 linhas | Faz operações não relacionadas ou possui muitos efeitos |
| Arquivo autoral acima de 300 linhas | Exige revisão de responsabilidades | Extrair partes coesas antes de continuar ampliando |

Esses valores não são limites mecânicos. Não reduzir linhas juntando expressões, minificando JSX ou movendo tudo para outro arquivo igualmente grande. Dados estáticos, testes, SVGs complexos e código gerado podem ultrapassá-los, desde que organizados e identificados. Uma exceção coesa pode ser documentada sem pedir autorização para uma refatoração rotineira.

O critério principal é: uma pessoa deve conseguir explicar a responsabilidade do arquivo em uma frase curta. Se a frase exige várias responsabilidades independentes, o arquivo precisa de revisão.

### 18.2 Separação de responsabilidades

- Páginas compõem seções, metadados e obtenção de dados quando necessária.
- Seções organizam conteúdo e layout, delegando interações específicas.
- Componentes de interface implementam contratos visuais e semânticos.
- Hooks extraem lógica reutilizável ou suficientemente complexa, sem virar depósitos de efeitos.
- Arquivos de conteúdo armazenam informações de Igor, projetos, stack e contatos.
- Utilitários são funções pequenas, preferencialmente puras e com finalidade definida.
- Estilos globais contêm tokens, reset e regras realmente globais.
- Variantes e estilos específicos ficam próximos ao componente ou no módulo responsável.
- Configurações de animação ficam centralizadas quando compartilhadas; sequências específicas ficam junto da seção.

Não misturar dados biográficos e números de telefone diretamente em múltiplos componentes. Não manter arrays extensos de conteúdo dentro do JSX. Não criar um `utils.ts` ou `helpers.ts` gigante com funções sem relação.

### 18.3 Fronteiras de dependência

Primitivos não importam seções ou páginas. Componentes de domínio podem importar primitivos e tipos de conteúdo. Seções podem compor componentes de domínio. Páginas compõem seções. Evitar importações circulares e arquivos de exportação global que acoplem toda a aplicação.

Manter Client Components no menor nível necessário. Conteúdo estático e metadados não devem depender de hooks do navegador. Uma camada de animação pode receber conteúdo renderizado no servidor por composição, sem converter indiscriminadamente todos os componentes descendentes em módulos cliente.

Não criar uma pasta enorme com todos os arquivos sem agrupamento, nem uma hierarquia de dez níveis para componentes triviais. Organizar por domínio e responsabilidade, conforme a estrutura da seção 12.

## 19. Clean Code e boas práticas obrigatórias

### 19.1 Nomes e legibilidade

Usar nomes consistentes: componentes e tipos em PascalCase; funções e variáveis em camelCase; hooks com prefixo `use`; arquivos em kebab-case. Código e identificadores podem permanecer em inglês; conteúdo de interface deve ser em português brasileiro.

Preferir nomes de intenção, como `selectedCategory`, `projectRepositoryUrl` e `copyEmail`, a abreviações ambíguas. Funções devem ter uma finalidade clara. Evitar ternários aninhados, condicionais extensas no JSX e comentários que apenas repetem a linha seguinte.

Comentários devem explicar decisões, restrições ou motivos não evidentes. Não manter código comentado, logs de depuração, imports sem uso, componentes abandonados ou TODOs sem contexto. Não compactar código para cumprir metas de tamanho.

### 19.2 TypeScript

Ativar modo estrito. Tipar modelos de conteúdo, props, categorias, estados e contratos de retorno. Usar uniões discriminadas quando distinguirem estados reais ou tipos diferentes de entrada.

Evitar `any`, coerções amplas e `!` para esconder ausência de dados. Tratar valores opcionais explicitamente. Dados externos, se adicionados futuramente, precisam de validação na fronteira apropriada. Não introduzir uma biblioteca de validação apenas para constantes locais já tipadas.

Não duplicar modelos ligeiramente diferentes de um mesmo projeto por página. Usar identificadores estáveis; não usar índice de array como chave em listas filtradas ou reordenadas.

### 19.3 React e estado

Manter estado perto de quem o utiliza. Derivar valores quando possível, em vez de armazenar cópias que podem divergir. Não adicionar um gerenciador global para abrir menu ou filtrar três projetos.

Evitar `useEffect` para calcular valores derivados ou responder a cliques que podem ser tratados diretamente. Efeitos devem sincronizar recursos externos e limpar listeners, observers, timers e timelines. Não usar `setTimeout` arbitrário para corrigir foco, navegação ou hidratação.

Memoização precisa de justificativa, não aplicação automática em toda função. Não otimizar antes de identificar custo relevante. Não mutar props ou dados compartilhados. Extrair componentes definidos dentro de outros componentes quando isso causar remontagens ou esconder uma responsabilidade independente.

### 19.4 Next.js

Respeitar as fronteiras servidor/cliente. Não acessar `window`, `document` ou storage durante renderização no servidor. Não usar valores instáveis para gerar markup diferente entre servidor e cliente.

Não aplicar `suppressHydrationWarning` indiscriminadamente, desativar SSR de toda a aplicação ou converter todas as páginas em Client Components para silenciar erros. Corrigir a origem da divergência.

Usar recursos do framework com finalidade concreta: rotas, metadados, links e otimização de imagens. Não criar endpoints ou Server Actions desnecessários para dados estáticos e links de contato.

### 19.5 CSS e animações

Evitar estilos inline repetidos para valores estáticos, seletores globais que atinjam componentes sem intenção e `!important` como correção de arquitetura. Tokens compartilhados devem substituir números mágicos recorrentes.

Não duplicar blocos inteiros de CSS para corrigir a mesma regra no final do arquivo. Consolidar as regras após ajustes. Preservar breakpoints e contratos do design system.

No código de movimento, separar variante visual, condição de ativação e efeito colateral quando isso melhorar a leitura. Animação não deve controlar regras de negócio. Não animar propriedades conflitantes com dois motores nem recriar timelines a cada render sem necessidade.

### 19.6 Falhas e degradação

Tratar falhas esperadas com mensagens úteis. O clipboard precisa de fallback; imagens precisam de dimensões e texto alternativo; um slug inválido precisa de 404. Não usar `catch` vazio ou apresentar sucesso quando a operação falha.

Não inventar telas de loading para conteúdo local. Não esconder erros de programação atrás de retornos silenciosos. Evitar expor stack traces, caminhos internos ou dados sensíveis na interface pública.

### 19.7 Dependências

Cada dependência deve ter uso real, compatibilidade e manutenção verificadas. Não instalar bibliotecas sobrepostas para o mesmo problema. Não manter dependências copiadas de um template e não utilizadas.

Centralizar versões no gerenciador de pacotes e manter o lockfile. Ao adaptar código externo, compreender o comportamento antes de incorporar. Atribuições e licenças ficam no registro já definido, sem contaminar o fluxo visual do produto.

### 19.8 Testes e revisão

Priorizar testes de comportamento: navegação com hash, filtros, contato, clipboard, abertura/fechamento do menu, restauração de foco, movimento reduzido e ausência de overflow.

Não criar testes que apenas repetem classes CSS ou a implementação interna. Testes unitários são úteis para transformações e regras não triviais; testes de integração e navegador verificam o que o visitante faz. Não estabelecer quantidade arbitrária de testes como indicador de qualidade.

Após uma mudança compartilhada, revisar os consumidores afetados. Rodar typecheck, lint, build e verificações proporcionais. Evitar refatorações de áreas não relacionadas durante um ajuste pontual, salvo necessidade técnica evidente.

## 20. Critérios adicionais de aceite de arquitetura

- [ ] Tokens centralizados e consumidos de forma consistente.
- [ ] Componentes compartilhados com contratos claros e variantes limitadas.
- [ ] Guia interno documenta componentes e estados relevantes.
- [ ] Páginas funcionam como composição, sem arquivos monolíticos.
- [ ] Arquivos autorais grandes revisados e divididos por responsabilidade quando necessário.
- [ ] Dados de perfil, contatos, stack e projetos sem duplicação divergente.
- [ ] Fronteiras entre servidor, cliente, interface e conteúdo preservadas.
- [ ] Sem dependências circulares ou utilitários genéricos gigantes.
- [ ] TypeScript estrito, sem atalhos para mascarar erros.
- [ ] Sem CSS duplicado acumulado, imports mortos ou logs de depuração.
- [ ] Efeitos, listeners e animações com cleanup adequado.
- [ ] Testes cobrem comportamentos importantes e estados de falha reais.
- [ ] Refatorações preservam fielmente o design e a ordem de seções.

Registro desta ampliação: Igor solicitou explicitamente design system, componentização para evitar arquivos gigantes, Clean Code e boas práticas. Essas exigências passam a integrar o contrato obrigatório de desenvolvimento.
