# Verificação da implementação

## Explorador de código público, 29/09/2026

Build, lint, TypeScript e 29 testes aprovados. Cobertura de seleção por teclado sem rede, seletor mobile, ações condicionais, fallback de API, resposta vazia, normalização e conteúdo sem JavaScript. As demonstrações do portfólio, Escoply Web e Ticket System responderam HTTP 200 com títulos correspondentes. Build com acesso ao GitHub validou metadados reais e último push; fallback foi validado separadamente. Capturas desktop/mobile em `docs/qa/repo-explorer-desktop.png` e `docs/qa/repo-explorer-mobile.png`.

## Experiências e produto autoral, 29/09/2026

24 testes aprovados após substituir carrossel/filtros por duas experiências e um produto autoral. Verificados períodos (Mágicos: janeiro de 2026 até o presente; Thux: junho de 2025 a agosto de 2026), rotas preservadas, contribuições, trajetória, Axe, navegação e seis larguras entre 320 e 1440 px. Build com TypeScript e lint aprovados. Revisão visual da seção e do detalhe da Thux em desktop/mobile. Fonte das funções: PDF fornecido; início na Mágicos confirmado diretamente pelo autor.

## Ajuste da faixa e rolagem, 29/09/2026

Removidos controle de pausa e sinais de soma da faixa; margem inferior reduzida a 24 px. Rolagem de âncoras na mesma página usa desaceleração, atualiza URL e foco e cancela ao receber interação manual. Build, lint e 25 testes aprovados, incluindo percurso intermediário da rolagem e navegação pelo menu mobile.

## Revisão de autoplay e apresentação

24 testes passaram após a revisão dos carrosséis, incluindo autoplay com movimento reduzido, continuidade depois da seleção manual, hover e pausa explícita. Build, lint e TypeScript aprovados. Cards do GitHub e demonstração de código/interface revisados em desktop e celular; capturas em `docs/qa/github-cards.png`, `docs/qa/contact-build.png` e `docs/qa/contact-build-mobile.png`.

## Revisão de movimento e contato, 28/09/2026

Build e lint concluídos. **23 testes passaram** no build final, incluindo hidratação com movimento reduzido, reprodução explícita da faixa, alternância automática dos projetos, seleção manual, formulário com sucesso/falha simulados, API com entrada inválida, Axe e responsividade em seis larguras. Nenhum e-mail real foi enviado. Envio em produção depende de `RESEND_API_KEY` e `CONTACT_FROM_EMAIL`.

Capturas e vídeos locais da revisão desktop/mobile: `docs/qa/motion-after/`. GitHub apresentou repositórios reais durante a revisão. O material abaixo preserva o registro da primeira implementação.

Data: 28/09/2026. Ambiente: Windows, Node.js 24.11.1, Next.js 16.3.6 em build de produção e Microsoft Edge headless controlado pelo Playwright.

## Resultados

- Build de produção concluído, com sete rotas e páginas pré-renderizadas.
- TypeScript em modo estrito e ESLint sem erros.
- 16 testes Playwright aprovados.
- Sete rotas por acesso direto, título e H1 único, sem erros JavaScript.
- Home com ordem definida, oito categorias e contatos agrupados.
- Filtros com 3, 1 e 2 casos, foco preservado e repositórios sempre visíveis.
- Menu com foco inicial, Tab contido, Shift+Tab, Escape, botão, backdrop e fechamento ao atingir desktop.
- Menu em viewport de 390 × 400 px, com contato acessível por rolagem interna.
- Hashes de home a partir da própria página e de Contato, com foco no destino.
- Clipboard com sucesso e falha, sem remover o endereço selecionável.
- Slug desconhecido retorna HTTP 404. Removida a configuração `dynamicParams=false` que provocava log interno `NoFallbackError` nesta versão do Next, mantendo validação explícita com `notFound()`.
- Sem overflow horizontal nas sete rotas em 320, 360, 390, 768, 1024 e 1440 px.
- Movimento reduzido e home sem JavaScript com conteúdo e links legíveis.
- Verificação de ampliação CSS em 200%, sem overflow. Esse teste de reflow não substitui a revisão manual de zoom nativo em todos os navegadores.
- Axe nas sete páginas e no menu modal, sem violações automáticas dos conjuntos WCAG A/AA selecionados. Isso não equivale a uma certificação completa de acessibilidade.

## Revisão visual

Capturas em `docs/qa`: home nas seis larguras, páginas internas em 390 e 1440 px e menu em 390 px. Revisadas composição, margens, fotografia, títulos, hierarquia dos projetos, stack, contatos, quebras e ausência de cortes. Os arquivos de estilo da home e dos projetos foram divididos em base e regras responsivas, sem alterar a cascata.

Para reproduzir as capturas, inicie `npm start` após o build e execute `node scripts/visual-review.mjs`.

## Diagnóstico de desempenho

`docs/qa/lab-metrics.json` registra uma passagem local de PerformanceObserver, sem throttling e com movimento reduzido. LCP observado de 32 a 196 ms; CLS observado de 0 nas seis larguras. A proximidade do servidor e o cache favorecem esses números. Não são Core Web Vitals de produção nem dados de usuários. INP de campo não foi medido.

## Verificações ainda externas ao ambiente

Revisão manual com leitor de tela real, testes em Safari/iOS, validação em dispositivos físicos e métricas em hospedagem pública permanecem pendentes. O domínio real, canonical e sitemap serão configurados na etapa de publicação. Nenhuma publicação foi executada.
