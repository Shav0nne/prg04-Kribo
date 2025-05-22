import { Actor, Vector } from "excalibur";
import { Resources } from './resources.js';

export class Shadow extends Actor {
    constructor(x, y) {
        super({
            width: 75,
            height: 75,
            pos: new Vector(200, 200),
            vel: new Vector (-50, 0)
        });
        this.graphics.use(Resources.Shadow.toSprite());
        this.pos = new Vector(800, 450);
        this.scale = new Vector(0.3 , 0.3); 
    }
}
