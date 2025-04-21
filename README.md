<p align="right">
  🇧🇷 <a href="./README.pt-BR.md">Ler em Português</a>
</p>

# Dashboard React

Dashboard application built with React + TypeScript, simulating a real-world environment with user authentication and data management using mocked integration.

## 📌 Project Overview

- Login screen with email and password authentication
- Mocked JWT token with decoding via jwt-decode
- Protected dashboard with user account listing
- Full CRUD functionality (Create, Read, Update, Delete)
- Dynamic name sorting
- Light/Dark theme switching with local persistence
- Multi-language support (🇧🇷 / 🇺🇸) using LinguiJS
- Toast notifications for success and error messages
- Tested with Vitest and React Testing Library

## ✅ Features

- [x] Mock authentication with real validation (admin@example.com / 123456)
- [x] JWT decoding to extract user data
- [x] Route protection (auth guard)
- [x] Account listing and management
- [x] Complete CRUD with zod-validated form
- [x] i18n support via LinguiJS (PT-BR and EN-US)
- [x] Persistent dark mode with elegant toggle
- [x] Unit testing covering main flow

## 🔐 Login credentials

```
E-mail: admin@example.com
Senha: 123456
```

## 🚀 Technologies & Tools

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

## 🚩 Getting Started

1. Clone the repository:

```bash
git clone https://github.com/seu-usuario/react-dashboard.git
cd react-dashboard
```

2. Install dependencies:

```bash
pnpm install

# ou

npm install
```

3. Run app locally:

```bash
pnpm dev
```

4. Run the tests:

```bash
pnpm test
```

## 🧪 Test Coverage

- Theme component (ThemeToggle)
- Authentication
- Login form validation
- Dashboard validation with mocked accounts

## 📦 Deployment

- [🔗 Open the live app](https://react-dashboard-sona.vercel.app/)

## 📝 Project Structure

```bash
src/
├── features/
├── components/
├── services/
├── mocks/
├── routes/
├── shared/
├── tests/
```

## 📎 Notes

- The project is ready to be integrated with a real backend.
- Clean and scalable architecture based on best practices.
- Realistic implementation of internationalization (i18n) and dark mode.

## 👨‍💻 Author

Made by [Alexandre Silva] • [LinkedIn](https://linkedin.com/in/ardsilva87)  
Source code: [GitHub](https://github.com/ardsilva/react-dashboard)
