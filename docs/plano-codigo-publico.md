# Plano de ação: código público

Data: 29/09/2026. Estado: aprovado e implementado.

Entrega: explorador desktop, seletor mobile, conteúdo editorial verificado nos READMEs, último push quando disponível, ações de código/README/atividade, três demonstrações verificadas, fallback sem datas inventadas e versão linear sem JavaScript. Sem dependências adicionais. Os diagnósticos abaixo registram a situação anterior.

## Diagnóstico

Foram revisados `github-repositories.ts`, `repository-index.tsx`, `repositories.ts`, os estilos em `showcase.css` e a captura enviada pelo autor.

- Todos os cards têm a mesma estrutura, tamanho mínimo e peso visual.
- A descrição ausente vira “Repositório público no GitHub”, repetida e sem contexto.
- O GitHub fornece mais metadados, mas a transformação atual preserva apenas nome, URL, descrição e linguagem principal.
- O título promete atualizações, mas os cards não mostram datas ou alterações.
- A seleção dos seis primeiros por push pode dar destaque a um README de perfil ou a um repositório pouco representativo.
- Todos os cliques levam para fora da página; não há exploração local do conteúdo.
- A seção anterior já explica experiência e Escoply. Esta área deve facilitar a inspeção técnica, sem repetir os mesmos casos de trabalho.

Foi consultada a documentação oficial do GitHub. A tentativa de consulta direta aos repositórios nesta revisão falhou por conexão; não foram confirmados novos dados de atividade, demos ou descrições dos repositórios. A proposta se baseia na implementação existente, na captura e nas capacidades documentadas da API.

## Alternativas

| Direção                           | Proposta                                                               | Quando usar                                                                           |
| --------------------------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| Explorador de código, recomendado | Lista compacta de repositórios e painel contextual do item selecionado | Para dar função à seção e permitir explorar o trabalho sem sair imediatamente do site |
| Vitrine com destaque              | Um projeto editorial em destaque e três ou quatro itens menores        | Quando houver boas capturas reais e demos públicas para apresentar                    |
| Diário de desenvolvimento         | Lista de atualizações ou releases recentes, com links                  | Como complemento futuro, se a atividade pública tiver conteúdo útil e contextualizado |

## Direção recomendada

Rótulo: **Código público / @igorVtermions**.

Título: **Por dentro do que desenvolvo.**

Texto: **Explore os projetos, as tecnologias e o código por trás de cada ideia.**

Layout desktop: duas colunas, aproximadamente 40% para uma lista de quatro a seis repositórios e 60% para o painel selecionado. Usar uma superfície principal, linhas discretas, tipografia do portfólio e um indicador lilás que acompanha a seleção. O nome e o conteúdo do repositório ganham mais destaque que o logotipo do GitHub.

Lista: nome, linguagem principal e data do último push. Indicar visualmente e semanticamente qual item está selecionado. Seleção por clique ou teclado, nunca troca automática. Manter o foco no seletor durante a atualização do painel.

Painel: nome legível, finalidade em duas linhas, até três tópicos técnicos confirmados, linguagem principal, data do último push e ações. Permitir identidade individual com ícones de plataforma ou tecnologia derivados de metadados confirmados. Não usar capturas fictícias ou código aleatório como se viesse do projeto.

No celular, usar um seletor compacto com detalhes imediatamente abaixo, sem rolagem horizontal obrigatória. Manter controles próximos ao painel e conteúdo essencial no HTML inicial. Uma lista linear permanece disponível sem JavaScript.

## Funcionalidades da primeira entrega

1. **Selecionar para explorar:** trocar o painel com contexto e metadados reais de cada repositório.
2. **Ver código:** link direto ao repositório, sempre disponível.
3. **Ler README:** link direto para a documentação no GitHub; não criar renderização remota de Markdown nesta etapa.
4. **Abrir demonstração:** somente quando houver URL pública validada como demo. O campo `homepage` pode apontar para documentação ou outro site; não assumir que todo endereço é uma demonstração.
5. **Ver atividade:** link para o histórico de commits, acompanhado de “Último push em ...”. Não chamar `pushed_at` de último commit do autor, nem de data de lançamento.
6. **Explorar no GitHub:** ação geral para ver os demais repositórios.

Começar sem busca e filtros: com quatro a seis itens, uma lista bem organizada é mais simples de usar. Adicionar filtros de Web, Mobile e Ferramentas somente quando houver quantidade e classificações verificadas que justifiquem. TypeScript sozinho não distingue um app mobile de uma aplicação web.

## Conteúdo e curadoria

