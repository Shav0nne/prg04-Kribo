import { Actor, Vector, Keys, CollisionType, DegreeOfFreedom } from "excalibur";
import { Resources } from './resources.js';
import { Thorn } from './thorn.js'
import { Bean } from "./bean.js";
import { Shadow } from "./shadow.js";

export class Kribo extends Actor {
    constructor(ui, lives) {
      super({
        width: Resources.Kribo.width,
        height: Resources.Kribo.height,
        collisionType: CollisionType.Active,
        pos: new Vector(50, 50) 
      });
      this.ui = ui;
      this.lives = lives;
      this.maxLives = 3;
      this.currentLives = this.maxLives;
      this.score = 0;
      this.hasJumped = false;
    }
  
    onInitialize(engine) {
        this.graphics.use(Resources.Kribo.toSprite());
        // this.body.bounciness = -2;
        this.scale = new Vector(0.06, 0.06);
        this.body.collisionType = CollisionType.Active;
        this.body.useGravity = true;
        this.body.limitDegreeOfFreedom.push(DegreeOfFreedom.Rotation);
        
        this.on('collisionstart', (event) => this.kriboDeath(event));
    
        this.on('postcollision', (event) => {
            if (event.contact.normal.y < 0) {
                this.hasJumped = false;
            }
        });
    }

    onPreUpdate(engine, delta) {
      const kb = engine.input.keyboard;
  
      if (kb.isHeld(Keys.Left)) {
        this.vel.x = -250;
        this.graphics.flipHorizontal = true;
      } else if (kb.isHeld(Keys.Right)) {
        this.vel.x = 250;
        this.graphics.flipHorizontal = false;
      } else {
        this.vel.x = 0;
      }
  
      if (kb.wasPressed(Keys.Up) && !this.hasJumped) {
        this.body.applyLinearImpulse(new Vector(0, -550)); 
        this.hasJumped = true;
        console.log("Kribo jumps!");
      }
    }

    resetKribo() {
        this.vel = Vector.Zero;
        this.pos = new Vector(100, 300);
    }

    kriboDeath(event) {
        if (event.other.owner instanceof Thorn || event.other.owner instanceof Shadow) {
            console.log("You died!");
            this.currentLives--;
            if (this.currentLives < 0) this.currentLives = 0;

            if (this.ui) this.ui.addDeath();
            if (this.lives) this.lives.showLives(this.currentLives);

            if (this.currentLives === 0) {
                console.log("Game Over!");
                this.engine.goToScene('start');
            }

            this.resetKribo();
        }

        if (event.other.owner instanceof Bean) {
            console.log(`Kribo got a point!`);
            this.score++;
            if (this.ui) this.ui.addScore();
            event.other.owner.kill();
        }
    }
}
