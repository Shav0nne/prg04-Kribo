import { Actor, Vector, CollisionType } from "excalibur";
import { Resources } from './resources.js';

export class Star extends Actor {
  direction = 1;
  speed = 20;
  minY
  maxY

    constructor(x, y) {
    super({
      pos: new Vector(x, y),
      width: Resources.Star.width * 0.5,
      height: Resources.Star.height * 0.5,
      collisionType: CollisionType.Passive
    });
    this.minY = y - 10;
    this.maxY = y + 10;
  }

  onInitialize(engine) {
    this.graphics.use(Resources.Star.toSprite());
    this.scale = new Vector(0.2, 0.2);
    this.vel = new Vector(0, this.direction * this.speed);
  }
  
   onPostUpdate(engine, delta) {
    if (this.pos.y <= this.minY) {
      this.direction = 1;
      this.vel.y = this.direction * this.speed;
    } else if (this.pos.y >= this.maxY) {
      this.direction = -1;
      this.vel.y = this.direction * this.speed;
    }
  }
}
