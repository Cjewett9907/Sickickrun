const Game = require("./game");

document.addEventListener("DOMContentLoaded", () => {
  const gameEl = document.getElementsByClassName("Main-Game");
  let difficulty = 'easy'
  let game;
  let imageSelection = ["url('./sickick3.jpg')", "url('./sickick4.jpg')", "url('./sickick1.jpg')", "url('./sickick22.jpg')"]
  let imageIdx = 1

  setInterval(function(){ 
    document.getElementById('splash').style.backgroundImage =imageSelection[imageIdx];
    imageIdx = (imageIdx + 1) % imageSelection.length;
    console.log(imageIdx)
   }, 3000);

  document.getElementById('play_text').innerHTML = 'PLAY'
  document.getElementById('title_text').innerHTML = 'SickickRun'
  document.getElementById('instructions_text').addEventListener('click', () => {
    instructions_text.innerHTML = 
        `Fear infests your mind. The only way to conquer darkness is to run. Run straight through it. <br> On your journey, you will find your true self...the strength to withstand your monsters.`})
  
  document.getElementById('keys').addEventListener('click', () => {
    keys.innerHTML = 'Use arrow keys or WASD on keyboard to avoid monsters. <br> Collect masks to restore your power. Score coins to earn rewards.'
  })

  document.getElementById('play_btn').addEventListener('click', () => {   
    if (game) {
      game.clearGame()
    }
    
    document.getElementById('splash').style.visibility = 'hidden';
    document.getElementById('diff').style.visibility = 'hidden';
    
    game = new Game(difficulty);
    game.start();
  })

  document.getElementById('diff').addEventListener('click', () => {   
    document.getElementById('diff').style.visibility = 'hidden'
    var items = document.getElementsByClassName('diff-settings');
      for (var i=0; i < items.length; i++) {
        items[i].style.visibility = 'visible';
      }  
  })
  document.getElementById('diff-div').addEventListener('click', () => {   
    document.getElementById('diff').style.visibility = 'visible'
    var items = document.getElementsByClassName('diff-settings');
      for (var i=0; i < items.length; i++) {
        items[i].style.visibility = 'hidden';
      }  
  })
  document.getElementById('easy').addEventListener('click', () => {   
   difficulty = 'easy' 
  })
  document.getElementById('hard').addEventListener('click', () => {   
   difficulty = 'hard' 
  })

  document.getElementById('account').addEventListener('click', () => {   
    window.location.assign("https://sickickrun.netlify.com/")
    
  })

});