- Manter a API como fonte de metadados dinâmicos e adicionar uma camada editorial local por nome completo do repositório.
- Campos locais: título de apresentação, descrição curta, plataforma, destaque, demo validada e exclusão opcional.
- Prioridade da descrição: descrição editorial verificada, descrição não vazia do GitHub, ausência tratada de forma compacta. Não preencher todos os itens com a mesma frase genérica.
- Revisar README ou código antes de escrever descrições para `nutritrack`, `fit-life` e outros itens sem contexto. Não inferir finalidade apenas pelo nome.
- O repositório de perfil pode ficar fora da seleção principal e continuar acessível em “Meu GitHub”. Confirmar sua finalidade antes de classificá-lo.
- Escolher um destaque local entre repositórios públicos elegíveis; ordenar os demais por último push. Não depender de qual repositório recebeu uma alteração trivial por último.
- Evitar duplicar a apresentação comercial do Escoply: aqui explicar a organização técnica das frentes web/mobile e oferecer acesso ao código.
- Não usar estrelas, contagem de commits ou porcentagens de linguagens como prova de qualidade ou domínio profissional.

## Visual e movimento

- Entrada curta em sequência para os itens, preservando legibilidade antes da hidratação.
- Indicador de seleção com deslocamento suave de 250 a 350 ms.
- Painel com transição discreta de 180 a 250 ms, sem piscar ou mover o restante da página; altura mínima apenas quando útil no desktop.
- Hover e foco com fundo, cor e seta animados na entrada e na saída.
- Datas e tópicos trazem sinais reais de evolução. Não incluir badge “ao vivo”, cursor digitando ou atividade simulada.
- Manter a paleta preto/roxo/lilás. Não adicionar um terminal cenográfico: o contato já tem a demonstração de código se transformando em interface.
- Sem autoplay, animação infinita do painel, partículas ou efeito 3D em cada item. Com movimento reduzido, seleção imediata ou transição apenas de cor.

## Integração técnica

Ampliar o modelo `Repository` com campos opcionais para `pushedAt`, `topics`, `homepage` e `defaultBranch`, mantendo título e descrição editoriais separados dos dados remotos.

A documentação da [API de repositórios](https://docs.github.com/en/rest/repos/repos#list-repositories-for-a-user) descreve linguagem principal, tópicos, homepage e timestamps. Esses dados permitem a primeira entrega sem consultar commits ou linguagens individualmente para cada card. A linguagem principal não representa toda a stack.

- Continuar buscando no servidor com revalidação de uma hora. Não fazer chamadas ao GitHub a cada seleção.
- Validar campos externos, restringir URLs de ação a protocolos adequados e renderizar descrições como texto.
- Preservar fallback local quando a API falhar; não inventar datas ou apresentar itens estáticos como sincronizados naquele momento.
- Tratar resposta válida vazia explicitamente, em vez de renderizar um painel sem conteúdo.
- Usar datas formatadas de forma determinística; se houver tempo relativo, basear servidor e cliente no mesmo instante para evitar hydration mismatch.
- Separar `RepositorySection` no servidor, `RepositoryExplorer` no cliente e componentes menores de lista/painel. Aproveitar Motion, ícones e tokens já instalados.
- O componente usado no detalhe do Escoply recebe uma seleção específica: preservar esse comportamento, sem puxar todos os repositórios nem duplicar um explorador completo onde dois links bastam.

## Sequência de implementação

1. Auditar a seleção pública e revisar descrições, exclusões e demos existentes. Preparar o conteúdo editorial sem editar repositórios no GitHub.
2. Ampliar o modelo e a normalização dos dados, com campos opcionais e fallback.
3. Construir lista e painel em desktop/mobile com navegação por teclado e links úteis.
4. Aplicar transições, estados de foco e comportamento com movimento reduzido.
5. Validar repositórios sem descrição, linguagem, demo ou data; API indisponível; lista vazia; títulos longos e links de README.
6. Revisar acessibilidade, hidratação, responsividade, desempenho e atualizar documentação.

## Segunda etapa opcional

Depois da primeira entrega, avaliar capturas reais e uma faixa com a última release de projetos que publicam releases. Um histórico detalhado de commits ou mapa de contribuições só deve entrar se acrescentar contexto e justificar chamadas extras e manutenção. Não é requisito para dar identidade à seção.

## Critérios de aceite

- O visitante entende a finalidade de um projeto antes de abrir o GitHub.
- Consegue explorar a seleção pelo teclado e pelo toque, sem conteúdo restrito ao hover.
- Demos, datas e descrições têm origem verificável; campos ausentes não geram espaços vazios grandes.
- A seção tem hierarquia própria e não repete a área de experiências ou o destaque do Escoply.
- Falhas da API não quebram a página nem produzem um estado “ao vivo” falso.
- A solução funciona em 320 a 1440 px e não depende de uma biblioteca adicional de animação.
