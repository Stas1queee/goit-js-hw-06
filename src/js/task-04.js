const counter = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
};
const decrementBtn = document.querySelector(
  'button[data-action = "decrement"]'
);
const incrementBtn = document.querySelector(
  'button[data-action = "increment"]'
);
const valueEl = document.querySelector("#value");
decrementBtn.addEventListener("click", onDecrementBtn);
incrementBtn.addEventListener("click", onIncrementBtn);
function onDecrementBtn() {
  counter.decrement();
  console.log(counter);
  valueEl.textContent = counter.value;
}
function onIncrementBtn() {
  counter.increment();
  console.log(counter);
  valueEl.textContent = counter.value;
}
