// let nom = prompt("Veuillez saisir votre nom");
// let prenom = prompt("Veuillez saisir votre prénom");
// let nomComplet = `Bonjour ${prenom} ${nom} !`;

// console.log(nomComplet);



// let nbEntier = +prompt("Entrez un nb entier");

// if (nbEntier % 15 == 0) {
//     console.log(`Le nombre ${nbEntier} est divisible par 3 et 5.`);
// } else {
//     console.log(`Le nombre ${nbEntier} n'est pas divisible par 3 et 5.`);
// };

// let age = +prompt("Veuillez saisir votre âge");
// const ageRoiAngleterre = 60;

// if (age < ageRoiAngleterre) {
//     console.log(`Vous êtes plus jeune que le roi d'Angleterre.`)
// } else if (age > ageRoiAngleterre) {
//     console.log(`Vous êtes plus vieux que le roi d'Angleterre.`);
// } else if (age === ageRoiAngleterre) {
//     console.log(`Vous avez le même âge que le roi d'Angleterre`);
// };


// for(i=0; i<20; i++){
//     if(i%2 ==0) console.log(i);
// }

// for(i=10; i >=0; i--){
//     console.log(i);
// }

// for(i=1; i<11; i++){
//     console.log(`${i}*7=${i*7}`);
// }

let nombreMystère = Math.floor(Math.random() * 101); 
let essais = 0;
let maxEssais = 6;

while (essais < maxEssais) {
    let nombreSaisi = parseInt(prompt("Entrez un nombre entier entre 0 et 100 pour deviner le nombre mystère"));

    if (nombreSaisi < 0 || nombreSaisi > 100 || isNaN(nombreSaisi)) {
        console.log("Votre nombre n'est pas compris entre 0 et 100");
    } else if ((Math.abs(nombreMystère - nombreSaisi)) < 10 ){ 
        console.log("Vous êtes proche !");
    } else if (nombreSaisi < nombreMystère) {
        console.log("Perdu, c'est plus grand. Essayez encore.");
    } else if (nombreSaisi > nombreMystère) {
        console.log("Perdu, c'est plus petit. Essayez encore.");
    } else {
        console.log("BRAVO !!! Vous avez trouvé le nombre mystère.");
        break;
    }

    essais++;
}

if (essais === maxEssais) {
    console.log(`Désolé, vous avez épuisé vos essais. Le nombre mystère était ${nombreMystère}.`);
}
