import { readFileSync, writeFileSync } from "node:fs";

// A cópia de referência preserva a especificação completa anterior à revisão.
let text = readFileSync("outputs/ESPECIFICACAO_PORTFOLIO.md", "utf8");
text = text.replace("Não transformar em carrossel ou marquee que esconda itens.", "Implementar faixa horizontal contínua com pausa manual, pausa por hover/foco e suspensão fora da viewport e com aba oculta. Com movimento reduzido ou sem JavaScript, todos os itens ficam legíveis em apresentação estática.");
text = text.replace("Categorias numeradas, descrição curta e etiquetas de tecnologia.", "Categorias sem numeração decorativa, descrição curta e etiquetas de tecnologia.");
text = text.replace("linhas numeradas", "linhas sem numeração decorativa").replace("Entradas numeradas:", "Entradas sem numeração decorativa:").replace("carrossel automático, ", "");
const start = text.indexOf("### 11.1 Tokens de movimento");
const end = text.indexOf("### 11.3 Implementação das animações");
if (start < 0 || end < start) throw new Error("Seções da especificação não encontradas.");
text = text.slice(0, start) + `### 11.1 Tokens de movimento

Revisão aprovada por Igor: resposta de 200 ms, transição base de 320 ms, revelação de 600 ms, composição inicial de até 650 ms, stagger de 65 ms limitado a 240 ms por grupo. Curva [0.22, 1, 0.36, 1]. Deslocamentos de até 24 px no desktop e 12 px no celular. Conteúdo inicial legível antes da hidratação.

### 11.2 Mapa de movimento revisado

- Abertura com entrada coordenada de nome, texto, ações e moldura.
- Botões com preenchimento animado, seta de até 5 px e resposta ao pressionar. Links com sublinhado animado e foco equivalente.
- Faixa de tecnologias em movimento contínuo a 32 px/s, com controle de pausa e alternativas estáticas acessíveis.
- Seções principais com separadores consistentes e revelação da linha uma vez na viewport.
- Sobre mim, grupos de stack, linhas profissionais e repositórios com entradas escalonadas.
- Fotografia e composição conceitual com deslocamento de até 10 px vinculado à rolagem no desktop; estáticos no mobile.
- Filtros com indicador deslizante, entrada, saída e reorganização; itens removidos ficam inert.
- Linha do tempo com marco ativo e progressão pela rolagem.
- Contatos com entrada coordenada; clipboard com troca de ícone e status textual.
- Menu com entrada e saída do painel e fundo, sequência curta nos links e navegação imediata. Nenhum elemento em saída pode receber interação.
- Entrada leve na navegação de rotas, sem bloquear conteúdo nem links.
- Reduced motion remove deslocamentos, loops e stagger. Todas as informações continuam acessíveis.

` + text.slice(end);
text += `
## 21. Revisão aprovada: movimento e limpeza visual

Igor aprovou o plano em docs/plano-evolucao-visual.md: remover numeração ornamental de seções, cards, categorias e menu; padronizar linhas de separação; aumentar a presença das animações e colocar a faixa de tecnologias em movimento. Datas, telefone, contagens e código 404 são preservados. Esta revisão substitui a direção anterior de faixa estática e as amplitudes antigas do mapa de movimento.
`;
writeFileSync("ESPECIFICACAO_PORTFOLIO.md", text);
