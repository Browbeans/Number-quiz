//game controller class, avgör vem som vinner etc..

class Game {
    private ui: UI;

    constructor() {
        this.ui = new UI();
        document.getElementById("app")?.appendChild(this.ui.getElement());
    }

}
