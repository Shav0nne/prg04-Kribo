import { ScreenElement, Vector, Sprite } from "excalibur";
import { Resources } from "./resources";

export class Lives extends ScreenElement {
  constructor() {
    super({ anchor: Vector.Zero });
    this.amount = 3;
  }

  onInitialize(engine) {
    this.sprite = new Sprite({
      image: Resources.Lives,
      sourceView: { x: 0, y: 0, width: 500, height: 500 },
      destSize: { width: 500, height: 500 }
    });
    this.graphics.use(this.sprite);
    this.pos = new Vector(10, 10); 
    this.scale = new Vector(0.15, 0.15);
    this.showLives(this.amount);
  }

  showLives(amount) {
    this.sprite.sourceView.width = amount * 500;
    this.sprite.destSize.width = amount * 500;
  }
}