let idCount = 1;
let idCheck = 0;
let id2 = 0;
let board2 = [];
let sound = new Audio("audio/rclick-13693.mp3");
let drawCount = 0;
let lastWinCheck = false;

for(let i = 0 ; i < 6 ; i++){
    for(let j = 0 ; j < 7 ; j++){

        let round = document.createElement("div");
        round.setAttribute("id",i+""+j);
        round.addEventListener("click",turn);
        round.setAttribute("class","small-boxes");
        // round.setAttribute("onmouseover","hoverPiece(this.id)");
        // round.setAttribute("onmouseleave"," noHov(this.id)")
        root.appendChild(round);
    }
    idCount++;
}
//   css.setAttribute("href","connect4.css")
let winArray = [];
let toAdd = [];
let count = 1;
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
let raCount = 5;
let raCount2 = 6;
let check = 5;
function turn(){
    
    sound.play();
    // console.log("check "+functionCount)

    if(functionCount == 0){

        let tempId = this.id.split("");
        let row = Number(tempId[0]);
        let column = Number(tempId[1]);
        row = board[column];

        let newId = document.getElementById(row + "" + column );
        console.log(row,column);

        // if(turnCount == 0){
            if(newId == null) return ;
            newId.innerText = "";
            if(newId == null || winArray[row][column] == undefined){return}
            newId.classList.add("red-turn");
            turnCount = 1;
            winArray[row][column] = "red";
            console.log(newId.innerText);

            



        row -= 1;
        board[column] = row;
        verAndHoriCheck();
        diogonal();
        antiDiogonal();

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

function verAndHoriCheck(){

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
                    return;
                }
        }
    }

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
                    return
                }
            }
        }
    }


