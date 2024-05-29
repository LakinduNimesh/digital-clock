const clock = document.querySelector(".digital-clock");

clock.addEventListener("load", tick);

function tick() {
  const today = new Date();
  const hours = String(today.getHours()).padStart(2, '0');
  const minutes = String(today.getMinutes()).padStart(2, '0');
  const seconds = String(today.getSeconds()).padStart(2, '0');

  const htmlContainer = `
    <span>${hours} :</span>
    <span>${minutes} :</span>
    <span>${seconds}</span>
  `;

  clock.innerHTML = htmlContainer;
}

setInterval(tick, 1000);
