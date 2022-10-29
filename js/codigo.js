document.getElementById("idheader").innerHTML = `
<div class="header-logo">
                    <img src="img/logo3.jpg" width="200px" height="200px" alt="">

 </div>
                <div class="header-nav">
                    <input type="checkbox" id="menu-check">
                    <label id="menu" for="menu-check">
                            <span id="menu-abrir">&#9776;</span>
                            <span id="menu-cerrar" >X </span>
                   </label>
                    <nav>

                        <ul>

                            <div class="menu-nav">

                                <div>
                                    <li><a href="index.html">Home</a></li>
                                </div>
                                <div>
                                    <li><a href="propiedades.html">Propiedades</a></li>
                                </div>
                                <div>
                                    <li><a href="servicios.html">Servicios</a></li>
                                </div>
                                <div>
                                    <li><a href="novedades.html">Novedades</a></li>
                                </div>
                                <div>
                                    <li><a href="contacto.html">Contacto</a></li>
                                </div>
                            </div>
                        </ul>
                    </nav>
                </div>
`

document.getElementById("idfooter").innerHTML = `
<ul>
<li><span>Todos los Derechos Reservados @2022 Bulo Real State</span></li>
<li><a href="https://www.instagram.com" target="_blank"><i class="fa-brands fa-instagram"></i></a></li>
<li>
    <a href="https://www.facebook.com" target="_blank"><i class="fa-brands fa-facebook"></i></a></li>
<li>
    <a href="https://www.linkedin.com" target="_blank"><i class="fa-brands fa-linkedin"></i></a></li>
</ul>
`

$(document).ready(function() {

    let url = "https://randomuser.me/api/?results=2";
    let p = "";

    fetchInformation(url);

    function fetchInformation(url) {
        fetch(url)
            .then((response) => response.json())
            .then(function(data) {
                data
                data.results.forEach(persona => {

                    p = `<div>
                        <img src="${persona.picture.medium}" class="img-rounded" alt="image">
                        
                        <p>${persona.name.title}  ${persona.name.first} ${persona.name.last}</p>
                        <p>Correo Electronico: ${persona.email}</p>
                        <p>Telefono Celular: ${persona.cell} </p>
                    </div>`;
                    $("#resultado").append(p);

                });
            })
    }

});
