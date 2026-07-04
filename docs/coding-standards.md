# Coding Standards

This project follows consistent coding standards to improve readability and maintainability.

---

# Naming Conventions

## Classes

Use PascalCase.

Examples:

- LoginPage
- BasePage
- UserService
- ApiClient

---

## Methods

Use camelCase and meaningful verbs.

Examples:

- login()
- logout()
- createUser()
- deleteProduct()

---

## Variables

Use camelCase.

Examples:

- username
- password
- loginButton

Avoid abbreviations.

Bad examples:

- btn
- usr
- txt

---

## Constants

Use UPPER_SNAKE_CASE.

Example:

```
DEFAULT_TIMEOUT
BASE_URL
MAX_RETRIES
```

---

# Folder Responsibilities

Each folder should have a single responsibility.

Avoid mixing:

- UI
- API
- Utilities
- Business logic

---

# General Guidelines

- Keep methods small.
- Avoid duplicated code.
- Prefer reusable components.
- Write self-explanatory code.
- Favor composition over duplication.