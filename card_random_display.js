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


//récupérer le nombre choisi par le joueur --------------------------
let cardsNumber = 12;

// Génération de l'affichage aléatoire ------------------------------
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
    cardsElt.innerHTML += `<img src="${backImage}" class="back">`;
    cardsElt.innerHTML += `<img src="images/carte${randomNumbers[i]}.jpg" class="front" id="card${i}">`;
            
}  

// affichage au clique de "Back" vers "Front"
let frontElt = document.getElementsByClassName('front');
for(let i = 0; i<frontElt.length; i++){
    frontElt[i].style.display = "none";
 }
  
let backElt = document.getElementsByClassName('back');
cardIndex = [];

for (let i=0; i<frontElt.length; i++){
    cardIndex[i] = document.getElementById(`card${i}`);}
     
for (let i=0; i<backElt.length; i++){
    backElt[i].addEventListener('click', function showTheFront(){ 
        // Comment intégrer l'effet Flip ?
        cardIndex[i].style.display = "block";
        backElt[i].style.display = "none";

 });
 }
 
