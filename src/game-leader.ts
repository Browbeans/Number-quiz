// Game leader class
class GameLeader {


    constructor () {
        this.getNumber();
    }

    getNumber() {
        let inputSubmit = document.getElementById('submit')
    }

    startGame() {
        appState.correctNumber = Math.floor(Math.random() * 20) + 1;
    }

    public handleUserGuess(value: number) {
        console.log(value);
        appState.numberGuessed = value;

        if (value < appState.correctNumber){
            console.log('Less then my number')
        } else if (value == appState.correctNumber){
            console.log('correct')
        }
        else {
            console.log('higher then my number')
        }
    }
}

// function handleInput(value: any) {
    
//     console.log('appState.correctNumber:')
//     console.log(appState.correctNumber)

// }

