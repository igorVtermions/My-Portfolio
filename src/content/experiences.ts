export interface Experience {
  slug: string;
  name: string;
  href: string;
  role: string;
  engagement?: string;
  scope: string;
  startDate: string;
  endDate: string | null;
  summary: string;
  context: string;
  contributions: string[];
  details: string[];
  technologies: string[];
  outcome: string;
  cta: string;
}

export const experiences: Experience[] = [
  {
    slug: "magicos-da-limpeza",
    name: "Mágicos da Limpeza",
    href: "/projetos/magicos-da-limpeza",
    role: "Software Engineer",
    engagement: "Freelance",
    scope: "Full Stack · Web e mobile",
    startDate: "2026-01",
    endDate: null,
    summary:
      "Construção de uma plataforma de serviços em Portugal, em colaboração com a equipe, desde as primeiras funcionalidades.",
    context:
      "A Mágicos da Limpeza atua com limpeza, manutenção e dedetização em Portugal. Participo desde o início da construção do produto, conectando aplicações web, mobile e back-end aos fluxos da empresa.",
    contributions: [
      "Desenvolvo funcionalidades web com React e mobile com React Native.",
      "Conecto aplicações, APIs e dados com Node.js e Supabase.",
      "Construo componentes reutilizáveis e contribuo com testes e CI/CD.",
    ],
    details: [
      "Colaboro na organização dos fluxos da aplicação e na integração entre interface, serviços e banco de dados.",
      "Participo da evolução e entrega de uma solução que já é utilizada internamente pela empresa.",
    ],
    technologies: [
      "React",
      "React Native",
      "TypeScript",
      "Node.js",
      "Supabase",
      "CI/CD",
    ],
    outcome:
      "Plataforma em uso interno pela empresa, com desenvolvimento em andamento.",
    cta: "Minha atuação na Mágicos",
  },
  {
    slug: "thux-mathux",
    name: "Thux / Mathux",
    href: "/experiencia/thux-mathux",
    role: "Software Engineer",
    scope: "Full Stack · Foco em mobile",
    startDate: "2025-06",
    endDate: "2026-08",
    summary:
      "Atuação em diferentes produtos, com responsabilidade direta pela maioria dos projetos lançados pelo time mobile, do desenvolvimento à produção.",
    context:
      "Na Thux / Mathux, trabalhei em aplicações mobile, web e back-end para diferentes contextos de negócio. Minha atuação incluiu e-commerce, contratação de serviços, gestão financeira, relatórios de visitas técnicas e um aplicativo para uma prefeitura.",
    contributions: [
      "Desenvolvi aplicativos React Native e participei da publicação na Google Play e na App Store.",
      "Construí interfaces com React e Next.js, APIs com Node.js/NestJS e servidores na AWS.",
      "Atuei em componentes, testes unitários e E2E, CI/CD e entregas em produção.",
    ],
    details: [
      "Contribuí para redes sociais com chat por texto e canais de voz ao vivo.",
      "Desenvolvi plataformas web, incluindo dashboards, sistemas CRM e ERP, landing pages e e-commerce.",
      "Participei do ciclo de desenvolvimento, testes e publicação, acompanhando a evolução das funcionalidades.",
    ],
    technologies: [
      "React Native",
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "NestJS",
      "AWS",
    ],
    outcome:
      "Aplicativos publicados e funcionalidades entregues durante minha passagem pela empresa.",
    cta: "Minha experiência na Thux",
  },
];

const months = [
  "jan.",
  "fev.",
  "mar.",
  "abr.",
  "mai.",
  "jun.",
  "jul.",
  "ago.",
  "set.",
  "out.",
  "nov.",
  "dez.",
];

export function formatExperienceDate(date: string) {
  const [year, month] = date.split("-");
  return `${months[Number(month) - 1]} de ${year}`;
}

export function experiencePeriod(experience: Experience) {
  return `${formatExperienceDate(experience.startDate)} até ${experience.endDate ? formatExperienceDate(experience.endDate) : "o presente"}`;
}
