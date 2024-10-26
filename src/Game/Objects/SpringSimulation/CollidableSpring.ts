import { ICollidable } from "@/Game/Interfaces/ICollidable";
import CollidableSpringLine from "./CollidableSpringLine";
import Spring from "./Spring"
import SpingNode from "./SpingNode";

export default class CollidableSpring extends Spring {
    public addSpringNode(node: SpingNode){
        if(!this.game)
            throw "first spring needs to be asdded to game controller"
        if(this._nodes.length>0)
        {
            const line: CollidableSpringLine=new CollidableSpringLine(
                this._nodes[this._nodes.length-1]
                ,node
            );
        
            line.game=this.game;
            this.game?._objectReferenceController.addCollider(line as ICollidable)
            this._lines.push(line)
        }
        node.game=this.game;
        this._nodes.push(node)
    }
}