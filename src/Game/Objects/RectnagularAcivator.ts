import { Vector2 } from 'three'
import { ICollidable, implementsCollidable } from '../Interfaces/ICollidable'
import CollidableRectangle from './CollidableRectangle'
import { IActivtable, implementsActivtable } from '../Interfaces/IActivtable'
import { stringify } from 'flatted'

class RectnagularAcivator extends CollidableRectangle {
  isCollsioniActive: boolean = false
  isActivator: boolean = true
  constructor(
    width: number,
    height: number,
    position: Vector2 = new Vector2(0, 0),
    color: string = '#dad5c2'
  ) {
    super(width, height, position, color)
    this.OnObjectEnter = (collidable: ICollidable) => {
      console.log(`Object ref: ${implementsActivtable(collidable)}`)
      if (implementsActivtable(collidable)) {
        const activatable: IActivtable = collidable as unknown as IActivtable
        activatable.activate()
      }
    }
    this.isActivator = true
  }
}

export default RectnagularAcivator
