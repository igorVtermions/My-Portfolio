# Plano — Stack aplicada

Status: implementado e validado em 29 de setembro de 2026.

## Diagnóstico

A seção atual renderiza oito categorias de `src/content/stack.ts` em uma grade de duas colunas. Os cards da mesma linha compartilham a altura, mesmo quando possuem quantidades diferentes de tecnologias. Mobile, com dois itens, acaba com uma área vazia comparável ao conteúdo de Front-end, com seis.

Os ícones já são reconhecíveis e compatíveis com a identidade do portfólio. O problema principal é a composição repetitiva e a ausência de conexão entre ferramenta, função e trabalho realizado. Acrescentar movimento aos mesmos cards não resolve isso.

## Conceito recomendado

**Stack aplicada: da interface à entrega.**

Substituir os grandes cards por uma composição de faixas horizontais compactas. Cada faixa tem o nome da área à esquerda e tecnologias com ícone e nome à direita. Linhas finas conectam visualmente as áreas, sem números, porcentagens de domínio ou efeitos decorativos contínuos.

Cabeçalho proposto:

- Sobretítulo: Minha stack.
- Título: Tecnologias que viram produto.
- Sem parágrafo genérico abaixo do título.

Organização inicial:

- Interfaces: dois grupos identificados, Web e Mobile; preservar todas as tecnologias atuais dessas categorias.
- Serviços e dados: dois grupos identificados, Back-end e Dados; preservar as tecnologias atuais.
- Base e entrega: Linguagens, Ferramentas e infraestrutura, Qualidade e métodos, em grupos menores que se ajustam ao conteúdo.
- IA: faixa compacta própria; não apresentar recursos em desenvolvimento como entregas concluídas.

Essa organização preserva o inventário, mas dá uma sequência de leitura ao trabalho Full Stack. NoSQL deve permanecer como conceito de dados, assim como métodos e práticas não devem ser tratados como marcas de ferramentas.

## Interação e contexto

As tecnologias com contexto comprovado funcionam como botões. Ao selecionar uma, abre-se uma área de detalhes logo abaixo da faixa correspondente, com nome, uma frase objetiva de aplicação e links para os trabalhos relacionados. Uma segunda seleção atualiza esse detalhe; clicar novamente permite fechar. Apenas um detalhe fica aberto por vez.

Exemplos sustentados pelos arquivos de conteúdo atuais:

- React Native: aplicações mobile na Mágicos da Limpeza e na Thux / Mathux; também compõe o produto autoral Escoply.
- Next.js: interfaces web na Thux / Mathux e no Escoply.
- Supabase: integração com dados na Mágicos e arquitetura do Escoply.
- AWS: servidores durante a atuação na Thux / Mathux.

As relações devem vir de dados estruturados e revisão editorial. Não deduzir uma funcionalidade entregue apenas porque a tecnologia aparece numa lista. Itens sem contexto documentado permanecem legíveis, sem botão sem função, projeto inventado ou indicação fictícia de experiência.

Um vínculo ativo destaca os trabalhos correspondentes dentro do detalhe; não filtra nem modifica outras seções da página. Não haverá modal, navegação obrigatória ou painel gigante reservado antes de qualquer interação.

## Direção visual e movimento

- Preservar preto, lilás e roxo, os ícones existentes e a tipografia do site.
- Ícones e nomes agrupados em elementos compactos, com quebra natural de linha; nenhuma altura fixa nas faixas.
- Separadores apenas entre áreas, sem bordas duplicadas ou caixas em volta de cada categoria.
- Entrada discreta das faixas ao chegar à seção, uma única vez.
- Hover e foco com fundo, contorno e leve deslocamento do ícone; transições de entrada e saída entre 180 e 280 ms.
- Abertura e troca de detalhes entre 220 e 320 ms, sem salto brusco e sem deslocamentos grandes.
- Sem órbitas, nuvens de ícones ou carrossel: nomes e áreas ficam disponíveis para leitura imediata.
- Movimento reduzido elimina deslocamentos; o conteúdo e as interações permanecem funcionais.

## Plano de implementação

1. **Reorganizar o conteúdo.** Modelar identificadores estáveis de tecnologias, áreas e relações com trabalhos em `src/content/stack.ts` ou módulo complementar. Reutilizar os dados de experiências e projetos; manter URLs centralizadas. Não reintroduzir as notas que o usuário pediu para remover.
2. **Construir a composição.** Substituir `StackGroup` pela estrutura de faixas em `stack-section.tsx`. Criar componentes pequenos para faixa, item de tecnologia e contexto aplicado, preservando `#stack` e a hierarquia de títulos.
3. **Adicionar interação.** Isolar o estado de seleção em um componente cliente. Usar botões reais com `aria-expanded` e `aria-controls`, manter o foco no botão e oferecer fechamento explícito. Conteúdo principal legível antes da hidratação e alternativa estática com links sem JavaScript.
4. **Aplicar movimento.** Usar Motion e tokens existentes; não instalar uma nova biblioteca. Evitar cálculos de posição baseados no navegador na renderização inicial.
5. **Adaptar ao celular.** Empilhar nome de área, grupos e detalhe. Ícones acompanhados por nomes, alvos de toque de pelo menos 44 px, sem rolagem horizontal obrigatória. A lista completa permanece acessível.
6. **Validar e documentar.** Conferir desktop e celular, textos longos, abertura/troca/fechamento, teclado, leitor de tela, redução de movimento e ausência de erros de hidratação. Executar lint, TypeScript e testes pertinentes à interação. Atualizar o catálogo do design system, cujo registro atual de StackGroup ainda descreve notas já removidas da interface.

## Critérios de aceite

- Todas as tecnologias atuais continuam encontráveis e com nome visível.
- Não há cards esticados para igualar alturas nem espaço reservado vazio para detalhes.
- A seção comunica áreas de atuação e oferece exemplos reais de uso.
- Não repete o layout de tabs e painel da seção de GitHub.
- Funciona por teclado, toque e sem depender de hover.
- Não apresenta níveis, métricas ou relações com projetos sem respaldo no conteúdo.
- Animações têm início e fim suaves e não prejudicam a leitura.

## Limite desta etapa

Implementação concluída após aprovação do usuário. Quatro faixas preservam todas as tecnologias das oito categorias originais. Doze tecnologias possuem contexto e links derivados dos trabalhos cadastrados. Os demais itens permanecem informativos.

Validação: build, lint e TypeScript; três testes automatizados de interação, teclado, inventário, celular, acessibilidade e conteúdo sem JavaScript. Capturas de desktop e celular revisadas em `docs/qa/stack-applied-*.png`.
