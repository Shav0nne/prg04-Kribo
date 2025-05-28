import { Actor, Vector, CollisionType } from "excalibur";
import { Resources } from './resources.js';

export class Star extends Actor {
  constructor(x, y) {
    super({
      pos: new Vector(x, y),
      width: Resources.Star.width * 0.5,
      height: Resources.Star.height * 0.5,
      collisionType: CollisionType.Passive
    });
  }

  onInitialize(engine) {
    this.graphics.use(Resources.Star.toSprite());
    this.scale = new Vector(0.2, 0.2);
  }
}
