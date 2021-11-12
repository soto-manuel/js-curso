console.log("INICIO");


function bienvenida() {
    let saludo = prompt("Buenas ¿Qué día es hoy?");
    console.log("Genial, hoy es " + saludo + ". Bienvenidx");
}


let BLANCO = "";


function ingresarDatos() {
    let usuario = prompt("Ingrese su nombre: ");
    console.log(usuario);
    let contraseñaIngresada = prompt("Ingrese su clave: ");
    console.log(contraseñaIngresada);
    let contraseñaReingresada = prompt("Vuelva a ingresar su clave");
    console.log(contraseñaReingresada);

    while (contraseñaReingresada !== contraseñaIngresada){
        contraseñaReingresada = prompt("Contraseña incorrecta, intente nuevamente");
        console.log(contraseñaReingresada);
    }
    alert("Contraseña valida");
        }

function alerta() {
    alert("Nunca comparta su clave con nadie, menos con nosotros");
}



bienvenida()
ingresarDatos()
alerta()


console.log("FIN")