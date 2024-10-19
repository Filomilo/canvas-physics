import { Vector2 } from "three";
import Particle from "../Objects/Particles/Particle";

export interface IEmitter{
    emitParticles(): Particle[];
    
}

export function implementsDrawable(obj: any): boolean {
    return (
      typeof obj.emitParticle === "function"
    );
  }

  