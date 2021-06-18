export default class Candle {
  constructor(candleX, candleY) {
    this.candleX = candleX;
    this.candleY = candleY;
  }
  showCandle() {
    translate(this.candleX, this.candleY);
    noStroke();
    fill(204, 0, 0);
    rect(0, 30, 10, 50);
    ellipse(5, 77, 10);

    fill(230, 0, 0);
    ellipse(5, 28, 10);

    fill(0, 0, 0);
    rect(4, 18, 1, 10);

    fill(255, 102, 0);
    triangle(5, 10, 3, 15, 7, 15);
    ellipse(5, 17, 5, 10);
  }
}
