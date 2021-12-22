const URL = "http://127.0.0.1:5500/datos.json"

$("main").append('<button id="dataBtn" class="btn btn-lg btn-primary">Traer datos</button>'),
$("#dataBtn").css("position", "relative");
$("#dataBtn").css("left", "35rem");
$("#dataBtn").css("top", "1rem")

function botonAgregarData() {
    $("#dataBtn").click(() => {
    $.get(URL, function(respuesta, estado) {
        if(estado == "success"){
            let = misDatos = respuesta;
            for(const dato of misDatos){
                $("#listaProcesados").append(`
                    <div class="datosProcesados">
                        <p>${dato.usuario} ${dato.name}</p>
                    </div>
                `);
            }
            $("#listaProcesados").prepend(`
                    <h3>Lista de información</h3>
                `);
        }
    });
    $("#dataBtn").remove();

    botonQuitarData();
});}

botonAgregarData();

function botonQuitarData() {
    $("main").append('<button id="quitarData" class="btn btn-lg btn-primary">Quitar información</button>');
    $("#quitarData").css("position", "relative");
    $("#quitarData").css("left", "32.5rem");
    $("#quitarData").css("top", "1rem");
    
    $("#quitarData").click(()=>{
        $("#listaProcesados").remove();
        $("#quitarData").remove();
    })
    botonAgregarData();
}