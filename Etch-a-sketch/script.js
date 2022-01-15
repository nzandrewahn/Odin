const canvas = document.getElementsByClassName("canvas")[0];
const sizeSlider = document.getElementsByClassName("size-slider")[0];

let pixel = document.createElement("div");
let mouseClicked = false;
let size = 4;

let RenderCanvas = (size) => {
  let width = Math.round(Math.sqrt(size));

  while (canvas.firstChild) {
    canvas.removeChild(canvas.firstChild);
  }
  canvas.style.gridTemplateColumns = `repeat(${width}, 1fr)`;

  for (let i = 0; i < size; i++) {
    pixel = document.createElement("div");
    pixel.classList.add("canvas__pixel");
    pixel.id = `pixel-${i}`;
    pixel.draggable = false;

    pixel.addEventListener("mousedown", (e) => {
      mouseClicked = true;
      console.log(`mouse is clicked : ${mouseClicked}`);
    });

    pixel.addEventListener("mouseup", (e) => {
      mouseClicked = false;
      console.log(`mouse is clicked : ${mouseClicked}`);
    });

    pixel.addEventListener("pointerover", (e) => {
      if (mouseClicked) {
        let currentPixel = document.getElementById(e.target.id);
        currentPixel.style.backgroundColor = "red";
      }
    });
    canvas.appendChild(pixel);
  }
};

RenderCanvas(size);


canvas.addEventListener("mouseleave", (e) => {
    mouseClicked = false;
});

sizeSlider.addEventListener("input", (e) => {
  size = sizeSlider.value;
  RenderCanvas(size);
});
