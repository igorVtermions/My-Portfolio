# Plano — Página de contato pessoal

Status: implementado após aprovação do autor.

## Escopo confirmado

Alterar exclusivamente a página `/contato`, mostrada na captura do autor. A seção com animação e formulário da home, seus componentes compartilhados e seu comportamento atual ficam fora desta reformulação.

Este plano substitui a interpretação anterior de que a solicitação se referia à home. A proposta descartada está registrada em `plano-contato-com-identidade.md`.

## Diagnóstico

- O título de até 120 px domina a primeira tela, deixando um grande espaço sem conteúdo à direita.
- E-mail, WhatsApp, telefone e redes aparecem em blocos separados, com hierarquia e alinhamentos distintos.
- O endereço de e-mail recebe destaque, mas não há uma composição que apresente esses canais como contato com uma pessoa específica.
- WhatsApp e ligação dividem atenção; GitHub e LinkedIn ficam numa faixa final que parece um footer.
- A cópia do e-mail já tem feedback e tratamento de falha; esse comportamento útil deve ser aproveitado.
- A identidade preto/lilás e a assinatura do site são suficientes para criar uma página própria sem depender de ilustrações genéricas.

## Conceito recomendado: Pode me chamar

Uma página de contato direta, com a presença de Igor e canais bem organizados. O propósito é permitir que a pessoa escolha como conversar, sem atravessar uma longa apresentação.

### Abertura

Desktop com duas áreas:

- À esquerda, sobretítulo **Contato**, título **Pode me chamar.** e texto **Para falar de um projeto, uma vaga ou trocar uma ideia sobre desenvolvimento.**
- À direita, uma assinatura visual compacta com o monograma **IF.**, nome **Igor Franco** e identificação **Desenvolvedor Full Stack**. Reutilizar a marca existente; não inventar uma nova logo.
- Tipografia do título entre aproximadamente 48 e 72 px, ajustada à largura. A abertura não deve empurrar os canais para a segunda tela num desktop comum.
- A assinatura pode usar um recorte gráfico lilás, linha de conexão e contraste de escala. Evitar uma grande caixa com espaços vazios e um segundo título promocional.

### Canais principais

Uma composição com dois blocos de tamanhos proporcionais ao conteúdo:

**E-mail — destaque principal**

- Ícone de envelope, rótulo E-mail e endereço completo, selecionável e com quebra segura.
- Frase curta: **Me escreva com o contexto do projeto ou da oportunidade.**
- Ação principal **Escrever um e-mail** e ação secundária **Copiar endereço**.
- Ao copiar, mostrar confirmação próxima do botão, sem alterar o tamanho do bloco.

**WhatsApp — alternativa direta**

- Ícone reconhecível, rótulo WhatsApp e número do perfil central.
- Frase curta: **Prefere começar por uma mensagem?**
- Ação **Conversar no WhatsApp**.
- **Ligar** fica como link secundário discreto junto ao número, em vez de competir com o WhatsApp.

Os blocos podem ter uma borda sutil e ícones lilás. O e-mail deve ganhar destaque por composição, sem transformar todos os canais em botões roxos grandes. Não igualar alturas artificialmente se isso criar grandes vazios.

### Canais complementares

Logo abaixo, duas linhas compactas, com ícone, nome, indicação de finalidade e seta:

- **LinkedIn** — Perfil profissional.
- **GitHub** — Projetos e código público.

Essas linhas fazem parte da composição de contato, sem aparência de um novo footer. Não adicionar descrições longas, contadores, numeração ou selos.

## Personalidade e movimento

- Assinatura e monograma IF. coerentes com o header e o ícone atual do site.
- Texto em primeira pessoa, curto, sem “ideias ganham forma”, “próximo passo” ou promessas de transformação.
- Entrada discreta da abertura e dos canais, uma vez ao chegar à página.
- Hover e foco com mudança de fundo/contorno e deslocamento pequeno da seta; duração consistente de entrada e saída entre 200 e 300 ms.
- Ícones com um pequeno movimento vinculado à interação do respectivo canal, sem animação infinita.
- Feedback de cópia com transição curta; tamanho reservado apenas para essa mensagem, sem grande área vazia.
- Respeitar movimento reduzido nesta página. A exceção de autoplay solicitada para a animação da home não se aplica a `/contato`.

