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

class BotPlayerDumb extends Player {
    //bild ikon
    public makeGuess(): number {
        return Math.floor(Math.random() * 20) + 1;
    }
}

class BotPlayerSmart extends Player {
    //bild ikon
    public makeGuess(): number {
        return appState.highestLowerNumberGuessed + Math.floor(Math.random() * 
        (appState.lowestHighestNumberGuessed - appState.highestLowerNumberGuessed)) + 1;

    }
}