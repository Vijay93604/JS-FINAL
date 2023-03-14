// For the output table
let diceSound = new Audio("audio/dice.mp3");
let idNameForPl1 = ["pl1Ones","pl1Twos","pl1Threes","pl1Fours","pl1Fives","pl1Sixes","pl1Sums","pl1Bonus","pl1ThreeOfKind","pl1FourOfKind","pl1FullHouse","pl1SmallStraight","pl1LargeStraight","pl1Chance","pl1Yahtzee","pl1Total"];
let idNameForPl2 = ["pl2Ones","pl2Twos","pl2Threes","pl2Fours","pl2Fives","pl2Sixes","pl2Sums","pl2Bonus","pl2ThreeOfKind","pl2FourOfKind","pl2FullHouse","pl2SmallStraight","pl2LargeStraight","pl2Chance","pl2Yahtzee","pl2Total"];
let sectionName = ["Ones","Twos","Threes","Fours","Fives","Sixes","Sum","Bonus","Three of Kind","Four of Kind","Full House","Small Straight","Large Straight","Chance","Yahtzee","Total"];
let idCountForPl1 = 0;
let idCountForPl2 = 0;
let idCount3 = 1;
let idCount4 = 1;
let idCount5 = 1;
for(let i = 1 ; i <= 17 ; i++ ){
    let tabBig = document.createElement("div");
    tabBig.setAttribute("class","boxesBig");
    let divOt = document.getElementById("output");
    divOt.appendChild(tabBig);
    if(i >= 2){
        tabBig.setAttribute("id","box"+idCount3);
        idCount3++;
    }
    for(let j = 1 ; j <= 2 ; j++){
        let tab = document.createElement("div");
        tab.setAttribute("class","boxes");
        let divOt = document.getElementById("output");
        divOt.appendChild(tab)
        if( i == 1){
            tab.setAttribute("id","nameOfPlayer"+idCount4);
            idCount4++;
        }
        if(i >= 2 && j == 1){
            tab.setAttribute("id",idNameForPl1[idCountForPl1]);
            idCountForPl1++;
        }
        if(i >= 2 && j == 2){
            tab.setAttribute("id",idNameForPl2[idCountForPl2]);
            idCountForPl2++;
        }
    }
}
// Th
for(let k = 0 ; k < sectionName.length ; k++){
    let secName = document.getElementById("box"+idCount5);
    secName.innerText=sectionName[k];
    idCount5++
}
var caseForCheck = [1,2,3,4,5,6];
let playerName1 = document.getElementById("nameOfPlayer1").innerText="PLAYER1";
let playerName2 = document.getElementById("nameOfPlayer2").innerText="PLAYER2";

let dice1 = document.getElementById("pl1One");
let dice2 = document.getElementById("pl1Two");
let dice3 = document.getElementById("pl1Three");
let dice4 = document.getElementById("pl1Four");
let dice5 = document.getElementById("pl1Five");

let dice1Lock , dice2Lock = 0

// let dice1Lock = 0;
// let dice2Lock = 0;
let dice3Lock = 0;
let dice4Lock = 0;
let dice5Lock = 0;

let roll2 = document.getElementById("dicePl2");
let roll1 = document.getElementById("dicePl1");
let rollCount = 0;
let rollDiceDisable = 0;

