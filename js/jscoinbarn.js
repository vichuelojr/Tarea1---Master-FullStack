//Creo las funciones en este archivo externo de javascript
//funcion para validar el email del aside

function validarAside(){
    let email = document.formaside.email.value;
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){ //regex para validar el email
        document.querySelector("#msgemail").innerHTML="¡GRACIAS POR SUSCRIBIRTE!";
    }else{
        document.formaside.email.style.background = "#FF8383";
        document.querySelector("#msgemail").innerHTML="¡UPS! EL EMAIL INTRODUCIDO NO ES CORRECTO";
    }
}