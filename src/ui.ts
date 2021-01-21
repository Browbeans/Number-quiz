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
        this.element.appendChild(new Paragraph().getElement()); 
        this.element.appendChild(new Input().getElement()); 
        this.element.appendChild(new Button().getElement()); 
        
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

        const numberInput = new NumberInput().getElement(); 
        numberInput.classList.add('input-' + position);
        this.element.appendChild(numberInput);
        
        const submitInput = new SubmitInput().getElement(); 
        submitInput.classList.add('input-' + position);
        this.element.appendChild(submitInput);

    }
}

function updateInputValue() {
    const value = document.querySelector('input')?.value; 
    console.log(value)
}

class Button extends Component {
    protected element: HTMLButtonElement; 

    constructor() {
        super();
        this.element = document.createElement('button'); 
        this.element.classList.add('startButton')
        this.element.innerText = 'start quiz';
        this.element.addEventListener('click', updateInputValue) 
           
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
class NumberInput extends Component {
    protected element: HTMLElement

    constructor() {
        super(); 
        this.element = document.createElement('INPUT')
        this.element.setAttribute('type', 'number')
        this.element.setAttribute('value', '');
        this.element.setAttribute('autofocus', 'autofocus');
        //this.element.addEventListener('input', this.updateValue)
    }
}


function updateValue() {
    let value = document.querySelector('input')?.value;
    console.log(value);
    handleInput(value)
}
class SubmitInput extends Component {
    protected element: HTMLElement

    constructor() {
        super(); 
        this.element = document.createElement('BUTTON')
        this.element.setAttribute('type', 'submit')
        this.element.setAttribute('value', 'Submit');
        this.element.innerText = 'Submit'
        this.element.addEventListener('click', updateValue)
    }
}

