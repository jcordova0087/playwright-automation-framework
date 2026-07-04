# Component Object Model

## Purpose

A Component represents reusable UI elements that appear on multiple pages.

Instead of duplicating locators across different Page Objects, common elements are extracted into reusable components.

---

# Examples

Examples of reusable components include:

- Navigation Bar
- Sidebar
- Footer
- Search Bar
- Modal Dialog
- Toast Notifications
- Pagination
- Dropdown Menus

---

# Benefits

- Reduced code duplication.
- Better maintainability.
- Easier updates.
- Cleaner Page Objects.

---

# Responsibilities

Components should:

- Encapsulate their own locators.
- Expose reusable methods.
- Be independent from specific pages whenever possible.

---

# Example

Instead of implementing the navigation menu in every page:

```
HomePage
DashboardPage
ProductsPage
OrdersPage
```

All pages can reuse:

```
NavigationComponent
```