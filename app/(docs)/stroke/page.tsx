import { PageHeader, Section, Table, Trap, Gap, Token } from "../_components/doc";

/* Coleção `Primitives` do Figma, ramo `stroke/*`. Dois ramos, dois
   namespaces do Tailwind: --radius-* e --border-width-*. */

const RADIUS = [
  { name: "none", value: "0px", cls: "rounded-none" },
  { name: "xs", value: "2px", cls: "rounded-xs" },
  { name: "sm", value: "4px", cls: "rounded-sm" },
  { name: "md", value: "8px", cls: "rounded-md" },
  { name: "lg", value: "12px", cls: "rounded-lg" },
  { name: "xl", value: "16px", cls: "rounded-xl" },
  { name: "2xl", value: "24px", cls: "rounded-2xl" },
  { name: "3xl", value: "32px", cls: "rounded-3xl" },
  { name: "full", value: "9999px", cls: "rounded-full" },
];

const WIDTH = [
  { name: "none", value: "0px", cls: "border-none" },
  { name: "xs", value: "1px", cls: "border-xs" },
  { name: "sm", value: "2px", cls: "border-sm" },
  { name: "md", value: "4px", cls: "border-md" },
  { name: "lg", value: "8px", cls: "border-lg" },
];

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Fundação"
        title="Stroke"
        lead="Raio de canto e largura de borda, importados da coleção Primitives do Figma. 9 + 5 = 14 tokens. O prefixo stroke/ é o nome da coleção e some na travessia; a folha (md, 2xl, full) é preservada."
      />

      <Section
        title="Raio"
        hint="stroke/radius/md → --radius-md → rounded-md"
      >
        <Table
          head={["Token", "Classe", "Valor", "Amostra"]}
          rows={RADIUS.map((r) => [
            <Token key="t">{`stroke/radius/${r.name}`}</Token>,
            <Token key="c">{r.cls}</Token>,
            <span key="v" className="tabular-nums text-foreground/60">
              {r.value}
            </span>,
            <span
              key="s"
              className={`block h-48 w-48 bg-foreground/10 border-sm border-foreground/40 ${r.cls}`}
            />,
          ])}
        />
      </Section>

      <Section
        title="Largura"
        hint="stroke/width/md → --border-width-md → border-md. O namespace também alimenta border-x-*, border-t-* e divide-x-*."
      >
        <Table
          head={["Token", "Classe", "Valor", "Amostra"]}
          rows={WIDTH.map((w) => [
            <Token key="t">{`stroke/width/${w.name}`}</Token>,
            <Token key="c">{w.cls}</Token>,
            <span key="v" className="tabular-nums text-foreground/60">
              {w.value}
            </span>,
            <span
              key="s"
              className={`block h-48 w-48 rounded-sm border-foreground/50 ${w.cls}`}
            />,
          ])}
        />
      </Section>

      <Trap title="A escala de largura NÃO é fechada">
        <p>
          Raio, espaçamento e tipografia são escalas fechadas: o reset de
          namespace apaga os defaults do Tailwind e nada fora da lista Santo
          compila. Largura de borda é a exceção, e é importante saber disso.
        </p>
        <p>
          O utilitário <Token>border-{"<n>"}</Token> consulta{" "}
          <Token>--border-width-*</Token> primeiro, mas quando não encontra cai
          num fallback numérico embutido — <Token>{"${n}px"}</Token> — que não é
          consulta ao tema. Resultado: <Token>border-2</Token> e{" "}
          <Token>border-7</Token> continuam compilando, e{" "}
          <Token>--border-width-*: initial</Token> não os alcança, porque não há
          default a apagar.
        </p>
        <p>
          Aqui a proibição é disciplina de código e revisão, não erro de build.
          Use sempre o nome: <Token>border-sm</Token>, nunca{" "}
          <Token>border-2</Token> — mesmo os dois valendo 2px hoje.
        </p>
      </Trap>

      <Section
        title="O que compila"
        hint="Verificado no CSS de saída, não presumido."
      >
        <Table
          head={["Classe", "Compila?", "Resultado"]}
          rows={[
            [<Token key="a">rounded-md</Token>, "sim", <span key="1" className="text-foreground/60">border-radius: var(--radius-md)</span>],
            [<Token key="b">rounded-4xl</Token>, "não", <span key="2" className="text-foreground/60">o Santo não define 4xl</span>],
            [<Token key="c">border-md</Token>, "sim", <span key="3" className="text-foreground/60">border-width: var(--border-width-md)</span>],
            [<Token key="d">border-2</Token>, "sim, mas proibido", <span key="4" className="text-foreground/60">2px pelo fallback numérico</span>],
            [<Token key="e">border</Token>, "sim, mas evite", <span key="5" className="text-foreground/60">1px fixo, fora do vocabulário — prefira border-xs</span>],
            [<Token key="f">divide-x-xs</Token>, "sim", <span key="6" className="text-foreground/60">herda --border-width-xs</span>],
          ]}
        />
      </Section>

      <Gap title="Procedência e pendências">
        <p>
          <strong className="font-semibold">Nomes conferidos na fonte.</strong>{" "}
          Os 14 nomes foram lidos da biblioteca `Santo DS` via MCP (coleção{" "}
          <Token>Primitives</Token>) e batem 14/14 com a captura da UI de
          variables. Os escopos também: <Token>CORNER_RADIUS</Token> para raio,{" "}
          <Token>STROKE_FLOAT</Token> para largura.
        </p>
        <p>
          <strong className="font-semibold">Valores não conferidos na
          fonte.</strong> Nenhum nó alcançável do arquivo-base consome{" "}
          <Token>stroke/*</Token> — não existe frame de documentação de stroke
          na página `Fundations` —, e a leitura de variables por MCP só devolve
          o que está ligado a um nó. Os números vieram da captura da UI do
          designer. Um frame de documentação de stroke no Figma resolveria isso
          de vez.
        </p>
        <p>
          <strong className="font-semibold">border-none é ambíguo.</strong> O
          token gera <Token>border-width: 0</Token> e o utilitário estático do
          Tailwind gera <Token>border-style: none</Token>. Os dois convivem e
          concordam no resultado, mas são regras diferentes com o mesmo nome.
        </p>
      </Gap>
    </>
  );
}
