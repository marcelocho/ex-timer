import estado from "./state.js";
import * as el from "./elements.js";
import { parar } from "./actions.js";

export function contagem() {
  clearTimeout(estado.contagemId);

  if (!estado.rodando) {
    return;
  }

  let minutes = Number(el.minutes.textContent);
  let seconds = Number(el.seconds.textContent);

  seconds--;

  if (seconds < 0) {
    seconds = 59;
    minutes--;
  }

  if (minutes < 0) {
    parar();
    return;
  }

  updateDisplay(minutes, seconds);

  estado.contagemId = setTimeout(() => contagem(), 1000);
}

export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? estado.minutes;
  seconds = seconds ?? estado.seconds;

  el.minutes.textContent = String(minutes).padStart(2, "0");
  el.seconds.textContent = String(seconds).padStart(2, "0");
}
