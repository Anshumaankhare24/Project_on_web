function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function play(playerSelection) {
  const computerSelection = computerPlay();
  const resultDisplay = document.querySelector(".result");
  // const playerChoiceImg = document.getElementById('player-choice');
  // const computerChoiceImg = document.getElementById('computer-choice');
  let result;

  if (playerSelection === computerSelection) {
    result = "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    result = "You win!";
  } else {
    result = "Computer wins!";
  }

  resultDisplay.innerHTML = `<p class ="fs-5 text-center fs1">You chose ${playerSelection}. Computer chose ${computerSelection}. ${result}</p>
                               <div class="col-3 img_r_rotated " id="">
                               <p class="fs-2 text-center mt-3">ME</p>
                                     <img src="./images/${playerSelection}.png" alt="err" class="img-fluid colorimg ">
                               </div>
                               <div class="col-3 img_l_rotated ">
                               <p class="fs-2 text-center mt-3">Computer</p>
                                   <img src="./images/${computerSelection}.png" alt="err" class="img-fluid colorimg ">
                                </div>
                        
                        `;
}
