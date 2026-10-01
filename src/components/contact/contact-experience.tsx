"use client";

import { useState } from "react";
import { BuildAnimation } from "./build-animation";
import { ContactForm } from "./contact-form";

export function ContactExperience() {
  const [paused, setPaused] = useState(false);

  return (
    <div className="contact-composition">
      <BuildAnimation paused={paused} />
      <div
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget))
            setPaused(false);
        }}
      >
        <ContactForm />
      </div>
    </div>
  );
}
