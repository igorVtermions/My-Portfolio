# Verificação da implementação

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
