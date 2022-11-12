function ocultarMostrar(a) {
    let sectionResto = document.getElementById('resto');
    let sectionPizza = document.getElementById('pizzeria');
    let sectionParrilla = document.getElementById('parrilla');
    let sectionMarisco = document.getElementById('mariscoSushi');
    let sectionComidaRapida = document.getElementById('comidaRapida');
    let sectionConfiteria = document.getElementById('confiteria');
    let opcion = a
    console.log(a);
    console.log(opcion);

    if (opcion === 'pizzeria') {
        sectionResto.style.display = "none"
        sectionPizza.style.display = "block"
        sectionParrilla.style.display = "none"
        sectionMarisco.style.display = "none"
        sectionComidaRapida.style.display = "none"
        sectionConfiteria.style.display = "none"
    }
    else if (opcion === 'parrilla') {
        sectionResto.style.display = "none"
        sectionPizza.style.display = "none"
        sectionParrilla.style.display = "block"
        sectionMarisco.style.display = "none"
        sectionComidaRapida.style.display = "none"
        sectionConfiteria.style.display = "none"
    }
    else if (opcion === 'marisco') {
        sectionResto.style.display = "none"
        sectionPizza.style.display = "none"
        sectionParrilla.style.display = "none"
        sectionMarisco.style.display = "block"
        sectionComidaRapida.style.display = "none"
        sectionConfiteria.style.display = "none"
    }
    else if (opcion === 'comidar') {
        sectionResto.style.display = "none"
        sectionPizza.style.display = "none"
        sectionParrilla.style.display = "none"
        sectionMarisco.style.display = "none"
        sectionComidaRapida.style.display = "block"
        sectionConfiteria.style.display = "none"
    }
    else if (opcion === 'confiteria') {
        sectionResto.style.display = "none"
        sectionPizza.style.display = "none"
        sectionParrilla.style.display = "none"
        sectionMarisco.style.display = "none"
        sectionComidaRapida.style.display = "none"
        sectionConfiteria.style.display = "block"
    }
    else if (opcion === 'resto') {
        sectionResto.style.display = "block"
        sectionPizza.style.display = "none"
        sectionParrilla.style.display = "none"
        sectionMarisco.style.display = "none"
        sectionComidaRapida.style.display = "none"
        sectionConfiteria.style.display = "none"
    }
    else {
        console.log('no funciona')
    }
}