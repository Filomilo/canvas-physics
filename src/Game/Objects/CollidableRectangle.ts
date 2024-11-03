import { Vector2 } from 'three'
import Polygon from './Polygon'
import Rectangle from './Rectangle'
import { ICollidable } from '../Interfaces/ICollidable'
import { CalculationHelpes, minMax } from '../Helpers/CalculationHelpes'

class CollidableRectangle extends Rectangle implements ICollidable {
  castObjectOntoNormal(N: Vector2): minMax {
    return CalculationHelpes.getMinMaxOfPointsOnAxis(this.getTransformedPoints(), N)
  }
  getNormalsForCollision(): Vector2[] {
    return CalculationHelpes.getNormalsOfConnectedPoints(this.getTransformedPoints())
  }

  constructor(
    width: number,
    height: number,
    position: Vector2 = new Vector2(0, 0),
    color: string = 'white'
  ) {
    super(width, height, position, color)
  }
  isActivator: boolean = false
  isCollsioniActive: boolean = true
  OnObjectEnter(collidable: ICollidable): void {
    // Do nothing
  }
  getCenterPoint(): Vector2 {
    return this.getMidAvgPoint()
  }
  dummy: number = 0
}

export default CollidableRectangle
