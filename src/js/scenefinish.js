import { Scene, Label, FontUnit, Vector, Keys, Font, Color, Actor } from "excalibur"
import { Resources } from "./resources.js"
import { GameLevel } from "./gamelevel1.js"

export class SceneFinish extends Scene {
  
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

    const score = localStorage.getItem("highscore") || "0"

    this.highscoreLabel = new Label({
      text: `Highscore: ${score}`,
      font: new Font({
        size: 25,
        unit: FontUnit.Px,
        family: "Impact",
        color: Color.Yellow
      }),
      pos: new Vector(200, 260)
    })

    this.title = new Label({
      text: "Level 1 completed!",
      font: new Font({
        size: 40,
        unit: FontUnit.Px,
        family: "Impact",
        color: Color.White
      }),
      pos: new Vector(250, 160)
    })

    this.scoreLabel = new Label({
      text: "",
      font: new Font({
        size: 30,
        unit: FontUnit.Px,
        family: "Impact",
        color: Color.White
      }),
      pos: new Vector(200, 220)
    })

    const instruction = new Label({
      text: "Press ENTER to try again!",
      font: new Font({
        size: 25,
        unit: FontUnit.Px,
        family: "Impact",
        color: Color.White
      }),
      pos: new Vector(170, 320)
    })

    this.add(this.title)
    this.add(this.scoreLabel)
    this.add(this.highscoreLabel)
    this.add(instruction)
  }

  onActivate(context) {
    const score = context.score || 0

    if (localStorage.getItem("highscore")) {
      const highscore = localStorage.getItem("highscore")
      if (highscore < score) {
        localStorage.setItem("highscore", score)
      }
    } else {
      localStorage.setItem("highscore", score)
    }

    this.scoreLabel.text = `Your score: ${score}.`
    const highscore = localStorage.getItem("highscore")
    this.highscoreLabel.text = `Highscore: ${highscore}`

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
}
