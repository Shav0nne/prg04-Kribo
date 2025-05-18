import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { kribo } from './kribo.js'

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
        const backgroundhappy = new backgroundhappy();
        this.add(background);

        console.log("start game!")

        const kribo = new Kribo();
        this.add(kribo);
    }
}

new Game()
