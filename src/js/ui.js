import { ScreenElement, Vector, Label, Font, FontUnit } from "excalibur"

export class UI extends ScreenElement {
    score
    death
    scoreLabel

    constructor() {
        super({ anchor: Vector.Zero })
        this.score = 0
        this.death = 0

        this.deathLabel = new Label({
            text: `Deaths: ${this.death}`,
            pos: new Vector(0, 0),
            font: new Font({
                family: 'impact',
                size: 1,
                unit: FontUnit.Px
            })
        })

        this.scoreLabel = new Label({
            text: `Score: ${this.score}`,
            pos: new Vector(22, 80),
            font: new Font({
                family: 'impact',
                size: 25,
                unit: FontUnit.Px
            })
        })

        this.addChild(this.scoreLabel)
        this.addChild(this.deathLabel)
    }

    addScore(points = 10) {
        this.score += points
        this.updateScore()
    }

    addDeath() {
        this.death++
        this.updateDeath()
    }

    updateScore() {
        this.scoreLabel.text = `Score: ${this.score}`
    }

    updateDeath() {
        this.deathLabel.text = `Deaths: ${this.death}`
    }

    getScore() {
        return this.score
    }
}
