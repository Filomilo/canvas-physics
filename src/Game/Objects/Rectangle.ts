import { Vector2 } from "three";
import Polygon from "./Polygon";

class Rectangle extends Polygon{

    private _width!: number;
    private _height!: number

    constructor(width: number, height:number,position: Vector2, color: string="white"){
        const points: Vector2[]=[
            new Vector2(-width/2,height/2),
            new Vector2(width/2,height/2),
            new Vector2(width/2,-height/2),
            new Vector2(-width/2,-height/2)
        ];
        
        super(points,color)
        this.move(position);
    }

}


export default Rectangle;