# 🚀 Playwright Automation Framework

A scalable and maintainable test automation framework built with **Playwright** and **TypeScript**, designed following software engineering best practices.

The purpose of this project is to demonstrate how a modern automation framework can be structured for UI and API testing while keeping the code clean, reusable, and easy to maintain.

---

# 📌 Features

- UI Automation with Playwright
- API Testing
- Page Object Model (POM)
- Component Object Pattern
- TypeScript
- Environment Configuration (.env)
- HTML Reports
- Screenshot & Video on Failure
- Trace Viewer
- GitHub Actions (Coming Soon)
- Docker Support (Coming Soon)

---

# 🛠️ Tech Stack

- Playwright
- TypeScript
- Node.js
- dotenv
- Git
- GitHub

---

# 📁 Project Structure

```
automation-framework/

├── .github/
├── config/
├── docs/
├── reports/
├── src/
│   ├── api/
│   ├── components/
│   ├── constants/
│   ├── data/
│   ├── fixtures/
│   ├── helpers/
│   ├── models/
│   ├── pages/
│   ├── services/
│   ├── types/
│   └── utils/
│
├── tests/
│   ├── api/
│   ├── smoke/
│   └── ui/
│
├── .env
├── package.json
├── playwright.config.ts
├── README.md
└── tsconfig.json
```

---

# ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/yourusername/automation-framework.git
```

Install dependencies

```bash
npm install
```

Install Playwright browsers

```bash
npx playwright install
```

---

# ▶️ Running Tests

Run all tests

```bash
npx playwright test
```

Run UI tests

```bash
npx playwright test tests/ui
```

Run API tests

```bash
npx playwright test tests/api
```

Run Smoke tests

```bash
npx playwright test tests/smoke
```

---

# 📊 Reports

Generate the HTML report

```bash
npx playwright show-report
```

---

# 📂 Framework Architecture

The framework follows a modular architecture where each folder has a single responsibility.

| Folder | Responsibility |
|---------|---------------|
| pages | Represents application pages using the Page Object Model |
| components | Reusable UI components shared across pages |
| api | API endpoints and API-related logic |
| fixtures | Custom Playwright fixtures |
| services | Business logic shared between tests |
| helpers | Framework-specific helper classes |
| utils | Generic reusable utility functions |
| constants | Static values and configuration constants |
| data | Test data |
| types | TypeScript interfaces and types |
| config | Environment configuration |

---

# 📈 Roadmap

- [x] Initial Project Structure
- [x] Playwright Configuration
- [ ] Environment Management
- [ ] Base Page
- [ ] Page Object Model
- [ ] Component Object Model
- [ ] API Automation
- [ ] Authentication
- [ ] Test Data Management
- [ ] CI/CD Integration
- [ ] Docker Support
- [ ] Allure Reports
- [ ] Logging
- [ ] Retry Strategy
- [ ] Parallel Execution Improvements

---

# 🎯 Design Principles

This framework follows the following engineering principles:

- Single Responsibility Principle (SRP)
- Don't Repeat Yourself (DRY)
- Keep It Simple (KISS)
- Page Object Model (POM)
- Component Object Pattern
- Reusability
- Maintainability
- Scalability

---

# 📚 Learning Goals

This project is continuously evolving as a professional automation framework.

Current goals include:

- Improve framework architecture
- Apply software engineering principles
- Learn advanced Playwright
- Improve TypeScript skills
- Implement CI/CD
- Build a production-ready automation framework

---

# 👨‍💻 Author

Jesus Cordova

QA Automation Engineer