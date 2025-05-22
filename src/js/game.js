import '../css/style.css'
import { Engine, DisplayMode } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Backgroundhappy } from './backgroundhappy.js'
import { Block } from './block.js'
import { Kribo } from './kribo.js'
import { Thorn } from './thorn.js'
import { Shadow } from './shadow.js'
import { Bean } from './bean.js'
import { Platform } from './platform.js'
import { UI } from './ui.js'

class Game extends Engine {

    ui

    constructor() {
        super({ 
            width: 800,
            height: 600,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen
         })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        const backgroundhappy = new Backgroundhappy();
        this.add(backgroundhappy);
    
        const blockWidth = Resources.Block.width * 0.1; 
        const screenWidth = this.drawWidth;
    
        for (let x = 0; x < screenWidth; x += blockWidth) {
            const block = new Block(x + blockWidth / 2, 550);
            this.add(block);
        }

        const platform = new Platform();
        this.add(platform);
    
        const kribo = new Kribo();
        this.add(kribo);

        const thorn = new Thorn();
        this.add(thorn);

        const shadow = new Shadow();
        this.add(shadow);

        const bean = new Bean();
        this.add(bean);

        this.ui = new UI();
        this.add(this.ui);

        Resources.KriboHappyLand.play(0.4)

        console.log("start game!");
    }
}

new Game()
