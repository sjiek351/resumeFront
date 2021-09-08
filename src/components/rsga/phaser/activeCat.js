import Phaser from 'phaser';

export default class ActiveCat extends Phaser.Game {
    constructor() {
        const width = 200;
        const height = 320;

        const eyeX = 70;
        const eyeY = 100;
        const eyeBoundLeft = 66;
        const eyeBoundRight = 74;

        const gameStart = {
            key: 'gameStart',
            preload() {
                this.load.image('eyes', './static/img/webp/eyes.webp');
                this.load.spritesheet('cat', './static/img/png/cat.png', { frameWidth: width, frameHeight: height });
            },
            create() {
                this.eyes = this.add.sprite(eyeX, eyeY, 'eyes');
                this.cat = this.add.sprite(width / 2, height / 2, 'cat');

                this.anims.create({
                    key: 'run',
                    frames: this.anims.generateFrameNumbers('cat', { start: 0, end: 15 }),
                    frameRate: 15,
                    repeat: -1,
                    delay: 4000,
                    repeatDelay: 4000,
                })

                //播放動畫
                this.cat.anims.play('run', true);
            },
            update() {
                const mouseX = this.input.mousePointer.x;

                if (mouseX <= 0) {
                    this.eyes.x = eyeBoundLeft;
                } else if (mouseX <= eyeX) {
                    this.eyes.x = eyeBoundLeft + (eyeX - eyeBoundLeft) / eyeX * mouseX;
                } else if (mouseX <= width) {
                    this.eyes.x = eyeX + (eyeBoundRight - eyeX) / width * mouseX;
                } else {
                    this.eyes.x = eyeBoundRight;
                }
            }
        };
        const config = {
            type: Phaser.AUTO,
            width: width,
            height: height,
            transparent: true,
            parent: 'activeCat', //區塊id
            scene: [gameStart]
        };
        super(config);
    }
}