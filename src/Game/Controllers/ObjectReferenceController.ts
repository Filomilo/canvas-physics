import { IAffector, implementsAffector } from '../Interfaces/IAffector'
import { implementsClickable, type IClickable } from '../Interfaces/IClickable'
import { ICollidable, implementsCollidable } from '../Interfaces/ICollidable'
import { implementsDrawable, type IDrawable } from '../Interfaces/IDrawble'
import { implementsHoverable, type IHoverable } from '../Interfaces/IHoverable'
import { implementsMouseReactive, type IMouseReactive } from '../Interfaces/IMouseReactive'
import { implementsPressable, type IPressable } from '../Interfaces/IPressable'
import ISimulatable, { implementsSimulatable } from '../Interfaces/ISimulatable'
// import ISimulatable, { implementsSimulatable } from "../Interfaces/ISimulatable";
import { implementsTransformable, type ITransformable } from '../Interfaces/ITransformable'
import { implementsUpdatable, type IUpdatable } from '../Interfaces/IUpatable'
import type GameObject from '../Objects/GameObjectBase'

export default class ObjectReferenceController {
  AllObjects: GameObject[] = []
  ClickableObjects: IClickable[] = []
  DrawableObjects: IDrawable[] = []
  HoverableObjects: IHoverable[] = []
  PressableObjects: IPressable[] = []
  TransformableObjects: ITransformable[] = []
  MouseReactiveObjects: IMouseReactive[] = []
  UpdatableObjects: IUpdatable[] = []
  SimulatableObjects: ISimulatable[] = []
  AffectorObject: IAffector[] = []
  CollidableObjects: ICollidable[]=[]

  public addObject(object: GameObject) {
    this.AllObjects.push(object)
    if (implementsClickable(object)) {
      this.ClickableObjects.push(object as IClickable)
    }

    if (implementsDrawable(object)) {
      this.DrawableObjects.push(object as IDrawable)
    }

    if (implementsHoverable(object)) {
      this.HoverableObjects.push(object as IHoverable)
    }

    if (implementsPressable(object)) {
      this.PressableObjects.push(object as IPressable)
    }

    if (implementsTransformable(object)) {
      this.TransformableObjects.push(object as ITransformable)
    }
    if (implementsMouseReactive(object)) {
      this.MouseReactiveObjects.push(object as IMouseReactive)
    }
    if (implementsUpdatable(object)) {
      this.UpdatableObjects.push(object as IUpdatable)
    }
    if (implementsSimulatable(object)) {
      this.SimulatableObjects.push(object as ISimulatable)
    }
    if (implementsAffector(object)) {
      this.AffectorObject.push(object as IAffector)
    }
    if (implementsCollidable(object)) {
      this,this.CollidableObjects.push(object as ICollidable)
    }
  }
}
