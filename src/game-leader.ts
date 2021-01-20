// Game leader class
class GameLeader {
    private randomNumber: number
    
    constructor () {
        this.randomNumber = 0
        this.generateRandomNumber();
        this.getNumber();
    }

    getNumber() {
        let inputSubmit = document.getElementById('submit')
    }

    generateRandomNumber() {
        this.randomNumber = Math.floor(Math.random() * 20) + 1
        console.log(this.randomNumber); 
    }

    handleInput(userInput: number | string) {
        if(userInput < this.randomNumber){
    
        } else if(userInput == this.randomNumber){
       
        }
        else {
            
        }
    }
}

