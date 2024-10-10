import type { Matrix3,Euler, Vector2 } from "three";

export interface ITransformable{
    move(moveVector: Vector2): void;
    rotate(theta:number): void;

}


export function implementsTransformable(obj: any): boolean {
    return (
      typeof obj.move === "function" &&
      typeof obj.rotate === "function" &&
      typeof obj.rotation === "object" &&
      typeof obj.position === "object"
    );
  }