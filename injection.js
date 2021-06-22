export default class Injection {
  constructor(injectionX, injectionY, injectionR, injectionG, injectionB) {
    this.injectionX = injectionX;
    this.injectionY = injectionY;
    this.injectionR = injectionR;
    this.injectionG = injectionG;
    this.injectionB = injectionB;
  }
  showInjection() {
    push();

    translate(this.injectionX, this.injectionY);

    noStroke();
    fill(this.injectionR, this.injectionG, this.injectionB);

    // body
    triangle(10, 10, 60, 60, -35, 160);
    triangle(10, 11, 59, 60, 77, -10);
    triangle(66, 9, 70, -28, 97, -6);

    // tip
    fill(77, 77, 77);
    triangle(-34, 158, -27, 134, -16, 140);

    stroke(0, 0, 0);

    // details, black outlines
    line(13, 22, -25, 135);
    line(19, 15, 66, 0);
    line(57, 47, 67, 6);
    line(72, 4, 67, -4);
    line(71, -5, 73, -20);
    line(71, -5, 82, -8);

    pop();
  }
}
