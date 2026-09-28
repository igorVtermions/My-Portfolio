# Design system

## Fundamentos

`src/styles/tokens.css` é a fonte das cores, tipografia, espaçamentos, camadas, contornos e movimento. O tema Tailwind referencia essas variáveis. Breakpoints: 700 px para celular e 900 px para a composição intermediária. Margens: 24 px no celular e 60 px no desktop; contêiner máximo de 1320 px.

Arial/Helvetica para texto e Consolas para índices. Nome com peso 800. Preto, branco, roxo e lilás preservam a referência. Cantos retos, exceto etiquetas de 2 px. `src/lib/motion-tokens.ts` registra a correspondência dos tempos JavaScript em segundos com os tokens CSS em milissegundos.

## Catálogo local

Este documento é o catálogo interno; não há rota pública de guia visual.

| Componente       | Props principais e exemplo                       | Estados e restrições                                                                             |
| ---------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| Container        | `<Container>{children}</Container>`              | Margens e largura comuns. Não adiciona landmark.                                                 |
| Section          | `id`, `className`, `children`                    | Relacionar o título a `id + '-title'`. Foco programático para hashes.                            |
| SectionHeading   | `title`, `eyebrow`, `description`, `level`, `id` | Nível explícito de 1 a 3, padrão 2.                                                              |
| Button           | `variant`, atributos HTML de botão               | Ações; primary e secondary. Hover, foco, pressionado e disabled.                                 |
| ActionLink       | `href`, `variant`, `icon`, `children`            | Navegação; link interno Next.js; externo com noopener/noreferrer. Hover e foco equivalentes.     |
| Icon             | `name` tipado                                    | SVG decorativo oculto para leitores de tela; nome acessível no controle pai.                     |
| Tag / Tags       | `children` / `items`                             | Etiquetas de conteúdo sem foco e sem ação.                                                       |
| Portrait         | `priority`                                       | Retrato real com dimensões, sizes, texto alternativo e legenda.                                  |
| ProjectCard      | `project`, `featured`                            | Destaque dividido ou caso na lista; links sem controles aninhados.                               |
| ProjectRow       | `project`, `number`                              | Linha inteira é um único link.                                                                   |
| RepositoryIndex  | `items` opcional                                 | Linhas de código público, metadados empilhados no celular.                                       |
| StackGroup       | `group`, `index`                                 | Oito categorias visíveis; notas de formação e IA preservadas.                                    |
| DirectContact    | Sem props                                        | Consome perfil central; usar dentro da seção de contato.                                         |
| ContactMethods   | Sem props                                        | GitHub e LinkedIn do perfil central.                                                             |
| CopyEmail        | Sem props                                        | Ação com feedback de sucesso ou falha em status; endereço permanece selecionável.                |
| MobileNavigation | Sem props                                        | Radix modal; abrir, fechar, Escape, backdrop, foco contido, restauração e mudança de breakpoint. |
| ProjectFilter    | Sem props                                        | Todos, Autoral, Profissional; aria-pressed e contagem anunciada. Saídas tornam-se inert.         |
| Reveal           | `children`, `className`, `delay`                 | Movimento uma vez na viewport. HTML legível antes da hidratação, sem blur.                       |

## Exemplos e revisão de estados

Home: primary e secondary na abertura; textos extensos no Sobre mim; oito grupos e etiquetas em Minha stack; destaque e linhas em Projetos; links externos em Repositórios.

Projetos: clique Todos, Autoral e Profissional e confirme 3, 1 e 2 casos. O foco permanece no filtro. Nenhuma tela de loading é simulada para dados locais.

Contato: copie o endereço e verifique o check e o status. Negue a API de clipboard para confirmar a mensagem de falha. O teste automatizado cobre ambos os cenários.

Celular: abra o menu, percorra com Tab e Shift+Tab, feche por botão, Escape ou backdrop. Navegue para Sobre mim e Minha stack a partir de Contato. Redimensione para desktop com o menu aberto.

Movimento reduzido: habilite a preferência do sistema e confirme nome estático, sem animações CSS, revelações sem deslocamento e filtros imediatos. O movimento não é necessário para acessar conteúdo.

Não há loading, erro ou estado desabilitado fictícios para links de navegação. Novos estados devem responder a uma necessidade real.
