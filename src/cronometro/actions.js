import estado from './state.js'
import * as temporizador from './timer.js'
import * as el from './elements.js'

export function toggleRunning() {
    estado.rodando = document.documentElement.classList.toggle('rodando')

    timer.countdown()
   }

export function reset() {
    estado.isRunning = false
    document.documentElement.classList.remove('rodando')
    temporizador.updateDisplay()
}

export function set() {
    el.minutes.setAttribute('contenteditable', true)
    el.minutes.focus()
}