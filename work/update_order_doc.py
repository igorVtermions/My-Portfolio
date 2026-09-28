from pathlib import Path
p=Path('outputs/design.md')
s=p.read_text(encoding='utf-8')
s+='\n\n## 9. Ordem da home e agrupamento de contatos\n\nOrdem final: apresentação, Sobre mim, Minha stack, projetos selecionados, repositórios públicos e Contatos. Sobre mim e Minha stack aparecem antes dos projetos tanto no desktop quanto no celular.\n\nO bloco de telefone e WhatsApp fica dentro da seção Contatos da home, junto do convite para conversar. Na tela Contato, também faz parte da seção principal de contato, sem bloco independente.\n'
p.write_text(s,encoding='utf-8')
