window.mouseClicked = mouseClicked;
window.draw = draw;

// Tamagotchi construct by Maja Mittelstädt (2021)

// instructions for overall picture

angleMode(DEGREES);

// imports, classes
import Cake from "./cake.js";
import Gloss from "./gloss.js";
import Candle from "./candle.js";

import Injection from "./injection.js";
import Setting from "./setting.js";
import Button from "./showButton.js";

// states
let state = "start";

// instantiate, objects
let cake = new Cake(300, 265, 1);
let orderCake = new Cake(550, 265, 1);

let setting1 = new Setting();
let injection = new Injection(550, 60);

// instatiate objects (buttons)
let startButton = new Button(770, 420, 100, 50, 204, 102, 153, "START");
let losgehtsButton = new Button(
  752,
  440,
  110,
  40,
  204,
  102,
  153,
  "Los geht's!"
);

let pinkButton = new Button(640, 70, 60, 60, 255, 102, 102);
let greenButton = new Button(720, 70, 60, 60, 107, 107, 71);
let lilaButton = new Button(800, 70, 60, 60, 77, 0, 77);

let nextStepButton = new Button(
  690,
  435,
  170,
  40,
  204,
  102,
  153,
  "Nächster Schritt"
);

let bakeAgainButton = new Button(
  730,
  450,
  150,
  30,
  204,
  102,
  153,
  "Erneut backen"
);

let candleAmountButton = new Button(
  600,
  30,
  280,
  80,
  204,
  102,
  153,
  "Kerzenanzahl auswählen"
);
let lastStepButton = new Button(
  665,
  430,
  200,
  30,
  204,
  102,
  153,
  "Kuchen abgeben"
);

// instatiate objects (glosses)
let pinkGloss = new Gloss(
  300,
  265,
  255,
  102,
  102,
  255,
  128,
  128,
  255,
  153,
  153
);
let greenGloss = new Gloss(300, 265, 107, 107, 71, 122, 122, 82, 138, 138, 92);
let lilaGloss = new Gloss(300, 265, 77, 0, 77, 102, 0, 102, 128, 0, 128);

let orderPinkGloss = new Gloss(
  550,
  265,
  255,
  102,
  102,
  255,
  128,
  128,
  255,
  153,
  153
);
let orderGreenGloss = new Gloss(
  550,
  265,
  107,
  107,
  71,
  122,
  122,
  82,
  138,
  138,
  92
);
let orderLilaGloss = new Gloss(550, 265, 77, 0, 77, 102, 0, 102, 128, 0, 128);

// instatiate objects (candles)

let candle1 = new Candle(420, 194);
let candle2 = new Candle(450, 180);
let candle3 = new Candle(374, 190);
let candle4 = new Candle(340, 182);
let candle5 = new Candle(480, 200);

let orderCandle1 = new Candle(670, 194);
let orderCandle2 = new Candle(700, 180);
let orderCandle3 = new Candle(624, 190);
let orderCandle4 = new Candle(590, 182);
let orderCandle5 = new Candle(730, 200);

// start values

let chosenColor = 0;
let chosenCandleAmount = 0;

let orderColor = round(random(1, 3));
let orderCandleAmount = round(random(1, 3));

// functions

function welcome(welcomeX, welcomeY, welcomeS) {
  push();

  translate(welcomeX, welcomeY);

  noStroke();

  //   blue background
  fill(102, 179, 255);
  rect(-200, -150, 900, 500);

  scale(welcomeS);
  //   welcome sign
  fill(204, 102, 153);
  rect(0, 0, 350, 100);
  ellipse(175, 75, 350, 100);

  //   blue ellipse
  fill(102, 179, 255);
  ellipse(170, 0, 350, 40);

  //   // cooking hat

  //   fill(255, 255, 255);
  //   rect(70, -42, 55, 60, 10);

  fill(255, 255, 255);
  textStyle(ITALIC);
  textSize(20);
  text("Herzlich willkommen", 86, 60);
  text("in der Konditorei", 100, 80);

  pop();
}

function startScreen() {
  push();
  welcome(200, 150, 1.5);

  startButton.showButton();
  pop();
}

function hat(hatX, hatY) {
  push();
  translate(hatX, hatY);
  scale(2);
  noStroke();

  //   white hat, main part
  fill(255, 255, 255);
  rect(0, 0, 50, 60, 5);

  //   details
  ellipse(5, 4, 45, 45);
  ellipse(29, -3, 34, 40);
  ellipse(46, 0, 30);

  pop();
}

function task(taskX, taskY) {
  push();

  translate(taskX, taskY);

  noStroke();

  //   description box for the task
  fill(204, 102, 153);
  rect(-10, 123, 350, 110, 15);

  //   text

  fill(255, 255, 255);

  textStyle(ITALIC);
  textSize(20);

  text("Dein Auftrag:", 6, 156);
  text("Backe diesen Kuchen.", 6, 185);
  text("Der Kunde muss zufrieden sein. ", 6, 212);

  pop();
}

function taskScreen() {
  push();

  setting1.showSetting();

  task(100, 100);

  hat(100, 100);

  losgehtsButton.showButton();

  order();

  pop();
}

function glossScreen() {
  setting1.showSetting();

  cake.showCake();

  injection.showInjection();

  pinkButton.showButton();
  greenButton.showButton();
  lilaButton.showButton();

  nextStepButton.showButton();

  if (chosenColor === 1) {
    pinkGloss.showGloss();
  } else if (chosenColor === 2) {
    greenGloss.showGloss();
  } else if (chosenColor === 3) {
    lilaGloss.showGloss();
  }
}

