# Contato com identidade — proposta de evolução

Status: reformulação desfeita a pedido do autor. A animação e o formulário anteriores foram restaurados, preservando o ciclo de 30 segundos e a pausa por hover.

## Leitura da seção atual

A home já oferece digitação de código, Run, montagem de uma prévia e formulário funcionalmente conectado à API. O ciclo automático de 30 segundos e a pausa na prévia por hover foram escolhas explícitas do autor e devem permanecer.

A falta de identidade vem sobretudo da linguagem e da composição. Os textos “Sua próxima ideia começa com uma conversa”, “Ideias ganham forma”, “Feito para acontecer” e “Vamos construir o seu próximo passo?” repetem um convite abstrato. As miniaturas de browser e telefone são ilustrativas, sem um contexto específico. A logo aparece, mas a cena poderia ser reutilizada por qualquer profissional. O formulário ocupa uma grande caixa escura com aparência administrativa.

O novo posicionamento deve apresentar Igor como uma pessoa que desenvolve interfaces, aplicativos, serviços, APIs e dados, sem direcionar as oportunidades apenas para mobile.

## Três caminhos possíveis

### A. Mensagem para o Igor — recomendado

Transformar o formulário em uma correspondência pessoal. Acima dos campos, mostrar “Para: Igor Franco”, uma assinatura discreta e o endereço de recebimento vindo do perfil central. O título geral fica curto e direto: **“O que você tem em mente?”**

A animação continua ao lado, mas apresenta um cenário relacionado ao assunto escolhido: projeto, oportunidade ou troca sobre desenvolvimento. Não depende do nome ou da mensagem digitada para criar personalidade.

É o caminho que melhor combina a demonstração já construída com um contato mais humano e útil.

### B. Bancada de desenvolvimento

Apresentar uma composição de editor, resultado e pequena requisição de API, mostrando interface, mobile e back-end juntos. O formulário ocupa uma coluna simples, sem moldura pesada. Maior ênfase técnica, menor ênfase pessoal.

### C. Carta aberta

Um breve convite assinado por Igor domina o lado esquerdo; o formulário parece uma resposta a essa carta. A demonstração se torna menor. Mais autoral e editorial, mas reduz o protagonismo da animação solicitada anteriormente.

## Composição recomendada

### Cabeçalho

- Sobretítulo: Contato.
- Título: **O que você tem em mente?**
- Frase de apoio: **Pode ser um projeto, uma vaga ou uma dúvida sobre desenvolvimento. Me conta o contexto.**
- Evitar títulos gigantes com várias linhas e frases publicitárias duplicadas na prévia.

### Lado esquerdo: uma demonstração com assunto

Manter uma janela de editor, mas substituir os slogans e miniaturas genéricas por um cenário pequeno e reconhecível: uma lista de entregas de um produto, uma interface de aplicativo e uma resposta de API coerente com a mesma ação.

Exemplo para “Um projeto”: o código descreve uma interface que recebe dados de um serviço. Ao executar, o browser mostra “Seu projeto”, uma tela mobile apresenta o mesmo conteúdo e um pequeno trecho `GET /api/project` retorna um objeto ilustrativo. Isso comunica Full Stack por uma ação concreta, sem uma lista de tecnologias ou indicadores inventados.

Os exemplos são demonstrações conceituais, não interfaces ou resultados atribuídos à Mágicos, à Thux ou ao Escoply.

A cena final usa uma assinatura pequena `igor franco /`, com o monograma IF. integrado ao cabeçalho. Evitar o monograma flutuante como único elemento de personalidade.

O link **“Outros canais de contato”** continua disponível na cena final e abre `/contato`. Não reintroduzir telefone, bloco de WhatsApp ou links de contato no footer/home fora do que já foi autorizado.

### Lado direito: mensagem pessoal

- Uma superfície sutil, menos contraste e menos borda do que a caixa atual.
- Cabeçalho “Para: Igor Franco”, com o e-mail do perfil central e assinatura tipográfica. Sem avatar adicional para repetir a foto do Sobre.
- Nome e e-mail continuam lado a lado no desktop.
- Trocar o select por três opções visíveis: **Projeto**, **Oportunidade** e **Troca de ideias**. Usar radios nativos estilizados, com `fieldset` e `legend`.
- Mapear os rótulos curtos aos valores atualmente aceitos pela API: “Um projeto”, “Uma oportunidade” e “Uma troca sobre desenvolvimento”.
- Campo principal: **“Me conta um pouco mais”**. O placeholder muda por assunto, mas o conteúdo digitado nunca é substituído.
- Projeto: “O que você quer desenvolver e em que etapa está?”
- Oportunidade: “Qual é a função, o time e o contexto da oportunidade?”
- Troca de ideias: “Sobre o que você quer conversar?”
- Envio: **“Enviar para o Igor”**. Sucesso: **“Recebi sua mensagem por aqui. Obrigado pelo contato!”** apenas se a API confirmar envio; não afirmar leitura, resposta ou prazo. Uma alternativa mais precisa é “Mensagem enviada para o Igor. Obrigado pelo contato!”.

