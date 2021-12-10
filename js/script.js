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


const usuarioRegistrado = []


let regresar = document.getElementById('reiniciar');
let formID = document.getElementById('formID');

function enviado (e){
    e.preventDefault()

    const nameTag = document.getElementById('nameTag').value
    const password = document.getElementById('password').value
    const passwordDos = document.getElementById('passwordDos').value

    if(passwordDos!==password){
        $("#intentarNuevamente").prepend('<p class="remove" style="color: red;"> No coinciden las contraseñas </p>')
    } else {
        
        // localStorage.getItem('nameTag');

        let nombre = JSON.stringify(nameTag);
        localStorage.setItem('usuario', nombre);
        
        // localStorage.getItem('password');

        let contra = JSON.stringify(password);
        localStorage.setItem('contraseña', contra);

        usuarioRegistrado.push(nombre);
        mostrarUsuariosRegistrados(usuarioRegistrado)
    }

$("#divBotones").prepend('<button id=btnFin><a href="./usuarios.html" style="text-decoration:none; color:white;">Vamos</a></button>')

$("#cambiaBoton").on("click", function () {
        $("#btnFin").addClass('btn');
        $("#btnFin").addClass('btn-lg');
        $("#btnFin").addClass('btn-danger');
    })
}

formID.addEventListener("submit", enviado);



function resetear (){
    console.log("testeo")
}
// regresar.addEventListener("reset", resetear)




/// EN PROCESO ....



function mostrarUsuariosRegistrados (printUsers){
    printUsers.forEach( user => {
        $("#listaUser").innerHTML += `
            <h2> Lista de usuarios </h2>
            <ol>
                <li> ${usuarioRegistrado} </li>
            </ol>
        `
    })                  // USAR FOR ACA ------ CREO NO FUNCIONA IGUAL
}


console.log("FIN")