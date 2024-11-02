import { IEmitter } from '@/Game/Interfaces/IEmitter'
import GameObject from '../GameObjectBase'
import { threadId } from 'worker_threads'
import { IDrawable } from '@/Game/Interfaces/IDrawble'
import Particle from './Particle'
import ISimulatable from '@/Game/Interfaces/ISimulatable'
import { Vector2 } from 'three'
import { IUpdatable } from '@/Game/Interfaces/IUpatable'
import { GameConfig } from '@/Game/GameConfig'

export default class ParticleSolver
  extends GameObject
  implements IDrawable, ISimulatable, IUpdatable
{
  private attributeEditMehotd: ((particle: Particle) => void)[] = []
  visible: boolean = true
  private _Emitters: IEmitter[] = []
  private _Particles: Particle[] = []

  constructor() {
    super()
  }
  getWeight(): number {
    return 0
  }
  modifyVelocity(modifyFuntion: (vel: Vector2) => Vector2): void {
    this._Particles.forEach((x) => {
      x.modifyVelocity(modifyFuntion)
    })
  }
  update(dt: number): void {
    this.updateParticles(dt)
    this.killParticles()
    this.updateEmitters()
    //   console.log("amount of paricles: "+this._Particles.length)
  }
  private killParticles() {
    const particlesAlife = this._Particles.filter((x) => x.age < x.life)
    this._Particles = particlesAlife
  }

  private updateEmitters() {
    this._Emitters.forEach((x: IEmitter) => {
      // console.log("ParticleSolver emitParticles")
      if (x.isActive)
        x.emitParticles().forEach((paricles: Particle) => {
          if (this._Particles.length < GameConfig.ParticleSolverLimit) {
            this._Particles.push(paricles)
          }
        })
    })
  }
  private simulateParticles() {}

  private updateParticles(dt: number) {
    if (dt < 0) throw 'dt should not be less tahn zero'
    // console.log("updateParticles: "+dt)
    // console.log(`AmtOfParticles: ${this._Particles.length}`)
    this._Particles.forEach((particle: Particle) => {
      this.attributeEditMehotd.forEach((mehtod: (particle: Particle) => void) => {
        mehtod(particle)
      })
      particle.age += dt
      particle.update(dt)
      particle.applyVelocity()
    })
  }

  addVelocity(vel: Vector2): void {
    throw new Error('Method not implemented.')
  }
  addRotationSpeed(rotSpeed: number): void {
    throw new Error('Method not implemented.')
  }
  applyVelocity(): void {
    throw new Error('Method not implemented.')
  }
  applyRotationSpeed(): void {
    throw new Error('Method not implemented.')
  }
  IsSimulatable: boolean = false

  draw(ctx: CanvasRenderingContext2D): void {
    for (let index = 0; index < this._Particles.length; index++) {
      const element: Particle = this._Particles[index]
      // console.log("DrawingPAritcle at:  "+JSON.stringify(element.position))
      element.draw(ctx)
    }
  }

  public addEmitter(emitter: IEmitter): ParticleSolver {
    ;(emitter as unknown as GameObject).game = this.game
    this._Emitters.push(emitter)
    return this
  }

  public addAtrributeEditMethod(func: (particle: Particle) => void): ParticleSolver {
    this.attributeEditMehotd.push(func)
    return this
  }
}
