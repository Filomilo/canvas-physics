import { Vector2 } from 'three'
import { IAffector } from '../Interfaces/IAffector'
import ISimulatable from '../Interfaces/ISimulatable'
import { GameConfig } from '../GameConfig'
import GameObject from '../Objects/GameObjectBase'

export default class Gravity extends GameObject implements IAffector {
  constructor() {
    super()
  }
  affect(simulatable: ISimulatable): void {
    // console.log("Gravity")
    simulatable.addVelocity(
      new Vector2(0, GameConfig.Gravity * GameConfig.SimulationTimeStep * simulatable.getWeight())
    )
  }
}
