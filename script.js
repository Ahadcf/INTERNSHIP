console.log("javascript is connected");

document.addEventListener("DOMContentLoaded", () => {
    const year = new Date().getFullYear();
    const footerText = document.querySelector('.site-footer p');
    if (footerText) {
        footerText.innerHTML = `&copy; ${year} Ahad Sajid. Built with HTML & CSS ❤️`;
    }

    function getGreeting() {
        const hour = new Date().getHours();
        if (hour < 12) return "Good Morning";
        if (hour < 17) return "Good Afternoon";
        return "Good Evening";
    }

    const heroTitle = document.querySelector('.hero-section h1');
    if (heroTitle) {
        heroTitle.innerHTML = `${getGreeting()}, I'm <span class="highlight">Ahad 👋</span>`;
    }

    const themeBtn = document.querySelector(".theme-toggle");

    function updateThemeIcon(theme) {
        if (themeBtn) {
            themeBtn.textContent = theme === "dark" ? "☀️" : "🌙";
        }
    }

    if (themeBtn) {
        let savedTheme = localStorage.getItem("theme") || "light";
        document.body.setAttribute("data-theme", savedTheme);
        updateThemeIcon(savedTheme);

        themeBtn.addEventListener("click", () => {
            let currentTheme = document.body.getAttribute("data-theme") || "light";
            let nextTheme = currentTheme === "light" ? "dark" : "light";

            document.body.setAttribute("data-theme", nextTheme);
            localStorage.setItem("theme", nextTheme);
            updateThemeIcon(nextTheme);
        });
    }
});