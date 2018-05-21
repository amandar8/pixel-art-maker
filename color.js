let canvas = document.getElementById('canvas');
let fillColor = document.getElementById('colors_container');
let currentColor = 'red';
let paletteColors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'brown', 'gray', 'black'];
// let redColor = document.getElementById('red');
// let blueColor = document.getElementById('blue');
// let yellowColor = document.getElementById('yellow');

canvas.addEventListener('click', function(event) {
  event.target.style.backgroundColor = currentColor;
});

function generateRow() {
  for (let i = 0; i < 70; i++) {
    let canvasBox = document.createElement('div');
    canvasBox.classList.add('canvas-box');
    canvas.append(canvasBox);
  }};
  for (let i = 0; i < 10; i++) {
    generateRow(i);
  }

for (let i = 0; i < paletteColors.length; i++) {
  let palette = document.createElement('div');
  palette.classList.add('palette');
  palette.style.backgroundColor = paletteColors[i];
  colors_container.append(palette);
  // document.querySelector('div[id="colors-container"]').appendChild(palette);
}

fillColor.addEventListener('click', function(event) {
	currentColor = event.target.style.backgroundColor;
});
// for (let i = 0; i < 1; i++) {
//   let palette = document.createElement('div');
//   palette.classList.add('blue');
//   document.querySelector('div[id="colors-container"]').appendChild(palette);
// }
//
// document.querySelector('div[class = "blue"]').addEventListener('click', function(event) {
//   currentColor = 'blue';
//   console.log(currentColor);
// })
