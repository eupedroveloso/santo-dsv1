import {
  ArrowRightRegular,
  ArrowRightLight,
  ArrowRightSolid,
  ArrowRightDuotone,
  HouseRegular,
  GearRegular,
  BellRegular,
  UserRegular,
  MagnifyingGlassRegular,
  CalendarRegular,
  EnvelopeRegular,
  LockRegular,
  TrashRegular,
  PenRegular,
  CloudRegular,
  HeartRegular,
  InstagramBrand,
  FaceMehRegular,
} from "@dev-mbr/icons";
import { PageHeader, Section, Table, Trap, Gap, Token } from "../_components/doc";

const GRID = [
  { Icon: HouseRegular, name: "HouseRegular" },
  { Icon: GearRegular, name: "GearRegular" },
  { Icon: BellRegular, name: "BellRegular" },
  { Icon: UserRegular, name: "UserRegular" },
  { Icon: MagnifyingGlassRegular, name: "MagnifyingGlassRegular" },
  { Icon: CalendarRegular, name: "CalendarRegular" },
  { Icon: EnvelopeRegular, name: "EnvelopeRegular" },
  { Icon: LockRegular, name: "LockRegular" },
  { Icon: TrashRegular, name: "TrashRegular" },
  { Icon: PenRegular, name: "PenRegular" },
  { Icon: CloudRegular, name: "CloudRegular" },
  { Icon: HeartRegular, name: "HeartRegular" },
];

const WEIGHTS = [
  { Icon: ArrowRightLight, suffix: "Light" },
  { Icon: ArrowRightRegular, suffix: "Regular" },
  { Icon: ArrowRightSolid, suffix: "Solid" },
  { Icon: ArrowRightDuotone, suffix: "Duotone" },
];

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Fundação"
        title="Ícones"
        lead="Única fonte permitida: o pacote @dev-mbr/icons (repo rtg-icons). São os mesmos ícones da aba Icons do Figma. 4.791 ícones × 4 pesos + 592 de marca."
      />

      <Section
        title="Convenção de nome"
        hint="Nome + peso, sempre. O nome puro não existe no pacote."
      >
        <Table
          head={["Tipo", "Sufixo", "Exemplo"]}
          rows={[
            ["Ícone comum", <Token key="a">Regular Light Solid Duotone</Token>, <Token key="b">ArrowRightRegular</Token>],
            ["Ícone de marca", <Token key="c">Brand</Token>, <Token key="d">InstagramBrand</Token>],
          ]}
        />
      </Section>

      <Trap title="O README do rtg-icons está errado sobre os nomes">
        <p>
          O README manda importar <Token>ArrowRight</Token> e{" "}
          <Token>Instagram</Token>. Esses nomes não existem no pacote —
          verificado na v1.0.2. Seguir o README dá erro de importação.
        </p>
        <p>
          Do Figma para o código: o componente <Token>cart-flatbed-boxes</Token>{" "}
          vira <Token>CartFlatbedBoxes</Token> mais o peso. Kebab-case vira
          PascalCase; as subpastas do repositório não entram no nome.
        </p>
      </Trap>

      <Section title="Pesos" hint="O mesmo ícone nos quatro pesos.">
        <div className="flex flex-col gap-16 rounded-md border-xs border-foreground/15 p-24 md:flex-row">
          {WEIGHTS.map(({ Icon, suffix }) => (
            <div key={suffix} className="flex flex-1 flex-col items-center gap-8">
              <Icon size={32} />
              <span className="text-caption font-medium text-foreground/60">
                {suffix}
              </span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Amostra" hint="Herdam a cor do texto por currentColor.">
        <div className="grid grid-cols-2 gap-2 rounded-md border-xs border-foreground/15 p-16 md:grid-cols-3 lg:grid-cols-4">
          {GRID.map(({ Icon, name }) => (
            <div
              key={name}
              className="flex flex-col items-center gap-8 rounded-sm p-16 hover:bg-foreground/5"
            >
              <Icon size={24} />
              <span className="text-caption font-regular text-foreground/50">
                {name}
              </span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Props" hint="API idêntica à do Lucide.">
        <Table
          head={["Prop", "Padrão", "Nota"]}
          rows={[
            [<Token key="a">size</Token>, "24", "número cru — não há token de tamanho de ícone"],
            [<Token key="b">color</Token>, <Token key="c">currentColor</Token>, "herda a cor do texto; prefira controlar por text-*"],
            [<Token key="d">strokeWidth</Token>, "2", "não é o mesmo eixo que stroke/width do Figma"],
            [<Token key="e">absoluteStrokeWidth</Token>, "false", "—"],
            [<Token key="f">className</Token>, "—", "mais qualquer prop SVG nativa"],
          ]}
        />
      </Section>

      <Section title="Proibido" hint="A regra de fonte única vale integralmente.">
        <ul className="flex flex-col gap-8 text-body-small font-regular text-foreground/70">
          <li>
            Qualquer outra biblioteca — lucide-react, Heroicons, Material Icons,
            Font Awesome, Feather, Phosphor.
          </li>
          <li>SVG inline desenhado à mão para resolver um ícone que falta.</li>
          <li>Copiar o SVG de outro set e colar como componente local.</li>
        </ul>
        <p className="max-w-512 text-body-small font-regular text-foreground/70">
          Ícone que falta não se conserta neste repositório: o designer exporta
          o SVG para o repo <Token>rtg-icons</Token>, o CI publica, e aqui só se
          atualiza a versão do pacote. Adicionar um SVG solto quebra o elo entre
          o Figma e o pacote.
        </p>
      </Section>

      <Gap title="Lacunas conhecidas">
        <p>
          <strong className="font-semibold">FaceMehSolid não existe.</strong> É o
          único ícone do pacote sem variante Solid — confirmado na v1.0.2. As
          outras três variantes existem:
        </p>
        <div className="flex items-center gap-16">
          <FaceMehRegular size={24} />
          <span className="text-caption text-foreground/50">
            FaceMehRegular · FaceMehLight · FaceMehDuotone
          </span>
        </div>
        <p>
          <strong className="font-semibold">Tamanho de ícone não é token.</strong>{" "}
          <Token>size={"{20}"}</Token> é número cru. Não existe token no Figma
          nem no <Token>@theme</Token> — é a exceção tolerada ao “nada de valor
          cru”, e deve ser resolvida junto com a próxima revisão da escala.
        </p>
        <div className="flex items-center gap-16">
          <InstagramBrand size={24} />
          <span className="text-caption text-foreground/50">
            Ícones de marca não têm peso: InstagramBrand
          </span>
        </div>
      </Gap>
    </>
  );
}
