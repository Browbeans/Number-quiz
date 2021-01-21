//game controller class, avgör vem som vinner etc..

class Game {
    private ui: UI;
    private gameLeader: GameLeader
    constructor() {
        this.ui = new UI();
        this.gameLeader = new GameLeader();
        document.getElementById("app")?.appendChild(this.ui.getElement());
    }

    public updateUI() {
        this.ui = new UI();
        const appDiv = document.getElementById("app");
        
        if (appDiv) {
            appDiv.innerHTML = '';
            appDiv.appendChild(this.ui.getElement());
        }
    }
}
