import { Actor, Vector } from "excalibur";
import { Resources } from './resources.js';

export class Backgroundhappy extends Actor {
    constructor(x, y) {
        super();
        this.graphics.use(Resources.BgHappy.toSprite());
        this.pos = new Vector(x, y); 
        this.scale = new Vector(1, 1);
    }
}
