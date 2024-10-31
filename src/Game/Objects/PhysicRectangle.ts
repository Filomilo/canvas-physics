import { Vector2 } from 'three'
import ISimulatable from '../Interfaces/ISimulatable'
import CollidableRectangle from './CollidableRectangle'

export class PhysicRectangle extends CollidableRectangle implements ISimulatable {
  getWeight(): number {
    return 1
  }
  modifyVelocity(modifyFuntion: (vel: Vector2) => Vector2): void {
    this.Velocity = modifyFuntion(this.Velocity)
  }
  addVelocity(vel: Vector2): void {
    this.Velocity.add(vel)
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
  rotationSpeed: number = 0
  Velocity: Vector2 = new Vector2()
  IsSimulatable: boolean = true
}
