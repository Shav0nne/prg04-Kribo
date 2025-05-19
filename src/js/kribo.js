import { Actor, Vector, Keys } from "excalibur";
import { Resources } from './resources.js';

export class Kribo extends Actor {
    constructor() {
        super({ width: Resources.Kribo.width, height: Resources.Kribo.height });
        console.log("I am Kribo!");
        this.graphics.use(Resources.Kribo.toSprite());
        this.events.on('collisionstart', (event) => this.hitSomething(event));
        this.isJumping = false;
        this.groundY = 450;     
        this.gravity = 800;       
    }

    onInitialize(engine) {
        this.scale = new Vector(0.06, 0.06);
        this.pos = new Vector(100, this.groundY);
    }

    onPreUpdate(engine, delta) {
        let xspeed = 0;
        let kb = engine.input.keyboard;

        if (kb.isHeld(Keys.Left)) {
            xspeed = -300;
            this.graphics.flipHorizontal = true
        }
        if (kb.isHeld(Keys.Right)) {
            xspeed = 300;
            this.graphics.flipHorizontal = false
        }

        // Jump logic
        if (kb.wasPressed(Keys.Up) && !this.isJumping) {
            this.vel.y = -400;              
            this.isJumping = true;
            console.log("I'm jumping");
        }

        // Zwaartekracht toepassen
        this.vel.y += this.gravity * (delta / 1000); 

        // Positie updaten
        this.pos = this.pos.add(this.vel.scale(delta / 1000));

        // Terug op de grond
        if (this.pos.y >= this.groundY) {
            this.pos.y = this.groundY;
            this.vel.y = 0;
            this.isJumping = false;
        }

        this.vel.x = xspeed;
    }

    hitSomething(event) {
        // Botsing logica
    }
}
