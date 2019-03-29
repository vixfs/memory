const sizeX = 3;
const sizeY = 4;
const gridSize = sizeX * sizeY;
const timeRembemer = 1000;


allCards.sort(() => Math.random() - 0.5); // Перемешиваем все карты

let cards = [];

for (i = 0; i < gridSize / 2; i++) { // Массив используемых карт в сетке (каждой по две)
    cards.push(allCards[i]);
    cards.push(allCards[i]);
}

cards.sort(() => Math.random() - 0.5); // Перемешиваем используемые карты вместе с парами


function preloadImage(url)
{
    var img = new Image();
    img.src = url;
}

preloadImage('img/cardBack.png');

function generateGrid() {
    let grid = document.getElementById('grid');
    for (let i = 0; i < gridSize; i ++) {
        let griddiv = document.createElement('div');
        griddiv.setAttribute('class', 'game-card flip');
        grid.appendChild(griddiv);

        let griddivImgfront = document.createElement('img');
        griddivImgfront.setAttribute('src', cards[i].img);
        griddivImgfront.setAttribute('class', 'front-card');
        griddivImgfront.setAttribute('data-id', cards[i].id);
        griddiv.appendChild(griddivImgfront);

        let griddivImgback = document.createElement('img');
        griddivImgback.setAttribute('src', 'img/cardBack.png');
        griddivImgback.setAttribute('class', 'back-card');
        griddiv.appendChild(griddivImgback);

        preloadImage(cards[i].img);
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

            
const divCards = document.querySelectorAll('.game-card');

function flipCard() {
    this.classList.toggle('flip');
}

setTimeout(function() {
    $('.game-card').toggleClass('flip');
}, timeRembemer);

/*divCards.forEach(card => card.addEventListener('DOMContentLoaded', flipCard));*/
divCards.forEach(card => card.addEventListener('click', flipCard));