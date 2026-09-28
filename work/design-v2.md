# Design / Igor Franco

Proposta 02 · Setembro de 2026

## Visualização

Abra **design.html** e selecione uma das oito telas. Alterne entre **Desktop** e **Celular · 390**. Role dentro da prévia. Foto, estilos e ícones estão incorporados ao HTML, permitindo visualização offline. Os links de GitHub, LinkedIn e e-mail são externos.

Esta entrega é uma base de design navegável, não um site publicado.

## 1. Identidade pessoal

O nome “IGOR FRANCO.” é a assinatura principal. Retrato real à direita, nome grande à esquerda, moldura deslocada em roxo e legenda lilás. Preto estrutura a página e branco sustenta a leitura. A alternância entre projeto destacado, índice compacto e bloco de história cria ritmo.

Mudanças desta revisão:

- Paleta substituída por preto, branco, roxo e lilás.
- Abertura reconstruída com nome, foto e foco mobile.
- Títulos fortes sem serifa, substituindo a Georgia em itálico.
- Escoply em composição dividida entre contexto e imagem conceitual.
- Mágicos da Limpeza e Thux/Mathux em linhas compactas na página inicial.
- Bloco lilás para história e índice de repositórios públicos.
- Travessões removidos dos textos, datas, títulos e documentação.

Sem partículas, brilho neon, cursor especial, texto digitado ou métricas fictícias. A identidade vem de Igor, da composição e dos projetos.

## 2. Fontes e fidelidade

O currículo fornecido sustenta experiências, períodos e formação. A foto `WhatsApp Image 2026-07-14 at 15.06.07.jpeg` é usada sem alteração facial. O enquadramento é definido pela interface, com `object-fit: cover`. Não houve geração de retrato artificial.

