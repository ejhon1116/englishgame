import scene1 from './scenes/scene1'
import gameover from './scenes/gameover'
import won from './scenes/won'
var screenwidth = window.screen.width - 15
var screenheight = (window.screen.availHeight - 100)
console.log(screenwidth, screenheight)
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
    scene: [scene1, gameover]
};

var game = new Phaser.Game(config);
