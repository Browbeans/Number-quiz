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
        //this.element.appendChild(new StartPage().getElement());
        //this.element.appendChild(new PlayPage().getElement());
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
        this.element.appendChild(new IntroductionText().getElement());
        this.element.appendChild(new InstructionHeadline().getElement());
        this.element.appendChild(new InstructionText().getElement());
        // All StartPage componants here...
        this.element.appendChild(new Paragraph().getElement()); 
        this.element.appendChild(new Input().getElement()); 
        this.element.appendChild(new Button().getElement()); 
        
    }
}

class PlayPage extends Component {
    constructor () {
        super(); 
        this.element.appendChild(new Header('center').getElement());
        this.element.appendChild(new MiddleUser('bot').getElement());
        this.element.appendChild(new Footer().getElement());
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



class Button extends Component {
    protected element: HTMLButtonElement; 

    constructor() {
        super();
        this.element = document.createElement('button'); 
        this.element.classList.add('startButton')
        this.element.innerText = 'start quiz';
        this.element.addEventListener('click', () => {
            appState.playerName = document.querySelector('input')?.value; 
            appState.nextPage(new PlayPage());
            game.updateUI();
            window.localStorage.setItem('playerName', JSON.stringify(appState.playerName));
        });           
    }
}


class Input extends Component {
    protected element: HTMLInputElement | HTMLElement; 

    constructor() {
        super(); 
        this.element = document.createElement('input');
        this.element.setAttribute('type', 'text')
        this.element.classList.add('inputName'); 
    }
}
class Paragraph extends Component {
    protected element: HTMLParagraphElement; 

    constructor() {
        super(); 
        this.element = document.createElement('p'); 
        this.element.classList.add('para')
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
        this.element.classList.add('instructions'); 
        this.element.innerHTML = 'Instructions';
    }
}

class IntroductionText extends Component {
    protected element: HTMLElement;
    
    constructor() {
        const line1 = 'Hi and welcome to Crack The Number!';
        const line2 = 'To play the game you will need to log in and write your name. ';
        const line3 = 'You will now face your competitors: Drunk Denise and Smart Steve. ';
        const line4 = 'Denise has been hitting the bottle hard in lockdown while Smart Steve has been playing ';
        const line5 = 'chess and reading a lot.';
        super();
        this.element = document.createElement('p');
        this.element.classList.add('instructions');
        this.element.innerHTML =  line1 + ' ' + line2 + ' ' + line3 + ' ' + line4 + ' ' + line5;

    }
}

class InstructionHeadline extends Component {
    protected element: HTMLElement;
    
    constructor() {
        super();
        this.element = document.createElement('h4');
        this.element.classList.add('instructions');
        this.element.innerHTML = 'So, how to play?';

    }
}

class InstructionText extends Component {
    protected element: HTMLParagraphElement;

    constructor() {
        const line1 = 'The game leader asks you to guess a number between 1 and 20. You have got 5 seconds to ';
        const line2 = 'write it down in the text box. You will then get a ‘higher’ or ‘lower’ answer. Drunk Denise and ';
        const line3 = 'Smart Steve will also guess. The first person that guesses the correct number wins! ';
        super();
        this.element = document.createElement('p');
        this.element.classList.add('instructions');
        this.element.innerHTML =  line1 + ' ' + line2 + ' ' + line3;
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
    }
}


// function updateValue() {
//     let value = document.querySelector('input')?.value;
//     console.log(value);
//     handleInput(value)
//}
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
            game.handleUserGuess(value);
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
        const avatars = ['user-bg.png', 'dumbot.png', 'smartbot.png'];
        const span = document.createElement('span');
        span.innerText = appState.playerName;
        this.element.appendChild(span);

        for (const avatar of avatars) {
            let image = new Image(80, 100);
            image.src = 'assets/' + avatar;
            this.element.appendChild(image);
        }
    }
}