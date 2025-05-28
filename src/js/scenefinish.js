import { Scene, Label, FontUnit, Vector, Keys, Font, Color, Actor } from "excalibur"
import { Resources } from "./resources.js"
import { GameLevel } from "./gamelevel1.js"

export class SceneFinish extends Scene {
  /**
   * @param {object} data 
   * @param {number} data.score 
   */
  onInitialize(engine) {
    const background = new Actor({
      pos: new Vector(400, 300),
      width: 800,
      height: 600,
      anchor: new Vector(0.5, 0.5)
    })

    const bgSprite = Resources.Scenebg.toSprite()
    background.graphics.use(bgSprite)
    background.scale = background.scale.scale(2)

    this.add(background)

    this.title = new Label({
      text: "Level completed!",
      font: new Font({
        size: 40,
        unit: FontUnit.Px,
        family: "Impact",
        color: Color.White
      }),
      pos: new Vector(260, 160)
    })

    this.scoreLabel = new Label({
      text: `score = ${this.score}`, 
      font: new Font({
        size: 30,
        unit: FontUnit.Px,
        family: "Impact",
        color: Color.White
      }),
      pos: new Vector(260, 220)
    })

    const instruction = new Label({
      text: "Press ENTER to try again!",
      font: new Font({
        size: 30,
        unit: FontUnit.Px,
        family: "Impact",
        color: Color.White
      }),
      pos: new Vector(260, 280)
    })

    this.add(this.title)
    this.add(this.scoreLabel)
    this.add(instruction)
  }

  /**
   * Wordt aangeroepen als de scene actief wordt.
   * @param {object} context
   * @param {number} context.score
   */
  onActivate(context) {
    const tijd = context?.score ?? 0
    this.scoreLabel.text = `Highscore: ${tijd.toFixed(1)} seconden`

    const kb = this.engine.input.keyboard
    this._enterHandler = (evt) => {
      if (evt.key === Keys.Enter) {
        this.engine.removeScene("game")
        this.engine.add("game", new GameLevel())
        this.engine.goToScene("game")
      }
    }

    kb.on("press", this._enterHandler)
  }

  onDeactivate() {
    this.engine.input.keyboard.off("press", this._enterHandler)
  }
}
