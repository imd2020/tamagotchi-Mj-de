export default class Cake {
  constructor(cakeX, cakeY, cakeS) {
    this.cakeX = cakeX;
    this.cakeY = cakeY;
    this.cakeS = cakeS;
  }
  showCake() {
    push();

    noStroke();
    translate(this.cakeX, this.cakeY);
    scale(this.cakeS);

    //   grey plate

    fill(153, 153, 102);
    arc(125, 100, 285, 100, 180, 0);

    fill(61, 61, 41);
    arc(125, 100, 285, 97, 0, 180);

    fill(163, 163, 117);
    arc(125, 100, 285, 95, 0, 180);

    //   main body of the brown cake
    fill(153, 51, 0);
    rect(0, 0, 250, 100);

    //   ellipse on the ground
    fill(153, 51, 0);
    ellipse(125, 100, 251, 60);

    //   ellipse on the top
    stroke(102, 34, 0);
    strokeWeight(0.3);

    fill(153, 51, 0);
    ellipse(125, 0, 251, 60);

    pop();
  }
}
