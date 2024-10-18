import { Vector2 } from "three";
import { CalculationHelpes, minMax } from "../Helpers/CalculationHelpes";
import { ICollidable } from "../Interfaces/ICollidable";
import Polygon from "./Polygon";

let counter=0;

class CollidablePolygon extends Polygon implements ICollidable{
    getCenterPoint(): Vector2 {
           return  this.getMidAvgPoint();
    }
    castObjectOntoNormal(N: Vector2): minMax {
        const catingResult=CalculationHelpes.getMinMaxOfPointsOnAxis(this.getTransformedPoints(),N)
        if(counter--==0)
        {
            // console.log("Casting points : [ "+JSON.stringify(this.getTransformedPoints())+" ] on axis "+JSON.stringify(N)+" resulted in "+ JSON.stringify(catingResult))
            counter=1000;
        }

        return catingResult;
    }
    getNormalsForCollision(): Vector2[]{
        const normals:Vector2[]= CalculationHelpes.getNormalsOfConnectedPoints(this.getTransformedPoints())
        const N:Vector2[]=normals.map(x=>{
            if(x.x<0 && x.y<0)
            {
                return new Vector2(Math.abs(x.x),Math.abs(x.y))
            }
            else if(x.x<0)
            {
                return new Vector2(-(x.x),-(x.y))
            }
            else
            return x
        })
        return normals;
    }



}

export default CollidablePolygon