let rand1 = 0;
let rand2 = 0;
let rand3 = 0;
let rand4 = 0;
let rand5 = 0;
// 
let onesForPl1 = 0;
let twosForPl1 = 0;
let threeForPl1 = 0;
let fourForPl1 = 0;
let fiveForPl1 = 0;
let chance = 0;
let sixesForPl1 = 0;
// 
let onesForPl2 = 0;
let twosForPl2 = 0;
let threeForPl2 = 0;
let fourForPl2 = 0;
let fiveForPl2 = 0;
let chance2 = 0;
let sixesForPl2 = 0;
// 
let pointLock1 = 0;
let pointLock2 = 0;
let pointLock3 = 0;
let pointLock4 = 0;
let pointLock5 = 0;
// 
let pointLock1ForPl2 = 0;
let pointLock2ForPl2 = 0;
let pointLock3ForPl2 = 0;
let pointLock4ForPl2 = 0;
let pointLock5ForPl2 = 0;
// 
let onesLock = 0;
let twosLock = 0;
let threeLock = 0;
let foursLock = 0;
let fivesLock = 0;
let chanceLock = 0;
let sixLock = 0;
// 
let onesLock2 = 0;
let twosLock2 = 0;
let threeLock2 = 0;
let foursLock2 = 0;
let fivesLock2 = 0;
let chanceLock2 = 0;
let sixLock2 = 0;
// 
let smallStraightScore = 30;
let scoreForSmallpl1 = 0;
let largeStraightScore = 40;
let scoreForLargepl1 = 0;
let yahtzeeScore = 50;
let scoreForyahtzeepl1 = 0;
let fullHouseScore = 25;
let scoreForFullpl1 = 0;
let threeOfKindScore = 0;
let fourOfKindScore = 0;
// 
let scoreForSmallpl2 = 0;
let scoreForLargepl2 = 0;
let scoreForFullpl2 = 0;
let scoreForyahtzeepl2 = 0;
let threeOfKindScore2 = 0;
let fourOfKindScore2 = 0;
// 
var scoreLock = 1;
var scoreLock2 = 1;
// 
let sumCountForPl1 = 0;
let sumCountForPl2 = 0;
let bonusForPl1 = 0;
let bonusForPl2 = 0; 
let totalCheck = 0;
// The below function is for roll dice for player1
function rollDicePl1(){


    diceSound.play();
    scoreLock = 1;
    dice1.setAttribute("onclick","diceLock1()");
    dice2.setAttribute("onclick","diceLock2()");
    dice3.setAttribute("onclick","diceLock3()");
    dice4.setAttribute("onclick","diceLock4()");
    dice5.setAttribute("onclick","diceLock5()");
// 
console.log(dice1);
    if(dice1Lock == 0){dice1.style.top="-400px";dice1.style.left="100px";dice1.classList.add("rotateDice")}
    if(dice2Lock == 0){dice2.style.top="-400px";dice2.style.left="200px";dice2.classList.add("rotateDice")}
    if(dice3Lock == 0){dice3.style.top="-400px";dice3.style.left="300px";dice3.classList.add("rotateDice")}
    if(dice4Lock == 0){dice4.style.top="-400px";dice4.style.left="400px";dice4.classList.add("rotateDice")}
    if(dice5Lock == 0){dice5.style.top="-400px";dice5.style.left="500px";dice5.classList.add("rotateDice")}
// the below code used for create random values
    (pointLock1 == 0) ?   rand1 = Math.floor(Math.random()*6+1) : null;
    (pointLock2 == 0) ?   rand2 = Math.floor(Math.random()*6+1) : null;
    (pointLock3 == 0) ?   rand3 = Math.floor(Math.random()*6+1) : null;
    (pointLock4 == 0) ?   rand4 = Math.floor(Math.random()*6+1) : null;
    (pointLock5 == 0) ?   rand5 = Math.floor(Math.random()*6+1) : null;
// the below functions are used for calculating all values and show in the output box
    onesScoreForPl1();
    twosScoreForPl1();
    threeScoreForPl1();
    fourScoreForPl1();
    fiveScoreForPl1();
    sixesScoreForPl1();
    chanceForPl1();
    yahtzee();
    threeOfKind();
    fourOfKind();
    smallStraight();
    largeStraight();
    fullHouse();
// The below function is for changing the coustume of the dice
    if(dice1Lock == 0){
        (rand1 == 1) ?  dice1.setAttribute("src","photoForYahtzee/1.png") : null;
        (rand1 == 2) ?  dice1.setAttribute("src","photoForYahtzee/2.png") : null;
        (rand1 == 3) ?  dice1.setAttribute("src","photoForYahtzee/3.png") : null;
        (rand1 == 4) ?  dice1.setAttribute("src","photoForYahtzee/4.png") : null;
        (rand1 == 5) ?  dice1.setAttribute("src","photoForYahtzee/5.png") : null;
        (rand1 == 6) ?  dice1.setAttribute("src","photoForYahtzee/6.png") : null;
    }
    if(dice2Lock == 0){
        (rand2 == 1) ?  dice2.setAttribute("src","photoForYahtzee/1.png") : null;
        (rand2 == 2) ?  dice2.setAttribute("src","photoForYahtzee/2.png") : null;
        (rand2 == 3) ?  dice2.setAttribute("src","photoForYahtzee/3.png") : null;
        (rand2 == 4) ?  dice2.setAttribute("src","photoForYahtzee/4.png") : null;
        (rand2 == 5) ?  dice2.setAttribute("src","photoForYahtzee/5.png") : null;
        (rand2 == 6) ?  dice2.setAttribute("src","photoForYahtzee/6.png") : null;
    }
    if(dice3Lock == 0){
        (rand3 == 1) ?  dice3.setAttribute("src","photoForYahtzee/1.png") : null;
        (rand3 == 2) ?  dice3.setAttribute("src","photoForYahtzee/2.png") : null;
        (rand3 == 3) ?  dice3.setAttribute("src","photoForYahtzee/3.png") : null;
        (rand3 == 4) ?  dice3.setAttribute("src","photoForYahtzee/4.png") : null;
        (rand3 == 5) ?  dice3.setAttribute("src","photoForYahtzee/5.png") : null;
        (rand3 == 6) ?  dice3.setAttribute("src","photoForYahtzee/6.png") : null;
    }
    if(dice4Lock == 0){
        (rand4 == 1) ?  dice4.setAttribute("src","photoForYahtzee/1.png") : null;
        (rand4 == 2) ?  dice4.setAttribute("src","photoForYahtzee/2.png") : null;
        (rand4 == 3) ?  dice4.setAttribute("src","photoForYahtzee/3.png") : null;
        (rand4 == 4) ?  dice4.setAttribute("src","photoForYahtzee/4.png") : null;
        (rand4 == 5) ?  dice4.setAttribute("src","photoForYahtzee/5.png") : null;
        (rand4 == 6) ?  dice4.setAttribute("src","photoForYahtzee/6.png") : null;
    }
    if(dice5Lock == 0){
        (rand5 == 1) ?  dice5.setAttribute("src","photoForYahtzee/1.png") : null;
        (rand5 == 2) ?  dice5.setAttribute("src","photoForYahtzee/2.png") : null;
        (rand5 == 3) ?  dice5.setAttribute("src","photoForYahtzee/3.png") : null;
        (rand5 == 4) ?  dice5.setAttribute("src","photoForYahtzee/4.png") : null;
        (rand5 == 5) ?  dice5.setAttribute("src","photoForYahtzee/5.png") : null;
        (rand5 == 6) ?  dice5.setAttribute("src","photoForYahtzee/6.png") : null;
    }
    for(let i = 0 ; i < 15 ;i++){
        if( i != 7 && i != 6){
            document.getElementById(idNameForPl1[i]).setAttribute("onclick","scoreLocForpl1(this.id)");
        }
    }

rollCount++;
    if(rollCount >= 3){  
        //initializing all variable 
            dice1.removeAttribute("onclick","diceLock1()");
            dice2.removeAttribute("onclick","diceLock2()");
            dice3.removeAttribute("onclick","diceLock3()");
            dice4.removeAttribute("onclick","diceLock4()");
            dice5.removeAttribute("onclick","diceLock5()");
            roll1.removeAttribute("onclick");
            rollCount = 0;
            rand1 = 0;
            rand2 = 0;
            rand3 = 0;
            rand4 = 0;
            rand5 = 0;
            dice1Lock = 0;
            dice2Lock = 0;
            dice3Lock = 0;
            dice4Lock = 0;
            dice5Lock = 0;
            pointLock1 = 0;
            pointLock2 = 0;
            pointLock3 = 0;
            pointLock4 = 0;
            pointLock5 = 0;
            rollDiceDisable = 0;
            roll1.style.visibility="visible";
    }
}
function init(){
    rand2 = 0;
    rand3 = 0;
    rand4 = 0;
    rand5 = 0;

    scoreLock = 0;
    rollCount = 0;

    pointLock1 = 0;
    pointLock2 = 0;
    pointLock3 = 0;
    pointLock4 = 0;
    pointLock5 = 0;
    dice1Lock = 0;
    dice2Lock = 0;
    dice3Lock = 0;
    dice4Lock = 0;
    dice5Lock = 0;
    rollDiceDisable = 0;

    dice1.style.top=null;dice1.style.left=null;
    dice2.style.top=null;dice2.style.left=null;
    dice3.style.top=null;dice3.style.left=null;
    dice4.style.top=null;dice4.style.left=null;
    dice5.style.top=null;dice5.style.left=null;

    roll2.setAttribute("onclick","rollDicePl2()");
    roll1.removeAttribute("onclick");

    dice1.removeAttribute("onclick","diceLock1()");
    dice2.removeAttribute("onclick","diceLock2()");
    dice3.removeAttribute("onclick","diceLock3()");
    dice4.removeAttribute("onclick","diceLock4()");
    dice5.removeAttribute("onclick","diceLock5()");
    roll1.style.visibility="visible";

    for(let i = 0 ; i < 15 ;i++){
        if( i != 7){
            document.getElementById(idNameForPl1[i]).removeAttribute("onclick");
        }
    }
}
let onesOut = [0,0,0,0,0,0,0,0,0,0,0,0,0];
let oneTimeAction = [0,0,0,0,0,0,0,0,0,0,0,0,0]
let idNameForPl1_part2 = ["pl1Ones","pl1Twos","pl1Threes","pl1Fours","pl1Fives","pl1Sixes","pl1Chance","pl1Yahtzee","pl1ThreeOfKind","pl1FourOfKind","pl1SmallStraight","pl1LargeStraight","pl1FullHouse"];
function scoreLocForpl1(idName){
    if(scoreLock == 1){
        
            if(idName == "pl1Ones"){
                if(oneTimeAction[0] == 0){
                document.getElementById(idName).innerText = onesLock;
                document.getElementById(idName).style.backgroundColor = "peachpuff";
                document.getElementById(idName).style.color = "black";
                onesOut[0] = 1;
                for(let i = 0 ; i < idNameForPl1_part2.length ; i++){
                    if(onesOut[i] != 1){
                            document.getElementById(idNameForPl1_part2[i]).innerText = null;
                    }
                }
                sumCountForPl1++;
                oneTimeAction[0] = 1;
                init(); 
            }
        }
            if(idName == "pl1Twos"){
                if(oneTimeAction[1] == 0){
                document.getElementById(idName).innerText = twosLock;
                document.getElementById(idName).style.backgroundColor = "peachpuff";
                document.getElementById(idName).style.color = "black";
                onesOut[1] = 1;
                for(let i = 0 ; i < idNameForPl1_part2.length ; i++){
                    if(onesOut[i] != 1){
                        document.getElementById(idNameForPl1_part2[i]).innerText = null;
                    }
                }
                sumCountForPl1++;
                oneTimeAction[1] = 1;
                init();
            }
           
        }
            if(idName == "pl1Threes"){
                if(oneTimeAction[2] == 0){
                document.getElementById(idName).innerText = threeLock;
                document.getElementById(idName).style.backgroundColor = "peachpuff";
                document.getElementById(idName).style.color = "black";
                onesOut[2] = 1;
                for(let i = 0 ; i < idNameForPl1_part2.length ; i++){
                    if(onesOut[i] != 1){
                        document.getElementById(idNameForPl1_part2[i]).innerText = null;
                    }
                }
                sumCountForPl1++;
                oneTimeAction[2] = 1;
                init(); 
            }

        }
            if(idName == "pl1Fours"){
                if(oneTimeAction[3] == 0){
                document.getElementById(idName).innerText = foursLock;
                document.getElementById(idName).style.backgroundColor = "peachpuff";
                document.getElementById(idName).style.color = "black";
                onesOut[3] = 1;
                for(let i = 0 ; i < idNameForPl1_part2.length ; i++){
                    if(onesOut[i] != 1){
                        document.getElementById(idNameForPl1_part2[i]).innerText = null;
                    }
                }
                sumCountForPl1++;
                oneTimeAction[3] = 1;
                init();
            }

        }
            if(idName == "pl1Fives"){
                if(oneTimeAction[4] == 0){
                document.getElementById(idName).innerText = fivesLock;
                document.getElementById(idName).style.backgroundColor = "peachpuff";
                document.getElementById(idName).style.color = "black";
                onesOut[4] = 1;
                for(let i = 0 ; i < idNameForPl1_part2.length ; i++){
                    if(onesOut[i] != 1){
                        document.getElementById(idNameForPl1_part2[i]).innerText = null;
                    }
                }
                sumCountForPl1++;
                oneTimeAction[4] = 1;
                init();
            }

        }
            if(idName == "pl1Sixes"){
                if(oneTimeAction[5] == 0){
                document.getElementById(idName).innerText = sixLock;
                document.getElementById(idName).style.backgroundColor = "peachpuff";
                document.getElementById(idName).style.color = "black";
                onesOut[5] = 1;
                for(let i = 0 ; i < idNameForPl1_part2.length ; i++){
                    console.log(onesOut);
                    if(onesOut[i] != 1){
                        document.getElementById(idNameForPl1_part2[i]).innerText = null;
                    }
                }
                sumCountForPl1++;
                oneTimeAction[5] = 1;
                init();
            }

        }
        if(sumCountForPl1 == 6){
            document.getElementById("pl1Sums").innerText = onesLock+twosLock+threeLock+foursLock+fivesLock+sixLock;
            if(onesLock+twosLock+threeLock+foursLock+fivesLock+sixLock >= 63){
                bonusForPl1 = 35;
                document.getElementById("pl1Bonus").innerText = bonusForPl1; 
            }
            else{
                bonusForPl1 = 0;
                document.getElementById("pl1Bonus").innerText = bonusForPl1; 
            }
        }
            if(idName == "pl1Chance"){
                if(oneTimeAction[6] == 0){
                document.getElementById(idName).innerText = chanceLock;
                document.getElementById(idName).style.backgroundColor = "peachpuff";
                document.getElementById(idName).style.color = "black";
                onesOut[6] = 1;
                console.log("The value of onesOut[7]  "+onesOut[7]);
                for(let i = 0 ; i < idNameForPl1_part2.length ; i++){
                    if(onesOut[i] != 1){
                        console.log(idNameForPl1_part2[i]);
                        document.getElementById(idNameForPl1_part2[i]).innerText = null;
                    }

                }
                totalCheck++;
                oneTimeAction[6] = 1;
                init();
            }

        }
            if(idName == "pl1Yahtzee"){
                if(oneTimeAction[7] == 0){
                    document.getElementById(idName).innerText = scoreForyahtzeepl1;
                    document.getElementById(idName).style.backgroundColor = "peachpuff";
                    document.getElementById(idName).style.color = "black";
                    onesOut[7] = 1;
                    for(let i = 0 ; i < idNameForPl1_part2.length ; i++){
                        if(onesOut[i] != 1){
                            document.getElementById(idNameForPl1_part2[i]).innerText = null;
                        }
                    }
                    totalCheck++;
                    oneTimeAction[7] = 1;
                    init();
                }

        }
            if(idName == "pl1ThreeOfKind"){
                if(oneTimeAction[8] == 0){
                document.getElementById(idName).innerText = threeOfKindScore;
                document.getElementById(idName).style.backgroundColor = "peachpuff";
                document.getElementById(idName).style.color = "black";
                onesOut[8] = 1;
                for(let i = 0 ; i < idNameForPl1_part2.length ; i++){
                    if(onesOut[i] != 1){
                        console.log(idNameForPl1_part2[i]);
                        document.getElementById(idNameForPl1_part2[i]).innerText = null;
                    }
                }
                totalCheck++;
                oneTimeAction[8] = 1;
                init();
            }

        }
            if(idName == "pl1FourOfKind"){
                if(oneTimeAction[9] == 0){
                document.getElementById(idName).innerText = fourOfKindScore;
                document.getElementById(idName).style.backgroundColor = "peachpuff";
                document.getElementById(idName).style.color = "black";
                onesOut[9] = 1;
                for(let i = 0 ; i < idNameForPl1_part2.length ; i++){
                    if(onesOut[i] != 1){
                        document.getElementById(idNameForPl1_part2[i]).innerText = null;
                    }
                }
                totalCheck++;
                oneTimeAction[9] = 1;
                init();
            }

        }
            if(idName == "pl1SmallStraight"){
                if(oneTimeAction[10] == 0){
                document.getElementById(idName).innerText = scoreForSmallpl1;
                document.getElementById(idName).style.backgroundColor = "peachpuff";
                document.getElementById(idName).style.color = "black";
                onesOut[10] = 1;
                for(let i = 0 ; i < idNameForPl1_part2.length ; i++){
                    if(onesOut[i] != 1){
                        document.getElementById(idNameForPl1_part2[i]).innerText = null;
                    }
                }
                totalCheck++;
                oneTimeAction[10] = 1;
                init();
            }

        }
            if(idName == "pl1LargeStraight"){
                if(oneTimeAction[11] == 0){
                document.getElementById(idName).innerText = scoreForLargepl1;
                document.getElementById(idName).style.backgroundColor = "peachpuff";
                document.getElementById(idName).style.color = "black";
                onesOut[11] = 1;
                for(let i = 0 ; i < idNameForPl1_part2.length ; i++){
                    if(onesOut[i] != 1){
                        document.getElementById(idNameForPl1_part2[i]).innerText = null;
                    }
                }
                totalCheck++;
                oneTimeAction[11] = 1;
                init();
            }

        }
            if(idName == "pl1FullHouse"){
                if(oneTimeAction[12] == 0){
                document.getElementById(idName).innerText = scoreForFullpl1;
                document.getElementById(idName).style.backgroundColor = "peachpuff";
                document.getElementById(idName).style.color = "black";
                onesOut[12] = 1;
                for(let i = 0 ; i < idNameForPl1_part2.length ; i++){
                    if(onesOut[i] != 1){
                        document.getElementById(idNameForPl1_part2[i]).innerText = null;
                    }
                }
                totalCheck++;
                oneTimeAction[12] = 1;
                init();
            }

        }
        if(totalCheck == 14 && sumCountForPl1 == 6 && sumCountForPl2 == 6){
            let total1 = onesLock+twosLock+threeLock+foursLock+fivesLock+sixLock+chanceLock+scoreForFullpl1+scoreForLargepl1+scoreForSmallpl1+scoreForyahtzeepl1+fourOfKindScore+threeOfKindScore;
            document.getElementById("pl1Total").innerText = total1;
            let total2 = onesLock2+twosLock2+threeLock2+foursLock2+fivesLock2+sixLock2+chanceLock2+scoreForFullpl2+scoreForLargepl2+scoreForSmallpl2+scoreForyahtzeepl2+fourOfKindScore2+threeOfKindScore2;
            document.getElementById("pl2Total").innerText = total2;
            total1 > total2 ? alert("PLAYER 1 WINS....") : alert("PLAYER 2 WINS....");
        }
    }
}

