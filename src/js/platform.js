import { Actor, Vector } from "excalibur";
import { Resources } from './resources.js';

export class Platform extends Actor {
    constructor(x, y) {
        super();
        this.graphics.use(Resources.Platform.toSprite());
        this.pos = new Vector(200, 350);
        this.scale = new Vector(0.5, 0.5); 
    }
}
