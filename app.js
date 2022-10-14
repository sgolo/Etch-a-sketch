const container = document.querySelector('.container');
const sizeBtn = document.querySelector('.sizeBtn');
const coarseBtn = document.querySelector('.coarseBtn');
const fineBtn = document.querySelector('.fineBtn');
const ultraFineBtn = document.querySelector('.ultraFineBtn');
const boxes = document.querySelector('.box');
const eraseBtn = document.querySelector('.eraseBtn');
let boxnumber = 128;

sizeBtn.addEventListener('click', (e) => {
  boxnumber = prompt('Select grid size:');
  gridSize(boxnumber);
});

function gridSize(num) {
  container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${num}, 1fr)`;

  for (i = num * num; i > 0; i--) {
    const box = document.createElement(`div${num}`);
    box.setAttribute('class', 'box');
    container.append(box);
  }
}
gridSize(boxnumber);

const allBoxes = document.querySelectorAll('.box');

allBoxes.forEach((element) => {
  element.addEventListener('mouseover', (e) => {
    element.classList.add('paintBlack');
  });
});

coarseBtn.addEventListener('click', (e) => {
  boxnumber = 16;
  gridSize(boxnumber);
  boxes.style.backgroundColor = 'white';
});

fineBtn.addEventListener('click', (e) => {
  boxnumber = 64;
  gridSize(boxnumber);
});

ultraFineBtn.addEventListener('click', (e) => {
  boxnumber = 128;
  gridSize(boxnumber);
});

eraseBtn.addEventListener('click', (e) => {
  allBoxes.forEach((element) => {
    element.classList.remove('paintBlack');
  });
});
