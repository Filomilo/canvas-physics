import type { Vector2 } from "three";
import type { IMouseReactive } from "./IMouseReactive";

export interface IHoverable extends IMouseReactive{
    isHoveredOver: any;
    onHover():void;
    onUnHover(): void;
}

export function implementsHoverable(obj: any): boolean {
    return (
      typeof obj.isHoveredOver === "boolean" &&
      typeof obj.onUnHover === "function" &&
      typeof obj.onHover === "function"
    );
  }

  