"use client";

import { useEffect, useRef, useState } from "react";
import { profile } from "@/content/profile";
import { Button } from "@/components/ui/primitives";
import { Icon } from "@/components/ui/icon";

export function CopyEmail() {
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  useEffect(() => () => clearTimeout(timer.current), []);
  async function copyEmail() {
    clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText(profile.email);
      setMessage("Endereço copiado.");
      setCopied(true);
      timer.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
      setMessage("Não foi possível copiar. Selecione o endereço acima.");
    }
  }
  return (
    <div className="copy-email">
      <Button onClick={copyEmail}>
        Copiar e-mail <Icon name={copied ? "check" : "copy"} />
      </Button>
      <p role="status" className="copy-status">
        {message}
      </p>
    </div>
  );
}
