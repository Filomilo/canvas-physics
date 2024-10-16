import type { Vector2 } from "three";
import type { IMouseReactive } from "./IMouseReactive";

export interface ICollidable {

}

export function implementsHoverable(obj: any): boolean {
    return (
        true
    //   typeof obj.isHoveredOver === "boolean" &&
    //   typeof obj.onUnHover === "function" &&
    //   typeof obj.onHover === "function"
    );
  }

  