import { Vector2 } from "three";
import { CalculationHelpes, minMax } from "../Helpers/CalculationHelpes";
import { ICollidable } from "../Interfaces/ICollidable";
import Polygon from "./Polygon";

class CollidablePolygon extends Polygon implements ICollidable{
    castObjectOntoNormal(N: Vector2): minMax {
        return CalculationHelpes.getMinMaxOfPointsOnAxis(this.getTransformedPoints(),N)
    }
    getNormalsForCollision(): Vector2[]{
        return CalculationHelpes.getNormalsOfConnectedPoints(this.getTransformedPoints())
    }



}

export default CollidablePolygon

