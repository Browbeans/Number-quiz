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
    public imgNotPlaying: HTMLImageElement;
    public imgPlaying: HTMLImageElement;

    constructor() {
        super('You');
        this.imgNotPlaying = new Image(80, 100);
        this.imgPlaying = new Image(80, 100);
        this.imgNotPlaying.src = 'assets/user.png';
        this.imgPlaying.src = 'assets/user-bg.png'
    }
    public isHuman(): boolean {
        return true;
    }
}

class BotPlayerDumb extends Player {
    public imgNotPlaying: HTMLImageElement;
    public imgPlaying: HTMLImageElement;

    constructor() {
        super('Drunk Denise');
        this.imgNotPlaying = new Image(80, 100);
        this.imgPlaying = new Image(80, 100);
        this.imgNotPlaying.src = 'assets/dumbot.png';
        this.imgPlaying.src = 'assets/dumbot-bg.png'
    }

    public makeGuess(): number {
        return Math.floor(Math.random() * 20) + 1;
    }
}

class BotPlayerSmart extends Player {
    public imgNotPlaying: HTMLImageElement;
    public imgPlaying: HTMLImageElement;

    constructor() {
        super('Mean Mike');
        this.imgNotPlaying = new Image(80, 100);
        this.imgPlaying = new Image(80, 100);
        this.imgNotPlaying.src = 'assets/smartbot.png';
        this.imgPlaying.src = 'assets/smartbot-bg.png'
    }
    public makeGuess(): number {
        return appState.highestLowerNumberGuessed + Math.floor(Math.random() * 
        (appState.lowestHighestNumberGuessed - appState.highestLowerNumberGuessed)) + 1;

    }
}