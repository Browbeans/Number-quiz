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
        // All StartPage componants here...
        this.element.appendChild(new Paragraph().getElement()); 
        this.element.appendChild(new Input().getElement()); 
        this.element.appendChild(new Button().getElement()); 
        
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


class Button extends Component {
    protected element: HTMLButtonElement; 

    constructor() {
        super();
        this.element = document.createElement('button'); 
        this.element.classList.add('startButton')
        this.element.innerText = 'start quiz';
        this.element.onclick = function() {
            console.log('start quiz')
        }
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


