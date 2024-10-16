import { Vector2 } from "three";
import Game from "../Game";
import ISimulatable from "../Interfaces/ISimulatable";
import { GameConfig } from "../GameConfig";

class SimulationController{

    private _game: Game;

    constructor(game: Game)
    {
this._game=game;
    }

    public simulate()
    {
        this._game._objectReferenceController.SimulatableObjects.forEach((element: ISimulatable) => {
            if(element.IsSimulatable)
            {

                this.applyGravity(element)
                this.applyVelocity(element)
            }
        });
    }


    private applyVelocity(simulateble: ISimulatable)
    {
        simulateble.move(simulateble.Velocity);
    }
    private applyGravity(simulateble: ISimulatable)
    {
        this.applyForce(simulateble,new Vector2(0,GameConfig.Gravity),GameConfig.SimulationTimeStep)
    }
    private applyForce(simulatable:ISimulatable,vel: Vector2, dt: number)
{
    simulatable.Velocity.add(vel.multiply(new Vector2(dt,dt)));
}
}

export default SimulationController;