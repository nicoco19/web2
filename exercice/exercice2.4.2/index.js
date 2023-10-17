/*const div1 = document.querySelector("#divRouge");
const div2 = document.querySelector("#divOrange");
const div3 = document.querySelector("#divVert");

const tabColor = ["rouge","orange", "vert"];
let timeID;
const timeSeg = 2;
const timeMil = timeSeg * 1000;
let interval;
let step = { number: 0 };


const startClock = () => {

    setInterval(function() {

      changeColor(step);

    }, 2000);
  }

  const changeColor = ( step ) => {

    const color = tabColor[step.number];
    console.log(color);
    console.log( document.getElementById( color + "Light" ));
    const light = step.number;
  
    let lastElementIndex = step.number - 1;
  
    if ( lastElementIndex < 0 ) lastElementIndex = tabColor.length - 1;
  
    const lastColor = tabColor[lastElementIndex];
    const lastLight = document.getElementById( lastColor + "Light" );
  
   // lastLight.style.backgroundColor = "";
    light.style.backgroundColor = color;
  
    if ( step.number === tabColor.length - 1 ) step.number = 0;
    else step.number++;
    
  };

  startClock();*/


const greenLight = document.getElementById("greenLight");
const orangeLight = document.getElementById("orangeLight");
const redLight = document.getElementById("redLight");

const COLORS = [ "red", "orange", "green", "orange" ];

let step = { number: 0 };

const startClock = () => {
  setInterval(function() {
    alternateColor(step);
  }, 2000);
};

const alternateColor = ( step ) => {

  const color = COLORS[step.number];
  const light = document.getElementById( color + "Light" );

  let lastElementIndex = step.number - 1;

  if ( lastElementIndex < 0 ) lastElementIndex = COLORS.length - 1;

  const lastColor = COLORS[lastElementIndex];
  const lastLight = document.getElementById( lastColor + "Light" );

  lastLight.style.backgroundColor = "";
  light.style.backgroundColor = color;

  if ( step.number === COLORS.length - 1 ) step.number = 0;
  else step.number++;
  
};

startClock();

  