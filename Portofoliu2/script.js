
/* ==========================================
   ADR DIGITAL - SCRIPT PRINCIPAL
========================================== */


/* ==========================================
   1. MENIU PENTRU TELEFON
========================================== */

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".nav");

if (menuButton && navigation) {

    // Deschide sau închide meniul
    menuButton.addEventListener("click", () => {

        const isOpen = navigation.classList.toggle("open");

        menuButton.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        menuButton.setAttribute(
            "aria-label",
            isOpen ? "Închide meniul" : "Deschide meniul"
        );

        menuButton.textContent = isOpen ? "✕" : "☰";
    });

    // Închide meniul după selectarea unei pagini
    navigation.querySelectorAll("a").forEach((link) => {

        link.addEventListener("click", () => {

            navigation.classList.remove("open");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            menuButton.setAttribute(
                "aria-label",
                "Deschide meniul"
            );

            menuButton.textContent = "☰";
        });
    });
}


/* ==========================================
   2. ANIMAȚII LA DERULAREA PAGINII
========================================== */

const revealElements = document.querySelectorAll(".reveal");

if (revealElements.length > 0) {

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            (entries, currentObserver) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        currentObserver.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.12
            }
        );

        revealElements.forEach((element) => {
            observer.observe(element);
        });

    } else {

        // Compatibilitate cu browsere mai vechi
        revealElements.forEach((element) => {
            element.classList.add("visible");
        });
    }
}


/* ==========================================
   3. ANUL ACTUAL DIN FOOTER
========================================== */

document.querySelectorAll(".current-year").forEach((element) => {

    element.textContent = new Date().getFullYear();

});
