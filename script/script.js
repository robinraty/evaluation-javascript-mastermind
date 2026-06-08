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
const statRemainingMoves = document.querySelector(".statRemainingMoves");
const statTimeLeft = document.querySelector(".statTimeLeft");

const startBtn = document.querySelector(".startBtn");
const infoContent = document.querySelector(".infoContent");

let clickAutorised = false;

const lastTurnDiv = document.querySelector(".lastTurnDiv");

const actualGame = document.querySelector(".actualGame");
const gameHeader = document.querySelector(".gameHeader");

const gameTitle = document.querySelector(".gameTitle");
const gameSection = document.querySelector(".gameSection");


// =================================
// function randomSuiteCreator : creation de la suite de couleurs aleatoire par 
// l'ordinateur.
// =================================


function randomSuiteCreator() {
    
    for (let i = 0; i < colors.length; i++) {
        const randomIndex = Math.floor(Math.random() * 4)        
        randomSuite.push(colors[randomIndex])
    }
    console.log(`random suite :`);
    console.log(randomSuite);
}

// =================================
// function checkGoodColorAndPosition : fonction de comparaison bonne couleur + bonne position
// =================================

function checkGoodColorAndPosition(userSuite) {
    
    for (let i = 0; i < colors.length; i++) {
        if (randomSuite[i] === userSuite[i])
        goodColorGoodPlace++;
    }
    // console.log(`goodColorGoodPlace: ${goodColorGoodPlace}`);
    
}

// =================================
// function checkGoodColorBadPosition : fonction de comparaison bonne couleur + mauvaise position
// =================================

function checkGoodColorBadPosition(userSuite) {
    for (let i = 0; i < colors.length; i++) {
        for (let j = 0; j < colors.length; j++) {
            if (randomSuite[i] === userSuite[j])
            goodColorBadPlace++;
        }
    }
    // console.log(`goodColorBadPlace : ${goodColorBadPlace}`);
    
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
        
        if (seconds === 0) {
            clearInterval(timerInterval);
            newTurnGame();    
            
        }
        
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

const lastTurnBoxOne = document.querySelector(".lastTurnBoxOne");
const lastTurnBoxTwo = document.querySelector(".lastTurnBoxTwo");
const lastTurnBoxThree = document.querySelector(".lastTurnBoxThree");
const lastTurnBoxFour = document.querySelector(".lastTurnBoxFour");







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
            // console.log(userSuite);
            
            
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
            // console.log(userSuite);
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
            // console.log(userSuite);
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
            // console.log(userSuite);
        }
    })
});



// Colors to variable 

let redBg = "#dc143c";
let greenBg = "#247724";
let blueBg = "#3535c9";
let yellowBg = "#c0c032";

function colorToTopBox(userArrayCopy) {
    // Colors Box One 
    if (userArrayCopy[0] === "red") {
        lastTurnBoxOne.style.background = redBg;
    } else if (userArrayCopy[0] === "green") {
        lastTurnBoxOne.style.background = greenBg;
    } else if (userArrayCopy[0] === "blue") {
        lastTurnBoxOne.style.background = blueBg;
    } else if (userArrayCopy[0] === "yellow") {
        lastTurnBoxOne.style.background = yellowBg;
    } 
    // Colors Box Two 
    if (userArrayCopy[1] === "red") {
        lastTurnBoxTwo.style.background = redBg;
    } else if (userArrayCopy[1] === "green") {
        lastTurnBoxTwo.style.background = greenBg;
    } else if (userArrayCopy[1] === "blue") {
        lastTurnBoxTwo.style.background = blueBg;
    } else if (userArrayCopy[1] === "yellow") {
        lastTurnBoxTwo.style.background = yellowBg;
    } 
    // Colors Box Three 
    if (userArrayCopy[2] === "red") {
        lastTurnBoxThree.style.background = redBg;
    } else if (userArrayCopy[2] === "green") {
        lastTurnBoxThree.style.background = greenBg;
    } else if (userArrayCopy[2] === "blue") {
        lastTurnBoxThree.style.background = blueBg;
    } else if (userArrayCopy[2] === "yellow") {
        lastTurnBoxThree.style.background = yellowBg;
    } 
    // Colors Box Four 
    if (userArrayCopy[3] === "red") {
        lastTurnBoxFour.style.background = redBg;
    } else if (userArrayCopy[3] === "green") {
        lastTurnBoxFour.style.background = greenBg;
    } else if (userArrayCopy[3] === "blue") {
        lastTurnBoxFour.style.background = blueBg;
    } else if (userArrayCopy[3] === "yellow") {
        lastTurnBoxFour.style.background = yellowBg;
    } 
    
}

// Function pour stopper un turn quand User a choisi 4 couleurs et relancer un tour ! 

const colorChooser = document.querySelectorAll(".colorChooser");



function newTurnGame() {
    
    
    clearInterval(timerInterval);
    seconds = 20;
    statTimeLeft.textContent = `00:${seconds}`;
    
    gameTimer();
    
    remainingMoves--;
    statRemainingMoves.textContent = `Remaining Moves : ${remainingMoves}`
    
    
    let userArrayCopy = [...userSuite];
    userSuite.length = 0;
    console.log(userArrayCopy);
    
    checkGoodColorAndPosition(userArrayCopy);
    
    checkGoodColorBadPosition(userArrayCopy);
    
    lastTurnDiv.style.display = "flex";
    
    colorToTopBox(userArrayCopy)
    
    console.log(goodColorGoodPlace);
    console.log(goodColorBadPlace);
    
    infoContent.innerHTML = `Color(s) well placed : ${goodColorGoodPlace} <br> Good color(s) at the wrong spot : ${goodColorBadPlace}`
    
    
    goodColorGoodPlace = 0;
    goodColorBadPlace = 0;
    
    clearColorsFromBox(gameLaneBoxOne)
    clearColorsFromBox(gameLaneBoxTwo)
    clearColorsFromBox(gameLaneBoxThree)
    clearColorsFromBox(gameLaneBoxFour)
    
    
    
    
}



    colorChooser.forEach(colorChooser => {
        
        colorChooser.addEventListener("click", function(){

            // Victory Check
            if(userSuite.length === 4) {

                console.log(randomSuite);
                console.log(userSuite);
                // Victory !
                if (userSuite.join()=== randomSuite.join()) {
                    infoContent.textContent = "YOU WIN !";
                    actualGame.style.display = "none";
                    statRemainingMoves.style.display = "none";
                    statTimeLeft.style.display = "none";
                    gameTitle.classList.add("active");
                    gameHeader.classList.add("active");
                    gameSection.classList.add("active");
                    infoContent.classList.add("active");

                    clearInterval(timerInterval);
                    
                // Or...NOT YET
                } else {
                    newTurnGame();
                }
            }
        })
    });