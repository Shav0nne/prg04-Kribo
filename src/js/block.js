import { Actor, Vector, CollisionType } from "excalibur";
import { Resources } from './resources.js';

export class Block extends Actor {
    constructor(x, y) {
      super({
        pos: new Vector(x, y),
        width: Resources.Block.width * 0.75,  
        height: Resources.Block.height * 0.75,
        collisionType: CollisionType.Fixed 
      });
      this.graphics.use(Resources.Block.toSprite());
      this.scale = new Vector(0.15, 0.15); 
    }
  }
  