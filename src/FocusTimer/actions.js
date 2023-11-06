import state from './state.js'
import * as timer from './timer.js'
import * as cards from './cards.js'

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running')
    timer.countdown()
}

export function stop() {
    state.isRunning = false 
    document.documentElement.classList.remove('running')
    timer.updateDisplay()
}

export function increaseTime() {
    document.documentElement.classList.add(state.seconds += 1)

    if (state.seconds > 59) {
        state.seconds = 0;
        state.minutes += 1;
    }
    
    timer.updateDisplay() 
}

export function decreaseTime() {
    document.documentElement.classList.add(state.seconds -= 1)

    if (state.seconds < 0) {
        state.seconds = 59;
        state.minutes -= 1;

        if (state.minutes < 0) {
            state.minutes = 0;
            state.seconds = 0;
        }
    }

    timer.updateDisplay()
}

cards.toggleAudio()

