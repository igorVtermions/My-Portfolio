# Dependências e origens

Não foi copiado código de templates, Magic UI ou outros catálogos. Componentes visuais foram escritos para este projeto, com base no protótipo fornecido. Os 12 SVGs e o retrato vieram dos materiais locais de Igor.

| Biblioteca        | Versão | Licença    | Origem e uso                                                                                                 |
| ----------------- | ------ | ---------- | ------------------------------------------------------------------------------------------------------------ |
| Next.js           | 16.3.6 | MIT        | https://nextjs.org/docs/app/getting-started/installation · rotas, SSR, imagens e metadados                   |
| React / React DOM | 19.3.0 | MIT        | https://react.dev · composição e interações                                                                  |
| Motion            | 13.4.4 | MIT        | https://motion.dev/docs/react-accessibility · revelações, layout dos filtros e preferência de movimento      |
| Radix Dialog      | 1.1.23 | MIT        | https://www.radix-ui.com/primitives/docs/components/dialog · foco, modal, Escape e fechamento externo        |
| Tailwind CSS      | 4.3.3  | MIT        | https://tailwindcss.com/docs/installation/framework-guides/nextjs · tema integrado aos tokens e pipeline CSS |
| Playwright        | 1.63.0 | Apache-2.0 | https://playwright.dev · testes de navegador                                                                 |

O verificador `@axe-core/playwright` 4.13.0, licença MPL-2.0, é usado apenas nos testes de acessibilidade. Origem: https://github.com/dequelabs/axe-core-npm.

Simple Icons 16.33.0 fornece os SVGs das tecnologias, importados nominalmente. Origem: https://simpleicons.org. O pacote usa CC0-1.0; marcas e orientações individuais continuam pertencendo aos seus titulares. Conceitos sem marca usam símbolos tipográficos locais.

As licenças dos pacotes instalados permanecem em `node_modules` e suas versões exatas em `package-lock.json`. Nenhuma biblioteca fornece a identidade visual; todos os estilos seguem o design local. GSAP não foi instalado porque os efeitos implementados não precisam de um segundo motor.
