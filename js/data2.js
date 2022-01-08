
// let botonDown = document.getElementById("seguirBajando")

$("#seguirBajando").click((e)=>{
    e.preventDefault(); 
    
    $("#llamarDatos").prepend(`
                <section class="col-12 col-sm-12 w-100 section-carrusel">
                    <div class="tamaño-carrusel">
                        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner carrusel-index">
                                <div class="carousel-item">
                                <img src="../images/carrousel-1.jpg" class="d-block w-100" alt="...">
                                </div>
                                <div class="carousel-item">
                                <img src="../images/carrousel-2.jpg" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item active">
                                <img src="../images/carousel-3.jpg" class="d-block w-100" alt="...">
                            </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </section> 
    `);
    $('html,body').animate({ scrollTop: 9999 }, 'fast');
})