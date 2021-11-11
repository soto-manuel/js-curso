console.log("INICIO");


alert("Bienvenidas y Bienvenidos");
let bienvenidxs = prompt("¿Que día es hoy?");
alert("Genial, hoy es " + bienvenidxs);

let usuario = prompt("Ingrese su nombre: ");
let contraseñaIngresada = prompt("Ingrese su clave: ");
let contraseñaReingresada = prompt("Vuelva a ingresar su clave");

while (contraseñaReingresada !== contraseñaIngresada){
    contraseñaReingresada = prompt("Contraseña incorrecta, intente nuevamente");
}
alert("Contraseña valida");


alert("Nunca comparta su clave con nadie, menos con nosotros");


console.log("FIN");