    console.log("INICIO");




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

    } else {

        let usuario = {nameTag, password}
        let storageArray = JSON.parse(localStorage.getItem("usuarios"))

        if(storageArray){
            storageArray.push(usuario);
            localStorage.setItem('usuarios', JSON.stringify(storageArray));
        }
        // else if(storageArray.find(nameTag => nameTag === usuario[nameTag])){
        //     $("#intentarNuevamente")[0].innerHTML = '<p style="color:red;"> USUARIO EXISTENTE </p>'
        // }
        else{
            let array2 = []
            array2.push(usuario);
            localStorage.setItem('usuarios', JSON.stringify(array2));
        }
        
        console.log(storageArray);


        location.pathname = "/paginas/usuarios.html";
    }
}






// CREO FUNCION NUEVA O REUTILIZO LA ANTERIOR
function userExist(nameTag){
    return array2.some(function(el){
        return el.nameTag === nameTag;
    });
}

function usuarioRepetido(){
    if (storageArray.includes(usuario)){
        $("#intentarNuevamente")[0].innerHTML = '<p style="color:red;"> NO EXISTE </p>'
    }
    else {
        console.log("in else");
        array2.push(usuario);
        localStorage.setItem('usuarios', JSON.stringify(array2));
    }
};





$("#formID").submit(enviado);

// let usuario = {nameTag, password}
//         let storageArray = JSON.parse(localStorage.getItem("usuarios"))
        

//         if (storageArray){
//             storageArray.push(usuario);
//             localStorage.setItem('usuarios', JSON.stringify(storageArray));
//             console.log(storageArray);
//         }
//         else if(storageArray.includes(usuario)){
//             $("#intentarNuevamente").innerHTML = '<p style="color:red;"> NO EXISTE </p>'
//         }
//         else{
//             let array2 = []
//             array2.push(usuario);
//             localStorage.setItem('usuarios', JSON.stringify(array2));
//         }





console.log("FIN");