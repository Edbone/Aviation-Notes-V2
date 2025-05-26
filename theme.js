// js/theme.js
document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("theme-toggle");
    if (!toggleBtn) return;
  
    const savedTheme = localStorage.getItem("theme") || "dark";
    document.body.classList.add(savedTheme);
  
    toggleBtn.addEventListener("click", () => {
      const isDark = document.body.classList.contains("dark");
      document.body.classList.toggle("dark", !isDark);
      document.body.classList.toggle("light", isDark);
      localStorage.setItem("theme", isDark ? "light" : "dark");
    });
  });
  