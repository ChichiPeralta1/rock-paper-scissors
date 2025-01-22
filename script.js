let machine_score = 0
let human_score = 0

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

function human_choice(){

    let answer = prompt('Choose: rock - paper - scissors')
    return answer

}

function play_round(compChoice, humChoice){

    if(humChoice == compChoice){
        console.log('Empate')
    } else if(humChoice == 'rock' && compChoice == 'scissors'){
        human_score = human_score + 1 
        console.log('Punto para el humano')
    } else if((humChoice == 'paper' && compChoice == 'rock')){
        human_score = human_score + 1
        console.log('Punto para el humano')
    } else if(humChoice == 'scissors' && compChoice == 'paper'){
        human_score = human_score + 1
        console.log('Punto para el humano')
    } else{
        machine_score = machine_score +1 
        console.log('Punto para la maquina')
    }
    
    console.log('Computer choice: '+ compChoice)
    console.log('Human choice: '+ humChoice)
    console.log('-')

}

function main_game_loop(){
    
    let flag = true

    
    while(flag){

        if(machine_score == 3 || human_score == 3){
            flag = false
        }else{
            play_round(computer_choice(), human_choice())

            console.log('Machine score ' + machine_score)
            console.log('Human score ' + human_score)
            console.log('-')

            if(machine_score == 3){
                console.log('Gano la maquina')
            } else if(human_score == 3){
                console.log('Gano el humano')
            }
        }

    }
}


main_game_loop()