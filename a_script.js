let imagen = document.querySelector(".rocket");
let inicia_button = document.querySelector(".start_button");
inicia_button.addEventListener('click', empieza_vuela);

function empieza_vuela(){
imagen.classList.toggle("animacion_vuela");
}