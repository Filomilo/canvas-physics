import { IEmitter } from '@/Game/Interfaces/IEmitter'
import GameObject from '../GameObjectBase'
import { threadId } from 'worker_threads'
import { IDrawable } from '@/Game/Interfaces/IDrawble'
import ISimulatable from '@/Game/Interfaces/ISimulatable'
import { Vector2 } from 'three'
import { IUpdatable } from '@/Game/Interfaces/IUpatable'
import { GameConfig } from '@/Game/GameConfig'
import SpingNode from './SpingNode'
import SpringLine from './SpringLine'
import MovableSpringNode from './MovableSpringNode'

export default class Spring extends GameObject implements ISimulatable, IUpdatable {
  protected _nodes: SpingNode[] = []
  protected _lines: SpringLine[] = []

  constructor(
    paramOne: undefined | SpingNode[] | Vector2 = undefined,
    paramTwo: Vector2 | undefined = undefined,
    paramThree: number | undefined = undefined
  ) {
    super()
    console.log(
      `Spring Constructor= (paramOne: ${JSON.stringify(paramOne)} ; paramTwo: ${JSON.stringify(paramTwo)} ; paramTwo: ${JSON.stringify(paramThree)})`
    )
    if (Array.isArray(paramOne)) {
      ;(paramOne as SpingNode[]).forEach((node: SpingNode) => {
        this.addSpringNode(node)
      })
    }
    if (
      paramOne !== undefined &&
      paramTwo !== undefined &&
      paramThree !== undefined &&
      !Array.isArray(paramOne)
    ) {
      console.log(`nodes: ${JSON.stringify(this._nodes)}`)
      this.addSpringNode(new MovableSpringNode(paramOne, 40)).IsSimulatable = false
      const stepVector: Vector2 = paramTwo
        .clone()
        .sub(paramOne)
        .divideScalar(paramThree + 1)
      for (let index = 0; index < paramThree; index++) {
        const newPos: Vector2 = paramOne.clone().add(stepVector.clone().multiplyScalar(index + 1))
        this.addSpringNode(new SpingNode(newPos, 10))
      }

      this.addSpringNode(new MovableSpringNode(paramTwo, 40)).IsSimulatable = false
      console.log(`nodes: ${JSON.stringify(this._nodes)}`)
    }
  }
  getWeight(): number {
    return 1
  }

  modifyVelocity(modifyFuntion: (vel: Vector2) => Vector2): void {
    // this._nodes.forEach((x: SpingNode) => {
    //   x.modifyVelocity(modifyFuntion)
    // })
  }
  addVelocity(vel: Vector2): void {
    // this._nodes.forEach((x: SpingNode) => {
    //   x.addVelocity(vel)
    // })
  }
  addRotationSpeed(rotSpeed: number): void {
    // throw new Error("Method not implemented.");
  }
  applyVelocity(): void {
    // this._nodes.forEach((x: SpingNode) => {
    //   x.applyVelocity()
    // })
  }
  applyRotationSpeed(): void {
    // throw new Error("Method not implemented.");
  }
  IsSimulatable: boolean = true
  update(dt: number): void {
    // this._lines.forEach((x: SpringLine) => {
    //   x.update(dt)
    // })
    // throw new Error("Method not implemented.");
  }

  public addSpringNode(node: SpingNode): SpingNode {
    if (this._nodes.length > 0) {
      const line: SpringLine = new SpringLine(this._nodes[this._nodes.length - 1], node)
      line.game = this.game

      this._lines.push(line)
    }
    node.game = this.game
    this._nodes.push(node)
    return node
  }

  public getChildObjects(): GameObject[] {
    return [...this._lines, ...this._nodes]
  }
}
