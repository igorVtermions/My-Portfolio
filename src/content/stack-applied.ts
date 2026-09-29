import { stack } from "./stack";
import { experiences } from "./experiences";
import { escoply } from "./projects";

export const stackAreas = [
  {
    id: "interfaces",
    title: "Interfaces",
    caption: "O ponto de encontro com quem usa.",
    categories: ["Front-end", "Mobile"],
  },
  {
    id: "services",
    title: "Serviços e dados",
    caption: "O que conecta e sustenta o produto.",
    categories: ["Back-end", "Dados"],
  },
  {
    id: "delivery",
    title: "Base e entrega",
    caption: "Da escrita do código à publicação.",
    categories: [
      "Linguagens",
      "Ferramentas e infraestrutura",
      "Qualidade e métodos",
    ],
  },
  {
    id: "ai",
    title: "Inteligência artificial",
    caption: "Uma frente em desenvolvimento.",
    categories: ["Inteligência artificial"],
  },
].map((area) => ({
  ...area,
  groups: area.categories.map((title) =>
    stack.find((group) => group.title === title)!,
  ),
}));

export interface StackApplication {
  description: string;
  works: { name: string; href: string }[];
}

const descriptions: Record<string, string> = {
  "React Native":
    "Desenvolvimento de aplicativos e interfaces mobile, de produtos em construção a aplicações publicadas.",
  React:
    "Construção de interfaces web e componentes reutilizáveis para fluxos de negócio.",
  "Next.js":
    "Desenvolvimento de aplicações web, em produtos autorais e na minha experiência profissional.",
  Expo: "Base de desenvolvimento da aplicação mobile do Escoply, ainda em construção.",
  TypeScript: "Código tipado nas aplicações que compõem meus trabalhos.",
  "Node.js":
    "Desenvolvimento de serviços e integração entre aplicações, APIs e dados.",
  NestJS: "Desenvolvimento de APIs durante minha atuação na Thux / Mathux.",
  Fastify:
    "Parte da stack de serviços do Escoply, meu produto autoral em construção.",
  Supabase:
    "Integração com dados na Mágicos da Limpeza e na arquitetura do Escoply.",
  PostgreSQL: "Banco de dados que compõe a arquitetura do Escoply.",
  AWS: "Atuação com servidores na AWS durante minha passagem pela Thux / Mathux.",
  "CI/CD":
    "Contribuição com integração e entrega contínuas no desenvolvimento da plataforma.",
};
const works = [...experiences, escoply];

// Only expose interactions backed by an explicit technology/work relationship.
export const stackApplications: Record<string, StackApplication> =
  Object.fromEntries(
    Object.entries(descriptions).map(([technology, description]) => [
      technology,
      {
        description,
        works: works
          .filter((work) => work.technologies.includes(technology))
          .map(({ name, href }) => ({ name, href })),
      },
    ]),
  );
