"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { useInView } from "motion/react";
import { demoTiming } from "@/content/contact-demo";
import { DemoEditor } from "./demo-editor";
import { DemoSite } from "./demo-site";

const subscribe = () => () => {};
const clientSnapshot = () => true;
const serverSnapshot = () => false;

export function BuildAnimation({ paused }: { paused: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref, { amount: 0.25 });
  const ready = useSyncExternalStore(subscribe, clientSnapshot, serverSnapshot);
  const [elapsed, setElapsed] = useState(0);
  const [pageVisible, setPageVisible] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const staticPreview = !ready;
  const done = staticPreview || elapsed >= demoTiming.complete;
  const phase = done
    ? "complete"
    : elapsed >= demoTiming.run
      ? "building"
      : elapsed >= demoTiming.typing
        ? "ready"
        : "typing";
  const holdingPreview = done && (hovered || focused);
  const running = ready && visible && pageVisible && !paused && !holdingPreview;
  const step = done
    ? 4
    : Math.max(0, Math.min(4, Math.floor((elapsed - demoTiming.run) / 1500)));

  useEffect(() => {
    const update = () => setPageVisible(!document.hidden);
    document.addEventListener("visibilitychange", update);
    return () => document.removeEventListener("visibilitychange", update);
  }, []);

  useEffect(() => {
    if (!running) return;
    const timer = window.setInterval(
      () => setElapsed((time) => (time + 60) % demoTiming.cycle),
      60,
    );
    return () => window.clearInterval(timer);
  }, [running]);

  function run() {
    if (elapsed >= demoTiming.run) return;
    setElapsed(demoTiming.run);
  }
  return (
    <div
      className="contact-demo"
      ref={ref}
      data-phase={phase}
      data-running={running}
      data-paused={paused || holdingPreview}
      data-step={step}
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") setHovered(true);
      }}
      onPointerLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget))
          setFocused(false);
      }}
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
            <DemoSite step={step} complete={done} />
          )}
        </div>
      </div>
      <noscript>
        <style>{`.demo-run { display: none; }`}</style>
      </noscript>
    </div>
  );
}
