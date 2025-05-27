import { Actor, Vector } from "excalibur";
import { Resources } from './resources.js';

export class Thorn extends Actor {
    constructor(x, y) {
        super({
            width: 800,
            height: 800,
            pos: new Vector(350, 450)
        });
        this.graphics.use(Resources.Thorn.toSprite());
        this.pos = new Vector(450, 420);
        this.scale = new Vector(0.1 , 0.1); 
    }
}
