// let fruits = ['pomme', 'fraise', 'banane']

// fruits.forEach((f) => console.log(f));

// fruits.forEach(function(f) {
//     console.log(f);
// });

// //Méthodes de tableau

// fruits.push('melon');
// fruits.splice(0, 1); // supprime 1 élément à l'index.

// const fruits_uppercase = fruits.map((f) => f.toUpperCase());
// const fruits_copy = fruits.map(f => f);
// fruits_copy.push("pastèque");
// console.log(fruits);

// const numbers = [0, 8, 1, 6, 4];
// numbers.includes(9); // false

// //retourne l'index de 8
// numbers.indexOf(8); // 1

// // le premier élément du tableau qui correspond à une condition
// numbers.find(f => f > 1); // 8

// //l'index du premier élément du tableau qui correspond à une condition
// numbers.findIndex( f => f  >1); // 1

// // retourne un tableau dont les éléments répondent à une condition
// const bigNumbers = numbers.filter( n => n > 5);

// const numbs = [10, 1, 2, 2000];
// numbs.sort();

// console.log(numbs);// trié par ordre alphabétique

// numbs.sort((a, b) => a - b); // trier par ordre croissant
// console.log(numbs);

// const reversed = numbs.reverse;
// console.log(numbs);


// function entrerNotes() {
//     let notes = [];
//     for (let i = 0; i < 10; i++) {
//         let note;
//         while (true) {
//             note = parseFloat(prompt(`Entrez la note ${i + 1} (sur 20) : `));
//             if (!isNaN(note) && note >= 0 && note <= 20) {
//                 notes.push(note);
//                 break;
//             } else {
//                 alert("La note doit être un nombre entre 0 et 20. Veuillez réessayer.");
//             }
//         }
//     }
//     return notes;
// }

// function afficherNotes(notes) {
//     if (notes.length === 0) {
//         console.log("Aucune note à afficher.");
//         return;
//     }
//     let noteMax = Math.max(...notes);
//     let noteMin = Math.min(...notes);
//     let somme = notes.reduce((total, note) => total + note, 0);
//     let moyenne = somme / notes.length;

//     console.log("Notes entrées :", notes);
//     console.log("Note la plus haute :", noteMax);
//     console.log("Note la plus basse :", noteMin);
//     console.log("Moyenne des notes :", moyenne.toFixed(2));
// }

// // Appel des fonctions
// let notesUtilisateur = entrerNotes();
// afficherNotes(notesUtilisateur);



// let motSaisi = prompt("Veuillez saisir un mot");
// let motNettoye = motSaisi.toLowerCase().replace(/[^a-z]/g, ''); 
// let motInverse = motNettoye.split('').reverse().join('');
// if (motNettoye === motInverse) {
//     console.log(`Le mot ${motNettoye} est un palindrome`);
// } else {
//     console.log(`Le mot ${motNettoye} n'est pas un palindrome`);
// }
// -------------------------------------------------------------------------
// const matrice = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// console.log(matrice[0][1]);

// for(let i in matrice) {
//     for(let j in matrice[i]){
//         console.log(matrice [i][j]);
//     }
// }

// matrice[0].push(0);
// matrice.push([10, 11, 12]);

// console.log(matrice);

// -----------------------------------------------------------------------------------------------------
// const notesEleves = [
//     ['Quentin', 19, 15, 12],
//     ['Thomas', 19, 20, 14],
//     ['Arthur', 10, 14, 20]
// ];

// console.log(`Les notes de ${notesEleves[0][0]} sont : ${notesEleves[0].slice(1).join(', ')}`);
// console.log(`Les notes de ${notesEleves[1][0]} sont : ${notesEleves[1].slice(1).join(', ')}`);
// console.log(`Les notes de ${notesEleves[2][0]} sont : ${notesEleves[2].slice(1).join(', ')}`);

// const moyenneQuentin = (notesEleves[0][1] + notesEleves[0][2] + notesEleves[0][3]) / 3;
// const moyenneThomas = (notesEleves[1][1] + notesEleves[1][2] + notesEleves[1][3]) / 3;
// const moyenneArthur = (notesEleves[2][1] + notesEleves[2][2] + notesEleves[2][3]) / 3;

// console.log(`La moyenne de Quentin est : ${moyenneQuentin.toFixed(2)}`);
// console.log(`La moyenne de Thomas est : ${moyenneThomas.toFixed(2)}`);
// console.log(`La moyenne d'Arthur est : ${moyenneArthur.toFixed(2)}`);

// const moyenneHistoire = (notesEleves[0][1] + notesEleves[1][1] + notesEleves[2][1]) / 3;
// const moyenneMathematiques = (notesEleves[0][2] + notesEleves[1][2] + notesEleves[2][2]) / 3;
// const moyenneMusique = (notesEleves[0][3] + notesEleves[1][3] + notesEleves[2][3]) / 3;

// console.log(`La moyenne d'Histoire est : ${moyenneHistoire.toFixed(2)}`);
// console.log(`La moyenne de Mathématiques est : ${moyenneMathematiques.toFixed(2)}`);
// console.log(`La moyenne de Musique est : ${moyenneMusique.toFixed(2)}`);

// console.log("%cTable de multiplications de 0 à 10 :", "font-weight: bold");
// for(let i=0; i<11; i++){
//     for(let j=0; j < 11; j++){
//     console.log(`${i} * ${j} = ${i * j}`);
//  }
// }

// AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA

// const notesEleves = [
//     ['Quentin', 19, 15, 12],
//     ['Thomas', 19, 20, 14],
//     ['Arthur', 10, 14, 20]
// ];

// notesEleves.forEach(([nom, ...notes]) => {
//     console.log(`Les notes de ${nom} sont : ${notes.join(', ')}`);
//     console.log(`La moyenne de ${nom} est : ${(notes.reduce((a, b) => a + b) / notes.length).toFixed(2)}`);
// });

// ['Histoire', 'Mathématiques', 'Musique'].forEach((matiere, i) => {
//     const moyenneMatiere = (notesEleves.reduce((acc, eleve) => acc + eleve[i + 1], 0) / notesEleves.length).toFixed(2);
//     console.log(`La moyenne de ${matiere} est : ${moyenneMatiere}`);
// });

// console.log("%cTable de multiplications de 0 à 10 :", "font-weight: bold");
// for (let i = 0; i <= 10; i++) {
//     for (let j = 0; j <= 10; j++) {
//         console.log(`${i} * ${j} = ${i * j}`);
//     }
// }
// // AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA



// * Créer un tableau à 2 dimensions contenant les 3 notes de 5 élèves.
// -> afficher les notes pour chaque éléve ( éléve 1 : ...., élève 2: ...) ( sans utiliser de For In)
// -> calculer la moyenne de chaque élève
// -> calculer la moyenne de chaque matière
//  */
// const averagePerStudent = (grades) => {
//     let sum = 0;
//     grades.forEach((g) => {
//         sum += g;
//     });
//     return sum / grades.length;
// }

// const getAverageByClass= (grades) => {
//     let sum = [0, 0, 0];
//     grades.forEach(g => {
//         g.forEach((note, i) => {
//             sum[i] += note;
//         })
//     });
//     const moyennes = sum.map(s => s  / grades.length);
//     console.log(`Moyennes par matière : ${moyennes.join(", ")}`)
// }

// const grades = [
//     [4, 8, 8],
//     [14, 18, 4],
//     [4, 5, 8],
//     [14, 18, 8],
//     [4, 8, 8],
// ];

// for(let i = 0; i < grades.length; i++) {
//     console.log(`Eleve ${i + 1} : ${grades[i].join(', ')}. Moyenne : ${averagePerStudent(grades[i])}`);
// }
// getAverageByClass(grades);


// Générer un nombre mystère aléatoire entre 0 et 100
// Il faut remplacer par 101 mais j'ai mis 6 pour la phase de test
let nombreMystere = Math.floor(Math.random() * 6);
let essais = 0;
let maxEssais = 5;
let nbPartiesGagnees = 0;

// Vérifier si nbPartiesGagnees est déjà stocké dans le localStorage
if (localStorage.getItem('nbPartiesGagnees')) {
    nbPartiesGagnees = parseInt(localStorage.getItem('nbPartiesGagnees'), 10);
    if (isNaN(nbPartiesGagnees)) {
        nbPartiesGagnees = 0;
    }
} else {
    localStorage.setItem('nbPartiesGagnees', 0);
}

function lancerPartie() {
    nombreMystere = Math.floor(Math.random() * 6); // 6 pour les tests, 101 pour la version finale
    essais = 0;
    let partieActive = true;

    while (essais < maxEssais && partieActive) {
        let nombreSaisi = prompt("Entrez un nombre entier entre 0 et 100 pour deviner le nombre mystère ou 'pause' pour mettre en pause.");

        if (nombreSaisi === 'pause') {
            alert("Jeu en pause. Vous pouvez reprendre plus tard.");
            partieActive = false;
        } else {
            nombreSaisi = parseInt(nombreSaisi);

            if (isNaN(nombreSaisi) || nombreSaisi < 0 || nombreSaisi > 100) {
                alert("Votre nombre n'est pas compris entre 0 et 100.");
            } else if (nombreSaisi === nombreMystere) {
                alert("BRAVO !!! Vous avez trouvé le nombre mystère.");
                nbPartiesGagnees += 1;
                localStorage.setItem('nbPartiesGagnees', nbPartiesGagnees);
                alert(`Vous avez gagné ${nbPartiesGagnees} fois.`);
                break;
            } else if (Math.abs(nombreMystere - nombreSaisi) <= 1) { 
                alert("Vous êtes proche !");
            } else if (nombreSaisi < nombreMystere) {
                alert("Perdu, c'est plus grand. Essayez encore.");
            } else if (nombreSaisi > nombreMystere) {
                alert("Perdu, c'est plus petit. Essayez encore.");
            }

            essais++;
        }
    }

    if (essais === maxEssais) {
        alert(`Désolé, vous avez épuisé vos essais. Le nombre mystère était ${nombreMystere}.`);
    }
}

function afficherScore() {
    alert(`Vous avez gagné ${nbPartiesGagnees} fois.`);
}

function menuPrincipal() {
    let choix = prompt("Entrez '1' pour lancer une nouvelle partie, '2' pour afficher le score, ou '3' pour quitter.");

    switch (choix) {
        case '1':
            lancerPartie();
            break;
        case '2':
            afficherScore();
            break;
        case '3':
            alert("Au revoir !");
            break;
        default:
            alert("Choix invalide.");
            menuPrincipal();
            break;
    }
}

menuPrincipal();
