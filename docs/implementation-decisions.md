# Decisões de implementação

- O retrato foi extraído do HTML fornecido para um arquivo JPEG em `public/images`. Next Image entrega versões otimizadas. Apenas o retrato acima da dobra recebe preload.
- As páginas são Server Components. Menu, filtros, clipboard, foco de hash e wrappers Motion delimitam as partes cliente.
- Revelações usam `initial={false}` e keyframes de entrada na viewport. O HTML não começa invisível; continua legível se JavaScript falhar.
- Animações do nome e moldura usam CSS; revelações e reorganização usam Motion. O menu usa Radix, entrada e saída CSS e `inert` durante a saída. Navegação desmonta o menu sem esperar a saída.
- Grupos de stack recebem stagger por par visível. Deslocamentos e tempos ficam nos tokens; telas compactas usam amplitudes menores. Textos mantêm opacidade suficiente durante a entrada.
- Preferência de movimento usa `useSyncExternalStore` com snapshot inicial estável. Cada efeito aplica a preferência; `MotionConfig` não tenta detectar novamente a configuração na montagem. Isso evita mismatch de hidratação e o aviso de desenvolvimento, preservando reprodução explícita dos carrosséis.
- A API de contato usa Resend no servidor e depende de chave e remetente verificado. Os testes não enviam mensagens reais. GitHub usa API pública com revalidação horária e fallback editorial.
- O catálogo interno é documentação local. Não há rota de administração ou guia publicado.
- Os links externos, a fotografia e os dados estáticos vieram da especificação aprovada. Não foram adicionados resultados, disponibilidade nem informações biográficas.
- As composições de projetos são HTML/CSS com identificação conceitual, preservando o propósito da referência. Thux/Mathux é tratado como experiência.
- Canonical e sitemap aguardam domínio real. Não foi criada URL fictícia de produção.
- A ordem das seções está no DOM. As linhas profissionais agrupam seus metadados para permitir empilhamento no celular sem CSS order.
- A versão instalada de eslint-config-next depende de ESLint 9. O aviso de fim de suporte emitido pelo npm foi registrado; a instalação apresentou zero vulnerabilidades. Uma migração de major exige compatibilidade com a configuração Next.js.
