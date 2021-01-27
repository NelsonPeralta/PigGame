'use strict'

let PLAYER1_SCORE
let PLAYER1_ROLL_TOTAL
let PLAYER1_WINS
let PLAYER1_LOSSES

let PLAYER2_SCORE
let PLAYER2_ROLL_TOTAL
let PLAYER2_WINS
let PLAYER2_LOSSES

let DICE_IMAGE

let activePlayer = 1
let roll = 0

window.addEventListener('load', () => {
    PLAYER1_SCORE = document.getElementById('player1Score')
    PLAYER1_ROLL_TOTAL = document.getElementById('player1Roll')
    PLAYER1_WINS = document.getElementById('player1Wins')
    PLAYER1_LOSSES = document.getElementById('player1Losses')
    
    PLAYER2_SCORE = document.getElementById('player2Score')
    PLAYER2_ROLL_TOTAL = document.getElementById('player2Roll')
    PLAYER2_WINS = document.getElementById('player2Wins')
    PLAYER2_LOSSES = document.getElementById('player2Losses')

    DICE_IMAGE = document.getElementById('diceImage')
})

const NewGame = () => {
    
    if(parseInt(PLAYER1_SCORE.innerHTML) > parseInt(PLAYER2_SCORE.innerHTML))
    {
        PLAYER1_WINS.innerHTML = parseInt(PLAYER1_WINS.innerHTML) + 1
        PLAYER2_LOSSES.innerHTML = parseInt(PLAYER2_LOSSES.innerHTML) + 1
    }
    else if(parseInt(PLAYER1_SCORE.innerHTML) < parseInt(PLAYER2_SCORE.innerHTML))
    {
        PLAYER2_WINS.innerHTML = parseInt(PLAYER2_WINS.innerHTML) + 1
        PLAYER1_LOSSES.innerHTML = parseInt(PLAYER1_LOSSES.innerHTML) + 1
    }

    PLAYER1_SCORE.innerHTML = 0
    PLAYER1_ROLL_TOTAL.innerHTML = 0

    PLAYER2_SCORE.innerHTML = 0
    PLAYER2_ROLL_TOTAL.innerHTML = 0

    document.getElementById('player1Window').classList.add('player-active')
    document.getElementById('player2Window').classList.remove('player-active')
    activePlayer = 1

    DICE_IMAGE.setAttribute('src', '/Images/dice-1.png')
}

const RollDice = () => {
    DICE_IMAGE.setAttribute('src', '/Images/DiceRolling.gif')

    setTimeout(() => {
        roll = Math.ceil(Math.random() * 6)
        UpdateDiceImg(roll)

        if (roll != 1) {
            if (activePlayer == 1)
                PLAYER1_ROLL_TOTAL.innerHTML = parseInt(PLAYER1_ROLL_TOTAL.innerHTML) + roll
            else
                PLAYER2_ROLL_TOTAL.innerHTML = parseInt(PLAYER2_ROLL_TOTAL.innerHTML) + roll
        }
        else {
            if (activePlayer == 1)
                PLAYER1_ROLL_TOTAL.innerHTML = 0
            else
                PLAYER2_ROLL_TOTAL.innerHTML = 0
            ChangePlayer()
        }

    }, 1000)

}

const UpdateDiceImg = (nb) => DICE_IMAGE.setAttribute('src', `/Images/dice-${nb}.png`)

const HoldRoll = () => {
    if (activePlayer == 1 && PLAYER1_ROLL_TOTAL.innerHTML != '0') {
        PLAYER1_SCORE.innerHTML = parseInt(PLAYER1_SCORE.innerHTML) + parseInt(PLAYER1_ROLL_TOTAL.innerHTML)
        PLAYER1_ROLL_TOTAL.innerHTML = 0
        ChangePlayer()
    }
    else if(activePlayer == 2 && PLAYER2_ROLL_TOTAL.innerHTML != '0') {
        PLAYER2_SCORE.innerHTML = parseInt(PLAYER2_SCORE.innerHTML) + parseInt(PLAYER2_ROLL_TOTAL.innerHTML)
        PLAYER2_ROLL_TOTAL.innerHTML = 0
        ChangePlayer()
    }
}

const ChangePlayer = () => {
    if (activePlayer == 1) {
        document.getElementById('player1Window').classList.remove('player-active')
        document.getElementById('player2Window').classList.add('player-active')
        activePlayer = 2
    }
    else {
        document.getElementById('player1Window').classList.add('player-active')
        document.getElementById('player2Window').classList.remove('player-active')
        activePlayer = 1
    }
}