const audioOne = new Audio('./assets/audio/tree.wav')
const audioTwo = new Audio('./assets/audio/rain.wav')
const audioThree = new Audio('./assets/audio/shop.wav')
const audioFour = new Audio('./assets/audio/bonfire.wav')

const audioElements = [audioOne, audioTwo, audioThree, audioFour];

const cardButtons = document.querySelectorAll('.card-button');

cardButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        toggleAudio(index);
    });
});

export function toggleAudio(cardIndex) {
    const audio = audioElements[cardIndex];
    
    if (audio && typeof audio.paused !== 'undefined') {
        if (audio.paused) {
            audio.play();
            
            audioElements.forEach((otherAudio, index) => {
                if (index !== cardIndex && !otherAudio.paused) {
                    otherAudio.pause();
                }
            });
        } else {
            audio.pause();
        }
    }
}


