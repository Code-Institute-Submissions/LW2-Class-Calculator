const soldierDeck = ["soldierA","soldierB","soldierC", "soldierD", "soldierE", "soldierF", "soldierG"];
const alienDeck = ["muton", "chryssalid", "sectoid"];
let matchedCards = []

// --------- Fisher-Yates shuffle ------------

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 != currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array
}

// ---------Difficulty Switching ------------
let starSwitch = 0;

$(".fa-star").click(function(){
    if($(this).is("#star-1")){
        starSwitch = $(".star-active").length;
        $(".fa-star").removeClass("star-active");
        $(this).addClass("star-active");
    } else if($(this).is("#star-2")){
        starSwitch = $(".star-active").length;
        $(".fa-star").removeClass("star-active");
        $("#star-1").addClass("star-active");
        $(this).addClass("star-active");
    } else if($(this).is("#star-3")){
        starSwitch = $(".star-active").length;
        $(".fa-star").removeClass("star-active");
        $("#star-1").addClass("star-active");
        $("#star-2").addClass("star-active");
        $(this).addClass("star-active");
    } else {
        starSwitch = $(".star-active").length;
        $(".fa-star").removeClass("star-active");
        $("#star-1").addClass("star-active");
        $("#star-2").addClass("star-active");
        $("#star-3").addClass("star-active");
        $(this).addClass("star-active");
        console.log(starSwitch);
    }
})

$(".no-reset").click(function(){
    if(starSwitch === 1){
        $(".fa-star").removeClass("star-active");
        $("#star-1").addClass("star-active");
    } else if (starSwitch === 2){
        $(".fa-star").removeClass("star-active");
        $("#star-1").addClass("star-active");
        $("#star-2").addClass("star-active");
    } else if (starSwitch === 3){
        $(".fa-star").removeClass("star-active");
        $("#star-1").addClass("star-active");
        $("#star-2").addClass("star-active");
        $("#star-3").addClass("star-active");
    } else if (starSwitch === 4){
        $(".fa-star").removeClass("star-active");
        $("#star-1").addClass("star-active");
        $("#star-2").addClass("star-active");
        $("#star-3").addClass("star-active");
        $("#star-4").addClass("star-active");
    }
})

$("#resetGame").click(function(){
    reset();

})

// ---------Card Drawing and Deck Structure ------------

function deckOne(){
    var deckOne = [];
        
    var soldierDeckOne = shuffle(soldierDeck);
    for(var i = 0; i < soldierDeckOne.length; i++) {
        deckOne.push(soldierDeckOne[i]);
        deckOne.push(soldierDeckOne[i]);
    }

    var alienDeckOne = shuffle(alienDeck);
    for(var i = 0; i < alienDeckOne.length - 2; i++) {
        deckOne.push(alienDeckOne[i]);
        deckOne.push(alienDeckOne[i]);
    }

    shuffle(deckOne);

    return deckOne;
}

function deckTwo(){
    var deckTwo = [];
        
    var soldierDeckTwo = shuffle(soldierDeck);
    for(var i = 0; i < soldierDeckTwo.length - 1; i++) {
        deckTwo.push(soldierDeckTwo[i]);
        deckTwo.push(soldierDeckTwo[i]);
    }

    var alienDeckTwo = shuffle(alienDeck);
    for(var i = 0; i < alienDeckTwo.length - 1; i++) {
        deckTwo.push(alienDeckTwo[i]);
        deckTwo.push(alienDeckTwo[i]);
    }
    
    shuffle(deckTwo);

    return deckTwo;
}

function deckThree(){
    var deckThree = [];
        
    var soldierDeckThree = shuffle(soldierDeck);
    for(var i = 0; i < soldierDeckThree.length - 2; i++) {
        deckThree.push(soldierDeckThree[i]);
        deckThree.push(soldierDeckThree[i]);
    }

    var alienDeckThree = shuffle(alienDeck);
    for(var i = 0; i < alienDeckThree.length; i++) {
        deckThree.push(alienDeckThree[i]);
        deckThree.push(alienDeckThree[i]);
    }
   
    shuffle(deckThree);

    return deckThree;
}

