var level = 0;
var order = [];
var playing = false;
var i = 0;

$(document).on("keypress", startGame);


function getRandomBox() {
    var num = Math.floor(Math.random() * 4);
    var btns = ["yellowbtn", "bluebtn", "greenbtn", "redbtn"];
    return btns[num];
}

function gameOverScreen() {
    $("h1").text("Game Over!");
    $("body").toggleClass("wrong");
    setTimeout(function (){ $("body").toggleClass("wrong");}, 1000);
}

function resetGame() {
    playing = false;
    order = [];
    level = 0;
    i = 0;
    $('h1').text("Press any key to begin");
    $('.btn').off('click');
};

function isCorrectOrder(btn) {
    var correctbtn = order[i];
    return (btn === correctbtn ? true : false);
}

function displayBox(box) {
    $("." + box).fadeOut(350).fadeIn(350);
}

function btnclicked(btn) {
    console.log("hi");
    if (playing) {
        if (isCorrectOrder(btn.classList[1])) {
            playsounds(btn.classList[1]);
            i++;
            if (i === order.length) {
                startLevel();
            }
        }
        else {
            playsounds("wrong");
            gameOverScreen();
            resetGame();
        }
    }
    
}

function startGame() {
    if (playing === true) {
        return ;
    }
    else {
        $('.btn').on('click', function(){ btnclicked(this); });
        playing = true;
        startLevel();
    }
}

function startLevel() {
    i = 0;
    level++;
    var randbox = getRandomBox();
    order.push(randbox);
    setTimeout(function() {
        $('h1').text("level " + level);
        displayBox(randbox);
        playsounds(randbox);
    }, 500);
    
}

function playsounds(soundToPlay) {
    var audio = new Audio("./sounds/" + soundToPlay + ".mp3");
    audio.play();

}
