import { Vector2 } from 'three'
import SpingNode from './SpingNode'
import { AlgorithmsHelpers } from '@/Game/Helpers/AlgorithmsHelpers'
import { IHoverable } from '@/Game/Interfaces/IHoverable'
import { IClickable } from '@/Game/Interfaces/IClickable'
import { IUpdatable } from '@/Game/Interfaces/IUpatable'
import { IPressable } from '@/Game/Interfaces/IPressable'

class MovableSpringNode
  extends SpingNode
  implements IHoverable, IClickable, IPressable, IUpdatable
{
  isPressed: boolean = false
  mouseOnState: boolean = false
  isHoveredOver: any

  centerOrigin() {}
  resetTransoform() {
    this.position = new Vector2()
  }
  private _originalColor: string = 'white'

  update(dt: number): void {
    if (this.isPressed === true) {
      const delta: Vector2 | undefined = this.game?._MouseController.getMouseDelta()
      this.move(this.isPressed ? (delta ? delta : new Vector2(0, 0)) : new Vector2(0, 0))
      this.rotate(this.game ? this.game?._MouseController.getScrollDelta() : 0)
    }
  }
  onPress(): void {
    // console.log('Movablepolygon on onPress')
    // this._color="green";
  }
  onUnpress(): void {
    // console.log('Movablepolygo/n on onUnpress')
    // this._color=this._originalColor
  }
  onClick(): void {
    this._color = 'yellow'
    new Promise((r) => setTimeout(r, 200)).then(() => {
      this._color = this._originalColor
    })
  }

  onHover(): void {
    this._color = 'red'
  }
  onUnHover(): void {
    this._color = this._originalColor
  }

  isMouseOn(mousePosition: Vector2): boolean {
    return AlgorithmsHelpers.isPointWithinCirlce(mousePosition, this.position, this._radius)
  }

  draw(ctx: CanvasRenderingContext2D): void {
    if (this.isHoveredOver) this._color = 'red'
    if (this.isPressed) this._color = 'green'
    super.draw(ctx)
    this._color = this._originalColor
  }
}

export default MovableSpringNode
