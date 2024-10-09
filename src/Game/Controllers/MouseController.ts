import { Vector2 } from "three";

export enum MouseEvents{
    LEFTCLICK,
    PRESS,
    UNPRESS
}


export default class MouseController{


    _canvas:HTMLCanvasElement;
    private mousePosition: Vector2=new Vector2(0,0);
    private mouseDelta: Vector2=new Vector2(0,0);
    public events:MouseEvents[]=[]
    leftClick: boolean=false;
    leftPress: boolean=false;

    constructor(canvas:HTMLCanvasElement)
    {
        this._canvas=canvas;
    }


    public getMousePostion(): Vector2
    {
        const pos:Vector2=this.mousePosition;
        return pos;
    }

    public  getMouseDelta(): Vector2
    {
        const del:Vector2=this.mouseDelta;
        return del;
    }

    updateMousePosition(event: MouseEvent) {
        const rect = this._canvas.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

       
        this.mouseDelta.x+=mouseX-this.mousePosition.x;
        this.mouseDelta.y+=mouseY-this.mousePosition.y;
        // console.log("this.mouseDelta: "+JSON.stringify(this.mouseDelta))
        this.mousePosition.x=mouseX;
        this.mousePosition.y=mouseY;
        // if(event.button === 0)
        // {
        //     this.leftClick=true;
        // }
      }
   clerEvents(){

    // console.log("clerEvents")
        this.mouseDelta.x=0;
        this.mouseDelta.y=0;
        this.leftClick=false;
        // this.events=[];
    }

    addEvent(event: MouseEvents) {
        // console.log(event)
       this.events.push(event)
      }
    
}