Não usar status “online”, promessa de retorno em 24 horas, disponibilidade para vagas ou localização sem informação confirmada.

## Integração entre assunto e animação

O assunto é um único estado compartilhado entre a demonstração e o formulário. A versão inicial terá três roteiros curtos:

| Assunto | Código e resultado | Personalização |
| --- | --- | --- |
| Projeto | Interface, mobile e uma resposta de API referentes ao mesmo pequeno produto. | Mostra a atuação Full Stack. |
| Oportunidade | Componentes e serviço conectados numa entrega pequena e legível. | Destaca colaboração técnica, sem simular currículo ou experiência nova. |
| Troca de ideias | Trecho de componente com uma alteração de estado que aparece na interface. | Cria uma cena mais leve de desenvolvimento. |

Os três roteiros devem mudar conteúdo e um aspecto visível da cena, sem criar três grandes layouts independentes. Evitar construção de um miniaplicativo completo dentro do portfólio.

Ao mudar o assunto, guardar o novo roteiro para o próximo ciclo. A animação continua suspensa enquanto o formulário tiver foco, conforme o comportamento atual. Não reiniciar a demonstração a cada tecla, alterar campos ou disputar atenção com a escrita.

## Movimento e interação

- Preservar autoplay de 30 segundos, Run funcional e ausência de botão Pausar/Ver animação.
- Preservar pausa por mouse/foco apenas depois da construção concluída, além da suspensão fora da viewport e com aba oculta.
- Entrada dos elementos com opacidade e pequenos deslocamentos; hover e foco com duração de entrada e saída consistente.
- Não adicionar partículas, digitação de slogans, gradientes pulsantes ou efeitos de mouse decorativos.
- O resultado deve ser legível e útil quando está parado.
- Manter conteúdo inicial consistente entre servidor e cliente e alternativa estática sem JavaScript.

## Plano de ação

1. **Revisar a escrita.** Centralizar títulos, rótulos, placeholders e roteiros em conteúdo tipado. Aplicar linguagem direta em toda a home de contato.
2. **Refinar a composição.** Ajustar cabeçalho, colunas e superfície do formulário. Usar alinhamento e espaço proporcionais ao conteúdo, sem esticar os campos para igualar alturas.
3. **Melhorar o formulário.** Adicionar cabeçalho pessoal e radios de assunto; preservar nomes de campos, validação, envio, antispam e tratamento de falhas. Não alterar dados de contato no `.env`.
4. **Criar as cenas Full Stack.** Evoluir `DemoSite` e `DemoEditor` com uma ação de produto coerente entre interface e serviço. Reutilizar a marca existente e componentes pequenos em vez de aumentar um arquivo monolítico.
5. **Compartilhar o assunto.** Ajustar `ContactExperience` para coordenar o formulário e os roteiros, com troca no próximo ciclo e preservação de campos e foco.
6. **Tratar o celular.** Empilhar a animação e a mensagem com áreas de toque confortáveis. Garantir legibilidade do código, sem diminuir toda a cena até torná-la microscópica.
7. **Alinhar a página `/contato`.** Fazer uma revisão visual e textual mais leve: mesma linguagem pessoal, e-mail com copiar e canais atuais. Não duplicar a animação nem criar um segundo formulário sem necessidade.
8. **Validar.** Conferir radios por teclado, foco, assunto enviado à API, mudança de placeholder sem perda de mensagem, ciclo, hover, montagem, celular e conteúdo sem JavaScript. Testar sucesso/falha com respostas simuladas. Executar lint, TypeScript e build e revisar capturas.
9. **Atualizar a documentação.** Registrar a direção final e retirar descrições antigas de CTA e formulário nos documentos do projeto.

## Critérios de aceite

- A seção parece uma mensagem para Igor, com sua marca e linguagem direta.
- A cena demonstra interface e back-end conectados, além de mobile, sem preferência exclusiva por uma área.
- Não há slogans repetidos ou resultados profissionais inventados.
- O assunto escolhido tem efeito visível e mantém compatibilidade com a API atual.
- Todas as interações preservam o que foi digitado.
- Não reaparecem os controles e textos anteriormente removidos.
- A composição funciona no desktop e no celular com teclado, toque e mouse.

O conteúdo acima permanece apenas como registro da proposta descartada; não descreve a interface atual.
