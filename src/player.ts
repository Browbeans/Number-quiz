//Player class

class Player {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }
    public isHuman() {
        return false;
    }
}

class HumanPlayer extends Player {
    public isHuman(): boolean {
        return true;
    }
}

class BotPlayer extends Player {
    public makeGuess(): number {
        return Math.floor(Math.random() * 20) + 1;
    }
}