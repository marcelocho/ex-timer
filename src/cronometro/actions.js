import estado from './state.js'
import * as temporizador from './timer.js'
import * as el from './elements.js'
import musica from './audio.js'

export const musicaOnOff = {
    floresta: document.getElementsByClassName('.floresta'),
    chuva: document.getElementsByClassName('.chuva'),
    fogueira: document.getElementsByClassName("fogueira"),
    cafe: document.getElementsByClassName('.cafe'),
}
export function comecar() {
    estado.rodando = document.documentElement.classList.toggle('rodando')

    // temporizador.countdown()
   }

export function parar() {
    estado.rodando = false
    document.documentElement.classList.remove('rodando')
    // temporizador.updateDisplay()
}

// export function aumentar() {
//     el.minutes.setAttribute('contenteditable', true)
//     el.minutes.focus()
// }

// export function diminuir() {
//     el.minutes.setAttribute('contenteditable', true)
//     el.minutes.focus()
// }

    // temporizador.countdown()
   
export function fogueira() {
    estado.musica = musicaOnOff.fogueira[0].classList.toggle('fogueira-on')
    estado.musica = musicaOnOff.fogueira[1].classList.toggle('fogueira-off')
    musica.audio
}
