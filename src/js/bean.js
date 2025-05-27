import { Actor, Vector } from "excalibur";
import { Resources } from './resources.js';

export class Bean extends Actor {
    constructor(x, y) {
        super({
            width: 100,
            height: 100,
            pos: new Vector(300, 550)
        });
        this.graphics.use(Resources.Bean.toSprite());
        this.pos = new Vector(250, 450);
        this.scale = new Vector(0.2 , 0.3); 
    }
}