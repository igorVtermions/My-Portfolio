# Design — Igor Franco

Proposta 01 · 28 de setembro de 2026  
Portfólio pessoal de desenvolvimento Full Stack

## Como visualizar

Abra **design.html** no navegador. O seletor superior apresenta oito telas; os controles **Desktop** e **Celular · 390** mostram as duas composições. Role dentro da prévia para acessar toda a página. Os links internos e os filtros de projetos são navegáveis. O arquivo funciona sem instalação e sem carregar fontes, bibliotecas ou imagens externas.

Esta entrega é uma base de design navegável, com conteúdo e especificações para a implementação posterior. Não há publicação na internet nem serviço de envio de mensagens. E-mail, GitHub e LinkedIn são links reais extraídos do currículo; clicar em e-mail abre o aplicativo configurado pelo visitante.

## 1. Conceito: caderno de construção

O portfólio apresenta Igor pelo trabalho que constrói e pelo caminho percorrido. A linguagem é próxima de uma publicação editorial: grandes títulos, índices pequenos, linhas finas e espaços generosos. A assimetria vem da relação entre títulos, notas e conteúdo, sem prejudicar a leitura.

Das referências enviadas, a proposta aproveita a base escura, a apresentação pessoal direta, o destaque aos projetos e o cuidado com a versão mobile. A personalidade vem da paleta de tinta, papel e cobre, da combinação tipográfica e de textos específicos sobre sua experiência.

Não fazem parte desta direção: gradientes neon, halos atrás de retratos, partículas, cards arredondados em todas as seções, barras percentuais de habilidades, números de resultados sem fonte, texto digitado automaticamente, carrosséis automáticos ou cursor personalizado.

**Mensagem de abertura:** “Entre a ideia e o software.”  
**Apresentação:** “Sou Igor. Desenvolvo aplicações web, mobile e back-end — e acompanho o caminho até a entrega.”

Os textos em primeira pessoa são propostas editoriais derivadas do currículo. Antes da publicação, Igor pode ajustá-los para se aproximarem ainda mais de sua própria voz.

## 2. Conteúdo e fontes

Fonte factual: `Igor_Franco_Full_Stack.pdf`, fornecido pelo usuário. As imagens anexadas são referências visuais, não fontes biográficas.

Informações incorporadas:

- Nome de apresentação: Igor Franco. Nome completo: Igor Vinicius Pimentel Franco.
- Desenvolvedor Full Stack com experiência em web, mobile e back-end.
- Freelancer em desenvolvimento web desde 2023.
- Thux/Mathux: junho de 2025 a agosto de 2026.
- Mágicos da Limpeza: Full Stack Freelance, janeiro de 2026 até “atual”, conforme o currículo.
- Escoply: SaaS autoral em construção e testes com usuários convidados; chatbot com LLM e conceitos de RAG em desenvolvimento.
- Tecnólogo em Análise e Desenvolvimento de Sistemas, Unopar, concluído em 2023.
- Formação complementar: StarSe Executive Education, Vai Na Web e Alura.
- E-mail: igorviniciusf10@gmail.com.
- GitHub: https://github.com/igorVtermions.
- LinkedIn: https://www.linkedin.com/in/igor-vinicius-574657232.

“Atual” descreve o estado informado no currículo, sem verificação independente. Não foram criados resultados numéricos, depoimentos, certificações adicionais, detalhes sobre infância, localização, hobbies ou disponibilidade profissional. O telefone foi deixado fora da interface por opção editorial; o contato principal é o e-mail.

## 3. Mapa de telas

| Tela | Rota sugerida para implementação | Objetivo |
|---|---|---|
| 01 · Início | `/` | Apresentar Igor e conduzir ao trabalho selecionado |
| 02 · Projetos | `/projetos` | Reunir produto autoral e atuação profissional |
| 03 · Escoply | `/projetos/escoply` | Contextualizar o SaaS autoral |
| 04 · Mágicos da Limpeza | `/projetos/magicos-da-limpeza` | Explicar a contribuição no projeto |
| 05 · Thux / Mathux | `/experiencia/thux-mathux` | Apresentar a experiência na empresa |
| 06 · Minha história | `/sobre` | Relacionar trajetória, formação e competências |
| 07 · Contato | `/contato` | Facilitar uma conversa direta |
| 08 · Guia visual e ícones | Apenas documentação | Documentar a base visual |

As rotas são propostas para o site futuro. A prévia local troca telas no próprio arquivo. Todas as oito telas têm composição responsiva; não há login, painel administrativo ou blog nesta primeira versão.

### 01 · Início

