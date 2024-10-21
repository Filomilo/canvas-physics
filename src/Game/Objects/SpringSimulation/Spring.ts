import { IEmitter } from "@/Game/Interfaces/IEmitter";
import GameObject from "../GameObjectBase";
import { threadId } from "worker_threads";
import { IDrawable } from "@/Game/Interfaces/IDrawble";
import ISimulatable from "@/Game/Interfaces/ISimulatable";
import { Vector2 } from "three";
import { IUpdatable } from "@/Game/Interfaces/IUpatable";
import { GameConfig } from "@/Game/GameConfig";
import SpingNode from "./SpingNode";
import SpringLine from "./SpringLine";

export default class Spring 
extends GameObject
implements IDrawable, ISimulatable, IUpdatable
{   
    protected _nodes: SpingNode[]=[];
    protected _lines: SpringLine[]=[];




    draw(ctx: CanvasRenderingContext2D): void {
 
       this._lines.forEach((x:SpringLine)=>{
        x.draw(ctx)
       })
       this._nodes.forEach((x:SpingNode)=>{
        x.draw(ctx)
       })
    }
    visible: boolean=true;
    modifyVelocity(modifyFuntion: (vel: Vector2) => Vector2): void {
        this._nodes.forEach((x: SpingNode)=>{
            x.modifyVelocity(modifyFuntion)
        })
    }
    addVelocity(vel: Vector2): void {
        this._nodes.forEach((x: SpingNode)=>{
            x.addVelocity(vel)
        })
    }
    addRotationSpeed(rotSpeed: number): void {
        // throw new Error("Method not implemented.");
    }
    applyVelocity(): void {
        this._nodes.forEach((x: SpingNode)=>{
            x.applyVelocity()
        })
    }
    applyRotationSpeed(): void {
        // throw new Error("Method not implemented.");
    }
    IsSimulatable: boolean=true;
    update(dt: number): void {
        this._lines.forEach((x:SpringLine)=>{
            x.update(dt)
           })
        // throw new Error("Method not implemented.");
    }
  
    public addSpringNode(node: SpingNode){
        if(this._nodes.length>0)
        {
            const line: SpringLine=new SpringLine(
                this._nodes[this._nodes.length-1]
                ,node
            );
            line.game=this.game;

            this._lines.push(line)
        }
        node.game=this.game;
        this._nodes.push(node)
    }

}