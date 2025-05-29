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

    this.highscoreLabel = new Label({
      text: `Highscore: 0`,
      font: new Font({
        size: 25,
        unit: FontUnit.Px,
        family: "Impact",
        color: Color.Yellow,
        textAlign: 'center'
      }),
      pos: new Vector(400, 260)
    });

    this.title = new Label({
      text: "Level 1 completed!",
      font: new Font({
        size: 40,
        unit: FontUnit.Px,
        family: "Impact",
        color: Color.White,
        textAlign: 'center'
      }),
      pos: new Vector(400, 200)
    })

    this.scoreLabel = new Label({
      text: "",
      font: new Font({
        size: 30,
        unit: FontUnit.Px,
        family: "Impact",
        color: Color.White
      }),
      pos: new Vector(280, 200)
    })

    const instruction = new Label({
      text: "Press ENTER to try again!",
      font: new Font({
        size: 25,
        unit: FontUnit.Px,
        family: "Impact",
        color: Color.White,
        textAlign: 'center'
      }),
      pos: new Vector(400, 360)
    })

    this.add(this.title)
    this.add(this.scoreLabel)
    this.add(this.highscoreLabel)
    this.add(instruction)
  }

onActivate(context) {
    console.log("Context received in finish scene:", context);

    //AI gevraagt!
    const score = typeof context.data?.score === "number" ? context.data.score : 0;

    if (localStorage.getItem("highscore")) {
        const highscore = parseInt(localStorage.getItem("highscore"));
        if (score > highscore) {
            localStorage.setItem("highscore", score);
        }
    } else {
        localStorage.setItem("highscore", score);
    }

    const latestHighscore = localStorage.getItem("highscore");
    this.highscoreLabel.text = `Highscore: ${latestHighscore}`;
  }
    
    onPreUpdate(engine, delta) {
        const kb = engine.input.keyboard;
        if (kb.wasPressed(Keys.Enter)) {
            this.engine.removeScene("game");
            this.engine.add("game", new GameLevel());
            this.engine.goToScene("game");
        }
      }
    }
  
