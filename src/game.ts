//game controller class, avgör vem som vinner etc..
type GameState = 'Start' | 'Running' | 'GameOver'
class Game {
    private ui: UI;
    private gameLeader: GameLeader;
    public gameState: GameState; 
    constructor() {
        this.gameState = 'Start';
        this.ui = new UI(this.gameState);
        this.gameLeader = new GameLeader();
        document.getElementById("app")?.appendChild(this.ui.getElement());
        this.testGameStates(this.gameState, this.ui)
    }
    
    public testGameStates(gameState: GameState, ui: UI) {
        setTimeout(function(){ 
            gameState = 'Running';
            ui.appendChild(gameState);
            let appDiv = document.getElementById('app')
            appDiv?.innerText = '' 
        }, 3000);
    }
}
