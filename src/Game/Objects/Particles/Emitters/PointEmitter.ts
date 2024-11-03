import { IEmitter } from '@/Game/Interfaces/IEmitter'
import { Vector2 } from 'three'
import Particle from '../Particle'
import GameObject from '../../GameObjectBase'
import { rand } from 'three/webgpu'
import { randFloat } from 'three/src/math/MathUtils.js'
import { stringify } from 'flatted'

export default class PointEmitter extends GameObject implements IEmitter {
  _speed: number = 0
  _partcleLife: number = 0
  _pos: Vector2 = new Vector2()
  constructor(pos: Vector2, speed: number, particlelife: number = 1) {
    super()
    this._speed = speed
    this._partcleLife = particlelife
    this._pos = pos.clone()
  }
  isActive: boolean = true

  emitParticles(): Particle[] {
    console.log('point emmiter positon: ' + stringify(this._pos))
    const velocity = new Vector2(Math.random() * 2 - 1, Math.random() * 2 - 1)
      .normalize()
      .multiplyScalar(this._speed)
    const newParitcle: Particle = new Particle(this._pos.clone(), 5, 'white')
    newParitcle._vel = velocity

    newParitcle.life = this._partcleLife

    return [newParitcle]
  }

  // emitParticles(): Particle {
  // }
}