// the below function is for 
function onesScoreForPl1(){
    if(onesOut[0] == 0){

        rand1 == 1 ? onesForPl1++ : null;
        rand2 == 1 ? onesForPl1++ : null;
        rand3 == 1 ? onesForPl1++ : null;
        rand4 == 1 ? onesForPl1++ : null;
        rand5 == 1 ? onesForPl1++ : null;

        if(onesForPl1 == 0){
            document.getElementById("pl1Ones").innerText=null;
            onesLock = 0;
        }
        else{
            document.getElementById("pl1Ones").innerText=onesForPl1;
            onesLock = onesForPl1;
            onesForPl1 = 0;
        }
    }
    else{ return }
}
// the below function is for two score
function twosScoreForPl1(){
    if(onesOut[1] == 0){

            rand1 == 2 ? twosForPl1 += 2 :null;
            rand2 == 2 ? twosForPl1 += 2 :null;
            rand3 == 2 ? twosForPl1 += 2 :null;
            rand4 == 2 ? twosForPl1 += 2 :null;
            rand5 == 2 ? twosForPl1 += 2 :null;

        if(twosForPl1 == 0){
            document.getElementById("pl1Twos").innerText=null;
            twosLock = 0;
        }
        else{
            document.getElementById("pl1Twos").innerText=twosForPl1;
            twosLock = twosForPl1;
            twosForPl1 = 0;
        }
    }
    else{ return }
}
// the below function is for three score
function threeScoreForPl1(){
    if(onesOut[2] == 0){

        rand1 == 3 ? threeForPl1 += 3 : null;
        rand2 == 3 ? threeForPl1 += 3 : null;
        rand3 == 3 ? threeForPl1 += 3 : null;
        rand4 == 3 ? threeForPl1 += 3 : null;
        rand5 == 3 ? threeForPl1 += 3 : null;

        if(threeForPl1 == 0){
            document.getElementById("pl1Threes").innerText = null;
            threeLock = 0;
        }
        else{
            document.getElementById("pl1Threes").innerText = threeForPl1;
            threeLock = threeForPl1;
            threeForPl1 = 0;
        }
    }
    else{ return }
}
// the below function is for calculate fours
function fourScoreForPl1(){
    if(onesOut[3] == 0){

        rand1 == 4 ? fourForPl1 += 4 : null;
        rand2 == 4 ? fourForPl1 += 4 : null;
        rand3 == 4 ? fourForPl1 += 4 : null;
        rand4 == 4 ? fourForPl1 += 4 : null;
        rand5 == 4 ? fourForPl1 += 4 : null;

        if(fourForPl1 == 0){
            document.getElementById("pl1Fours").innerText = null;
            foursLock = 0;
        }
        else{
            document.getElementById("pl1Fours").innerText = fourForPl1;
            foursLock = fourForPl1;
            fourForPl1 = 0;
        }
    }
    else{ return }
}
// The below function is for calculating the five scores
function fiveScoreForPl1(){
    if(onesOut[4] == 0){

        rand1 == 5 ? fiveForPl1 += 5 : null;
        rand2 == 5 ? fiveForPl1 += 5 : null;
        rand3 == 5 ? fiveForPl1 += 5 : null;
        rand4 == 5 ? fiveForPl1 += 5 : null;
        rand5 == 5 ? fiveForPl1 += 5 : null;

        if(fiveForPl1 == 0){
            document.getElementById("pl1Fives").innerText = null;
            fivesLock = 0;
        }
        else{
            document.getElementById("pl1Fives").innerText = fiveForPl1;
            fivesLock = fiveForPl1;
            fiveForPl1 = 0;
        }
    }
    else{ return }
}
// The below funciton is for calculate the sixes
function sixesScoreForPl1(){
    if(onesOut[5] == 0){

        rand1 == 6 ? sixesForPl1 += 6 : null;
        rand2 == 6 ? sixesForPl1 += 6 : null;
        rand3 == 6 ? sixesForPl1 += 6 : null;
        rand4 == 6 ? sixesForPl1 += 6 : null;
        rand5 == 6 ? sixesForPl1 += 6 : null;

        if(sixesForPl1 == 0){
            document.getElementById("pl1Sixes").innerText = null;
            sixLock = 0;
        }
        else{
            document.getElementById("pl1Sixes").innerText = sixesForPl1;
            sixLock = sixesForPl1;
            sixesForPl1 = 0;
        }
    }
    else{ return }
}
// the below function is for yahtzee for pl1
function yahtzee(){
    if(onesOut[7] == 0){
        let test = [];
        test.push(rand1,rand2,rand3,rand4,rand5);
        let equalCheck = arr => arr.every(val => val === arr[0]);
        if(equalCheck(test)){
            document.getElementById("pl1Yahtzee").innerText = yahtzeeScore;
            scoreForyahtzeepl1 = yahtzeeScore;
        }
        else{
            document.getElementById("pl1Yahtzee").innerText = null;
            scoreForyahtzeepl1 = 0;
        }
    }
    else{ return }
}
// the below function calculate the chance for pl1
function chanceForPl1(){
    if(onesOut[6] == 0){
        chance = rand1+rand2+rand3+rand4+rand5;
        console.log(chance);
        document.getElementById("pl1Chance").innerText = chance;
        chanceLock = chance;
        chance = 0;
    }
    else{ return 0 }
}
// the below function is for calculate the three of kind for pl1
function threeOfKind(){
    if(onesOut[8] == 0){
        if(((rand1 == rand2) && (rand1 == rand3)) || ((rand2 == rand3) && (rand2 == rand4)) || ((rand3 == rand4) && (rand3 == rand5)) || ((rand1 == rand3) && (rand1 == rand4)) || ((rand1 == rand3) && (rand1 == rand5)) || ((rand1 == rand4) && (rand1 == rand5)) || ((rand1 == rand2) && (rand1 == rand5)) || ((rand2 == rand3) && (rand2 == rand5)) || ((rand2 == rand4) && (rand2 == rand5)) || ((rand1 == rand2) && (rand1 == rand4))){
            threeOfKindScore = rand1+rand2+rand3+rand4+rand5;
            document.getElementById("pl1ThreeOfKind").innerText = threeOfKindScore;
        }
        else{
            document.getElementById("pl1ThreeOfKind").innerText=null;
            threeOfKindScore = 0;
        }
    }
    else{ return }
}
// four of kind
function fourOfKind(){
    if(onesOut[9] == 0){
        if (((rand1 == rand2) && (rand2 == rand3) && (rand3 == rand4)) || ((rand1 == rand2) && (rand2 == rand3) && (rand3 == rand5)) || ((rand2 == rand3) && (rand3 == rand4) && (rand4 == rand5)) || ((rand1 == rand3) && (rand3 == rand4) && (rand4 == rand5)) || ((rand1 == rand2) && (rand2 == rand4) && (rand4 == rand5))){
            fourOfKindScore = rand1+rand2+rand3+rand4+rand5;
            document.getElementById("pl1FourOfKind").innerText = fourOfKindScore;
        }  
        else{
            document.getElementById("pl1FourOfKind").innerText=null;
            fourOfKindScore = 0;
        }
    }
    else{ return }
}
// Small straight
function smallStraight(){
    if(onesOut[10] == 0){
        let case1 = [1,2,3,4];
        let case2 = [2,3,4,5];
        let case3 = [3,4,5,6];
        let count1 = 0;
        let count2 = 0;
        let count3 = 0;
        var test = [];
        test.push(rand1,rand2,rand3,rand4,rand5);
        var noDup = [...new Set(test)];
        for(let i = 0 ; i < test.length ; i++){
            case1.includes(noDup[i]) ? count1++ : null;
            case2.includes(noDup[i]) ? count2++ : null;
            case3.includes(noDup[i]) ? count3++ : null;
        }
        if(count1 == 4 || count2 == 4 || count3 == 4){
            document.getElementById("pl1SmallStraight").innerText = smallStraightScore;
            scoreForSmallpl1 = smallStraightScore;
        }
        else{
            document.getElementById("pl1SmallStraight").innerText = null;
            scoreForSmallpl1 = 0;
        }
    }
    else{ return }
}
// Large Straight
function largeStraight(){
    if(onesOut[11] == 0){
        let case1 = [1,2,3,4,5];
        let case2 = [2,3,4,5,6];
        let test2 = [];
        let count1 = 0;
        let count2 = 0;
        test2.push(rand1,rand2,rand3,rand4,rand5);
        let noDup2 = [...new Set(test2)];
        for(let i = 0 ; i < noDup2.length ; i++){
            case1.includes(noDup2[i]) ? count1++ : null;
            case2.includes(noDup2[i]) ? count2++ : null;
        }
        if(count1 == 5 || count2 == 5){
            document.getElementById("pl1LargeStraight").innerText = largeStraightScore;
            scoreForLargepl1 = largeStraightScore;
        }
        else{
            document.getElementById("pl1LargeStraight").innerText = null;
            scoreForLargepl1 = 0;
        }
    }
    else{ return }
}
// Full House
function fullHouse(){
    if(onesOut[12] == 0){
        if((((rand1 == rand2) && (rand1 == rand3)) && (rand4 == rand5)) || (((rand2 == rand3) && (rand2 == rand4)) && (rand1 == rand5)) || (((rand3 == rand4) && (rand3 == rand5)) && (rand1 == rand2)) || (((rand1 == rand3) && (rand1 == rand4)) && (rand2 == rand5)) || (((rand1 == rand3) && (rand1 == rand5)) && (rand2 == rand4)) || (((rand1 == rand4) && (rand1 == rand5)) && (rand2 == rand3)) || (((rand1 == rand2) && (rand1 == rand5)) && (rand3 == rand4)) || (((rand2 == rand3) && (rand2 == rand5)) && (rand1 == rand4)) || (((rand2 == rand4) && (rand2 == rand5)) && (rand1 == rand3)) || (((rand1 == rand2) && (rand1 == rand4)) && (rand3 == rand5))){
            document.getElementById("pl1FullHouse").innerText = fullHouseScore;
            scoreForFullpl1 = fullHouseScore;
        }
        else{
            document.getElementById("pl1FullHouse").innerText=null;
            scoreForFullpl1 = 0;
        }
    }
    else{ return }
}
// The below 5 function is for lock the dice for player 1
function diceLock1(){
   dice1.style.top=null;
   dice1.style.left=null;  
    if(dice1Lock == 0 ){
        dice1Lock = 1;
        rollDiceDisable++;
        pointLock1 = 1;
        console.log(rollDiceDisable);
    }
    else{
        dice1.style.top="-400px";
        dice1.style.left="100px";
        dice1Lock = 0;
        pointLock1 = 0;

        if(rollDiceDisable > 0){
            rollDiceDisable--;
            console.log("After minus"+rollDiceDisable);
        }
    }
    if(rollDiceDisable == 5){ roll1.style.visibility="hidden" }
    if(rollDiceDisable < 5){ roll1.style.visibility="visible" }
}

