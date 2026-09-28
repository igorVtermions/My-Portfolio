import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Icon, type IconName } from "./icon";

export function Container({ children }: { children: ReactNode }) {
  return <div className="container">{children}</div>;
}

export function Section({
  children,
  id,
  className = "",
}: {
  children: ReactNode;
  id: string;
  className?: string;
}) {
  return (
    <section
      id={id}
      tabIndex={-1}
      aria-labelledby={`${id}-title`}
      className={`section ${className}`}
    >
      {children}
    </section>
  );
}

export function SectionHeading({
  id,
  title,
  eyebrow,
  description,
  level = 2,
}: {
  id?: string;
  title: ReactNode;
  eyebrow?: string;
  description?: ReactNode;
  level?: 1 | 2 | 3;
}) {
  const Heading = `h${level}` as const;
  return (
    <div className="section-heading">
      <div>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <Heading id={id}>{title}</Heading>
      </div>
      {description && <p>{description}</p>}
    </div>
  );
}

export function ActionLink({
  children,
  href,
  variant = "secondary",
  icon = "arrow-up-right",
  className = "",
}: {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  icon?: IconName;
  className?: string;
}) {
  const external = href.startsWith("https://");
  const classes = `action action-${variant} ${className}`;
  const content = (
    <>
      {children}
      <Icon name={external ? "external-link" : icon} />
    </>
  );
  return external || href.startsWith("mailto:") || href.startsWith("tel:") ? (
    <a
      href={href}
      className={classes}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {content}
    </a>
  ) : (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}

export function Button({
  className = "",
  variant = "secondary",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
}) {
  return (
    <button
      type="button"
      className={`action action-${variant} ${className}`}
      {...props}
    />
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return <span className="tag">{children}</span>;
}

export function Tags({ items }: { items: readonly string[] }) {
  return (
    <ul className="tags">
      {items.map((item) => (
        <li key={item}>
          <Tag>{item}</Tag>
        </li>
      ))}
    </ul>
  );
}
