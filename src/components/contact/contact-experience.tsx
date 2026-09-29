"use client";

import { useState } from "react";
import { BuildAnimation } from "./build-animation";
import { ContactForm } from "./contact-form";

export function ContactExperience() {
  const [paused, setPaused] = useState(false);

  return (
    <div className="contact-composition">
      <BuildAnimation paused={paused} onPauseChange={setPaused} />
      <ContactForm onEngage={() => setPaused(true)} />
    </div>
  );
}
