import { Actor, Vector } from "excalibur";
import { Resources } from './resources.js';

export class Backgroundhappy extends Actor {
    constructor() {
        super()
        this.graphics.use(Resources.BgHappy.toSprite());
        this.pos = new Vector(750,150)
        this.scale = new Vector (1, 1)
    }
}
