import '../css/style.css'
import { Engine, DisplayMode, FadeInOut, Color } from "excalibur"
import { ResourceLoader } from './resources.js'
import { StartScene } from './startscene.js'
import { GameLevel } from './gamelevel1.js'

class Game extends Engine {
  constructor() {
    super({ 
      width: 800,
      height: 600,
      maxFps: 60,
      displayMode: DisplayMode.FitScreen
    })
    this.start(ResourceLoader).then(() => this.startGame())
  }

  startGame() {
    const transitions = {
      in: new FadeInOut({ duration: 400, direction: 'in', color: Color.Black }),
      out: new FadeInOut({ duration: 400, direction: 'out', color: Color.Black })
    }

    this.add('start', { scene: new StartScene(), transitions })
    this.add('game', { scene: new GameLevel(), transitions })

    this.goToScene('start')
  }
}

new Game()
