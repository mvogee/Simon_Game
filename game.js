$(document).on("keypress", main);




function getRandomBox() {
    return Math.floor(Math.random() * 4); 
}


function main() {
    var level = 1;
    $('h1').text("level " + level);
    var order = [];
    // get random number between 0 and 3 that will represent your boxes 1-blue 2-yellow 3-green 4-red
    // add that number to the array
    // when there is a click if it is not on the correct button end the game
    $('.btn').on('click', function(){console.log(this)} ); // why does this only give me one element?
}
