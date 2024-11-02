import GameObject from '@/Game/Objects/GameObjectBase'
import type { ITransformable } from '../Interfaces/ITransformable'
import type { IDrawable } from '../Interfaces/IDrawble'
import { Euler, Vector2 } from 'three'
import { DrawHelpers } from '../Helpers/DrawHelpers'
import Point from './Point'
import Ball from './Ball'
import ISimulatable from '../Interfaces/ISimulatable'
import { ICollidable } from '../Interfaces/ICollidable'
import { CalculationHelpes, minMax } from '../Helpers/CalculationHelpes'
import { GameConfig } from '../GameConfig'

export default class PhysicBall extends Ball implements ISimulatable, ICollidable {
  IsSimulatable: boolean = true
  constructor(pos: Vector2, radius: number = 3, color: string = 'white') {
    super(pos, radius, color)
  }
  isActivator: boolean = false
  isCollsioniActive: boolean = true
  OnObjectEnter(collidable: ICollidable): void {
    // do nothing
  }
  getWeight(): number {
    return 1
  }
  modifyVelocity(modifyFuntion: (vel: Vector2) => Vector2): void {
    this.Velocity = modifyFuntion(this.Velocity)
    this.Velocity =
      this.Velocity.length() > GameConfig.speedLimit
        ? this.Velocity.normalize().multiplyScalar(GameConfig.speedLimit)
        : this.Velocity
  }
  addVelocity(vel: Vector2): void {
    this.Velocity.add(vel)
    this.Velocity =
      this.Velocity.length() > GameConfig.speedLimit
        ? this.Velocity.normalize().multiplyScalar(GameConfig.speedLimit)
        : this.Velocity
  }
  addRotationSpeed(rotSpeed: number): void {
    this.rotationSpeed += rotSpeed
  }
  applyVelocity(): void {
    this.move(this.Velocity)
  }
  applyRotationSpeed(): void {
    this.rotate(this.rotationSpeed)
  }
  getCenterPoint(): Vector2 {
    return new Vector2(this.position.x, this.position.y)
  }
  castObjectOntoNormal(N: Vector2): minMax {
    const pointOnAxis: number = CalculationHelpes.castPointOnAxis(this.position, N)
    const min = pointOnAxis - this._radius / 2
    const max = pointOnAxis + this._radius / 2
    return {
      min: min,
      max: max
    }
  }
  getNormalsForCollision(): Vector2[] {
    return []
  }
  rotationSpeed: number = 0
  Velocity: Vector2 = new Vector2()

  draw(ctx: CanvasRenderingContext2D): void {
    super.draw(ctx)
    // console.log("Velocity: "+JSON.stringify( this.Velocity))
  }
}
