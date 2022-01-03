//Creo las funciones en este archivo externo de javascript
//funcion para validar el email del aside en el blog

function validarAside(){
    let email = document.formaside.email.value;
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){ //regex para validar el email
        document.querySelector("#msgemail").innerHTML="¡GRACIAS POR SUSCRIBIRTE!";
    }else{
        document.formaside.email.style.background = "#e3aaa4";
        document.querySelector("#msgemail").innerHTML="¡UPS! EL EMAIL INTRODUCIDO NO ES CORRECTO";
    }
}

// FUNCIÓN PARA VALIDAR TODO EL FOMULARIO DEL APARTADO CONTACTO

function validarFormulario(){
    valido = true

    let nombre = document.formcontacto.nombre.value; //input nombre
    if (!/^[a-z ,.'-]+$/i.test(nombre)) {
        document.querySelector("#msgnombre").innerHTML = "Debes introducir un nombre";
        valido = false
    }
    let emailform = document.formcontacto.email.value; //input email
    if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailform)){ //regex para validar el email
        document.querySelector("#msgemailform").innerHTML="El email introducido no es correcto";
        valido  = false
    }
let telefono = document.formcontacto.telefono.value; //input telefono
    if (!/^(\+34|0034|34)?[ -]*([67])[ -]*([0-9][ -]*){8}$/im.test(telefono)){ //regex para validar el email
        document.querySelector("#msgtelefono").innerHTML="El teléfono introducido no es correcto";
        valido  = false
    }
    let datos = document.querySelector("#checkbox").checked //input checkbox
    if (!datos){
        document.querySelector("#msgcheckbox").innerHTML = "Debes aceptar esta casilla para enviar el formulario de contacto"
        valido = false
    }
    if (valido){
        document.querySelector("#msgnombre").innerHTML="";
        document.querySelector("#msgcheckbox").innerHTML = "";
        document.querySelector("#msgemailform").innerHTML="";
        document.querySelector("#msgtelefono").innerHTML="";
        document.querySelector("#msgenviar").innerHTML = "El formulario se ha enviado correctamente";
    }
}

//FUNCIÓN PARA EL SLIDER
contador = 0; //variable para realizar el ciclo
//Creo un array con todas los objetos imágenes y sus respectivas src
sliderImg = [];
sliderImg[0] = new Image(900,540);
sliderImg[0].src = "recursos/bitcoin2.jpg";
sliderImg[1] = new Image(900,540);
sliderImg[1].src = "recursos/blockchain.jpg";
sliderImg[2] = new Image(900,540);
sliderImg[2].src = "recursos/cypherpunk.jpg";
sliderImg[3] = new Image(900,540);
sliderImg[3].src = "recursos/defi2.jpg";
sliderImg[4] = new Image(900,540);
sliderImg[4].src = "recursos/sostenibilidad.jpg";
//array para los enlaces correspondientes
sliderhref = [];
sliderhref[0] = "articulos/bitcoin.html";
sliderhref[1] = "articulos/blockchain.html";
sliderhref[2] = "articulos/satoshinakamoto.html";
sliderhref[3] = "articulos/defi.html";
sliderhref[4] = "articulos/sostenibilidad.html";
//array para los títulos
sliderTitulo = [];
sliderTitulo[0] = "¿QUÉ ES BITCOIN?";
sliderTitulo[1] = "¿QUÉ ES LA TECNOLOGÍA BLOCKCHAIN?";
sliderTitulo[2] = "¿QUIÉN ES SATOSHI NAKAMOTO?";
sliderTitulo[3] = "¿QUÉ SON LAS DEFI?";
sliderTitulo[4] = "BITCOIN Y LA SOSTENIBILIDAD";

function slider(){
    if (contador === 5){
        contador = 0;
    }
    document.querySelector("#sliderimg").src = sliderImg[contador].src;
    document.querySelector("#sliderhref").href= sliderhref[contador];
    document.querySelector("#slidertitulo").innerHTML= sliderTitulo[contador];
    contador++
    setTimeout("slider()",4000);
}
function nuevocontador(num){ //para navegar por el slider
    contador = num;
    document.querySelector("#sliderimg").src = sliderImg[contador].src;
    document.querySelector("#sliderhref").href= sliderhref[contador];
    document.querySelector("#slidertitulo").innerHTML= sliderTitulo[contador];
}