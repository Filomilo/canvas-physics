import GameObject from "@/Game/Objects/GameObjectBase";
import type { ITransformable } from "../Interfaces/ITransformable";
import type { IDrawable } from "../Interfaces/IDrawble";
import { Euler, Vector2 } from "three";
import { DrawHelpers } from "../Helpers/DrawHelpers";
import Point from "./Point";
import Ball from "./Ball";
import ISimulatable from "../Interfaces/ISimulatable";
import { ICollidable } from "../Interfaces/ICollidable";
import { CalculationHelpes, minMax } from "../Helpers/CalculationHelpes";

export default class PhysicBall extends Ball implements ISimulatable,ICollidable {


    constructor(pos:Vector2,radius: number=3,color:string="white")
    {
        super(pos,radius,color);
    }
    castObjectOntoNormal(N: Vector2): minMax {
        const pointOnAxis: number=CalculationHelpes.castPointOnAxis(this.position,N)
        const min=pointOnAxis-(this._radius/2)
        const max=pointOnAxis+(this._radius/2)
        return {
            min: min,
            max: max
        }
    }
    getNormalsForCollision(): Vector2[] {
        return [];
    }
    rotationSpeed: number=0;
    Velocity: Vector2=new Vector2();
    IsSimulatable: boolean=true;

    

}