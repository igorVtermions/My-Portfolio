# Plano de evolução visual e animações

Status: proposta de implementação. A interface ainda não foi alterada nesta etapa.

## Objetivo

Dar presença perceptível ao movimento em todas as rotas, melhorar a resposta dos controles, tornar a faixa de tecnologias animada, padronizar as divisões de conteúdo e retirar a numeração decorativa excessiva. Manter a identidade pessoal, o conteúdo e a organização dos contatos.

O pedido mais recente de Igor substitui as restrições anteriores sobre numeração e faixa estática. No início da implementação, atualizar as seções correspondentes da especificação, incluindo o mapa de movimento. Isso já decorre do pedido, sem necessidade de nova autorização para cada ajuste.

## Diagnóstico do código atual

| Área                 | Evidência                                                                     | Consequência                                                                     |
| -------------------- | ----------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| Revelações           | `Reveal` usa 6 px, opacidade de 0,75 a 1 e 450 ms                             | Entrada discreta demais; o mesmo comportamento é aplicado a elementos diferentes |
| Botões               | Cor, seta de 3 px e escala de 0,98 ao pressionar                              | Pouca presença; a escala não tem transição própria configurada                   |
| Faixa de tecnologias | `Hero` renderiza uma lista flex sem controlador de movimento                  | Parece uma faixa animável, mas não há carrossel implementado                     |
| Separadores          | Bordas em `.home-about`, `.home-contacts`, `.stack-grid` e linhas individuais | Hierarquia de divisões inconsistente; `Section` não controla esse padrão         |
| Numeração            | Prefixos em seções, stack, menu, cards, linhas e casos                        | Informação ornamental repetida, competindo com títulos e conteúdo                |
| Filtros              | Layout animado e saída com opacity, mas entrada sem uma sequência própria     | Mudança funcional com pouca continuidade visual                                  |
| Menu                 | Entrada CSS, sem saída animada nem sequência nos links                        | Movimento concentrado em um único momento                                        |
| História e casos     | Uso do mesmo Reveal de outras áreas                                           | Falta de variação visual apropriada ao conteúdo                                  |

Esta análise parte da implementação e das capturas existentes. Na execução, registrar vídeo da versão inicial com movimento normal para comparar o comportamento real, além das imagens estáticas.

## Direção proposta

Movimento distribuído em três camadas: entrada das composições, resposta às interações e acompanhamento da rolagem. A faixa de tecnologias terá movimento contínuo controlável. As seções devem ter comportamentos próprios, com uma linguagem comum de duração e aceleração.

O objetivo visual é uma navegação mais expressiva e responsiva. Foto, nome e ações precisam continuar disponíveis imediatamente; animações de leitura não devem obrigar o visitante a esperar para acessar conteúdo.

## Etapa 1: limpeza visual e divisões

- Remover números decorativos da abertura, títulos de seção, oito grupos de stack, destaque do Escoply, linhas profissionais, menu e títulos dos casos.
- Retirar também os prefixos numéricos da composição conceitual do Escoply, mantendo os nomes das etapas.
- Preservar datas, telefone, contagens dos filtros e código 404, pois comunicam informação real.
- Reequilibrar espaçamento e alinhamento após a remoção, eliminando colunas vazias e props como `ProjectRow.number`.
- Dar a `Section` um contrato explícito de separação: `separator="line" | "none"`.
- Aplicar uma linha superior comum em Sobre mim, Minha stack, Projetos, Repositórios e Contatos. A faixa inicial conserva sua moldura e o rodapé mantém seu fechamento.
- Padronizar cor, espessura, largura e distância entre linha e título. Usar bordas internas de cards e listas apenas para suas divisões internas.
- Evitar duas linhas coincidentes ao compor uma seção com a grade ou outra superfície já delimitada.
- Animar a entrada das linhas uma vez, por `scaleX`, com o estado final sempre completo.

Arquivos principais: `ui/primitives.tsx`, seções de `home`, `project-card.tsx`, `project-case.tsx`, `project-art.tsx`, `mobile-navigation.tsx` e estilos correspondentes.

## Etapa 2: sistema de movimento compartilhado

