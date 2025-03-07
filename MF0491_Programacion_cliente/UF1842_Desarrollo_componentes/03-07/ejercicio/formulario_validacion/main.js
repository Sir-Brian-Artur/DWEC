//Declaramos las variables
let usernameInput, passwordInput, telephoneInput, emailInput;

//Asignamos las variable cuando toda la página esté cargada
window.onload = function(){

    //Declaramos la variables
    usernameInput = document.getElementById("username");
    passwordInput = document.getElementById("password");
    telephoneInput = document.getElementById("telephone");
    emailInput = document.getElementById("email");
    
    //Recogemos los eventos
    usernameInput.addEventListener("input", createListener(isValidUsername));
    passwordInput.addEventListener("input", createListener(isValidPassword));
    telephoneInput.addEventListener("input", createListener(isValidTelephone));
    emailInput.addEventListener("input", createListener(isValidEmail));
}

//Funciones de validación

//Username
function isValidUsername(username) {
    const regExUser = /^[a-z]+$/ ;
    return regExUser.test(username);
}

//Password
function isValidPassword(password) {
    const regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/ ;
    return regExPass.test(password);
}

//Telephone +00 000 000 000
function isValidTelephone(telephone) {
    const regExPhone = /^[+]\d{1,2}\s\d{3}\s\d{3}\s\d{3}$/ ;
    return regExPhone.test(telephone);
}

//Email
function isValidEmail(email) {
    const regExMail = /^[^@]+@[^@.]+\.[a-z]+$/i ;
    return regExMail.test(email);
}


//Creamos la función listener, empreada arriba
function createListener(validator) {
    return e => {
        const input = e.target;    //Recogemos el input
        const text = e.target.value;    //Cadena de texto que se envía
        const valid = validator(text);
        const showTip = text !== "" && !valid;
        const tooltip = e.target.nextElementSibling;
        showOrHideTip(showTip, tooltip, input);
    };
}

function showOrHideTip(show, element, message = "first", input) {
    if (show) {
        input.style.borderBottom= "2px solid red";
        element.style.visibility = "visible";
    } else {
        input.style.borderBottom= "2px solid #00bfb2";
        element.style.visibility = "hidden";
    }
}