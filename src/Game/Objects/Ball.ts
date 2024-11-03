import GameObject from '@/Game/Objects/GameObjectBase'
import type { ITransformable } from '../Interfaces/ITransformable'
import type { IDrawable } from '../Interfaces/IDrawble'
import { Euler, Vector2 } from 'three'
import { DrawHelpers } from '../Helpers/DrawHelpers'
import Point from './Point'

export default class Ball extends Point {
  constructor(pos: Vector2, radius: number = 3, color: string = 'white') {
    // console.log("Ball constructor")
    super(pos, radius, color)
    // console.log("Ball constructor End")
  }
}
