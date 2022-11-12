(function () {
    emailjs.init('9XutrU9p5iRy6Gyen');
})();

window.onload = function () {
    loadingScreen(true);
    checkLogin();
    loadingScreen(false);
    document.getElementById('usuario-form').addEventListener('submit', function (event) {
        event.preventDefault();
        this.contact_number.value = Math.random() * 100000 | 0;
        emailjs.sendForm('service_turismocomodoro', 'template_cjc2w22', this)
            .then(function () {
                localStorage.setItem('login', 'ok');
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


function checkLogin() {
    let isLogin = localStorage.getItem('login');
    if (isLogin) {
        ocultarMostrar();
        iconoLogin();
    }
}

function cerrarSesion () {
    localStorage.removeItem('login');
    ocultarMostrar();
}

function loadingScreen(isLoading) {
    var loading = document.getElementById('loading');
    if (isLoading) {
        loading.style.display = "block";
    }
    else {
        loading.style.display = "none";
    }
}

function iconoLogin() {
    let icono = document.getElementById('iconoLogin');
    icono.innerHTML = `<img id="iconoDeLogin" src="../img/16363.png" alt="Ilustración de símbolo de calendario"></img>`
}
