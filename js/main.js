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
