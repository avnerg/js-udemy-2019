var activePlayer, currentScore, winningScore, previousDice;
var dice = [0, 0];
var score = [0, 0];

init();

document.querySelector('.btn-roll').addEventListener('click', function(){
    dice[0] = Math.ceil((Math.random() * 6));
    dice[1] = Math.ceil((Math.random() * 6));
    document.querySelector('.dice1').src='dice-' + dice[0] + '.png';
    document.querySelector('.dice1').style.display = 'block';
    document.querySelector('.dice2').src='dice-' + dice[1] + '.png';
    document.querySelector('.dice2').style.display = 'block';
    
    if(dice[0] !== 1 && dice[1] !== 1){
        if(dice[0] == 6 && dice[1] == 6){
            score[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).innerText = score[activePlayer];
            zeroScoreAndSwitchPlayer();
        }
        else{
            currentScore += dice[0] + dice[1];
            document.querySelector('#current-' + activePlayer).innerText = currentScore;
        }
    }
    else{
        zeroScoreAndSwitchPlayer();
    }
    
})

document.querySelector('.btn-hold').addEventListener('click', function(){
    score[activePlayer] += currentScore;
    document.querySelector('#score-' + activePlayer).innerText = score[activePlayer];
    if(score[activePlayer] < winningScore){
        zeroScoreAndSwitchPlayer();
    }
    else{
        // Win
        document.querySelector('.btn-roll').disabled = true;
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
    }
    
})

document.querySelector('.btn-new').addEventListener('click', init);


function init(){

    // Zero the score and hide dice
    score[0] = score[1] = 0;
    document.getElementById('score-0').innerText = 0;
    document.getElementById('score-1').innerText = 0;
    document.getElementById('current-0').innerText = '0';
    document.getElementById('current-1').innerText = '0';
    document.querySelector('.dice1').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';
    
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.btn-roll').disabled = false;
    activePlayer = 0;
    currentScore = 0;
    winningScore = prompt('Winning Score:');
}
function switchPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
}

function zeroScoreAndSwitchPlayer(){
    currentScore = 0;
    document.querySelector('#current-' + activePlayer).innerText = currentScore;
    switchPlayer();
}
