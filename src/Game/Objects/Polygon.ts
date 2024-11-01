import { Euler, Vector2, Matrix3 } from 'three'
import type { IDrawable } from '../Interfaces/IDrawble'
import GameObject from './GameObjectBase'
import { DrawHelpers } from '../Helpers/DrawHelpers'
import { GameConfig } from '../GameConfig'
import type { ITransformable } from '../Interfaces/ITransformable'

export default class Polygon extends GameObject implements IDrawable, ITransformable {
  protected _points: Vector2[] = []
  protected _color: string = 'white'

  constructor(points: Vector2[], color: string = 'White') {
    super()
    this._points = points
    this._color = color
  }
  transformation: Matrix3 = new Matrix3(1, 0, 0, 0, 1, 0, 0, 0, 1)
  localTransformation: Matrix3 = new Matrix3(1, 0, 0, 0, 1, 0, 0, 0, 1)

  move(moveVector: Vector2): ITransformable {
    // console.log('move')
    this.transformation.translate(moveVector.x, moveVector.y)
    // console.log('move: ' + JSON.stringify(moveVector))
    return this as unknown as ITransformable
  }
  rotate(theta: number): ITransformable {
    // console.log('theta; ' + theta)
    this.localTransformation.rotate(theta)
    return this as unknown as ITransformable
  }

  public getTransformedPoints(): Vector2[] {
    return this._points.map((point) => {
      const clonedPoint: Vector2 = new Vector2(point.x, point.y)
      return clonedPoint.applyMatrix3(this.localTransformation).applyMatrix3(this.transformation)
    })
  }
  getMidAvgPoint() {
    const pts = this.getTransformedPoints()
    const sum = new Vector2()
    pts.forEach((vec: Vector2) => [sum.add(vec)])
    return sum.divide(new Vector2(pts.length, pts.length))
  }
  draw(ctx: CanvasRenderingContext2D): void {
    const transformedPoints: Vector2[] = this.getTransformedPoints()
    // console.log('this._points: ' + JSON.stringify(this._points))
    if (!GameConfig.DoDrawAsPolygon) DrawHelpers.drawShape(ctx, transformedPoints, this._color)
    else {
      DrawHelpers.drawLines(ctx, transformedPoints, 2, this._color)
      transformedPoints.forEach((pt: Vector2) => {
        DrawHelpers.drawCircle(ctx, pt.x, pt.y, 5, this._color)
      })
    }
  }
  visible: boolean = true
}
