import { Actor, Vector, Keys } from "excalibur";
import { Resources } from './resources.js';

export class Kribo extends Actor {
    constructor() {
        super({ width: Resources.Kribo.width, height: Resources.Kribo.height });
        console.log("I am Kribo!");
        this.graphics.use(Resources.Kribo.toSprite());
        this.events.on('collisionstart', (event) => this.hitSomething(event));
    }

    onInitialize(engine) {
        this.scale = new Vector(0.07, 0.07);
        this.pos = new Vector(100, 450);
        this.vel = new Vector(60, 0);
    }

    onPreUpdate(engine) {
        let xspeed = 0;
        let yspeed = 0;
        let kb = engine.input.keyboard

        if (engine.input.keyboard.isHeld(Keys.Left)) {
            xspeed = -300;
        }
        if (engine.input.keyboard.isHeld(Keys.Right)) {
            xspeed = 300;
        }
        // if (engine.input.keyboard.isHeld(Keys.Up)) {
        //     yspeed = -500;
        // }
        // if (engine.input.keyboard.isHeld(Keys.Down)) {
        //     yspeed = 500;
        // }
        this.vel = new Vector(xspeed, yspeed);
    }

}