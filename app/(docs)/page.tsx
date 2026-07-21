import Link from "next/link";
import { PageHeader, Section, Table, Trap, Gap, Token, StatusTag } from "./_components/doc";
import { NAV } from "./_data/nav";

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Santo DS"
        title="Visão geral"
        lead="O Santo DS vive em dois lugares que são um sistema só: as Variables e Styles do Figma, e o @theme de app/globals.css. Os nomes são idênticos dos dois lados."
      />

      <Section
        title="Camadas"
        hint="O que já está espelhado em código e o que ainda não."
      >
        <Table
          head={["Camada", "Tokens", "Status"]}
          rows={NAV.filter((i) => i.href !== "/").map((item) => [
            <Link
              key={item.href}
              href={item.href}
              className="font-medium hover:bg-foreground/5"
            >
              {item.label}
            </Link>,
            item.tokens > 0 ? (
              <span className="tabular-nums text-foreground/60">
                {item.tokens}
              </span>
            ) : (
              <span className="text-foreground/40">—</span>
            ),
            <StatusTag key="s" status={item.status} />,
          ])}
        />
      </Section>

      <Section
        title="Tradução Figma → código"
        hint="Barra vira hífen, o prefixo é o namespace do Tailwind, o resto é idêntico. Nunca se renomeia na travessia."
      >
        <Table
          head={["Figma", "@theme", "Classe"]}
          rows={[
            [<Token key="a">Albert Sans/Body/Medium</Token>, <Token key="b">--text-body</Token>, <Token key="c">text-body font-medium</Token>],
            [<Token key="d">space/24</Token>, <Token key="e">--spacing-24</Token>, <Token key="f">p-24</Token>],
            [<Token key="g">stroke/radius/md</Token>, <Token key="h">--radius-md</Token>, <Token key="i">rounded-md</Token>],
            [<Token key="j">stroke/width/md</Token>, <Token key="k">--border-width-md</Token>, <Token key="l">border-md</Token>],
          ]}
        />
      </Section>

      <Trap title="p-4 aqui são 4px, não 16px">
        <p>
          No Tailwind nativo a escala de espaçamento é calculada:{" "}
          <Token>p-4</Token> vale <Token>calc(0.25rem × 4)</Token> = 16px. No
          Santo DS não existe cálculo — o nome É o valor em pixel, porque é
          assim que a coleção do Figma é autorada.
        </p>
        <p>
          Quem chega do Tailwind escreve <Token>p-4</Token> esperando 16px e
          recebe 4px. O equivalente correto é <Token>p-16</Token>.
        </p>
      </Trap>

      <Section
        title="O Tailwind aqui é só motor de CSS"
        hint="As escalas nativas foram apagadas com reset de namespace no @theme. A proibição é erro de build, não disciplina de prompt."
      >
        <Table
          head={["Namespace", "Reset", "Efeito"]}
          rows={[
            /* Os nomes das classes banidas são montados em partes de
               propósito. Escritos inteiros no fonte eles viram candidatos
               para o scanner do Tailwind e para o grep da autoauditoria —
               ruído que esconderia uma violação de verdade. */
            [<Token key="a">--color-*</Token>, "initial", `as 26 famílias nativas não compilam — ${"bg-"}${"blue-500"}, ${"text-"}${"mauve-300"}, ${"bg-"}${"white"}`],
            [<Token key="b">--spacing-*</Token>, "initial", "só os 41 tokens Santo compilam — p-7 e p-3 não geram CSS"],
            [<Token key="c">--text-*</Token>, "initial", "text-sm e text-3xl não compilam"],
            [<Token key="d">--font-weight-*</Token>, "initial", "font-black e font-normal não compilam"],
            [<Token key="e">--radius-*</Token>, "initial", "rounded-lg nativo dá lugar ao rounded-lg do Santo (12px)"],
            [<Token key="f">--border-width-*</Token>, "initial", "sem efeito prático: o Tailwind não traz defaults aqui"],
          ]}
        />
      </Section>

      <Gap title="O que ainda não existe">
        <p>
          <strong className="font-semibold">Cor.</strong> As rampas do Figma
          (brand, neutral, feedback, product) ainda não foram importadas. Esta
          documentação inteira é monocromática por consequência — ver{" "}
          <Link href="/cor" className="font-medium hover:bg-foreground/5">
            Cor
          </Link>
          .
        </p>
        <p>
          <strong className="font-semibold">Largura de stroke não é uma
          escala fechada.</strong>{" "}
          <Token>border-2</Token> e <Token>border-7</Token> continuam
          compilando — ver{" "}
          <Link href="/stroke" className="font-medium hover:bg-foreground/5">
            Stroke
          </Link>
          .
        </p>
        <p>
          <strong className="font-semibold">Família monoespaçada.</strong> O
          Figma define só Albert Sans. Os nomes de token nesta página são
          renderizados em Albert Sans, não em mono.
        </p>
        <p>
          <strong className="font-semibold">Tamanho de ícone.</strong>{" "}
          <Token>size</Token> ainda é número cru — não há token no Figma nem no{" "}
          <Token>@theme</Token>.
        </p>
      </Gap>
    </>
  );
}
