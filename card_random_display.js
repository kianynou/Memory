//Back and Front Pictures -----------------------------------------
const backImage = 'images/back.jpg';

const frontImages = [
    'images/carte1.jpg',
    'images/carte2.jpg',
    'images/carte3.jpg',
    'images/carte4.jpg',
    'images/carte5.jpg',
    'images/carte6.jpg',
    'images/carte7.jpg',
    'images/carte8.jpg',
    'images/carte9.jpg',
    'images/carte10.jpg',
    ];

let cardsElt = document.getElementById('cards');

//Players Init
class Player{
    score = 0;
    constructor(isPlaying){
        this.isPlaying = isPlaying;
        
    }
    addScore(){
        return score+=1
    }
}
const player1 = new Player(true);
const player2 = new Player(false);

let scorePlayer1Elt = document.getElementById('scorePlayer1');
let scorePlayer2Elt = document.getElementById('scorePlayer2');

let frameScore1Elt = document.getElementById('frameScore1');
let frameScore2Elt = document.getElementById('frameScore2');
let frameCounterElt = document.getElementById('frameCounter');
let lonelyElt = document.getElementById('lonely');

let turnCounterElt = document.getElementById('turn');
turnCounter = 0;

// Welcome display
let welcomeElt = document.getElementById('welcome');
let gameElt = document.getElementById('game');

gameElt.style.display = 'none';
//How many players ??  -------------------------------------

let howManyPlayersElt = document.getElementById("howManyPlayers");
let playersNumberChoice;
howManyPlayersElt.addEventListener("change", function(){
    if(event.target.value){
        playersNumberChoice = event.target.value;
        return playersNumberChoice;
        }
});
    
//How many cards ?? ----------------------------------------

let howManyCardsElt = document.getElementById("howManyCards");
let cardsNumberChoice;
howManyCardsElt.addEventListener("change", function(){
    if(event.target.value){
    cardsNumberChoice = event.target.value;
    return cardsNumberChoice ;}
    
}); 

//Play button
let askForNumberElt = document.getElementById("askForNumber");
let playElt = document.getElementById("play");

playElt.addEventListener("click", function(){
    if(!isNaN(cardsNumberChoice) && !isNaN(playersNumberChoice)){
        gameElt.style.display = 'flex';
        askForNumberElt.style.display = "none";
        console.log(playersNumberChoice);
        randomDisplay(cardsNumberChoice, playersNumberChoice);
        }
    else{
        alert('Euh, tu peux choisir tes options comme y faut steu\'plait ?');}
}); 


// Random display -------------------------------------------
function randomDisplay(cardsNumber,playersNumber){

    let randomNumbers =[];

    
    //Random numbers Array generation
    for(let i = 0; i < cardsNumber ; i++){
        let number = Math.round((Math.random() * (cardsNumber-1)) + 1);
        while(randomNumbers.includes(number)){
            number = Math.round((Math.random() * (cardsNumber-1)) + 1);
        }
        randomNumbers.push(number);
    }
    //divide by 2 
    for(let i = 0; i < cardsNumber; i++){
        if (randomNumbers[i] > (cardsNumber/2)){
            randomNumbers[i] = randomNumbers[i] - (cardsNumber/2);       
        }
        //Cards display
        cardsElt.innerHTML += `<div class="card" id="card">

                                    <div class="flip-card-inner" id="cardinner${i}">
                                        <div class="card-face back" id="back${i}">
                                            <img src="${backImage}" class="border">
                                        </div>
                                        <div class="card-face front" id="front${i}">
                                            <img src="images/carte${randomNumbers[i]}.jpg" class="border" id="card${i}">
                                        </div>
                                    </div>
                                </div>`;

        
        
    }

    //1 or 2 players display
    if(playersNumber === '1'){
        frameScore2Elt.style.display = "none";
        lonelyElt.innerHTML = 'Your score';
    }
    else{
        frameScore2Elt.style.display = "initial";
        frameCounterElt.style.display = "none";
        frameScore1Elt.style.backgroundColor = "#78f875";}

    

        
        


    

// THE GAME ! ------------------------------------------------
let cardinnerElt = [];
let cardinnerArray = [];

for (let i=0; i<cardsNumberChoice; i++){
    cardinnerElt[i] = document.getElementById(`cardinner${i}`);
}


function flipBack () {
    cardinnerArray[0].classList.toggle('is-flipped');
    cardinnerArray[1].classList.toggle('is-flipped');
    cardinnerArray = [];  
}
function notTheSameCard() {
    if (cardinnerArray[0] === cardinnerArray[1]) {
        cardinnerArray = [];
        srcImgTab = [];
        alert(`You can't select two times the same card`);
    }
}
function isItOver () {
    if (player1.score + player2.score === cardsNumberChoice / 2) {
        setTimeout(alert, 600, 'You finished the game');
    }
}

for (let i=0; i<cardsNumberChoice; i++) {
    cardinnerElt[i].addEventListener('click', function() {
    cardinnerElt[i].classList.toggle('is-flipped');   
    let srcImg = document.getElementById('card'+i).src;
    cardinnerArray.push(cardinnerElt[i]);
    srcImgTab.push(srcImg);
    notTheSameCard();

    // 2 cards returned
    if(srcImgTab.length===2){
        turnCounter += 1;
        
        //If the same
        if(srcImgTab[0]===srcImgTab[1]){
            setTimeout(alert, 500,'Ça trou l\'cul!');
            cardinnerArray = []; 

            if(player1.isPlaying=== true){
                player1.score += 1;
            }
            else{
                player2.score += 1;
            }
        isItOver();
        }
        //If not the same          
        else{
            setTimeout(flipBack, 1000);
            setTimeout(alert, 500,'Gros naze!');
                     
            if(player1.isPlaying){
                player1.isPlaying = false;
                player2.isPlaying = true;
                frameScore2Elt.style.backgroundColor = "#78f875";
                frameScore1Elt.style.backgroundColor = "#D6EAF8";}
            else{
                player1.isPlaying = true;
                player2.isPlaying = false;
                frameScore1Elt.style.backgroundColor = "#78f875";
                frameScore2Elt.style.backgroundColor = "#D6EAF8";}
            }
            srcImgTab = [];
                
            scorePlayer1Elt.innerHTML = `${player1.score}`;
            scorePlayer2Elt.innerHTML = `${player2.score}`;
            turnCounterElt.innerHTML = `${turnCounter}`;
        }      
             
    });

    }
    
}


