const sizeX = 3;
const sizeY = 4;
const gridSize = sizeX * sizeY;
const timeForRembemer = 1000;
const timeBeforeUnflip = 800;

allCards.sort(() => Math.random() - 0.5); // Перемешиваем все карты

let cards = [];

for (i = 0; i < gridSize / 2; i++) { // Массив используемых карт в сетке (каждой по две)
    cards.push(allCards[i]);
    cards.push(allCards[i]);
}

cards.sort(() => Math.random() - 0.5); // Перемешиваем используемые карты вместе с парами

function generateGrid() {
    let grid = document.getElementById('grid');
    for (let i = 0; i < gridSize; i++) {
        let griddiv = document.createElement('div');
        griddiv.setAttribute('class', 'game-card flip');
        griddiv.setAttribute('data-id', cards[i].id);
        grid.appendChild(griddiv);

        let griddivImgfront = document.createElement('img');
        griddivImgfront.setAttribute('src', cards[i].img);
        griddivImgfront.setAttribute('class', 'front-card');
        griddiv.appendChild(griddivImgfront);

        let griddivImgback = document.createElement('img');
        griddivImgback.setAttribute('src', 'img/cardBack.png');
        griddivImgback.setAttribute('class', 'back-card');
        griddiv.appendChild(griddivImgback);

    }         
};



function updateSizeGrid(){
    if(((window.innerHeight - 100) / sizeY) > ((window.innerWidth - 40) / sizeX)){
        $("#grid").css({
            "grid-template-rows": `repeat( ${sizeY}, calc((100vw - 40px) / ${sizeX}) )`,
            "grid-template-columns": `repeat( ${sizeX}, calc((100vw - 40px) / ${sizeX}) )`,
        })
    } else {
        $("#grid").css({
            "grid-template-rows": `repeat( ${sizeY}, calc((100vh - 100px) / ${sizeY}) )`,
            "grid-template-columns": `repeat( ${sizeX}, calc((100vh - 100px) / ${sizeY}) )`,
        })
    }
};


generateGrid();
updateSizeGrid();

$(window).resize(function(){
    updateSizeGrid();
});
       

const htmlCards = document.querySelectorAll('.game-card');

let flippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
    if (lockCards) {return;}
    if (this === firstCard) {return;}

    this.classList.add('flip');

    if (!flippedCard) {
        flippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    lockCards = true;

    checkForDoublet();
}

function checkForDoublet() {
    let isMatch = firstCard.dataset.id === secondCard.dataset.id;
    if (isMatch){
            disableCards()
        } else{
            unflipCards();
        }
        
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

function unflipCards() {
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();

    }, timeBeforeUnflip);
}

function resetBoard() {
    flippedCard = false;
    lockCards = false;
    firstCard = null;
    secondCard = null;
}

setTimeout(function() {
    $('.game-card').removeClass('flip');

    resetBoard();

}, timeForRembemer);

/*divCards.forEach(card => card.addEventListener('DOMContentLoaded', flipCard));*/
htmlCards.forEach(card => card.addEventListener('click', flipCard));