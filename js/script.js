const sizeX = 4;
const sizeY = 6;
const gridSize = sizeX * sizeY;

function generateGrid() {
    let grid = document.getElementById('grid');
    for (let i = 0; i < gridSize; i++) {
        
        let griddiv = document.createElement('div');
        griddiv.setAttribute('class', 'game-card');
        grid.appendChild(griddiv);
                    
        let griddivImgfront = document.createElement('img');
        griddivImgfront.setAttribute('src', 'img/cardFront1.png');
        griddivImgfront.setAttribute('class', 'front-card');
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

let cards = [
    {
        name: "Card 1",
        img: "img/cardFront1.png",
        id: 1,
    },

    {
        name: "Card 2",
        img: "img/cardFront2.png",
        id: 2
    },
];


*/
            
const cards = document.querySelectorAll('.game-card');

function flipCard() {
    this.classList.toggle('flip');
}

cards.forEach(card => card.addEventListener('click', flipCard));