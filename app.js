"use strict";

let userScore = 0;
let computerScore =0;

const userScore_span = document.querySelector("#user-score");
const computerScore_span = document.querySelector("#computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > h1");
const rock_div = document.querySelector("#r");
const paper_div = document.querySelector("#p");
const scissors_div = document.querySelector("#s");

function convertToWord(letter){
    if(letter==="r") return "Rock";
    if(letter==="p") return "Paper";
    if(letter==="s") return "Scissors";


}

function getComputerChoice(){
    const choices = ["r","p","s"];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
    

}

function win(user,computer){
    userScore ++; 
    userScore_span.innerHTML = userScore.toString(); 
    computerScore_span.innerHTML = computerScore; 
    const smallUserWord = "user".fontsize(2).sub();
    const smallCompWord = "comp".fontsize(2).sub();
    result_div.innerHTML = `${convertToWord(user)}${smallUserWord} beats ${convertToWord(computer)}${smallCompWord} , <br>
    You Win! 🔥🔥`;

   document.getElementById(user).classList.add("green-glow");
   setTimeout(function(){
    document.getElementById(user).classList.remove("green-glow");
   },300);
      
}

function lose(user,computer)
{
   computerScore++;
   computerScore_span.innerHTML = computerScore.toString();
   userScore_span.innerHTML = userScore;
   const smallUserWord = "user".fontsize(2).sub();
   const smallCompWord = "comp".fontsize(2).sub();
   result_div.innerHTML = `${convertToWord(user)}${smallUserWord} beats ${convertToWord(computer)}${smallCompWord} , <br>
   You Lose! 🤯`;
   document.getElementById(user).classList.add("red-glow");

   setTimeout(function(){
    document.getElementById(user).classList.remove("red-glow");
   },300);
   
    
}

function draw(user,computer){
    const smallUserWord = "user".fontsize(2).sub();
    const smallCompWord = "comp".fontsize(2).sub();
    result_div.innerHTML = `${convertToWord(user)}${smallUserWord} eqals ${convertToWord(computer)}${smallCompWord} ,<br>
     Its a draw! 😞`;

    document.getElementById(user).classList.add("gray-glow");
    setTimeout(function(){
     document.getElementById(user).classList.remove("gray-glow");
    },300);
    
  
}

function game(userChoice)
{
   const computerChoice = getComputerChoice();  
  
   switch(userChoice+computerChoice)
   {
    case "rs":
    case "pr":
    case "sp":
        win(userChoice,computerChoice);
        break;

    case "rp":
    case "ps":
    case "sr":
        lose(userChoice,computerChoice);
        break;
              
    case "rr":
    case "pp":
    case "ss":
        draw(userChoice,computerChoice);
        break;
        
            
   }
   
   
    
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




