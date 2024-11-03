import { Matrix3, Vector2 } from 'three'
import type { IDrawable } from '../Interfaces/IDrawble'
import GameObject from './GameObjectBase'
import { DrawHelpers } from '../Helpers/DrawHelpers'
import { GameConfig } from '../GameConfig'
import Polygon from './Polygon'
import type { IHoverable } from '../Interfaces/IHoverable'
import { AlgorithmsHelpers } from '../Helpers/AlgorithmsHelpers'
import type { IClickable } from '../Interfaces/IClickable'
import type { IPressable } from '../Interfaces/IPressable'
import type { IUpdatable } from '../Interfaces/IUpatable'
import type { ITransformable } from '../Interfaces/ITransformable'
import { compressNormals } from 'three/examples/jsm/utils/GeometryCompressionUtils.js'
import CollidablePolygon from './CollidablePolygon'
import PhysicBall from './PhysicBall'
// import CollidablePolygon from "./CollidablePolygon";

export default class MovableBall
  extends PhysicBall
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
    // if(this.isPressed===true)
    // {
    //     console.log(this.isPressed+": "+JSON.stringify( this.game?._MouseController.getMouseDelta))
    //     if(this.game!==undefined)
    //         this.move(this.game?._MouseController.getMouseDelta())
    // this.game?._MouseController.getMouseDelta().then(del=>{
    //     console.log("delat:" +JSON.stringify(del))
    //     this.move(del);
    // })
    //             this.game?._MouseController.getMouseDelta((del:Vector2)=>{
    // console.log("delat:" +JSON.stringify(del))
    //             })
    //    console.log("updateL "+JSON.stringify(            this.game?._MouseController.mouseDelta))
    //    if(this.game?._MouseController.mouseDelta!==undefined)
    //    this.move(this.game?._MouseController.mouseDelta);
    // }
    //    console.log("Update")
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
