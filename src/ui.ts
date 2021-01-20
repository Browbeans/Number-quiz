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
        this.element.appendChild(new StartPage().getElement());

    }

    public updatePage(page: Component) {
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
        this.element = new Image(250, 250);
        this.element.src = 'assets/logo.png';
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