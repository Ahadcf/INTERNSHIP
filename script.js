document.addEventListener("DOMContentLoaded", () => {
  // 1. Dynamic Footer Year
  const yearSpan = document.getElementById("footer-year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // 2. Mobile Menu Toggle
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", !isExpanded);
      navLinks.classList.toggle("active");
    });

    // Close mobile menu when clicking a link
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // 3. Light / Dark Theme Switcher
  const themeToggle = document.getElementById("theme-toggle");
  const iconSpan = themeToggle ? themeToggle.querySelector(".icon") : null;

  // Read theme preference or default to dark
  const savedTheme = localStorage.getItem("theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";

      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
      updateThemeIcon(newTheme);
    });
  }

  function updateThemeIcon(theme) {
    if (iconSpan) {
      iconSpan.textContent = theme === "dark" ? "🌙" : "☀️";
    }
  }

  // 4. Scroll-Triggered Skill Progress Bar Animations
  const skillSection = id("skills");
  const progressBars = document.querySelectorAll(".progress");

  if (skillSection && progressBars.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            progressBars.forEach((bar) => {
              const level = bar.style.getPropertyValue("--level");
              bar.style.width = level;
            });
            observer.unobserve(entry.target); // Trigger only once
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(skillSection);
  }

  function id(elementId) {
    return document.getElementById(elementId);
  }
});