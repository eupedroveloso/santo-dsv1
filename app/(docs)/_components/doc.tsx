import type { ReactNode } from "react";

/* Primitivos de apresentação da documentação.
   Paleta: apenas --color-foreground e --color-background, compostos por
   opacidade. Nenhuma cor nova, nenhum hex, nenhuma família nativa. */

export function PageHeader({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <header className="flex flex-col gap-8 border-b-xs border-foreground/15 pb-32">
      <p className="text-caption font-semibold uppercase text-foreground/40">
        {eyebrow}
      </p>
      <h1 className="text-heading-3 font-bold">{title}</h1>
      {lead ? (
        <p className="max-w-512 text-body-large font-regular text-foreground/60">
          {lead}
        </p>
      ) : null}
    </header>
  );
}

export function Section({
  title,
  hint,
  children,
}: {
  title: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <section className="flex flex-col gap-16">
      <div className="flex flex-col gap-4">
        <h2 className="text-heading-5 font-semibold">{title}</h2>
        {hint ? (
          <p className="max-w-512 text-body-small font-regular text-foreground/60">
            {hint}
          </p>
        ) : null}
      </div>
      {children}
    </section>
  );
}

/** Aviso de armadilha — o que a documentação existe para evitar. */
export function Trap({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-8 rounded-md border-xs border-foreground/20 bg-foreground/5 p-20">
      <p className="text-body-small font-bold uppercase">{title}</p>
      <div className="flex flex-col gap-8 text-body-small font-regular text-foreground/70">
        {children}
      </div>
    </div>
  );
}

/** Lacuna declarada — o que ainda não existe. */
export function Gap({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-8 rounded-md border-l-lg border-foreground/20 bg-foreground/5 p-20">
      <p className="text-body-small font-bold uppercase">{title}</p>
      <div className="flex flex-col gap-8 text-body-small font-regular text-foreground/70">
        {children}
      </div>
    </div>
  );
}

export function Table({
  head,
  rows,
}: {
  head: string[];
  rows: ReactNode[][];
}) {
  return (
    <div className="overflow-x-auto rounded-md border-xs border-foreground/15">
      <table className="w-full text-left align-middle">
        <thead>
          <tr className="border-b-xs border-foreground/15 bg-foreground/5">
            {head.map((h) => (
              <th
                key={h}
                className="px-16 py-10 text-caption font-semibold uppercase text-foreground/50"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b-xs border-foreground/10">
              {row.map((cell, j) => (
                <td
                  key={j}
                  className="px-16 py-12 align-middle text-body-small font-regular"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Nome de token / classe. O Santo DS não tem família monoespaçada
    (o Figma define só Albert Sans), então destaque é por peso e fundo. */
export function Token({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-xs bg-foreground/10 px-6 py-2 text-body-small font-medium tabular-nums">
      {children}
    </span>
  );
}

export function Value({ children }: { children: ReactNode }) {
  return (
    <span className="tabular-nums text-foreground/60">{children}</span>
  );
}

export function StatusTag({ status }: { status: string }) {
  return (
    <span className="rounded-full border-xs border-foreground/20 px-8 py-2 text-caption font-medium uppercase text-foreground/60">
      {status}
    </span>
  );
}
