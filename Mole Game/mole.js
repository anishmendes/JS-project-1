 //initialize variable
 let currMoleTile;
 let currPlantTile;
let score = 0;
let gameOver = false;



 window.onload = function(){
 setGame();
 }

 function setGame() {
    //set up the grid for the game board in html
    for (let i =0;i<9; i++){ //i goes from 0 to 8, stops at 9
        //creted a div tag in java script 
        //<div id="0-8"></div>
         let tile = document.createElement("div");
         tile.id = i.toString();
         tile.addEventListener("click",selectTile);
         document.getElementById("board").appendChild(tile);
         //with this our board will have 9 div tags 
    }
    setInterval(setMole,1000);//calling function set Mole and we goona call this function every 1000miliseconds which is 1sec
    setInterval(setPlant,2000);
}

 function getRandomTile(){
    //math.random reurns a number bettween 0 and 1 and if it multiply by 9 this range becomes (0-9)but this doesnot inculde 9 math random lay chai round dwon (0-8 ) integers

    let num =Math.floor(Math.random()*9);
    return num.toString();

 }

 function setMole() {
       //if the game is over we dont want to set the mole anymore so syntax below
       if (gameOver) {
        return;
       }



    if (currMoleTile) {
        currMoleTile.innerHTML ="";
    }//so this goona clear all the tags within this div vaneko mole derai create huna sato eutai humping garxa euta pipe bata arko ma 
    

    let mole = document.createElement("img");//creting an img tag
    mole.src ="./monty-mole.png";


    let num = getRandomTile();
     //yedi plant raw mole eutai pipe ma vayo vani tyo fix garnaw tala ko syntax
     if (currPlantTile && currPlantTile.id ==num){
        return;
     }

    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole); //so it goona take random tile which is a div tag mathi ko 9 ota madhay and add the img tag 
     
}

// for pirana plannt 

function setPlant() {
    //same as mole after game over

    if (gameOver) {
        return;
       }


    if (currPlantTile) {
        currPlantTile.innerHTML ="";
    }

    let plant = document.createElement("img");
    plant.src ="./piranha-plant.png";

    let num = getRandomTile();
    if (currMoleTile && currMoleTile.id ==num){
        return;
     }//same as 42 

    currPlantTile = document.getElementById(num);
    currPlantTile.appendChild(plant); //same ho setMole jastai just yo chai plant ko lagi ho same
}

//select garda ko function
function selectTile(){
    //same ho tala ko ni game over vayesi hamlay tile slect garnaw pauna 
    if (gameOver) {
        return;
       }

    if(this == currMoleTile){
    score += 10;
    document.getElementById("score").innerText = score.toString(); //update score
    }
    else if (this == currPlantTile){
        document.getElementById("score").innerText ="GAME OVER: " + score.toString();
        gameOver = true;
    }
}
