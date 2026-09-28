from pathlib import Path
p=Path('outputs/design.md')
s=p.read_text(encoding='utf-8-sig').replace('Proposta 02','Proposta 03').replace('O telefone permanece fora da composição.','Telefone e WhatsApp: (21) 97488-5166, conforme o currículo. Links tel:+5521974885166 e https://wa.me/5521974885166.').replace('Menu mobile expansível nativo','Menu mobile em diálogo modal nativo').replace('O bloco lilás de história conecta experiência profissional e produto autoral.','O Sobre mim apresenta trajetória, formação, foco mobile e projetos atuais. A seção Minha stack reúne oito grupos de tecnologias e práticas.').replace('Bloco lilás para história e índice de repositórios públicos.','Sobre mim dedicado, stack completa e índice de repositórios públicos.').replace('Nome, foco e bloco de história','Nome, foco e destaques').replace('bloco de história cria ritmo','seção de história cria ritmo').replace('bloco de história','seção de história')
s+='''

## 8. Ampliação da home e navegação mobile

O Sobre mim permanece na home, com formação em ADS, freelance desde 2023, atuação na Thux/Mathux, colaboração na Mágicos da Limpeza e construção do Escoply. A página Minha história continua disponível para aprofundamento.

A seção Minha stack apresenta todos os itens técnicos do currículo, com MongoDB incluído pela formação complementar:

| Grupo | Tecnologias e práticas |
|---|---|
| Mobile | React Native, Expo |
| Front-end | React, Next.js, HTML, CSS, SCSS, Tailwind CSS |
| Back-end | Node.js, NestJS, Express.js, Fastify, Spring Boot |
| Dados | Supabase, PostgreSQL, MySQL, MongoDB, NoSQL |
| Linguagens | JavaScript, TypeScript, Java |
| Ferramentas e infraestrutura | Git, GitHub, AWS, CI/CD |
| Qualidade e métodos | Testes unitários, testes E2E, Clean Code, Scrum, Kanban |
| Inteligência artificial | APIs de IA, engenharia de prompts, LLM, RAG |

Não há níveis ou percentuais inventados. A documentação indica que MongoDB consta na formação complementar, NoSQL é uma categoria e o chatbot com LLM/RAG está em desenvolvimento no Escoply.

Telefone e WhatsApp aparecem na home, na tela de contato, no rodapé e no painel mobile. O link de WhatsApp abre uma conversa; não envia mensagem automaticamente.

O menu mobile usa um painel modal escuro com fundo atenuado, alvos amplos, numeração e indicação de página atual. Entradas: Início, Projetos, Sobre mim, Minha stack, Minha história e Contato. Sobre mim e Minha stack levam à seção correspondente da home, inclusive a partir de outras telas.

O botão Menu possui rótulo, estado expandido e referência ao diálogo. Ao abrir, o foco vai para Fechar e permanece no diálogo pela semântica modal nativa. Fechar, Escape ou clique fora do painel encerram o menu. O foco retorna ao acionador; ao escolher uma seção, vai para o conteúdo de destino. A rolagem de fundo fica bloqueada. Em telas baixas, o painel tem rolagem própria. Ao retornar à largura desktop, o diálogo fecha.

Mantidos os 12 SVGs. O ícone close passa a ser usado no botão Fechar. Contatos de telefone e WhatsApp usam textos explícitos com as setas existentes, sem adicionar marcas externas.
'''
p.write_text(s,encoding='utf-8')
