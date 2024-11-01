import { IEmitter } from '@/Game/Interfaces/IEmitter'
import { Vector2 } from 'three'
import Particle from '../Particle'
import GameObject from '../../GameObjectBase'
import { rand } from 'three/webgpu'
import { randFloat } from 'three/src/math/MathUtils.js'
import { ITransformable } from '@/Game/Interfaces/ITransformable'

export default class LinePartilceEmitter extends GameObject implements IEmitter, ITransformable {
  _speed: number = 0
  _partcleLife: number = 0
  _partclePerSecond: number = 1

  _position: Vector2 = new Vector2()
  _width: number = 0

  constructor(
    position: Vector2,
    width: number,
    particleSpeed: number = 10,
    partcleLife: number = 1
  ) {
    super()

    this._position = position
    this._width = width
    this._partcleLife = partcleLife
    this._speed = particleSpeed
  }
  move(moveVector: Vector2): ITransformable {
    //
    //  throw new Error('Method not implemented.')
    this._position.add(moveVector)
    return this as unknown as ITransformable
  }
  rotate(theta: number): ITransformable {
    // throw new Error('Method not implemented.')
    return this as unknown as ITransformable
  }

  emitParticles(): Particle[] {
    // console.log("mousePostion: "+JSON.stringify(mousePostion))
    const emitOffset: number = randFloat(-this._width / 2, this._width / 2)
    const newParticlePostion = new Vector2(this._position.x + emitOffset, this._position.y)
    // const velocity = new Vector2(randFloat(-1, 1), randFloat(-1, 1))

    const velocity = new Vector2(0, -1).multiplyScalar(this._speed)
    const newParitcle: Particle = new Particle(newParticlePostion, 3, 'white')
    newParitcle._vel = velocity
    newParitcle.life = this._partcleLife
    return [newParitcle]
  }
}
