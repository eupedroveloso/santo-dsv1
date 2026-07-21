import type { ReactNode } from "react";
import Link from "next/link";
import { Nav } from "./_components/nav";

/* Shell da documentação: navegação lateral + área de conteúdo.
   É um layout aninhado — o root layout (app/layout.tsx) segue dono de
   <html>/<body> e da fonte Albert Sans via next/font.

   A largura do conteúdo NÃO tem teto global: 512px é o maior token de
   espaçamento do DS e seria estreito demais para as tabelas. Em vez de
   inventar um valor, a prosa é limitada a `max-w-512` bloco a bloco e as
   tabelas rolam sozinhas. */

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-1 flex-col bg-background text-foreground md:flex-row">
      <aside className="shrink-0 border-b-xs border-foreground/15 md:sticky md:top-0 md:self-start md:w-256 md:border-b-none md:border-r-xs">
        <div className="flex flex-col gap-24 p-24">
          <Link href="/" className="flex flex-col gap-2">
            <span className="text-body font-bold">Santo DS</span>
            <span className="text-caption font-regular text-foreground/40">
              Documentação
            </span>
          </Link>
          <Nav />
        </div>
      </aside>

      <main className="flex min-w-0 flex-1 flex-col gap-48 p-24 md:p-48">
        {children}
      </main>
    </div>
  );
}
