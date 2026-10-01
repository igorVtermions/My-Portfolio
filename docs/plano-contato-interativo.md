# Plano — Da ideia ao primeiro contato

## Revisão de 1 de outubro de 2026

Ajuste posterior: removido o botão Pausar/Continuar. A prévia concluída pausa enquanto houver mouse sobre a demonstração ou foco de teclado dentro dela, retomando ao sair. Hover durante digitação e construção não interrompe a sequência. O formulário pausa enquanto contém foco e libera a reprodução ao sair, evitando pausa permanente sem controle de retomada.

Por solicitação do autor, a reprodução agora é automática, inclusive com preferência de movimento reduzido, em ciclos de 30 segundos: digitação até 10 s, Run em 12 s, montagem até 18 s e prévia até 30 s. A sequência reinicia, mas continua pausando durante preenchimento, fora da viewport ou com aba oculta. Os controles Ver/Rever animação e os textos abaixo da prévia foram removidos, assim como o link Ir para o formulário. O CTA agora é Entre em contato por outros canais e abre `/contato`. Esta revisão substitui os comportamentos de reprodução e CTA descritos na proposta original abaixo.

Verificação local do envio: apenas `.env.example` está presente; `RESEND_API_KEY` e `CONTACT_FROM_EMAIL` não estão definidos no ambiente verificado. O envio real depende dessa configuração. Nenhum e-mail real foi disparado.

Status: implementado após aprovação. Editor, Run e montagem progressiva substituem o loop decorativo anterior.

Validação concluída: build, lint, TypeScript e formatação; sete testes de demonstração e formulário passaram. Cobertura inclui Run, reprodução automática, pausa, preservação dos campos, foco do CTA, movimento reduzido, acessibilidade, aba oculta, ausência de JavaScript e envio com respostas simuladas. Capturas de desktop, celular e editor revisadas em `docs/qa/contact-interactive-*.png`.

## Diagnóstico e objetivo

A animação atual em `build-animation.tsx` alterna código e uma prévia com CSS em um loop de 12 segundos. O código rola em bloco, não é digitado; não existe botão Run funcional, montagem progressiva do site ou ligação entre a demonstração e o formulário. A janela inteira está oculta de leitores de tela porque hoje é decorativa.

Transformar essa janela numa pequena experiência interativa: a pessoa acompanha código sendo escrito, pode executá-lo e vê uma landing page ganhar forma. O resultado apresenta a identidade de Igor e oferece uma ação concreta para começar a conversa no formulário ao lado.

## Direção visual

- Título da seção acima das duas colunas: **Sua próxima ideia começa com uma conversa.**
- Desktop: demonstração à esquerda e formulário à direita, alinhados pelo topo. O editor passa a ser protagonista, em vez de uma miniatura abaixo de um título muito alto.
- Usar proporções próximas de 1:1, com o formulário mantendo espaço suficiente para preenchimento.
- Uma única moldura para editor e prévia; barra superior discreta com nome do arquivo, estado e botão Run.
- Código curto, legível, com cores de sintaxe dentro da paleta atual. Sem terminal denso, numerais decorativos ou painel fictício de produtividade.
- A prévia é uma landing page: identidade no cabeçalho, título, composição visual de interface e botão de contato. Evitar repetir os cards de Design/Desenvolvimento da versão atual.
- Reutilizar a identidade existente: assinatura `igor franco /` do header e monograma `IF.` do ícone do site. O `i.` genérico da animação atual sai. Se houver outra logo oficial, ela pode substituir essa assinatura posteriormente.
- Altura estável para o palco da animação, ajustada por breakpoint, sem esticar o formulário para preencher espaço vazio.

## Roteiro da experiência

| Etapa | Comportamento | Duração inicial |
| --- | --- | --- |
| Código | Ao entrar na viewport, um trecho curto de JSX é digitado em grupos de caracteres, com cursor e sintaxe destacada. | 3–4 s |
| Run | O botão ganha destaque e executa automaticamente depois de uma breve espera; a pessoa também pode clicar antes para completar o trecho e avançar. | 0,8–1 s |
| Construção | O editor dá lugar à prévia. Estrutura, cabeçalho, título, composição e botão aparecem em sequência. | 1,5–2 s |
| Convite | A assinatura ganha destaque e aparece **“Vamos construir o seu próximo passo?”**, com a ação **“Conversar sobre uma ideia”**. | Permanece visível |

O primeiro ciclo começa sozinho, mas não reinicia indefinidamente. O resultado fica disponível para leitura e clique. Um controle **Rever animação** permite repetir. Run é um botão real; a execução automática anima o estado visual do botão, sem mover o cursor da pessoa nem simular interação do sistema.

A sequência demonstra visualmente a construção de uma página. Não executa código arbitrário, não usa `eval`, não abre terminal real e não envia solicitações a um serviço de compilação. O código apresentado deve corresponder aos elementos da prévia.

## Interações que têm função

