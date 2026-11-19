# Testes

Este documento explica como os testes do frontend estão organizados, o que já é testado e o critério para criar um teste novo.

## Ferramentas

| Ferramenta                                                                      | Para quê                                                                          |
| ------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| [Vitest](https://vitest.dev)                                                    | roda os testes (`describe`, `it`, `expect`)                                       |
| [Testing Library](https://testing-library.com/docs/react-testing-library/intro) | monta os componentes React e procura elementos na tela (`render`, `screen`)       |
| [jest-dom](https://github.com/testing-library/jest-dom)                         | verificações de DOM (`toBeInTheDocument`, `toHaveAttribute`, `toHaveTextContent`) |
| [jsdom](https://github.com/jsdom/jsdom)                                         | navegador simulado em Node; os testes não abrem um navegador de verdade           |

## Como rodar

```bash
npm run test               # todos os testes, uma vez
npm run test:unit          # só os unitários
npm run test:integration   # só os de integração
npm run test:watch         # modo observação: roda de novo a cada arquivo salvo
```

O hook de **pre-push** roda `npm run test`. Se algum teste falhar, o push é bloqueado.

## Organização

```
tests/
  unit/          uma peça isolada (componente, hook, função)
  integration/   várias peças juntas (layouts, páginas, fluxos)
```

- Os testes ficam fora do `src/` e repetem o caminho do arquivo testado:
  `src/app/(community)/layout.tsx` é testado em `tests/integration/app/community-layout.test.tsx`.
- O arquivo de teste termina em `.test.ts` ou `.test.tsx`. Outros arquivos dentro de `tests/` são ignorados pelo Vitest.
- Cada pasta é um projeto do Vitest (`unit` e `integration`), configurado em `vitest.config.mts`.
- `tests/unit/` está vazia por enquanto (só tem o `.gitkeep`). Ela fica no projeto para quando algum teste unitário fizer sentido.

### Unitário ou integração?

| Tipo       | Testa                               | Exemplos                                                                           |
| ---------- | ----------------------------------- | ---------------------------------------------------------------------------------- |
| Unitário   | uma peça sozinha, com regra própria | função que formata data ("há 3 horas"), hook de paginação, validação de formulário |
| Integração | várias peças funcionando juntas     | layout com header e footer, página do feed com a API simulada, fluxo de login      |

## Quando criar um teste

A regra é ter **poucos testes, e que protejam um comportamento real**. Antes de criar um, pergunte: "se esse teste quebrar, quebrou algo que a pessoa usuária percebe?"

Vale testar:

- regras de negócio e lógica com condições (formatação, validação, permissões);
- o que acontece quando o usuário interage (clicar, digitar, enviar);
- estruturas que a página inteira depende, como as regiões do layout;
- acessibilidade que é fácil quebrar sem perceber (links de atalho, nomes de botões).

Não vale testar:

- componente só visual que apenas repassa o que recebe (um logo, um grid que renderiza os espaços);
- classes CSS, cores e tamanhos (ver [O que os testes não cobrem](#o-que-os-testes-não-cobrem));
- código de bibliotecas (shadcn, Base UI, Next).

Teste unitário novo é combinado com o time antes de entrar.

## Testes existentes

### `tests/integration/app/community-layout.test.tsx`

Testa o layout das páginas da comunidade (`src/app/(community)/layout.tsx`), que junta `SiteHeader`, `Logo`, `Container` e `SiteFooter`.

| Teste                                     | O que garante                                                                                                                                                                             |
| ----------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `renders header, main content and footer` | o header (`<header>`) aparece com o logo, a página entra dentro do `<main>` (e não no header ou no footer) e o footer (`<footer>`) existe                                                 |
| `offers a skip link to the main content`  | o link "Pular para o conteúdo" aponta para `#conteudo` e o `<main>` tem `id="conteudo"`. O link aparece ao navegar com Tab e pula o header; o teste pega se só um dos lados for renomeado |

Detalhe do `render`: todo layout do Next recebe `params` (os parâmetros da URL, como o `id` em `/posts/[id]`). Essa rota não tem parâmetros, então o teste passa `params={Promise.resolve({})}`.

## Como escrever um teste

Todo teste segue três passos: **montar** o componente, **procurar** algo na tela e **conferir** o resultado.

```tsx
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import CommunityLayout from '@/app/(community)/layout';

describe('CommunityLayout', () => {
  // descreve o comportamento esperado
  it('renders header, main content and footer', () => {
    // 1. monta
    render(
      <CommunityLayout params={Promise.resolve({})}>
        <p>conteúdo</p>
      </CommunityLayout>,
    );

    // 2. procura e 3. confere
    expect(screen.getByRole('main')).toHaveTextContent('conteúdo');
  });
});
```

- Importe o código da aplicação pelo alias `@/` (que aponta para `src/`).
- Escreva os nomes de `describe` e `it` em inglês, como os commits.
- Não é preciso limpar a tela entre os testes: o `vitest.setup.ts` já faz isso depois de cada um.

### Procure pelo papel (role), não por classe ou id

Prefira `getByRole`. Ele encontra os elementos do jeito que um leitor de tela os enxerga, então o teste não quebra quando o visual muda e ainda cobre acessibilidade.

| HTML                | role            |
| ------------------- | --------------- |
| `<header>`          | `banner`        |
| `<main>`            | `main`          |
| `<footer>`          | `contentinfo`   |
| `<aside>`           | `complementary` |
| `<nav>`             | `navigation`    |
| `<a href>`          | `link`          |
| `<button>`          | `button`        |
| `<h1>` a `<h6>`     | `heading`       |
| `<input type=text>` | `textbox`       |

Com `name` você filtra pelo nome acessível (o texto lido em voz alta):

```tsx
screen.getByRole('button', { name: 'Escrever' });
screen.getByRole('link', { name: /juniando/i }); // regex: ignora maiúsculas
```

Ordem de preferência das buscas: `getByRole` → `getByLabelText` (campos de formulário) → `getByText`. Use `getByTestId` só quando não houver outra forma.

Para simular o usuário (clicar, digitar), use o `@testing-library/user-event`, que já está instalado.

## Configuração

- **`vitest.config.mts`**
  - `environment: 'jsdom'`: navegador simulado.
  - `setupFiles`: carrega o `vitest.setup.ts` antes dos testes.
  - `css: false`: o CSS não é processado, o que deixa os testes mais rápidos.
  - `passWithNoTests: true`: uma pasta sem testes (como `tests/unit/` hoje) não faz o comando falhar.
  - `projects`: define os projetos `unit` e `integration`, cada um com sua pasta.
  - `vite-tsconfig-paths`: faz o alias `@/` funcionar nos testes.
- **`vitest.setup.ts`**: ativa as verificações do jest-dom e limpa o DOM depois de cada teste.

## O que os testes não cobrem

Como o CSS não é processado e o jsdom não calcula layout, os testes **não verificam**:

- tamanhos e espaçamentos (por exemplo, o header ter 64px);
- responsividade (colunas lado a lado em 1280px, uma coluna só em 360px);
- cores, fontes e o tema.

Isso é conferido no navegador, comparando com o Figma nas larguras de 1280px, 1024px e 360px.
