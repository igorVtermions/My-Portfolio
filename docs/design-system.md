# Design system

## Fundamentos

`src/styles/tokens.css` é a fonte das cores, tipografia, espaçamentos, camadas, contornos e movimento. O tema Tailwind referencia essas variáveis. Breakpoints: 700 px para celular e 900 px para a composição intermediária. Margens: 24 px no celular e 60 px no desktop; contêiner máximo de 1320 px.

Arial/Helvetica para texto e Consolas para índices. Nome com peso 800. Preto, branco, roxo e lilás preservam a referência. Cantos retos, exceto etiquetas de 2 px. `src/lib/motion-tokens.ts` registra a correspondência dos tempos JavaScript em segundos com os tokens CSS em milissegundos.

## Catálogo local

Este documento é o catálogo interno; não há rota pública de guia visual.

| Componente           | Props principais e exemplo                       | Estados e restrições                                                                                                                                          |
| -------------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Container            | `<Container>{children}</Container>`              | Margens e largura comuns. Não adiciona landmark.                                                                                                              |
| Section              | `id`, `className`, `children`                    | Relacionar o título a `id + '-title'`. Foco programático para hashes.                                                                                         |
| SectionHeading       | `title`, `eyebrow`, `description`, `level`, `id` | Nível explícito de 1 a 3, padrão 2.                                                                                                                           |
| Button               | `variant`, atributos HTML de botão               | Ações; primary e secondary. Hover, foco, pressionado e disabled.                                                                                              |
| ActionLink           | `href`, `variant`, `icon`, `children`            | Navegação; link interno Next.js; externo com noopener/noreferrer. Hover e foco equivalentes.                                                                  |
| Icon                 | `name` tipado                                    | SVG decorativo oculto para leitores de tela; nome acessível no controle pai.                                                                                  |
| Tag / Tags           | `children` / `items`                             | Etiquetas de conteúdo sem foco e sem ação.                                                                                                                    |
| Portrait             | `priority`                                       | Retrato real com dimensões, sizes, texto alternativo e legenda.                                                                                               |
| ExperienceEntry      | `experience`                                     | Empresa, cargo, período em `time`, contribuições e link específico.                                                                                           |
| ExperienceSection    | Sem props                                        | Duas experiências sempre visíveis e produto autoral separado; preserva `#projetos`.                                                                           |
| AuthorProductFeature | Sem props                                        | Escoply, estado, contribuição e composição conceitual compacta.                                                                                               |
| RepositoryIndex      | `items` opcional                                 | Explorador na home/listagem; links compactos ao receber itens específicos.                                                                                    |
| RepositoryExplorer   | `items`                                          | Tabs verticais com setas/Home/End no desktop; select no celular; painel nomeado e lista linear sem JavaScript.                                                |
| RepositoryPanel      | `repository`                                     | Descrição, tópicos verificados, tecnologias e links; metadados ausentes são omitidos.                                                                         |
| StackExplorer        | `areas`, `applications`                          | Quatro faixas com oito categorias; tecnologias com contexto abrem detalhes e links. Teclado, fechamento com restauração de foco e alternativa sem JavaScript. |
| DirectContact        | Sem props                                        | Consome perfil central; usar dentro da seção de contato.                                                                                                      |
| ContactMethods       | Sem props                                        | GitHub e LinkedIn do perfil central.                                                                                                                          |
| CopyEmail            | `label?` (padrão: Copiar e-mail)                 | Ação com feedback de sucesso ou falha em status; endereço permanece selecionável.                                                                             |
| MobileNavigation     | Sem props                                        | Radix modal; abrir, fechar, Escape, backdrop, foco contido, restauração e mudança de breakpoint.                                                              |
| Reveal               | `children`, `className`, `delay`                 | Movimento uma vez na viewport. HTML legível antes da hidratação, sem blur.                                                                                    |

## Exemplos e revisão de estados

Home: primary e secondary na abertura; textos extensos no Sobre mim; quatro faixas de stack aplicada preservando oito categorias e seus ícones; destaque e linhas em Projetos; links externos em Repositórios.

Stack aplicada: `src/content/stack-applied.ts` organiza as categorias existentes e relaciona tecnologias aos trabalhos cadastrados. Apenas relações documentadas geram botões. As faixas não têm altura fixa; o detalhe se expande com transição de 260 ms, sem deslocamento animado quando há preferência por movimento reduzido. No celular, os grupos se empilham e os itens quebram linha.

Trabalhos e produtos: confirmar Mágicos atual desde janeiro de 2026, Thux de junho de 2025 a agosto de 2026 e Escoply como produto autoral. As contribuições ficam sempre visíveis; não há filtros ou autoplay nessa seção.

Contato: copie o endereço e verifique o check e o status. Negue a API de clipboard para confirmar a mensagem de falha. O teste automatizado cobre ambos os cenários.

Celular: abra o menu, percorra com Tab e Shift+Tab, feche por botão, Escape ou backdrop. Navegue para Sobre mim e Minha stack a partir de Contato. Redimensione para desktop com o menu aberto.

Movimento reduzido: confirmar revelações sem deslocamento e demonstração de contato estática, com opção explícita Ver animação. Por escolha explícita do autor, a faixa de tecnologias e a rolagem acionada por links permanecem animadas. As experiências são conteúdo estável, sem rotação.

Contato interativo: `ContactExperience` conecta `BuildAnimation` ao formulário. Editor com código ilustrativo e prévia com assinatura e monograma existentes. Ciclo automático de 30 segundos, Run funcional e pausa na prévia por hover/foco, fora da viewport, com aba oculta e enquanto o formulário tem foco. O link Entre em contato por outros canais abre `/contato`. Sem JavaScript há prévia e link estáticos. Não há execução de código arbitrário nem envio automático de mensagem.

Não há loading, erro ou estado desabilitado fictícios para links de navegação. Novos estados devem responder a uma necessidade real.

Pagina dedicada `/contato`: `ContactChannels` organiza e-mail e WhatsApp em blocos principais e LinkedIn/GitHub em linhas complementares. `ChannelIcon` usa SVGs do sistema existente. Os estilos de `contact-directory.css` ficam restritos a essa composicao; a home preserva sua animacao e formulario.
