// Game leader class
class GameLeader {


    constructor () {

    }

    startGame() {
        appState.correctNumber = Math.floor(Math.random() * 3) + 1;
    }

    public handleUserGuess(value: number) {
        appState.makeGuess(value);
        this.nextPlayer();
    }

    public async nextPlayer() {
        
        
        if (appState.numberGuessed === appState.correctNumber) {
            appState.nextPage(new EndPage());
            game.updateUI();
            appState.updateHighscore(appState.getCurrentPlayer());
            return;
        }

        const nextPlayer = appState.nextPlayer();

        appState.nextPage(new PlayPage());
        game.updateUI();
        
        if (appState.getLastPlayer().isHuman()) {
            await sleep(3000);
        }

        if (!nextPlayer.isHuman()) {
            const botPlayer = nextPlayer;
            appState.makeGuess(botPlayer.makeGuess());
            if (appState.numberGuessed !== appState.correctNumber) {
                appState.nextPage(new PlayPage());
                game.updateUI();
                await sleep(3000);
            }
            this.nextPlayer();
        }
    }   
}

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }