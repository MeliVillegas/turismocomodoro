(function () {
    emailjs.init('9XutrU9p5iRy6Gyen');
})();

window.onload = function () {
    document.getElementById('usuario-form').addEventListener('submit', function (event) {
        event.preventDefault();
        this.contact_number.value = Math.random() * 100000 | 0;
        emailjs.sendForm('service_turismocomodoro', 'template_cjc2w22', this)
            .then(function () {
                console.log('Enviado');
                Swal.fire({
                    icon: 'success',
                    title: 'Registro completado',
                    text: 'Revisa tu correo, hemos enviado información importante.',
                })
                ocultarMostrar();
            }, function (error) {
                console.log('Error...', error);
            });
    });

}

function ocultarMostrar() {
    let sectionLogin = document.getElementById('login');
    let sectionUsuario = document.getElementById('accesoUsuario');
    if (sectionLogin.style.display === "none" && sectionUsuario.style.display === "block") {
        sectionLogin.style.display = "block";
        sectionUsuario.style.display = "none";
    } else {
        sectionLogin.style.display = "none";
        sectionUsuario.style.display = "block";
    }
}