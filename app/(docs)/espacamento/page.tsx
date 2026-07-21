import { PageHeader, Section, Table, Trap, Token } from "../_components/doc";

/* 41 tokens, espelho da coleção do Figma. O nome É o valor em pixel.
   A escala é FECHADA: --spacing-*: initial apaga a base do Tailwind,
   então nenhum degrau fora desta lista gera CSS. */

const GROUPS: { step: string; tokens: number[] }[] = [
  { step: "+1", tokens: [0, 1, 2] },
  { step: "+2", tokens: [4, 6, 8, 10, 12, 14, 16] },
  { step: "+4", tokens: [20, 24, 28, 32, 36, 40, 44, 48] },
  { step: "+8", tokens: [56, 64, 72, 80, 88, 96, 104, 112, 120, 128] },
  { step: "+16", tokens: [144, 160, 176, 192, 208, 224, 240, 256] },
  { step: "+32", tokens: [288, 320] },
  { step: "+64", tokens: [384, 448, 512] },
];

/* Barras de amostra usam largura fixa em classe literal — Tailwind não
   detecta `w-${n}` interpolado. Amostra limitada aos degraus que cabem. */
const BAR: Record<number, string> = {
  0: "w-0", 1: "w-1", 2: "w-2", 4: "w-4", 6: "w-6", 8: "w-8", 10: "w-10",
  12: "w-12", 14: "w-14", 16: "w-16", 20: "w-20", 24: "w-24", 28: "w-28",
  32: "w-32", 36: "w-36", 40: "w-40", 44: "w-44", 48: "w-48", 56: "w-56",
  64: "w-64", 72: "w-72", 80: "w-80", 88: "w-88", 96: "w-96", 104: "w-104",
  112: "w-112", 120: "w-120", 128: "w-128", 144: "w-144", 160: "w-160",
  176: "w-176", 192: "w-192", 208: "w-208", 224: "w-224", 240: "w-240",
  256: "w-256",
};

export default function Page() {
  const total = GROUPS.reduce((n, g) => n + g.tokens.length, 0);

  return (
    <>
      <PageHeader
        eyebrow="Fundação"
        title="Espaçamento"
        lead={`${total} tokens, escala fechada. O nome é o valor: 24 vale 24px. Nenhuma conversão, nenhum cálculo. Vale para todo o namespace — p-*, m-*, gap-*, w-*, h-*, space-*.`}
      />

      <Trap title="p-4 aqui são 4px, não 16px">
        <p>
          Esta é a armadilha número um do Santo DS. No Tailwind nativo{" "}
          <Token>p-4</Token> é <Token>calc(--spacing × 4)</Token> = 16px. Aqui o
          número é o pixel, porque é assim que o designer autora a coleção no
          Figma.
        </p>
        <p>
          Tradução mental: <Token>p-4</Token> → <Token>p-16</Token>,{" "}
          <Token>gap-2</Token> → <Token>gap-8</Token>,{" "}
          <Token>px-6</Token> → <Token>px-24</Token>.
        </p>
      </Trap>

      <Section
        title="Escala"
        hint="Progressão por faixas: passos finos no começo, largos no fim."
      >
        <div className="flex flex-col gap-32">
          {GROUPS.map((g) => (
            <div key={g.step} className="flex flex-col gap-12">
              <p className="text-caption font-semibold uppercase text-foreground/40">
                Passo {g.step} · {g.tokens.length} tokens
              </p>
              <div className="flex flex-col gap-6">
                {g.tokens.map((t) => (
                  <div key={t} className="flex items-center gap-16">
                    <span className="w-48 shrink-0 text-body-small font-medium tabular-nums">
                      {t}
                    </span>
                    <span className="w-64 shrink-0 text-body-small tabular-nums text-foreground/50">
                      {t}px
                    </span>
                    {BAR[t] ? (
                      <span
                        className={`h-8 shrink-0 rounded-xs bg-foreground/40 ${BAR[t]}`}
                      />
                    ) : (
                      <span className="text-caption text-foreground/40">
                        fora da escala do gráfico
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="A escala é fechada"
        hint="Ninguém consegue inventar um espaçamento que o designer não definiu."
      >
        <Table
          head={["Classe", "Compila?", "Resultado"]}
          rows={[
            [<Token key="a">p-24</Token>, "sim", <span key="1" className="text-foreground/60">padding: 24px</span>],
            [<Token key="b">p-7</Token>, "não", <span key="2" className="text-foreground/60">nenhum CSS é gerado</span>],
            [<Token key="c">p-3</Token>, "não", <span key="3" className="text-foreground/60">nenhum CSS é gerado</span>],
            [<Token key="d">p-100</Token>, "não", <span key="4" className="text-foreground/60">nenhum CSS é gerado</span>],
            /* O literal é montado em partes de propósito: escrito inteiro
               no fonte, o scanner do Tailwind o trataria como classe usada
               e geraria a utility arbitrária que esta linha proíbe. */
            [<Token key="e">{"p-"}{"[13px]"}</Token>, "sim, mas proibido", <span key="5" className="text-foreground/60">valor arbitrário — não passa em revisão</span>],
          ]}
        />
      </Section>
    </>
  );
}
