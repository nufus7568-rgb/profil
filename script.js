// ================= MENU MOBILE =================

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


// Menutup menu setelah memilih navigasi

document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });

});


// ================= CONTACT FORM =================

const form = document.querySelector(".contact-form");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Pesan berhasil dikirim!");

    form.reset();

});


// ================= SCROLL ANIMATION =================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.1
    }
);


sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "0.8s ease";

    observer.observe(section);

});