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
        this.element.appendChild(new Middle().getElement());
        this.element.appendChild(new Header('center').getElement());
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

class Middle extends Component {
    protected element: HTMLElement;
    
    constructor() {
        super();
        this.element = document.createElement('p');
        this.element.innerHTML = 'hejhej'
        
    }
}