function diceLock2(){
    dice2.style.top=null;
    dice2.style.left=null;   
    if(dice2Lock == 0 ){
        dice2Lock = 1;
        rollDiceDisable++;
        pointLock2 = 1;
        console.log(rollDiceDisable);
    }
    else{
        dice2.style.top="-400px";
        dice2.style.left="200px";
        dice2Lock = 0;
        pointLock2 = 0;
        if(rollDiceDisable > 0){
            rollDiceDisable--;
            console.log("After minus"+rollDiceDisable);
        }   
    }
    if(rollDiceDisable == 5){ roll1.style.visibility="hidden" }
    if(rollDiceDisable < 5){ roll1.style.visibility="visible" }
}

 function diceLock3(){
    dice3.style.top=null;
    dice3.style.left=null;
    if(dice3Lock == 0 ){
        dice3Lock = 1;
        rollDiceDisable++;
        pointLock3 = 1;
        console.log(rollDiceDisable);
    }
    else{
        dice3.style.top="-400px";
        dice3.style.left="300px";
        dice3Lock = 0;
        pointLock3 = 0;

        if(rollDiceDisable > 0){
            rollDiceDisable--;
            console.log("After minus"+rollDiceDisable);
        }

    }
    if(rollDiceDisable == 5){ roll1.style.visibility="hidden" }
    if(rollDiceDisable < 5){ roll1.style.visibility="visible" }
 }

 function diceLock4(){
    dice4.style.top=null;
    dice4.style.left=null; 
    if(dice4Lock == 0 ){
        dice4Lock = 1;
        rollDiceDisable++;
        pointLock4 = 1;
        console.log(rollDiceDisable);
    }
    else{
        dice4.style.top="-400px";
        dice4.style.left="400px";
        dice4Lock = 0;
        pointLock4 = 1;

        if(rollDiceDisable > 0){
            rollDiceDisable--;
            console.log("After minus"+rollDiceDisable);
        }

    }
    if(rollDiceDisable == 5){ roll1.style.visibility="hidden" }
    if(rollDiceDisable < 5){ roll1.style.visibility="visible" }

 }

 function diceLock5(){
    dice5.style.top=null;
    dice5.style.left=null;    
    if(dice5Lock == 0 ){
        dice5Lock = 1;
        rollDiceDisable++;
        pointLock5 = 1;
        console.log(rollDiceDisable);
    }
    else{
        dice5.style.top="-400px";
        dice5.style.left="500px";
        dice5Lock = 0;
        pointLock5 = 0;

        if(rollDiceDisable > 0){
            rollDiceDisable--;
            console.log("After minus"+rollDiceDisable);
        }
    }
    if(rollDiceDisable == 5){ roll1.style.visibility="hidden" }
    if(rollDiceDisable < 5){ roll1.style.visibility="visible" }

 }
