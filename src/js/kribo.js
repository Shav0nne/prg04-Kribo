import { Actor, Vector, Keys } from "excalibur";
import { Resources } from './resources.js';
import { Thorn } from './thorn.js'
import { Bean } from "./bean.js";
import { Shadow } from "./shadow.js";

export class Kribo extends Actor {
    constructor() {
        super({ width: Resources.Kribo.width, height: Resources.Kribo.height });
        console.log("I am Kribo!");
        this.graphics.use(Resources.Kribo.toSprite());
        this.events.on('collisionstart', (event) => this.kriboDeath(event));
        this.isJumping = false;
        this.groundY = 450;     
        this.gravity = 800;       
    }

    onInitialize(engine) {
        this.engine = engine;
        this.scale = new Vector(0.06, 0.06);
        this.pos = new Vector(100, this.groundY);
    }

    onPreUpdate(engine, delta) {
        let xspeed = 0;
        let kb = engine.input.keyboard;

        if (kb.isHeld(Keys.Left)) {
            xspeed = -250;
            this.graphics.flipHorizontal = true
        }
        if (kb.isHeld(Keys.Right)) {
            xspeed = 250;
            this.graphics.flipHorizontal = false
        }

        // Jump logic
        if (kb.wasPressed(Keys.Up) && !this.isJumping) {
            this.vel.y = -370;              
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

   resetKribo() {
        this.scale = new Vector(0.06, 0.06);
        this.pos = new Vector(100, this.groundY);
    }

    kriboDeath(event) {
        if (event.other.owner instanceof Thorn) {
            console.log("You died by a Thorn");
            this.death++
            this.scene.engine.ui.addDeath(this.death);
            this.resetKribo(); 
        }
         if (event.other.owner instanceof Shadow) {
            console.log("You died by a Shadow");
            this.death++
            this.scene.engine.ui.addDeath(this.death);
            this.resetKribo(); 
        }
        if (event.other.owner instanceof Bean) {
            console.log(`Kribo got a point!`);
            this.score++
            this.scene.engine.ui.addScore(this.score);
            event.other.owner.kill(); 
        }
    }
}