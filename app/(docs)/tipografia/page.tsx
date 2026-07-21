import { PageHeader, Section, Table, Trap, Gap, Token } from "../_components/doc";

/* Os dois eixos do Figma (categoria × peso) viram dois namespaces do
   Tailwind: --text-* e --font-weight-*. 11 + 6 = 17 tokens compõem os
   66 text styles `Albert Sans/{Categoria}/{Peso}`. */

const CATEGORIES = [
  { token: "text-heading-1", size: 72, line: 80 },
  { token: "text-heading-2", size: 56, line: 64 },
  { token: "text-heading-3", size: 40, line: 48 },
  { token: "text-heading-4", size: 32, line: 40 },
  { token: "text-heading-5", size: 24, line: 32 },
  { token: "text-heading-6", size: 20, line: 28 },
  { token: "text-body-large", size: 18, line: 28 },
  { token: "text-body", size: 16, line: 24 },
  { token: "text-body-small", size: 14, line: 24 },
  { token: "text-caption", size: 12, line: 16 },
  { token: "text-caption-small", size: 10, line: 16 },
];

const WEIGHTS = [
  { token: "font-light", value: 300, cls: "font-light" },
  { token: "font-regular", value: 400, cls: "font-regular" },
  { token: "font-medium", value: 500, cls: "font-medium" },
  { token: "font-semibold", value: 600, cls: "font-semibold" },
  { token: "font-bold", value: 700, cls: "font-bold" },
  { token: "font-extrabold", value: 800, cls: "font-extrabold" },
];

/* Tailwind precisa ver a classe literal no fonte para gerar o CSS —
   um `text-${x}` interpolado não é detectado pelo scanner. */
const SAMPLE: Record<string, string> = {
  "text-heading-1": "text-heading-1",
  "text-heading-2": "text-heading-2",
  "text-heading-3": "text-heading-3",
  "text-heading-4": "text-heading-4",
  "text-heading-5": "text-heading-5",
  "text-heading-6": "text-heading-6",
  "text-body-large": "text-body-large",
  "text-body": "text-body",
  "text-body-small": "text-body-small",
  "text-caption": "text-caption",
  "text-caption-small": "text-caption-small",
};

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Fundação"
        title="Tipografia"
        lead="Albert Sans, carregada por next/font. 11 categorias × 6 pesos = os 66 text styles do Figma, expressos como 17 tokens em dois namespaces."
      />

      <Section
        title="Escala"
        hint="Tamanho e altura de linha são pareados no token: text-body já traz seus 24px de line-height."
      >
        <Table
          head={["Token", "Tamanho", "Altura", "Amostra"]}
          rows={CATEGORIES.map((c) => [
            <Token key="t">{c.token}</Token>,
            <span key="s" className="tabular-nums text-foreground/60">
              {c.size}px
            </span>,
            <span key="l" className="tabular-nums text-foreground/60">
              {c.line}px
            </span>,
            <span key="a" className={SAMPLE[c.token]}>
              Santo
            </span>,
          ])}
        />
      </Section>

      <Section
        title="Pesos"
        hint="`regular` e não `normal` — o nome espelha o Figma, não o Tailwind."
      >
        <Table
          head={["Token", "Valor", "Amostra"]}
          rows={WEIGHTS.map((w) => [
            <Token key="t">{w.token}</Token>,
            <span key="v" className="tabular-nums text-foreground/60">
              {w.value}
            </span>,
            <span key="a" className={`text-body-large ${w.cls}`}>
              Albert Sans
            </span>,
          ])}
        />
      </Section>

      <Section title="Composição" hint="Os dois eixos se combinam livremente.">
        <div className="flex flex-col gap-16 rounded-md border-xs border-foreground/15 p-24">
          <p className="text-heading-4 font-bold">Heading 4 · Bold</p>
          <p className="text-heading-6 font-semibold">Heading 6 · Semibold</p>
          <p className="text-body-large font-regular text-foreground/70">
            Body Large · Regular — a altura de linha vem junto do token de
            tamanho, então não existe `leading-*` a escolher.
          </p>
          <p className="text-caption font-medium uppercase text-foreground/50">
            Caption · Medium
          </p>
        </div>
      </Section>

      <Trap title="text-sm e font-normal não existem aqui">
        <p>
          <Token>--text-*</Token> e <Token>--font-weight-*</Token> foram
          resetados para <Token>initial</Token>, então a escala nativa do
          Tailwind não gera CSS. <Token>text-sm</Token> não vira 14px: não vira
          nada, e o texto silenciosamente herda o tamanho do pai.
        </p>
        <p>
          O equivalente Santo de <Token>text-sm</Token> é{" "}
          <Token>text-body-small</Token>; o de <Token>font-normal</Token> é{" "}
          <Token>font-regular</Token>.
        </p>
      </Trap>

      <Gap title="Pendências desta camada">
        <p>
          <strong className="font-semibold">Heading 6 diverge do Figma.</strong>{" "}
          O código traz 20px/28px; o Figma traz 32px de line-height, que quebra
          a progressão dos demais headings. A correção foi feita só no código —
          os dois lados estão divergentes até o style ser atualizado no Figma.
        </p>
        <p>
          <strong className="font-semibold">Procedência dos valores.</strong> Os
          nomes vieram da biblioteca `Santo DS`; os números vieram da tabela de
          documentação da página `Typography`, não do objeto do style. Se
          divergirem, o style manda.
        </p>
        <p>
          <strong className="font-semibold">Sem escala de tracking.</strong> O
          Figma não define letter-spacing, e os namespaces nativos{" "}
          <Token>--tracking-*</Token> e <Token>--leading-*</Token> foram
          fechados para não abrirem um segundo vocabulário.
        </p>
      </Gap>
    </>
  );
}
