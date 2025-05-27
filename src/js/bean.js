import { Actor, Vector, CollisionType } from "excalibur";
import { Resources } from './resources.js';

export class Bean extends Actor {
  constructor(x, y) {
    super({
      pos: new Vector(x, y),
      width: Resources.Bean.width * 0.2,
      height: Resources.Bean.height * 0.3,
      collisionType: CollisionType.Passive
    });
  }

  onInitialize(engine) {
    this.graphics.use(Resources.Bean.toSprite());
    this.scale = new Vector(0.2, 0.3);
  }
}
