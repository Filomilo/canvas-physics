import { Vector2 } from 'three'
import { AlgorithmsHelpers } from '../Helpers/AlgorithmsHelpers'
import CollidableRectangle from './CollidableRectangle'
import { IPressable } from '../Interfaces/IPressable'
import { IUpdatable } from '../Interfaces/IUpatable'

class MovableRectangle extends CollidableRectangle implements IPressable, IUpdatable {
  onPress(): void {
    // throw new Error('Method not implemented.')
  }
  onUnpress(): void {
    // throw new Error('Method not implemented.')
  }
  isMouseOn(mousePosition: Vector2): boolean {
    const transformedPoints: Vector2[] = this.getTransformedPoints()
    const state: boolean = AlgorithmsHelpers.isPointWithinShape(mousePosition, transformedPoints)
    console.log(`Is mouse on: ${state}`)
    return state
  }
  mouseOnState: boolean = false

  isPressed: boolean = false

  update(dt: number): void {
    if (this.isPressed === true) {
      // console.log('MovablePolygonPRess: ' + this.isPressed)
      const delta: Vector2 | undefined = this.game?._MouseController.getMouseDelta()
      this.move(this.isPressed ? (delta ? delta : new Vector2(0, 0)) : new Vector2(0, 0))
      this.rotate(this.game ? this.game?._MouseController.getScrollDelta() : 0)
    }
  }
}

export default MovableRectangle
