const btn = document.querySelector("#Button");
const DivMessage = document.querySelector("#divMessage");
const currentClicks = document.querySelector("#clicks");

var message = "";
let timeId;
const timeInSeg = 5;
const timeInMili = timeInSeg * 1000;
var compteur = 0;
let interval;

const startClock = () => {
    
    if (!interval) {
  
      interval = setTimeout(() => {
        alert("Game over, you did not click 10 times within 5s !");
  
        interval = undefined;
      }, timeInMili);
    }
  }

  const clearClock = () => {
  
    clearTimeout(interval);
  
    interval = undefined;
  }

  btn.addEventListener("mouseover", startClock);
  btn.addEventListener("click", compt);

function compt(){
    
    compteur++;
   
    if(compteur === 10){

        message = `You win ! You clicked 10 times within ${interval} ms`;

        clearClock();
    }

    console.log(compteur);
    DivMessage.textContent = message;
}



  


