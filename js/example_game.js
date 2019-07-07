let level,
    // dataLevels - исходные данные уровней
    dataLevels = [
    { //1
        minPoints: 150, 
        maxPoints: 300,
        time: 45, // в секундах
        delay_time: 5, // в секундах
        sizeX: 3,
        sizeY: 4,
        pointsForFound: 100,
        pointsForFail: -50,
    },
    { //2
        minPoints: 150,
        maxPoints: 350,
        time: 50,
        delay_time:5,
        sizeX: 4,
        sizeY: 5,
        pointsForFound: 100,
        pointsForFail: -50,
    },
    { //3
        minPoints: 250,
        maxPoints: 500,
        time: 50,
        delay_time: 5,
        sizeX: 4,
        sizeY: 6,
        pointsForFound: 100,
        pointsForFail: -50,
    },
    { //4
        minPoints: 300,
        maxPoints: 600,
        time: 1*60,
        delay_time: 5,
        sizeX: 4,
        sizeY: 7,
        pointsForFound: 100,
        pointsForFail: -50,
    },
    { //5
        minPoints: 400,
        maxPoints: 800,
        time: 1.5*60,
        delay_time: 5,
        sizeX: 5,
        sizeY: 6,
        pointsForFound: 100,
        pointsForFail: -50,
    },
    { //6
        minPoints: 450,
        maxPoints: 900,
        time: 2*60,
        delay_time: 5,
        sizeX: 4,
        sizeY: 9,
        pointsForFound: 100,
        pointsForFail: -50,
    },
    { //7
        minPoints: 450,
        maxPoints: 1000,
        time: 2.5*60,
        delay_time: 5,
        sizeX: 5,
        sizeY: 8,
        pointsForFound: 100,
        pointsForFail: -50,
    },
    { //8
        minPoints: 450,
        maxPoints: 1100,
        time: 3.5*60,
        delay_time: 5,
        sizeX: 6,
        sizeY: 9,
        pointsForFound: 100,
        pointsForFail: -50,
    },
    { //9
        minPoints: 500,
        maxPoints: 1250,
        time: 4.5*60,
        delay_time: 5,
        sizeX: 7,
        sizeY: 10,
        pointsForFound: 100,
        pointsForFail: -50,
    },
    { //10
        minPoints: 500,
        maxPoints: 1400,
        time: 5*60, 
        delay_time: 5,
        sizeX: 7,
        sizeY: 14,
        pointsForFound: 100,
        pointsForFail: -50,
    },

];

function newGame() {
    // Удалить. Кнопки Начать игру, Правильный ответ...
    /*document.querySelector(".start").style.display = "none";*/
    /*document.querySelector(".buttons_field").style.display = "block";*/
    /*document.querySelector('.button_correct_answer').disabled = false;*/
    /*document.querySelector('.button_wrong_answer').disabled = false;*/
    /*document.querySelector('.button_end_session').disabled = false;*/
    //

    initProgressLine();

    /** При правильном/неправильном ответе изменение количества очков
     * @param {number} points - кол-во очков за ответ (положительное или отрицательное число)
     *
     * changePoints(points);
     */


    /** Закончить сессию
     *
     * changeLevelState();
     */


}


//Получение уровня и передача данных уровня (min,max очки, время) в шапку
function getDataLevel(startLevel) {
    let dataLevel = dataLevels[startLevel-1];
    level = startLevel;

    return dataLevel;
}