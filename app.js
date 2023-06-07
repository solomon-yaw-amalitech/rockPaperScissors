"use strict";

const userScore = 19;
const computerScore =30;

const userScore_span = document.querySelector("#user-score");
const computerScore_span = document.querySelector("#computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.querySelector("#r");
const paper_div = document.querySelector("#p");
const scissors_div = document.querySelector("#s");

function getComputerChoice(){
    const choices = ["r","p","s"];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
    

}


function game(userChoice)
{
   const computerChoice = getComputerChoice();  
   console.log("computer choice =>"+computerChoice);
   console.log("user choice =>"+userChoice);
   
   
    
}


function main (){

    rock_div.addEventListener("click",function(){
        
        game("r");

        });
        
        
    paper_div.addEventListener("click",function(){
           
        game("p");
        
        });
        
    scissors_div.addEventListener("click",function(){
            
        game("s");
        });
        
}

main();




