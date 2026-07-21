"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpenRegular,
  TextRegular,
  RulerRegular,
  BorderAllRegular,
  IconsRegular,
  SwatchbookRegular,
} from "@dev-mbr/icons";
import type { ComponentType } from "react";
import { NAV } from "../_data/nav";

type IconProps = { size?: number; className?: string };

const ICONS: Record<string, ComponentType<IconProps>> = {
  "/": BookOpenRegular,
  "/tipografia": TextRegular,
  "/espacamento": RulerRegular,
  "/stroke": BorderAllRegular,
  "/icones": IconsRegular,
  "/cor": SwatchbookRegular,
};

export function Nav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-2">
      {NAV.map((item) => {
        const Icon = ICONS[item.href];
        const active = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={[
              "flex items-center gap-10 rounded-sm px-10 py-8 text-body-small",
              active
                ? "bg-foreground/10 font-semibold text-foreground"
                : "font-regular text-foreground/60 hover:bg-foreground/5",
            ].join(" ")}
          >
            <Icon size={16} className="shrink-0" />
            <span className="flex-1">{item.label}</span>
            {item.status === "pendente" ? (
              <span className="text-caption font-medium uppercase text-foreground/40">
                pendente
              </span>
            ) : null}
          </Link>
        );
      })}
    </nav>
  );
}
