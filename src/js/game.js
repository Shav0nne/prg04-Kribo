import '../css/style.css'
import { Engine, DisplayMode, FadeInOut, Color, SolverStrategy, Vector } from "excalibur"
import { ResourceLoader } from './resources.js'
import { StartScene } from './startscene.js'
import { SceneFinish } from './scenefinish.js';
import { GameLevel } from './gamelevel1.js'

  class Game extends Engine {
    constructor() {
      super({ 
        width: 800,
        height: 600,
        maxFps: 60,
        displayMode: DisplayMode.FitScreen,
        physics: {
          solver: SolverStrategy.Arcade,
          gravity: new Vector(0, 800)
        }
      })
  
      this.start(ResourceLoader).then(() => this.startGame())
    }
  
    startGame() {
      // this.showDebug(true)
      const transitions = {
        in: new FadeInOut({ duration: 400, direction: 'in', color: Color.Black }),
        out: new FadeInOut({ duration: 400, direction: 'out', color: Color.Black })
      }
    
      this.add('start', {
        scene: new StartScene(),
        transitions: {
          in: new FadeInOut({ duration: 400, direction: 'in', color: Color.Black }),
          out: new FadeInOut({ duration: 400, direction: 'out', color: Color.Black })
        }
      })
      
      this.add('game', {
        scene: new GameLevel(),
        transitions: {
          in: new FadeInOut({ duration: 400, direction: 'in', color: Color.Black }),
          out: new FadeInOut({ duration: 400, direction: 'out', color: Color.Black })
        }
      })
      
      this.add('finish', {
        scene: new SceneFinish(), 
        transitions: {
          in: new FadeInOut({ duration: 400, direction: 'in', color: Color.Black }),
          out: new FadeInOut({ duration: 400, direction: 'out', color: Color.Black })
        }
      })      
    
      this.goToScene('start')
    }    
  }
  
  new Game()
