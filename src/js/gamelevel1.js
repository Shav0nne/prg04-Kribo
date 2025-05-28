import { Scene, BoundingBox } from "excalibur"
import { Resources } from './resources.js'
import { Backgroundhappy } from './backgroundhappy.js'
import { Block } from './block.js'
import { Kribo } from './kribo.js'
import { Thorn } from './thorn.js'
import { Shadow } from './shadow.js'
import { Bean } from './bean.js'
import { Platform } from './platform.js'
import { UI } from './ui.js'
import { Lives } from './lives.js'

export class GameLevel extends Scene {
    ui
    lives

    onInitialize(engine) {
        
        const background = new Backgroundhappy();
        this.add(background);

        const blockWidth = Resources.Block.width * 0.1;
        const screenWidth = engine.drawWidth;

        for (let x = 0; x < screenWidth; x += blockWidth) {
            const block = new Block(x + blockWidth / 2, 550);
            this.add(block);
            
        }

        this.ui = new UI();
        this.add(this.ui);

        this.lives = new Lives();
        this.add(this.lives);

        const platform1 = new Platform(250, 350);
        const platform2 = new Platform(550, 250);
        this.add(platform1);
        this.add(platform2);

        const thorn = new Thorn();
        this.add(thorn);

        const shadow = new Shadow();
        this.add(shadow);

        this.add(new Bean(300, 450))
        this.add(new Bean(300, 300))
        this.add(new Bean(550, 200))

        const kribo = new Kribo(this.ui, this.lives);
        this.add(kribo);

        this.camera.strategy.lockToActor(kribo);
        this.camera.strategy.limitCameraBounds(new BoundingBox(0, -600, 2000, 600));

        Resources.KriboHappyLand.play(0.4);

        console.log("Level 1 loaded");
    }
}
