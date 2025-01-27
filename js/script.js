let menuVisible = false;
//funcion que oculta o muestra el menu
// Función para mostrar/ocultar el menú

function mostrarOcultarMenu(){
    nav = document.getElementById("nav");

    if (menuVisible) {
        nav.classList.remove("responsive");
        menuVisible = false;
    } else {
        nav.classList.add("responsive");
        menuVisible = true;
    }
}


function seleccionar(){
    //ocultar el menu una vez que selecciono una opcion

    document.getElementById("nav").classList ="";
        menuVisible = false;

}
