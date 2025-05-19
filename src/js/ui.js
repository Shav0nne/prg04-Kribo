import { Actor, Engine, Vector, Label, Font, FontUnit, Text } from "excalibur"

export class UI extends Actor {

    mylabel

    constructor() {
        super()
        console.log("Ik ben UI")

        this.score = 0
        this.mylabel = new Label({
            text: `Score: ${this.score}`,
            pos: new Vector(100, 100),
            font: new Font({
                family: 'impact',
                size: 40,
                unit: FontUnit.Px
            })
        })
        this.addChild(this.mylabel)
        this.mylabel.text = "score: "
    }

    addScore() {
        console.log("UI added a point")
    }

    updateScore() {
        this.score++
        this.mylabel.text = `Score: ${this.score}`
    }
}