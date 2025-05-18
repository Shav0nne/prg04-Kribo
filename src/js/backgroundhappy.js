import { Actor, Vector } from "excalibur";
import { Resources } from './resources.js';

export class Background extends Actor {
    constructor() {
        super({
            
            pos: new Vector(640, 360), 
            scale: new Vector(2.5, 2.5),
            width: 1280,
            height: 720
        });
        this.graphics.use(Resources.backgroundhappy.toSprite());
    }
}