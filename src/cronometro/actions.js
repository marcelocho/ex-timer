import estado from "./state.js";
import * as temporizador from "./timer.js";
import * as el from "./elements.js";
import * as musica from "./audio.js";

export const musicaOnOff = {
  floresta: document.getElementsByClassName("floresta"),
  chuva: document.getElementsByClassName("chuva"),
  fogueira: document.getElementsByClassName("fogueira"),
  cafe: document.getElementsByClassName("cafe"),
};
export function comecar() {
  estado.rodando = document.documentElement.classList.toggle("rodando");

  temporizador.contagem();
}

export function parar() {
  estado.rodando = false;
  document.documentElement.classList.remove("rodando");
  temporizador.updateDisplay();
}

export function aumentar() {
  let newMinutes = Number(el.minutes.textContent) + 5;
  temporizador.updateDisplay(newMinutes, 0);
}

export function diminuir() {
  let newMinutes = Number(el.minutes.textContent) - 5;
  temporizador.updateDisplay(newMinutes, 0);
  if (newMinutes < 0) {
    temporizador.updateDisplay(0, 0);
  }
}

export function fogueira() {
  estado.musica = musicaOnOff.fogueira[0].classList.toggle("fogueira-on");
  musicaOnOff.fogueira[1].classList.toggle("fogueira-on");

  if (estado.musica) {
    musica.audioFogueira.play();
  } else {
    musica.audioFogueira.pause();
  }
}

export function chuva() {
  estado.musica = musicaOnOff.chuva[0].classList.toggle("chuva-on");
  musicaOnOff.chuva[1].classList.toggle("chuva-on");

  if (estado.musica) {
    musica.audioChuva.play();
  } else {
    musica.audioChuva.pause();
  }
}

export function floresta() {
  estado.musica = musicaOnOff.floresta[0].classList.toggle("floresta-on");
  musicaOnOff.floresta[1].classList.toggle("floresta-on");

  if (estado.musica) {
    musica.audioFloresta.play();
  } else {
    musica.audioFloresta.pause();
  }
}

export function cafe() {
  estado.musica = musicaOnOff.cafe[0].classList.toggle("cafe-on");
  musicaOnOff.cafe[1].classList.toggle("cafe-on");

  if (estado.musica) {
    musica.audioCafe.play();
  } else {
    musica.audioCafe.pause();
  }
}