function diogonal(){

    conditon1 =   (winArray[0][3] == winArray[1][2]) && (winArray[1][2] == winArray[2][1]) && (winArray[2][1] == winArray[3][0]);
    conditon2 =   (winArray[0][4] == winArray[1][3]) && (winArray[1][3] == winArray[2][2]) && (winArray[2][2] == winArray[3][1]);
    conditon3 =   (winArray[0][5] == winArray[1][4]) && (winArray[1][4] == winArray[2][3]) && (winArray[2][3] == winArray[3][2]);
    conditon4 =   (winArray[0][6] == winArray[1][5]) && (winArray[1][5] == winArray[2][4]) && (winArray[2][4] == winArray[3][3]);
    conditon5 =   (winArray[1][3] == winArray[2][2]) && (winArray[2][2] == winArray[3][1]) && (winArray[3][1] == winArray[4][0]);
    conditon6 =   (winArray[1][4] == winArray[2][3]) && (winArray[2][3] == winArray[3][2]) && (winArray[3][2] == winArray[4][1]);
    conditon7 =   (winArray[1][5] == winArray[2][4]) && (winArray[2][4] == winArray[3][3]) && (winArray[3][3] == winArray[4][2]);
    conditon8 =   (winArray[1][6] == winArray[2][5]) && (winArray[2][5] == winArray[3][4]) && (winArray[3][4] == winArray[4][3]);
    conditon9 =   (winArray[2][3] == winArray[3][2]) && (winArray[3][2] == winArray[4][1]) && (winArray[4][1] == winArray[5][0]);
    conditon10 =  (winArray[2][4] == winArray[3][3]) && (winArray[3][3] == winArray[4][2]) && (winArray[4][2] == winArray[5][1]);
    conditon11 =  (winArray[2][5] == winArray[3][4]) && (winArray[3][4] == winArray[4][3]) && (winArray[4][3] == winArray[5][2]);
    conditon12 =  (winArray[2][6] == winArray[3][5]) && (winArray[3][5] == winArray[4][4]) && (winArray[4][4] == winArray[5][3]);

    if(conditon1 || conditon2 || conditon3 || conditon4 || conditon5 || conditon6 || conditon7 || conditon8 || conditon9 || conditon10 || conditon11 || conditon12){
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
function antiDiogonal(){
    c1 =  (winArray[0][3] == winArray[1][4]) && (winArray[1][4] == winArray[2][5]) && (winArray[2][5] == winArray[3][6]);
    c2 =  (winArray[0][2] == winArray[1][3]) && (winArray[1][3] == winArray[2][4]) && (winArray[2][4] == winArray[3][5]); 
    c3 =  (winArray[1][3] == winArray[2][4]) && (winArray[2][4] == winArray[3][5]) && (winArray[3][5] == winArray[4][6]); 
    c4 =  (winArray[0][1] == winArray[1][2]) && (winArray[1][2] == winArray[2][3]) && (winArray[2][3] == winArray[3][4]); 
    c5 =  (winArray[1][2] == winArray[2][3]) && (winArray[2][3] == winArray[3][4]) && (winArray[3][4] == winArray[4][5]); 
    c6 =  (winArray[2][3] == winArray[3][4]) && (winArray[3][4] == winArray[4][5]) && (winArray[4][5] == winArray[5][6]);
    c7 =  (winArray[0][0] == winArray[1][1]) && (winArray[1][1] == winArray[2][2]) && (winArray[2][2] == winArray[3][3]); 
    c8 =  (winArray[1][1] == winArray[2][2]) && (winArray[2][2] == winArray[3][3]) && (winArray[3][3] == winArray[4][4]); 
    c9 =  (winArray[2][2] == winArray[3][3]) && (winArray[3][3] == winArray[4][4]) && (winArray[4][4] == winArray[5][5]); 
    c10 = (winArray[1][0] == winArray[2][1]) && (winArray[2][1] == winArray[3][2]) && (winArray[3][2] == winArray[4][3]); 
    c11 = (winArray[2][1] == winArray[3][2]) && (winArray[3][2] == winArray[4][3]) && (winArray[4][3] == winArray[5][4]); 
    c12 = (winArray[2][0] == winArray[3][1]) && (winArray[3][1] == winArray[4][2]) && (winArray[4][2] == winArray[5][3]); 

    if(c1 || c2 || c3 || c4 || c5 || c6 || c7 || c8 || c9 || c10 || c11 || c12){
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

// function computer(){
//     newId.
// }

//         if(check == 0){
//             count++;
//             check = 1;
//         }
//         }
//         else {
            
//             if(newId == null) return ;
//             newId.innerText = "";
//             if(newId == null || winArray[row][column] == undefined){return}
//             newId.classList.add("blue-turn");
//             turnCount = 0;
//             winArray[row][column] = "blue";
//         }



// round.setAttribute("onmouseover","hoverPiece(this.id)");
// round.setAttribute("onmouseleave","noHov(this.id)")




// var a = [];
// var b = [];

// for(let i = 0 ; i < 6 ; i++){
//     for(let j = 0 ; j < 7 ; j++){
//         b.push(0);
//     }
//     a.push(b);
//     b=[];
// }



// a[5][0] = 1;
// a[5][1] = 1;
// a[5][2] = 1;0
// a[5][3] = 1;
// a[5][4] = 2;
// a[5][5] = 3;
// a[5][6] = 4;
// console.log(a);

// for(let i = 0 ; i < 6 ; i++){
//     for(let j = 0; j < 3 ; j++){
//         if(a[i][j] != 0 ){
//             if(a[i][j] == a[i][j+1] && a[i][j+1] == a[i][j+2] && a[i][j+2] == a[i][j+3] ){
//                 console.log("win");
//                 return;
//             }
//             else{
//                 console.log("out");
//                 continue;
//             }
//         }
//     }
// }



// function hoverPiece(id){
//     if(id == "00" || id == "10" || id == "20" || id == "30" || id == "40" || id == "50"){
//         if(turnCount == 0){
//             document.getElementById("hover0").style.visibility = "visible";
//             document.getElementById("hover0").classList.add("red-turn")
//             document.getElementById("hover0").classList.remove("blue-turn")
//         }
//         else{
//             document.getElementById("hover0").style.visibility = "visible";
//             document.getElementById("hover0").classList.add("blue-turn")
//             document.getElementById("hover0").classList.remove("red-turn")

//         }
//     }
// }
// function noHov(id){
//     if(id == "00" || id == "10" || id == "20" || id == "30" || id == "40" || id == "50"){
//         document.getElementById("hover0").style.visibility = "hidden";
//     }
// }


// var hoverDiv = document.getElementById("hov");

// for(let d = 0 ; d < 7 ; d++){
//     var hover = document.createElement("div");
//     hover.setAttribute("id","hover"+d);
//     hover.classList.add("for-hover");
//     hoverDiv.appendChild(hover);

// }

        // drawCount = 0;
        // if(drawCount == 42 && functionCount == 0){
        //     alert("MATCH DRAW");
        //     functionCount++;
        //     return;
        // }

        // for(let i = 0 ; i < 42 ; i++){
        //     if(newId.value == ""){
        //         drawCount++;
        //     }
        // }
        // if(drawCount == 42){
        //     alert("DRAW");
        // }



// let css = document.getElementById("css");

// var hoverDiv = document.getElementById("hov");

// for(let d = 0 ; d < 7 ; d++){
//     var hover = document.createElement("div");
//     hover.setAttribute("id","hover"+d);
//     hover.classList.add("for-hover");
//     hoverDiv.appendChild(hover);

// }


// For 2 player


// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compilew 

// w = [];
// a = [];

// for(let i = 0 ; i < 6 ; i++){
//     for(let j = 0 ; j < 7 ; j++){
//         a.push(Math.random());
//     }
//     w.push(a);
//     a = [];
// }

// w[1][5] = 1;
// w[2][4] = 1;
// w[3][3] = 1;
// w[2][2] = 1;


// console.log(w);

// for( x = 0 ; x < 3 ; x++){
//     for( y = 3 ; y < 7 ; y++){
//         // if(w[x][y] != 0){
//         if(w[x][y] == w[x+1][y-1] && w[x+1][y-1] == w[x+2][y-2] && w[x+2][y-2] == w[x+3][y-3] ){
//             console.log("winner");
//         }
//         else{
//             console.log("loosu")
//         }
//         // }
//     }
// }


    // conditon1 =   (winArray[0][3] == winArray[1][2]) && (winArray[1][2] == winArray[2][1]) && (winArray[2][1] == winArray[3][0]);
    // conditon2 =   (winArray[0][4] == winArray[1][3]) && (winArray[1][3] == winArray[2][2]) && (winArray[2][2] == winArray[3][1]);
    // conditon3 =   (winArray[0][5] == winArray[1][4]) && (winArray[1][4] == winArray[2][3]) && (winArray[2][3] == winArray[3][2]);
    // conditon4 =   (winArray[0][6] == winArray[1][5]) && (winArray[1][5] == winArray[2][4]) && (winArray[2][4] == winArray[3][3]);
    // conditon5 =   (winArray[1][3] == winArray[2][2]) && (winArray[2][2] == winArray[3][1]) && (winArray[3][1] == winArray[4][0]);
    // conditon6 =   (winArray[1][4] == winArray[2][3]) && (winArray[2][3] == winArray[3][2]) && (winArray[3][2] == winArray[4][1]);
    // conditon7 =   (winArray[1][5] == winArray[2][4]) && (winArray[2][4] == winArray[3][3]) && (winArray[3][3] == winArray[4][2]);
    // conditon8 =   (winArray[1][6] == winArray[2][5]) && (winArray[2][5] == winArray[3][4]) && (winArray[3][4] == winArray[4][3]);
    // conditon9 =   (winArray[2][3] == winArray[3][2]) && (winArray[3][2] == winArray[4][1]) && (winArray[4][1] == winArray[5][0]);
    // conditon10 =  (winArray[2][4] == winArray[3][3]) && (winArray[3][3] == winArray[4][2]) && (winArray[4][2] == winArray[5][1]);
    // conditon11 =  (winArray[2][5] == winArray[3][4]) && (winArray[3][4] == winArray[4][3]) && (winArray[4][3] == winArray[5][2]);
    // conditon12 =  (winArray[2][6] == winArray[3][5]) && (winArray[3][5] == winArray[4][4]) && (winArray[4][4] == winArray[5][3]);

    // if(conditon1 || conditon2 || conditon3 || conditon4 || conditon5 || conditon6 || conditon7 || conditon8 || conditon9 || conditon10 || conditon11 || conditon12){
    //     if(turnCount == 0){
    //         alert("PLAYER2-WINS");
    //         functionCount++;
    //     }
    //     else{
    //         alert("PLAYER1-WINS");
    //         functionCount++;
    //     }
    // }




    
    // c1 =   (winArray[0][0] == winArray[1][1]) && (winArray[1][1] == winArray[2][2]) && (winArray[2][2] == winArray[3][3]); 

    // c2 =   (winArray[0][1] == winArray[1][2]) && (winArray[1][2] == winArray[2][3]) && (winArray[2][3] == winArray[3][4]); 
    // c3 =   (winArray[0][2] == winArray[1][3]) && (winArray[1][3] == winArray[2][4]) && (winArray[2][4] == winArray[3][5]); 
    // c4 =   (winArray[0][3] == winArray[1][4]) && (winArray[1][4] == winArray[2][5]) && (winArray[2][5] == winArray[3][6]);

    // c5 =   (winArray[1][0] == winArray[2][1]) && (winArray[2][1] == winArray[3][2]) && (winArray[3][2] == winArray[4][3]); 
    // c6 =   (winArray[1][1] == winArray[2][2]) && (winArray[2][2] == winArray[3][3]) && (winArray[3][3] == winArray[4][4]); 
    // c7 =   (winArray[1][2] == winArray[2][3]) && (winArray[2][3] == winArray[3][4]) && (winArray[3][4] == winArray[4][5]); 
    // c8 =   (winArray[1][3] == winArray[2][4]) && (winArray[2][4] == winArray[3][5]) && (winArray[3][5] == winArray[4][6]); 

    // c9 =   (winArray[2][0] == winArray[3][1]) && (winArray[3][1] == winArray[4][2]) && (winArray[4][2] == winArray[5][3]); 
    // c10 =  (winArray[2][1] == winArray[3][2]) && (winArray[3][2] == winArray[4][3]) && (winArray[4][3] == winArray[5][4]); 
    // c11 =  (winArray[2][2] == winArray[3][3]) && (winArray[3][3] == winArray[4][4]) && (winArray[4][4] == winArray[5][5]); 
    // c12 =  (winArray[2][3] == winArray[3][4]) && (winArray[3][4] == winArray[4][5]) && (winArray[4][5] == winArray[5][6]);


    // if(c1 || c2 || c3 || c4 || c5 || c6 || c7 || c8 || c9 || c10 || c11 || c12){
        // if(turnCount == 0){
        //     alert("PLAYER2-WINS");
        //     functionCount++;
        // }
        // else{
        //     alert("PLAYER1-WINS");
        //     functionCount++;
        // }
    // }    