1. Cabeçalho com assinatura tipográfica “igor franco /” e navegação.
2. Identificação do nome e da atuação, título editorial e apresentação curta.
3. Botão “Conheça meu trabalho”, levando a Projetos.
4. Linha tipográfica com React/Next.js, React Native, Node.js/NestJS e TypeScript.
5. Trabalho selecionado: Escoply, com composição conceitual, categoria e acesso ao detalhe.
6. Bloco “O código é uma parte. A entrega é o conjunto.”, conectando experiência e história.
7. Convite ao contato e rodapé com redes profissionais.

No desktop, título amplo e apresentação dividida entre texto e ação. No celular, ordem vertical, botão logo após a apresentação e imagem conceitual adaptada à largura disponível.

### 02 · Projetos

Título “Feitos de código. E de contexto.”, introdução e filtros Todos, Autoral e Profissional. Os filtros da prévia funcionam e mantêm a página no mesmo contexto.

Cada entrada apresenta composição visual, nome, contexto, situação e link de detalhe. Ordem: Escoply; Mágicos da Limpeza; Thux/Mathux. A última entrada é explicitamente uma seleção de experiência profissional, sem fingir ser um produto único.

No celular, imagens e textos ficam em uma coluna. Não há carrossel horizontal. Ao ampliar o acervo no futuro, uma categoria vazia deve apresentar “Nenhum projeto nesta categoria” e ação “Ver todos”.

### 03 · Escoply

Título “Organizar o trabalho. Abrir espaço para criar.”, papel autoral e estado atual visível antes da imagem.

Seções: contexto; contribuição; tecnologia; estado atual. O texto apresenta clientes, projetos, escopos, orçamentos, aprovações, materiais, prazos e lembretes. A arquitetura cita Next.js, React Native/Expo, TypeScript, Node.js/Fastify e Supabase/PostgreSQL, com Row Level Security.

O chatbot permanece descrito como recurso em desenvolvimento. Não há botão de demonstração, repositório ou resultado comercial sem endereço ou evidência fornecidos.

### 04 · Mágicos da Limpeza

Título “Conectar serviços. Conectar as pontas.”, papel Full Stack Freelance e período janeiro de 2026 até atual.

O contexto é a plataforma de venda de serviços em Portugal. O texto preserva o trabalho em colaboração desde o início e a atuação em React, React Native, Node.js e Supabase, com integrações, testes e CI/CD. O estado informado é uso interno pela empresa.

### 05 · Thux / Mathux

Título “Construir. Testar. Colocar no mundo.” e período junho de 2025 a agosto de 2026.

A página agrupa a atuação em produtos web e mobile, APIs e infraestrutura. Destaca a responsabilidade direta pela maioria dos projetos lançados pelo time mobile, sem atribuir autoria exclusiva de todos os produtos. Não inventa nomes de clientes ou aplicativos.

### 06 · Minha história

Abertura “Prazer, Igor Franco.”, resumo profissional e monograma tipográfico IF. O monograma resolve a composição sem presumir a aparência de Igor.

Narrativa curta seguida de linha do tempo: formação e freelance em 2023; Thux/Mathux; Mágicos da Limpeza; Escoply. Períodos sobrepostos permanecem visíveis. O Escoply não recebe uma data de início que não consta no currículo.

Competências agrupadas por Interfaces, Mobile, Back-end e dados, Entrega e qualidade e Formação complementar. Não há medidores de proficiência. Uma futura seção pessoal pode receber histórias e interesses escritos por Igor; esses dados não foram inventados.

### 07 · Contato

Título “O próximo projeto começa com uma boa conversa.”, e-mail grande, ação “Escrever um e-mail”, ação “Copiar endereço”, GitHub e LinkedIn.

Feedback de cópia: “Endereço copiado.” Se a permissão de clipboard falhar: “Não foi possível copiar. Selecione o endereço acima.” A prévia implementa os dois caminhos. Não há formulário nem estado de envio fictício.

### 08 · Guia visual e ícones

Prancha de cores, espécime tipográfico, botões, etiquetas, amostras de feedback e inventário visual dos 12 SVGs. Esta tela é uma ferramenta de documentação e não deve aparecer na navegação pública do portfólio.

## 4. Sistema visual

### Cores

| Token | Valor | Uso |
|---|---|---|
| Tinta | `#14201F` | Fundo principal; texto sobre áreas claras |
| Papel | `#EEE9DD` | Texto principal; painéis de composição |
| Cobre | `#DE9474` | Palavra editorial, ação principal e foco |
| Névoa | `#B5BFBA` | Texto secundário e metadados |
| Linha | `#45524E` | Separadores; nunca texto pequeno |

