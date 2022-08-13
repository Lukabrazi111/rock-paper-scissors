let myScore = 0;
let me;
let opponentScore = 0;
let opponent;

let choices = ['rock', 'paper', 'scissors'];

document.addEventListener('DOMContentLoaded', startGame);

function startGame() {
    for (let i = 0; i < choices.length; i++) {
        const choiceImg = document.createElement('img');
        choiceImg.id = choices[i];
        choiceImg.src = choices[i] + '.png';
        document.getElementById('choices').append(choiceImg);
        choiceImg.addEventListener('click', selectChoice);
    }
}

function ifExistsChoice(element, choice, image) {
    if (element.firstElementChild) {
        return (element.firstElementChild.src = choice + '.png');
    }

    return element.append(image);
}

function selectChoice(e) {
    me = e.target.id;

    const myImage = document.createElement('img');
    myImage.id = me;
    myImage.src = me + '.png';

    ifExistsChoice(document.getElementById('my-choice'), me, myImage);

    opponent = choices[Math.floor(Math.random() * 3)];

    const opponentImage = document.createElement('img');
    opponentImage.id = opponent;
    opponentImage.src = opponent + '.png';

    ifExistsChoice(
        document.getElementById('opponent-choice'),
        opponent,
        opponentImage
    );

    selectedWinner(me, opponent);
}

function selectedWinner(me, opponent) {
    if (me === 'paper') {
        if (opponent === 'paper') {
            myScore += 1;
            opponentScore += 1;
        } else if (opponent === 'scissors') {
            opponentScore += 1;
        } else if (opponent === 'rock') {
            myScore += 1;
        }
    }

    if (me === 'rock') {
        if (opponent === 'paper') {
            opponentScore += 1;
        } else if (opponent === 'scissors') {
            myScore += 1;
        } else if (opponent === 'rock') {
            myScore += 1;
            opponentScore += 1;
        }
    }

    if (me === 'scissors') {
        if (opponent === 'paper') {
            myScore += 1;
        } else if (opponent === 'scissors') {
            myScore += 1;
            opponentScore += 1;
        } else if (opponent === 'rock') {
            opponentScore += 1;
        }
    }

    document.getElementById('opponent-score').innerText = opponentScore;
    document.getElementById('my-score').innerText = myScore;

    winner();
}

function winner() {
    let me = document.getElementById('my-score');
    let opponent = document.getElementById('opponent-score');

    if (+me.innerText === 10) {
        alert('You win!');
        clearScore(me, opponent);
    } else if (+opponent.innerText === 10) {
        alert('You lose!');
        clearScore(me, opponent);
    } else if (+me.innerText === 10 && +opponent.innerText === 10) {
        alert('draw');
        clearScore(me, opponent);
    }

    return {
        myScore,
        opponentScore,
    };
}

function clearScore(me, opponent) {
    me.innerText = '0';
    opponent.innerText = '0';
    myScore = 0;
    opponentScore = 0;
}
