import ISimulatable from '@/Game/Interfaces/ISimulatable'
import Point from '../Point'
import { IUpdatable } from '@/Game/Interfaces/IUpatable'
import { Vector2 } from 'three'

export default class SpingNode extends Point implements ISimulatable, IUpdatable {
  getWeight(): number {
    return 1
  }
  modifyVelocity(modifyFuntion: (vel: Vector2) => Vector2): void {
    if (this.IsSimulatable) this._vel = modifyFuntion(this._vel)
    // console.log(`modifyVelocity this._vel: ${JSON.stringify(this._vel)}`)
  }
  _vel: Vector2 = new Vector2(0, 0)
  resetVel(){
    this._vel=new Vector2();
  }
  addVelocity(vel: Vector2): void {
    if (this.IsSimulatable) this._vel.add(vel)
    // console.log(`addVelocity this._vel: ${JSON.stringify(this._vel)}`)
  }
  addRotationSpeed(rotSpeed: number): void {}
  applyVelocity(): void {
    if (this.IsSimulatable) this.position.add(this._vel)
  }
  applyRotationSpeed(): void {}
  IsSimulatable: boolean = true
  update(dt: number): void {
    const moveVec = new Vector2(dt / 1000, 0)
    // console.log(`new move vecotr: ${JSON.stringify(moveVec)}`)
    // this.move(moveVec)
    // console.log(`new postion vecotr: ${JSON.stringify(this.position)}`)
  }
}
