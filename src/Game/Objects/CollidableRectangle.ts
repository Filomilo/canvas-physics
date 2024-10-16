import { Vector2 } from "three";
import Polygon from "./Polygon";
import Rectangle from "./Rectangle";
import { ICollidable } from "../Interfaces/ICollideable";

class CollidableRectangle extends Rectangle implements ICollidable{

    constructor(width: number, height:number,position: Vector2=new Vector2(0,0), color: string="white"){
        super(width,height,position,color)
    }

}


export default CollidableRectangle;