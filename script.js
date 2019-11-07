const userScore = document.getElementById("score-user");
const machineScore = document.getElementById("score-machine");
const scoreBoard = document.querySelector(".score");
const message = document.querySelector(".message__text");
const scissors = document.getElementById("scissors");
const paper = document.getElementById("paper");
const rock = document.getElementById("rock");

const choices = ["paper","scissors","rock"];


function game(userChoice){
  let random = Math.floor(Math.random()*3);
  let result = userChoice + choices[random];
  switch(result){
    case "paperrock":
      message.innerHTML = "Paper covers Rock: You win!!!";
      let num = parseInt(userScore.textContent);
      userScore.innerHTML = num + 1;
      break;
    case "scissorspaper":
      message.innerHTML = "Scissors cuts Paper: You win!!!";
      let num = parseInt(userScore.textContent);
      userScore.innerHTML = num + 1;
      break;
    case "rockscissors":
      message.innerHTML = "Rock breaks Scissors: You win!!!";
      let num = parseInt(userScore.textContent);
      userScore.innerHTML = num + 1;
      break;
    case "rockpaper":
      message.innerHTML = "Paper covers Rock: You lose!!!";
      let num = parseInt(machineScore.textContent);
      machineScore.innerHTML = num + 1;
      break;
    case "paperscissors":
      message.innerHTML = "Scissors cuts Paper: You lose!!!";
      let num = parseInt(machineScore.textContent);
      machineScore.innerHTML = num + 1;
      break;
    case "scissorsrock":
      message.innerHTML = "Rock breaks Scissors: You lose!!!";
      let num = parseInt(machineScore.textContent);
      machineScore.innerHTML = num + 1;
      break;
  }
}

rock.addEventListener('click', function(){
  game("rock")
})

scissors.addEventListener('click', function(){
  game("scissors")
})

paper.addEventListener('click', function(){
  game("paper")
})
console.log("Yeah whatever")
