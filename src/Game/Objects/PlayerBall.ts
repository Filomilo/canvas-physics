import { Vector2 } from 'three'
import { IActivtable } from '../Interfaces/IActivtable'
import PhysicBall from './PhysicBall'
import { stringify } from 'flatted'
import { ObjectsHelpers } from '../Helpers/ObjectsHelpers'

class PlayerBall extends PhysicBall implements IActivtable {
  private activateMethods: (() => void)[] = []
  public addOnACtivateMethod(method: () => void) {
    this.activateMethods.push(method)
  }

  constructor(pos: Vector2) {
    super(pos, 20, '#2596be')
    this.addOnACtivateMethod(() => {
      ObjectsHelpers.spawnParticlesOnce(this.game!, this.position.clone())
      this.game!.destroyObject(this)
    })
  }

  activate(): void {
    this.activateMethods.forEach((method) => {
      method()
    })
    // console.log(`Destroy Ball: ${stringify(this)}`)
  }
}

export default PlayerBall
