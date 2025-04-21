<p align="right">
  🇺🇸 <a href="./README.md">Read in English</a>
</p>

# Dashboard React

Aplicação de dashboard desenvolvida com React + TypeScript, simulando um ambiente real de autenticação e gerenciamento de dados com integração mockada.

## 📌 Descrição do Projeto

- Tela de login com autenticação por e-mail e senha
- Uso de JWT (mocked) com decodificação via jwt-decode
- Dashboard protegido com listagem de contas (usuários)
- Funcionalidades completas de CRUD (Criar, Editar, Excluir)
- Filtro dinâmico por nome
- Alternância de tema (light/dark) com persistência local
- Suporte a múltiplos idiomas (🇧🇷 / 🇺🇸) com LinguiJS
- Toasts de notificação de sucesso e erro
- Projeto testado com Vitest e React Testing Library

## ✅ Funcionalidades

- [x] Autenticação fake com validação real (admin@example.com / 123456)
- [x] Decodificação de token JWT para obter dados do usuário
- [x] Proteção de rotas (auth guard)
- [x] Listagem e gerenciamento de contas
- [x] CRUD completo com formulário validado por zod
- [x] Suporte i18n com LinguiJS (PT-BR e EN-US)
- [x] Dark Mode com toggle elegante e persistente
- [x] Testes unitários com cobertura dos principais fluxos

## 🔐 Dados de acesso (validados)

```
E-mail: admin@example.com
Senha: 123456
```

## 🚀 Tecnologias e Ferramentas

- React 18
- TypeScript
- Vite
- React Router DOM
- Tailwind CSS
- react-hook-form + zod
- jwt-decode
- @lingui/core + @lingui/react (i18n)
- react-hot-toast
- Vitest
- Testing Library
- Vercel (deploy)

## 🚩 Instruções para rodar o projeto

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/react-dashboard.git
cd react-dashboard
```

2. Instale as dependências:

```bash
pnpm install

# ou

npm install
```

3. Rode o projeto localmente:

```bash
pnpm dev
```

4. Rode os testes:

```bash
pnpm test
```

## 🧪 Cobertura de testes

- Componente de tema (ThemeToggle)
- Autenticação
- Validações de login
- Validação do dashboard

## 📦 Deploy

- [🔗 Acesse o app em produção](https://react-dashboard-sona.vercel.app/)

## 📝 Organização

```bash
src/
├── features/ # Módulos agrupados por feature (auth, dashboard, etc)
├── components/ # Componentes comuns e layout
├── services/ # Chamadas de APIs (simuladas via JSON local)
├── mocks/ # Dados mockados opcional (pode ser removido com backend real)
├── routes/ # Rotas protegidas
├── shared/ # Theme
├── tests/ # Testes unitários organizados
```

## 📎 Considerações

- O projeto está pronto para ser expandido com backend real.
- Estrutura modular e escalável, baseada em boas práticas.
- Internacionalização e temas implementados de forma realista e persistente.

## 👨‍💻 Autor

Feito por [Alexandre Silva] • [LinkedIn](https://linkedin.com/in/ardsilva87)  
Repositório: [GitHub](https://github.com/ardsilva/react-dashboard)
