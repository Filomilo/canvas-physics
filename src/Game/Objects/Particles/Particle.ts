import ISimulatable from "@/Game/Interfaces/ISimulatable";
import Point from "../Point";
import { IUpdatable } from "@/Game/Interfaces/IUpatable";
import { Vector2 } from "three";

export default class Particle extends Point implements ISimulatable,IUpdatable{
  modifyVelocity(modifyFuntion: (vel: Vector2) => Vector2): void {
    this._vel=modifyFuntion(this._vel);
  }
  _vel:Vector2=new Vector2(0,0)
    addVelocity(vel: Vector2): void {
       this. _vel.add(vel)
  }
  addRotationSpeed(rotSpeed: number): void {
    
  }
  applyVelocity(): void {
      this.position.add(this._vel)
  }
  applyRotationSpeed(): void {
      
  }
  IsSimulatable: boolean=true;
  update(dt: number): void {
      this.age+=dt;
  }
  life: number=1;
  age: number=0;
}