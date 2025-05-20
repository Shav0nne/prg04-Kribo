import '../css/style.css'
import { Engine, DisplayMode } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Backgroundhappy } from './backgroundhappy.js'
import { Block } from './block.js'
import { Kribo } from './kribo.js'

class Game extends Engine {

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
    
        const kribo = new Kribo();
        this.add(kribo);

        // Play background sound
        Resources.KriboHappyLandSong.loop = true; // Loop the sound
        Resources.KriboHappyLandSong.volume = 0.5; // Set volume 
        Resources.KriboHappyLandSong.play();

        console.log("start game!");
    }
}

new Game()
