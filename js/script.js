console.log("INICIO")


//  function ingresarDatos() {

    // usuario = prompt ("Ingrese su nombre: ");
    // localStorage.setItem("nombre", usuario);

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




let regresar = document.getElementById('reiniciar');
let formID = document.getElementById('formID');

const usuarioS = []

function enviado (e){
    e.preventDefault()

    const nameTag = document.getElementById('nameTag').value
    const password = document.getElementById('password').value

    localStorage.getItem('nameTag');
    let nombre = JSON.stringify(nameTag);
    localStorage.setItem('usuario', nombre);

    localStorage.getItem('password');
    let contra = JSON.stringify(password);
    localStorage.setItem('contraseña', contra);

    usuarioS.push(nameTag, password);

    let botones = document.getElementById("divBotones");
    let btnFin = document.createElement('button');
    btnFin.innerHTML = 'Vamos';
    botones.appendChild(btnFin);
    btnFin.onclick = function(){
        btnFin.style.color = "white";
        btnFin.style.background = "#0d6efd";
        btnFin.script = '../paginas/usuarios.html';
        btnFin.style.borderRadius = "3px";
        btnFin.style.borderColor = "#0d6efd";
        btnFin.style.padding = "0.5rem 1rem";
    }

}


formID.addEventListener("submit", enviado)


function resetear (){
    console.log("testeo")
}
regresar.addEventListener("reset", resetear)

/// EN PROCESO ....


// const usuarioS = []

// let listaUsuarios = document.getElementById("listaUser")

// function usuarios (){
//     usuarioS.forEach((user) => {
//         console.log(usuarioS)
//     })
// }

// listaUsuarios.addEventListener("lista", usuarios)







// let mouseAnima = document.getElementById("mouseAnima");
// mouseAnima.onmouseover = () => console.log("pasaste arriba");


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