import GameObject from '@/Game/Objects/GameObjectBase'
import type { ITransformable } from '../Interfaces/ITransformable'
import type { IDrawable } from '../Interfaces/IDrawble'
import { Euler, Vector2 } from 'three'
import { DrawHelpers } from '../Helpers/DrawHelpers'

export default class Point extends GameObject implements ITransformable, IDrawable {
  protected _color: string
  public position: Vector2
  public rotation: Euler = new Euler()
  public _radius: number = 1
  public visible: boolean = true
  constructor(pos: Vector2, radius: number = 3, color: string = 'white') {
    if (!pos) throw 'position cannont be undefind'
    super()
    // console.log('Point constructor: ' + radius)
    this.position = pos
    this._radius = radius
    this._color = color
  }
  rotate(theta: number): ITransformable {
    return this as unknown as ITransformable
  }

  move(moveVector: Vector2): ITransformable {
    this.position.add(moveVector)
    // this._radius=radius;
    return this as unknown as ITransformable
  }

  draw(ctx: CanvasRenderingContext2D): void {
    // console.log("Draw: "+this._Color)
    DrawHelpers.drawCircle(ctx, this.position.x, this.position.y, this._radius, this._color)
  }

  public clone(): any {
    const obj = super.clone()
    obj._color = this._color
    obj.position = this.position.clone()
    obj.rotation = this.rotation
    obj._radius = this._radius
    obj.visible = this.visible

    return obj
  }
}