O [perfil do GitHub](https://github.com/igorVtermions), consultado em 28/09/2026, destaca React Native e desenvolvimento mobile, junto da atuação em web e back-end. Isso orienta a apresentação: “Meu foco é mobile. Meu trabalho conecta o produto inteiro.”

Repositórios confirmados como públicos:

| Repositório | Uso no design |
|---|---|
| [escoply-web](https://github.com/igorVtermions/escoply-web) | Frente web; TypeScript; acesso ao código |
| [escoply-mobile](https://github.com/igorVtermions/escoply-mobile) | Frente mobile; TypeScript; acesso ao código |
| [Master-Manager](https://github.com/igorVtermions/Master-Manager) | Repositório fixado no perfil; JavaScript |

O Master-Manager não recebeu descrição funcional inventada: seu README consultado contém o texto inicial de React/Vite. A leitura não constitui auditoria técnica dos repositórios. Nenhum projeto privado foi incorporado.

O GitHub ainda descreve a Thux como vínculo atual, enquanto o currículo informa término em agosto de 2026. O design preserva as datas do currículo. “Atual” na Mágicos da Limpeza segue o documento fornecido.

Não foram criados hobbies, histórias de infância, localização, disponibilidade, depoimentos ou resultados numéricos. Os textos em primeira pessoa são propostas editoriais baseadas nas fontes.

## 3. Telas e conteúdo

| Tela | Rota futura | Objetivo |
|---|---|---|
| 01 · Início | `/` | Identidade, foco profissional e seleção de trabalhos |
| 02 · Projetos | `/projetos` | Contexto dos trabalhos e código público |
| 03 · Escoply | `/projetos/escoply` | Produto autoral e suas frentes |
| 04 · Mágicos da Limpeza | `/projetos/magicos-da-limpeza` | Contribuição no projeto |
| 05 · Thux / Mathux | `/experiencia/thux-mathux` | Experiência na empresa |
| 06 · Minha história | `/sobre` | Trajetória, formação e competências |
| 07 · Contato | `/contato` | Conversa direta |
| 08 · Guia visual e ícones | Documentação interna | Sistema visual e vetores |

Todas as telas se adaptam ao celular. A prévia troca o conteúdo no próprio arquivo. As rotas são orientações para implementação.

### 01 · Início

Cabeçalho com assinatura e navegação. Abertura com nome, foto, foco mobile e apresentação: “React Native no aplicativo. React na web. Node.js no back-end. Sou desenvolvedor Full Stack e gosto de acompanhar o que construo até a entrega.”

Ações: “Explorar projetos” e “Quem está por trás”. Uma faixa de tecnologias encerra a abertura.

Escoply aparece com contexto, status e botão de detalhe. Mágicos da Limpeza e Thux/Mathux ficam em linhas numeradas. O bloco lilás de história conecta experiência profissional e produto autoral. O índice de código reúne os três repositórios públicos. Encerramento: “Me conta o que você quer construir.”

No celular, apresentação e ações antecedem a foto. Projeto destacado, história e listas passam a uma coluna. Os metadados dos repositórios quebram em linhas próprias.

### 02 · Projetos

Título: “Projetos com nome e contexto.” Filtros funcionais: Todos, Autoral e Profissional. Eles atuam sobre Escoply, Mágicos da Limpeza e Thux/Mathux. O índice separado de repositórios permanece visível.

Cada entrada apresenta nome, contexto, estado e acesso ao detalhe. Thux/Mathux é explicitamente uma experiência profissional, não um produto único. No celular não há carrossel: a leitura é vertical.

### 03 · Escoply

Título: “Organizar o trabalho. Abrir espaço para criar.” Papel autoral e estado de desenvolvimento aparecem antes da composição.

Seções: contexto, contribuição, tecnologia e estado atual. O texto aborda clientes, projetos, escopos, orçamentos, aprovações, materiais, prazos e lembretes. Arquitetura conforme currículo: Next.js, React Native/Expo, TypeScript, Node.js/Fastify e Supabase/PostgreSQL, com Row Level Security.

O produto está em construção e testes com convidados. O chatbot com LLM e conceitos de RAG é descrito como em desenvolvimento. Links reais para `escoply-web` e `escoply-mobile` encerram a página.

### 04 · Mágicos da Limpeza

Título: “Conectar serviços. Conectar as pontas.” Full Stack Freelance desde janeiro de 2026, conforme o currículo.

Plataforma de serviços de limpeza, manutenção e dedetização em Portugal. O texto preserva a construção em colaboração, as integrações entre web e mobile, React, React Native, Node.js, Supabase, testes e CI/CD. O estado informado é uso interno pela empresa.

### 05 · Thux / Mathux

Título: “Construir. Testar. Colocar no mundo.” Período: junho de 2025 a agosto de 2026.

Aplicações web, mobile, APIs e infraestrutura. Destaque para a responsabilidade direta por entregas mobile, preservando o contexto de equipe. Sem atribuir autoria exclusiva de todos os produtos ou inventar nomes de clientes.

### 06 · Minha história

Título: “Prazer, Igor Franco.” A foto substitui o monograma isolado. Introdução com foco em mobile e narrativa “Do freelance ao mobile. E ao meu próprio produto.”

Linha do tempo: formação na Unopar e freelance em 2023; Thux/Mathux; Mágicos da Limpeza; Escoply. Períodos sobrepostos são mantidos. O Escoply não recebe uma data inicial inventada.

Competências agrupadas em Interfaces, Mobile, Back-end e dados, Entrega e qualidade e Formação complementar. StarSe Executive Education, Vai Na Web e Alura completam a formação. Sem barras de proficiência.

### 07 · Contato

Título: “Me conta a sua ideia.” Texto: “Um projeto, uma oportunidade ou uma troca sobre desenvolvimento. Pode me chamar.”

E-mail: `igorviniciusf10@gmail.com`. Ação primária abre o aplicativo de e-mail. A secundária copia o endereço. Estados: “Endereço copiado.” ou “Não foi possível copiar. Selecione o endereço acima.” GitHub e LinkedIn completam a tela.

Sem formulário de envio, prazo de resposta prometido ou disponibilidade presumida. O telefone permanece fora da composição.

### 08 · Guia visual e ícones

Título: “Identidade. Em cada detalhe.” Paleta, tipografia, componentes, estados e inventário visual dos 12 SVGs. Essa tela não integra o menu público sugerido.

## 4. Sistema visual

### Cores

| Token | Valor | Aplicação |
|---|---|---|
| Preto | `#101014` | Fundo principal e texto sobre lilás |
| Branco | `#F7F7FA` | Texto principal e superfícies claras |
| Lilás | `#C6ABFF` | Nome, foco e bloco de história |
| Roxo | `#7541D6` | Ações com texto branco e moldura da foto |
| Cinza | `#B8B6C2` | Texto secundário |
| Linha | `#3C3946` | Separadores; nunca texto pequeno |

Superfície auxiliar: `#1B1822`. Composições também usam `#E4DCF4` e `#C5C5D2`. São cores do portfólio, não declarações de identidade oficial dos clientes.

### Tipografia

Arial/Helvetica para títulos e corpo; Consolas/monospace para índices. Fontes de sistema, sem downloads. Nome até 108 px no desktop e 80 px na referência mobile, peso 800 e entrelinha curta. Títulos internos até 84 px, geralmente 48 px no celular. Contato com escala própria, até 120 px e 60 px. Seções de 26 a 44 px; corpo de 14 a 18 px.

Metadados de 9 a 12 px são auxiliares e não concentram informações essenciais de navegação. Nome em caixa alta apenas na abertura. Sem serifa em itálico.

### Grade e retrato

Desktop de referência: 1200 px, margens internas de 60 px. Abertura em proporção aproximada 1,32:1. Mobile: 390 px, margens de 24 px e uma coluna. Quebra principal em 700 px, ajuste intermediário até 900 px e ajuste adicional até 360 px.

Retrato retangular com enquadramento por CSS, sem distorção. Monograma IF sobreposto na margem, sem cobrir o rosto. O retrato é mantido em cores naturais.

### Estados e acessibilidade

Botões roxos com texto branco, hover lilás com texto preto. Foco de 2 px em lilás. Ações principais com alvo de pelo menos 44 px. Transições curtas e respeito a movimento reduzido.

Menu mobile expansível nativo; filtros com `aria-pressed`; retrato com texto alternativo; ícones decorativos ocultos de leitores de tela; mensagem de cópia em região de status. Estado vazio e ação indisponível aparecem como amostras no guia. Na implementação final, validar teclado, zoom e leitor de tela nas rotas reais.

## 5. Ícones

12 SVGs individuais em **icons/**. Grade de 24 px, traço de 1,6 px, pontas arredondadas, sem preenchimento e cor por `currentColor`.

| Arquivo | Aplicação |
|---|---|
| `arrow-up-right.svg` | Projeto, história e contato |
| `arrow-right.svg` | Avançar e sequências |
| `arrow-left.svg` | Voltar aos projetos |
| `arrow-down.svg` | Reserva de navegação por seção |
| `menu.svg` | Navegação mobile |
| `mail.svg` | Abrir e-mail |
| `copy.svg` | Copiar contato |
| `external-link.svg` | Redes e repositórios |
| `check.svg` | Amostra de sucesso |
| `close.svg` | Reserva para sobreposições |
| `download.svg` | Reserva para currículo |
| `plus.svg` | Reserva para expansão |

Os sinais de adição da abertura e da faixa de tecnologias são ornamentais, feitos com texto. GitHub e LinkedIn aparecem escritos por extenso. Os vetores foram produzidos para esta entrega e não dependem de bibliotecas externas.

## 6. Conteúdo para evoluir

A foto é real; as composições dos produtos permanecem conceituais e identificadas. O painel do Escoply não é uma captura da aplicação atual. Substituir essas composições por capturas autorizadas e adicionar decisões técnicas e resultados documentados quando disponíveis.

Uma camada pessoal futura pode incluir relatos de Igor sobre como começou a programar e interesses fora do trabalho. A ausência desses dados não foi preenchida com histórias genéricas.

## 7. Entrega

- `design.html`: oito telas responsivas, foto incorporada e navegação.
- `design.md`: esta especificação.
- `icons/`: 12 vetores editáveis.
- `previa-design.jpg`: abertura atualizada.
- `design-igor-franco.zip`: pacote completo.

Para a implementação, transformar a navegação da prévia em rotas, manter o guia fora do menu público e preservar os estados reais dos projetos. Esta proposta permanece local.
