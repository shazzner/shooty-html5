var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
  game.load.image('star', 'assets/star.png');
  game.load.image('back', 'assets/bkg/back2.png');
  game.load.image('fore', 'assets/bkg/fore2.png');

  // what we want to do is load in a ship image that has all the frames for banking up and down
  game.load.image('ship', 'assets/ship.png');
}

// Background Objects
var back;
var fore;

// Ship Object
var ship;

// Test Object
var star;

function create() {

  game.stage.backgroundColor = '#223e40';

  game.physics.startSystem(Phaser.Physics.ARCADE);
  
  back = game.add.tileSprite(0, 100, 1120, 423, 'back');
  fore = game.add.tileSprite(0, 200, 1120, 521, 'fore');

  // ship 48x48

  // just a test sprite
  star = game.add.sprite(20, game.world.centerY, 'star');

  game.physics.enable(star, Phaser.Physics.ARCADE);

  star.body.collideWorldBounds = true;
  star.body.bounce.set(1);
  star.body.immovable = true;

  // Let's set an animation identifier
  star.bankAnimation = 'none';

  cursors = game.input.keyboard.createCursorKeys();
  
}

function update() {
  
  back.tilePosition.x -= 0.25;
  fore.tilePosition.x -= 0.5;

  star.body.velocity.x = 0;
  star.body.velocity.y = 0;
  
  if ( cursors.left.isDown) {
    star.body.velocity.x = -150;
  }
  else if ( cursors.right.isDown) {
    star.body.velocity.x = +150;
  }

  // For the ship when they go up or down, we want to change them to the bank animation
  if ( cursors.up.isDown) {
    star.body.velocity.y = -150;
  }
  else if ( cursors.down.isDown) {
    star.body.velocity.y = +150;
  }
  
}
