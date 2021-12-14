function mostrarUsuarios(){
    let guardUser = JSON.parse(localStorage.getItem("usuarios"))
    if(guardUser){
        guardUser.map(usuario => $("#listaUser").prepend(`<li style="color: blue; margin: 1rem;"> ${usuario.nameTag} </li>`))
    } else{
        $("#listaUser").prepend('<p> No hay usuarios </p>')
    }
}

mostrarUsuarios();


