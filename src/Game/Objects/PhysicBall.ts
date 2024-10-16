import GameObject from "@/Game/Objects/GameObjectBase";
import type { ITransformable } from "../Interfaces/ITransformable";
import type { IDrawable } from "../Interfaces/IDrawble";
import { Euler, Vector2 } from "three";
import { DrawHelpers } from "../Helpers/DrawHelpers";
import Point from "./Point";
import Ball from "./Ball";
import ISimulatable from "../Interfaces/ISimulatable";

export default class PhysicBall extends Ball implements ISimulatable {


    constructor(pos:Vector2,radius: number=3,color:string="white")
    {
        super(pos,radius,color);
    }
    Velocity: Vector2=new Vector2();
    IsSimulatable: boolean=true;

    

}