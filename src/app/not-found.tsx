import { ActionLink } from "@/components/ui/primitives";

export default function NotFound() {
  return (
    <section className="page-title section">
      <p className="eyebrow">404 / Página não encontrada</p>
      <h1>
        Esse caminho
        <br />
        <em>não existe.</em>
      </h1>
      <p>Você pode voltar ao início ou conhecer os projetos.</p>
      <ActionLink href="/" variant="primary" icon="arrow-left">
        Voltar ao início
      </ActionLink>
    </section>
  );
}
