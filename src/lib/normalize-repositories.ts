import {
  excludedRepositories,
  repositoryEditorial,
  type Repository,
} from "@/content/repositories";
import { profile } from "@/content/profile";

const nonempty = (value: unknown) =>
  typeof value === "string" && value.trim() ? value.trim() : undefined;

export function normalizeRepositories(data: unknown): Repository[] {
  if (!Array.isArray(data)) throw new Error("Invalid repository response");
  const items: Repository[] = [];
  for (const item of data) {
    if (
      !item ||
      typeof item !== "object" ||
      item.private !== false ||
      item.fork ||
      item.archived ||
      item.disabled
    )
      continue;
    const name = nonempty(item.name);
    if (
      !name ||
      !/^[\w.-]+$/.test(name) ||
      excludedRepositories.has(name.toLowerCase())
    )
      continue;
    const editorial = repositoryEditorial[name] ?? {};
    const pushedAt = nonempty(item.pushed_at);
    items.push({
      name,
      title: editorial.title ?? name,
      href: `${profile.github}/${encodeURIComponent(name)}`,
      description: editorial.description ?? nonempty(item.description),
      language: nonempty(item.language),
      platform: editorial.platform,
      technologies: editorial.technologies ?? [],
      highlights: editorial.highlights ?? [],
      topics: Array.isArray(item.topics)
        ? item.topics
            .filter(
              (v: unknown): v is string =>
                typeof v === "string" && v.length > 0,
            )
            .slice(0, 3)
        : [],
      pushedAt:
        pushedAt && Number.isFinite(Date.parse(pushedAt))
          ? pushedAt
          : undefined,
      defaultBranch: nonempty(item.default_branch),
      featured: editorial.featured,
      demoUrl: editorial.demoUrl?.startsWith("https://")
        ? editorial.demoUrl
        : undefined,
    });
  }
  return items
    .sort(
      (a, b) =>
        Number(!!b.featured) - Number(!!a.featured) ||
        (b.pushedAt ? Date.parse(b.pushedAt) : 0) -
          (a.pushedAt ? Date.parse(a.pushedAt) : 0) ||
        a.name.localeCompare(b.name),
    )
    .slice(0, 6);
}
