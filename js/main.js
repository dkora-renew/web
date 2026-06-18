const langBtn = document.getElementById("lang-btn");
const langFlag = document.getElementById("lang-flag");

function setLanguage(lang){

    document.querySelectorAll("[data-cat]").forEach(el=>{
        el.textContent =
            lang === "es"
                ? el.dataset.es
                : el.dataset.cat;
    });
    if(lang === "es"){
    langFlag.src = "img/cat.png";
    langFlag.alt = "Canviar a català";
}else{
    langFlag.src = "img/es.png";
    langFlag.alt = "Cambiar a español";
}

    if(lang === "es"){

        document.getElementById("hero-subtitle").textContent =
            "PINTURA Y MADERA";

        document.getElementById("hero-title").innerHTML =
            'Da vida a tus <span>espacios</span>';

        document.getElementById("hero-text").textContent =
            "En D-KORA transformamos hogares y negocios con acabados de calidad, cuidando cada detalle.";

        document.getElementById("btn-services").textContent =
            "VER SERVICIOS";

        document.getElementById("btn-contact").textContent =
            "CONTACTAR";

        document.getElementById("nombre").placeholder =
            "Nombre";

        document.getElementById("email").placeholder =
            "Correo electrónico";
        
        document.getElementById("telefono").placeholder =
            "Teléfono";
        
        document.getElementById("mensaje").placeholder =
            "Mensaje";

        document.getElementById("btn-enviar").textContent =
            "Enviar";

    

    }else{

        document.getElementById("hero-subtitle").textContent =
            "PINTURA I FUSTA";

        document.getElementById("hero-title").innerHTML =
            'Dona vida als teus <span>espais</span>';

        document.getElementById("hero-text").textContent =
            "A D-KORA transformem llars i negocis amb acabats de qualitat, cura pels detalls i passió per la nostra feina.";

        document.getElementById("btn-services").textContent =
            "VEURE SERVEIS";

        document.getElementById("btn-contact").textContent =
            "CONTACTA'NS";

        document.getElementById("nombre").placeholder =
            "Nom";

        document.getElementById("email").placeholder =
            "Correu electrònic";

        document.getElementById("telefono").placeholder =
            "Telèfon";

        document.getElementById("mensaje").placeholder =
            "Missatge";

        document.getElementById("btn-enviar").textContent =
            "Enviar";

    }

    localStorage.setItem("lang", lang);
}

langBtn.addEventListener("click", () => {

    const currentLang =
        localStorage.getItem("lang") || "cat";

    setLanguage(
        currentLang === "cat"
            ? "es"
            : "cat"
    );

});

setLanguage(localStorage.getItem("lang") || "cat");

/* FORMULARIO WHATSAPP */

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("contact-form");

    if(form){

        form.addEventListener("submit", function(e){

            e.preventDefault();

            const nombre = document.getElementById("nombre").value;
            const email = document.getElementById("email").value;
            const telefono = document.getElementById("telefono").value;
            const mensaje = document.getElementById("mensaje").value;

            const lang = localStorage.getItem("lang") || "cat";

            const texto = lang === "es"
            ? `Hola D-KORA,

Nombre: ${nombre}
Email: ${email}
Teléfono: ${telefono}

Proyecto:
${mensaje}`
            : `Hola D-KORA,

Nom: ${nombre}
Email: ${email}
Telèfon: ${telefono}

Projecte:
${mensaje}`;

            const url =
                "https://wa.me/34695128359?text=" +
                encodeURIComponent(texto);

            window.open(url, "_blank");

            form.reset();

        });

    }

});

document.querySelectorAll(".project-card").forEach(card => {

    const img = card.querySelector(".project-image");

    if(!img) return;

    const images = img.dataset.images.split(",");

    let index = 0;

    const dotsContainer = card.querySelector(".dots");

    images.forEach((_, i) => {

        const dot = document.createElement("span");

        dot.classList.add("dot");

        if(i === 0){
            dot.classList.add("active");
        }

        dotsContainer.appendChild(dot);

    });

    const dots = dotsContainer.querySelectorAll(".dot");

    function updateCarousel(){

        img.src = images[index];

        dots.forEach(dot =>
            dot.classList.remove("active")
        );

        dots[index].classList.add("active");
    }

    card.querySelector(".next")
        .addEventListener("click", () => {

            index++;

            if(index >= images.length){
                index = 0;
            }

            updateCarousel();

        });

    card.querySelector(".prev")
        .addEventListener("click", () => {

            index--;

            if(index < 0){
                index = images.length - 1;
            }

            updateCarousel();

        });

});
