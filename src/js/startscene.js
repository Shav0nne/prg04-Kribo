import { Scene, Label, FontUnit, Vector, Keys, Font, Color } from "excalibur";
import { GameLevel } from './gamelevel1.js';

export class StartScene extends Scene {
    onInitialize(engine) {
        const title = new Label({
            text: "The Bizarre Kribo Adventure",
            font: new Font({
                size: 40,
                unit: FontUnit.Px,
                family: 'Arial',
                color: Color.White
            }),
            pos: new Vector(100, 200)
        });

        const instruction = new Label({
            text: "Press ENTER to start",
            font: new Font({
                size: 20,
                unit: FontUnit.Px,
                family: 'Arial',
                color: Color.White
            }),
            pos: new Vector(100, 260)
        });

        this.add(title);
        this.add(instruction);
    }

    onActivate() {
        const kb = this.engine.input.keyboard;
        this._enterHandler = (evt) => {
            if (evt.key === Keys.Enter) {
                console.log("Start game!");
                this.engine.removeScene("game");
                this.engine.add("game", new GameLevel());
                this.engine.goToScene("game");
            }
        };

        kb.on("press", this._enterHandler);
    }


    onDeactivate() {
        this.engine.input.keyboard.off("press", this._enterHandler);
    }
}