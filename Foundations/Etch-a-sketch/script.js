const canvas = document.getElementsByClassName("canvas")[0];
const sizeSlider = document.getElementsByClassName("size-slider")[0];
const colourPicker = document.getElementsByClassName("colour-picker")[0];

let pixel = document.createElement("div");
let mouseClicked = false;
let width = sizeSlider.value;
let colour = "#000000";

let RenderCanvas = (width) => {

  while (canvas.firstChild) {
    canvas.removeChild(canvas.firstChild);
  }
  canvas.style.gridTemplateColumns = `repeat(${width}, 1fr)`;

  for (let i = 0; i < Math.pow(width,2); i++) {
    pixel = document.createElement("div");
    pixel.classList.add("canvas__pixel");
    pixel.id = `pixel-${i}`;
    pixel.draggable = false;

    pixel.addEventListener("mousedown", (e) => {
      mouseClicked = true;
      colourPixel(pixel, e);
      // console.log(`mouse is clicked : ${mouseClicked}`);
    });

    pixel.addEventListener("mouseup", (e) => {
      mouseClicked = false;
      // console.log(`mouse is clicked : ${mouseClicked}`);
    });

    pixel.addEventListener("pointerover", (e) => {
      colourPixel(pixel, e);
    });
    canvas.appendChild(pixel);
  }
};

RenderCanvas(width);

function colourPixel (pixel, e){
  if (mouseClicked) {
    let currentPixel = document.getElementById(e.target.id);
    currentPixel.style.backgroundColor = colour;
  }
}

colourPicker.addEventListener("input", (e) => {
  colour = `${e.target.value}`;
  console.log(e.target.value)
})


canvas.addEventListener("mouseleave", (e) => {
    mouseClicked = false;
});

sizeSlider.addEventListener("input", (e) => {
  size = sizeSlider.value;
  RenderCanvas(size);
});
