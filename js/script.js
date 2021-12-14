    console.log("INICIO");


const usuarioRegistrado = []


let regresar = document.getElementById('reiniciar');
let formID = document.getElementById('formID');

function enviado (e){
    e.preventDefault()

    const nameTag = document.getElementById('nameTag').value
    const password = document.getElementById('password').value
    const passwordDos = document.getElementById('passwordDos').value

    if(passwordDos!==password){
        $("#intentarNuevamente")[0].innerHTML = '<p class="remove" style="color: red;"> No coinciden las contraseñas </p>'
    }

    else if((nameTag === "")||(password=== "")||(passwordDos==="")){
        $("#intentarNuevamente")[0].innerHTML = '<p style="color:red;"> No deje espacios en blanco </p>'
    } else{

        let usuario = {nameTag, password}
        let storageArray = JSON.parse(localStorage.getItem("usuarios"))
        if(storageArray){
            storageArray.push(usuario);
            localStorage.setItem('usuarios', JSON.stringify(storageArray));
        } else{
            let array2 = []
            array2.push(usuario);
            localStorage.setItem('usuarios', JSON.stringify(array2));
        }
        
        // Swal.fire(
        //     'Good job!',
        //     'You clicked the button!',
        //     'success'
        // );

        location.pathname = "/paginas/usuarios.html";
    }

}

$("#formID").submit(enviado);





    console.log("FIN");