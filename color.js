let canvas = document.getElementById('canvas');
let redColor = document.getElementById('red');
let blueColor = document.getElementById('blue');
let currentColor = 'red';

canvas.addEventListener('click', function (event) {
    event.target.style.backgroundColor = currentColor;
});

redColor.addEventListener('click', function (event) {
  currentColor = 'red';
})

blueColor.addEventListener('click', function (event) {
  currentColor = 'blue';
})

for (let i = 0; i<4; i++) {
  let canvasBox = document.createElement('div');
  canvasBox.classList.add('canvas-box');
  canvas.append(canvasBox);
}
