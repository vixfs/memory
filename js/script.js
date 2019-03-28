const sizeX = 7;
const sizeY = 14;
const gridSize = sizeX * sizeY;

let allCards = [
    {
        name: "Card 1",
        img: "img/cardFront1.png",
        id: 0,
    },

    {
        name: "Card 2",
        img: "img/cardFront2.png",
        id: 1,
    },

    {
        name: "Card 3",
        img: "img/cardFront3.png",
        id: 2,
    },

    {
        name: "Card 4",
        img: "img/cardFront4.png",
        id: 3,
    },

    {
        name: "Card 5",
        img: "img/cardFront5.png",
        id: 4,
    },

    {
        name: "Card 6",
        img: "img/cardFront6.png",
        id: 5,
    },

    {
        name: "Card 7",
        img: "img/cardFront7.png",
        id: 6,
    },

    {
        name: "Card 8",
        img: "img/cardFront8.png",
        id: 7,
    },

    {
        name: "Card 9",
        img: "img/cardFront9.png",
        id: 8,
    },

    {
        name: "Card 10",
        img: "img/cardFront10.png",
        id: 9,
    },

    {
        name: "Card 11",
        img: "img/cardFront11.png",
        id: 10,
    },

    {
        name: "Card 12",
        img: "img/cardFront12.png",
        id: 11,
    },

    {
        name: "Card 13",
        img: "img/cardFront13.png",
        id: 12,
    },

    {
        name: "Card 14",
        img: "img/cardFront14.png",
        id: 13,
    },

    {
        name: "Card 15",
        img: "img/cardFront15.png",
        id: 14,
    },

    {
        name: "Card 16",
        img: "img/cardFront16.png",
        id: 15,
    },

    {
        name: "Card 17",
        img: "img/cardFront17.png",
        id: 16,
    },

    {
        name: "Card 18",
        img: "img/cardFront18.png",
        id: 17,
    },

    {
        name: "Card 19",
        img: "img/cardFront19.png",
        id: 18,
    },

    {
        name: "Card 20",
        img: "img/cardFront20.png",
        id: 19,
    },

    {
        name: "Card 21",
        img: "img/cardFront21.png",
        id: 20,
    },

    {
        name: "Card 22",
        img: "img/cardFront22.png",
        id: 21,
    },

    {
        name: "Card 23",
        img: "img/cardFront23.png",
        id: 22,
    },

    {
        name: "Card 24",
        img: "img/cardFront24.png",
        id: 23,
    },

    {
        name: "Card 25",
        img: "img/cardFront25.png",
        id: 24,
    },

    {
        name: "Card 26",
        img: "img/cardFront26.png",
        id: 25,
    },

    {
        name: "Card 27",
        img: "img/cardFront27.png",
        id: 26,
    },

    {
        name: "Card 28",
        img: "img/cardFront28.png",
        id: 27,
    },

    {
        name: "Card 29",
        img: "img/cardFront29.png",
        id: 28,
    },

    {
        name: "Card 30",
        img: "img/cardFront30.png",
        id: 29,
    },

    {
        name: "Card 31",
        img: "img/cardFront31.png",
        id: 30,
    },

    {
        name: "Card 32",
        img: "img/cardFront32.png",
        id: 31,
    },

    {
        name: "Card 33",
        img: "img/cardFront33.png",
        id: 32,
    },

    {
        name: "Card 34",
        img: "img/cardFront34.png",
        id: 33,
    },

    {
        name: "Card 35",
        img: "img/cardFront35.png",
        id: 34,
    },

    {
        name: "Card 36",
        img: "img/cardFront36.png",
        id: 35,
    },

    {
        name: "Card 37",
        img: "img/cardFront37.png",
        id: 36,
    },

    {
        name: "Card 38",
        img: "img/cardFront38.png",
        id: 37,
    },

    {
        name: "Card 39",
        img: "img/cardFront39.png",
        id: 38,
    },

    {
        name: "Card 40",
        img: "img/cardFront40.png",
        id: 39,
    },

    {
        name: "Card 41",
        img: "img/cardFront41.png",
        id: 40,
    },

    {
        name: "Card 42",
        img: "img/cardFront42.png",
        id: 41,
    },

    {
        name: "Card 43",
        img: "img/cardFront43.png",
        id: 42,
    },

    {
        name: "Card 44",
        img: "img/cardFront44.png",
        id: 43,
    },

    {
        name: "Card 45",
        img: "img/cardFront45.png",
        id: 44,
    },

    {
        name: "Card 46",
        img: "img/cardFront46.png",
        id: 45,
    },

    {
        name: "Card 47",
        img: "img/cardFront47.png",
        id: 46,
    },

    {
        name: "Card 48",
        img: "img/cardFront48.png",
        id: 47,
    },

    {
        name: "Card 49",
        img: "img/cardFront49.png",
        id: 48,
    },

    {
        name: "Card 50",
        img: "img/cardFront50.png",
        id: 49,
    },
    
];

let cards = [];

for (i = 0; i < gridSize / 2; i++) { // Массив используемых карт в сетке (каждой по две)
    cards.push(allCards[i]);
    cards.push(allCards[i]);
}

cards.sort(() => Math.random() - 0.5); // Перемешиваем

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