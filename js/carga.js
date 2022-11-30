window.onload = function checkLogin() {
    loadingScreen(true);
    let isLogin = localStorage.getItem('login');
    console.log("1");
    if (isLogin) {
        console.log("2 LOGUEADO")
        iconoLogin();
    }
    loadingScreen(false);
    console.log("4")
}

function iconoLogin(o) {
    let icono = document.getElementById('iconoLogin');
    let pagina = o
    console.log("3")
    if (pagina === 'pri') {
        icono.innerHTML = `<img id="iconoDeLogin" src="./img/16363.png" alt="cargando"></img>`;
        loadingScreen(false);
    }
    else if (pagina === undefined){
        icono.innerHTML = `<img id="iconoDeLogin" src="../img/16363.png" alt="cargando"></img>`;
        loadingScreen(false);
    }
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