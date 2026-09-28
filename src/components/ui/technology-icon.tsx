import {
  siReact,
  siTypescript,
  siJavascript,
  siNextdotjs,
  siNodedotjs,
  siExpo,
  siHtml5,
  siCss,
  siSass,
  siTailwindcss,
  siNestjs,
  siExpress,
  siFastify,
  siSpringboot,
  siSupabase,
  siPostgresql,
  siMysql,
  siMongodb,
  siGit,
  siGithub,
  type SimpleIcon,
} from "simple-icons";

const brands: Record<string, SimpleIcon> = {
  "React Native": siReact,
  React: siReact,
  TypeScript: siTypescript,
  JavaScript: siJavascript,
  "Next.js": siNextdotjs,
  "React / Next.js": siReact,
  "Node.js": siNodedotjs,
  Expo: siExpo,
  HTML: siHtml5,
  CSS: siCss,
  SCSS: siSass,
  "Tailwind CSS": siTailwindcss,
  NestJS: siNestjs,
  "Express.js": siExpress,
  Fastify: siFastify,
  "Spring Boot": siSpringboot,
  Supabase: siSupabase,
  PostgreSQL: siPostgresql,
  MySQL: siMysql,
  MongoDB: siMongodb,
  Git: siGit,
  GitHub: siGithub,
};

const symbols: Record<string, string> = {
  "React Native": "⚛",
  React: "⚛",
  TypeScript: "TS",
  JavaScript: "JS",
  "Next.js": "N",
  "React / Next.js": "N",
  "Node.js": "⬡",
  Expo: "Λ",
  HTML: "5",
  CSS: "3",
  SCSS: "S",
  "Tailwind CSS": "≈",
  NestJS: "N",
  "Express.js": "ex",
  Fastify: "↯",
  "Spring Boot": "◉",
  Supabase: "ϟ",
  PostgreSQL: "Pg",
  MySQL: "My",
  MongoDB: "◐",
  NoSQL: "DB",
  Java: "J",
  Git: "◇",
  GitHub: "GH",
  AWS: "aws",
  "CI/CD": "∞",
  "Testes unitários": "✓",
  "Testes E2E": "✓",
  "Clean Code": "</>",
  Scrum: "↻",
  Kanban: "▥",
  "APIs de IA": "✧",
  "Engenharia de prompts": ">_",
  LLM: "✳",
  RAG: "⌘",
};

export function TechnologyIcon({ name }: { name: string }) {
  const brand = brands[name];
  return (
    <span className="technology-icon" aria-hidden="true">
      {brand ? (
        <svg
          viewBox="0 0 24 24"
          width="22"
          height="22"
          fill="currentColor"
          focusable="false"
        >
          <path d={brand.path} />
        </svg>
      ) : (
        (symbols[name] ?? "</>")
      )}
    </span>
  );
}
