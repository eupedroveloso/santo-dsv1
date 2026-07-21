<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Santo DS é o único Design System deste projeto

Não use shadcn/ui, Material, MUI, Chakra, Bootstrap, Ant, Mantine ou daisyUI. Não use a paleta e as escalas nativas do Tailwind (`bg-blue-500`, `p-4`, `text-sm`), nem valores arbitrários (`p-[13px]`, `text-[#fff]`). O Tailwind aqui é só motor de CSS: as únicas classes válidas são as geradas por tokens Santo registrados no `@theme` de `app/globals.css` — a fonte de verdade.

**Todo trabalho visual — componente, tela, layout, cor, espaçamento, tipografia — vai para o subagente `santo-ds-guardian`.** Se o token necessário não existe, pare e proponha; nunca improvise um valor cru.
