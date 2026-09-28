export interface StackCategory {
  title: string;
  description: string;
  items: readonly string[];
  note?: string;
}

export const stack: readonly StackCategory[] = [
  {
    title: "Mobile",
    description: "Aplicativos e recursos nativos.",
    items: ["React Native", "Expo"],
  },
  {
    title: "Front-end",
    description: "Interfaces e aplicações web.",
    items: ["React", "Next.js", "HTML", "CSS", "SCSS", "Tailwind CSS"],
  },
  {
    title: "Back-end",
    description: "Serviços, APIs e integrações.",
    items: ["Node.js", "NestJS", "Express.js", "Fastify", "Spring Boot"],
  },
  {
    title: "Dados",
    description: "Persistência e acesso aos dados.",
    items: ["Supabase", "PostgreSQL", "MySQL", "MongoDB", "NoSQL"],
    note: "MongoDB consta na formação complementar; NoSQL é a categoria de bancos.",
  },
  {
    title: "Linguagens",
    description: "A base das minhas aplicações.",
    items: ["JavaScript", "TypeScript", "Java"],
  },
  {
    title: "Ferramentas e infraestrutura",
    description: "Versionamento, infraestrutura e entrega.",
    items: ["Git", "GitHub", "AWS", "CI/CD"],
  },
  {
    title: "Qualidade e métodos",
    description: "Práticas que acompanham o desenvolvimento.",
    items: ["Testes unitários", "Testes E2E", "Clean Code", "Scrum", "Kanban"],
  },
  {
    title: "Inteligência artificial",
    description: "Integrações e recursos em evolução.",
    items: ["APIs de IA", "Engenharia de prompts", "LLM", "RAG"],
    note: "Chatbot com LLM e conceitos de RAG em desenvolvimento no Escoply.",
  },
];
