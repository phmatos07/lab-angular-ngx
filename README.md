# lab-angular-ngx

Laboratório de estudos para analisar e experimentar as novidades das versões recentes do **Angular**. Cada página da aplicação demonstra, de forma isolada, um recurso do framework, como a sintaxe de controle de fluxo nos templates (`@if`, `@for`, `@switch`, `@let`), o carregamento adiado (`@defer`) e o rastreamento de erros melhorado.

## Tecnologias

| Ferramenta | Versão |
| --- | --- |
| Angular (core, router, forms, animations) | 22.2 |
| Angular Material / CDK | 22.2 |
| Angular Service Worker (PWA) | 22.2 |
| TypeScript | 6.0 |
| RxJS | 7.8 |
| Vitest (testes unitários) | 5.0 |

O projeto usa **componentes standalone** (sem `NgModule`), inicialização com `bootstrapApplication` e o builder `@angular/build:application` (esbuild).

## Demonstrações disponíveis

Todas as rotas usam lazy loading com `loadComponent` e aparecem no menu lateral ([app.routes.ts](src/app/app.routes.ts)).

| Rota | Página | O que demonstra |
| --- | --- | --- |
| `/` | Home | Página inicial com conteúdo de exemplo para testar o layout com rolagem. |
| `/stack-traces` | Rastreamento de Erros | Um botão lança um erro proposital pelo `StackTracesService` para observar no console a pilha de erros (stack trace) melhorada do Angular. |
| `/defer` | `@defer` | Bloco de carregamento adiado com os sub-blocos `@placeholder`, `@loading` e `@error`. |
| `/for` | `@for` | Iteração de uma lista mantida em um `signal`, com `track` e o bloco `@empty`. |
| `/if` | `@if` | Comparação de dois valores informados em campos do Angular Material, com `@if`, `@else if` e `@else`. |
| `/let` | `@let` | Declaração de variável no template a partir de um `Observable` com o pipe `async`. |
| `/switch` | `@switch` | Alternância entre "Pessoa Física" e "Pessoa Jurídica" após 3 segundos, com `@case` e `@default`. |

## Outros recursos do projeto

- **Diretiva `idQa`** ([resource-id.directive.ts](src/app/directives/resource-id.directive.ts)): gera automaticamente o `id` dos elementos no formato `lab-angular-ngx-<elemento>-<ação>` para facilitar testes automatizados (QA). As ações aceitas são `read`, `click` (padrão), `select` e `input`.

  ```html
  <button [idQa]="'button_throw_error'">Clique Aqui</button>
  <!-- id gerado: lab-angular-ngx-button_throw_error-click -->
  ```

- **PWA / Service Worker**: configurado em [ngsw-config.json](ngsw-config.json) e ativo apenas em builds de produção. O [LogUpdateService](src/app/services/log-update.service.ts) registra no console quando uma nova versão é detectada, está pronta ou falha ao instalar.
- **Layout**: cabeçalho com botão para abrir/fechar o menu lateral (`mat-drawer`), que lista as rotas automaticamente.

## Estrutura de pastas

```
src/app
├── directives/      # Diretivas reutilizáveis (idQa)
├── header/          # Cabeçalho da aplicação
├── models/          # Constantes e enums
├── pages/           # Uma pasta por demonstração (@defer, @for, @if, @let, @switch, home, stack-traces)
├── services/        # Serviços globais (LogUpdateService)
├── sidenav/         # Menu lateral gerado a partir das rotas
├── app.component.*  # Componente raiz
├── app.config.ts    # Providers (router, animations, service worker)
└── app.routes.ts    # Definição das rotas
```

## Como executar

Pré-requisitos: **Node.js** compatível com o Angular 22 e **npm**.

```bash
# Instalar as dependências
npm install

# Servidor de desenvolvimento em http://localhost:4200
npm start
```

### Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `npm start` | Inicia o servidor de desenvolvimento (`ng serve`). |
| `npm run build` | Gera o build de produção em `dist/lab-angular-ngx`. |
| `npm run build:watch` | Build de desenvolvimento em modo observação. |
| `npm run start:ws` | Serve o build gerado com `http-server` na porta 8080 (útil para testar o Service Worker). |
| `npm test` | Executa os testes unitários com Vitest. |

### Testando o Service Worker

O Service Worker só funciona no build de produção:

```bash
npm run build
npm run start:ws
```

Depois acesse `http://localhost:8080`.

## Como adicionar uma nova demonstração

1. Crie o componente em `src/app/pages/<nome>/`:
   ```bash
   npx ng generate component pages/<nome>
   ```
2. Registre a rota em [app.routes.ts](src/app/app.routes.ts) usando `loadComponent` e um `title`. O item aparece no menu lateral automaticamente.
