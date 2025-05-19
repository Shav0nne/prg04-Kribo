import { Actor, Vector } from "excalibur";
import { Resources } from './resources.js';

export class Backgroundhappy extends Actor {
    constructor() {
        super()
        this.graphics.use(Resources.BgHappy.toSprite());
        this.pos = new Vector(400,300)
        this.scale = new Vector (1.3, 1.3)
    }
}
