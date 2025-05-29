import { Actor, Vector, CollisionType } from "excalibur";
import { Resources } from './resources.js';

export class Shadow extends Actor {
  direction = 1;
  speed = 50;

  constructor(x, y, minX, maxX) {
    super({
      pos: new Vector(x, y),
      width: Resources.Shadow.width * 0.3,
      height: Resources.Shadow.height * 0.7,
      collisionType: CollisionType.Passive
    });
    this.minX = minX;
    this.maxX = maxX;
  }

  onInitialize(engine) {
    this.graphics.use(Resources.Shadow.toSprite());
    this.scale = new Vector(0.3, 0.3);
    this.vel = new Vector(this.direction * this.speed, 0);
  }

  onPostUpdate(engine, delta) {
    if (this.pos.x <= this.minX) {
      this.direction = 1;
      this.vel.x = this.direction * this.speed;
      this.graphics.flipHorizontal = true;
    } else if (this.pos.x >= this.maxX) {
      this.direction = -1;
      this.vel.x = this.direction * this.speed;
      this.graphics.flipHorizontal = false;
    }
  }
}
