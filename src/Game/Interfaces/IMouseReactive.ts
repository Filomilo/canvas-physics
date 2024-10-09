import type { Vector2 } from "three";

export interface IMouseReactive{
    isMouseOn(mousePosition: Vector2 ): boolean
    mouseOnState: boolean;
}

export function implementsMouseReactive(obj: any): boolean {
    return (
      typeof obj.mouseOnState === "boolean" &&
      typeof obj.isMouseOn === "function"
    );
  }