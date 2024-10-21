import ISimulatable from "@/Game/Interfaces/ISimulatable";
import Point from "../Point";
import { IUpdatable } from "@/Game/Interfaces/IUpatable";
import { Vector2 } from "three";
import GameObject from "../GameObjectBase";
import SpringNode from "./SpingNode";
import { IDrawable } from "@/Game/Interfaces/IDrawble";
import { DrawHelpers } from "@/Game/Helpers/DrawHelpers";

export default class SpringLine extends GameObject implements IDrawable,ISimulatable,IUpdatable{

    protected _node1:SpringNode;
    protected _node2:SpringNode;
    protected _length: number;

    constructor(node1: SpringNode,node2: SpringNode)
    {
        super();
        this._node1=node1;
        this._node2=node2;
        this._length=node1.position.distanceTo(node2.position);
        console.log("_length: "+this._length)
    }
    draw(ctx: CanvasRenderingContext2D): void {
       DrawHelpers.DrawLine(ctx,this._node1.position,this._node2.position,5,"yellow")
    }
    visible: boolean=true;
    update(dt: number): void {
        const currDistance=this._node1.position.distanceTo(this._node2.position);
        if(currDistance!==this._length)
        {
            const vecDiff=this._node1.position.clone().sub(this._node2.position)
            const direction=vecDiff.normalize();
            const distance=this._node1.position.distanceTo(this._node2.position)
            // console.log("distance: "+distance)
            const lengtDiff:number=distance-this._length;
            const strecthFactor=0.0;
            const movePOwer=lengtDiff+strecthFactor;
            // console.log("lengtDiff: "+JSON.stringify(lengtDiff))
           if(this._node1.IsSimulatable)
           {
            const moveDirection=direction.clone().multiplyScalar(this._node2.IsSimulatable?-0.5:-1).multiplyScalar(movePOwer);
            this._node1.move(moveDirection)
            this._node1.modifyVelocity((vel: Vector2)=>{
                // return new Vector2(0,0)
                return vel.add(moveDirection.multiplyScalar(0.1));
             })
            // this._node1.addVelocity(moveDirection)
                   }
           if(this._node2.IsSimulatable)
            {
                const moveDirection=direction.clone().multiplyScalar(this._node1.IsSimulatable?0.5:1).multiplyScalar(movePOwer);
                this._node2.move(moveDirection)
                // const moveDirection=direction.multiplyScalar(this._node1.IsSimulatable?0.5:1).multiplyScalar(lengtDiff);
            //  this._node2.move(moveDirection)
             this._node2.modifyVelocity((vel: Vector2)=>{
                // return new Vector2(0,0)
                return vel.add(moveDirection.multiplyScalar(0.1));
             })
            //  this._node2.addVelocity(moveDirection)
            }
            const afterdist=this._node2.position.distanceTo(this._node1.position);
            // console.log("afterdist: "+afterdist)
            
            if(Math.abs( afterdist-this._length)>0.001)
            {
                // throw "Spring distance constraint didn't resolve: \n + length should be [ "+this._length+" ] but is [ "+afterdist+" ] ";
            }
        }
    }
    modifyVelocity(modifyFuntion: (vel: Vector2) => Vector2): void {
        this._node1.modifyVelocity(modifyFuntion)
        this._node2.modifyVelocity(modifyFuntion)

    }
    addVelocity(vel: Vector2): void {
        throw new Error("Method not implemented.");
    }
    addRotationSpeed(rotSpeed: number): void {
        throw new Error("Method not implemented.");
    }
    applyVelocity(): void {
        throw new Error("Method not implemented.");
    }
    applyRotationSpeed(): void {
        throw new Error("Method not implemented.");
    }
    IsSimulatable: boolean=true;

}