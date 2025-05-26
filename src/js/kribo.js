import { Actor, Vector, Keys, CollisionType } from "excalibur";
import { Resources } from './resources.js';
import { Thorn } from './thorn.js'
import { Bean } from "./bean.js";
import { Shadow } from "./shadow.js";
import { Platform } from './platform.js'

export class Kribo extends Actor {
    constructor(ui, lives) {
        super({
            width: Resources.Kribo.width,
            height: Resources.Kribo.height,
            collisonType: CollisionType.Active
        });
        this.ui = ui;
        this.lives = lives;
        this.maxLives = 3;
        this.currentLives = this.maxLives;
        this.score = 0;

        console.log("I am Kribo!");
        this.graphics.use(Resources.Kribo.toSprite());
        this.events.on('collisionstart', (event) => this.kriboDeath(event));
        this.isJumping = false;
        this.onPlatform = false; 
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
            this.onPlatform = false;
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