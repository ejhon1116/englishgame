var sw = window.screen.width - 15
var screenheight = (window.screen.availHeight - 100)
export default class gameover extends Phaser.Scene{
    constructor() {
        super('gameover')
    }

    preload() {
        this.load.image('gameover', './assets/gameover.png')
    }

    create() {
        this.add.image(sw/2, screenheight/2, 'gameover').setScale(10, 10)
        this.input.on('pointerdown', (pointer) => {
            this.scene.start('scene1')
        }, this)
    }

    update() {
    }
}
