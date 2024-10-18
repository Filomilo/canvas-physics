import { Vector2 } from 'three'
import Polygon from '../Polygon'
import { IDrawable } from '@/Game/Interfaces/IDrawble'
import { CalculationHelpes, minMax } from '@/Game/Helpers/CalculationHelpes'
import { DrawHelpers } from '@/Game/Helpers/DrawHelpers'
import GameObject from '../GameObjectBase'
import { AlgorithmsHelpers } from '@/Game/Helpers/AlgorithmsHelpers'
import { dot } from 'three/webgpu'
import { ICollidable } from '@/Game/Interfaces/ICollidable'
import CollidablePolygon from '../CollidablePolygon'

class SasVisulaizer extends GameObject implements IDrawable {
  private _polygon1!: CollidablePolygon
  private _polygon2!: CollidablePolygon

  constructor(polygon1: CollidablePolygon, polygon2: CollidablePolygon) {
    super()
    this._polygon1 = polygon1
    this._polygon2 = polygon2
  }
  visible: boolean = true
  draw(ctx: CanvasRenderingContext2D): void {
    const pts1: Vector2[] = this._polygon1.getTransformedPoints()
    const pts2: Vector2[] = this._polygon2.getTransformedPoints()

    const normals: Vector2[] = CalculationHelpes.getNormalsOfConnectedPoints(pts1).concat(
      CalculationHelpes.getNormalsOfConnectedPoints(pts2)
    )

    normals.forEach((N: Vector2) => {
      N = new Vector2(Math.abs(N.x), Math.abs(N.y))
      DrawHelpers.drawLine(
        ctx,
        0,
        0,

        N.x * 1000,
        N.y * 1000,
        5,
        'blue'
      )

      const minMax1: minMax = CalculationHelpes.getMinMaxOfPointsOnAxis(pts1, N)
      const minMax2: minMax = CalculationHelpes.getMinMaxOfPointsOnAxis(pts2, N)

      // let max: number = Number.MIN_VALUE
      // let min: number = Number.MAX_VALUE
      // const theta: number = Math.atan2(N.y, N.x)
      // pts1.forEach((pt: Vector2) => {
      //   const len: number = N.dot(pt)
      //   DrawHelpers.drawCircle(ctx, N.x * len, N.y * len, 6, 'yellow')
      // })

      // pts2.forEach((pt: Vector2) => {
      //   const len: number = N.dot(pt)
      //   DrawHelpers.drawCircle(ctx, N.x * len, N.y * len, 4, 'purple')
      // })

      // console.log('minMax1: ' + JSON.stringify(minMax1))
      DrawHelpers.drawLine(
        ctx,
        minMax1.min * N.x,
        minMax1.min * N.y,
        minMax1.max * N.x,
        minMax1.max * N.y,
        10,
        'green'
      )
      DrawHelpers.drawLine(
        ctx,
        minMax2.min * N.x,
        minMax2.min * N.y,
        minMax2.max * N.x,
        minMax2.max * N.y,
        5,
        'pink'
      )
    })

    // normals.forEach((N: Vector2) => {

    //   if (!CalculationHelpes.checkIfMinMaxOverlap(minMax1, minMax2)) {
    //     return false
    //   } else {
    //     console.log(
    //       JSON.stringify(N) +
    //         ' casting resulted in: ' +
    //         JSON.stringify(minMax1) +
    //         ', ' +
    //         JSON.stringify(minMax2)
    //     )
    //   }
    // })

    const collsionVector: Vector2 | null = AlgorithmsHelpers.SasCollision(this._polygon1 as unknown as ICollidable, this._polygon2 as unknown as ICollidable)
    if (collsionVector !== null) {
      DrawHelpers.drawLines(ctx, pts1, 5, 'cyan')
      DrawHelpers.drawLines(ctx, pts2, 5, 'cyan')
      const midPoint1 = this._polygon1.getMidAvgPoint()
      const midPoint2 = this._polygon2.getMidAvgPoint()
      DrawHelpers.drawLine(
        ctx,
        midPoint1.x,
        midPoint1.y,
        midPoint1.x - collsionVector.x,
        midPoint1.y - collsionVector.y,
        10,
        'orange'
      )
      DrawHelpers.drawLine(
        ctx,
        midPoint2.x,
        midPoint2.y,
        midPoint2.x + collsionVector.x,
        midPoint2.y + collsionVector.y,
        10,
        'orange'
      )
    }
    // console.log('isCollsion: ' + isCollsion)
    //   this._polygon1.getTransformedPoints(),
    //   this._polygon2.getTransformedPoints()
    // )

    // console.log('isCollsion: ' + isCollsion)

    // // const points: Vector2[] = this._polygon.getTransformedPoints()
    // const pts = this._polygon.getTransformedPoints()
    // const normals = CalculationHelpes.getNormalsOfConnectedPoints(
    //   this._polygon.getTransformedPoints()
    // )
    // pts.push(pts[0])
    // for (let index = 0; index < normals.length; index++) {
    //   const pt1 = pts[index]
    //   const pt2 = pts[index + 1]
    //   const middle = new Vector2((pt1.x + pt2.x) / 2, (pt1.y + pt2.y) / 2)
    //   DrawHelpers.drawCircle(ctx, middle.x, middle.y, 3, 'red')
    //   DrawHelpers.drawLine(
    //     ctx,
    //     middle.x,
    //     middle.y,
    //     normals[index].x * 100 + middle.x,
    //     normals[index].y * 100 + middle.y,
    //     2,
    //     'red'
    //   )
    // }
    // normals.forEach((x) => {})
    // // console.log('normalks: ' + JSON.stringify(normals))
  }
}
export default SasVisulaizer