function deckFour(){
    var deckFour = [];
        
    var soldierDeckFour = shuffle(soldierDeck);
    for(var i = 0; i < soldierDeckFour.length - 2; i++) {
        deckFour.push(soldierDeckFour[i]);
        deckFour.push(soldierDeckFour[i]);
    }

    var alienDeckFour = shuffle(alienDeck);
    for(var i = 0; i < alienDeckFour.length - 1; i++) {
        deckFour.push(alienDeckFour[i]);
        deckFour.push(alienDeckFour[i]);
        deckFour.push(alienDeckFour[i]);
    }
    
    shuffle(deckFour);

    return deckFour;
}


function difficulty(){
    var difficultyNum = $(".star-active").length;
    return difficultyNum;
}

function cardDraw(){
    if(difficulty() === 1){
        var deck = deckOne();
    } else if(difficulty() === 2) {
        var deck = deckTwo();
    } else if(difficulty() === 3) {
        var deck = deckThree();
    } else {
        var deck = deckFour();
    };

    console.log(deck);

    return deck
}

// ---------Adding the deck to the gameboard ------------

function newGame(){
    var deck = cardDraw();

    $(".game-card-front").each(function(i){
        $(this).addClass(deck[i]);
    });

    $(".game-card-style").each(function(i){
        $(this).attr("name", deck[i]);
    }); 
}

// ---------timer & best time ------------
let sec = 0;
let timer;
let time;

function startTimer() {
    timer = setInterval(function(){
        sec++;
        $("#timer").html(sec);
    }, 1000)

}

function stopTimer() {
    time = sec;
    sec = 0;
    clearInterval(timer);
}

function bestTime() {
    if(difficulty() === 1){
        bestTimeOne();
    } else if(difficulty() === 2) {
        bestTimeTwo();
    } else if(difficulty() === 3) {
        bestTimeThree();
    } else {
        bestTimeFour();
    };
}

function bestTimeOne() {
    if(time < localStorage.getItem("time1")) {
        localStorage.setItem("time1", time);
        $("#best-time").html(time);
    } else if(time >= localStorage.getItem("time1")) {

    } else {
        localStorage.setItem("time1", time);
        $("#best-time").html(time);
    }
}

function bestTimeTwo() {
    if(time < localStorage.getItem("time2")) {
        localStorage.setItem("time2", time);
        $("#best-time").html(time);
    } else if(time >= localStorage.getItem("time2")) {

    } else {
        localStorage.setItem("time2", time);
        $("#best-time2").html(time);
    }
}

function bestTimeThree() {
    if(time < localStorage.getItem("time3")) {
        localStorage.setItem("time3", time);
        $("#best-time").html(time);
    } else if(time >= localStorage.getItem("time3")) {

    } else {
        localStorage.setItem("time3", time);
        $("#best-time").html(time);
    }
}

function bestTimeFour() {
    if(time < localStorage.getItem("time4")) {
        localStorage.setItem("time4", time);
        $("#best-time").html(time);
    } else if(time >= localStorage.getItem("time4")) {

    } else {
        localStorage.setItem("time4", time);
        $("#best-time").html(time);
    }
}

// ---------attempt counter ------------
let counter = 0;
function attemptCounter(boolean) {
    counter = counter +1;
    $(".attempt-counter").html(counter);
}

function resetCounter() {
    counter = 0;
    $(".attempt-counter").html(counter);
}

// ---------start game ------------

$(".start").click(function(){
    $(".game-start-container").addClass("hidden");
    $(".card-container").removeClass("hidden");
    removeFixedTop();
    newGame();
    startTimer();
    //flipCard();
   
})

// ---------reset game ------------

