import type { Matrix3, Euler, Vector2 } from 'three'

export interface ITransformable {
  move(moveVector: Vector2): ITransformable
  rotate(theta: number): ITransformable
  resetTransforamtion(): ITransformable
}

export function implementsTransformable(obj: any): boolean {
  return typeof obj.move === 'function' && typeof obj.rotate === 'function'
}
