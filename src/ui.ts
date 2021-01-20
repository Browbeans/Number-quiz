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
        this.element.appendChild(new PlayPage().getElement());
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
        // All StartPage componants here...
    }
}

class PlayPage extends Component {
    constructor () {
        super(); 
        this.element.appendChild(new Middle('bot').getElement());
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

class Middle extends Component {
    
    constructor(position: string) {
        super(); 
        const numberQuestion = new NumberQuestion().getElement();
        numberQuestion.classList.add('input-' + position);
        this.element.appendChild(numberQuestion);
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


