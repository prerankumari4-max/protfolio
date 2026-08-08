const menuBtn = document.querySelector(".menu-btn");

const nav = document.querySelector(".navbar nav");


/* ================= MOBILE MENU ================= */

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("open");

    if (nav.classList.contains("open")) {

        menuBtn.textContent = "✕";

    } else {

        menuBtn.textContent = "☰";

    }

});


/* Close menu after clicking a link */

document.querySelectorAll(".navbar nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("open");

        menuBtn.textContent = "☰";

    });

});


/* ================= FOOTER YEAR ================= */

document.getElementById("year").textContent =
    new Date().getFullYear();
