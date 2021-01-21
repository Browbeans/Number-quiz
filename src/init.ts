// Global variables
let game: any;
let randomNumber = Math.floor(Math.random() * 20) + 1;
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

    constructor() {
        this.players = [];
        this.currentPage = new StartPage();
        this.playerName = '';
    }

    public nextPage(page: Component) {
        this.currentPage = page;
    }

    public addPlayer(player: Player) {
        this.players.push(player);
    }
}