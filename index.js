import scene1 from './scenes/scene1.js';
import gameover from './scenes/gameover.js';
import won from './scenes/won.js';
var screenwidth = window.screen.width - 15;
var screenheight = (window.screen.availHeight - 100);
var config = {
    type: Phaser.AUTO,
    width: screenwidth,
    height: screenheight,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 900 },
            debug: false
        }
    },
    scene: [scene1, gameover, won]
};

var game = new Phaser.Game(config);
