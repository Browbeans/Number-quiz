class Component {
    protected element: HTMLElement;

    constructor() {
        this.element = document.createElement('div');
    }

    public getElement(): HTMLElement {
        return this.element;
    }
}


class UI extends Component {
    constructor() {
        super();
        this.element.appendChild(appState.currentPage.getElement());
    }

    public updatePage(page: Component) {
        this.element.appendChild(page.getElement());
        this.element.appendChild(page.getElement());
    }
}

class StartPage extends Component {
    constructor() {
        super();
        this.element.appendChild(new Header('center').getElement());
        this.element.appendChild(new IntroductionHeadline().getElement());
        this.element.appendChild(new InstructionText().getElement());
        this.element.appendChild(new Paragraph().getElement());
        this.element.appendChild(new Input().getElement());
        this.element.appendChild(new Button().getElement());
    }
}

class PlayPage extends Component {
    constructor() {
        super();
        this.element.appendChild(new Header('center').getElement());
        if (appState.isHumanPlayer()) {
            this.element.appendChild(new MiddleUser('bot').getElement());
            this.element.appendChild(new Timer().getElement());
        } else {
            this.element.appendChild(new MiddleBot().getElement());
        }
        this.element.appendChild(new Footer().getElement());
    }
}

class EndPage extends Component {
    private playerNames: any;

    constructor() {
        super();

        this.element.appendChild(new Header('center').getElement());
        const winnerText = document.createElement('h2');
        winnerText.classList.add('winner-text');
        winnerText.innerText = 'The winner is: ' + appState.playerGuessedName + '!';
        this.element.appendChild(winnerText);
        const playerGuess = document.createElement('p')
        playerGuess.innerText = 'Finished with' + ' ' + JSON.stringify(appState.playerGuess()) + ' ' + 'guesses'
        playerGuess.classList.add('guess-text')
        this.element.appendChild(playerGuess)

        
        const restartButton = document.createElement('button')
        this.element.appendChild(restartButton)
        restartButton.innerText = 'Restart Game'
        restartButton.classList.add('restartButton')
        restartButton.addEventListener('click', () => {
            location.reload();
            game.updateUI();
        })
        const highscoreHeadline = document.createElement('h4');
        this.element.appendChild(highscoreHeadline);
        highscoreHeadline.classList.add('highscoreHeadline');
        highscoreHeadline.innerHTML = 'Highscore:';
        
        const highscoreEl = document.createElement('div');
        highscoreEl.classList.add('highscore-list');
        const highscore = JSON.parse(localStorage.getItem('highscore') || '{}');

        
        let entries = Object.entries(highscore);
        const sorted = entries.sort((a: any, b: any) => b[1] - a[1]);
        
        let name;
        let score;
        for ([name, score] of sorted) {
            const pEl = document.createElement('p');
            pEl.innerText = name + ' ' + score + ' ' + 'wins';
            highscoreEl.appendChild(pEl);
        }
        this.element.appendChild(highscoreEl);

    }
}


class Header extends Component {
    constructor(position: string) {
        super();
        const logo = new Logo().getElement();
        logo.classList.add('logo-' + position);
        this.element.appendChild(logo);
    }
}

class Logo extends Component {
    protected element: HTMLImageElement;

    constructor() {
        super();
        this.element = new Image(200, 200);
        this.element.src = 'assets/logo.png';
    }
}

class MiddleUser extends Component {

    constructor(position: string) {
        super();
        const numberQuestion = new NumberQuestion().getElement();
        numberQuestion.classList.add('input-' + position);
        this.element.appendChild(numberQuestion);

        const numberInput = new NumberInput().getElement();
        numberInput.classList.add('input-' + position);
        this.element.appendChild(numberInput);

        const submitInput = new SubmitInput().getElement();
        submitInput.classList.add('input-' + position);
        this.element.appendChild(submitInput);

    }
}

class MiddleBot extends Component {
    constructor() {
        super();
        const nameEl = document.createElement('h4');
        nameEl.innerText = appState.playerGuessedName + '\xa0';

        const numberGuessedEl = document.createElement('h4');
        numberGuessedEl.classList.add('bold-h4');
        numberGuessedEl.innerText = appState.numberGuessed + '\xa0';
 
        const higherLowerAnswerEl = document.createElement('h4');
        const text = appState.numberGuessed < appState.correctNumber ? '– Higher' : '– Lower';
        higherLowerAnswerEl.innerText = text;

        this.element.classList.add('playing-answer');
        this.element.appendChild(nameEl);
        this.element.appendChild(numberGuessedEl);
        this.element.appendChild(higherLowerAnswerEl);
    }
}

