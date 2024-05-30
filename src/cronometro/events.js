import state from './state.js'
import { controls } from './elements.js';
import * as actions from './actions.js'
import * as el from './elements.js'
import { updateDisplay } from './timer.js';

export function registerControls() {
    controls.addEventListener('click', (event) => {
        const action = event.target.dataset.pressionar
        if(typeof actions[action] != "function") {
            return
        }

        actions[action]()

    })

}