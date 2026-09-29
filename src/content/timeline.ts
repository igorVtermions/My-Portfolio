import { escoply } from "./projects";
import { experiences, experiencePeriod } from "./experiences";

export const timeline = [
  {
    title: "Formação e primeiros projetos",
    period: "2023",
    description:
      "Conclusão do Tecnólogo em Análise e Desenvolvimento de Sistemas na Universidade Unopar e início da atuação em desenvolvimento web freelance.",
  },
  ...[...experiences]
    .sort((a, b) => a.startDate.localeCompare(b.startDate))
    .map((experience) => ({
      title: experience.name,
      period: experiencePeriod(experience),
      description: experience.summary,
    })),
  {
    title: "Escoply",
    period: "Produto autoral em construção",
    description: escoply.currentState,
  },
];
