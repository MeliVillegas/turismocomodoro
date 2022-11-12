window.onload = function checkLogin() {
    loadingScreen(true);
    let isLogin = localStorage.getItem('login');
    
    if (isLogin) {
        iconoLogin();
    }
    
}

function iconoLogin(o) {
    let icono = document.getElementById('iconoLogin');
    let pagina = o

    if (pagina === 'pri') {
        icono.innerHTML = `<img id="iconoDeLogin" src="./img/16363.png" alt="Ilustración de símbolo de calendario"></img>`;
        loadingScreen(false);
    }
    else if (pagina === undefined){
        icono.innerHTML = `<img id="iconoDeLogin" src="../img/16363.png" alt="Ilustración de símbolo de calendario"></img>`;
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