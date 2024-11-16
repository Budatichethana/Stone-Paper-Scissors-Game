const answer = document.querySelector(".answer");
const left_side = document.querySelector(".left_side");
const right_side = document.querySelector(".right_side");
const left_para = document.querySelector(".left_para");
const draw = document.querySelector(".draw");
const right_para = document.querySelector(".right_para");
const totalSum = document.querySelector(".total");
const stoneHand = document.querySelector(".stone");
const chooseSection = document.querySelector(".choose h3");

function Restart() {
  right_para.innerHTML = 0;
  draw.innerHTML = 0;
  left_para.innerHTML = 0;
  answer.innerHTML = ".......";
}
function total() {
  let i = totalSum.innerHTML;
  let j = Number(i);
  j++;
  totalSum.innerHTML = j;
}
function drawGame() {
  let i = draw.innerHTML;
  let j = Number(i);
  j++;
  draw.innerHTML = j;
  total();
}
function winGame() {
  let i = right_para.innerHTML;
  let j = Number(i);
  j++;
  right_para.innerHTML = j;
  total();
}
function lossGame() {
  let i = left_para.innerHTML;
  let j = Number(i);
  j++;
  left_para.innerHTML = j;
  total();
}

function RightStone() {
  right_side.className = "RightStone";
}
function RightPaper() {
  right_side.className = "RightPaper";
}
function RightSCi() {
  right_side.className = "RightSCi";
}
function leftStone() {
  left_side.className = "leftStone";
}
function leftPaper() {
  left_side.className = "leftPaper";
}
function leftSci() {
  left_side.className = "leftSci";
}

var ran;
let value = 0;
var check = true;

function checkPaper() {
  if (ran == 1) {
    leftPaper();
    drawGame();
    answer.innerHTML = "Match Draw !";
  } else if (ran == 0) {
    leftStone();
    winGame();
    answer.innerHTML = "You Won !";
  } else if (ran == 2) {
    leftSci();
    lossGame();
    answer.innerHTML = "You Loss !";
  }
  RightPaper();
}
function checkStone() {
  if (ran == 0) {
    leftStone();
    drawGame();
    answer.innerHTML = "Match Draw !";
  } else if (ran == 2) {
    leftSci();
    winGame();
    answer.innerHTML = "You Won !";
  } else if (ran == 1) {
    leftPaper();
    lossGame();
    answer.innerHTML = "You Loss !";
  }
  RightStone();
}
function checkSci() {
  if (ran == 2) {
    leftSci();
    drawGame();
    answer.innerHTML = "Match Draw !";
  } else if (ran == 1) {
    leftPaper();
    winGame();
    answer.innerHTML = "You Won !";
  } else if (ran == 0) {
    leftStone();
    lossGame();
    answer.innerHTML = "You Loss !";
  }
  RightSCi();
}

const paperFun = () => {
  if (check == true) {
    check = false;
    chooseSection.innerHTML = "Wait...";
    answer.innerHTML = "........";
    ran = Math.floor(Math.random() * 3);
    value = 1;
    right_side.className = "right";
    left_side.className = "left";

    setTimeout(() => {
      checkPaper();
      check = true;
       chooseSection.innerHTML = "Choose Here";

    }, 1500);
  }
};

const stoneFun = () => {
  if (check == true) {
    check = false;
    chooseSection.innerHTML = "Wait...";
    answer.innerHTML = "........";
    ran = Math.floor(Math.random() * 3);
    value = 0;
    right_side.className = "right";
    left_side.className = "left";
    setTimeout(() => {
      checkStone();
      check = true;
      chooseSection.innerHTML = "Choose Here";
    }, 1500);
  }
};

const SciFun = () => {
  if (check == true) {
    check = false;
    chooseSection.innerHTML = "Wait...";
    answer.innerHTML = "........";
    ran = Math.floor(Math.random() * 3);
    value = 2;
    right_side.className = "right";
    left_side.className = "left";
    setTimeout(() => {
      checkSci();
      check = true;
      chooseSection.innerHTML = "Choose Here";
    }, 1500);
  }
};
