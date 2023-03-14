let idCount = 1;
let idCheck = 0;
let id2 = 0;
let board2 = [];
let sound = new Audio("audio/rclick-13693.mp3");
let drawCount = 0;

// The below loop is for creating the board

for(let i = 0 ; i < 6 ; i++){
    for(let j = 0 ; j < 7 ; j++){

        let round = document.createElement("div");
        round.setAttribute("id",i+""+j);
        round.addEventListener("click",turn);
        round.setAttribute("class","small-boxes");
        root.appendChild(round);
    }
    idCount++;
}

let winArray = [];
let toAdd = [];

// below loop is to adding value for win array

for(let a = 0 ; a < 6 ; a++){
    for(let b = 0 ; b < 7 ; b++){
        toAdd.push(Math.random());
    }
    winArray.push(toAdd);
    toAdd = [];
}

let turnCount = 0; 
let board = [5,5,5,5,5,5,5];
let functionCount = 0;
let  tu = document.getElementById("turn");


// below function is the main function for placing red and blue coins 

function turn(){

    sound.play();

    if(functionCount == 0){

        let tempId = this.id.split("");
        let row = Number(tempId[0]);
        let column = Number(tempId[1]);
        row = board[column];

        let newId = document.getElementById(row + "" + column );


        if(turnCount == 0){
            if(newId == null) return ;
            newId.innerText = "";
            if(newId == null || winArray[row][column] == undefined){return}
            newId.classList.add("red-turn");
            turnCount = 1;
            winArray[row][column] = "red";
            tu.style.backgroundColor = "blue";
            tu.innerText = "BLUE-TURN";
        }
        else {
            if(newId == null) return ;
            newId.innerText = "";
            if(newId == null || winArray[row][column] == undefined){return}
            newId.classList.add("blue-turn");
            turnCount = 0;
            winArray[row][column] = "blue";
            tu.style.backgroundColor = "red";
            tu.innerText = "RED-TURN";
        }
        row -= 1;
        board[column] = row;

        // Check win coindition for all cases

        horizontal();
        vertical();
        diagonal();
        reverseDiagonal();

        // The below 2 if statements are use to check draw condition

        if(newId.innerText == ""){
            drawCount++;
        }

        if(drawCount == 42 && functionCount == 0){
            alert("DRAW");
        }
    }
    else{
        return
    }
}

// Horizontal check

function horizontal(){

    for(let i = 0 ; i < 6 ; i++){
        for(let j = 0; j < 4 ; j++){
                if(winArray[i][j] == winArray[i][j+1] && winArray[i][j+1] == winArray[i][j+2] && winArray[i][j+2] == winArray[i][j+3] ){
                    if(turnCount == 1){
                        alert("PLAYER1-WINS");
                        functionCount++;
                    }
                    else{
                        alert("PLAYER2-WINS");
                        functionCount++;
                    }
                }
        }
    }
}

// Vertical check

function vertical(){
    for(let x = 0 ; x < 3 ; x++){
        for(let y = 0 ; y < 7 ; y++){
                if(winArray[x][y] == winArray[x+1][y] && winArray[x+1][y] == winArray[x+2][y] && winArray[x+2][y] == winArray[x+3][y]){
                    if(turnCount == 1){
                        alert("PLAYER1-WINS");
                        functionCount++;
                    }
                    else{
                        alert("PLAYER2-WINS");
                        functionCount++;
                    }
                }
            }
        }
}

// Diagonal check

function diagonal(){

    for( x = 0 ; x < 3 ; x++){
        for( y = 3 ; y < 7 ; y++){
    
            if(winArray[x][y] == winArray[x+1][y-1] && winArray[x+1][y-1] == winArray[x+2][y-2] && winArray[x+2][y-2] == winArray[x+3][y-3] ){
                if(turnCount == 0){
                    alert("PLAYER2-WINS");
                    functionCount++;
                }
                else{
                    alert("PLAYER1-WINS");
                    functionCount++;
                }
            }
        }
    }

}

// Reverse diagonal check

function reverseDiagonal(){

    for(let x = 0 ; x < 3 ; x++){
        for(let y = 0 ; y < 4 ; y++){
            if( (winArray[x][y] == winArray[x+1][y+1] && winArray[x+1][y+1] == winArray[x+2][y+2] && winArray[x+2][y+2] == winArray[x+3][y+3] )){
                if(turnCount == 0){
                    alert("PLAYER2-WINS");
                    functionCount++;
                }
                else{
                    alert("PLAYER1-WINS");
                    functionCount++;
                }
            }
        }
    }
}
