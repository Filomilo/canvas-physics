import { Vector2 } from "three";
import { ITransformable } from "./ITransformable";

export default interface ISimulatable extends ITransformable{
    Velocity: Vector2;
    IsSimulatable: boolean
}


export function implementsSimulatable(obj: any): boolean {
    return (
      typeof obj.Velocity === "object" &&
      typeof obj.IsSimulatable==="boolean"
    );
  }