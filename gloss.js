export default class Gloss {
  constructor(
    glossX,
    glossY,
    glossR,
    glossG,
    glossB,
    glossR2,
    glossG2,
    glossB2,
    glossR3,
    glossG3,
    glossB3
  ) {
    this.glossX = glossX;
    this.glossY = glossY;
    this.glossR = glossR;
    this.glossG = glossG;
    this.glossB = glossB;
    this.glossR2 = glossR2;
    this.glossG2 = glossG2;
    this.glossB2 = glossB2;
    this.glossR3 = glossR3;
    this.glossG3 = glossG3;
    this.glossB3 = glossB3;
  }
  showGloss() {
    push();

    translate(this.glossX, this.glossY);

    noStroke();
    fill(this.glossR, this.glossG, this.glossB);

    // main ellipse
    ellipse(125, 0, 251, 60);

    //  create fluid froms
    beginShape();
    curveVertex(15, 10);
    curveVertex(15, 10);
    curveVertex(21, 34);
    curveVertex(31, 25);
    curveVertex(71, 25);
    curveVertex(15, 10);
    endShape();

    beginShape();
    curveVertex(28, 24);
    curveVertex(28, 24);
    curveVertex(30, 35);
    curveVertex(43, 35);
    curveVertex(52, 28);
    curveVertex(66, 22);
    curveVertex(28, 24);
    endShape();

    // floating down gloss
    rect(110, 25, 15, 14);
    ellipse(117, 37, 15);

    rect(99, 28, 12, 25);
    ellipse(105, 51, 12);

    ellipse(89, 28, 40, 25);
    rect(45, 29, 5, 10);

    // many ellipses
    ellipse(47, 36, 8);
    ellipse(5, 2, 10, 18);
    ellipse(13, 13, 15);
    ellipse(192, 24, 30);
    ellipse(173, 25, 30, 60);
    ellipse(153, 30, 10);
    ellipse(141, 27, 10);
    ellipse(129, 27, 15);
    ellipse(207, 21, 16, 70);
    ellipse(220, 17, 20);
    ellipse(237, 4, 20, 30);
    ellipse(66, 25, 6);

    // different shades, lighting
    fill(this.glossR2, this.glossG2, this.glossB2);

    ellipse(104, 49, 8, 10);
    ellipse(175, 49, 8, 10, 20);
    ellipse(116, 0, 220, 50);

    // another shade
    fill(this.glossR3, this.glossG3, this.glossB3);
    ellipse(110, 0, 200, 30);

    pop();
  }
}
