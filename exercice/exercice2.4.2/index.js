const red = document.querySelector("#redLight");
const orange = document.querySelector("#orangeLight");
const green = document.querySelector("#greenLight");

red.style.background="red"; 

let phase = 1;

setInterval(() => {

    if (phase == 1) {
        orange.style.background = "orange";
        red.style.background = "white";

    }

    if (phase == 2){
        green.style.background = "green";
        orange.style.background = "white";

    }

    if(phase == 3){
        orange.style.background = "orange";
        green.style.background = "white";

    }
    
    if(phase == 4){
        red.style.background = "red";
        orange.style.background = "white";
        phase = 0; 
    }

    phase++;

}, 1000);