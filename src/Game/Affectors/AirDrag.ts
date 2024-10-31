import { Vector2 } from 'three'
import { IAffector } from '../Interfaces/IAffector'
import ISimulatable from '../Interfaces/ISimulatable'
import { GameConfig } from '../GameConfig'
import GameObject from '../Objects/GameObjectBase'

export default class Gravity extends GameObject implements IAffector {
  private _power: number = 0

  constructor(power: number) {
    super()
    this._power = power
  }
  affect(simulatable: ISimulatable): void {
    simulatable.modifyVelocity((vel: Vector2) => {
      return vel
      //   return vel.multiplyScalar((1 / this._power) * simulatable.getWeight())
    })
  }
}
