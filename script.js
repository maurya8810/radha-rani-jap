let count = 0;
let total = 0;
let malas = 0;
let startTime = new Date();
let timerElement = document.getElementById("time");

document.getElementById("add").addEventListener("click", () => {
  count++;
  total++;
  document.getElementById("count").innerText = count;
  document.getElementById("total").innerText = total;

  if (count >= 108) {
    malas++;
    count = 0;
    document.getElementById("malas").innerText = malas;
  }
});

setInterval(() => {
  let now = new Date();
  let diff = new Date(now - startTime);
  let h = String(diff.getUTCHours()).padStart(2, '0');
  let m = String(diff.getUTCMinutes()).padStart(2, '0');
  let s = String(diff.getUTCSeconds()).padStart(2, '0');
  timerElement.innerText = ${h}:${m}:${s};
}, 1000);