- Expandir tokens para resposta de toque, hover, entrada, stagger e movimento vinculado à rolagem.
- Evoluir `Reveal` com poucas variantes de uso real: conteúdo, título e composição visual.
- Criar `StaggerGroup` para sequenciar grupos sem espalhar delays pelo JSX.
- Compartilhar animação de seta e comportamento entre `Button` e `ActionLink`, preservando a semântica de cada um.
- Adicionar `AnimatedDivider` e isolar a faixa em `TechnologyMarquee`.
- Manter conteúdos em Server Components e limitar componentes cliente aos comportamentos necessários.
- Validar hidratação, acesso com JavaScript desativado e preferência de movimento reduzido desde esta etapa.

Valores iniciais para prototipar, sujeitos à revisão em navegador: interações de 160 a 240 ms; entradas de 450 a 650 ms; deslocamento de 16 a 24 px no desktop e 8 a 12 px no celular; stagger de 50 a 70 ms, limitado a 240 ms por grupo. Esses valores são decisões de design propostas, não requisitos de bibliotecas.

## Etapa 3: botões, links e navegação

| Elemento                         | Comportamento proposto                                                                                       |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| Botão primário                   | Preenchimento lilás que avança no hover/foco, seta com deslocamento e retorno suave, pressão curta no clique |
| Link secundário                  | Sublinhado que se desenha, mudança de cor e seta com movimento direcional                                    |
| Navegação desktop                | Indicador de hover/foco animado e estado ativo nas rotas aplicáveis                                          |
| Links de projetos e repositórios | Realce suave da linha, seta e transição de superfície                                                        |
| Filtros                          | Indicador selecionado que desliza e transição de entrada, saída e reorganização dos casos                    |
| Clipboard                        | Troca animada de ícone e feedback textual preservado na região de status                                     |
| Menu mobile                      | Entrada e saída coordenadas do painel e fundo; sequência curta nos links, todos utilizáveis imediatamente    |

No fechamento do menu, gerenciar presença, inert, bloqueio de rolagem e restauração de foco juntos. Não atrasar uma navegação para aguardar a animação de saída. No toque, não depender de hover para demonstrar que houve uma ação.

## Etapa 4: faixa de tecnologias

Confirmado por Igor: o carrossel mencionado é a faixa React Native, TypeScript, React/Next.js e Node.js abaixo da apresentação. O código atual renderiza essa faixa como lista estática.

Para essa faixa, implementar um marquee horizontal em loop contínuo:

- Velocidade linear, inicialmente em torno de 25 a 40 px/s, ajustada pela legibilidade.
- Repetição suficiente para preencher a largura e fechar o ciclo sem salto ou área vazia.
- Controle visível para pausar e retomar, utilizável por teclado e toque.
- Pausa temporária no hover/foco; a pausa manual nunca é desfeita automaticamente.
- Suspensão quando fora da viewport ou quando a aba estiver oculta.
- Cópias visuais ocultas de leitores de tela; uma única lista semântica de tecnologias.
- Com movimento reduzido ou sem JavaScript, exibir os itens em uma faixa estática que permita ler todos.
- Manter a stack completa disponível na seção própria.

A implementação desta etapa se concentra na faixa de tecnologias. A seleção de projetos e a grade completa de stack mantêm suas composições.

## Etapa 5: movimento ao longo das páginas

| Área                    | Entrada                                                                          | Durante a navegação                                                                    |
| ----------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| Apresentação            | Nome, apresentação e ações com sequência curta; moldura com entrada independente | Pequeno deslocamento da moldura ligado à rolagem; rosto e texto mantêm leitura estável |
| Sobre mim               | Título e narrativa entram em sequência                                           | Separador desenha ao alcançar a seção                                                  |
| Minha stack             | Grupos entram por linha no desktop e individualmente no celular                  | Resposta sutil da superfície ao ponteiro; etiquetas continuam sendo conteúdo           |
| Escoply em destaque     | Texto e composição com movimentos complementares                                 | Camadas conceituais acompanham levemente o scroll; hover com enquadramento suave       |
| Trabalhos profissionais | Entrada escalonada das linhas                                                    | Realce de fundo e seta em hover/foco                                                   |
| Repositórios            | Revelação breve por linha                                                        | Sublinhado e seta externa em hover/foco                                                |
| Contatos                | Título, convite e canais com entrada curta                                       | Botões com a mesma linguagem de interação do restante do site                          |
| Minha história          | Introdução e fotografia coordenadas                                              | Linha do tempo com marca ativa e progressão conforme os eventos entram na viewport     |
| Páginas de caso         | Metadados e composição coordenados                                               | Blocos de contexto, contribuição e tecnologia com revelações consistentes              |
| Mudanças de rota        | Entrada breve do conteúdo secundário                                             | Navegação imediata, sem overlay de espera                                              |

