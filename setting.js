export default class Setting {
  constructor() {}
  showSetting() {
    push();

    noStroke();

    // blue background
    fill(102, 179, 255);
    rect(0, 0, 900, 500);

    // brown table
    fill(255, 204, 128);
    rect(0, 300, 900, 200);

    pop();
  }
}
