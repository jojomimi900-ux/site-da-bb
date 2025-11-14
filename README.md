# site-mathilde2

Este projeto foi gerado usando [Angular CLI](https://github.com/angular/angular-cli) versão 20.3.10.

## Ambiente de Desenvolvimento

### Pré-requisitos
- Node.js (versão 20.x ou superior)
- npm (versão 10.x ou superior)

### Instalação
```bash
npm install
```

### Servidor de Desenvolvimento
Para iniciar o servidor de desenvolvimento local:

```bash
npm start
```

Ou usando Angular CLI diretamente:
```bash
ng serve
```

Acesse `http://localhost:4200/` no navegador. A aplicação será recarregada automaticamente quando você modificar os arquivos fonte.

### Build
Para construir o projeto para produção:

```bash
npm run build
```

Os artefatos de build serão armazenados no diretório `dist/`.

### Testes
Para executar os testes unitários:

```bash
npm test
```

### Estrutura do Projeto
```
site-mathilde2/
├── src/               # Código fonte da aplicação
│   ├── app/          # Componentes e módulos Angular
│   ├── assets/       # Recursos estáticos
│   └── index.html    # Página principal
├── public/           # Arquivos públicos
├── angular.json      # Configuração do Angular
├── package.json      # Dependências do projeto
└── tsconfig.json     # Configuração do TypeScript
```

### Comandos Úteis
- `npm start` - Inicia o servidor de desenvolvimento
- `npm run build` - Build para produção
- `npm test` - Executa testes unitários
- `npm run watch` - Build contínuo durante desenvolvimento
- `ng generate component nome` - Gera novo componente

### Recursos Adicionais
Para mais informações sobre Angular CLI, visite [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli).