let dice1ForPl2 = document.getElementById("pl2One");
let dice2ForPl2 = document.getElementById("pl2Two");
let dice3ForPl2 = document.getElementById("pl2Three");
let dice4ForPl2 = document.getElementById("pl2Four");
let dice5ForPl2 = document.getElementById("pl2Five");
let dice1Lock2 = 0;
let dice2Lock2 = 0;
let dice3Lock2 = 0;
let dice4Lock2 = 0;
let dice5Lock2 = 0;
let rollDiceDisableForPl2 = 0;
let rand1For2 = 0;
let rand2For2 = 0;
let rand3For2 = 0;
let rand4For2 = 0;
let rand5For2 = 0;
//  The below function is for rolling the dice for player 2
 function rollDicePl2(){
    diceSound.play();
    scoreLock2 = 1;
    dice1ForPl2.setAttribute("onclick","diceLock1ForPl2()");
    dice2ForPl2.setAttribute("onclick","diceLock2ForPl2()");
    dice3ForPl2.setAttribute("onclick","diceLock3ForPl2()");
    dice4ForPl2.setAttribute("onclick","diceLock4ForPl2()");
    dice5ForPl2.setAttribute("onclick","diceLock5ForPl2()");

    if(dice1Lock2 == 0){dice1ForPl2.style.top="300px";dice1ForPl2.style.left="100px";}
    if(dice2Lock2 == 0){dice2ForPl2.style.top="300px";dice2ForPl2.style.left="200px";}
    if(dice3Lock2 == 0){dice3ForPl2.style.top="300px";dice3ForPl2.style.left="300px";}
    if(dice4Lock2 == 0){dice4ForPl2.style.top="300px";dice4ForPl2.style.left="400px";}
    if(dice5Lock2 == 0){dice5ForPl2.style.top="300px";dice5ForPl2.style.left="500px";}

    pointLock1ForPl2 == 0 ? rand1For2 = Math.floor(Math.random()*6+1) : null;
    pointLock2ForPl2 == 0 ? rand2For2 = Math.floor(Math.random()*6+1) : null;
    pointLock3ForPl2 == 0 ? rand3For2 = Math.floor(Math.random()*6+1) : null;
    pointLock4ForPl2 == 0 ? rand4For2 = Math.floor(Math.random()*6+1) : null;
    pointLock5ForPl2 == 0 ? rand5For2 = Math.floor(Math.random()*6+1) : null;
// the below function is for calculating all the values
    onesScoreForPl2();
    twosScoreForPl2();
    threeScoreForPl2();
    fourScoreForPl2();
    fiveScoreForPl2();
    sixesScoreForPl2();
    smallStraight2();
    largeStraight2();
    yahtzee2();
    chanceForPl2();
    fullHouse2();
    threeOfKind2();
    fourOfKind2();  

    if(dice1Lock2 == 0){
        rand1For2 == 1 ? dice1ForPl2.setAttribute("src","photoForYahtzee/1.png") : null;
        rand1For2 == 2 ? dice1ForPl2.setAttribute("src","photoForYahtzee/2.png") : null;
        rand1For2 == 3 ? dice1ForPl2.setAttribute("src","photoForYahtzee/3.png") : null;
        rand1For2 == 4 ? dice1ForPl2.setAttribute("src","photoForYahtzee/4.png") : null;
        rand1For2 == 5 ? dice1ForPl2.setAttribute("src","photoForYahtzee/5.png") : null;
        rand1For2 == 6 ? dice1ForPl2.setAttribute("src","photoForYahtzee/6.png") : null;
    }
    if(dice2Lock2 == 0){
        rand2For2 == 1 ? dice2ForPl2.setAttribute("src","photoForYahtzee/1.png") : null;
        rand2For2 == 2 ? dice2ForPl2.setAttribute("src","photoForYahtzee/2.png") : null;
        rand2For2 == 3 ? dice2ForPl2.setAttribute("src","photoForYahtzee/3.png") : null;
        rand2For2 == 4 ? dice2ForPl2.setAttribute("src","photoForYahtzee/4.png") : null;
        rand2For2 == 5 ? dice2ForPl2.setAttribute("src","photoForYahtzee/5.png") : null;
        rand2For2 == 6 ? dice2ForPl2.setAttribute("src","photoForYahtzee/6.png") : null;
    }
    if(dice3Lock2 == 0){
        rand3For2 == 1 ? dice3ForPl2.setAttribute("src","photoForYahtzee/1.png") : null;
        rand3For2 == 2 ? dice3ForPl2.setAttribute("src","photoForYahtzee/2.png") : null;
        rand3For2 == 3 ? dice3ForPl2.setAttribute("src","photoForYahtzee/3.png") : null;
        rand3For2 == 4 ? dice3ForPl2.setAttribute("src","photoForYahtzee/4.png") : null;
        rand3For2 == 5 ? dice3ForPl2.setAttribute("src","photoForYahtzee/5.png") : null;
        rand3For2 == 6 ? dice3ForPl2.setAttribute("src","photoForYahtzee/6.png") : null;
    }
    if(dice4Lock2 == 0){
        rand4For2 == 1 ?  dice4ForPl2.setAttribute("src","photoForYahtzee/1.png") : null;
        rand4For2 == 2 ?  dice4ForPl2.setAttribute("src","photoForYahtzee/2.png") : null;
        rand4For2 == 3 ?  dice4ForPl2.setAttribute("src","photoForYahtzee/3.png") : null;
        rand4For2 == 4 ?  dice4ForPl2.setAttribute("src","photoForYahtzee/4.png") : null;
        rand4For2 == 5 ?  dice4ForPl2.setAttribute("src","photoForYahtzee/5.png") : null;
        rand4For2 == 6 ?  dice4ForPl2.setAttribute("src","photoForYahtzee/6.png") : null;
    }
    if(dice5Lock2 == 0){
        rand5For2 == 1 ?  dice5ForPl2.setAttribute("src","photoForYahtzee/1.png") : null;
        rand5For2 == 2 ?  dice5ForPl2.setAttribute("src","photoForYahtzee/2.png") : null;
        rand5For2 == 3 ?  dice5ForPl2.setAttribute("src","photoForYahtzee/3.png") : null;
        rand5For2 == 4 ?  dice5ForPl2.setAttribute("src","photoForYahtzee/4.png") : null;
        rand5For2 == 5 ?  dice5ForPl2.setAttribute("src","photoForYahtzee/5.png") : null;
        rand5For2 == 6 ?  dice5ForPl2.setAttribute("src","photoForYahtzee/6.png") : null;
    }
    for(let i = 0 ; i < 15 ;i++){
        if( i != 7){
            document.getElementById(idNameForPl2[i]).setAttribute("onclick","scoreLockForPl2(this.id)");
        }
    }
rollCount++;
    if(rollCount >= 3){
        roll2.removeAttribute("onclick");
        dice1ForPl2.removeAttribute("onclick","diceLock1ForPl2()");
        dice2ForPl2.removeAttribute("onclick","diceLock2ForPl2()");
        dice3ForPl2.removeAttribute("onclick","diceLock3ForPl2()");
        dice4ForPl2.removeAttribute("onclick","diceLock4ForPl2()");
        dice5ForPl2.removeAttribute("onclick","diceLock5ForPl2()");

        rollCount = 0;
        dice1Lock2 = 0;
        dice2Lock2 = 0;
        dice3Lock2 = 0;
        dice4Lock2 = 0;
        dice5Lock2 = 0;

        rand1For2 = 0;
        rand2For2 = 0;
        rand3For2 = 0;
        rand4For2 = 0;
        rand5For2 = 0;

        pointLock1ForPl2 = 0;
        pointLock2ForPl2 = 0;
        pointLock3ForPl2 = 0;
        pointLock4ForPl2 = 0;
        pointLock5ForPl2 = 0;

        rollDiceDisable = 0;
        roll2.style.visibility="visible";
    }
}
// this function is used for initializing all variable for pl2 
function init2(){
    rand1For2 = 0;
    rand2For2 = 0;
    rand3For2 = 0;
    rand4For2 = 0;
    rand5For2 = 0;
    rollCount = 0; 
    scoreLock2 = 0;

    roll2.style.visibility="visible";

    dice1ForPl2.style.top= null;dice1ForPl2.style.left= null;
    dice2ForPl2.style.top= null;dice2ForPl2.style.left= null;
    dice3ForPl2.style.top= null;dice3ForPl2.style.left= null;
    dice4ForPl2.style.top= null;dice4ForPl2.style.left= null;
    dice5ForPl2.style.top= null;dice5ForPl2.style.left= null;

    dice1ForPl2.removeAttribute("onclick","diceLock1ForPl2()");
    dice2ForPl2.removeAttribute("onclick","diceLock2ForPl2()");
    dice3ForPl2.removeAttribute("onclick","diceLock3ForPl2()");
    dice4ForPl2.removeAttribute("onclick","diceLock4ForPl2()");
    dice5ForPl2.removeAttribute("onclick","diceLock5ForPl2()");

    rollDiceDisableForPl2 = 0;
    dice1Lock2 = 0;
    dice2Lock2 = 0;
    dice3Lock2 = 0;
    dice4Lock2 = 0;
    dice5Lock2 = 0;

    pointLock1ForPl2 = 0;
    pointLock2ForPl2 = 0;
    pointLock3ForPl2 = 0;
    pointLock4ForPl2 = 0;
    pointLock5ForPl2 = 0;
    roll1.setAttribute("onclick","rollDicePl1()");
    roll2.removeAttribute("onclick");
    roll1.style.visibility="visible";
    for(let i = 0 ; i < 15 ;i++){
        if( i != 7){
            document.getElementById(idNameForPl2[i]).removeAttribute("onclick");
        }
    }
}
let pl2ScoreLock = [0,0,0,0,0,0,0,0,0,0,0,0,0];
let oneTime2 = [0,0,0,0,0,0,0,0,0,0,0,0,0]
let pl2ScoreId = ["pl2Ones","pl2Twos","pl2Threes","pl2Fours","pl2Fives","pl2Sixes","pl2ThreeOfKind","pl2FourOfKind","pl2FullHouse","pl2SmallStraight","pl2LargeStraight","pl2Chance","pl2Yahtzee","pl2Total"];
// Main function for showing output for pl2 
function scoreLockForPl2(idName){
    if(scoreLock2 == 1){

        if(idName == "pl2Ones"){
            if(oneTime2[0] == 0){
                document.getElementById(idName).innerText = onesLock2;
                document.getElementById(idName).style.backgroundColor = "peachpuff";
                document.getElementById(idName).style.color = "black";
                pl2ScoreLock[0] = 1;
                for(let i = 0 ; i < pl2ScoreId.length ; i++){
                    if(pl2ScoreLock[i] != 1){
                        document.getElementById(pl2ScoreId[i]).innerText = null;
                    }
                }
                sumCountForPl2++;
                oneTime2[0] = 1;
                init2();
            }
        }
        if(idName == "pl2Twos"){
            if(oneTime2[1] == 0){
                document.getElementById(idName).innerText = twosLock2;
                document.getElementById(idName).style.backgroundColor = "peachpuff";
                document.getElementById(idName).style.color = "black";
                pl2ScoreLock[1] = 1;
                for(let i = 0 ; i < pl2ScoreId.length ; i++){
                    if(pl2ScoreLock[i] != 1){
                        document.getElementById(pl2ScoreId[i]).innerText = null;
                    }
                }
                sumCountForPl2++;
                oneTime2[1] = 1;
                init2();
            }
            
        }
        if(idName == "pl2Threes"){
            if(oneTime2[2] == 0){
                document.getElementById(idName).innerText = threeLock2;
                document.getElementById(idName).style.backgroundColor = "peachpuff";
                document.getElementById(idName).style.color = "black";
                pl2ScoreLock[2] = 1;
                for(let i = 0 ; i < pl2ScoreId.length ; i++){
                    if(pl2ScoreLock[i] != 1){
                        document.getElementById(pl2ScoreId[i]).innerText = null;
                    }
                }
                sumCountForPl2++;
                oneTime2[2] = 1;
                init2();
            }
        }
        if(idName == "pl2Fours"){
            if(oneTime2[3] == 0){
                document.getElementById(idName).innerText = foursLock2;
                document.getElementById(idName).style.backgroundColor = "peachpuff";
                document.getElementById(idName).style.color = "black";
                pl2ScoreLock[3] = 1;
                for(let i = 0 ; i < pl2ScoreId.length ; i++){
                    if(pl2ScoreLock[i] != 1){
                        document.getElementById(pl2ScoreId[i]).innerText = null;
                    }
                }
                sumCountForPl2++;
                oneTime2[3] = 1;
                init2();
            }
        }
        if(idName == "pl2Fives"){
            if(oneTime2[4] == 0){
                document.getElementById(idName).innerText = fivesLock2;
                document.getElementById(idName).style.backgroundColor = "peachpuff";
                document.getElementById(idName).style.color = "black";
                pl2ScoreLock[4] = 1;
                for(let i = 0 ; i < pl2ScoreId.length ; i++){
                    if(pl2ScoreLock[i] != 1){
                        document.getElementById(pl2ScoreId[i]).innerText = null;
                    }
                }
                sumCountForPl2++;
                oneTime2[4] = 1;
                init2();
            }
        }
        if(idName == "pl2Sixes"){
            if(oneTime2[5] == 0){
                document.getElementById(idName).innerText = sixLock2;
                document.getElementById(idName).style.backgroundColor = "peachpuff";
                document.getElementById(idName).style.color = "black";
                pl2ScoreLock[5] = 1;
                for(let i = 0 ; i < pl2ScoreId.length ; i++){
                    if(pl2ScoreLock[i] != 1){
                        document.getElementById(pl2ScoreId[i]).innerText = null;
                    }
                }
                sumCountForPl2++;
                oneTime2[5] = 1;
                init2();
            }
        }
        if(sumCountForPl2 == 6){
            document.getElementById("pl2Sums").innerText = onesLock2+twosLock2+threeLock2+foursLock2+fivesLock2+sixLock2;
            if(onesLock2+twosLock2+threeLock2+foursLock2+fivesLock2+sixLock2 >= 63){
                bonusForPl2 = 35;
                document.getElementById("pl2Bonus").innerText = bonusForPl1; 
            }
            else{
                bonusForPl2 = 0;
                document.getElementById("pl2Bonus").innerText = bonusForPl1; 
            }
        }

        if(idName == "pl2ThreeOfKind"){
            if(oneTime2[6] == 0){
                document.getElementById(idName).innerText = threeOfKindScore2;
                document.getElementById(idName).style.backgroundColor = "peachpuff";
                document.getElementById(idName).style.color = "black";
                pl2ScoreLock[6] = 1;
                for(let i = 0 ; i < pl2ScoreId.length ; i++){
                    if(pl2ScoreLock[i] != 1){
                        document.getElementById(pl2ScoreId[i]).innerText = null;
                    }
                }
                totalCheck++;
                oneTime2[6] = 1;
                init2();
            }
        }
        if(idName == "pl2FourOfKind"){
            if(oneTime2[7] == 0){
                document.getElementById(idName).innerText = fourOfKindScore2;
                document.getElementById(idName).style.backgroundColor = "peachpuff";
                document.getElementById(idName).style.color = "black";
                pl2ScoreLock[7] = 1;
                for(let i = 0 ; i < pl2ScoreId.length ; i++){
                    if(pl2ScoreLock[i] != 1){
                        document.getElementById(pl2ScoreId[i]).innerText = null;
                    }
                }
                totalCheck++;
                oneTime2[7] = 1;
                init2();
            }
        }
        if(idName == "pl2FullHouse"){
            if(oneTime2[8] == 0){
                document.getElementById(idName).innerText = scoreForFullpl2;
                document.getElementById(idName).style.backgroundColor = "peachpuff";
                document.getElementById(idName).style.color = "black";
                pl2ScoreLock[8] = 1;
                for(let i = 0 ; i < pl2ScoreId.length ; i++){
                    if(pl2ScoreLock[i] != 1){
                        document.getElementById(pl2ScoreId[i]).innerText = null;
                    }
                }
                totalCheck++;
                oneTime2[8] = 1;
                init2();
            }
        }
        if(idName == "pl2SmallStraight"){
            if(oneTime2[9] == 0){
                document.getElementById(idName).innerText = scoreForSmallpl2;
                document.getElementById(idName).style.backgroundColor = "peachpuff";
                document.getElementById(idName).style.color = "black";
                pl2ScoreLock[9] = 1;
                for(let i = 0 ; i < pl2ScoreId.length ; i++){
                    if(pl2ScoreLock[i] != 1){
                        document.getElementById(pl2ScoreId[i]).innerText = null;
                    }
                }
                totalCheck++;
                oneTime2[9] = 1;
                init2();
            }
        }
        if(idName == "pl2LargeStraight"){
            if(oneTime2[10] == 0){
                document.getElementById(idName).innerText = scoreForLargepl2;
                document.getElementById(idName).style.backgroundColor = "peachpuff";
                document.getElementById(idName).style.color = "black";
                pl2ScoreLock[10] = 1;
                for(let i = 0 ; i < pl2ScoreId.length ; i++){
                    if(pl2ScoreLock[i] != 1){
                        document.getElementById(pl2ScoreId[i]).innerText = null;
                    }
                }
                totalCheck++;
                oneTime2[10] = 0;
                init2();
            }
        }
        if(idName == "pl2Chance"){
            if(oneTime2[11] == 0){
                document.getElementById(idName).innerText = chanceLock2;
                document.getElementById(idName).style.backgroundColor = "peachpuff";
                document.getElementById(idName).style.color = "black";
                pl2ScoreLock[11] = 1;
                for(let i = 0 ; i < pl2ScoreId.length ; i++){
                    if(pl2ScoreLock[i] != 1){
                        document.getElementById(pl2ScoreId[i]).innerText = null;
                    }
                }
                totalCheck++;
                oneTime2[11] = 1;
                init2();
            }
        }
        if(idName == "pl2Yahtzee"){
            if(oneTime2[12] == 0){
                document.getElementById(idName).innerText = scoreForyahtzeepl2;
                document.getElementById(idName).style.backgroundColor = "peachpuff";
                document.getElementById(idName).style.color = "black";
                pl2ScoreLock[12] = 1;
                for(let i = 0 ; i < pl2ScoreId.length ; i++){
                    if(pl2ScoreLock[i] != 1){
                        document.getElementById(pl2ScoreId[i]).innerText = null;
                    }
                }
                totalCheck++;
                oneTime2[12] = 1;
                init2();
            }
        }
        if(totalCheck == 14 && sumCountForPl1 == 6 && sumCountForPl2 == 6){
            let total1 = onesLock+twosLock+threeLock+foursLock+fivesLock+sixLock+chanceLock+scoreForFullpl1+scoreForLargepl1+scoreForSmallpl1+scoreForyahtzeepl1+fourOfKindScore+threeOfKindScore;
            document.getElementById("pl1Total").innerText = total1;
            let total2 = onesLock2+twosLock2+threeLock2+foursLock2+fivesLock2+sixLock2+chanceLock2+scoreForFullpl2+scoreForLargepl2+scoreForSmallpl2+scoreForyahtzeepl2+fourOfKindScore2+threeOfKindScore2;
            document.getElementById("pl2Total").innerText = total2;
            total1 > total2 ? alert("PLAYER 1 WINS....") : alert("PLAYER 2 WINS....");
        }
    }

}
// Ones for pl2
function onesScoreForPl2(){
    if(pl2ScoreLock[0] == 0){
        rand1For2 == 1 ?  onesForPl2++ : null;
        rand2For2 == 1 ?  onesForPl2++ : null;
        rand3For2 == 1 ?  onesForPl2++ : null;
        rand4For2 == 1 ?  onesForPl2++ : null;
        rand5For2 == 1 ?  onesForPl2++ : null;

        if(onesForPl2 == 0){
            document.getElementById("pl2Ones").innerText=null;
            onesLock2 = 0;
        }
        else{
            document.getElementById("pl2Ones").innerText=onesForPl2;
            onesLock2 = onesForPl2;
            onesForPl2 = 0;
        }
    }
    else{ return }
}
// Twos for pl2
function twosScoreForPl2(){
    if(pl2ScoreLock[1] == 0){
        rand1For2 == 2 ?  twosForPl2 += 2 : null;
        rand2For2 == 2 ?  twosForPl2 += 2 : null;
        rand3For2 == 2 ?  twosForPl2 += 2 : null;
        rand4For2 == 2 ?  twosForPl2 += 2 : null;
        rand5For2 == 2 ?  twosForPl2 += 2 : null;

        if(twosForPl2 == 0){
            document.getElementById("pl2Twos").innerText=null;
            twosLock2 = 0;
        }
        else{
            document.getElementById("pl2Twos").innerText=twosForPl2;
            twosLock2 = twosForPl2;
            twosForPl2 = 0;
        }
    }
    else{ return }
}
// threes for pl2
function threeScoreForPl2(){
    if(pl2ScoreLock[2] == 0){
        rand1For2 == 3 ? threeForPl2 += 3 : null;
        rand2For2 == 3 ? threeForPl2 += 3 : null;
        rand3For2 == 3 ? threeForPl2 += 3 : null;
        rand4For2 == 3 ? threeForPl2 += 3 : null;
        rand5For2 == 3 ? threeForPl2 += 3 : null;

        if(threeForPl2 == 0){
            document.getElementById("pl2Threes").innerText=null;
            threeLock2 = 0;
        }
        else{
            document.getElementById("pl2Threes").innerText=threeForPl2;
            threeLock2 = threeForPl2;
            threeForPl2 = 0;
        }
    }
    else{ return }
}
// fours for pl2
function fourScoreForPl2(){
    if(pl2ScoreLock[3] == 0){
        rand1For2 == 4 ? fourForPl2 += 4 : null;
        rand2For2 == 4 ? fourForPl2 += 4 : null;
        rand3For2 == 4 ? fourForPl2 += 4 : null;
        rand4For2 == 4 ? fourForPl2 += 4 : null;
        rand5For2 == 4 ? fourForPl2 += 4 : null;

        if(fourForPl2 == 0){
            document.getElementById("pl2Fours").innerText=null;
            foursLock2 = 0;
        }
        else{
            document.getElementById("pl2Fours").innerText=fourForPl2;
            foursLock2 = fourForPl2;
            fourForPl2 = 0;
        }
    }
    else{ return }
}
// fives for pl2
function fiveScoreForPl2(){
    if(pl2ScoreLock[4] == 0){
        rand1For2 == 5 ? fiveForPl2 += 5 : null;
        rand2For2 == 5 ? fiveForPl2 += 5 : null;
        rand3For2 == 5 ? fiveForPl2 += 5 : null;
        rand4For2 == 5 ? fiveForPl2 += 5 : null;
        rand5For2 == 5 ? fiveForPl2 += 5 : null;

        if(fiveForPl2 == 0){
            document.getElementById("pl2Fives").innerText=null;
            fivesLock2 = 0;
        }
        else{
            document.getElementById("pl2Fives").innerText=fiveForPl2;
            fivesLock2 = fiveForPl2;
            fiveForPl2 = 0;
        }
    }
    else{ return }
}
// Sixes for pl2
function sixesScoreForPl2(){
    if(pl2ScoreLock[5] == 0){
        rand1For2 == 6 ? sixesForPl2 += 6 : null;
        rand2For2 == 6 ? sixesForPl2 += 6 : null;
        rand3For2 == 6 ? sixesForPl2 += 6 : null;
        rand4For2 == 6 ? sixesForPl2 += 6 : null;
        rand5For2 == 6 ? sixesForPl2 += 6 : null;

        if(sixesForPl2 == 0){
            document.getElementById("pl2Sixes").innerText=null;
            sixLock2 = 0;
        }
        else{
            document.getElementById("pl2Sixes").innerText=sixesForPl2;
            sixLock2 = sixesForPl2;
            sixesForPl2 = 0;
        }
    }
    else{ return }
}
// Yahtzee for pl2
function yahtzee2(){
    if(pl2ScoreLock[12] == 0){
        let test = [];
        test.push(rand1For2,rand2For2,rand3For2,rand4For2,rand5For2);
        let equalCheck = arr => arr.every(val => val === arr[0]);
        if(equalCheck(test)){
            document.getElementById("pl2Yahtzee").innerText = yahtzeeScore;
            scoreForyahtzeepl2 = yahtzeeScore;
        }
        else{
            document.getElementById("pl2Yahtzee").innerText = null;
            scoreForyahtzeepl2 = 0;
        }
    }
    else{ return }
}
// chance for pl2
function chanceForPl2(){
    if(pl2ScoreLock[11] == 0){
        chance2 = rand1For2+rand2For2+rand3For2+rand4For2+rand5For2;
        document.getElementById("pl2Chance").innerText = chance2;
        chanceLock2 = chance2;
        chance2 = 0;
    }
    else{ return }
}
// Three of Kind for pl2
function threeOfKind2(){
    if(pl2ScoreLock[6] == 0){
        if(((rand1For2 == rand2For2) && (rand1For2 == rand3For2)) || ((rand2For2 == rand3For2) && (rand2For2 == rand4For2)) || ((rand3For2 == rand4For2) && (rand3For2 == rand5For2)) || ((rand1For2 == rand3For2) && (rand1For2 == rand4For2)) || ((rand1For2 == rand3For2) && (rand1For2 == rand5For2)) || ((rand1For2 == rand4For2) && (rand1For2 == rand5For2)) || ((rand1For2 == rand2For2) && (rand1For2 == rand5For2)) || ((rand2For2 == rand3For2) && (rand2For2 == rand5For2)) || ((rand2For2 == rand4For2) && (rand2For2 == rand5For2)) || ((rand1For2 == rand2For2) && (rand1For2 == rand4For2))){
            threeOfKindScore2 = rand1For2+rand2For2+rand3For2+rand4For2+rand5For2;
            document.getElementById("pl2ThreeOfKind").innerText = threeOfKindScore2;
        }
        else{
            document.getElementById("pl2ThreeOfKind").innerText=null;
            threeOfKindScore2 = 0;
        }
    }
    else{ return }
}
// Four of Kind for pl2
function fourOfKind2(){
    if(pl2ScoreLock[7] == 0){
        if (((rand1For2 == rand2For2) && (rand2For2 == rand3For2) && (rand3For2 == rand4For2)) || ((rand1For2 == rand2For2) && (rand2For2 == rand3For2) && (rand3For2 == rand5For2)) || ((rand2For2 == rand3For2) && (rand3For2 == rand4For2) && (rand4For2 == rand5For2)) || ((rand1For2 == rand3For2) && (rand3For2 == rand4For2) && (rand4For2 == rand5For2)) || ((rand1For2 == rand2For2) && (rand2For2 == rand4For2) && (rand4For2 == rand5For2))){
            fourOfKindScore2 = rand1For2+rand2For2+rand3For2+rand4For2+rand5For2;
            document.getElementById("pl2FourOfKind").innerText = fourOfKindScore2;
        }  
        else{
            document.getElementById("pl2FourOfKind").innerText=null;
            fourOfKindScore2 = 0;
        }
    }
    else{ return }
}
// Small Straight for pl2
function smallStraight2(){
    if(pl2ScoreLock[9] == 0){
        let case1 = [1,2,3,4];
        let case2 = [2,3,4,5];
        let case3 = [3,4,5,6];
        let count1 = 0;
        let count2 = 0;
        let count3 = 0;
        var test = [];
        test.push(rand1For2,rand2For2,rand3For2,rand4For2,rand5For2);
        var noDup = [...new Set(test)];
        for(let i = 0 ; i < test.length ; i++){
            case1.includes(noDup[i]) ? count1++ : null;
            case2.includes(noDup[i]) ? count2++ : null;
            case3.includes(noDup[i]) ? count3++ : null;
        }
        if(count1 == 4 || count2 == 4 || count3 == 4){
            document.getElementById("pl2SmallStraight").innerText = smallStraightScore;
            scoreForSmallpl2 = smallStraightScore;
        }
        else{
            document.getElementById("pl2SmallStraight").innerText = null;
            scoreForSmallpl2 = 0;
        }
    }
    else{ return }
}
// Large Straight for pl2
function largeStraight2(){
    if(pl2ScoreLock[10] == 0){
        let case1 = [1,2,3,4,5];
        let case2 = [2,3,4,5,6];
        let test2 = [];
        let count1 = 0;
        let count2 = 0;
        test2.push(rand1For2,rand2For2,rand3For2,rand4For2,rand5For2);
        let noDup2 = [...new Set(test2)];
        for(let i = 0 ; i < noDup2.length ; i++){
            case1.includes(noDup2[i]) ? count1++ : null;
            case2.includes(noDup2[i]) ? count2++ : null;
        }
        if(count1 == 5 || count2 == 5){
            document.getElementById("pl2LargeStraight").innerText = largeStraightScore;
            scoreForLargepl2 = largeStraightScore;
        }
        else{
            document.getElementById("pl2LargeStraight").innerText = null;
            scoreForLargepl2 = 0;
        }
    }
    else{ return }
}
// Full house For pl2
function fullHouse2(){
    if(pl2ScoreLock[8] == 0){
        if((((rand1For2 == rand2For2) && (rand1For2 == rand3For2)) && (rand4For2 == rand5For2)) || (((rand2For2 == rand3For2) && (rand2For2 == rand4For2)) && (rand1For2 == rand5For2)) || (((rand3For2 == rand4For2) && (rand3For2 == rand5For2)) && (rand1For2 == rand2For2)) || (((rand1For2 == rand3For2) && (rand1For2 == rand4For2)) && (rand2For2 == rand5For2)) || (((rand1For2 == rand3For2) && (rand1For2 == rand5For2)) && (rand2For2 == rand4For2)) || (((rand1For2 == rand4For2) && (rand1For2 == rand5For2)) && (rand2For2 == rand3For2)) || (((rand1For2 == rand2For2) && (rand1For2 == rand5For2)) && (rand3For2 == rand4For2)) || (((rand2For2 == rand3For2) && (rand2For2 == rand5For2)) && (rand1For2 == rand4For2)) || (((rand2For2 == rand4For2) && (rand2For2 == rand5For2)) && (rand1For2 == rand3For2)) || (((rand1For2 == rand2For2) && (rand1For2 == rand4For2)) && (rand3For2 == rand5For2))){
            document.getElementById("pl2FullHouse").innerText = fullHouseScore;
            scoreForFullpl2 = fullHouseScore;
        }
        else{
            document.getElementById("pl2FullHouse").innerText=null;
            scoreForFullpl2 = 0;
        }
    }
    else{ return }
}
// The below 5 function are use to lock the dice for player 2
function diceLock1ForPl2(){
    dice1ForPl2.style.top=null;dice1ForPl2.style.left=null;  
     if(dice1Lock2 == 0){
         dice1Lock2 = 1;
         rollDiceDisableForPl2++;
         pointLock1ForPl2 = 1
     }
     else{
         dice1ForPl2.style.top="300px";
         dice1ForPl2.style.left="100px";
         dice1Lock2 = 0;
         pointLock2ForPl2 = 0;
         if(rollDiceDisableForPl2 > 0){
            rollDiceDisableForPl2--;
         }
     }
    if(rollDiceDisableForPl2 == 5){roll2.style.visibility="hidden";}
    if(rollDiceDisableForPl2 < 5){roll2.style.visibility="visible";}
 }
 function diceLock2ForPl2(){
     dice2ForPl2.style.top=null;dice2ForPl2.style.left=null;    
     if(dice2Lock2 == 0){
         dice2Lock2 = 1;
         rollDiceDisableForPl2++;
         pointLock2ForPl2 = 1;
     }
     else{
         dice2ForPl2.style.top="300px";
         dice2ForPl2.style.left="200px";
         dice2Lock2 = 0;
         pointLock2ForPl2 = 0;
         if(rollDiceDisableForPl2 > 0){
            rollDiceDisableForPl2--;
         }
     }
    if(rollDiceDisableForPl2 == 5){ roll2.style.visibility="hidden";}
    if(rollDiceDisableForPl2 < 5){roll2.style.visibility="visible";}
  }
  function diceLock3ForPl2(){
     dice3ForPl2.style.top=null;dice3ForPl2.style.left=null;
     if(dice3Lock2 == 0){
         dice3Lock2 = 1;
         rollDiceDisableForPl2++;
         pointLock3ForPl2 = 1;
     }
     else{
         dice3ForPl2.style.top="300px";
         dice3ForPl2.style.left="300px";
         dice3Lock2 = 0;
         pointLock3ForPl2 = 0;
         if(rollDiceDisableForPl2 > 0){
            rollDiceDisableForPl2--;
         }
     }
    if(rollDiceDisableForPl2 == 5){roll2.style.visibility="hidden";}
    if(rollDiceDisableForPl2 < 5){roll2.style.visibility="visible";}
  }
  function diceLock4ForPl2(){
     dice4ForPl2.style.top=null;dice4ForPl2.style.left=null;    
    if(dice4Lock2 == 0){
         dice4Lock2 = 1;
         rollDiceDisableForPl2++;
         pointLock4ForPl2 = 1;
     }
    else{
         dice4ForPl2.style.top="300px";
         dice4ForPl2.style.left="400px";
         dice4Lock2 = 0;
         pointLock4ForPl2 = 0;
         if(rollDiceDisableForPl2 > 0){
            rollDiceDisableForPl2--;
         }
     }
    if(rollDiceDisableForPl2 == 5){roll2.style.visibility="hidden";}
    if(rollDiceDisableForPl2 < 5){roll2.style.visibility="visible";}
  }
  function diceLock5ForPl2(){
     dice5ForPl2.style.top=null;dice5ForPl2.style.left=null;    
     if(dice5Lock2 == 0){
         dice5Lock2 = 1;
         rollDiceDisableForPl2++;
         pointLock5ForPl2 = 1;
     }
     else{
         dice5ForPl2.style.top="300px";
         dice5ForPl2.style.left="500px";
         dice5Lock2 = 0;
         pointLock5ForPl2 = 0;
         if(rollDiceDisableForPl2 > 0){
            rollDiceDisableForPl2--;
         }
     }
    if(rollDiceDisableForPl2 == 5){roll2.style.visibility="hidden";}
    if(rollDiceDisableForPl2 < 5){roll2.style.visibility="visible";}
  }