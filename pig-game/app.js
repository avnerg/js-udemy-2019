init();
var activePlayer;



function init(){

    // Zero the score and hide dice
    document.getElementById('score-0').innerText = 0;
    document.getElementById('score-1').innerText = 0;
    document.getElementById('current-0').innerText = '0';
    document.getElementById('current-1').innerText = '0';
    document.querySelector('.dice').style.display = 'none';
    
    // Set active player
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    activePlayer = 0;
}
