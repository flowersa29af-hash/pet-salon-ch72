// Dark mode for Bootstrap 5.3 pages.
// Bootstrap switches its colors when <html> has data-bs-theme="dark".

// Apply the saved theme right away (this script loads in <head>, so no white flash)
let savedTheme = localStorage.getItem("theme") || "light";
document.documentElement.setAttribute("data-bs-theme", savedTheme);

function updateButton(theme) {
    let btn = document.getElementById("themeToggle");
    if (btn) {
        btn.textContent = theme === "dark" ? "☀ Light" : "⏾ Dark";
    }
}

function toggleTheme() {
    let current = document.documentElement.getAttribute("data-bs-theme");
    let next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-bs-theme", next);
    localStorage.setItem("theme", next); // remember the choice across pages/reloads
    updateButton(next);
}

document.addEventListener("DOMContentLoaded", function () {
    updateButton(savedTheme);
    document.getElementById("themeToggle").addEventListener("click", toggleTheme);
});
