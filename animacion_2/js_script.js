//Animacion 1 VOLAR
{
let imagen = document.querySelector(".rocket");
let inicia_button = document.querySelector(".start_button");
inicia_button.addEventListener('click', empieza_vuela);

function empieza_vuela(){
imagen.classList.toggle("animacion_vuela");
}} 
//Animacion 2 VOLAR
{
let imagen = document.querySelector(".rocket");
let rotacion_button = document.querySelector(".rotacion_button");
rotacion_button.addEventListener('click', empieza_rotar);

function empieza_rotar(){
imagen.classList.toggle("animacion_rotacion");
}}   
//Animacion 3 moveTo30
{
let imagen = document.querySelector(".rocket");
let moveTo30_button = document.querySelector(".moveTo30_button");
moveTo30_button.addEventListener('click', moveTo30);

function moveTo30(){
imagen.classList.toggle("animacion_moveTo30");
}}   
//Animacion 3 moveFrom30
{
let imagen = document.querySelector(".rocket");
let moveFrom30_button = document.querySelector(".moveFrom30_button");
moveFrom30_button.addEventListener('click', moveFrom30);

function moveFrom30(){
imagen.classList.toggle("animacion_moveFrom30");
}}   