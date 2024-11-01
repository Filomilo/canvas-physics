import { IEmitter } from '@/Game/Interfaces/IEmitter'
import { Vector2 } from 'three'

import ISimulatable from '../Interfaces/ISimulatable'
import { ICollidable, implementsCollidable } from '../Interfaces/ICollidable'
import GameObject from '@/Game/Objects/GameObjectBase'
import { ITransformable } from '../Interfaces/ITransformable'
import { json } from 'stream/consumers'

export default class FanForce extends GameObject implements ITransformable {
  _position: Vector2 = new Vector2()
  _width: number = 0
  _heightRange: number = 0
  _force: number = 0

  constructor(position: Vector2, width: number, heightRange: number, force: number) {
    super()

    this._position = position
    this._width = width
    this._heightRange = heightRange
    this._force = force
  }
  move(moveVector: Vector2): ITransformable {
    //
    //  throw new Error('Method not implemented.')
    this._position.add(moveVector)
    return this as unknown as ITransformable
  }
  rotate(theta: number): ITransformable {
    // throw new Error('Method not implemented.')
    return this as unknown as ITransformable
  }

  affect(simulatable: ISimulatable): void {
    if (implementsCollidable(simulatable)) {
      const collidable = simulatable as unknown as ICollidable
      const pos: Vector2 = collidable.getCenterPoint()
      if (pos.x > this._position.x + this._width / 2 || pos.x < this._position.x - this._width / 2)
        return
      if (pos.y < this._position.y - this._heightRange || pos.y > this._position.y) return

      const distanceFromFanSorce = Math.abs(pos.y - this._position.y)
      const normalizeDistance = 1 - distanceFromFanSorce / this._heightRange
      const ForceToApply = normalizeDistance * this._force
      //   console.log(`normalizeDistance ${normalizeDistance}`)
      simulatable.addVelocity(new Vector2(0, -ForceToApply))
    }
  }
}
