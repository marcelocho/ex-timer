import estado from "./state.js";
import * as eventos from "./events.js";
// import * as timer from './timer.js'

export function start(minutes, seconds) {
  estado.minutes = minutes;
  estado.seconds = seconds;

  //     timer.updateDisplay()

  eventos.registerControls();
  //     eventos.setMinutes()
}
