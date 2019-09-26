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

    function flip() {
        document.getElementById("cardinner").style.transform = "rotateY(180deg)";
    };
//récupérer le nombre choisi par le joueur --------------------------
let cardsNumberChoice = 12;

// Génération de l'affichage aléatoire ------------------------------
function randomDisplay(cardsNumber){
    let cardsPlayed = cardsNumber/2

    let randomNumbers =[];

    cardsElt = document.getElementById('cards');
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
    cardsElt.innerHTML += `<div class="card" id="card" onclick='flip()'>
            <div class="flip-card-inner" id="cardinner">
                <div class="back">
                    <img src="${backImage}" class="border">
                </div>
                <div class="front">
                <img src="images/carte${randomNumbers[i]}.jpg" class="border" id="card${i}">
                </div>
            </div>
        </div>`;
    /*cardsElt.innerHTML += `<img src="${backImage}" class="back">`;
    cardsElt.innerHTML += `<img src="images/carte${randomNumbers[i]}.jpg" class="front" id="card${i}">`;*/
    console.log(randomNumbers);        
        }     
}

randomDisplay(12);

// affichage au clique de "Back" vers "Front" ----------------------------
/*let frontElt = document.getElementsByClassName('front');
let backElt = document.getElementsByClassName('back');

for(let i = 0; i<frontElt.length; i++){
    frontElt[i].style.display = "none";
 }
  

cardIndex = [];
srcImgTab = [];
let score = 0;

for (let i=0; i<frontElt.length; i++){
    cardIndex[i] = document.getElementById(`card${i}`);}
     
for (let i=0; i<backElt.length; i++){
    backElt[i].addEventListener('click', function showTheFront(){ 

        // Comment intégrer l'effet Flip ?

        //Affichage de front, disparition du back
        cardIndex[i].style.display = "block";
        backElt[i].style.display = "none";*/
/*
//Comparaison des resultats -----------------------------------------------
        let srcOk = document.getElementById('card'+i).src;
           srcImgTab.push(srcOk);
            console.log(srcImgTab);

            if(srcImgTab.length===2){
                // A partir de 2 cartes retournées, une alert apparaît
                 if(srcImgTab[0]===srcImgTab[1]){
                     alert('bravo !');
                     score += 1;}
                 else{
                     alert('bouh!');
                 }
             }
                 // Plus de 2 cartes, une alerte averti que c'est 2 maxi !
             else if (srcImgTab.length>2){
                 alert('2 cartes maxi SVP !');
             }    
        
         

 });
}

console.log(score)*/
 
 