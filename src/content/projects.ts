export interface Project {
  slug: string;
  name: string;
  href: string;
  title: [string, string];
  role: string;
  status: string;
  summary: string;
  context: string;
  contribution: string;
  technologies: string[];
  currentState: string;
  repositoryNames: string[];
}

export const escoply: Project = {
  slug: "escoply",
  name: "Escoply",
  href: "/projetos/escoply",
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
};

export const projects: Project[] = [escoply];
