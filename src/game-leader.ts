// Game leader class
class GameLeader {
    constructor () {

    }

    startGame() {
        appState.correctNumber = Math.floor(Math.random() * 20) + 1;
    }

    public handleUserGuess(value: number) {
        console.log(value);
        appState.makeGuess(value);

        
       
        this.nextPlayer();
    }

    private async nextPlayer() {

        if (appState.numberGuessed === appState.correctNumber) {
            appState.nextPage(new EndPage());
            game.updateUI();
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
            appState.nextPage(new PlayPage());
            game.updateUI();
            await sleep(3000);
            this.nextPlayer();
        }
    }
    
}

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

// function handleInput(value: any) {
    
//     console.log('appState.correctNumber:')
//     console.log(appState.correctNumber)

// }

