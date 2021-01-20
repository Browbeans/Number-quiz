//game controller class, avgör vem som vinner etc..

class Game {
    private ui: UI;
    private gameLeader: GameLeader
    constructor() {
        this.ui = new UI();
        this.gameLeader = new GameLeader();
        document.getElementById("app")?.appendChild(this.ui.getElement());
    }

}
