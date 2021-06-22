import ButtonHitTest from "./buttonHitTest.js";

export default class Button extends ButtonHitTest {
  constructor(
    buttonX,
    buttonY,
    buttonWidth,
    buttonHeight,
    buttonR,
    buttonG,
    buttonB,
    buttonText
  ) {
    super(buttonX, buttonY, buttonWidth, buttonHeight);
    this.buttonR = buttonR;
    this.buttonG = buttonG;
    this.buttonB = buttonB;
    this.buttonText = buttonText;
  }

  showButton() {
    push();

    translate(this.buttonX, this.buttonY);
    noStroke();

    fill(this.buttonR, this.buttonG, this.buttonB);

    rect(0, 0, this.buttonWidth, this.buttonHeight, 10);
    rect(10, 10, this.buttonWidth - 20, this.buttonHeight - 20, 10);

    // text
    fill(255, 255, 255);

    textStyle(ITALIC);
    textSize(20);

    textAlign(CENTER);
    text(this.buttonText, this.buttonWidth / 2, this.buttonHeight / 2 + 10);

    pop();
  }
}
