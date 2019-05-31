
var scores,tot_core,activePlayer,playing;

init();

document.querySelector('.btn-roll').addEventListener('click',function(){
  if (playing) {

    //Generate dice score
    var dice = Math.floor(Math.random() * 6) + 1;

    //Display score
    document.getElementById('dice-1').style.display = 'block';
    document.getElementById('dice-1').src = 'dice-' + dice + '.png';

    //Update the total scores
    if(dice!==1)
    {
      tot_score+=dice;
      document.querySelector('#current-' + activePlayer).textContent = tot_score;
    }
    else {
      nextPlayer();
    }

  }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
  if(playing)
  {
    //add current score to total score
    scores[activePlayer] += tot_score;

    //update Display
    document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];

    //check if current player has won the game
    if(scores[activePlayer]>=50) {
      document.querySelector('#name-'+activePlayer).textContent='WINNER !';
      document.getElementById('dice-1').style.display = 'none';
      document.querySelector('player-'+activePlayer+'-panel').classList.add('winner');
      document.querySelector('player-'+activePlayer+'-panel').classList.remove('active');
      playing=false;
    }
    else {
      nextPlayer();
    }
  }
});

function nextPlayer() {
    //Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    tot_score = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');


    document.getElementById('dice-1').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0, 0];
    activePlayer = 0;
    tot_score = 0;
    playing = true;

    document.getElementById('dice-1').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}