function reset() {
    $(".game-start-container").removeClass("hidden");
    $(".card-container").addClass("hidden");
    addFixedTop();
    $(".game-card-front").removeClass(["soldierA", "soldierB", "soldierC", "soldierD", "soldierE", "soldierF", "soldierG", "muton", "sectoid", "chryssalid"]);
    $(".game-card-style").removeClass("flip");
    $(".game-card-style").off("click");
    $(".game-card-style").click(function(card){
        if(busy === false) {
                $(this).addClass("flip");
                console.log($(this).attr("name"))
            
                
                if(hasFlipped === true) {
                    card2 = $(this)
                    busy = true;
                    setTimeout(() =>{
                        busy = false;
                    }, 1800)
                    checkForCardMatch()
                    
                } else {
                    hasFlipped = true;
                    busy = true;
                    setTimeout(() =>{
                        busy = false;
                    }, 300)
                    card1 = $(this);
                    card1.off("click");
                    
                }
            console.log(hasFlipped);
            console.log(card1);
            console.log(card2);
            console.log(matchedCards);
            
        }
    });
    stopTimer();
        matchedCards= [];
        card1 = undefined;
        card2 = undefined;
        hasFlipped = false;
}

$(".reset-button").click(function(){
    reset();
});


// ---------card flipping ------------
let hasFlipped = false;
let card1, card2;
var busy = false;
$(".game-card-style").click(function(card){
    if(busy === false) {
            $(this).addClass("flip");
            console.log($(this).attr("name"))
        
            
            if(hasFlipped === true) {
                card2 = $(this)
                busy = true;
                setTimeout(() =>{
                    busy = false;
                }, 1800)
                checkForCardMatch()
                
            } else {
                hasFlipped = true;
                busy = true;
                setTimeout(() =>{
                    busy = false;
                }, 300)
                card1 = $(this);
                card1.off("click");
                
            }
        console.log(hasFlipped);
        console.log(card1);
        console.log(card2);
        console.log(matchedCards);
        
    }
});

// ---------Card Match Logic ------------

function checkForCardMatch(card) { 
    if(card1.attr("name") === card2.attr("name")) {
        console.log(card1.attr("name"));
        console.log(typeof(card1.attr("name")));
        checkLose();
        matchedCards.push(card1);
        card1.off("click");
        matchedCards.push(card2);
        card2.off("click");
        checkVictory();
    } else {
        unflip()
    }
    hasFlipped = false;
}

function unflip(){
    setTimeout(function(){
        card1.removeClass("flip");
        card1.on("click", function() {
            $(this).addClass("flip");  
            if(hasFlipped === true) {
                card2 = $(this)
                checkForCardMatch()
            } else {
                hasFlipped = true;
                card1 = $(this);
                card1.off("click");
            };
        });
        card2.removeClass("flip");
    }, 700)
}

function checkLose() {
    if(card1.attr("name") === "muton" ) {
        gameLose() 
    }
    if(card1.attr("name") === "sectoid") {
        gameLose() 
    }
    if(card1.attr("name") === "chryssalid") {
        gameLose() 
    }
}

function checkVictory() {
    if(matchedCards.length === soldierNum()) {
        gameWin();
    }
}

function soldierNum() {
    if(difficulty() === 1){
        return 14;
    } else if(difficulty() === 2) {
        return 12;
    } else if(difficulty() === 3) {
        return 10;
    } else {
        return 10;
    };
}

// ---------Game Win/Lose ------------

function gameLose() {
    alert("lose")
    attemptCounter();
    stopTimer();
}

function gameWin() {
    alert("win")
    resetCounter();
    stopTimer();
    bestTime();
}

// ----------Removing/Adding Fixed Top Nav-------------------

function removeFixedTop() {
    $(".navbar-dark").removeClass("fixed-top");
    $("#container-intro").removeClass("container-game-intro");
}

function addFixedTop() {
    $(".navbar-dark").addClass("fixed-top");
    $("#container-intro").addClass("container-game-intro");
}