Não mostrar “online”, disponibilidade para vagas, prazo de resposta, localização ou quantidade de mensagens sem confirmação do autor.

## Funcionamento

- E-mail abre o aplicativo de e-mail via `mailto:`; o visitante pode copiar o endereço caso não tenha aplicativo configurado.
- WhatsApp, ligação, LinkedIn e GitHub usam os URLs já definidos em `src/content/profile.ts`.
- WhatsApp pode abrir sem mensagem predefinida para não impor assunto. Não enviar nenhuma mensagem automaticamente.
- Novos ícones devem vir da infraestrutura SVG/ícones existente, com nomes acessíveis no controle pai.
- Links externos mantêm proteção e indicação visual consistentes com os componentes atuais.
- A página funciona sem JavaScript para todos os links. A cópia oferece falha legível e mantém o endereço selecionável.
- Não adicionar outro formulário nem duplicar a animação da home.

## Plano de implementação

1. **Reestruturar `/contato`.** Alterar o layout de `src/app/contato/page.tsx` para abertura compacta, canais principais e complementares. Manter um único H1 e títulos de grupos semanticamente corretos.
2. **Criar a assinatura.** Usar nome, função Full Stack e monograma existentes numa composição exclusiva desta página.
3. **Compor os canais.** Criar componentes pequenos específicos da página, se necessário, reutilizando `ActionLink`, ícones e perfil central. Não modificar o visual da home por meio de seletores globais.
4. **Refinar a cópia.** Permitir rótulo apropriado na página sem alterar outros usos de `CopyEmail`. Preservar sucesso, falha, anúncio de status e limpeza de timers.
5. **Aplicar estilos próprios.** Isolar em um arquivo de estilos para a página; retirar regras antigas apenas quando não houver outros consumidores. Evitar mudar `.page-title`, `.actions` ou `.email` globalmente.
6. **Adicionar movimento.** Reutilizar Motion, Reveal e tokens existentes. Nenhuma nova biblioteca é necessária.
7. **Adaptar ao celular.** Abertura e assinatura se empilham; canais ficam em uma coluna, links complementares continuam legíveis. Alvos de toque de pelo menos 44 px; e-mail completo sem overflow em 320 px.
8. **Validar.** Conferir desktop e celular, teclado/foco, cópia permitida e negada, destinos corretos dos canais, ausência de JavaScript, movimento reduzido e acessibilidade. Revisar capturas; executar TypeScript, lint e build.
9. **Documentar.** Atualizar README e design system com a composição final aprovada, explicitando o escopo `/contato`.

## Critérios de aceite

- Canais principais aparecem cedo, sem uma tela inteira dominada pelo título.
- A página tem identidade pessoal e mantém coerência com o restante do site.
- E-mail e WhatsApp são fáceis de encontrar; ligação, LinkedIn e GitHub ficam acessíveis com hierarquia clara.
- Botões, links e feedback de cópia têm interações suaves e funcionam por teclado.
- Não há vazios artificiais, repetição de slogans ou informações pessoais inventadas.
- A seção de contato da home permanece como está.

Implementação concluída em `/contato`: abertura compacta com assinatura IF., canais principais de e-mail e WhatsApp, e links complementares para LinkedIn e GitHub. Os estilos estão isolados em `contact-directory.css`. `CopyEmail` aceita um rótulo opcional e preserva o feedback de sucesso e falha. A seção da home não foi alterada nesta etapa.

Validação: lint, TypeScript e build aprovados; teste de clipboard aprovado; revisão visual em desktop e celular, sem overflow em 320, 390 e 768 px; destinos dos links conferidos.
