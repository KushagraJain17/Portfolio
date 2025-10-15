// Theme toggle for portfolio
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
}

// Optional: initialize theme to light if not set
if (!document.documentElement.getAttribute("data-theme")) {
  document.documentElement.setAttribute("data-theme", "light");
}
