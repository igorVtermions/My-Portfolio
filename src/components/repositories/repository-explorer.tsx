"use client";

import {
  useId,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import { motion } from "motion/react";
import { repositoryDate, type Repository } from "@/content/repositories";
import { useMotionPreference } from "@/components/motion/use-motion-preference";
import { TechnologyIcon } from "@/components/ui/technology-icon";
import { RepositoryPanel } from "./repository-panel";


export function RepositoryExplorer({ items }: { items: Repository[] }) {
  const [selected, setSelected] = useState(items[0]?.name);
  const reduced = useMotionPreference();
  const id = useId();
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const active = items.find((item) => item.name === selected) ?? items[0];
  if (!active)
    return (
      <p className="repo-empty">
        Nenhum repositório disponível nesta seleção. Explore os demais no
        GitHub.
      </p>
    );
  function navigate(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowDown") next = (index + 1) % items.length;
    else if (event.key === "ArrowUp")
      next = (index - 1 + items.length) % items.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = items.length - 1;
    else return;
    event.preventDefault();
    setSelected(items[next].name);
    refs.current[next]?.focus();
  }
  return (
    <div className="repo-explorer">
      <div className="repo-navigation">
        <p className="repo-list-caption">
          Explore o código <span>{items.length} repositórios</span>
        </p>
        <div
          className="repo-tabs"
          role="tablist"
          aria-label="Selecionar repositório"
          aria-orientation="vertical"
        >
          {items.map((item, index) => (
            <button
              key={item.name}
              ref={(node) => {
                refs.current[index] = node;
              }}
              type="button"
              role="tab"
              id={`${id}-tab-${index}`}
              aria-controls={`${id}-panel`}
              aria-selected={active.name === item.name}
              tabIndex={active.name === item.name ? 0 : -1}
              onClick={() => setSelected(item.name)}
              onKeyDown={(event) => navigate(event, index)}
            >
              {active.name === item.name && (
                <motion.span
                  className="repo-selection"
                  layoutId={`${id}-selection`}
                  transition={{ duration: reduced ? 0 : 0.3 }}
                />
              )}
              <TechnologyIcon
                name={item.technologies[0] ?? item.language ?? "GitHub"}
              />
              <span className="repo-tab-copy">
                <strong>{item.title}</strong>
                <small>
                  {item.language ?? item.platform ?? "Repositório"}
                  {item.pushedAt && (
                    <>
                      {" "}
                      ·{" "}
                      <time dateTime={item.pushedAt}>
                        {repositoryDate(item.pushedAt)}
                      </time>
                    </>
                  )}
                </small>
              </span>
              <span className="repo-tab-arrow" aria-hidden="true">
                ↗
              </span>
            </button>
          ))}
        </div>
        <label className="repo-mobile-select">
          Escolha um repositório
          <select
            value={active.name}
            onChange={(event) => setSelected(event.target.value)}
          >
            {items.map((item) => (
              <option key={item.name} value={item.name}>
                {item.title}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div
        className="repo-panel"
        id={`${id}-panel`}
        role="tabpanel"
        tabIndex={0}
        aria-label={`Detalhes de ${active.title}`}
      >
        <motion.div
          key={active.name}
          initial={false}
          animate={{ opacity: 1, y: reduced ? 0 : [8, 0] }}
          transition={{ duration: reduced ? 0 : 0.22 }}
          className="repo-panel-content"
        >
          <RepositoryPanel repository={active} />
        </motion.div>
      </div>
      <noscript>
        <style>{`.repo-explorer { display: block; } .repo-explorer > .repo-navigation, .repo-explorer > .repo-panel { display: none; } .repo-explorer .repo-static-list { display: grid; }`}</style>
      <div className="repo-static-list">
        {items.map((item) => (
          <article key={item.name}>
            <RepositoryPanel repository={item} />
          </article>
        ))}
      </div>
      </noscript>
    </div>
  );
}
