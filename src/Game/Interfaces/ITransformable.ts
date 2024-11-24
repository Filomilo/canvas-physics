import type { Matrix3, Euler, Vector2 } from 'three'

export interface ITransformable {
  move(moveVector: Vector2): ITransformable
  rotate(theta: number): ITransformable
  setPosition(pos: Vector2): ITransformable
  setRotation(thetha: number): ITransformable
}

export function implementsTransformable(obj: any): boolean {
  return typeof obj.move === 'function' && typeof obj.rotate === 'function'
}
