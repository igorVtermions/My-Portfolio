"use client";

import { useRef, useState } from "react";
import { useInView } from "motion/react";
import { useMotionPreference } from "@/components/motion/use-motion-preference";

const code = [
  "const idea = createProject();",
  "",
  "export function App() {",
  "  return (",
  '    <Workspace theme="violet">',
  '      <Header title="Seu próximo passo" />',
  "      <Projects items={idea.tasks} />",
  "      <Progress value={100} />",
  "    </Workspace>",
  "  );",
  "}",
  "",
  "✓ build completed",
];

export function BuildAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref);
  const reduced = useMotionPreference();
  const [paused, setPaused] = useState(false);
  return (
    <div
      className="build-demo"
      ref={ref}
      data-running={visible && !paused}
      data-reduced={reduced}
    >
      <div className="build-window" aria-hidden="true">
        <div className="build-toolbar">
          <span>● ● ●</span>
          <span>idea.tsx</span>
          <span>↗</span>
        </div>
        <div className="build-code">
          <pre>
            {code.map((line, index) => (
              <span key={index}>
                {line || " "}
                {"\n"}
              </span>
            ))}
          </pre>
        </div>
        <div className="build-preview">
          <div className="demo-sidebar">
            <b>i.</b>
            <i />
            <i />
            <i />
          </div>
          <div className="demo-workspace">
            <span className="demo-greeting">SEU ESPAÇO</span>
            <strong>Ideias em movimento.</strong>
            <div className="demo-banner">
              <span>
                Seu próximo projeto
                <br />
                <b>começa aqui.</b>
              </span>
              <span>↗</span>
            </div>
            <div className="demo-cards">
              <div>
                <span>Design</span>
                <i />
              </div>
              <div>
                <span>Desenvolvimento</span>
                <i />
              </div>
            </div>
            <div className="demo-complete">
              <span>✓</span> Pronto para o próximo passo
            </div>
          </div>
        </div>
      </div>
      <div className="build-caption">
        <span>Da primeira linha à experiência.</span>
        {!reduced && (
          <button
            type="button"
            onClick={() => setPaused(!paused)}
            aria-label={
              paused ? "Reproduzir demonstração" : "Pausar demonstração"
            }
          >
            {paused ? "▷" : "Ⅱ"}
          </button>
        )}
      </div>
    </div>
  );
}
