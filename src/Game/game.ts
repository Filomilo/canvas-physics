import { implementsDrawable, type IDrawable } from './Interfaces/IDrawble'
import ObjectReferenceController from './Controllers/ObjectReferenceController'
import type GameObject from './Objects/GameObjectBase'
import type Point from './Objects/Point'
import MouseController, { MouseEvents } from './Controllers/MouseController'
import { Vector2 } from 'three'
import { compressNormals } from 'three/examples/jsm/utils/GeometryCompressionUtils.js'
import type { IClickable } from './Interfaces/IClickable'
import SimulationController from './Controllers/SimulationController'
import { ICollidable } from './Interfaces/ICollidable'
import { stringify, parse } from 'flatted'
// import SimulationController from "./Controllers/SimulationController"

export default class Game {
  private _ctx!: CanvasRenderingContext2D
  private _canvas!: HTMLCanvasElement

  public _objectReferenceController: ObjectReferenceController = new ObjectReferenceController()
  public _MouseController!: MouseController
  public _SimulationController: SimulationController = new SimulationController(this)
  private dt: number = 0
  private time: number = 0

  public getWidthAndHeightOfCanvas(): Vector2 {
    return new Vector2(this._canvas.width, this._canvas.height)
  }

  public init(canvas: HTMLCanvasElement, fillStyle: string = 'grey') {
    try {
      this._canvas = canvas
      this._ctx = canvas.getContext('2d') as CanvasRenderingContext2D
      this._MouseController = new MouseController(this._canvas)
      // console.log('Game init')
      // console.log(this._ctx)
      this.setupEvent()

      requestAnimationFrame(this.gameLoop.bind(this))
      this.clearEvents()
    } catch (error) {
      console.error('Error intlizing game: ' + error)
    }
  }

  private gameLoop() {
    // try {

    this.resolveEvents()

    this._SimulationController.simulate()
    this.update()
    this.drawBackground()
    this.drawObjects()
    requestAnimationFrame(this.gameLoop.bind(this))
    this.clearEvents()

    // } catch (error) {
    //   console.error('Error processgin game loop: ' + error)
    // }
  }

  //#region EVENTS
  // updateEvents() {
  //   this.updateMouse();

  // }

  // updateMouse()
  // {
  //   this.updateOnMouseMove(event)
  // }

  private setupEvent() {
    this._canvas.addEventListener('mousemove', (event: MouseEvent) => {
      this.updateOnMouseMove(event)
    })
    this._canvas.addEventListener('click', (event: MouseEvent) => {
      this.updateOnClick(event)
    })

    this._canvas.addEventListener('mouseup', (event: MouseEvent) => {
      this.onMouseUp(event)
    })
    this._canvas.addEventListener('mousedown', (event: MouseEvent) => {
      this.onMouseDown(event)
    })

    this._canvas.addEventListener('wheel', (event: WheelEvent) => {
      this.onMouseScroll(event)
    })
  }
  onMouseScroll(event: WheelEvent) {
    this._MouseController.updateMouseWheel(event)
  }

  private onMouseDown(event: MouseEvent) {
    // console.log("onMouseDown")
    this._MouseController.addEvent(MouseEvents.PRESS)
    this._MouseController.leftPress = true
  }

  private onMouseUp(event: MouseEvent) {
    // console.log("onMouseUp")
    this._MouseController.addEvent(MouseEvents.UNPRESS)
    this._MouseController.leftPress = false
  }

  private updateOnMouseMove(event: MouseEvent) {
    // console.log("updateOnMouseMove")
    this._MouseController.updateMousePosition(event)
  }

  private updateOnClick(event: MouseEvent) {
    this._MouseController.addEvent(MouseEvents.LEFTCLICK)
    // this.updateClickable();
  }

  private resolveEvents() {
    this.updateHoverable()
    let event: MouseEvents | undefined

    while ((event = this._MouseController.events.shift())) {
      if (event === undefined) break
      switch (event as MouseEvents) {
        case MouseEvents.LEFTCLICK:
          this.updateClickable()
          break
        case MouseEvents.PRESS:
          this.updatePressableOnPress()
          break
        case MouseEvents.UNPRESS:
          this.updatePressableOnUnPress()
          break
      }
    }
  }

  private clearEvents() {
    this._MouseController.clerEvents()
    const newtime = new Date().getTime()
    // console.log("new Time: "+newtime)
    this.dt = (newtime - this.time) / 1000
    this.time = newtime
  }

  //#endregion

  //#region UPDATES

  private updatePressableOnPress() {
    const filtered = this._objectReferenceController.PressableObjects.filter((x) => x.mouseOnState)
    if (filtered.length > 0) {
      filtered[0].onPress()
      filtered[0].isPressed = true
    }
  }
  private updatePressableOnUnPress() {
    // console.log("onMouseUp")
    this._objectReferenceController.PressableObjects.filter((x) => x.isPressed).forEach((x) => {
      x.onUnpress()
      x.isPressed = false
    })
  }

  private updateMouseOnObject() {
    const mousePos: Vector2 = this._MouseController.getMousePostion()

    this._objectReferenceController.MouseReactiveObjects.forEach((x) => {
      x.mouseOnState = x.isMouseOn(mousePos)
    })
  }

  private updateHoverable() {
    this._objectReferenceController.HoverableObjects.forEach((x) => {
      const isMouseOver: boolean = x.mouseOnState
      if (isMouseOver) {
        if (!x.isHoveredOver) {
          x.onHover()
        }
      } else {
        if (x.isHoveredOver) {
          x.onUnHover()
        }
      }
      x.isHoveredOver = isMouseOver
    })
  }

  private updateClickable() {
    for (const obj of this._objectReferenceController.ClickableObjects) {
      if (obj.mouseOnState) {
        // console.log('updateClickable')
        obj.onClick()
        return
      }
    }
  }

  //  this._objectReferenceController.ClickableObjects.forEach(x=>{
  //   console.log("updateClickable: "+this._MouseController.leftClick)
  //    if(x.mouseOnState)
  //   {
  //     x.onClick();
  //     if(this._MouseController.leftClick)
  //     {

  //       this._MouseController.leftClick=false;
  //     }
  //   }
  //  })

  private update() {
    this.updateMouseOnObject()
    this.updateHoverable()
    this.updateObjects()
  }

  private updateObjects() {
    // console.log("dt: "+this.dt)
    this._objectReferenceController.UpdatableObjects.forEach((x) => x.update(this.dt))
  }

  private updateMousePosition() {}

  //#endregion

  //#region DRAWING
  private drawableElements: IDrawable[] = []

  private drawBackground() {
    this._ctx.fillStyle = 'black'
    this._ctx.fillRect(0, 0, this._ctx.canvas.width, this._ctx.canvas.height)
    this._ctx.fill()
  }

  private drawObjects() {
    this._objectReferenceController.DrawableObjects.forEach((element: IDrawable) => {
      element.draw(this._ctx)
    })
  }

  //#endregion

  public addObject(obj: GameObject) {
    // console.log('add object: ' + JSON.stringify(obj))
    this._objectReferenceController.addObject(obj)
    obj.game = this
    // console.log(`CHildren: ${JSON.stringify(obj.getChildObjects())}`)
    obj.getChildObjects().forEach((element: GameObject) => {
      this.addObject(element)
    })
    // console.log('this._objectReferenceController: ' + stringify(this._objectReferenceController))
  }
}
