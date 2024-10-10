import type { Vector2 } from "three";

export namespace DrawHelpers{

   export function drawCircle(ctx: CanvasRenderingContext2D, x: number,y:number,radius:number,color:string="white")
   {
      
      // console.log("drawCircle: "+radius)
    ctx.fillStyle =color;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);     
    ctx.fill();
   }
   export function drawLine(ctx: CanvasRenderingContext2D, beginX: number,beginY:number, endX: number,endY:number,width:number=3,color:string="white")
   {

   
      ctx.beginPath();
      ctx.moveTo(beginX, beginY);
      ctx.lineTo(endX, endY);
      ctx.lineWidth = width;
      ctx.strokeStyle = color;
      ctx.lineCap = "round";
      ctx.stroke();
   }

   export function drawLines(ctx: CanvasRenderingContext2D,points:Vector2[],width:number=3,color:string="white",opened:boolean=false){
      if(points.length<2)
         throw "lines should have at least 2 points"
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      for (let index = 1; index < points.length; index++) {
         ctx.lineTo(points[index].x, points[index].y);
      }
      if(!opened)
      ctx.lineTo(points[0].x, points[0].y);
      ctx.lineWidth = width;
      ctx.strokeStyle = color;
      ctx.lineCap = "round";
      ctx.stroke();
   }

   export function drawShape(ctx: CanvasRenderingContext2D,points:Vector2[],color:string="white"){
      if(points.length<3)
         throw "shape should have at least 3 points"
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      for (let index = 1; index < points.length; index++) {
         ctx.lineTo(points[index].x, points[index].y);
      }
      ctx.fillStyle = color;
      ctx.fill();
   }
}