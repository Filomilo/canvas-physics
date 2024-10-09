import GameObject from "@/Game/Objects/GameObjectBase";
import type { ITransformable } from "../Interfaces/ITransformable";
import type { IDrawable } from "../Interfaces/IDrawble";
import { Euler, Vector2 } from "three";
import { DrawHelpers } from "../Helpers/DrawHelpers";

export default class Point extends GameObject implements ITransformable, IDrawable{


    constructor(pos:Vector2,radius: number=3)
    {
        super();
        this.position=pos;
        this._radius=radius;
    }

    public position: Vector2;
    public rotation: Euler=new Euler();
    public _radius: number=1;
    public visible: boolean=true;

    move(moveVector: Vector2, radius: number=10): void {
        this.position.add(moveVector);
        this._radius=radius;
    }
    rotate(rot: Euler): void {
        // throw new Error("Method not implemented.");
    }
    draw(ctx: CanvasRenderingContext2D): void {
        DrawHelpers.drawCircle(ctx,this.position.x, this.position.y,this._radius,"white");
    }

}