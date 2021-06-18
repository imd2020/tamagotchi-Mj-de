// Tamagotchi construct by Maja Mittelstädt (2021)

// instructions for overall picture

angleMode(DEGREES);

import Cake from "./cake.js";
import Candle from "./candle.js";
import Injection from "./injection.js";

let cake = new Cake(300, 265, 1, 300, 265, 255, 102, 102);
cake.showCake();
cake.showGloss();

let injection = new Injection(100, 100);
injection.showInjection();

let candle = new Candle(400, 180);
candle.showCandle();
