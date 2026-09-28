# Decisões de implementação

- O retrato foi extraído do HTML fornecido para um arquivo JPEG em `public/images`. Next Image entrega versões otimizadas. Apenas o retrato acima da dobra recebe preload.
- As páginas são Server Components. Menu, filtros, clipboard, foco de hash e wrappers Motion delimitam as partes cliente.
- Revelações usam `initial={false}` e keyframes de entrada na viewport. O HTML não começa invisível; continua legível se JavaScript falhar.
- Animações do nome e moldura usam CSS; revelações e reorganização usam Motion. O menu usa Radix e entrada CSS. Ao fechar, desmonta imediatamente para evitar foco em conteúdo invisível, uma adaptação de acessibilidade em relação à saída animada sugerida.
- Grupos de stack recebem stagger por par visível, limitado a 45 ms. O movimento usa deslocamento conservador de 6 px também no desktop.
- O catálogo interno é documentação local. Não há rota de administração ou guia publicado.
- Os links externos, a fotografia e os dados estáticos vieram da especificação aprovada. Não foram adicionados resultados, disponibilidade nem informações biográficas.
- As composições de projetos são HTML/CSS com identificação conceitual, preservando o propósito da referência. Thux/Mathux é tratado como experiência.
- Canonical e sitemap aguardam domínio real. Não foi criada URL fictícia de produção.
- A ordem das seções está no DOM. As linhas profissionais agrupam seus metadados para permitir empilhamento no celular sem CSS order.
- A versão instalada de eslint-config-next depende de ESLint 9. O aviso de fim de suporte emitido pelo npm foi registrado; a instalação apresentou zero vulnerabilidades. Uma migração de major exige compatibilidade com a configuração Next.js.
