import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode } from "excalibur"
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

        const block = new Block();
        this.add(block);

        // const blocks = createBlocksInRow(50, 550, 5, 60); 
        // blocks.forEach(block => this.add(block)); 

        console.log("start game!")

        const kribo = new Kribo();
        this.add(kribo);
    }
}

new Game()
