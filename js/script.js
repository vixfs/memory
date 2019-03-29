const sizeX = 3;
const sizeY = 4;
const gridSize = sizeX * sizeY;

allCards.sort(() => Math.random() - 0.5); // Перемешиваем все карты

let cards = [];

for (i = 0; i < gridSize / 2; i++) { // Массив используемых карт в сетке (каждой по две)
    cards.push(allCards[i]);
    cards.push(allCards[i]);
}

cards.sort(() => Math.random() - 0.5); // Перемешиваем используемые карты вместе с парами

function generateGrid() {
    let grid = document.getElementById('grid');
    for (let i = 0; i < gridSize; i ++) {
        let griddiv = document.createElement('div');
        griddiv.setAttribute('class', 'game-card');
        grid.appendChild(griddiv);

        let griddivImgfront = document.createElement('img');
        griddivImgfront.setAttribute('class', 'front-card');
        griddivImgfront.setAttribute('src', cards[i].img);
        griddivImgfront.setAttribute('data-id', cards[i].id);
        griddiv.appendChild(griddivImgfront);

        let griddivImgback = document.createElement('img');
        griddivImgback.setAttribute('src', 'img/cardBack.png');
        griddivImgback.setAttribute('class', 'back-card');
        griddiv.appendChild(griddivImgback);
    }         
};


function updateGrid(){
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
updateGrid();

$(window).resize(function(){
    updateGrid();
});

/*
function(){
    var frag = '';
    this.$cards.each(function(k, v){
        frag += '<div class="game-card" data-id="'+ v.id +'">\
        <div class="front-card"><img src="'+ v.img +'"\></div>\
        <div class="back-card"><img src="img/cardBack.png"\
        /></div>\
        </div>';
    });
    return frag;
}

function(array){
    let counter = array.length, temp, index;
    while (counter > 0) {
        index = Math.floor(Math.random() * counter);
        counter--;
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
    return array;
},
*/




            
const divCards = document.querySelectorAll('.game-card');

function flipCard() {
    this.classList.toggle('flip');
}

divCards.forEach(card => card.addEventListener('click', flipCard));