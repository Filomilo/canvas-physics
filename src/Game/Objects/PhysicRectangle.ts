import { Vector2 } from "three";
import ISimulatable from "../Interfaces/ISimulatable";
import CollidableRectangle from "./CollidableRectangle";

export class PhysicRectangle extends CollidableRectangle implements ISimulatable{
    rotationSpeed: number=0;
    Velocity: Vector2=new Vector2();
    IsSimulatable: boolean=true;
    
}