Fundos auxiliares das composições: Escoply `#B5BCB0`, Mágicos `#D7BA8B`, Thux `#B5BEC5`. Eles são cores do portfólio, não uma declaração das identidades oficiais desses produtos.

### Tipografia

- Interface e corpo: Arial, com Helvetica e sans-serif como alternativas.
- Ênfase editorial: Georgia italic, com serif como alternativa.
- Metadados e índices: Consolas, com monospace como alternativa.
- Título inicial: até 120 px; título interno: até 96 px; mobile: 49–64 px.
- Títulos de seção: 28–34 px; corpo: 16–18 px; legendas: 10–12 px.
- Entrelinha do corpo: 1,65. Textos longos com largura contida.

As fontes de sistema tornam a entrega portátil. Índices pequenos são elementos auxiliares; nenhuma ação essencial depende de legenda pequena.

### Grade e espaçamento

Referência desktop da prévia: 1200 px de largura. Conteúdo com margens de 60 px; grade interna de proporção 1:2 para notas laterais e leitura. Referência mobile: 390 px, margens de 24 px e coluna única. Quebra principal em 700 px.

Escala de espaçamento orientadora: 8, 16, 24, 32, 48 e 72 px. Bordas finas e cantos retos. Sombra discreta apenas na composição conceitual de papel e no menu sobreposto.

### Interação e acessibilidade

- Ações de toque com pelo menos 44 px de altura.
- Foco de teclado em cobre, com contorno de 2 px e afastamento de 6 px.
- Hover por cor ou sublinhado; transições de 160 ms.
- Respeito a `prefers-reduced-motion`.
- Menu mobile nativo expansível, acessível por teclado.
- Ícones decorativos ocultos de leitores de tela; texto visível nas ações.
- Contato copiado anunciado em uma região de status.
- Etiquetas textuais acompanham estados, evitando depender apenas de cor.
- Na implementação final: preservar semântica, validar zoom de 200%, leitor de tela e navegação por teclado nas rotas reais.

## 5. Inventário de ícones

Arquivos vetoriais individuais em **icons/**. Grade 24 × 24; traço 1,6; pontas e junções arredondadas; sem preenchimento; cor herdada por `currentColor`.

| Arquivo | Função | Situação |
|---|---|---|
| `arrow-up-right.svg` | Abrir projeto ou iniciar contato | Usado |
| `arrow-right.svg` | Continuidade e sequências | Usado |
| `arrow-left.svg` | Voltar à lista de projetos | Usado |
| `arrow-down.svg` | Entrada para o trabalho selecionado | Usado |
| `menu.svg` | Navegação mobile | Usado |
| `mail.svg` | Escrever e-mail | Usado |
| `copy.svg` | Copiar contato | Usado |
| `external-link.svg` | Destino externo | Usado |
| `check.svg` | Feedback positivo | Amostra no guia |
| `close.svg` | Fechar sobreposição futura | Reserva documentada |
| `download.svg` | Baixar currículo, se adicionado | Reserva documentada |
| `plus.svg` | Expandir conteúdo futuro | Reserva documentada |

Os vetores são formas geométricas produzidas nesta entrega, sem dependência de biblioteca externa. GitHub e LinkedIn são links escritos por extenso, não ícones de marca. Ao adicionar download de currículo, publicar uma cópia revisada e conectar o botão ao PDF real.

## 6. Imagens e conteúdo para evolução

As três composições são conceitos editoriais, identificados como tal na prévia. O painel Escoply não é captura da aplicação real. Para a próxima revisão, os materiais que mais acrescentariam autenticidade são capturas autorizadas dos projetos, decisões técnicas concretas e uma breve história pessoal escrita por Igor.

Uma foto é opcional. Caso usada, preferir retrato real, luz natural e enquadramento simples; a estrutura atual funciona sem foto. Não é necessário inserir avatares artificiais.

Antes de publicar casos profissionais, selecionar imagens e detalhes que possam ser divulgados. Acrescentar métricas apenas com contexto e fonte. As descrições atuais não alegam resultados que o currículo não documenta.

## 7. Arquivos da entrega

- `design.html`: caderno visual navegável, oito telas e versões responsivas.
- `design.md`: este documento, com conteúdo, decisões e especificações.
- `icons/`: 12 ícones SVG independentes e editáveis.

Base de implementação: manter os textos e a hierarquia, substituir composições por imagens reais quando fornecidas e transformar a navegação da prévia em rotas. O guia de design fica fora do menu público.
