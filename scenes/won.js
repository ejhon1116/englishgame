var screenwidth = window.screen.width - 15
var screenheight = (window.screen.availHeight - 100)
export default class won extends Phaser.Scene {
    constructor() {
        super('won')
    }
    preload() {
        this.image.load('won', './assets/won.png')
    }
    create() {
        this.add.image(screenwidth/2, screenheight/2, 'won')
    }
    update(){
    
    }
}