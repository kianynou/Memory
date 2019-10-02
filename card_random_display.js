//Les images back et front -----------------------------------------
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

//init Joueurs
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

let turnCounterElt = document.getElementById('turn');
turnCounter = 0;

//récupérer combien de joueurs  -------------------------------------
/*
let = document.getElementById(" ");
let askForPlayer = document.getElementById("askForPlayerr");

playerNumberElt.addEventListener("change", function(){
    askForNumberElt.style.display = "none";
    if(event.target.value){
    cardsNumberChoice = event.target.value;
    randomDisplay(cardsNumberChoice);}
    
}
); 
*/
//récupérer le nombre choisi par le joueur --------------------------

let howManyCardsElt = document.getElementById("howManyCards");
let askForNumberElt = document.getElementById("askForNumber");
let cardsNumberChoice;
howManyCardsElt.addEventListener("change", function(){
    askForNumberElt.style.display = "none";
    if(event.target.value){
    cardsNumberChoice = event.target.value;
    randomDisplay(cardsNumberChoice);
    console.log(cardsNumberChoice);}
    
}
); 


// Génération de l'affichage aléatoire ------------------------------
function randomDisplay(cardsNumber){

    let randomNumbers =[];

    
        //Génération d'un tableau de nombres aléatoires de 1 à cardsNumber
    for(let i = 0; i < cardsNumber ; i++){
        let number = Math.round((Math.random() * (cardsNumber-1)) + 1);
        while(randomNumbers.includes(number)){
            number = Math.round((Math.random() * (cardsNumber-1)) + 1);
        }
        randomNumbers.push(number);
    }
        //On divise par 2 
    for(let i = 0; i < cardsNumber; i++){
        if (randomNumbers[i] > (cardsNumber/2)){
            randomNumbers[i] = randomNumbers[i] - (cardsNumber/2);       
        }
        //affichage aléatoire des cartes
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
  //affichage du cadre coloré Player 1
        frameScore1Elt.style.backgroundColor = "#78f875";
        }

        
        


    

// Fonction Flip -------------------------------------------------
let cardinnerElt = [];
let cardinnerArray = [];
for (let i=0; i<cardsNumberChoice; i++){
    cardinnerElt[i] = document.getElementById(`cardinner${i}`);
}



function flipBack () {
    cardinnerArray[0].classList.toggle('is-flipped');
    cardinnerArray[1].classList.toggle('is-flipped');
}
for (let i=0; i<cardsNumberChoice; i++) {
    cardinnerElt[i].addEventListener('click', function() {
        cardinnerElt[i].classList.toggle('is-flipped');   
    let srcImg = document.getElementById('card'+i).src;
    cardinnerArray.push(cardinnerElt[i]);
    srcImgTab.push(srcImg);

        
            if(srcImgTab.length===2){
                turnCounter += 1;
                // A partir de 2 cartes retournées, une alert apparaît
                 if(srcImgTab[0]===srcImgTab[1]){
                     setTimeout(alert, 500,'Ça trou l\'cul!');
                     if(player1.isPlaying=== true){
                        player1.score += 1;
                        }
                     else{
                        player2.score += 1;
                        }
                    }
                    
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
                        
                    console.log(player1.isPlaying);
                
                 }
                srcImgTab = [];
                scorePlayer1Elt.innerHTML = `${player1.score}`;
                scorePlayer2Elt.innerHTML = `${player2.score}`;
                turnCounterElt.innerHTML = `${turnCounter}`;
             }
             
          
        });

    }
    
    }


