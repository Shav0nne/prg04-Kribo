import { Actor, Vector, CollisionType } from "excalibur";
import { Resources } from './resources.js';

export class Platform extends Actor {
  constructor(x, y) {
    super({
      pos: new Vector(x, y),
      width: Resources.Platform.width,
      height: Resources.Platform.height
    });
  }

  onInitialize(engine) {
    this.graphics.use(Resources.Platform.toSprite());
    this.scale = new Vector(0.5, 0.5); 
    this.body.collisionType = CollisionType.Fixed;
  }
}
