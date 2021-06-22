function setup() {
  let canvasSetttings = createCanvas(900, 500);
  canvasSetttings.parent("tamagotchi");
  frameRate(30);
}

window.addEventListener("resize", function () {
  resizeCanvas(windowWidth, windowHeight);
  clear();
});

new p5();
var width = windowWidth;
var height = windowHeight;
