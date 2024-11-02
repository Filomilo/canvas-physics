import type { Vector2 } from 'three'
import type { IMouseReactive } from './IMouseReactive'
import { minMax } from '../Helpers/CalculationHelpes'
export interface ICollidable {
  isCollsioniActive: boolean
  isActivator: boolean
  castObjectOntoNormal(N: Vector2): minMax
  getNormalsForCollision(): Vector2[]
  getCenterPoint(): Vector2
  OnObjectEnter(collidable: ICollidable): void
}

export function implementsCollidable(obj: any): boolean {
  return (
    typeof obj.getNormalsForCollision === 'function' &&
    typeof obj.getNormalsForCollision === 'function' &&
    typeof obj.getCenterPoint === 'function' &&
    typeof obj.isCollsioniActive === 'boolean' &&
    typeof obj.isActivator === 'boolean' &&
    typeof obj.OnObjectEnter === 'function'
  )
}
