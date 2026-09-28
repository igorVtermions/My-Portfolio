import { projects } from "./projects";

export const timeline = [
  {
    title: "Formação e primeiros projetos",
    period: "2023",
    description:
      "Conclusão do Tecnólogo em Análise e Desenvolvimento de Sistemas na Universidade Unopar e início da atuação em desenvolvimento web freelance.",
  },
  ...projects
    .filter((project) => project.period)
    .reverse()
    .map((project) => ({
      title: project.name,
      period: project.period,
      description: project.contribution,
    })),
  {
    title: "Escoply",
    period: "Produto autoral em construção",
    description: projects[0].currentState,
  },
];
