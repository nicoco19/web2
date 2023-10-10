const body = document.querySelector("body");
const divMessage = document.querySelector("#message");
const divCompteur = document.querySelector("#compteur");

var message = "";

window.addEventListener("click",inc);

function inc(){

    var compteur = divCompteur.innerHTML;

    compteur ++;

    if(compteur === 5 && compteur < 9){
        
        message = "Bravo, bel échauffement";

    } 

    if(compteur >= 10){

        message = "Vous êtes passé maître en l'art du clic !";
    }

    console.log( "OK" );

    divMessage.textContent = message;
    divCompteur.textContent = compteur;
    

}