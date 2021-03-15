var level = 0;
var order = [];
var playing = false;
var i = 0;

$(document).on("keypress", startGame);
$('.btn').on('click', function(){ btnclicked(this); });

function getRandomBox() {
    var num = Math.floor(Math.random() * 4);
    var btn = "";
    switch (num) {
        case 0:
            btn = "yellowbtn";
            break;
        case 1:
            btn = "bluebtn";
            break;
        case 2:
            btn = "greenbtn";
            break;
        case 3:
            btn = "redbtn";
            break;
        default:
            btn = "error";
            break;
    }
    return btn;
}


function gameOverScreen() {
    $("body").toggleClass("wrong");
    setTimeout(function (){ $("body").toggleClass("wrong");}, 1000);
}

function resetGame() {
    playing = false;
    order = [];
    level = 0;
    i = 0;
    $('h1').text("Press any key to begin");
};

function isCorrectOrder(btn) {
    var correctbtn = order[i];
    return (btn === correctbtn ? true : false);
}

function displayBox(box) {
    $("." + box).toggleClass("btnhighlight");
    setTimeout(function() {$("." + box).toggleClass("btnhighlight");} , 1000);
}

function btnclicked(btn) {
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
        playing = true;
        startLevel();
    }
}

function startLevel() {
    i = 0;
    level++;
    $('h1').text("level " + level);
    var randbox = getRandomBox();
    displayBox(randbox); // create this function
    order.push(randbox);
}

function playsounds(soundToPlay) {
    var audio = new Audio("./sounds/" + soundToPlay + ".mp3");
    audio.play();

}
