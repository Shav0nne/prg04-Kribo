import { Actor, Vector, CollisionType } from "excalibur";
import { Resources } from './resources.js';

export class Platform extends Actor {
  constructor(x, y) {
    super({
      pos: new Vector(x, y),
      width: Resources.Platform.width * 0.92, 
      height: Resources.Platform.height * 0.15,
      collisionType: CollisionType.Fixed
    });
  }

  onInitialize(engine) {
    this.graphics.use(Resources.Platform.toSprite());
    this.scale = new Vector(0.5, 0.5);
  }
}