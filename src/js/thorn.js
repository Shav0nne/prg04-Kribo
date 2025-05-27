import { Actor, Vector } from "excalibur";
import { Resources } from './resources.js';

export class Thorn extends Actor {
    constructor(x, y) {
        super({
            width: 750,
            height: 750,
            pos: new Vector(450, 450)
        });
        this.graphics.use(Resources.Thorn.toSprite());
        this.pos = new Vector(450, 450);
        this.scale = new Vector(0.1 , 0.1); 
    }
}
