import { Vector2 } from 'three'
import GameObject from './GameObjectBase'
import Rectangle from './Rectangle'
import { implementsTransformable, ITransformable } from '../Interfaces/ITransformable'
import { IHoverable } from '../Interfaces/IHoverable'
import { IClickable } from '../Interfaces/IClickable'
import { IPressable } from '../Interfaces/IPressable'
import { IUpdatable } from '../Interfaces/IUpatable'
import { AlgorithmsHelpers } from '../Helpers/AlgorithmsHelpers'
import ParticleSolver from './Particles/ParticleSolver'
import LinePartilceEmitter from './Particles/Emitters/LinePartilceEmitter'
import Particle from './Particles/Particle'
import FanForce from '@/Game/Affectors/FanForce'

class Fan extends GameObject implements ITransformable, IPressable, IUpdatable {
  private mainBody: Rectangle = new Rectangle(50, 50, new Vector2(0), 'yellow')
  private particleEmitter: LinePartilceEmitter = new LinePartilceEmitter(
    new Vector2(0, -30),
    50,
    4,
    3
  )
  private particleSolver: ParticleSolver = new ParticleSolver()
    .addEmitter(this.particleEmitter)
    .addAtrributeEditMethod((particle: Particle) => {
      // console.log('change Scale')
      const ageRatio: number = particle.age / particle.life
      particle._radius = (1 - ageRatio) * 25
    })
  private force: FanForce = new FanForce(new Vector2(0, -30), 50, 300, 0.8)

  private components: GameObject[] = [
    this.particleSolver,
    this.mainBody,
    this.force as unknown as GameObject,
    new Rectangle(40, 10, new Vector2(30, -30), 'yellow').rotate(0.5) as unknown as GameObject,
    new Rectangle(40, 10, new Vector2(-30, -30), 'yellow').rotate(-0.5) as unknown as GameObject,

    this.particleEmitter
  ]

  constructor(postion: Vector2 = new Vector2(0)) {
    super()
    this.move(postion)
  }
  onPress(): void {
    // throw new Error('Method not implemented.')
  }
  onUnpress(): void {
    // throw new Error('Method not implemented.')
  }
  isMouseOn(mousePosition: Vector2): boolean {
    // console.log("check if in polygon")
    const transformedPoints: Vector2[] = this.mainBody.getTransformedPoints()

    return AlgorithmsHelpers.isPointWithinShape(mousePosition, transformedPoints)
  }
  mouseOnState: boolean = false
  move(moveVector: Vector2): ITransformable {
    this.components.forEach((obj: GameObject) => {
      // console.log(
      //   'move: ' +
      //     JSON.stringify(moveVector) +
      //     ' on ' +
      //     JSON.stringify(obj) +
      //     ' that is transoframble: ' +
      //     implementsTransformable(obj)
      // )
      if (implementsTransformable(obj)) {
        ;(obj as unknown as ITransformable).move(moveVector)
      }
    })
    return this as unknown as ITransformable
  }
  rotate(theta: number): ITransformable {
    return this as unknown as ITransformable
  }

  public getChildObjects(): GameObject[] {
    return this.components
  }

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

export default Fan
