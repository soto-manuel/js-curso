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

class libros {
    constructor(nombre, genero, editorial, autor){
        this.nombre = nombre;
        this.genero = genero;
        this.editorial = editorial;
        this.autor = autor;
    }
    disponibilidad(){
        this.disponible = true;
    }
}

const libroUno = new libros ("Peter Pan", "Fantástico", "Terramar", "James M. Barrie")

const libroDos = new libros ("El Sabueso de los Baskerville", "Policiales", "Terramar", "Arthur Conan Doyle")

const libroTres = new libros ("Las aventuras de Tom Sawyer", "Estrada", "Novela infantil", "versión de Nicolas Schuff")


console.log(libroUno.disponibilidad)
console.log(libroUno)

console.log(libroDos.disponibilidad)
console.log(libroDos)

console.log(libroTres.disponibilidad)
console.log(libroTres)


console.log("FIN")