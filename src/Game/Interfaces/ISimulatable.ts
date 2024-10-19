import { Vector2 } from "three";
import { ITransformable } from "./ITransformable";

export default interface ISimulatable {

    modifyVelocity(modifyFuntion: (vel:Vector2)=>Vector2):void
    addVelocity(vel:Vector2):void
    addRotationSpeed(rotSpeed: number):void
    applyVelocity():void
    applyRotationSpeed():void
    IsSimulatable: boolean
}


export function implementsSimulatable(obj: any): boolean {
    return (
      typeof obj.applyVelocity === "function" &&
      typeof obj.applyRotationSpeed === "function" &&
      typeof obj.addVelocity === "function" &&
      typeof obj.addRotationSpeed === "function" &&
     
      typeof obj.IsSimulatable==="boolean"
    );
  }