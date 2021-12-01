console.log("INICIO")

let usuario = "";

//  function ingresarDatos() {

    usuario = prompt ("Ingrese su nombre: ");
    localStorage.setItem("nombre", usuario);

    // while (usuario === ""){
    //     usuario = prompt("Ingrese un nombre valido");
        
    // }

//     let contraseñaIngresada = prompt("Ingrese una clave: ");
//     localStorage.setItem("contraseña", contraseñaIngresada);

//     while (contraseñaIngresada === "") {
//         contraseñaIngresada = prompt("Ingrese una clave valida ");
//     } 
//     let contraseñaReIngresada = prompt("Vuelva a ingresar su clave: ");

//     while (contraseñaReIngresada !== contraseñaIngresada){
//         contraseñaReIngresada = prompt("Contraseña incorrecta, intente nuevamente")
//     }
//     alert("Contraseña valida");
// }


// ingresarDatos()
// usuario = localStorage.getItem("nombre");
// alert("hola " + usuario);

// localStorage.setItem("usuario", usuario)


let contraseña = document.getElementById('contraseñaAlmacenada');
let regresar = document.getElementById('reiniciar');

let formID = document.getElementById('formID');

function enviado (e){
    e.preventDefault()
    let crear = document.createElement("div");
    crear.innerHTML = '<input type="text">';
    document.body.appendChild(crear);
}

formID.addEventListener("submit", enviado)


function resetear (e){
    console.log("testeo")
}

        regresar.addEventListener("reset", resetear)

// NO ENTIENDO PORQUE NO ME TOMA EL AGREGAR EL EVENTO...


let mouseAnima = document.getElementById("mouseAnima");

mouseAnima.onmouseover = () => console.log("pasaste arriba");


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

// function numeroRandom(){
//     return Math.random();
// }

// numeroRandom();
// console.log(numeroRandom(1, 1001))




// let boton = document.getElementById("btn-section");

// boton.onclick = () => console.log("aprete el boton")

// let btnClean = document.getElementById("btn-clean")


console.log("FIN")