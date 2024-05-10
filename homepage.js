function bold(x){
    if(x == 1){
        document.getElementById("info").innerHTML = "Game made by - Kartik Bhutra";
    }
    if(x == 2){
        document.getElementById("info").innerHTML = "Game made by - Om Joshi";
    }
    if(x == 3){
        document.getElementById("info").innerHTML = "Game made by - Ram Charan";
    }
    if(x == 4){
        document.getElementById("info").innerHTML = "Game made by - Sherya";
    }
}
var game;
function play(x){
    document.getElementById("Play").style.display = "block";
    game = x;
    if(x == 1){
        document.getElementById("info").innerHTML = "Game made by - Kartik Bhutra";
        document.getElementById("Play").children[0].href = "sudoku/index.html";
    }
    if(x == 2){
        document.getElementById("info").innerHTML = "Game made by - Om Joshi";
        document.getElementById("Play").children[0].href = "2048/index.html";
    }
    if(x == 3){
        document.getElementById("info").innerHTML = "Game made by - Ram Charan";
        document.getElementById("Play").children[0].href = "Tic Tac Toe/index.html";
    }
    if(x == 4){
        document.getElementById("info").innerHTML = "Game made by - Sherya";
        document.getElementById("Play").children[0].href = "SnakeMania/index.html";
    }
    for(let i = 0; i<4; i++){
        document.getElementsByClassName("gamelink")[i].removeAttribute("onmouseout")
    }
}