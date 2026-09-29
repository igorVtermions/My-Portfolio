import { repositories, type Repository } from "@/content/repositories";
import { normalizeRepositories } from "./normalize-repositories";

export async function getRecentRepositories(): Promise<{
  items: Repository[];
  live: boolean;
}> {
  try {
    const response = await fetch(
      "https://api.github.com/users/igorVtermions/repos?sort=pushed&direction=desc&per_page=100&type=owner",
      {
        headers: { Accept: "application/vnd.github+json" },
        next: { revalidate: 3600 },
        signal: AbortSignal.timeout(6000),
      },
    );
    if (!response.ok) throw new Error("GitHub unavailable");
    return { items: normalizeRepositories(await response.json()), live: true };
  } catch {
    return { items: repositories, live: false };
  }
}
