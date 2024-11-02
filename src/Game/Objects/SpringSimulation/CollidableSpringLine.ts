import { DrawHelpers } from '@/Game/Helpers/DrawHelpers'
import SpringLine from './SpringLine'
import { ICollidable } from '@/Game/Interfaces/ICollidable'
import { CalculationHelpes, minMax } from '@/Game/Helpers/CalculationHelpes'
import { Vector2 } from 'three'

export default class CollidableSpringLine extends SpringLine implements ICollidable {
  isCollsioniActive: boolean = true
  OnObjectEnter(collidable: ICollidable): void {
    // do nothign
  }
  width: number = 20
  castObjectOntoNormal(N: Vector2): minMax {
    const Normal: Vector2 = CalculationHelpes.getNormalOfVector(
      this._node1.position.clone().sub(this._node2.position)
    )
    const move = Normal.clone()
      .normalize()
      .multiplyScalar(this.width / 2)

    const pt1 = this._node1.position.clone().add(move)
    const pt2 = this._node2.position.clone().add(move)
    const pt3 = this._node1.position.clone().sub(move)
    const pt4 = this._node2.position.clone().sub(move)

    const cast1 = CalculationHelpes.castPointOnAxis(pt1, N)
    const cast2 = CalculationHelpes.castPointOnAxis(pt2, N)
    const cast3 = CalculationHelpes.castPointOnAxis(pt3, N)
    const cast4 = CalculationHelpes.castPointOnAxis(pt4, N)

    //    const pt1:number=CalculationHelpes.castPointOnAxis(this._node1.position,N)
    //    const pt2:number=CalculationHelpes.castPointOnAxis(this._node2.position,N)
    return {
      min: Math.min(cast1, cast2, cast3, cast4),
      max: Math.max(cast1, cast2, cast3, cast4)
    }
  }
  getNormalsForCollision(): Vector2[] {
    const dir = this._node1.position.clone().sub(this._node2.position).normalize()
    return [CalculationHelpes.getNormalOfVector(dir), dir]
  }
  getCenterPoint(): Vector2 {
    return new Vector2(
      (this._node1.position.x + this._node2.position.x) / 2,
      (this._node1.position.y + this._node2.position.y) / 2
    )
  }

  draw(ctx: CanvasRenderingContext2D): void {
    DrawHelpers.DrawLine(ctx, this._node1.position, this._node2.position, this.width, 'red')
  }
}
