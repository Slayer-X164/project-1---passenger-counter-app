// change the count-el to new count

let count = 0;
const countEl = document.getElementById("count-el");
const saveEl = document.getElementById("save-el");
function increment() {
  count += 1;
  countEl.innerText = count;
  if (count >= 24) {
    count = 0;
  }
}

function decrement() {
  count = count - 1;
  countEl.innerText = count;
  if (count < 0) {
    countEl.innerText = `invalid!`;
    count = 0;
  }
}
let saveElContent;
function save() {
  saveElContent = count + " - ";
  saveEl.textContent += saveElContent;
  countEl.textContent = 0;
  count = 0;
}
