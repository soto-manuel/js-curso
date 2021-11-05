console.log("INICIO");

let usuarioIngresado = prompt("Ingrese su nombre: ");


if (((usuarioIngresado === "Cami") || usuarioIngresado === "CAMI") || usuarioIngresado === "cami") {
    alert("Buenos dias, tardes o noche, Cami, CAMI o cami :)");
    let edadIngresada = prompt("ingrese su edad");{
        if(edadIngresada >= 20){
            alert("Sos mayor de 20 años, genial. Sigamos...");
            let numeroIngresado = prompt("Elegí un numero del 1 al 10")
            let resultado = numeroIngresado * 5
                if (numeroIngresado > 5){
                    alert("Lo vamos a multiplicar por 5");
                    alert(resultado);
                } else{
                    let resultadoSegundo = alert("Lo vamos a dividir por "+numeroIngresado);
                    alert("1");
                }
        } else{
            alert("Esperaba que seas mayor jejej")
        }
    }
} else{
    alert("No sos mi tutora");
}

console.log("FIN");