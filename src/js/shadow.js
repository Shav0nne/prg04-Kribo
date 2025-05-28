import { Actor, Vector, CollisionType } from "excalibur";
import { Resources } from './resources.js';

export class Shadow extends Actor {
  constructor(x, y) {
    super({
      pos: new Vector(x, y),
      width: Resources.Shadow.width * 0.3,
      height: Resources.Shadow.height * 0.7,
      collisionType: CollisionType.Passive
    });
  }

  onInitialize(engine) {
    this.graphics.use(Resources.Shadow.toSprite());
    this.scale = new Vector(0.3, 0.3);
    this.vel = new Vector(this.direction * 50, 0);
  }

  onPostUpdate(engine, delta) {
    if (this.pos.x <= 550) {
      this.direction = 1;
      this.vel.x = this.direction * 50;
      this.graphics.flipHorizontal = true;
    } else if (this.pos.x >= 800) {
      this.direction = -1;
      this.vel.x = this.direction * 50;
      this.graphics.flipHorizontal = false;
    }
  }
}
