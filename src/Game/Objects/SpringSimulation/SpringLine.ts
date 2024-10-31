import ISimulatable from '@/Game/Interfaces/ISimulatable'
import Point from '../Point'
import { IUpdatable } from '@/Game/Interfaces/IUpatable'
import { Vector2 } from 'three'
import GameObject from '../GameObjectBase'
import SpringNode from './SpingNode'
import { IDrawable } from '@/Game/Interfaces/IDrawble'
import { DrawHelpers } from '@/Game/Helpers/DrawHelpers'
import SpingNode from './SpingNode'
import { GameConfig } from '@/Game/GameConfig'

export default class SpringLine extends GameObject implements IDrawable, ISimulatable, IUpdatable {
  protected _node1: SpringNode
  protected _node2: SpringNode
  protected _length: number

  constructor(node1: SpringNode, node2: SpringNode) {
    super()
    this._node1 = node1
    this._node2 = node2
    this._length = node1.position.distanceTo(node2.position)
    console.log('_length: ' + this._length)
  }
  getWeight(): number {
    return 0
  }
  draw(ctx: CanvasRenderingContext2D): void {
    DrawHelpers.DrawLine(ctx, this._node1.position, this._node2.position, 5, 'yellow')
  }
  visible: boolean = true
  update(dt: number): void {
    const currDistance = this._node1.position.distanceTo(this._node2.position)
    if (currDistance !== this._length) {
      const feedBackApply = (node1: SpringNode, node2: SpingNode) => {
        const vecDiff: Vector2 = node1.position.clone().sub(node2.position)
        const direction = vecDiff.clone().normalize()
        const diifFromDesire: number = vecDiff.length() - this._length
        // console.log('direction: ' + JSON.stringify(direction))

        if (node1.IsSimulatable) {
          // console.log('node1 is is simluatable')
          const moveVec = direction
            .clone()
            .multiplyScalar(-diifFromDesire / 2)
            .multiplyScalar(node2.IsSimulatable ? 0.5 : 2)
          // .multiplyScalar(dt * 100)
          node1.move(moveVec)

          // node1.move(vecDiff.multiplyScalar(1))

          node1.modifyVelocity((vel: Vector2) => {
            const resolvingVel: Vector2 = moveVec.clone().multiplyScalar(0.1)
            // .multiplyScalar(node2.IsSimulatable ? 1 : 0.5)
            // .multiplyScalar(dt)
            // .multiplyScalar(0.1)
            const newVEl: Vector2 = vel.clone().add(resolvingVel)
            // console.log('resolvingVel: ' + JSON.stringify(resolvingVel))
            return newVEl
            // .add(vel.clone().multiplyScalar(0.21))
          })
        }
      }
      feedBackApply(this._node1, this._node2)
      feedBackApply(this._node2, this._node1)

      //   const afterdist = this._node2.position.distanceTo(this._node1.position)
      //   // console.log("afterdist: "+afterdist)
      //   if (Math.abs(afterdist - this._length) > 0.001) {
      //     throw (
      //       "Spring distance constraint didn't resolve: \n + length should be [ " +
      //       this._length +
      //       ' ] but is [ ' +
      //       afterdist +
      //       ' ] '
      //     )
      //   }
    }
  }
  private counter = 0

  private modfyMehtods: string[] = []
  modifyVelocity(modifyFuntion: (vel: Vector2) => Vector2): void {
    const log = modifyFuntion.toString()
    if (!this.modfyMehtods.includes(log)) this.modfyMehtods.push(log)
    // if (this.counter++ % 1000 === 0)
    //   console.log(`Spring line modifyVelocity: ${JSON.stringify(this.modfyMehtods)}`)
    this._node1.modifyVelocity(modifyFuntion)
    this._node2.modifyVelocity(modifyFuntion)
  }
  addVelocity(vel: Vector2): void {}
  addRotationSpeed(rotSpeed: number): void {}
  applyVelocity(): void {}
  applyRotationSpeed(): void {}
  IsSimulatable: boolean = true
}
