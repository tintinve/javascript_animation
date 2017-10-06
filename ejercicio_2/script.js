//Animacion 7 fadeIn
{
let imagen = document.querySelector(".rocket");
let fadeIn_button = document.querySelector(".fadeIn_button");
fadeIn_button.addEventListener('click', fadeIn);

function fadeIn(){
imagen.classList.toggle("animacion_fadeIn");
}} 