"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { useMotionPreference } from "@/components/motion/use-motion-preference";
import { demoTiming } from "@/content/contact-demo";
import { DemoEditor } from "./demo-editor";
import { DemoSite } from "./demo-site";

export function BuildAnimation({
  paused,
  onPauseChange,
}: {
  paused: boolean;
  onPauseChange: (paused: boolean) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref, { amount: 0.25 });
  const reduced = useMotionPreference();
  const [optedIn, setOptedIn] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [pageVisible, setPageVisible] = useState(true);
  const staticPreview = reduced && !optedIn;
  const done = staticPreview || elapsed >= demoTiming.complete;
  const phase = done
    ? "complete"
    : elapsed >= demoTiming.run
      ? "building"
      : elapsed >= demoTiming.typing
        ? "ready"
        : "typing";
  const running = visible && pageVisible && !paused && !done;
  const step = done
    ? 4
    : Math.max(0, Math.min(4, Math.floor((elapsed - demoTiming.run) / 500)));

  useEffect(() => {
    const update = () => setPageVisible(!document.hidden);
    document.addEventListener("visibilitychange", update);
    return () => document.removeEventListener("visibilitychange", update);
  }, []);

  useEffect(() => {
    if (!running) return;
    const timer = window.setInterval(
      () => setElapsed((time) => Math.min(time + 60, demoTiming.complete)),
      60,
    );
    return () => window.clearInterval(timer);
  }, [running]);

  function replay() {
    setOptedIn(true);
    setElapsed(0);
    onPauseChange(false);
  }
  function run() {
    if (elapsed >= demoTiming.run) return;
    setElapsed(demoTiming.run);
    onPauseChange(false);
  }
  function contact() {
    onPauseChange(true);
    const form = document.getElementById("contact-form");
    if (!form) return;
    const fields = Array.from(
      form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>(
        "input[required], textarea[required]",
      ),
    );
    const field =
      fields.find((field) => !field.value.trim()) ??
      form.querySelector<HTMLTextAreaElement>("textarea");
    form.scrollIntoView({
      behavior: reduced ? "instant" : "smooth",
      block: "center",
    });
    field?.focus({ preventScroll: true });
  }

  const status =
    phase === "typing"
      ? "É assim que uma ideia começa."
      : phase === "ready"
        ? "Código pronto. Vamos dar vida?"
        : phase === "building"
          ? "Da estrutura aos detalhes."
          : "Agora, vamos falar da sua ideia.";

  return (
    <div
      className="contact-demo"
      ref={ref}
      data-phase={phase}
      data-running={running}
      data-paused={paused}
      data-step={step}
    >
      <p className="sr-only">
        Demonstração de código sendo escrito e transformado em um site. O
        formulário está disponível a qualquer momento.
      </p>
      <div className="contact-demo-window">
        <div className="contact-demo-toolbar">
          <span className="demo-window-dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span>
            {phase === "typing" || phase === "ready"
              ? "sua-ideia.tsx"
              : "sua-ideia / preview"}
          </span>
          <button
            className="demo-run"
            type="button"
            onClick={run}
            disabled={phase === "building" || done}
            aria-label="Run: construir demonstração"
          >
            {done ? "✓ Pronto" : phase === "building" ? "Construindo" : "▷ Run"}
          </button>
        </div>
        <div className="contact-demo-stage">
          {(phase === "typing" || phase === "ready") && (
            <DemoEditor
              progress={Math.min(1, elapsed / demoTiming.typing)}
              running={running}
            />
          )}
          {(phase === "building" || done) && (
            <DemoSite step={step} complete={done} onContact={contact} />
          )}
        </div>
      </div>
      <div className="contact-demo-controls">
        <p role="status">
          {paused && !done ? "Demonstração pausada." : status}
        </p>
        <button
          type="button"
          onClick={done ? replay : () => onPauseChange(!paused)}
        >
          {done
            ? staticPreview
              ? "Ver animação"
              : "Rever animação"
            : paused
              ? "Continuar"
              : "Pausar"}
        </button>
      </div>
      <noscript>
        <style>{`.contact-demo-controls, .demo-run, .demo-contact-button { display: none; }`}</style>
        <a className="action" href="#contact-form">
          Conversar sobre uma ideia ↗
        </a>
      </noscript>
    </div>
  );
}
