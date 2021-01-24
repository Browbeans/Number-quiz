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
    public currentPage: Component;
    public playerName: string;
    public numberGuessed: number;
    public correctNumber: number;

    constructor() {
        this.players = [];
        this.currentPage = new StartPage();
        this.playerName = '';
        this.numberGuessed = 0;
        this.correctNumber = 0;
    }

    public nextPage(page: Component) {
        this.currentPage = page;
    }

    public addPlayer(player: Player) {
        this.players.push(player);
    }
}