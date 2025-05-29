import { Actor, Vector, Keys, CollisionType, DegreeOfFreedom } from "excalibur";
import { Resources } from './resources.js';
import { Thorn } from './thorn.js'
import { Bean } from "./bean.js";
import { Shadow } from "./shadow.js";
import { Star } from './star.js'

export class Kribo extends Actor {
    constructor(ui, lives) {
        super({
            width: Resources.Kribo.width * 0.8,
            height: Resources.Kribo.height * 0.8,
            collisionType: CollisionType.Active,
            pos: new Vector(50, 300)
        });
        this.ui = ui;
        this.lives = lives;
        this.maxLives = 3;
        this.currentLives = this.maxLives;
        this.score = 0;
        this.hasJumped = false;
        this.engine = null;
    }

    onInitialize(engine) {
        this.engine = engine;
        this.graphics.use(Resources.Kribo.toSprite());
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
            this.body.applyLinearImpulse(new Vector(0, -320 * delta));
            this.hasJumped = true;
            console.log("Kribo jumps!");
        }

        if (this.pos.y > 500) {
            console.log("Kribo fell out of the map!");
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
    }
    resetKribo() {
        this.vel = Vector.Zero;
        this.pos = new Vector(50, 300);
    }

    kriboDeath(event) {
        const other = event.other.owner;
        if (!other) return;

        if (other instanceof Shadow) {
            if (event.side === "Bottom") {
                console.log("Enemy defeated!");
                other.kill();
                this.body.applyLinearImpulse(new Vector(0, -200));
                this.score += 30;
                if (this.ui) this.ui.addScore(30);
                return;
            } else {
                this.handleDeath("Shadow");
            }
        }

        if (other instanceof Thorn) {
            this.handleDeath("Thorn");
        }

        if (other instanceof Bean) {
            console.log("Kribo got a bean!");
            other.kill();
            this.score += 10;
            if (this.ui) this.ui.addScore(10);
        }

        if (other instanceof Star) {
            console.log("Level completed!");
            this.engine.goToScene('finish', {
                score: this.ui?.score || 0
            });
        }
    }

    handleDeath(cause) {
        console.log(`You died by ${cause}!`);
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
} 
