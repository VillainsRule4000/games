var pscore = 0;
var cscore = 0;
function choose(x) {
  var computer = Math.random();
  var player = x;
  if (computer < 0.34) {
    computer = "rock";
  } else if (computer <= 0.67) {
    computer = "paper";
  } else {
    computer = "scissors";
  }

  if (player == computer) {
    main(player, computer, "You Chose The Same As The Computer!");
    console.log(pscore, cscore)
  } else if (player == "rock" && computer == "scissors") {
    pscore += 1;
    main(player, computer, "You chose rock and broke the scissors!");
    console.log(pscore, cscore)
  } else if (player == "paper" && computer == "rock") {
    pscore += 1;
    main(player, computer, "You chose paper and wrapped the rock!");
    console.log(pscore, cscore)
  } else if (player == "scissors" && computer == "paper") {
    pscore += 1;
    main(player, computer, "You chose scissors and cut the paper!");
    console.log(pscore, cscore)
  } else if (player == "scissors" && computer == "rock") {
    cscore += 1;
    main(player, computer, "You lost by choosing scissor!");
    console.log(pscore, cscore)
  } else if (player == "rock" && computer == "paper") {
    cscore += 1;
    main(player, computer, "You lost by choosing rock!");
    console.log(pscore, cscore)
  } else if (player == "paper" && computer == "scissors") {
    cscore += 1;
    main(player, computer, "You lost by choosing paper!");
    console.log(pscore, cscore)
  }
}
function lastplayer(player) {
  if (player == "rock") {
    $("#lastplayer").attr("src", "assets/rock.png");
  } else if (player == "paper") {
    $("#lastplayer").attr("src", "assets/paper.png");
  } else if (player == "scissors") {
    $("#lastplayer").attr("src", "assets/scissors.png");
  }
}
function lastpc(computer) {
  if (computer == "rock") {
    $("#lastpc").attr("src", "assets/rock.png");
  } else if (computer == "paper") {
    $("#lastpc").attr("src", "assets/paper.png");
  } else if (computer == "scissors") {
    $("#lastpc").attr("src", "assets/scissors.png");
  }
}
function lastscore() {
  document.getElementById("lastscore").textContent = pscore + " : " + cscore;
}
function last(x) {
  document.getElementById("last").textContent = x;
}
function main(player, computer, x) {
  lastplayer(player);
  lastpc(computer);
  lastscore();
  last(x);
}
