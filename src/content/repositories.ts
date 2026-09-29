import { profile } from "./profile";

export interface Repository {
  name: string;
  title: string;
  href: string;
  description?: string;
  language?: string;
  platform?: string;
  technologies: string[];
  highlights: string[];
  topics: string[];
  pushedAt?: string;
  defaultBranch?: string;
  demoUrl?: string;
  featured?: boolean;
}

// Conteúdo verificado nos READMEs públicos em 29/09/2026.
export const repositoryEditorial: Record<string, Partial<Repository>> = {
  "escoply-web": {
    title: "Escoply Web",
    demoUrl: "https://escoply-web.vercel.app",
    platform: "Web · Produto autoral",
    featured: true,
    description:
      "A frente web do Escoply conecta clientes, projetos e a rotina financeira de freelancers em uma aplicação com área autenticada.",
    technologies: ["Next.js", "TypeScript", "Supabase"],
    highlights: [
      "Autenticação e sessões com Supabase",
      "Gestão de clientes, projetos e orçamentos",
      "Agenda, materiais e recebimentos",
    ],
  },
  "escoply-mobile": {
    title: "Escoply Mobile",
    platform: "Mobile · Em desenvolvimento",
    description:
      "A frente mobile do produto autoral. A base com Expo Router e as telas iniciais de autenticação preparam a experiência para freelancers.",
    technologies: ["React Native", "Expo", "TypeScript"],
    highlights: [
      "Estrutura de navegação com Expo Router",
      "Interfaces de login e cadastro",
      "Módulos de gestão no roadmap",
    ],
  },
  nutritrack: {
    title: "NutriTrack",
    platform: "Mobile · MVP",
    description:
      "Aplicativo de registro de refeições, histórico e metas pessoais. Um MVP front-end com dados no dispositivo, sem login ou back-end.",
    technologies: ["React Native", "Expo", "TypeScript"],
    highlights: [
      "Diário alimentar e histórico",
      "Persistência local com AsyncStorage",
      "Edição, exclusão e desfazer registros",
    ],
  },
  "My-Portfolio": {
    title: "Meu portfólio",
    demoUrl: "https://my-portfolio-igor-franco.vercel.app/",
    platform: "Web · Portfólio",
    description:
      "O código deste portfólio: experiências profissionais, produto autoral e integrações, com identidade visual própria e componentes reutilizáveis.",
    technologies: ["Next.js", "React", "TypeScript"],
    highlights: [
      "Páginas com Next.js App Router",
      "Interface responsiva e navegação acessível",
      "Animações e integração com o GitHub",
    ],
  },
  "ticket-system": {
    title: "Ticket System",
    demoUrl: "https://ticket-system-ryl1.vercel.app",
    platform: "Web · Teste técnico",
    description:
      "Aplicação de gerenciamento de chamados criada para um teste técnico, com foco em componentização, responsividade e acessibilidade.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    highlights: [
      "Listagem e filtro de chamados",
      "Alteração de status e comentários",
      "Detalhes de tickets em modal",
    ],
  },
  "fit-life": {
    title: "Fit Life",
    platform: "Web",
    description:
      "Projeto web com Next.js e TypeScript. O README reúne instruções para executar a aplicação e explorar sua estrutura.",
    technologies: ["Next.js", "TypeScript"],
  },
};

export const excludedRepositories = new Set(["igorvtermions"]);
export const repositories: Repository[] = [
  "escoply-web",
  "My-Portfolio",
  "nutritrack",
  "escoply-mobile",
  "fit-life",
  "ticket-system",
].map((name) => ({
  name,
  title: name,
  href: `${profile.github}/${name}`,
  topics: [],
  technologies: [],
  highlights: [],
  ...repositoryEditorial[name],
}));

export function repositoryDate(value: string) {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(value));
}
