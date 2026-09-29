import { demoCode, demoCodeLength } from "@/content/contact-demo";

export function DemoEditor({
  progress,
  running,
}: {
  progress: number;
  running: boolean;
}) {
  const visibleCharacters = Math.floor(demoCodeLength * progress);
  return (
    <div className="demo-editor" aria-hidden="true">
      <div className="demo-editor-label">
        Uma ideia. Algumas linhas. Muitas possibilidades.
      </div>
      <pre>
        <code>
          {demoCode.map((line, index) => {
            const offset = demoCode
              .slice(0, index)
              .reduce((length, previous) => length + previous.text.length, 0);
            const text = line.text.slice(
              0,
              Math.max(0, visibleCharacters - offset),
            );
            return (
              <span key={index} className={`demo-token-${line.tone}`}>
                {text}
              </span>
            );
          })}
          <span className="demo-caret" data-running={running}>
            ▍
          </span>
        </code>
      </pre>
      <div className="demo-editor-bottom">
        <span>React / TypeScript</span>
        <span>{Math.round(progress * 100)}%</span>
      </div>
    </div>
  );
}