Movimento vinculado ao scroll terá amplitude limitada e será aplicado a elementos decorativos ou composições. Reduzir a intensidade no celular e evitar criar overflow. Entradas de leitura ocorrem uma vez por visita; o movimento da faixa e dos elementos vinculados ao scroll dá continuidade à experiência.

## Bibliotecas e referências pesquisadas

| Recurso                    | Decisão proposta                         | Motivo                                                                                                              |
| -------------------------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| Motion, já instalado       | Motor principal                          | Oferece gestos, stagger, scroll e layout necessários ao plano                                                       |
| CSS                        | Microinterações simples e loop da faixa  | Permite preencher botões, desenhar linhas e deslocar a faixa com poucas dependências                                |
| Magic UI Marquee           | Referência de composição e comportamento | Avaliar a implementação pública, licença e revisão antes de adaptar código; aplicar tokens próprios                 |
| Embla Carousel             | Avaliado, sem adoção prevista            | O alvo confirmado é uma faixa contínua, que pode ser atendida por CSS; não exige navegação entre slides             |
| GSAP / ScrollTrigger       | Não previsto nesta etapa                 | Os efeitos definidos são atendidos pelo Motion; reavaliar apenas se surgir uma sequência que justifique outro motor |
| Radix Dialog, já instalado | Manter                                   | Preservar a base de comportamento acessível do menu                                                                 |

Fontes consultadas:

- [Motion: gestos e interações](https://motion.dev/docs/react-gestures).
- [Motion: animações de rolagem](https://motion.dev/docs/react-scroll-animations).
- [Magic UI: Marquee](https://magicui.design/docs/components/marquee).
- [Embla Carousel](https://www.embla-carousel.com/).
- [GSAP: ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/).
- [W3C: acessibilidade em carrosséis](https://www.w3.org/WAI/tutorials/carousels/).

Não instalar bibliotecas nesta fase de planejamento. Se algum componente externo for adaptado, registrar origem, versão ou commit, licença e alterações em `docs/third-party-components.md`.

## Etapa 6: validação e critérios de aceite

- Nenhum número decorativo em seções, cards ou menu; dados numéricos reais preservados.
- Seções principais com divisões e espaçamentos consistentes em todas as larguras.
- Todo controle interativo com hover, foco e resposta de toque aplicáveis.
- Faixa com movimento observável, ciclo sem saltos e pausa persistente funcionando.
- Pausa automática fora da viewport e com aba oculta; sem duplicação da lista na árvore acessível.
- Animações presentes na home, projetos, casos, história, contato e navegação.
- Texto inicial, fotografia e links acessíveis antes da hidratação e sem JavaScript.
- Movimento reduzido remove loops, parallax e deslocamentos desnecessários.
- Menu mantém foco contido, fechamento e restauração corretos mesmo com saída animada.
- Filtros mantêm foco no acionador e tornam itens em saída não interativos.
- Sem overflow em 320, 360, 390, 768, 1024 e 1440 px.
- Comparar vídeo antes/depois com movimento normal. Usar capturas estáticas separadas para conferir layout.
- Medir custo de JavaScript e estabilidade de layout antes/depois, sem apresentar métricas locais como dados de produção.
- Executar build, lint, typecheck, Playwright e Axe. Adicionar testes de movimento, pausa e reduced motion ao conjunto atual.
- Atualizar especificação, design system, README, decisões e relatório de validação para descrever o comportamento final.

## Ordem de entrega

1. Limpeza de numeração, separadores e atualização das regras de design.
2. Tokens e componentes compartilhados de movimento.
3. Botões, links e faixa de tecnologias: primeira revisão perceptível no navegador.
4. Coreografia da home, seguida das rotas internas e do menu.
5. Ajustes de mobile, acessibilidade, desempenho e documentação.

O primeiro conjunto estabelece a estrutura; o segundo distribui o movimento; o último valida a experiência completa. Revisar os comportamentos no navegador ao final de cada conjunto, sem acumular todos os ajustes para o fim.
