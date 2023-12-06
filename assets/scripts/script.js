const nomePlayerPlacar = document.querySelector(".player-name")

const rockMove = document.querySelector(".rock")
const paperMove = document.querySelector(".paper")
const scissorsMove = document.querySelector(".scissors")
const result = document.querySelector(".result")

let playerChoose
let cpuChoose
let cpuRandom = 0

// window.onload = function() {

// setTimeout(2000)

// const nomePlayer = prompt ("Informe o nome do Jogador")

//     if (nomePlayer == "" || nomePlayer == null) {
     
//         nomePlayerPlacar.innerHTML = "Player"

//      } else {

//         nomePlayerPlacar.innerHTML = nomePlayer

//     }
// }

function playerMove() {

    let choose

    rockMove.addEventListener("click", () => {
        
        playerChoose = "rock"
        console.log (`Player : ${playerChoose}`)

        cpuMove()
        console.log (`CPU : ${cpuChoose}`)

    })

    paperMove.addEventListener("click", () => {

        playerChoose = "paper"
        console.log (`Player : ${playerChoose}`)

        cpuMove()
        console.log (`CPU : ${cpuChoose}`)

    })

    scissorsMove.addEventListener("click", () => {

        playerChoose = "scissors"
        console.log (`Player : ${playerChoose}`)

        cpuMove()
        console.log (`CPU : ${cpuChoose}`)

    })
    
}

function cpuMove() {

    cpuRandom = Math.ceil(Math.random() * 3)

    if (cpuRandom == 1) {

        cpuChoose = "rock"

    } else if (cpuRandom == 2) {

        cpuChoose = "paper"

    } else if (cpuRandom == 3) {

        cpuChoose = "scissors"

    }


}

function verifyRound() {

    playerMove()

    
    if (playerChoose == cpuChoose) {

        result.style.opacity = ("100%")
        result.innerHTML = "Rodada Empatada"

    } else if (playerChoose == "rock" && cpuChoose == "paper") {

        result.style.opacity = ("100%")
        result.innerHTML = "Você Perdeu !"

    } else if (playerChoose == "rock" && cpuChoose == "scissors") {

        result.style.opacity = ("100%")
        result.innerHTML = "Você Ganhou !"

    } else if (playerChoose == "paper" && cpuChoose == "rock") {

        result.style.opacity = ("100%")
        result.innerHTML = "Você Ganhou !"

    } else if (playerChoose == "paper" && cpuChoose == "scissors") {

        result.style.opacity = ("100%")
        result.innerHTML = "Você Perdeu !"

    } else if (playerChoose == "scissors" && cpuChoose == "rock") {

        result.style.opacity = ("100%")
        result.innerHTML = "Você Perdeu !"

    } else if (playerChoose == "scissors" && cpuChoose == "paper") {

        result.style.opacity = ("100%")
        result.innerHTML = "Você Ganhou !"

    }

}

verifyRound()

console.log (playerChoose)