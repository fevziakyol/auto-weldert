document.addEventListener("DOMContentLoaded", function () {
    const language = localStorage.getItem("language") || "de";

    fetch(`locales/${language}.json`)
        .then(response => response.json())
        .then(translations => {
            document.querySelectorAll("[data-i18n]").forEach(element => {
                const key = element.getAttribute("data-i18n");

                if (translations[key].includes("<span")) {
                    element.innerHTML = translations[key]; // HTML içeren çeviriler
                } else {
                    element.textContent = translations[key]; // Normal metin çevirileri
                }
            });
        });
});

function changeLanguage(lang) {
    localStorage.setItem("language", lang);
    location.reload();
}