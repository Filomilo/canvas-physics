import { Vector2 } from 'three'
import { IActivtable } from '../Interfaces/IActivtable'
import PhysicBall from './PhysicBall'
import { stringify } from 'flatted'
import { ObjectsHelpers } from '../Helpers/ObjectsHelpers'

class PlayerBall extends PhysicBall implements IActivtable {
  constructor(pos: Vector2) {
    super(pos, 20, '#2596be')
  }

  activate(): void {
    // console.log(`Destroy Ball: ${stringify(this)}`)
    ObjectsHelpers.spawnParticlesOnce(this.game!, this.position.clone())
    this.game!.destroyObject(this)
  }
}

export default PlayerBall
