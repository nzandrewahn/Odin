


let landingPageDiv = document.getElementsByClassName("landing-page-container")[0];
let gameScreenDiv = document.getElementsByClassName("game-screen-container")[0];
let resultScreenDiv = document.getElementsByClassName("result-screen")[0];
let resultDisplayHeader = document.getElementsByClassName("result-display-header")[0];
let cpuResultHeader = document.getElementsByClassName("CPU-result")[0];
let playerResultHeader = document.getElementsByClassName("player-result-header")[0];
let finishScreenDiv = document.getElementsByClassName("finish-screen")[0];
let finishScreenHeader = document.getElementsByClassName("winner-screen-header")[0];
let playerWinCount = document.getElementsByClassName("player-win-count")[0];
let cpuWinCount = document.getElementsByClassName("cpu-win-count")[0];

let win_count = 0;
let loss_count = 0;

function startButtonClick() {
  //Hid landing page and show game screen
  landingPageDiv.style.display = "none";
  gameScreenDiv.style.display = "flex";
}

function playGame(event) {

  // Hide game screen page 
  gameScreenDiv.style.display = "none";
 
  console.log(win_count);
  console.log(loss_count)
  if (win_count >= 4) {
    finishScreenDiv.style.display = "flex";
    finishScreenHeader.innerHTML = "PLAYER WINS"
    return;
  } else if (loss_count >= 4) {
    finishScreenDiv.style.display = "flex";
    finishScreenHeader.innerHTML = "CPU WINS"
    return;
  }

  ////// Calculate Winner
  // Get players roll 
  let player_roll = parseInt(event.target.id);

  // Roll for computer choice
  let cpu_roll = Math.floor((Math.random() * 10)) % 3;  

  // 0 = Rock
  // 1 = Paper
  // 2 = Scissors 

  // 0 beats 2
  // 1 beats 0 
  // 2 beats 1

  console.log(`Player is ${parseNumber(player_roll)} and num is ${player_roll}`); 
  console.log(`CPU is ${parseNumber(cpu_roll)} and num is ${cpu_roll}`)

  

  // Compute winner
  let result = (player_roll == ((cpu_roll % 2) + 1))
  let draw = (player_roll == cpu_roll)

  if (draw) {
    console.log("draw");
    result = "Draw";
  } else if ((player_roll == cpu_roll + 1) || (player_roll == 0 && cpu_roll == 2)) {
    console.log("player win");
    result = "Player Win";
    win_count++;
  } else {
    console.log("cpu win");
    loss_count++;
    result = "CPU Win";
  }
  
  //Display winner
  resultScreenDiv.style.display = "inline-flex";
  playerResultHeader.innerHTML = parseNumber(player_roll)
  cpuResultHeader.innerHTML = parseNumber(cpu_roll)
  cpuWinCount.innerHTML = `CPU Win Count: ${loss_count}`
  playerWinCount.innerHTML = `Player Win Count: ${win_count}`

  resultDisplayHeader.innerHTML = result; 
}


function parseNumber(num) {
  if (num == 0 ){
    return("Rock");
  } else if (num == 1 ) {
    return("Paper");
  } else if (num == 2) {
    return("Scissors");
  }
}

function RestartClickHandler() {
  //Display Game Screen
  gameScreenDiv.style.display = "flex";

  //Hide Result Screen
  resultScreenDiv.style.display = "none";
  console.log("Restart");
}
