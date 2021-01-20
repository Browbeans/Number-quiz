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
        //this.element.appendChild(new StartPage().getElement());
        this.element.appendChild(new GamePage().getElement());
        
    }

    public updatePage(page: Component) {
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

class GamePage extends Component {

    constructor() {
        super();
        this.element.appendChild(new Header('right').getElement());
        this.element.appendChild(new InputField().getElement());
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

class InputField extends Component {

    constructor() {
        super();
        const input = document.createElement('INPUT');
        input.setAttribute('type', 'text');
        input.setAttribute('value', '');
        input.setAttribute('autofocus', 'autofocus');
        input.classList.add('player-input');
        input.classList.add('translate-middle');
        this.element.appendChild(input)
    }
}