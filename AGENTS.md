<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Santo DS é o único Design System deste projeto

Não use shadcn/ui, Material, MUI, Chakra, Bootstrap, Ant, Mantine ou daisyUI. Não use a paleta e as escalas nativas do Tailwind (`bg-blue-500`, `p-4`, `text-sm`), nem valores arbitrários (`p-[13px]`, `text-[#fff]`). O Tailwind aqui é só motor de CSS.

O Santo DS vive em **dois lugares que são um sistema só**, com a mesma nomenclatura dos dois lados:

- **Figma** — arquivo-base `SANTO-DS-RTG` (`fileKey: mnd0vgxoY3eNq5RZHmVO2t`) e a biblioteca publicada `Santo DS` (`libraryKey: lk-47f52894…`)
- **Código** — o `@theme` de `app/globals.css`

Esse é o **único** arquivo Figma deste projeto. O token dá acesso a outros arquivos e bibliotecas da conta, mas acesso não é permissão: nada fora dele entra aqui. URL do Figma com `fileKey` diferente = pare e pergunte.

⚠️ Existe um `Santo-DS` (`r7Q39Yc1LFPpgQqcg1ZwGN`) de nome quase idêntico, que alcança a mesma biblioteca. **Não é este projeto.** Confirme sempre o `fileKey`, não o nome.

`brand/primary/500` no Figma é `--color-brand-primary-500` no código é `bg-brand-primary-500` na classe. Nunca renomeie na travessia. Divergência entre os dois não se resolve sozinha: reporte e pergunte, não sincronize em silêncio.

**Todo trabalho visual — componente, tela, layout, cor, espaçamento, tipografia — vai para o subagente `santo-ds-guardian`.** Se o token necessário não existe, pare e proponha; nunca improvise um valor cru.

Ao implementar um design do Figma, carregue a skill `figma-design-to-code` **antes** de chamar `get_design_context`. O que ela devolve é referência genérica (Tailwind nativo, às vezes hex cru) — traduzir para Santo DS é obrigatório, não opcional.
