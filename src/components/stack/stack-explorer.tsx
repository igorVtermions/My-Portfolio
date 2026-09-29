"use client";

import { useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { StackCategory } from "@/content/stack";
import type { StackApplication } from "@/content/stack-applied";
import { TechnologyIcon } from "@/components/ui/technology-icon";
import { ActionLink } from "@/components/ui/primitives";
import { Reveal } from "@/components/motion/reveal";
import { useMotionPreference } from "@/components/motion/use-motion-preference";

interface StackArea {
  id: string;
  title: string;
  caption: string;
  groups: StackCategory[];
}

function ApplicationContent({
  name,
  application,
}: {
  name: string;
  application: StackApplication;
}) {
  return (
    <>
      <div className="stack-context-copy">
        <p className="eyebrow">Na prática</p>
        <h4>{name}</h4>
        <p>{application.description}</p>
      </div>
      <div className="stack-work-links">
        {application.works.map((work) => (
          <ActionLink key={work.href} href={work.href}>
            {work.name}
          </ActionLink>
        ))}
      </div>
    </>
  );
}

export function StackExplorer({
  areas,
  applications,
}: {
  areas: StackArea[];
  applications: Record<string, StackApplication>;
}) {
  const [selection, setSelection] = useState<{
    area: string;
    technology: string;
  } | null>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  const id = useId();
  const reduced = useMotionPreference();
  function close() {
    setSelection(null);
    trigger.current?.focus({ preventScroll: true });
  }

  return (
    <div className="stack-map">
      <p className="stack-map-hint">
        Selecione uma tecnologia com <span aria-hidden="true">↗</span> para ver
        onde apliquei.
      </p>
      {areas.map((area) => {
        const active =
          selection?.area === area.id ? selection.technology : null;
        const panelId = `${id}-${area.id}`;
        return (
          <Reveal key={area.id} className="stack-band">
            <div className="stack-band-heading">
              <h3>{area.title}</h3>
              <p>{area.caption}</p>
            </div>
            <div className="stack-band-body">
              <div className="stack-band-groups">
                {area.groups.map((group) => (
                  <div className="stack-family" key={group.title}>
                    {group.title !== area.title && <h4>{group.title}</h4>}
                    <ul className="stack-tools">
                      {group.items.map((name) => (
                        <li key={name}>
                          {applications[name] ? (
                            <>
                              <button
                                type="button"
                                className="stack-tool"
                                aria-expanded={active === name}
                                aria-controls={panelId}
                                onClick={(event) => {
                                  trigger.current = event.currentTarget;
                                  setSelection(
                                    active === name
                                      ? null
                                      : { area: area.id, technology: name },
                                  );
                                }}
                              >
                                <TechnologyIcon name={name} />
                                <span>{name}</span>
                                <span
                                  className="stack-tool-arrow"
                                  aria-hidden="true"
                                >
                                  ↗
                                </span>
                              </button>
                              <noscript>
                                <span className="stack-tool">
                                  <TechnologyIcon name={name} />
                                  <span>{name}</span>
                                </span>
                              </noscript>
                            </>
                          ) : (
                            <span className="stack-tool">
                              <TechnologyIcon name={name} />
                              <span>{name}</span>
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div id={panelId}>
                <AnimatePresence initial={false} mode="wait">
                  {active && (
                    <motion.div
                      key={active}
                      className="stack-context-shell"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: reduced ? 0 : 0.26,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <div
                        className="stack-context"
                        role="region"
                        aria-label={`Aplicação de ${active}`}
                        onKeyDown={(event) => {
                          if (event.key === "Escape") close();
                        }}
                      >
                        <ApplicationContent
                          name={active}
                          application={applications[active]}
                        />
                        <button
                          type="button"
                          className="stack-context-close"
                          aria-label={`Fechar detalhes de ${active}`}
                          onClick={close}
                        >
                          ×
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </Reveal>
        );
      })}
      <noscript>
        <style>{`.stack-tools button, .stack-map-hint { display: none; }`}</style>
        <div className="stack-static-contexts">
          {Object.entries(applications).map(([name, application]) => (
            <article key={name}>
              <ApplicationContent name={name} application={application} />
            </article>
          ))}
        </div>
      </noscript>
    </div>
  );
}
