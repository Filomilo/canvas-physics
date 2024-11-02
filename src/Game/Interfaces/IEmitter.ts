import { Vector2 } from 'three'
import Particle from '../Objects/Particles/Particle'

export interface IEmitter {
  emitParticles(): Particle[]
  isActive: boolean
}

export function implementsDrawable(obj: any): boolean {
  return typeof obj.emitParticle === 'function' && typeof obj.isActive === 'boolean'
}
