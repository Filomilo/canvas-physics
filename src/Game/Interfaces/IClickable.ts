import type { Vector2 } from 'three'
import type { IMouseReactive } from './IMouseReactive'

export interface IClickable extends IMouseReactive {
  onClick(): void
}

export function implementsClickable(obj: any): boolean {
  return typeof obj.onClick === 'function'
}
