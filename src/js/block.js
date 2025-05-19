import { Actor, Vector } from "excalibur";
import { Resources } from './resources.js';

export class Block extends Actor {
    constructor() {
        super()
        this.graphics.use(Resources.Block.toSprite());
        this.pos = new Vector(50, 550)
        this.scale = new Vector (0.1, 0.1) 
    }
}
