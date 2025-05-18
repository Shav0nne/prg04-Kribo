import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
// import { Backgroundhappy } from './backgroundhappy.js'
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
        // const backgroundhappy = new Backgroundhappy();
        // this.add(backgroundhappy);

        console.log("start game!")

        const kribo = new Kribo();
        this.add(kribo);
    }
}

new Game()
