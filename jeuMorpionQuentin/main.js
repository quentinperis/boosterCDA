// Tic Tac Toe

// Faire un morpion.
// L'utilisateur peut placer une croix dans la matrice ( en choisissant sur l'axe XY)
// Si l'emplacement n'est pas libre, afficher un message d'erreur
// Sinon, ajouter la croix, et donner son tour à l'ordinateur.
// L'ordinateur "choisi" de manière random une position libre

// Si trois formes identiques se suivent, le jeu est terminé.

const matrice = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
];

const matriceElement = document.getElementById('matrice');
const messageElement = document.getElementById('message');
let gameOver = false; // Variable de contrôle pour vérifier si le jeu est terminé

function printMatrice() {
    matriceElement.innerHTML = '';
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.textContent = matrice[i][j];
            if (!gameOver && matrice[i][j] === ' ') {
                cell.addEventListener('click', () => playerMove(i, j));
            }
            matriceElement.appendChild(cell);
        }
    }
}

function checkWinner(player) {
    // Check rows, columns and diagonals
    for (let i = 0; i < 3; i++) {
        if (matrice[i].every(cell => cell === player) || matrice.every(row => row[i] === player)) {
            return true;
        }
    }
    if ([0, 1, 2].every(i => matrice[i][i] === player) || [0, 1, 2].every(i => matrice[i][2 - i] === player)) {
        return true;
    }
    return false;
}

function getFreePositions() {
    const positions = [];
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (matrice[i][j] === ' ') {
                positions.push([i, j]);
            }
        }
    }
    return positions;
}

function playerMove(x, y) {
    if (matrice[x][y] !== ' ') {
        messageElement.textContent = 'Emplacement déjà pris!';
        return;
    }
    matrice[x][y] = 'X';
    printMatrice();
    if (checkWinner('X')) {
        messageElement.textContent = 'Vous avez gagné!';
        gameOver = true; // Indique que le jeu est terminé
        return;
    }
    computerMove();
}

function computerMove() {
    const freePositions = getFreePositions();
    if (freePositions.length === 0) {
        messageElement.textContent = 'Match nul!';
        gameOver = true; // Indique que le jeu est terminé
        return;
    }
    const [x, y] = freePositions[Math.floor(Math.random() * freePositions.length)];
    matrice[x][y] = 'O';
    printMatrice();
    if (checkWinner('O')) {
        messageElement.textContent = 'L\'ordinateur a gagné!';
        gameOver = true; // Indique que le jeu est terminé
        return;
    }
}

printMatrice();
