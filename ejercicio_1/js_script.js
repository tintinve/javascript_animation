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
//Animacion 4 moveFrom30
{
let imagen = document.querySelector(".rocket");
let moveFrom30_button = document.querySelector(".moveFrom30_button");
moveFrom30_button.addEventListener('click', moveFrom30);

function moveFrom30(){
imagen.classList.toggle("animacion_moveFrom30");
}} 
//Animacion 5 oneJump
{
let imagen = document.querySelector(".rocket");
let oneJump_button = document.querySelector(".oneJump_button");
oneJump_button.addEventListener('click', oneJump);

function oneJump(){
imagen.classList.toggle("animacion_oneJump");
}} 
//Animacion 6 jumping
{
let imagen = document.querySelector(".rocket");
let jumping_button = document.querySelector(".jumping_button");
jumping_button.addEventListener('click', jumping);

function jumping(){
imagen.classList.toggle("animacion_jumping");
}} 
//Animacion 7 fadeIn
{
let imagen = document.querySelector(".rocket");
let fadeIn_button = document.querySelector(".fadeIn_button");
fadeIn_button.addEventListener('click', fadeIn);

function fadeIn(){
imagen.classList.toggle("animacion_fadeIn");
}} 
//Animacion 8 moveLeft
{
let imagen = document.querySelector(".rocket");
let moveLeft_button = document.querySelector(".moveLeft_button");
moveLeft_button.addEventListener('click', moveLeft);

function moveLeft(){
imagen.classList.toggle("animacion_moveLeft");
}} 
//Animacion 9 moveRight
{
let imagen = document.querySelector(".rocket");
let moveRight_button = document.querySelector(".moveRight_button");
moveRight_button.addEventListener('click', moveRight);

function moveRight(){
imagen.classList.toggle("animacion_moveRight");
}} 
//Animacion 10 screenTrip
{
let imagen = document.querySelector(".rocket");
let screenTrip_button = document.querySelector(".screenTrip_button");
screenTrip_button.addEventListener('click', screenTrip);

function screenTrip(){
imagen.classList.toggle("animacion_screenTrip");
}} 