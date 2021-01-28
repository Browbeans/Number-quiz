// Global variables
let game: any;
let appState: any;

window.addEventListener('load', init);

function init() {
    appState = new AppState();
    game = new Game();
}

//All data som uppdateras i spelet kan hållas i denna.
class AppState {
    public players: Player[];
    public currentPlayerIndex: number;
    public currentPage: Component;
    public playerGuessedName: string;
    public numberGuessed: number;
    public correctNumber: number;
    public win: boolean;
    public highestLowerNumberGuessed: number;
    public lowestHighestNumberGuessed: number;
    public playerGuesses: number;

    constructor() {
        this.players = [];
        this.currentPlayerIndex = 0;
        this.currentPage = new StartPage();
        this.playerGuessedName = '';
        this.numberGuessed = 0;
        this.correctNumber = 0;
        this.win = false;
        this.highestLowerNumberGuessed = 0;
        this.lowestHighestNumberGuessed = 20;
        this.playerGuesses = 0; 
    }

    public nextPage(page: Component) {
        this.currentPage = page;
    }

    public addPlayer(player: Player) {
        this.players.push(player);
    }

    public isHumanPlayer(): boolean {
        return this.players[this.currentPlayerIndex] instanceof HumanPlayer;
    }

    public getCurrentPlayer(): Player {
        return this.players[this.currentPlayerIndex];
    }

    public getLastPlayer(): Player {
        const index = this.currentPlayerIndex ? this.currentPlayerIndex - 1 : this.players.length - 1;
        return this.players[index];
    }

    public nextPlayer(): Player {
        appState.currentPlayerIndex = (appState.currentPlayerIndex + 1) % appState.players.length;
        return this.getCurrentPlayer();
    }

    public makeGuess(value: number) {
        this.numberGuessed = value;
        this.playerGuessedName = this.getCurrentPlayer().name;
        if (this.numberGuessed < this.correctNumber && this.numberGuessed > this.highestLowerNumberGuessed) {
            this.highestLowerNumberGuessed = this.numberGuessed;
        } else if (this.numberGuessed > this.correctNumber && this.numberGuessed < this.lowestHighestNumberGuessed) {
            this.lowestHighestNumberGuessed = this.numberGuessed;
        }        
    }

    public addGuessToPlayer() {
        this.playerGuesses += 1; 
        return this.playerGuesses
    }

    public playerGuess() {
        return this.playerGuesses
    }
}