import { Actor, Vector, Label, Font, FontUnit } from "excalibur"

export class UI extends Actor {
    
    score
    mylabel

    constructor() {
        super();
        this.score = 0;

        this.mylabel = new Label({
            text: `Kribo: ${this.score}`,
            pos: new Vector(100, 100),
            font: new Font({
                family: 'impact',
                size: 40,
                unit: FontUnit.Px
            })
        });

        this.addChild(this.mylabel);
    }

    addScore() {
        this.score++;
        this.updateScore();
    }

    updateScore() {
        this.mylabel.text = `Kribo: ${this.score}`;
    }
}