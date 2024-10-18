import type { Vector2 } from "three";
import type { IMouseReactive } from "./IMouseReactive";
import { minMax } from "../Helpers/CalculationHelpes";
export interface ICollidable {
    castObjectOntoNormal(N: Vector2): minMax;
    getNormalsForCollision(): Vector2[];
    getCenterPoint(): Vector2;
}

export function implementsCollidable(obj: any): boolean {
    return (
        typeof obj.getNormalsForCollision === "function" 
        && typeof obj.getNormalsForCollision === "function" 
        && typeof obj.getCenterPoint === "function" 
    )
  }

  