let nbMystère = Math.floor(Math.random() * 5 );
let nbEssai = 5;
let nbSaisi = 0;
let nbPartiesGagnees = 0;
let partieActive = true;

//Je vérifier s'il y a des parties gagnées dans le local storage
localStorage.getItem(nbPartiesGagnees)

function jouerPartie(){

};

function afficherScore(){
    alert(`Vous avez gagné ${nbPartiesGagnees}`)
};

function mettrePause{
        alert('Jeu en pause');
        partieActive = false;
    }




function menuPrincipal() {
    let choix = prompt('Tapez '1' pour lancer une partie, tapez '2' pour afficher le score, tapez '3' pour mettre en pause, tapez '4' pour quitter')
    switch(choix){
        case: '1':
            jouerPartie();
            break;
        case: '2':
            afficherScore();
            break;
        case '3':
            mettrePause();
            break;
        case '4':
            alert('Au revoir !')
    }
      
}
