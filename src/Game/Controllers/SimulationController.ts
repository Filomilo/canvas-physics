import { Vector2 } from 'three'
import ISimulatable from '../Interfaces/ISimulatable'
import { GameConfig } from '../GameConfig'
import Game from '@/Game/Game'
import { IAffector } from '../Interfaces/IAffector'
import { AlgorithmsHelpers } from '../Helpers/AlgorithmsHelpers'
import { ICollidable, implementsCollidable } from '../Interfaces/ICollidable'
import Polygon from '../Objects/Polygon'
import { implementsTransformable, ITransformable } from '../Interfaces/ITransformable'

class SimulationController {
  private _game: Game
  public isSimulationActive: boolean = true

  constructor(game: Game) {
    this._game = game
  }

  public simulate() {
    if (!this.isSimulationActive) return
    // console.log("Colliders: "+this._game._objectReferenceController.CollidableObjects.length)
    this._game._objectReferenceController.SimulatableObjects.forEach((element: ISimulatable) => {
      if (element.IsSimulatable) {
        // console.log("simulate ")
        this.applyAffectors(element)
        this.applyVelocity(element)
        this.resolveCollsions(element)
      }
    })
  }
  applyAffectors(element: ISimulatable) {
    // console.log("Affect: "+dt)
    this._game._objectReferenceController.AffectorObject.forEach((affector: IAffector) => {
      affector.affect(element)
    })
  }

  private applyVelocity(simulateble: ISimulatable) {
    simulateble.applyVelocity()
    simulateble.applyRotationSpeed()
  }
  private applyGravity(simulateble: ISimulatable) {
    this.applyForce(simulateble, new Vector2(0, GameConfig.Gravity), GameConfig.SimulationTimeStep)
  }
  private applyForce(simulatable: ISimulatable, vel: Vector2, dt: number) {
    simulatable.addVelocity(vel.multiply(new Vector2(dt, dt)))
    // simulatable.Velocity.add(vel.multiply(new Vector2(dt,dt)));
  }

  private resolveCollsions(simulatable: ISimulatable) {
    // console.log("this._game._objectReferenceController.CollidableObjects: "+this._game._objectReferenceController.CollidableObjects.length)
    if (implementsCollidable(simulatable)) {
      this._game._objectReferenceController.CollidableObjects.forEach((element) => {
        if ((simulatable as unknown) !== (element as unknown)) {
          const isColsionWIthSimultabel = implementsCollidable(element)

          const resolveVector: Vector2 | null = AlgorithmsHelpers.SasCollision(
            simulatable as unknown as ICollidable,
            element as ICollidable
          )
          if (resolveVector) {
            // console.log("resolveVector: "+JSON.stringify(resolveVector))
            // simulatable.Velocity.add(resolveVector)
            // console.log(`is activaotr: ${element.isActivator}`)
            if (element.isActivator) element.OnObjectEnter(simulatable as unknown as ICollidable)

            if (element.isCollsioniActive) {
              if (implementsTransformable(simulatable)) {
                ;(simulatable as unknown as ITransformable).move(resolveVector)
              }
              simulatable.modifyVelocity((vel: Vector2) => {
                //   return vel
                if (simulatable.getWeight() === 0) return vel
                const force: number = vel.length() * 0.8
                return resolveVector
                  .clone()
                  .normalize()
                  .multiplyScalar(force * simulatable.getWeight())
                // .add(vel)
              })
            }
            // if(isColsionWIthSimultabel)
            // {
            //     const sim:ISimulatable=element as unknown as ISimulatable;
            //     sim.modifyVelocity((vel:Vector2)=>{
            //         const force: number=isColsionWIthSimultabel?vel.length()/2:vel.length();
            //          return resolveVector.clone().normalize().multiplyScalar(-force)
            //      })
            // }
          }
        }
      })
    }
  }
}

export default SimulationController
