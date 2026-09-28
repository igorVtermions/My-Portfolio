export type ProjectCategory = "Autoral" | "Profissional";
export interface Project {
  slug: string;
  name: string;
  href: string;
  category: ProjectCategory;
  title: [string, string];
  role: string;
  period?: string;
  status: string;
  summary: string;
  context: string;
  contribution: string;
  technologies: string[];
  currentState: string;
  repositoryNames: string[];
  conceptualImage: true;
}

export const projects: Project[] = [
  {
    slug: "escoply",
    name: "Escoply",
    href: "/projetos/escoply",
    category: "Autoral",
    title: ["Organizar o trabalho.", "Abrir espaço para criar."],
    role: "Produto autoral",
    status: "Em construção",
    summary:
      "Clientes, escopos, aprovações e prazos no mesmo lugar. Um SaaS pensado para a rotina de quem trabalha por conta própria.",
    context:
      "Freelancers precisam acompanhar clientes, projetos, escopos, orçamentos, aprovações, materiais e prazos. O Escoply reúne essas frentes em uma plataforma web e mobile.",
    contribution:
      "Desenvolvimento do produto autoral e de sua arquitetura web e mobile, incluindo prazos e lembretes. O acesso aos dados utiliza Row Level Security.",
    technologies: [
      "Next.js",
      "React Native",
      "Expo",
      "TypeScript",
      "Node.js",
      "Fastify",
      "Supabase",
      "PostgreSQL",
    ],
    currentState:
      "O produto está em construção e em testes com usuários convidados. Um chatbot com LLM e conceitos de RAG está em desenvolvimento.",
    repositoryNames: ["escoply-web", "escoply-mobile"],
    conceptualImage: true,
  },
  {
    slug: "magicos-da-limpeza",
    name: "Mágicos da Limpeza",
    href: "/projetos/magicos-da-limpeza",
    category: "Profissional",
    title: ["Conectar serviços.", "Conectar as pontas."],
    role: "Full Stack Freelance",
    period: "Janeiro de 2026 até atual",
    status: "Uso interno",
    summary:
      "Web, aplicativo e integrações para uma empresa de serviços em Portugal. Uma construção em colaboração.",
    context:
      "A Mágicos da Limpeza atua com serviços de limpeza, manutenção e dedetização em Portugal. As aplicações conectam as frentes de operação da empresa.",
    contribution:
      "Participação conjunta desde o início, no desenvolvimento da web, do aplicativo e do back-end. Colaboração em integrações, testes e CI/CD para acompanhar as entregas.",
    technologies: [
      "React",
      "React Native",
      "Node.js",
      "Supabase",
      "Testes",
      "CI/CD",
    ],
    currentState:
      "As aplicações estão em uso interno pela empresa. A atuação freelance começou em janeiro de 2026 e permanece atual conforme o currículo.",
    repositoryNames: [],
    conceptualImage: true,
  },
  {
    slug: "thux-mathux",
    name: "Thux / Mathux",
    href: "/experiencia/thux-mathux",
    category: "Profissional",
    title: ["Construir. Testar.", "Colocar no mundo."],
    role: "Desenvolvedor Full Stack",
    period: "Junho de 2025 a agosto de 2026",
    status: "Experiência profissional",
    summary:
      "Produtos web e mobile, APIs e responsabilidade direta por entregas do time mobile.",
    context:
      "Experiência profissional em diferentes produtos: e-commerce, serviços, gestão financeira, relatórios de visitas técnicas, aplicativo para prefeitura, redes sociais com chat e canais de voz, dashboards, CRM, ERP e landing pages.",
    contribution:
      "Responsabilidade direta pela maioria dos projetos lançados pelo time mobile, do desenvolvimento aos testes e à publicação. Atuação também em interfaces web, APIs, testes unitários, testes E2E e CI/CD.",
    technologies: [
      "React",
      "Next.js",
      "React Native",
      "Node.js",
      "NestJS",
      "AWS",
      "Testes unitários",
      "Testes E2E",
      "CI/CD",
    ],
    currentState:
      "Atuação de junho de 2025 a agosto de 2026. Esta página apresenta a experiência na empresa, não um produto único. Detalhes confidenciais e nomes de clientes não são publicados.",
    repositoryNames: [],
    conceptualImage: true,
  },
];
