var basespeed = 200
var player;
var n = Phaser.Math.Between(650, 850)
var n2 = Phaser.Math.Between(550, 950)
var a = n + 500
var b = n - 500
var c = n + Phaser.Math.Between(100, 600)
var d = n - Phaser.Math.Between(100, 600)
var e = n2 + Phaser.Math.Between(100, 600)
var f = n2 - Phaser.Math.Between(100, 600)
var screenwidth = window.screen.width - 15
var screenheight = (window.screen.availHeight - 100)
var player
var go
let x = 400
export default class scene1 extends Phaser.Scene {
    constructor() {
        super('scene1')
    }



    preload() {
        this.load.spritesheet('player', './assets/theplayer.png', { frameWidth: 493, frameHeight: 928 })
        this.load.image('ground', './assets/ground.png')
        this.load.image('coolsky', './assets/coolsky.png')
        this.load.image('platform', './assets/platform.png')
        this.load.image('monster1', './assets/monster1.png')
        this.load.image('gameover', './assets/gameover.png')
        this.load.image('box', './assets/box.png')
        this.load.image('end', './assets/end.png')
    }

    create() {
        var sky = this.add.image((screenwidth) / 2, screenheight / 2, 'coolsky').setScale(screenwidth / 2001)
        //these are the platforms
        var platforms = this.physics.add.staticGroup();
        platforms.create(screenwidth / 2, screenheight, 'ground').setScale(screenwidth / 2001).refreshBody();
        platforms.create(n, 520, 'platform').refreshBody()
        platforms.create(a, 520, 'platform').refreshBody()
        platforms.create(b, 520, 'platform').refreshBody()
        platforms.create(c, 350, 'platform').refreshBody()
        platforms.create(d, 350, 'platform').refreshBody()
        platforms.create(e, 180, 'platform').refreshBody()
        platforms.create(f, 180, 'platform').refreshBody()

        //these are about the monsters
        var monster = this.physics.add.group();
        monster.create(a, 440, 'monster1');
        monster.create(d, 270, 'monster1');
        monster.create(f, 100, 'monster1');
        //these are about the player
        player = this.physics.add.sprite(0, 600, 'player').setScale(0.1)
        player.setCollideWorldBounds(true);
        this.physics.add.collider(player, platforms);
        this.physics.add.collider(monster, platforms)
        this.physics.add.collider(player, platforms)
        this.physics.add.collider(player, monster, hitMonster, null, this);
        /*this.physics.add.collider(monster, platforms)
        this.physics.add.collider(monster, player, function () {
            player.destroy();
            platforms.destroy();
            monster.destroy();
            var go = true
        })
    }*/
        var self = this

        var endzone = this.physics.add.staticGroup()
        endzone.create(e, 130, 'end')
        this.physics.add.collider(player, endzone, win, null, this)
        this.anims.create({
            key: 'leftwalk',
            frames: this.anims.generateFrameNumbers('player', { start: 5, end: 8 }),
            frameRate: 6.5,
            repeat: -1
        });
        this.anims.create({
            key: 'rightwalk',
            frames: this.anims.generateFrameNumbers('player', { start: 0, end: 3 }),
            frameRate: 6.5,
            repeat: -1
        })

        this.anims.create({
            key: 'turn',
            frames: [{ key: 'player', frame: 4 }],
            frameRate: 20
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('player', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });
        console.log(player.y)
        this.input.on('pointerdown', (pointer) => {
            if (player.body.touching.down) {
                player.setVelocityY(-650)
            }
        }, this)
        this.input.keyboard.on('keyup_SPACE', function () {
            if (player.body.touching.down) {
                player.setVelocityY(-650)
            }
        }, this)
        this.input.keyboard.on('keyup_R', function () {
            this.scene.start('gameover')
        }, this)
    }
    update() {
        player.setVelocityX(basespeed)
        if (player.x >= 1450) {
            player.anims.play('leftwalk', true);
            basespeed = -200

        } else if (player.x <= 50) {
            player.anims.play('rightwalk', true)
            basespeed = 200
        }

    }
    

}

function hitMonster (player, monster)
{
    this.physics.pause();

    this.scene.start('gameover')
}

function win (player, endzone)
{
    this.physics.pause()
    this.scene.start('won')
}
