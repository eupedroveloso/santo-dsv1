import { PageHeader, Section, Table, Gap, Trap, Token } from "../_components/doc";

/* Esta página documenta uma AUSÊNCIA. A camada de cor existe no Figma e
   não existe no código. Nada aqui deve ser preenchido por aproximação. */

const FIGMA = [
  { ns: "brand/primary/*", scale: "50→950 (11 passos)", note: "500 = azul institucional" },
  { ns: "brand/secondary/*", scale: "50→950 (11 passos)", note: "500 = lime" },
  { ns: "neutral/light/*", scale: "50→950 (11 passos)", note: "50 claro → 950 escuro" },
  { ns: "neutral/dark/*", scale: "50→950 (11 passos)", note: "invertido: 50 é quase preto" },
  { ns: "feedback/{yellow,red,green,blue}/*", scale: "6 passos (50,100,300,500,700,900)", note: "escala diferente das demais" },
  { ns: "product/*", scale: "50→950", note: "seis paletas por produto" },
];

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Fundação"
        title="Cor"
        lead="Pendente. As rampas existem no Figma e não foram importadas para o código. Esta documentação inteira é monocromática por consequência — não por escolha estética."
      />

      <Gap title="Estado atual">
        <p>
          O <Token>@theme</Token> tem exatamente dois tokens de cor:{" "}
          <Token>--color-background</Token> e <Token>--color-foreground</Token>.
          Os dois são sobras do template do create-next-app.{" "}
          <strong className="font-semibold">Nenhum dos dois é Santo DS.</strong>{" "}
          Eles existem só para esta documentação poder ser construída antes da
          importação, e saem no dia em que as rampas entrarem.
        </p>
        <p>
          Toda a hierarquia visual desta página é composta desses dois tokens
          por opacidade: <Token>text-foreground/60</Token>,{" "}
          <Token>bg-foreground/5</Token>, <Token>border-foreground/15</Token>.
          Nenhum hex, nenhuma cor nova, nenhuma família nativa.
        </p>
      </Gap>

      <Section
        title="Hierarquia disponível hoje"
        hint="O que dois tokens e opacidade conseguem expressar."
      >
        <Table
          head={["Papel", "Classe", "Amostra"]}
          rows={[
            ["Texto primário", <Token key="a">text-foreground</Token>, <span key="1" className="text-body font-medium">Santo DS</span>],
            ["Texto secundário", <Token key="b">text-foreground/60</Token>, <span key="2" className="text-body font-medium text-foreground/60">Santo DS</span>],
            ["Texto terciário", <Token key="c">text-foreground/40</Token>, <span key="3" className="text-body font-medium text-foreground/40">Santo DS</span>],
            ["Superfície", <Token key="d">bg-foreground/5</Token>, <span key="4" className="block h-32 w-64 rounded-sm bg-foreground/5" />],
            ["Fio / borda", <Token key="e">border-foreground/15</Token>, <span key="5" className="block h-32 w-64 rounded-sm border-xs border-foreground/15" />],
            ["Sólido", <Token key="f">bg-foreground</Token>, <span key="6" className="block h-32 w-64 rounded-sm bg-foreground" />],
          ]}
        />
      </Section>

      <Section
        title="O que existe no Figma e falta aqui"
        hint="Levantado do arquivo-base SANTO-DS-RTG, página Fundations."
      >
        <Table
          head={["Namespace", "Escala", "Observação"]}
          rows={FIGMA.map((f) => [
            <Token key="n">{f.ns}</Token>,
            <span key="s" className="text-foreground/60">{f.scale}</span>,
            <span key="o" className="text-foreground/60">{f.note}</span>,
          ])}
        />
      </Section>

      <Trap title="Três armadilhas na hora de importar">
        <p>
          <strong className="font-semibold">1. neutral/dark é invertido.</strong>{" "}
          <Token>neutral-dark-50</Token> é quase preto, não quase branco. Um
          gerador que trate todos os ramps igual produz dark mode ao contrário.
        </p>
        <p>
          <strong className="font-semibold">2. feedback/* tem 6 passos, não 11.</strong>{" "}
          <Token>feedback-red-200</Token> não existe. Não gere a escala por
          interpolação.
        </p>
        <p>
          <strong className="font-semibold">3. Feedback é nomeado por cor, não por papel.</strong>{" "}
          As variables são <Token>feedback/yellow</Token> e{" "}
          <Token>feedback/red</Token>, mas os frames de documentação se chamam
          Warning e Error. Vocabulário compartilhado vence nome ideal — não
          conserte só no código.
        </p>
      </Trap>

      <Gap title="Bloqueio a resolver antes de importar">
        <p>
          A biblioteca <Token>Santo DS</Token> tem uma coleção{" "}
          <Token>Primitives</Token> com <Token>color/red/*</Token> e{" "}
          <Token>color/blue/*</Token> — nomes que não batem com os ramps acima.
          É a mesma coleção de onde vieram os tokens de stroke, então ela é
          legítima; o que falta saber é se <Token>brand/primary/500</Token> é um
          token próprio ou um alias de <Token>color/blue/NN</Token>.
        </p>
        <p>
          A resposta muda o que vai para o <Token>@theme</Token>: duas camadas
          (primitivos crus + semânticos que os referenciam) ou uma só. Isso
          precisa de decisão do designer antes de qualquer importação.
        </p>
      </Gap>
    </>
  );
}
