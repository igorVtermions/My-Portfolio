import { profile } from "./profile";

export const repositories = [
  {
    name: "escoply-web",
    description: "Frente web do produto autoral",
    language: "TypeScript",
  },
  {
    name: "escoply-mobile",
    description: "Frente mobile do produto autoral",
    language: "TypeScript",
  },
  {
    name: "Master-Manager",
    description: "Repositório fixado no perfil",
    language: "JavaScript",
  },
].map((repository) => ({
  ...repository,
  href: `${profile.github}/${repository.name}`,
}));

export type Repository = (typeof repositories)[number];
