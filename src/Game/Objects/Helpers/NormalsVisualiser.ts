import { Vector2 } from 'three'
import Polygon from '../Polygon'
import { IDrawable } from '@/Game/Interfaces/IDrawble'
import { CalculationHelpes } from '@/Game/Helpers/CalculationHelpes'
import { DrawHelpers } from '@/Game/Helpers/DrawHelpers'
import GameObject from '../GameObjectBase'

class NormalsVisualiser extends GameObject implements IDrawable {
  private _polygon!: Polygon

  constructor(polygon: Polygon) {
    super()
    this._polygon = polygon
  }
  draw(ctx: CanvasRenderingContext2D): void {
    // const points: Vector2[] = this._polygon.getTransformedPoints()
    const pts = this._polygon.getTransformedPoints()
    const normals = CalculationHelpes.getNormalsOfConnectedPoints(
      this._polygon.getTransformedPoints()
    )
    pts.push(pts[0])
    for (let index = 0; index < normals.length; index++) {
      const pt1 = pts[index]
      const pt2 = pts[index + 1]
      const middle = new Vector2((pt1.x + pt2.x) / 2, (pt1.y + pt2.y) / 2)
      DrawHelpers.drawCircle(ctx, middle.x, middle.y, 3, 'red')
      DrawHelpers.drawLine(
        ctx,
        middle.x,
        middle.y,
        normals[index].x * 100 + middle.x,
        normals[index].y * 100 + middle.y,
        2,
        'red'
      )
    }
    normals.forEach((x) => {})
    // console.log('normalks: ' + JSON.stringify(normals))
  }

  visible: boolean = true
}
export default NormalsVisualiser
