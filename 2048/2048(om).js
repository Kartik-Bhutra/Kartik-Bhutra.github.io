var board;
var score = 0;
var rows = 4;
var cols = 4;

window.onload = function() {
    setGame();
}

function setGame() {
    board = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ]
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" +  c.toString();
            let num = board[r][c];
            updateTile(tile, num);
            document.getElementById("board").append(tile);
        }
        
    }
    setTwo();
    setTwo();
}

function updateTile(tile, num){
    tile.innerText = "";
    tile.classList.value = ""; 
    tile.classList.add("tile");
    if (num>0) {
        tile.innerText=num.toString();
        if(num<=2048){
            tile.classList.add("t"+num.toString());
        }else{
            tile.classList.add("t4096");
        }
    }
}
document.addEventListener("keyup", (e) => {
    if (e.code== "ArrowLeft") {
        slideLeft();
        setTwo();
    } else if (e.code== "ArrowRight") {
        slideRight();
        setTwo();
    } else if (e.code== "ArrowUp") {
        slideUp();
        setTwo();
    }  else if (e.code== "ArrowDown") {
        slideDown();
        setTwo();
    }
    document.getElementById("score").innerText = score;
})

function filterZero(row){
    return row.filter(num => num!=0);
}

function slide(row){
    row=filterZero(row);

    
    for (let i = 0; i < row.length; i++) {
        
        if (row[i]==row[i+1]) {
            row[i]*=2;
            row[i+1]=0;
            score+=row[i];
        }
    }
    row = filterZero(row);

    
    while (row.length<cols) {
        row.push(0);
    }
    return row;
}
 
function slideLeft(){
    for (let r = 0; r < rows; r++) {
        let row =board[r];
        row = slide(row);
        board[r]=row;

        for (let c = 0; c < cols; c++) {
            let tile = document.getElementById(r.toString() + "-" + c.toString());
            let num = board[r][c];
            updateTile(tile,num);
            
        }
    }
}
function slideRight(){
    for (let r = 0; r < rows; r++) {
        let row =board[r];
        row.reverse();
        row = slide(row);
        row.reverse();
        board[r]=row;

        for (let c = 0; c < cols; c++) {
            let tile = document.getElementById(r.toString() + "-" + c.toString());
            let num = board[r][c];
            updateTile(tile,num);
            
        }
    }
} 
function slideUp() {
    for (let c = 0; c < cols; c++) {
        let row= [board[0][c], board[1][c], board[2][c], board[3][c]];
        row = slide(row);
        for (let r = 0; r < rows; r++) {
            board[r][c] = row[r];
            let tile = document.getElementById(r.toString() + "-" + c.toString());
            let num = board[r][c];
            updateTile(tile,num);
        }
    }
}
function slideDown() {
    for (let c = 0; c < cols; c++) {
        let row= [board[0][c], board[1][c], board[2][c], board[3][c]];
        row.reverse();
        row = slide(row);
        row.reverse();
        for (let r = 0; r < rows; r++) {
            board[r][c] = row[r];
            let tile = document.getElementById(r.toString() + "-" + c.toString());
            let num = board[r][c];
            updateTile(tile,num);
        }
    }
}

function setTwo() {
    if (!hasEmptyTile()) {
        alert('GAME OVER');
        return;
    }
    let found = false;
    while (!found) {
        let r = Math.floor(Math.random()*rows);
        let c = Math.floor(Math.random()*cols);

        if (board[r][c] == 0) {
            board[r][c]=2;
            let tile = document.getElementById(r.toString() + "-" + c.toString());
            tile.innerText = "2";
            tile.classList.add("t2");
            found = true;
        }
    }
}

function hasEmptyTile() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (board[r][c]==0) {
                return true;
            }
            
        }
        
    }
    return false;
}

function resetGame() {
    score = 0; 
    document.getElementById("score").innerText = score;
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            board[r][c] = 0;
            let tile = document.getElementById(r.toString() + "-" + c.toString());
            updateTile(tile, 0);
        }
    }
    setTwo();
    setTwo();
}
