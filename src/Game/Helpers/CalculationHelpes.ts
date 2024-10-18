import { Vector2 } from 'three'
import { compressNormals } from 'three/examples/jsm/utils/GeometryCompressionUtils.js'
import { atan2, cos, sin } from 'three/webgpu'

export interface minMax {
  min: number
  max: number
}

export namespace CalculationHelpes {
  export function drawCircle(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    radius: number,
    color: string = 'white'
  ) {
    ctx.fillStyle = color
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, 2 * Math.PI)
    ctx.fill()
  }
  export function drawLine(
    ctx: CanvasRenderingContext2D,
    beginX: number,
    beginY: number,
    endX: number,
    endY: number,
    width: number = 3,
    color: string = 'white'
  ) {
    ctx.beginPath()
    ctx.moveTo(beginX, beginY)
    ctx.lineTo(endX, endY)
    ctx.lineWidth = width
    ctx.strokeStyle = color
    ctx.lineCap = 'round'
    ctx.stroke()
  }

  export function drawLines(
    ctx: CanvasRenderingContext2D,
    points: Vector2[],
    width: number = 3,
    color: string = 'white',
    opened: boolean = false
  ) {
    if (points.length < 2) throw 'lines should have at least 2 points'
    ctx.beginPath()
    ctx.moveTo(points[0].x, points[0].y)
    for (let index = 1; index < points.length; index++) {
      ctx.lineTo(points[index].x, points[index].y)
    }
    if (!opened) ctx.lineTo(points[0].x, points[0].y)
    ctx.lineWidth = width
    ctx.strokeStyle = color
    ctx.lineCap = 'round'
    ctx.stroke()
  }

  export function drawShape(
    ctx: CanvasRenderingContext2D,
    points: Vector2[],
    color: string = 'white'
  ) {
    if (points.length < 3) throw 'shape should have at least 3 points'
    ctx.beginPath()
    ctx.moveTo(points[0].x, points[0].y)
    for (let index = 1; index < points.length; index++) {
      ctx.lineTo(points[index].x, points[index].y)
    }
    ctx.fillStyle = color
    ctx.fill()
  }

  export function getNormalsOfConnectedPoints(points: Vector2[]): Vector2[] {
    //  const pointsIncludingConnectedEdge: Vector2[] = [...points]
    //  pointsIncludingConnectedEdge.push(pointsIncludingConnectedEdge[0])
    const normals: Vector2[] = []
    for (let index = 0; index < points.length; index++) {
      const pt1 = new Vector2(points[index% points.length].x, points[index% points.length].y)
      const pt2 = new Vector2(
        points[(index + 1) % points.length].x,
        points[(index + 1) % points.length].y
      )
      const dir = pt1.sub(pt2)
      // console.log(index + ': pt1: ' + JSON.stringify(pt1) + ' pt2: ' + JSON.stringify(pt2))
      const N = new Vector2(dir.y, -dir.x).normalize()

      normals.push(N.normalize())
    }
    //  console.log('Dir: ' + JSON.stringify(normals))
    return normals
  }

  //do not use in calcauiton, its only to simply viusaliasiotn

let castingCounter=0;

  export function castPointOnAxis(pt: Vector2, axis: Vector2): number {
    
    const normalizedAxis = axis.normalize(); // Ensure axis has a length of 1
    const casted:number= normalizedAxis.dot(pt);
    if(castingCounter--<6 && axis.x!==0&& axis.y!==0)
    {
      // console.log("Casting "+JSON.stringify(pt)+" on axis "+JSON.stringify(axis)+" resulted in "+ casted)
      castingCounter=1000;
    }
return casted;
  }

  export function getMinMaxOfPointsOnAxis(
    pts: Vector2[],
    axis: Vector2
  ): { min: number; max: number } {
    let max: number = Number.MIN_VALUE
    let min: number = Number.MAX_VALUE

    pts.forEach((pt: Vector2) => {
      const len: number =castPointOnAxis(pt,axis)  ;
      max = max < len ? len : max
      min = min > len ? len : min
    })
    return { min: min, max: max }
  }

  export function getMinMaxOverlapLength(first: minMax, second: minMax): number {
    if (first.min < second.max && second.min < first.max) {
      const overlapStart = Math.max(first.min, second.min)
      const overlapEnd = Math.min(first.max, second.max)
      return overlapEnd - overlapStart
    } else {
      return 0
    }
  }


  export function getRotationFromVector(vec:Vector2): number{
    return Math.atan2(vec.y,vec.x)
  }

}