class Button extends Component {
    protected element: HTMLButtonElement;

    constructor() {
        super();
        this.element = document.createElement('button'); 
        this.element.classList.add('startButton', 'fade-in')
        this.element.innerText = 'start quiz';
        this.element.addEventListener('click', () => {
            let playerName = document.querySelector('input')?.value;
            let nameList = JSON.parse(localStorage.getItem('playerNames') || '[]');
            nameList.push(playerName);
            localStorage.setItem('playerNames', JSON.stringify(nameList));
            appState.nextPage(new PlayPage());
            game.updateUI();
        });
    }
}


class Input extends Component {
    protected element: HTMLInputElement | HTMLElement;

    constructor() {
        super();
        this.element = document.createElement('input');
        this.element.setAttribute('type', 'text')
        this.element.classList.add('inputName', 'fade-in'); 
    }
}
class Paragraph extends Component {
    protected element: HTMLParagraphElement;

    constructor() {
        super(); 
        this.element = document.createElement('p'); 
        this.element.classList.add('para', 'fade-in')
        this.element.innerText = 'Enter your name:'; 
    }
}


class NumberQuestion extends Component {
    protected element: HTMLElement;

    constructor() {
        super();
        this.element = document.createElement('P');
        this.element.innerHTML = 'Pick a number between 1 and 20';
    }
}


class IntroductionHeadline extends Component {
    protected element: HTMLParagraphElement;

    constructor() {
        super();
        this.element = document.createElement('h1');
        this.element.classList.add('instructions', 'fade-in'); 
        this.element.innerHTML = 'Instructions';
    }
}
class InstructionText extends Component {
    protected element: HTMLParagraphElement;

    constructor() {
        const line1 = 'Hi and welcome to Crack the Number! You will guess a number from 1 to 20. ';
        const line2 = 'When you’ve made your guess, the game leader will tell you if the secret number is higher or ';
        const line3 = 'lower than your guess. You’ve got 5 seconds to guess, after 5 seconds the turn goes to ';
        const line4 = 'Drunk Denise and thereafter Mean Mike. Good luck!';
        super();
        this.element = document.createElement('p');
        this.element.classList.add('instructions', 'fade-in');
        this.element.innerHTML =  line1 + ' ' + line2 + ' ' + line3 + ' ' + line4;
    }
}

class Timer extends Component {
    protected element: HTMLElement

    constructor() {
        super();
         
        this.element = document.createElement('p');
        this.element.innerText = JSON.stringify(5);
        this.element.classList.add('timer-paragraph', "fixed-top"); 
        this.countDown(this.element) 
    }
    
    public countDown(element: HTMLElement) {
    
        let number = 5;
        let interval = setInterval(function() {   
            number -= 1; 
            if(appState.currentPlayerIndex != 0){
                clearInterval(interval);
                game.updateUI();
            }else if(number == 0) {
                clearInterval(interval)
                game.handleUserGuess(0)
                game.updateUI()
            } else if(appState.currentPage instanceof EndPage) {
                clearInterval(interval);
            }
            element.innerText = ''
            element.innerText = JSON.stringify(number);
        }, 1000);
    }
}

class NumberInput extends Component {
    protected element: HTMLElement

    constructor() {
        super();
        this.element = document.createElement('INPUT')
        this.element.setAttribute('type', 'number')
        this.element.setAttribute('value', '');
        this.element.setAttribute('autofocus', 'autofocus');
        this.element.classList.add('input-number');
    }
}

class SubmitInput extends Component {
    protected element: HTMLElement

    constructor() {
        super();
        this.element = document.createElement('BUTTON')
        this.element.setAttribute('type', 'submit')
        this.element.setAttribute('value', 'Submit');
        this.element.innerText = 'Submit'
        this.element.classList.add('startButton');
        this.element.addEventListener('click', () => {
            let value = document.querySelector('input')?.value;
            game.handleUserGuess(Number(value));
             
        })
    }
}

class Footer extends Component {
    protected element: HTMLElement;

    constructor() {
        super();
        this.element = document.createElement('div');
        const userIcon = new PlayerIcons().getElement();

        const playNow = document.createElement('p');
        playNow.classList.add('p-playing-now')
        playNow.innerText = 'Playing Now:';
        this.element.appendChild(playNow);
        this.element.appendChild(userIcon);
    }
}

class PlayerIcons extends Component {
    constructor() {
        super();
        this.element.classList.add('avatars');

        for (const player of appState.players) {
            if (appState.getCurrentPlayer() === player) {
                this.element.appendChild(player.imgPlaying);
            } else {
                this.element.appendChild(player.imgNotPlaying);
            }
        }
    }
}