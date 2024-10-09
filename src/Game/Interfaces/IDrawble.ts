export interface IDrawable{
    draw(ctx: CanvasRenderingContext2D): void;
    visible: boolean;
}

export function implementsDrawable(obj: any): boolean {
    return (
      typeof obj.visible === "boolean" &&
      typeof obj.draw === "function"
    );
  }

  