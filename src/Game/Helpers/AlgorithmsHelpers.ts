import { Vector2 } from 'three'
import { CalculationHelpes, minMax } from './CalculationHelpes'
import { json } from 'stream/consumers'
import { ICollidable } from '../Interfaces/ICollidable'

export namespace AlgorithmsHelpers {
  export function isPointWithinShape(point: Vector2, shape: Vector2[]): boolean {
    if (shape.length < 3) throw 'amount of points houdl be at least 3'
    const shapeCopy = [...shape, shape[0]]
    const n = shapeCopy.length
    let is_in = false
    for (let index = 0; index < n - 1; index++) {
      const a = shapeCopy[index]
      const b = shapeCopy[index + 1]

      if (
        point.y < a.y != point.y < b.y &&
        point.x < ((b.x - a.x) * (point.y - a.y)) / (b.y - a.y) + a.x
      ) {
        is_in = !is_in
      }
    }
    return is_in
  }
  export function isPointWithinCirlce(point: Vector2, center: Vector2, radius: number): boolean {
    const distance: number = point.distanceTo(center)
    return distance < radius
  }

  export function SasCollision(obj1: ICollidable, obj2: ICollidable): Vector2 | null {
    const normals: Vector2[] = obj1.getNormalsForCollision().concat(obj2.getNormalsForCollision())
    let minOverlap: number = Number.MAX_VALUE
    let minOverlapVectpr: Vector2 = new Vector2()

    for (let index = 0; index < normals.length; index++) {
      const N = normals[index]
      const minMax1: minMax = obj1.castObjectOntoNormal(N)
      const minMax2: minMax = obj2.castObjectOntoNormal(N)
      const overlapLegnth = CalculationHelpes.getMinMaxOverlapLength(minMax1, minMax2)
      if (overlapLegnth === 0) {
        return null
      } else {
        if (minOverlap > overlapLegnth) {
          minOverlap = overlapLegnth

          minOverlapVectpr = new Vector2(
            normals[index].x * overlapLegnth,
            normals[index].y * overlapLegnth
          )
        }
      }
    }

    const center1: Vector2 = obj1.getCenterPoint()
    const center2: Vector2 = obj2.getCenterPoint()
    const diff = center1.sub(center2)
    // console.log("minOverlapVectpr: "+JSON.stringify(minOverlapVectpr))

    // console.log("diff: "+JSON.stringify(diff))
    if (diff.x < 0 && minOverlapVectpr.x > 0) {
      minOverlapVectpr = new Vector2(-minOverlapVectpr.x, minOverlapVectpr.y)
    }
    if (diff.y < 0 && minOverlapVectpr.y > 0) {
      minOverlapVectpr = new Vector2(-minOverlapVectpr.x, -minOverlapVectpr.y)
    }

    return minOverlapVectpr
  }

  // export function checkSasCollisionOnPolygons(pol1: Vector2[], pol2: Vector2[]): Vector2 | null {
  //   const normals: Vector2[] = CalculationHelpes.getNormalsOfConnectedPoints(pol1).concat(
  //     CalculationHelpes.getNormalsOfConnectedPoints(pol2)
  //   )
  //   // console.log('normals: ' + JSON.stringify(normals))
  //   let minOverlap: number = Number.MAX_VALUE
  //   let minOverlapVectpr: Vector2 = new Vector2()
  //   for (let index = 0; index < normals.length; index++) {
  //     const N = normals[index]
  //     const minMax1: minMax = CalculationHelpes.getMinMaxOfPointsOnAxis(pol1, N)
  //     const minMax2: minMax = CalculationHelpes.getMinMaxOfPointsOnAxis(pol2, N)
  //     const overlapLegnth = CalculationHelpes.getMinMaxOverlapLength(minMax1, minMax2)
  //     if (overlapLegnth === 0) {
  //       return null
  //     } else {
  //       if (minOverlap > overlapLegnth) {
  //         minOverlap = overlapLegnth
  //         minOverlapVectpr = new Vector2(
  //           normals[index].x * overlapLegnth,
  //           normals[index].y * overlapLegnth
  //         )
  //       }
  //     }
  //   }
  //   return minOverlapVectpr
  // }
}
