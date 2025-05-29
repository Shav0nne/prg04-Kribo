import { Scene, BoundingBox } from "excalibur"
import { Resources } from './resources.js'
import { Backgroundhappy } from './backgroundhappy.js'
import { Block } from './block.js'
import { Kribo } from './kribo.js'
import { Thorn } from './thorn.js'
import { Shadow } from './shadow.js'
import { Bean } from './bean.js'
import { Star } from './star.js'
import { Platform } from './platform.js'
import { UI } from './ui.js'
import { Lives } from './lives.js'

export class GameLevel extends Scene {
    #ui
    #lives

    onActivate(context) {
        this.clear();
        Resources.KriboHappyLand.stop();
        this.resetScene();
    }

    resetScene() {
        let bg1 = new Backgroundhappy(750, 150)
        let bg2 = new Backgroundhappy(2250, 150)
        let bg3 = new Backgroundhappy(3750, 150)
        this.add(bg1)
        this.add(bg2)
        this.add(bg3)

        this.add(new Block(100, 530))
        this.add(new Block(975, 530))
        this.add(new Block(2100, 530))
        this.add(new Block(3200, 530))

        this.add(new Platform(250, 350))
        this.add(new Platform(580, 250))
        this.add(new Platform(1000, 195))
        this.add(new Platform(1360, 350))
        this.add(new Platform(1800, 150))
        this.add(new Platform(2220, 60))
        this.add(new Platform(2220, 350))
        this.add(new Platform(2520, 195))

        this.add(new Thorn(400, 420))
        this.add(new Thorn(650, 180))
        this.add(new Thorn(830, 420))
        this.add(new Thorn(900, 130))
        this.add(new Thorn(1360, 280))
        this.add(new Thorn(1950, 420))
        this.add(new Thorn(2150, 280))
        this.add(new Thorn(2150, 280))
        this.add(new Thorn(2800, 420))
        this.add(new Thorn(2880, 420))
        this.add(new Thorn(3150, 420))

        this.add(new Shadow(250, 280, 190, 310))
        this.add(new Shadow(520, 420, 500, 750))
        this.add(new Shadow(1060, 420, 900, 1100))
        this.add(new Shadow(1680, 420, 1680, 1890))
        this.add(new Shadow(1900, 80, 1700, 1900))
        this.add(new Shadow(2320, 420, 2320, 2500))
        this.add(new Shadow(2420, 120, 2420, 2600))

        this.add(new Bean(300, 300))
        this.add(new Bean(550, 200))
        this.add(new Bean(550, 450))
        this.add(new Bean(990, 150))
        this.add(new Bean(1880, 450))
        this.add(new Bean(1750, 120))
        this.add(new Bean(2250, 30))
        this.add(new Bean(2580, 150))

        this.ui = new UI()
        this.add(this.ui)
        this.lives = new Lives()
        this.add(this.lives)

        const kribo = new Kribo(this.ui, this.lives)
        this.add(kribo)

        const star = new Star(3000, 350)
        this.add(star)

        star.on("collisionstart", (event) => {
            if (event.other.owner === kribo) {
                const score = this.ui.getScore();
                this.engine.goToScene("finish", { score: score });
                console.log("Score sent to finish:", score);
            }
        });

        this.camera.strategy.lockToActor(kribo)
        this.camera.strategy.limitCameraBounds(new BoundingBox(0, -200, 3200, 600))

        Resources.KriboHappyLand.play(0.2)

        console.log("Level 1 loaded")
    }
}