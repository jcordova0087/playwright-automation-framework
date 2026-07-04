# Page Object Model

## Purpose

The Page Object Model (POM) is used to represent application pages as classes.

Each page is responsible for managing:

- Locators
- User interactions
- Page-specific validations

This keeps test cases clean, readable, and maintainable.

---

# Responsibilities

A Page Object should:

- Store page locators.
- Perform actions available on that page.
- Expose meaningful methods to the tests.

Example:

```
loginPage.login(username, password)
```

instead of

```
page.fill(...)
page.click(...)
```

---

# What a Page Should NOT Do

A Page Object should not:

- Contain test assertions.
- Contain business logic.
- Store test data.
- Perform API calls.

---

# Benefits

- Improved readability.
- Better maintainability.
- Reduced duplicated code.
- Easier framework scalability.