export type NavStatus = "completo" | "parcial" | "pendente";

export type NavItem = {
  href: string;
  label: string;
  status: NavStatus;
  /** Quantidade de tokens registrados no @theme. */
  tokens: number;
};

export const NAV: NavItem[] = [
  { href: "/", label: "Visão geral", status: "completo", tokens: 0 },
  { href: "/tipografia", label: "Tipografia", status: "parcial", tokens: 17 },
  { href: "/espacamento", label: "Espaçamento", status: "completo", tokens: 41 },
  { href: "/stroke", label: "Stroke", status: "parcial", tokens: 14 },
  { href: "/icones", label: "Ícones", status: "completo", tokens: 0 },
  { href: "/cor", label: "Cor", status: "pendente", tokens: 2 },
];
