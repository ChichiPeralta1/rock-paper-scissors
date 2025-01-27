const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const computerScoreP = document.querySelector("#computer-score")
const humanScoreP = document.querySelector("#human-score")
const winnerP = document.querySelector("#winner")
const computerChoiceP = document.querySelector('#computer-choice')
const humanChoiceP = document.querySelector("#human-choice")
let humanChoice = ''
let machine_score = 0
let human_score = 0


rockButton.addEventListener('click', () => {
    humanChoice ='rock'
    main_game_loop()
})

paperButton.addEventListener('click', () => {
    humanChoice ='paper'
    main_game_loop()
})

scissorsButton.addEventListener('click', () => {
    humanChoice ='scissors'
    main_game_loop()
})

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  

function computer_choice(){

    let random_number = randomIntFromInterval(1,3)

    if (random_number == 1){
        return 'rock'
    }else if(random_number == 2){
        return 'paper'
    }else{
        return 'scissors'
    }

}  

//function human_choice(answer){

    //console.log('el valor que viene en human choice es ' + answer)
    //return answer

//}

function play_round(compChoice, humChoice){

    if(humChoice == compChoice){
        console.log('Empate')
    } else if(humChoice == 'rock' && compChoice == 'scissors'){
        human_score = human_score + 1 
        humanScoreP.textContent = human_score
        console.log('Punto para el humano')
    } else if((humChoice == 'paper' && compChoice == 'rock')){
        human_score = human_score + 1
        humanScoreP.textContent = human_score
        console.log('Punto para el humano')
    } else if(humChoice == 'scissors' && compChoice == 'paper'){
        human_score = human_score + 1
        humanScoreP.textContent = human_score
        console.log('Punto para el humano')
    } else{
        machine_score = machine_score +1 
        computerScoreP.textContent = machine_score
        console.log('Punto para la maquina')
    }

    computerChoiceP.textContent = compChoice;
    humanChoiceP.textContent = humChoice
    
    

}

function main_game_loop(){
    
    
        if(machine_score == 3 || human_score == 3){
            flag = false
        }else{
            play_round(computer_choice(), humanChoice) // aca se llama a human choice originalmente como segund oparametro

            console.log('Machine score ' + machine_score)
            console.log('Human score ' + human_score)
            console.log('-')

            if(machine_score == 3){
                winnerP.textContent = 'The machine win'
            } else if(human_score == 3){
                winnerP.textContent = 'The human win'
            }
        }

    
}



