import { repositories, type Repository } from "@/content/repositories";

function isPublicRepository(value: unknown): value is Record<string, unknown> {
  return (
    typeof value === "object" &&
    value !== null &&
    "private" in value &&
    value.private === false
  );
}

export async function getRecentRepositories(): Promise<{
  items: Repository[];
  live: boolean;
}> {
  try {
    const response = await fetch(
      "https://api.github.com/users/igorVtermions/repos?sort=pushed&direction=desc&per_page=30&type=owner",
      {
        headers: { Accept: "application/vnd.github+json" },
        next: { revalidate: 3600 },
        signal: AbortSignal.timeout(6000),
      },
    );
    if (!response.ok) return { items: repositories, live: false };
    const data: unknown = await response.json();
    if (!Array.isArray(data)) return { items: repositories, live: false };
    const items = data
      .filter(isPublicRepository)
      .filter(
        (item) => !item.fork && !item.archived && typeof item.name === "string",
      )
      .slice(0, 6)
      .map((item) => ({
        name: String(item.name),
        href: `https://github.com/igorVtermions/${encodeURIComponent(String(item.name))}`,
        description:
          typeof item.description === "string"
            ? item.description
            : "Repositório público no GitHub",
        language:
          typeof item.language === "string" ? item.language : "Código público",
      }));
    return { items, live: true };
  } catch {
    return { items: repositories, live: false };
  }
}
