function mostrarUsuarios(){
    let guardUser = JSON.parse(localStorage.getItem("usuarios"))
    if(guardUser){
        guardUser.map(usuario => $("#listaUser").prepend(`<div id="imagenAnimada" class="bg-black col-12">
                                                            <ul>
                                                                <li style="color: white;"> ${usuario.nameTag} </li>
                                                            </ul>
                                                        </div>`))
        $("#listaUser").prepend('<h3 class="text-danger" >Lista de usuarios</h3>');

        animacionNuevoUsuario()
    } else{
        $("#listaUser").prepend('<p> No hay usuarios </p>');
    }
}

mostrarUsuarios();


function animacionNuevoUsuario() {
    let animarUsuario = localStorage.getItem("usuarios", JSON.stringify["nameTag"])
    $("#listaUser").append('<img id="animacion" style="display:none;" class="imagen-new" src="../images/nuevo.png">');
    $("#animacion").fadeIn(2000);
    $("#animacion").fadeOut(3000);
}


