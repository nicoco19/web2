import 'bootstrap/dist/css/bootstrap.min.css';

// eslint-disable-next-line import/no-unresolved
import imageLeJuge from "../../img/leJugeImg.jpg";
// eslint-disable-next-line import/no-unresolved
import imageTuNeTuerasPoint from "../../img/tu_ne_tueras_point_c.jpg"
// eslint-disable-next-line import/no-unresolved
import imageNico from '../../img/photoNico(1).jpg'

const HomePage = () => {
  changeForNotAbout();
};

const wrapperContainer = document.querySelector('main');


function renderLine(){

    const newLine = document.createElement('div');
    newLine.className = 'row';
    wrapperContainer.appendChild(newLine);
    return newLine;
}

function renderFilmsImage(filmsImages){

    const image = new Image();

    image.src = filmsImages;
    image.className = 'img-fluid rounded-start';
    image.alt = filmsImages;
  
    return image;
}

function renderEmpFIlm(imageFilm, title, desc){
    const row = renderLine();

    const divCol = document.createElement('div');
  
    divCol.className = 'col';
  
    row.appendChild(divCol);
  
    const divCard = document.createElement('div');
  
    divCard.className = 'card mb-3';
    divCard.style = 'max-width: 540px;';
  
    divCol.appendChild(divCard);
  
    const divCardRow = document.createElement('div');
  
    divCardRow.className = 'row g-0';
  
    divCard.appendChild(divCardRow);
  
    const divCardRowCol1 = document.createElement('div');
  
    divCardRowCol1.className = 'col-md-4';
  
    divCardRow.appendChild(divCardRowCol1);
  
    const image = renderFilmsImage(imageFilm);
  
    divCardRowCol1.appendChild(image);
  
    const divCardRowCol2 = document.createElement('div');
  
    divCardRowCol2.className = 'col-md-8';
  
    divCardRow.appendChild(divCardRowCol2);
  
    const cardBody = document.createElement('div');
  
    cardBody.className = 'card-body';
  
    divCardRowCol2.appendChild(cardBody);
  
    const cardTitle = document.createElement('h5');
  
    cardTitle.className = 'card-title';
    cardTitle.style.padding = '15px';
  
    cardTitle.innerText = title;
  
    divCardRowCol2.appendChild(cardTitle);
  
    const cardText = document.createElement('p');
  
    cardText.className = 'card-text';
    cardText.style.padding = '20px';
  
    cardText.innerText = desc;
  
    divCardRowCol2.appendChild( cardText );
  
  }

  function changeForAbout(){


    wrapperContainer.innerHTML = '';
     
    renderEmpFIlm(imageNico,"About me","bonjour je suis en 2 eme année en informatique de gestion");
    const bontonReturn = document.createElement('button');
    bontonReturn.innerText = 'Return';
    bontonReturn.className = 'btn btn-outline-primary';
    wrapperContainer.appendChild(bontonReturn);
    bontonReturn.addEventListener('click',changeForNotAbout);

  }
  
  
function changeForNotAbout(){
  wrapperContainer.innerHTML = '';
  const boutonAbout = document.createElement('button');
  boutonAbout.innerText = 'about';
  boutonAbout.className = 'btn btn-outline-primary';
  boutonAbout.addEventListener('click',changeForAbout);
 
  
  const textLeJuge = "le film est le juge ";
  const textTuNeTuerasPoint = "le films est tu ne tueras point";
  
  renderEmpFIlm(imageLeJuge,"Le Juge",textLeJuge);
  renderEmpFIlm(imageTuNeTuerasPoint,"Tu ne tueras point",textTuNeTuerasPoint);
  wrapperContainer.appendChild(boutonAbout);
}




export default HomePage;
