import { Scene, Label, FontUnit, Vector, Keys, Font, Color, Actor } from "excalibur"
import { Resources } from "./resources.js"
import { GameLevel } from "./gamelevel1.js"

export class StartScene extends Scene {
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

        const title = new Label({
            text: "The Bizarre Kribo Adventure",
            font: new Font({
                size: 40,
                unit: FontUnit.Px,
                family: "Impact",
                color: Color.White,
                textAlign: 'center'
            }),
            pos: new Vector(400, 200),
        })

        const instruction = new Label({
            text: "Press Enter to start the game",
            font: new Font({
                size: 30,
                unit: FontUnit.Px,
                family: "Impact",
                color: Color.White,
                textAlign: 'center'
            }),
            pos: new Vector(400, 260),
        })
        this.add(title)
        this.add(instruction)
    }

    onPreUpdate(engine, delta) {
        const kb = engine.input.keyboard;
        if (kb.wasPressed(Keys.Enter)) {
            console.log("Start game!");
            this.engine.removeScene("game");
            this.engine.add("game", new GameLevel());
            this.engine.goToScene("game");
        }
    }

    onDeactivate() {
        this.engine.input.keyboard.off("press", this._enterHandler)
    }
}
