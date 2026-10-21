// VALIDATION DU FORMULAIRE

// récupérer les éléments dont on a besoin
// - l'élément <form>
const form = document.querySelector(".Contact-input")
// - des inputs
const nameInput = document.querySelector("#name-put")
const emailInput = document.querySelector("#email")
const message = document.querySelector("#Message")
// Les messages d'erreur & succès
const nameError = document.querySelector(".name-error")
const emailError = document.querySelector(".mail-error")
const messageError = document.querySelector(".message-error")
const formSuccess = document.querySelector(".form-reussi")


// écouter l'événement "submit" sur le formulaire
form.addEventListener("submit", (event) => {
    event.preventDefault();

    // déclarer un booléen
    let isValid = true;

    // remettre les messages à zéro avant de vérifier les champs
    nameError.classList.add("hidden")
    emailError.classList.add("hidden")
    messageError.classList.add("hidden")
    formSuccess.classList.add("hidden")

    // si l'input du nom est vide,
    if (nameInput.value.trim() == "") {
        nameError.classList.remove("hidden")
        isValid = false;
    }

    if (emailInput.value.trim() == "") {
        emailError.classList.remove("hidden")
        isValid = false;
    }

    if (message.value.trim() == "") {
        messageError.classList.remove("hidden")
        isValid = false;
    }

    // Si isValid est true
    if (isValid) {
        // on affiche le message de succès
        formSuccess.classList.remove("hidden")

        // On cache les messages d'erreur
        nameError.classList.add("hidden")
        emailError.classList.add("hidden")
        messageError.classList.add("hidden")
        
        // On vide les inputs
        nameInput.value = "";
        emailInput.value = "";
        message.value = "";
    }
})

// CHANGEMENT DU MODE CLAIR / SOMBRE

// récupérer le bouton et le body
const themeButton = document.querySelector("#theme-button")
const body = document.querySelector("body")

// le site commence en mode sombre
let lightMode = false;

// écouter le clic sur le bouton
themeButton.addEventListener("click", () => {
    if (lightMode == false) {
        body.classList.add("light-mode")
        themeButton.textContent = "Mode sombre"
        lightMode = true;
    } else {
        body.classList.remove("light-mode")
        themeButton.textContent = "Mode clair"
        lightMode = false;
    }
})