function candleScreen() {
  setting1.showSetting();
  cake.showCake();

  if (chosenColor === 1) {
    pinkGloss.showGloss();
  } else if (chosenColor === 2) {
    greenGloss.showGloss();
  } else if (chosenColor === 3) {
    lilaGloss.showGloss();
  }

  candleAmountButton.showButton();
  lastStepButton.showButton();
  if (chosenCandleAmount === 4) {
    chosenCandleAmount = 0;
  }
  if (chosenCandleAmount === 1) {
    candle1.showCandle();
  } else if (chosenCandleAmount === 2) {
    candle1.showCandle();
    candle2.showCandle();
    candle3.showCandle();
  } else if (chosenCandleAmount === 3) {
    candle1.showCandle();
    candle2.showCandle();
    candle3.showCandle();
    candle4.showCandle();
    candle5.showCandle();
  }
}

function order() {
  orderCake.showCake();

  if (orderColor === 1) {
    orderPinkGloss.showGloss();
  } else if (orderColor === 2) {
    orderGreenGloss.showGloss();
  } else if (orderColor === 3) {
    orderLilaGloss.showGloss();
  }

  if (orderCandleAmount === 1) {
    orderCandle1.showCandle();
  } else if (orderCandleAmount === 2) {
    orderCandle1.showCandle();
    orderCandle2.showCandle();
    orderCandle3.showCandle();
  } else if (orderCandleAmount === 3) {
    orderCandle1.showCandle();
    orderCandle2.showCandle();
    orderCandle3.showCandle();
    orderCandle4.showCandle();
    orderCandle5.showCandle();
  }
}

function baked() {
  cake.showCake();

  if (chosenColor === 1) {
    pinkGloss.showGloss();
  } else if (chosenColor === 2) {
    greenGloss.showGloss();
  } else if (chosenColor === 3) {
    lilaGloss.showGloss();
  }

  if (chosenCandleAmount === 1) {
    candle1.showCandle();
  } else if (chosenCandleAmount === 2) {
    candle1.showCandle();
    candle2.showCandle();
    candle3.showCandle();
  } else if (chosenCandleAmount === 3) {
    candle1.showCandle();
    candle2.showCandle();
    candle3.showCandle();
    candle4.showCandle();
    candle5.showCandle();
  }
}

function bakeAgain() {
  push();

  //   create start values again

  chosenColor = 0;
  chosenCandleAmount = 0;

  orderColor = round(random(1, 3));
  orderCandleAmount = round(random(1, 3));

  cake.cakeX = 300;

  pinkGloss.glossX = 300;
  greenGloss.glossX = 300;
  lilaGloss.glossX = 300;

  candle1.candleX = 420;
  candle2.candleX = 450;
  candle3.candleX = 374;
  candle4.candleX = 340;
  candle5.candleX = 480;

  pop();
}

function winLost() {
  if (orderColor === chosenColor && orderCandleAmount === chosenCandleAmount) {
    fill(204, 102, 153);
    textSize(40);
    text("GLÜCKWUNSCH!", 250, 60);
  } else {
    fill(204, 102, 153);
    textSize(40);
    text("Der Kunde will sein Geld zurück!", 150, 60);
  }
}

function endScreen() {
  push();

  setting1.showSetting();

  noStroke();

  //   descprition box
  fill(204, 102, 153);
  rect(100, 100, 250, 30, 5);
  rect(550, 100, 250, 30, 5);

  //   text in description box
  fill(255, 255, 255);
  textStyle(ITALIC);
  textSize(20);

  text("Dein Kuchen", 165, 122);
  text("Der Auftrag", 625, 122);

  //   call functions
  baked();
  order();
  winLost();

  //   object
  bakeAgainButton.showButton();

  pop();
}

function mouseClicked() {
  if (state === "start") {
    if (startButton.hitTest()) {
      console.log(startButton.hitTest());
      state = "task";
    }
  } else if (state === "task") {
    if (losgehtsButton.hitTest()) {
      console.log(losgehtsButton.hitTest());
      state = "gloss";
    }
  } else if (state === "gloss") {
    if (pinkButton.hitTest()) {
      chosenColor = 1;
    } else if (greenButton.hitTest()) {
      chosenColor = 2;
    } else if (lilaButton.hitTest()) {
      chosenColor = 3;
    }

    if (nextStepButton.hitTest()) {
      state = "candle";
    }
  } else if (state === "candle") {
    if (lastStepButton.hitTest()) {
      state = "end";
      cake.cakeX = 120;

      pinkGloss.glossX = 120;
      greenGloss.glossX = 120;
      lilaGloss.glossX = 120;

      candle1.candleX = 240;
      candle2.candleX = 270;
      candle3.candleX = 194;
      candle4.candleX = 160;
      candle5.candleX = 300;
    }
    if (candleAmountButton.hitTest()) {
      chosenCandleAmount = chosenCandleAmount + 1;
    }
  } else if (state === "end") {
    if (bakeAgainButton.hitTest()) {
      bakeAgain();
      state = "start";
    }
  }
  console.log(cake.cakeX);
}

function draw() {
  if (state === "start") {
    startScreen();
  } else if (state === "task") {
    taskScreen();
  } else if (state === "gloss") {
    glossScreen();
  } else if (state === "candle") {
    candleScreen();
  } else if (state === "end") {
    endScreen();
  }
}
