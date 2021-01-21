// Game leader class
class GameLeader {
    
    constructor () {
        this.getNumber();
    }

    getNumber() {
        let inputSubmit = document.getElementById('submit')
    }

}

function handleInput(value: any) {
    
    console.log('randomNumber:')
    console.log(randomNumber)

    if(value < randomNumber){
        console.log('Less then my number')
    } else if(value == randomNumber){
        console.log('correct')
        
    }
    else {
        console.log('higher then my number')
    }
}

