// The main JS file for Project Malody
//
//
//
//////////////////////////////////////

PlayState = {};

//This function preloads all the assets we need for this playstate
PlayState.preload = function(){
  this.game.load.image('background', 'images/background.png');
};

PlayState.create = function(){
  this.game.add.image(0, 0, 'background');
};

//This function creates the play window and assigns it the playstate
window.onload = function() {
  let game = new Phaser.Game(960, 600, Phaser.AUTO, 'game');
  game.state.add('play', PlayState);
  game.state.start('play');
};
