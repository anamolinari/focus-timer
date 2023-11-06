import { controls } from "./elements.js"
import * as actions from './actions.js'

export function registerControls() {
    controls.addEventListener('click', btnControls)

    function btnControls(event) {
        const action = event.target.dataset.action
        if(typeof actions[action] != "function") {
            return
        }

        actions[action]()
    }
}
