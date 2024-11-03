import { Vector2 } from 'three'
import { CalculationHelpes, minMax } from './CalculationHelpes'
import { json } from 'stream/consumers'
import { ICollidable } from '../Interfaces/ICollidable'
import ParticleSolver from '../Objects/Particles/ParticleSolver'
import PointEmitter from '../Objects/Particles/Emitters/PointEmitter'
import Game from '@/Game/Game'
export namespace ObjectsHelpers {
  export function spawnParticlesOnce(game: Game, pos: Vector2) {
    const solver: ParticleSolver = new ParticleSolver()

    const emitter: PointEmitter = new PointEmitter(pos, 17, 3)
    solver.addEmitter(emitter)
    game.addObject(solver)
    setInterval(() => {
      emitter.isActive = false
      setInterval(() => {
        game.destroyObject(solver)
      }, 5000)
    }, 100)
  }
}
