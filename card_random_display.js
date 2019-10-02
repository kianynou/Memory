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

cardsElt = document.getElementById('cards');
playerNumberElt = document.getElementById("playerNumber");
askForNumberElt = document.getElementById("askForNumber");
let cardsNumberChoice;

playerNumberElt.addEventListener("change", function(){
    askForNumberElt.style.display = "none";
    if(event.target.value){
    cardsNumberChoice = event.target.value;
    randomDisplay(cardsNumberChoice);}
    }
); 
//récupérer le nombre choisi par le joueur --------------------------

/*let cardsNumberChoice = 4;*/

// Génération de l'affichage aléatoire ------------------------------
function randomDisplay(cardsNumber){
    let cardsPlayed = cardsNumber/2

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
        // A partir de 2 cartes retournées, une alert apparaît
        if(srcImgTab[0] === srcImgTab[1]) {
            setTimeout(alert, 1000,'Ça trou l\'cul!');
            score += 1;}
        else{
            setTimeout(flipBack, 1000);
            setTimeout(alert, 500,'Gros naze!');
            scrImgTab=[];
        }
    }
    
    });
}
}
