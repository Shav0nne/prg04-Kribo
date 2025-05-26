import { Actor, Vector, Sprite, ImageSource } from "excalibur";
import { Resources } from "./resources";

export class Lives extends Actor {
  constructor() {
    super();
    this.amount = 3;
  }

  onInitialize(engine) {
    this.sprite = new Sprite({
      image: Resources.Lives,
      sourceView: { x: 500, y: 500, width: 500, height: 500 },
      destSize: { width: 500, height: 500 }
    });
    this.graphics.use(this.sprite);   
    this.anchor = Vector.Zero;
    this.scale = new Vector(0.15, 0.15);

    this.showLives(this.amount);
  }

  showLives(amount) {
    this.sprite.sourceView.width = amount * 500;
    this.sprite.destSize.width = amount * 500;
  }
}