1. **Run:** adianta a digitação e inicia a montagem. Cliques repetidos durante a montagem não criam novos ciclos concorrentes.
2. **Pausar/continuar:** controle discreto disponível durante a sequência, com nome acessível; desaparece ao concluir. Também pausar quando a aba estiver oculta ou a seção sair da viewport.
3. **Rever animação:** reinicia apenas a demonstração, sem alterar nenhum campo do formulário.
4. **Conversar sobre uma ideia:** leva suavemente ao formulário e foca o primeiro campo obrigatório vazio; se os campos já estiverem preenchidos, foca a mensagem. Nunca envia o formulário automaticamente.
5. **Proteção da atenção:** ao começar a preencher o formulário, suspender a animação se ela ainda estiver em andamento. Retomar somente por escolha explícita; a pessoa não precisa assistir para entrar em contato.

Não incluir seletores de tema, desafios de programação ou controles extras nesta versão. A interação deve conduzir à conversa.

## Formulário ao lado

- Manter nome, e-mail, assunto, mensagem e envio direto via `/api/contact`.
- Melhorar hierarquia e espaçamento dos campos, sem mudar validação, proteção antispam ou o comportamento do envio.
- Preservar as mensagens de carregamento, sucesso e falha; manter os dados quando ocorrer erro.
- Um breve destaque do contorno do formulário pode acompanhar o CTA da demonstração; não usar pulsação contínua.
- Nenhum dado pessoal digitado aparece na animação ou no código ilustrativo.
- Manter a configuração de e-mail existente. A animação funciona independentemente do provedor; envio real continua dependendo das credenciais do ambiente. Testes usam respostas simuladas, sem enviar mensagens reais.

## Celular e acessibilidade

- Empilhar introdução, palco compacto e formulário; incluir um link direto para o formulário antes da animação.
- A prévia se adapta à largura disponível, sem diminuir toda a interface até tornar o texto ilegível.
- Run, pausa, repetição e CTA operáveis por teclado e toque, com foco visível e alvos de pelo menos 44 px.
- Remover o `aria-hidden` do contêiner interativo. Ocultar apenas detalhes decorativos, cursor e código animado; oferecer uma descrição estática da demonstração e anunciar somente mudanças importantes, nunca cada caractere.
- Movimento reduzido: mostrar o resultado estático e o CTA, com uma opção explícita para ver a demonstração caso a pessoa queira.
- Sem JavaScript: resultado estático com link âncora para o formulário e alternativa de contato já existente.
- Servidor e primeira renderização do cliente devem ter conteúdo consistente; sem erro de hidratação e sem layout inicialmente invisível.

## Implementação em etapas

1. **Reorganizar a seção.** Ajustar `contact-section.tsx`: cabeçalho comum, duas colunas e destino estável para o formulário. Rever os estilos em `experience.css` sem afetar outras seções.
2. **Separar conteúdo e apresentação.** Criar roteiro e trecho de código em um módulo de conteúdo. Separar editor, prévia e controles em componentes pequenos dentro de `components/contact`.
3. **Controlar a sequência.** Substituir o loop CSS por estados explícitos: digitação, pronto, construção, concluído. Pausa é um estado independente que preserva o progresso. Limpar agendamentos ao desmontar e ao reiniciar.
4. **Animar o editor.** Digitação curta por grupos de caracteres e sintaxe com tokens estáticos; sem dependência pesada de editor de código.
5. **Construir a prévia.** Usar Motion e CSS existentes para montagem progressiva e transições. Unificar a assinatura com a identidade do header/ícone.
6. **Conectar ao formulário.** CTA com rolagem e foco; pausa durante preenchimento; preservar valores em todas as interações da demonstração.
7. **Retirar a versão antiga.** Remover o loop `code-phase`, `code-scroll`, `preview-phase` e classes que não forem mais utilizadas. Documentar o novo componente e seus estados.
8. **Validar.** Conferir desktop/celular, teclado, movimento reduzido, sem JavaScript, navegação de ida/volta e ausência de erro de hidratação. Testar Run antecipado, cliques repetidos, pausa/retomada, replay, foco do CTA e preservação de campos. Revalidar envio, sucesso e falha com API simulada. Executar lint, TypeScript e build.

## Critérios de aceite

- Código é digitado, Run funciona e a landing page se monta de forma perceptível.
- A identidade final é a de Igor, não o símbolo genérico da versão atual.
- A sequência automática termina num convite clicável e não disputa atenção com o preenchimento.
- O formulário está disponível desde o início e permanece utilizável em todas as etapas.
- Nenhuma interação da animação apaga campos, envia e-mail ou rouba foco automaticamente.
- Layout estável, texto legível e funcionamento equivalente por teclado e toque.
- Sem novas bibliotecas para animação ou edição de código.

Escopo: seção de contato da home apresentada na captura. A página `/contato` não precisa ser redesenhada para concluir esta proposta.
