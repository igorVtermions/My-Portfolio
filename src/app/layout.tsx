import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HashFocus } from "@/components/layout/hash-focus";
import { MotionProvider } from "@/components/motion/motion-provider";
import { Container } from "@/components/ui/primitives";
import { profile } from "@/content/profile";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Igor Franco | Desenvolvedor Full Stack",
    template: "%s | Igor Franco",
  },
  description:
    "Portfólio de Igor Franco. Desenvolvimento Full Stack com foco em mobile, React Native, aplicações web e APIs. Conheça os projetos e a trajetória.",
  openGraph: {
    title: "Igor Franco | Desenvolvedor Full Stack",
    description: profile.role,
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <a href="#main" className="skip-link">
          Pular para o conteúdo
        </a>
        <MotionProvider>
          <Container>
            <Header />
            <main id="main" tabIndex={-1}>
              {children}
            </main>
            <Footer />
          </Container>
          <HashFocus />
        </MotionProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: profile.fullName,
              jobTitle: profile.role,
              sameAs: [profile.github, profile.linkedin],
            }).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
