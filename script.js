console.log("INICIO");

let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");

console.log ("Hola, " +nombre+ " " +apellido);

let saludo = prompt("Como has estado? " +nombre+" "+ apellido);
console.log(saludo);

let suma =  parseInt(prompt("Asi que " +saludo+ ". Ahora, diganos su edad"));
alert (suma + ". Por ultimo le vamos a sumar 21");

let resultado = parseInt( suma + 21 )

console.log(resultado);
alert(resultado);

console.log("FIN");