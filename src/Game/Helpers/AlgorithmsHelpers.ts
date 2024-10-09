import { Vector2 } from "three";

export namespace AlgorithmsHelpers{
    export function isPointWithinShape(point:Vector2, shape: Vector2[]):boolean
   {
        
        if(shape.length<3)
            throw "amount of points houdl be at least 3"
        const shapeCopy=[...shape, shape[0]];
        const n=shapeCopy.length;
        let is_in=false;
        for (let index = 0; index < n-1; index++) {
        
               const a= shapeCopy[index]
               const b= shapeCopy[index+1]
            

            if(
                point.y<a.y != point.y<b.y
                && point.x < (b.x-a.x) * (point.y-a.y) / (b.y-a.y) + a.x
            )
            {
                is_in=!is_in;
            }
            
        }
        return is_in;
   }
}