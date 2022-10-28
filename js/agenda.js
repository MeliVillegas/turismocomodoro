window.onload = function(){
var eventos = [];

crearEvento('Feria','29-10-2022','Centro Cultural','Entrada libre y gratuita');
crearEvento('Feria','29-10-2022','Centro Cultural','Entrada libre y gratuita');
const cont = document.getElementById('cont-eventos');

function crearEvento(titulo,fecha,ubi,desc){
    let evento = {
        titulo: titulo,
        fecha: fecha,
        ubicacion: ubi,
        descripcion: desc
    };
    eventos.push(evento);
}

crearHtml(eventos);

function crearHtml(eventos){
    while (cont.firstChild) {
        cont.removeChild(cont.firstChild);
    }
    for (let i = 0; i < eventos.length; i++) {
        cont.innerHTML += `<a href="./evento.html" class="evento">
        <img src="../img/calendario.jpg" alt="Ilustración de símbolo de calendario">
        <div class="informacion">
            <h4>`+eventos[i].titulo+`</h4>
            <p>El `+eventos[i].fecha+` en `+eventos[i].ubicacion+`. `+eventos[i].descripcion+`</p>
        </div>    
        </a>`;    
    }
}
const btn = document.querySelector('#abrirModal')
btn.addEventListener('click', function(){
    abrirModal();
})
function abrirModal(){
    Swal.fire({
        title: 'Nuevo evento',
        html:
          '<input id="swal-input1" placeholder="Titulo" class="swal2-input">' +
          '<input id="swal-input2" placeholder="Ej: 21 de octubre" class="swal2-input">' +
          '<input id="swal-input3" placeholder="Ej: Centro Cultural" class="swal2-input">' +
          '<input id="swal-input4" placeholder="Ej: Entrada libre y gratuita" class="swal2-input">',

        focusConfirm: false,
        showCancelButton: true,
        preConfirm: () => {
            crearEvento(
                document.getElementById('swal-input1').value,
                document.getElementById('swal-input2').value,
                document.getElementById('swal-input3').value,
                document.getElementById('swal-input4').value
            );
            crearHtml(eventos);
        }
      })

}

  
}
