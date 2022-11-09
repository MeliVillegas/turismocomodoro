window.onload = function(){
var eventos = [];

crearEvento('Feria de artesanos y diseñadores','sábado 05 y domingo 06 de noviembre','C.I.P','De 14hs a 20hs. Entrada libre y gratuita');
crearEvento('Concierto de piano a 4 manos','sábado 05 de noviembre','Ceptur','A las 19hs. Entrada libre y gratuita');
const cont = document.getElementById('cont-eventos');

function crearEvento(titulo,fecha,ubi,desc){
    let evento = {
        titulo: titulo,
        fecha: fecha,
        ubicacion: ubi,
        descripcion: desc
    };
    // Cargamos el evento al array
    eventos.push(evento);
}

crearHtml(eventos);

const btn = document.querySelector('#abrir')
btn.addEventListener('click', function(){
    pedirClave();
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

function pedirClave(){
    Swal.fire({
        title: 'Autorización',
        text: 'Ingrese clave para continuar',
        html:
          '<input id="swal-input" placeholder="Clave" class="swal2-input">',
        focusConfirm: true,
        showCancelButton: true,
        preConfirm: () => {
            validarClave();
        }
      })
}

function validarClave(){
   var input = document.getElementById('swal-input').value;
   clave = '7ur15m0'
   if (input != clave) {
    Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'La clave ingresada es incorrecta. Vuelva a intentarlo nuevamente.',
        footer: '<p>¿No sos parte de nuestra comunidad?</p><a href="./../html/login.html">Registrate</a>'
      })
   }
   else {
    abrirModal();
   }
}

function crearHtml(eventos){
    // Recorremos los hijos del contenedor de eventos en html
    // Y todos los hijos encontrados los eliminamos
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
}
