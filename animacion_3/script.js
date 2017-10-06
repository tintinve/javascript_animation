// Este script cuenta los clicks y hace un console.log cuando llega a 3, si es mayor que 3 hace algo.

<script>
    let clickCounter = 0;
let b = document.querySelector("button");
    addEventListener("click", count);

function count(){
    clickCounter++;
    if(clickCounter == 1){
    console.log("Great, good for you!")
    }
    else if(clickCounter > 3){
    console.log("Stio it!!!1");
    }}
        
</script>

// esto es un click counter que funciona. Si lo coloco dentro del script del html (Antes de que cierre el body) funciona y cuenta le numero de clicks.
    let clickCounter = 0;
let b = document.querySelector("button");
    addEventListener("click", count);

function count(){
    clickCounter = clickCounter + 1;
    console.log(clickCounter)
     }



// This is a Scope

let b = document.querySelector("button");
b.addEventListener("Click", sayHi)

function sayHi(){
    console.log("Its friday hurray");
     }
    

// Cómo llamar a funciones??? 
let b = document.querySelector("Button");
b.addEventListener("Click", sayHi)

function sayHi(){
    console.log
}

myHorse.addEventListener('click', horseDied);
horseDied();

//I can get the name here, same scope
console.log(name);

function greet(){
    //name is still available, since it's declared globally
    console.log(name);

    let mentalAge = 18;

    if(mentalAge == 18) {
        let myStatus = "Party like it's 1996";
        // inside these brackets, name, status & mentalAge is available
    }
    //mental age is declared in this function, so it's available
    console.log(mentalAge);
    //myStatus is nested deeper, and not available

}
//mentalAge & myStatus are NOT available out here,
// they are local variables for the greet function