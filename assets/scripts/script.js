const nomePlayerPlacar = document.querySelector(".player-name")

const rockMove = document.querySelector(".rock")
const paperMove = document.querySelector(".paper")
const scissorsMove = document.querySelector(".scissors")
const result = document.querySelector(".result")

const rockPlayerChoose = document.querySelector(".rock-player-choose")
const paperPlayerChoose = document.querySelector(".paper-player-choose")
const scissorsPlayerChoose = document.querySelector(".scissors-player-choose")
const rockCpuChoose = document.querySelector(".rock-cpu-choose")
const paperCpuChoose = document.querySelector(".paper-cpu-choose")
const scissorsCpuChoose = document.querySelector(".scissors-cpu-choose")

const playerScoreText = document.querySelector(".p-score")
const cpuScoreText = document.querySelector(".pc-score")
const restartGame = document.querySelector(".reset-game")

let playerScore = 0
let cpuScore = 0
let victory

let nomePlayer
let playerChoose
let cpuChoose
let cpuRandom = 0

window.onload = function() {

setTimeout(2000)

    nomePlayer = prompt ("Informe o nome do Jogador")

    if (nomePlayer == "" || nomePlayer == null) {
     
        nomePlayerPlacar.innerHTML = "Player"

     } else {

        nomePlayerPlacar.innerHTML = nomePlayer

    }
}

function playerMove() {

    rockMove.addEventListener("click", () => {
        
        playerChoose = "rock"

        cpuMove()
        verifyRound()
        updateScore()
    })

    paperMove.addEventListener("click", () => {

        playerChoose = "paper"

        cpuMove()
        verifyRound()
        updateScore()
    })

    scissorsMove.addEventListener("click", () => {

        playerChoose = "scissors"

        cpuMove()
        verifyRound()
        updateScore()
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

    
    resetBoard()

    if (playerChoose == "rock" && cpuChoose == "rock") {

        result.style.opacity = ("100%")
        result.innerHTML = "Rodada Empatada"
        victory = "draw"
        rockPlayerChoose.innerHTML = nomePlayer
        rockPlayerChoose.style.opacity = ("100%")
        rockCpuChoose.style.opacity = ("100%")

    } else if (playerChoose == "paper" && cpuChoose == "paper") {

        result.style.opacity = ("100%")
        result.innerHTML = "Rodada Empatada"
        victory = "draw"
        paperPlayerChoose.innerHTML = nomePlayer
        paperPlayerChoose.style.opacity = ("100%")
        paperCpuChoose.style.opacity = ("100%")

    } else if (playerChoose == "scissors" && cpuChoose == "scissors") {

        result.style.opacity = ("100%")
        result.innerHTML = "Rodada Empatada"
        victory = "draw"
        scissorsPlayerChoose.innerHTML = nomePlayer
        scissorsPlayerChoose.style.opacity = ("100%")
        scissorsCpuChoose.style.opacity = ("100%")

    } else if (playerChoose == "rock" && cpuChoose == "paper") {

        result.style.opacity = ("100%")
        result.innerHTML = "Você Perdeu !"
        victory = "cpu"
        rockPlayerChoose.innerHTML = nomePlayer
        rockPlayerChoose.style.opacity = ("100%")
        paperCpuChoose.style.opacity = ("100%")

    } else if (playerChoose == "rock" && cpuChoose == "scissors") {

        result.style.opacity = ("100%")
        result.innerHTML = "Você Ganhou !"
        victory = "player"
        rockPlayerChoose.innerHTML = nomePlayer
        rockPlayerChoose.style.opacity = ("100%")
        scissorsCpuChoose.style.opacity = ("100%")

    } else if (playerChoose == "paper" && cpuChoose == "rock") {

        result.style.opacity = ("100%")
        result.innerHTML = "Você Ganhou !"
        victory = "player"
        paperPlayerChoose.innerHTML = nomePlayer
        paperPlayerChoose.style.opacity = ("100%")
        rockCpuChoose.style.opacity = ("100%")

    } else if (playerChoose == "paper" && cpuChoose == "scissors") {

        result.style.opacity = ("100%")
        result.innerHTML = "Você Perdeu !"
        victory = "cpu"
        paperPlayerChoose.innerHTML = nomePlayer
        paperPlayerChoose.style.opacity = ("100%")
        scissorsCpuChoose.style.opacity = ("100%")

    } else if (playerChoose == "scissors" && cpuChoose == "rock") {

        result.style.opacity = ("100%")
        result.innerHTML = "Você Perdeu !"
        victory = "cpu"
        scissorsPlayerChoose.innerHTML = nomePlayer
        scissorsPlayerChoose.style.opacity = ("100%")
        rockCpuChoose.style.opacity = ("100%")

    } else if (playerChoose == "scissors" && cpuChoose == "paper") {

        result.style.opacity = ("100%")
        result.innerHTML = "Você Ganhou !"
        victory = "player"
        scissorsPlayerChoose.innerHTML = nomePlayer
        scissorsPlayerChoose.style.opacity = ("100%")
        paperCpuChoose.style.opacity = ("100%")

    }

}

function updateScore() {

    if (victory == "player") {

        playerScore += 1
        playerScoreText.innerHTML = playerScore

    } else if (victory == "cpu") {

        cpuScore += 1
        cpuScoreText.innerHTML = cpuScore

    } else if (victory == "draw") {

        playerScore += 0
        playerScoreText.innerHTML = playerScore
        cpuScore += 0
        cpuScoreText.innerHTML = cpuScore

    }

}

function resetBoard() {

    rockPlayerChoose.style.opacity = ("0%")
    paperPlayerChoose.style.opacity = ("0%")
    scissorsPlayerChoose.style.opacity = ("0%")
    rockCpuChoose.style.opacity = ("0%")
    paperCpuChoose.style.opacity = ("0%")
    scissorsCpuChoose.style.opacity = ("0%")

}

function resetGame() {

    resetBoard()

    playerScore = 0
    playerScoreText.innerHTML = playerScore
    cpuScore = 0
    cpuScoreText.innerHTML = cpuScore

}

playerMove()
restartGame.addEventListener("click", resetGame)