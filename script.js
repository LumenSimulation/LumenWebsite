// Applies all settings from config.js to the website.
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-config]").forEach(element => {
        const key = element.getAttribute("data-config");
        if (ARG[key] !== undefined) {
            element.textContent = ARG[key];
        }
    });

    const title = document.querySelector("title");
    if (title) {
        title.textContent = `${ARG.modName} — ${ARG.websiteName}`;
    }

    const footer = document.getElementById("footer");
    if (footer) {
        footer.innerHTML = ARG.showFictionDisclaimer
            ? `© ${ARG.websiteName} · This website is part of a fictional ARG.`
            : `© ${ARG.websiteName}`;
    }

    const downloadBtn = document.getElementById("downloadBtn");
    const status = document.getElementById("downloadStatus");

    if (downloadBtn) {
        downloadBtn.addEventListener("click", () => {
            status.textContent = "Preparing download...";
            setTimeout(() => {
                status.textContent = `Lunen-${ARG.modVersion}.jar download unavailable.`;
            }, 900);
        });
    }
});
