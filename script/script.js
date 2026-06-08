// =================================
// 🌱 1. Sélection des éléments DOM
// =================================

const colors = ["red", "green", "blue", "yellow"]


let randomSuite = [];
let userSuite = [];

let goodColorGoodPlace = 0;
let goodColorBadPlace = 0;

let remainingMoves = 10;
let timerSecondsLeft = 20;

// =================================
// function randomSuiteCreator : creation de la suite de couleurs aleatoire par 
// l'ordinateur.
// =================================


function randomSuiteCreator() {
    
    for (let i = 0; i < colors.length; i++) {
        const randomIndex = Math.floor(Math.random() * 4)
        console.log(randomIndex);
        
        randomSuite.push(colors[randomIndex])
    }
}

// =================================
// function checkGoodColorAndPosition : fonction de comparaison bonne couleur + bonne position
// =================================

function checkGoodColorAndPosition() {
    
    for (let i = 0; i < colors.length; i++) {
        if (randomSuite[i] === userSuite[i])
        goodColorGoodPlace++;
    }
    
}

// =================================
// function checkGoodColorBadPosition : fonction de comparaison bonne couleur + mauvaise position
// =================================

function checkGoodColorBadPosition() {
    for (let i = 0; i < colors.length; i++) {
        for (let j = 0; j < colors.length; j++) {
            if (randomSuite[i] === userSuite[j])
            goodColorBadPlace++;
        }
    }
}


// =================================
// function randomTitleColor : fonction fun pour donner de la couleur random au titre
// =================================

function randomTitleColor() {

const titleLetter = document.querySelectorAll(".titleLetter")    

titleLetter.forEach(letter => {

const randomIndex = Math.floor(Math.random() * 4)
letter.classList.add(colors[randomIndex]);

    
});
}

randomTitleColor()


function chooseColorForBox() {

    const colorBoxSelect = document.querySelectorAll(".colorBoxSelect")
    colorBoxSelect.forEach(colorBox => {
        
        
    });

}