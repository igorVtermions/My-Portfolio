"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/primitives";
import { Icon } from "@/components/ui/icon";
import { profile } from "@/content/profile";

export function ContactForm() {
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setSending(true);
    setStatus("");
    try {
      const data = Object.fromEntries(new FormData(form));
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (!response.ok)
        throw new Error(
          result.message || "Não foi possível enviar. Tente novamente.",
        );
      setStatus("Mensagem enviada. Obrigado pelo contato!");
      form.reset();
    } catch (error) {
      setStatus(
        error instanceof Error
          ? error.message
          : "Não foi possível enviar. Tente novamente.",
      );
    } finally {
      setSending(false);
    }
  }
  return (
    <form className="contact-form" onSubmit={submit}>
      <noscript>
        Ative o JavaScript para enviar pelo formulário ou escreva para{" "}
        <a href={`mailto:${profile.email}`}>{profile.email}</a>.
      </noscript>
      <div className="form-row">
        <label>
          Seu nome
          <input
            name="name"
            autoComplete="name"
            required
            maxLength={100}
            placeholder="Como posso te chamar?"
          />
        </label>
        <label>
          Seu e-mail
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            placeholder="voce@empresa.com"
          />
        </label>
      </div>
      <label>
        Sobre o que vamos conversar?
        <select name="subject">
          <option>Uma oportunidade</option>
          <option>Um projeto</option>
          <option>Uma troca sobre desenvolvimento</option>
        </select>
      </label>
      <label>
        Sua mensagem
        <textarea
          name="message"
          required
          minLength={15}
          maxLength={5000}
          rows={4}
          placeholder="Me conte um pouco sobre a ideia, o contexto ou a oportunidade."
        />
      </label>
      <div hidden aria-hidden="true">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <div className="form-submit">
        <Button type="submit" variant="primary" disabled={sending}>
          {sending ? "Enviando..." : "Enviar mensagem"}
          <Icon name="arrow-up-right" />
        </Button>
      </div>
      <p role="status" className="form-status">
        {status}
      </p>
    </form>
  );
}
