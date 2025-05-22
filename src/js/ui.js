import { Actor, Engine, Vector, Label, Font, FontUnit, Text } from "excalibur"

export class UI extends Actor {
    constructor() {
        super();
        this.score = 0;
        this.mylabel = new Label({
            text: `Score: ${this.score}`,
            pos: new Vector(100, 100),
            font: new Font({
                family: 'impact',
                size: 40,
                unit: FontUnit.Px
            })
        });
        this.addChild(this.mylabel);
    }

    addPoint() {
        this.score += 1;
        this.updatePoint();
    }

    updatePoint() {
        this.mylabel.text = `Kribo: ${this.score}`;
    }
}
