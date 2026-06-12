const catBtn = document.getElementById("cat-btn");
const esBtn = document.getElementById("es-btn");

function setLanguage(lang){

    document.querySelectorAll("[data-cat]").forEach(el=>{
        el.textContent =
            lang === "es"
                ? el.dataset.es
                : el.dataset.cat;
    });

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

        document.getElementById("mensaje").placeholder =
            "Mensaje";

        document.getElementById("btn-enviar").textContent =
            "Enviar";

        catBtn.classList.remove("active");
        esBtn.classList.add("active");

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

        document.getElementById("mensaje").placeholder =
            "Missatge";

        document.getElementById("btn-enviar").textContent =
            "Enviar";

        esBtn.classList.remove("active");
        catBtn.classList.add("active");
    }

    localStorage.setItem("lang", lang);
}

catBtn.addEventListener("click", () => setLanguage("cat"));
esBtn.addEventListener("click", () => setLanguage("es"));

setLanguage(localStorage.getItem("lang") || "cat");
