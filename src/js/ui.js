import { Actor, Vector, Label, Font, FontUnit } from "excalibur";

export class UI extends Actor {
    
    score
    death
    scoreLabel
    deathLabel

    constructor() {
        super();

        this.score = 0;
        this.death = 0;

        this.scoreLabel = new Label({
            text: `Kribo: ${this.score}`,
            pos: new Vector(50, 50),
            font: new Font({
                family: 'impact',
                size: 25,
                unit: FontUnit.Px
            })
        });

        this.deathLabel = new Label({
            text: `Deaths: ${this.death}`,
            pos: new Vector(50, 80),
            font: new Font({
                family: 'impact',
                size: 25,
                unit: FontUnit.Px
            })
        });

        this.addChild(this.scoreLabel);
        this.addChild(this.deathLabel);
    }

    addScore() {
        this.score++;
        this.updateScore();
    }

    addDeath() {
        this.death++;
        this.updateDeath();
    }

    updateScore() {
        this.scoreLabel.text = `Kribo: ${this.score}`;
    }

    updateDeath() {
        this.deathLabel.text = `Deaths: ${this.death}`;
    }
}
