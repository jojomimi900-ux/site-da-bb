# Sanitexx Website

Website institucional da Sanitexx - Saneantes de Alta Performance com Compromisso Ambiental.

Este projeto foi desenvolvido utilizando [Angular CLI](https://github.com/angular/angular-cli) versão 20.3.6.

## 🚀 Tecnologias

- **Angular 20.3** - Framework principal
- **TypeScript 5.9** - Linguagem de programação
- **SCSS** - Pré-processador CSS
- **Google Fonts (Inter)** - Tipografia

## 📋 Pré-requisitos

- Node.js 20.x ou superior
- npm 10.x ou superior

## 🔧 Instalação

```bash
# Clone o repositório
git clone https://github.com/jojomimi900-ux/site-da-bb.git

# Entre no diretório
cd site-da-bb

# Instale as dependências
npm install
```

## 🏃 Executando o projeto

### Servidor de desenvolvimento

Para iniciar o servidor local de desenvolvimento, execute:

```bash
npm start
# ou
ng serve
```

A aplicação estará disponível em `http://localhost:4200`. A aplicação recarregará automaticamente sempre que você modificar os arquivos fonte.

### Build de produção

Para compilar o projeto para produção, execute:

```bash
npm run build
# ou
ng build
```

Os arquivos compilados estarão na pasta `dist/sanitexx-website`. Por padrão, o build de produção otimiza sua aplicação para performance e velocidade.

## 📐 Estrutura do Projeto

```
src/
├── app/
│   ├── components/         # Componentes da aplicação
│   │   ├── header/        # Cabeçalho fixo com navegação
│   │   ├── hero/          # Seção hero principal
│   │   ├── principles/    # Seção de princípios
│   │   ├── history/       # Seção nossa história
│   │   ├── products/      # Seção de produtos
│   │   ├── contact/       # Formulário de contato
│   │   └── footer/        # Rodapé com certificações
│   ├── shared/            # Componentes reutilizáveis
│   ├── directives/        # Diretivas customizadas
│   ├── app.ts            # Componente raiz
│   └── app.html          # Template principal
├── styles.scss            # Estilos globais e design system
└── index.html            # HTML principal com SEO
```

## 🎨 Design System

O projeto implementa um design system completo baseado nas especificações fornecidas:

### Cores Principais
- **Sanitexx Blue** (#2E86C1) - Confiança e segurança
- **Sanitexx Green** (#58D68D) - Sustentabilidade
- **Sanitexx Graphite** (#34495E) - Texto principal

### Tipografia
- **Fonte:** Inter (Google Fonts)
- **Pesos:** 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)
- **Escala Modular:** Base 16px com fator 1.250 (Major Third)

### Espaçamento
Sistema baseado em múltiplos de 8px: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px

## ♿ Acessibilidade

O site foi desenvolvido seguindo as diretrizes **WCAG 2.1 AA**:

- ✓ Contraste mínimo de 4.5:1 para texto normal
- ✓ Navegação completa por teclado
- ✓ Estados de foco visíveis personalizados
- ✓ Estrutura semântica HTML5 com landmarks
- ✓ Suporte a `prefers-reduced-motion`
- ✓ Textos alternativos em imagens
- ✓ Skip links para conteúdo principal
- ✓ ARIA labels e roles apropriados

## 📱 Responsividade

Breakpoints definidos:
- **Mobile:** ≤767px
- **Tablet:** 768px - 1023px
- **Desktop:** 1024px - 1439px
- **Desktop Large:** ≥1440px

O layout utiliza CSS Grid e Flexbox para criar uma experiência responsiva e fluida em todos os dispositivos.

## 🔍 SEO

Implementações para otimização de motores de busca:

- Meta tags otimizadas (title, description)
- Open Graph tags para redes sociais
- Twitter Card meta tags
- Schema.org structured data:
  - Organization
  - FAQPage
- Idioma pt-BR definido
- URLs semânticas com âncoras

## 🧪 Testes

Para executar os testes unitários com [Karma](https://karma-runner.github.io):

```bash
ng test
```

## 📝 Scaffolding de Código

Para gerar um novo componente:

```bash
ng generate component nome-do-componente
```

Para lista completa de schematics disponíveis:

```bash
ng generate --help
```

## 🌟 Funcionalidades Implementadas

- ✅ Header fixo com navegação suave
- ✅ Seção Hero com CTAs e badges de certificação
- ✅ Seção Princípios (Segurança, Sustentabilidade, Eficácia)
- ✅ Seção Nossa História
- ✅ Seção Linhas de Produto (4 linhas)
- ✅ Formulário de Contato com validação
- ✅ Seção Certificações (ANVISA, ISO 9001, ISO 14001)
- ✅ Footer completo com links institucionais
- ✅ Design responsivo mobile-first
- ✅ Animações sutis respeitando preferências do usuário

## 📄 Licença

© 2025 Sanitexx. Todos os direitos reservados.

## 📚 Recursos Adicionais

Para mais informações sobre Angular CLI, visite a [página de Referência de Comandos do Angular CLI](https://angular.dev/tools/cli).
