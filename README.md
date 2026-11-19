# Juniando | Frontend

Frontend da **Juniando**, a comunidade do LAB08 para quem está começando na programação. Aqui ficam o feed de publicações, a página de cada post, o login (e-mail ou GitHub), o cadastro e o perfil.

O frontend conversa com duas APIs:

| API         | Responsabilidade                                            | Variável       |
| ----------- | ----------------------------------------------------------- | -------------- |
| Node.js     | autenticação: cadastro, login, GitHub OAuth e refresh token | `AUTH_API_URL` |
| Spring Boot | posts, votos e upload de imagens                            | `CORE_API_URL` |

## Stack

- [Next.js 16](https://nextjs.org/docs) (App Router, React Compiler, Cache Components) com React 19 e TypeScript
- [Tailwind CSS 4](https://tailwindcss.com/docs)
- [Vitest](https://vitest.dev) e [Testing Library](https://testing-library.com/docs/react-testing-library/intro/) para testes unitários e de integração
- ESLint, Prettier, Husky, lint-staged e commitlint para padronizar o código e os commits

## Como rodar

Pré-requisito: **Node 24** (use `nvm use` para ler o `.nvmrc`).

```bash
npm install
cp .env.example .env.local   # ajuste as URLs das APIs
npm run dev                  # http://localhost:3000
```

## Scripts

| Script                     | O que faz                                              |
| -------------------------- | ------------------------------------------------------ |
| `npm run dev`              | servidor de desenvolvimento                            |
| `npm run build`            | build de produção                                      |
| `npm run start`            | serve o build de produção                              |
| `npm run lint`             | ESLint (`lint:fix` corrige o que der)                  |
| `npm run format`           | formata tudo com Prettier (`format:check` só verifica) |
| `npm run typecheck`        | gera os tipos de rotas do Next e roda `tsc`            |
| `npm run test`             | todos os testes uma vez (`test:watch` fica observando) |
| `npm run test:unit`        | só os testes unitários                                 |
| `npm run test:integration` | só os testes de integração                             |

## Estrutura

```
src/
  app/          rotas (App Router)
  components/   componentes reutilizáveis
  services/     clientes das APIs (authApi, coreApi)
tests/
  unit/         uma peça isolada (componente, hook, função)
  integration/  várias peças juntas (layouts, páginas, fluxos)
```

Os testes ficam em `tests/`, espelhando o caminho do arquivo testado em `src/`:
`src/components/ui/button.tsx` é testado em `tests/unit/components/ui/button.test.tsx`.
Os arquivos de teste terminam em `.test.ts` ou `.test.tsx`.
O guia completo, com o que já é testado e quando criar um teste, está em [tests/tests.md](tests/tests.md).

## Qualidade automática

- **pre-commit:** ESLint e Prettier rodam só nos arquivos do commit.
- **commit-msg:** o commitlint valida a mensagem no padrão [Conventional Commits](https://www.conventionalcommits.org/pt-br/v1.0.0/), em inglês (ex.: `feat(feed): add pagination`).
- **pre-push:** typecheck e todos os testes.
