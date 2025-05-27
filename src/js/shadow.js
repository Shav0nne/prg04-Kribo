import { Actor, Vector } from "excalibur";
import { Resources } from './resources.js';

export class Shadow extends Actor {
    constructor() {
        super({
            width: 150,
            height: 400,
            pos: new Vector(800, 450),
            vel: new Vector(-50, 0), 
            scale: new Vector(0.3, 0.3)
        });

        this.graphics.use(Resources.Shadow.toSprite());
    }

    onPostUpdate(engine, delta) {
        if (this.pos.x <= 550) {
            this.vel = new Vector(50, 0); 
            this.graphics.flipHorizontal = true;
        } else if (this.pos.x >= 800) {
            this.vel = new Vector(-50, 0); 
            this.graphics.flipHorizontal = false; 
        }
    }
}
