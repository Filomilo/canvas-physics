import type { Euler, Vector2 } from "node_modules/threejs-math/types";
import type { Matrix3 } from "three";

export interface ITransformable{
    move(moveVector: Vector2): void;
    rotate(rot:Euler): void;

}


export function implementsTransformable(obj: any): boolean {
    return (
      typeof obj.move === "function" &&
      typeof obj.rotate === "function" &&
      typeof obj.rotation === "object" &&
      typeof obj.position === "object"
    );
  }