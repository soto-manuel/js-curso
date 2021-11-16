console.log("INICIO");


// function bienvenida() {
//     let saludo = prompt("Buenas ¿Qué día es hoy?");
//     console.log("Genial, hoy es " + saludo + ". Bienvenidx");
// }


// let BLANCO = "";


// function ingresarDatos() {
//     let usuario = prompt("Ingrese su nombre: ");
//     console.log(usuario);
//     let contraseñaIngresada = prompt("Ingrese su clave: ");
//     console.log(contraseñaIngresada);
//     let contraseñaReingresada = prompt("Vuelva a ingresar su clave");
//     console.log(contraseñaReingresada);

//     while (contraseñaReingresada !== contraseñaIngresada){
//         contraseñaReingresada = prompt("Contraseña incorrecta, intente nuevamente");
//         console.log(contraseñaReingresada);
//     }
//     alert("Contraseña valida");
// }

// function alerta() {
//     alert("Nunca comparta su clave con nadie, menos con nosotros");
// }



// bienvenida()
// ingresarDatos()
// alerta()


class Producto {
    constructor(nombre, precio) {
        this.nombre  = nombre.toUpperCase();
        this.precio  = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
    vender() {
        this.vendido = true;
    }
}
const producto1 = new Producto("arroz", "125");
const producto2 = new Producto("fideo", "50");
producto1.sumaIva();
producto2.sumaIva();
producto2.vender();

console.log(producto1)
console.log(producto2)
console.log("FIN")