import { Actor, Vector, CollisionType } from "excalibur";
import { Resources } from './resources.js';

export class Platform extends Actor {
    constructor(x, y) {
        const scale = new Vector(0.5, 0.5);
        super({
            pos: new Vector(x, y),
            width: Resources.Platform.width * scale.x,
            height: Resources.Platform.height * scale.y,
            collisionType: CollisionType.Fixed
        });
        this.scale = scale;
        this.graphics.use(Resources.Platform.toSprite());
    }
}
