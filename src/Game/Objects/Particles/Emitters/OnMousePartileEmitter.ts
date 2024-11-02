import { IEmitter } from '@/Game/Interfaces/IEmitter'
import { Vector2 } from 'three'
import Particle from '../Particle'
import GameObject from '../../GameObjectBase'
import { rand } from 'three/webgpu'
import { randFloat } from 'three/src/math/MathUtils.js'

export default class OnMousePartileEmitter extends GameObject implements IEmitter {
  _speed: number = 0
  _partcleLife: number = 0

  constructor(speed: number, particlelife: number = 1) {
    super()
    this._speed = speed
    this._partcleLife = particlelife
  }
  isActive: boolean = true

  emitParticles(): Particle[] {
    const mousePostion: Vector2 = this.game?._MouseController.getMousePostion()!
    // console.log("mousePostion: "+JSON.stringify(mousePostion))
    // return []
    const isMosuePressed: boolean = this.game?._MouseController.getMouseClicked()!
    if (isMosuePressed) {
      // console.log("adding new Particle")
      const velocity = new Vector2(randFloat(-1, 1), randFloat(-1, 1))
        .normalize()
        .multiplyScalar(this._speed)
      const newParitcle: Particle = new Particle(mousePostion, 2, 'red')
      newParitcle._vel = velocity
      newParitcle.life = this._partcleLife
      return [newParitcle]
    } else {
      // console.log("NOT adding new Particle")

      return []
    }
  }

  // emitParticles(): Particle {
  // }
}
