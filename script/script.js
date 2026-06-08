// =================================
// 🌱 1. Sélection des éléments DOM
// =================================

const colors = ["red", "green", "blue", "yellow"]


let randomSuite = [];
let userSuite = [];

let goodColorGoodPlace = 0;
let goodColorBadPlace = 0;

let remainingMoves = 10;
let seconds = 20;
const statTimeLeft = document.querySelector(".statTimeLeft")

const startBtn = document.querySelector(".startBtn");
const infoContent = document.querySelector(".infoContent")

let clickAutorised = false;


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
    console.log(`random suite : ${randomSuite}`);
}

// =================================
// function checkGoodColorAndPosition : fonction de comparaison bonne couleur + bonne position
// =================================

function checkGoodColorAndPosition() {
    
    for (let i = 0; i < colors.length; i++) {
        if (randomSuite[i] === userSuite[i])
        goodColorGoodPlace++;
        console.log(goodColorGoodPlace);
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
            console.log(goodColorBadPlace);
        }
    }
}

// =================================
// function randomTitleColor : fonction fun pour donner de la couleur random au titre
// =================================
const titleLetter = document.querySelectorAll(".titleLetter")    

function randomTitleColor() {
    
    
    titleLetter.forEach(letter => {
        const randomIndex = Math.floor(Math.random() * 4)
        letter.classList.add(colors[randomIndex]);
        
        
    });
}

function clearTitleColor() {
    titleLetter.forEach(letter => {
        letter.classList.remove("red");
        letter.classList.remove("green");
        letter.classList.remove("blue");
        letter.classList.remove("yellow");
        
    });
}



function gameTimer() {
    
    timerInterval = setInterval(function () {
        seconds--;
        
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        
        statTimeLeft.textContent =
        String(minutes).padStart(2, "0") +
        ":" +
        String(remainingSeconds).padStart(2, "0");
        
    }, 1000);
}

function startGame() {
    startBtn.style.display = "none";
    gameTimer();
    randomTitleColor()
    randomSuiteCreator()
    clickAutorised = true;
    
    infoContent.innerHTML = `The game has started ! <br> Choose your colors and try to find the hidden suite !`
}





startBtn.addEventListener("click", function(){
    startGame()
})




// =================================
// function pour mettre les couleurs choisies sur les boxes. Tentative DEUX 
// =================================

const gameLaneBoxOne = document.querySelector(".gameLaneBoxOne");
const gameLaneBoxTwo = document.querySelector(".gameLaneBoxTwo");
const gameLaneBoxThree = document.querySelector(".gameLaneBoxThree");
const gameLaneBoxFour = document.querySelector(".gameLaneBoxFour");

const colorChooserOne = document.querySelectorAll(".colorChooserOne");
const colorChooserTwo = document.querySelectorAll(".colorChooserTwo");
const colorChooserThree = document.querySelectorAll(".colorChooserThree");
const colorChooserFour = document.querySelectorAll(".colorChooserFour");


function clearColorsFromBox(x) {
    x.classList.remove("redColorChooser");
    x.classList.remove("greenColorChooser");
    x.classList.remove("blueColorChooser");
    x.classList.remove("yellowColorChooser");
    
}

// BOX ONE 

colorChooserOne.forEach(colorChooser => {
    
    colorChooser.addEventListener("click", function(){
        
        if (!clickAutorised === false) {
            
            clearTitleColor()
            randomTitleColor()
            clearColorsFromBox(gameLaneBoxOne);
            
            if (colorChooser.classList.contains("redColorChooser")) {
                gameLaneBoxOne.classList.add("redColorChooser")
                userSuite[0] = "red"
            } else if (colorChooser.classList.contains("greenColorChooser")) {
                gameLaneBoxOne.classList.add("greenColorChooser")
                userSuite[0] = "green"
            } else if (colorChooser.classList.contains("blueColorChooser")){
                gameLaneBoxOne.classList.add("blueColorChooser")
                userSuite[0] = "blue"
            } else if (colorChooser.classList.contains("yellowColorChooser")) {
                gameLaneBoxOne.classList.add("yellowColorChooser")
                userSuite[0] = "yellow"
            }
            console.log(userSuite);
            
            
        }
        
    })
});


// BOX TWO

colorChooserTwo.forEach(colorChooser => {
    
    colorChooser.addEventListener("click", function(){
        
        if (!clickAutorised === false) {
            
            clearTitleColor()
            randomTitleColor()
            clearColorsFromBox(gameLaneBoxTwo);
            
            if (colorChooser.classList.contains("redColorChooser")) {
                gameLaneBoxTwo.classList.add("redColorChooser")
                userSuite[1] = "red"
            } else if (colorChooser.classList.contains("greenColorChooser")) {
                gameLaneBoxTwo.classList.add("greenColorChooser")
                userSuite[1] = "green"
            } else if (colorChooser.classList.contains("blueColorChooser")){
                gameLaneBoxTwo.classList.add("blueColorChooser")
                userSuite[1] = "blue"
            } else if (colorChooser.classList.contains("yellowColorChooser")) {
                gameLaneBoxTwo.classList.add("yellowColorChooser")
                userSuite[1] = "yellow"
            }
            console.log(userSuite);
        }
    })
});

// BOX THREE

colorChooserThree.forEach(colorChooser => {
    
    colorChooser.addEventListener("click", function(){
        
        if (!clickAutorised === false) {
            
            clearTitleColor()
            randomTitleColor()
            clearColorsFromBox(gameLaneBoxThree);
            
            if (colorChooser.classList.contains("redColorChooser")) {
                gameLaneBoxThree.classList.add("redColorChooser")
                userSuite[2] = "red"
            } else if (colorChooser.classList.contains("greenColorChooser")) {
                gameLaneBoxThree.classList.add("greenColorChooser")
                userSuite[2] = "green"
            } else if (colorChooser.classList.contains("blueColorChooser")){
                gameLaneBoxThree.classList.add("blueColorChooser")
                userSuite[2] = "blue"
            } else if (colorChooser.classList.contains("yellowColorChooser")) {
                gameLaneBoxThree.classList.add("yellowColorChooser")
                userSuite[2] = "yellow"
            }
            console.log(userSuite);
        }
    })
});

// BOX FOUR

colorChooserFour.forEach(colorChooser => {
    
    colorChooser.addEventListener("click", function(){
        
        if (!clickAutorised === false) {
            
            clearTitleColor()
            randomTitleColor()
            clearColorsFromBox(gameLaneBoxFour);
            
            if (colorChooser.classList.contains("redColorChooser")) {
                gameLaneBoxFour.classList.add("redColorChooser")
                userSuite[3] = "red"
            } else if (colorChooser.classList.contains("greenColorChooser")) {
                gameLaneBoxFour.classList.add("greenColorChooser")
                userSuite[3] = "green"
            } else if (colorChooser.classList.contains("blueColorChooser")){
                gameLaneBoxFour.classList.add("blueColorChooser")
                userSuite[3] = "blue"
            } else if (colorChooser.classList.contains("yellowColorChooser")) {
                gameLaneBoxFour.classList.add("yellowColorChooser")
                userSuite[3] = "yellow"
            }
            console.log(userSuite);
        }
    })
});


// Function pour stopper un turn quand User a choisi 4 couleurs.

const colorChooser = document.querySelectorAll(".colorChooser");

colorChooser.forEach(colorChooser => {
    
    colorChooser.addEventListener("click", function(){
        
        if (userSuite.length === 4){
            console.log("helloooo");
            
            checkGoodColorAndPosition();
            
            checkGoodColorBadPosition();
            
        }
    })
    
    
});