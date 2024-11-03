import { Sphere, Vector2 } from 'three'
import Polygon from '../Polygon'
import { IDrawable } from '@/Game/Interfaces/IDrawble'
import { CalculationHelpes, minMax } from '@/Game/Helpers/CalculationHelpes'
import { DrawHelpers } from '@/Game/Helpers/DrawHelpers'
import GameObject from '../GameObjectBase'
import { AlgorithmsHelpers } from '@/Game/Helpers/AlgorithmsHelpers'
import { dot, objectDirection } from 'three/webgpu'
import { ICollidable } from '@/Game/Interfaces/ICollidable'
import CollidablePolygon from '../CollidablePolygon'

class SasVisulaizer extends GameObject implements IDrawable {
  private _obj1!: ICollidable
  private _obj2!: ICollidable

  constructor(obj1: ICollidable, obj2: ICollidable) {
    super()
    this._obj1 = obj1
    this._obj2 = obj2
  }
  visible: boolean = true
  draw(ctx: CanvasRenderingContext2D): void {
    const normals: Vector2[] = this._obj2
      .getNormalsForCollision() //.splice(1,1)
      .concat(this._obj1.getNormalsForCollision())
    normals.forEach((N: Vector2) => {
      const startIngPoint = new Vector2(
        N.x < 0 ? this.game?.getWidthAndHeightOfCanvas().width : 0,
        N.y < 0 ? this.game?.getWidthAndHeightOfCanvas().height : 0
      )

      const additon = 200

      DrawHelpers.drawLine(
        ctx,
        startIngPoint.x,
        startIngPoint.y,
        startIngPoint.x + N.x * 5000,
        startIngPoint.y + N.y * 5000,
        2,
        'blue'
      )

      const minMax1: minMax = this._obj1.castObjectOntoNormal(N)

      DrawHelpers.drawLine(
        ctx,
        startIngPoint.x + N.x * (minMax1.min + additon),
        startIngPoint.y + N.y * (minMax1.min + additon),
        startIngPoint.x + N.x * (minMax1.max + additon),
        startIngPoint.y + N.y * (minMax1.max + additon),
        5,
        'pink'
      )
      const minMax2: minMax = this._obj2.castObjectOntoNormal(N)
      DrawHelpers.drawLine(
        ctx,
        startIngPoint.x + N.x * (minMax2.min + additon),
        startIngPoint.y + N.y * (minMax2.min + additon),
        startIngPoint.x + N.x * (minMax2.max + additon),
        startIngPoint.y + N.y * (minMax2.max + additon),
        5,
        'green'
      )
    })

    const collsionVector: Vector2 | null = AlgorithmsHelpers.SasCollision(
      this._obj1 as unknown as ICollidable,
      this._obj2 as unknown as ICollidable
    )
    if (collsionVector !== null) {
      if (typeof (this._obj1 as any).getTransformedPoints === 'function') {
        // console.log("collsionVector: "+JSON.stringify(collsionVector))

        const pol: Polygon = this._obj1 as unknown as Polygon
        DrawHelpers.drawLines(
          ctx,
          (this._obj1 as unknown as Polygon).getTransformedPoints(),
          4,
          'yellow'
        )
        const midPoint1 = pol.getMidAvgPoint()
        DrawHelpers.drawLine(
          ctx,
          midPoint1.x,
          midPoint1.y,
          midPoint1.x - collsionVector.x * 10,
          midPoint1.y - collsionVector.y * 10,
          10,
          'orange'
        )
      }
      if (typeof (this._obj2 as unknown as Polygon).getTransformedPoints === 'function') {
        DrawHelpers.drawLines(
          ctx,
          (this._obj2 as unknown as Polygon).getTransformedPoints(),
          4,
          'yellow'
        )

        const pol: Polygon = this._obj1 as unknown as Polygon
        const midPoint1 = pol.getMidAvgPoint()
        DrawHelpers.drawLine(
          ctx,
          midPoint1.x,
          midPoint1.y,
          midPoint1.x - collsionVector.x * 10,
          midPoint1.y - collsionVector.y * 10,
          10,
          'orange'
        )
      }
      if (typeof (this._obj2 as unknown as Sphere).radius === 'number') {
        DrawHelpers.drawCircle(
          ctx,
          (this._obj2 as unknown as Sphere).center.x,
          (this._obj2 as unknown as Sphere).center.y,
          (this._obj2 as unknown as Sphere).radius,
          'yellow'
        )
      }
    }
  }
}
export default SasVisulaizer
