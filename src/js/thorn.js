import { Actor, Vector, CollisionType } from "excalibur";
import { Resources } from './resources.js';

export class Thorn extends Actor {
  constructor(x, y) {
    super({
      pos: new Vector(x, y),
      width: Resources.Thorn.width * 0.7,
      height: Resources.Thorn.height * 0.7,
      collisionType: CollisionType.Passive
    });
  }

  onInitialize(engine) {
    this.graphics.use(Resources.Thorn.toSprite());
    this.scale = new Vector(0.1, 0.1);
  }
}
