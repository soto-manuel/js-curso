console.log("INICIO");


function bienvenida() {
    let saludo = prompt("Buenas ¿Qué día es hoy?");
    console.log("Genial, hoy es " + saludo + ". Bienvenidx");
}


function ingresarDatos() {
    let usuario = prompt ("Ingrese su nombre: ")

    while (usuario === ""){
        usuario = prompt("Ingrese un nombre valido")
    }

    let contraseñaIngresada = prompt("Ingrese una clave: ")

    while (contraseñaIngresada === "") {
        contraseñaIngresada = prompt("Ingrese una clave valida ")
    } 
    let contraseñaReIngresada = prompt("Vuelva a ingresar su clave: ") 

    while (contraseñaReIngresada !== contraseñaIngresada){
        contraseñaReIngresada = prompt("Contraseña incorrecta, intente nuevamente")

    }
        alert("Contraseña valida");

}

function alerta() {
    alert("Nunca comparta su clave con nadie, menos con nosotros");
}



bienvenida()
ingresarDatos()
alerta()




// class Libros {
//     constructor(nombre, genero, editorial, autor, precio){
//         this.nombre = nombre;
//         this.genero = genero;
//         this.editorial = editorial.toUpperCase();
//         this.autor = autor;
//         this.precio = precio;
//         this.stock = 5;
//     }
//     vendido(){
//         this.vendido = "Lo sentimos pero no contamos con stock";
//     }
// }

// const productos = []

// const libroUno = new Libros ("Peter Pan", "Fantástico", "Terramar", "James M. Barrie", 599)
// productos.push(libroUno);
// const libroDos = new Libros ("El Sabueso de los Baskerville", "Policiales", "Terramar", "Arthur Conan Doyle", 799)
// productos.push(libroDos);
// const libroTres = new Libros ("Las aventuras de Tom Sawyer", "Novela infantil", "Estrada", "versión de Nicolas Schuff", 299)
// productos.push(libroTres);
// const libroCuatro = new Libros ("Harry Potter y la Piedra Filosofal", "Fantástico", "Salamandra", "Rowling J.K.", 1999)
// productos.push(libroCuatro);
// const libroCinco = new Libros ("El Libro de los Dinosaurios", "Educativo", "Jerez Editores & DK", "John Woodward", 1999)


// libroTres.vendido;
// libroUno.vendido;


// let caretes = productos.filter((b) => b.precio > 600);
// console.log(caretes);

// let generoFantastico = productos.filter((f) => f.genero === "Fantástico");
// console.log(generoFantastico);






// let boton = document.getElementById("btn-section");

// boton.onclick = () => {
//     console.log("aprete el boton")
// }

// let btnClean = document.getElementById("btn-clean")




console.log("FIN");