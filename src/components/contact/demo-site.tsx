export function DemoSite({
  step,
  complete,
  onContact,
}: {
  step: number;
  complete: boolean;
  onContact: () => void;
}) {
  return (
    <div className="demo-site">
      <div
        className="demo-site-header demo-piece"
        data-visible={step >= 0}
        aria-hidden={step < 0}
      >
        <span className="demo-signature">
          igor franco<span> /</span>
        </span>
        <span className="demo-site-category">DESENVOLVIMENTO</span>
      </div>
      <div
        className="demo-site-hero demo-piece"
        data-visible={step >= 1}
        aria-hidden={step < 1}
      >
        <span className="demo-monogram" aria-hidden="true">
          IF.
        </span>
        <h3>
          Ideias
          <br />
          <em>ganham forma.</em>
        </h3>
      </div>
      <div
        className="demo-site-composition demo-piece"
        data-visible={step >= 2}
        aria-hidden="true"
      >
        <div className="demo-mini-browser">
          <div>
            <i />
            <i />
            <i />
          </div>
          <span className="demo-mini-eyebrow">SEU PRÓXIMO PROJETO</span>
          <strong>
            Feito para
            <br />
            acontecer.
          </strong>
          <span className="demo-mini-line" />
          <span className="demo-mini-action">Explorar ↗</span>
        </div>
        <div className="demo-mini-phone">
          <span />
          <b>
            Olá<span> mundo.</span>
          </b>
          <i />
          <i />
          <i />
          <small>Vamos criar ↗</small>
        </div>
      </div>
      <div
        className="demo-site-invite demo-piece"
        data-visible={step >= 3}
        aria-hidden={step < 3}
      >
        <p>Vamos construir o seu próximo passo?</p>
        <button
          type="button"
          className="demo-contact-button"
          onClick={onContact}
          disabled={!complete}
        >
          Conversar sobre uma ideia <span aria-hidden="true">↗</span>
        </button>
      </div>
    </div>
  );
}
