import { ScrollSurface } from "@/components/motion/scroll-surface";
import Image from "next/image";
import { profile } from "@/content/profile";

export function Portrait({ priority = false }: { priority?: boolean }) {
  return (
    <ScrollSurface>
      <figure className="portrait-frame">
        <div className="portrait-label">{profile.fullName}</div>
        <Image
          src="/images/igor-franco.jpeg"
          alt="Retrato de Igor Franco"
          width={900}
          height={1200}
          sizes="(max-width: 700px) calc(100vw - 79px), (max-width: 1320px) 40vw, 470px"
          preload={priority}
          className="portrait"
        />
        <figcaption>
          <span>DESENVOLVEDOR FULL STACK</span>
          <span>WEB / MOBILE / BACK-END</span>
        </figcaption>
        <span className="photo-tab" aria-hidden="true">
          IF.
        </span>
      </figure>
    </ScrollSurface>
  );
}
