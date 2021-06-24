import gsap from "./gsap.min.js";

const imdRechteck = {
  x: 10,
  y: 0,
};
function draw() {
  clear();
  fill(102, 255, 51);
  rect(imdRechteck.x, imdRechteck.y, 50, 50);
}

gsap.to(imdRechteck, {
  duration: 3,
  ease: "bounce",
  x: 500,
  onComplete: () => {
    console.log("Ankunft");

    gsap.to(imdRechteck, {
      duration: 4,
      x: 100,
      onComplete: () => {
        console.log("Ankunft");

        gsap.to(imdRechteck, {
          duration: 4,
          y: 300,

          onComplete: () => {
            console.log("Ankunft");

            gsap.to(imdRechteck, {
              duration: 4,
              x: 500,
            });
          },
        });
      },
    });
  },
});
