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
     
        nomePlayer = "Player"
        nomePlayerPlacar.innerHTML = nomePlayer

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
        rockPlayerChoose.style.opacity = ("100%")
        rockPlayerChoose.innerHTML = nomePlayer
        rockCpuChoose.style.opacity = ("100%")

    } else if (playerChoose == "paper" && cpuChoose == "paper") {

        result.style.opacity = ("100%")
        result.innerHTML = "Rodada Empatada"
        victory = "draw"
        paperPlayerChoose.style.opacity = ("100%")
        paperPlayerChoose.innerHTML = nomePlayer
        paperCpuChoose.style.opacity = ("100%")

    } else if (playerChoose == "scissors" && cpuChoose == "scissors") {

        result.style.opacity = ("100%")
        result.innerHTML = "Rodada Empatada"
        victory = "draw"
        scissorsPlayerChoose.style.opacity = ("100%")
        scissorsPlayerChoose.innerHTML = nomePlayer
        scissorsCpuChoose.style.opacity = ("100%")

    } else if (playerChoose == "rock" && cpuChoose == "paper") {

        result.style.opacity = ("100%")
        result.innerHTML = "Você Perdeu !"
        victory = "cpu"
        rockPlayerChoose.style.opacity = ("100%")
        rockPlayerChoose.innerHTML = nomePlayer
        paperCpuChoose.style.opacity = ("100%")

    } else if (playerChoose == "rock" && cpuChoose == "scissors") {

        result.style.opacity = ("100%")
        result.innerHTML = "Você Ganhou !"
        victory = "player"
        rockPlayerChoose.style.opacity = ("100%")
        rockPlayerChoose.innerHTML = nomePlayer
        scissorsCpuChoose.style.opacity = ("100%")

    } else if (playerChoose == "paper" && cpuChoose == "rock") {

        result.style.opacity = ("100%")
        result.innerHTML = "Você Ganhou !"
        victory = "player"
        paperPlayerChoose.style.opacity = ("100%")
        paperPlayerChoose.innerHTML = nomePlayer
        rockCpuChoose.style.opacity = ("100%")

    } else if (playerChoose == "paper" && cpuChoose == "scissors") {

        result.style.opacity = ("100%")
        result.innerHTML = "Você Perdeu !"
        victory = "cpu"
        paperPlayerChoose.style.opacity = ("100%")
        paperPlayerChoose.innerHTML = nomePlayer
        scissorsCpuChoose.style.opacity = ("100%")

    } else if (playerChoose == "scissors" && cpuChoose == "rock") {

        result.style.opacity = ("100%")
        result.innerHTML = "Você Perdeu !"
        victory = "cpu"
        scissorsPlayerChoose.style.opacity = ("100%")
        scissorsPlayerChoose.innerHTML = nomePlayer
        rockCpuChoose.style.opacity = ("100%")

    } else if (playerChoose == "scissors" && cpuChoose == "paper") {

        result.style.opacity = ("100%")
        result.innerHTML = "Você Ganhou !"
        victory = "player"
        scissorsPlayerChoose.style.opacity = ("100%")
        scissorsPlayerChoose.innerHTML = nomePlayer
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

    result.innerHTML = ""

}

playerMove()
restartGame.addEventListener("click", resetGame)