// Global variables
let game;
let randomNumber = Math.floor(Math.random() * 20) + 1;

window.addEventListener('load', init);

function init() {
    game = new Game();
}